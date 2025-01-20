import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const BrandSlider: React.FC = () => {
  const images = [
    { src: '/images/brands/swiitch.svg', alt: 'Swiitch Beauty' },
    { src: '/images/brands/gloei.svg', alt: 'Gloei' },
    { src: '/images/brands/mac.svg', alt: 'MAC' },
    { src: '/images/brands/essence.svg', alt: 'Essence' },
  ];

  return (
    <Swiper spaceBetween={30} slidesPerView={3}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={100}
            className='w-auto h-[100px]'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSlider;
