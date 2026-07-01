import { AffiliateCtaRow } from "./AffiliateButton";

export default function DepositSection() {
  return (
    <section
      id="deposit"
      className="section-block-alt"
      aria-labelledby="deposit-heading"
    >
      <div className="section-container">
      <h2 id="deposit-heading" className="section-heading">
        How to Deposit Money in 666rs Game
      </h2>

      <ol className="prose-content mt-6 max-w-none list-decimal space-y-3 pl-6 text-slate-700">
        <li>
          <strong>Open the App:</strong> Log in to your 666rs Game account.
        </li>
        <li>
          <strong>Go to &quot;Deposit&quot;:</strong> Tap the &quot;Add
          Money&quot; button on the home screen.
        </li>
        <li>
          <strong>Choose Payment Method:</strong>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              EasyPaisa/JazzCash: Enter your mobile account number.
            </li>
            <li>
              Bank Transfer: Select your bank and add account details.
            </li>
          </ul>
        </li>
        <li>
          <strong>Enter Amount:</strong> Type how much money you want to add
          (e.g., 500 PKR).
        </li>
        <li>
          <strong>Confirm Payment:</strong> Check the details, then click
          &quot;Submit.&quot; Your coins will appear instantly!
        </li>
      </ol>

      <p className="mt-6 rounded-lg bg-brand-50 p-4 text-sm font-medium text-brand-900">
        Pro Tip: First-time depositors get a 20% bonus! Add 1,000 PKR, and
        you&apos;ll get 1,200 PKR to play with!
      </p>

      <AffiliateCtaRow className="mt-6" center />
      </div>
    </section>
  );
}
