# Styling Guidelines

> **Purpose**: Tailwind CSS v4 styling standards and responsive design patterns.

---

## ✅ Always Follow

### 1. Tailwind CSS v4

```tsx
// ✅ Use Tailwind v4 utilities
<div className="bg-cpCream text-black p-6 rounded-2xl">
  <h2 className="font-tan-ashford text-3xl lowercase">Course Title</h2>
</div>

// ✅ Use brand color utilities (defined in globals.css)
<button className="bg-cpOrange text-white hover:opacity-90">
  Enroll Now
</button>

// ❌ Don't use arbitrary hex values
<div className="bg-[#FFFEF3]"> {/* Use bg-cpCream instead */}

// ❌ Don't use inline styles
<div style={{ backgroundColor: '#FA7E39' }}> {/* Use bg-cpOrange */}
```

### 2. Navigation Bar Standards

**Critical - All pages must follow this pattern:**

- **Desktop**: Centered logo, right-aligned navigation links
- **Mobile**: Logo left, hamburger menu right
- **Positioning**: `fixed top-0` at all breakpoints
- **Z-Index**: `z-30`
- **Height**: `h-24` (96px)
- **Padding**: `py-6` (24px top/bottom)

> **Important**: Always account for navigation when creating sticky elements (use `top-24`)!

### 3. Sticky Elements - Navigation Offset (CRITICAL)

```tsx
// ✅ CORRECT: Accounts for fixed navbar (h-24)
<section className="sticky top-24 z-20">
  Sticky content below navbar
</section>

// ❌ WRONG: Will hide behind navbar
<section className="sticky top-0 z-20">
  Hidden content
</section>

// Common Sticky Element Z-Index Hierarchy:
// - Navbar:        z-30 (highest, always visible)
// - Sticky Header: z-20 (below navbar)
// - Modals:        z-40 (above everything)
// - Overlays:      z-50 (toast notifications)
```

### Navigation Offset Reference Table

| Element Type          | Top Position | Z-Index | Notes         |
| --------------------- | ------------ | ------- | ------------- |
| Fixed Navbar          | `top-0`      | `z-30`  | Always at top |
| Sticky Section Header | `top-24`     | `z-20`  | Below navbar  |
| Sticky Sidebar        | `top-24`     | `z-10`  | Below headers |
| Modal Backdrop        | `top-0`      | `z-40`  | Covers navbar |
| Mobile Overlay        | `top-0`      | `z-40`  | Above navbar  |

### 4. Responsive Design

```tsx
// Mobile-first approach
<div className="
  // Mobile (default)
  px-4 py-8

  // Tablet (md: 768px+)
  md:px-8 md:py-12

  // Desktop (lg: 1024px+)
  lg:px-16 lg:py-16

  // Wide Desktop (xl: 1280px+)
  xl:px-24 xl:py-20
">
  Content
</div>

// Grid layouts
<div className="
  grid grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6
">
  {courses.map(course => <CourseCard key={course.id} {...course} />)}
</div>
```

### 5. Consistent Spacing

```tsx
// Section spacing
<section className="py-16 md:py-24 lg:py-32">
  <div className="container mx-auto px-6 md:px-12">
    {/* Content */}
  </div>
</section>

// Component spacing
<div className="space-y-6">
  <Component1 />
  <Component2 />
  <Component3 />
</div>

// Card spacing
<div className="p-6 md:p-8 lg:p-10 rounded-2xl">
  Card content
</div>
```

### 6. Brand-Specific Patterns

```tsx
// Gradient backgrounds (brand-approved)
<div className="bg-linear-to-br from-cpCream via-cpPink/20 to-cpOrange/20">
  Gradient section
</div>

// Rounded corners (brand style)
<div className="rounded-2xl"> {/* Large rounded for cards */}
<button className="rounded-lg"> {/* Medium for buttons */}
<input className="rounded-full"> {/* Pill shape for inputs */}

// Shadow styles
<div className="shadow-lg hover:shadow-xl transition-shadow">
  Elevated card
</div>
```

---

## ❌ Never Do

- Don't use inline styles unless absolutely necessary
- Don't use arbitrary values like `w-[345px]` without good reason - use Tailwind scale
- Don't ignore responsive design - always design mobile-first
- **Don't create sticky elements without navigation offset** - They'll hide behind the navbar
- **Don't forget the brand's lowercase aesthetic** - Use lowercase text for headings with Tan Ashford
- **Don't use generic grays** - Use brand colors (cpCream for backgrounds, not gray-100)

---

## Quick Reference

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Common Spacing Values

- `p-4`: 16px
- `p-6`: 24px
- `p-8`: 32px
- `p-12`: 48px
- `p-16`: 64px

### Border Radius

- `rounded-lg`: 8px (buttons)
- `rounded-xl`: 12px
- `rounded-2xl`: 16px (cards)
- `rounded-3xl`: 24px (modals)
- `rounded-full`: 9999px (pills, avatars)

---

[← Back to Frontend Rules Index](../frontend-rules.md)
