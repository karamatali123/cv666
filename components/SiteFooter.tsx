import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/site-pages";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-10 pb-24 text-sm text-slate-400 md:pb-10">
      <div className="section-container !py-0">
        <p className="text-center font-medium text-slate-300">
          © 2026 666rs Game · Pakistan
        </p>
        <nav
          className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2"
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[44px] py-2 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-center text-xs text-slate-500">
          JazzCash · EasyPaisa · PKR · Android APK
        </p>
      </div>
    </footer>
  );
}
