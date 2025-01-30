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
        inverse_bg: '#f0f0f0',
        primary_text: '#ffffff',
        secondary_text: '#b3b3b3',
        inverse_text: '#000000',
        primary_border: '#878787',
        secondary_border: '#ffffff',
        arrow_bg: '#000000',
        arrow_hover_bg: '#333333',
        card_bg: '#181818',
        card_hover_bg: '#252525',
        play_bg: '#1db954',
        card_1: 'rgb(0, 100, 80)',
        card_2: 'rgb(132, 0, 231)',
        card_3: 'rgb(30, 50, 100)',
        card_4: 'rgb(140, 25, 50)',
        card_5: 'rgb(232, 17, 91)',
        card_6: 'rgb(83, 122, 161)',
        card_7: 'rgb(142, 102, 172)',
        card_8: 'rgb(20, 138, 8)',
        card_9: 'rgb(30, 50, 100)',
        card_10: 'rgb(233, 20, 41)',
        card_11: 'rgb(80, 55, 80)',
        card_12: 'rgb(216, 64, 0)',
        card_13: 'rgb(186, 93, 7)',
        card_14: 'rgb(0, 30, 80)',
        card_15: 'rgb(60, 30, 80)',
      },
    },
    fontFamily: {
      sans: ['var(--font-dm-sans)'],
    },
  },
  plugins: [],
} satisfies Config;
