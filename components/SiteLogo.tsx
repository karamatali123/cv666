import Image from "next/image";
import Link from "next/link";
import { screenshots } from "@/lib/screenshots";

const LOGO_SIZE = 36;

type SiteLogoProps = {
  href?: string;
  showText?: boolean;
  size?: number;
  className?: string;
};

export default function SiteLogo({
  href = "/",
  showText = true,
  size = LOGO_SIZE,
  className = "",
}: SiteLogoProps) {
  const content = (
    <>
      <Image
        src={screenshots.logo.src}
        alt={screenshots.logo.alt}
        width={size}
        height={size}
        unoptimized
        className="rounded-full"
        priority
      />
      {showText && (
        <span className="text-lg font-bold text-slate-900">
          666rs Game
        </span>
      )}
    </>
  );

  const classes = `inline-flex items-center gap-2.5 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label="666rs Pakistan Guide home">
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
