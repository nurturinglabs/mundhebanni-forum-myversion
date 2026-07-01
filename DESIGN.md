# Mundhe Banni Design Guide

## Product Intent

Mundhe Banni is a Kannada-first founder community platform for entrepreneurs, experts, service providers, groups, events, resources, and community discussions.

The app should feel practical, warm, and trustworthy. It is not a marketing landing page only. It is a working community product where users can discover people, join groups, attend events, find help, read resources, and manage community activity.

## Design Principles

- **Founder-first:** Every page should help a founder take action quickly.
- **Kannada community identity:** Use Kannada cues where useful, but keep the main interface easy for English-speaking and Kannada-speaking users.
- **Warm but professional:** Use orange, cream, white, black, and deep ink tones. Avoid a cold corporate SaaS look.
- **Real community over stock polish:** Prefer real meetup photos, local founder imagery, and community-specific visuals.
- **Dense but readable:** Pages should support scanning, filtering, and repeated use without feeling cluttered.
- **Mobile friendly by default:** Cards, filters, tables, and admin panels must collapse cleanly on small screens.

## Brand System

### Logo

The current logo is text-based:

- `mundé`
- `banni`
- Orange rocket accent
- Orange microphone accent

Use the logo on black in the main header. On light backgrounds, use dark text with orange accents.

### Color Tokens

Current CSS variables:

```css
:root {
  --ink: #1d2b53;
  --muted: #666;
  --soft: #888;
  --line: #eaeaea;
  --accent: #e58a2b;
  --cream: #fdf8f2;
  --warm: #fff4e6;
}
```

Primary colors:

- Black header: `#050505`
- Accent orange: `#e58a2b`, `#fb8500`, `#ffad12`
- Ink text: `#1d2b53`
- Body text: `#343434`, `#5f6673`, `#666`
- Borders: `#eaeaea`
- Warm surfaces: `#fff4e6`, `#fdf8f2`, `#fffaf3`
- White cards: `#ffffff`

### Typography

Primary font stack:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Usage:

- Hero headings: large, bold, tight line-height
- Page headings: bold and direct
- Card headings: compact and scannable
- Metadata: small, muted, and icon-supported
- Buttons: medium weight to bold

Do not use oversized hero typography inside cards, admin panels, filters, or compact layouts.

## Layout System

### App Width

Main content is constrained:

```css
main {
  max-width: 1440px;
  margin: 0 auto;
}
```

Desktop pages generally use `48px` horizontal spacing. Mobile pages should reduce spacing to keep content readable.

### Header

The main header is sticky and black.

Primary navigation:

- Home
- People
- Groups
- Events
- Service Providers
- Resources
- Community

Header behavior:

- Active nav item uses orange text and underline.
- Right side includes search, notifications, profile/auth, and language control.
- Mobile uses a hamburger menu and a collapsible navigation panel.

### Cards

Cards are the main UI unit across the app.

Use cards for:

- Event previews
- Group previews
- People/member profiles
- Service provider listings
- Resource items
- Community discussions
- Admin metrics/tables

Card rules:

- Border radius: usually `8px`
- Border: `1px solid var(--line)`
- Background: white
- Avoid nested cards
- Keep metadata compact
- Use icons for date, location, members, category, rating, and status

## Components

### Buttons

Primary button:

- Orange/yellow gradient
- Dark text
- Used for primary actions like join, RSVP, create, save

Secondary button:

- White background
- Light border
- Dark text

Outline/mini buttons:

- Orange border
- White background
- Orange text
- Used inside cards for smaller actions

Button height:

- Standard: `44px`
- Compact card buttons: `32px`

### Filters

Filters appear at the top of listing pages.

Use for:

- People search and role filters
- Event status filters
- Resource category filters
- Group categories
- Service provider categories

Mobile behavior:

- Filters should wrap or collapse.
- Avoid horizontal overflow.
- Keep touch targets large enough.

### Images

Use real, identity-matching images whenever possible.

Image guidance:

- Events should use real meetup or location-relevant images.
- Groups should use visuals matching the group identity.
- Hero imagery should show inclusive entrepreneurs from different walks of life, not only corporate office workers.
- Avoid generic stock photos when a real Mundhe Banni asset exists.

Image treatment:

- Use `object-fit: cover`
- Use subtle dark gradients only where text overlays need contrast
- Keep important faces/content away from heavy cropping on mobile

## Page Designs

### Home

Purpose: introduce the network and guide users to community actions.

Key sections:

- Hero with inclusive founder imagery
- Primary CTAs: Join Community, Explore Events, Find People
- Stats bar
- Upcoming events
- Community pulse
- Featured groups
- Service providers
- Helpful resources
- Join CTA band
- Footer

Design notes:

- The first screen should immediately communicate Karnataka founder network.
- Hero should use real or realistic community entrepreneurship imagery.
- Stats should be prominent but not decorative-only.

### People

Purpose: browse real community members and admins from Supabase.

Key behavior:

- Shows real profiles from `mundhe_banni.profiles`
- Empty state only if profile count is `0` or `1`
- Follow state should sync with listing after follow/unfollow
- Admin users can log in through Supabase Auth

Design notes:

- Member cards should show identity, role, location, expertise, and follow action.
- Avoid making the page look empty when seeded admin profiles exist.

### Groups

Purpose: help members discover and join interest-based founder groups.

Key behavior:

- Groups load from Supabase
- Admins can create groups
- Group categories must match database constraints
- Group images should match group names and categories

Design notes:

- Group cards should feel like active communities.
- Use member count, activity labels, and join state clearly.

### Events

Purpose: show current, upcoming, and previous Mundhe Banni meetups.

Current direction:

- Dummy events removed
- Real Mundhe Banni meetups added
- Meetup cards use banner images
- Filters remain at the top for current, previous, and other event states

Design notes:

- Event cards should include date, title, location, attendee count, description, and image.
- Real meetup photos are preferred over generic event images.

### Service Providers

Purpose: help founders find trusted service providers.

Categories:

- Legal
- Finance
- Technology
- Marketing
- HR
- Other

Design notes:

- Provider cards should show service category, rating, location, and quick action.
- Keep the page utilitarian and searchable.

### Resources

Purpose: provide useful, real founder resources instead of dummy content.

Resource quality rules:

- Prefer official government/startup portals for compliance and schemes.
- Prefer credible founder/operator sources for templates and practical guides.
- Avoid generic homepages when a direct useful page exists.
- Avoid broken, redirected, or placeholder links.

Current resource themes:

- DPIIT recognition
- Startup India Seed Fund
- Karnataka Startup Cell
- MCA incorporation
- Udyam MSME registration
- GST registration
- Startup India knowledge bank
- Pitch deck structure
- Go-to-market guide
- Intellectual property
- Financial model template
- Kannada founder learning

### Community

Purpose: integrate Discourse discussions into the app.

Current state:

- Read-only/logged-out Discourse integration
- API calls go through backend proxy
- SSO is not active yet because Discourse Connect requires the right Discourse plan/configuration

Design notes:

- Community page should visually match the main app theme.
- Starting discussions should not create confusion. Until SSO is ready, use clear login/redirect messaging.

### Admin Console

Purpose: manage users, groups, providers, resources, events, roles, taxonomy, analytics, audit logs, settings, and banners.

Design notes:

- Admin UI should be dense, practical, and table-driven.
- Use restrained cards for metrics.
- Prioritize clear status, filters, and actions.
- Mobile should remain usable, but admin is primarily desktop-first.

## Responsive Rules

Minimum supported width: `320px`.

Mobile behavior:

- Header becomes mobile menu.
- Hero stacks vertically.
- Card grids collapse to one column.
- Stats bar collapses.
- Filters wrap or collapse.
- Tables should scroll horizontally only when necessary.
- Text must not overflow buttons or cards.

Desktop behavior:

- Use multi-column grids for cards.
- Keep header nav visible.
- Use 4-card rows where space allows.
- Maintain generous but not excessive spacing.

## Accessibility

Minimum expectations:

- Buttons and links must have clear labels.
- Icon-only buttons need `aria-label`.
- Text contrast must remain readable on image overlays.
- Inputs need visible labels.
- Focus states should be visible, especially login and admin forms.
- External links should use `target="_blank"` with `rel="noreferrer"`.

## Data And State Design

### Supabase

Used for:

- Auth
- Profiles
- People listing
- Groups
- Follow/membership state

Rules:

- Use `@supabase/supabase-js` browser client.
- Keep session state in a top-level auth provider.
- Use `supabase.auth.onAuthStateChange()` to keep auth state synced.
- Do not show misleading empty states when real data exists.

### Discourse

Used for:

- Community discussion feed
- Discussion creation in a later phase
- SSO in a later phase

Rules:

- Never call Discourse API directly from browser.
- Keep API keys server-side only.
- Use backend proxy routes.
- Until SSO is ready, keep discussion creation messaging clear.

## Asset Guidelines

Recommended asset folders:

```text
public/assets/
```

Use descriptive asset names:

```text
meetup-1-bengaluru.png
meetup-4-bengaluru.png
meetup-5-tumkur.png
hero-networking.png
founder-meetup.png
```

Asset rules:

- Use real Mundhe Banni images where available.
- Match group/event images to the actual identity.
- Compress large images before production if needed.
- Avoid decorative-only visuals that do not explain the page.

## Implementation Notes

Current app routing is handled in `src/main.jsx` using `window.location.pathname`.

Primary files:

```text
src/main.jsx
src/styles/app.css
public/assets/
```

Build command:

```bash
npm run build
```

Development command:

```bash
npm run dev
```

## Quality Checklist

Before shipping a page:

- The page works on mobile and desktop.
- Cards do not overflow.
- Buttons have clear labels and fit their text.
- Images match the page content.
- Links are real and useful.
- Empty states only appear when data is actually empty.
- Logged-in and logged-out states are both understandable.
- `npm run build` passes.

