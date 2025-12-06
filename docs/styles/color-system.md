# CP Brand Color System

> **Purpose**: This document explains the enhanced CP brand color palette with full shade support and provides examples of how to use the new color system.

---

## Overview

The Carina Pereira brand now has a comprehensive color palette with 10 shades (50-900) for each primary brand color. This gives you flexibility while maintaining brand consistency.

---

## Color Palette

### CP Cream (Neutral Light - Backgrounds)

**Base Color**: `#FFFEF3` (100 - warm cream background)

```css
--color-cpCream-50: #fffff9; /* Lightest cream */
--color-cpCream-100: #fffef3; /* ✅ Default (current brand color) */
--color-cpCream-200: #fffbe5;
--color-cpCream-300: #fff8d7;
--color-cpCream-400: #fff5c9;
--color-cpCream-500: #fff2bb;
--color-cpCream-600: #e6d9a8;
--color-cpCream-700: #ccc095;
--color-cpCream-800: #b3a782;
--color-cpCream-900: #998e6f; /* Darkest cream */
--color-cpCream: var(--color-cpCream-100); /* Alias for default */
```

**Usage**:

```tsx
<div className="bg-cpCream">Default cream background</div>
<div className="bg-cpCream-50">Lightest cream</div>
<div className="bg-cpCream-200">Light cream</div>
<div className="bg-cpCream-700">Dark cream for text on light</div>
```

---

### CP Orange (Primary Brand - CTAs)

**Base Color**: `#FA7E39` (500 - vibrant primary CTA color)

```css
--color-cpOrange-50: #fff4ed; /* Lightest orange tint */
--color-cpOrange-100: #ffe4d1;
--color-cpOrange-200: #ffc9a3;
--color-cpOrange-300: #ffa66e;
--color-cpOrange-400: #fc9152;
--color-cpOrange-500: #fa7e39; /* ✅ Default (current brand color) */
--color-cpOrange-600: #e86820;
--color-cpOrange-700: #c75316;
--color-cpOrange-800: #a04213;
--color-cpOrange-900: #7d3310; /* Darkest orange */
--color-cpOrange: var(--color-cpOrange-500); /* Alias for default */
```

**Usage**:

```tsx
{
  /* Primary CTA - Default */
}
<button className='bg-cpOrange text-white'>Enroll Now</button>;

{
  /* Hover states */
}
<button className='bg-cpOrange hover:bg-cpOrange-600'>Darker on hover</button>;

{
  /* Light backgrounds */
}
<div className='bg-cpOrange-50 text-cpOrange-900'>Subtle orange section</div>;

{
  /* Borders and accents */
}
<div className='border-2 border-cpOrange-300'>Light orange border</div>;
```

---

### CP Pink (Secondary Highlight)

**Base Color**: `#F1A0C5` (400 - soft secondary accent)

```css
--color-cpPink-50: #fef5fa; /* Lightest pink tint */
--color-cpPink-100: #fce5f0;
--color-cpPink-200: #f9cce1;
--color-cpPink-300: #f5b3d3;
--color-cpPink-400: #f1a0c5; /* ✅ Default (current brand color) */
--color-cpPink-500: #ed8db7;
--color-cpPink-600: #e26fa1;
--color-cpPink-700: #d44e84;
--color-cpPink-800: #b3386b;
--color-cpPink-900: #8f2a54; /* Darkest pink */
--color-cpPink: var(--color-cpPink-400); /* Alias for default */
```

**Usage**:

```tsx
{
  /* Secondary buttons */
}
<button className='bg-cpPink text-white'>Learn More</button>;

{
  /* Subtle highlights */
}
<div className='bg-cpPink-50 border-l-4 border-cpPink-500'>
  Highlighted callout
</div>;

{
  /* Gradient backgrounds */
}
<div className='bg-linear-to-r from-cpPink-100 to-cpCream'>
  Soft pink to cream gradient
</div>;

{
  /* Dark pink for emphasis */
}
<span className='text-cpPink-800 font-semibold'>Important text</span>;
```

---

### CP Magenta (Accent/Interaction)

**Base Color**: `#E62E6B` (500 - bold accent for links/highlights)

```css
--color-cpMagenta-50: #fef0f5; /* Lightest magenta tint */
--color-cpMagenta-100: #fdd9e6;
--color-cpMagenta-200: #fcb3cd;
--color-cpMagenta-300: #f88db4;
--color-cpMagenta-400: #f25e8f;
--color-cpMagenta-500: #e62e6b; /* ✅ Default (current brand color) */
--color-cpMagenta-600: #d01756;
--color-cpMagenta-700: #ad1247;
--color-cpMagenta-800: #8a0e39;
--color-cpMagenta-900: #6b0a2c; /* Darkest magenta */
--color-cpMagenta: var(--color-cpMagenta-500); /* Alias for default */
```

**Usage**:

```tsx
{
  /* Links and interactive elements */
}
<a href='#' className='text-cpMagenta hover:text-cpMagenta-600'>
  Read more
</a>;

{
  /* Accent backgrounds */
}
<div className='bg-cpMagenta-100 p-4 rounded-lg'>Light magenta card</div>;

{
  /* Bold CTAs */
}
<button className='bg-cpMagenta text-white hover:bg-cpMagenta-700'>
  Special Offer
</button>;

{
  /* Borders and dividers */
}
<hr className='border-cpMagenta-300' />;
```

---

## Common Patterns

### 1. **Hover States**

```tsx
{
  /* Lighter on hover */
}
<button className='bg-cpOrange-600 hover:bg-cpOrange-500'>Get lighter</button>;

{
  /* Darker on hover */
}
<button className='bg-cpOrange-400 hover:bg-cpOrange-600'>Get darker</button>;
```

### 2. **Gradient Backgrounds**

```tsx
<div className="bg-linear-to-br from-cpCream via-cpPink-200 to-cpOrange-200">
  Soft branded gradient
</div>

<div className="bg-linear-to-r from-cpMagenta-500 to-cpPink-400">
  Bold pink-magenta gradient
</div>
```

### 3. **Card Backgrounds with Borders**

```tsx
<div className='bg-cpCream-50 border-2 border-cpOrange-300 rounded-lg p-6'>
  <h3 className='text-cpOrange-700'>Course Title</h3>
  <p className='text-cpCream-900'>Description text</p>
</div>
```

### 4. **Alert/Callout Boxes**

```tsx
{
  /* Info callout */
}
<div className='bg-cpPink-50 border-l-4 border-cpPink-500 p-4'>
  <p className='text-cpPink-900'>Important information</p>
</div>;

{
  /* Warning callout */
}
<div className='bg-cpOrange-50 border-l-4 border-cpOrange-600 p-4'>
  <p className='text-cpOrange-900'>Limited spots available!</p>
</div>;
```

### 5. **Text Colors with Contrast**

```tsx
{
  /* Light backgrounds need dark text */
}
<div className='bg-cpCream-100'>
  <h1 className='text-cpMagenta-700'>Heading</h1>
  <p className='text-cpCream-900'>Body text</p>
</div>;

{
  /* Dark backgrounds need light text */
}
<div className='bg-cpOrange-800'>
  <h1 className='text-cpCream-50'>Heading</h1>
  <p className='text-cpOrange-100'>Body text</p>
</div>;
```

### 6. **Overlay Backgrounds**

```tsx
<div className='relative'>
  <img src='/course.jpg' alt='Course' />
  <div className='absolute inset-0 bg-cpMagenta-600/30'>
    <h2 className='text-white'>Course Title</h2>
  </div>
</div>
```

---

## Backward Compatibility

All existing code using the original color names will continue to work:

```tsx
{/* ✅ These still work exactly as before */}
<div className="bg-cpCream">Original cream</div>
<button className="bg-cpOrange">Original orange</button>
<div className="bg-cpPink">Original pink</div>
<a className="text-cpMagenta">Original magenta</a>

{/* ✅ Equivalent to using shade numbers */}
bg-cpCream === bg-cpCream-100
bg-cpOrange === bg-cpOrange-500
bg-cpPink === bg-cpPink-400
bg-cpMagenta === bg-cpMagenta-500
```

---

## Color Selection Guide

### When to Use Each Shade

| Shade       | Use Case                          | Example                              |
| ----------- | --------------------------------- | ------------------------------------ |
| **50**      | Very subtle backgrounds, overlays | `bg-cpOrange-50` for info boxes      |
| **100-200** | Light backgrounds, soft accents   | `bg-cpPink-100` for card backgrounds |
| **300-400** | Medium accents, borders           | `border-cpMagenta-300`               |
| **500**     | **Primary brand color**           | `bg-cpOrange` (default CTA)          |
| **600-700** | Hover states, emphasis            | `hover:bg-cpOrange-600`              |
| **800-900** | Dark text on light, deep accents  | `text-cpMagenta-900`                 |

### Accessibility Considerations

For proper contrast ratios (WCAG AA compliance):

```tsx
{/* ✅ GOOD: High contrast */}
<div className="bg-cpCream-100 text-cpMagenta-900">
  Readable text
</div>

<button className="bg-cpOrange-600 text-white">
  High contrast button
</button>

{/* ❌ BAD: Low contrast */}
<div className="bg-cpPink-100 text-cpPink-200">
  Hard to read
</div>
```

---

## Modular CSS Structure

The color system is now organized into modular files in `src/styles/partials/`:

```
src/styles/
├── globals.css              # Main entry point (imports all partials)
└── partials/
    ├── _theme.css           # Color palette, fonts, theme config
    ├── _fonts.css           # Font-face declarations
    ├── _base.css            # Base styles, resets
    └── _utilities.css       # Custom utilities
```

### Adding New Colors

To add new brand colors in the future, edit `src/styles/partials/_theme.css`:

```css
/* In _theme.css */
@theme {
  /* ... existing colors ... */

  /* New brand color */
  --color-cpBlue-50: #...;
  --color-cpBlue-100: #...;
  /* ... more shades ... */
  --color-cpBlue-500: #...; /* Default shade */
  /* ... more shades ... */
  --color-cpBlue: var(--color-cpBlue-500);
}
```

---

## Quick Reference

### Background Colors

- `bg-cpCream` → Cream background (100)
- `bg-cpCream-{50-900}` → Cream shades
- `bg-cpOrange` → Orange background (500)
- `bg-cpOrange-{50-900}` → Orange shades
- `bg-cpPink` → Pink background (400)
- `bg-cpPink-{50-900}` → Pink shades
- `bg-cpMagenta` → Magenta background (500)
- `bg-cpMagenta-{50-900}` → Magenta shades

### Text Colors

- `text-cpCream-{50-900}` → Cream text
- `text-cpOrange-{50-900}` → Orange text
- `text-cpPink-{50-900}` → Pink text
- `text-cpMagenta-{50-900}` → Magenta text

### Border Colors

- `border-cpCream-{50-900}` → Cream border
- `border-cpOrange-{50-900}` → Orange border
- `border-cpPink-{50-900}` → Pink border
- `border-cpMagenta-{50-900}` → Magenta border

### Gradients

- `from-cpOrange-{50-900}` → Gradient start
- `via-cpPink-{50-900}` → Gradient middle
- `to-cpMagenta-{50-900}` → Gradient end

---

## Migration Notes

### Existing Code

✅ **No changes needed!** All existing code will continue to work.

### New Code

🎨 **Use shades for flexibility:**

```tsx
{/* Before: Limited options */}
<button className="bg-cpOrange">CTA</button>

{/* After: More options */}
<button className="bg-cpOrange hover:bg-cpOrange-600 focus:bg-cpOrange-700">
  CTA with interactive states
</button>

<div className="bg-cpOrange-50 border-cpOrange-300 text-cpOrange-900">
  Subtle orange section
</div>
```

---

**Summary**: The new color system provides 40 brand color shades (10 per color) while maintaining 100% backward compatibility with existing code. Use shades to create more nuanced designs while staying on-brand.

---

_For brand guidelines and color usage examples, see `docs/brand.md`_
_For styling rules and best practices, see `docs/rules.md`_
