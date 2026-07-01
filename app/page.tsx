import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import TableOfContents from "@/components/TableOfContents";
import WhatIs666rs from "@/components/WhatIs666rs";
import RegistrationGuide from "@/components/RegistrationGuide";
import AppPreviewSection from "@/components/AppPreviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import DepositSection from "@/components/DepositSection";
import WithdrawalSection from "@/components/WithdrawalSection";
import SafetyTipsSection from "@/components/SafetyTipsSection";
import TipsForSuccess from "@/components/TipsForSuccess";
import RegistrationUsageSection from "@/components/RegistrationUsageSection";
import BonusSection from "@/components/BonusSection";
import WhyBonusesSection from "@/components/WhyBonusesSection";
import PersonalReviewSection from "@/components/PersonalReviewSection";
import UserReviews from "@/components/UserReviews";
import FaqSection from "@/components/FaqSection";
import ConclusionSection from "@/components/ConclusionSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import SiteHeader from "@/components/SiteHeader";
import SkipLink from "@/components/SkipLink";
import StickyAffiliateBar from "@/components/StickyAffiliateBar";
import BackToTop from "@/components/BackToTop";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      <SkipLink />
      <SiteHeader />

      <main id="main-content">
        <article itemScope itemType="https://schema.org/Article">
          <HeroSection />
          <TrustStrip />
          <TableOfContents />
          <WhatIs666rs />
          <RegistrationGuide />
          <AppPreviewSection />
          <FeaturesSection />
          <DepositSection />
          <WithdrawalSection />
          <SafetyTipsSection />
          <TipsForSuccess />
          <RegistrationUsageSection />
          <BonusSection />
          <WhyBonusesSection />
          <PersonalReviewSection />
          <UserReviews />
          <FaqSection />
          <ConclusionSection />
        </article>
      </main>

      <SiteFooter />
      <StickyAffiliateBar />
      <BackToTop />
    </>
  );
}
