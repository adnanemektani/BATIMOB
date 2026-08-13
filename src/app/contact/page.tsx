import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = buildMetadata(translations.fr, "contact");

export default function ContactPage() {
  return <ContactContent />;
}