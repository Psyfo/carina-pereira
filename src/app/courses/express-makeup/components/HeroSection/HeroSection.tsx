import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className='relative hero-section w-full h-[80vh] md:h-[100vh] bg-[url("/images/courses/express-makeup/hero.png")] md:bg-[url("/images/courses/express-makeup/hero-md.png")] bg-cover bg-no-repeat bg-center'>
      <Link href='/'>
        <Image
          src='/images/courses/hero/logo.png'
          alt='Hero Image'
          width={100}
          height={100}
          unoptimized
          className='w-[190px] lg:w-[284px] absolute top-[3rem] left-[1.5rem]'
        />
      </Link>
      <div className='absolute left-[40px] bottom-[70px] font-tan-ashford text-[40px] md:text-[47px] text-white tracking-wider lowercase'>
        express make-up <br /> course
      </div>
    </div>
  );
};

export default HeroSection;
