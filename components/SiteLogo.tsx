import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/og/screenshots/cv666-logo.jpeg";
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
        src={LOGO_SRC}
        alt="CV666 Game official logo — Bangladesh gaming APK"
        width={size}
        height={size}
        unoptimized
        className="rounded-full"
        priority
      />
      {showText && (
        <span className="text-lg font-bold text-accent-600">
          CV666 BD Guide
        </span>
      )}
    </>
  );

  const classes = `inline-flex items-center gap-2.5 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label="CV666 Bangladesh Guide home">
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
