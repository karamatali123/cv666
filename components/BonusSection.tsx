import AppScreenshot from "./AppScreenshot";
import { AffiliateCtaRow } from "./AffiliateButton";

const bonuses = [
  {
    title: "1. Invitation Bonus",
    what: "Rs 200 + Rs 800 + Rs 2000 for every friend who joins and deposits.",
    steps: [
      "Share your referral link/code with friends.",
      "When they sign up and deposit money, you earn rewards per friend.",
    ],
    example: "Invite 5 friends = up to 15,000 PKR in bonuses!",
    tip: "Post your referral link on WhatsApp or Instagram to invite more buddies!",
  },
  {
    title: "2. Weekly Bonus",
    what: "Free spins, extra coins, or cash rewards every 7 days.",
    steps: [
      "Play games daily to stay active.",
      "On the 7th day, claim your bonus from the \"Rewards\" section.",
    ],
    example: "Week 1 = 2 free spins; Week 2 = 500 PKR cash!",
    tip: "Log in daily to avoid missing the weekly reward!",
  },
  {
    title: "3. Monthly Sharing Bonus",
    what: "A share of a special bonus pool based on your activity that month.",
    steps: [
      "Play games and invite friends throughout the month.",
      "The more active you are, the bigger your share!",
    ],
    example: "Top players get up to 5,000 PKR!",
    tip: "Participate in tournaments to boost your monthly score!",
  },
  {
    title: "4. First Deposit Bonus",
    what: "20% extra coins on your first-ever deposit.",
    steps: [
      "Add money to your account for the first time (min. 500 PKR).",
      "Instantly get 20% bonus coins!",
    ],
    example: "Deposit 1,000 PKR → Get 200 PKR free (Total: 1,200 PKR!)",
  },
  {
    title: "5. Redeem Codes",
    what: "Free spins, bonus cash, or exclusive game access.",
    steps: [
      "Find codes on 666rs social media or during events.",
      "Enter the code in the \"Rewards\" section to claim prizes.",
    ],
    example: "Code \"BONUS500\" = 500 PKR for slot games!",
    tip: "Follow 666rs online to grab codes before they expire!",
  },
  {
    title: "6. Daily Lucky Draw",
    what: "Spin a virtual wheel daily for prizes like cash, coins, or free bets.",
    steps: [
      "Play games to earn \"lucky points\".",
      "Use points to spin the wheel once a day.",
    ],
    example: "Spin and win 1,000 PKR instantly!",
  },
  {
    title: "7. Login Rewards",
    what: "Daily rewards for logging in!",
    steps: [
      "Day 1: 50 coins",
      "Day 3: 1 free spin",
      "Day 7: 200 PKR cash!",
    ],
    tip: "Don't miss a day — rewards get better over time!",
  },
  {
    title: "8. Tournament Bonuses",
    what: "Compete in weekly/monthly tournaments for big prizes.",
    steps: [
      "Join events like \"Slots Champion\" or \"Teen Patti Master\".",
      "Top players win cash, gadgets, or VIP perks.",
    ],
    example: "Win a brand-new phone in the summer tournament!",
  },
];

export default function BonusSection() {
  return (
    <section
      id="bonuses"
      className="section-block-muted"
      aria-labelledby="bonuses-heading"
    >
      <div className="section-container">
      <h2 id="bonuses-heading" className="section-heading">
        666rs Game: All Bonuses Explained in Detail!
      </h2>
      <p className="section-subheading">
        666rs Game is packed with exciting bonuses to boost your fun and
        rewards! Let&apos;s break them down in simple terms:
      </p>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-3">
        <div className="prose-content max-w-none lg:col-span-2">
          {bonuses.map((bonus) => (
            <div key={bonus.title}>
              <h3>{bonus.title}</h3>
              <p>
                <strong>What You Get:</strong> {bonus.what}
              </p>
              <p>
                <strong>How It Works:</strong>
              </p>
              <ol>
                {bonus.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {bonus.example && (
                <p>
                  <strong>Example:</strong> {bonus.example}
                </p>
              )}
              {bonus.tip && (
                <p>
                  <strong>Pro Tip:</strong> {bonus.tip}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          <AppScreenshot image="inviteBonus" showCaption={false} />
          <AppScreenshot image="referralGuide" showCaption={false} />
        </div>
      </div>

      <AffiliateCtaRow className="mt-8" center />
      </div>
    </section>
  );
}
