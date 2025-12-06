'use client';

import Link from 'next/link';
import React from 'react';

const Announcement: React.FC = () => {
  return (
    <Link href='/courses/masterclass'>
      <div className='top-0 right-0 left-0 z-40 absolute flex justify-center items-center bg-cpOrange px-4 py-2 md:py-0 md:h-[30px] min-h-[30px] text-white'>
        <div className='font-inter text-[11px] text-white md:text-[13px] text-center leading-tight cursor-pointer'>
          <span className='block md:inline'>
            Enrol now and get 1 on 1 mentorship from Carina herself
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Announcement;
