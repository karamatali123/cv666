export const screenshots = {
  logo: {
    src: "/og/screenshots/666rs-logo.jpeg",
    width: 225,
    height: 225,
    alt: "666rs Game official logo with red plane and gold 666RS branding — Pakistan 2026",
    caption: "666rs Game official branding",
  },
  heroPromo: {
    src: "/og/screenshots/666rs-hero-promo.jpeg",
    width: 422,
    height: 726,
    alt: "666rs Game Pakistan promo — login with +92, JazzCash & EasyPaisa, play and win real cash",
    caption: "666rs Game — play, win, and earn real cash in Pakistan",
  },
  appGames: {
    src: "/og/screenshots/666rs-app-games.jpeg",
    width: 395,
    height: 776,
    alt: "666rs app home screen with Aviator, slots, sports betting, and PKR wallet for Pakistan players",
    caption: "666rs app — hot games, sports, and PKR wallet",
  },
  inviteBonus: {
    src: "/og/screenshots/666rs-invite-bonus.jpeg",
    width: 168,
    height: 300,
    alt: "666rs invite friends bonus — Rs 200 + Rs 800 + Rs 2000 rewards for Pakistan referrals",
    caption: "Invite friends and earn Rs 200 + 800 + 2000 on 666rs",
  },
  referralGuide: {
    src: "/og/screenshots/666rs-referral-guide.jpeg",
    width: 362,
    height: 484,
    alt: "666rs referral program — share invite link, friend registers, get bonus in Pakistan",
    caption: "666rs referral guide — share link, register, earn bonus",
  },
} as const;

export type ScreenshotKey = keyof typeof screenshots;

export const screenshotKeys = Object.keys(screenshots) as ScreenshotKey[];

export const sliderScreenshots: ScreenshotKey[] = [
  "heroPromo",
  "appGames",
  "inviteBonus",
  "referralGuide",
  "logo",
];
