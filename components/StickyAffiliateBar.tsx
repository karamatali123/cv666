import AffiliateButton from "./AffiliateButton";

export default function StickyAffiliateBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-4xl gap-2">
        <AffiliateButton
          variant="download"
          className="flex-1 justify-center text-center text-sm font-bold"
        >
          Download — Rs 100
        </AffiliateButton>
        <AffiliateButton
          variant="secondary"
          className="flex-1 justify-center text-center text-sm"
        >
          Register
        </AffiliateButton>
      </div>
    </div>
  );
}
