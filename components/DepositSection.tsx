import AppScreenshot from "./AppScreenshot";
import { AffiliateCtaRow } from "./AffiliateButton";

const depositMethods = [
  {
    method: "bKash",
    steps: [
      "Open CV666 → Wallet → Deposit → Select bKash",
      "Choose amount in BDT (e.g. 200 BDT) — note the exact figure shown",
      "Copy the agent number displayed — do NOT use old screenshots",
      "Open bKash → Send Money → paste number and exact amount",
      "Complete payment and copy the TrxID from bKash history",
      "Return to CV666 → paste TrxID → tap Confirm",
      "Wait 5–30 minutes; pull down to refresh wallet balance",
    ],
    notes:
      "bKash is the most used method in Bangladesh. Always choose Send Money, never Cash Out. If balance does not update in 60 minutes, contact support with TrxID screenshot.",
    tip: "Pro tip: Screenshot the in-app deposit screen showing the agent number before paying.",
  },
  {
    method: "Nagad",
    steps: [
      "Go to Wallet → Deposit → Select Nagad",
      "Enter your BDT amount and wait for payment details to load",
      "Open Nagad app → Send Money → enter number and amount exactly",
      "Copy TrxID immediately after successful transfer",
      "Paste TrxID in CV666 before the deposit window expires (often 15–30 min)",
      "Tap Submit and wait for verification",
    ],
    notes:
      "Nagad works well in areas where bKash agents are scarce. Peak delays up to 45 minutes are reported between 8–11 PM.",
    tip: "Pro tip: Nagad Personal accounts receive withdrawals faster than agent accounts.",
  },
  {
    method: "Rocket",
    steps: [
      "Select Rocket in CV666 deposit menu",
      "Note the Rocket merchant/agent number and exact BDT amount",
      "Open Rocket app → Fund Transfer → complete payment",
      "Save the transaction reference number",
      "Enter reference in CV666 confirmation field",
      "Allow up to 60 minutes during busy periods",
    ],
    notes:
      "Rocket (Dutch-Bangla Bank) is less common than bKash but widely available. Ensure sufficient Rocket balance before transferring.",
    tip: "Pro tip: Rocket deposits above 5,000 BDT may trigger manual review.",
  },
  {
    method: "Bank Transfer",
    steps: [
      "Check if Bank Transfer appears in your CV666 wallet (not all versions)",
      "Copy bank name, account number, and unique reference code",
      "Transfer from your Bangladesh bank app or branch",
      "Upload transfer receipt screenshot in CV666",
      "Wait 1–3 hours for manual verification by finance team",
    ],
    notes:
      "Best for larger deposits. Slower than MFS but useful when wallet limits are reached.",
    tip: "Pro tip: Include the reference code in your bank transfer notes field.",
  },
];

const commonMistakes = [
  "Sending money to a number from an old screenshot or Telegram group",
  "Entering TrxID with typos or missing characters",
  "Paying a different amount than shown in the CV666 deposit screen",
  "Using Cash Out instead of Send Money on bKash",
  "Submitting the same TrxID for two different deposit requests",
];

export default function DepositSection() {
  return (
    <section
      id="deposit"
      className="section-container bg-white"
      aria-labelledby="deposit-heading"
    >
      <h2 id="deposit-heading" className="section-heading">
        CV666 Deposit Guide Bangladesh (bKash, Nagad, Rocket)
      </h2>
      <p className="section-subheading">
        Follow these exact steps to deposit BDT on CV666 without losing money to
        common mistakes. Most failed deposits are caused by wrong TrxID or
        outdated agent numbers.
      </p>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
        <strong>Before you deposit:</strong> Register and log in first. Open a
        fresh deposit request inside CV666 — never pay from memory or a saved
        screenshot. Start with 100–200 BDT to test the full flow before larger
        amounts.
      </div>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
        {depositMethods.map((item) => (
          <article key={item.method} className="card">
            <h3 className="text-lg font-semibold text-accent-600">
              How to deposit with {item.method}
            </h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-slate-500">
              <strong className="text-slate-700">Note:</strong> {item.notes}
            </p>
            <p className="mt-2 text-sm font-medium text-brand-700">{item.tip}</p>
          </article>
        ))}
        </div>
        <div className="flex flex-col items-center">
          <AppScreenshot image="roulettePromo" showCaption={false} />
          <p className="mt-3 max-w-[320px] text-center text-sm text-slate-600">
            After your bKash or Nagad deposit is credited, your BDT balance
            appears in the CV666 wallet ready for slots, roulette, and card
            games.
          </p>
        </div>
      </div>

      <aside className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5">
        <h3 className="font-semibold text-red-900">
          5 deposit mistakes that cost Bangladesh users money
        </h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-red-800">
          {commonMistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-red-800">
          Deposit not credited? See our{" "}
          <a href="#troubleshooting" className="font-medium underline">
            troubleshooting guide
          </a>
          .
        </p>
      </aside>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[480px] text-left text-sm">
          <caption className="sr-only">
            CV666 deposit method comparison for Bangladesh
          </caption>
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 font-semibold">Method</th>
              <th className="px-4 py-3 font-semibold">Speed</th>
              <th className="px-4 py-3 font-semibold">Min. Deposit</th>
              <th className="px-4 py-3 font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">bKash</td>
              <td className="px-4 py-3">5–30 min</td>
              <td className="px-4 py-3">~100–200 BDT</td>
              <td className="px-4 py-3">First-time users, fastest support</td>
            </tr>
            <tr className="border-b bg-slate-50/50">
              <td className="px-4 py-3 font-medium">Nagad</td>
              <td className="px-4 py-3">5–45 min</td>
              <td className="px-4 py-3">~100–200 BDT</td>
              <td className="px-4 py-3">Rural areas, bKash alternative</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Rocket</td>
              <td className="px-4 py-3">10–60 min</td>
              <td className="px-4 py-3">~200 BDT</td>
              <td className="px-4 py-3">DBBL account holders</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Bank Transfer</td>
              <td className="px-4 py-3">1–3 hours</td>
              <td className="px-4 py-3">Varies</td>
              <td className="px-4 py-3">Large deposits above wallet limits</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AffiliateCtaRow className="mt-10" center />
    </section>
  );
}
