'use client';
import AboutSection from './components/AboutSection/AboutSection';
import CTA from './components/CTASection/CTASection';
import HeroSection from './components/HeroSection/HeroSection';
import React from 'react';

const MasterclassPage: React.FC = () => {
  return (
    <div className='pb-[200px]'>
      <HeroSection />
      <AboutSection />
      <CTA />
    </div>
  );
};

export default MasterclassPage;
