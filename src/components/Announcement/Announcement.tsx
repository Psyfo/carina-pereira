'use client';

import Link from 'next/link';
import React from 'react';
import { isProMakeupPromotionActive } from '@/lib/promotions';

const Announcement: React.FC = () => {
  const showPromotion = isProMakeupPromotionActive();

  // Don't render anything if promotion is not active
  if (!showPromotion) {
    return null;
  }

  return (
    <Link href='/courses/pro-makeup'>
      <div className='top-0 right-0 left-0 z-40 absolute flex justify-center items-center bg-cpMagenta px-4 py-2 md:py-0 md:h-[30px] min-h-[30px] text-white'>
        <div className='font-inter text-[11px] text-white md:text-[13px] text-center leading-tight cursor-pointer'>
          <span className='block md:inline'>🎉 50% OFF Pro Makeup Course</span>
          <span className='hidden md:inline'> - </span>
          <span className='block md:inline'>
            Only R 7 500 until November 30th!
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Announcement;
