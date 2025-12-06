# Component Architecture Rules

> **Purpose**: Guidelines for creating well-structured, maintainable, and reusable components.

---

## ✅ Always Follow

### 1. Component Organization

```tsx
// Component file structure
'use client'; // Only if client-side features needed

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Type definitions at top
interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  duration: string;
}

// Main component
export default function CourseCard({
  id,
  title,
  description,
  price,
  imageUrl,
  duration,
}: CourseCardProps) {
  const [isEnrolling, setIsEnrolling] = useState(false);

  const handleEnroll = async () => {
    // Implementation
  };

  return (
    <div className='bg-cpCream rounded-2xl p-6 shadow-lg'>
      {/* Component JSX */}
    </div>
  );
}

// Helper components or functions below main component
function PriceDisplay({ price }: { price: number }) {
  return <span className='font-tan-ashford text-2xl'>R{price}</span>;
}
```

### 2. Use Barrel Exports

```tsx
// src/components/CourseCard/index.ts
export { default } from './CourseCard';
export type { CourseCardProps } from './CourseCard';

// Usage in other files
import CourseCard from '@/components/CourseCard';
```

### 3. Server vs Client Components

```tsx
// ✅ Server Component (Default - NO 'use client')
// Use for: Static content, data fetching, SEO-critical pages
export default function CoursePage() {
  return <div>Static course information</div>;
}

// ✅ Client Component (Add 'use client')
// Use for: Forms, modals, animations, state management, event handlers
('use client');
export default function EnrollmentForm() {
  const [formData, setFormData] = useState({});
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### 4. Composition Over Props Drilling

```tsx
// ✅ GOOD: Use composition
<CourseCard>
  <CourseCard.Header title="Pro Makeup" />
  <CourseCard.Body description="..." />
  <CourseCard.Footer price={15000} />
</CourseCard>

// ❌ BAD: Props drilling
<CourseCard
  title="Pro Makeup"
  description="..."
  price={15000}
  headerClassName="..."
  bodyClassName="..."
  footerClassName="..."
/>
```

### 5. Prop Interfaces

```tsx
// ✅ GOOD: Explicit interface
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  isLoading?: boolean;
}

// ❌ BAD: No interface
function Button(props: any) {
  // ...
}
```

---

## ❌ Never Do

- Don't create components without proper TypeScript interfaces
- Don't use `'use client'` unless component needs client-side interactivity (forms, modals, animations)
- Don't duplicate components - check existing components in `src/components/` and `src/app/(public)/components/`
- Don't create deep component hierarchies (max 3-4 levels)
- **Don't forget to check Context7 MCP for library component patterns before implementing**

---

## Component Patterns

### Modal Pattern

```tsx
'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-cpCream'>
        <DialogHeader>{title}</DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
```

### Form Component Pattern

```tsx
'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  email: string;
  name: string;
}

export default function NewsletterForm() {
  const [formData, setFormData] = useState<FormData>({ email: '', name: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Validation and submission logic
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Form fields */}
    </form>
  );
}
```

---

## File Organization

```
src/components/
├── CourseCard/
│   ├── CourseCard.tsx          # Main component
│   ├── CourseCard.test.tsx     # Tests (if applicable)
│   └── index.ts                # Barrel export
├── EnrollmentModal/
│   ├── EnrollmentModal.tsx
│   └── index.ts
└── ui/                         # shadcn/ui components
    ├── button.tsx
    ├── dialog.tsx
    └── input.tsx
```

---

[← Back to Frontend Rules Index](../frontend-rules.md)
