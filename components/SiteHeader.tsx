import SiteLogo from "./SiteLogo";
import AffiliateButton from "./AffiliateButton";
import MobileNav from "./MobileNav";
import { NAV_SECTIONS } from "@/lib/sections";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <SiteLogo href="/" />
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Page sections"
        >
          {NAV_SECTIONS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {link.shortLabel}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <AffiliateButton
            variant="download"
            className="hidden min-h-[44px] px-4 text-xs sm:inline-flex sm:text-sm"
          >
            Download App
          </AffiliateButton>
          <AffiliateButton
            variant="download"
            className="min-h-[44px] px-3 text-xs sm:hidden"
          >
            Download
          </AffiliateButton>
          <MobileNav links={NAV_SECTIONS} />
        </div>
      </div>
    </header>
  );
}
