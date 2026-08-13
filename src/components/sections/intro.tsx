"use client";

import { Crosshair, Leaf } from "lucide-react";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { ArrowLink } from "@/components/cta";

const TAG_ICONS = [Leaf, Crosshair];

export function CompanyIntro() {
  const { t } = useI18n();

  return (
    <section className="shell py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-timber-deep">{t.intro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-balance sm:text-5xl">
              {t.intro.title}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.intro.text}
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-10">
            <ArrowLink href="/about">{t.nav.about}</ArrowLink>
          </Reveal>
        </div>

        <div className="space-y-6">
          {t.intro.tags.map((tag, index) => {
            const TagIcon = TAG_ICONS[index] ?? Leaf;
            return (
              <Reveal key={tag} delay={index * 80}>
                <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7 shadow-card">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted">
                    <TagIcon
                      className="size-5 text-foreground"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <p className="pt-1.5 text-lg font-medium leading-snug">
                    {tag}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}