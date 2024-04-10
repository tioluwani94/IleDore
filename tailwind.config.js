/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Gill", "sans-serif"],
      serif: ["Cormorant Garamond", "serif"],
    },
    extend: {
      colors: {
        box: "#E6E6E6",
        divider: "#CECECE",
        lightgray: "#F1F5F8",
      },
    },
  },
  plugins: [],
};
