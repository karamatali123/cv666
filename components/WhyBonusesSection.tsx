const reasons = [
  "Play More, Spend Less: Use free spins and coins to enjoy games without using your money.",
  "Win Real Cash: Convert bonuses into withdrawable money.",
  "Family Fun: Team up with friends or siblings to earn together!",
  "Bigger Rewards Over Time: Daily login streaks and weekly bonuses add up fast.",
];

export default function WhyBonusesSection() {
  return (
    <section
      id="why-bonuses"
      className="section-block-alt"
      aria-labelledby="why-bonuses-heading"
    >
      <div className="section-container">
      <h2 id="why-bonuses-heading" className="section-heading">
        Why Bonuses Are Awesome!
      </h2>

      <ul className="prose-content mt-6 max-w-none list-disc space-y-3 pl-6 text-slate-700">
        {reasons.map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}
