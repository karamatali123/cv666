const features = [
  {
    title: "Fast Withdrawals",
    description:
      "CV666 Bangladesh advertises quick payout processing through bKash, Nagad, and Rocket. Most user reports suggest withdrawals complete within 10 to 60 minutes under normal conditions. First-time withdrawals or amounts above daily limits may require extra verification, which can extend wait times. Always withdraw to a wallet number registered in your own name to reduce rejection risk.",
  },
  {
    title: "Mobile Friendly UI",
    description:
      "The CV666 APK is designed for budget Android phones common across Bangladesh. Navigation uses large tap targets, simple menus, and quick access to deposit, withdrawal, and game lobbies. The interface loads reasonably well on 4G connections, though performance may vary on older devices with limited RAM. Portrait mode is the default layout for most games.",
  },
  {
    title: "Referral System",
    description:
      "CV666 Game includes a referral program where existing users share a unique invite code. When new players register using that code and make qualifying deposits, the referrer may earn commission or bonus balance. Referral rates and payout thresholds change periodically. Treat referral income as uncertain rather than guaranteed, and avoid spamming invite links on social media.",
  },
  {
    title: "Daily Rewards",
    description:
      "Daily login bonuses reward users who open the app consecutively. Rewards may include small BDT credits, free spins, or discount vouchers on deposits. Missing a day often resets the streak. These bonuses typically carry wagering requirements before withdrawal. Check the promotions tab for current daily reward schedules and terms.",
  },
  {
    title: "Low Deposit Entry",
    description:
      "CV666 Bangladesh supports relatively low minimum deposits compared to international platforms, often starting around 100 to 200 BDT depending on the payment channel. This low entry point makes the app accessible to students and casual players, but it also increases the risk of frequent small losses adding up over time. Set a personal budget before depositing.",
  },
  {
    title: "Bangladesh Payment Support",
    description:
      "Native integration with bKash, Nagad, Rocket, and sometimes local bank transfer sets CV666 apart from foreign gaming apps that do not support MFS. Deposits and withdrawals happen in BDT without currency conversion fees. Users should only use official in-app payment channels and avoid sending money to personal numbers shared in unofficial Telegram groups.",
  },
  {
    title: "Secure Login",
    description:
      "CV666 login uses phone number and password authentication, with OTP verification during registration and sometimes during password resets. Enable any available security options in settings. Never share your password or OTP with third parties. If you suspect unauthorized access, change your password immediately and contact support through official in-app channels.",
  },
  {
    title: "Promotions & Events",
    description:
      "Seasonal promotions around Eid, Pohela Boishakh, and cricket tournaments are common on Bangladesh gaming platforms. CV666 may offer deposit match bonuses, leaderboard prizes, or limited-time game multipliers during these events. Read promotion terms carefully—wagering multiples and expiry dates often apply before bonus funds become withdrawable.",
  },
  {
    title: "Customer Support",
    description:
      "In-app chat, WhatsApp, and Telegram channels are typical support options for CV666 Bangladesh. Response times vary from minutes to several hours. For deposit or withdrawal issues, have your TrxID, registered phone number, and screenshot of the transaction ready. Avoid unofficial support accounts that request your login credentials or upfront fees to release withdrawals.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-container bg-white"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="section-heading">
        CV666 Game Features for Bangladesh Users
      </h2>
      <p className="section-subheading">
        What CV666 APK offers in terms of payments, rewards, and usability.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <h3 className="text-base font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
