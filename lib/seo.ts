import type { Metadata } from "next";
import { SITE_URL } from "./constants";
import { screenshots } from "./screenshots";

export const SITE_NAME = "666rs Game";
export const SITE_TAGLINE = "666rs Pakistan Guide";
export const DEFAULT_TITLE =
  "666rs Game Download APK Pakistan 2026 | Bonus & Login";
export const DEFAULT_DESCRIPTION =
  "Download 666rs APK in Pakistan 2026. Register with +92 number, claim Rs 100 bonus, deposit via JazzCash or EasyPaisa, play Teen Patti & slots, withdraw PKR winnings fast.";

export const SEO_KEYWORDS = [
  "666rs Game",
  "666rs APK download",
  "666rs Game Pakistan",
  "666rs login",
  "666rs registration",
  "666rs bonus 2026",
  "666rs JazzCash deposit",
  "666rs EasyPaisa withdrawal",
  "666rs SadaPay",
  "666rs Teen Patti",
  "666rs real or fake",
  "666rs review Pakistan",
  "666rs APK install",
  "666rs withdraw PKR",
  "online earning game Pakistan",
  "666rs deposit guide",
  "666rs withdrawal time",
  "666rs referral bonus",
  "666rs app download Android",
  "666rs Game 2026",
];

const OG_IMAGE = screenshots.heroPromo;

const sharedRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const sharedOpenGraphImages = [
  {
    url: OG_IMAGE.src,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    alt: OG_IMAGE.alt,
    type: "image/jpeg" as const,
  },
  {
    url: screenshots.logo.src,
    width: screenshots.logo.width,
    height: screenshots.logo.height,
    alt: screenshots.logo.alt,
    type: "image/jpeg" as const,
  },
];

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_TAGLINE, url: SITE_URL }],
  creator: SITE_TAGLINE,
  publisher: SITE_TAGLINE,
  category: "Gaming",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: screenshots.logo.src, sizes: "225x225", type: "image/jpeg" },
      { url: "/favicon.jpg", sizes: "225x225", type: "image/jpeg" },
    ],
    shortcut: screenshots.logo.src,
    apple: [{ url: screenshots.logo.src, sizes: "225x225", type: "image/jpeg" }],
  },
  manifest: "/manifest.webmanifest",
  robots: sharedRobots,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-PK": SITE_URL,
      en: SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: sharedOpenGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.src],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "content-language": "en-PK",
    "target-country": "PK",
    "audience": "Pakistan mobile gamers",
  },
};

type PageMetadataOptions = {
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  options: PageMetadataOptions = {}
): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const robots = options.noIndex
    ? { index: false, follow: false }
    : sharedRobots;

  return {
    title,
    description,
    keywords: options.keywords,
    robots,
    alternates: {
      canonical: url,
      languages: {
        "en-PK": url,
        en: url,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: sharedOpenGraphImages.slice(0, 1),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.src],
    },
  };
}
