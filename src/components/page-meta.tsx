"use client";

import { useEffect } from "react";
import { useI18n } from "@/components/providers";
import type { Dictionary } from "@/lib/translations";

function setMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

type PageKey = keyof Dictionary["meta"];

/** Flushes the localized head tags handled by the client so they stay
 *  in sync when the user switches locale. */
export function PageMeta({ page }: { page: PageKey }) {
  const { t } = useI18n();
  const meta = t.meta[page];

  useEffect(() => {
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
  }, [meta.title, meta.description, page]);

  return null;
}