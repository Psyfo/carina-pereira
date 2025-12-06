import { notFound } from 'next/navigation';
import React from 'react';

// metadata for the Masterclass page
export const metadata = {
  title: 'Carina Pereira | Masterclass',
  description:
    'Join our Masterclass to elevate your makeup skills with expert guidance.',
  keywords: ['makeup', 'masterclass', 'Carina Pereira', 'makeup course'],
  authors: [{ name: 'Carina Pereira', url: 'https://carinapereira.com' }],
  address: {
    street: '13 Drama Street, Somerset West',
    city: 'Cape Town',
    state: 'Western Cape',
    code: '7130',
    country: 'South Africa',
  },
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
  notFound();
  return null;
};

export default MasterclassPage;
