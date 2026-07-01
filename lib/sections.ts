export type PageSection = {
  id: string;
  label: string;
  shortLabel: string;
};

export const PAGE_SECTIONS: PageSection[] = [
  { id: "more-about", label: "More About 666rs Game", shortLabel: "About" },
  {
    id: "login-registration",
    label: "666rs Game: Easy Login & Registration",
    shortLabel: "Login",
  },
  { id: "screenshot", label: "Screenshot", shortLabel: "Screenshots" },
  {
    id: "features",
    label: "666rs Game: Detailed Features Explained!",
    shortLabel: "Features",
  },
  {
    id: "deposit",
    label: "How to Deposit Money in 666rs Game",
    shortLabel: "Deposit",
  },
  {
    id: "withdrawal",
    label: "How to Withdraw Money from 666rs Game",
    shortLabel: "Withdraw",
  },
  {
    id: "safety-rules",
    label: "Safety Rules for Deposits & Withdrawals!",
    shortLabel: "Safety",
  },
  { id: "tips", label: "Tips for Success", shortLabel: "Tips" },
  {
    id: "registration-usage",
    label: "Registration & Usage",
    shortLabel: "Usage",
  },
  {
    id: "bonuses",
    label: "666rs Game: All Bonuses Explained in Detail!",
    shortLabel: "Bonuses",
  },
  {
    id: "why-bonuses",
    label: "Why Bonuses Are Awesome!",
    shortLabel: "Why Bonuses",
  },
  {
    id: "personal-review",
    label: "My Personal Review of 666rs Game",
    shortLabel: "Review",
  },
  {
    id: "reviews",
    label: "User Reviews from Real Players!",
    shortLabel: "Reviews",
  },
  { id: "faq", label: "666rs Game FAQ – Pakistan", shortLabel: "FAQ" },
  { id: "conclusion", label: "Conclusion", shortLabel: "Conclusion" },
];

export const NAV_SECTIONS = PAGE_SECTIONS.filter((s) =>
  ["more-about", "screenshot", "deposit", "withdrawal", "bonuses", "faq"].includes(
    s.id
  )
);
