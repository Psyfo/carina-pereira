import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BrandSlider: React.FC = () => {
  const images = [
    { src: '/images/landing/brands/swiitch.svg', alt: 'Swiitch Beauty' },
    {
      src: '/images/landing/brands/gloei.svg',
      alt: 'Gloei',
      className: 'py-8',
    },
    { src: '/images/landing/brands/mac.svg', alt: 'MAC' },
    {
      src: '/images/landing/brands/essence.svg',
      alt: 'Essence',
      className: 'py-8',
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
      }}
      className='flex items-center justify-center w-full h-full'
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className='flex items-center justify-center h-[200px]'
        >
          <div className='flex items-center justify-center w-full h-full'>
            <Image
              src={image.src}
              alt={image.alt}
              width={150}
              height={200}
              unoptimized
              className={`object-contain h-full w-auto ${
                image.className || ''
              }`} // Apply conditional class
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSlider;
