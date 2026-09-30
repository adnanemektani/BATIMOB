import type { SanityService } from "@/lib/sanity";
import type { Locale } from "@/lib/translations";

export const SERVICE_SLUGS = [
  "menuiserie",
  "fenetres-portes-fenetres",
  "agencement",
  "acoustique",
  "matieres",
  "bureau-detude",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** Pour chaque slug pré-défini, une image locale de remplacement quand le
 *  document Sanity n'a pas encore d'image (placeholder d'attente). */
export const SERVICE_FALLBACK: Record<
  ServiceSlug,
  { image: string }
> = {
  menuiserie: { image: "/images/atelier.jpg" },
  "fenetres-portes-fenetres": { image: "/images/project-office.jpg" },
  agencement: { image: "/images/project-boutique.jpg" },
  acoustique: { image: "/images/hero-auditorium.jpg" },
  matieres: { image: "/images/project-hotel.jpg" },
  "bureau-detude": { image: "/images/project-theatre.jpg" },
};

/** Associe chaque slug connu à l'index de son icône. Les nouveaux services
 *  créés dans Sanity reçoivent l'icône par défaut (0). */
const ICON_INDEX_BY_SLUG: Record<string, number> = {
  menuiserie: 0,
  "fenetres-portes-fenetres": 1,
  agencement: 2,
  acoustique: 3,
  matieres: 4,
  "bureau-detude": 5,
};

export function iconIndexForSlug(slug: string): number {
  return ICON_INDEX_BY_SLUG[slug] ?? 0;
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(slug);
}

export function serviceTitle(service: SanityService, locale: Locale): string {
  if (locale === "en") return service.titleEn || service.titleFr;
  if (locale === "ar") return service.titleAr || service.titleFr;
  return service.titleFr;
}

export function serviceText(service: SanityService, locale: Locale): string {
  if (locale === "en") return service.textEn || service.textFr;
  if (locale === "ar") return service.textAr || service.textFr;
  return service.textFr;
}