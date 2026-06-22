import AppScreenshot from "./AppScreenshot";

const quickInfo = [
  { label: "App Name", value: "CV666 Game" },
  { label: "Version", value: "2026 (Latest APK)" },
  { label: "Platform", value: "Android APK (6.0+)" },
  { label: "App Size", value: "~40–80 MB" },
  { label: "Country", value: "Bangladesh" },
  { label: "Currency", value: "BDT (Bangladeshi Taka)" },
  { label: "Deposit Methods", value: "bKash, Nagad, Rocket, Upay, Bank Transfer" },
  { label: "Min. Deposit", value: "~100–200 BDT (varies by method)" },
  { label: "Min. Withdrawal", value: "~500–1,000 BDT" },
  { label: "Withdrawal Time", value: "10–60 minutes (typical)" },
  { label: "Welcome Bonus", value: "100–500 BDT or deposit match (varies)" },
  { label: "Referral System", value: "Yes — share code for commission" },
  { label: "Support", value: "In-app chat, WhatsApp, Telegram" },
  { label: "Internet", value: "4G/Wi-Fi recommended for live games" },
];

export default function QuickInfoTable() {
  return (
    <section className="section-container" aria-labelledby="quick-info-heading">
      <h2 id="quick-info-heading" className="section-heading">
        CV666 Game Quick Info — Bangladesh 2026
      </h2>
      <p className="section-subheading">
        Essential facts at a glance before you download CV666 APK or make your
        first bKash deposit.
      </p>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-4">
        <div className="flex justify-center">
          <AppScreenshot image="logo" showCaption={false} />
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm lg:col-span-3">
        <table className="w-full min-w-[320px] text-left text-sm">
          <caption className="sr-only">
            CV666 Game quick information table for Bangladesh users
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
                Detail
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            {quickInfo.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-4 py-3 font-medium text-slate-700"
                >
                  {row.label}
                </th>
                <td className="px-4 py-3 text-slate-600">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Values are based on typical CV666 Bangladesh app behaviour in 2026.
        Always confirm current limits inside the app before depositing.
      </p>
    </section>
  );
}
