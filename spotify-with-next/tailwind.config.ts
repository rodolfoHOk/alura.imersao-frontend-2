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
        primary_text: '#ffffff',
        secondary_text: '#b3b3b3',
      },
    },
  },
  plugins: [],
} satisfies Config;
