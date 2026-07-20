import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { BRAND_NAME, BRAND_COUNTRY, PAYMENT_METHODS } from "@/lib/brand";
import { LAST_UPDATED } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSitePage } from "@/lib/site-pages";

const page = getSitePage("/about-us")!;

export const metadata: Metadata = createPageMetadata(
  page.title,
  page.description,
  page.path,
  { keywords: [...page.keywords] }
);

export default function AboutUsPage() {
  return (
    <ContentPageLayout
      title={page.title}
      description={`Independent guide helping ${BRAND_COUNTRY} players understand ${BRAND_NAME}, APK download, payments, and bonuses.`}
      path={page.path}
    >
      <p>
        Welcome to the {BRAND_NAME} Pakistan guide. We are an independent
        informational website created to help players in Pakistan understand how
        to download, register, deposit, play, and withdraw on the 666rs gaming
        platform.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our goal is to provide clear, honest, and up-to-date guidance for Pakistan
        users who search for 666rs APK download, JazzCash deposits, EasyPaisa
        withdrawals, login help, and bonus information. We explain each step in
        simple language so both new and experienced players can follow along.
      </p>

      <h3>What We Cover</h3>
      <ul>
        <li>666rs Game APK download and installation for Android</li>
        <li>Registration and login with Pakistan phone numbers (+92)</li>
        <li>Deposit guides for {PAYMENT_METHODS.join(", ")}</li>
        <li>Withdrawal steps and typical processing times in PKR</li>
        <li>Bonuses, referral rewards, and promotional offers</li>
        <li>Safety tips, FAQs, and player reviews</li>
      </ul>

      <h3>What We Are Not</h3>
      <p>
        This website is not the official 666rs Game operator. We do not process
        deposits, withdrawals, or account management. We provide educational
        content and link to the official platform through affiliate partnerships.
        Always verify payment details inside the official app before sending money.
      </p>

      <h3>Who This Guide Is For</h3>
      <p>
        This guide is written for adult players (18+) in Pakistan who want
        step-by-step help using mobile wallets and Android devices. We focus on
        cities including Karachi, Lahore, Islamabad, Peshawar, and Faisalabad,
        where JazzCash and EasyPaisa are widely used.
      </p>

      <p className="text-sm text-slate-500">
        Last updated: <time dateTime={LAST_UPDATED}>13 July 2026</time>
      </p>
    </ContentPageLayout>
  );
}
