import { AffiliateCtaRow } from "./AffiliateButton";

export default function DisclaimerSection() {
  return (
    <section
      id="disclaimer"
      className="section-container border-t border-slate-200"
      aria-labelledby="disclaimer-heading"
    >
      <div className="rounded-xl border border-slate-300 bg-slate-100 p-6">
        <h2 id="disclaimer-heading" className="text-lg font-semibold text-slate-900">
          Disclaimer
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          This article is written for informational purposes only. CV666 Game
          and all similar prediction and lottery platforms involve real financial
          risk. All amounts mentioned in this article are in Bangladeshi Taka
          (BDT). Never deposit more than you can comfortably afford to lose.
          Results on prediction platforms are not guaranteed. Please play
          responsibly. Download and register buttons on this site link to our
          official CV666 affiliate partner at cv-666.info.
        </p>
        <AffiliateCtaRow className="mt-6" center />
      </div>
    </section>
  );
}
