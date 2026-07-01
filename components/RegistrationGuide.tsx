import { AffiliateCtaRow } from "./AffiliateButton";

export default function RegistrationGuide() {
  return (
    <section
      id="login-registration"
      className="section-block-muted"
      aria-labelledby="login-registration-heading"
    >
      <div className="section-container">
      <h2 id="login-registration-heading" className="section-heading">
        666rs Game: Easy Login &amp; Registration
      </h2>

      <div className="prose-content mt-6 max-w-none">
        <h3 id="registration-process">Registration Process</h3>
        <p>
          Signing up for 666rs Game is super simple! First, download the app from
          the official website. Open the app and tap &quot;Sign Up&quot; to create
          your account. You&apos;ll need to enter your Pakistan phone number
          (03XXXXXXXXX) and create a secure password. Next, a verification code
          will be sent to your phone — enter it to confirm your account. Once
          verified, you&apos;re ready to explore games and start earning rewards!
        </p>

        <h3 id="login-process">Login Process</h3>
        <p>
          After registration, logging in is a breeze! Open the app and tap
          &quot;Login&quot; on the homepage. Enter your registered phone number
          and password. Forgot your password? Tap &quot;Reset Password&quot; and
          follow the steps. Once logged in, you&apos;ll see your profile, bonuses,
          and games. Always log out after playing, especially on shared devices,
          to keep your account safe!
        </p>
      </div>

      <AffiliateCtaRow className="mt-6" center />
      </div>
    </section>
  );
}
