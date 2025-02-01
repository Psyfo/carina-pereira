'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AchievementsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger halfway into the section
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className='flex flex-col items-center justify-center py-[64px] px-[25px] lg:px-[80px]'
    >
      <h1 className='font-tan-ashford font-bold text-[19px] lowercase mb-[50px]'>
        our achievements
      </h1>

      <p className='font-inclusive text-[15px] text-center lowercase mx-[45px] leading-[1.5] mb-[70px] max-w-[627px]'>
        After extensive studies, The founder & owner, Carina Pereira joined the
        ranks of top artists at MAC Cosmetics. This was a dream opportunity
      </p>

      <div className='flex flex-col lg:flex-row bg-white items-center justify-center lg:justify-around gap-[80px] mx-[25px] w-full py-[95px] border border-black'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className='flex flex-col items-center'
        >
          <p className='font-tan-ashford font-bold text-[29px]'>+120</p>
          <p className='font-inclusive text-[22px]'>students</p>
        </motion.div>

        <Image
          src='/images/landing/achievements/heart.png'
          alt='Achievement Image'
          width={500}
          height={300}
          className='w-[54px]'
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className='flex flex-col items-center'
        >
          <p className='font-tan-ashford font-bold text-[29px]'>4</p>
          <p className='font-inclusive text-[22px]'>courses</p>
        </motion.div>

        <Image
          src='/images/landing/achievements/heart.png'
          alt='Achievement Image'
          width={500}
          height={300}
          className='w-[54px]'
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className='flex flex-col items-center'
        >
          <p className='font-tan-ashford font-bold text-[29px]'>13</p>
          <p className='font-inclusive text-[22px]'>years experience</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
