import { CoursePageProps } from '@/types/CourseData';

import AboutSection from './AboutSection';
import CTASection from './CTASection';
import HeroSection from './HeroSection';
import LearningSection from './LearningSection';

export default function CoursePage({
  hero,
  about,
  cta,
  learning,
}: CoursePageProps) {
  return (
    <>
      <HeroSection {...hero} />
      <AboutSection {...about} />
      <CTASection {...cta} />
      <LearningSection {...learning} />
      {/* Add more sections as needed */}
    </>
  );
}
