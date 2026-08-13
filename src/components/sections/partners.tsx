"use client";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";

export function Partners() {
  const { t } = useI18n();

  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="shell flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <Reveal>
          <h2 className="text-lg font-medium">{t.partners.title}</h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {t.partners.items.map((item) => (
              <li
                key={item}
                className="text-sm font-semibold tracking-[0.3em] text-muted-foreground/80 transition-colors duration-300 ease-[var(--ease-expo)] hover:text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}