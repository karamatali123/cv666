import { LAST_UPDATED, PUBLISHED_DATE } from "@/lib/constants";

export default function ArticleMeta() {
  return (
    <div
      className="section-container border-b border-slate-200 bg-white py-3"
      aria-label="Article information"
    >
      <p className="text-center text-sm text-slate-500">
        Published{" "}
        <time dateTime={PUBLISHED_DATE}>15 January 2026</time>
        {" · "}
        Last updated{" "}
        <time dateTime={LAST_UPDATED}>22 June 2026</time>
        {" · "}
        By CV666 Bangladesh Guide · Independent review
      </p>
    </div>
  );
}
