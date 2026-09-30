"use client";

import Link from "next/link";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icons";
import { CtaBand } from "@/components/sections/cta-band";
import { ArrowRight } from "lucide-react";
import { iconIndexForSlug, serviceText, serviceTitle } from "@/lib/services";
import type { SanityService } from "@/lib/sanity";

type ServicesContentProps = {
  services: SanityService[];
};

export function ServicesContent({ services }: ServicesContentProps) {
  const { t, locale } = useI18n();

  return (
    <>
      <PageMeta page="services" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl">
            {t.services.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.services.lead}
          </p>
        </Reveal>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="border-t border-foreground/15">
          {services.map((item, index) => {
            const slug = item.slug?.current;
            if (!slug) return null;
            return (
              <Reveal key={item._id}>
                <Link
                  href={`/services/${slug}`}
                  className="group grid gap-6 border-b border-foreground/15 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-timber-deep lg:col-span-2 lg:pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="lg:col-span-10">
                    <div className="flex items-center gap-4">
                      <span className="grid size-10 place-items-center rounded-lg bg-muted">
                        <ServiceIcon index={iconIndexForSlug(slug)} />
                      </span>
                      <h2 className="font-display text-2xl leading-snug text-balance sm:text-3xl">
                        {serviceTitle(item, locale)}
                      </h2>
                      <ArrowRight
                        className="ms-auto size-5 shrink-0 text-foreground transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                      {serviceText(item, locale)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}