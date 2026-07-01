import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/seo";
import DownloadPopup from "@/components/DownloadPopup";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#005a42" },
    { media: "(prefers-color-scheme: dark)", color: "#003d2e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK" className={inter.variable}>
      <body className="min-h-screen font-sans">
        {children}
        <DownloadPopup />
      </body>
    </html>
  );
}
