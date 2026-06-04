# Mundhe Banni Homepage — Qwikbuild Agent Prompt

> **How to use this:** Copy each section prompt separately and feed to the qwikbuild agent one section at a time. Do not paste the entire document at once.

---

## Before You Start — Design System

Apply these globally across all sections before building anything.

```
GLOBAL DESIGN SYSTEM:

Font family: Inter (or closest available sans-serif)
Primary text color: #1D2B53
Accent / orange color: #E58A2B
Background: #FFFFFF
Card background: white, box-shadow: 0 1px 4px rgba(0,0,0,0.08)
Border color: #EAEAEA
Border radius on all cards: 8px
Max page width: 1440px, centered
Page horizontal padding: 48px
Section vertical padding: 48px 0
```

---

## Section 1 — Navbar

```
Build a sticky top navigation bar with white background and bottom border #EAEAEA. Height: 64px.

LEFT: Logo — two lines of text. Line 1: "munde" in bold #1D2B53. Line 2: "banni" in bold #1D2B53 with a small orange microphone or flame icon to the right. Add a small orange rocket icon above "munde" tilted 45 degrees.

CENTER: Navigation links in a row with 32px gap.
  - Home (color #E58A2B, with orange underline — this is the active state)
  - People
  - Groups
  - Events
  - Service Providers
  - Resources
  - Community (with a small external link ↗ icon after it)
All inactive links: color #1D2B53, font-weight 500, font-size 15px.

RIGHT: Four items in a row with 16px gap.
  - Search icon (gray, 20px)
  - Bell icon (gray, 20px) with a small orange notification badge
  - Round avatar (32px, orange background, white letter "A" inside)
  - "A~" language toggle text in #1D2B53, font-size 14px

The navbar should have no shadow, only the bottom border 1px solid #EAEAEA.
```

---

## Section 2 — Hero

```
Build a two-column hero section. Left column 55% width, right column 45% width. White background. Min-height: 480px. Align both columns to vertical center.

LEFT COLUMN — padding-top: 60px, padding-bottom: 60px:

Headline — two lines:
  Line 1: "Build Your Startup" — font-size: 52px, font-weight: 800, color: #1D2B53
  Line 2: "Faster. " in color #1D2B53 + "Together." in color #E58A2B
  Both lines same font-size 52px, font-weight 800, line-height 1.15

Subtext — margin-top: 16px:
  "Mundhe Banni is Karnataka's most trusted network of founders, experts, investors and service providers."
  Font-size: 16px, color: #666666, line-height: 1.6, max-width: 460px

Three CTA buttons in a horizontal row — margin-top: 28px, gap: 12px:
  Button 1 — "👤 Join Community"
    Background: #E58A2B, color: white, font-weight: 600, height: 44px, padding: 0 20px, border-radius: 8px, no border
  Button 2 — "📅 Explore Events"
    Background: white, color: #1D2B53, font-weight: 600, height: 44px, padding: 0 20px, border-radius: 8px, border: 1.5px solid #CCCCCC
  Button 3 — "👥 Find People"
    Background: white, color: #1D2B53, font-weight: 600, height: 44px, padding: 0 20px, border-radius: 8px, border: 1.5px solid #CCCCCC

RIGHT COLUMN:
  Use the uploaded hero photo of the Mundhe Banni founder networking event.
  Image fills the entire right column. object-fit: cover. object-position: center.
  No border, no border-radius, no overlay, no filter.
  The image must show the full crowd — do not crop the left side of the photo.
  Image height matches left column height, minimum 480px.
```

---

## Section 3 — Stats Bar

```
Build a full-width horizontal stats bar. White background. Top border 1px solid #EAEAEA. Bottom border 1px solid #EAEAEA. Padding: 28px 0.

Show 5 stat items in a single horizontal row, evenly spaced across the full width. Each item is centered.

Separate each item with a 1px vertical divider line in color #EAEAEA.

Each stat item layout (left to right):
  - Orange SVG icon on the left (24px)
  - To the right of the icon: two lines of text
      Line 1: the number — font-size: 24px, font-weight: 700, color: #1D2B53
      Line 2: the label — font-size: 13px, color: #888888, font-weight: 400

The 5 items:
  1. Icon: two people silhouette | "5,200+" | "Founders"
  2. Icon: graduation cap | "320+" | "Experts & Mentors"
  3. Icon: briefcase | "140+" | "Service Providers"
  4. Icon: group/community | "82" | "Active Groups"
  5. Icon: calendar | "250+" | "Events Conducted"

Use #E58A2B as the icon stroke/fill color for all icons.
```

---

## Section 4 — Upcoming Events

```
Build the Upcoming Events section. White background. Padding: 48px 0.

HEADER ROW — margin-bottom: 24px:
  Left: "Upcoming Events" — font-size: 22px, font-weight: 700, color: #1D2B53
  Right: "View all events →" — font-size: 14px, color: #E58A2B, no underline, cursor pointer

CARDS ROW:
  Show 4 cards in a horizontal row. Gap: 20px. Each card same width. Border: 1px solid #EAEAEA. Border-radius: 8px. Overflow: hidden. Background: white.
  Add a right arrow "›" button on the far right of the row for carousel navigation (gray circle, 40px).

EACH EVENT CARD structure:

  TOP — Event image area (height: 160px, overflow hidden):
    - Show a relevant stock photo for the event type (conference/workshop/networking)
    - object-fit: cover, width: 100%
    - Date badge overlaid on TOP-LEFT of image:
        Small box with semi-transparent dark background (rgba 0,0,0,0.7), border-radius: 4px, padding: 6px 10px
        Line 1: month abbreviation "MAY" — font-size: 10px, color: white, font-weight: 600, letter-spacing: 1px
        Line 2: day number — font-size: 22px, color: white, font-weight: 800, line-height: 1
    - Bookmark icon overlaid on TOP-RIGHT: white icon, 20px, cursor pointer

  BOTTOM — Card body (padding: 16px):
    - Event title: font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 10px
    - Date/time row: 📅 icon (gray 14px) + date and time text, font-size: 13px, color: #888888
    - Location row: 📍 icon (gray 14px) + city text, font-size: 13px, color: #888888, margin-bottom: 12px
    - Bottom row — two items spaced apart (space-between):
        Left: 4 overlapping circular avatar images (28px each, -8px left margin, border: 2px solid white) + "+N" count in gray 13px
        Right: RSVP button — outlined border #E58A2B, color #E58A2B, background white, OR filled orange button for paid events
        Button: height 32px, padding 0 14px, border-radius: 6px, font-size: 13px, font-weight: 600

THE 4 EVENTS:
  1. Title: "Bengaluru Founder Meetup" | Date: "Sat, 24 May · 5:00 PM" | Location: "Bangalore, Karnataka" | Avatars: +42 | Button: "RSVP Free" (outlined)
  2. Title: "Startup Funding Workshop" | Date: "Sun, 25 May · 10:00 AM" | Location: "Bangalore, Karnataka" | Avatars: +28 | Button: "RSVP Free" (outlined)
  3. Title: "Women Founders Circle" | Date: "Tue, 27 May · 7:00 PM" | Location: "Online" | Avatars: +63 | Button: "RSVP Free" (outlined)
  4. Title: "Startup Summit 2025" | Date: "Fri, 30 May · 9:30 AM" | Location: "Bangalore, Karnataka" | Avatars: +120 | Button: "Get Tickets" (filled orange)
```

---

## Section 5 — Community Pulse

```
Build the Community Pulse section. Background: #FDF8F2 (very light warm cream). Margin: 0 48px. Border-radius: 12px. Padding: 36px 40px.

HEADER ROW — margin-bottom: 24px:
  Left: "Community Pulse" — font-size: 22px, font-weight: 700, color: #1D2B53
  Right: "Go to Community ↗" — font-size: 14px, color: #E58A2B

INNER CONTAINER — white background, border-radius: 12px, box-shadow: 0 1px 6px rgba(0,0,0,0.07), padding: 28px:
  3 items side by side with equal width. Separate each item with a 1px vertical divider line color #EAEAEA.

  EACH ITEM layout (padding: 0 28px):
    Row 1: Small gray uppercase label — font-size: 11px, font-weight: 600, letter-spacing: 0.06em, color: #999999, margin-bottom: 12px
    Row 2: Icon circle (44px, border-radius 50%) + title text side by side
      Icon circle colors:
        Item 1: background #FFF0E0, icon color #E58A2B — chat bubble icon
        Item 2: background #E0F5EC, icon color #2E7D5E — checkmark circle icon
        Item 3: background #EDE8FA, icon color #5B3DB5 — trending up chart icon
      Title text: font-size: 15px, font-weight: 600, color: #1D2B53, line-height: 1.4, max 2 lines
    Row 3: "N replies · Xh ago" — font-size: 13px, color: #999999, margin-top: 10px

THE 3 ITEMS:
  1. Label: "Most Active Discussion" | Title: "How SaaS founders are navigating sales in 2024?" | "24 replies · 2h ago"
  2. Label: "Most Answered Question" | Title: "Best way to approach investors for pre-seed funding?" | "18 replies · 4h ago"
  3. Label: "Trending Topic" | Title: "AI tools every founder should try in 2024" | "15 replies · 6h ago"
```

---

## Section 6 — Featured Groups

```
Build the Featured Groups section. White background. Padding: 48px 0.

HEADER ROW — margin-bottom: 24px:
  Left: "Featured Groups" — font-size: 22px, font-weight: 700, color: #1D2B53
  Right: "View all groups →" — font-size: 14px, color: #E58A2B

4 group cards in a horizontal row. Gap: 20px. Add right arrow "›" carousel button.

EACH GROUP CARD — border: 1px solid #EAEAEA, border-radius: 8px, padding: 20px, background: white:
  Row 1: Colored icon circle (44px, border-radius 50%) — icon is an emoji or SVG
  Row 2: Group name — font-size: 16px, font-weight: 700, color: #1D2B53, margin-top: 12px
  Row 3: Member count — font-size: 13px, color: #888888 (e.g. "1.2K Members")
  Row 4: "Active discussions" — font-size: 13px, color: #888888
  Row 5: 4 overlapping avatars (28px each) + "+N" count in gray, margin-top: 8px
  Row 6: "Join Group" button — full width, height: 36px, border: 1.5px solid #E58A2B, color: #E58A2B, background: white, border-radius: 6px, font-weight: 600, font-size: 14px, margin-top: 14px

THE 4 GROUPS:
  1. Icon bg: #FFF0E0, icon: 🏙️ orange city | "Bengaluru Founders" | "1.2K Members" | "+28"
  2. Icon bg: #E8F5E9, icon: 🌿 green leaf | "Agritech Karnataka" | "860 Members" | "+18"
  3. Icon bg: #E3EAF8, icon: 📊 dark blue chart | "Fintech Builders" | "1.1K Members" | "+35"
  4. Icon bg: #FCE4EC, icon: 👩 pink people | "Women Entrepreneurs" | "950 Members" | "+22"
```

---

## Section 7 — Top Rated Service Providers

```
Build the Top Rated Service Providers section. White background. Padding: 48px 0.

HEADER ROW — margin-bottom: 20px:
  Left: "Top Rated Service Providers" — font-size: 22px, font-weight: 700, color: #1D2B53
  No right link

FILTER TABS ROW — margin-bottom: 24px:
  Pill-shaped filter buttons in a horizontal row. Gap: 8px.
  Active pill: background #E58A2B, color white, border: none
  Inactive pill: background white, color #555555, border: 1px solid #DDDDDD
  Height: 34px, padding: 0 16px, border-radius: 20px, font-size: 14px, font-weight: 500

  Tabs: All (active/orange) | Legal | Finance | Technology | Marketing | HR | More ▾

4 provider cards in a horizontal row. Gap: 20px. Add right arrow "›" carousel button.

EACH PROVIDER CARD — border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px, background: white:
  Row 1: Three items in a row (space-between):
    Left: Colored logo circle (44px, border-radius: 50%) with provider initial or icon inside
    Center: Provider name (font-size: 15px, font-weight: 700, color: #1D2B53) + category below (font-size: 12px, color: #888888)
    Right: Bookmark icon (gray, 18px)
  Row 2: Star rating — show filled orange stars (⭐) + score number + "(review count)" — font-size: 13px, color: #555555, margin-top: 8px
  Row 3: "📍 City" — font-size: 13px, color: #888888, margin-top: 4px

THE 4 PROVIDERS:
  1. Circle bg: #1D2B53, icon: ⚖️ white | "LegalEdge Associates" | "Legal Services" | ⭐ 4.8 (120) | Bangalore
  2. Circle bg: #E58A2B, text: "fin" white bold | "FinTax Consultants" | "CA & Taxation" | ⭐ 4.7 (98) | Bangalore
  3. Circle bg: #3B2FAA, icon: orbit/tech symbol white | "CodeCraft Technologies" | "Technology Services" | ⭐ 4.9 (76) | Bangalore
  4. Circle bg: #6B3FA0, text: "A" white bold | "GrowthHackers Agency" | "Growth Marketing" | ⭐ 4.6 (54) | Bangalore
```

---

## Section 8 — Helpful Resources

```
Build the Helpful Resources section. White background. Padding: 48px 0.

HEADER ROW — margin-bottom: 24px:
  Left: "Helpful Resources" — font-size: 22px, font-weight: 700, color: #1D2B53
  Right: "View all resources →" — font-size: 14px, color: #E58A2B

5 resource cards in a horizontal row. Gap: 16px.

EACH RESOURCE CARD — border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px 20px, background: white:
  Two items in a horizontal row:
    Left: Colored square icon (40px, border-radius: 8px) with white icon inside
    Right: Title (font-size: 14px, font-weight: 600, color: #1D2B53) + subtitle below (font-size: 12px, color: #888888)

THE 5 RESOURCES:
  1. Icon bg: #E3EAF8 blue, icon: 📄 document | "Startup Templates" | "100+ Templates"
  2. Icon bg: #EDE8FA purple, icon: 📊 chart | "Pitch Deck Examples" | "50+ Decks"
  3. Icon bg: #E8F5E9 green, icon: ₹ rupee | "Funding Guides" | "Step-by-step guides"
  4. Icon bg: #E0F5F5 teal, icon: 📋 checklist | "Legal Checklists" | "Essential for Startups"
  5. Icon bg: #FDECEA red, icon: 📚 book | "Market Research Reports" | "Industry Insights"
```

---

## Section 9 — CTA Banner

```
Build a full-width CTA banner section. Margin: 0 48px 48px 48px. Background: #FFF4E6. Border-radius: 12px. Padding: 56px 48px. Text alignment: center.

Layout — all elements centered:

  Row 1: Large icon — two people/community outline SVG icon, color #E58A2B, size 64px

  Row 2: Headline — margin-top: 20px
    "Be a part of Karnataka's most active founder network."
    Font-size: 24px, font-weight: 700, color: #1D2B53

  Row 3: Subtext — margin-top: 8px
    "Connect, collaborate and grow together."
    Font-size: 15px, color: #666666

  Row 4: Button — margin-top: 28px
    "Join Community"
    Background: #E58A2B, color: white, font-size: 16px, font-weight: 600
    Height: 48px, padding: 0 36px, border-radius: 8px, no border
```

---

## Section 10 — Footer

```
Build the footer. White background. Top border: 1px solid #EAEAEA. Padding: 48px. Padding-top: 40px.

5-column grid layout. Gap: 40px.

COLUMN 1 — Brand:
  Logo same as navbar (munde banni with rocket icon)
  Below logo: "Building the future of Bharat, together." — font-size: 13px, color: #888888, margin-top: 12px, line-height: 1.6
  Social icons row — margin-top: 20px, gap: 12px:
    LinkedIn, Twitter/X, YouTube, Instagram — all gray (#AAAAAA), 20px each, hover: #E58A2B

COLUMN 2 — Platform:
  Heading: "Platform" — font-size: 14px, font-weight: 700, color: #1D2B53, margin-bottom: 14px
  Links (each 13px, color #666666, line-height 2): People | Groups | Events | Service Providers | Community

COLUMN 3 — Resources:
  Heading: "Resources" — same heading style
  Links: Resource Library | Templates | Guides | Blog

COLUMN 4 — Company:
  Heading: "Company" — same heading style
  Links: About | Contact | Privacy Policy | Careers | Terms of Use

COLUMN 5 — Newsletter:
  Heading: "Subscribe to our newsletter" — font-size: 14px, font-weight: 700, color: #1D2B53
  Subtext: "Get the latest updates and events delivered to your inbox." — font-size: 13px, color: #888888, margin: 8px 0 14px 0
  Input + button side by side (no gap between them):
    Input: placeholder "Enter your email", height: 40px, border: 1px solid #DDDDDD, border-radius: 8px 0 0 8px, padding: 0 14px, font-size: 13px, flex: 1
    Button: "Subscribe", background: #E58A2B, color: white, height: 40px, padding: 0 16px, border-radius: 0 8px 8px 0, font-weight: 600, font-size: 13px, no border

BOTTOM BAR — margin-top: 40px, top border: 1px solid #EAEAEA, padding-top: 20px:
  Centered text: "© 2025 Mundhe Banni. All rights reserved." — font-size: 12px, color: #AAAAAA
```

---

## Responsive Rules (apply to all sections)

```
TABLET (max-width: 1024px):
  - Hero: stack to single column, image below text
  - Stats bar: 2 columns x 3 rows grid, hide dividers
  - Event cards: 2 columns grid
  - Group cards: 2 columns grid
  - Provider cards: 2 columns grid
  - Footer: 2 columns grid

MOBILE (max-width: 768px):
  - All sections: single column
  - Headline font-size: 32px
  - Page horizontal padding: 16px
  - Event cards: horizontal scroll (overflow-x: auto, snap scrolling)
  - Group cards: horizontal scroll
  - Resource cards: 2 columns grid
  - Footer: single column, newsletter full width
  - Add sticky bottom bar: orange "Join Community" button, full width, height: 56px, z-index: 1000
```
