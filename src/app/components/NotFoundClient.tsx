'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFoundClient() {
  return (
    <div className='flex flex-col justify-center items-center bg-cpCream px-4 py-20 min-h-screen'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-[800px] text-center'
      >
        {/* 404 Number - Large and decorative */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='mb-6'
        >
          <h1 className='font-tan-ashford font-bold text-[120px] text-cpPink/20 md:text-[180px] leading-none tracking-wider'>
            404
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className='mb-4 font-tan-ashford font-bold text-[35px] text-cpMagenta-600 md:text-[47px] lowercase tracking-wider'
        >
          page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='mx-auto mb-12 max-w-[600px] font-inclusive text-[15px] text-cpCream-900 md:text-[16.5px] leading-[1.7]'
        >
          Don't worry, you're not lost—sometimes the best discoveries happen
          when we take a different path. Let's get you back to where the magic
          happens.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='flex sm:flex-row flex-col justify-center items-center gap-4'
        >
          {/* Primary CTA - Home */}
          <Link href='/'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-cpOrange hover:bg-cpOrange-600 active:bg-cpOrange-700 shadow-md hover:shadow-lg active:shadow-sm px-[35px] py-[12px] border border-black rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cpOrange/30 font-inclusive font-semibold text-[16.5px] text-white leading-[1.5] transition-all duration-200 ease-out cursor-pointer'
            >
              go home
            </motion.button>
          </Link>

          {/* Secondary CTA - Courses */}
          <Link href='/courses'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-cpPink hover:bg-cpPink/90 active:bg-cpPink/80 shadow-md hover:shadow-lg active:shadow-sm px-[35px] py-[12px] border border-black rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cpPink/30 font-inclusive font-semibold text-[16.5px] text-black leading-[1.5] transition-all duration-200 ease-out cursor-pointer'
            >
              explore courses
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='flex flex-wrap justify-center items-center gap-6 mt-12 font-inclusive text-[14px]'
        >
          <Link
            href='/services'
            className='text-cpMagenta-500 hover:text-cpMagenta-600 underline underline-offset-4 transition-colors'
          >
            view services
          </Link>
          <span className='text-cpPink-300'>•</span>
          <Link
            href='/about'
            className='text-cpMagenta-500 hover:text-cpMagenta-600 underline underline-offset-4 transition-colors'
          >
            about carina
          </Link>
          <span className='text-cpPink-300'>•</span>
          <Link
            href='/contact'
            className='text-cpMagenta-500 hover:text-cpMagenta-600 underline underline-offset-4 transition-colors'
          >
            get in touch
          </Link>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className='mt-16'
        >
          <div className='bg-gradient-to-r from-cpPink via-cpMagenta to-cpOrange opacity-50 mx-auto rounded-full w-24 h-1' />
        </motion.div>
      </motion.div>
    </div>
  );
}
