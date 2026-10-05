"use client";

import { useEffect } from "react";

import {
  CONSENT_CHANGED_EVENT,
  readConsent,
} from "@/lib/consent";

const GA_MEASUREMENT_ID = "G-FBFRHN6M20";
const GA_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
const GA_SCRIPT_ID = "batimob-ga";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((entry) => entry.split("=")[0]?.trim() ?? "")
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  const expiry = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  for (const name of names) {
    document.cookie = `${name}=; ${expiry}`;
    document.cookie = `${name}=; ${expiry}; domain=.${window.location.hostname}`;
  }
}

function startAnalytics() {
  if (document.getElementById(GA_SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag = gtag;

  gtag("consent", "default", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = GA_SCRIPT_SRC;
  document.head.appendChild(script);
}

function stopAnalytics() {
  document.getElementById(GA_SCRIPT_ID)?.remove();
  clearAnalyticsCookies();
}

/**
 * Google Analytics n'est chargé qu'après consentement explicite.
 * Tant que le visiteur n'a rien choisi, aucune requête n'est envoyée à Google.
 */
export function Analytics() {
  useEffect(() => {
    const apply = () => {
      if (readConsent()?.analytics === true) {
        startAnalytics();
      } else {
        stopAnalytics();
      }
    };

    apply();
    window.addEventListener(CONSENT_CHANGED_EVENT, apply);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, apply);
  }, []);

  return null;
}
