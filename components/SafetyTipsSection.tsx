const tips = [
  {
    title: "Verify the APK source before installing",
    detail:
      "Only download CV666 from links inside the official app promotion or verified channels. Fake APKs on Facebook and Telegram can steal bKash OTPs. Compare file size (typically 40–80 MB) and check app permissions after install.",
  },
  {
    title: "Never pay unofficial withdrawal agents",
    detail:
      "Scammers promise 'guaranteed fast withdrawal' if you pay 200–500 BDT upfront. CV666 processes withdrawals only through the in-app wallet. No legitimate agent asks for advance fees on WhatsApp or Telegram.",
  },
  {
    title: "Always match the deposit number shown in-app",
    detail:
      "Agent numbers rotate. Never send money to a number from an old screenshot, group chat, or friend. Open CV666 → Deposit fresh each time and copy the number displayed at that moment.",
  },
  {
    title: "Set a strict BDT budget before playing",
    detail:
      "Decide your maximum deposit before opening the app — for example, 500 BDT for the week. Prediction and slot games are designed for the house to win over time. Treat CV666 as paid entertainment, not income.",
  },
  {
    title: "Read bonus wagering terms before accepting",
    detail:
      "Welcome bonuses often require 5x–20x wagering before withdrawal. A 300 BDT bonus might need 3,000+ BDT in total bets. Decline bonuses if you prefer simpler withdrawal without conditions.",
  },
  {
    title: "Keep screenshots of every transaction",
    detail:
      "Save bKash/Nagad screenshots showing TrxID, amount, recipient number, and timestamp. These are essential evidence if a deposit is not credited or a withdrawal is delayed.",
  },
];

export default function SafetyTipsSection() {
  return (
    <section
      id="safety-tips"
      className="section-container"
      aria-labelledby="safety-tips-heading"
    >
      <h2 id="safety-tips-heading" className="section-heading">
        CV666 Safety Tips for Bangladesh Users
      </h2>
      <p className="section-subheading">
        Six practical rules to protect your money and personal data when using
        CV666 Game or similar Bangladesh gaming APKs.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <li key={tip.title} className="card">
            <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
              Tip {index + 1}
            </span>
            <h3 className="mt-2 text-base font-semibold text-slate-900">
              {tip.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {tip.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
