import type { MetadataRoute } from "next";
import { SITE_URL, LAST_UPDATED } from "@/lib/constants";
import { LEGAL_PAGES } from "@/lib/site-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...LEGAL_PAGES.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
