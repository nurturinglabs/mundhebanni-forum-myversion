# Mundhe Banni — Resources Page — Qwikbuild Agent Prompt

> **How to use this:** Feed each section to the qwikbuild agent one block at a time. Start with the Design System, then build top to bottom.

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
```

---

## Section 1 — Page Header & Breadcrumb

```
Build a page header section. White background. Border-bottom: 1px solid #EAEAEA.
Padding: 20px 48px 0 48px.

ROW 1 — Breadcrumb trail (padding-bottom: 12px):
  Format: Home > Resources
  "Home" — font-size: 13px, color: #E58A2B, clickable link
  " > " separator — color: #AAAAAA
  "Resources" — font-size: 13px, color: #888888, not clickable
  Margin-bottom: 8px

ROW 2 — Page title row:
  Left column:
    Title: "Resource Library" — font-size: 32px, font-weight: 800, color: #1D2B53
    Subtitle below: "Curated guides, templates, whitepapers and videos to help your startup grow."
    Font-size: 15px, color: #666666, margin-top: 6px

  Right column (aligned to vertical center of title):
    Button: "📤 Upload Resource"
    Background: #E58A2B, color: white, height: 40px, padding: 0 20px,
    border-radius: 8px, font-weight: 600, font-size: 14px
    Note: This button is only visible to users with SME or Admin role.
    For regular Founders: hide this button.
```

---

## Section 2 — Category Quick Filter Tiles

```
Build a horizontal row of category browse tiles immediately below the page header.
Background: #F7F7F7. Padding: 20px 48px. Border-bottom: 1px solid #EAEAEA.

Show 8 category tiles in a single horizontal scrollable row. Gap: 12px.

Each tile — white background, border: 1px solid #EAEAEA, border-radius: 8px,
padding: 12px 18px, cursor: pointer, display: flex, align-items: center, gap: 10px.
Hover state: border-color: #E58A2B, box-shadow: 0 2px 8px rgba(229,138,43,0.15)
Active/selected state: background: #FFF4E6, border-color: #E58A2B

Each tile contains:
  - Colored emoji or SVG icon (20px)
  - Category name: font-size: 14px, font-weight: 500, color: #1D2B53
  - Count badge: small gray pill showing number of resources, font-size: 11px

THE 8 CATEGORIES:
  1. 📚 All Resources — count: 124
  2. 📘 eBooks — count: 28
  3. 📄 Whitepapers — count: 19
  4. 🖼️ Infographics — count: 15
  5. 🎬 Videos — count: 22
  6. 🎙️ Webinars — count: 18
  7. 📋 Case Studies — count: 14
  8. 🎧 Podcasts — count: 8

"All Resources" tile is selected/active by default (orange border and background).
```

---

## Section 3 — Search & Filter Bar

```
Build a search and filter bar. White background. Padding: 24px 48px.
Border-bottom: 1px solid #EAEAEA.

Layout: single horizontal row, all items aligned vertically. Gap: 12px.

ITEM 1 — Search input (flex: 1, max-width: 420px):
  Placeholder: "Search resources, topics, authors…"
  Height: 40px, border: 1.5px solid #DDDDDD, border-radius: 8px
  Padding-left: 36px (space for search icon)
  Search icon (gray, 16px) positioned inside on the left
  Font-size: 14px, color: #333333

ITEM 2 — Type filter dropdown:
  Label prefix: "Type:" in gray 13px
  Dropdown: height 40px, border: 1.5px solid #DDDDDD, border-radius: 8px
  Padding: 0 12px, font-size: 14px
  Options: All Types | eBook | Whitepaper | Infographic | Video | Webinar | Case Study | Podcast | Datasheet

ITEM 3 — Topic filter dropdown:
  Label prefix: "Topic:" in gray 13px
  Dropdown same style as Type
  Options: All Topics | Fundraising | Product | Legal | Marketing | Operations | Technology | Finance | HR

ITEM 4 — Language filter dropdown:
  Label prefix: "Language:" in gray 13px
  Options: All Languages | English | Kannada

ITEM 5 — Sort dropdown:
  Label prefix: "Sort:" in gray 13px
  Options: Relevance | Newest First | Most Downloaded | Top Rated

ITEM 6 — View toggle (right-aligned, margin-left: auto):
  Two icon buttons side by side (gap: 4px):
    Grid view icon (4 squares) — active state: #E58A2B background, white icon
    List view icon (horizontal lines) — inactive state: white background, gray icon
  Each button: 36px × 36px, border: 1px solid #DDDDDD, border-radius: 6px

Show result count below this bar, left-aligned:
  "Showing 124 resources" — font-size: 13px, color: #888888, padding-top: 12px
```

---

## Section 4 — Featured Resource Banner

```
Build a featured resource banner. Placed between the filter bar and the resource grid.
Margin: 0 48px 32px 48px.
Background: linear-gradient from #1D2B53 (left) to #2E4080 (right).
Border-radius: 12px. Padding: 28px 36px.
Overflow: hidden. Position: relative.

TWO-COLUMN LAYOUT (60/40 split):

LEFT COLUMN:
  - Small pill label at top:
      Background: rgba(229,138,43,0.2), color: #E58A2B
      Text: "⭐ Featured Resource"
      Font-size: 11px, font-weight: 600, letter-spacing: 0.06em
      Padding: 4px 10px, border-radius: 20px, margin-bottom: 14px

  - Title: "Karnataka Startup Ecosystem Report 2025"
    Font-size: 24px, font-weight: 800, color: white, line-height: 1.3
    Margin-bottom: 10px

  - Description: "A comprehensive analysis of funding trends, sector growth, and founder insights from Karnataka's startup ecosystem over the last 12 months."
    Font-size: 14px, color: rgba(255,255,255,0.75), line-height: 1.6
    Max-width: 460px, margin-bottom: 20px

  - Metadata row (gap: 20px):
      📄 Whitepaper — font-size: 13px, color: rgba(255,255,255,0.6)
      ⬇ 3,240 Downloads — same style
      ⭐ 4.8 Rating — same style

  - Two buttons side by side (gap: 12px, margin-top: 20px):
    Button 1: "Download Free" — background: #E58A2B, color: white,
      height: 42px, padding: 0 24px, border-radius: 8px, font-weight: 600
    Button 2: "Quick Preview" — background: transparent, color: white,
      border: 1.5px solid rgba(255,255,255,0.4), height: 42px,
      padding: 0 24px, border-radius: 8px, font-weight: 500

RIGHT COLUMN:
  - Decorative cover image mockup:
      White card (border-radius: 8px, box-shadow: 0 8px 32px rgba(0,0,0,0.3))
      Sized approx 200px × 260px
      Inside: show a placeholder report cover with the title text and
      a simple Karnataka map outline or growth chart graphic in #1D2B53 and #E58A2B
      Position: slightly rotated 3 degrees clockwise, centered in column
```

---

## Section 5 — Resource Grid (Main Content Area)

```
Build the main resource grid section. White background. Padding: 32px 48px 48px.

TWO-COLUMN LAYOUT:
  Left: Sidebar filter panel (width: 240px, flex-shrink: 0)
  Right: Resource cards grid (flex: 1)
  Gap: 32px between sidebar and grid

---

LEFT SIDEBAR — FILTER PANEL:
White background, border: 1px solid #EAEAEA, border-radius: 8px, padding: 20px.
Sticky positioning (stays visible when scrolling).

FILTER GROUP 1 — Format:
  Heading: "Format" — font-size: 13px, font-weight: 700, color: #1D2B53,
  letter-spacing: 0.04em, text-transform: uppercase, margin-bottom: 10px

  Checkbox list (gap: 8px between items):
    Each item: checkbox (orange when checked: #E58A2B) + label
    Label font-size: 14px, color: #444444
  Items: PDF | Video | Audio
  Divider: 1px solid #EAEAEA, margin: 16px 0

FILTER GROUP 2 — Topic / Category:
  Heading: "Topic" — same heading style
  Checkbox list:
  Items: Fundraising | Product Building | Legal & Compliance |
         Marketing & Growth | Operations | Technology | Finance | Human Resources
  "Show more" link in orange below if list exceeds 6 items
  Divider

FILTER GROUP 3 — Date Published:
  Heading: "Date Published" — same heading style
  Four radio buttons (orange when selected):
    ○ Any time
    ○ Last 30 days
    ○ Last 3 months
    ○ Last year
  Divider

FILTER GROUP 4 — Rating:
  Heading: "Minimum Rating" — same heading style
  Five star rating selector:
    Row of 5 stars — clicking a star sets minimum rating filter
    Stars: filled orange (#E58A2B) up to selected rating, gray after
    Label below: "4★ & above" in gray 13px
  Divider

FILTER GROUP 5 — Language:
  Heading: "Language" — same heading style
  Checkbox list:
    ☑ English (shown checked by default)
    ☐ Kannada
  Clear all link at bottom of sidebar:
    "Clear all filters" — font-size: 13px, color: #E58A2B, cursor: pointer

---

RIGHT SIDE — RESOURCE CARDS GRID:
Default view: grid with 3 columns. Gap: 20px.
(2 columns on tablet, 1 column on mobile)

Build 9 resource cards total (3 rows × 3 cards) as the default view.

EACH RESOURCE CARD — border: 1px solid #EAEAEA, border-radius: 8px,
overflow: hidden, background: white,
transition: box-shadow 0.2s on hover (hover: box-shadow 0 4px 16px rgba(0,0,0,0.1)):

  TOP — Thumbnail area (height: 140px, overflow: hidden, position: relative):
    - Placeholder cover image (relevant illustration for the resource topic)
      width: 100%, height: 140px, object-fit: cover
    - Resource type badge overlaid on TOP-LEFT:
        Colored pill: border-radius: 4px, padding: 3px 8px,
        font-size: 10px, font-weight: 700, letter-spacing: 0.06em, text-transform: uppercase
        Colors by type:
          eBook — background: #E3EAF8, color: #2456A0
          Whitepaper — background: #EDE8FA, color: #5B3DB5
          Infographic — background: #FFF0E0, color: #C06000
          Video — background: #FDECEA, color: #C0392B
          Webinar — background: #E0F5EC, color: #1A7A4A
          Case Study — background: #FFF8E0, color: #8A6200
          Podcast — background: #F0E8FA, color: #7B2FBE
    - Bookmark icon overlaid on TOP-RIGHT:
        Gray bookmark outline icon, 18px, cursor: pointer
        On click: turns orange (#E58A2B) — saved state

  BOTTOM — Card body (padding: 14px 16px 16px):

    ROW 1: Title
      Font-size: 15px, font-weight: 700, color: #1D2B53
      Max 2 lines with ellipsis overflow
      Margin-bottom: 6px, line-height: 1.4

    ROW 2: Short description
      Font-size: 13px, color: #777777, line-height: 1.5
      Max 2 lines with ellipsis
      Margin-bottom: 10px

    ROW 3: Author + Date row
      Left: Author name — font-size: 12px, color: #888888
      Right: Published date — font-size: 12px, color: #AAAAAA
      Display: space-between

    ROW 4: Topic tags (margin-top: 8px)
      Show max 2 topic tag pills:
        Background: #F3F4F6, color: #555555
        Font-size: 11px, padding: 3px 8px, border-radius: 4px, gap: 6px
      If more than 2 tags: show "+N more" in gray

    ROW 5: Stats + CTA row (margin-top: 12px, border-top: 1px solid #F0F0F0, padding-top: 12px)
      Left side (gap: 14px):
        ⬇ download count — font-size: 12px, color: #888888 (e.g. "⬇ 1.2K")
        ★ rating — font-size: 12px, color: #E58A2B (e.g. "★ 4.7")
      Right side:
        CTA button — depends on resource access type:
          Open resource: "Download" — background: #E58A2B, color: white,
            height: 30px, padding: 0 14px, border-radius: 6px, font-size: 12px, font-weight: 600
          Gated resource: "🔒 Get Access" — background: white,
            color: #E58A2B, border: 1.5px solid #E58A2B,
            height: 30px, padding: 0 14px, border-radius: 6px, font-size: 12px, font-weight: 600

THE 9 SAMPLE RESOURCE CARDS:

  Card 1:
    Type: eBook | Title: "The Founder's Fundraising Handbook" | Author: Mundhe Banni Team
    Date: Jan 2025 | Tags: Fundraising, Finance | Downloads: 3.8K | Rating: 4.9 | Access: Open

  Card 2:
    Type: Whitepaper | Title: "Karnataka Startup Ecosystem Report 2025" | Author: KCG Research
    Date: Feb 2025 | Tags: Ecosystem, Strategy | Downloads: 3.2K | Rating: 4.8 | Access: Gated

  Card 3:
    Type: Video | Title: "How to Build a Pitch Deck That Converts" | Author: Ravi Shenoy
    Date: Mar 2025 | Tags: Fundraising, Product | Downloads: 2.1K | Rating: 4.7 | Access: Open

  Card 4:
    Type: Case Study | Title: "Agritech Scale-Up: From 0 to 10K Farmers" | Author: GreenRoot Team
    Date: Dec 2024 | Tags: Agritech, Operations | Downloads: 1.4K | Rating: 4.6 | Access: Open

  Card 5:
    Type: Infographic | Title: "India Startup Funding Map 2024" | Author: Mundhe Banni Research
    Date: Nov 2024 | Tags: Fundraising, Ecosystem | Downloads: 5.1K | Rating: 4.5 | Access: Open

  Card 6:
    Type: Webinar | Title: "ESOP Basics for Early Stage Founders" | Author: LegalEdge Associates
    Date: Mar 2025 | Tags: Legal, HR | Downloads: 980 | Rating: 4.8 | Access: Gated

  Card 7:
    Type: Podcast | Title: "Building in Bharat — Episode 12: SaaS GTM" | Author: Mundhe Banni FM
    Date: Apr 2025 | Tags: Product, Marketing | Downloads: 760 | Rating: 4.6 | Access: Open

  Card 8:
    Type: eBook | Title: "Legal Checklist for Startups — India Edition" | Author: LegalEdge
    Date: Feb 2025 | Tags: Legal, Compliance | Downloads: 2.9K | Rating: 4.9 | Access: Open

  Card 9:
    Type: Case Study | Title: "How FinTax Helped 3 Startups Raise Series A" | Author: FinTax Team
    Date: Jan 2025 | Tags: Finance, Fundraising | Downloads: 1.1K | Rating: 4.7 | Access: Gated

Below the grid: pagination bar (centered):
  Previous arrow | Page 1 | 2 | 3 | … | 11 | Next arrow
  Active page: orange filled circle, white number
  Other pages: white background, gray number, border: 1px solid #EAEAEA
  Each page item: 36px × 36px, border-radius: 6px
```

---

## Section 6 — Gated Resource Modal (Triggered on "Get Access" click)

```
Build a modal overlay triggered when a user clicks "🔒 Get Access" on any gated resource card.

OVERLAY: full screen, background: rgba(0,0,0,0.5), z-index: 1000, centered

MODAL BOX:
  Background: white, border-radius: 12px, padding: 36px 40px
  Width: 480px, max-width: 90vw
  Box-shadow: 0 16px 48px rgba(0,0,0,0.2)

  Close button (×) — top-right corner: 20px, color: #888888

  ICON: lock icon in orange circle (56px, background: #FFF0E0)
  centered at top, margin-bottom: 16px

  TITLE: "Unlock This Resource"
  Font-size: 22px, font-weight: 800, color: #1D2B53, text-align: center

  RESOURCE NAME (truncated): shown in gray italic below title
  Font-size: 14px, color: #888888, text-align: center, margin-bottom: 24px

  FORM (if user is NOT logged in):
    Field 1: "Full Name" — text input, full width, height: 44px,
      border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 0 14px
    Field 2: "Email Address" — email input, same style
    Margin between fields: 14px

  NOTE (if user IS logged in):
    Show user's name and email pre-filled in gray read-only fields
    Note text: "We'll send the download link to your registered email."
    Font-size: 13px, color: #666666, margin-bottom: 16px

  PRIVACY NOTE:
    "🔒 Your information is safe. We do not share your data with third parties."
    Font-size: 12px, color: #AAAAAA, text-align: center, margin: 12px 0

  SUBMIT BUTTON: "Get Free Access →"
    Full width, background: #E58A2B, color: white, height: 46px,
    border-radius: 8px, font-size: 15px, font-weight: 700, no border

  Below button: already have access? "Login to download instantly" — orange link
```

---

## Section 7 — Resource Detail Page

```
Build the Resource Detail page layout. This page opens when a user clicks a resource card title.
White background. Max-width: 1100px, centered, padding: 48px.

BREADCRUMB: Home > Resources > eBooks > [Resource Title]
Same breadcrumb style as the page header.

TWO-COLUMN LAYOUT (65/35 split, gap: 48px):

LEFT COLUMN — Main content:

  BLOCK 1 — Resource type badge + title:
    Type badge pill (same color scheme as cards, e.g. blue for eBook)
    Title: font-size: 28px, font-weight: 800, color: #1D2B53, margin-top: 10px, line-height: 1.3

  BLOCK 2 — Author + meta row (margin-top: 14px, padding-bottom: 16px, border-bottom: 1px solid #EAEAEA):
    Author avatar (32px circle) + author name (font-weight: 600, 14px) + "Published Feb 2025" (gray 13px)
    Then below: 3 meta chips in a row with gap 16px:
      📄 PDF · 2.4 MB | ⬇ 3,240 Downloads | ⭐ 4.8 (142 ratings)
      All: font-size: 13px, color: #666666

  BLOCK 3 — Topic tags row (margin-top: 14px):
    Pills same style as card tags. Show all topic tags.

  BLOCK 4 — Full description (margin-top: 20px):
    Heading: "About This Resource" — font-size: 16px, font-weight: 700, color: #1D2B53
    Body: full long description text (3–4 paragraphs)
    Font-size: 15px, color: #444444, line-height: 1.8

  BLOCK 5 — What You'll Learn (margin-top: 28px):
    Heading: "What You'll Learn" — same heading style
    Bulleted list of 4–6 learning outcomes:
      Each bullet: checkmark ✓ in orange + text in #444444, font-size: 14px, line-height: 2

  BLOCK 6 — Ratings & Reviews (margin-top: 36px, border-top: 1px solid #EAEAEA, padding-top: 28px):
    Heading: "Ratings & Reviews" — same heading style
    Summary row:
      Large rating number: "4.8" — font-size: 48px, font-weight: 800, color: #1D2B53
      Star row: 5 stars (4 filled orange, last one half-filled)
      "Based on 142 ratings" — gray 13px
    5 recent review cards (margin-top: 20px):
      Each: reviewer avatar (32px) + name + date | star rating | review text
      Font-size: 14px, color: #444444, line-height: 1.6
    "Write a review" CTA — outlined orange button

  BLOCK 7 — Related Resources (margin-top: 36px, border-top: 1px solid #EAEAEA, padding-top: 28px):
    Heading: "Related Resources"
    Show 3 resource cards in a horizontal row (compact version, no description,
    just thumbnail + title + type badge + download button)

RIGHT COLUMN — Sticky download panel:
  Position: sticky, top: 88px (below navbar)
  Background: white, border: 1.5px solid #EAEAEA, border-radius: 12px, padding: 24px

  Cover image (full width, height: 180px, object-fit: cover, border-radius: 8px, margin-bottom: 20px)

  Access type label:
    If Open: "🟢 Free Resource" — green text, font-size: 13px, font-weight: 600
    If Gated: "🔒 Gated Resource" — orange text, font-size: 13px, font-weight: 600

  Primary CTA button (full width, margin-top: 16px):
    Open: "⬇ Download Now" — orange filled
    Gated: "🔒 Get Free Access" — orange filled
    Height: 46px, border-radius: 8px, font-weight: 700, font-size: 15px

  File info (margin-top: 16px, padding-top: 16px, border-top: 1px solid #F0F0F0):
    📄 Format: PDF
    📦 File size: 2.4 MB
    🗓 Published: February 2025
    Each line: font-size: 13px, color: #666666, line-height: 2

  Share row (margin-top: 16px, padding-top: 16px, border-top: 1px solid #F0F0F0):
    "Share:" label in gray 13px
    3 icon buttons: LinkedIn | Twitter/X | Copy Link
    Each: 32px × 32px, border: 1px solid #EAEAEA, border-radius: 6px, gray icon
    Hover: icon turns orange

  Bookmark button (full width, margin-top: 12px):
    "🔖 Save to Library" — white background, orange border, orange text
    Height: 38px, border-radius: 8px, font-size: 14px, font-weight: 500
```

---

## Section 8 — Upload Resource Form (SME & Admin only)

```
Build the Upload Resource page/modal. Accessible from the "📤 Upload Resource" button.
Show as a full page (not modal). Max-width: 760px, centered, padding: 48px.

BREADCRUMB: Home > Resources > Upload Resource

PAGE TITLE: "Upload a Resource"
Font-size: 28px, font-weight: 800, color: #1D2B53
Subtitle: "Share your knowledge with the Mundhe Banni community. Your submission will be reviewed before publishing."
Font-size: 14px, color: #666666, margin-top: 6px, margin-bottom: 32px

STATUS NOTE BOX:
  Background: #FFF4E6, border: 1px solid #FFDAA0, border-radius: 8px, padding: 14px 18px
  Icon: ⏳ + text: "After submission, your resource will be reviewed by a platform admin before going live. You'll receive an email notification once approved."
  Font-size: 13px, color: #8A5200

FORM SECTIONS:

  SECTION A — Basic Details
  Section heading: "Basic Details" — font-size: 15px, font-weight: 700, color: #1D2B53,
  border-bottom: 2px solid #E58A2B, padding-bottom: 8px, margin-bottom: 20px

  Field 1 — Resource Title:
    Label: "Title *" font-size: 13px, font-weight: 600, color: #444444
    Input: full width, height: 44px, border: 1.5px solid #DDDDDD, border-radius: 8px,
    placeholder: "e.g. The Founder's Guide to Fundraising"
    Character counter bottom-right: "0 / 100"

  Field 2 — Resource Type:
    Label: "Resource Type *"
    Dropdown: height 44px, same border style
    Options: Select type | eBook | Whitepaper | Infographic | Video | Webinar | Case Study | Podcast | Datasheet

  Field 3 — Description:
    Label: "Description *"
    Textarea: height 120px, same border style, resize: vertical
    Placeholder: "Provide a clear description of what this resource covers and who it's for."
    Character counter: "0 / 1000"

  Field 4 — Author / Publisher Name:
    Label: "Author / Publisher"
    Input: pre-filled with logged-in user's display name, editable

  SECTION B — Topic & Tags (margin-top: 28px)
  Section heading: "Topic & Tags"

  Field 5 — Primary Topic:
    Label: "Primary Topic *"
    Dropdown: All Topics | Fundraising | Product Building | Legal & Compliance |
    Marketing & Growth | Operations | Technology | Finance | Human Resources

  Field 6 — Tags:
    Label: "Tags (up to 5)"
    Tag input field: type to search existing tags, press Enter or comma to add
    Selected tags shown as removable orange pills below the input
    Hint text: "Add up to 5 relevant tags to help founders find your resource."

  SECTION C — Files & Media (margin-top: 28px)
  Section heading: "Files & Media"

  Field 7 — File Upload:
    Label: "Upload File *"
    Drag-and-drop zone:
      Background: #F7F9FF, border: 2px dashed #AAAACC, border-radius: 8px,
      padding: 32px, text-align: center, cursor: pointer
      Icon: 📁 (32px, #888888)
      Primary text: "Drag & drop your file here or click to browse"
      Font-size: 14px, color: #666666
      Secondary text: "Supported: PDF, MP4, MP3. Max size: 50MB"
      Font-size: 12px, color: #AAAAAA
    On file selected: show file name, size, and a remove (×) button

  Field 8 — Cover Image:
    Label: "Cover Image"
    Same drag-and-drop zone, smaller height
    Text: "Upload a cover thumbnail (PNG or JPG, min 400×300px)"
    Hint: "Used as the card thumbnail in the resource library."

  Field 9 — Access Type:
    Label: "Access Type *"
    Two radio button cards side by side:
      Card 1: "🌐 Open Access" — Anyone can download without a form
        Background: white, border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 14px 18px
      Card 2: "🔒 Gated Access" — Visitors must submit their name and email to download
        Same style
      Selected card: border-color: #E58A2B, background: #FFF8F0

  SUBMIT ROW (margin-top: 32px, border-top: 1px solid #EAEAEA, padding-top: 24px):
    Two buttons:
      "Save as Draft" — white bg, gray border, gray text, height 44px, padding 0 24px, border-radius 8px
      "Submit for Review →" — orange filled, white text, height 44px, padding 0 24px, border-radius 8px, font-weight 700
    Note below: "Submitting will notify the admin team for review. You'll receive an email update."
    Font-size: 12px, color: #AAAAAA
```

---

## Responsive Rules

```
TABLET (max-width: 1024px):
  - Resource grid: 2 columns
  - Filter sidebar: collapses into a "Filters" button that opens a drawer from left
  - Featured banner: stack to single column, cover image below text
  - Resource detail: single column, sticky panel becomes full-width section below description

MOBILE (max-width: 768px):
  - Category tiles: horizontal scroll (overflow-x: auto, snap scrolling, no wrap)
  - Resource grid: 1 column
  - Filter bar: collapses to a single "Filter & Sort" pill button,
    opens a bottom drawer on tap
  - Search bar: full width, stacked above filter button
  - Featured banner: single column, cover image hidden on mobile
  - Upload form: full width, single column, all fields stacked
  - Page horizontal padding: 16px
```
