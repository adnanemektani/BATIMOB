import type { Metadata } from "next";
import type { Dictionary } from "@/lib/translations";

export const SITE_URL = "https://www.batimob.net";
const OG_IMAGE = "/images/hero-auditorium.jpg";

type PageKey = keyof Dictionary["meta"];

export function buildMetadata(
  t: Dictionary,
  page: PageKey,
): Metadata {
  const meta = t.meta[page];
  const url = page === "home" ? SITE_URL : `${SITE_URL}/${page}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url,
      siteName: "Batimob",
      locale: page === "home" ? "fr_FR" : "fr_FR",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}