# CP Brand Color Palette - Visual Reference

> Quick visual reference for all CP brand color shades

---

## CP Cream (Neutral Light - Backgrounds)

**Base**: #FFFEF3 (100) - Warm cream background

| Shade   | Hex Code      | Usage                            |
| ------- | ------------- | -------------------------------- |
| 50      | `#FFFFF9`     | Lightest cream - subtle overlays |
| **100** | **`#FFFEF3`** | **✅ DEFAULT - Main background** |
| 200     | `#FFFBE5`     | Light cream - card backgrounds   |
| 300     | `#FFF8D7`     | Medium light - hover states      |
| 400     | `#FFF5C9`     | Medium - accents                 |
| 500     | `#FFF2BB`     | Medium - borders                 |
| 600     | `#E6D9A8`     | Medium dark - dividers           |
| 700     | `#CCC095`     | Dark - subtle text               |
| 800     | `#B3A782`     | Very dark - medium contrast text |
| 900     | `#998E6F`     | Darkest - high contrast text     |

**CSS Variable**: `--color-cpCream` → `--color-cpCream-100`

---

## CP Orange (Primary Brand - CTAs)

**Base**: #FA7E39 (500) - Vibrant primary CTA color

| Shade   | Hex Code      | Usage                           |
| ------- | ------------- | ------------------------------- |
| 50      | `#FFF4ED`     | Lightest orange - info boxes    |
| 100     | `#FFE4D1`     | Very light - subtle backgrounds |
| 200     | `#FFC9A3`     | Light - hover backgrounds       |
| 300     | `#FFA66E`     | Medium light - borders          |
| 400     | `#FC9152`     | Medium - secondary buttons      |
| **500** | **`#FA7E39`** | **✅ DEFAULT - Primary CTAs**   |
| 600     | `#E86820`     | Medium dark - hover states      |
| 700     | `#C75316`     | Dark - pressed states           |
| 800     | `#A04213`     | Very dark - text on light       |
| 900     | `#7D3310`     | Darkest - high contrast         |

**CSS Variable**: `--color-cpOrange` → `--color-cpOrange-500`

---

## CP Pink (Secondary Highlight)

**Base**: #F1A0C5 (400) - Soft secondary accent

| Shade   | Hex Code      | Usage                               |
| ------- | ------------- | ----------------------------------- |
| 50      | `#FEF5FA`     | Lightest pink - callout backgrounds |
| 100     | `#FCE5F0`     | Very light - subtle sections        |
| 200     | `#F9CCE1`     | Light - card backgrounds            |
| 300     | `#F5B3D3`     | Medium light - borders              |
| **400** | **`#F1A0C5`** | **✅ DEFAULT - Secondary accents**  |
| 500     | `#ED8DB7`     | Medium - interactive elements       |
| 600     | `#E26FA1`     | Medium dark - hover states          |
| 700     | `#D44E84`     | Dark - emphasis                     |
| 800     | `#B3386B`     | Very dark - text on light           |
| 900     | `#8F2A54`     | Darkest - high contrast             |

**CSS Variable**: `--color-cpPink` → `--color-cpPink-400`

---

## CP Magenta (Accent/Interaction)

**Base**: #E62E6B (500) - Bold accent for links/highlights

| Shade   | Hex Code      | Usage                                 |
| ------- | ------------- | ------------------------------------- |
| 50      | `#FEF0F5`     | Lightest magenta - subtle backgrounds |
| 100     | `#FDD9E6`     | Very light - accent backgrounds       |
| 200     | `#FCB3CD`     | Light - card accents                  |
| 300     | `#F88DB4`     | Medium light - borders                |
| 400     | `#F25E8F`     | Medium - secondary actions            |
| **500** | **`#E62E6B`** | **✅ DEFAULT - Links, highlights**    |
| 600     | `#D01756`     | Medium dark - hover states            |
| 700     | `#AD1247`     | Dark - pressed states                 |
| 800     | `#8A0E39`     | Very dark - text on light             |
| 900     | `#6B0A2C`     | Darkest - high contrast               |

**CSS Variable**: `--color-cpMagenta` → `--color-cpMagenta-500`

---

## Color Contrast Matrix

For accessible text/background combinations:

### Light Backgrounds (50-300)

| Background        | Readable Text Colors                                                                    |
| ----------------- | --------------------------------------------------------------------------------------- |
| `bg-cpCream-50`   | `text-cpCream-800/900`, `text-cpOrange-700+`, `text-cpPink-700+`, `text-cpMagenta-700+` |
| `bg-cpOrange-50`  | `text-cpOrange-800/900`, `text-cpMagenta-700+`                                          |
| `bg-cpPink-50`    | `text-cpPink-800/900`, `text-cpMagenta-700+`                                            |
| `bg-cpMagenta-50` | `text-cpMagenta-800/900`                                                                |

### Medium Backgrounds (400-600)

| Background         | Readable Text Colors               |
| ------------------ | ---------------------------------- |
| `bg-cpOrange-500`  | `text-white`, `text-cpCream-50`    |
| `bg-cpPink-500`    | `text-white`, `text-cpMagenta-900` |
| `bg-cpMagenta-500` | `text-white`, `text-cpCream-50`    |

### Dark Backgrounds (700-900)

| Background         | Readable Text Colors                                          |
| ------------------ | ------------------------------------------------------------- |
| `bg-cpOrange-800`  | `text-white`, `text-cpCream-50/100`, `text-cpOrange-100/200`  |
| `bg-cpPink-800`    | `text-white`, `text-cpCream-50/100`, `text-cpPink-100/200`    |
| `bg-cpMagenta-800` | `text-white`, `text-cpCream-50/100`, `text-cpMagenta-100/200` |

---

## Tailwind Utilities Available

For each color, all standard Tailwind utilities are available:

```tsx
{/* Backgrounds */}
bg-cpOrange-{50-900}

{/* Text */}
text-cpOrange-{50-900}

{/* Borders */}
border-cpOrange-{50-900}

{/* Gradients */}
from-cpOrange-{50-900}
via-cpOrange-{50-900}
to-cpOrange-{50-900}

{/* Shadows */}
shadow-cpOrange-{50-900}

{/* Divide */}
divide-cpOrange-{50-900}

{/* Ring */}
ring-cpOrange-{50-900}

{/* And more... */}
```

---

## Color Harmony Combinations

### Warm Gradient

```tsx
<div className='bg-linear-to-br from-cpOrange-400 via-cpPink-300 to-cpCream-100'>
  Warm, inviting gradient
</div>
```

### Bold Contrast

```tsx
<div className='bg-cpMagenta-600'>
  <h2 className='text-cpCream-50'>High contrast heading</h2>
  <p className='text-cpMagenta-100'>Readable body text</p>
</div>
```

### Subtle Professional

```tsx
<div className='bg-cpCream-100 border-l-4 border-cpOrange-400 p-6'>
  <h3 className='text-cpOrange-800'>Professional look</h3>
  <p className='text-cpCream-900'>Clean and subtle</p>
</div>
```

### Feminine Elegant

```tsx
<div className='bg-linear-to-r from-cpPink-50 to-cpCream-50 p-8'>
  <h2 className='text-cpMagenta-700'>Elegant design</h2>
  <p className='text-cpPink-900'>Soft and sophisticated</p>
</div>
```

---

## Quick Color Picker

**Need a color? Use this decision tree:**

1. **Background colors?** → cpCream (50-300)
2. **Primary CTA?** → cpOrange (500-600)
3. **Secondary action?** → cpPink (400-500) or cpOrange (400)
4. **Links/highlights?** → cpMagenta (500-600)
5. **Hover state?** → +100 darker (e.g., 500 → 600)
6. **Active/pressed state?** → +200 darker (e.g., 500 → 700)
7. **Subtle background?** → Use 50-100 shades
8. **High contrast text?** → Use 800-900 shades

---

## Color Psychology

### CP Cream (#FFFEF3)

- **Feeling**: Warm, welcoming, clean
- **Usage**: Backgrounds, whitespace, calm areas

### CP Orange (#FA7E39)

- **Feeling**: Energetic, creative, confident
- **Usage**: CTAs, attention, important actions

### CP Pink (#F1A0C5)

- **Feeling**: Feminine, gentle, approachable
- **Usage**: Secondary highlights, soft accents

### CP Magenta (#E62E6B)

- **Feeling**: Bold, passionate, modern
- **Usage**: Links, interactive elements, emphasis

---

_For detailed usage examples and patterns, see `docs/COLOR_SYSTEM.md`_
