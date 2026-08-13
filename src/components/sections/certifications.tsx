"use client";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";

export function Certifications() {
  const { t } = useI18n();

  return (
    <section className="shell py-20 sm:py-28">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="text-lg font-medium">{t.certifications.title}</h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="flex flex-wrap items-center gap-3" aria-label={t.certifications.title}>
            {t.certifications.items.map((item) => (
              <li key={item}>
                <span className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-medium shadow-card">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}