import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

config.autoAddCss = false;
library.add(fas);

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Spotify Imersão',
  description: 'Spotify Clone - Imersão Frontend Alura',
  icons: {
    icon: '/assets/icons/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} bg-primary_bg text-primary_text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
