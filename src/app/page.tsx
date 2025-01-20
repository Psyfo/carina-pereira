import About from "./components/About/About";
import Announcement from "./components/Announcement/Announcement";
import BrandSection from "./components/BrandSection/BrandSection";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <Announcement />
      <HeroSection />
      <BrandSection />
      <About />
      <CoursesSection />
    </div>
  );
}
