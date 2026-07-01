import ScreenshotSlider from "./ScreenshotSlider";
import { AffiliateCtaRow } from "./AffiliateButton";

export default function AppPreviewSection() {
  return (
    <section
      id="screenshot"
      className="section-block-alt"
      aria-labelledby="screenshot-heading"
    >
      <div className="section-container">
      <h2 id="screenshot-heading" className="section-heading">
        Screenshot
      </h2>

      <div className="mt-8">
        <ScreenshotSlider />
      </div>

      <AffiliateCtaRow className="mt-8" center />
      </div>
    </section>
  );
}
