# Styles Architecture

> **Purpose**: This folder contains all global styles and Tailwind CSS v4 configuration for the Carina Pereira International project.

---

## Structure

```
src/styles/
├── globals.css              # Main entry point (imports all partials)
└── partials/
    ├── _theme.css           # Theme configuration (@theme block)
    ├── _fonts.css           # Font-face declarations
    ├── _base.css            # Base styles and CSS resets
    └── _utilities.css       # Custom utility classes
```

---

## File Descriptions

### `globals.css`

**Main entry point** for all styles. Imports Tailwind CSS core and all modular partials.

```css
/* Tailwind CSS Core */
@import 'tailwindcss';
@import 'tw-animate-css';

/* Modular Partials */
@import './partials/_theme.css';
@import './partials/_fonts.css';
@import './partials/_base.css';
@import './partials/_utilities.css';
```

**Do not add code directly to this file** - use the appropriate partial instead.

---

### `partials/_theme.css`

**Theme configuration** using Tailwind v4's `@theme` directive.

Contains:

- ✅ CP brand color palette (50-900 shades for each color)
- ✅ shadcn/ui design tokens
- ✅ Font family variables
- ✅ Typography settings
- ✅ Border radius tokens
- ✅ Effect variables (ring width, etc.)

**When to edit:**

- Adding new brand colors
- Updating color shades
- Changing font families
- Modifying theme tokens

**Example:**

```css
@theme {
  --color-cpOrange-500: #fa7e39;
  --font-tan-ashford: 'Tan Ashford', serif;
  --radius: 0.5rem;
}
```

---

### `partials/_fonts.css`

**Font-face declarations** for custom web fonts.

Contains:

- ✅ Inclusive Sans (Regular, Italic)
- ✅ Inter (Regular, Italic)
- ✅ Tan Ashford (Bold)

**When to edit:**

- Adding new font files
- Adding new font weights
- Updating font file paths

**Example:**

```css
@font-face {
  font-family: 'Inclusive Sans';
  src: url('/fonts/InclusiveSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

### `partials/_base.css`

**Base styles and CSS resets** using Tailwind's `@layer base`.

Contains:

- ✅ Font defaults (html, body)
- ✅ Border color defaults (v3 compatibility)
- ✅ CSS variables for shadcn/ui
- ✅ Dark mode variables (for future use)
- ✅ Base utility applications

**When to edit:**

- Setting global element defaults
- Adding CSS variables for third-party libraries
- Modifying dark mode styles

**Example:**

```css
@layer base {
  html {
    font-family: var(--font-sans);
  }

  body {
    font-family: var(--font-inter);
    background: #fffef3;
  }
}
```

---

### `partials/_utilities.css`

**Custom utility classes** using Tailwind v4's `@utility` directive.

Contains:

- ✅ Scrollbar utilities (hidden, thin, styled)
- ✅ Font family utilities (font-inclusive, font-inter, font-tan-ashford)

**When to edit:**

- Creating new reusable utility classes
- Adding custom CSS patterns not covered by Tailwind

**Example:**

```css
@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}

@utility font-tan-ashford {
  font-family: var(--font-tan-ashford);
}
```

---

## Workflow Guide

### Adding a New Brand Color

1. Open `partials/_theme.css`
2. Add color shades inside `@theme` block:

```css
@theme {
  /* New color with 10 shades */
  --color-cpBlue-50: #...;
  --color-cpBlue-100: #...;
  /* ... shades 200-800 ... */
  --color-cpBlue-900: #...;
  --color-cpBlue: var(--color-cpBlue-500); /* Default */
}
```

3. Document in `docs/COLOR_SYSTEM.md`
4. Update `docs/brand.md` if needed

---

### Adding a New Font

1. Place font files in `public/fonts/`
2. Open `partials/_fonts.css`
3. Add `@font-face` declarations:

```css
@font-face {
  font-family: 'New Font';
  src: url('/fonts/NewFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

4. Open `partials/_theme.css`
5. Add font family variable:

```css
@theme {
  --font-new-font: 'New Font', sans-serif;
}
```

6. Create utility in `partials/_utilities.css` (if needed):

```css
@utility font-new-font {
  font-family: var(--font-new-font);
}
```

---

### Creating a Custom Utility

1. Open `partials/_utilities.css`
2. Add utility using `@utility` directive:

```css
@utility custom-gradient {
  background: linear-gradient(
    135deg,
    var(--color-cpOrange),
    var(--color-cpPink)
  );
}
```

3. Use in components:

```tsx
<div className='custom-gradient'>Gradient background</div>
```

---

### Modifying Base Styles

1. Open `partials/_base.css`
2. Add/modify styles inside `@layer base`:

```css
@layer base {
  /* Global heading styles */
  h1,
  h2,
  h3 {
    font-family: var(--font-tan-ashford);
    text-transform: lowercase;
  }
}
```

---

## Best Practices

### ✅ Do

- **Keep partials focused**: Each file has a single responsibility
- **Use `@theme` for tokens**: Colors, fonts, spacing go in `_theme.css`
- **Use `@utility` for custom classes**: Reusable patterns go in `_utilities.css`
- **Document new additions**: Update docs when adding new colors/fonts
- **Follow naming conventions**: Use CP brand prefixes (cpOrange, cpPink, etc.)

### ❌ Don't

- **Don't add code to `globals.css` directly**: Use partials instead
- **Don't hardcode colors**: Always use theme variables
- **Don't create duplicate utilities**: Check existing utilities first
- **Don't forget font-display**: Always use `swap` for web fonts
- **Don't skip documentation**: Update docs for major changes

---

## Tailwind CSS v4 Specifics

This project uses **Tailwind CSS v4**, which has significant changes from v3:

### Configuration Location

- **v3**: `tailwind.config.ts` (JavaScript/TypeScript)
- **v4**: `@theme` block in CSS files ✅ (We use this)

### Font Configuration

- **v3**: `--font-family-*` or `fontFamily` in config
- **v4**: `--font-*` in `@theme` ✅ (Simpler!)

### Custom Utilities

- **v3**: `addUtilities()` in config plugin
- **v4**: `@utility` directive in CSS ✅ (More intuitive!)

### Imports

- **v3**: `@tailwind base; @tailwind components; @tailwind utilities;`
- **v4**: `@import "tailwindcss";` ✅ (Single import!)

---

## Troubleshooting

### CSS IntelliSense Warnings

**Problem**: VS Code shows "Unknown at rule @theme" or "Unknown at rule @utility"

**Solution**: These are expected warnings. VS Code's CSS IntelliSense doesn't recognize Tailwind v4 directives yet, but they work correctly at build time.

### Font Not Loading

**Problem**: Custom font not displaying

**Checklist**:

1. ✅ Font files in `public/fonts/`
2. ✅ `@font-face` declaration in `_fonts.css`
3. ✅ Font variable in `_theme.css`
4. ✅ Utility created in `_utilities.css` (optional)
5. ✅ Hard refresh browser (Ctrl+Shift+R)

### Color Not Working

**Problem**: New color class not recognized

**Checklist**:

1. ✅ Color variable defined in `_theme.css` inside `@theme`
2. ✅ Correct naming: `--color-cp{Name}-{shade}`
3. ✅ Default alias defined: `--color-cp{Name}: var(--color-cp{Name}-500);`
4. ✅ Build restarted: `npm run dev`

---

## Related Documentation

- **Color System**: `docs/COLOR_SYSTEM.md` - Full brand color palette guide
- **Brand Guide**: `docs/brand.md` - Brand colors, fonts, and styling
- **Frontend Rules**: `docs/rules.md` - Complete frontend development rules
- **Tailwind v4 Migration**: `docs/TAILWIND_V4_MIGRATION.md` - Migration guide

---

## Quick Commands

```bash
# Development server (watches for CSS changes)
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint
```

---

**Remember**: The modular structure keeps styles organized and maintainable. Always edit the appropriate partial file, never `globals.css` directly.

---

_Last updated: December 2025 (Tailwind CSS v4.0.0)_
