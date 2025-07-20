import Link from 'next/link';
import React from 'react';

const Announcement: React.FC = () => {
  return (
    <Link href='/courses/masterclass'>
      <div className='flex absolute top-0 left-0 right-0 items-center justify-center bg-cpOrange h-[30px] text-white z-40'>
        <div className='font-inter text-white text-[13px] cursor-pointer'>
          get tickets for women’s day makeup masterclass
        </div>
      </div>{' '}
    </Link>
  );
};

export default Announcement;
