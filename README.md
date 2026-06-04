# Mundhe Banni Community Platform

Mundhe Banni is a Kannada entrepreneur community platform for founders, service providers, SMEs/experts, and platform admins.

This first implementation builds the public homepage using the design direction from `mundhe-banni-homepage-prompt.md` and the Phase 1 product modules from `MundheBanni_User_Stories_PRD.docx`.

## Phase 1 Modules Reflected

- Navigation and sitemap
- User onboarding and profile entry points
- Discussions and user groups
- Events
- Resource download library
- Service provider marketplace
- Admin and analytics-ready navigation structure

## Tech Stack

- React
- Vite
- Lucide React icons
- Plain CSS design system
- Local Node preview server for built assets

## Run Locally

This environment did not have `npm`, so a local Bun binary was downloaded into `.tools/` for dependency installation. If your machine has npm, you can use normal npm commands.

```bash
npm install
npm run dev
```

In this workspace, use:

```bash
.tools/bun-darwin-aarch64/bun install
node node_modules/vite/bin/vite.js --host 0.0.0.0
```

If Vite/Rollup native loading is blocked by macOS, the current verified preview is available with:

```bash
node server.js
```

Then open `http://localhost:3000`.

## Current Homepage

The homepage includes:

- Sticky navigation
- Founder community hero
- Community stats
- Upcoming events
- Community pulse
- Featured groups
- Top-rated service providers
- Helpful resources
- Join community CTA
- Footer newsletter and platform links
