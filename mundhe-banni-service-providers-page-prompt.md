# Mundhe Banni — Service Providers Page — Qwikbuild Agent Prompt

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
Verified badge color: #1A7A4A (green)
```

---

## Section 1 — Page Header & Breadcrumb

```
Build a page header section. White background. Border-bottom: 1px solid #EAEAEA.
Padding: 20px 48px 24px 48px.

ROW 1 — Breadcrumb:
  Format: Home > Service Providers
  "Home" — font-size: 13px, color: #E58A2B, clickable link
  " > " separator — color: #AAAAAA
  "Service Providers" — font-size: 13px, color: #888888, not clickable
  Margin-bottom: 12px

ROW 2 — Title row (two-column, space-between):
  LEFT:
    Title: "Service Provider Directory"
    Font-size: 32px, font-weight: 800, color: #1D2B53, margin-bottom: 6px

    Subtitle: "Discover verified legal, finance, technology, and marketing experts
    trusted by Karnataka's founder community."
    Font-size: 15px, color: #666666, max-width: 560px

  RIGHT (aligned to vertical center):
    Stats row — 3 items separated by vertical dividers (1px #EAEAEA), gap: 24px:
      Item 1: "140+" in bold #1D2B53 + "Active Providers" in gray 13px below
      Item 2: "6" in bold #1D2B53 + "Categories" in gray 13px below
      Item 3: "✓ Verified" in bold #1A7A4A + "All Listings Reviewed" in gray 13px below

    Below stats row, right-aligned:
      Button: "📋 List Your Business"
      Background: #E58A2B, color: white, height: 40px, padding: 0 20px,
      border-radius: 8px, font-weight: 600, font-size: 14px
      Note: Visible to all logged-in users with Service Provider role,
      or show to all users with label "Apply to be listed"
```

---

## Section 2 — Category Browse Tiles

```
Build a horizontal row of category tiles. Background: #F7F7F7.
Padding: 20px 48px. Border-bottom: 1px solid #EAEAEA.

Show 7 category tiles in a single row. Gap: 12px. Allow horizontal scroll if needed.

Each tile:
  White background, border: 1px solid #EAEAEA, border-radius: 8px,
  padding: 14px 20px, cursor: pointer,
  display: flex, flex-direction: column, align-items: center, gap: 8px, min-width: 110px
  Hover: border-color: #E58A2B, box-shadow: 0 2px 8px rgba(229,138,43,0.15)
  Active state: background: #FFF4E6, border-color: #E58A2B

Each tile contains:
  - Large emoji or colored icon (28px)
  - Category name: font-size: 13px, font-weight: 600, color: #1D2B53, text-align: center
  - Provider count: font-size: 11px, color: #AAAAAA (e.g. "28 providers")

THE 7 CATEGORIES:
  1. ⚖️ Legal — 28 providers
  2. 💰 Finance — 24 providers
  3. 💻 Technology — 38 providers
  4. 📣 Marketing — 22 providers
  5. 👥 HR & Talent — 14 providers
  6. ⚙️ Operations — 10 providers
  7. 🏢 All Categories — 140 providers

"All Categories" tile is selected/active by default (orange border and background).
```

---

## Section 3 — Search & Filter Bar

```
Build the search and filter bar. White background. Padding: 20px 48px.
Border-bottom: 1px solid #EAEAEA.

LAYOUT: Single horizontal row, all items vertically aligned. Gap: 12px.

ITEM 1 — Search input (flex: 1, max-width: 400px):
  Placeholder: "Search by company name, service, or keyword…"
  Height: 42px, border: 1.5px solid #DDDDDD, border-radius: 8px
  Padding-left: 38px (space for search icon inside)
  Search icon: gray, 16px, positioned inside left side
  Font-size: 14px

ITEM 2 — Category dropdown:
  Label prefix: "Category:" in gray 13px, margin-right: 6px
  Dropdown: height 42px, border: 1.5px solid #DDDDDD, border-radius: 8px,
  padding: 0 12px, font-size: 14px, min-width: 160px
  Options: All Categories | Legal | Finance | Technology | Marketing | HR & Talent | Operations

ITEM 3 — Location dropdown:
  Label prefix: "City:" in gray 13px
  Dropdown same style
  Options: All Cities | Bengaluru | Mysuru | Mangaluru | Hubballi | Belagavi

ITEM 4 — Verified filter toggle:
  Label: "Verified Only"
  Toggle switch: off by default
  When on: orange fill (#E58A2B), pill shape, 36px wide
  Label font-size: 13px, color: #555555

ITEM 5 — Sort dropdown (margin-left: auto):
  Label prefix: "Sort:" in gray 13px
  Options: Featured | Newest | A-Z | Most Enquired

ITEM 6 — View toggle (right of sort):
  Grid icon button + List icon button
  Same style as Resources page:
  Active: orange background + white icon | Inactive: white bg + gray icon
  Each: 36px × 36px, border: 1px solid #DDDDDD, border-radius: 6px

Result count below bar, left-aligned:
  "Showing 140 service providers" — font-size: 13px, color: #888888, padding-top: 10px
```

---

## Section 4 — Featured Provider Banner

```
Build a featured provider banner between the filter bar and the provider grid.
Margin: 24px 48px. Border-radius: 12px. Overflow: hidden.
Background: linear-gradient from #1D2B53 (left) to #253570 (right).
Padding: 28px 36px.

TWO-COLUMN LAYOUT (70/30 split):

LEFT COLUMN:
  Row 1: Small pill label
    Background: rgba(229,138,43,0.2), color: #E58A2B
    Text: "⭐ Featured Provider"
    Font-size: 11px, font-weight: 700, letter-spacing: 0.07em, text-transform: uppercase
    Padding: 4px 10px, border-radius: 20px, margin-bottom: 14px

  Row 2: Company name
    "LegalEdge Associates"
    Font-size: 26px, font-weight: 800, color: white, margin-bottom: 4px

  Row 3: Tagline
    "Trusted startup legal counsel for 200+ Karnataka founders."
    Font-size: 14px, color: rgba(255,255,255,0.7), margin-bottom: 16px

  Row 4: Meta chips row (gap: 20px):
    ⚖️ Legal Services — font-size: 13px, color: rgba(255,255,255,0.6)
    📍 Bangalore — same style
    ✓ Verified Partner — color: #7EEFC0, font-weight: 600

  Row 5: Two buttons (gap: 12px, margin-top: 20px):
    Button 1: "Send Enquiry" — background: #E58A2B, color: white,
      height: 42px, padding: 0 24px, border-radius: 8px, font-weight: 600
    Button 2: "View Profile" — transparent bg, white color,
      border: 1.5px solid rgba(255,255,255,0.4),
      height: 42px, padding: 0 24px, border-radius: 8px, font-weight: 500

RIGHT COLUMN:
  Company logo area:
    White circle (96px, border-radius: 50%, box-shadow: 0 4px 20px rgba(0,0,0,0.3))
    Inside: dark blue background with white scales icon (⚖️) or "LE" initials
    Centered vertically in column

  Below logo (centered):
    "⭐ 4.8" in orange, font-size: 18px, font-weight: 700
    "(120 reviews)" in gray, font-size: 13px
```

---

## Section 5 — Provider Grid (Main Content Area)

```
Build the main provider grid. White background. Padding: 32px 48px 64px.

TWO-COLUMN LAYOUT:
  Left: Sidebar filter panel (width: 240px, flex-shrink: 0)
  Right: Provider cards grid (flex: 1)
  Gap: 32px

---

LEFT SIDEBAR — FILTER PANEL:
White background, border: 1px solid #EAEAEA, border-radius: 8px,
padding: 20px, position: sticky, top: 88px.

FILTER GROUP 1 — Category:
  Heading: "Category" — font-size: 12px, font-weight: 700, color: #1D2B53,
  letter-spacing: 0.06em, text-transform: uppercase, margin-bottom: 10px

  Checkbox list (gap: 9px):
    Each: orange checkbox when checked (#E58A2B) + label
    Font-size: 14px, color: #444444
    Show provider count in gray after label: (28)
  Items:
    ☑ All Categories (140)
    ☐ Legal (28)
    ☐ Finance (24)
    ☐ Technology (38)
    ☐ Marketing (22)
    ☐ HR & Talent (14)
    ☐ Operations (10)
  Divider: 1px solid #EAEAEA, margin: 16px 0

FILTER GROUP 2 — Location:
  Heading: "City"
  Checkbox list:
    ☐ Bengaluru (98)
    ☐ Mysuru (16)
    ☐ Mangaluru (12)
    ☐ Hubballi (8)
    ☐ Belagavi (6)
  Divider

FILTER GROUP 3 — Verification:
  Heading: "Verification Status"
  Two radio buttons:
    ○ All Providers (selected by default)
    ○ Verified Only
  Verified Only radio: when selected shows green dot + "✓ Verified" label
  Divider

FILTER GROUP 4 — Industries Served:
  Heading: "Industries Served"
  Checkbox list:
    ☐ SaaS / Technology
    ☐ Agritech
    ☐ Fintech
    ☐ Edtech
    ☐ Healthcare
    ☐ D2C / E-commerce
  "Show more" link in orange below list
  Divider

FILTER GROUP 5 — Company Size:
  Heading: "Provider Size"
  Checkbox list:
    ☐ Solo / Freelancer
    ☐ Small (2–10 people)
    ☐ Mid-size (11–50 people)
    ☐ Large (50+ people)

  Clear all filters link at bottom:
    "Clear all filters" — font-size: 13px, color: #E58A2B, cursor: pointer, margin-top: 16px

---

RIGHT SIDE — PROVIDER CARDS GRID:
Default: 3 columns, gap: 20px.
(2 columns on tablet, 1 column on mobile)

Build 9 provider cards total (3 rows × 3 columns).

EACH PROVIDER CARD — border: 1px solid #EAEAEA, border-radius: 8px,
background: white, overflow: hidden,
hover: box-shadow 0 4px 16px rgba(0,0,0,0.1), transform: translateY(-2px)
transition: all 0.2s

  TOP BAND — colored accent strip (height: 4px, full width):
    Color matches category:
      Legal: #2456A0 (blue)
      Finance: #1A7A4A (green)
      Technology: #5B3DB5 (purple)
      Marketing: #C84B2F (red)
      HR: #B8760A (amber)
      Operations: #374151 (dark gray)

  CARD BODY — padding: 20px:

    ROW 1 — Logo + Company name + bookmark:
      Left: Company logo circle (52px, border-radius: 50%):
        Colored background matching category, white initial letters or icon inside
        Font-size: 18px, font-weight: 800
      Center: Two lines:
        Company name — font-size: 16px, font-weight: 700, color: #1D2B53
        Category badge — small pill:
          Background: category light bg, color: category dark color
          Font-size: 11px, font-weight: 600, padding: 2px 8px, border-radius: 4px
      Right: Bookmark icon — gray outline, 18px, cursor: pointer
        On save: turns orange

    ROW 2 — Tagline (margin-top: 10px):
      Font-size: 13px, color: #666666, line-height: 1.5
      Max 2 lines with ellipsis

    ROW 3 — Location + Verified badge row (margin-top: 10px, display: flex, gap: 12px):
      📍 City name — font-size: 12px, color: #888888
      If verified: green pill badge:
        Background: #E0F5EC, color: #1A7A4A
        Text: "✓ Verified" — font-size: 11px, font-weight: 700
        Padding: 2px 8px, border-radius: 4px

    ROW 4 — Services tags (margin-top: 10px):
      Show 2–3 service type pills:
        Background: #F3F4F6, color: #555555
        Font-size: 11px, padding: 3px 8px, border-radius: 4px, gap: 6px
      If more: "+N more" in gray

    DIVIDER: 1px solid #F0F0F0, margin: 14px 0

    ROW 5 — CTA row (display: flex, justify-content: space-between, align-items: center):
      Left: View count — "👁 142 views" — font-size: 12px, color: #AAAAAA

      Right: Two buttons (gap: 8px):
        "View Profile" — white bg, border: 1.5px solid #DDDDDD, color: #1D2B53
          Height: 32px, padding: 0 12px, border-radius: 6px, font-size: 12px, font-weight: 600
        "Send Enquiry" — background: #E58A2B, color: white
          Height: 32px, padding: 0 12px, border-radius: 6px, font-size: 12px, font-weight: 600

THE 9 SAMPLE PROVIDER CARDS:

  Card 1:
    Logo: #1D2B53 bg, "LE" white | Company: LegalEdge Associates
    Category: Legal | Tagline: "Startup legal counsel — incorporation, ESOP, contracts."
    City: Bangalore | Verified: Yes | Services: Incorporation, ESOP, IP
    Views: 312

  Card 2:
    Logo: #E58A2B bg, "FT" white | Company: FinTax Consultants
    Category: Finance | Tagline: "CA firm specialising in startup accounting and tax compliance."
    City: Bangalore | Verified: Yes | Services: Accounting, Taxation, CFO Advisory
    Views: 248

  Card 3:
    Logo: #5B3DB5 bg, "CC" white | Company: CodeCraft Technologies
    Category: Technology | Tagline: "Product engineering and MVP development for early-stage startups."
    City: Bangalore | Verified: Yes | Services: Web Dev, Mobile Apps, AI/ML
    Views: 421

  Card 4:
    Logo: #C84B2F bg, "GH" white | Company: GrowthHackers Agency
    Category: Marketing | Tagline: "Full-funnel digital marketing for B2B and D2C startups."
    City: Bangalore | Verified: Yes | Services: SEO, Paid Ads, Content
    Views: 189

  Card 5:
    Logo: #1A7A4A bg, "TF" white | Company: TalentFirst HR
    Category: HR & Talent | Tagline: "Recruitment and HR policy setup for seed-stage companies."
    City: Bangalore | Verified: No | Services: Recruitment, HR Compliance, Payroll
    Views: 98

  Card 6:
    Logo: #2456A0 bg, "SC" white | Company: StartupCounsel India
    Category: Legal | Tagline: "SEBI-registered legal team for term sheets and investor agreements."
    City: Mysuru | Verified: Yes | Services: Term Sheets, VC Agreements, Compliance
    Views: 176

  Card 7:
    Logo: #374151 bg, "OX" white | Company: OpsXpert
    Category: Operations | Tagline: "Process design and vendor management for scaling startups."
    City: Bangalore | Verified: No | Services: Process Design, Supply Chain, Vendor Mgmt
    Views: 64

  Card 8:
    Logo: #B8760A bg, "HR" white | Company: HireRight Consultants
    Category: HR & Talent | Tagline: "Experienced CHRO-as-a-service for Series A and beyond."
    City: Hubballi | Verified: Yes | Services: CHRO Advisory, Culture, ESOP Admin
    Views: 112

  Card 9:
    Logo: #5B3DB5 bg, "DV" white | Company: DevVerse Studio
    Category: Technology | Tagline: "Design systems and frontend engineering for SaaS products."
    City: Mangaluru | Verified: Yes | Services: UI/UX, Frontend, Design Systems
    Views: 203

PAGINATION BAR (centered, margin-top: 32px):
  Previous arrow | 1 | 2 | 3 | … | 12 | Next arrow
  Active page: orange filled (36px circle), white number
  Others: white bg, gray number, border: 1px solid #EAEAEA
  Each item: 36px × 36px, border-radius: 6px
```

---

## Section 6 — Provider Detail Page

```
Build the Provider Detail page. Opens when "View Profile" is clicked on any card.
White background. Max-width: 1100px, centered, padding: 48px.

BREADCRUMB: Home > Service Providers > Legal > LegalEdge Associates
Same style as page header breadcrumb.

TWO-COLUMN LAYOUT (65/35 split, gap: 48px):

---

LEFT COLUMN — Main content:

BLOCK 1 — Company header (padding-bottom: 24px, border-bottom: 1px solid #EAEAEA):
  Row 1: Logo circle (72px) + company info + verified badge
    Logo circle: 72px, border-radius: 50%, #1D2B53 background, "LE" in white 24px bold
    Right of logo (gap: 14px vertical):
      Company name: font-size: 26px, font-weight: 800, color: #1D2B53
      Tagline: font-size: 14px, color: #666666
      Row: Category badge pill (blue for Legal) + Verified badge (green "✓ Verified")
        + "📍 Bangalore" — all font-size: 12px, gap: 10px

  Row 2: Stats strip (margin-top: 16px):
    3 stat items in a row separated by thin vertical dividers, gap: 24px:
      Item 1: "312" bold #1D2B53 + "Profile Views" gray 12px
      Item 2: "48" bold #1D2B53 + "Enquiries Received" gray 12px
      Item 3: "Since 2022" bold #1D2B53 + "On Platform" gray 12px

BLOCK 2 — About (margin-top: 28px):
  Heading: "About LegalEdge Associates"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 12px

  Body text (2–3 paragraphs):
    "LegalEdge Associates is a Bangalore-based law firm specialising in startup and
    venture capital law. Founded in 2018, we have advised over 200 founders across
    Karnataka on entity formation, fundraising documentation, ESOP structuring,
    IP protection, and regulatory compliance.

    Our team of 8 legal professionals brings deep expertise in SEBI regulations,
    Companies Act compliance, and cross-border investment structures. We work
    exclusively with startups and have a transparent, founder-friendly fee model.

    We are empanelled advisors to three incubators in Karnataka and are recognized
    by DPIIT as a trusted startup services provider."
    Font-size: 15px, color: #444444, line-height: 1.8

BLOCK 3 — Services Catalogue (margin-top: 28px):
  Heading: "Services Offered"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 16px

  Show 5 service items as expandable cards:
    Each service card:
      Background: #F9F9F9, border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px 20px
      Margin-bottom: 10px

      Row: Service name (font-weight: 600, 14px, #1D2B53) + expand arrow icon (right)
      On expand: show description text below (font-size: 13px, color: #666666, line-height: 1.6)
      First card is expanded by default

  The 5 services:
    1. Company Incorporation — "End-to-end Private Limited company registration,
       MOA/AOA drafting, and DPIIT recognition filing."
    2. Fundraising Documentation — "Term sheet review, SHA drafting, SAFE/CCD structuring,
       and investor due diligence support."
    3. ESOP Structuring — "ESOP plan design, board resolution drafting,
       vesting schedule creation, and employee grant letters."
    4. Intellectual Property — "Trademark registration, patent filing,
       and IP assignment agreements for founders."
    5. Regulatory Compliance — "Annual ROC filings, GST registration,
       FEMA compliance for foreign investments."

BLOCK 4 — Industries Served (margin-top: 28px):
  Heading: "Industries Served"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 12px

  Show industry pills:
    Background: #F3F4F6, color: #444444
    Font-size: 13px, padding: 6px 14px, border-radius: 20px, gap: 8px, flex-wrap: wrap
  Items: SaaS | Fintech | Agritech | Edtech | Healthcare | D2C

BLOCK 5 — Reviews (margin-top: 36px, border-top: 1px solid #EAEAEA, padding-top: 28px):
  Heading: "Founder Reviews"
  Font-size: 16px, font-weight: 700, color: #1D2B53

  Rating summary row (margin: 16px 0):
    Large number "4.8" — font-size: 48px, font-weight: 800, color: #1D2B53
    5 orange stars (4 filled, 1 half) below the number
    "Based on 120 reviews" — gray 13px
    (Show this in a box on the left, not spread across the full width)

  3 review cards (margin-top: 20px):
    Each card: border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px
    Row 1: Reviewer avatar (32px circle, gray placeholder) + name (font-weight: 600, 14px)
      + role badge (e.g. "Founder") + date (gray 12px, right-aligned)
    Row 2: Orange star rating (e.g. ★★★★★ 5.0) — font-size: 13px
    Row 3: Review text — font-size: 14px, color: #444444, line-height: 1.6, margin-top: 8px

  Sample reviews:
    Review 1: "Arjun Nair" · Founder · March 2025 · 5 stars
      "LegalEdge handled our Series A documentation flawlessly. Turnaround was fast
      and the team was available on weekends during our closing crunch."
    Review 2: "Priya Kamath" · Founder · Jan 2025 · 5 stars
      "We used them for ESOP structuring. Very thorough, explained everything clearly,
      and the pricing was transparent from day one."
    Review 3: "Rahul Desai" · Co-Founder · Dec 2024 · 4 stars
      "Great for incorporation and compliance. Wish they had a dedicated mobile-friendly
      portal for document tracking, but overall highly recommended."

  "Write a Review" button — outlined orange, margin-top: 16px

BLOCK 6 — Similar Providers (margin-top: 36px, border-top: 1px solid #EAEAEA, padding-top: 28px):
  Heading: "Similar Providers"
  Font-size: 16px, font-weight: 700, color: #1D2B53, margin-bottom: 16px

  3 compact provider cards in a horizontal row (gap: 16px):
    Each compact card: border: 1px solid #EAEAEA, border-radius: 8px, padding: 14px 16px
    Logo circle (40px) + Company name (bold 14px) + Category badge
    "View Profile →" link in orange, font-size: 13px, margin-top: 8px
  Providers: StartupCounsel India | ClearLegal Advisors | TechLaw Partners

---

RIGHT COLUMN — Sticky Contact Panel:
  Position: sticky, top: 88px
  Background: white, border: 1.5px solid #EAEAEA, border-radius: 12px, padding: 24px

  SECTION A — Quick contact header:
    Company logo (56px circle)
    Company name: font-size: 17px, font-weight: 700, color: #1D2B53, margin-top: 12px
    Verified badge pill (if verified): green background, "✓ Verified Partner"
    Font-size: 11px, font-weight: 700, padding: 3px 10px, border-radius: 20px, margin-top: 6px

  SECTION B — Primary CTA (margin-top: 20px):
    Button: "✉ Send Enquiry"
    Full width, background: #E58A2B, color: white, height: 46px,
    border-radius: 8px, font-weight: 700, font-size: 15px

    Secondary button (margin-top: 10px): "🌐 Visit Website"
    Full width, white bg, border: 1.5px solid #DDDDDD, color: #1D2B53,
    height: 42px, border-radius: 8px, font-weight: 500, font-size: 14px

  DIVIDER: 1px solid #F0F0F0, margin: 20px 0

  SECTION C — Contact info:
    Heading: "Contact Details"
    Font-size: 12px, font-weight: 700, color: #1D2B53, letter-spacing: 0.05em,
    text-transform: uppercase, margin-bottom: 12px

    Each row: icon + value, font-size: 13px, color: #555555, line-height: 2.2
      📍 Bangalore, Karnataka
      🌐 legaledge.in (clickable orange link)
      📧 hello@legaledge.in (shown only if provider set email as public)

  DIVIDER: 1px solid #F0F0F0, margin: 20px 0

  SECTION D — Quick stats:
    Heading: "Provider Stats"
    Same heading style
    Two rows:
      👁 312 Profile Views
      ✉ 48 Enquiries Received
    Font-size: 13px, color: #666666, line-height: 2.2

  DIVIDER: 1px solid #F0F0F0, margin: 20px 0

  SECTION E — Share:
    Heading: "Share This Profile"
    3 icon buttons: LinkedIn | Twitter/X | Copy Link
    Each: 36px × 36px, border: 1px solid #EAEAEA, border-radius: 6px, gray icon
    Hover: icon turns orange

  SECTION F — Bookmark:
    Full-width button: "🔖 Save Provider"
    White bg, orange border, orange text
    Height: 38px, border-radius: 8px, font-size: 14px, font-weight: 500, margin-top: 12px
```

---

## Section 7 — Enquiry Modal

```
Build the Send Enquiry modal. Triggered when "Send Enquiry" is clicked
on any provider card or detail page.

OVERLAY: full screen, background: rgba(0,0,0,0.5), z-index: 1000, centered

MODAL BOX:
  Background: white, border-radius: 12px, padding: 36px 40px
  Width: 520px, max-width: 92vw
  Box-shadow: 0 16px 48px rgba(0,0,0,0.2)

  Close button (×): top-right, 20px, color: #888888, cursor: pointer

  PROVIDER CONTEXT STRIP (background: #F7F7F7, border-radius: 8px, padding: 12px 16px, margin-bottom: 24px):
    Logo circle (40px) + company name (font-weight: 700, 15px) + category badge + verified badge
    Shows the provider this enquiry is being sent to.

  MODAL TITLE: "Send Your Enquiry"
  Font-size: 22px, font-weight: 800, color: #1D2B53, margin-bottom: 4px
  Subtitle: "The provider will be notified by email and will respond directly to you."
  Font-size: 13px, color: #888888, margin-bottom: 24px

  FORM FIELDS:

    Field 1 — Full Name:
      Label: "Full Name *" font-size: 13px, font-weight: 600, color: #444444, margin-bottom: 6px
      Input: full width, height: 44px, border: 1.5px solid #DDDDDD, border-radius: 8px,
      padding: 0 14px, pre-filled with logged-in user name
      Font-size: 14px

    Field 2 — Email Address:
      Label: "Email Address *"
      Input: same style, pre-filled with logged-in user email, type: email

    Field 3 — Requirement Type:
      Label: "I need help with *"
      Dropdown: height 44px, same border style, padding: 0 14px
      Options:
        Select requirement type…
        Company Incorporation
        Fundraising Documentation
        ESOP & Employee Equity
        Intellectual Property
        Regulatory Compliance
        Tax & Accounting
        Technology Development
        Marketing & Growth
        HR & Recruitment
        Other

    Field 4 — Message:
      Label: "Describe your requirement *"
      Textarea: height 120px, same border style, padding: 12px 14px, resize: vertical
      Placeholder: "Please share relevant details — stage of your startup, timeline,
      specific challenges, or any questions you have for the provider."
      Character counter bottom-right: "0 / 500"
      Margin-top: 14px between fields

  DUPLICATE WARNING (hidden by default, shown if same user submits to same provider within 24hrs):
    Yellow banner: background #FFF8E0, border: 1px solid #FFD700, border-radius: 8px, padding: 10px 14px
    Text: "⚠️ You already sent an enquiry to this provider in the last 24 hours.
    Please wait before sending another."
    Font-size: 13px, color: #8A6200

  PRIVACY NOTE (margin-top: 14px):
    "🔒 Your enquiry is sent directly to the provider. Your contact details are
    shared only with them and are not made public."
    Font-size: 12px, color: #AAAAAA

  SUBMIT BUTTON (margin-top: 20px):
    "Send Enquiry →"
    Full width, background: #E58A2B, color: white, height: 46px,
    border-radius: 8px, font-size: 15px, font-weight: 700

  SUCCESS STATE (shown after submit, replaces form):
    Green checkmark icon in circle (64px, background: #E0F5EC, color: #1A7A4A)
    Title: "Enquiry Sent!" — font-size: 20px, font-weight: 800, color: #1D2B53
    Body: "LegalEdge Associates has been notified. Expect a response within 1–2 business days.
    A confirmation has been sent to your email."
    Font-size: 14px, color: #666666, text-align: center, margin-top: 10px
    "Close" button: outlined gray, full width, margin-top: 20px
```

---

## Section 8 — List Your Business (Provider Submission Form)

```
Build the "List Your Business" page. Full page, not a modal.
Accessible from the "List Your Business" button in the page header.
Max-width: 800px, centered, padding: 48px.

BREADCRUMB: Home > Service Providers > List Your Business

PAGE TITLE: "List Your Business"
Font-size: 28px, font-weight: 800, color: #1D2B53, margin-bottom: 6px
Subtitle: "Join 140+ trusted providers on Karnataka's leading founder community platform.
Your listing will be reviewed and approved before going live."
Font-size: 14px, color: #666666, margin-bottom: 8px

STATUS LIFECYCLE BAR (visual progress indicator, margin-bottom: 32px):
  4 steps in a horizontal row connected by a line:
    Step 1: "Submit Details" — active (orange filled circle + orange label)
    Step 2: "Under Review" — upcoming (gray circle + gray label)
    Step 3: "Admin Approval" — upcoming
    Step 4: "Listing Live" — upcoming
  Active step: orange circle (28px) with white number inside
  Upcoming: white circle, gray border, gray number
  Connecting line: 1px solid #DDDDDD

REVIEW NOTE BOX (background: #F0F7FF, border: 1px solid #BDD7F5, border-radius: 8px, padding: 14px 18px, margin-bottom: 28px):
  Icon: ℹ️ + text: "Your listing will be reviewed by the Mundhe Banni admin team.
  You'll receive an email when your listing is approved or if any changes are needed.
  You can edit and resubmit if rejected."
  Font-size: 13px, color: #1A4A80

FORM SECTIONS:

  SECTION A — Company Profile
  Section heading: "Company Profile"
  Font-size: 15px, font-weight: 700, color: #1D2B53,
  border-bottom: 2px solid #E58A2B, padding-bottom: 8px, margin-bottom: 20px

  Field 1 — Company Name:
    Label: "Company Name *"
    Input: full width, height: 44px, border: 1.5px solid #DDDDDD, border-radius: 8px, padding: 0 14px
    Placeholder: "e.g. LegalEdge Associates"

  Field 2 — Tagline:
    Label: "Tagline *"
    Input: same style
    Placeholder: "A one-line description of what you do (max 100 characters)"
    Character counter: "0 / 100"

  Field 3 — Company Logo:
    Label: "Company Logo"
    Upload zone: dashed border, white background, border-radius: 8px, padding: 24px, text-align: center
    Icon: 🖼️ 28px
    Text: "Drag & drop logo here or click to browse"
    Subtext: "PNG or JPG, minimum 200×200px, max 2MB"
    Font-size: 13px, color: #888888

  Field 4 — About / Company Description:
    Label: "About Your Company *"
    Textarea: height: 140px, same border style, padding: 12px 14px
    Placeholder: "Share your background, founding story, team size, and what makes
    you the right partner for early-stage founders."
    Character counter: "0 / 1000"

  Field 5 — Category:
    Label: "Primary Category *"
    Dropdown: Legal | Finance | Technology | Marketing | HR & Talent | Operations

  Field 6 — City:
    Label: "City *"
    Dropdown: Bengaluru | Mysuru | Mangaluru | Hubballi | Belagavi | Other

  SECTION B — Services Catalogue (margin-top: 28px)
  Section heading: "Services Catalogue"

  Dynamic list — start with 1 service row, "Add Service" button adds more:
    Each service row: two fields side by side
      Left field (60%): "Service Name" — text input, placeholder: "e.g. Company Incorporation"
      Right field (40%): "Brief Description" — text input, placeholder: "One line description"
      Remove button (×) on the far right — gray, appears on hover

  "＋ Add Another Service" link button — orange text, font-size: 14px, margin-top: 10px

  SECTION C — Contact & Links (margin-top: 28px)
  Section heading: "Contact & Links"

  Field 7 — Website URL:
    Label: "Website"
    Input: type url, placeholder: "https://yourcompany.com"

  Field 8 — Contact Email:
    Label: "Contact Email *"
    Input: type email
    Checkbox below: "☐ Show this email publicly on my listing"
    Font-size: 13px, color: #555555

  SECTION D — Industries Served (margin-top: 28px)
  Section heading: "Industries Served"

  Multi-select tag chips (click to select, click again to deselect):
    Unselected: white bg, gray border, gray text
    Selected: #FFF4E6 bg, orange border, orange text
    Items: SaaS | Fintech | Agritech | Edtech | Healthcare | D2C / E-commerce |
    CleanTech | Logistics | Real Estate | Other

  SUBMIT ROW (margin-top: 32px, border-top: 1px solid #EAEAEA, padding-top: 24px):
    Two buttons:
      "Save as Draft" — white bg, 1.5px solid #DDDDDD border, color: #555555
        Height: 44px, padding: 0 24px, border-radius: 8px, font-size: 14px
      "Submit for Review →" — background: #E58A2B, color: white
        Height: 44px, padding: 0 28px, border-radius: 8px, font-weight: 700, font-size: 14px

    Note below buttons (centered):
    "By submitting, you agree to the Mundhe Banni Marketplace Guidelines."
    Font-size: 12px, color: #AAAAAA
    "Marketplace Guidelines" is an orange clickable link
```

---

## Section 9 — My Listing Page (Service Provider View)

```
Build the "My Listing" dashboard page. Visible only to users with Service Provider role.
Accessible from the "My Listing" nav link in the top navigation.
White background. Padding: 48px. Max-width: 1100px, centered.

BREADCRUMB: Home > My Listing

PAGE TITLE: "My Listing"
Font-size: 28px, font-weight: 800, color: #1D2B53

STATUS BANNER (full width, border-radius: 8px, padding: 14px 20px, margin-top: 16px):
  STATES — show only one state at a time based on listing status:

  Draft state:
    Background: #F3F4F6, border: 1px solid #DDDDDD
    Icon: 📝 + "Your listing is saved as a Draft. Submit it for review when ready."
    Action button: "Submit for Review" — orange filled, right side

  Under Review state:
    Background: #FFF8E0, border: 1px solid #FFD700
    Icon: ⏳ + "Your listing is currently under review by the admin team.
    You'll receive an email once approved."

  Live state:
    Background: #E0F5EC, border: 1px solid #7EEFC0
    Icon: ✅ + "Your listing is Live and visible to all founders on the platform."
    Action button: "View Live Listing →" — green outlined, right side

  Rejected state:
    Background: #FDECEA, border: 1px solid #F5AAAA
    Icon: ❌ + "Your listing was not approved. Reason: [admin note text here]"
    Action button: "Edit & Resubmit" — orange filled, right side

TWO-COLUMN LAYOUT below the banner (65/35 split, gap: 32px, margin-top: 28px):

LEFT — Listing Preview:
  Heading: "Listing Preview" — font-size: 15px, font-weight: 700, color: #1D2B53, margin-bottom: 14px
  Show a read-only version of the listing exactly as it appears to founders
  (same card layout as provider detail page, but non-interactive)
  "Edit Listing" button below the preview — outlined orange, font-size: 14px

RIGHT — Analytics Panel:
  Heading: "Listing Analytics" — same heading style

  3 stat cards in a 1-column stack (gap: 12px):
    Card 1: "👁 312" large bold + "Profile Views" gray label + "Last 30 days" small gray
    Card 2: "✉ 48" large bold + "Enquiries Received" gray label + "Last 30 days" small gray
    Card 3: "⭐ 4.8" large bold orange + "Average Rating" gray label + "120 reviews" small gray

    Each stat card: border: 1px solid #EAEAEA, border-radius: 8px, padding: 16px 20px

  ENQUIRY INBOX (margin-top: 24px):
    Heading: "Recent Enquiries" — same heading style
    Show 3 enquiry preview rows:
      Each row: border-bottom: 1px solid #F0F0F0, padding: 12px 0
        Sender avatar (32px) + name (font-weight: 600, 13px) + date (gray 12px right)
        First line of message (gray 13px, truncated to 1 line, margin-top: 4px)
        Status badge: "New" (orange) | "Responded" (green) | "Closed" (gray)

    "View All Enquiries" link — orange, font-size: 13px, margin-top: 10px
```

---

## Responsive Rules

```
TABLET (max-width: 1024px):
  - Provider grid: 2 columns
  - Filter sidebar: collapses into a "Filters" button opening a left drawer
  - Provider detail: single column, sticky panel becomes full-width section below services
  - Category tiles: 2 rows × 4 tiles grid
  - My Listing page: single column stack

MOBILE (max-width: 768px):
  - Category tiles: horizontal scroll (overflow-x: auto, snap scrolling)
  - Provider grid: 1 column
  - Filter bar: collapses to "Filter & Sort" pill button, opens bottom drawer on tap
  - Search bar: full width, stacked above filter button
  - Featured banner: single column, logo hidden, text only
  - Enquiry modal: full screen on mobile, border-radius only on top corners
  - Submission form: full width, single column, all fields stacked
  - Page horizontal padding: 16px
  - Stats bar on page header: 2 × 2 grid instead of 3-column row
```
