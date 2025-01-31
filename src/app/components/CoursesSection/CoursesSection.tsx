'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CoursesSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      className='flex flex-col lg:flex-row bg-cpCream border-b-2 border-black'
      ref={ref}
    >
      <div className='w-full bg-[#C4C4C4] lg:hidden flex justify-center items-center'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/ywcT6KwFTho'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full h-full aspect-[9/16] object-cover'
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        ></iframe>
      </div>

      {/* Course List */}
      <motion.div
        className='lg:w-3/5'
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {[
          {
            title: 'pro make-up course',
            description: `Gain an internationally-recognized certificate, hands-on work
              experience, and job placement assistance. You'll also have the
              chance to assist Carina on brand shoots and weddings.`,
            link: '/courses/pro-makeup',
          },
          {
            title: 'express make-up course',
            description: `Perfect for beginners or those short on time, this course covers
              essential techniques for matric dances, bridal looks, photo shoots,
              and more. Gain confidence in makeup application with expert
              guidance.`,
            link: '/courses/express-makeup',
          },
          {
            title: 'online express make-up course',
            description: `Gain an internationally-recognized certificate, hands-on work
              experience, and job placement assistance. You'll also have the
              chance to assist Carina on brand shoots and weddings.`,
            link: '/courses/express-online',
          },
        ].map((course, index) => (
          <motion.div
            key={index}
            className='py-[50px] px-[30px] lg:px-0 lg:pl-[50px] lg:pr-[300px] border-b-2 border-black'
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
          >
            <h1 className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase mb-[35px]'>
              {course.title}
            </h1>
            <p className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'>
              {course.description}
            </p>
            <Link href={course.link}>
              <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
                explore
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Course Video */}
      <div className='w-2/5 bg-[#C4C4C4] hidden lg:block border-l-2 border-black'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/ywcT6KwFTho'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full h-full aspect-[9/16] object-cover'
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default CoursesSection;
