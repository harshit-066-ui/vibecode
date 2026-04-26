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
| **Database** | Migrate `leads.json` to a proper Postgres database via Prisma + Supabase for scalable, queryable lead storage |
| **Analytics** | Add PostHog or Mixpanel to track form opens, section scroll depth, and CTA click rates |
| **Animations** | Add `framer-motion` scroll-triggered reveals for each section (currently using CSS transitions only) |
| **Email Notifications** | Wire the lead API to Resend or SendGrid so the team gets an immediate email on every new lead |
| **A/B Testing** | Test different hero headlines and CTA copy to optimise conversion |
| **SEO** | Add structured data (`Organization`, `Course` schema), sitemap, and Open Graph images per section |

---

---


