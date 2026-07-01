const featureBlocks = [
  {
    icon: "🎰",
    title: "Fun Games for Everyone!",
    intro: "666rs Game has 5+ types of games to keep you entertained:",
    items: [
      "Slots: Spin colorful wheels to win coins!",
      "Teen Patti: Play this classic card game with friends or strangers.",
      "Aviator: Crash-style game popular with Pakistan players.",
      "Lottery: Try your luck to win big prizes!",
      "Sports Betting: Guess sports results and earn rewards.",
    ],
  },
  {
    icon: "🎁",
    title: "Free Daily Bonuses!",
    intro: "Every day you log in, you get FREE rewards on 666rs Game:",
    items: [
      "Daily Login Bonus: Coins, spins, or cash for just opening the app!",
      "Lucky Draw: Spin a virtual wheel daily for surprise prizes.",
      "Redeem Codes: Use secret codes to unlock freebies!",
    ],
  },
  {
    icon: "👥",
    title: "Earn with Friends!",
    intro: "Invite your buddies to join the fun and earn together:",
    items: [
      "Invite Bonus: Get Rs 200 + Rs 800 + Rs 2000 when friends sign up and deposit.",
      "Monthly Sharing Bonus: The more friends you invite, the bigger your share!",
    ],
  },
  {
    icon: "⭐",
    title: "Big Rewards for New Players!",
    intro: "New to 666rs? Here's a warm welcome:",
    items: [
      "First Deposit Bonus: Get 20% extra coins on your first deposit.",
      "Weekly Bonus: Active players earn free spins or cash every 7 days!",
    ],
  },
  {
    icon: "🔒",
    title: "Safe & Easy to Play!",
    items: [
      "Sign up with just a phone number.",
      "Secure JazzCash, EasyPaisa, and bank transfers.",
      "24/7 support via in-app chat.",
    ],
  },
  {
    icon: "📲",
    title: "Play Anywhere, Anytime!",
    items: [
      "Lightweight 40 MB app.",
      "Works on Android 6.0+.",
      "Simple design with bright buttons.",
    ],
  },
  {
    icon: "💰",
    title: "Fair Prizes & Fast Withdrawals!",
    items: [
      "Instant wins credited to your account.",
      "Cash out to JazzCash, EasyPaisa, or bank.",
      "Fair play systems for all users.",
    ],
  },
  {
    icon: "🛡️",
    title: "Safety and Security",
    text: "666rs prioritizes user safety with advanced security for personal information and financial transactions.",
  },
  {
    icon: "💬",
    title: "Customer Support",
    text: "24/7 customer support through in-app chat, WhatsApp, and Telegram for any issues or questions.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-block-muted"
      aria-labelledby="features-heading"
    >
      <div className="section-container">
        <h2 id="features-heading" className="section-heading">
          666rs Game: Detailed Features Explained!
        </h2>
        <p className="section-subheading">
          Let&apos;s break down what makes 666rs Game so special! Here are its
          coolest features in simple words:
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {featureBlocks.map((block) => (
            <article key={block.title} className="card-interactive">
              <div className="flex items-start gap-4">
                <span className="feature-icon" aria-hidden="true">
                  {block.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {block.title}
                  </h3>
                  {block.intro && (
                    <p className="mt-2 text-sm text-slate-600">{block.intro}</p>
                  )}
                  {block.text && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {block.text}
                    </p>
                  )}
                  {block.items && (
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-brand-500" aria-hidden="true">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
