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
          'dark-gray': 'var(--dark-gray)',
          'light-gray': 'var(--light-gray)',
          slate: 'var(--slate)',
          green: 'var(--green)',
          red: 'var(--red)',
          blue: 'var(--blue)',
          yellow: 'var(--yellow)',
        },
      },
    },
  },
  plugins: [],
}
