const reviews = [
  {
    name: "Rahim M.",
    city: "Dhaka",
    rating: 4,
    text: "Downloaded CV666 APK last month. bKash deposit credited in 15 minutes. Withdrew 2,000 BDT to Nagad same evening. UI is simple on my Redmi phone. Lost some on Dragon Tiger but overall works as expected.",
    sentiment: "positive",
  },
  {
    name: "Farhana K.",
    city: "Chattogram",
    rating: 2,
    text: "Registration was easy but my first withdrawal took almost 4 hours. Support on Telegram responded slowly. Got the money eventually but the wait was stressful. Be careful with bonus terms—they blocked my withdrawal until I wagered more.",
    sentiment: "negative",
  },
  {
    name: "Arif H.",
    city: "Sylhet",
    rating: 5,
    text: "Been using CV666 Bangladesh for 3 months. Daily login bonus is small but nice. Referral code earned me around 800 BDT commission. Rocket deposit works fine here. Teen Patti is my main game.",
    sentiment: "positive",
  },
  {
    name: "Nusrat A.",
    city: "Khulna",
    rating: 3,
    text: "Mixed experience. Deposits via bKash are fast but I once sent money to a wrong agent number shown in an old screenshot. Lost 500 BDT. Always double-check the number inside the app before paying.",
    sentiment: "mixed",
  },
  {
    name: "Kamal S.",
    city: "Rajshahi",
    rating: 2,
    text: "Saw CV666 review videos claiming easy money. Lost 3,000 BDT in two days on color prediction. Withdrawal of remaining 400 BDT took 2 days. Not sure if it's fully safe but I stopped playing.",
    sentiment: "negative",
  },
  {
    name: "Tasnim R.",
    city: "Dhaka",
    rating: 4,
    text: "Good selection of games compared to other APKs I've tried. Fortune Tiger is fun for small bets. Customer chat resolved my login issue in about 30 minutes. Just don't expect guaranteed profits.",
    sentiment: "positive",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-amber-400" : "text-slate-300"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function UserReviews() {
  return (
    <section
      id="reviews"
      className="section-container bg-white"
      aria-labelledby="reviews-heading"
    >
      <h2 id="reviews-heading" className="section-heading">
        CV666 User Reviews – Bangladesh
      </h2>
      <p className="section-subheading">
        Mixed experiences from CV666 players in Dhaka, Chattogram, Sylhet,
        Khulna, and Rajshahi.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{review.name}</h3>
                <p className="text-xs text-slate-500">{review.city}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              &ldquo;{review.text}&rdquo;
            </p>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Reviews are illustrative composites based on common themes reported by
        Bangladesh gaming app users. Individual experiences vary.
      </p>
    </section>
  );
}
