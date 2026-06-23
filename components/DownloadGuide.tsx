import AppScreenshot from "./AppScreenshot";
import { AffiliateCtaRow } from "./AffiliateButton";

const downloadSteps = [
  {
    step: 1,
    title: "Download the CV666 APK file",
    description:
      "Get CV666 APK only from the official promotion link — not Facebook groups or random Telegram channels. Tap Download and save the file (40–80 MB). Check file size: if under 10 MB, it is likely a fake or broken file. Use Wi-Fi if possible to avoid corrupted downloads on slow mobile data.",
  },
  {
    step: 2,
    title: "Enable Install from Unknown Sources",
    description:
      "Android 8+: Settings → Apps → Special access → Install unknown apps → select Chrome (or your browser) → Allow. Android 6–7: Settings → Security → Unknown sources → Enable. Samsung users: Settings → Biometrics and security → Install unknown apps. Without this, installation will be blocked.",
  },
  {
    step: 3,
    title: "Install and verify the app",
    description:
      "Open Downloads → tap cv666.apk → Install → Open. Check the app icon and name match 'CV666'. If the app requests unusual permissions (reading all SMS beyond OTP), be cautious. First launch may take 10–20 seconds to load game servers.",
  },
  {
    step: 4,
    title: "Register with your Bangladesh number",
    description:
      "Tap Register → enter 01XXXXXXXXX → verify SMS OTP → set password → optional referral code. Use your own active SIM — VoIP numbers often fail OTP. See our registration guide for full details.",
  },
  {
    step: 5,
    title: "Test with a small bKash deposit",
    description:
      "Before playing, make a small 100–200 BDT test deposit via bKash to confirm payments work. Then try withdrawing a small amount to verify the full cycle. Only increase deposits after you trust the flow. Keep APK updated when new versions are released.",
  },
];

const requirements = [
  { label: "Android version", value: "6.0 (Marshmallow) or higher" },
  { label: "Storage needed", value: "~200 MB free space" },
  { label: "RAM", value: "2 GB minimum (3 GB+ recommended)" },
  { label: "Internet", value: "4G or stable Wi-Fi" },
  { label: "SIM", value: "Active Bangladesh number for OTP" },
];

export default function DownloadGuide() {
  return (
    <section
      id="download"
      className="section-container bg-white"
      aria-labelledby="download-heading"
    >
      <h2 id="download-heading" className="section-heading">
        CV666 APK Download Guide (Bangladesh 2026)
      </h2>
      <p className="section-subheading">
        How to safely download and install CV666 Game on Android — with device
        requirements and fake APK warnings.
      </p>

      <div className="mt-8 flex flex-wrap items-start justify-center gap-8">
        <AppScreenshot image="apkPromo" showCaption={false} />
        <AppScreenshot image="logo" className="max-w-[200px]" />
      </div>
      <p className="mt-4 text-center text-sm text-slate-600">
        Verify the CV666 logo and app icon match the official branding shown
        above after installation.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[320px] text-left text-sm">
          <caption className="sr-only">CV666 APK system requirements</caption>
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 font-semibold">Requirement</th>
              <th className="px-4 py-3 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {requirements.map((req, i) => (
              <tr key={req.label} className={i % 2 === 0 ? "" : "bg-slate-50/50"}>
                <th scope="row" className="px-4 py-3 font-medium text-slate-700">
                  {req.label}
                </th>
                <td className="px-4 py-3 text-slate-600">{req.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ol className="mt-10 space-y-6">
        {downloadSteps.map((item) => (
          <li key={item.step} className="card flex gap-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700"
              aria-hidden="true"
            >
              {item.step}
            </span>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <aside
        className="mt-8 rounded-lg border border-red-200 bg-red-50 p-5"
        role="note"
        aria-label="APK safety warning"
      >
        <h3 className="font-semibold text-red-900">
          Avoid fake CV666 APK scams
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-red-800">
          Fake CV666 APKs circulate on Facebook, WhatsApp, and Telegram. They
          can steal bKash OTPs and drain your wallet. Red flags: APK under 10
          MB, download from personal WhatsApp numbers, requests for your bKash
          PIN, or apps named &quot;CV666 Pro&quot; / &quot;CV666 VIP&quot; from
          unknown sources. When in doubt, do not install. See our{" "}
          <a href="#safety-tips" className="font-medium underline">
            safety tips
          </a>
          .
        </p>
      </aside>

      <AffiliateCtaRow className="mt-10" center />
    </section>
  );
}
