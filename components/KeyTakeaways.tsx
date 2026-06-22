export default function KeyTakeaways() {
  const takeaways = [
    {
      label: "Best for",
      value: "Bangladesh Android users who want bKash/Nagad gaming apps",
    },
    {
      label: "Min. deposit",
      value: "Usually 100–200 BDT via bKash or Nagad",
    },
    {
      label: "Withdrawal time",
      value: "10–60 minutes on average (can be longer at peak hours)",
    },
    {
      label: "Safety note",
      value: "Unregulated platform — only use money you can afford to lose",
    },
  ];

  return (
    <section
      className="section-container -mt-6"
      aria-label="Key takeaways about CV666 Game Bangladesh"
    >
      <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
        <h2 className="text-lg font-semibold text-accent-800">
          CV666 Bangladesh — Quick Answer
        </h2>
        <p className="mt-2 text-sm text-accent-700">
          Short on time? Here is what most Bangladesh users search for before
          downloading CV666 APK.
        </p>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {takeaways.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-800">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-accent-700">
          Last updated:{" "}
          <time dateTime="2026-06-22">22 June 2026</time> · Independent guide,
          not affiliated with CV666
        </p>
      </div>
    </section>
  );
}
