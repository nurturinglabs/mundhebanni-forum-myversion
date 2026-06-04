# Mundhe Banni — Events Page — Qwikbuild Agent Prompt

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

Event type colors:
  Group Meetup: #2456A0 (blue)
  Community Conference: #1A7A4A (green)
  Flagship / Platform Event: #C84B2F (red)
  Virtual: #5B3DB5 (purple)
  Hybrid: #B8760A (amber)
```

---

## Section 1 — Page Header & Breadcrumb

```
Build a page header section. White background. Border-bottom: 1px solid #EAEAEA.
Padding: 20px 48px 24px 48px.

ROW 1 — Breadcrumb:
  Home > Events
  "Home" — font-size: 13px, color: #E58A2B, clickable link
  " > " separator — color: #AAAAAA
  "Events" — font-size: 13px, color: #888888, not clickable
  Margin-bottom: 12px

ROW 2 — Title row (two-column, space-between):
  LEFT:
    Title: "Events"
    Font-size: 32px, font-weight: 800, color: #1D2B53, margin-bottom: 6px
    Subtitle: "Founder meetups, community conferences, and flagship Mundhe Banni events
    across Karnataka."
    Font-size: 15px, color: #666666, max-width: 520px

  RIGHT (vertically centered):
    Stats row — 3 items with vertical dividers (1px #EAEAEA), gap: 24px:
      "250+" bold #1D2B53 + "Events Conducted" gray 12px
      "12" bold #1D2B53 + "Upcoming Events" gray 12px
      "82+" bold #1D2B53 + "Active Groups" gray 12px

    Button below stats (right-aligned, margin-top: 12px):
      "＋ Create Event"
      Background: #E58A2B, color: white, height: 40px, padding: 0 20px,
      border-radius: 8px, font-weight: 600, font-size: 14px
      Note: Visible only to Group Admin and Platform Admin roles.
```

---

## Section 2 — Flagship Event Hero Banner

```
Build a full-width hero banner for the upcoming flagship platform event.
This section sits directly below the page header and above the filter tabs.
Margin: 0 48px 32px. Border-radius: 12px. Overflow: hidden.

Background: dark image overlay — use a professional conference/startup event photo
as background. Apply a dark gradient overlay:
  background: linear-gradient(to right, rgba(29,43,83,0.92) 55%, rgba(29,43,83,0.5) 100%)
  over the image.

Padding: 40px 48px. Min-height: 220px.

TWO-COLUMN LAYOUT (60/40 split):

LEFT COLUMN:
  Row 1: Event type badge + countdown
    Left: Red pill — background: rgba(200,75,47,0.25), color: #FF8A72
      Text: "🚀 Flagship Event" — font-size: 11px, font-weight: 700,
      letter-spacing: 0.07em, text-transform: uppercase, padding: 4px 10px, border-radius: 20px

    Right: Countdown timer (inline, gap: 12px):
      "Starts in:" label — color: rgba(255,255,255,0.5), font-size: 12px
      Show: "14d  08h  32m" — each unit bold white 18px + small gray label below (Days / Hours / Mins)
      Units separated by ":" in orange

  Row 2: Event title (margin-top: 14px):
    "Karnataka Startup Summit 2025"
    Font-size: 30px, font-weight: 800, color: white, line-height: 1.25

  Row 3: Date, location, format (margin-top: 10px, gap: 20px):
    📅 "Fri–Sat, 30–31 May 2025" — color: rgba(255,255,255,0.7), font-size: 13px
    📍 "NIMHANS Convention Centre, Bangalore" — same style
    🎥 "In-Person + Live Stream" — same style

  Row 4: Attendee avatars + count (margin-top: 14px):
    6 overlapping circular avatar images (32px each, -10px margin, border: 2px solid #1D2B53)
    "+ 428 registered" — color: rgba(255,255,255,0.8), font-size: 13px, margin-left: 8px

  Row 5: CTA buttons (margin-top: 20px, gap: 12px):
    Button 1: "Register Now" — background: #E58A2B, color: white,
      height: 44px, padding: 0 28px, border-radius: 8px, font-weight: 700
    Button 2: "View Full Schedule" — transparent bg, white color,
      border: 1.5px solid rgba(255,255,255,0.4),
      height: 44px, padding: 0 20px, border-radius: 8px, font-weight: 500

RIGHT COLUMN:
  Speaker preview cards — show 3 speaker mini-cards stacked (gap: 10px):
    Each mini-card: background: rgba(255,255,255,0.1), border-radius: 8px,
    padding: 10px 14px, display: flex, align-items: center, gap: 12px
      - Speaker avatar circle (40px, colored placeholder)
      - Name: font-weight: 600, 13px, color: white
      - Talk title: font-size: 11px, color: rgba(255,255,255,0.6), 1 line truncated

  Speakers:
    1. Kiran Mazumdar Shaw — "Building Karnataka's Next Unicorn"
    2. Sachin Taparia — "Community-Led Growth for Startups"
    3. Vani Kola — "What Investors Look for in 2025"

  "+ 8 more speakers →" link — orange, font-size: 12px, margin-top: 8px, right-aligned
```

---

## Section 3 — Tab Navigation & Filters

```
Build the tab navigation and filter bar. White background.
Border-bottom: 1px solid #EAEAEA. Padding: 0 48px.

ROW 1 — Tab navigation (no padding-top):
  4 tabs in a horizontal row:
    Tab 1: "All Events" — active by default
    Tab 2: "Upcoming"
    Tab 3: "My RSVPs"
    Tab 4: "Past Events"

  Each tab: padding: 16px 20px, font-size: 14px, font-weight: 500
  Active tab: color: #E58A2B, border-bottom: 3px solid #E58A2B
  Inactive tab: color: #888888, border-bottom: 3px solid transparent
  Hover: color: #1D2B53

  Right side of tab row (margin-left: auto):
    View toggle — Grid icon + List icon (same style as other pages)
    Each: 34px × 34px, border: 1px solid #EAEAEA, border-radius: 6px
    Active: #E58A2B bg + white icon | Inactive: white bg + gray icon

ROW 2 — Filter bar (padding: 16px 0, border-top: 1px solid #F0F0F0):
  Horizontal row, gap: 12px, all vertically aligned.

  Item 1 — Search input (flex: 1, max-width: 340px):
    Placeholder: "Search events by name or keyword…"
    Height: 40px, border: 1.5px solid #DDDDDD, border-radius: 8px
    Padding-left: 36px (search icon inside)
    Font-size: 14px

  Item 2 — Event Type dropdown:
    Label: "Type:" gray 13px
    Options: All Types | Group Meetup | Community Conference | Flagship Event
    Height: 40px, border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 0 12px

  Item 3 — Format dropdown:
    Label: "Format:" gray 13px
    Options: All Formats | In-Person | Virtual | Hybrid
    Same style

  Item 4 — City dropdown:
    Label: "City:" gray 13px
    Options: All Cities | Bengaluru | Mysuru | Mangaluru | Hubballi | Belagavi
    Note: Default shows user's registered city first (geo-filter behaviour)
    "Show events in other cities" appears as a sub-option when a city is selected

  Item 5 — Date range picker (margin-left: auto):
    Label: "Date:" gray 13px
    Single input showing: "May 2025 — Jun 2025"
    Height: 40px, border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 0 12px
    Calendar icon (gray) on the right inside the input

  Result count below bar:
    "Showing 12 upcoming events" — font-size: 13px, color: #888888, padding-top: 10px
```

---

## Section 4 — Event Type Filter Pills

```
Build a horizontal row of event type quick-filter pills.
Padding: 16px 48px 0. Background: white.

Show 5 pill buttons in a row, gap: 10px:

Each pill: height: 34px, padding: 0 16px, border-radius: 20px, font-size: 13px,
font-weight: 500, cursor: pointer

  Pill states:
    Default: white background, 1px solid #DDDDDD, color: #555555
    Active: matching type color bg (light tint), matching type border, matching type text
    Hover: border-color: #E58A2B

THE 5 PILLS:
  1. "🗓 All Events" — active by default (orange)
  2. "👥 Group Meetups" — active color: #E3EAF8 bg, #2456A0 border + text
  3. "🌍 Community Conferences" — active color: #E0F5EC bg, #1A7A4A border + text
  4. "🚀 Flagship Events" — active color: #FDECEA bg, #C84B2F border + text
  5. "💻 Virtual Only" — active color: #EDE8FA bg, #5B3DB5 border + text
```

---

## Section 5 — Events Grid

```
Build the main events grid. White background. Padding: 24px 48px 64px.

Default layout: 3 columns, gap: 24px.
(2 columns on tablet, 1 column on mobile, horizontal scroll cards on mobile)

Build 8 event cards across the grid (mix of event types).

---

STANDARD EVENT CARD — border: 1px solid #EAEAEA, border-radius: 8px,
overflow: hidden, background: white
Hover: box-shadow 0 4px 16px rgba(0,0,0,0.1), translateY(-2px), transition: all 0.2s

  TOP — Image area (height: 160px, position: relative, overflow: hidden):
    Event photo (width: 100%, height: 160px, object-fit: cover)
    Note: use relevant stock photos per event type
      (conference hall for flagship, workshop setting for meetup, online/laptop for virtual)

    DATE BADGE — overlaid on image, TOP-LEFT:
      Dark semi-transparent box (rgba 0,0,0,0.75), border-radius: 6px, padding: 6px 10px
      Line 1: Month — "MAY" — font-size: 10px, color: white, font-weight: 700, letter-spacing: 1px
      Line 2: Day — "24" — font-size: 22px, color: white, font-weight: 800, line-height: 1

    EVENT TYPE BADGE — overlaid on image, BOTTOM-LEFT:
      Colored pill — border-radius: 4px, padding: 3px 8px, font-size: 10px,
      font-weight: 700, letter-spacing: 0.05em, text-transform: uppercase
      Colors:
        Group Meetup: bg #E3EAF8, color #2456A0
        Community Conference: bg #E0F5EC, color #1A7A4A
        Flagship Event: bg #FDECEA, color #C84B2F
        Virtual: bg #EDE8FA, color #5B3DB5
        Hybrid: bg #FEF3D8, color #8A6200

    BOOKMARK — overlaid on image, TOP-RIGHT:
      White bookmark outline icon, 18px, cursor: pointer
      On save: turns orange

  BOTTOM — Card body (padding: 16px):

    ROW 1: Event title
      Font-size: 16px, font-weight: 700, color: #1D2B53
      Max 2 lines with ellipsis. Margin-bottom: 8px

    ROW 2: Date & Time row
      📅 icon (gray 14px) + date/time text — font-size: 13px, color: #666666

    ROW 3: Location row
      📍 icon (gray 14px) + location text — font-size: 13px, color: #666666
      Margin-bottom: 10px

    ROW 4: Attendee avatars + count
      4–5 overlapping circular avatar images (28px each, -8px margin, border: 2px white)
      "+ N attending" in gray 12px, margin-left: 6px

    DIVIDER: 1px solid #F0F0F0, margin: 12px 0

    ROW 5: CTA row (space-between):
      Left: Organiser name (tiny avatar 20px + name in gray 12px)
        e.g. "👤 Mundhe Banni" or "👤 Bengaluru Founders Group"

      Right: RSVP / Register button:
        Free event: "RSVP Free" — outlined orange (border: 1.5px solid #E58A2B,
          color: #E58A2B, bg: white)
        Paid event: "Get Tickets" — filled orange (bg: #E58A2B, color: white)
        Full event: "Join Waitlist" — outlined gray (border: #DDDDDD, color: #888888)
        Height: 32px, padding: 0 14px, border-radius: 6px, font-size: 12px, font-weight: 600

THE 8 EVENTS:

  Card 1:
    Type: Group Meetup | Date: May 24 | Title: "Bengaluru Founder Meetup"
    Date/Time: Sat, 24 May · 5:00 PM | Location: Koramangala Social, Bangalore
    Attendees: +42 | Organiser: Bengaluru Founders Group | Button: RSVP Free

  Card 2:
    Type: Community Conference | Date: May 25 | Title: "Startup Funding Workshop"
    Date/Time: Sun, 25 May · 10:00 AM | Location: 91springboard, Bangalore
    Attendees: +86 | Organiser: Mundhe Banni | Button: RSVP Free

  Card 3:
    Type: Group Meetup | Date: May 27 | Title: "Women Founders Circle"
    Date/Time: Tue, 27 May · 7:00 PM | Location: Online
    Attendees: +63 | Organiser: Women Entrepreneurs Group | Button: RSVP Free
    Event type: Virtual (purple badge)

  Card 4:
    Type: Flagship Event | Date: May 30 | Title: "Karnataka Startup Summit 2025"
    Date/Time: Fri–Sat, 30–31 May · 9:30 AM | Location: NIMHANS Convention Centre
    Attendees: +428 | Organiser: Mundhe Banni | Button: Get Tickets
    (This card should be FEATURED — slightly larger, spans 1 column but has an
    orange top border strip 3px to distinguish)

  Card 5:
    Type: Community Conference | Date: Jun 5 | Title: "Agritech Karnataka Conclave"
    Date/Time: Thu, 5 Jun · 11:00 AM | Location: UAS Campus, Bengaluru
    Attendees: +54 | Organiser: Agritech Karnataka | Button: RSVP Free

  Card 6:
    Type: Group Meetup | Date: Jun 8 | Title: "Fintech Builders Monthly Sync"
    Date/Time: Sun, 8 Jun · 4:00 PM | Location: BHIVE Workspace, Bangalore
    Attendees: +38 | Organiser: Fintech Builders Group | Button: RSVP Free

  Card 7:
    Type: Group Meetup | Date: Jun 12 | Title: "SaaS Founders AMA Session"
    Date/Time: Thu, 12 Jun · 6:30 PM | Location: Online
    Attendees: +29 | Organiser: Bengaluru Founders Group | Button: RSVP Free
    Event type: Virtual

  Card 8:
    Type: Community Conference | Date: Jun 15 | Title: "Investor Connect Mysuru"
    Date/Time: Sun, 15 Jun · 10:00 AM | Location: Mysuru, Karnataka
    Attendees: +71 | Organiser: Mundhe Banni | Button: RSVP Free
    Note: This event has an attendance cap — show "32 spots left" in small
    orange text below the button.

LOAD MORE button below the grid (centered):
  "Load More Events" — white bg, 1.5px solid #DDDDDD, color: #555555
  Height: 44px, padding: 0 32px, border-radius: 8px, font-size: 14px, font-weight: 500
```

---

## Section 6 — Event Detail Page

```
Build the Event Detail page. Opens when any event card is clicked.
White background. Max-width: 1100px, centered, padding: 48px.

BREADCRUMB: Home > Events > Group Meetup > Bengaluru Founder Meetup
Same style as page header breadcrumb.

TWO-COLUMN LAYOUT (65/35 split, gap: 48px):

---

LEFT COLUMN — Main content:

BLOCK 1 — Event hero image:
  Full-width image (border-radius: 8px, width: 100%, height: 280px, object-fit: cover)
  Event type badge overlaid on bottom-left (same colored pill as grid cards)

BLOCK 2 — Event title & meta (margin-top: 20px):
  Title: "Bengaluru Founder Meetup"
  Font-size: 28px, font-weight: 800, color: #1D2B53, margin-bottom: 12px

  Meta row (gap: 20px, flex-wrap: wrap):
    📅 "Sat, 24 May 2025 · 5:00 PM – 8:00 PM IST" — font-size: 14px, color: #555555
    📍 "Koramangala Social, Bangalore" — same style, clickable link → opens map
    👥 "Group Meetup · Bengaluru Founders Group" — same style
    👁 "312 views" — gray 13px

  Divider: 1px solid #EAEAEA, margin: 20px 0

BLOCK 3 — About this event:
  Heading: "About This Event"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 12px

  Body text: 3 paragraphs of event description.
  Font-size: 15px, color: #444444, line-height: 1.8

  Sample:
    "Join us for our monthly Bengaluru Founder Meetup — a casual evening of
    conversations, connections, and community for early-stage founders across the city.

    This month's session will feature an open AMA with two founders who recently
    closed their seed rounds. Bring your questions, bring your pitch deck, or just
    come to meet fellow builders.

    The format is informal — 30 minutes of structured conversation followed by
    open networking over drinks and snacks. Capped at 80 attendees to keep it
    intimate and high-quality."

BLOCK 4 — Agenda / Schedule (margin-top: 28px):
  Heading: "Event Schedule"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 16px

  Timeline list — vertical stack:
    Each agenda item: left side = time (gray 13px, min-width 80px) |
    vertical orange line (2px) | right side = session details
    Session name: font-weight: 600, 14px, color: #1D2B53
    Session description: font-size: 13px, color: #888888, margin-top: 2px

  Agenda items:
    5:00 PM — "Doors Open & Networking"
    5:30 PM — "Founder Introductions" · Each founder gets 60 seconds
    6:00 PM — "AMA: Lessons from closing our seed round" · With 2 guest founders
    7:00 PM — "Open Networking" · Food and drinks provided
    8:00 PM — "Wrap Up"

BLOCK 5 — Speakers / Guests (margin-top: 28px):
  Heading: "Featured Guests"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 16px

  2 speaker cards side by side (gap: 16px):
    Each card: border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px 18px
    Row: Avatar (52px circle) + Name (font-weight: 700, 15px) + Role (gray 13px)
    Talk title below: font-size: 13px, color: #E58A2B, margin-top: 6px
    LinkedIn icon link (gray, 16px, right-aligned)

  Speakers:
    1. "Ananya Krishnan" · "Founder, GreenRoute Labs" · "Lessons from our ₹2Cr seed round"
    2. "Rohit Shenoy" · "Co-Founder, AgroStack" · "Finding your first 100 customers"

BLOCK 6 — Venue Map (margin-top: 28px):
  Heading: "Venue"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 12px
  Address text: "Koramangala Social, 118, Koramangala Industrial Layout, Bangalore 560034"
  Font-size: 14px, color: #555555, margin-bottom: 12px

  Map embed area:
    Placeholder box: background: #F0F2F5, border-radius: 8px, height: 200px
    Center content: 📍 icon (orange, 28px) + "Koramangala Social" text (bold 14px)
    + "Get Directions →" link in orange (opens Google Maps)

BLOCK 7 — Post-Event Survey (shown only after event date passes):
  Yellow info box: background: #FFF8E0, border: 1px solid #FFD700, border-radius: 8px,
  padding: 16px 20px
  Text: "This event has ended. Share your feedback to help us improve future events."
  "Rate This Event →" orange link button on the right

BLOCK 8 — Photo Gallery (shown post-event):
  Heading: "Event Photos"
  4-column image grid (gap: 8px, border-radius: 6px each image)
  Last image in grid: overlay with "+12 more" in white bold on semi-dark bg

---

RIGHT COLUMN — Sticky RSVP Panel:
  Position: sticky, top: 88px
  Background: white, border: 1.5px solid #EAEAEA, border-radius: 12px, padding: 24px

  SECTION A — Availability:
    Row: 🟢 "Spots Available" (or 🟡 "Almost Full" or 🔴 "Full — Join Waitlist")
    Font-size: 13px, font-weight: 600, color: #1A7A4A (or amber or red)
    Margin-bottom: 12px

    Capacity bar:
      Label: "42 / 80 registered" — font-size: 13px, color: #888888
      Progress bar: full width, height: 6px, background: #EAEAEA, border-radius: 3px
        Fill: #E58A2B fill up to 52% width
      Margin-bottom: 16px

  SECTION B — RSVP Buttons (3 options stacked):
    Button 1: "✅ Going" — active state (if selected): bg #E0F5EC, border: 2px solid #1A7A4A,
      color: #1A7A4A | default: white bg, border: 1.5px solid #DDDDDD, color: #444444
    Button 2: "⭐ Interested" — active: bg #FFF4E6, border: 2px solid #E58A2B, color: #E58A2B
    Button 3: "❌ Not Going" — default style, smaller, gray text
    Each button: full width, height: 42px, border-radius: 8px, font-size: 14px, font-weight: 600
    Gap between buttons: 8px

    When "Going" is selected — show below:
      "🎉 You're registered! A confirmation has been sent to your email."
      Background: #E0F5EC, border-radius: 6px, padding: 10px 14px
      Font-size: 13px, color: #1A7A4A, margin-top: 10px

  DIVIDER: 1px solid #F0F0F0, margin: 20px 0

  SECTION C — Calendar integration:
    Heading: "Add to Calendar" — font-size: 12px, font-weight: 700, text-transform: uppercase,
    letter-spacing: 0.05em, color: #888888, margin-bottom: 10px

    Two buttons side by side (gap: 8px):
      "📅 Google Calendar" — white bg, border: 1px solid #DDDDDD, color: #555555,
        height: 36px, padding: 0 12px, border-radius: 6px, font-size: 12px, font-weight: 500
      "📥 Download .ics" — same style

  DIVIDER: 1px solid #F0F0F0, margin: 20px 0

  SECTION D — Share:
    Heading: "Share Event" — same heading style
    3 icon buttons: LinkedIn | Twitter/X | Copy Link
    Each: 36px × 36px, border: 1px solid #EAEAEA, border-radius: 6px, gray icon
    Hover: turns orange

  SECTION E — Event QR Code:
    Heading: "Check-In QR Code" — same heading style (visible after RSVP confirmed)
    Small QR code placeholder: 100px × 100px, centered, gray border, border-radius: 6px
    "Show this at the venue entrance" — font-size: 11px, color: #AAAAAA, text-align: center, margin-top: 6px

  SECTION F — Organiser:
    Heading: "Organised by" — same heading style
    Row: Group logo circle (36px) + "Bengaluru Founders Group" (font-weight: 600, 13px)
    "View Group →" — orange link, font-size: 12px, margin-top: 4px

  SECTION G — Cancel RSVP (shown when user has RSVPd Going):
    "Cancel my RSVP" — gray text link, font-size: 12px, text-align: center,
    margin-top: 16px, cursor: pointer
    Note: Available until cut-off time (configurable); hidden after cut-off
```

---

## Section 7 — Post-Event Feedback Modal

```
Build a post-event feedback modal. Triggered after the event date passes
for users who RSVPd "Going".

OVERLAY: full screen, rgba(0,0,0,0.5), z-index: 1000

MODAL BOX:
  White background, border-radius: 12px, padding: 36px 40px
  Width: 500px, max-width: 92vw
  Box-shadow: 0 16px 48px rgba(0,0,0,0.2)

  Close (×) button: top-right, 20px

  TITLE: "How was the event?"
  Font-size: 22px, font-weight: 800, color: #1D2B53, text-align: center

  EVENT CONTEXT STRIP (background: #F7F7F7, border-radius: 8px, padding: 12px 16px, margin: 16px 0):
    Event type badge + Event title + Date (gray 13px)

  OVERALL EXPERIENCE (margin-bottom: 20px):
    Label: "Overall Experience" — font-size: 13px, font-weight: 600, color: #444444
    5 large star icons (32px each, gap: 8px):
      Empty: gray outline star | Hover/selected: filled orange star
      Interactive — clicking a star sets rating

  SESSION RATINGS (for Conference / Flagship events with multiple sessions):
    Label: "Rate Individual Sessions" — same label style
    Show 2–3 session rows:
      Session name (13px, color: #555555) | 5 small star icons (18px) on right
    Gap: 12px between rows

  OPEN FEEDBACK:
    Label: "Any comments or suggestions?"
    Textarea: height 90px, border: 1.5px solid #DDDDDD, border-radius: 8px,
    padding: 12px, font-size: 14px, resize: vertical
    Placeholder: "What did you enjoy? What could be better?"
    Margin-top: 8px

  SUBMIT BUTTON (margin-top: 20px):
    "Submit Feedback"
    Full width, background: #E58A2B, color: white, height: 46px,
    border-radius: 8px, font-size: 15px, font-weight: 700

  SUCCESS STATE:
    Green checkmark (64px circle, #E0F5EC bg, #1A7A4A icon) centered
    "Thank you for your feedback!" — font-size: 18px, font-weight: 700, text-align: center
    Download certificate link (if eligible): "📄 Download Certificate of Participation"
    Orange link, font-size: 14px, margin-top: 12px
    "Close" button: outlined gray, full width, margin-top: 16px
```

---

## Section 8 — Create Event Form (Admin & Group Admin only)

```
Build the Create Event full page. Visible only to Group Admin and Platform Admin.
Accessed from the "+ Create Event" button in the page header.
Max-width: 800px, centered, padding: 48px.

BREADCRUMB: Home > Events > Create Event

PAGE TITLE: "Create New Event"
Font-size: 28px, font-weight: 800, color: #1D2B53, margin-bottom: 6px
Subtitle: "Fill in the details below. Group Meetups are visible only to group members."
Font-size: 14px, color: #666666, margin-bottom: 28px

FORM SECTIONS:

  SECTION A — Event Type Selector
  Heading: "Event Type" — font-size: 15px, font-weight: 700, color: #1D2B53,
  border-bottom: 2px solid #E58A2B, padding-bottom: 8px, margin-bottom: 20px

  3 type selector cards in a horizontal row (gap: 14px):
    Each card: border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 16px 18px,
    cursor: pointer, flex: 1
    Selected state: border-color matching type color, light tint background
    Icon (28px) centered at top + Type name (font-weight: 700, 14px) + Description (gray 12px)

    Card 1: 👥 "Group Meetup" — "Visible only to members of a specific group."
      Selected color: #2456A0
    Card 2: 🌍 "Community Conference" — "Geography-based, open to founders in your city."
      Selected color: #1A7A4A
    Card 3: 🚀 "Flagship Platform Event" — "Platform-wide event for all Mundhe Banni members."
      Selected color: #C84B2F
      Note: Card 3 visible only to Platform Admin role.

  SECTION B — Basic Details (margin-top: 28px)
  Heading: "Event Details"
  Same heading style as Section A

  Field 1 — Event Title:
    Label: "Event Title *"
    Input: full width, height: 44px, border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 0 14px
    Placeholder: "e.g. Bengaluru Founder Meetup — May 2025"

  Field 2 — Description:
    Label: "Description *"
    Textarea: height: 120px, same border style, padding: 12px 14px
    Placeholder: "Tell founders what to expect, who should attend, and what they'll learn."
    Character counter: "0 / 2000"

  Field 3 — Group (shown only when Event Type = Group Meetup):
    Label: "Associated Group *"
    Dropdown: lists all groups the logged-in admin manages
    e.g. "Bengaluru Founders | Women Entrepreneurs | Agritech Karnataka"

  SECTION C — Date & Time (margin-top: 28px)
  Heading: "Date & Time"

  Row of 3 fields side by side (gap: 16px):
    Field 4: "Start Date *" — date picker input
    Field 5: "Start Time *" — time picker (e.g. 5:00 PM)
    Field 6: "End Time *" — time picker (e.g. 8:00 PM)

  Field 7: "Timezone" — dropdown (default: IST — Asia/Kolkata)

  SECTION D — Location & Format (margin-top: 28px)
  Heading: "Location & Format"

  Field 8 — Event Format:
    3 radio button options:
      ○ In-Person  ○ Virtual  ○ Hybrid
    Inline, gap: 24px, font-size: 14px

  Field 9 — Venue Name (shown when In-Person or Hybrid):
    Label: "Venue Name *"
    Input: placeholder "e.g. 91springboard, Koramangala"

  Field 10 — Address (shown when In-Person or Hybrid):
    Label: "Full Address"
    Textarea: height: 64px, placeholder "Street, area, city, pincode"

  Field 11 — Virtual Link (shown when Virtual or Hybrid):
    Label: "Meeting Link"
    Input: type url, placeholder "https://meet.google.com/..."
    Note text below: "Link will be shared only with registered attendees."
    Font-size: 12px, color: #AAAAAA

  SECTION E — Capacity & RSVP (margin-top: 28px)
  Heading: "Capacity & RSVP"

  Field 12 — Max Attendees:
    Label: "Attendee Cap"
    Number input: width 120px, placeholder "e.g. 80"
    Checkbox: "☐ Enable waitlist when capacity is reached" — font-size: 13px, margin-top: 8px

  Field 13 — RSVP Cutoff:
    Label: "RSVP Cut-off Time"
    Dropdown: 1 hour before | 2 hours before | 6 hours before | 24 hours before | No cut-off

  SECTION F — Cover Image (margin-top: 28px)
  Heading: "Cover Image"

  Upload zone: same dashed drag-and-drop style as other pages
  Text: "Upload a cover photo for your event (JPG or PNG, min 1200×600px)"
  Subtext: "This appears on the event card and detail page header."

  SECTION G — Speakers (optional, for Conference/Flagship events, margin-top: 28px)
  Heading: "Speakers & Guests (Optional)"

  Dynamic speaker rows — start with 1 empty row, "+ Add Speaker" adds more:
    Each row: 3 fields side by side
      Name input (40%) | Talk Title input (40%) | LinkedIn URL input (20%)
    Remove (×) button on far right

  "+ Add Speaker" — orange text link, font-size: 14px

  SUBMIT ROW (margin-top: 32px, border-top: 1px solid #EAEAEA, padding-top: 24px):
    "Save as Draft" — white bg, gray border, color: #555555, height: 44px, padding: 0 24px, border-radius: 8px
    "Publish Event →" — orange filled, white text, height: 44px, padding: 0 28px, border-radius: 8px, font-weight: 700
    Gap: 12px
```

---

## Responsive Rules

```
TABLET (max-width: 1024px):
  - Event grid: 2 columns
  - Event detail: single column, sticky RSVP panel becomes full-width section below description
  - Hero banner: single column, speaker cards hidden
  - Filter bar: wrap to 2 rows

MOBILE (max-width: 768px):
  - Event grid: horizontal scroll (overflow-x: auto, snap scrolling, card width: 85vw)
  - Category pills: horizontal scroll
  - Filter bar: collapses to "Filter & Sort" pill button, opens bottom drawer
  - Hero banner: single column, countdown only, 1 CTA button
  - Event detail: full width single column
  - RSVP panel: fixed bottom bar (RSVP button + spot count), full width, height: 60px,
    z-index: 1000, white bg, box-shadow above
  - Create Event form: full width, all fields stacked, section headings sticky
  - Page horizontal padding: 16px
```
