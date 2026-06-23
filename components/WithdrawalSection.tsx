import AppScreenshot from "./AppScreenshot";
import { AffiliateCtaRow } from "./AffiliateButton";

const withdrawalSteps = [
  "Open CV666 → Wallet → Withdraw",
  "Select bKash, Nagad, or Rocket",
  "Enter withdrawal amount in BDT (check minimum — usually 500–1,000 BDT)",
  "Confirm your registered wallet number matches your personal MFS account",
  "Submit request and copy the withdrawal ID shown on screen",
  "Wait 10–60 minutes — check bKash/Nagad app for incoming payment",
  "If not received after 2 hours, contact support with withdrawal ID",
];

const withdrawalMethods = [
  {
    method: "bKash Withdrawal",
    content:
      "Most CV666 Bangladesh users prefer bKash withdrawals. Go to Wallet → Withdraw → bKash. Enter BDT amount and confirm your registered number. First withdrawals may need extra verification — keep your phone available for OTP. Processing: 10–60 minutes. Daily limits may apply (often 20,000–50,000 BDT depending on account tier).",
  },
  {
    method: "Nagad Withdrawal",
    content:
      "Nagad withdrawals follow the same flow as bKash. Ensure your Nagad account is Personal type, not agent. Bonus balances with active wagering cannot be withdrawn until requirements are met — check Promotions tab first. Typical wait: 10–60 minutes. Nagad is reliable in districts where bKash coverage is weak.",
  },
  {
    method: "Rocket Withdrawal",
    content:
      "Select Rocket, enter amount and registered mobile number. Rocket can be slower than bKash during late night hours when agent networks are limited. Never share your Rocket PIN with anyone claiming to be CV666 support. Allow up to 60 minutes before escalating to support.",
  },
  {
    method: "Bank Transfer Withdrawal",
    content:
      "Available on some CV666 versions for larger amounts. Requires bank name, branch, account number, and account holder name matching your registration. Processing: 24–72 hours. Useful when MFS daily limits are reached. Upload any requested ID documents promptly to avoid delays.",
  },
];

export default function WithdrawalSection() {
  return (
    <section
      id="withdrawal"
      className="section-container"
      aria-labelledby="withdrawal-heading"
    >
      <h2 id="withdrawal-heading" className="section-heading">
        How to Withdraw from CV666 — bKash, Nagad &amp; Rocket Guide
      </h2>
      <p className="section-subheading">
        Step-by-step CV666 withdrawal instructions for Bangladesh. Learn what
        affects processing time and how to avoid the most common payout delays.
      </p>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Typical CV666 withdrawal time:</strong> 10–60 minutes for bKash
        and Nagad. Delays happen when bonus wagering is incomplete, it is your
        first withdrawal, wallet number is wrong, or you request during peak
        hours (7–11 PM Bangladesh time).
      </div>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-3">
        <article className="card lg:col-span-2">
        <h3 className="text-lg font-semibold text-slate-900">
          CV666 withdrawal steps (all payment methods)
        </h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
          {withdrawalSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        </article>
        <div className="flex justify-center">
          <AppScreenshot image="apkPromo" showCaption={false} />
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {withdrawalMethods.map((item) => (
          <article key={item.method} className="card">
            <h3 className="text-lg font-semibold text-slate-900">
              {item.method}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {item.content}
            </p>
          </article>
        ))}
      </div>

      <aside className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="font-semibold text-slate-900">
          Withdrawal delayed? Check these first
        </h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>Active welcome bonus with unfinished wagering (5x–20x common)</li>
          <li>Withdrawal amount below minimum threshold (500–1,000 BDT)</li>
          <li>Wallet number typo — verify in Profile → Payment Settings</li>
          <li>First withdrawal pending manual KYC review</li>
          <li>Requested during Eid, cricket match nights, or Friday evening peak</li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">
          Full fixes:{" "}
          <a href="#troubleshooting" className="font-medium text-brand-600 hover:underline">
            CV666 troubleshooting section
          </a>
        </p>
      </aside>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[480px] text-left text-sm">
          <caption className="sr-only">
            CV666 withdrawal method comparison for Bangladesh users
          </caption>
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 font-semibold">Method</th>
              <th className="px-4 py-3 font-semibold">Processing Time</th>
              <th className="px-4 py-3 font-semibold">Min. Withdrawal</th>
              <th className="px-4 py-3 font-semibold">Common Issues</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">bKash</td>
              <td className="px-4 py-3">10–60 min</td>
              <td className="px-4 py-3">500–1,000 BDT</td>
              <td className="px-4 py-3">Wrong number, bonus lock</td>
            </tr>
            <tr className="border-b bg-slate-50/50">
              <td className="px-4 py-3 font-medium">Nagad</td>
              <td className="px-4 py-3">10–60 min</td>
              <td className="px-4 py-3">500–1,000 BDT</td>
              <td className="px-4 py-3">Agent account, verification</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Rocket</td>
              <td className="px-4 py-3">15–60 min</td>
              <td className="px-4 py-3">500–1,000 BDT</td>
              <td className="px-4 py-3">Late-night agent downtime</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Bank Transfer</td>
              <td className="px-4 py-3">24–72 hours</td>
              <td className="px-4 py-3">Higher minimums</td>
              <td className="px-4 py-3">Name mismatch, KYC hold</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AffiliateCtaRow className="mt-10" center />
    </section>
  );
}
