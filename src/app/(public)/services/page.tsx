import React from 'react';
import GallerySection from './components/GallerySection/GallerySection';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';

export const metadata = {
  title: 'Carina Pereira | Makeup & Beauty Services',
  description:
    'Explore professional makeup and beauty services by Carina Pereira in Cape Town. Book bridal, editorial, and special occasion looks.',
  icons: '/images/favicon.svg',
  keywords: [
    'Carina Pereira',
    'Makeup Artist',
    'Makeup Services',
    'Bridal Makeup',
    'Beauty Services',
    'Cape Town Makeup Artist',
    'Professional Makeup',
  ],
  authors: [{ name: 'Carina Pereira', url: 'https://carinapereira.com' }],
  alternates: {
    canonical: 'https://carinapereira.com/services',
  },
  openGraph: {
    title: 'Carina Pereira | Makeup & Beauty Services',
    description:
      'Explore professional makeup and beauty services by Carina Pereira in Cape Town. Book bridal, editorial, and special occasion looks.',
    url: 'https://carinapereira.com/services',
    images: [
      {
        url: 'https://carinapereira.com/images/services/hero/hero.png',
        width: 1200,
        height: 630,
        alt: 'Carina Pereira - Makeup & Beauty Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://carinapereira.com/images/services/hero/hero.png'],
  },
};

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
    </div>
  );
};

export default Page;
