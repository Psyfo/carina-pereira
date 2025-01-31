import Image from 'next/image';
import React from 'react';

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
  return (
    <section className=''>
      <div className='px-[38px] py-[45px]'>
        <h1 className='font-tan-ashford font-bold text-[19px]'>
          carina's work
        </h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-0'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className='min-h-full min-w-full object-cover'
            layout='responsive'
            width={500}
            height={750}
            unoptimized
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
