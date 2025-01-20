import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className='hero-section w-full h-[80vh] md:h-[100vh] bg-[url("/images/hero/hero.png")] md:bg-[url("/images/hero/hero-md.png")] bg-cover bg-no-repeat bg-center'>
      <Image
        src='/images/hero/logo.png'
        alt='Hero Image'
        width={100}
        height={100}
        unoptimized
        className='w-[190px] lg:w-[284px] absolute top-[3rem] left-[1.5rem]'
      />
    </div>
  );
};

export default HeroSection;
