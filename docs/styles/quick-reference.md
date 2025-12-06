# CSS Quick Reference Card

## File Structure

```
src/styles/
├── globals.css           # Entry point (import only)
└── partials/
    ├── _theme.css        # Colors, fonts, tokens
    ├── _fonts.css        # @font-face declarations
    ├── _base.css         # Base styles, resets
    └── _utilities.css    # Custom utilities
```

## Where to Edit

| Task                  | Edit This File                                |
| --------------------- | --------------------------------------------- |
| Add new brand color   | `partials/_theme.css`                         |
| Add new font family   | `partials/_fonts.css` + `partials/_theme.css` |
| Create custom utility | `partials/_utilities.css`                     |
| Modify base styles    | `partials/_base.css`                          |
| Import partials       | `globals.css`                                 |

## Brand Colors Cheat Sheet

### cpCream (Background)

```tsx
bg - cpCream; // Default (#FFFEF3 = 100)
bg - cpCream - 50; // Lightest
bg - cpCream - 900; // Darkest
```

### cpOrange (Primary CTA)

```tsx
bg - cpOrange; // Default (#FA7E39 = 500)
bg - cpOrange - 50; // Lightest
bg - cpOrange - 900; // Darkest
```

### cpPink (Secondary)

```tsx
bg - cpPink; // Default (#F1A0C5 = 400)
bg - cpPink - 50; // Lightest
bg - cpPink - 900; // Darkest
```

### cpMagenta (Accent)

```tsx
bg - cpMagenta; // Default (#E62E6B = 500)
bg - cpMagenta - 50; // Lightest
bg - cpMagenta - 900; // Darkest
```

## Common Patterns

### Interactive Button

```tsx
<button
  className='
  bg-cpOrange 
  hover:bg-cpOrange-600 
  active:bg-cpOrange-700
  text-white
'
>
  Click me
</button>
```

### Card with Border

```tsx
<div
  className='
  bg-cpCream-50 
  border-2 
  border-cpOrange-300 
  rounded-lg 
  p-6
'
>
  Content
</div>
```

### Gradient Background

```tsx
<div
  className='
  bg-linear-to-r 
  from-cpPink-100 
  to-cpCream
'
>
  Gradient
</div>
```

### High Contrast Text

```tsx
<div
  className='
  bg-cpCream-100 
  text-cpMagenta-900
'
>
  Readable
</div>
```

## Fonts

### Heading Font

```tsx
<h1 className='font-tan-ashford text-5xl lowercase'>heading</h1>
```

### Body Font

```tsx
<p className='font-inclusive text-base'>Body text</p>
```

### UI Font

```tsx
<span className='font-inter text-sm'>UI element</span>
```

## Shade Selection Guide

| Shade   | When to Use             |
| ------- | ----------------------- |
| 50      | Subtle backgrounds      |
| 100-200 | Light backgrounds       |
| 300-400 | Borders, medium accents |
| 500     | **Default brand color** |
| 600-700 | Hover/focus states      |
| 800-900 | Dark text on light      |

## Documentation

- **Architecture**: `src/styles/README.md`
- **Color System**: `docs/COLOR_SYSTEM.md`
- **Color Reference**: `docs/COLOR_PALETTE.md`
- **Migration**: `docs/CSS_MIGRATION_SUMMARY.md`
- **Brand Guide**: `docs/brand.md`
- **Frontend Rules**: `docs/rules.md`

## Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Troubleshooting

**Color not working?**

1. Check `_theme.css` has `--color-cp{Name}-{shade}`
2. Restart dev server

**Font not loading?**

1. Check font file in `public/fonts/`
2. Check `@font-face` in `_fonts.css`
3. Hard refresh (Ctrl+Shift+R)

**CSS warnings in VS Code?**

- Expected! `@theme` and `@utility` are Tailwind v4 features
- Build works fine

## Quick Tips

✅ **Do**

- Use shade numbers for variations
- Check existing utilities first
- Document new additions
- Test accessibility (contrast)

❌ **Don't**

- Edit `globals.css` directly
- Hardcode hex colors
- Skip documentation
- Forget responsive design

---

**Keep this card handy for quick reference!**
