import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        cpCream: '#F5F5F5',
        cpOrange: '#FA7E39',
        cpPink: '#F1A0C5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        inclusive: ['Inclusive Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
