# Batimob — corporate website

Premium multilingual corporate site for **Batimob** (menuiserie & agencement, Jura, since 1966).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first tokens in `src/app/globals.css`)
- shadcn/ui (new-york) + lucide-react
- i18n: FR (default) / EN / AR (RTL) via React context + localStorage

## Content

All copy lives in `src/lib/translations.ts` (copied verbatim from
`batimob-content-fr-en-ar.ts`). Components never hardcode copy.

Images live in `public/images/` and are referenced by exact path.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

```bash
npm run dev      # dev server (turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```