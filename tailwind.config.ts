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
  },
  },
  plugins: [],
}

export default config
