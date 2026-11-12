# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # dev server (Turbopack)
npm run build  # production build
npm run lint   # ESLint
npm run start  # production server
```

## Architecture

Next.js 16.4.3 App Router, React 19, Tailwind CSS v4, deployed as a static site.

**Routes** — all static (○) except `/api/reservas` (ƒ dynamic, uses Resend for email):
```
src/app/
  page.tsx                 # homepage
  programas/               # program listing + 4 sub-pages (cabalgata-picoteo, potrero-al-rio, rio-al-potrero, travesia-san-pedro)
  gastronomia/
  el-entorno/
  para-agencias/
  api/reservas/route.ts    # POST → Resend email
```

**Server vs. Client** — Server Components by default. Only two files are `'use client'`:
- `src/app/HeroAnimated.tsx` — framer-motion hero animations
- `src/app/RevealOnScroll.tsx` — framer-motion scroll reveals

**Styles** — Tailwind v4 tokens defined in `src/app/globals.css` via `@theme {}` (no `tailwind.config.js`):
```
forest  #1A3428   ember  #C05C28   cream   #F4EFE4
dark    #0D1207   gold   #B8944A   muted   #6B7260
```
Fonts via `next/font`: `font-display` (Playfair Display), `font-body` (Source Serif 4), `font-ui` (DM Sans).

**Images** — all in `public/images/`, always use `next/image` with `fill` + `sizes`. Add `priority` on hero images.

**JSON-LD** — structured data helpers in `src/lib/jsonld.ts`, injected via `src/app/JsonLd.tsx`.

## Key Gotchas

- **`lucide-react` v1.62.0** — `Horse` does not exist. Use `Compass` for riding/cabalgata activities.
- **Next.js 16.4.3 has breaking changes** — before writing new Next.js patterns, check `node_modules/next/dist/docs/` for current API.
- **Tailwind v4** — no `tailwind.config.js`; extend tokens inside `@theme {}` in `globals.css`.
- Max page width 1280px, max text width 720px. Border-radius 2px max (sharp corners).
