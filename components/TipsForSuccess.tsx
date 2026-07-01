const tips = [
  "Prioritize high RTP slots and strategic betting.",
  "Use bonuses/rewards to maximize funds.",
  "Set budgets and withdraw winnings regularly.",
  "Practice with free games before real-money play.",
  "Only download the APK from official links.",
  "Read bonus wagering terms before accepting offers.",
];

export default function TipsForSuccess() {
  return (
    <section id="tips" className="section-block-muted" aria-labelledby="tips-heading">
      <div className="section-container">
      <h2 id="tips-heading" className="section-heading">
        Tips for Success
      </h2>

      <ul className="prose-content mt-6 max-w-none list-disc space-y-3 pl-6 text-slate-700">
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}
