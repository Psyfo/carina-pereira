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
      <div className='top-0 right-0 left-0 z-40 absolute flex justify-center items-center bg-cpMagenta h-[30px] text-white'>
        <div className='font-inter text-[13px] text-white cursor-pointer'>
          🎉 50% OFF Pro Makeup Course - Only R7 500 until November 30th!
        </div>
      </div>
    </Link>
  );
};

export default Announcement;
