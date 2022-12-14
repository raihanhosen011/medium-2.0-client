/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#1A8917",
      },
      fontFamily : {
        "playfair" : ['Playfair Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}