const problems = [
  {
    problem: "CV666 deposit not credited after bKash payment",
    causes: [
      "TrxID entered incorrectly or with extra spaces",
      "Sent amount does not match the exact BDT shown in app",
      "Payment sent to an old/expired agent number (screenshot scam)",
      "Server overload during peak evening hours (7–11 PM BD time)",
    ],
    fix: [
      "Wait 30–60 minutes before contacting support",
      "Open bKash → History and copy the exact TrxID again",
      "Take a screenshot showing recipient number, amount, and TrxID",
      "Contact in-app support with your CV666 ID, TrxID, and screenshot",
      "Do NOT send a second payment unless support explicitly asks",
    ],
  },
  {
    problem: "CV666 withdrawal pending for hours",
    causes: [
      "First-time withdrawal requires manual verification",
      "Active bonus with incomplete wagering requirements",
      "Withdrawal requested during Eid, Friday prayer time, or late night",
      "Wallet number does not match registered account",
    ],
    fix: [
      "Check Promotions tab for unfinished bonus wagering",
      "Verify your bKash/Nagad number in Profile settings",
      "Note your withdrawal request ID from the app history",
      "Contact support after 2 hours with request ID and registered phone",
      "Avoid third-party 'fast withdrawal agents' — they are common scams",
    ],
  },
  {
    problem: "CV666 login failed or session expired",
    causes: [
      "Wrong phone number format (use 01XXXXXXXXX without +880)",
      "Outdated APK version no longer supported by server",
      "App cache corrupted after phone restart or storage cleanup",
      "Account temporarily locked after multiple wrong password attempts",
    ],
    fix: [
      "Use Forgot Password and verify via OTP",
      "Download the latest CV666 APK from a trusted source",
      "Clear app cache: Settings → Apps → CV666 → Clear Cache",
      "If still locked, wait 30 minutes or contact support with your number",
    ],
  },
  {
    problem: "CV666 APK won't install on Android",
    causes: [
      "'Install unknown apps' permission not enabled for your browser",
      "Insufficient storage space (APK needs ~100 MB free)",
      "Downloaded file corrupted or incomplete",
      "Android version below 6.0 (Marshmallow)",
    ],
    fix: [
      "Enable unknown sources for Chrome/your file manager in Settings",
      "Free at least 200 MB storage and re-download the APK",
      "Delete old APK file and download fresh copy",
      "Check Settings → About Phone → Android version (need 6.0+)",
    ],
  },
];

export default function TroubleshootingSection() {
  return (
    <section
      id="troubleshooting"
      className="section-container bg-white"
      aria-labelledby="troubleshooting-heading"
    >
      <h2 id="troubleshooting-heading" className="section-heading">
        Fix Common CV666 Problems (Bangladesh)
      </h2>
      <p className="section-subheading">
        Practical solutions for deposit delays, withdrawal holds, login errors,
        and APK installation issues reported by CV666 Bangladesh users.
      </p>

      <div className="mt-10 space-y-8">
        {problems.map((item) => (
          <article key={item.problem} className="card">
            <h3 className="text-base font-semibold text-slate-900">
              {item.problem}
            </h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-red-700">
                  Likely causes
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {item.causes.map((cause) => (
                    <li key={cause}>{cause}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-700">
                  What to do
                </h4>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
                  {item.fix.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-600">
        Still stuck? Check our{" "}
        <a href="#faq" className="font-medium text-brand-600 hover:underline">
          CV666 FAQ section
        </a>{" "}
        or review the{" "}
        <a
          href="#withdrawal"
          className="font-medium text-brand-600 hover:underline"
        >
          withdrawal guide
        </a>{" "}
        for step-by-step bKash and Nagad instructions.
      </p>
    </section>
  );
}
