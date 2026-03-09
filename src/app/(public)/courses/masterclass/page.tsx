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
  alternates: {
    canonical: 'https://carinapereira.com/courses/masterclass',
  },
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
  twitter: {
    card: 'summary_large_image',
    images: ['https://carinapereira.com/images/courses/valentines/hero.png'],
  },
};

const MasterclassPage: React.FC = () => {
  redirect('/courses');
};

export default MasterclassPage;
