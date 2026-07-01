export default function PersonalReviewSection() {
  return (
    <section
      id="personal-review"
      className="section-block-muted"
      aria-labelledby="personal-review-heading"
    >
      <div className="section-container">
        <h2 id="personal-review-heading" className="section-heading">
          My Personal Review of 666rs Game
        </h2>

        <div className="card mt-6 border-brand-100 bg-gradient-to-br from-white to-brand-50/30">
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            As someone who loves gaming and earning rewards, I tried 666rs Game
            for a week, and here&apos;s my honest take:
          </p>

          <h3 className="mt-6 text-base font-bold text-slate-900 sm:text-lg">
            The Good Stuff
          </h3>
          <ol className="mt-4 space-y-4">
            {[
              {
                title: "Addictive Fun",
                text: "The Aviator and Teen Patti games kept me hooked for hours! I earned 800 PKR just by logging in daily and using free spins.",
              },
              {
                title: "Easy to Use",
                text: "The app's bright colors and big buttons made it super simple to navigate. Even first-time users figured it out quickly!",
              },
              {
                title: "Fair Rewards",
                text: "I won small prizes daily (like coins or spins) and even scored 1,500 PKR in the weekly bonus!",
              },
            ].map((item, i) => (
              <li
                key={item.title}
                className="flex gap-3 rounded-xl bg-white/80 p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-slate-900">{item.title}:</strong>{" "}
                  <span className="text-sm text-slate-600">{item.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
