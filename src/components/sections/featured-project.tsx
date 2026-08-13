"use client";

import Image from "next/image";
import Link from "next/link";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { ArrowLink } from "@/components/cta";

export function FeaturedProject() {
  const { t } = useI18n();

  return (
    <section className="shell py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-timber-deep">
              {t.projects.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-balance sm:text-5xl">
              {t.projects.featured.name}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 flex items-center gap-8">
              <span className="hairline text-muted-foreground">
                {t.projects.featured.sector}
              </span>
              <span className="hairline text-muted-foreground">
                {t.projects.featured.year}
              </span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.projects.featured.text}
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-10">
            <ArrowLink href="/projects">{t.actions.discover}</ArrowLink>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Link href="/projects" className="group block" aria-label={t.projects.featured.name}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] group-hover:shadow-lift">
              <Image
                src="/images/project-theatre.jpg"
                alt={t.projects.featured.name}
                width={1200}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="h-full w-full rounded-2xl object-cover transition-transform duration-300 ease-[var(--ease-expo)] group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}