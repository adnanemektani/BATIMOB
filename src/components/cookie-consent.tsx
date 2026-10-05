"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useI18n } from "@/components/providers";
import {
  CONSENT_OPEN_EVENT,
  readConsent,
  writeConsent,
} from "@/lib/consent";

const BUTTON =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function CookieConsent() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [detailed, setDetailed] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      if (readConsent() === null) {
        setAnalytics(true);
        setDetailed(false);
        setOpen(true);
      }
    }

    const reopen = () => {
      setAnalytics(readConsent()?.analytics ?? false);
      setDetailed(true);
      setOpen(true);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  function save(choice: boolean) {
    writeConsent(choice);
    setOpen(false);
    setDetailed(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookies.title}
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 pt-6 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-background/95 p-6 shadow-lift backdrop-blur-xl sm:p-8">
        <h2 className="font-display text-2xl leading-tight sm:text-3xl">
          {t.cookies.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {t.cookies.text}
        </p>

        {!detailed ? (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => save(true)}
              className={`${BUTTON} bg-primary text-primary-foreground hover:bg-primary/90`}
            >
              {t.cookies.accept}
            </button>
            <button
              type="button"
              onClick={() => save(false)}
              className={`${BUTTON} border border-border bg-background text-foreground hover:bg-muted`}
            >
              {t.cookies.reject}
            </button>
            <button
              type="button"
              onClick={() => setDetailed(true)}
              className={`${BUTTON} text-muted-foreground hover:text-foreground`}
            >
              {t.cookies.customize}
            </button>
            <Link
              href="/cookies"
              className="ml-auto text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {t.footer.legalLinks[2]}
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <div className="flex items-start justify-between gap-6 rounded-xl border border-border bg-muted/40 p-4">
              <div>
                <p className="text-sm font-medium">{t.cookies.necessary}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t.cookies.necessaryText}
                </p>
              </div>
              <span className="mt-0.5 shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                OK
              </span>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-6 rounded-xl border border-border p-4">
              <span>
                <span className="text-sm font-medium">
                  {t.cookies.audience}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {t.cookies.audienceText}
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.currentTarget.checked)}
                className="mt-1 size-4 shrink-0 accent-[var(--timber)]"
              />
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => save(analytics)}
                className={`${BUTTON} bg-primary text-primary-foreground hover:bg-primary/90`}
              >
                {t.cookies.save}
              </button>
              <button
                type="button"
                onClick={() => setDetailed(false)}
                className={`${BUTTON} border border-border bg-background text-foreground hover:bg-muted`}
              >
                {t.cookies.back}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
