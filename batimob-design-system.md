# Batimob — Design System & Build Spec
Premium minimal B2B corporate site (menuiserie, agencement & bureau d'études). Framework-agnostic: works for Next.js, Astro, Vite/React. Requires Tailwind CSS v4 + shadcn/ui.

## 1. Design intent
- Registers: Apple (calm, air), Stripe (precision), Vinci (industrial credibility).
- Premium minimal: no gradients-on-white AI look, no purple, no drop-shadow abuse.
- Large spacing, editorial serif display, soft shadows, rounded corners (14px base), quiet motion.
- Photography: architectural interiors (auditorium, théâtre, hôtel, bureau, boutique), warm neutral grading. Never stock-people.

## 2. Tokens (Tailwind v4 — paste into the entry CSS)

```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-graphite: var(--graphite);
  --color-canvas: var(--canvas);
  --color-timber: var(--timber);
  --color-engineering: var(--engineering);
  --color-stone: var(--stone);

  --font-display: var(--font-display-family);
  --font-sans: var(--font-sans-family);

  --radius-lg: var(--radius);
  --radius-2xl: calc(var(--radius) + 8px);

  --shadow-card: 0 1px 2px oklch(0.216 0.005 285.9 / 0.04), 0 8px 24px -12px oklch(0.216 0.005 285.9 / 0.12);
  --shadow-lift: 0 2px 4px oklch(0.216 0.005 285.9 / 0.04), 0 24px 48px -24px oklch(0.216 0.005 285.9 / 0.22);
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

:root {
  --radius: 0.875rem;

  --graphite: oklch(0.216 0.005 285.9);   /* ink / primary */
  --canvas: oklch(0.983 0.004 91);        /* warm paper background */
  --timber: oklch(0.69 0.065 58);         /* wood accent */
  --engineering: oklch(0.351 0.033 226);  /* technical blue */
  --stone: oklch(0.955 0.004 91);         /* muted surface */

  --font-display-family: "Instrument Serif", Georgia, serif;
  --font-sans-family: "Instrument Sans", "Noto Kufi Arabic", system-ui, sans-serif;

  --background: var(--canvas);
  --foreground: var(--graphite);
  --card: oklch(1 0 0);
  --card-foreground: var(--graphite);
  --primary: var(--graphite);
  --primary-foreground: var(--canvas);
  --secondary: var(--stone);
  --secondary-foreground: var(--graphite);
  --muted: var(--stone);
  --muted-foreground: oklch(0.53 0.007 286);
  --accent: var(--timber);
  --accent-foreground: oklch(1 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.216 0.005 285.9 / 0.09);
  --input: oklch(0.216 0.005 285.9 / 0.14);
  --ring: var(--timber);
}

[dir="rtl"] {
  --font-sans-family: "Noto Kufi Arabic", "Instrument Sans", system-ui, sans-serif;
  --font-display-family: "Noto Kufi Arabic", "Instrument Serif", serif;
}

@layer base {
  * { border-color: var(--color-border); }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
  ::selection { background-color: var(--timber); color: oklch(1 0 0); }
}

@keyframes reveal-up {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@utility reveal { animation: reveal-up 0.9s var(--ease-expo) both; }

@utility shell {
  margin-inline: auto; width: 100%; max-width: 80rem; padding-inline: 1.5rem;
}

@utility eyebrow {
  font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
}
```

Rule: never hardcode `text-white`, `bg-black`, or hex values in components. Only semantic tokens.

Fonts: load via `<link>` in the document head, not `@import` in CSS.
`https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600&family=Noto+Kufi+Arabic:wght@400;500;600&display=swap`

## 3. Type scale
| Usage | Classes |
|---|---|
| Hero H1 | `font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl lg:text-7xl` |
| Section H2 | `font-display text-4xl` (editorial variant: `sm:text-5xl leading-tight text-balance`) |
| Card title | `text-lg font-medium` |
| Body | `text-base leading-relaxed text-muted-foreground` (long form: `text-lg`) |
| Eyebrow | `eyebrow text-muted-foreground` |
| Stat number | `font-display text-4xl sm:text-5xl` |
| Micro label | `text-[10px] uppercase tracking-[0.2em] opacity-50` |

## 4. Layout & rhythm
- Container: `shell` utility (max 80rem, 1.5rem gutters).
- Section padding: `py-24 sm:py-32`; compact bands `py-20`.
- Alternate surfaces: `bg-background` → `bg-muted` → `bg-graphite text-canvas` (stats band) for vertical rhythm.
- Grids: services `sm:grid-cols-2 lg:grid-cols-3 gap-6`; projects `md:grid-cols-2 gap-8`; editorial split `lg:grid-cols-2 gap-16 items-center`.
- Images: `rounded-2xl object-cover shadow-card`, aspect `16/10` (`sm:21/9` hero), `3/4` portrait, `4/3` cards.

## 5. Components
- **Card**: `flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lift`.
- **Icon chip**: `mb-6 grid size-10 place-items-center rounded-lg bg-muted` + lucide icon `size-5` (stroke 1.5).
- **Testimonial**: same card, `p-10`, `flex flex-col justify-between`, serif quote + small attribution.
- **Buttons**: primary `bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:opacity-90`; ghost link = label + `grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1` arrow.
- **Header**: sticky, `bg-background/80 backdrop-blur border-b border-border`, logo left, 6 links, language switcher (FR/EN/AR) right, mobile sheet menu.
- **Footer**: `bg-graphite text-canvas`, 4 columns (brand+baseline, expertises, entreprise, contact), legal row.
- **Reveal**: IntersectionObserver wrapper adding the `reveal` class once visible, with `delay` prop (0/80/160ms stagger). Respect `prefers-reduced-motion`.
- Icons: `lucide-react` only. Services mapping: Menuiserie `Hammer`, Fenêtres & portes-fenêtres `PanelsTopLeft`, Agencement `LayoutGrid`, Acoustique `AudioLines`, Matières & finitions `Layers`, Bureau d'études `Compass`.
- Motion: transitions `duration-300 ease-[var(--ease-expo)]`; hover lift only on shadow/translate, never scale > 1.02.

## 6. i18n (FR default, EN, AR RTL)
- Single dictionary module keyed `fr | en | ar`; zero copy hardcoded in components.
- Provider stores locale (localStorage + `<html lang dir>`), `dir="rtl"` for AR.
- Use logical CSS only: `ms-/me-`, `ps-/pe-`, `text-start/end`, `translate-x` avoided in RTL-sensitive spots (or mirrored with `rtl:-translate-x-1`).
- Arabic must be professionally translated, not transliterated.

## 7. Pages & sections
- **Home**: Hero (eyebrow, H1, sub, 2 CTAs, full-bleed image) → Company intro (split, 2 value bullets) → Services (6 cards, numbered 01–06) → Featured projects (editorial split + link) → Why choose us (3–4 cards on `bg-muted`) → Stats band (4 numbers on graphite) → Certifications (logo/label row) → Partners (muted logo row) → Testimonials (3) → Latest news (3 cards) → Contact CTA → Footer.
- **About**: heritage story (1966, Jura), timeline, workshop image, team numbers, values.
- **Services**: 6 numbered expertises with long descriptions, alternating image/text, approach steps (6), matières (6), performance indicators (4).
- **Projects**: sector filters, gallery grid with hover caption, project meta (year, lieu, secteur).
- **News**: list of articles, date + category, detail-ready cards.
- **Contact**: form (nom, société, email, téléphone, type de projet, phase, localisation, message) + coordinates, hours, map placeholder.

## 8. Content facts (must stay accurate)
Batimob — fondée en 1966, Jura; direction Louis Beyer; 25 collaborateurs; 15+ projets/an; "Made in Jura", sourcing éco-responsable, respect des délais. Baseline: « Le savoir-faire au service de l'architecture. » Logo: BM cube + wordmark BATIMOB + « MENUISERIE & AGENCEMENT ». Keep logo and the 6 expertises exactly as listed.

## 9. SEO / quality bar
- Per-page unique title (<60 chars) + meta description (<160), og:title/description, og:type, twitter:card; one H1 per page; alt text on every image; lazy-load below the fold; responsive `viewport`; canonical.
- Lighthouse target: 95+ perf/a11y; AA contrast in both directions; keyboard-navigable nav and form.
