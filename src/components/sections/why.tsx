"use client";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading title={t.why.title} lead={t.why.lead} />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-timber-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-medium">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}