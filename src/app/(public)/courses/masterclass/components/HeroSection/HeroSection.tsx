'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/* ------------------------------------------------------------------ */
/*  Decorative hearts & sparkles – scattered like a cute wallpaper    */
/* ------------------------------------------------------------------ */

interface Decoration {
  id: number;
  type: 'heart' | 'sparkle' | 'star';
  top: string;
  left: string;
  size: number;
  rotation: number;
  opacity: number;
  color: string;
  delay: number;
}

const COLORS = {
  pinkSoft: '#FCB3CD', // cpPink-200
  pinkMid: '#F5B3D3', // cpPink-300
  pinkBold: '#F1A0C5', // cpPink-400
  white: '#FFFFFF',
  blush: '#FDD9E6', // cpMagenta-100
  peach: '#FFE4D1', // cpOrange-100
};

const decorations: Decoration[] = [
  // Hearts – edges & scattered
  {
    id: 1,
    type: 'heart',
    top: '5%',
    left: '3%',
    size: 24,
    rotation: -15,
    opacity: 0.4,
    color: COLORS.white,
    delay: 0.2,
  },
  {
    id: 2,
    type: 'heart',
    top: '11%',
    left: '89%',
    size: 32,
    rotation: 20,
    opacity: 0.35,
    color: COLORS.pinkSoft,
    delay: 0.5,
  },
  {
    id: 3,
    type: 'heart',
    top: '26%',
    left: '93%',
    size: 18,
    rotation: -30,
    opacity: 0.3,
    color: COLORS.white,
    delay: 0.8,
  },
  {
    id: 4,
    type: 'heart',
    top: '44%',
    left: '2%',
    size: 28,
    rotation: 10,
    opacity: 0.35,
    color: COLORS.blush,
    delay: 0.3,
  },
  {
    id: 5,
    type: 'heart',
    top: '54%',
    left: '95%',
    size: 22,
    rotation: -20,
    opacity: 0.4,
    color: COLORS.pinkMid,
    delay: 0.6,
  },
  {
    id: 6,
    type: 'heart',
    top: '70%',
    left: '5%',
    size: 18,
    rotation: 25,
    opacity: 0.3,
    color: COLORS.white,
    delay: 1.0,
  },
  {
    id: 7,
    type: 'heart',
    top: '84%',
    left: '91%',
    size: 26,
    rotation: -10,
    opacity: 0.35,
    color: COLORS.pinkSoft,
    delay: 0.4,
  },
  {
    id: 8,
    type: 'heart',
    top: '17%',
    left: '6%',
    size: 15,
    rotation: 35,
    opacity: 0.25,
    color: COLORS.peach,
    delay: 0.7,
  },
  {
    id: 9,
    type: 'heart',
    top: '37%',
    left: '97%',
    size: 14,
    rotation: -25,
    opacity: 0.3,
    color: COLORS.pinkBold,
    delay: 0.9,
  },
  {
    id: 10,
    type: 'heart',
    top: '64%',
    left: '1%',
    size: 22,
    rotation: 15,
    opacity: 0.3,
    color: COLORS.blush,
    delay: 1.1,
  },
  {
    id: 11,
    type: 'heart',
    top: '91%',
    left: '7%',
    size: 30,
    rotation: -5,
    opacity: 0.25,
    color: COLORS.white,
    delay: 0.3,
  },
  {
    id: 12,
    type: 'heart',
    top: '3%',
    left: '48%',
    size: 16,
    rotation: 40,
    opacity: 0.2,
    color: COLORS.pinkSoft,
    delay: 0.6,
  },
  {
    id: 13,
    type: 'heart',
    top: '93%',
    left: '55%',
    size: 20,
    rotation: -12,
    opacity: 0.25,
    color: COLORS.pinkMid,
    delay: 0.8,
  },
  // Large translucent background hearts – different sizes, behind everything
  {
    id: 50,
    type: 'heart',
    top: '5%',
    left: '2%',
    size: 140,
    rotation: -20,
    opacity: 0.12,
    color: COLORS.white,
    delay: 0.2,
  },
  {
    id: 51,
    type: 'heart',
    top: '50%',
    left: '78%',
    size: 180,
    rotation: 15,
    opacity: 0.1,
    color: COLORS.pinkSoft,
    delay: 0.5,
  },
  {
    id: 52,
    type: 'heart',
    top: '25%',
    left: '0%',
    size: 100,
    rotation: 30,
    opacity: 0.14,
    color: COLORS.blush,
    delay: 0.8,
  },
  {
    id: 53,
    type: 'heart',
    top: '65%',
    left: '82%',
    size: 120,
    rotation: -10,
    opacity: 0.1,
    color: COLORS.white,
    delay: 0.4,
  },
  {
    id: 54,
    type: 'heart',
    top: '2%',
    left: '70%',
    size: 200,
    rotation: 25,
    opacity: 0.08,
    color: COLORS.pinkMid,
    delay: 0.6,
  },
  {
    id: 55,
    type: 'heart',
    top: '72%',
    left: '1%',
    size: 160,
    rotation: -35,
    opacity: 0.12,
    color: COLORS.white,
    delay: 1.0,
  },
  {
    id: 56,
    type: 'heart',
    top: '38%',
    left: '68%',
    size: 90,
    rotation: 45,
    opacity: 0.1,
    color: COLORS.pinkSoft,
    delay: 0.7,
  },
  {
    id: 57,
    type: 'heart',
    top: '12%',
    left: '22%',
    size: 110,
    rotation: -8,
    opacity: 0.1,
    color: COLORS.blush,
    delay: 0.9,
  },
  // Stars – glistening background accents
  {
    id: 14,
    type: 'star',
    top: '8%',
    left: '20%',
    size: 6,
    rotation: 0,
    opacity: 0.5,
    color: COLORS.white,
    delay: 0.3,
  },
  {
    id: 15,
    type: 'star',
    top: '15%',
    left: '78%',
    size: 5,
    rotation: 0,
    opacity: 0.4,
    color: COLORS.pinkSoft,
    delay: 0.6,
  },
  {
    id: 16,
    type: 'star',
    top: '25%',
    left: '12%',
    size: 4,
    rotation: 0,
    opacity: 0.35,
    color: COLORS.white,
    delay: 0.9,
  },
  {
    id: 17,
    type: 'star',
    top: '32%',
    left: '85%',
    size: 7,
    rotation: 0,
    opacity: 0.45,
    color: COLORS.blush,
    delay: 0.4,
  },
  {
    id: 18,
    type: 'star',
    top: '48%',
    left: '8%',
    size: 5,
    rotation: 0,
    opacity: 0.4,
    color: COLORS.white,
    delay: 0.7,
  },
  {
    id: 19,
    type: 'star',
    top: '56%',
    left: '92%',
    size: 6,
    rotation: 0,
    opacity: 0.35,
    color: COLORS.pinkSoft,
    delay: 1.0,
  },
  {
    id: 20,
    type: 'star',
    top: '68%',
    left: '15%',
    size: 4,
    rotation: 0,
    opacity: 0.3,
    color: COLORS.white,
    delay: 0.5,
  },
  {
    id: 21,
    type: 'star',
    top: '76%',
    left: '88%',
    size: 5,
    rotation: 0,
    opacity: 0.45,
    color: COLORS.blush,
    delay: 0.8,
  },
  {
    id: 22,
    type: 'star',
    top: '42%',
    left: '18%',
    size: 3,
    rotation: 0,
    opacity: 0.3,
    color: COLORS.white,
    delay: 1.1,
  },
  {
    id: 23,
    type: 'star',
    top: '82%',
    left: '22%',
    size: 6,
    rotation: 0,
    opacity: 0.4,
    color: COLORS.pinkMid,
    delay: 0.6,
  },
  {
    id: 24,
    type: 'star',
    top: '20%',
    left: '60%',
    size: 4,
    rotation: 0,
    opacity: 0.3,
    color: COLORS.white,
    delay: 0.9,
  },
  {
    id: 25,
    type: 'star',
    top: '88%',
    left: '72%',
    size: 5,
    rotation: 0,
    opacity: 0.35,
    color: COLORS.white,
    delay: 0.4,
  },
  // Sparkles – 4-point stars
  {
    id: 26,
    type: 'sparkle',
    top: '9%',
    left: '95%',
    size: 16,
    rotation: 0,
    opacity: 0.45,
    color: COLORS.white,
    delay: 0.4,
  },
  {
    id: 27,
    type: 'sparkle',
    top: '34%',
    left: '1%',
    size: 14,
    rotation: 45,
    opacity: 0.35,
    color: COLORS.pinkSoft,
    delay: 0.7,
  },
  {
    id: 28,
    type: 'sparkle',
    top: '59%',
    left: '97%',
    size: 12,
    rotation: 20,
    opacity: 0.4,
    color: COLORS.white,
    delay: 1.0,
  },
  {
    id: 29,
    type: 'sparkle',
    top: '78%',
    left: '3%',
    size: 10,
    rotation: -15,
    opacity: 0.3,
    color: COLORS.blush,
    delay: 0.5,
  },
  {
    id: 30,
    type: 'sparkle',
    top: '50%',
    left: '5%',
    size: 18,
    rotation: 30,
    opacity: 0.35,
    color: COLORS.white,
    delay: 0.8,
  },
];

/* -- SVG components ------------------------------------------------ */

const Heart = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill={color}>
    <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
  </svg>
);

const SparkleIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill={color}>
    <path d='M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z' />
  </svg>
);

const Star = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox='0 0 10 10'>
    <circle cx='5' cy='5' r='4' fill={color} />
  </svg>
);

/* -- Gentle float animation for hearts ----------------------------- */
const floatVariants = {
  animate: (i: number) => ({
    y: [0, -6, 0, 5, 0],
    rotate: [0, i % 2 === 0 ? 3 : -3, 0, i % 2 === 0 ? -2 : 2, 0],
    transition: {
      duration: 4 + (i % 3),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: (i % 5) * 0.4,
    },
  }),
};

/* -- Shimmer/twinkle for stars ------------------------------------- */
const twinkleVariants = {
  animate: (i: number) => ({
    opacity: [0.15, 0.5, 0.15],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 2 + (i % 3),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: (i % 6) * 0.3,
    },
  }),
};

/* -- Sparkle pulse ------------------------------------------------- */
const sparkleVariants = {
  animate: (i: number) => ({
    scale: [1, 1.3, 1],
    opacity: [0.3, 0.55, 0.3],
    rotate: [0, 15, 0],
    transition: {
      duration: 3 + (i % 2),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: (i % 4) * 0.5,
    },
  }),
};

/* ------------------------------------------------------------------ */

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative flex justify-center items-center py-10 md:py-16 w-full min-h-[100vh] overflow-hidden hero-section'
      style={{
        background:
          'linear-gradient(135deg, #F25E8F 0%, #E62E6B 25%, #D01756 50%, #F25E8F 75%, #F88DB4 100%)',
      }}
    >
      {/* Soft light wash overlays for depth */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.15)_0%,_transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]' />

      {/* Decorative wallpaper elements */}
      {decorations.map((d) => {
        const isHeart = d.type === 'heart';
        const isStar = d.type === 'star';

        return (
          <motion.div
            key={d.id}
            custom={d.id}
            initial={{ opacity: 0, scale: 0 }}
            animate='animate'
            variants={
              isHeart
                ? floatVariants
                : isStar
                  ? twinkleVariants
                  : sparkleVariants
            }
            className='absolute pointer-events-none'
            style={{
              top: d.top,
              left: d.left,
              opacity: d.opacity,
              transform: `rotate(${d.rotation}deg)`,
            }}
          >
            {d.type === 'heart' && <Heart size={d.size} color={d.color} />}
            {d.type === 'sparkle' && (
              <SparkleIcon size={d.size} color={d.color} />
            )}
            {d.type === 'star' && <Star size={d.size} color={d.color} />}
          </motion.div>
        );
      })}

      {/* Logo */}
      <Link href='/' className='top-[2rem] left-[1.5rem] z-20 absolute'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src='/images/courses/hero/logo.svg'
            alt='Carina Pereira Logo'
            width={100}
            height={100}
            unoptimized
            className='w-[160px] lg:w-[220px]'
          />
        </motion.div>
      </Link>

      {/* Poster / Flyer */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className='z-10 relative shadow-[0_25px_80px_rgba(0,0,0,0.25),_0_0_50px_rgba(252,179,205,0.25)] rounded-xl w-[92%] max-w-[400px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[580px] 2xl:max-w-[660px] xl:max-w-[620px] overflow-hidden'
      >
        <Image
          src='/images/courses/valentines/hero.png'
          alt="Valentine's Day Makeup Masterclass — Be Mine Galentine's"
          width={770}
          height={1000}
          priority
          className='block w-full h-auto'
        />
      </motion.div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className='right-0 bottom-6 md:bottom-10 left-0 absolute drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] font-tan-ashford text-[20px] text-white/90 md:text-[34px] text-center lowercase tracking-wider'
      >
        valentine&apos;s day masterclass
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
