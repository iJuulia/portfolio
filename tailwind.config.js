/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["selector"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateColumns: {
        auto300: "repeat(auto-fit, minmax(300px, 1fr))",
        auto500: "repeat(auto-fit, minmax(500px, 1fr))",
        fr: "1fr 1fr",
      },
    },
  },
  plugins: [],
};
