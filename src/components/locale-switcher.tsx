"use client";

import { useI18n } from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/translations";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "flex items-center rounded-full border border-border bg-muted/60 p-0.5",
        className,
      )}
    >
      {LOCALES.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "grid h-7 min-w-9 place-items-center rounded-full px-2 text-xs font-medium transition-colors duration-300 ease-[var(--ease-expo)]",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}