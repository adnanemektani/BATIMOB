"use client";

import { Fragment, type ReactNode } from "react";
import Link from "next/link";

import { useI18n } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import type { LegalDocument, LegalBlock } from "@/lib/legal-documents";

const INLINE_LINK = /\{\{([^{}|]+)\|([^{}]+)\}\}/g;

/** Transforme les marqueurs {{libellé|/chemin}} en liens internes. */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = new RegExp(INLINE_LINK.source, "g");
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      const chunk = text.slice(last, match.index);
      nodes.push(<Fragment key={`t${last}`}>{chunk}</Fragment>);
    }
    nodes.push(
      <Link
        key={`l${match.index}`}
        href={match[2]}
        className="text-timber-deep underline underline-offset-4 transition-opacity hover:opacity-70"
      >
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(<Fragment key={`t${last}`}>{text.slice(last)}</Fragment>);
  }
  return nodes;
}

function renderBlock(block: LegalBlock, index: number) {
  switch (block.kind) {
    case "p":
      return (
        <p
          key={index}
          className="mt-5 text-base leading-relaxed text-muted-foreground"
        >
          {renderInline(block.text)}
        </p>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-9 text-lg font-semibold text-foreground">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={index}
          className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-muted-foreground"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={index}
          className="mt-5 list-decimal space-y-3 pl-5 text-base leading-relaxed text-muted-foreground"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="mt-6 rounded-r-xl border-s-4 border-timber bg-muted/50 p-5 text-sm leading-relaxed text-muted-foreground"
        >
          {renderInline(block.text)}
        </blockquote>
      );
    case "table":
      return (
        <div key={index} className="mt-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[40rem] border-collapse text-start text-sm">
            <thead>
              <tr>
                {block.head.map((cell, cellIndex) => (
                  <th
                    key={cellIndex}
                    scope="col"
                    className="border-b border-border bg-muted/60 px-4 py-3 text-start text-xs font-semibold uppercase tracking-wide text-foreground"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="align-top">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-b border-border px-4 py-3 leading-relaxed text-muted-foreground"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export function LegalContent({ doc }: { doc: LegalDocument }) {
  const { t, locale } = useI18n();

  return (
    <>
      <section className="shell pt-16 pb-10 sm:pt-24 sm:pb-14">
        <Reveal>
          <p className="eyebrow text-timber-deep">{t.legal.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.5rem] leading-[1.05] text-balance sm:text-6xl">
            {doc.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-6 max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {renderInline(doc.intro)}
            </p>
            {doc.updated ? (
              <p className="mt-4 text-sm text-muted-foreground">
                Dernière mise à jour : {doc.updated}
              </p>
            ) : null}
            {locale !== "fr" && t.legal.notice ? (
              <p className="mt-4 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {t.legal.notice}
              </p>
            ) : null}
          </div>
        </Reveal>
      </section>

      <section className="shell pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <nav
            aria-label={doc.title}
            className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="eyebrow text-timber-deep">{t.legal.toc}</h2>
            <ol className="mt-5 space-y-3 border-s border-border ps-4">
              {doc.sections.map((section, index) => (
                <li key={section.title}>
                  <a
                    href={`#section-${index}`}
                    className="text-sm leading-snug text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:col-span-9">
            <div className="max-w-3xl space-y-14">
              {doc.sections.map((section, index) => (
                <section key={section.title} id={`section-${index}`}>
                  <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
                    {section.title}
                  </h2>
                  {section.blocks.map((block, blockIndex) =>
                    renderBlock(block, blockIndex),
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
