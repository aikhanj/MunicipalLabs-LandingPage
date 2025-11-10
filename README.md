# MunicipalLabs
MunicipalLabs builds modern AI tools for the public sector. This repo ships a production-ready marketing site for Legaside, the flagship AI inbox + CRM. It runs on **Next.js 15 (App Router)** with **TypeScript**, **Tailwind**, **shadcn/ui**, **Framer Motion**, **lucide-react**, and **Recharts**. The design leans into glassmorphism, dark gradients, scroll-linked motion, and high conversion CTAs.

## ✨ Highlights

- Scroll-linked hero with parallax aurora, particles, and reduced-motion guardrails.
- Magnetic buttons, 3D tilt cards, staggered reveals, and counter-up metrics.
- Animated Legaside tab demo with lazily loaded analytics chart (Recharts).
- Accessibility-first: semantic structure, focus treatment, skip link, prefers-reduced-motion support.
- SEO metadata, Open Graph image, sitemap, robots, and optional Vercel Analytics guard.
- Command palette (`⌘K`/`Ctrl+K`) for instant section navigation.
- Audio feedback system (muted by default) with footer toggle.

## 📁 Project Structure

```text
app/
  layout.tsx          # Metadata, fonts, global providers (audio + analytics)
  page.tsx            # Composes all landing sections
  (actions)/          # Server actions (e.g., request access form)
  (components)/       # Shared UI (glass card, magnetic button, tilt, etc.)
  (sections)/         # Page sections (Hero, Solution, Security, ...)
  api/revalidate/     # Placeholder API route
content/
  copy.ts             # Centralized marketing copy
public/
  logos/              # Placeholder partner logos
  og.png              # OG share image
styles/
  globals.css         # Tailwind base + design tokens
```

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 20+
- pnpm / npm / yarn (examples use `npm`)

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Copy `.env.example` → `.env.local` and adjust:

```bash
cp .env.example .env.local
```

Key values:

- `NEXT_PUBLIC_SITE_URL` — canonical production URL.
- `NEXT_PUBLIC_ENABLE_ANALYTICS` — `true` to enable Vercel Analytics.
- `VERCEL_ANALYTICS_ID` — optional Vercel Analytics project ID.
- `POSTHOG_*` — placeholder for enabling PostHog if you wire it in.

### 4. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 5. Build & lint

```bash
npm run build    # Production build
npm run lint     # Next.js ESLint suite
```

## 🧭 Customisation Guide

### Editing copy & content

- All marketing copy lives in `content/copy.ts`.
- Logo cloud assets reside in `public/logos/`. Swap with real partner logos when ready.
- The OG image (`public/og.png`) is generated programmatically—replace with a designer-crafted version when available.

### Tailoring the visual system

- Global styles & utility classes: `styles/globals.css` and `tailwind.config.ts`.
- Glassmorphism tokens: `.glass` utility in global CSS.
- Typography: Inter via `next/font`, adjust in `layout.tsx` if you prefer a different family.

### Motion & performance controls

- Respect for system settings is built in (`prefers-reduced-motion` short-circuits animations).
- To globally reduce animation intensity, tweak easing/scale values in:
  - `app/(components)/magnetic-button.tsx`
  - `app/(components)/tilt-card.tsx`
  - `app/(components)/particles.tsx`
  - `app/(components)/metric.tsx`
- Want to disable particles? Remove or conditionally render `<Particles />` inside `Hero`.
- Counter timings & marquee speed are defined in Tailwind keyframes within `tailwind.config.ts`.

### Audio feedback

- Audio defaults to muted. Toggle in the footer or via the `AudioProvider` context.
- Replace the placeholder waveform data URIs in `app/(components)/audio-provider.tsx` with bespoke sounds to match your brand.

### Command palette

- Powered by Radix Dialog & custom logic in `app/(components)/command-palette.tsx`.
- Extend the `commands` array to expose more destinations (including future routes).

### Form handling

- The early access form uses a server action (`requestAccessAction`) with Zod validation.
- Replace the console log with your CRM/webhook (HubSpot, PostHog, custom APIs).
- `/app/api/revalidate/route.ts` is a placeholder to illustrate server routing—swap with real handlers when back-end connectivity is ready.

## 🔒 Accessibility & SEO

- Semantic landmarks (`<header>`, `<main>`, `<footer>`) plus skip-to-content link.
- Buttons & inputs include focus-visible rings for keyboard users.
- Metadata set in `app/layout.tsx`, with sitemap/robots in `app/sitemap.ts` and `app/robots.ts`.
- OG image + favicons live under `public/`.

## 🧪 Quality Checklist

- [ ] `npm run lint` passes without warnings.
- [ ] `npm run build` succeeds.
- [ ] Check animations with and without reduced-motion enabled.
- [ ] Validate Lighthouse scores (target ≥95 across Performance/Accessibility/Best Practices/SEO).
- [ ] Update copy, logos, and OG image before launch.

## 📦 Deployment

This project is tuned for Vercel:

1. Push to GitHub.
2. Create a new Vercel project and import the repo.
3. Add environment variables (`NEXT_PUBLIC_SITE_URL`, analytics flags).
4. Trigger deployment. Next.js 15 App Router handles static optimization + edge-ready output.

> Tip: set `NEXT_PUBLIC_SITE_URL` to the final production URL so metadata and sitemap output correct canonical links.

---

Need help extending the site (blog, press kit, product updates)? The section components are modular—clone one from `app/(sections)` and wire it into `app/page.tsx`. Happy shipping! 💫
