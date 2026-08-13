import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { ServicesContent } from "@/components/pages/services-content";

export const metadata: Metadata = buildMetadata(translations.fr, "services");

export default function ServicesPage() {
  return <ServicesContent />;
}