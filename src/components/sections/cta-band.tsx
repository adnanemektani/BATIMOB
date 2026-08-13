"use client";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { PillLink } from "@/components/cta";

export function CtaBand() {
  const { t } = useI18n();

  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-col items-start gap-10 rounded-2xl bg-graphite px-8 py-16 text-canvas shadow-lift sm:px-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
              {t.ctaBand.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-canvas/70">
              {t.ctaBand.text}
            </p>
          </div>
          <PillLink href="/contact" className="shrink-0">
            {t.actions.quote}
          </PillLink>
        </div>
      </Reveal>
    </section>
  );
}