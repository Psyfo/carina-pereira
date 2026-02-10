import MailingListModal from '@/components/MailingListModal/MailingListModal';
import Announcement from '@/components/Announcement/Announcement';

import AboutSection from './components/AboutSection/AboutSection';
import AchievementsSection from './components/AchievementsSection/AchievementsSection';
import BrandSection from './components/BrandSection/BrandSection';
import ContactSection from './components/Contact/Contact';
import CoursesSection from './components/CoursesSection/CoursesSection';
import HeroSection from './components/HeroSection/HeroSection';
import ImageFeedSection from './components/ImageFeedSection/ImageFeedSection';
import OfferingsSection from './components/OfferingsSection/OfferingsSection';
import PromotionSection from './components/PromotionSection/PromotionSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';

export const metadata = {
  title: 'Carina Pereira | Home',
  description:
    'Welcome to Carina Pereira’s official website. Discover courses and offerings in makeup artistry, beauty, and more.',
  icons: '/images/favicon.svg',
  keywords: [
    'Carina Pereira',
    'Makeup Artist',
    'Beauty',
    'Courses',
    'Offerings',
    'Cosmetics',
    'Makeup Academy',
    'Makeup Workshops',
    'Makeup Training',
    'Makeup Courses',
    'Makeup Tutorials',
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
    title: 'Carina Pereira | Home',
    description:
      'Welcome to Carina Pereira’s official website. Discover courses and offerings in makeup artistry, beauty, and more.',
    url: 'https://carinapereira.com',
    images: [
      {
        url: 'https://carinapereira.com/images/landing/hero/hero.png',
        width: 1200,
        height: 630,
        alt: 'Carina Pereira - Makeup Artist',
      },
    ],
  },
  instagram: {
    handle: '@carinapereirainternational',
    site: 'https://www.instagram.com/carinapereirainternational/',
    cardType: 'summary_large_image',
  },
};

export default function Home() {
  return (
    <div>
      <MailingListModal />
      <Announcement />
      <HeroSection />
      <BrandSection />
      <AboutSection />
      <CoursesSection />
      <OfferingsSection />
      <AchievementsSection />
      <TestimonialSection />
      <PromotionSection />
      <ContactSection />
      <section className='flex justify-center items-center mb-4 px-4 md:text-left text-center'>
        <h2 className='font-tan-ashford font-semibold text-xl lowercase tracking-[0.04em]'>
          Follow us on Instagram
        </h2>
      </section>
      <ImageFeedSection />
    </div>
  );
}
