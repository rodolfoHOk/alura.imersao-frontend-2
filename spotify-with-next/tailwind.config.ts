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
        primary_bg: '#000000',
        secondary_bg: '#121212',
        tertiary_bg: '#1f1f1f',
        primary_text: '#ffffff',
        secondary_text: '#b3b3b3',
        primary_border: '#878787',
        secondary_border: '#ffffff',
      },
    },
  },
  plugins: [],
} satisfies Config;
