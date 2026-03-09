import React from 'react';

import AboutSection from './components/AboutSection/AboutSection';
import CTA from './components/CTASection/CTASection';
import HeroSection from './components/HeroSection/HeroSection';
import LearningSection from './components/LearningSection/LearningSection';

export const metadata = {
  title: 'Carina Pereira | Hairstyling Course',
  description:
    "Join Carina Pereira's Hairstyling Course to master professional hairstyling techniques. Enroll now for expert training.",
  icons: '/images/favicon.svg',
  keywords: [
    'Carina Pereira',
    'Hairstyling Course',
    'Hairstyling Training',
    'Professional Hairstyling',
    'Hairstyling Techniques',
  ],
  authors: [{ name: 'Carina Pereira', url: 'https://carinapereira.com' }],
  alternates: {
    canonical: 'https://carinapereira.com/courses/hairstyling',
  },
  address: {
    street: '13 Drama Street, Somerset West',
    city: 'Cape Town',
    state: 'Western Cape',
    code: '7130',
    country: 'South Africa',
  },
  openGraph: {
    title: 'Carina Pereira | Hairstyling Course',
    description:
      "Join Carina Pereira's Hairstyling Course to master professional hairstyling techniques. Enroll now for expert training.",
    url: 'https://carinapereira.com/courses/hairstyling',
    images: [
      {
        url: 'https://carinapereira.com/images/courses/hairstyling/hero.png',
        width: 1200,
        height: 630,
        alt: 'Carina Pereira - Hairstyling Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://carinapereira.com/images/courses/hairstyling/hero.png'],
  },
};

const HairstylingPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CTA />
      <LearningSection />
    </div>
  );
};

export default HairstylingPage;
