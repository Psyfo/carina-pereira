import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      className='hero-section w-full h-[70vh]'
      style={{
        backgroundImage: "url('/images/hero/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Image
        src='/images/hero/logo.svg'
        alt='Hero Image'
        width={100}
        height={100}
        unoptimized
        className='w-[190px] absolute top-[1rem] left-[1rem]'
      />
    </div>
  );
};

export default HeroSection;
