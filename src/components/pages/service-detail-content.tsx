"use client";

import Image from "next/image";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { ImageCarousel } from "@/components/image-carousel";
import { ServiceIcon } from "@/components/service-icons";
import { cn } from "@/lib/utils";
import { urlFor, type SanityService } from "@/lib/sanity";
import {
  iconIndexForSlug,
  serviceText,
  serviceTitle,
  SERVICE_FALLBACK,
} from "@/lib/services";

type ServiceDetailContentProps = {
  slug: string;
  service: SanityService;
};

function totalImageFallback(slug: string): string[] {
  const image = SERVICE_FALLBACK[slug as keyof typeof SERVICE_FALLBACK]?.image;
  return image ? [image] : [];
}

export function ServiceDetailContent({ slug, service }: ServiceDetailContentProps) {
  const { t, locale } = useI18n();

  const title = serviceTitle(service, locale);
  const text = serviceText(service, locale);

  const images = service.images?.length
    ? service.images.map((image) =>
        urlFor(image).width(1600).height(1100).url(),
      )
    : totalImageFallback(slug);

  return (
    <>
      <PageMeta page="services" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal>
          <p className="eyebrow text-timber-deep">{t.services.title}</p>
        </Reveal>
        {service.logo && (
          <Reveal delay={40}>
            <div className="mt-8">
              <Image
                src={urlFor(service.logo).width(480).url()}
                alt={title}
                width={480}
                height={160}
                className="h-16 w-auto object-contain object-left"
              />
            </div>
          </Reveal>
        )}
        <Reveal delay={80}>
          <div className="mt-6 flex items-center gap-4">
            <span className="grid size-11 place-items-center rounded-lg bg-muted">
              <ServiceIcon index={iconIndexForSlug(slug)} />
            </span>
            <h1 className="max-w-3xl font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl">
              {title}
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="shell py-10 sm:py-16">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div
              className={cn(
                "relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-card sm:aspect-[4/3]",
                "lg:col-span-7",
              )}
            >
              <ImageCarousel
                images={images}
                alt={title}
                className="absolute inset-0"
                priority
              />
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}