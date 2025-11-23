/**
 * Promotion Configuration and Utilities
 * Manages time-based promotions with automatic start/end dates
 */

// Pro Makeup Course Promotion Configuration
export const PRO_MAKEUP_PROMOTION = {
  originalPrice: 15000,
  discountPercentage: 50,
  // Promotion runs until end of November 30, 2025 (inclusive)
  // Ends at start of December 1, 2025
  endDate: new Date('2025-12-01T00:00:00+02:00'), // SAST timezone
} as const;

/**
 * Check if the pro makeup course promotion is currently active
 * Can be overridden with NEXT_PUBLIC_FORCE_SHOW_PROMOTION environment variable for testing
 */
export function isProMakeupPromotionActive(): boolean {
  // Check for testing override
  if (process.env.NEXT_PUBLIC_FORCE_SHOW_PROMOTION === 'true') {
    return true;
  }
  if (process.env.NEXT_PUBLIC_FORCE_SHOW_PROMOTION === 'false') {
    return false;
  }

  const now = new Date();
  return now < PRO_MAKEUP_PROMOTION.endDate;
}

/**
 * Calculate the discounted price for the pro makeup course
 */
export function getProMakeupDiscountedPrice(): number {
  const { originalPrice, discountPercentage } = PRO_MAKEUP_PROMOTION;
  return originalPrice * (1 - discountPercentage / 100);
}

/**
 * Format price in South African Rand with space separator
 * @param price - Price in rands
 * @param includeSpace - Whether to include space between R and amount (default: true)
 */
export function formatPrice(
  price: number,
  includeSpace: boolean = true
): string {
  const formattedNumber = price
    .toLocaleString('en-ZA', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(',', ' ');

  return includeSpace
    ? `R${formattedNumber}`
    : `R${formattedNumber.replace(' ', '')}`;
}

/**
 * Get promotional price display text for pro makeup course
 */
export function getProMakeupPriceDisplay(): {
  isActive: boolean;
  originalPrice: string;
  discountedPrice: string;
  savings: string;
} {
  const isActive = isProMakeupPromotionActive();
  const originalPrice = formatPrice(PRO_MAKEUP_PROMOTION.originalPrice);
  const discountedPrice = formatPrice(getProMakeupDiscountedPrice());
  const savings = formatPrice(
    PRO_MAKEUP_PROMOTION.originalPrice - getProMakeupDiscountedPrice()
  );

  return {
    isActive,
    originalPrice,
    discountedPrice,
    savings,
  };
}
