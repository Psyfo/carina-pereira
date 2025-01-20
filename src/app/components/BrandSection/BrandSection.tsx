"use client";
import Image from "next/image";
import React from "react";

//import BrandSlider from './components/BrandSlider';

const BrandSection: React.FC = () => {
  return (
    <section className='flex items-center justify-center h-[15vh] bg-cpPink overflow-x-auto px-8 lg:px-[15%]'>
      <div className='flex gap-[65px] items-start lg:justify-center '>
        <Image
          src='/images/brands/swiitch.png'
          alt='Brand Image'
          width={200}
          height={100}
          unoptimized
          className=''
        />
        <Image
          src='/images/brands/gloei.png'
          alt='Brand Image'
          width={120}
          height={100}
          unoptimized
          className=''
        />
        <Image
          src='/images/brands/mac.png'
          alt='Brand Image'
          width={150}
          height={100}
          unoptimized
          className=''
        />
        <Image
          src='/images/brands/essence.png'
          alt='Brand Image'
          width={150}
          height={100}
          unoptimized
          className=''
        />
      </div>
    </section>
  );
};

export default BrandSection;
