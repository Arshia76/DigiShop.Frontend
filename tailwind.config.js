/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        custom: {
          gray: 'var(--gray)',
          slate: 'var(--slate)',
          black: 'var(--black)',
          'light-gray': 'var(--light-gray)',
          blue: 'var(--blue)',
          green: 'var(--green)',
          yellow: 'var(--yellow)',
          red: 'var(--red)',
        },
      },
      backgroundImage: {
        hero: "url('/src/assets/Image/hero.jpg')",
      },
    },
  },
  plugins: [],
}
