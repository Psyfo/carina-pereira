import Link from 'next/link';
import React from 'react';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* eslint-disable react/no-unescaped-entities */

const ServicesSection: React.FC = () => {
  // Intersection observer hook
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  // Animation variants
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className='px-[38px] py-[45px]'>
      {/* Animated Heading */}
      <motion.h1
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        className='font-tan-ashford font-bold text-[19px]'
      >
        carina's services
      </motion.h1>

      {/* Animated Service Items */}
      <motion.div
        className='flex flex-col md:flex-row flex-wrap gap-[40px] md:gap-4 mt-[30px] lg:w-[900px]'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Stagger the children animations
            },
          },
        }}
      >
        {/* Service Items */}
        {[
          'Bridal and bridal party make-up',
          'One-on-One make-up lessons',
          'Occasional make-up',
          'Make-up workshops for parties',
          'Photoshoots/Editorial make-up',
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className='text-center font-inclusive text-[17.75px] leading-[1.5] px-[15px] py-[12px] border border-black rounded-full mt-4 md:mt-2'
          >
            {service}
          </motion.div>
        ))}

        {/* Animated Button */}
        <motion.div variants={fadeInVariants}>
          <Link href='#'>
            <button className='w-full bg-cpPink font-inclusive text-[17.75px] leading-[1.5] px-[35px] py-[12px] border border-black rounded-full mt-4 md:mt-2'>
              book carina
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
