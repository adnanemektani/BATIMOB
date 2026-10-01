import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NewsDetailContent } from "@/components/pages/news-detail-content";
import { getNews, getNewsByKey, isUsableImage, newsKey, urlFor } from "@/lib/sanity";
import { readSlug } from "@/lib/slug";

type Params = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item) => ({ slug: newsKey(item) }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const slug = readSlug((await params).slug);
  const canonical = encodeURI(`https://www.batimob.net/news/${slug}`);

  const item = await getNewsByKey(slug);
  if (!item) return { title: "Batimob" };

  const description = item.textFr;

  return {
    title: item.titleFr,
    description,
    alternates: { canonical },
    openGraph: {
      title: item.titleFr,
      description,
      type: "article",
      url: canonical,
      siteName: "Batimob",
      locale: "fr_FR",
      images: isUsableImage(item.image)
        ? [
            {
              url: urlFor(item.image).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: item.titleFr,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: item.titleFr,
      description,
      images: isUsableImage(item.image)
        ? [urlFor(item.image).width(1200).url()]
        : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: Params) {
  const slug = readSlug((await params).slug);

  const item = await getNewsByKey(slug);
  if (!item) notFound();

  return <NewsDetailContent news={item} />;
}
