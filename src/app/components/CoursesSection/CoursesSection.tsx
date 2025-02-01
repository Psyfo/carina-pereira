import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

/* eslint-disable react/no-unescaped-entities */

const CoursesSection: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row bg-cpCream border-b-2 border-black'>
      <div className='w-full  bg-[#C4C4C4] lg:hidden flex justify-center items-center'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/ywcT6KwFTho'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full h-full aspect-[9/16] object-cover'
          style={{
            maxWidth: '100%', // Adjust this to match the video's width
            maxHeight: '100%', // Adjust this to match the video's height
          }}
        ></iframe>
      </div>

      {/* Course List */}
      <div className='lg:w-3/5'>
        <div className='py-[50px] px-[30px] lg:px-0 lg:pl-[50px] lg:pr-[300px] border-b-2 border-black'>
          <motion.h1
            className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase mb-[35px]'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            pro make-up <br /> course
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
            className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Gain an internationally-recognized certificate, hands-on work
            experience, and job placement assistance. You'll also have the
            chance to assist Carina on brand shoots and weddings.
          </motion.p>

          <Link href='/courses/pro-makeup'>
            <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
              explore
            </button>
          </Link>
        </div>

        <div className='py-[50px] px-[30px] lg:px-0 lg:pl-[50px] lg:pr-[300px] border-b-2 border-black'>
          <motion.h1
            className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase mb-[35px]'
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
            className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'
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
            <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
              explore
            </button>
          </Link>
        </div>

        <div className='py-[50px] px-[30px] lg:px-0 lg:pl-[50px] lg:pr-[300px]'>
          <motion.h1
            className='font-tan-ashford font-bold text-[19px] tracking-[4%] lowercase mb-[35px]'
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
            className='font-inclusive text-[15px] leading-[1.5] mb-[30px]'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Gain an internationally-recognized certificate, hands-on work
            experience, and job placement assistance. You'll also have the
            chance to assist Carina on brand shoots and weddings.
          </motion.p>

          <Link href='/courses/express-online'>
            <button className='bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
              explore
            </button>
          </Link>
        </div>
      </div>

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
            maxWidth: '100%', // Adjust this to match the video's width
            maxHeight: '100%', // Adjust this to match the video's height
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default CoursesSection;
