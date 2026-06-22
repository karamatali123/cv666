const registrationFields = [
  {
    field: "Phone Number",
    description:
      "Enter your active Bangladesh mobile number (11 digits, format: 01XXXXXXXXX). This number becomes your CV666 login ID and receives OTP codes. Use a number you control long-term—changing registered numbers later may require support intervention and delay withdrawals.",
  },
  {
    field: "OTP Verification",
    description:
      "After entering your phone number, CV666 sends a one-time password via SMS. Enter the OTP within the time limit (usually 2–5 minutes). If OTP does not arrive, check network signal, wait 60 seconds, and tap Resend. Never share OTP with anyone claiming to be CV666 staff on social media.",
  },
  {
    field: "Password",
    description:
      "Create a strong password with at least 6–8 characters, mixing letters and numbers. Avoid using your phone number or birthdate as password. You will need this password every time you log in to CV666 Game. Use a unique password not shared with bKash or Nagad apps.",
  },
  {
    field: "Referral Code (Optional)",
    description:
      "If a friend invited you to CV666 Bangladesh, enter their referral code during registration to unlock welcome bonuses or commission benefits for both parties. Codes are case-sensitive. You typically cannot add a referral code after registration is complete, so enter it during signup if you have one.",
  },
];

export default function RegistrationGuide() {
  return (
    <section
      id="registration"
      className="section-container"
      aria-labelledby="registration-heading"
    >
      <h2 id="registration-heading" className="section-heading">
        CV666 Registration Guide Bangladesh
      </h2>
      <p className="section-subheading">
        How to register CV666 APK with phone number, OTP, and referral code.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {registrationFields.map((item) => (
          <article key={item.field} className="card">
            <h3 className="text-base font-semibold text-slate-900">
              {item.field}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div id="login" className="mt-10 card">
        <h3 className="text-lg font-semibold text-slate-900">CV666 Login</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Open CV666 Game and tap Login. Enter your registered phone number and
          password. If login fails, check for typos, ensure you are using the
          correct app version, and verify your account was not suspended for
          terms violations. Use Forgot Password to reset via OTP if needed.
          Clearing app cache or reinstalling the APK can resolve session errors
          on older Android devices.
        </p>
      </div>
    </section>
  );
}
