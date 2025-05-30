import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import React, { useEffect } from 'react';
import TestimonialBanner from './components/TestimonialBanner';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [inView, controls]);

  const testimonials = [
    {
      id: 1,
      image: '/images/landing/testimonials/clover.png',
      name: 'Ashleigh Noble',
      text: "I attended one of their workshops and absolutely loved every minute of it. It's such a beautiful and intimate space and makes you feel right at home. I learnt so much in a matter of hours and it really helped me. I would definitely recommend!! Easily one of the best workshops I've attended",
    },
    {
      id: 2,
      image: '/images/landing/testimonials/clover.png',
      name: 'Jo Mari Ungerer',
      text: "Carina is a little gem!!! Completed a makeup workshop with her and learned so much. Can't wait for her to do her magic for my wedding",
    },
    {
      id: 3,
      image: '/images/landing/testimonials/clover.png',
      name: 'Marizane Van der Merwe',
      text: 'It has been a true blessing working with Carina. Her skills are next level and she is such a joy to be around, I would recommend her academy every time. She is absolutely amazing! Completely worth it!',
    },
    {
      id: 4,
      image: '/images/landing/testimonials/clover.png',
      name: 'Nabeelah Meyer',
      text: "I would just like to say Thank You to Carina she is an amazing lecturer! Can't wait to go back and do my Pro Course! Highly Recommended!!!!",
    },
    {
      id: 5,
      image: '/images/landing/testimonials/clover.png',
      name: 'Vin-Nita Van De Heuvel',
      text: 'This makeup course was a joy to do. Everything in your own time and pace. Thank you CARINA for such a detailed basic make up course.',
    },
    {
      id: 6,
      image: '/images/landing/testimonials/clover.png',
      name: 'Athi-Enkosi Rulumeni',
      text: 'Carina is one of the best makeup artists I know :) I say that as a model with over 6 years of experience within the fashion & commercial industry. She understands the execution of a brief & will always be sure to give you the best beat.',
    },
    {
      id: 7,
      image: '/images/landing/testimonials/clover.png',
      name: 'Jolene Tromp',
      text: 'As a student and client of Carina Pereira i can 100% vouch for her work. Not only does she have the best personality, she makes you feel so at ease. Her skills are unmatched. She does the most beautiful natural and full glam looks.',
    },
    {
      id: 8,
      image: '/images/landing/testimonials/clover.png',
      name: 'Carmelita Martins',
      text: 'THE BEST IN THE BUSINESS! Carina does not miss a beat and perfects a look EVERY SINGLE TIME. Highly, highly recommend!',
    },
    {
      id: 9,
      image: '/images/landing/testimonials/clover.png',
      name: 'Liebe Bester',
      text: 'I completed the express make-up course and loved it. Carina was so helpful and I would recommend it to anyone.',
    },
    {
      id: 10,
      image: '/images/landing/testimonials/clover.png',
      name: 'Tina Edas',
      text: "Carina was very professional and helpful, will highly recommend her. I'm still using the methods she taught me.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className='relative flex flex-col items-center justify-center py-[64px] px-[25px] lg:px-[80px] overflow-hidden'
    >
      <TestimonialBanner />

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        className='w-full'
        dir='rtl'
        style={{ zIndex: 1 }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          reverseDirection: false,
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className='flex flex-col bg-white items-center justify-center lg:justify-around w-full md:w-[934px] h-[696px] md:h-[378px] px-[2rem] py-[180px] md:pt-8 md:pb-[100px] border border-black mx-auto'
            >
              <div className='w-[101px]'>
                <Image
                  src={testimonial.image}
                  alt='Achievement Image'
                  width={500}
                  height={300}
                  className='w-full'
                />
              </div>

              <div className='flex flex-col items-center mt-4'>
                <p className='font-inclusive text-[15px] text-center'>
                  {testimonial.name}
                </p>
              </div>

              <div className='flex flex-col items-center mt-4'>
                <p className='w-[304px] md:w-[627px] font-inclusive text-[15px] text-center'>
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default TestimonialSection;
