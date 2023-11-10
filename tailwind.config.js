/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        epic_blue: "#537BBC",
        epic_green: "#52B586",
        epic_yellow: "#EEAA3B",
        epic_red: "#F35849",
      },
      fontFamily: {
        title: ['Open Sans', "sans-serif"],
        content: ['"Lora"', "serif"],
        highlight: ['"Raleway"', "sans-serif"]
      },
    },
  },
  plugins: [],
}

