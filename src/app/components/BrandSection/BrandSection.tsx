'use client';
import BrandSlider from './components/BrandSlider';
import React from 'react';

const BrandSection: React.FC = () => {
  return (
    <section className='flex items-center justify-center h-[15vh] bg-cpPink px-8 lg:px-[15%]'>
      <BrandSlider></BrandSlider>
    </section>
  );
};

export default BrandSection;
