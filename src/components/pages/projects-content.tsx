"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const PROJECT_IMAGES: Record<string, { src: string; width: number; height: number }> = {
  theatre: { src: "/images/project-theatre.jpg", width: 1200, height: 1600 },
  hotel: { src: "/images/project-hotel.jpg", width: 1200, height: 900 },
  office: { src: "/images/project-office.jpg", width: 1200, height: 900 },
  boutique: { src: "/images/project-boutique.jpg", width: 1200, height: 900 },
};

export function ProjectsContent() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");

  const sectors = useMemo(
    () => Array.from(new Set(t.projects.items.map((item) => item.sector))),
    [t],
  );

  const showFeatured = filter === "all" || filter === t.projects.featured.sector;
  const gridItems = t.projects.items.filter(
    (item) => filter === "all" || item.sector === filter,
  );

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
          {showFeatured && (
            <Reveal>
              <article
                id={t.projects.featured.slug}
                className="grid items-center gap-10 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[4/3]">
                  <Image
                    src={PROJECT_IMAGES[t.projects.featured.slug].src}
                    alt={t.projects.featured.name}
                    width={PROJECT_IMAGES[t.projects.featured.slug].width}
                    height={PROJECT_IMAGES[t.projects.featured.slug].height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-8">
                    <span className="hairline text-muted-foreground">
                      {t.projects.featured.sector}
                    </span>
                    <span className="hairline text-muted-foreground">
                      {t.projects.featured.year}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl leading-tight text-balance sm:text-4xl">
                    {t.projects.featured.name}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {t.projects.featured.text}
                  </p>
                </div>
              </article>
            </Reveal>
          )}

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gridItems.map((item, index) => {
              const image = PROJECT_IMAGES[item.slug];
              return (
                <Reveal key={item.slug} delay={(index % 3) * 80}>
                  <article
                    id={item.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={item.name}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full rounded-t-2xl object-cover transition-transform duration-300 ease-[var(--ease-expo)] group-hover:scale-[1.02]"
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
                        {item.name}
                      </h3>
                      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        {t.actions.discover}
                        <ArrowRight
                          className="size-4 transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}