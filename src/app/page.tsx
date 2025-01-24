import About from './components/About/About';
import AchievementsSection from './components/AchievementsSection/AchievementsSection';
import Announcement from './components/Announcement/Announcement';
import BrandSection from './components/BrandSection/BrandSection';
import Contact from './components/Contact/Contact';
import CoursesSection from './components/CoursesSection/CoursesSection';
import HeroSection from './components/HeroSection/HeroSection';
import ImageFeed from './components/ImageFeed/ImageFeed';
import OfferingsSection from './components/OfferingsSection/OfferingsSection';
import Promotion from './components/Promotion/Promotion';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';

export default function Home() {
  return (
    <div>
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
      <ImageFeed />
    </div>
  );
}
