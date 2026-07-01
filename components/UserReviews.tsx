const reviews = [
  {
    name: "Ayesha",
    city: "Karachi",
    rating: 5,
    text: "I love the daily lucky draw! I won 300 PKR on my first spin. My friends and I compete in Teen Patti tournaments — it's like a fun math challenge!",
  },
  {
    name: "Ali",
    city: "Lahore",
    rating: 4,
    text: "The invitation bonus is awesome! I invited 4 friends and got 2,400 PKR. But I wish there were more free games without deposits.",
  },
  {
    name: "Mr. Rizwan",
    city: "Islamabad",
    rating: 5,
    text: "666rs is safe and teaches responsibility. My son learns to manage his coins and time. The parental controls give me peace of mind!",
  },
  {
    name: "Zara",
    city: "Rawalpindi",
    rating: 5,
    text: "Slots are my favorite! I saved up coins for a week and won 1,000 PKR. Mom helped me withdraw it to buy a new sketchbook!",
  },
  {
    name: "Hamza",
    city: "Peshawar",
    rating: 4,
    text: "The app crashes sometimes, but customer support fixed it fast. I earned 5,000 PKR in a month — worth the effort!",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-amber-400" : "text-slate-200"}
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
      className="section-block-muted"
      aria-labelledby="reviews-heading"
    >
      <div className="section-container">
        <h2 id="reviews-heading" className="section-heading">
          User Reviews from Real Players!
        </h2>
        <p className="section-subheading">
          What Pakistan players in Karachi, Lahore, Islamabad, and beyond say
          about 666rs Game.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <article key={review.name} className="card-interactive">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                    Review {index + 1}
                  </span>
                  <h3 className="mt-1 font-bold text-slate-900">
                    {review.name}{" "}
                    <span className="font-normal text-slate-500">
                      ({review.city})
                    </span>
                  </h3>
                </div>
                <Stars rating={review.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                &ldquo;{review.text}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
