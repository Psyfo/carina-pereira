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
        <h1 className='font-tan-ashford font-bold text-[19px] tracking-wider'>
          about this course:
        </h1>

        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          Master the basics of make-up for matric dances, bridals, photo shoots
          & many more. This course will teach you all you need to know to start
          off your confidence in the make-up world.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          Comprised of 6 sessions, each designed to cover essential aspects of
          makeup artistry. Each student will be provided with a set of
          Switchbeauty makeup brushes and a detailed, inclusive makeup training
          manual.
        </motion.p>
        <motion.p
          variants={fadeInUpVariants}
          className='font-inclusive text-[15px] leading-[1.5] mt-8'
        >
          This course provides a comprehensive introduction to makeup artistry,
          covering essential topics.
        </motion.p>

        <motion.div variants={fadeInUpVariants} className='mt-8'>
          <Link href='/courses'>
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
        <motion.p variants={fadeInUpVariants}>Cost: R15 000</motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Duration of this course: 2 months Full time & 4 months Part time
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Full time course: Tuesday to Friday 10:00am - 13:00pm
        </motion.p>
        <motion.p variants={fadeInUpVariants}>
          Part time course: Tuesday evenings 18:00pm - 21:00pm
        </motion.p>
        <motion.p variants={fadeInUpVariants} className='mt-8'>
          Certificate & qualification: An internationally recognised certificate
          as well as work experience and assistance in job placements.
          Additionally, students will have the opportunity to assist Carina on
          brand shoots & weddings to gain experience.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
