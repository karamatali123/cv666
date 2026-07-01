"use client";

import { useState } from "react";
import { PAGE_SECTIONS } from "@/lib/sections";

export default function TableOfContents() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className="section-block-muted"
      aria-labelledby="toc-heading"
    >
      <div className="section-container">
        <div className="card overflow-hidden !p-0">
          <button
            type="button"
            className="flex w-full items-center justify-between px-5 py-4 text-left sm:cursor-default sm:pointer-events-none"
            aria-expanded={expanded}
            aria-controls="toc-list"
            onClick={() => setExpanded((v) => !v)}
          >
            <div>
              <h2 id="toc-heading" className="section-heading !text-lg sm:!text-xl">
                Table of Contents
              </h2>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {PAGE_SECTIONS.length} sections · Jump to download, deposit, bonuses &amp; FAQ
              </p>
            </div>
            <span className="ml-3 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800 sm:hidden">
              {expanded ? "Hide" : "Show"}
            </span>
          </button>

          <ol
            id="toc-list"
            className={`grid gap-0.5 border-t border-slate-100 px-2 py-2 sm:grid-cols-2 sm:gap-1 sm:px-3 sm:py-3 lg:grid-cols-2 ${
              expanded ? "block" : "hidden sm:grid"
            }`}
          >
            {PAGE_SECTIONS.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="toc-link">
                  <span className="mr-2 font-semibold text-brand-600">
                    {index + 1}.
                  </span>
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}
