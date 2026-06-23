import { AFFILIATE_URL } from "@/lib/constants";

type Variant = "primary" | "secondary" | "hero-primary" | "hero-secondary";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "hero-primary":
    "btn-primary bg-white text-accent-700 hover:bg-slate-100",
  "hero-secondary":
    "btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20",
};

type AffiliateButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export default function AffiliateButton({
  children,
  variant = "primary",
  className = "",
}: AffiliateButtonProps) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${variants[variant]} ${className}`.trim()}
    >
      {children}
    </a>
  );
}

export function AffiliateCtaRow({
  className = "",
  center = false,
}: {
  className?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""} ${className}`.trim()}
    >
      <AffiliateButton>Download CV666 APK</AffiliateButton>
      <AffiliateButton variant="secondary">Register on CV666</AffiliateButton>
      <AffiliateButton variant="secondary">Login to CV666</AffiliateButton>
    </div>
  );
}
