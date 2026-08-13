"use client";

import { Quote } from "lucide-react";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <SectionHeading title={t.testimonials.title} />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {t.testimonials.items.map((item, index) => (
          <Reveal key={item.author} delay={index * 80}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-10 shadow-card">
              <div>
                <Quote
                  className="size-8 text-timber"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <blockquote className="mt-6 font-display text-xl leading-snug text-balance">
                  {item.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-muted font-display text-lg">
                  {item.author.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}