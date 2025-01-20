'use client';
import Image from 'next/image';
import React from 'react';

//import BrandSlider from './components/BrandSlider';

const BrandSection: React.FC = () => {
  return (
    <section className='flex items-center justify-center w-[100vw] h-[15vh] bg-cpPink overflow-x-auto'>
      <div className='flex gap-4 items-start w-max'>
        <div className='flex items-center  '>
          <Image
            src='/images/brands/swiitch.png'
            alt='Brand Image'
            width={500}
            height={500}
            unoptimized
            className='w-full'
          />
        </div>
        <div className='flex items-center  '>
          <Image
            src='/images/brands/gloei.png'
            alt='Brand Image'
            width={500}
            height={500}
            unoptimized
            className='w-full'
          />
        </div>
        <div className='flex items-center  '>
          <Image
            src='/images/brands/mac.png'
            alt='Brand Image'
            width={500}
            height={500}
            unoptimized
            className='w-full'
          />
        </div>
        <div className='flex items-center  '>
          <Image
            src='/images/brands/essence.png'
            alt='Brand Image'
            width={500}
            height={500}
            unoptimized
            className='w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
