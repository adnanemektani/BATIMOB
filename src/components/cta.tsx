import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PillLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-graphite shadow-card transition-shadow duration-300 ease-[var(--ease-expo)] hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/** Ghost link with a circular arrow chip (see design system §5). */
export function ArrowLink({
  href,
  children,
  inverse = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300 ease-[var(--ease-expo)]",
        inverse ? "text-canvas hover:text-canvas/80" : "text-foreground hover:text-foreground/80",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "grid size-9 place-items-center rounded-full transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1",
          inverse
            ? "bg-canvas text-graphite"
            : "bg-accent text-graphite",
        )}
      >
        <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function ExternalArrow() {
  return <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />;
}