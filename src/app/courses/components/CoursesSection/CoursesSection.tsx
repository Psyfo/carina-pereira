'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CoursesSection: React.FC = () => {
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
      className='px-[36px] md:px-[132px] py-[45px] md:py-[142px] md:border-b border-black'
    >
      {/* <h2 className='font-tan-ashford text-[19px] tracking-wider mb-4'>
        courses
      </h2> */}
      {/* Course Cards */}
      <div className='grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(323px,1fr))] gap-[25px]'>
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
        ].map((course, index) => (
          <motion.div
            key={index}
            className='bg-white rounded-2xl p-[14px] border border-black'
            variants={cardVariants}
          >
            <Image
              src={course.image}
              alt='Course Image'
              width={500}
              height={300}
              unoptimized
              className='rounded-lg'
            />

            <h1 className='font-tan-ashford text-[21px] tracking-wider mt-4 mb-12 h-16'>
              {course.title}
            </h1>

            <h5 className='font-inclusive text-[20px] leading-[1.5] mx-4'>
              {course.price}
            </h5>
            {course.duration.map((line, i) => (
              <p
                key={i}
                className='font-inclusive text-[16px] leading-[1.5] mx-4'
              >
                {line}
              </p>
            ))}

            <a href={course.link}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mx-4 border border-black rounded-full mt-4'
              >
                explore
              </motion.button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesSection;
