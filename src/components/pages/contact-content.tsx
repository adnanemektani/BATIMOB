"use client";

import { MapPin, Phone } from "lucide-react";

import { useI18n } from "@/components/providers";
import { PageMeta } from "@/components/page-meta";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_EMAIL = "contact@batimob.net";

function officeLink(line: string): { href?: string } {
  if (line.includes("@")) return { href: `mailto:${line}` };
  if (line.startsWith("+")) return { href: `tel:${line.replace(/[^+\d]/g, "")}` };
  return {};
}

export function ContactContent() {
  const { t } = useI18n();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = [name, company].filter(Boolean).join(" — ") || "Batimob";
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageMeta page="contact" />

      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal>
          <p className="eyebrow text-timber-deep">{t.nav.contact}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.03] text-balance sm:text-6xl">
            {t.contact.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.contact.lead}
          </p>
        </Reveal>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="grid gap-5 rounded-2xl border border-border bg-card p-8 shadow-card sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">{t.contact.form.company}</Label>
                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea id="message" name="message" required rows={5} />
              </div>
              <div className="flex flex-col items-start gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-graphite shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {t.actions.send}
                </button>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.contact.form.note}
                </p>
              </div>
            </form>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal>
              <SectionHeading title={t.contact.officesTitle} />
            </Reveal>
            <div className="mt-8 space-y-6">
              {t.contact.offices.map((office, index) => (
                <Reveal key={office.city} delay={index * 80}>
                  <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-full bg-muted">
                        {index === 0 ? (
                          <MapPin className="size-4" strokeWidth={1.5} aria-hidden="true" />
                        ) : (
                          <Phone className="size-4" strokeWidth={1.5} aria-hidden="true" />
                        )}
                      </span>
                      <h3 className="text-base font-medium">{office.city}</h3>
                    </div>
                    <ul className="mt-5 space-y-2">
                      {office.lines.map((line) => {
                        const link = officeLink(line);
                        const content = (
                          <li key={line} className="text-sm leading-relaxed text-muted-foreground">
                            {link.href ? (
                              <a
                                href={link.href}
                                className="transition-colors hover:text-foreground"
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </li>
                        );
                        return content;
                      })}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}