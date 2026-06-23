import { LAST_UPDATED } from "@/lib/constants";
import AppScreenshot from "./AppScreenshot";
import AffiliateButton from "./AffiliateButton";

const trustBadges = [
  "bKash & Nagad Ready",
  "Step-by-Step Guides",
  "Troubleshooting Help",
  "Honest Reviews",
  "Updated for 2026",
];

const paymentMethods = ["bKash", "Nagad", "Rocket", "Upay"];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-accent-700 via-accent-600 to-brand-600 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="section-container relative z-10 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              Bangladesh · 2026 · Official Link
            </p>
            <h1
              id="hero-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              CV666 Game Download APK (2026) – Official Bangladesh Guide
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Everything you need to use CV666 in Bangladesh — APK download,
              bKash &amp; Nagad deposit steps, withdrawal help, login fixes,
              bonus rules, and an honest real-or-fake review. Written for
              Android users in Dhaka, Chattogram, Sylhet, and across BD.
            </p>

            <div className="mt-6 flex flex-wrap gap-2" role="list" aria-label="Supported payment methods">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  role="listitem"
                  className="rounded-md bg-white/20 px-3 py-1 text-sm font-medium"
                >
                  {method}
                </span>
              ))}
              <span className="rounded-md bg-white/20 px-3 py-1 text-sm font-medium">
                BDT · Android 6.0+
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <AffiliateButton variant="hero-primary">
                Download CV666 APK
              </AffiliateButton>
              <AffiliateButton variant="hero-secondary">
                Register on CV666
              </AffiliateButton>
              <AffiliateButton variant="hero-secondary">
                Login to CV666
              </AffiliateButton>
            </div>

            <ul
              className="mt-10 grid gap-3 sm:grid-cols-2"
              aria-label="What this guide covers"
            >
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-xs text-green-900" aria-hidden="true">
                    ✓
                  </span>
                  {badge}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-white/70">
              Last updated{" "}
              <time dateTime={LAST_UPDATED}>22 June 2026</time> · Contains
              affiliate links to the official CV666 platform
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AppScreenshot image="welcomeBanner" priority showCaption={false} />
          </div>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" aria-hidden="true" />
      <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5" aria-hidden="true" />
    </section>
  );
}
