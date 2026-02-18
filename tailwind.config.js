/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        boxdark: 'rgba(var(--boxdark))',
        venatusred: 'hsl(var(--venatus-red))',
        gray: colors.gray,
      },
    },
  },
  plugins: [],
}

