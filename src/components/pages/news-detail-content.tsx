"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { isUsableImage, urlFor, type SanityNews } from "@/lib/sanity";
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

type NewsDetailContentProps = {
  news: SanityNews;
};

export function NewsDetailContent({ news }: NewsDetailContentProps) {
  const { t, locale } = useI18n();

  const title = getLocalizedTitle(news, locale);
  const text = getLocalizedText(news, locale);
  const link = news.url?.trim();

  return (
    <>
      <PageMeta page="news" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 ease-[var(--ease-expo)] hover:text-foreground"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            {t.actions.backNews}
          </Link>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-8 flex items-center gap-4">
            <span className="hairline text-muted-foreground">{news.date}</span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
              {news.category}
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 max-w-3xl font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl">
            {title}
          </h1>
        </Reveal>
      </section>

      <section className="shell py-10 sm:py-16">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            {isUsableImage(news.image) && (
              <div className="relative mb-10 aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-card">
                <Image
                  src={urlFor(news.image).width(1600).url()}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <p className="whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
              {text}
            </p>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity duration-300 ease-[var(--ease-expo)] hover:opacity-85"
              >
                {t.actions.viewLink}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
