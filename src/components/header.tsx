"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { useI18n } from "@/components/providers";
import { LocaleSwitcher } from "@/components/locale-switcher";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "news", href: "/news" },
] as const;

export function Header() {
  const { t, dir } = useI18n();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link
          href="/"
          className="flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Batimob"
        >
          <Image
            src="/images/batimob-logo.png"
            alt="Batimob"
            width={140}
            height={25}
            priority
            className="h-5 w-auto sm:h-6"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors duration-300 ease-[var(--ease-expo)]",
                isActive(href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/contact"
            className="hidden items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            {t.nav.contact}
          </Link>
          <Sheet>
            <SheetTrigger
              className="grid size-10 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-label="Batimob"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              side={dir === "rtl" ? "start" : "end"}
              className="gap-0 p-0"
            >
              <SheetTitle className="sr-only">Batimob</SheetTitle>
              <div className="shell flex h-16 items-center justify-between border-b border-border">
                <Image
                  src="/images/batimob-logo.png"
                  alt="Batimob"
                  width={140}
                  height={25}
                  className="h-5 w-auto"
                />
              </div>
              <nav
                className="flex flex-col gap-1 overflow-y-auto p-6"
                aria-label="Mobile"
              >
                {NAV_LINKS.map(({ key, href }) => (
                  <SheetClose asChild key={key}>
                    <Link
                      href={href}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                        isActive(href)
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {t.nav[key]}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild className="mt-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift"
                  >
                    {t.nav.contact}
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}