'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import NumberAnimation from '@/components/NumberAnimation/NumberAnimation';

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
      className='flex flex-col justify-center items-center px-[25px] lg:px-[80px] py-[64px]'
    >
      <h1 className='mb-[50px] font-tan-ashford font-bold text-[19px] lowercase'>
        our achievements
      </h1>

      <p className='mx-[45px] mb-[70px] max-w-[627px] font-inclusive text-[15px] text-center lowercase leading-[1.5]'>
        After extensive studies, The founder & owner, Carina Pereira joined the
        ranks of top artists at MAC Cosmetics. This was a dream opportunity
      </p>

      <div className='flex lg:flex-row flex-col justify-center lg:justify-around items-center gap-[80px] bg-white mx-[25px] py-[95px] border border-black w-full'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className='flex flex-col items-center'
        >
          <div className='flex font-tan-ashford font-bold text-[29px]'>
            +
            <NumberAnimation target={120} duration={4000} start={inView} />
          </div>
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
          <div className='flex font-tan-ashford font-bold text-[29px]'>
            +
            <NumberAnimation target={4} duration={4000} start={inView} />
          </div>
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
          <div className='flex font-tan-ashford font-bold text-[29px]'>
            +
            <NumberAnimation target={13} duration={4000} start={inView} />
            {/* Pass the start state */}
          </div>
          <p className='font-inclusive text-[22px]'>years experience</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
