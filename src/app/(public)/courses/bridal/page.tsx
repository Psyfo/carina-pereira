import React from 'react';

import AboutSection from './components/AboutSection/AboutSection';
import CTASection from './components/CTASection/CTASection';
import HeroSection from './components/HeroSection/HeroSection';
import LearningSection from './components/LearningSection/LearningSection';

export const metadata = {
  title: 'Carina Pereira | Professional Bridal & Beauty Artistry Course',
  description:
    "Join Carina Pereira's Professional Bridal & Beauty Artistry Course. Master flawless bridal makeup techniques and gain the skills to confidently begin working as a professional makeup artist.",
  icons: '/images/favicon.svg',
  keywords: [
    'Carina Pereira',
    'Bridal Makeup Course',
    'Beauty Artistry Course',
    'Professional Bridal Makeup',
    'Makeup Training',
    'Bridal & Beauty',
    'Makeup Artist Course',
  ],
  authors: [{ name: 'Carina Pereira', url: 'https://carinapereira.com' }],
  alternates: {
    canonical: 'https://carinapereira.com/courses/bridal',
  },
  address: {
    street: '13 Drama Street, Somerset West',
    city: 'Cape Town',
    state: 'Western Cape',
    code: '7130',
    country: 'South Africa',
  },
  openGraph: {
    title: 'Carina Pereira | Professional Bridal & Beauty Artistry Course',
    description:
      "Join Carina Pereira's Professional Bridal & Beauty Artistry Course. Master flawless bridal makeup techniques and gain the skills to confidently begin working as a professional makeup artist.",
    url: 'https://carinapereira.com/courses/bridal',
    images: [
      {
        url: 'https://carinapereira.com/images/courses/bridal/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Carina Pereira - Professional Bridal & Beauty Artistry Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://carinapereira.com/images/courses/bridal/hero.jpg'],
  },
};

const BridalCoursePage: React.FC = () => (
  <div>
    <HeroSection />
    <AboutSection />
    <CTASection />
    <LearningSection />
  </div>
);

export default BridalCoursePage;
