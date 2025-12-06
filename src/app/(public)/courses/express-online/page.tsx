import React from 'react';

import AboutSection from './components/AboutSection/AboutSection';
import CTA from './components/CTASection/CTASection';
import HeroSection from './components/HeroSection/HeroSection';
import LearningSection from './components/LearningSection/LearningSection';

export const metadata = {
  title: 'Carina Pereira | Online Express Course',
  description:
    "Join Carina Pereira's Online Express Course to master professional makeup techniques. Enroll now for expert training.",
  icons: '/images/favicon.svg',
  keywords: [
    'Carina Pereira',
    'Online Express Course',
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
    title: 'Carina Pereira | Online Express Course',
    description:
      "Join Carina Pereira's Online Express Course to master professional makeup techniques. Enroll now for expert training.",
    url: 'https://carinapereira.com/courses/express-online',
    images: [
      {
        url: 'https://carinapereira.com/images/courses/express-online/hero.png',
        width: 1200,
        height: 630,
        alt: 'Carina Pereira - Online Express Course',
      },
    ],
  },
  instagram: {
    handle: '@carinapereirainternational',
    site: 'https://www.instagram.com/carinapereirainternational/',
    cardType: 'summary_large_image',
  },
};

const ExpressOnlinePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CTA />
      <LearningSection />
    </div>
  );
};

export default ExpressOnlinePage;
