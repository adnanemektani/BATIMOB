"use client";

import Image from "next/image";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/sections/cta-band";

export function AboutContent() {
  const { t } = useI18n();

  return (
    <>
      <PageMeta page="about" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-14">
        <Reveal>
          <p className="eyebrow text-timber-deep">{t.intro.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl">
            {t.about.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.about.lead}
          </p>
        </Reveal>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[7/5] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/atelier.jpg"
                alt={t.about.atelierAlt}
                width={1400}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                {t.about.historyTitle}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t.about.history}
              </p>
            </Reveal>
            <Reveal delay={160} className="mt-12">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                {t.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="hairline order-last text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-3xl text-balance sm:text-4xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24 sm:py-32">
        <div className="shell">
          <Reveal>
            <SectionHeading title={t.about.valuesTitle} />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.values.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-timber-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-lg font-medium">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}