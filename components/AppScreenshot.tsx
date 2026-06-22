import Image from "next/image";
import { screenshots, type ScreenshotKey } from "@/lib/screenshots";

type AppScreenshotProps = {
  image: ScreenshotKey;
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
};

export default function AppScreenshot({
  image,
  priority = false,
  className = "",
  showCaption = true,
}: AppScreenshotProps) {
  const { src, alt, caption, width, height } = screenshots[image];

  return (
    <figure className={`inline-block ${className}`}>
      <div className="flex justify-center rounded-xl border border-slate-200 bg-slate-900 p-3 shadow-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          unoptimized
          className="h-auto w-auto max-w-full"
          style={{ maxWidth: width, maxHeight: height }}
        />
      </div>
      {showCaption && caption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
