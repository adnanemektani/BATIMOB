import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { NewsContent } from "@/components/pages/news-content";
import { getNews } from "@/lib/sanity";

export const metadata: Metadata = buildMetadata(translations.fr, "news");

export default async function NewsPage() {
  const news = await getNews();

  return <NewsContent news={news} />;
}