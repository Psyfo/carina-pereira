import React from 'react';

import AboutSection from './components/AboutSection/AboutSection';
import CTA from './components/CTASection/CTASection';
import HeroSection from './components/HeroSection/HeroSection';
import LearningSection from './components/LearningSection/LearningSection';

export const metadata = {
  title: 'Carina Pereira | Pro Makeup Course',
  description:
    "Join Carina Pereira's Pro Makeup Course to master professional makeup techniques. Enroll now for expert training.",
  icons: '/images/favicon.svg',
  keywords: [
    'Carina Pereira',
    'Pro Makeup Course',
    'Makeup Training',
    'Professional Makeup',
    'Makeup Techniques',
  ],
  authors: [{ name: 'Carina Pereira', url: 'https://carinapereira.com' }],
  address: {
    street: '13 Drama Street, Somerset West',
    city: 'Cape Town',
    state: 'Western Cape',
    code: '7130',
    country: 'South Africa',
  },
  openGraph: {
    title: 'Carina Pereira | Pro Makeup Course',
    description:
      "Join Carina Pereira's Pro Makeup Course to master professional makeup techniques. Enroll now for expert training.",
    url: 'https://carinapereira.com/courses/pro-makeup',
    images: [
      {
        url: 'https://carinapereira.com/images/courses/pro-makeup/hero.png',
        width: 1200,
        height: 630,
        alt: 'Carina Pereira - Pro Makeup Course',
      },
    ],
  },
  instagram: {
    handle: '@carinapereirainternational',
    site: 'https://www.instagram.com/carinapereirainternational/',
    cardType: 'summary_large_image',
  },
};

const ProMakeupPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CTA />
      <LearningSection />
    </div>
  );
};

export default ProMakeupPage;
