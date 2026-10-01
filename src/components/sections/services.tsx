"use client";

import Link from "next/link";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icons";
import { ArrowLink } from "@/components/cta";
import { ArrowRight } from "lucide-react";
import { iconIndexForSlug, serviceText, serviceTitle } from "@/lib/services";
import type { SanityService } from "@/lib/sanity";

type ServicesProps = {
  services: SanityService[];
};

export function Services({ services }: ServicesProps) {
  const { t, locale } = useI18n();

  if (services.length === 0) return null;

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading title={t.services.title} lead={t.services.lead} />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            const slug = item.slug?.current;
            if (!slug) return null;
            return (
              <Reveal key={item._id} delay={(index % 3) * 80}>
                <Link
                  href={`/services/${encodeURIComponent(slug)}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-lg bg-muted">
                      <ServiceIcon index={iconIndexForSlug(slug)} />
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-timber-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight
                        className="size-4 text-foreground transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-medium transition-colors duration-300 group-hover:text-timber-deep">
                    {serviceTitle(item, locale)}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {serviceText(item, locale)}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <ArrowLink href="/services">{t.actions.allServices}</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}