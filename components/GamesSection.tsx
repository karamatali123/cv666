import AppScreenshot from "./AppScreenshot";

const games = [
  {
    name: "Teen Patti",
    gameplay:
      "Classic three-card Indian poker variant. Players bet on hand strength against the dealer or other participants.",
    risk: "Medium–High",
    roundTime: "1–3 minutes",
    suitability:
      "Suitable for users familiar with card rankings. Beginners should learn hand values before betting large amounts.",
  },
  {
    name: "Poker",
    gameplay:
      "Texas Hold'em or simplified poker tables with community cards and betting rounds.",
    risk: "Medium–High",
    roundTime: "3–10 minutes",
    suitability:
      "Better for players who understand poker strategy. Higher skill ceiling than pure prediction games.",
  },
  {
    name: "Rummy",
    gameplay:
      "Form valid sets and sequences from dealt cards. First to declare wins the pot.",
    risk: "Medium",
    roundTime: "5–15 minutes",
    suitability:
      "Appeals to users who enjoy skill-based card games. Longer sessions than Dragon Tiger.",
  },
  {
    name: "Dragon Tiger",
    gameplay:
      "Two-card comparison game—bet on Dragon, Tiger, or Tie. One of the fastest table games.",
    risk: "High",
    roundTime: "20–40 seconds",
    suitability:
      "High-speed format for quick sessions. Pure chance with high house edge on tie bets.",
  },
  {
    name: "Roulette",
    gameplay:
      "Bet on numbers, colors, or ranges as a virtual wheel spins to a random result.",
    risk: "High",
    roundTime: "30–60 seconds",
    suitability:
      "Simple rules but statistically unfavorable long-term. Use small bets for entertainment only.",
  },
  {
    name: "Fortune Tiger",
    gameplay:
      "Slot-style game with tiger theme, spinning reels, and multiplier symbols.",
    risk: "High",
    roundTime: "5–15 seconds per spin",
    suitability:
      "Casual players who enjoy visual slots. Very fast pace can drain balance quickly.",
  },
  {
    name: "Fortune Rabbit",
    gameplay:
      "Similar slot mechanics with rabbit-themed graphics and bonus round triggers.",
    risk: "High",
    roundTime: "5–15 seconds per spin",
    suitability:
      "Light entertainment for slot fans. Set spin limits to control spending.",
  },
  {
    name: "Fortune Gems",
    gameplay:
      "Gem-matching or reel slot format with cascading wins and bonus multipliers.",
    risk: "High",
    roundTime: "5–20 seconds per spin",
    suitability:
      "Popular among users who play multiple slot titles. Volatility varies by bet level.",
  },
];

export default function GamesSection() {
  return (
    <section
      id="games"
      className="section-container"
      aria-labelledby="games-heading"
    >
      <h2 id="games-heading" className="section-heading">
        Games Available on 666rs APK
      </h2>
      <p className="section-subheading">
        Popular titles on 666rs Pakistan, with gameplay notes and risk levels.
      </p>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <AppScreenshot image="appGames" showCaption={false} />
          <p className="mt-3 max-w-[260px] text-center text-sm text-slate-600">
            666rs app lobby shows Hot Games, Live, Sports, Poker, Fish,
            Lottery, and more — all accessible from one Android APK in
            Pakistan.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
        {games.map((game) => (
          <article key={game.name} className="card">
            <h3 className="text-lg font-semibold text-slate-900">{game.name}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="font-medium text-slate-700">Gameplay</dt>
                <dd className="text-slate-600">{game.gameplay}</dd>
              </div>
              <div className="flex gap-6">
                <div>
                  <dt className="font-medium text-slate-700">Risk Level</dt>
                  <dd className="text-slate-600">{game.risk}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Round Time</dt>
                  <dd className="text-slate-600">{game.roundTime}</dd>
                </div>
              </div>
              <div>
                <dt className="font-medium text-slate-700">User Suitability</dt>
                <dd className="text-slate-600">{game.suitability}</dd>
              </div>
            </dl>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
