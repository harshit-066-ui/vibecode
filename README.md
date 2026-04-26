# Accredian Enterprise — Corporate Landing Page

> A premium, production-ready B2B corporate landing page built for Accredian Enterprise, designed to capture high-intent leads from corporate clients and showcase the company's training methodology.

---

# 📋 SECTION 1 — Developer Reference

## 🚀 Setup Instructions

### Prerequisites
- Node.js `v18+`
- npm `v9+` (or yarn / pnpm)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assigned
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at **`http://localhost:3000`**

4. **Build for production** *(optional)*
   ```bash
   npm run build
   npm start
   ```

### Lead Data Storage
Every form submission is saved automatically to:
```
/data/leads.json
```
Each lead entry looks like this:
```json
{
  "leadId": "LD-1745674823000",
  "timestamp": "2026-04-26T10:20:23.000Z",
  "source": "Accredian Enterprise Landing Page",
  "data": {
    "name": "Jane Smith",
    "email": "jane@company.com",
    "company": "Acme Corp",
    "phone": "9876543210",
    "domain": "AI",
    "delivery": "Online",
    "candidates": "50"
  }
}
```
The `data/` directory and `leads.json` file are created automatically on first submission if they don't exist. Leads are also printed to the terminal for instant visibility.

---

## 🧠 Approach Taken

The goal was not to build a minimal clone, but to produce a **production-grade B2B landing page** with clean architecture, real asset usage, and a coherent design system.

### Core Principles

1. **Component isolation** — Every section is a standalone, single-responsibility React component. No global prop drilling. Each component handles its own layout and scoped styles via `styled-jsx`.

2. **Centralised assets** — All image paths live in `src/constants/images.ts`. When an asset changes, you update one line and the rest of the app follows. No hardcoded paths scattered across components.

3. **Real images, not placeholders** — Each section uses the actual provided brand assets (`hcl logo.png`, `crif logo.png`, `industry specific.png`, etc.) mapped to correct positions with `object-fit: cover` and Next.js `fill` mode for zero overflow/underfit.

4. **Dark theme with a green accent design system** — All colours flow through CSS custom properties (`--primary-green`, `--bg-base`, `--text-primary`, etc.), making global retheming a one-file change.

5. **Lead persistence** — The API route (`/api/lead`) saves every submission to a local JSON file, not just a console log. This is a working data layer, not a simulation.

---

## 🤖 AI Usage Explanation

AI assistance (via Antigravity / Claude) was used throughout this project. Here is an honest breakdown of what AI did vs. what required human judgment:

### What AI Did
- Generated initial component scaffolding and boilerplate JSX
- Wrote `styled-jsx` CSS blocks matching design specifications described in natural language
- Suggested responsive breakpoints and grid structures
- Wrote the lead persistence logic (`fs.readFileSync` / `fs.writeFileSync` pattern) for the API route
- Generated this README

### What Required Human Direction & Iteration
- **Design decisions**: Choosing the green-and-dark brand palette, the glassmorphism card style, the banner sizing ratios
- **Asset mapping**: Correctly identifying which image file (`industry specific.png`, `program specific.png`, etc.) belongs to which card
- **Logo replacement**: Deciding to replace the Accredian image logo with a styled italic wordmark throughout the navbar, footer, and form modal for visual consistency without an image dependency
- **Image fitting**: Diagnosing why CAT framework image was overflowing or underfitting — solved by switching to `fill` mode inside an aspect-ratio-locked wrapper (`padding-top: 43.15%`)
- **Color visibility**: Catching that card heading colors (`#111827` dark text) were invisible on the black `#000000` section background — fixed to `#10B981` green

---

## 🔮 Improvements With More Time

| Area | What I Would Do |
|------|----------------|
| **CMS Integration** | Connect Sanity or Contentful so program cards, FAQs, and testimonials are editable without a code deploy |
| **Database** | Migrate `leads.json` to a proper Postgres database via Prisma + Supabase for scalable, queryable lead storage |
| **Analytics** | Add PostHog or Mixpanel to track form opens, section scroll depth, and CTA click rates |
| **Animations** | Add `framer-motion` scroll-triggered reveals for each section (currently using CSS transitions only) |
| **Email Notifications** | Wire the lead API to Resend or SendGrid so the team gets an immediate email on every new lead |
| **A/B Testing** | Test different hero headlines and CTA copy to optimise conversion |
| **Accessibility** | Full WCAG 2.1 AA audit — focus rings, ARIA labels on all interactive elements, skip-nav link |
| **i18n** | Add `next-intl` for multilingual support (EN/Hindi at minimum) |
| **SEO** | Add structured data (`Organization`, `Course` schema), sitemap, and Open Graph images per section |

---

---

# 🌐 SECTION 2 — Website Documentation

> This section explains the entire Accredian Enterprise website — its structure, every component, every design decision, and every upgrade made — written so that any developer, designer, or AI can fully visualise and understand it.

---

## 📐 Overall Page Structure

The page is a single-page application (SPA) built with **Next.js App Router**. There is no client-side routing to other pages — everything lives on one scrollable page at `/`.

The page renders these sections **in order from top to bottom**:

```
┌──────────────────────────────────────┐
│  NAVBAR (fixed, always visible)      │
├──────────────────────────────────────┤
│  HERO (full-viewport banner)         │
├──────────────────────────────────────┤
│  STATS (4 key numbers)               │
├──────────────────────────────────────┤
│  TRUST BAR (client logos)            │
├──────────────────────────────────────┤
│  ACCREDIAN EDGE (diagram section)    │
├──────────────────────────────────────┤
│  CAT FRAMEWORK (methodology diagram) │
├──────────────────────────────────────┤
│  AUDIENCE PANELS (who should join?)  │
├──────────────────────────────────────┤
│  PROGRAMS SECTION (4 course cards)   │
├──────────────────────────────────────┤
│  PROCESS TIMELINE (how it works)     │
├──────────────────────────────────────┤
│  DOMAIN EXPERTISE                    │
├──────────────────────────────────────┤
│  ENGINEERING APPROACH                │
├──────────────────────────────────────┤
│  TESTIMONIALS (slider)               │
├──────────────────────────────────────┤
│  CTA BANNER (final call to action)   │
├──────────────────────────────────────┤
│  FAQ SECTION (accordion)             │
├──────────────────────────────────────┤
│  FOOTER                              │
└──────────────────────────────────────┘
```

A **Lead Form Modal** (`<LeadFormModal>`) floats above all content and is triggered by "Enquire Now" buttons.

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--primary-green` | `#10B981` | Accent color — buttons, highlights, active states |
| `--bg-base` | Dark near-black | Page background |
| `--bg-dark-accent` | Slightly lighter dark | Card/banner backgrounds |
| `--text-primary` | White | Headings, primary text |
| `--text-gray` | `#9CA3AF` | Subtitles, descriptions |

### Typography
- Font: **Inter** (Google Fonts) — clean, modern, professional
- Headings use `font-weight: 800–900` with tight `letter-spacing: -0.02em`
- Body copy is `0.95rem–1.1rem` with `line-height: 1.5–1.6`

### Card / Banner Style (reused across sections)
Every major content block (Hero, CAT Framework, AccredianEdge) uses the same "glass card" treatment:
```css
background: var(--bg-dark-accent);
padding: 3rem 4rem;
border-radius: 30px;
border: 1px solid rgba(16, 185, 129, 0.3);
box-shadow: 0 0 60px rgba(16, 185, 129, 0.15), inset 0 0 40px rgba(16, 185, 129, 0.05);
```
This creates a subtle green glow that ties all sections to the brand identity.

---

## 🧩 Component-by-Component Breakdown

### 1. `Navbar.tsx` — Fixed Navigation Bar
- **Position**: Fixed to the top, always visible while scrolling
- **Logo**: Replaced the `logo.png` image with a styled italic wordmark — *Accredian* in green `#10B981` (bold italic) with `ENTERPRISE` in small white caps below
- **Nav Links**: Home, Stats, Clients, Accredian Edge, CAT, How It Works, FAQs, Testimonials
- **Scroll Spy**: As the user scrolls, the active nav link updates automatically using a `getBoundingClientRect` intersection check
- **Mobile**: Hamburger menu (☰) at `≤1024px` that toggles a dropdown of all links

### 2. `Hero.tsx` — Above-the-Fold Banner
- **Layout**: Two-column flex — text content left, hero image right
- **Positioning**: `padding-top: 88px` places it right below the ~68px navbar on load. `min-height: calc(100vh - 68px)` makes it fill the full first screen
- **Content left**: Headline, subtitle, 3 green checkmark bullet points, "Enquire Now" CTA button
- **Content right**: Business professionals photo (`next gen enterpise banner image.png`)
- **Card style**: Uses the standard glassmorphism green-glow card treatment

### 3. `StatsSection.tsx` — Track Record Numbers
- 4 large animated stat counters (e.g. "500+ companies", "10,000+ learners")
- Dark background, green accent on numbers

### 4. `TrustBar.tsx` — Client Logo Strip
- Heading: "Our Proven Partnerships"
- Displays logos for: **Reliance**, **HCL**, **IBM**, **CRIF**, **ADP**
- **Key upgrade**: Old logos were raw screenshots with dark backgrounds. Replaced with actual clean logo files (`hcl logo.png`, `crif logo.png`, `reliance logo.png`, `ADP logo.png`)
- Each logo sits inside a **white pill card** (`background: #fff`, `border-radius: 12px`, `padding: 16px 28px`) so logos with white backgrounds show clearly against the dark page
- Hover: `translateY(-4px) scale(1.05)` lift effect

### 5. `AccredianEdge.tsx` — The Accredian Edge Diagram
- Full-width diagram image (`Screenshot 2026-04-26 085924.png`) showing 7 interconnected bubbles: Tailored Solutions → Expert Guidance → Innovative Framework → Advanced Technology → Diverse Offerings → Proven Impact → Flexible Delivery
- Uses `fill` mode with `object-fit: contain` inside a glassmorphism card container

### 6. `CATFramework.tsx` — The CAT Framework
- Displays the CAT (Concept → Application → Tools) framework as a single banner image
- **Key upgrade**: Replaced fixed `width={1200} height={600}` which caused ratio distortion. Now uses a `position: relative` wrapper with `padding-top: 43.15%` (matching the image's natural ~2.32:1 aspect ratio) and `fill` mode — so the image always fits perfectly at any screen width without overflow or underfit
- The `43.15%` padding is calculated as `(image height / image width) × 100 = (630 / 1460) × 100`

### 7. `AudiencePanels.tsx` — "Who Should Join?" Section
- **Layout**: Two-column — left side has headline + photo + checklist, right side has 2×2 card grid
- **Left image**: Updated from Unsplash placeholder to actual `strategic skill enhancement banner image.png` (professionals with laptop, blue background)
- **Right grid — 4 cards**:
  1. **Tech Professionals** — Monitor + checkmark icon — Upskill engineers in AI, Cloud, Data
  2. **Non-Tech Professionals** — Monitor + X icon — Product, design, digital ops
  3. **Emerging Professionals** — Graduation cap icon — Industry-ready certifications
  4. **Senior Professionals** — Briefcase icon — Leadership & executive training
- **Key upgrade**: Card headings were `color: #111827` (near-black — invisible on black background). Fixed to `color: #10B981` (green) matching the SVG icon colour above each heading, exactly as shown in the reference screenshot

### 8. `ProgramsSection.tsx` — Tailored Course Segmentation
- 4-column card grid (2 columns on tablet, 1 on mobile)
- **Key upgrade**: All 4 cards were using the same Unsplash stock photo placeholder. Now each card uses the correct specific image:
  | Card | Image Used |
  |------|-----------|
  | Program Specific | `program specific.png` — people with charts |
  | Industry Specific | `industry specific.png` — VR/tech professional |
  | Topic Specific | `topic specific.png` — man with holographic UI |
  | Level Specific | `level specific.png` — three professionals in office |
- Images use `fill` mode (Next.js) inside a `height: 200px; position: relative; overflow: hidden` wrapper with `object-fit: cover; object-position: center` — guaranteed no overflow, no underfit

### 9. `ProcessTimeline.tsx` — How It Works
- Step-by-step numbered process flow
- Shows the engagement journey from "Needs Analysis" through to "Ongoing Support"

### 10. `DomainExpertise.tsx` — Domain Coverage
- Grid of domain pills/cards (e.g. AI, Data Science, Leadership, Fintech)
- Green accent on active/hover states

### 11. `EngineeringApproach.tsx` — Engineering Approach
- Highlights the technical/instructional methodology

### 12. `TestimonialsSection.tsx` — Client Testimonials
- Card slider with navigation arrows
- Shows client quotes with name, company, and role

### 13. `CTABanner.tsx` — Final Call to Action
- Full-width green gradient banner
- Headline + "Enquire Now" button that triggers the `LeadFormModal`

### 14. `FAQSection.tsx` — Frequently Asked Questions
- Accordion-style Q&A
- Smooth expand/collapse animation with `+` / `−` toggle icon

### 15. `Footer.tsx` — Page Footer
- **Wordmark**: Same styled *Accredian* italic green text as Navbar (no logo image)
- **Social links**: Facebook, LinkedIn, Twitter icons
- **Nav column**: About → `https://accredian.com/About`, Blog → `https://blog.accredian.com/`, Why Accredian? → `https://accredian.com/whyaccredian` (all open in new tab)
- **Contact**: Email `enterprise@accredian.com`, Gurugram office address
- **Copyright**: © 2026 Accredian — A Brand of FullStack Education Pvt Ltd

### 16. `LeadFormModal.tsx` — Enquiry Form (Modal Overlay)
- Triggered by any "Enquire Now" button
- **Key upgrade**: Complete visual redesign — was dark/black themed. Now:
  - **Left panel**: Green gradient (`#059669 → #10B981 → #34D399`) with large italic *Accredian* wordmark, tagline "Enterprise Learning Solutions", and 3 feature bullets. Decorative white translucent circles for depth. No image dependency
  - **Right panel**: Pure white form with green label text, mint-green (`#F0FDF4`) input backgrounds, green border on focus
  - **Submit button**: Green gradient with hover lift and glow shadow
- **Form fields**: Name, Email, Company, Phone (+91 prefix), Domain (select), Mode of Delivery (select), Candidate Count
- **States**: idle → loading ("Submitting...") → success (green banner) / error (red banner)
- **Data flow**: `POST /api/lead` → validated → saved to `data/leads.json` → returned `{ success: true, leadId: "LD-..." }`

---

## 📁 File & Folder Structure

```
assigned/
├── data/
│   └── leads.json              ← All captured leads stored here as JSON array
├── public/
│   └── assets/
│       └── images/             ← All image assets
│           ├── hcl logo.png
│           ├── crif logo.png
│           ├── reliance logo.png
│           ├── ADP logo.png
│           ├── industry specific.png
│           ├── program specific.png
│           ├── topic specific.png
│           ├── level specific.png
│           ├── strategic skill enhancement banner image.png
│           ├── next gen enterpise banner image.png
│           ├── form image.png
│           ├── Screenshot 2026-04-26 090147.png  ← CAT Framework diagram
│           └── Screenshot 2026-04-26 085924.png  ← Accredian Edge diagram
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── lead/
│   │   │       └── route.ts    ← POST /api/lead — validates + saves leads to JSON
│   │   ├── globals.css         ← Global CSS variables and base styles
│   │   ├── layout.tsx          ← Root layout with font imports
│   │   └── page.tsx            ← Assembles all section components in order
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── AccredianEdge.tsx
│   │   ├── CATFramework.tsx
│   │   ├── AudiencePanels.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── DomainExpertise.tsx
│   │   ├── EngineeringApproach.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTABanner.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   └── LeadFormModal.tsx
│   └── constants/
│       └── images.ts           ← Single source of truth for all image paths
└── README.md
```

---

## 🔄 All Upgrades Made (Changelog)

| # | Section | What Changed | Why |
|---|---------|--------------|-----|
| 1 | **images.ts** | Replaced Screenshot filenames for HCL, CRIF, Reliance, ADP with actual logo filenames | Screenshots had dark backgrounds; real logos are clean PNGs |
| 2 | **images.ts** | Added `programSpecific`, `industrySpecific`, `topicSpecific`, `levelSpecific`, `strategicSkillBanner` keys | Centralise all new asset paths |
| 3 | **TrustBar** | White pill card wrapper for each logo | Logos have white backgrounds — they were invisible on dark page without a white container |
| 4 | **CATFramework** | Replaced fixed `width/height` with `fill` + aspect-ratio wrapper (`padding-top: 43.15%`) | Fixed image distortion and overflow at all screen sizes |
| 5 | **ProgramsSection** | Replaced 4× Unsplash placeholders with 4 real specific images | Each card now shows the correct contextual photo |
| 6 | **ProgramsSection** | Switched `width/height` Image to `fill` inside 200px wrapper | Guarantees perfect coverage — no overflow, no whitespace |
| 7 | **AudiencePanels** | Replaced Unsplash placeholder with `strategic skill enhancement banner image.png` | Uses the actual brand asset |
| 8 | **AudiencePanels** | Changed `.card-title` color `#111827` → `#10B981` | Dark text was invisible on black background |
| 9 | **AudiencePanels** | Changed `.card-desc` color `#6B7280` → `#D1D5DB` | Improved readability on dark background |
| 10 | **LeadFormModal** | Complete redesign — green gradient left panel, white right panel | Old design was dark/black — user requested green and white only |
| 11 | **LeadFormModal** | Replaced `<Image>` logo with styled italic *Accredian* wordmark | Removes image dependency, consistent with brand text treatment |
| 12 | **lead/route.ts** | Added `fs` file persistence — saves leads to `data/leads.json` | Previously leads only printed to terminal; now durably stored |
| 13 | **Navbar** | Replaced `<Image logo.png>` with styled wordmark (`Accredian` italic green + `ENTERPRISE` label) | No image dependency; visually cleaner and consistent |
| 14 | **Footer** | Same wordmark replacement as Navbar | Consistency across all brand touchpoints |
| 15 | **Hero** | `padding-top: 200px` → `88px`, added `min-height: calc(100vh - 68px)` | Banner now appears immediately below the navbar on page load |
| 16 | **Footer links** | About, Blog, Why Accredian? linked to real Accredian URLs | Previously all linked to `#` |
| 17 | **Hero (desktop width)** | Removed Hero-only `.container` max-width bottleneck and expanded desktop container to `max-width: 1520px` at `≥1280px` | Hero now uses full available desktop space without changing mobile/tablet behavior |
| 18 | **Footer social links** | Connected Facebook, LinkedIn, and X icons to official URLs with safe external link attributes | Makes social icons functional and production-ready |

---

## 🔗 External Links Used

| Label | URL |
|-------|-----|
| About | https://accredian.com/About |
| Blog | https://blog.accredian.com/ |
| Why Accredian? | https://accredian.com/whyaccredian |
| Contact Email | enterprise@accredian.com |
| Facebook | https://www.facebook.com/accredianlearn |
| LinkedIn | https://www.linkedin.com/school/accredianedu/ |
| X (Twitter) | https://x.com/accredianedu |
