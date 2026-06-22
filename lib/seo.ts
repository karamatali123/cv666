import type { Metadata } from "next";
import { SITE_URL, LAST_UPDATED, PUBLISHED_DATE } from "./constants";
import { screenshots } from "./screenshots";

export const SITE_NAME = "CV666 Bangladesh Guide";
export const DEFAULT_TITLE =
  "CV666 Game 2026 – Official Bangladesh APK Download Guide";
export const DEFAULT_DESCRIPTION =
  "CV666 Bangladesh guide: APK download, bKash & Nagad deposit/withdrawal steps, login fixes, bonuses, troubleshooting & honest 2026 review for BD players.";

export const SEO_KEYWORDS = [
  "CV666 Game",
  "CV666 APK",
  "CV666 Download",
  "CV666 Login",
  "CV666 Bangladesh",
  "CV666 Review Bangladesh",
  "CV666 Real or Fake",
  "CV666 Bonus 2026",
  "CV666 Registration",
  "CV666 bKash Withdrawal",
  "CV666 Nagad Withdrawal",
  "CV666 Rocket Deposit",
  "CV666 Withdrawal Time",
  "CV666 Deposit Guide Bangladesh",
  "What is CV666 Game Bangladesh",
  "How to withdraw from CV666",
  "Is CV666 safe in Bangladesh",
  "How to register CV666 APK",
  "CV666 deposit not credited",
  "CV666 withdrawal pending",
];

const OG_IMAGE = screenshots.welcomeBanner;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Gaming",
  icons: {
    icon: [
      { url: screenshots.logo.src, sizes: "225x225", type: "image/jpeg" },
      { url: "/favicon.jpg", sizes: "225x225", type: "image/jpeg" },
    ],
    shortcut: screenshots.logo.src,
    apple: [{ url: screenshots.logo.src, sizes: "225x225", type: "image/jpeg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-BD": SITE_URL,
      "en": SITE_URL,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_BD",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    publishedTime: PUBLISHED_DATE,
    modifiedTime: LAST_UPDATED,
    images: [
      {
        url: OG_IMAGE.src,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
      {
        url: screenshots.logo.src,
        width: screenshots.logo.width,
        height: screenshots.logo.height,
        alt: screenshots.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.src],
  },
  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
    "content-language": "en-BD",
  },
};
