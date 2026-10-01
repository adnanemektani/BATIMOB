import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { translations } from "@/lib/translations";
import { ServiceDetailContent } from "@/components/pages/service-detail-content";
import { getServiceBySlug, getServices, urlFor } from "@/lib/sanity";
import { isServiceSlug, SERVICE_FALLBACK } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export const revalidate = 60;

/**
 * Next.js peut transmettre le slug encore encodé (ex: `service%201` au lieu de
 * `service 1`), ce qui faisait échouer la recherche dans Sanity et renvoyer un 404.
 * On décode donc systématiquement le segment avant de l'utiliser.
 */
function readSlug(raw: string): string {
  try {
    return decodeURIComponent(raw).trim();
  } catch {
    return raw.trim();
  }
}

export async function generateStaticParams() {
  const services = await getServices();
  return services
    .map((service) => service.slug?.current)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const slug = readSlug((await params).slug);
  const canonical = encodeURI(`https://www.batimob.net/services/${slug}`);

  const fallback = isServiceSlug(slug) ? SERVICE_FALLBACK[slug] : null;
  const meta = fallback
    ? translations.fr.services.items[
        Object.keys(SERVICE_FALLBACK).indexOf(slug)
      ]
    : null;

  const service = (await getServiceBySlug(slug)) ?? null;
  const title = service?.titleFr || meta?.title || "Batimob";
  const description = service?.textFr || meta?.text;
  const imageUrl = service?.images?.[0]
    ? urlFor(service.images[0]).width(1200).height(630).url()
    : fallback?.image;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "Batimob",
      locale: "fr_FR",
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const slug = readSlug((await params).slug);

  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailContent slug={slug} service={service} />;
}