import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            inverse ? "text-canvas/60" : "text-timber-deep",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-display text-4xl leading-tight text-balance sm:text-5xl",
          inverse ? "text-canvas" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            inverse ? "text-canvas/70" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}