import AboutSection from './components/AboutSection/AboutSection';
import HeroSection from './components/HeroSection/HeroSection';
import LearningSection from './components/LearningSection/LearningSection';
import React from 'react';

const ExpressOnlinePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <LearningSection />
    </div>
  );
};

export default ExpressOnlinePage;
