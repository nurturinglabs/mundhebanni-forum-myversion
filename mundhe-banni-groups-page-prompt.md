# Mundhe Banni — Groups Page — Qwikbuild Agent Prompt

> **How to use this:** Feed each section to the qwikbuild agent one block at a time. Start with the Design System, then build top to bottom. Do not paste the entire file at once.

---

## Design System (apply globally)

```
Font family: Inter
Primary text color: #1D2B53
Accent / orange: #E58A2B
Background: #FFFFFF
Card background: white, box-shadow: 0 1px 4px rgba(0,0,0,0.08)
Border color: #EAEAEA
Border radius on all cards: 8px
Max page width: 1440px, centered
Page horizontal padding: 48px
Section vertical padding: 48px 0

Group category colors:
  Founder / General: #2456A0 (blue)
  Agritech: #1A7A4A (green)
  Fintech: #374151 (dark gray)
  Women Entrepreneurs: #9B3BB5 (purple)
  SaaS / Tech: #5B3DB5 (indigo)
  Edtech: #B8760A (amber)
  Healthcare: #C84B2F (red)

Privacy type colors:
  Public: #1A7A4A (green)
  Private: #C84B2F (red)
  Invite-Only: #B8760A (amber)
```

---

## Section 1 — Page Header & Breadcrumb

```
Build a page header section. White background. Border-bottom: 1px solid #EAEAEA.
Padding: 20px 48px 24px 48px.

ROW 1 — Breadcrumb:
  Home > Groups
  "Home" — font-size: 13px, color: #E58A2B, clickable
  " > " — color: #AAAAAA
  "Groups" — font-size: 13px, color: #888888, not clickable
  Margin-bottom: 12px

ROW 2 — Title row (two-column, space-between):
  LEFT:
    Title: "Founder Groups"
    Font-size: 32px, font-weight: 800, color: #1D2B53, margin-bottom: 6px
    Subtitle: "Join focused communities of Karnataka founders, operators, and builders
    working in the same space as you."
    Font-size: 15px, color: #666666, max-width: 520px

  RIGHT (vertically centered):
    Stats row — 3 items with vertical dividers (1px #EAEAEA), gap: 24px:
      "82+" bold #1D2B53 + "Active Groups" gray 12px
      "5,200+" bold #1D2B53 + "Members" gray 12px
      "340+" bold #1D2B53 + "Discussions This Week" gray 12px

    Button below stats (right-aligned, margin-top: 12px):
      "＋ Create Group"
      Background: #E58A2B, color: white, height: 40px, padding: 0 20px,
      border-radius: 8px, font-weight: 600, font-size: 14px
      Visible to: Founder, SME, and Admin roles
```

---

## Section 2 — Featured Group of the Week Banner

```
Build a featured group hero banner. Sits directly below the page header.
Margin: 0 48px 28px. Border-radius: 12px. Overflow: hidden.
Background: linear-gradient from #1D2B53 (left) to #2E4480 (right). Padding: 32px 40px.

TWO-COLUMN LAYOUT (65/35 split):

LEFT COLUMN:
  Row 1: Small pill label:
    Background: rgba(229,138,43,0.2), color: #E58A2B
    Text: "🔥 Featured Group of the Week"
    Font-size: 11px, font-weight: 700, letter-spacing: 0.07em, text-transform: uppercase
    Padding: 4px 10px, border-radius: 20px, margin-bottom: 14px

  Row 2: Group name:
    "Bengaluru Founders"
    Font-size: 26px, font-weight: 800, color: white, margin-bottom: 6px

  Row 3: Description:
    "The largest founder community in Bengaluru — a space for early and growth-stage
    founders to share wins, ask hard questions, and connect with peers."
    Font-size: 14px, color: rgba(255,255,255,0.7), max-width: 420px, line-height: 1.6

  Row 4: Meta chips (margin-top: 14px, gap: 20px):
    👥 "1.2K Members" — color: rgba(255,255,255,0.7), font-size: 13px
    💬 "Active discussions" — same style
    📍 "Bengaluru" — same style
    🔓 "Public Group" — color: #7EEFC0, font-weight: 600, font-size: 13px

  Row 5: Buttons (margin-top: 20px, gap: 12px):
    "Join Group" — background: #E58A2B, color: white, height: 42px,
      padding: 0 28px, border-radius: 8px, font-weight: 700
    "View Group →" — transparent bg, white color,
      border: 1.5px solid rgba(255,255,255,0.4), height: 42px,
      padding: 0 20px, border-radius: 8px, font-weight: 500

RIGHT COLUMN:
  Active members preview: stacked member avatar circles
    Show 6 member avatars (40px each) arranged in a 3×2 cluster
    Below: "+ 1,180 members" — white text, font-size: 13px, text-align: center

  Recent activity teaser (margin-top: 16px):
    Background: rgba(255,255,255,0.1), border-radius: 8px, padding: 12px 14px
    Title: "💬 Latest Discussion" — font-size: 11px, color: rgba(255,255,255,0.5),
    text-transform: uppercase, letter-spacing: 0.06em, margin-bottom: 6px
    Body: "How SaaS founders are navigating sales cycles in 2025"
    Font-size: 13px, color: white, font-weight: 500
    "24 replies · 2h ago" — font-size: 11px, color: rgba(255,255,255,0.5), margin-top: 4px
```

---

## Section 3 — Recommended Groups (Personalised)

```
Build a "Recommended for You" horizontal carousel section.
White background. Padding: 28px 48px.
Border-bottom: 1px solid #EAEAEA.

HEADER ROW:
  Left: "Recommended for You" — font-size: 18px, font-weight: 700, color: #1D2B53
  Subtext below: "Based on your interests and location" — font-size: 13px, color: #888888
  Right: "Browse All →" — orange link, font-size: 13px

CAROUSEL ROW (margin-top: 16px):
  Horizontal row, overflow-x: auto (hidden scrollbar), gap: 16px
  Left arrow "‹" and Right arrow "›" navigation buttons (gray circles, 36px)

  Show 4 compact recommendation cards:
    Each card: border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px 18px,
    min-width: 240px, background: white
    Hover: border-color: #E58A2B, box-shadow: 0 2px 8px rgba(229,138,43,0.12)

    Row 1: Group icon circle (40px, colored bg, emoji/initial) + Group name (font-weight: 700, 14px)
    Row 2: "N Members · Activity status" — gray 12px
    Row 3: "Why recommended" tag — small pill:
      Background: #FFF4E6, color: #E58A2B, font-size: 11px,
      padding: 2px 8px, border-radius: 4px
      Text: e.g. "Matches: SaaS" or "Near you: Bengaluru"
    Row 4: "Join Group" button — full width, orange outline, height: 32px, border-radius: 6px,
      font-size: 12px, font-weight: 600, margin-top: 10px

  Recommended groups:
    1. 🏙️ blue | "Bengaluru Founders" | "1.2K Members · 🔥 Active" | "Near you: Bengaluru"
    2. 💻 indigo | "SaaS Builders Karnataka" | "840 Members · 🔥 Active" | "Matches: SaaS"
    3. 💰 dark gray | "Fintech Builders" | "1.1K Members · 🔥 Active" | "Matches: Fintech"
    4. 🌿 green | "Agritech Karnataka" | "860 Members · Active" | "Matches: Agritech"
```

---

## Section 4 — Tab Navigation & Search / Filter Bar

```
Build the tab bar and filter row. White background. Border-bottom: 1px solid #EAEAEA.
Padding: 0 48px.

ROW 1 — Tabs:
  4 tabs in a horizontal row:
    Tab 1: "Featured" — active by default
    Tab 2: "My Groups" — shows badge count e.g. "(3)"
    Tab 3: "Browse All"
    Tab 4: "Recommended"

  Active tab: color: #E58A2B, border-bottom: 3px solid #E58A2B
  Inactive: color: #888888, border-bottom: 3px solid transparent
  Padding per tab: 16px 20px, font-size: 14px, font-weight: 500

  Right side of tab row (margin-left: auto):
    Sort dropdown:
      Label "Sort:" gray 13px
      Options: Most Active | Newest | Most Members | A-Z
      Height: 34px, border: 1px solid #DDDDDD, border-radius: 6px,
      padding: 0 10px, font-size: 13px

ROW 2 — Filter bar (padding: 14px 0, border-top: 1px solid #F0F0F0):
  Horizontal row, gap: 12px

  Item 1 — Search (flex: 1, max-width: 360px):
    Placeholder: "Search groups by name or keyword…"
    Height: 40px, border: 1.5px solid #DDDDDD, border-radius: 8px
    Padding-left: 36px (search icon inside), font-size: 14px

  Item 2 — Category dropdown:
    Label: "Category:" gray 13px
    Options: All Categories | Sector-based | Geography-based |
      Women Founders | Students | Investors
    Height: 40px, same border style

  Item 3 — Location dropdown:
    Label: "Location:" gray 13px
    Options: All Cities | Bengaluru | Mysuru | Mangaluru | Hubballi | Belagavi
    Same style

  Item 4 — Privacy filter:
    Label: "Privacy:" gray 13px
    Options: All | Public | Private | Invite-Only
    Same style

  Item 5 — Activity filter:
    Label: "Activity:" gray 13px
    Options: All | 🔥 Active | Quiet | New
    Same style

  Result count:
    "Showing 82 groups" — font-size: 13px, color: #888888, padding-top: 10px
```

---

## Section 5 — Trending Groups Carousel

```
Build a Trending / Most Active groups horizontal carousel.
White background. Padding: 24px 48px 0.

HEADER ROW:
  Left: "🔥 Trending This Week" — font-size: 16px, font-weight: 700, color: #1D2B53
  Right: Arrow buttons "‹" and "›" (gray circles, 32px each)

CAROUSEL (margin-top: 14px):
  Horizontal row, 5 compact cards visible, overflow-x: scroll hidden, gap: 14px

  Each compact trending card:
    Border: 1px solid #EAEAEA, border-radius: 8px, padding: 14px 16px
    min-width: 200px, background: white
    Hover: border-color: #E58A2B

    Row: Rank number (font-size: 18px, font-weight: 800, color: #EAEAEA, margin-right: 10px)
      + Group icon circle (36px) + Group name (font-weight: 600, 13px, color: #1D2B53)
    Row 2: "N new posts this week" — font-size: 11px, color: #888888, margin-top: 4px

  5 trending groups:
    1. 🏙️ Bengaluru Founders — "48 new posts"
    2. 💰 Fintech Builders — "32 new posts"
    3. 👩 Women Entrepreneurs — "28 new posts"
    4. 🌿 Agritech Karnataka — "21 new posts"
    5. 💻 SaaS Builders Karnataka — "19 new posts"
```

---

## Section 6 — Groups Grid (Main Content Area)

```
Build the main groups grid. White background. Padding: 28px 48px 64px.

Default: 3 columns, gap: 24px.
(2 columns on tablet, 1 column on mobile)

Build 9 group cards total.

---

GROUP CARD — border: 1px solid #EAEAEA, border-radius: 8px,
overflow: hidden, background: white
Hover: box-shadow 0 4px 16px rgba(0,0,0,0.1), translateY(-2px), transition: all 0.2s

  TOP — Banner image area (height: 100px, overflow: hidden, position: relative):
    Group banner image (width: 100%, height: 100px, object-fit: cover)
    Use a muted, relevant photo per group theme (e.g. city skyline for Bengaluru Founders,
    farming tech for Agritech, etc.)
    Gradient overlay: linear-gradient(to top, rgba(29,43,83,0.6), transparent)

    PRIVACY BADGE overlaid on TOP-RIGHT:
      Pill: padding: 3px 8px, border-radius: 4px, font-size: 10px, font-weight: 700
      Public: bg #E0F5EC, color #1A7A4A, text: "🔓 Public"
      Private: bg #FDECEA, color #C84B2F, text: "🔒 Private"
      Invite-Only: bg #FEF3D8, color #8A6200, text: "🔑 Invite Only"

    ACTIVITY BADGE overlaid on BOTTOM-LEFT:
      "🔥 Active" — bg: rgba(0,0,0,0.5), color: #FF9F1C, font-size: 10px,
      font-weight: 700, padding: 3px 8px, border-radius: 4px
      OR "Quiet" in gray

  CARD BODY — padding: 16px:

    ROW 1 — Group logo + name:
      Group logo circle (48px, colored background, letter or emoji):
        Position: margin-top: -24px (overlaps the banner), border: 3px solid white
      Group name (margin-top: 8px): font-size: 16px, font-weight: 700, color: #1D2B53

    ROW 2 — Category badge:
      Colored category pill:
        Background: light category tint, text: category name
        Font-size: 11px, font-weight: 600, padding: 2px 8px, border-radius: 4px
        Margin-bottom: 8px

    ROW 3 — Short description:
      Font-size: 13px, color: #666666, line-height: 1.5
      Max 2 lines with ellipsis

    ROW 4 — Location tag (for geography-based groups):
      📍 "Bengaluru" — font-size: 12px, color: #888888, margin-top: 6px

    ROW 5 — Member count + last active (margin-top: 10px):
      Left: 4 overlapping member avatars (24px each, -6px margin) + "N Members" gray 12px
      Right: "Active 2h ago" OR "Active 3d ago" — gray 11px

    DIVIDER: 1px solid #F0F0F0, margin: 12px 0

    ROW 6 — CTA row:
      Left: "💬 N discussions" — gray 12px
      Right: Join button — 3 states:
        Not joined: "Join Group" — orange filled, height: 32px, padding: 0 14px,
          border-radius: 6px, font-size: 12px, font-weight: 600, bg: #E58A2B, color: white
        Joined: "✓ Joined" — bg: #E0F5EC, color: #1A7A4A, border: 1px solid #1A7A4A,
          same dimensions
        Pending (Invite-only): "Pending" — bg: #FFF4E6, color: #E58A2B,
          border: 1px solid #E58A2B, same dimensions

THE 9 GROUPS:

  Card 1:
    Category: Founder/General | Logo bg: #2456A0 | Name: "Bengaluru Founders"
    Privacy: Public | Activity: 🔥 Active | Location: Bengaluru
    Description: "Bengaluru's largest founder community for early and growth-stage startups."
    Members: 1.2K | Last active: 2h ago | Discussions: 48 | Button: Joined

  Card 2:
    Category: Agritech | Logo bg: #1A7A4A | Name: "Agritech Karnataka"
    Privacy: Public | Activity: 🔥 Active | Location: Bengaluru
    Description: "Building the future of farming and rural commerce across Karnataka."
    Members: 860 | Last active: 5h ago | Discussions: 21 | Button: Join Group

  Card 3:
    Category: Fintech | Logo bg: #374151 | Name: "Fintech Builders"
    Privacy: Public | Activity: 🔥 Active | Location: Bengaluru
    Description: "Fintech founders, product managers, and engineers building financial products."
    Members: 1.1K | Last active: 1h ago | Discussions: 32 | Button: Join Group

  Card 4:
    Category: Women Founders | Logo bg: #9B3BB5 | Name: "Women Entrepreneurs"
    Privacy: Public | Activity: 🔥 Active | Location: Karnataka
    Description: "A safe, supportive space for women building businesses across Karnataka."
    Members: 950 | Last active: 3h ago | Discussions: 28 | Button: Join Group

  Card 5:
    Category: SaaS/Tech | Logo bg: #5B3DB5 | Name: "SaaS Builders Karnataka"
    Privacy: Public | Activity: Active | Location: Bengaluru
    Description: "Product founders and engineers building SaaS for global and Indian markets."
    Members: 840 | Last active: 6h ago | Discussions: 19 | Button: Join Group

  Card 6:
    Category: Founder/General | Logo bg: #2456A0 | Name: "Mysuru Founders"
    Privacy: Public | Activity: Active | Location: Mysuru
    Description: "Founders and early-stage entrepreneurs building from Mysuru."
    Members: 320 | Last active: 1d ago | Discussions: 8 | Button: Join Group

  Card 7:
    Category: Edtech | Logo bg: #B8760A | Name: "Edtech Karnataka"
    Privacy: Public | Activity: Quiet | Location: Karnataka
    Description: "Founders working on education products for K-12, higher ed, and skilling."
    Members: 280 | Last active: 3d ago | Discussions: 5 | Button: Join Group

  Card 8:
    Category: Healthcare | Logo bg: #C84B2F | Name: "HealthTech Founders"
    Privacy: Private | Activity: Active | Location: Bengaluru
    Description: "A private community for founders building in healthcare and medtech."
    Members: 190 | Last active: 8h ago | Discussions: 14 | Button: Join Group

  Card 9:
    Category: Founder/General | Logo bg: #2456A0 | Name: "Startup Legal & Finance Circle"
    Privacy: Invite-Only | Activity: Active | Location: Karnataka
    Description: "Closed group for founders navigating fundraising, legal, and finance issues."
    Members: 145 | Last active: 4h ago | Discussions: 11 | Button: Pending

LOAD MORE button (centered, margin-top: 32px):
  "Load More Groups" — white bg, 1.5px solid #DDDDDD, color: #555555
  Height: 44px, padding: 0 32px, border-radius: 8px, font-size: 14px
```

---

## Section 7 — Group Detail Page

```
Build the Group Detail page. Opens when a user clicks a group card.
White background. Max-width: 1200px, centered.

BREADCRUMB: Home > Groups > Bengaluru Founders
Same breadcrumb style as page header.

---

GROUP HEADER (full-width, no horizontal padding):
  Banner image: full width, height: 200px, object-fit: cover
  (Use a large, wide photo representing Bengaluru founders — startup event, coworking, etc.)
  Gradient overlay on bottom: linear-gradient(to top, rgba(29,43,83,0.8), transparent)

  HEADER CONTENT overlaid on bottom of banner (padding: 0 48px 20px):
    Row: Group logo circle (72px, border: 4px solid white, margin-top: -36px above banner baseline)
      + Group name (font-size: 26px, font-weight: 800, color: white)
      + Privacy badge pill (white bg, colored text)
      + Activity chip "🔥 Active" (orange pill)
    Below: Member count (white 14px) + "Managed by [Admin Name]" (white 13px opacity 0.7)

  HEADER ACTION BAR (white background, border-bottom: 1px solid #EAEAEA, padding: 14px 48px):
    Left side:
      Joined state: "✓ You're a member" (green text) + "Leave Group" link (gray 12px)
      Not joined: "Join Group" button (orange filled, height: 38px, padding: 0 20px)
    Right side (gap: 12px):
      "🔔 Notifications" toggle button — white bg, gray border
      "👤 Invite Members" button — white bg, gray border
      Share icon button — white bg, gray border

---

TABS NAVIGATION (sticky, white bg, border-bottom: 1px solid #EAEAEA, padding: 0 48px):
  5 tabs:
    Tab 1: "Discussions" — active by default (orange underline)
    Tab 2: "Events"
    Tab 3: "Members"
    Tab 4: "Files"
    Tab 5: "About"

  Tab style: padding: 16px 20px, font-size: 14px, font-weight: 500
  Active: color: #E58A2B, border-bottom: 3px solid #E58A2B
  Inactive: color: #888888

---

TAB 1 — DISCUSSIONS TAB (default view):
Padding: 32px 48px. TWO-COLUMN LAYOUT (70/30 split, gap: 32px)

LEFT — Discussion feed:
  PINNED POST (if exists):
    Background: #FFF8F0, border: 1px solid #FFD9A8, border-radius: 8px, padding: 16px 20px
    "📌 Pinned" label — orange, font-size: 11px, font-weight: 700, margin-bottom: 8px
    Post title: font-weight: 700, 15px, color: #1D2B53, clickable link
    Short excerpt: 1 line, gray 13px
    Meta: Author avatar + name + time posted

  SORT ROW (margin-bottom: 16px):
    Tabs: Latest | Most Liked | Unanswered — same tab style as page tabs but smaller
    Right: "Unread (3)" badge in orange

  "＋ Start Discussion in This Group" CTA button:
    Full width, bg: #FFF4E6, border: 1.5px dashed #E58A2B, color: #E58A2B
    Height: 44px, border-radius: 8px, font-weight: 600, font-size: 14px

  DISCUSSION LIST (margin-top: 16px):
    Show 5 discussion thread rows:
    Each row: border-bottom: 1px solid #F0F0F0, padding: 16px 0

      Row structure:
        LEFT: Post type icon circle (36px):
          Question: blue circle, ? icon
          Announcement: orange circle, 📢 icon
          Idea: purple circle, 💡 icon
          General: gray circle, 💬 icon

        CENTER:
          Post title: font-weight: 600, 15px, color: #1D2B53, clickable
          Tags row: up to 3 tag pills (same style as other pages) — e.g. "Fundraising", "Legal"
          Meta: Author avatar (20px) + name (gray 12px) + "· 2h ago"

        RIGHT (right-aligned, gap: 8px vertical):
          Upvote count: "▲ 24" — gray 13px
          Reply count: "💬 18" — gray 13px

        SPECIAL BADGES (shown inline after title):
          "Best Answer" badge: green pill "✓ Answered"
          Unread badge: orange dot before title for new posts
          Expert badge: "✓ Expert" green tag on author name if SME role

    Sample discussions:
      1. Type: Question | "How SaaS founders are navigating sales cycles in 2025?"
         Tags: SaaS, Sales | Author: Arjun N. | 2h ago | ▲24 | 💬18 | ✓ Answered
      2. Type: Announcement | "Our next meetup is confirmed — May 24th at Koramangala Social"
         Tags: Events | Author: Admin | 5h ago | ▲56 | 💬12 | 📌 Pinned
      3. Type: Idea | "What if we did monthly pitch practice sessions?"
         Tags: Community | Author: Priya K. | 1d ago | ▲32 | 💬21
      4. Type: General | "Looking for a co-founder in the logistics space"
         Tags: Co-founder | Author: Rahul D. | 2d ago | ▲15 | 💬7
      5. Type: Question | "Best approach for pre-seed fundraising in India 2025?"
         Tags: Fundraising | Author: Meera S. | 3d ago | ▲41 | 💬29

    "Load More Discussions" — orange text link, centered, font-size: 14px, margin-top: 16px

RIGHT — Group sidebar:
  ABOUT WIDGET (border: 1px solid #EAEAEA, border-radius: 8px, padding: 18px, margin-bottom: 16px):
    Title: "About This Group" — font-size: 14px, font-weight: 700, color: #1D2B53, margin-bottom: 10px
    Description text: 2–3 lines (same group description from card)
    Stats row (margin-top: 12px):
      👥 "1,200 Members" | 💬 "48 posts/week" | 🗓 "Est. Jan 2024"
      Font-size: 12px, color: #666666, line-height: 2

  ADMINS WIDGET (border: 1px solid #EAEAEA, border-radius: 8px, padding: 18px, margin-bottom: 16px):
    Title: "Admins & Moderators" — same title style
    Show 2 admin/mod rows:
      Each: Avatar (32px) + name (font-weight: 600, 13px) + role badge
      "Admin" badge: orange pill | "Moderator" badge: blue pill
      Font-size: 11px, padding: 2px 6px, border-radius: 4px

  RECENT MEMBERS WIDGET (border: 1px solid #EAEAEA, border-radius: 8px, padding: 18px):
    Title: "Recently Joined" — same title style
    Row of 6 overlapping member avatars (36px, -8px margin)
    "+ 1,194 more members" — gray 12px, margin-top: 8px
    "View All Members →" — orange link, font-size: 13px

---

TAB 2 — EVENTS TAB:
Padding: 28px 48px.

HEADER ROW:
  Left: "Group Events" — font-size: 18px, font-weight: 700
  Right: "＋ Create Event" button — orange filled, visible to Group Admin only
  Below: Toggle tabs: "Upcoming" (active) | "Past"

EVENTS LIST — 3 compact event rows:
  Each row: border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px 20px,
  margin-bottom: 12px, display: flex, align-items: center, gap: 16px

    Left: Date block (48px × 52px, bg: #F7F7F7, border-radius: 8px, text-align: center):
      Month: "MAY" font-size: 10px, font-weight: 700, color: #888888, letter-spacing: 1px
      Day: "24" font-size: 24px, font-weight: 800, color: #1D2B53, line-height: 1

    Center:
      Event title: font-weight: 600, 15px, color: #1D2B53, clickable
      Meta: 📅 date/time · 📍 location — font-size: 13px, color: #666666
      RSVP status badge (if RSVPd): "✅ Going" or "⭐ Interested" — small pill

    Right: RSVP button (same style as Events page card)

  Sample group events:
    1. May 24 | "Bengaluru Founder Meetup" | Sat, 5:00 PM · Koramangala Social | RSVP Free | ✅ Going
    2. Jun 8 | "SaaS AMA Session" | Sun, 4:00 PM · Online | RSVP Free
    3. Jun 22 | "Pitch Night — Demo Day" | Sun, 3:00 PM · BHIVE Workspace | RSVP Free

  "View All Events →" — orange link, font-size: 13px, margin-top: 8px

---

TAB 3 — MEMBERS TAB:
Padding: 28px 48px.

HEADER ROW:
  Search input: "Search members by name or username…"
  Height: 40px, width: 320px, border: 1.5px solid #DDDDDD, border-radius: 8px, padding-left: 36px

  Right side: "Invite Member" button — outlined orange
  Member count: "1,200 members total" — gray 13px below search

MEMBERS LIST (margin-top: 16px):
  Show 8 member rows (paginated 20/page later):
  Each row: border-bottom: 1px solid #F0F0F0, padding: 14px 0, display: flex, align-items: center

    Left: Avatar (40px circle, colored placeholder) + two lines:
      Line 1: Display name — font-weight: 600, 14px, color: #1D2B53
      Line 2: Role badge pill + "Joined Jan 2025" — gray 12px

    Center (margin-left: auto): Activity score chip:
      "⭐ 142 XP" — bg: #FFF4E6, color: #E58A2B, font-size: 11px,
      font-weight: 600, padding: 2px 8px, border-radius: 4px

    Right: Action button (visible to Admin only):
      "···" overflow menu (on hover) with options:
        Make Moderator | Remove from Group
      Regular members: no action button shown

  Badge types on member names:
    Admin: "👑 Admin" — orange pill
    Moderator: "🛡 Mod" — blue pill
    SME: "✓ Expert" — green pill
    Regular: no badge

  Sample members:
    1. "Vikram Anand" — Admin 👑 | Founder | Joined Jan 2024 | ⭐ 842 XP
    2. "Sneha Patil" — Mod 🛡 | Founder | Joined Feb 2024 | ⭐ 621 XP
    3. "Dr. Ravi Kumar" — ✓ Expert | SME | Joined Mar 2024 | ⭐ 540 XP
    4. "Arjun Nair" — Founder | Joined Apr 2024 | ⭐ 412 XP
    5. "Priya Kamath" — Founder | Joined May 2024 | ⭐ 298 XP
    6. "Rahul Desai" — Founder | Joined Jun 2024 | ⭐ 187 XP
    7. "Meera Shetty" — Founder | Joined Jul 2024 | ⭐ 145 XP
    8. "Karthik Rao" — Founder | Joined Aug 2024 | ⭐ 98 XP

---

TAB 4 — FILES TAB:
Padding: 28px 48px.

HEADER ROW:
  Left: "Shared Files" — font-size: 18px, font-weight: 700
  Right: "Upload File" button — outlined orange (visible to Group Admin)

FILES LIST (margin-top: 16px):
  Each row: border: 1px solid #EAEAEA, border-radius: 8px, padding: 14px 18px,
  margin-bottom: 10px, display: flex, align-items: center, gap: 16px

    Left: File type icon (40px, colored square bg, white icon):
      PDF: red bg | PPTX: orange bg | XLSX: green bg | DOC: blue bg

    Center:
      File name: font-weight: 600, 14px, color: #1D2B53, clickable
      Meta: Uploader name + upload date + file size — gray 12px, margin-top: 2px

    Right:
      Download count: "⬇ 42" — gray 12px
      Download button: "⬇ Download" — outlined orange, height: 32px, padding: 0 12px,
        border-radius: 6px, font-size: 12px, font-weight: 600

  Sample files:
    1. PDF red | "Pitch Deck Template — MB Edition.pdf" | Uploaded by Admin · Jan 2025 · 2.4MB | ⬇ 312
    2. PPTX orange | "Startup Legal Checklist 2025.pptx" | Uploaded by Admin · Feb 2025 · 1.8MB | ⬇ 218
    3. XLSX green | "KPI Tracker for Early-Stage Startups.xlsx" | Uploaded by Vikram A. · Mar 2025 · 0.9MB | ⬇ 167

---

TAB 5 — ABOUT TAB:
Padding: 28px 48px. Max-width: 680px.

Full description of the group.
Group rules / community guidelines (numbered list).
Tags / interests associated with the group.
Contact or enquiry info for the admin.

---

ADMIN MODERATION PANEL (shown only to Group Admin — floating bottom-right button):
  Orange circle FAB button (56px, border-radius: 50%, box-shadow):
    ⚙️ icon, 24px white
  On click: opens right-side drawer with:
    - Pin / Unpin a post
    - Remove member
    - Invite member
    - Edit group details link
    - "Manage Group" full admin link
```

---

## Section 8 — Create Group Form

```
Build the Create New Group full page. Accessible from "+ Create Group" in header.
Visible to Founder, SME, and Admin roles.
Max-width: 760px, centered, padding: 48px.

BREADCRUMB: Home > Groups > Create Group

PAGE TITLE: "Create a New Group"
Font-size: 28px, font-weight: 800, color: #1D2B53, margin-bottom: 6px
Subtitle: "Groups are reviewed and approved by the Mundhe Banni admin team before going live."
Font-size: 14px, color: #666666, margin-bottom: 28px

REVIEW NOTE BOX:
  Background: #F0F7FF, border: 1px solid #BDD7F5, border-radius: 8px,
  padding: 14px 18px, margin-bottom: 28px
  Icon: ℹ️ + text: "Your group submission will be reviewed. You'll receive an email once approved.
  You can use the platform normally while your group is pending review."
  Font-size: 13px, color: #1A4A80

FORM SECTIONS:

  SECTION A — Group Identity
  Heading: "Group Identity"
  Font-size: 15px, font-weight: 700, color: #1D2B53,
  border-bottom: 2px solid #E58A2B, padding-bottom: 8px, margin-bottom: 20px

  Field 1 — Group Name:
    Label: "Group Name *"
    Input: full width, height: 44px, border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 0 14px
    Placeholder: "e.g. Bengaluru SaaS Founders"
    Character counter: "0 / 60"

  Field 2 — Short Description:
    Label: "Short Description *"
    Input: full width, height: 44px
    Placeholder: "One line — what is this group about? (shows on group card)"
    Character counter: "0 / 120"

  Field 3 — Full Description:
    Label: "Full Description"
    Textarea: height 120px
    Placeholder: "Describe the group's purpose, who should join, and what members can expect."
    Character counter: "0 / 1000"

  Field 4 — Category:
    Label: "Category *"
    Dropdown: Select… | Sector-based | Geography-based | Women Founders | Students | Investors

  Field 5 — Location (for geography-based groups):
    Label: "City / Region"
    Dropdown: Karnataka-wide | Bengaluru | Mysuru | Mangaluru | Hubballi | Belagavi | Other

  SECTION B — Branding (margin-top: 28px)
  Heading: "Branding"

  Field 6 — Group Logo:
    Label: "Group Logo"
    Upload zone: dashed border, padding 20px, text-align: center
    Text: "Upload a square logo (PNG, min 200×200px)" — gray 13px
    Fallback: if no upload, show colored circle with group name initial (auto-generated)

  Field 7 — Banner Image:
    Label: "Banner Image"
    Upload zone: same style, wider aspect
    Text: "Upload a banner (JPG or PNG, min 1200×300px)" — gray 13px

  SECTION C — Settings (margin-top: 28px)
  Heading: "Privacy & Settings"

  Field 8 — Privacy Type:
    3 radio cards in a row (gap: 14px):
      Card 1: "🔓 Public" — anyone can find and join
        Selected: green border + light green tint
      Card 2: "🔒 Private" — anyone can find, approval required to join
        Selected: red border + light red tint
      Card 3: "🔑 Invite Only" — hidden from browse, join by invitation only
        Selected: amber border + light amber tint
    Each card: border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 14px 16px,
    cursor: pointer, flex: 1
    Icon (24px) + name (font-weight: 700, 14px) + description (gray 12px)

  Field 9 — File Upload Permissions:
    Label: "Who can upload files?"
    Radio options inline:
      ○ Group Admin only (default)   ○ All members

  Field 10 — Interest Tags:
    Label: "Interest Tags"
    Multi-select chips (same style as Service Providers page):
    Items: SaaS | Fintech | Agritech | Edtech | D2C | Healthcare | Deep Tech | Logistics | Other

  SECTION D — Community Rules (margin-top: 28px)
  Heading: "Community Rules (Optional)"

  Dynamic list — start with 3 empty rule fields, "+ Add Rule" adds more:
    Each row: number label (gray, 13px) + text input (placeholder: "Rule description")
    Remove (×) on hover

  Default rules pre-filled:
    1. "Be respectful and constructive in all discussions."
    2. "No spam, self-promotion, or unsolicited DMs."
    3. "Keep discussions relevant to the group's focus area."

  SUBMIT ROW (margin-top: 32px, border-top: 1px solid #EAEAEA, padding-top: 24px):
    "Save as Draft" — white bg, gray border, color: #555555, height: 44px, padding: 0 24px, border-radius: 8px
    "Submit for Review →" — orange filled, white, height: 44px, padding: 0 28px, border-radius: 8px, font-weight: 700
    Gap: 12px

    Note below: "By creating a group you agree to Mundhe Banni's Community Guidelines."
    "Community Guidelines" — orange link, font-size: 12px
```

---

## Responsive Rules

```
TABLET (max-width: 1024px):
  - Groups grid: 2 columns
  - Group detail: tabs become horizontally scrollable
  - Group detail two-column layout: single column, sidebar stacks below feed
  - Featured banner: single column, member avatars hidden
  - Recommended carousel: show 2 cards at a time

MOBILE (max-width: 768px):
  - Groups grid: 1 column
  - Filter bar: collapses to "Filter & Sort" pill button + bottom drawer
  - Trending carousel: horizontal scroll, 1.2 cards visible
  - Recommended carousel: horizontal scroll, 1.5 cards visible
  - Group detail header: reduced height, name + join button only
  - Group detail tabs: horizontal scroll (overflow-x: auto)
  - Tab content: full width single column
  - Create Group form: full width, all fields stacked
  - "+ Start Discussion" CTA: fixed bottom bar on mobile when inside Discussion tab
  - Page horizontal padding: 16px
```
