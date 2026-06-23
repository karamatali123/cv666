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
      className="section-container"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="section-heading">
        CV666 Game FAQ – Bangladesh
      </h2>
      <p className="section-subheading">
        17 detailed answers about CV666 download, bKash withdrawal, Nagad
        deposits, login issues, bonuses, and safety in Bangladesh.
      </p>

      <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${baseId}-button-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <div key={faq.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-slate-900 hover:bg-slate-50"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <span className="ml-4 shrink-0 text-brand-600" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-5 pb-4"
              >
                <p className="text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <AffiliateCtaRow className="mt-10" center />
    </section>
  );
}
