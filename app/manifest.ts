import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/seo";
import { screenshots } from "@/lib/screenshots";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "CV666 BD",
    description:
      "CV666 Game Bangladesh APK download, bKash & Nagad guides, and honest reviews.",
    start_url: "/",
    display: "standalone",
    background_color: "#004a37",
    theme_color: "#004a37",
    icons: [
      {
        src: screenshots.logo.src,
        sizes: "225x225",
        type: "image/jpeg",
      },
    ],
  };
}
