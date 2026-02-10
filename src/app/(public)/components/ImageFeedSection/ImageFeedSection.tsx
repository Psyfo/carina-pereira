'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type InstagramMedia = {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  children?: { data: InstagramMedia[] };
};

const SCROLL_AMOUNT = 280; // pixels to scroll per arrow click

const ImageFeedSection: React.FC = () => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch('/api/instagram-feed');
        const json = await res.json();
        if (json.media) {
          setMedia(json.media);
        }
      } catch (e) {
        console.error('Failed to fetch Instagram feed', e);
      } finally {
        setLoading(false);
      }
    }
    fetchFeed();
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <section className='flex justify-center items-center w-full h-75 text-gray-500'>
        Loading Instagram feed...
      </section>
    );
  }

  if (!media.length) {
    return (
      <section className='flex justify-center items-center w-full h-75 text-gray-500'>
        No Instagram posts found.
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      aria-label='Instagram Feed'
      className='relative w-full'
      variants={containerVariants}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Left Arrow - hidden on mobile */}
      <button
        onClick={scrollLeft}
        aria-label='Scroll Left'
        className='hidden top-1/2 left-2 z-10 absolute md:flex justify-center items-center bg-white hover:bg-gray-100 shadow-md rounded-full w-10 h-10 transition -translate-y-1/2'
        style={{ userSelect: 'none' }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 text-gray-700'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className='overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div
          className='flex space-x-5 px-4 py-6'
          style={{ width: media.length * 280 }}
        >
          {media.map((post) => {
            const imageUrl =
              post.media_type === 'VIDEO'
                ? (post.thumbnail_url ?? post.media_url)
                : post.media_url;

            return (
              <motion.a
                key={post.id}
                href={post.permalink}
                target='_blank'
                rel='noopener noreferrer'
                className='shadow-md hover:shadow-xl rounded-lg w-64 h-64 overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out shrink-0 transform'
                style={{ scrollSnapAlign: 'start' }}
                aria-label={
                  post.caption ? post.caption.slice(0, 100) : 'Instagram post'
                }
                variants={itemVariants}
              >
                <Image
                  src={imageUrl}
                  alt={post.caption ?? 'Instagram post image'}
                  width={256}
                  height={256}
                  className='w-full h-full object-cover'
                  priority={false}
                  unoptimized
                />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Right Arrow - hidden on mobile */}
      <button
        onClick={scrollRight}
        aria-label='Scroll Right'
        className='hidden top-1/2 right-2 z-10 absolute md:flex justify-center items-center bg-white hover:bg-gray-100 shadow-md rounded-full w-10 h-10 transition -translate-y-1/2'
        style={{ userSelect: 'none' }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 text-gray-700'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>
    </motion.section>
  );
};

export default ImageFeedSection;
