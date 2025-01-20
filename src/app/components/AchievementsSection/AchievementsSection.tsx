"use client";
import Image from "next/image";
import React from "react";

const AchievementsSection: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center py-[64px] px-[25px] lg:px-[80px]'>
      <h1 className='font-bold text-[19px lowercase] mb-[50px]'>
        our achievements
      </h1>

      <p className='font-inclusive text-[15px] lowercase mx-[45px] leading-[1.5] mb-[70px]'>
        After extensive studies, The founder & owner, Carina Pereira joined the
        ranks of top artists at MAC Cosmetics. This was a dream opportunity
      </p>

      <div className='flex flex-col lg:flex-row bg-white items-center justify-center lg:justify-around gap-[80px] mx-[25px] w-full py-[95px] border border-black'>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-[29px]'>+120</p>
          <p className='font-inclusive text-[22px]'>students</p>
        </div>

        <Image
          src='/images/achievements/heart.png'
          alt='Achievement Image'
          width={500}
          height={300}
          className='w-[54px]'
        />

        <div className='flex flex-col items-center'>
          <p className='font-bold text-[29px]'>4</p>
          <p className='font-inclusive text-[22px]'>courses</p>
        </div>

        <Image
          src='/images/achievements/heart.png'
          alt='Achievement Image'
          width={500}
          height={300}
          className='w-[54px]'
        />

        <div className='flex flex-col items-center'>
          <p className='font-bold text-[29px]'>13</p>
          <p className='font-inclusive text-[22px]'>years experience</p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
