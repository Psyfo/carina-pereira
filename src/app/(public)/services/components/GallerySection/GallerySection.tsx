'use client';
import Image from 'next/image';
import React from 'react';
import { Variants, motion } from 'framer-motion';

/* eslint-disable react/no-unescaped-entities */

const images = [
  '/images/services/gallery/TEMPLE_14 1.png',
  '/images/services/gallery/TEMPLE_14 2.png',
  '/images/services/gallery/TEMPLE_14 3.png',
  '/images/services/gallery/TEMPLE_14 4.png',
  '/images/services/gallery/TEMPLE_14 5.png',
  '/images/services/gallery/TEMPLE_14 6.png',
  '/images/services/gallery/TEMPLE_14 7.png',
  '/images/services/gallery/TEMPLE_14 8.png',
  '/images/services/gallery/TEMPLE_14 9.png',
  '/images/services/gallery/TEMPLE_14 10.png',
  '/images/services/gallery/TEMPLE_14 11.png',
  '/images/services/gallery/TEMPLE_14 12.png',
  '/images/services/gallery/TEMPLE_14 13.png',
  '/images/services/gallery/TEMPLE_14 14.png',
  '/images/services/gallery/TEMPLE_14 15.png',
  '/images/services/gallery/TEMPLE_14 16.png',
  '/images/services/gallery/TEMPLE_14 17.png',
  '/images/services/gallery/TEMPLE_14 18.png',
  '/images/services/gallery/TEMPLE_14 19.png',
  '/images/services/gallery/TEMPLE_14 20.png',
  '/images/services/gallery/TEMPLE_14 21.png',
  '/images/services/gallery/TEMPLE_14 22.png',
  '/images/services/gallery/TEMPLE_14 23.png',
  '/images/services/gallery/TEMPLE_14 24.png',
  '/images/services/gallery/TEMPLE_14 25.png',
  '/images/services/gallery/TEMPLE_14 26.png',
  '/images/services/gallery/TEMPLE_14 27.png',
  '/images/services/gallery/TEMPLE_14 28.png',
  '/images/services/gallery/TEMPLE_14 29.png',
  '/images/services/gallery/TEMPLE_14 30.png',
  '/images/services/gallery/TEMPLE_14 31.png',
  '/images/services/gallery/TEMPLE_14 32.png',
  '/images/services/gallery/TEMPLE_14 33.png',
  '/images/services/gallery/TEMPLE_14 34.png',
  '/images/services/gallery/TEMPLE_14 35.png',
  '/images/services/gallery/TEMPLE_14 36.png',
  '/images/services/gallery/TEMPLE_14 37.png',
  '/images/services/gallery/TEMPLE_14 38.png',
  '/images/services/gallery/TEMPLE_14 39.png',
  '/images/services/gallery/TEMPLE_14 40.png',
  '/images/services/gallery/TEMPLE_14 41.png',
  '/images/services/gallery/TEMPLE_14 42.png',
  '/images/services/gallery/TEMPLE_14 43.png',
  '/images/services/gallery/TEMPLE_14 44.png',
];

const GallerySection: React.FC = () => {
  // Animation variants for the heading
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for the images
  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2, // Stagger delay based on index
      },
    }),
  };

  return (
    <section className=''>
      <div className='px-[38px] py-[45px]'>
        {/* Animated Heading */}
        <motion.h1
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }} // Trigger at 50% visibility
          variants={headingVariants}
          className='font-tan-ashford font-bold text-[19px]'
        >
          carina's work
        </motion.h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-0'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }} // Trigger at 50% visibility
            variants={imageVariants}
            custom={index} // Pass the index to stagger the animations
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              className='min-h-full min-w-full object-cover'
              layout='responsive'
              width={500}
              height={750}
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
