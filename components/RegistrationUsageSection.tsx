import { AffiliateCtaRow } from "./AffiliateButton";

const usagePoints = [
  {
    title: "Download",
    text: "Android: APK from official website (enable \"Unknown Sources\"). iOS: App Store (if available).",
  },
  {
    title: "Sign-Up",
    text: "Phone verification, OTP confirmation, and secure password setup.",
  },
  {
    title: "Payments",
    text: "Deposit: EasyPaisa, JazzCash, SadaPay, bank transfers. Withdrawal: Same methods; minimum limits apply.",
  },
];

export default function RegistrationUsageSection() {
  return (
    <section
      id="registration-usage"
      className="section-block-alt"
      aria-labelledby="registration-usage-heading"
    >
      <div className="section-container">
      <h2 id="registration-usage-heading" className="section-heading">
        Registration &amp; Usage
      </h2>

      <ul className="prose-content mt-6 max-w-none list-disc space-y-4 pl-6 text-slate-700">
        {usagePoints.map((point) => (
          <li key={point.title}>
            <strong>{point.title}:</strong> {point.text}
          </li>
        ))}
      </ul>

      <AffiliateCtaRow className="mt-6" center />
      </div>
    </section>
  );
}
