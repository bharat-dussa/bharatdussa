const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./src/components/**/*.{js,ts,jsx,tsx}','./src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      scale: ['focus-within'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      gray: colors.coolGray
    }
  },
}
