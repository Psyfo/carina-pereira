'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup when component unmounts
    };
  }, [isOpen]);

  return (
    <nav className='top-0 left-0 z-30 fixed flex justify-between items-center bg-transparent lg:px-12 py-6 w-full'>
      {/* Navigation Links (Visible on lg: and up) */}
      <ul className='hidden top-12 right-6 fixed lg:flex space-x-12 font-tan-ashford text-[17px] text-white lowercase tracking-wider'>
        <li>
          <Link href='/courses' className='drop-shadow-lg'>
            Courses
          </Link>
        </li>
        <li>
          <Link href='/services' className='drop-shadow-lg'>
            Services
          </Link>
        </li>
        <li>
          <Link href='/#contact' className='drop-shadow-lg'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon (Hidden on lg:) */}
      <Image
        src='/images/nav/hamburger.tif.svg'
        alt='Open Menu'
        width={30}
        height={30}
        unoptimized
        className='lg:hidden top-12 right-6 z-20 fixed drop-shadow-lg w-[30] h-[30] cursor-pointer'
        onClick={() => setIsOpen(true)}
      />

      {/* Full-Screen Navigation Overlay (Mobile) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-cpPink z-20 pt-[130px] pl-10 transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } lg:hidden`}
      >
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/images/nav/logo.png'
            alt='Logo'
            width={190}
            height={100}
            unoptimized
            className='lg:hidden top-12 left-6 z-30 absolute w-[190px] lg:w-[284px] h-auto'
          />
        </Link>

        {/* Close (Cross) Icon */}
        <Image
          src='/images/nav/cross.svg'
          alt='Close Menu'
          width={30}
          height={30}
          unoptimized
          className='top-12 right-6 z-30 fixed drop-shadow-lg w-[30px] h-[30px] cursor-pointer'
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Links */}
        <ul className='font-tan-ashford text-[17px] text-white lowercase tracking-wider'>
          <li className='mb-8'>
            <Link href='/courses' onClick={() => setIsOpen(false)}>
              Courses
            </Link>
          </li>
          <li className='mt-8'>
            <Link href='/services' onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className='mt-8'>
            <Link href='/#contact' onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
