"use client";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowLink } from "@/components/cta";
import type { SanityNews } from "@/lib/sanity";
import type { Locale } from "@/lib/translations";

function getLocalizedTitle(news: SanityNews, locale: Locale): string {
  if (locale === "en") return news.titleEn;
  if (locale === "ar") return news.titleAr;
  return news.titleFr;
}

function getLocalizedText(news: SanityNews, locale: Locale): string {
  if (locale === "en") return news.textEn;
  if (locale === "ar") return news.textAr;
  return news.textFr;
}

type LatestNewsProps = {
  news: SanityNews[];
};

export function LatestNews({ news }: LatestNewsProps) {
  const { t, locale } = useI18n();

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title={t.news.title} lead={t.news.lead} />
            <ArrowLink href="/news" className="hidden sm:inline-flex">
              {t.actions.allNews}
            </ArrowLink>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.slice(0, 3).map((item, index) => (
            <Reveal key={item._id} delay={(index % 3) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="hairline text-muted-foreground">
                    {item.date}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium leading-snug">
                  {getLocalizedTitle(item, locale)}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {getLocalizedText(item, locale)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 sm:hidden">
          <ArrowLink href="/news">{t.actions.allNews}</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
