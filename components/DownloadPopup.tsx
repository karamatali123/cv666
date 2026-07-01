"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AFFILIATE_URL } from "@/lib/constants";
import { screenshots } from "@/lib/screenshots";

const STORAGE_KEY = "666rs-download-popup-dismissed";

export default function DownloadPopup() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        aria-label="Close popup"
        onClick={close}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-popup-title"
        aria-describedby="download-popup-desc"
        className="relative w-full max-w-md animate-slide-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="gradient-hero px-6 pb-8 pt-6 text-center text-white">
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg text-white transition hover:bg-white/25"
            aria-label="Close"
          >
            ×
          </button>

          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-2 border-white/30 bg-white/10 shadow-lg">
            <Image
              src={screenshots.logo.src}
              alt=""
              width={72}
              height={72}
              unoptimized
              aria-hidden="true"
              className="rounded-xl"
            />
          </div>

          <h2 id="download-popup-title" className="text-xl font-bold sm:text-2xl">
            Download 666rs Game
          </h2>
          <p className="mt-2 text-sm text-white/90 sm:text-base">
            Pakistan&apos;s #1 earning game — play slots, Teen Patti &amp;
            Aviator. Get{" "}
            <strong className="text-white">Rs 100 welcome bonus</strong> on
            first download!
          </p>
        </div>

        <div className="px-6 py-5">
          <p id="download-popup-desc" className="text-center text-sm text-slate-600">
            JazzCash &amp; EasyPaisa deposits · Fast PKR withdrawals · 40 MB
            Android APK
          </p>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-download mt-5 w-full text-center text-base"
            onClick={close}
          >
            Download Now — Get RS 100
          </a>

          <button
            type="button"
            onClick={close}
            className="mt-3 w-full py-2 text-center text-sm text-slate-500 transition hover:text-slate-700"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
