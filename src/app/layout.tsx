import './globals.css';
import Announcement from '@/components/Announcement/Announcement';
import Footer from './Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Carina Pereira',
  description: 'Personal website of Carina Pereira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <Announcement />
        {children}
        <Footer />
      </body>
    </html>
  );
}
