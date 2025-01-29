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
        inclusive: ['Inclusive Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'tan-ashford': ['Tan Ashford', 'sans-serif'],
      },
      fontSize: {
        base: '16px', // Change the base font size to 18px
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
