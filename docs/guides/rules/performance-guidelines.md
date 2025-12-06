# Performance Guidelines

> **Purpose**: Optimize application performance for fast load times and smooth user experience.

---

## ✅ Always Follow

### 1. Next.js Image Optimization

```tsx
import Image from 'next/image';

// ✅ GOOD: Optimized images with Next.js Image
<Image
  src="/courses/pro-makeup.jpg"
  alt="Professional Makeup Course"
  width={600}
  height={400}
  quality={90}
  priority // For above-the-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// ✅ For dynamic images
<Image
  src={course.imageUrl}
  alt={course.title}
  width={600}
  height={400}
  quality={85}
  loading="lazy" // Below-the-fold images
/>

// ❌ BAD: Regular img tag (no optimization)
<img src="/course.jpg" alt="Course" width="600" height="400" />
```

### 2. Code Splitting & Dynamic Imports

```tsx
import dynamic from 'next/dynamic';

// ✅ GOOD: Dynamic import for heavy components
const EnrollmentModal = dynamic(
  () => import('@/components/EnrollmentFormModal'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false, // Don't render on server (for client-only components)
  }
);

// ✅ Dynamic import for libraries used in client components
const ConfettiComponent = dynamic(() => import('react-confetti'), {
  ssr: false,
});

// Usage
{
  showModal && <EnrollmentModal isOpen={showModal} onClose={closeModal} />;
}
```

### 3. Loading States

```tsx
// ✅ GOOD: Skeleton loaders for better perceived performance
export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='bg-cpCream rounded-2xl p-6 animate-pulse'>
            <div className='bg-gray-300 h-48 rounded-lg mb-4' />
            <div className='bg-gray-300 h-6 rounded mb-2' />
            <div className='bg-gray-300 h-4 rounded w-2/3' />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
```

### 4. Lazy Loading

```tsx
// ✅ Images below the fold
<Image
  src='/course-detail.jpg'
  alt='Course details'
  width={800}
  height={600}
  loading='lazy'
/>;

// ✅ Intersection Observer for content
('use client');

import { useInView } from 'react-intersection-observer';

export default function LazySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <ExpensiveComponent />
      ) : (
        <div className='h-96 bg-gray-100 animate-pulse' />
      )}
    </div>
  );
}
```

### 5. Memoization

```tsx
import { memo, useMemo, useCallback } from 'react';

// ✅ Memoize expensive components
const CourseCard = memo(function CourseCard({ course }) {
  return (
    <div className='bg-cpCream rounded-2xl p-6'>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
});

// ✅ Memoize expensive calculations
function CoursesPage({ courses }) {
  const sortedCourses = useMemo(() => {
    return courses.sort((a, b) => a.price - b.price);
  }, [courses]);

  return <CourseList courses={sortedCourses} />;
}

// ✅ Memoize callbacks passed to child components
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}
```

### 6. Font Optimization

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// ✅ Optimize Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ✅ Optimize local fonts
const tanAshford = localFont({
  src: './fonts/TanAshford.woff2',
  display: 'swap',
  variable: '--font-tan-ashford',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${tanAshford.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 7. API Route Optimization

```tsx
// app/api/courses/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // ✅ Use revalidate for ISR
  const courses = await fetchCourses();

  return NextResponse.json(courses, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

// ✅ Server component with caching
export default async function CoursesPage() {
  const courses = await fetch('https://api.example.com/courses', {
    next: { revalidate: 3600 }, // Revalidate every hour
  }).then((res) => res.json());

  return <CourseList courses={courses} />;
}
```

---

## ❌ Never Do

- Don't use regular `<img>` tags - use Next.js `<Image>`
- Don't import heavy libraries in server components without need
- Don't fetch data client-side if it can be done server-side
- Don't forget to add loading states
- Don't render large lists without pagination or virtualization
- Don't import entire libraries when you only need parts

---

## Performance Checklist

### Images

- [ ] All images use Next.js `<Image>` component
- [ ] Above-the-fold images have `priority` prop
- [ ] Below-the-fold images have `loading="lazy"`
- [ ] Images have proper `width` and `height` set
- [ ] Images use appropriate `quality` (75-90)

### Code Splitting

- [ ] Heavy components use dynamic imports
- [ ] Client-only code is lazy loaded
- [ ] Third-party libraries are loaded on-demand

### Caching

- [ ] API routes have appropriate cache headers
- [ ] Static content uses ISR when appropriate
- [ ] Client-side data uses SWR or React Query

### Bundle Size

- [ ] Import only what you need from libraries
- [ ] Use tree-shaking friendly imports
- [ ] Check bundle size with `next build`

---

## Monitoring

```tsx
// Use Next.js built-in Web Vitals reporting
// app/layout.tsx
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
    // Send to analytics
  });
}
```

---

## Quick Reference

### Image Priorities

- **Above the fold**: `priority={true}`
- **Below the fold**: `loading="lazy"`
- **Background images**: Consider using CSS with optimized images

### Dynamic Import Use Cases

- Modals and dialogs
- Charts and data visualizations
- Video players
- Heavy third-party components
- Client-only features (confetti, animations)

---

[← Back to Frontend Rules Index](../frontend-rules.md)
