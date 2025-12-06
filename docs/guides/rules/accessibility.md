# Accessibility Rules

> **Purpose**: Ensure the application is accessible to all users, including those using assistive technologies.

---

## ✅ Always Follow

### 1. Semantic HTML

```tsx
// ✅ GOOD: Semantic elements
<nav>
  <ul>
    <li><a href="/courses">Courses</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Course Title</h1>
    <p>Course description</p>
  </article>
</main>

<footer>
  <p>&copy; 2024 Carina Pereira International</p>
</footer>

// ❌ BAD: Generic divs
<div className="navigation">
  <div className="nav-item">Courses</div>
</div>
```

### 2. ARIA Labels and Attributes

```tsx
// ✅ Form inputs with proper labels
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  aria-invalid={errors.email ? 'true' : 'false'}
  aria-describedby={errors.email ? 'email-error' : undefined}
/>
{errors.email && (
  <span id="email-error" role="alert" className="text-red-500">
    {errors.email}
  </span>
)}

// ✅ Buttons with aria-label for icon-only buttons
<button
  aria-label="Close modal"
  onClick={onClose}
>
  <X className="w-6 h-6" />
</button>

// ✅ Navigation with aria-current
<a
  href="/courses"
  aria-current={pathname === '/courses' ? 'page' : undefined}
  className={pathname === '/courses' ? 'active' : ''}
>
  Courses
</a>

// ✅ Loading states
<button disabled={isLoading} aria-busy={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</button>
```

### 3. Keyboard Navigation

```tsx
// ✅ Keyboard accessible modal
'use client';

import { useEffect, useRef } from 'react';
import { Dialog } from '@/components/ui/dialog';

export default function AccessibleModal({ isOpen, onClose, children }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <button ref={closeButtonRef} onClick={onClose} aria-label='Close modal'>
        Close
      </button>
      {children}
    </Dialog>
  );
}

// ✅ Focus management
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    await submitForm();
    successMessageRef.current?.focus(); // Move focus to success message
  } catch (error) {
    errorMessageRef.current?.focus(); // Move focus to error message
  }
};
```

### 4. Alt Text for Images

```tsx
// ✅ GOOD: Descriptive alt text
import Image from 'next/image';

<Image
  src="/courses/pro-makeup.jpg"
  alt="Professional makeup course student applying foundation on a model"
  width={600}
  height={400}
/>

// ✅ Decorative images - empty alt
<Image
  src="/decorative-pattern.png"
  alt=""
  width={100}
  height={100}
  aria-hidden="true"
/>

// ❌ BAD: Missing or generic alt text
<Image
  src="/image.jpg"
  alt="image"  // Too generic
  width={600}
  height={400}
/>
```

### 5. Color Contrast

```tsx
// ✅ GOOD: High contrast (WCAG AA compliant)
<p className="text-black bg-cpCream">
  Readable text on cream background
</p>

<button className="bg-cpOrange text-white">
  High contrast button
</button>

// ❌ BAD: Low contrast
<p className="text-gray-400 bg-gray-300">
  Hard to read text
</p>
```

### 6. Focus Indicators

```tsx
// ✅ Visible focus states
<button className="
  focus:outline-none
  focus:ring-2
  focus:ring-cpMagenta
  focus:ring-offset-2
">
  Accessible Button
</button>

<input className="
  focus:outline-none
  focus:border-cpMagenta
  focus:ring-2
  focus:ring-cpMagenta
" />

// ❌ DON'T remove focus indicators without replacement
<button className="focus:outline-none">
  {/* Missing focus indicator! */}
</button>
```

### 7. Skip Links

```tsx
// ✅ Skip to main content link
export default function Layout({ children }) {
  return (
    <div>
      <a
        href='#main-content'
        className='
          sr-only
          focus:not-sr-only
          focus:absolute
          focus:top-4
          focus:left-4
          focus:z-50
          focus:bg-cpOrange
          focus:text-white
          focus:px-4
          focus:py-2
          focus:rounded
        '
      >
        Skip to main content
      </a>
      <Navigation />
      <main id='main-content' tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
```

### 8. Screen Reader Only Content

```tsx
// ✅ Screen reader only text (Tailwind sr-only)
<button>
  <X className="w-6 h-6" />
  <span className="sr-only">Close modal</span>
</button>

// ✅ Loading indicators for screen readers
<div role="status" aria-live="polite" className="sr-only">
  {isLoading ? 'Loading...' : 'Content loaded'}
</div>
```

---

## ❌ Never Do

- Don't use `<div>` for buttons - use `<button>` or `<a>`
- Don't forget alt text on images
- Don't remove focus indicators without providing alternatives
- Don't rely solely on color to convey information
- Don't create keyboard traps
- Don't use `tabindex` values greater than 0
- Don't forget to test with screen readers

---

## Testing Checklist

### Keyboard Navigation

- [ ] Tab through all interactive elements
- [ ] Can reach all buttons, links, and form inputs
- [ ] Focus indicators are visible
- [ ] No keyboard traps
- [ ] Escape closes modals
- [ ] Enter/Space activates buttons

### Screen Reader

- [ ] All images have appropriate alt text
- [ ] Form inputs have associated labels
- [ ] Error messages are announced
- [ ] Loading states are announced
- [ ] Heading hierarchy is logical (h1 → h2 → h3)

### Color & Contrast

- [ ] Text meets WCAG AA contrast ratio (4.5:1)
- [ ] Large text meets WCAG AA (3:1)
- [ ] Interactive elements meet contrast requirements
- [ ] Information isn't conveyed by color alone

---

## Common Patterns

### Accessible Form Field

```tsx
<div>
  <label htmlFor='fullName' className='block font-inclusive font-medium mb-2'>
    Full Name *
  </label>
  <input
    id='fullName'
    name='fullName'
    type='text'
    required
    aria-required='true'
    aria-invalid={errors.fullName ? 'true' : 'false'}
    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
    className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cpMagenta'
  />
  {errors.fullName && (
    <span
      id='fullName-error'
      role='alert'
      className='text-red-500 text-sm mt-1 block'
    >
      {errors.fullName}
    </span>
  )}
</div>
```

### Accessible Modal

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

<Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent
    aria-labelledby='modal-title'
    aria-describedby='modal-description'
  >
    <DialogHeader>
      <DialogTitle id='modal-title'>Enrollment Form</DialogTitle>
    </DialogHeader>
    <p id='modal-description'>
      Fill out the form below to enroll in this course
    </p>
    {/* Modal content */}
  </DialogContent>
</Dialog>;
```

### Accessible Navigation

```tsx
<nav aria-label='Main navigation'>
  <ul className='flex gap-6'>
    <li>
      <a
        href='/courses'
        className='hover:text-cpMagenta transition-colors'
        aria-current={pathname === '/courses' ? 'page' : undefined}
      >
        Courses
      </a>
    </li>
    <li>
      <a
        href='/about'
        aria-current={pathname === '/about' ? 'page' : undefined}
      >
        About
      </a>
    </li>
  </ul>
</nav>
```

---

## Tools for Testing

- **Keyboard**: Tab, Shift+Tab, Enter, Space, Escape
- **Screen Readers**: NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
- **Browser DevTools**: Accessibility panel (Chrome, Firefox)
- **Extensions**: axe DevTools, WAVE, Lighthouse

---

[← Back to Frontend Rules Index](../frontend-rules.md)
