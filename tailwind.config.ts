import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9FAFB", // Light Gray for Background
        "text-primary": "#1F2937", // Dark Gray for Text
        accent: "#2563EB", // Blue for Buttons and Highlights
        "overlay-light": "#000000", // Light Overlay Color for Background Image
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
