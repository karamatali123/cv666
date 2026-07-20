export const FOOTER_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/#faq", label: "FAQ" },
] as const;

export type SitePage = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
};

export const LEGAL_PAGES: readonly SitePage[] = [
  {
    path: "/about-us",
    title: "About Us",
    description:
      "Learn about the 666rs Game Pakistan guide — our mission, APK download help, JazzCash deposits, bonuses, and safe play tips for Pakistani players.",
    keywords: [
      "666rs about us",
      "666rs Pakistan guide",
      "666rs independent review",
      "666rs Game information",
    ],
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    description:
      "Contact the 666rs Game Pakistan guide for APK download help, JazzCash deposit issues, withdrawal questions, and account support resources.",
    keywords: [
      "666rs contact",
      "666rs support Pakistan",
      "666rs help",
      "666rs customer service",
    ],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "666rs Game Pakistan guide privacy policy — how we collect, use, and protect your data, cookies, analytics, and affiliate link disclosures.",
    keywords: [
      "666rs privacy policy",
      "666rs data protection",
      "666rs cookies",
      "666rs website privacy",
    ],
  },
  {
    path: "/disclaimer",
    title: "Disclaimer",
    description:
      "666rs Game Pakistan guide disclaimer — affiliate disclosure, gaming risk warnings, legal notices, and important information for players.",
    keywords: [
      "666rs disclaimer",
      "666rs affiliate disclosure",
      "666rs gaming risks",
      "666rs legal notice",
    ],
  },
  {
    path: "/terms-and-conditions",
    title: "Terms and Conditions",
    description:
      "Terms and conditions for using the 666rs Game Pakistan guide website, including content usage, affiliate links, and user responsibilities.",
    keywords: [
      "666rs terms and conditions",
      "666rs website terms",
      "666rs user agreement",
      "666rs guide rules",
    ],
  },
] as const;

export function getSitePage(path: string): SitePage | undefined {
  return LEGAL_PAGES.find((page) => page.path === path);
}
