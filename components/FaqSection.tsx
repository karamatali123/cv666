"use client";

import { useState, useId } from "react";
import { faqs } from "@/lib/faqs";
import { AffiliateCtaRow } from "./AffiliateButton";

export default function FaqSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-block-alt"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <h2 id="faq-heading" className="section-heading">
          666rs Game FAQ – Pakistan
        </h2>
        <p className="section-subheading">
          Answers about 666rs download, JazzCash withdrawal, EasyPaisa deposits,
          login issues, bonuses, and safety in Pakistan.
        </p>

        <div className="mt-8 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-button-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div key={faq.question}>
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex min-h-[52px] w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-brand-50 sm:px-5 sm:text-base"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-4 pb-4 sm:px-5"
                >
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <AffiliateCtaRow className="mt-8" center />
      </div>
    </section>
  );
}
