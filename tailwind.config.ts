import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      container: {
        padding: {
          DEFAULT: "15px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Figtree Variable", "sans-serif"],
      },
      fontWeight: {
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      extend: {
        colors: {
          primary: "#F6E8EA",
          secondary: "#22181C",
          accent: "#EF626C"

        },
      },
    },
  },
  plugins: [],
};
export default config;
