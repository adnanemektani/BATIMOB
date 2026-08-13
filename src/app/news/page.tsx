import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { NewsContent } from "@/components/pages/news-content";

export const metadata: Metadata = buildMetadata(translations.fr, "news");

export default function NewsPage() {
  return <NewsContent />;
}