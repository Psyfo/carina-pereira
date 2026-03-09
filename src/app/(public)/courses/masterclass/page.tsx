import { redirect } from 'next/navigation';

// metadata for the Masterclass page
export const metadata = {
  title: "Carina Pereira | Valentine's Day Makeup Masterclass",
  description:
    "Join Carina for an intimate Valentine's Day makeup masterclass designed to inspire, elevate, and treat you.",
  keywords: [
    'makeup',
    'masterclass',
    'Carina Pereira',
    'valentines day',
    'makeup course',
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
    title: "Carina Pereira | Valentine's Day Makeup Masterclass",
    description:
      "Join Carina for an intimate Valentine's Day makeup masterclass designed to inspire, elevate, and treat you.",
    url: 'https://carinapereira.com/masterclass',
    images: [
      {
        url: 'https://carinapereira.com/images/courses/valentines/hero.png',
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
  redirect('/courses');
};

export default MasterclassPage;
