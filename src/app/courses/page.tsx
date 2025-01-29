'use client';
import CoursesSection from './components/CoursesSection/CoursesSection';
import HeroSection from './components/HeroSection/HeroSection';
import OfferingsSection from './components/OfferingsSection/OfferingsSection';
import React from 'react';

const CoursesPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CoursesSection />
      <OfferingsSection />
    </div>
  );
};

export default CoursesPage;
