import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { BRAND_NAME } from "@/lib/brand";
import { LAST_UPDATED, SITE_URL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSitePage } from "@/lib/site-pages";

const page = getSitePage("/privacy-policy")!;

export const metadata: Metadata = createPageMetadata(
  page.title,
  page.description,
  page.path,
  { keywords: [...page.keywords] }
);

export default function PrivacyPolicyPage() {
  return (
    <ContentPageLayout
      title={page.title}
      description={`How ${BRAND_NAME} Pakistan guide collects, uses, and protects information when you visit this website.`}
      path={page.path}
    >
      <p>
        This Privacy Policy explains how we handle information when you visit{" "}
        {SITE_URL} (the &quot;Site&quot;). By using this Site, you agree to the
        practices described below.
      </p>

      <h3>1. Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Usage data:</strong> Pages visited, time on site, browser type,
          device type, and general location (country/region level).
        </li>
        <li>
          <strong>Contact information:</strong> If you email us, we receive your
          email address and message content.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> Small files stored
          on your device to improve site performance and analytics.
        </li>
      </ul>

      <h3>2. How We Use Information</h3>
      <ul>
        <li>Improve website content and user experience</li>
        <li>Respond to contact requests and feedback</li>
        <li>Analyze traffic patterns and page performance</li>
        <li>Maintain site security and prevent abuse</li>
      </ul>

      <h3>3. Affiliate Links</h3>
      <p>
        This Site contains affiliate links to the official 666rs Game platform.
        When you click these links, you may be redirected to a third-party
        website. That website has its own privacy policy. We may receive a
        commission if you register or deposit through our links, at no extra cost
        to you.
      </p>

      <h3>4. Third-Party Services</h3>
      <p>
        We may use third-party analytics or hosting services that process
        anonymized usage data. These providers are bound by their own privacy
        policies. We do not sell your personal information to third parties.
      </p>

      <h3>5. Data Security</h3>
      <p>
        We take reasonable measures to protect information on this Site.
        However, no internet transmission is 100% secure. Do not send sensitive
        account passwords or OTP codes through email or contact forms.
      </p>

      <h3>6. Children&apos;s Privacy</h3>
      <p>
        This Site is intended for users aged 18 and above. We do not knowingly
        collect information from anyone under 18. If you believe a minor has
        provided us information, contact us and we will delete it.
      </p>

      <h3>7. Your Rights</h3>
      <p>
        Depending on your location, you may have rights to access, correct, or
        delete personal data we hold. Contact us at{" "}
        <a
          href="mailto:contact@666rsgames.pk"
          className="font-medium text-brand-700 hover:underline"
        >
          contact@666rsgames.pk
        </a>{" "}
        to make a request.
      </p>

      <h3>8. Changes to This Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated date. Continued use of the Site
        after changes means you accept the revised policy.
      </p>

      <p className="text-sm text-slate-500">
        Effective date: <time dateTime={LAST_UPDATED}>13 July 2026</time>
      </p>
    </ContentPageLayout>
  );
}
