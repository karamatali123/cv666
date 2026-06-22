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
          500: "#006a4e",
          600: "#005a42",
          700: "#004a37",
        },
      },
    },
  },
  plugins: [],
};

export default config;
