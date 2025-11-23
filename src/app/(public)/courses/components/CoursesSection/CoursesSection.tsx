'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { isProMakeupPromotionActive } from '@/lib/promotions';

const CoursesSection: React.FC = () => {
  const showPromotion = isProMakeupPromotionActive();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={containerVariants}
      className='px-[36px] md:px-[132px] py-[45px] md:py-[142px] border-black md:border-b'
    >
      {/* <h2 className='mb-4 font-tan-ashford text-[19px] tracking-wider'>
        courses
      </h2> */}
      {/* Course Cards */}
      <div className='gap-[25px] grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(323px,1fr))]'>
        {[
          {
            title: 'pro makeup course',
            price: 'R15000',
            duration: ['2 months full-time', '4 months part-time'],
            image: '/images/courses/courses/courses_pro-makeup.png',
            link: '/courses/pro-makeup',
          },
          {
            title: 'express makeup course',
            price: 'R5500',
            duration: ['6 modules', 'in-person'],
            image: '/images/courses/courses/courses_express-makeup.png',
            link: '/courses/express-makeup',
          },
          {
            title: 'online express makeup course',
            price: 'R4800',
            duration: ['at your own pace', 'online'],
            image: '/images/courses/courses/courses_express-makeup-online.png',
            link: '/courses/express-online',
          },
          {
            title: 'hairstyling course',
            price: 'R3000',
            duration: ['4 modules once a week', 'in-person'],
            image: '/images/courses/courses/courses_hairstyling.png',
            link: '/courses/hairstyling',
          },
        ].map((course, index) => {
          const isProMakeup = course.title === 'pro makeup course';
          const displayPrice =
            isProMakeup && showPromotion
              ? 'R7 500'
              : course.price.replace('R', 'R ');
          const originalPrice = isProMakeup && showPromotion ? 'R15 000' : null;

          return (
            <motion.div
              key={index}
              className='relative bg-white p-[14px] border border-black rounded-2xl'
              variants={cardVariants}
            >
              {isProMakeup && showPromotion && (
                <div className='top-[20px] right-[20px] z-10 absolute bg-cpOrange px-[12px] py-[6px] rounded-full font-inter font-bold text-[10px] text-white'>
                  LIMITED TIME
                </div>
              )}
              <Image
                src={course.image}
                alt='Course Image'
                width={500}
                height={300}
                unoptimized
                className='rounded-lg'
              />

              <h1 className='mt-4 mb-12 h-16 font-tan-ashford text-[21px] tracking-wider'>
                {course.title}
              </h1>

              <div className='mx-4 font-inclusive'>
                {originalPrice && (
                  <div className='flex items-center gap-2'>
                    <h5 className='text-[20px] text-gray-500 line-through'>
                      {originalPrice}
                    </h5>
                    <h5 className='font-bold text-[20px] text-cpMagenta'>
                      {displayPrice}
                    </h5>
                  </div>
                )}
                {!originalPrice && (
                  <h5 className='text-[20px] leading-[1.5]'>{displayPrice}</h5>
                )}
              </div>
              {course.duration.map((line, i) => (
                <p
                  key={i}
                  className='mx-4 font-inclusive text-[16px] leading-[1.5]'
                >
                  {line}
                </p>
              ))}

              <a href={course.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='inline-block bg-cpPink mx-4 mt-4 px-[35px] py-[8px] border border-black rounded-full font-inclusive text-[16.5px] leading-[1.5]'
                >
                  explore
                </motion.button>
              </a>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CoursesSection;
