import { AFFILIATE_URL } from "@/lib/constants";

type Variant =
  | "primary"
  | "secondary"
  | "download"
  | "hero-primary"
  | "hero-secondary";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  download: "btn-download",
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
      className={`btn-cta-row ${center ? "sm:justify-center" : ""} ${className}`.trim()}
    >
      <AffiliateButton variant="download">Download The App Get RS 100</AffiliateButton>
      <AffiliateButton variant="secondary">Register</AffiliateButton>
      <AffiliateButton variant="secondary">Login</AffiliateButton>
    </div>
  );
}
