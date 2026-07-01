import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 183, 225, 259, 285, 318],
  },
  async redirects() {
    return [
      {
        source: "/cv666-game",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cv666-game/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/666rs-game",
        destination: "/",
        permanent: true,
      },
      {
        source: "/666rs-game/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
