"use client";

import Image from "next/image";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { ArrowLink, PillLink } from "@/components/cta";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="shell pt-14 pb-16 sm:pt-20 sm:pb-20">
      <div className="max-w-4xl">
        <Reveal>
          <p className="eyebrow text-timber-deep">{t.hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.lead}
          </p>
        </Reveal>
        <Reveal
          delay={240}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <PillLink href="/contact">{t.actions.quote}</PillLink>
          <ArrowLink href="/services">{t.actions.allServices}</ArrowLink>
        </Reveal>
      </div>

      <Reveal delay={160} className="mt-12 sm:mt-16">
        <div className="px-1.5 sm:px-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lift sm:aspect-[21/9]">
            <Image
              src="/images/hero-auditorium.jpg"
              alt={t.hero.imageAlt}
              width={1920}
              height={848}
              priority
              sizes="(max-width: 640px) 100vw, 96vw"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}