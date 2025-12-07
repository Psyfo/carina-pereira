# Scrollbar Styling Guide

> Sophisticated, thin scrollbars matching the Carina Pereira International brand aesthetic

---

## Overview

The site features custom-styled scrollbars across all scrollable elements, designed to be thin, elegant, and consistent with the CP brand colors. The scrollbars use the **cpPink** and **cpMagenta** brand colors for an on-brand, sophisticated appearance.

---

## Global Scrollbar Styling

**Applied to:** All scrollable elements site-wide  
**Location:** `src/styles/partials/_base.css`

### Default Appearance

- **Width/Height:** 6px (thin)
- **Thumb Color:** `cpPink-400` (#F1A0C5)
- **Track:** Transparent
- **Hover State:** `cpPink-600` (darker pink)
- **Active State:** `cpMagenta-500` (bold magenta)
- **Border Radius:** 3px (subtle rounded)

### Browser Support

- **Firefox:** Uses `scrollbar-width: thin` and `scrollbar-color`
- **Webkit (Chrome, Safari, Edge):** Uses `::-webkit-scrollbar-*` pseudo-elements
- **Cross-browser compatible**

---

## Utility Classes

Located in `src/styles/partials/_utilities.css`

### 1. `scrollbar-cp` - Default Brand Scrollbar

Standard 6px scrollbar for general use across the site.

```tsx
<div className='overflow-auto scrollbar-cp'>{/* Scrollable content */}</div>
```

**Colors:**

- Thumb: cpPink-400
- Hover: cpPink-600
- Active: cpMagenta-500

---

### 2. `scrollbar-cp-modal` - Ultra-Thin Modal Scrollbar

Ultra-thin 4px scrollbar specifically designed for modals and compact spaces.

```tsx
<motion.div className='overflow-y-auto scrollbar-cp-modal max-h-[90vh]'>
  {/* Modal content */}
</motion.div>
```

**Colors:**

- Thumb: cpPink-300 (lighter)
- Hover: cpPink-500

**Use cases:**

- Enrollment modals
- Dropdown menus (Headless UI Listbox)
- Compact scrollable areas
- Mobile-friendly interfaces

---

### 3. `scrollbar-cp-magenta` - Magenta Accent Scrollbar

Bold magenta scrollbar for accent areas or important content.

```tsx
<div className='overflow-auto scrollbar-cp-magenta'>
  {/* Featured content */}
</div>
```

**Colors:**

- Thumb: cpMagenta-500
- Hover: cpMagenta-600
- Active: cpMagenta-700

---

### 4. `scrollbar-hidden` - Hidden Scrollbar

Hides scrollbar while maintaining scroll functionality.

```tsx
<div className='overflow-auto scrollbar-hidden'>
  {/* Content with hidden scrollbar */}
</div>
```

---

## Implementation Examples

### Enrollment Form Modal

```tsx
// Main modal container - ultra-thin scrollbar
<motion.div className="max-h-[90vh] overflow-y-auto scrollbar-cp-modal">
  {/* Form content */}
</motion.div>

// Dropdown lists - ultra-thin scrollbar
<ListboxOptions className="max-h-60 overflow-auto scrollbar-cp-modal">
  {options.map(option => ...)}
</ListboxOptions>
```

### Course Pages

```tsx
// Course details section
<section className='overflow-y-auto scrollbar-cp'>
  {/* Course information */}
</section>
```

### Gallery or Image Grid

```tsx
// Horizontal scrolling gallery
<div className="overflow-x-auto scrollbar-cp">
  <div className="flex gap-4">
    {images.map(img => ...)}
  </div>
</div>
```

---

## Design Principles

### 1. **Thin & Unobtrusive**

- 6px standard, 4px for modals
- Doesn't distract from content
- Suitable for short screens

### 2. **Brand-Aligned Colors**

- Uses cpPink for primary thumb color
- cpMagenta for interactive states
- Transparent tracks for cleanliness

### 3. **Smooth Transitions**

- 0.2s ease transitions on hover
- Visual feedback on interaction
- Professional, polished feel

### 4. **Cross-Browser Consistency**

- Unified appearance across browsers
- Fallbacks for older browsers
- Respects user accessibility preferences

---

## Browser Compatibility

| Browser     | Support | Implementation                   |
| ----------- | ------- | -------------------------------- |
| Chrome 90+  | ✅ Full | ::-webkit-scrollbar              |
| Safari 14+  | ✅ Full | ::-webkit-scrollbar              |
| Edge 90+    | ✅ Full | ::-webkit-scrollbar              |
| Firefox 64+ | ✅ Full | scrollbar-width, scrollbar-color |
| Opera 76+   | ✅ Full | ::-webkit-scrollbar              |

---

## Accessibility Considerations

### 1. **Sufficient Size**

- Minimum 4px width ensures clickable target
- Hover states provide clear feedback
- Active states confirm interaction

### 2. **Color Contrast**

- Pink thumb (#F1A0C5) visible against cream backgrounds
- Magenta active state provides strong contrast
- Maintains brand while being functional

### 3. **User Preferences**

- Respects user's reduced motion settings
- Compatible with high contrast modes
- Works with browser zoom levels

---

## When to Use Each Scrollbar

| Scenario          | Class                  | Reason                          |
| ----------------- | ---------------------- | ------------------------------- |
| Global default    | Auto-applied           | Consistent brand experience     |
| Modals & dialogs  | `scrollbar-cp-modal`   | Space-efficient, less intrusive |
| Dropdown menus    | `scrollbar-cp-modal`   | Compact, appropriate for lists  |
| Featured sections | `scrollbar-cp-magenta` | Draws attention, bold accent    |
| Carousels/sliders | `scrollbar-hidden`     | Clean, gesture-based navigation |
| Course listings   | `scrollbar-cp`         | Standard, readable              |

---

## Customization

To adjust scrollbar appearance globally, edit:

**File:** `src/styles/partials/_base.css`

```css
html {
  /* Adjust global scrollbar colors */
  scrollbar-color: var(--color-cpPink-400) transparent;
}

* {
  &::-webkit-scrollbar-thumb {
    /* Adjust thumb color */
    background-color: var(--color-cpPink-400);

    /* Adjust border radius */
    border-radius: 3px;
  }
}
```

---

## Testing Checklist

When adding scrollable content, verify:

- ✅ Scrollbar appears when content overflows
- ✅ Thumb color matches brand (pink/magenta)
- ✅ Hover state provides visual feedback
- ✅ Scrollbar is thin and unobtrusive
- ✅ Works on mobile devices
- ✅ Respects accessibility preferences
- ✅ Consistent across browsers

---

## Related Documentation

- [Color Palette](./color-palette.md) - Full CP color system
- [Brand Guidelines](../branding/brand-guidelines.md) - Brand standards
- [Styling Guidelines](../guides/rules/styling-guidelines.md) - General styling rules

---

_Last updated: December 2025_
