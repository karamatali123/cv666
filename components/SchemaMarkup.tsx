import { faqs } from "@/lib/faqs";
import { SITE_URL, LAST_UPDATED, PUBLISHED_DATE, AFFILIATE_URL } from "@/lib/constants";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SEO_KEYWORDS } from "@/lib/seo";
import { screenshots } from "@/lib/screenshots";
import { PAGE_SECTIONS } from "@/lib/sections";

const LOGO_URL = `${SITE_URL}${screenshots.logo.src}`;
const OG_IMAGE = `${SITE_URL}${screenshots.heroPromo.src}`;

export default function SchemaMarkup() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-PK",
        publisher: { "@id": `${SITE_URL}#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
          width: screenshots.logo.width,
          height: screenshots.logo.height,
        },
        description:
          "Independent informational guide for 666rs Game Pakistan APK download, payments, and reviews.",
      },
      {
        "@type": "WebPage",
        "@id": SITE_URL,
        url: SITE_URL,
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": `${SITE_URL}#software` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE,
          width: screenshots.heroPromo.width,
          height: screenshots.heroPromo.height,
        },
        datePublished: PUBLISHED_DATE,
        dateModified: LAST_UPDATED,
        inLanguage: "en-PK",
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}#article`,
        headline: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        image: [OG_IMAGE, LOGO_URL],
        datePublished: PUBLISHED_DATE,
        dateModified: LAST_UPDATED,
        author: { "@id": `${SITE_URL}#organization` },
        publisher: { "@id": `${SITE_URL}#organization` },
        mainEntityOfPage: { "@id": SITE_URL },
        articleSection: "Gaming",
        inLanguage: "en-PK",
        keywords: SEO_KEYWORDS.join(", "),
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}#software`,
        name: "666rs Game",
        applicationCategory: "GameApplication",
        operatingSystem: "Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
        },
        description:
          "666rs Game Android APK for Pakistan users with JazzCash, EasyPaisa, and Bank Transfer payment support.",
        downloadUrl: AFFILIATE_URL,
        screenshot: [
          `${SITE_URL}${screenshots.appGames.src}`,
          `${SITE_URL}${screenshots.heroPromo.src}`,
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}#toc`,
        name: "666rs Game Pakistan Guide Table of Contents",
        numberOfItems: PAGE_SECTIONS.length,
        itemListElement: PAGE_SECTIONS.map((section, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: section.label,
          url: `${SITE_URL}#${section.id}`,
        })),
      },
      {
        "@type": "HowTo",
        name: "How to Download and Install 666rs APK in Pakistan",
        description:
          "Step-by-step guide to download 666rs Game APK on Android and register with a Pakistan phone number.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Download 666rs APK",
            text: "Obtain the 666rs APK from an official source and save to your Android device.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Enable Unknown Sources",
            text: "Go to Settings → Security → Install unknown apps and enable for your browser.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Install and Register",
            text: "Tap the APK to install, open 666rs, register with your phone number and OTP.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Deposit via JazzCash or EasyPaisa",
            text: "Make your first PKR deposit using JazzCash, EasyPaisa, or Bank Transfer to activate your wallet.",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Withdraw from 666rs via JazzCash in Pakistan",
        description:
          "Withdraw PKR winnings from 666rs Game to your JazzCash or EasyPaisa wallet.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open Withdrawal Menu",
            text: "Go to 666rs Wallet → Withdraw and select JazzCash or EasyPaisa.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Enter Amount and Confirm",
            text: "Enter PKR amount above minimum threshold and verify your wallet number.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Wait for Processing",
            text: "Submit request, note withdrawal ID, and wait 10–60 minutes for payment.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
