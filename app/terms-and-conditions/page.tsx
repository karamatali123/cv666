import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { BRAND_NAME } from "@/lib/brand";
import { LAST_UPDATED, SITE_URL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Terms and Conditions",
  "Terms and conditions for using the 666rs Game Pakistan guide website, content, and affiliate links.",
  "/terms-and-conditions"
);

export default function TermsAndConditionsPage() {
  return (
    <ContentPageLayout
      title="Terms and Conditions"
      description={`Rules and conditions for accessing and using the ${BRAND_NAME} Pakistan guide website.`}
    >
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your use of{" "}
        {SITE_URL}. By accessing this Site, you agree to be bound by these
        Terms. If you do not agree, please do not use the Site.
      </p>

      <h3>1. Use of the Website</h3>
      <p>
        This Site provides informational content about {BRAND_NAME} for users in
        Pakistan. You may browse and read content for personal, non-commercial
        use. You may not copy, scrape, republish, or redistribute substantial
        portions of this Site without written permission.
      </p>

      <h3>2. Eligibility</h3>
      <p>
        You must be at least 18 years old to use this Site and to register on
        gaming platforms linked from this Site. By using the Site, you represent
        that you meet this age requirement and comply with applicable local
        laws.
      </p>

      <h3>3. Affiliate Links</h3>
      <p>
        The Site contains affiliate links to third-party gaming platforms. We
        are not responsible for the terms, policies, or operations of those
        platforms. Your relationship with 666rs Game is governed by their own
        terms of service, not these Terms.
      </p>

      <h3>4. Intellectual Property</h3>
      <p>
        Original text, layout, and design on this Site are protected by
        copyright. {BRAND_NAME} logos, screenshots, and branding displayed on
        this Site belong to their respective owners and are used for
        informational purposes.
      </p>

      <h3>5. User Conduct</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site for unlawful purposes</li>
        <li>Attempt to hack, disrupt, or overload the Site</li>
        <li>Submit false or misleading contact requests</li>
        <li>Misrepresent affiliation with this Site or 666rs Game</li>
      </ul>

      <h3>6. Disclaimer of Warranties</h3>
      <p>
        The Site and all content are provided &quot;as is&quot; without
        warranties of any kind, express or implied. We do not guarantee
        accuracy, completeness, or uninterrupted access. See our{" "}
        <a href="/disclaimer" className="font-medium text-brand-700 hover:underline">
          Disclaimer
        </a>{" "}
        for more details.
      </p>

      <h3>7. Limitation of Liability</h3>
      <p>
        We shall not be liable for any damages arising from your use of this
        Site or third-party platforms linked from it, including financial losses
        from gaming activities.
      </p>

      <h3>8. Privacy</h3>
      <p>
        Your use of the Site is also governed by our{" "}
        <a
          href="/privacy-policy"
          className="font-medium text-brand-700 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h3>9. Changes to Terms</h3>
      <p>
        We may revise these Terms at any time. Updated Terms will be posted on
        this page. Continued use after changes constitutes acceptance of the new
        Terms.
      </p>

      <h3>10. Contact</h3>
      <p>
        Questions about these Terms? Visit our{" "}
        <a
          href="/contact-us"
          className="font-medium text-brand-700 hover:underline"
        >
          Contact Us
        </a>{" "}
        page or email{" "}
        <a
          href="mailto:contact@666rs.com"
          className="font-medium text-brand-700 hover:underline"
        >
          contact@666rs.com
        </a>
        .
      </p>

      <p className="text-sm text-slate-500">
        Last updated: <time dateTime={LAST_UPDATED}>22 June 2026</time>
      </p>
    </ContentPageLayout>
  );
}
