"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { screenshots, sliderScreenshots, type ScreenshotKey } from "@/lib/screenshots";

export default function ScreenshotSlider() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const total = sliderScreenshots.length;
  const currentKey = sliderScreenshots[index];
  const current = screenshots[currentKey];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div
      className="mx-auto w-full max-w-lg"
      role="region"
      aria-roledescription="carousel"
      aria-label="666rs app screenshots"
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
        <div
          className="flex min-h-[300px] items-center justify-center p-6"
          aria-live="polite"
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;
            const diff = touchStart - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
            setTouchStart(null);
          }}
        >
          <Image
            key={currentKey}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            unoptimized
            priority={index === 0}
            className="h-auto w-auto max-w-full object-contain"
            style={{
              maxWidth: current.width,
              maxHeight: current.height,
            }}
          />
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md transition hover:bg-white active:scale-95"
          aria-label="Previous screenshot"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md transition hover:bg-white active:scale-95"
          aria-label="Next screenshot"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L11.586 10 7.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <p className="mt-4 text-center text-sm font-medium text-slate-800">
        {current.caption}
      </p>
      <p className="mt-1 text-center text-xs text-slate-500">
        {index + 1} of {total}
      </p>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label="Screenshot thumbnails"
      >
        {sliderScreenshots.map((key, i) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`View screenshot ${i + 1}: ${screenshots[key].caption}`}
            onClick={() => setIndex(i)}
            className={`overflow-hidden rounded-lg border-2 transition ${
              i === index
                ? "border-brand-500 ring-2 ring-brand-200"
                : "border-slate-200 opacity-70 hover:opacity-100"
            }`}
          >
            <Thumbnail key={key} imageKey={key} />
          </button>
        ))}
      </div>
    </div>
  );
}

function Thumbnail({ imageKey }: { imageKey: ScreenshotKey }) {
  const img = screenshots[imageKey];
  const thumbW = 56;
  const thumbH = Math.round((img.height / img.width) * thumbW);

  return (
    <Image
      src={img.src}
      alt=""
      width={thumbW}
      height={thumbH}
      unoptimized
      aria-hidden="true"
      className="block h-14 w-14 object-contain bg-slate-900"
    />
  );
}
