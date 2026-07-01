const relatedGames = [
  {
    name: "92PKR Game",
    description:
      "Popular Pakistan APK with JazzCash deposits and color prediction games.",
  },
  {
    name: "Basant Club",
    description:
      "Casino-style platform with Teen Patti and local MFS payment support.",
  },
  {
    name: "Dream99",
    description:
      "Prediction gaming app commonly searched alongside 666rs in Pakistan.",
  },
  {
    name: "Yay Win",
    description:
      "Mobile gaming APK with EasyPaisa withdrawal and referral bonus system.",
  },
  {
    name: "GoGo Rummy",
    description:
      "Rummy-focused platform for Pakistan players who prefer card games.",
  },
  {
    name: "Lucky Win",
    description:
      "Slot and prediction games with low minimum deposit in PKR.",
  },
  {
    name: "BD222 Game",
    description:
      "Pakistan-targeted gaming APK with Bank Transfer and JazzCash integration.",
  },
  {
    name: "Fiewin",
    description:
      "Color prediction app with similar mechanics to 666rs Pakistan.",
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
        Related Games in Pakistan
      </h2>
      <p className="section-subheading">
        Other gaming APKs Pakistan users often compare with 666rs Game when
        searching for JazzCash-friendly platforms.
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
          666rs real or fake review
        </a>{" "}
        and{" "}
        <a href="#safety-tips" className="font-medium text-brand-600 hover:underline">
          safety tips
        </a>{" "}
        before trying any Pakistan gaming APK.
      </p>
    </section>
  );
}
