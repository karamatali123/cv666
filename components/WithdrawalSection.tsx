import { AffiliateCtaRow } from "./AffiliateButton";

export default function WithdrawalSection() {
  return (
    <section
      id="withdrawal"
      className="section-block-muted"
      aria-labelledby="withdrawal-heading"
    >
      <div className="section-container">
      <h2 id="withdrawal-heading" className="section-heading">
        How to Withdraw Money from 666rs Game
      </h2>

      <ul className="prose-content mt-6 max-w-none list-disc space-y-3 pl-6 text-slate-700">
        <li>
          <strong>Open the App:</strong> Log in and go to the
          &quot;Withdraw&quot; section.
        </li>
        <li>
          <strong>Select Payment Method:</strong> Choose EasyPaisa, JazzCash,
          or your bank.
        </li>
        <li>
          <strong>Enter Amount:</strong> Type how much you want to withdraw
          (minimum 500 PKR).
        </li>
        <li>
          <strong>Confirm Details:</strong> Double-check your account number or
          phone number.
        </li>
        <li>
          <strong>Submit Request:</strong> Click &quot;Withdraw&quot; — your
          money will arrive in 1–3 days!
        </li>
      </ul>

      <AffiliateCtaRow className="mt-6" center />
      </div>
    </section>
  );
}
