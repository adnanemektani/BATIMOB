"use client";

import { useState } from "react";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import type { SanityNews } from "@/lib/sanity";
import type { Locale } from "@/lib/translations";

const PAGE_SIZE = 6;

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

type NewsContentProps = {
  news: SanityNews[];
};

export function NewsContent({ news }: NewsContentProps) {
  const { t, locale } = useI18n();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleItems = news.slice(0, visibleCount);
  const hasMore = visibleCount < news.length;

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
          {visibleItems.map((item, index) => (
            <Reveal key={item._id} delay={(index % 2) * 80}>
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
                  {getLocalizedTitle(item, locale)}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {getLocalizedText(item, locale)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex items-center gap-6">
              <span className="h-px flex-1 bg-border" />
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="shrink-0 text-sm font-medium text-muted-foreground transition-colors duration-300 ease-[var(--ease-expo)] hover:text-foreground"
              >
                {t.actions.allNews}
              </button>
              <span className="h-px flex-1 bg-border" />
            </div>
          </div>
        )}
      </section>

      <CtaBand />
    </>
  );
}
