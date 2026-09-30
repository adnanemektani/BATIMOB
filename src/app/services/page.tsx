import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { ServicesContent } from "@/components/pages/services-content";
import { getServices } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(translations.fr, "services");

export default async function ServicesPage() {
  const services = await getServices();

  return <ServicesContent services={services} />;
}