"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { useI18n } from "@/components/providers";
import { CONSENT_OPEN_EVENT } from "@/lib/consent";
import { LINKEDIN_URL } from "@/lib/links";

const COMPANY_LINKS = [
  { href: "/about", index: 0 },
  { href: "/services", index: 1 },
  { href: "/projects", index: 2 },
  { href: "/news", index: 3 },
] as const;

const LEGAL_LINKS = [
  { href: "/mentions-legales", index: 0 },
  { href: "/confidentialite", index: 1 },
  { href: "/cookies", index: 2 },
  { href: "/conditions-utilisation", index: 3 },
  { href: "/conditions-devis", index: 4 },
] as const;

export function Footer() {
  const { t } = useI18n();

  const expertises = t.services.items.map((item) => item.title);
  const phone =
    t.contact.offices[0]?.lines[2] ?? t.footer.address.split("\n")[0];
  const email =
    t.contact.offices[1]?.lines[2] ?? "l.beyer@batimob.net";
  const addressLines = t.footer.address.split("\n");

  return (
    <footer className="bg-graphite text-canvas">
      <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="inline-flex rounded-xl bg-canvas p-3">
            <Image
              src="/images/batimob-logo.png"
              alt="Batimob"
              width={140}
              height={25}
              className="h-5 w-auto"
            />
          </span>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-canvas/60">
            {t.footer.about}
          </p>
        </div>

        <nav className="lg:col-span-3" aria-label="Expertises">
          <h2 className="eyebrow text-canvas/50">{t.services.title}</h2>
          <ul className="mt-6 space-y-3">
            {expertises.map((title) => (
              <li key={title}>
                <Link
                  href="/services"
                  className="text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label={t.footer.company}>
          <h2 className="eyebrow text-canvas/50">{t.footer.company}</h2>
          <ul className="mt-6 space-y-3">
            {COMPANY_LINKS.map(({ href, index }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  {t.footer.links[index]}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm text-canvas/70 transition-colors hover:text-canvas"
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-canvas/50">{t.nav.contact}</h2>
          <address className="mt-6 space-y-3 not-italic">
            {addressLines.map((line) => (
              <p key={line} className="text-sm leading-relaxed text-canvas/70">
                {line}
              </p>
            ))}
            <p className="text-sm text-canvas/70">{phone}</p>
            <p>
              <a
                href={`mailto:${email}`}
                className="text-sm text-canvas/70 transition-colors hover:text-canvas"
              >
                {email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-canvas/10">
        <div className="shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-canvas/50">
            {t.footer.rights.replace(/\d{4}/, String(new Date().getFullYear()))}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map(({ href, index }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-canvas/50 transition-colors hover:text-canvas"
              >
                {t.footer.legalLinks[index]}
              </Link>
            ))}
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))
              }
              className="text-xs text-canvas/50 transition-colors hover:text-canvas"
            >
              {t.footer.manageCookies}
            </button>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-canvas/20 px-3 py-1.5 text-xs text-canvas/70 transition-colors hover:border-canvas/50 hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas/60"
            >
              LinkedIn
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}