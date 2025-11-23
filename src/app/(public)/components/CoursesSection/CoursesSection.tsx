'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { isProMakeupPromotionActive } from '@/lib/promotions';

const CoursesSection: React.FC = () => {
  const showPromotion = isProMakeupPromotionActive();

  return (
    <section className='flex lg:flex-row flex-col bg-cpCream border-black border-b-2'>
      <div className='lg:hidden flex justify-center items-center bg-[#C4C4C4] w-full'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/ywcT6KwFTho'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full h-full object-cover aspect-[9/16]'
          style={{
            maxWidth: '100%', // Adjust this to match the video's width
            maxHeight: '100%', // Adjust this to match the video's height
          }}
        ></iframe>
      </div>

      {/* Course List */}
      <div className='lg:w-3/5'>
        <div className='relative px-[30px] lg:px-0 py-[50px] lg:pr-[300px] lg:pl-[50px] border-black border-b-2'>
          {showPromotion && (
            <div className='top-[15px] right-[15px] absolute bg-cpMagenta px-[15px] py-[6px] rounded-full font-inter font-bold text-[11px] text-white'>
              50% OFF
            </div>
          )}
          <motion.h1
            className='mb-[35px] font-tan-ashford font-bold text-[19px] lowercase tracking-[4%]'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            pro make-up <br /> course
          </motion.h1>

          {showPromotion && (
            <motion.p
              className='mb-[15px] font-inclusive font-bold text-[15px] text-cpMagenta leading-[1.5]'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              🎉 Limited Time: Only R7 500 (was R15 000) until November 30th!
            </motion.p>
          )}
          <motion.p
            className='font-inclusive text-[15px] leading-[1.5]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            why choose this course?
          </motion.p>
          <motion.p
            className='mb-[30px] font-inclusive text-[15px] leading-[1.5]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Gain an internationally-recognized certificate, hands-on work
            experience, and job placement assistance. You&apos;ll also have the
            chance to assist Carina on brand shoots and weddings.
          </motion.p>

          <Link href='/courses/pro-makeup'>
            <button className='bg-cpPink px-[35px] py-[8px] border border-black rounded-full font-inclusive text-[16.5px] leading-[1.5]'>
              explore
            </button>
          </Link>
        </div>

        <div className='px-[30px] lg:px-0 py-[50px] lg:pr-[300px] lg:pl-[50px] border-black border-b-2'>
          <motion.h1
            className='mb-[35px] font-tan-ashford font-bold text-[19px] lowercase tracking-[4%]'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            express make-up <br /> course
          </motion.h1>

          <motion.p
            className='font-inclusive text-[15px] leading-[1.5]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Earn an internationally recognized certificate and master the basics
            of makeup artistry.
          </motion.p>
          <motion.p
            className='font-inclusive text-[15px] leading-[1.5]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            why choose this course?
          </motion.p>
          <motion.p
            className='mb-[30px] font-inclusive text-[15px] leading-[1.5]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Perfect for beginners or those short on time, this course covers
            essential techniques for matric dances, bridal looks, photo shoots,
            and more. Gain confidence in makeup application with expert
            guidance.
          </motion.p>

          <Link href='/courses/express-makeup'>
            <button className='bg-cpPink px-[35px] py-[8px] border border-black rounded-full font-inclusive text-[16.5px] leading-[1.5]'>
              explore
            </button>
          </Link>
        </div>

        <div className='px-[30px] lg:px-0 py-[50px] lg:pr-[300px] lg:pl-[50px]'>
          <motion.h1
            className='mb-[35px] font-tan-ashford font-bold text-[19px] lowercase tracking-[4%]'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            online express make-up <br /> course
          </motion.h1>

          <motion.p
            className='font-inclusive text-[15px] leading-[1.5]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            why choose this course?
          </motion.p>
          <motion.p
            className='mb-[30px] font-inclusive text-[15px] leading-[1.5]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Gain an internationally-recognized certificate, hands-on work
            experience, and job placement assistance. You&apos;ll also have the
            chance to assist Carina on brand shoots and weddings.
          </motion.p>

          <Link href='/courses/express-online'>
            <button className='bg-cpPink px-[35px] py-[8px] border border-black rounded-full font-inclusive text-[16.5px] leading-[1.5]'>
              explore
            </button>
          </Link>
        </div>
      </div>

      {/* Course Video */}
      <div className='hidden lg:block bg-[#C4C4C4] border-black border-l-2 w-2/5'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/ywcT6KwFTho'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full h-full object-cover aspect-[9/16]'
          style={{
            maxWidth: '100%', // Adjust this to match the video's width
            maxHeight: '100%', // Adjust this to match the video's height
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default CoursesSection;
