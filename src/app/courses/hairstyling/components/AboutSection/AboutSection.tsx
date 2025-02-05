import Link from 'next/link';
import React from 'react';
import { Variants, motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  // Animation variants for fading in upwards
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }} // Trigger at 30% visibility
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2, // Stagger the children animations
          },
        },
      }}
      className='flex flex-col lg:flex-row md:items-center md:justify-between lg:gap-[125px] px-[25px] lg:px-[10%] py-[60px] lg:py-[120px]'
    >
      {/* Left Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='lg:w-[600px] flex flex-col items-start'
      >
        {/* Heading */}
        <motion.h1
          variants={fadeInUpVariants}
          className='font-tan-ashford font-bold text-[19px] tracking-wider'
        >
          about this course:
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          A comprehensive course giving you the inside tips of industry relevant
          hairstyling techniques so you can be an all in one artist who can
          offer hairstyling as well.
        </motion.p>

        {/* List */}
        <motion.ul
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-[100px]'
        >
          <motion.li
            variants={fadeInUpVariants}
            className="relative pl-[10px] before:content-['-'] before:absolute before:left-0"
          >
            hair texture identification
          </motion.li>
          <motion.li
            variants={fadeInUpVariants}
            className="relative pl-[10px] before:content-['-'] before:absolute before:left-0"
          >
            basic styling and setting
          </motion.li>
          <motion.li
            variants={fadeInUpVariants}
            className="relative pl-[10px] before:content-['-'] before:absolute before:left-0"
          >
            intermediate curling / waving techniques
          </motion.li>
          <motion.li
            variants={fadeInUpVariants}
            className="relative pl-[10px] before:content-['-'] before:absolute before:left-0"
          >
            basic and intermediate up-styling techniques
          </motion.li>
          <motion.li
            variants={fadeInUpVariants}
            className="relative pl-[10px] before:content-['-'] before:absolute before:left-0"
          >
            styling product tips and tricks
          </motion.li>
          <motion.li
            variants={fadeInUpVariants}
            className="relative pl-[10px] before:content-['-'] before:absolute before:left-0"
          >
            aftercare instruction techniques
          </motion.li>
        </motion.ul>
        <motion.div variants={fadeInUpVariants} className='mt-8'>
          <Link
            href='https://academy.carinapereira.com/product/hairstyling-course/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='inline-block bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] border border-black rounded-full'>
              enroll now
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeInUpVariants}
        className='mx-auto lg:w-[450px] font-inclusive text-[15px] leading-[1.5] border border-black rounded-2xl px-[20px] py-[30px] mt-[84px] lg:mt-0'
      >
        <motion.p variants={fadeInUpVariants}>Cost: R3 000</motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration of this course: <br /> 4 modules once a week
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          A comprehensive course giving you the inside tips of industry relevant
          hairstyling techniques so you can be an all in one artist who can
          offer hairstyling as well.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
