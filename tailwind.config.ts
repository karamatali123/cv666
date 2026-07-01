import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef7ee",
          100: "#fdecd6",
          200: "#fad5ac",
          300: "#f6b778",
          400: "#f19041",
          500: "#ed7420",
          600: "#de5916",
          700: "#b84314",
          800: "#933618",
          900: "#772f17",
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#006a4e",
          600: "#005a42",
          700: "#004a37",
          800: "#003d2e",
          900: "#002b1b",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(237, 116, 32, 0.25)",
        card: "0 4px 24px rgba(15, 23, 42, 0.06)",
      },
      animation: {
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
