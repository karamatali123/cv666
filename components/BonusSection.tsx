import AppScreenshot from "./AppScreenshot";
import { AffiliateCtaRow } from "./AffiliateButton";

const bonuses = [
  {
    title: "Welcome Bonus",
    amount: "100–500 BDT (varies)",
    description:
      "New CV666 Bangladesh users may receive a welcome bonus on their first deposit. Common structures include a percentage match (e.g., 20–50% of deposit) or fixed BDT credit. Welcome bonuses usually carry wagering requirements—you must bet the bonus amount a set number of times before withdrawal. Read terms in the Promotions tab before depositing.",
  },
  {
    title: "Referral Rewards",
    amount: "Commission-based",
    description:
      "Share your CV666 referral code with friends in Bangladesh. When they register and deposit, you may earn a percentage of their activity or a flat BDT reward per qualified referral. Commission rates and minimum payout thresholds change periodically. Referral income is not guaranteed and depends on referred users' continued activity.",
  },
  {
    title: "Daily Login Bonus",
    amount: "10–50 BDT (typical)",
    description:
      "Open CV666 Game daily to collect login rewards. Consecutive-day streaks may unlock larger bonuses on day 7 or day 30. Missing a day often resets the streak. Daily bonuses may be credited as non-withdrawable balance until wagering conditions are met.",
  },
  {
    title: "VIP Rewards",
    amount: "Tier-based benefits",
    description:
      "High-volume players may qualify for VIP tiers with perks such as faster withdrawal processing, dedicated support, birthday bonuses, and exclusive tournament access. VIP status is typically based on cumulative deposit or betting volume over 30–90 days. Benefits vary and are subject to platform discretion.",
  },
];

export default function BonusSection() {
  return (
    <section
      id="bonus"
      className="section-container bg-white"
      aria-labelledby="bonus-heading"
    >
      <h2 id="bonus-heading" className="section-heading">
        CV666 Bonus 2026 – Bangladesh Offers
      </h2>
      <p className="section-subheading">
        Welcome bonus, referral rewards, daily login, and VIP programs on CV666
        Game.
      </p>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-3">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
        {bonuses.map((bonus) => (
          <article key={bonus.title} className="card">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900">
                {bonus.title}
              </h3>
              <span className="shrink-0 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-800">
                {bonus.amount}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {bonus.description}
            </p>
          </article>
        ))}
        </div>
        <div className="flex justify-center">
          <AppScreenshot image="slotBanner" showCaption={false} />
        </div>
      </div>

      <AffiliateCtaRow className="mt-8" center />

      <p className="mt-8 text-sm text-slate-500">
        Bonus amounts are indicative based on common Bangladesh gaming app
        patterns in 2026. Actual offers on CV666 may differ. No bonus
        guarantees profit—wagering requirements and expiry dates apply.
      </p>
    </section>
  );
}
