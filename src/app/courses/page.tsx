import React from 'react';

import CoursesSection from './components/CoursesSection/CoursesSection';
import HeroSection from './components/HeroSection/HeroSection';
import OfferingsSection from './components/OfferingsSection/OfferingsSection';

export const metadata = {
  title: 'Carina Pereira | Courses',
  description:
    'Explore Carina Pereira’s courses in makeup artistry, beauty, and more. Join our community of aspiring makeup artists.',
  icons: '/images/favicon.svg',
  keywords: [
    'Carina Pereira',
    'Makeup Artist',
    'Beauty Courses',
    'Makeup Training',
    'Makeup Workshops',
    'Makeup Academy',
  ],
  authors: [{ name: 'Carina Pereira', url: 'https://carinapereira.com' }],
  openGraph: {
    title: 'Carina Pereira | Courses',
    description:
      'Explore Carina Pereira’s courses in makeup artistry, beauty, and more. Join our community of aspiring makeup artists.',
    url: 'https://carinapereira.com/courses',
    images: [
      {
        url: 'https://carinapereira.com/images/courses/hero/hero.png',
        width: 1200,
        height: 630,
        alt: 'Carina Pereira - Makeup Courses',
      },
    ],
  },
  instagram: {
    handle: '@carinapereirainternational',
    site: 'https://www.instagram.com/carinapereirainternational/',
    cardType: 'summary_large_image',
  },
};

const CoursesPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CoursesSection />
      <OfferingsSection />
    </div>
  );
};

export default CoursesPage;
