'use client';
import GallerySection from './components/GallerySection/GallerySection';
import HeroSection from './components/HeroSection/HeroSection';
import React from 'react';
import ServicesSection from './components/ServicesSection/ServicesSection';

const Page: React.FC = ({}) => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
    </div>
  );
};

export default Page;
