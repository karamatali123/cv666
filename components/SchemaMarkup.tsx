import { faqs } from "@/lib/faqs";
import { SITE_URL, LAST_UPDATED, PUBLISHED_DATE } from "@/lib/constants";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME } from "@/lib/seo";
import { screenshots } from "@/lib/screenshots";

const LOGO_URL = `${SITE_URL}${screenshots.logo.src}`;
const OG_IMAGE = `${SITE_URL}${screenshots.welcomeBanner.src}`;

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
        inLanguage: "en-BD",
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
          "Independent informational guide for CV666 Game Bangladesh APK download, payments, and reviews.",
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
          width: screenshots.welcomeBanner.width,
          height: screenshots.welcomeBanner.height,
        },
        datePublished: PUBLISHED_DATE,
        dateModified: LAST_UPDATED,
        inLanguage: "en-BD",
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
        inLanguage: "en-BD",
        keywords:
          "CV666 Game, CV666 APK, CV666 Bangladesh, bKash, Nagad, APK download",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}#software`,
        name: "CV666 Game",
        applicationCategory: "GameApplication",
        operatingSystem: "Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BDT",
        },
        description:
          "CV666 Game Android APK for Bangladesh users with bKash, Nagad, and Rocket payment support.",
        downloadUrl: `${SITE_URL}#download`,
        screenshot: `${SITE_URL}${screenshots.appGames.src}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "CV666 Game Bangladesh Guide",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Download and Install CV666 APK in Bangladesh",
        description:
          "Step-by-step guide to download CV666 Game APK on Android and register with a Bangladesh phone number.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Download CV666 APK",
            text: "Obtain the CV666 APK from an official source and save to your Android device.",
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
            text: "Tap the APK to install, open CV666, register with your phone number and OTP.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Deposit via bKash or Nagad",
            text: "Make your first BDT deposit using bKash, Nagad, or Rocket to activate your wallet.",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Withdraw from CV666 via bKash in Bangladesh",
        description:
          "Withdraw BDT winnings from CV666 Game to your bKash or Nagad wallet.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open Withdrawal Menu",
            text: "Go to CV666 Wallet → Withdraw and select bKash or Nagad.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Enter Amount and Confirm",
            text: "Enter BDT amount above minimum threshold and verify your wallet number.",
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
