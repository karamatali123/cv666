const relatedGames = [
  {
    name: "92PKR Game",
    description:
      "Popular Bangladesh APK with bKash deposits and color prediction games.",
  },
  {
    name: "Basant Club",
    description:
      "Casino-style platform with Teen Patti and local MFS payment support.",
  },
  {
    name: "Dream99",
    description:
      "Prediction gaming app commonly searched alongside CV666 in Bangladesh.",
  },
  {
    name: "Yay Win",
    description:
      "Mobile gaming APK with Nagad withdrawal and referral bonus system.",
  },
  {
    name: "GoGo Rummy",
    description:
      "Rummy-focused platform for Bangladesh players who prefer card games.",
  },
  {
    name: "Lucky Win",
    description:
      "Slot and prediction games with low minimum deposit in BDT.",
  },
  {
    name: "BD222 Game",
    description:
      "Bangladesh-targeted gaming APK with Rocket and bKash integration.",
  },
  {
    name: "Fiewin",
    description:
      "Color prediction app with similar mechanics to CV666 Bangladesh.",
  },
];

export default function RelatedGames() {
  return (
    <section
      id="related-games"
      className="section-container"
      aria-labelledby="related-games-heading"
    >
      <h2 id="related-games-heading" className="section-heading">
        Related Games in Bangladesh
      </h2>
      <p className="section-subheading">
        Other gaming APKs Bangladesh users often compare with CV666 Game when
        searching for bKash-friendly platforms.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {relatedGames.map((game) => (
          <li key={game.name}>
            <div className="card h-full">
              <h3 className="font-semibold text-slate-900">{game.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{game.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-slate-500">
        Comparing alternatives? Read our{" "}
        <a href="#real-or-fake" className="font-medium text-brand-600 hover:underline">
          CV666 real or fake review
        </a>{" "}
        and{" "}
        <a href="#safety-tips" className="font-medium text-brand-600 hover:underline">
          safety tips
        </a>{" "}
        before trying any Bangladesh gaming APK.
      </p>
    </section>
  );
}
