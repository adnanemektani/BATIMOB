import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = buildMetadata(translations.fr, "about");

export default function AboutPage() {
  return <AboutContent />;
}