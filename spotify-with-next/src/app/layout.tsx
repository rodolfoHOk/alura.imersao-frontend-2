import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import { Header } from '@/components/Header';
import { YourLibrary } from '@/components/YourLibrary';
import { Footer } from '@/components/Footer';

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
        className={`${dmSans.variable} bg-primary_bg text-primary_text font-sans antialiased`}
      >
        <div className="w-screen h-screen flex flex-col">
          <Header />

          <div className="w-full h-full flex flex-row">
            <aside className="w-1/4 h-full min-w-64 p-2 flex flex-col">
              <YourLibrary />
            </aside>

            <main className="w-full h-full py-2 pr-2">{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
