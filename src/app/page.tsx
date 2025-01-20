import About from "./components/About/About";
import AchievementsSection from "./components/AchievementsSection/AchievementsSection";
import Announcement from "./components/Announcement/Announcement";
import BrandSection from "./components/BrandSection/BrandSection";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import HeroSection from "./components/HeroSection/HeroSection";
import OfferingsSection from "./components/OfferingsSection/OfferingsSection";

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
    </div>
  );
}
