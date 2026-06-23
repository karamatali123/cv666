import HeroSection from "@/components/HeroSection";
import KeyTakeaways from "@/components/KeyTakeaways";
import QuickInfoTable from "@/components/QuickInfoTable";
import TableOfContents from "@/components/TableOfContents";
import WhatIsCV666 from "@/components/WhatIsCV666";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import GamesSection from "@/components/GamesSection";
import DepositSection from "@/components/DepositSection";
import WithdrawalSection from "@/components/WithdrawalSection";
import DownloadGuide from "@/components/DownloadGuide";
import RegistrationGuide from "@/components/RegistrationGuide";
import BonusSection from "@/components/BonusSection";
import TroubleshootingSection from "@/components/TroubleshootingSection";
import SafetyTipsSection from "@/components/SafetyTipsSection";
import RealOrFakeSection from "@/components/RealOrFakeSection";
import UserReviews from "@/components/UserReviews";
import RelatedGames from "@/components/RelatedGames";
import FaqSection from "@/components/FaqSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import SiteLogo from "@/components/SiteLogo";
import AppPreviewSection from "@/components/AppPreviewSection";
import SkipLink from "@/components/SkipLink";
import ArticleMeta from "@/components/ArticleMeta";
import StickyAffiliateBar from "@/components/StickyAffiliateBar";
import MobileNav from "@/components/MobileNav";
import { LAST_UPDATED } from "@/lib/constants";

const navLinks = [
  { href: "#what-is-cv666", label: "About" },
  { href: "#download", label: "Download" },
  { href: "#deposit", label: "Deposit" },
  { href: "#withdrawal", label: "Withdrawal" },
  { href: "#troubleshooting", label: "Fix Issues" },
  { href: "#faq", label: "FAQ" },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      <SkipLink />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav
          className="section-container flex items-center justify-between py-3"
          aria-label="Main navigation"
        >
          <SiteLogo href="/" />
          <ul className="hidden gap-5 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <MobileNav links={navLinks} />
        </nav>
      </header>

      <article id="main-content">
        <HeroSection />
        <ArticleMeta />
        <KeyTakeaways />
        <QuickInfoTable />
        <TableOfContents />
        <WhatIsCV666 />
        <HowItWorks />
        <FeaturesSection />
        <GamesSection />
        <AppPreviewSection />
        <DepositSection />
        <WithdrawalSection />
        <DownloadGuide />
        <RegistrationGuide />
        <BonusSection />
        <TroubleshootingSection />
        <SafetyTipsSection />
        <RealOrFakeSection />
        <UserReviews />
        <RelatedGames />
        <FaqSection />
        <DisclaimerSection />
      </article>

      <footer className="border-t border-slate-200 bg-slate-900 py-10 pb-20 text-sm text-slate-400 md:pb-10">
        <div className="section-container">
          <p className="text-center">
            © 2026 CV666 Bangladesh Guide · Informational content only ·
            Updated <time dateTime={LAST_UPDATED}>22 June 2026</time>
          </p>
          <nav
            className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2"
            aria-label="Footer navigation"
          >
            <a href="#what-is-cv666" className="hover:text-white">About CV666</a>
            <a href="#download" className="hover:text-white">Download</a>
            <a href="#deposit" className="hover:text-white">bKash Deposit</a>
            <a href="#withdrawal" className="hover:text-white">Withdrawal</a>
            <a href="#real-or-fake" className="hover:text-white">Real or Fake</a>
            <a href="#troubleshooting" className="hover:text-white">Troubleshooting</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </footer>
      <StickyAffiliateBar />
    </>
  );
}
