'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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

  if (loading) {
    return (
      <section className='w-full h-[300px] flex items-center justify-center text-gray-500'>
        Loading Instagram feed...
      </section>
    );
  }

  if (!media.length) {
    return (
      <section className='w-full h-[300px] flex items-center justify-center text-gray-500'>
        No Instagram posts found.
      </section>
    );
  }

  return (
    <section aria-label='Instagram Feed' className='relative w-full'>
      {/* Left Arrow - hidden on mobile */}
      <button
        onClick={scrollLeft}
        aria-label='Scroll Left'
        className='hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition'
        style={{ userSelect: 'none' }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700'
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
                ? post.thumbnail_url ?? post.media_url
                : post.media_url;

            return (
              <a
                key={post.id}
                href={post.permalink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl'
                style={{ scrollSnapAlign: 'start' }}
                aria-label={
                  post.caption ? post.caption.slice(0, 100) : 'Instagram post'
                }
              >
                <Image
                  src={imageUrl}
                  alt={post.caption ?? 'Instagram post image'}
                  width={256}
                  height={256}
                  className='object-cover w-full h-full'
                  priority={false}
                  unoptimized
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* Right Arrow - hidden on mobile */}
      <button
        onClick={scrollRight}
        aria-label='Scroll Right'
        className='hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition'
        style={{ userSelect: 'none' }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-gray-700'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>
    </section>
  );
};

export default ImageFeedSection;
