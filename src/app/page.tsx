'use client';
import About from './components/About/About';
import AchievementsSection from './components/AchievementsSection/AchievementsSection';
import Announcement from '../components/Announcement/Announcement';
import BrandSection from './components/BrandSection/BrandSection';
import Contact from './components/Contact/Contact';
import CoursesSection from './components/CoursesSection/CoursesSection';
import HeroSection from './components/HeroSection/HeroSection';
import ImageFeed from './components/ImageFeed/ImageFeed';
import MailingListModal from '@/components/MailingListModal/MailingListModal';
import OfferingsSection from './components/OfferingsSection/OfferingsSection';
import Promotion from './components/Promotion/Promotion';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';

export default function Home() {
  return (
    <div>
      <MailingListModal />
      <Announcement />
      <HeroSection />
      <BrandSection />
      <About />
      <CoursesSection />
      <OfferingsSection />
      <AchievementsSection />
      <TestimonialSection />
      <Promotion />
      <Contact />
      <section className='flex items-center justify-center mb-4 px-4 text-center md:text-left'>
        <h2 className='text-xl font-semibold font-tan-ashford tracking-[0.04em] lowercase'>
          Follow us on Instagram
        </h2>
      </section>
      <ImageFeed />
    </div>
  );
}
