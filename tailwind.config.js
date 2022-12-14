/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary : "violet-600"
      },
      fontFamily : {
        "playfair" : ['Playfair Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}