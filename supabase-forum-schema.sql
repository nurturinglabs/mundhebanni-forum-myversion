-- Mundhe Banni custom discussion forum v1
-- Run this in the Supabase SQL editor for the project.
-- It creates the native forum tables in the mundhe_banni schema.

set search_path to mundhe_banni, public;

create extension if not exists pgcrypto;

create table if not exists forum_categories (
  id serial primary key,
  slug text unique not null,
  name text not null,
  description text,
  color_hex text not null default '#888888',
  display_order int not null default 0,
  is_active boolean not null default true
);

insert into forum_categories (slug, name, description, color_hex, display_order) values
  ('fundraising', 'Fundraising', 'Term sheets, investor outreach, valuations, and raising capital', '#2456A0', 1),
  ('product', 'Product', 'Product strategy, roadmaps, user feedback, and building MVPs', '#5B3DB5', 2),
  ('legal', 'Legal', 'Incorporation, compliance, contracts, and IP for startups', '#1A7A4A', 3),
  ('marketing', 'Marketing', 'Growth, branding, SEO, and customer acquisition', '#C84B2F', 4),
  ('operations', 'Operations', 'Hiring, processes, vendor management, and scaling ops', '#374151', 5),
  ('technology', 'Technology', 'Engineering, architecture, AI tools, and tech stack decisions', '#9B3BB5', 6),
  ('general', 'General', 'Events, meetups, announcements, and general community chatter', '#888888', 7)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  color_hex = excluded.color_hex,
  display_order = excluded.display_order,
  is_active = true;

create table if not exists forum_topics (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null check (char_length(title) <= 255),
  body text not null,
  body_search tsvector generated always as (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(body, ''))
  ) stored,
  topic_type text not null default 'general'
    check (topic_type in ('question', 'announcement', 'idea', 'general')),
  category_id int references forum_categories(id) not null,
  author_id uuid references profiles(id) not null,
  group_id uuid references groups(id),
  is_pinned boolean not null default false,
  best_answer_reply_id uuid,
  view_count int not null default 0,
  reply_count int not null default 0,
  like_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_activity_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index if not exists idx_forum_topics_category on forum_topics(category_id);
create index if not exists idx_forum_topics_author on forum_topics(author_id);
create index if not exists idx_forum_topics_group on forum_topics(group_id);
create index if not exists idx_forum_topics_last_activity on forum_topics(last_activity_at desc);
create index if not exists idx_forum_topics_search on forum_topics using gin(body_search);

create table if not exists forum_replies (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid references forum_topics(id) on delete cascade not null,
  author_id uuid references profiles(id) not null,
  body text not null,
  like_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index if not exists idx_forum_replies_topic on forum_replies(topic_id);
create index if not exists idx_forum_replies_author on forum_replies(author_id);

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'fk_best_answer'
      and conrelid = 'mundhe_banni.forum_topics'::regclass
  ) then
    alter table forum_topics
      add constraint fk_best_answer
      foreign key (best_answer_reply_id) references forum_replies(id);
  end if;
end $$;

create table if not exists forum_likes (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade not null,
  topic_id uuid references forum_topics(id) on delete cascade,
  reply_id uuid references forum_replies(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint exactly_one_target check (
    (topic_id is not null and reply_id is null) or
    (topic_id is null and reply_id is not null)
  ),
  unique (profile_id, topic_id),
  unique (profile_id, reply_id)
);

create table if not exists forum_topic_tags (
  topic_id uuid references forum_topics(id) on delete cascade,
  tag_id int references interest_tags(id) on delete cascade,
  primary key (topic_id, tag_id)
);

create table if not exists forum_bookmarks (
  profile_id uuid references profiles(id) on delete cascade,
  topic_id uuid references forum_topics(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (profile_id, topic_id)
);

grant usage on schema mundhe_banni to anon, authenticated;
grant select on forum_categories to anon, authenticated;
grant select on forum_topics to anon, authenticated;
grant select on forum_replies to anon, authenticated;
grant select on forum_likes to anon, authenticated;
grant select on forum_topic_tags to anon, authenticated;
grant select on forum_bookmarks to authenticated;
grant insert, update, delete on forum_topics to authenticated;
grant insert, update, delete on forum_replies to authenticated;
grant insert, delete on forum_likes to authenticated;
grant insert, delete on forum_topic_tags to authenticated;
grant insert, delete on forum_bookmarks to authenticated;
grant usage, select on sequence forum_categories_id_seq to authenticated;

create or replace function forum_update_topic_reply_count()
returns trigger as $$
begin
  if (TG_OP = 'INSERT') then
    update forum_topics
    set reply_count = reply_count + 1,
        last_activity_at = now()
    where id = new.topic_id;
  elsif (TG_OP = 'DELETE') then
    update forum_topics
    set reply_count = greatest(reply_count - 1, 0)
    where id = old.topic_id;
  end if;
  return null;
end;
$$ language plpgsql security definer;

drop trigger if exists on_forum_reply_change on forum_replies;
create trigger on_forum_reply_change
  after insert or delete on forum_replies
  for each row execute procedure forum_update_topic_reply_count();

create or replace function forum_update_like_count()
returns trigger as $$
begin
  if (TG_OP = 'INSERT') then
    if new.topic_id is not null then
      update forum_topics set like_count = like_count + 1 where id = new.topic_id;
    else
      update forum_replies set like_count = like_count + 1 where id = new.reply_id;
    end if;
  elsif (TG_OP = 'DELETE') then
    if old.topic_id is not null then
      update forum_topics set like_count = greatest(like_count - 1, 0) where id = old.topic_id;
    else
      update forum_replies set like_count = greatest(like_count - 1, 0) where id = old.reply_id;
    end if;
  end if;
  return null;
end;
$$ language plpgsql security definer;

drop trigger if exists on_forum_like_change on forum_likes;
create trigger on_forum_like_change
  after insert or delete on forum_likes
  for each row execute procedure forum_update_like_count();

alter table forum_categories enable row level security;
alter table forum_topics enable row level security;
alter table forum_replies enable row level security;
alter table forum_likes enable row level security;
alter table forum_topic_tags enable row level security;
alter table forum_bookmarks enable row level security;

drop policy if exists "Categories are publicly readable" on forum_categories;
create policy "Categories are publicly readable" on forum_categories for select using (true);

drop policy if exists "Non-deleted topics are publicly readable" on forum_topics;
create policy "Non-deleted topics are publicly readable"
  on forum_topics for select using (deleted_at is null);

drop policy if exists "Authors and admins can read deleted topics" on forum_topics;
create policy "Authors and admins can read deleted topics"
  on forum_topics for select
  using (auth.uid() = author_id or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Logged-in users can create topics" on forum_topics;
create policy "Logged-in users can create topics"
  on forum_topics for insert with check (auth.uid() = author_id);

drop policy if exists "Authors and admins can update topics" on forum_topics;
create policy "Authors and admins can update topics"
  on forum_topics for update
  using (auth.uid() = author_id or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (true);

drop policy if exists "Non-deleted replies are publicly readable" on forum_replies;
create policy "Non-deleted replies are publicly readable"
  on forum_replies for select using (deleted_at is null);

drop policy if exists "Authors and admins can read deleted replies" on forum_replies;
create policy "Authors and admins can read deleted replies"
  on forum_replies for select
  using (auth.uid() = author_id or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Logged-in users can reply" on forum_replies;
create policy "Logged-in users can reply"
  on forum_replies for insert with check (auth.uid() = author_id);

drop policy if exists "Authors and admins can update replies" on forum_replies;
create policy "Authors and admins can update replies"
  on forum_replies for update
  using (auth.uid() = author_id or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (true);

drop policy if exists "Likes are publicly readable" on forum_likes;
create policy "Likes are publicly readable" on forum_likes for select using (true);

drop policy if exists "Users manage own likes" on forum_likes;
create policy "Users manage own likes" on forum_likes for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

drop policy if exists "Topic tags are publicly readable" on forum_topic_tags;
create policy "Topic tags are publicly readable" on forum_topic_tags for select using (true);

drop policy if exists "Topic authors manage own tags" on forum_topic_tags;
create policy "Topic authors manage own tags" on forum_topic_tags for all
  using (exists (select 1 from forum_topics t where t.id = forum_topic_tags.topic_id and t.author_id = auth.uid()))
  with check (exists (select 1 from forum_topics t where t.id = forum_topic_tags.topic_id and t.author_id = auth.uid()));

drop policy if exists "Users manage own bookmarks" on forum_bookmarks;
create policy "Users manage own bookmarks" on forum_bookmarks for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

do $$
begin
  alter table xp_events drop constraint if exists xp_events_action_type_check;
  alter table xp_events add constraint xp_events_action_type_check
    check (action_type in (
      'discussion_started','best_answer_received','event_rsvp',
      'group_joined','resource_uploaded','resource_approved',
      'event_attended','profile_completed','referral_signup',
      'reply_posted'
    ));
exception when undefined_table then
  raise notice 'xp_events table not found; skipping XP constraint update.';
end $$;
