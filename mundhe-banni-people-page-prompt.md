# Mundhe Banni — People Page — Qwikbuild Agent Prompt

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

Role badge colors:
  Founder: #2456A0 (blue)
  SME / Expert: #1A7A4A (green)
  Service Provider: #9B3BB5 (purple)
  Admin: #C84B2F (red)
  Moderator: #B8760A (amber)

XP level colors:
  Level 1 (0–199 XP): gray
  Level 2 (200–499 XP): blue #2456A0
  Level 3 (500–999 XP): green #1A7A4A
  Level 4 (1000–1999 XP): orange #E58A2B
  Level 5 (2000+ XP): red #C84B2F (Top Contributor)
```

---

## Section 1 — Page Header & Breadcrumb

```
Build a page header section. White background. Border-bottom: 1px solid #EAEAEA.
Padding: 20px 48px 24px 48px.

ROW 1 — Breadcrumb:
  Home > People
  "Home" — font-size: 13px, color: #E58A2B, clickable link
  " > " — color: #AAAAAA
  "People" — font-size: 13px, color: #888888, not clickable
  Margin-bottom: 12px

ROW 2 — Title row (two-column layout, space-between):

  LEFT:
    Title: "Community Members"
    Font-size: 32px, font-weight: 800, color: #1D2B53, margin-bottom: 6px
    Subtitle: "Discover founders, experts, mentors, and service providers
    building Karnataka's startup ecosystem."
    Font-size: 15px, color: #666666, max-width: 520px

  RIGHT (vertically centered):
    Stats row — 4 items with vertical dividers (1px #EAEAEA), gap: 24px:
      "5,200+" bold #1D2B53 + "Founders" gray 12px below
      "320+" bold #1D2B53 + "Experts & Mentors" gray 12px below
      "140+" bold #1D2B53 + "Service Providers" gray 12px below
      "82+" bold #1D2B53 + "Active Groups" gray 12px below
```

---

## Section 2 — Spotlight: Featured Members Carousel

```
Build a "Member Spotlight" horizontal carousel section.
White background. Padding: 28px 48px. Border-bottom: 1px solid #EAEAEA.

HEADER ROW (margin-bottom: 16px):
  Left: "✨ Member Spotlight" — font-size: 18px, font-weight: 700, color: #1D2B53
  Subtext below: "Top contributors and recently active members" — font-size: 13px, color: #888888
  Right: Navigation arrows "‹" and "›" — gray circles, 34px each

CAROUSEL ROW:
  Horizontal row, overflow-x: scroll (hidden scrollbar), gap: 16px
  Show 5 spotlight cards, each min-width: 210px

  EACH SPOTLIGHT CARD:
    Border: 1px solid #EAEAEA, border-radius: 10px, padding: 20px 18px,
    background: white, text-align: center
    Hover: border-color: #E58A2B, box-shadow: 0 2px 12px rgba(229,138,43,0.12),
    translateY(-2px), transition: all 0.2s

    ROW 1: Avatar (64px circle, border: 3px solid white,
      box-shadow: 0 2px 8px rgba(0,0,0,0.12), centered)
      Position relative — role badge overlaid on bottom-right of avatar:
        Small circle (18px), colored per role, white icon inside

    ROW 2: Display name (margin-top: 10px)
      Font-size: 15px, font-weight: 700, color: #1D2B53, text-align: center

    ROW 3: Role badge pill (centered, margin-top: 4px)
      Background: light role tint, color: role color
      Font-size: 11px, font-weight: 700, padding: 3px 10px, border-radius: 20px

    ROW 4: City (margin-top: 4px)
      "📍 Bengaluru" — font-size: 12px, color: #888888

    ROW 5: XP level indicator (margin-top: 10px)
      Horizontal bar (full width, height: 4px, bg: #EAEAEA, border-radius: 2px):
        Orange fill showing XP progress to next level
      "⭐ 842 XP · Level 4" — font-size: 11px, color: #E58A2B, font-weight: 600,
      text-align: center, margin-top: 6px

    ROW 6: "Follow" button (margin-top: 12px)
      Full width, height: 32px, border: 1.5px solid #E58A2B, color: #E58A2B,
      background: white, border-radius: 6px, font-size: 12px, font-weight: 600
      Followed state: bg: #E0F5EC, border-color: #1A7A4A, color: #1A7A4A, text: "✓ Following"

  SPOTLIGHT MEMBERS:
    1. "Vikram Anand" | Founder | Bengaluru | ⭐ 842 XP · Level 4
    2. "Dr. Ravi Kumar" | ✓ Expert | Mysuru | ⭐ 1,240 XP · Level 5
    3. "Sneha Patil" | Founder | Bengaluru | ⭐ 621 XP · Level 4
    4. "Ananya Krishnan" | Service Provider | Bengaluru | ⭐ 540 XP · Level 3
    5. "Rohit Shenoy" | ✓ Expert | Mangaluru | ⭐ 980 XP · Level 4
```

---

## Section 3 — Search & Filter Bar

```
Build the search and filter bar. White background. Padding: 20px 48px.
Border-bottom: 1px solid #EAEAEA.

LAYOUT: Single horizontal row, all items vertically aligned, gap: 12px.

ITEM 1 — Search input (flex: 1, max-width: 400px):
  Placeholder: "Search by name, expertise, or company…"
  Height: 42px, border: 1.5px solid #DDDDDD, border-radius: 8px
  Padding-left: 38px (search icon inside, gray, 16px)
  Font-size: 14px

ITEM 2 — Role dropdown:
  Label: "Role:" gray 13px, margin-right: 6px
  Dropdown height: 42px, border: 1.5px solid #DDDDDD, border-radius: 8px,
  padding: 0 12px, font-size: 14px, min-width: 150px
  Options: All Roles | Founder | Expert / SME | Service Provider | Moderator

ITEM 3 — Location dropdown:
  Label: "City:" gray 13px
  Options: All Cities | Bengaluru | Mysuru | Mangaluru | Hubballi | Belagavi
  Same style

ITEM 4 — Expertise dropdown:
  Label: "Expertise:" gray 13px
  Options: All Areas | SaaS | Fintech | Agritech | Edtech | Healthcare |
           Legal | Finance | Marketing | Technology | Operations
  Same style

ITEM 5 — Sort dropdown (margin-left: auto):
  Label: "Sort:" gray 13px
  Options: Most Active | Newest Members | Top XP | A-Z
  Same style

ITEM 6 — View toggle (right of sort):
  Grid icon + List icon
  Each: 36px × 36px, border: 1px solid #DDDDDD, border-radius: 6px
  Active: bg #E58A2B, white icon | Inactive: white bg, gray icon

Result count below bar (left-aligned):
  "Showing 5,200 members" — font-size: 13px, color: #888888, padding-top: 10px
```

---

## Section 4 — Role Quick-Filter Pills

```
Build a row of role quick-filter pills.
White background. Padding: 14px 48px 0. Border-bottom: 1px solid #F0F0F0.

Show 5 pills in a horizontal row, gap: 10px:

Each pill: height: 34px, padding: 0 16px, border-radius: 20px, font-size: 13px,
font-weight: 500, cursor: pointer, display: inline-flex, align-items: center, gap: 6px

  Default: white bg, border: 1px solid #DDDDDD, color: #555555
  Active: role tint bg, role-color border and text
  Hover: border-color: #E58A2B

THE 5 PILLS:
  1. "👥 All Members (5,200)" — active by default, orange
  2. "🚀 Founders (4,720)" — active color: #E3EAF8 bg, #2456A0 border/text
  3. "✓ Experts & SMEs (320)" — active color: #E0F5EC bg, #1A7A4A border/text
  4. "💼 Service Providers (140)" — active color: #EDE8FA bg, #9B3BB5 border/text
  5. "🛡 Moderators (20)" — active color: #FEF3D8 bg, #8A6200 border/text
```

---

## Section 5 — People Grid (Main Content Area)

```
Build the main people grid. White background. Padding: 28px 48px 64px.

Default: 4 columns, gap: 20px.
(3 columns on tablet, 2 columns on small tablet, 1 column on mobile)

Build 12 member cards (3 rows × 4 cards).

---

MEMBER CARD — border: 1px solid #EAEAEA, border-radius: 10px,
overflow: hidden, background: white
Hover: box-shadow 0 4px 16px rgba(0,0,0,0.1), translateY(-2px), transition: all 0.2s

  TOP SECTION — Profile visual area (padding: 20px 18px 0, text-align: center):

    Cover strip (height: 52px, full width, margin: -20px -18px 0):
      Subtle gradient background per role:
        Founder: linear-gradient(135deg, #EBF0FA, #D6E4F7)
        Expert: linear-gradient(135deg, #E8F5EE, #D0EDE0)
        Service Provider: linear-gradient(135deg, #F0E8FA, #E2D4F5)
      No image needed — just the gradient tint

    Avatar (68px circle, border: 3px solid white,
      box-shadow: 0 2px 8px rgba(0,0,0,0.12),
      margin-top: -34px — overlaps the cover strip, centered):
      Colored avatar placeholder (first initial of name, matching role color)

    Role badge — overlaid on bottom-right of avatar (position: absolute):
      Small circle (22px, bg: role color, border: 2px solid white):
        Founder: 🚀 emoji OR rocket icon
        Expert: ✓ checkmark icon
        Service Provider: 💼 briefcase icon
        Moderator: 🛡 shield icon
      All icons white, 11px

  MIDDLE SECTION (padding: 10px 16px 0, text-align: center):

    Display name: font-size: 15px, font-weight: 700, color: #1D2B53, margin-top: 8px

    Role badge pill (centered):
      Background: light role tint, text: role name
      Font-size: 11px, font-weight: 700, padding: 3px 10px, border-radius: 20px
      Colors matching role system above

    Company / Tagline (margin-top: 4px):
      Font-size: 12px, color: #888888
      E.g. "Founder @ GreenRoute Labs" or "Legal · LegalEdge Associates"
      Max 1 line, ellipsis

    City (margin-top: 4px):
      "📍 Bengaluru" — font-size: 12px, color: #AAAAAA

  INTEREST TAGS (padding: 10px 14px 0, text-align: center):
    Show 2 interest tag pills (centered, flex-wrap, justify-content: center, gap: 6px):
      Background: #F3F4F6, color: #555555
      Font-size: 11px, padding: 3px 8px, border-radius: 4px
    If more than 2 tags: show "+N" in gray same style

  XP STRIP (padding: 10px 14px 4px):
    Horizontal progress bar (height: 4px, bg: #EAEAEA, border-radius: 2px, full width):
      Fill color matches XP level (gray / blue / green / orange / red)
      Fill width proportional to XP progress to next level
    Below bar: "⭐ 842 XP" left-aligned + "Level 4" right-aligned
    Font-size: 11px, color: #888888

  DIVIDER: 1px solid #F0F0F0, margin: 10px 0

  BOTTOM ROW (padding: 0 14px 14px, display: flex, gap: 8px):
    "View Profile" button (flex: 1):
      White bg, border: 1.5px solid #DDDDDD, color: #1D2B53
      Height: 32px, border-radius: 6px, font-size: 12px, font-weight: 600
    "Follow" button (flex: 1):
      Background: #E58A2B, color: white
      Height: 32px, border-radius: 6px, font-size: 12px, font-weight: 600
      Followed state: bg: #E0F5EC, color: #1A7A4A, border: 1px solid #1A7A4A, text: "✓ Following"

THE 12 MEMBER CARDS:

  Card 1:
    Name: "Vikram Anand" | Role: Founder | Company: "Founder @ NovaPay"
    City: Bengaluru | Tags: Fintech, SaaS | XP: 842 · Level 4

  Card 2:
    Name: "Dr. Ravi Kumar" | Role: Expert | Company: "Legal · LegalEdge Associates"
    City: Mysuru | Tags: Legal, Compliance | XP: 1,240 · Level 5

  Card 3:
    Name: "Sneha Patil" | Role: Founder | Company: "Co-Founder @ AgriStack"
    City: Bengaluru | Tags: Agritech, Operations | XP: 621 · Level 4

  Card 4:
    Name: "Ananya Krishnan" | Role: Service Provider | Company: "CEO · GrowthHackers"
    City: Bengaluru | Tags: Marketing, SaaS | XP: 540 · Level 3

  Card 5:
    Name: "Rohit Shenoy" | Role: Expert | Company: "CFO Advisory · FinTax"
    City: Mangaluru | Tags: Finance, Fundraising | XP: 980 · Level 4

  Card 6:
    Name: "Meera Shetty" | Role: Founder | Company: "Founder @ EduBridge"
    City: Bengaluru | Tags: Edtech, Product | XP: 312 · Level 2

  Card 7:
    Name: "Karthik Rao" | Role: Founder | Company: "CTO @ HealthNest"
    City: Bengaluru | Tags: Healthcare, Technology | XP: 187 · Level 2

  Card 8:
    Name: "Priya Kamath" | Role: Moderator | Company: "Founder @ LogiRoute"
    City: Bengaluru | Tags: Logistics, Operations | XP: 724 · Level 4

  Card 9:
    Name: "Arun Hegde" | Role: Expert | Company: "Partner · StartupCounsel India"
    City: Bengaluru | Tags: Legal, Fundraising | XP: 1,102 · Level 5

  Card 10:
    Name: "Divya Nair" | Role: Founder | Company: "Founder @ CleanHarvest"
    City: Hubli | Tags: Agritech, D2C | XP: 445 · Level 3

  Card 11:
    Name: "Siddharth Bhat" | Role: Founder | Company: "Co-Founder @ DataVerse"
    City: Bengaluru | Tags: SaaS, Technology | XP: 268 · Level 2

  Card 12:
    Name: "Kavitha Murthy" | Role: Service Provider | Company: "HR · TalentFirst"
    City: Bengaluru | Tags: HR, Recruitment | XP: 398 · Level 3

PAGINATION (centered, margin-top: 32px):
  Previous arrow | 1 | 2 | 3 | … | 52 | Next arrow
  Active page: orange filled (36px circle), white number
  Others: white bg, gray number, border: 1px solid #EAEAEA
  Each item: 36px × 36px, border-radius: 6px
```

---

## Section 6 — User Profile Page (Own Profile — My Profile)

```
Build the My Profile page. Accessible when the logged-in user clicks their own avatar.
White background. Max-width: 1100px, centered.

---

PROFILE HEADER (full-width, no horizontal padding):

  COVER PHOTO AREA (height: 200px, width: 100%):
    Default cover: gradient bg (#E3EAF8 to #C5D5F0 for Founder)
    Or uploaded cover photo (object-fit: cover, width: 100%)
    "✏ Edit Cover" button overlaid on bottom-right:
      White bg, gray border, font-size: 12px, height: 30px, padding: 0 12px,
      border-radius: 6px, cursor: pointer

  AVATAR (96px circle, border: 4px solid white,
    box-shadow: 0 4px 12px rgba(0,0,0,0.15)):
    Position: margin-top: -48px (overlaps cover photo bottom)
    Margin-left: 48px (left-aligned)
    "✏" edit icon overlaid on bottom-right of avatar (20px circle, orange bg, white pencil icon)

  PROFILE INFO ROW (padding: 12px 48px 0, display: flex, align-items: flex-start, gap: 16px):
    LEFT (flex: 1):
      Display name: font-size: 24px, font-weight: 800, color: #1D2B53
      Role badge pill (inline, margin-left: 10px):
        Background: role light tint, color: role color
        Font-size: 12px, font-weight: 700, padding: 4px 12px, border-radius: 20px
      Username below: "@vikramanand" — font-size: 13px, color: #AAAAAA, margin-top: 2px
      Bio / tagline: font-size: 14px, color: #555555, line-height: 1.6,
        max-width: 500px, margin-top: 8px
      Meta row (margin-top: 10px, gap: 20px):
        "📍 Bengaluru, Karnataka" — gray 13px
        "🌐 novapay.in" — orange clickable link, 13px
        "🔗 LinkedIn" — orange link, 13px
        "🗓 Joined January 2024" — gray 13px

    RIGHT:
      Profile completion card (border: 1px solid #EAEAEA, border-radius: 8px,
        padding: 14px 18px, min-width: 220px):
        Title: "Profile Completion" — font-size: 12px, font-weight: 700, color: #1D2B53,
        text-transform: uppercase, letter-spacing: 0.05em

        Circular progress indicator (64px):
          Outer ring: gray #EAEAEA
          Fill arc: orange #E58A2B, proportional to completion %
          Center text: "70%" — font-size: 16px, font-weight: 800, color: #1D2B53
        Text: "Add your LinkedIn to reach 85%" — gray 12px, margin-top: 6px

        "Complete Profile →" link — orange, font-size: 12px, margin-top: 6px

  STATS BAR (border-top: 1px solid #EAEAEA, border-bottom: 1px solid #EAEAEA,
    margin-top: 16px, padding: 14px 48px):
    5 stat items in a horizontal row, separated by vertical dividers, evenly spaced:
      Each: Number (font-size: 20px, font-weight: 800, color: #1D2B53) +
        Label below (font-size: 12px, color: #888888)

    Items:
      48 — "Discussions"
      312 — "Replies"
      5 — "Groups"
      8 — "Events Attended"
      842 — "XP Points"

  XP & BADGES STRIP (padding: 14px 48px, border-bottom: 1px solid #EAEAEA):
    LEFT: XP level display
      "⭐ Level 4 — Top Contributor" — font-size: 14px, font-weight: 700, color: #E58A2B
      XP progress bar (width: 240px, height: 8px, bg: #EAEAEA, border-radius: 4px):
        Orange fill to 72% (842 XP toward 1000 XP for Level 5)
      "842 / 1000 XP to Level 5" — font-size: 12px, color: #888888, margin-top: 4px

    RIGHT: Badges earned (gap: 8px):
      Title: "Badges" — font-size: 12px, font-weight: 700, color: #888888,
      text-transform: uppercase, letter-spacing: 0.05em, margin-bottom: 8px
      Show 4 badge chips in a row:
        Each chip: colored icon circle (32px) + label (font-size: 11px, font-weight: 600)
        1. 🔥 orange — "Top Contributor"
        2. ✓ green — "Best Answer ×12"
        3. 🎤 blue — "Event Speaker"
        4. 📚 purple — "Resource Author"
      "+ 2 more" in gray 11px if applicable

  ACTION BUTTONS ROW (padding: 14px 48px):
    "✏ Edit Profile" — outlined gray, height: 38px, padding: 0 18px, border-radius: 8px,
    font-weight: 500, font-size: 14px
    "⚙ Settings" — outlined gray, same style
    "📤 Share Profile" — outlined gray, same style
    All buttons in a row with gap: 10px

---

TABS NAVIGATION (sticky, white bg, border-bottom: 1px solid #EAEAEA, padding: 0 48px):
  5 tabs in a horizontal row:
    Tab 1: "Feed" — active by default (orange underline)
    Tab 2: "Contributions"
    Tab 3: "Groups"
    Tab 4: "Events"
    Tab 5: "Settings"

  Active: color: #E58A2B, border-bottom: 3px solid #E58A2B
  Inactive: color: #888888
  Padding per tab: 16px 20px, font-size: 14px, font-weight: 500

---

TAB 1 — FEED TAB (default view):
Padding: 28px 48px. TWO-COLUMN LAYOUT (70/30 split, gap: 32px)

LEFT — Activity feed:
  SECTION HEADER: "Recent Activity" — font-size: 16px, font-weight: 700, color: #1D2B53,
  margin-bottom: 16px

  5 activity feed items in a vertical list:
    Each item: border-bottom: 1px solid #F0F0F0, padding: 14px 0,
    display: flex, gap: 14px

    Left: Activity type icon circle (36px):
      Discussion started: blue bg, 💬 icon
      Best answer: green bg, ✓ icon
      Event RSVP: orange bg, 📅 icon
      Resource uploaded: purple bg, 📄 icon
      Group joined: teal bg, 👥 icon

    Right:
      Activity description: font-size: 14px, color: #1D2B53, line-height: 1.5
      Clickable item title in orange
      Timestamp: font-size: 12px, color: #AAAAAA, margin-top: 4px
      XP earned (if any): small green pill "+10 XP" — font-size: 11px,
      bg: #E0F5EC, color: #1A7A4A, padding: 2px 6px, border-radius: 4px

  Sample activity items:
    1. 💬 blue | "Started a discussion: How SaaS founders navigate sales in 2025"
       | 2 hours ago | +10 XP
    2. ✓ green | "Received Best Answer on: Best approach for pre-seed fundraising"
       | 1 day ago | +25 XP
    3. 📅 orange | "RSVPd Going to: Bengaluru Founder Meetup — May 24"
       | 2 days ago | +5 XP
    4. 👥 teal | "Joined group: Fintech Builders"
       | 1 week ago | +5 XP
    5. 📄 purple | "Uploaded resource: Startup Legal Checklist 2025"
       | 2 weeks ago | +20 XP

  "Load More Activity →" — orange text link, centered, font-size: 14px, margin-top: 16px

RIGHT — Profile sidebar:
  INTEREST TAGS WIDGET (border: 1px solid #EAEAEA, border-radius: 8px,
    padding: 18px, margin-bottom: 16px):
    Title: "Interests" — font-size: 13px, font-weight: 700, color: #1D2B53,
    text-transform: uppercase, letter-spacing: 0.05em, margin-bottom: 12px
    Interest tag pills (flex-wrap, gap: 8px):
      Each pill: bg #F3F4F6, color #555555,
      font-size: 12px, padding: 5px 12px, border-radius: 20px
    Tags: SaaS | Fintech | Fundraising | Product | Legal

  GROUPS WIDGET (border: 1px solid #EAEAEA, border-radius: 8px,
    padding: 18px, margin-bottom: 16px):
    Title: "My Groups (5)" — same title style
    3 group rows:
      Each: group logo circle (32px) + group name (font-weight: 600, 13px)
      + "Active" chip (orange, 11px) on the right
    "View All Groups →" — orange link, font-size: 13px, margin-top: 10px

  XP LEADERBOARD WIDGET (border: 1px solid #EAEAEA, border-radius: 8px, padding: 18px):
    Title: "Community Leaderboard" — same title style
    Show user's rank prominently:
      "#12 in Karnataka" — font-size: 18px, font-weight: 800, color: #E58A2B
      "Top 1% of all members" — font-size: 12px, color: #888888
    3 rows: top 3 members above user (names + XP + avatars)
    Separator: "— You are here —" gray 12px centered
    User's own row: highlighted in light orange bg (#FFF4E6)

---

TAB 2 — CONTRIBUTIONS TAB:
Padding: 28px 48px.

FILTER ROW (margin-bottom: 20px):
  4 pill filter tabs:
    "All" (active, orange) | "Discussions" | "Resources" | "Best Answers"
  Same pill style as role filter pills

AGGREGATE STATS ROW (margin-bottom: 20px):
  4 small stat cards in a row (gap: 12px):
    Each: border: 1px solid #EAEAEA, border-radius: 8px, padding: 12px 16px,
    display: flex, align-items: center, gap: 10px
      Colored icon (orange, 20px) + Number (font-weight: 800, 18px, #1D2B53) +
      label (gray 12px)
    Cards:
      💬 48 Discussions
      ▲ 312 Total Upvotes Received
      ✓ 12 Best Answers
      📄 3 Resources Uploaded

CONTRIBUTIONS LIST (vertical stack, gap: 12px):
  Each contribution item:
    Border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px 20px,
    background: white, cursor: pointer
    Hover: box-shadow 0 2px 8px rgba(0,0,0,0.07)

    Row 1:
      Left: Content type badge pill (same color scheme as discussion / resource type)
      Right: Timestamp (gray 12px)

    Row 2: Content title (font-weight: 600, 15px, color: #1D2B53, clickable orange on hover)

    Row 3 (margin-top: 6px):
      Left stats row (gap: 16px):
        "▲ 24 upvotes" | "💬 18 replies" (or "⬇ 3.8K downloads" for resources)
        All: gray 12px
      Right: Best Answer badge (if applicable):
        "✓ Best Answer" — bg: #E0F5EC, color: #1A7A4A,
        font-size: 11px, font-weight: 700, padding: 3px 8px, border-radius: 4px

  Sample contributions:
    1. Type: Question | "How SaaS founders are navigating sales cycles in 2025?"
       | ▲24 | 💬18 | ✓ Best Answer | 2 hours ago
    2. Type: Resource — eBook | "Startup Legal Checklist 2025"
       | ⬇ 892 downloads | ⭐ 4.8 | 1 week ago
    3. Type: Idea | "Monthly pitch practice sessions for the community?"
       | ▲32 | 💬21 | 3 days ago
    4. Type: General | "Looking for a co-founder in logistics"
       | ▲15 | 💬7 | 5 days ago
    5. Type: Resource — Whitepaper | "India Fintech Regulatory Landscape 2025"
       | ⬇ 1.2K downloads | ⭐ 4.6 | 2 weeks ago

---

TAB 3 — GROUPS TAB:
Padding: 28px 48px.

HEADER ROW:
  "My Groups (5)" — font-size: 18px, font-weight: 700, color: #1D2B53
  "Browse More Groups →" — orange link, font-size: 13px

GROUPS GRID — 3 columns, gap: 16px (same compact group card as Groups page):
  Show 5 joined groups in compact cards

---

TAB 4 — EVENTS TAB:
Padding: 28px 48px.

TOGGLE: "Upcoming" (active) | "Past" — same inline tab style

EVENTS LIST — same compact event row style as Group Detail Events tab:
  Show 3 upcoming RSVPs + 3 past events (separated by a "Past Events" section label)

---

TAB 5 — SETTINGS TAB:
Padding: 28px 48px. Max-width: 680px.

THREE SETTINGS SECTIONS (vertical stack):

SECTION A — Edit Profile
  Heading: "Edit Profile"
  Font-size: 16px, font-weight: 700, color: #1D2B53,
  border-bottom: 2px solid #E58A2B, padding-bottom: 8px, margin-bottom: 20px

  Field 1 — Display Name:
    Label: "Display Name" — font-size: 13px, font-weight: 600, color: #444444
    Input: full width, height: 44px, border: 1.5px solid #DDDDDD, border-radius: 8px,
    padding: 0 14px, pre-filled: "Vikram Anand"

  Field 2 — Username:
    Label: "Username"
    Input: pre-filled "@vikramanand", note: "Changing username updates your profile URL"
    Hint: font-size: 11px, color: #AAAAAA below the input

  Field 3 — Bio / Tagline:
    Label: "Bio"
    Textarea: height 80px, same border style
    Pre-filled: "Founder at NovaPay. Building the future of payments for small businesses in Karnataka."
    Character counter: "87 / 280"

  Field 4 — Location:
    Label: "City"
    Input: pre-filled "Bengaluru, Karnataka"

  Field 5 — Website URL:
    Label: "Website"
    Input: type url, pre-filled "https://novapay.in"

  Field 6 — LinkedIn URL:
    Label: "LinkedIn Profile"
    Input: type url, placeholder "https://linkedin.com/in/yourprofile"

  Field 7 — Avatar Upload:
    Label: "Profile Photo"
    Current avatar shown (56px circle) + "Change Photo" orange link button beside it

  Field 8 — Cover Photo Upload:
    Label: "Cover Photo"
    "Upload Cover →" outlined orange button, font-size: 13px

  "Save Changes" button — orange filled, height: 44px, padding: 0 28px,
  border-radius: 8px, font-weight: 700, margin-top: 20px

DIVIDER: 1px solid #EAEAEA, margin: 32px 0

SECTION B — Notifications
  Heading: "Notification Preferences"
  Font-size: 16px, font-weight: 700, color: #1D2B53,
  border-bottom: 2px solid #E58A2B, padding-bottom: 8px, margin-bottom: 20px

  Show a table of notification types with email and in-app toggles:
    3 columns: Type | Email | In-App
    Each row: type label (font-size: 14px, color: #444444) |
      Email toggle (orange switch) | In-App toggle (orange switch)
    Toggle: 36px wide, 20px tall pill shape
    On state: orange fill | Off state: gray fill

  Rows:
    "Replies to my discussions" | Email: On | In-App: On
    "Mentions (@vikramanand)" | Email: On | In-App: On
    "New event in my groups" | Email: Off | In-App: On
    "Best Answer marked" | Email: On | In-App: On
    "New member follows me" | Email: Off | In-App: Off
    "Weekly digest" | Email: On | In-App: Off

  "Save Preferences" button — same style as above, margin-top: 16px

DIVIDER: 1px solid #EAEAEA, margin: 32px 0

SECTION C — Account & Privacy
  Heading: "Account & Privacy"
  Font-size: 16px, font-weight: 700, color: #1D2B53,
  border-bottom: 2px solid #E58A2B, padding-bottom: 8px, margin-bottom: 20px

  ROW 1 — Profile Visibility:
    Label: "Profile Visibility"
    Subtitle: "Control who can see your profile and activity."
    Font-size: 13px, color: #666666, margin-top: 4px
    Two radio options (inline):
      ○ Public — anyone can view your profile
      ○ Private — only platform members can view
    Margin-bottom: 20px

  ROW 2 — Password Change:
    Label: "Change Password" — font-weight: 600, 14px, color: #1D2B53
    3 fields stacked:
      Current password (type: password)
      New password (type: password)
      Confirm new password (type: password)
      Each: height 44px, same border style
    "Update Password" button — outlined orange, height: 40px, margin-top: 12px

  ROW 3 — Connected Accounts:
    Label: "Connected Social Accounts" — font-weight: 600, 14px
    Two rows:
      Google: Google "G" colored logo + "connected as vikram@gmail.com" (green dot)
        + "Disconnect" link in gray
      LinkedIn: LinkedIn logo + "Not connected" (gray dot)
        + "Connect LinkedIn →" orange link
    Each row: border: 1px solid #EAEAEA, border-radius: 8px, padding: 12px 16px, margin-bottom: 10px

  ROW 4 — Danger Zone:
    Background: #FEF2F2, border: 1px solid #FECACA, border-radius: 8px,
    padding: 18px 20px, margin-top: 20px

    Label: "Deactivate Account" — font-weight: 700, 14px, color: #C84B2F
    Subtitle: "Deactivating will hide your profile and pause all notifications.
    Your content remains visible. You can reactivate at any time."
    Font-size: 13px, color: #888888, margin-top: 4px, margin-bottom: 12px
    "Deactivate Account" button — white bg, border: 1.5px solid #C84B2F,
    color: #C84B2F, height: 38px, padding: 0 18px, border-radius: 6px, font-size: 13px
```

---

## Section 7 — Other User's Profile Page (Public View)

```
Build the public profile view. Shown when viewing another user's profile.
Same layout as My Profile but with these differences:

HEADER DIFFERENCES:
  - No "Edit Profile", "Settings" buttons — instead show:
    "Follow" button — orange filled, height: 38px, padding: 0 20px
      Followed state: "✓ Following" — green outlined
    "Message" button — outlined gray, same size (Phase 2 — DM feature)
    "···" overflow menu: Report this user | Block
  - Profile completion widget not shown
  - Cover photo edit button not shown

TABS DIFFERENCES:
  - Tab 5 "Settings" is hidden
  - Tab 1 "Feed" label changes to "Activity"
  - Tab 2 "Contributions" is visible (public contributions)

If profile is set to Private:
  Show a lock banner instead of tabs:
    Background: #F7F7F7, border: 1px solid #EAEAEA, border-radius: 8px,
    padding: 32px, text-align: center, margin: 28px 48px
    🔒 icon (48px, gray) centered
    "This profile is private." — font-size: 16px, font-weight: 700, color: #1D2B53, margin-top: 12px
    "Follow this member to see their contributions and activity."
    Font-size: 14px, color: #888888
```

---

## Section 8 — Onboarding Flow (New User)

```
Build the 4-step onboarding flow. Full-screen modal overlay or dedicated page.
White background, centered card. Max-width: 560px.
Box-shadow: 0 16px 48px rgba(0,0,0,0.15). Border-radius: 16px. Padding: 40px 44px.

STEP PROGRESS BAR (top of card):
  4 numbered steps connected by a line:
    Active step: orange filled circle (28px) + orange label below
    Completed step: green filled circle with ✓ icon + green label
    Upcoming step: gray outline circle + gray label
  Labels: "Sign Up" | "Your Profile" | "Role & Interests" | "Welcome Tour"
  Progress line: horizontal, 2px, gray, filled orange up to active step

---

STEP 1 — Sign Up:
  Title: "Join Mundhe Banni"
  Font-size: 24px, font-weight: 800, color: #1D2B53, text-align: center

  Subtitle: "Karnataka's founder community."
  Font-size: 14px, color: #888888, text-align: center, margin-bottom: 28px

  Social login buttons (stacked, gap: 12px):
    Button 1: Google
      White bg, border: 1.5px solid #DDDDDD, height: 46px, border-radius: 8px
      Google "G" colored icon (20px) + "Continue with Google"
      Font-size: 14px, font-weight: 500, color: #333333
    Button 2: LinkedIn
      Same style with LinkedIn blue icon

  Divider: "— or sign up with email —" gray 12px, centered, margin: 20px 0

  Email field: Label "Email Address *", height 44px, same border style
  Password field: Label "Password *", type: password, height 44px
  Username field: Label "Username *", height 44px,
    placeholder "@yourname", hint: "3–20 characters, letters and numbers only"
    Real-time availability check: show "✓ Available" in green or "✗ Taken" in red
    Font-size: 11px below input

  "Create Account →" — orange filled, full width, height 46px, font-weight 700,
  border-radius 8px, margin-top: 20px

  OTP verification sub-step (shown after form submit):
    "We sent a 6-digit code to vikram@email.com"
    6 individual input boxes (40px × 48px each, gap 8px, centered)
    Border: 1.5px solid #DDDDDD, border-radius: 8px, font-size: 22px, font-weight: 700
    "Verify Email →" orange button below
    "Resend code" gray link (14px)

  Terms note: "By signing up, you agree to our Terms of Service and Privacy Policy."
  Font-size: 11px, color: #AAAAAA, text-align: center, margin-top: 14px

---

STEP 2 — Your Profile:
  Title: "Set up your profile"
  Same title style

  Avatar upload area (centered):
    Large circle (88px, bg: #F3F4F6, dashed border: 2px dashed #DDDDDD)
    "+" icon in center (28px, gray)
    "Upload photo" label below — orange link, 13px
    Hint: "JPG or PNG, max 2MB"

  Field 1 — Display Name: Label "Full Name *", input pre-filled from signup name
  Field 2 — City: Label "City *", dropdown with Karnataka cities
  Field 3 — Bio: Label "Bio / Tagline", textarea 80px,
    placeholder "e.g. Founder at NovaPay, building payments for Karnataka SMBs"
    Character counter "0 / 280"
  Field 4 — Website: Label "Website (optional)", type url
  Field 5 — LinkedIn: Label "LinkedIn URL (optional)", type url

  "Next: Role & Interests →" — orange filled, full width, height 46px, border-radius 8px,
  font-weight 700, margin-top: 20px
  "Skip for now →" — gray text link, centered, font-size 13px, margin-top 10px

---

STEP 3 — Role & Interests:
  Title: "Tell us about yourself"

  ROLE SELECTOR:
    Label: "I am a…" — font-size: 15px, font-weight: 600, color: #1D2B53, margin-bottom: 14px
    4 role cards in a 2×2 grid (gap: 12px):
      Each card: border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 14px 16px,
      cursor: pointer, text-align: center
      Selected: border-color: role-color, bg: role-tint

      Icon (28px, colored) + Role name (font-weight: 700, 14px) +
      Description (gray 12px, 1 line):
        1. 🚀 "Founder" — "Building a startup or side project"
        2. ✓ "Expert / SME" — "Advisor, mentor or domain expert"
        3. 💼 "Service Provider" — "Offering services to startups"
        4. 👤 "Investor" — "Looking to invest in startups" (Future scope note)

    Note below for SME/Provider: "📋 Role requests are reviewed by our team within 48 hours."
    Font-size: 12px, color: #888888, margin-top: 8px

  INTEREST TAGS (margin-top: 20px):
    Label: "I'm interested in…" — same label style
    Subtitle: "Select all that apply (up to 8)" — gray 13px, margin-bottom: 12px

    Multi-select chips (grid, flex-wrap, gap: 10px):
      Each chip: border: 1.5px solid #DDDDDD, border-radius: 20px,
      padding: 8px 16px, font-size: 13px, cursor: pointer
      Unselected: white bg, gray text
      Selected: bg: #FFF4E6, border-color: #E58A2B, color: #E58A2B, font-weight: 600

    Tags: SaaS | Fintech | Agritech | Edtech | Healthcare | D2C | Legal | Finance |
          Marketing | Operations | Technology | Deep Tech | Logistics

  NOTIFICATION PREFERENCES (margin-top: 20px):
    Label: "Email frequency" — same label style
    4 radio options inline:
      ○ Instant  ○ Daily Digest  ○ Weekly Digest  ○ None

  "Finish Setup →" — orange filled, full width, height 46px, border-radius 8px,
  font-weight 700, margin-top: 20px

---

STEP 4 — Welcome Tour:
  Confetti animation (subtle, 2 seconds on load — orange and teal confetti)

  Title: "Welcome to Mundhe Banni! 🎉"
  Font-size: 22px, font-weight: 800, color: #1D2B53, text-align: center

  Subtitle: "You're all set. Here's how to get the most out of the community."
  Font-size: 14px, color: #888888, text-align: center, margin-bottom: 24px

  Profile completion score widget (centered):
    Same circular progress design as profile page
    "Your profile is 40% complete" + "Complete it to connect with more founders"
    Font-size: 13px, color: #666666

  RECOMMENDED GROUPS (margin-top: 20px):
    Label: "Groups recommended for you" — font-size: 14px, font-weight: 600, color: #1D2B53
    3 compact group rows (same style as sidebar groups widget):
      Each: group icon + name + member count + "Join" orange button

  QUICK ACTION TILES (margin-top: 20px, 3 tiles in a row, gap: 12px):
    Each tile: border: 1px solid #EAEAEA, border-radius: 8px, padding: 14px,
    text-align: center, cursor: pointer
    Hover: border-color: #E58A2B

    1. 💬 "Start a Discussion" — "Share a question or idea" — gray 12px
    2. 📅 "Browse Events" — "Find your next meetup"
    3. 📚 "Explore Resources" — "Free guides and templates"

  "Explore Community →" — orange filled, full width, height 46px, border-radius 8px,
  font-weight 700, margin-top: 20px

  "Skip tour" — gray link, centered, font-size 13px, margin-top 10px
```

---

## Responsive Rules

```
TABLET (max-width: 1024px):
  - People grid: 3 columns
  - Profile page: sidebar stacks below feed in Feed tab
  - Spotlight carousel: show 3 cards at a time
  - Stats bar in header: 2×2 grid
  - Profile page header: reduce cover height to 160px

MOBILE (max-width: 768px):
  - People grid: 2 columns (or 1 if cards feel cramped)
  - Filter bar: collapses to "Filter & Sort" pill + bottom drawer
  - Role filter pills: horizontal scroll (overflow-x: auto)
  - Spotlight carousel: show 1.5 cards, horizontal scroll
  - Profile page: single column
  - Profile stats bar: 3 + 2 two-row grid
  - Profile tabs: horizontal scroll (overflow-x: auto)
  - Settings form: full width, all fields stacked
  - Onboarding card: full screen, no border-radius on mobile, padding: 24px 20px
  - Onboarding step 3 role cards: 2×2 grid stays, but reduced padding
  - Page horizontal padding: 16px
```
