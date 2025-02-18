/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ["Rajdhani"],
      },
      backgroundColor: {
        primary: "#222323",
      },
      colors: {
        primary: "#222323",
        secondary: "#DE3431",
      },
      screens:{
        '3xl':'1920px'
      }
    },
  },
  plugins: [],
};
