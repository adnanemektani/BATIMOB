"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  interval?: number;
  priority?: boolean;
};

export function ImageCarousel({
  images,
  alt,
  className,
  imageClassName,
  interval = 4000,
  priority = false,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  useEffect(() => {
    if (count <= 1) return;
    timer.current = setInterval(next, interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [count, next, interval]);

  if (count === 0) return null;

  return (
    <div className={cn("group/player relative overflow-hidden", className)}>
      {images.map((src, index) => (
        <Image
          key={src + index}
          src={src}
          alt={index === current ? alt : `${alt} (${index + 1})`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority && index === 0}
          className={cn(
            "object-cover opacity-0 transition-opacity duration-700 ease-[var(--ease-expo)]",
            index === current && "opacity-100",
            imageClassName,
          )}
        />
      ))}

      {count > 1 && (
        <>
          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Image ${index + 1}`}
                onClick={() => goTo(index)}
                className={cn(
                  "size-2 rounded-full transition-colors duration-300",
                  index === current ? "bg-white" : "bg-white/50",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Image précédente"
            onClick={() => goTo(current - 1)}
            className="absolute inset-y-0 left-0 z-10 hidden w-12 cursor-pointer items-center justify-center bg-gradient-to-r from-black/25 to-transparent text-white opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover/player:flex"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 rtl:rotate-180"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={() => next()}
            className="absolute inset-y-0 right-0 z-10 hidden w-12 cursor-pointer items-center justify-center bg-gradient-to-l from-black/25 to-transparent text-white opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover/player:flex"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 rtl:rotate-180"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}