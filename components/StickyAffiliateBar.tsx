import AffiliateButton from "./AffiliateButton";

export default function StickyAffiliateBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur md:hidden">
      <div className="flex gap-2">
        <AffiliateButton className="flex-1 justify-center text-center text-xs sm:text-sm">
          Download CV666
        </AffiliateButton>
        <AffiliateButton variant="secondary" className="flex-1 justify-center text-center text-xs sm:text-sm">
          Register Now
        </AffiliateButton>
      </div>
    </div>
  );
}
