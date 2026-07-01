import { AffiliateCtaRow } from "./AffiliateButton";

export default function ConclusionSection() {
  return (
    <section
      id="conclusion"
      className="section-block-alt"
      aria-labelledby="conclusion-heading"
    >
      <div className="section-container">
      <h2 id="conclusion-heading" className="section-heading">
        Conclusion
      </h2>

      <div className="prose-content mt-6 max-w-none">
        <p>
          666rs provides a comprehensive online gaming experience for players
          in Pakistan. With a wide variety of games, attractive bonuses, and
          secure transactions, it caters to the needs of both casual and
          serious gamers. The platform&apos;s user-friendly design and efficient
          customer support further enhance its appeal. Whether you&apos;re looking
          to have fun or win real money, 666rs offers a reliable and exciting
          gaming environment.
        </p>
      </div>

      <AffiliateCtaRow className="mt-8" center />
      </div>
    </section>
  );
}
