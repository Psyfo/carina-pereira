import type { Config } from 'tailwindcss';

/* eslint-disable @typescript-eslint/no-require-imports */

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cpCream: '#FFFEF3',
        cpOrange: '#FA7E39',
        cpPink: '#F1A0C5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        inclusive: ['Inclusive Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
