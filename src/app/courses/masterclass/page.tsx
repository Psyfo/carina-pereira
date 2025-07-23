'use client';
import React from 'react';

import AboutSection from './components/AboutSection/AboutSection';
import CTA from './components/CTASection/CTASection';
import HeroSection from './components/HeroSection/HeroSection';

// metadata for the Masterclass page
export const metadata = {
  title: 'Carina Pereira | Masterclass',
  description:
    'Join our Masterclass to elevate your makeup skills with expert guidance.',
  keywords: ['makeup', 'masterclass', 'Carina Pereira', 'makeup course'],
  authors: [{ name: 'Carina Pereira', url: 'https://carinapereira.com' }],
  openGraph: {
    title: 'Carina Pereira | Masterclass',
    description: "Join our masterclass and celebrate Women's Day.",
    url: 'https://carinapereira.com/masterclass',
    images: [
      {
        url: 'https://carinapereira.com/images/courses/masterclass/hero.png',
        alt: 'Masterclass Hero Image',
      },
    ],
  },
  instagram: {
    handle: '@carinapereirainternational',
    site: 'https://www.instagram.com/carinapereirainternational/',
    cardType: 'summary_large_image',
  },
};

const MasterclassPage: React.FC = () => {
  return (
    <div className='pb-[200px]'>
      <HeroSection />
      <AboutSection />
      <CTA />
    </div>
  );
};

export default MasterclassPage;
