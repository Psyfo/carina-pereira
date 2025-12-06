# Pro Makeup Course 50% Off Promotion Documentation

## Overview

**Promotion:** 50% OFF Pro Makeup Course  
**Original Price:** R15,000  
**Sale Price:** R7,500  
**Duration:** Until November 30, 2025 (inclusive)  
**Auto-Expires:** December 1, 2025 at 00:00 SAST

This document details all instances where the Pro Makeup Course promotion appears on the website and how to manage the promotion lifecycle.

---

## Automatic Rollback System

The promotion is designed to **automatically revert** after November 30, 2025 without any manual intervention required. All promotional elements use date-based conditional rendering that will hide promotional content and restore original pricing on December 1, 2025.

### Testing the Rollback

To test the promotion display or rollback before the actual dates:

1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add one of these environment variables:
   - `NEXT_PUBLIC_FORCE_SHOW_PROMOTION=true` - Force promotion to show
   - `NEXT_PUBLIC_FORCE_SHOW_PROMOTION=false` - Force promotion to hide
3. Restart the development server
4. Remove the variable when testing is complete

---

## Implementation Summary

### New Files Created

1. **`src/lib/promotions.ts`**

   - Central promotion configuration and utilities
   - Date checking logic (includes Nov 30, ends Dec 1)
   - Price calculation functions
   - Price formatting helpers
   - Environment variable override for testing

2. **`src/components/PromotionalPrice/PromotionalPrice.tsx`**
   - Reusable component for displaying promotional pricing
   - Shows strikethrough original price + discounted price
   - Automatically reverts to standard pricing after promotion ends
   - Customizable styling via props

---

## Promotional Elements by Location

### 1. Top Banner Announcement

**File:** `src/components/Announcement/Announcement.tsx`  
**Location:** Fixed top of every page  
**Changes:**

- Changed background from `cpOrange` to `cpMagenta` (premium feel)
- Updated text to: "🎉 50% OFF Pro Makeup Course - Only R7 500 until November 30th!"
- Updated link from `/courses/masterclass` to `/courses/pro-makeup`
- Added conditional rendering - component returns `null` when promotion inactive
- **Uncommented in:** `src/app/(public)/layout.tsx`

**Visual Style:**

- Background: `cpMagenta` (#E62E6B)
- Text: White, 13px, Inter font
- Height: 30px
- Position: Fixed top, z-index 40

**Rollback:** Automatically hides entire banner on December 1st

---

### 2. Pro Makeup Course Detail Page (AboutSection)

**File:** `src/app/(public)/courses/pro-makeup/components/AboutSection/AboutSection.tsx`  
**Location:** Right-side pricing box on detail page  
**Original:** `Cost: R15 000` (line 88)

**Changes:**

- Replaced static price text with `<PromotionalPrice>` component
- Component automatically shows:
  - **During Promotion:** ~~R15 000~~ **R7 500** + "50% OFF - Limited Time!"
  - **After Promotion:** `Cost: R15 000`

**Visual Style:**

- Original price: Line-through, gray (#6B7280)
- Discounted price: cpMagenta (#E62E6B), bold
- Font: Inclusive Sans, 15px
- Additional text: "50% OFF - Limited Time!" (13px, cpMagenta, bold)

**Rollback:** Component automatically reverts to standard "Cost: R15 000" display

---

### 3. Landing Page Course List

**File:** `src/app/(public)/components/CoursesSection/CoursesSection.tsx`  
**Location:** Left section of courses overview (first course in list)

**Changes:**

- Added `showPromotion` state variable
- Wrapped pro-makeup section in `relative` container
- **New Badge:** "50% OFF" badge (absolute positioned top-right)
- **New Pricing Text:** "🎉 Limited Time: Only R7 500 (was R15 000) until November 30th!"

**Badge Visual Style:**

- Background: `cpMagenta` (#E62E6B)
- Text: White, 11px, Inter font, bold
- Padding: 15px horizontal, 6px vertical
- Border radius: Full (rounded-full)
- Position: Absolute, top-right (15px from edges)

**Pricing Text Visual Style:**

- Color: `cpMagenta`
- Font: Inclusive Sans, 15px, bold
- Margin: 15px bottom
- Animation: Fade-in from left

**Rollback:** Badge and promotional text automatically hidden, standard description remains

---

### 4. Courses Grid Page (Course Cards)

**File:** `src/app/(public)/courses/components/CoursesSection/CoursesSection.tsx`  
**Location:** Pro Makeup course card in grid layout  
**Original:** `price: 'R15000'` (line 51)

**Changes:**

- Added `showPromotion` check
- **New Badge:** "LIMITED TIME" badge (absolute positioned top-right)
- **Updated Price Display:**
  - During promotion: ~~R15 000~~ **R7 500** (side-by-side)
  - After promotion: `R15 000` (standard format with space)

**Badge Visual Style:**

- Background: `cpOrange` (#FA7E39) - for urgency
- Text: White, 10px, Inter font, bold
- Padding: 12px horizontal, 6px vertical
- Border radius: Full
- Position: Absolute, top 20px, right 20px
- Z-index: 10

**Price Display Visual Style:**

- Original price: Line-through, gray, 20px
- Discounted price: cpMagenta, bold, 20px
- Layout: Flexbox, horizontal, 2px gap between prices

**Rollback:** Badge hidden, price displays as "R15 000" (with space formatting)

---

### 5. Enrollment Form Modal

**File:** `src/components/EnrollmentFormModal/EnrollmentFormModal.tsx`  
**Location:** Dropdown list in enrollment modal  
**Original:** `'Pro Makeup Course'` in programs array

**Changes:**

- Converted `programs` from static array to `getPrograms()` function
- Function checks promotion status and returns appropriate text:
  - During promotion: `'Pro Makeup Course (50% OFF - R7 500)'`
  - After promotion: `'Pro Makeup Course'`
- Component now calls `getPrograms()` to get dynamic list
- Default selection automatically updates based on promotion status

### 5. Enrollment Form Modal

**File:** `src/components/EnrollmentFormModal/EnrollmentFormModal.tsx`  
**Location:** Dropdown list in enrollment modal  
**Original:** `'Pro Makeup Course'` in programs array

**Changes:**

- Converted `programs` from static array to `getPrograms()` function
- **All courses now display pricing** for visitor clarity:
  - Pro Makeup Course - R7 500 (50% OFF) _[during promotion]_
  - Pro Makeup Course - R15 000 _[after promotion]_
  - Express Makeup Course - R5 500
  - Hairstyling Course - R3 000
  - Online Express Makeup Course - R4 800
- Function checks promotion status and returns appropriate text
- Default selection automatically updates based on promotion status

**Visual Style:**

- Maintains existing modal styling
- Dropdown: cpMagenta background modal
- Active selection: cpPink highlight
- Text: 10px Inclusive Sans

**Rollback:** Pro Makeup pricing automatically reverts to R15 000, other courses remain with pricing displayed

---

### 6. Home Page Hero Section

**File:** `src/app/(public)/components/HeroSection/HeroSection.tsx`  
**Location:** Bottom-left of hero section (landing page only)  
**Original:** Commented out promotional element

**Changes:**

- **New promotional CTA element** appears during promotion period
- Conditionally rendered based on `isProMakeupPromotionActive()`
- **Components:**
  - "LIMITED TIME OFFER" badge (cpMagenta with white border)
  - Course title with strikethrough original price
  - Discounted price in cpPink
  - Savings message: "Save 50% • Until November 30th"
  - "Enroll Now" CTA button

**Visual Style:**

- Badge: cpMagenta background, white border (2px), rounded corners (15px)
- Badge text: Inter font, 14-16px, white, uppercase, bold
- Main text: Tan Ashford, 25-47px (responsive), white with drop shadow
- Original price: Line-through, 20-35px, 80% opacity
- Discounted price: cpPink, bold, matches main text size
- Savings text: Inclusive Sans, 14-18px, normal case
- CTA button: cpPink background, black border (2px), rounded-full, hover effect
- Position: Absolute, bottom-left (40px left, 70px bottom)
- Animation: Fade-in from bottom with 1s delay

**Rollback:** Entire promotional element automatically hidden, hero returns to clean state

---

## Brand Aesthetics Compliance

All promotional elements follow the established brand guidelines from `docs/BRAND.md`:

### Color Usage

- **cpMagenta (#E62E6B):** Premium pricing, main promotional color, call-to-action
- **cpOrange (#FA7E39):** Urgency indicator (LIMITED TIME badge)
- **cpPink (#F1A0C5):** Standard CTA buttons (unchanged)
- **Gray (#6B7280):** Strikethrough original prices

### Typography

- **Tan Ashford:** Headings maintained
- **Inclusive Sans:** Body text and pricing (maintains consistency)
- **Inter:** Banner text and badges (technical/accent text)

### Design Patterns

- **Rounded corners:** All badges use `rounded-full` (consistent with brand)
- **Black borders:** Maintained on cards and containers
- **Animations:** Framer Motion fade-ins preserved
- **Spacing:** Consistent padding and margins per brand standards

---

## Files Modified (Summary)

| File                                                                           | Type     | Changes                                               |
| ------------------------------------------------------------------------------ | -------- | ----------------------------------------------------- |
| `src/lib/promotions.ts`                                                        | NEW      | Core promotion logic and utilities                    |
| `src/components/PromotionalPrice/PromotionalPrice.tsx`                         | NEW      | Reusable price display component                      |
| `src/components/Announcement/Announcement.tsx`                                 | MODIFIED | Updated banner for pro-makeup promotion               |
| `src/app/(public)/layout.tsx`                                                  | MODIFIED | Uncommented Announcement component                    |
| `src/app/(public)/components/HeroSection/HeroSection.tsx`                      | MODIFIED | Added promotional CTA element to home hero            |
| `src/app/(public)/courses/pro-makeup/components/AboutSection/AboutSection.tsx` | MODIFIED | Replaced static price with PromotionalPrice component |
| `src/app/(public)/components/CoursesSection/CoursesSection.tsx`                | MODIFIED | Added badge and promotional pricing text              |
| `src/app/(public)/courses/components/CoursesSection/CoursesSection.tsx`        | MODIFIED | Added LIMITED TIME badge and dual pricing             |
| `src/components/EnrollmentFormModal/EnrollmentFormModal.tsx`                   | MODIFIED | All courses now show pricing + dynamic promo          |

**Total:** 2 new files, 7 modified files

---

## Manual Rollback (If Needed)

If you need to manually disable the promotion before December 1st:

### Option 1: Environment Variable (Recommended)

Add to `.env.local`:

```
NEXT_PUBLIC_FORCE_SHOW_PROMOTION=false
```

### Option 2: Temporarily Change End Date

Edit `src/lib/promotions.ts`:

```typescript
endDate: new Date('2025-11-24T00:00:00+02:00'), // Change to desired end date
```

### Option 3: Comment Out Announcement

In `src/app/(public)/layout.tsx`:

```tsx
{
  /* <Announcement /> */
}
```

---

## Extending the Promotion

To extend the promotion beyond November 30th:

1. Edit `src/lib/promotions.ts`
2. Update the `endDate` value:
   ```typescript
   endDate: new Date('2025-12-15T00:00:00+02:00'), // Example: extend to Dec 15
   ```
3. Redeploy the application

All promotional elements will continue to display until the new end date.

---

## Note: Legacy External Enrollment Link

The Pro Makeup Course detail page (`/courses/pro-makeup`) contains a CTA section that links to:

- **URL:** `https://academy.carinapereira.com/product/pro-makeup-course/`
- **File:** `src/app/(public)/courses/pro-makeup/components/CTASection/CTASection.tsx`

This external link points to a **legacy enrollment system** and is **NOT automatically updated** by this promotion system. If the external site needs promotional pricing, it must be updated manually on that platform.

The internal enrollment form modal (used throughout the site) **does** reflect the promotional pricing automatically.

---

## Verification Checklist

After deployment, verify the promotion appears correctly:

- [ ] Top banner shows promotion message in cpMagenta
- [ ] Banner links to `/courses/pro-makeup`
- [ ] **Home hero section** shows promotional CTA (bottom-left) with pricing and "Enroll Now" button
- [ ] Home hero promotional element has proper drop shadow for readability
- [ ] Pro Makeup detail page shows ~~R15 000~~ **R7 500** in pricing box
- [ ] Landing page course list shows "50% OFF" badge on pro-makeup section
- [ ] Landing page shows promotional pricing text under pro-makeup description
- [ ] Courses grid shows "LIMITED TIME" badge on pro-makeup card
- [ ] Courses grid shows dual pricing (strikethrough + discounted)
- [ ] **Enrollment form dropdown** shows ALL courses with pricing
- [ ] Enrollment form shows "Pro Makeup Course - R7 500 (50% OFF)" during promotion
- [ ] Enrollment form shows other courses: Express (R5 500), Hairstyling (R3 000), Online Express (R4 800)
- [ ] All promotional colors match brand guidelines
- [ ] Test with `NEXT_PUBLIC_FORCE_SHOW_PROMOTION=false` to verify rollback
- [ ] Hero section returns to clean state when promotion ends

---

## Support

For questions or issues:

1. Check the `src/lib/promotions.ts` file for promotion logic
2. Verify environment variables are set correctly
3. Confirm date/timezone settings (SAST +02:00)
4. Review browser console for any React errors

---

_Last Updated: November 23, 2025_  
_Promotion Auto-Expires: December 1, 2025 00:00 SAST_
