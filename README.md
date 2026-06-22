# CV666 Bangladesh – Next.js SEO Landing Page

Production-ready Next.js App Router landing page for CV666 Game (Bangladesh market, 2026).

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Static generation / Server Components

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000/cv666-game](http://localhost:3000/cv666-game)

## Structure

```
app/
├── cv666-game/page.tsx    # Main SEO landing page
├── layout.tsx
├── page.tsx               # Home hub
├── globals.css
├── sitemap.ts
└── robots.ts

components/
├── HeroSection.tsx
├── QuickInfoTable.tsx
├── WhatIsCV666.tsx
├── HowItWorks.tsx
├── FeaturesSection.tsx
├── GamesSection.tsx
├── DepositSection.tsx
├── WithdrawalSection.tsx
├── DownloadGuide.tsx
├── RegistrationGuide.tsx
├── BonusSection.tsx
├── RealOrFakeSection.tsx
├── UserReviews.tsx
├── RelatedGames.tsx
├── FaqSection.tsx
├── DisclaimerSection.tsx
└── SchemaMarkup.tsx

docs/
├── IMAGE_SEO_PLAN.md
└── INTERNAL_LINKING_STRATEGY.md
```

## SEO Assets
Add OG image at `public/og/cv666-bangladesh-og.jpg` (1200×630). See `docs/IMAGE_SEO_PLAN.md`.

## Domain
Update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/cv666-game/page.tsx`, and `components/SchemaMarkup.tsx` before production deploy.
