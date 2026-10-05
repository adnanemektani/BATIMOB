import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalContent } from "@/components/pages/legal-content";
import { getLegalDocument } from "@/lib/legal-documents";
import { buildLegalMetadata } from "@/lib/seo";

const doc = getLegalDocument("mentions-legales");

export const metadata: Metadata = doc ? buildLegalMetadata(doc) : {};

export default function MentionsLegalesPage() {
  if (!doc) notFound();
  return <LegalContent doc={doc} />;
}
