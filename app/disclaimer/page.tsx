import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { BRAND_NAME } from "@/lib/brand";
import { LAST_UPDATED } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSitePage } from "@/lib/site-pages";

const page = getSitePage("/disclaimer")!;

export const metadata: Metadata = createPageMetadata(
  page.title,
  page.description,
  page.path,
  { keywords: [...page.keywords] }
);

export default function DisclaimerPage() {
  return (
    <ContentPageLayout
      title={page.title}
      description={`Important legal notices, affiliate disclosure, and risk warnings for ${BRAND_NAME} Pakistan users.`}
      path={page.path}
    >
      <p>
        Please read this disclaimer carefully before using this website or
        acting on any information provided about {BRAND_NAME}.
      </p>

      <h3>Independent Informational Website</h3>
      <p>
        This website is an independent guide and is not owned, operated, or
        endorsed by the official 666rs Game platform. We provide educational
        content about APK download, registration, deposits, withdrawals, and
        gameplay for Pakistan users. All trademarks belong to their respective
        owners.
      </p>

      <h3>Affiliate Disclosure</h3>
      <p>
        Some links on this Site are affiliate links. If you click a link and
        register or deposit on the 666rs platform, we may earn a commission at
        no additional cost to you. This helps support the maintenance of this
        guide. Our reviews and guides aim to be honest regardless of affiliate
        relationships.
      </p>

      <h3>No Financial or Legal Advice</h3>
      <p>
        Content on this Site is for general information only. It does not
        constitute financial, legal, or gambling advice. Online gaming involves
        financial risk. You may lose money. Never deposit more than you can
        afford to lose. Past results do not guarantee future winnings.
      </p>

      <h3>Gaming &amp; Regulatory Notice</h3>
      <p>
        Online gaming laws vary by region. Users in Pakistan are responsible for
        understanding and complying with applicable local laws. {BRAND_NAME} may
        not be licensed by official regulatory bodies in Pakistan. Play at your
        own risk and discretion.
      </p>

      <h3>Accuracy of Information</h3>
      <p>
        We strive to keep guides accurate and updated, but bonus amounts,
        deposit limits, withdrawal times, and app features can change without
        notice. Always confirm current details inside the official 666rs app
        before making payments. We are not liable for errors, omissions, or
        outdated information.
      </p>

      <h3>Third-Party Links</h3>
      <p>
        This Site links to external websites including the official 666rs
        platform. We are not responsible for the content, privacy practices, or
        security of third-party sites. Use official in-app payment channels only
        — never send money to personal numbers shared on social media.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        To the fullest extent permitted by law, we disclaim liability for any
        direct, indirect, or consequential losses arising from use of this Site
        or the 666rs platform, including lost deposits, delayed withdrawals,
        account blocks, or device issues from APK installation.
      </p>

      <h3>Age Restriction</h3>
      <p>
        This Site and {BRAND_NAME} are intended for users aged 18 and above
        only. By using this Site, you confirm you meet the minimum age
        requirement in your jurisdiction.
      </p>

      <p className="text-sm text-slate-500">
        Last updated: <time dateTime={LAST_UPDATED}>13 July 2026</time>
      </p>
    </ContentPageLayout>
  );
}
