import Image from "next/image";
import { LAST_UPDATED } from "@/lib/constants";
import { screenshots } from "@/lib/screenshots";
import AffiliateButton from "./AffiliateButton";

const appInfo = [
  { label: "Name", value: "666rs Game" },
  { label: "Size", value: "40 MB" },
  { label: "Version", value: "1.3" },
  { label: "Update", value: "Today" },
];

const trustPills = [
  "🇵🇰 Pakistan",
  "JazzCash",
  "EasyPaisa",
  "PKR Wallet",
  "Android APK",
];

export default function HeroSection() {
  return (
    <section
      className="gradient-hero section-block"
      aria-labelledby="hero-heading"
    >
      <div className="section-container relative z-10 pb-12 pt-8 sm:pb-16 sm:pt-10">
        <div className="animate-fade-in flex flex-wrap gap-2">
          {trustPills.map((pill) => (
            <span key={pill} className="trust-pill">
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="animate-slide-up">
            <h1
              id="hero-heading"
              className="text-balance text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl"
            >
              666rs Game Download (New Online Earning Game) 2026
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
              666rs Game is an online gaming platform available in Pakistan. Play
              slots, Teen Patti, Aviator, and live casino games. Deposit with
              JazzCash &amp; EasyPaisa, win real PKR, and withdraw fast — all
              from your Android phone.
            </p>

            <div className="btn-cta-row mt-6">
              <AffiliateButton variant="download">
                Download The App — Get RS 100
              </AffiliateButton>
              <AffiliateButton variant="hero-secondary">Register</AffiliateButton>
              <AffiliateButton variant="hero-secondary">Login</AffiliateButton>
            </div>

            <p className="mt-5 text-xs text-white/60 sm:text-sm">
              Updated{" "}
              <time dateTime={LAST_UPDATED}>22 June 2026</time> · Official
              affiliate link · 18+ only
            </p>
          </div>

          <div className="animate-slide-up flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-xs">
              <div className="absolute -inset-3 rounded-3xl bg-white/10 blur-xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-sm">
                <Image
                  src={screenshots.heroPromo.src}
                  alt={screenshots.heroPromo.alt}
                  width={screenshots.heroPromo.width}
                  height={screenshots.heroPromo.height}
                  priority
                  unoptimized
                  className="mx-auto h-auto w-full max-w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="animate-slide-up mt-10 overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur-sm">
          <table className="info-table w-full">
            <caption className="sr-only">666rs Game app information</caption>
            <tbody>
              {appInfo.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="!bg-white/10 !text-white">
                    {row.label}
                  </th>
                  <td className="!border-white/10 !bg-white/5 !text-white">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
