const steps = [
  {
    number: 1,
    title: "Register Your Account",
    content:
      "Download the CV666 APK and open the app on your Android device. Tap Register and enter your Bangladesh mobile number (11 digits, starting with 01). You will receive an OTP via SMS for verification. Create a secure password and optionally enter a referral code if a friend invited you. Registration typically takes under two minutes on a stable mobile data connection. Keep your login credentials private and avoid sharing OTP codes with anyone claiming to be CV666 support on Telegram or Facebook groups.",
  },
  {
    number: 2,
    title: "Deposit via bKash, Nagad, or Rocket",
    content:
      "After logging in, navigate to the Wallet or Deposit section inside CV666 Game. Select your preferred method—bKash, Nagad, or Rocket—and choose a deposit amount in BDT. The app displays a payment number and sometimes a specific amount to send. Open your MFS app, complete the transfer, and copy the TrxID (transaction ID). Return to CV666 and paste the TrxID to confirm. Deposits are usually credited within 5 to 30 minutes, though manual verification during busy periods can extend this to an hour. Minimum deposits are often low, sometimes starting around 100–200 BDT.",
  },
  {
    number: 3,
    title: "Play Games and Manage Your Balance",
    content:
      "Once your deposit is confirmed, your BDT balance appears in the CV666 wallet. Browse the game lobby to find Teen Patti, Dragon Tiger, color prediction, slots like Fortune Tiger, and other available titles. Each game displays minimum bets, round duration, and basic rules on screen. Start with small stakes to understand mechanics before increasing bet sizes. Use the in-app history section to track wins, losses, and active bonus wagering requirements. Remember that all games carry risk and past results do not predict future outcomes.",
  },
  {
    number: 4,
    title: "Withdraw Winnings to Your Wallet",
    content:
      "To cash out, go to the Withdrawal section and select bKash, Nagad, Rocket, or bank transfer if available. Enter the amount you wish to withdraw (subject to minimum limits and any active bonus conditions) and confirm your registered wallet number. CV666 Bangladesh typically processes withdrawals within 10 to 60 minutes, though first-time withdrawals or large amounts may trigger additional verification. If a withdrawal is delayed beyond two hours, contact in-app customer support with your request ID. Never pay unofficial agents who promise faster payouts outside the app.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-container"
      aria-labelledby="how-it-works-heading"
    >
      <h2 id="how-it-works-heading" className="section-heading">
        How CV666 Game Works in Bangladesh
      </h2>
      <p className="section-subheading">
        Four steps from CV666 APK download to your first bKash withdrawal.
      </p>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step.number} className="card relative">
            <span
              className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
              aria-hidden="true"
            >
              {step.number}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {step.content}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
