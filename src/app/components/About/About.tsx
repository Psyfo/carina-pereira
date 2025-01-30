import Link from 'next/link';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const About: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center lg:gap-[60px] bg-cpCream lg:border-t-2 lg:border-b-2 lg:border-black'>
      <div
        className="w-[100vw] h-[80vh] lg:h-[100vh] bg-[url('/images/landing/about/about.png')] lg:bg-[url('/images/landing/about/about-lg.png')] bg-center
        bg-cover bg-cpCream lg:border-r-2 border-black"
      ></div>
      <div className='px-[26px] lg:px-0 lg:pr-[200px] pt-[73px] lg:pt-[100px] pb-[80px] '>
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-[0.04rem] lowercase mb-[54]'>
          about carina
        </h1>
        <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
          After extensive studies, The founder & owner, Carina Pereira joined
          the ranks of top artists at MAC Cosmetics. This was a dream
          opportunity and contributed to her already extensive skill-set. Her
          loyalty to Mac cosmetics didn't go unnoticed, and she diligently
          worked her way up to an elite position on the events team. A pinnacle
          in the career of any make-up artist.
        </p>
        <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
          With experiences ranging from fashion weeks and on-set events, to
          Music videos and other occasions for local celebrities, the sky became
          the limit for this very talented young make-up artist.
        </p>
        <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
          Also during her time at Mac cosmetics, she was exposed to the values
          of teaching. Given the opportunity to host/teach Mac technique
          classes, she found that she had a natural talent for conveying the art
          of make-up artistry to young wanna-be artists in a profoundly unique
          way.
        </p>
        <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
          She found her passion for shaping the talents of others as equally
          important to living out her own, and her journey with Mac cosmetics
          came to an amicable end. when she decided to pursue her dream of
          owning and operating her own make-up school.
        </p>

        <Link href='/services'>
          <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mb-[80px] border border-black rounded-full'>
            view services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
