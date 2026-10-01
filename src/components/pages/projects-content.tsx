"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { ImageCarousel } from "@/components/image-carousel";
import { cn } from "@/lib/utils";
import { urlFor, projectImages, type SanityProject } from "@/lib/sanity";
import type { Locale } from "@/lib/translations";

const PAGE_SIZE = 6;

function getLocalizedName(project: SanityProject, locale: Locale): string {
  if (locale === "en") return project.nameEn;
  if (locale === "ar") return project.nameAr;
  return project.nameFr;
}

function getLocalizedText(project: SanityProject, locale: Locale): string {
  if (locale === "en") return project.textEn;
  if (locale === "ar") return project.textAr;
  return project.textFr;
}

type ProjectsContentProps = {
  projects: SanityProject[];
  featured: SanityProject | null;
};

export function ProjectsContent({ projects, featured }: ProjectsContentProps) {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const sectors = useMemo(
    () => Array.from(new Set(projects.map((item) => item.sector))),
    [projects],
  );

  const lead = projects[0] ?? featured;
  const showFeatured =
    lead && (filter === "all" || filter === lead.sector);
  const gridItems = projects
    .filter((item) => item !== lead)
    .filter((item) => filter === "all" || item.sector === filter);

  const visibleItems = gridItems.slice(0, visibleCount);
  const hasMore = visibleCount < gridItems.length;

  const filters = ["all", ...sectors];

  return (
    <>
      <PageMeta page="projects" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal>
          <p className="eyebrow text-timber-deep">{t.projects.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl">
            {t.projects.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.projects.lead}
          </p>
        </Reveal>
      </section>

      <section className="shell py-10 sm:py-16">
        <Reveal>
          <div
            role="group"
            aria-label={t.projects.title}
            className="flex flex-wrap items-center gap-2"
          >
            {filters.map((key) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ease-[var(--ease-expo)]",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:text-foreground",
                  )}
                >
                  {key === "all" ? t.nav.projects : key}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-14">
          {showFeatured && lead && (
            <Reveal>
              <Link
                id={lead.slug?.current}
                href={`/projects/${encodeURIComponent(lead.slug?.current ?? "")}`}
                className="group grid items-center gap-10 rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift sm:p-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[4/3]">
                  <ImageCarousel
                    images={projectImages(lead).map((image) =>
                      urlFor(image).width(1200).height(900).url(),
                    )}
                    alt={getLocalizedName(lead, locale)}
                    className="absolute inset-0"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-8">
                    <span className="hairline text-muted-foreground">
                      {lead.sector}
                    </span>
                    <span className="hairline text-muted-foreground">
                      {lead.year}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl leading-tight text-balance sm:text-4xl">
                    {getLocalizedName(lead, locale)}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground line-clamp-3">
                    {getLocalizedText(lead, locale)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    {t.actions.readMore}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <Reveal key={item._id} delay={(index % 3) * 80}>
                <Link
                  id={item.slug?.current}
                  href={`/projects/${encodeURIComponent(item.slug?.current ?? "")}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageCarousel
                      images={projectImages(item).map((image) =>
                        urlFor(image).width(1200).height(900).url(),
                      )}
                      alt={getLocalizedName(item, locale)}
                      className="absolute inset-0"
                      imageClassName="rounded-t-2xl"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-6">
                      <span className="hairline text-muted-foreground">
                        {item.sector}
                      </span>
                      <span className="hairline text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium leading-snug">
                      {getLocalizedName(item, locale)}
                    </h3>
                    <p className="mt-3 flex-1 leading-relaxed text-muted-foreground line-clamp-3">
                      {getLocalizedText(item, locale)}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      {t.actions.discover}
                      <ArrowRight
                        className="size-4 transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {hasMore && (
            <div className="mt-14">
              <div className="flex items-center gap-6">
                <span className="h-px flex-1 bg-border" />
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="shrink-0 text-sm font-medium text-muted-foreground transition-colors duration-300 ease-[var(--ease-expo)] hover:text-foreground"
                >
                  {t.actions.allProjects}
                </button>
                <span className="h-px flex-1 bg-border" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
