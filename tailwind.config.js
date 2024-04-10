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
        lightgray: "#F1F5F8",
      },
    },
  },
  plugins: [],
};
