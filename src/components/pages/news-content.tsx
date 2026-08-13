"use client";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";

export function NewsContent() {
  const { t } = useI18n();

  return (
    <>
      <PageMeta page="news" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl">
            {t.news.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.news.lead}
          </p>
        </Reveal>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="mx-auto max-w-3xl border-t border-foreground/15">
          {t.news.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 80}>
              <article className="border-b border-foreground/15 py-12">
                <div className="flex items-center gap-4">
                  <span className="hairline text-muted-foreground">
                    {item.date}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-2xl leading-snug text-balance sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}