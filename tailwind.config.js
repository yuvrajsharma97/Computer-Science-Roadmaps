/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: "0px 0px 4px #000000",
        light: "0px 0px 4px #ffffff",
        cardShadow: "0px 0px 10px 2px #FFC700",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroImage: "url('/assets/heroImage.jpg')",
        darkDesktopBg: "url('/assets/image2desktop.jpg')",
        darkMobileBg: "url('/assets/image2mobile.jpg')",
        lightDesktopBg: "url('/assets/image1desktop.jpg')",
        lightMobileBg: "url('/assets/image1mobile.jpg')",
      },
      screens: {
        xs: { min: "300px", max: "640px" },
      },
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        third: "#00ADB5",
        fourth: "#EEEEEE",
        lightbg: "#f7fcfc",
        bright1: "#FF3D00",
        bright2: "#FFC700",
        cardbg1: "#dbedf1",
        cardbg2: "#f4f8f7",
      },
    },
  },
  plugins: [require("daisyui")],
};
