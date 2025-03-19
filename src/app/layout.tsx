"use client";
import "./globals.css";
import Announcement from "@/components/Announcement/Announcement";
import Footer from "./Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { initAnalytics } from "../lib/analytics";
import { useTrackPageView } from "./hooks/useTrackPageView";
import { metadata } from "./metadata";

// Re-export metadata
export { metadata };

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Track page views on route changes
  useTrackPageView();

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
