import { AffiliateCtaRow } from "./AffiliateButton";

export default function KeyTakeaways() {
  const takeaways = [
    {
      label: "Best for",
      value: "Pakistan Android users who want JazzCash/EasyPaisa gaming apps",
    },
    {
      label: "Min. deposit",
      value: "Usually 100–200 PKR via JazzCash or EasyPaisa",
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
      aria-label="Key takeaways about 666rs Game Pakistan"
    >
      <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
        <h2 className="text-lg font-semibold text-accent-800">
          666rs Pakistan — Quick Answer
        </h2>
        <p className="mt-2 text-sm text-accent-700">
          Short on time? Here is what most Pakistan users search for before
          downloading 666rs APK.
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
        <AffiliateCtaRow className="mt-6" />
        <p className="mt-4 text-xs text-accent-700">
          Last updated:{" "}
          <time dateTime="2026-06-22">22 June 2026</time> · Independent guide,
          not affiliated with 666rs
        </p>
      </div>
    </section>
  );
}
