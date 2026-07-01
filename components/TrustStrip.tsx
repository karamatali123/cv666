const methods = [
  { icon: "📱", label: "Android APK", sub: "40 MB download" },
  { icon: "💚", label: "JazzCash", sub: "Instant deposit" },
  { icon: "💜", label: "EasyPaisa", sub: "Fast withdrawal" },
  { icon: "🏦", label: "Bank Transfer", sub: "Large amounts" },
  { icon: "🎁", label: "Rs 100 Bonus", sub: "New users" },
];

export default function TrustStrip() {
  return (
    <section className="section-block-alt" aria-label="666rs platform highlights">
      <div className="section-container !py-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {methods.map((item) => (
            <div
              key={item.label}
              className="card-interactive flex flex-col items-center text-center !p-4"
            >
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <span className="mt-2 text-sm font-bold text-slate-900">
                {item.label}
              </span>
              <span className="mt-0.5 text-xs text-slate-500">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
