const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      emerald: colors.emerald,
      accent: '#00E8B6',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
