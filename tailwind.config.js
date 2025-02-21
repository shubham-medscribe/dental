/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ["Rajdhani"],
        arial: ["Arial","sans-serif"],
      },
      backgroundColor: {
        primary: "#222323",
      },
      screens:{
        '3xl':'1920px'
      }
    },
  },
  plugins: [],
};
