import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className='items-center absolute top-[3rem] right-[1.5rem] hidden md:block z-20'>
      <ul className='flex gap-[35px] font-inter font-bold text-white text-[16px]'>
        <li>
          <Link href='/courses'>Courses</Link>
        </li>
        <li>
          <Link href='/services'>Services</Link>
        </li>
        <li>
          <Link href='/#contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
