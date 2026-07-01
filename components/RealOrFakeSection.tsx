import { AffiliateCtaRow } from "./AffiliateButton";

const pros = [
  {
    title: "Easy-to-Use Interface",
    text: "666rs APK features a simple layout suited for first-time users on budget Android phones. Navigation to deposit, games, and withdrawal sections is straightforward without complex menus.",
  },
  {
    title: "Quick Signup Process",
    text: "Registration with phone number and OTP takes under two minutes. No lengthy KYC is required upfront, allowing users to explore the app immediately after first deposit.",
  },
  {
    title: "Local Payment Integration",
    text: "JazzCash, EasyPaisa, and Bank Transfer support makes 666rs accessible to Pakistan users who do not have international payment cards. All transactions happen in PKR.",
  },
  {
    title: "Variety of Games",
    text: "Multiple game types—from Dragon Tiger to Teen Patti and slots—provide entertainment options within a single app without installing separate platforms.",
  },
];

const cons = [
  {
    title: "Withdrawal Delays",
    text: "Users frequently report withdrawal processing times exceeding the advertised 10–60 minute window, especially during peak hours, weekends, and festival seasons like Eid.",
  },
  {
    title: "Financial Risk",
    text: "All prediction and casino-style games carry inherent risk. The house edge ensures most players lose money over time. No strategy guarantees consistent winnings.",
  },
  {
    title: "No Formal Regulation",
    text: "666rs Game is not licensed by Pakistan's official gaming regulatory bodies. There is limited legal recourse if deposits are lost or accounts are blocked without clear explanation.",
  },
  {
    title: "Scam & Fake APK Concerns",
    text: "Fake 666rs APKs circulate on social media and Telegram. Unofficial agents may promise guaranteed withdrawals for upfront fees. Verification holds and bonus terms can prevent withdrawal of perceived winnings.",
  },
];

export default function RealOrFakeSection() {
  return (
    <section
      id="real-or-fake"
      className="section-container"
      aria-labelledby="real-or-fake-heading"
    >
      <h2 id="real-or-fake-heading" className="section-heading">
        666rs Real or Fake? – Honest Pakistan Review
      </h2>
      <p className="section-subheading">
        Balanced analysis of 666rs Game based on common user experiences in
        Pakistan. No income guarantees.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-green-700">
            Reported Pros
          </h3>
          <ul className="space-y-4">
            {pros.map((item) => (
              <li key={item.title} className="card border-green-100">
                <h4 className="font-medium text-slate-900">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-red-700">
            Reported Cons &amp; Risks
          </h3>
          <ul className="space-y-4">
            {cons.map((item) => (
              <li key={item.title} className="card border-red-100">
                <h4 className="font-medium text-slate-900">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 rounded-lg bg-slate-100 p-4 text-sm leading-relaxed text-slate-700">
        <strong>Bottom line:</strong> 666rs Game appears to function as a
        working gaming platform for many Pakistan users who successfully
        deposit and withdraw via JazzCash and EasyPaisa. However, it operates in an
        unregulated space with documented complaints about delays and account
        issues across similar apps. Treat 666rs as high-risk entertainment—not
        a reliable income source. Never deposit more than you can afford to
        lose.
      </p>

      <AffiliateCtaRow className="mt-8" center />
    </section>
  );
}
