/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "270px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        blur: "e3f2fd",
        lightSlate: "#a8b2d1",
        bgColor: "#0a192f",
        primary: "#ccd6f6",
        secondary: "#64ffda",
        bigH: "#ccd6f6",
        aboutColor: "#8892b0",
        primaryLight: "#8892b0",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        navyShadow: "rgba(2,12,27,0.7)",
      },
      fontFamily: {
        calibre: "Calibre",
        nav: '"SF Mono" "Fira Code","Fira Mono","Roboto Mono",monospace',
      },
    },
  },
  plugins: [],
};
