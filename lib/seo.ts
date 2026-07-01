import type { Metadata } from "next";
import { SITE_URL, LAST_UPDATED, PUBLISHED_DATE } from "./constants";
import { screenshots } from "./screenshots";

export const SITE_NAME = "666rs Game";
export const DEFAULT_TITLE =
  "666rs Game Download (New Online Earning Game) 2026";
export const DEFAULT_DESCRIPTION =
  "Download 666rs Game APK for Pakistan 2026. Register with +92 phone, deposit via JazzCash & EasyPaisa, play slots & Teen Patti, claim Rs 100 bonus, and withdraw real PKR winnings fast.";

export const SEO_KEYWORDS = [
  "666rs Game",
  "666rs APK",
  "666rs Download",
  "666rs Login",
  "666rs Pakistan",
  "666rs Review Pakistan",
  "666rs Real or Fake",
  "666rs Bonus 2026",
  "666rs Registration",
  "666rs JazzCash Withdrawal",
  "666rs EasyPaisa Withdrawal",
  "666rs SadaPay Deposit",
  "666rs Withdrawal Time",
  "666rs Deposit Guide Pakistan",
  "What is 666rs Game Pakistan",
  "How to withdraw from 666rs",
  "Is 666rs safe in Pakistan",
  "How to register 666rs APK",
  "666rs deposit not credited",
  "666rs withdrawal pending",
];

const OG_IMAGE = screenshots.heroPromo;

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
      "en-PK": SITE_URL,
      "en": SITE_URL,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_PK",
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
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "content-language": "en-PK",
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: OG_IMAGE.src,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE.src],
    },
  };
}
