"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { ImageCarousel } from "@/components/image-carousel";
import { urlFor, projectImages, type SanityProject } from "@/lib/sanity";
import type { Locale } from "@/lib/translations";

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

type ProjectDetailContentProps = {
  project: SanityProject;
};

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t, locale } = useI18n();

  const title = getLocalizedName(project, locale);
  const text = getLocalizedText(project, locale);
  const images = projectImages(project).map((image) =>
    urlFor(image).width(1600).height(1100).url(),
  );

  return (
    <>
      <PageMeta page="projects" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 ease-[var(--ease-expo)] hover:text-foreground"
          >
            <ArrowLeft
              className="size-4 rtl:rotate-180"
              aria-hidden="true"
            />
            {t.actions.backProjects}
          </Link>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <span className="hairline text-muted-foreground">
              {project.sector}
            </span>
            <span className="hairline text-muted-foreground">
              {project.year}
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
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {images.length > 0 && (
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-card sm:aspect-[4/3] lg:col-span-7">
                <ImageCarousel
                  images={images}
                  alt={title}
                  className="absolute inset-0"
                  priority
                />
              </div>
            )}

            <div className={images.length > 0 ? "lg:col-span-5" : "lg:col-span-12"}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
