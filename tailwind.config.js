/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#C8E0CA",
        third: "#1C0030",
        fourth: "#ffffff",
        yellow: "#F7B318",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        bodyheading: "#F7B318",
        bodytext: "#FFFFFFB3",
      },
      boxShadow: {
        dark: "0px 0px 4px #000000",
        light: "0px 0px 4px #ffffff",
        cardShadow: "0px 0px 10px 2px #FFC700",
        customGreen: "0 4px 6px rgba(41, 244, 153, 0.5)",
        customPink: "0 5px 20px rgba(250, 129, 232, 0.3)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
};
