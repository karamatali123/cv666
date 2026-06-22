const sections = [
  { id: "what-is-cv666", label: "What is CV666?" },
  { id: "how-it-works", label: "How It Works" },
  { id: "features", label: "Features" },
  { id: "games", label: "Games List" },
  { id: "app-preview", label: "App Screenshots" },
  { id: "deposit", label: "Deposit Guide (bKash/Nagad)" },
  { id: "withdrawal", label: "Withdrawal Guide" },
  { id: "download", label: "APK Download" },
  { id: "registration", label: "Registration & Login" },
  { id: "bonus", label: "Bonuses 2026" },
  { id: "troubleshooting", label: "Fix Common Problems" },
  { id: "safety-tips", label: "Safety Tips" },
  { id: "real-or-fake", label: "Real or Fake Review" },
  { id: "reviews", label: "User Reviews" },
  { id: "faq", label: "FAQ (17 Questions)" },
];

export default function TableOfContents() {
  return (
    <nav
      className="section-container"
      aria-labelledby="toc-heading"
    >
      <div className="card">
        <h2 id="toc-heading" className="text-lg font-semibold text-slate-900">
          In This CV666 Bangladesh Guide
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Jump to any section for step-by-step help with CV666 download,
          deposits, withdrawals, and login issues.
        </p>
        <ol className="mt-4 columns-1 gap-x-8 text-sm sm:columns-2">
          {sections.map((section, index) => (
            <li key={section.id} className="mb-2 break-inside-avoid">
              <a
                href={`#${section.id}`}
                className="text-brand-700 underline-offset-2 hover:text-brand-600 hover:underline"
              >
                {index + 1}. {section.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
