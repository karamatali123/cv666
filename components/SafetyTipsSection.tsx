const rules = [
  "Ask Permission: Never add or withdraw money without adult approval.",
  "Check Balances: Track transactions via SMS or app notifications.",
  "No Sharing: Never give your password or account details to strangers.",
  "Report Issues: If money doesn't arrive, contact 666rs's 24/7 support team.",
  "Verify Numbers: Always copy the deposit agent number fresh from inside the app.",
  "Save TrxID: Keep JazzCash/EasyPaisa screenshots for every transaction.",
];

export default function SafetyTipsSection() {
  return (
    <section
      id="safety-rules"
      className="section-block-alt"
      aria-labelledby="safety-rules-heading"
    >
      <div className="section-container">
      <h2 id="safety-rules-heading" className="section-heading">
        Safety Rules for Deposits &amp; Withdrawals!
      </h2>

      <ul className="prose-content mt-6 max-w-none list-disc space-y-3 pl-6 text-slate-700">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}
