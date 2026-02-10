'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Heart,
  Sparkles,
  Star,
  Gift,
  Gem,
  Cherry,
  Flower2,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Decoration types using Lucide icons                                */
/* ------------------------------------------------------------------ */

type DecoIcon =
  | 'heart'
  | 'sparkles'
  | 'star'
  | 'gift'
  | 'gem'
  | 'cherry'
  | 'flower';

interface Decoration {
  id: number;
  icon: DecoIcon;
  top: string;
  left: string;
  size: number;
  rotation: number;
  opacity: number;
  color: string;
  delay: number;
  filled?: boolean;
}

const C = {
  white: '#FFFFFF',
  cream: '#FFFEF3',
  pinkSoft: '#FCB3CD',
  pinkMid: '#F5B3D3',
  pinkBold: '#F1A0C5',
  blush: '#FDD9E6',
  peach: '#FFE4D1',
  magenta: '#E62E6B',
  magentaLight: '#F25E8F',
  orange: '#FA7E39',
};

/* ------------------------------------------------------------------ */
/*  Decorations – Lucide icons scattered like wallpaper               */
/* ------------------------------------------------------------------ */

const decorations: Decoration[] = [
  // ♥ Filled hearts – various sizes, scattered edges
  { id: 1, icon: 'heart', top: '4%', left: '3%', size: 28, rotation: -15, opacity: 0.3, color: C.white, delay: 0.2, filled: true },
  { id: 2, icon: 'heart', top: '10%', left: '88%', size: 36, rotation: 20, opacity: 0.25, color: C.pinkSoft, delay: 0.5, filled: true },
  { id: 3, icon: 'heart', top: '28%', left: '92%', size: 20, rotation: -30, opacity: 0.22, color: C.white, delay: 0.8, filled: true },
  { id: 4, icon: 'heart', top: '45%', left: '2%', size: 32, rotation: 10, opacity: 0.28, color: C.blush, delay: 0.3, filled: true },
  { id: 5, icon: 'heart', top: '55%', left: '94%', size: 24, rotation: -20, opacity: 0.3, color: C.pinkMid, delay: 0.6, filled: true },
  { id: 6, icon: 'heart', top: '72%', left: '4%', size: 20, rotation: 25, opacity: 0.25, color: C.white, delay: 1.0, filled: true },
  { id: 7, icon: 'heart', top: '85%', left: '90%', size: 30, rotation: -10, opacity: 0.28, color: C.pinkSoft, delay: 0.4, filled: true },
  { id: 8, icon: 'heart', top: '18%', left: '7%', size: 16, rotation: 35, opacity: 0.2, color: C.peach, delay: 0.7, filled: true },
  { id: 9, icon: 'heart', top: '38%', left: '96%', size: 15, rotation: -25, opacity: 0.22, color: C.pinkBold, delay: 0.9, filled: true },
  { id: 10, icon: 'heart', top: '65%', left: '1%', size: 24, rotation: 15, opacity: 0.25, color: C.blush, delay: 1.1, filled: true },
  { id: 11, icon: 'heart', top: '92%', left: '8%', size: 34, rotation: -5, opacity: 0.2, color: C.white, delay: 0.3, filled: true },
  { id: 12, icon: 'heart', top: '2%', left: '48%', size: 18, rotation: 40, opacity: 0.18, color: C.pinkSoft, delay: 0.6, filled: true },
  { id: 13, icon: 'heart', top: '94%', left: '54%', size: 22, rotation: -12, opacity: 0.2, color: C.pinkMid, delay: 0.8, filled: true },

  // ♡ Outline hearts – lighter, elegant feel
  { id: 14, icon: 'heart', top: '15%', left: '15%', size: 22, rotation: 12, opacity: 0.18, color: C.white, delay: 0.4, filled: false },
  { id: 15, icon: 'heart', top: '60%', left: '88%', size: 26, rotation: -18, opacity: 0.15, color: C.pinkSoft, delay: 0.7, filled: false },
  { id: 16, icon: 'heart', top: '80%', left: '18%', size: 18, rotation: 8, opacity: 0.15, color: C.blush, delay: 0.5, filled: false },

  // Large translucent background hearts – dreamy depth
  { id: 50, icon: 'heart', top: '5%', left: '2%', size: 140, rotation: -20, opacity: 0.08, color: C.white, delay: 0.2, filled: true },
  { id: 51, icon: 'heart', top: '50%', left: '78%', size: 180, rotation: 15, opacity: 0.06, color: C.pinkSoft, delay: 0.5, filled: true },
  { id: 52, icon: 'heart', top: '25%', left: '0%', size: 100, rotation: 30, opacity: 0.1, color: C.blush, delay: 0.8, filled: true },
  { id: 53, icon: 'heart', top: '65%', left: '82%', size: 120, rotation: -10, opacity: 0.07, color: C.white, delay: 0.4, filled: true },
  { id: 54, icon: 'heart', top: '2%', left: '70%', size: 200, rotation: 25, opacity: 0.05, color: C.pinkMid, delay: 0.6, filled: true },
  { id: 55, icon: 'heart', top: '72%', left: '1%', size: 160, rotation: -35, opacity: 0.08, color: C.white, delay: 1.0, filled: true },

  // ✦ Sparkles – Lucide sparkles icon, scattered
  { id: 26, icon: 'sparkles', top: '9%', left: '94%', size: 18, rotation: 0, opacity: 0.4, color: C.white, delay: 0.4 },
  { id: 27, icon: 'sparkles', top: '34%', left: '2%', size: 16, rotation: 45, opacity: 0.3, color: C.pinkSoft, delay: 0.7 },
  { id: 28, icon: 'sparkles', top: '58%', left: '96%', size: 14, rotation: 20, opacity: 0.35, color: C.white, delay: 1.0 },
  { id: 29, icon: 'sparkles', top: '78%', left: '3%', size: 12, rotation: -15, opacity: 0.25, color: C.blush, delay: 0.5 },
  { id: 30, icon: 'sparkles', top: '22%', left: '80%', size: 20, rotation: 30, opacity: 0.3, color: C.cream, delay: 0.8 },

  // ★ Stars – twinkling dots
  { id: 40, icon: 'star', top: '8%', left: '22%', size: 10, rotation: 0, opacity: 0.4, color: C.white, delay: 0.3 },
  { id: 41, icon: 'star', top: '32%', left: '84%', size: 8, rotation: 0, opacity: 0.35, color: C.pinkSoft, delay: 0.6 },
  { id: 42, icon: 'star', top: '48%', left: '9%', size: 9, rotation: 0, opacity: 0.3, color: C.white, delay: 0.9 },
  { id: 43, icon: 'star', top: '76%', left: '87%', size: 10, rotation: 0, opacity: 0.35, color: C.blush, delay: 0.4 },
  { id: 44, icon: 'star', top: '88%', left: '72%', size: 7, rotation: 0, opacity: 0.3, color: C.white, delay: 0.7 },
  { id: 45, icon: 'star', top: '20%', left: '62%', size: 8, rotation: 0, opacity: 0.25, color: C.cream, delay: 1.0 },

  // 🎁 Gifts – subtle Valentine accents
  { id: 60, icon: 'gift', top: '88%', left: '4%', size: 22, rotation: -8, opacity: 0.2, color: C.white, delay: 0.6 },
  { id: 61, icon: 'gift', top: '6%', left: '78%', size: 18, rotation: 12, opacity: 0.18, color: C.pinkSoft, delay: 0.9 },

  // 💎 Gems – luxe sparkle
  { id: 70, icon: 'gem', top: '42%', left: '95%', size: 16, rotation: 15, opacity: 0.25, color: C.white, delay: 0.5 },
  { id: 71, icon: 'gem', top: '73%', left: '10%', size: 14, rotation: -20, opacity: 0.2, color: C.pinkMid, delay: 0.8 },

  // 🍒 Cherries – playful
  { id: 80, icon: 'cherry', top: '13%', left: '93%', size: 20, rotation: 10, opacity: 0.18, color: C.peach, delay: 0.7 },
  { id: 81, icon: 'cherry', top: '82%', left: '2%', size: 18, rotation: -15, opacity: 0.18, color: C.pinkSoft, delay: 1.0 },

  // 🌸 Flowers – feminine touch
  { id: 90, icon: 'flower', top: '30%', left: '4%', size: 22, rotation: 20, opacity: 0.2, color: C.white, delay: 0.6 },
  { id: 91, icon: 'flower', top: '68%', left: '93%', size: 20, rotation: -25, opacity: 0.18, color: C.pinkSoft, delay: 0.9 },
];

/* ---- Icon lookup ------------------------------------------------- */

const ICON_MAP: Record<
  DecoIcon,
  React.FC<{ size?: number; color?: string; fill?: string; strokeWidth?: number }>
> = {
  heart: Heart,
  sparkles: Sparkles,
  star: Star,
  gift: Gift,
  gem: Gem,
  cherry: Cherry,
  flower: Flower2,
};

/* ---- Animation variants ----------------------------------------- */

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -8, 0, 6, 0],
    rotate: [0, i % 2 === 0 ? 4 : -4, 0, i % 2 === 0 ? -3 : 3, 0],
    transition: {
      duration: 5 + (i % 4),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: (i % 5) * 0.3,
    },
  }),
};

const twinkleVariants = {
  animate: (i: number) => ({
    opacity: [0.15, 0.55, 0.15],
    scale: [0.8, 1.3, 0.8],
    transition: {
      duration: 2 + (i % 3),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: (i % 6) * 0.3,
    },
  }),
};

const sparkleVariants = {
  animate: (i: number) => ({
    scale: [1, 1.4, 1],
    opacity: [0.25, 0.6, 0.25],
    rotate: [0, 20, 0],
    transition: {
      duration: 3 + (i % 2),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: (i % 4) * 0.4,
    },
  }),
};

const gemVariants = {
  animate: (i: number) => ({
    scale: [1, 1.15, 1],
    opacity: [0.2, 0.4, 0.2],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4 + (i % 3),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: (i % 5) * 0.3,
    },
  }),
};

/* ---- Variant picker --------------------------------------------- */

function getVariants(icon: DecoIcon) {
  switch (icon) {
    case 'heart':
    case 'cherry':
    case 'flower':
      return floatVariants;
    case 'star':
      return twinkleVariants;
    case 'sparkles':
      return sparkleVariants;
    case 'gift':
    case 'gem':
      return gemVariants;
  }
}

/* ------------------------------------------------------------------ */

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative flex justify-center items-center py-10 md:py-16 w-full min-h-screen overflow-hidden hero-section'
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 20%, rgba(252,179,205,0.5) 0%, transparent 60%),
          radial-gradient(ellipse 70% 50% at 80% 30%, rgba(255,228,209,0.45) 0%, transparent 55%),
          radial-gradient(ellipse 90% 70% at 50% 80%, rgba(245,179,211,0.4) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 75% 70%, rgba(253,217,230,0.35) 0%, transparent 50%),
          linear-gradient(135deg, #F25E8F 0%, #F77FAA 25%, #FA9EBF 50%, #F88DA0 75%, #F25E8F 100%)
        `,
      }}
    >
      {/* ── Subtle animated shimmer overlay ────────────────────── */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        animate={{
          background: [
            'radial-gradient(ellipse 50% 40% at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 70% 60%, rgba(255,255,255,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Decorative Lucide icon wallpaper */}
      {decorations.map((d) => {
        const Icon = ICON_MAP[d.icon];
        const isHeart = d.icon === 'heart';
        const isFilled = d.filled;

        return (
          <motion.div
            key={d.id}
            custom={d.id}
            initial={{ opacity: 0, scale: 0 }}
            animate='animate'
            variants={getVariants(d.icon)}
            className='absolute pointer-events-none'
            style={{
              top: d.top,
              left: d.left,
              opacity: d.opacity,
              transform: `rotate(${d.rotation}deg)`,
            }}
          >
            <Icon
              size={d.size}
              color={d.color}
              fill={isHeart && isFilled ? d.color : 'none'}
              strokeWidth={isHeart && !isFilled ? 1.5 : 1.2}
            />
          </motion.div>
        );
      })}

      {/* Logo */}
      <Link href='/' className='top-8 left-6 z-20 absolute'>
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
            className='w-40 lg:w-55'
          />
        </motion.div>
      </Link>

      {/* Poster / Flyer */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className='z-10 relative shadow-[0_25px_80px_rgba(0,0,0,0.25),0_0_50px_rgba(252,179,205,0.25)] rounded-xl w-[92%] max-w-100 sm:max-w-110 md:max-w-130 lg:max-w-145 2xl:max-w-165 xl:max-w-155 overflow-hidden'
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
