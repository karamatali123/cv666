import ScreenshotSlider from "./ScreenshotSlider";
import { AffiliateCtaRow } from "./AffiliateButton";

export default function AppPreviewSection() {
  return (
    <section
      id="app-preview"
      className="section-container bg-slate-100"
      aria-labelledby="app-preview-heading"
    >
      <h2 id="app-preview-heading" className="section-heading">
        CV666 App Preview — Screenshots Bangladesh 2026
      </h2>
      <p className="section-subheading">
        Swipe through CV666 Game screenshots: home screen, game lobby, slots,
        roulette, and the official app interface before you download the APK.
      </p>

      <div className="mt-10">
        <ScreenshotSlider />
      </div>

      <AffiliateCtaRow className="mt-10" center />
    </section>
  );
}
