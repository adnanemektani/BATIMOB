"use client";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";

export function Stats() {
  const { t } = useI18n();

  return (
    <section className="bg-graphite py-20 text-canvas sm:py-24">
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {t.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <div>
              <p className="font-display text-4xl text-balance sm:text-5xl">
                {stat.value}
              </p>
              <p className="hairline mt-3 text-canvas/60">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}