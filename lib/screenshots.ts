export const screenshots = {
  logo: {
    src: "/og/screenshots/cv666-logo.jpeg",
    width: 225,
    height: 225,
    alt: "CV666 Game official logo with playing cards — Bangladesh gaming APK 2026",
    caption: "CV666 Game official branding",
  },
  apkPromo: {
    src: "/og/screenshots/cv666-apk-promo.jpeg",
    width: 183,
    height: 275,
    alt: "CV666 APK download promo showing slots, poker, roulette and Android app for Bangladesh",
    caption: "CV666 APK — slots, cards, and casino games on Android",
  },
  welcomeBanner: {
    src: "/og/screenshots/cv666-welcome-banner.jpeg",
    width: 285,
    height: 177,
    alt: "CV666 Game welcome banner — Play and Win on CV666 Bangladesh",
    caption: "Welcome to CV666 — play and win on mobile",
  },
  appGames: {
    src: "/og/screenshots/cv666-app-games.jpeg",
    width: 259,
    height: 194,
    alt: "CV666 app interface showing popular game types — Hot Games, Live, Sports, Poker, Lottery on Android",
    caption: "CV666 app home screen with game categories",
  },
  slotBanner: {
    src: "/og/screenshots/cv666-slot-banner.jpeg",
    width: 318,
    height: 159,
    alt: "CV666 Bangladesh complete entertainment betting platform with slot games and casino features",
    caption: "CV666 — full entertainment and betting experience",
  },
  roulettePromo: {
    src: "/og/screenshots/cv666-roulette-promo.jpeg",
    width: 318,
    height: 159,
    alt: "CV666 Game roulette, mobile app and casino chips — why players choose CV666 Bangladesh",
    caption: "CV666 mobile app with roulette and live casino games",
  },
} as const;

export type ScreenshotKey = keyof typeof screenshots;

export const screenshotKeys = Object.keys(screenshots) as ScreenshotKey[];

export const sliderScreenshots: ScreenshotKey[] = [
  "welcomeBanner",
  "appGames",
  "apkPromo",
  "logo",
  "slotBanner",
  "roulettePromo",
];
