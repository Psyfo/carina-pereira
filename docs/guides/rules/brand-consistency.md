# Brand Consistency Rules

> **Purpose**: Ensure all design and UI elements adhere to the Carina Pereira International brand guidelines.

---

## ✅ Always Follow

### 1. Check Brand Document First

- Always read `docs/branding/brand-guidelines.md` before making design decisions
- Don't guess brand colors, typography, or styling - verify against the brand guide
- Brand colors are defined in `src/styles/globals.css` @theme block - use these custom properties via Tailwind

### 2. Brand Colors - Required

```tsx
// Primary Brand Colors (from src/styles/globals.css @theme block)
className = 'bg-cpCream text-black';      // Cream background (#FFFEF3)
className = 'bg-cpOrange text-white';     // Primary CTA, hero sections (#FA7E39)
className = 'bg-cpPink text-white';       // Secondary highlights (#F1A0C5)
className = 'bg-cpMagenta text-white';    // Accent, interactions (#E62E6B)

// Example Usage
<button className="bg-cpOrange text-white px-6 py-3 rounded-lg">
  Enroll Now
</button>

<section className="bg-cpCream py-16">
  <h2 className="text-cpMagenta">Course Offerings</h2>
</section>

<div className="border-cpPink bg-cpPink/10">
  Highlighted content
</div>
```

### 3. Typography Hierarchy

```tsx
// Primary Font: Tan Ashford (Display/Headings)
<h1 className="font-tan-ashford text-5xl tracking-tight lowercase">
  Make-up made easy with Carina
</h1>
<h2 className="font-tan-ashford text-4xl lowercase">Professional Courses</h2>

// Body Text: Inclusive Sans
<p className="font-inclusive text-base leading-relaxed">
  Body content for course descriptions
</p>

// Alternative: Inter (for UI elements)
<span className="font-inter text-sm">Navigation items</span>
```

### 4. Button Styles

```tsx
// Primary Button (Orange)
<button className="
  bg-cpOrange
  text-white
  px-6 py-3
  rounded-lg
  font-tan-ashford
  lowercase
  tracking-wide
  hover:opacity-90
  transition-opacity
  shadow-md hover:shadow-lg
">
  enroll now
</button>

// Secondary Button (Pink/Magenta)
<button className="
  bg-transparent
  border-2 border-cpMagenta
  text-cpMagenta
  px-6 py-3
  rounded-lg
  font-tan-ashford
  lowercase
  tracking-wide
  hover:bg-cpMagenta/10
  transition-colors
">
  learn more
</button>

// Outline Button (Cream/Neutral)
<button className="
  bg-transparent
  border-2 border-black
  text-black
  px-6 py-3
  rounded-full
  font-inclusive
  hover:bg-black
  hover:text-white
  transition-all
">
  Get Directions
</button>
```

---

## ❌ Never Do

- Don't use hardcoded hex colors - always use Tailwind utilities (cpCream, cpOrange, cpPink, cpMagenta)
- Don't use fonts other than Tan Ashford (headings), Inclusive Sans (body), or Inter (UI elements)
- Don't create custom button styles without referencing brand guide
- Don't ignore the cream/orange/pink/magenta brand color scheme
- **Don't use uppercase text on buttons** - brand uses lowercase styling with Tan Ashford font

---

## Quick Reference

### Brand Colors

- **Cream**: `bg-cpCream` (#FFFEF3) - Backgrounds
- **Orange**: `bg-cpOrange` (#FA7E39) - Primary CTAs
- **Pink**: `bg-cpPink` (#F1A0C5) - Secondary accents
- **Magenta**: `bg-cpMagenta` (#E62E6B) - Highlights, links

### Typography

- **Headings**: Tan Ashford (lowercase styling)
- **Body**: Inclusive Sans
- **UI Elements**: Inter

---

[← Back to Frontend Rules Index](../frontend-rules.md)
