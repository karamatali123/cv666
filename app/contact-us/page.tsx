import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import AffiliateButton from "@/components/AffiliateButton";
import { BRAND_NAME } from "@/lib/brand";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Contact Us",
  "Contact 666rs Game Pakistan guide for questions about APK download, JazzCash deposits, withdrawals, and account help.",
  "/contact-us"
);

export default function ContactUsPage() {
  return (
    <ContentPageLayout
      title="Contact Us"
      description="Get in touch with questions about this 666rs guide or find official app support channels."
    >
      <p>
        Thank you for visiting the {BRAND_NAME} Pakistan guide. If you have
        questions about the content on this website, account issues with the
        666rs app, or payment problems, use the options below.
      </p>

      <h3>Website &amp; Guide Questions</h3>
      <p>
        For questions about articles, guides, or corrections on this website,
        email us at{" "}
        <a
          href="mailto:contact@666rs.com"
          className="font-medium text-brand-700 hover:underline"
        >
          contact@666rs.com
        </a>
        . We aim to respond within 2–5 business days.
      </p>

      <h3>666rs App Account &amp; Payment Support</h3>
      <p>
        For login issues, deposits not credited, withdrawal delays, or bonus
        questions, contact the official 666rs support team through:
      </p>
      <ul>
        <li>In-app live chat (fastest during business hours)</li>
        <li>Official WhatsApp or Telegram linked inside the app</li>
        <li>Support ticket in Settings → Help</li>
      </ul>
      <p>
        Have ready: your registered phone number, user ID, TrxID (for deposits),
        or withdrawal request ID. Never share your password or OTP with anyone.
      </p>

      <h3>Download &amp; Register</h3>
      <p>
        To download the official 666rs APK or create a new account, use the
        official link below:
      </p>
      <div className="btn-cta-row my-6">
        <AffiliateButton variant="download">
          Download 666rs Game
        </AffiliateButton>
        <AffiliateButton variant="secondary">Register</AffiliateButton>
      </div>

      <h3>Important Notice</h3>
      <p>
        This website is an independent guide and is not operated by 666rs Game.
        We cannot access your account, reverse transactions, or speed up
        withdrawals. For all account-related matters, use official in-app
        support only. Avoid unofficial agents on social media who ask for
        passwords or upfront fees.
      </p>
    </ContentPageLayout>
  );
}
