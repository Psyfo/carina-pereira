import './globals.css';
import Announcement from '@/components/Announcement/Announcement';
import ClientProviders from '@/components/ClientProviders';
import Footer from './Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders /> {/* Client-side logic moved here */}
        <Announcement />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
