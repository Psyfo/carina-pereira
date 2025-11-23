'use client';

import React from 'react';
import { getProMakeupPriceDisplay } from '@/lib/promotions';

interface PromotionalPriceProps {
  /** Additional CSS classes for the container */
  className?: string;
  /** Text size class for the prices */
  priceSize?: string;
  /** Whether to show on same line or stacked */
  inline?: boolean;
}

/**
 * Displays promotional pricing for the Pro Makeup Course
 * Shows original price with strikethrough and discounted price when promotion is active
 * Automatically reverts to regular price display when promotion ends
 */
export default function PromotionalPrice({
  className = '',
  priceSize = 'text-[15px]',
  inline = false,
}: PromotionalPriceProps) {
  const { isActive, originalPrice, discountedPrice } =
    getProMakeupPriceDisplay();

  if (!isActive) {
    // Show regular price when promotion is not active
    return (
      <span className={`font-inclusive ${priceSize} ${className}`}>
        Cost: {originalPrice}
      </span>
    );
  }

  // Show promotional pricing
  return (
    <span
      className={`font-inclusive ${className} ${
        inline ? 'inline-flex items-center gap-2' : 'flex flex-col'
      }`}
    >
      <span className='flex items-center gap-2'>
        <span className={`line-through text-gray-500 ${priceSize}`}>
          {originalPrice}
        </span>
        <span className={`text-cpMagenta font-bold ${priceSize}`}>
          {discountedPrice}
        </span>
      </span>
      {!inline && (
        <span className='mt-1 font-bold text-[13px] text-cpMagenta'>
          50% OFF - Limited Time!
        </span>
      )}
    </span>
  );
}
