/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        modalScaleIn: 'scaleIn .3s ease-in-out forwards',
        modalScaleOut: 'scaleOut .3s ease-in-out forwards',
      },
      keyframes: {
        scaleIn: {
          from: {
            transform: 'translate(-50%,-50%) scale(0)',
          },
          to: {
            transform: 'translate(-50%,-50%) scale(1)',
          },
        },
        scaleOut: {
          from: {
            transform: 'translate(-50%,-50%) scale(1)',
          },
          to: {
            transform: 'translate(-50%,-50%) scale(0)',
          },
        },
      },
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
