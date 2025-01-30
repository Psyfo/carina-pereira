'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='absolute top-[3rem] right-[1.5rem] z-20'>
      {/* Hamburger Icon (Visible Only on Mobile) */}
      <div className='md:hidden cursor-pointer z-30' onClick={toggleMenu}>
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col gap-6 font-inter font-bold text-white text-[16px] p-4 mt-4 transition-opacity duration-300 ease-in-out 
        md:flex-row md:relative  md:p-0 md:opacity-100 md:pointer-events-auto
        absolute top-0 right-0 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none md:opacity-100'
        }`}
      >
        <li>
          <Link href='/courses' onClick={() => setIsOpen(false)}>
            Courses
          </Link>
        </li>
        <li>
          <Link href='/services' onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link href='/#contact' onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
