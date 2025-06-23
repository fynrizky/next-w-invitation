// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}', 
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        bahasaFont: ['Dancing Script', 'cursive'],
        //Dancing Script, Parisienne, Great Vibes
        arabicFont: ['Amiri', 'serif'],
    },
       keyframes: {
        'rise-fade': {
          '0%': {
            transform: 'translateY(15px)',
            opacity: '0',
          },
          '20%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
          '40%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
          '60%': {
            transform: 'translateY(0px)',  
            opacity: '1',
          },
          '70%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
          '80%': {
            transform: 'translateY(0px)',
            opacity: '0.8',
          },
          '85%': {
            transform: 'translateY(0px)',
            opacity: '0.6',
          },
          '90%': {
            transform: 'translateY(0px)',
            opacity: '0.4',
          },
          '95%': {
            transform: 'translateY(0px)',

            opacity: '0.2',
          },
          '100%': {
            transform: 'translateY(0px)',

            opacity: '0',
          },
        },
      },
      animation: {
        'rise-fade': 'rise-fade 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
