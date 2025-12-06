# Frontend Design & Development Rules

> **Purpose**: This document provides repeatable, consistent rules for frontend development in the Carina Pereira International project. Always reference this file when creating new components, pages, or structures to ensure brand consistency and adherence to established patterns.

---

## Table of Contents

1. [Brand Consistency](#brand-consistency)
2. [Library Documentation (Context7 MCP)](#library-documentation-context7-mcp)
3. [Component Architecture](#component-architecture)
4. [Styling Guidelines](#styling-guidelines)
5. [Form Handling](#form-handling)
6. [Error Handling](#error-handling)
7. [File Structure](#file-structure)
8. [Naming Conventions](#naming-conventions)
9. [Performance Guidelines](#performance-guidelines)
10. [Accessibility](#accessibility)
11. [TypeScript Type Safety](#typescript-type-safety)

---

## Brand Consistency

### ✅ Always Follow

1. **Check Brand Document First**

   - Always read `docs/brand.md` before making design decisions
   - Don't guess brand colors, typography, or styling - verify against the brand guide
   - Brand colors are defined in `src/styles/globals.css` @theme block - use these custom properties via Tailwind

2. **Brand Colors - Required**

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

3. **Typography Hierarchy**

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

4. **Button Styles**

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
     hover:bg-cpMagenta hover:text-white
     transition-colors
   ">
     learn more
   </button>

   // Tertiary Button (Text only)
   <button className="
     text-cpMagenta
     font-inclusive
     underline-offset-4
     hover:underline
   ">
     View Details
   </button>
   ```

### ❌ Never Do

- Don't use hardcoded hex colors - always use Tailwind utilities (cpCream, cpOrange, cpPink, cpMagenta)
- Don't use fonts other than Tan Ashford (headings), Inclusive Sans (body), or Inter (UI elements)
- Don't create custom button styles without referencing brand guide
- Don't ignore the cream/orange/pink/magenta brand color scheme
- **Don't use uppercase text on buttons** - brand uses lowercase styling with Tan Ashford font

---

## Library Documentation (Context7 MCP)

> **Critical**: Before using any external library, working with TypeScript types, or implementing library-specific patterns, **ALWAYS** use Context7 MCP to get up-to-date documentation. This prevents implementing outdated patterns and ensures correct usage.

### ✅ Always Follow

1. **When to Use Context7 MCP**

   - Before implementing any library feature for the first time
   - When unsure about correct TypeScript types for a library
   - When encountering library-related errors
   - Before upgrading a library to understand breaking changes
   - When documentation seems outdated or inconsistent

2. **Resolve Library ID First**

   ```typescript
   // ✅ CORRECT: Always resolve library ID before getting docs
   // Step 1: Use mcp_context7_resolve-library-id or mcp_upstash_conte_resolve-library-id
   {
     libraryName: "framer-motion"
   }
   // Returns: "/framer/motion" or similar Context7-compatible ID

   // Step 2: Use mcp_context7_get-library-docs or mcp_upstash_conte_get-library-docs
   {
     context7CompatibleLibraryID: "/framer/motion",
     topic: "animation hooks",  // Optional: focus on specific topic
     tokens: 10000              // Optional: adjust for more/less context
   }
   ```

3. **Common Libraries in This Project**

   ```typescript
   // ✅ CORRECT: Get docs before implementing

   // Next.js (App Router, Image, Link)
   // Always check for Next.js 15 specific patterns
   mcp_context7_resolve_library_id({ libraryName: 'next' });
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/vercel/next.js',
     topic: 'app router server components',
   });

   // React 19 (hooks, types)
   mcp_context7_resolve_library_id({ libraryName: 'react' });
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/facebook/react',
     topic: 'useState TypeScript types',
   });

   // Framer Motion (animations)
   mcp_context7_resolve_library_id({ libraryName: 'framer-motion' });
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/framer/motion',
     topic: 'variants and transitions',
   });

   // Radix UI (dialog, tabs, toast)
   mcp_context7_resolve_library_id({ libraryName: '@radix-ui/react-dialog' });
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/radix-ui/primitives',
     topic: 'dialog component',
   });

   // Tailwind CSS
   mcp_context7_resolve_library_id({ libraryName: 'tailwindcss' });
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/tailwindlabs/tailwindcss',
     topic: 'responsive design utilities',
   });

   // Lucide React (icons)
   mcp_context7_resolve_library_id({ libraryName: 'lucide-react' });

   // Swiper (carousels)
   mcp_context7_resolve_library_id({ libraryName: 'swiper' });

   // Mongoose (database)
   mcp_context7_resolve_library_id({ libraryName: 'mongoose' });
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/mongodb/docs',
     topic: 'schema types',
   });

   // NextAuth.js (authentication)
   mcp_context7_resolve_library_id({ libraryName: 'next-auth' });
   ```

4. **TypeScript Type Safety with Context7**

   ```typescript
   // ❌ WRONG: Guessing library types
   import { SomeComponent } from 'library';
   const props: any = { ... };  // Don't guess!

   // ✅ CORRECT: Get library docs first
   // 1. Resolve library ID
   // 2. Get docs with topic focus on "TypeScript types" or component name
   // 3. Use exact types from documentation

   // Example: Getting Framer Motion types
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: "/framer/motion",
     topic: "motion component TypeScript types"
   })

   // Then implement with correct types
   import { motion, Variants } from 'framer-motion';

   const fadeInVariants: Variants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0 }
   };

   <motion.div
     variants={fadeInVariants}
     initial="hidden"
     animate="visible"
   >
     Content
   </motion.div>
   ```

5. **Before Implementing New Features**

   ```typescript
   // ✅ CORRECT: Workflow for implementing library features

   // Step 1: Resolve library ID
   mcp_context7_resolve_library_id({ libraryName: 'library-name' });

   // Step 2: Get focused documentation
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/org/library',
     topic: 'specific feature you need',
     tokens: 15000, // More tokens for complex features
   });

   // Step 3: Implement using exact patterns from docs
   // Step 4: Use correct TypeScript types from docs
   ```

6. **When Debugging Library Issues**

   ```typescript
   // ✅ CORRECT: Use Context7 to verify correct usage

   // If getting TypeScript errors with a library:
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/org/library',
     topic: 'component props interface',
   });

   // If getting runtime errors:
   mcp_context7_get_library_docs({
     context7CompatibleLibraryID: '/org/library',
     topic: 'common issues and troubleshooting',
   });
   ```

### ❌ Never Do

- **Don't guess library API patterns** - Always check Context7 first
- **Don't use `any` types for library props** - Get correct types from docs
- **Don't implement library features from memory** - Verify current patterns
- **Don't ignore TypeScript errors from libraries** - Check docs for correct types
- **Don't assume library patterns are the same across versions** - Verify version-specific docs
- **Don't skip Context7 lookup because "it's a simple component"** - Even simple features may have changed

### 🚨 Critical Rule: Zero Outdated Implementations

> **Principle**: Better to spend 30 seconds checking Context7 than 30 minutes debugging outdated code.

**If you're about to:**

- Import a library component
- Use a library hook
- Define TypeScript types for library props
- Implement a library pattern

**Then FIRST:**

1. ✅ Resolve the library ID with Context7
2. ✅ Get documentation for that specific feature
3. ✅ Use the exact pattern from the documentation
4. ✅ Use the exact TypeScript types from the documentation

---

## Component Architecture

### ✅ Always Follow

1. **Component Organization**

   ```tsx
   // ✅ CORRECT: Organized structure
   'use client'; // If needed for interactivity

   import { useState } from 'react';
   import Image from 'next/image';

   interface CourseCardProps {
     title: string;
     description: string;
     price: number;
     imageUrl: string;
     duration: string;
   }

   export function CourseCard({
     title,
     description,
     price,
     imageUrl,
     duration,
   }: CourseCardProps) {
     // Hooks first
     const [isHovered, setIsHovered] = useState(false);

     // Event handlers
     const handleMouseEnter = () => setIsHovered(true);
     const handleMouseLeave = () => setIsHovered(false);

     // Render
     return (
       <div
         className='course-card bg-cpCream rounded-lg overflow-hidden'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
       >
         <Image
           src={imageUrl}
           alt={title}
           width={400}
           height={300}
           className='w-full h-48 object-cover'
         />
         <div className='p-6'>
           <h3 className='font-tan-ashford text-2xl text-cpMagenta lowercase'>
             {title}
           </h3>
           <p className='font-inclusive text-base mt-2'>{description}</p>
           <div className='flex justify-between items-center mt-4'>
             <span className='font-inter text-cpOrange font-bold'>
               R{price}
             </span>
             <span className='font-inter text-sm text-gray-600'>
               {duration}
             </span>
           </div>
         </div>
       </div>
     );
   }
   ```

2. **Use Barrel Exports**

   ```tsx
   // components/courses/index.ts
   export { CourseCard } from './CourseCard';
   export { CourseGrid } from './CourseGrid';
   export { CourseDetails } from './CourseDetails';
   export { EnrollmentButton } from './EnrollmentButton';

   // Usage
   import { CourseCard, CourseGrid } from '@/components/courses';
   ```

3. **Server vs Client Components**

   ```tsx
   // ✅ Server Component (default - no 'use client')
   // Use for static content, data fetching
   export async function CoursesSection() {
     // Can fetch data server-side if needed
     return (
       <section className='py-16 bg-cpCream'>{/* Static content */}</section>
     );
   }

   // ✅ Client Component (needs interactivity)
   ('use client');

   export function EnrollmentFormModal() {
     const [isOpen, setIsOpen] = useState(false);
     // Interactive logic, state, event handlers
     return <>{/* Interactive form */}</>;
   }
   ```

4. **Composition Over Props Drilling**

   ```tsx
   // ✅ CORRECT: Composition pattern
   <CourseCard>
     <CourseCard.Image src="/images/course.jpg" alt="Pro Makeup" />
     <CourseCard.Title>Professional Makeup Course</CourseCard.Title>
     <CourseCard.Description>
       Comprehensive training with MAC certification
     </CourseCard.Description>
     <CourseCard.Actions>
       <EnrollmentButton courseId="pro-makeup" />
     </CourseCard.Actions>
   </CourseCard>

   // ❌ WRONG: Props drilling
   <CourseCard
     image="/images/course.jpg"
     imageAlt="Pro Makeup"
     title="Professional Makeup Course"
     description="Comprehensive training..."
     showEnrollButton={true}
     onEnroll={handleEnroll}
     enrollButtonText="Enroll Now"
   />
   ```

### ❌ Never Do

- Don't create components without proper TypeScript interfaces
- Don't use `'use client'` unless component needs client-side interactivity (forms, modals, animations)
- Don't duplicate components - check existing components in `src/components/` and `src/app/(public)/components/`
- Don't create deep component hierarchies (max 3-4 levels)
- **Don't forget to check Context7 MCP for library component patterns before implementing**

---

## Styling Guidelines

### ✅ Always Follow

1. **Tailwind CSS v4**

   > **🎯 IMPORTANT**: This project uses **Tailwind CSS v4** with configuration in `src/styles/globals.css` using the `@theme` block. The old `tailwind.config.ts` file is no longer used.

   ```tsx
   // ✅ CORRECT: Tailwind utilities with brand colors
   <div className="
     flex items-center justify-between
     p-6
     bg-cpCream
     rounded-lg
     shadow-sm hover:shadow-md
     transition-shadow
   ">

   // ❌ WRONG: Inline styles
   <div style={{
     display: 'flex',
     padding: '24px',
     backgroundColor: '#FFFEF3'
   }}>
   ```

   **Adding Custom Theme Values (v4 Approach):**

   ```css
   /* In src/styles/globals.css */
   @theme {
     /* Add custom colors */
     --color-brand-new: #123456;

     /* Add custom spacing */
     --spacing-custom: 2.5rem;

     /* Add custom fonts */
     --font-family-custom: 'Custom Font', sans-serif;
   }
   ```

   **Creating Custom Utilities (v4 Approach):**

   ```css
   /* In src/styles/globals.css */
   @utility custom-gradient {
     background: linear-gradient(
       to right,
       var(--color-cpOrange),
       var(--color-cpPink)
     );
   }

   @utility scrollbar-hidden {
     &::-webkit-scrollbar {
       display: none;
     }
     scrollbar-width: none;
   }
   ```

   ```tsx
   // Usage in components
   <div className='custom-gradient scrollbar-hidden'>
     Content with custom gradient and hidden scrollbar
   </div>
   ```

2. **Navigation Bar Standards**

   > **⚠️ IMPORTANT**: Based on the Navigation component, this project uses:
   >
   > - **All Breakpoints**: Fixed positioning with `fixed top-0`
   > - **Height**: `py-6` (24px padding top/bottom)
   > - **Z-Index**: `z-30` for navbar
   > - **Mobile Menu**: Uses overlay with hamburger icon
   > - **Desktop Menu**: Right-aligned navigation links

3. **Sticky Elements - Navigation Offset (CRITICAL)**

   > **⚠️ IMPORTANT**: When creating sticky elements (course filters, enrollment CTAs, sidebars), **ALWAYS** account for the fixed navigation bar.

   ```tsx
   // ✅ CORRECT: Sticky element with proper navigation offset
   <div className="
     sticky
     top-24          /* Account for navbar (~84px) + spacing */
     z-20            /* Below navbar (z-30) but above content */
   ">
     <CourseFilter />
   </div>

   // ✅ CORRECT: Sticky sidebar with offset
   <aside className="
     sticky
     top-24
     z-20
     max-h-[calc(100vh-6rem)]   /* Viewport - navbar - spacing */
     overflow-y-auto
   ">
     <CourseSidebar />
   </aside>

   // ✅ CORRECT: Sticky Enrollment CTA
   <div className="
     sticky
     top-24
     z-20
     bg-cpCream/95
     backdrop-blur-md
     shadow-md
     p-4
   ">
     <EnrollmentCTA />
   </div>

   // ❌ WRONG: No offset - element hides behind navbar
   <div className="sticky top-0 z-20">
     <CourseFilter />
   </div>
   ```

   **Sticky Element Offset Reference:**

   | Element Type   | Offset (`top-*`) | Z-Index | Notes                |
   | -------------- | ---------------- | ------- | -------------------- |
   | Navbar         | `top-0`          | `z-30`  | Fixed, always at top |
   | Sticky Filters | `top-24`         | `z-20`  | Below navbar         |
   | Sticky Sidebar | `top-24`         | `z-20`  | Below navbar         |
   | Sticky CTA     | `top-24`         | `z-20`  | Below navbar         |
   | Mobile Overlay | `top-0`          | `z-40`  | Above navbar         |

4. **Responsive Design**

   ```tsx
   // ✅ CORRECT: Mobile-first responsive
   <div
     className='
     grid grid-cols-1           /* Mobile */
     md:grid-cols-2             /* Tablet */
     lg:grid-cols-3             /* Desktop */
     xl:grid-cols-4             /* Large Desktop */
     gap-4 md:gap-6 lg:gap-8
   '
   >
     {courses.map((course) => (
       <CourseCard key={course.id} {...course} />
     ))}
   </div>
   ```

5. **Consistent Spacing**

   ```tsx
   // Use Tailwind spacing scale consistently
   <section className='py-16 px-4 lg:px-12'>
     {' '}
     {/* Vertical sections */}
     <div className='space-y-8'>
       {' '}
       {/* Stack spacing */}
       <div className='p-6'>
         {' '}
         {/* Card padding */}
         <h2 className='mb-4'>
           {' '}
           {/* Heading margin */}
           Course Title
         </h2>
       </div>
     </div>
   </section>
   ```

6. **Brand-Specific Patterns**

   ```tsx
   // ✅ CORRECT: Hero section pattern
   <section className="
     min-h-screen
     bg-gradient-to-br from-cpCream via-cpPink/20 to-cpOrange/20
     flex items-center justify-center
     px-4 lg:px-12
   ">
     <div className="text-center">
       <h1 className="
         font-tan-ashford
         text-5xl md:text-7xl
         text-cpMagenta
         lowercase
         tracking-tight
         drop-shadow-lg
       ">
         make-up made easy with carina
       </h1>
     </div>
   </section>

   // ✅ CORRECT: Card pattern with brand colors
   <div className="
     bg-cpCream
     rounded-lg
     overflow-hidden
     border border-cpPink/20
     hover:border-cpMagenta/40
     transition-colors
     shadow-md hover:shadow-xl
   ">
     {/* Card content */}
   </div>
   ```

### ❌ Never Do

- Don't use inline styles unless absolutely necessary
- Don't use arbitrary values like `w-[345px]` without good reason - use Tailwind scale
- Don't ignore responsive design - always design mobile-first
- **Don't create sticky elements without navigation offset** - They'll hide behind the navbar
- **Don't forget the brand's lowercase aesthetic** - Use lowercase text for headings with Tan Ashford
- **Don't use generic grays** - Use brand colors (cpCream for backgrounds, not gray-100)

---

## Form Handling

### ✅ Always Follow

1. **Client-Side Form Handling with Validation**

   ```tsx
   'use client';

   import { useState, FormEvent, ChangeEvent } from 'react';

   interface EnrollmentFormData {
     fullName: string;
     email: string;
     phone: string;
     courseId: string;
     message?: string;
   }

   export function EnrollmentForm({ courseId }: { courseId: string }) {
     const [formData, setFormData] = useState<EnrollmentFormData>({
       fullName: '',
       email: '',
       phone: '',
       courseId,
       message: '',
     });
     const [errors, setErrors] = useState<Partial<EnrollmentFormData>>({});
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitSuccess, setSubmitSuccess] = useState(false);

     const validateField = (
       name: keyof EnrollmentFormData,
       value: string
     ): string => {
       let error = '';

       switch (name) {
         case 'fullName':
           if (!value.trim()) error = 'Name is required';
           else if (value.trim().length < 2)
             error = 'Name must be at least 2 characters';
           break;
         case 'email':
           if (!value.trim()) error = 'Email is required';
           else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
             error = 'Invalid email address';
           break;
         case 'phone':
           if (!value.trim()) error = 'Phone number is required';
           else if (!/^\d{10}$/.test(value.replace(/\s/g, '')))
             error = 'Invalid phone number';
           break;
       }

       return error;
     };

     const handleChange = (
       e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
       const { name, value } = e.target;
       setFormData((prev) => ({ ...prev, [name]: value }));

       // Real-time validation
       const error = validateField(name as keyof EnrollmentFormData, value);
       setErrors((prev) => ({ ...prev, [name]: error }));
     };

     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();

       // Validate all fields
       const newErrors: Partial<EnrollmentFormData> = {};
       (Object.keys(formData) as Array<keyof EnrollmentFormData>).forEach(
         (key) => {
           if (key !== 'message') {
             // message is optional
             const error = validateField(key, formData[key] || '');
             if (error) newErrors[key] = error;
           }
         }
       );

       if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
       }

       setIsSubmitting(true);

       try {
         const response = await fetch('/api/enrollment', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(formData),
         });

         if (!response.ok) {
           const errorData = await response.json();
           throw new Error(errorData.message || 'Failed to submit enrollment');
         }

         setSubmitSuccess(true);
         setFormData({
           fullName: '',
           email: '',
           phone: '',
           courseId,
           message: '',
         });
       } catch (error: unknown) {
         if (error instanceof Error) {
           setErrors({
             email: error.message || 'Something went wrong. Please try again.',
           });
         }
       } finally {
         setIsSubmitting(false);
       }
     };

     return (
       <form onSubmit={handleSubmit} className='space-y-6'>
         {/* Full Name Field */}
         <div>
           <label
             htmlFor='fullName'
             className='block font-inclusive font-medium text-gray-800 mb-2'
           >
             Full Name *
           </label>
           <input
             id='fullName'
             name='fullName'
             type='text'
             value={formData.fullName}
             onChange={handleChange}
             className={`
               w-full px-4 py-3 
               border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} 
               rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-cpMagenta
               font-inclusive
             `}
           />
           {errors.fullName && (
             <span className='text-red-500 text-sm mt-1 block'>
               {errors.fullName}
             </span>
           )}
         </div>

         {/* Submit Button */}
         <button
           type='submit'
           disabled={isSubmitting}
           className='
             w-full 
             bg-cpOrange 
             text-white 
             px-6 py-3 
             rounded-lg 
             font-tan-ashford 
             lowercase
             tracking-wide
             hover:opacity-90 
             transition-opacity 
             disabled:opacity-50 
             disabled:cursor-not-allowed
           '
         >
           {isSubmitting ? 'submitting...' : 'enroll now'}
         </button>

         {/* Success Message */}
         {submitSuccess && (
           <div className='bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg'>
             <p className='font-inclusive'>
               Thank you! We'll contact you soon to confirm your enrollment.
             </p>
           </div>
         )}
       </form>
     );
   }
   ```

2. **Form States**

   ```tsx
   // ✅ CORRECT: Handle all form states
   export function ContactForm() {
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitSuccess, setSubmitSuccess] = useState(false);
     const [submitError, setSubmitError] = useState<string | null>(null);

     const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setIsSubmitting(true);
       setSubmitError(null);

       try {
         // API call
         setSubmitSuccess(true);
       } catch (error: unknown) {
         if (error instanceof Error) {
           setSubmitError(
             error.message || 'Failed to submit. Please try again.'
           );
         }
       } finally {
         setIsSubmitting(false);
       }
     };

     return (
       <form onSubmit={onSubmit}>
         {/* Form fields */}
         <button disabled={isSubmitting} className='bg-cpOrange text-white'>
           {isSubmitting ? 'submitting...' : 'submit'}
         </button>
         {submitSuccess && <SuccessMessage />}
         {submitError && <ErrorMessage message={submitError} />}
       </form>
     );
   }
   ```

3. **Field-Level Validation (Real-Time Feedback)**

   ```tsx
   // ✅ CORRECT: Immediate field validation on blur
   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
     const error = validateField(name as keyof FormData, value);
     setErrors((prev) => ({ ...prev, [name]: error }));
   };

   <input
     name='email'
     value={formData.email}
     onChange={handleChange}
     onBlur={handleBlur} // Validate on blur
     className={errors.email ? 'border-red-500' : 'border-gray-300'}
     aria-invalid={errors.email ? 'true' : 'false'}
     aria-describedby={errors.email ? 'email-error' : undefined}
   />;
   {
     errors.email && (
       <span id='email-error' className='text-red-500 text-sm'>
         {errors.email}
       </span>
     );
   }
   ```

### ❌ Never Do

- Don't submit forms without validation
- Don't validate only on submit - provide real-time feedback on blur
- Don't forget loading and error states
- Don't forget to disable submit button while submitting
- Don't use generic error messages - be specific about what's wrong
- **Don't forget to check existing API routes** - `/api/contact`, `/api/enrollment`, `/api/subscribe`

---

## Error Handling

### ✅ Always Follow

1. **Try-Catch Blocks**

   ```tsx
   // ✅ CORRECT: Proper error handling
   async function submitEnrollment(data: EnrollmentFormData) {
     try {
       const response = await fetch('/api/enrollment', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
       });

       if (!response.ok) {
         const errorData = await response.json();
         throw new Error(errorData.message || 'Enrollment failed');
       }

       return await response.json();
     } catch (error) {
       console.error('Enrollment error:', error);
       throw error;
     }
   }
   ```

2. **User-Friendly Error Messages**

   ```tsx
   // ✅ CORRECT: Contextual error messages
   const getErrorMessage = (error: Error): string => {
     if (error.message.includes('network')) {
       return 'Network error. Please check your connection and try again.';
     }
     if (error.message.includes('validation')) {
       return 'Please check your information and try again.';
     }
     if (error.message.includes('duplicate')) {
       return 'You have already enrolled in this course.';
     }
     return 'Something went wrong. Please try again later.';
   };
   ```

3. **Error Display Component**

   ```tsx
   // ✅ CORRECT: Reusable error display
   interface ErrorMessageProps {
     message: string;
     onDismiss?: () => void;
   }

   export function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
     return (
       <div
         className='
         bg-red-50 
         border border-red-200 
         text-red-700 
         px-4 py-3 
         rounded-lg 
         flex items-start justify-between
       '
       >
         <div>
           <p className='font-inclusive font-semibold'>Error</p>
           <p className='font-inclusive text-sm mt-1'>{message}</p>
         </div>
         {onDismiss && (
           <button
             onClick={onDismiss}
             className='text-red-700 hover:text-red-900 ml-4'
             aria-label='Dismiss error'
           >
             ×
           </button>
         )}
       </div>
     );
   }
   ```

### ❌ Never Do

- Don't show raw error messages to users
- Don't catch errors without handling them
- Don't forget to log errors for debugging (use `console.error`)
- Don't ignore validation errors from API responses

---

## File Structure

### ✅ Always Follow

1. **Next.js 15 App Router Structure** (Current Project)

   ```
   src/
   ├── app/
   │   ├── (public)/              # Public routes group
   │   │   ├── page.tsx           # Home page
   │   │   ├── layout.tsx         # Public layout
   │   │   ├── components/        # Page-specific components
   │   │   │   ├── AboutSection/
   │   │   │   ├── CoursesSection/
   │   │   │   ├── HeroSection/
   │   │   │   └── Contact/
   │   │   ├── courses/           # Courses pages
   │   │   │   ├── page.tsx
   │   │   │   └── [slug]/
   │   │   └── services/          # Services pages
   │   │       └── page.tsx
   │   ├── api/                   # API routes
   │   │   ├── auth/
   │   │   ├── contact/
   │   │   ├── enrollment/
   │   │   ├── subscribe/
   │   │   └── womensday/
   │   └── layout.tsx             # Root layout
   ├── components/                # Shared components
   │   ├── Navigation/
   │   │   └── Navigation.tsx
   │   ├── Footer/
   │   │   └── Footer.tsx
   │   ├── EnrollmentButton/
   │   ├── EnrollmentFormModal/
   │   └── ui/                    # shadcn/ui components
   │       ├── button.tsx
   │       ├── dialog.tsx
   │       ├── input.tsx
   │       └── toast.tsx
   ├── hooks/
   │   ├── use-toast.ts
   │   └── useTrackPageView.ts
   ├── lib/
   │   ├── analytics.tsx
   │   ├── logger.ts
   │   ├── utils.ts
   │   ├── auth/
   │   │   ├── auth.ts
   │   │   └── authOptions.ts
   │   └── db/
   │       └── mongodb.ts
   ├── models/                    # Mongoose models
   │   ├── Course.ts
   │   └── User.ts
   ├── services/                  # Business logic
   │   ├── authService.ts
   │   ├── courseService.ts
   │   └── userService.ts
   ├── types/
   │   ├── CoursePageProps.ts
   │   └── User.ts
   └── styles/
       └── globals.css
   ```

2. **Component File Naming**

   ```
   ✅ CORRECT:
   CourseCard.tsx          # PascalCase for components
   EnrollmentButton.tsx    # PascalCase for components
   use-toast.ts            # kebab-case for hooks
   utils.ts                # kebab-case for utilities
   mongodb.ts              # kebab-case for utilities

   ❌ WRONG:
   courseCard.tsx
   enrollmentbutton.tsx
   UseToast.ts
   ```

### ❌ Never Do for File Structure

- Don't create files outside the established structure
- Don't mix naming conventions
- Don't create duplicate folders for similar purposes
- Don't nest components more than 3 levels deep
- Don't create new component directories without checking existing ones first

---

## Naming Conventions

### ✅ Always Follow

1. **Components**: PascalCase

   ```tsx
   CourseCard.tsx;
   EnrollmentFormModal.tsx;
   HeroSection.tsx;
   Navigation.tsx;
   ```

2. **Hooks**: camelCase with 'use' prefix

   ```tsx
   useTrackPageView.ts;
   use - toast.ts; // Exception: kebab-case when from shadcn/ui
   ```

3. **Utilities**: camelCase or kebab-case

   ```tsx
   utils.ts;
   analytics.tsx;
   logger.ts;
   ```

4. **Constants**: UPPER_SNAKE_CASE

   ```tsx
   export const MAX_COURSE_CAPACITY = 20;
   export const CONTACT_EMAIL = 'info@carinapereira.co.za';
   export const COURSE_DURATION_WEEKS = 12;
   ```

5. **Types/Interfaces**: PascalCase

   ```tsx
   type CourseType = 'full-time' | 'part-time' | 'online';

   interface CourseCardProps {
     title: string;
     price: number;
     duration: string;
   }

   interface EnrollmentFormData {
     fullName: string;
     email: string;
     phone: string;
     courseId: string;
   }
   ```

6. **CSS Classes**: kebab-case or utility classes

   ```css
   /* Brand-specific classes if needed */
   .course-card {
   }
   .hero-section {
   }
   .enrollment-form {
   }

   /* Prefer Tailwind utilities */
   .bg-cpCream .text-cpMagenta .font-tan-ashford;
   ```

### ❌ Never Do for Naming

- Don't use inconsistent naming patterns
- Don't abbreviate unnecessarily (`btn` → `button`, `enrl` → `enrollment`)
- Don't use single-letter variables except in loops (`i`, `j`, `k`)
- Don't mix camelCase and snake_case
- Don't use generic names (`data`, `temp`, `item`, `thing`)

---

## Performance Guidelines

### ✅ Always Follow

1. **Image Optimization**

   ```tsx
   // ✅ CORRECT: Use Next.js Image component
   import Image from 'next/image';

   <Image
     src="/images/courses/pro-makeup/hero.jpg"
     alt="Professional Makeup Course"
     width={800}
     height={600}
     className="rounded-lg"
     loading="lazy"
     priority={false}  // Only true for above-the-fold images
     quality={85}      // Default is 75, adjust as needed
   />

   // ✅ CORRECT: Priority for hero images
   <Image
     src="/images/landing/hero/carina-hero.jpg"
     alt="Carina Pereira teaching makeup"
     width={1920}
     height={1080}
     priority={true}   // Above-the-fold, loads immediately
     className="w-full h-screen object-cover"
   />

   // ❌ WRONG: Regular img tag
   <img src="/images/courses/hero.jpg" alt="Course" />
   ```

2. **Font Loading Optimization**

   ```tsx
   // ✅ CORRECT: Already configured in src/styles/globals.css @theme block
   // Fonts: Tan Ashford, Inclusive Sans, Inter
   // Use font-display: swap for better performance

   // For local fonts, ensure proper preloading in layout:
   import localFont from 'next/font/local';

   const tanAshford = localFont({
     src: './fonts/TanAshford.woff2',
     variable: '--font-tan-ashford',
     display: 'swap',
   });

   const inclusiveSans = localFont({
     src: './fonts/InclusiveSans.woff2',
     variable: '--font-inclusive',
     display: 'swap',
   });
   ```

3. **Code Splitting**

   ```tsx
   // ✅ CORRECT: Dynamic imports for heavy components
   import dynamic from 'next/dynamic';

   const CourseGallery = dynamic(
     () => import('@/components/courses/CourseGallery'),
     {
       loading: () => <GallerySkeleton />,
       ssr: false, // If component needs client-side only
     }
   );

   const EnrollmentFormModal = dynamic(
     () => import('@/components/EnrollmentFormModal/EnrollmentFormModal'),
     {
       loading: () => <div className='animate-pulse'>Loading...</div>,
     }
   );

   // ✅ CORRECT: Route-based code splitting (automatic in Next.js)
   // Each page in app/ directory is automatically code-split
   ```

4. **Memoization**

   ```tsx
   // ✅ CORRECT: Memoize expensive computations
   import { useMemo } from 'react';

   function CourseGrid({ courses }: { courses: Course[] }) {
     const sortedCourses = useMemo(() => {
       return courses.sort((a, b) => a.order - b.order);
     }, [courses]);

     const featuredCourses = useMemo(() => {
       return sortedCourses.filter((c) => c.featured);
     }, [sortedCourses]);

     return (
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         {featuredCourses.map((course) => (
           <CourseCard key={course.id} course={course} />
         ))}
       </div>
     );
   }

   // ✅ CORRECT: Memoize callbacks
   import { useCallback } from 'react';

   const handleEnrollment = useCallback(
     async (courseId: string) => {
       await enrollInCourse(courseId);
     },
     [] // Empty deps if no external dependencies
   );
   ```

5. **Bundle Size Management**

   ```tsx
   // ✅ CORRECT: Import only what you need
   import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

   // ❌ WRONG: Import entire library
   import * as Icons from 'lucide-react';

   // ✅ CORRECT: Tree-shakeable imports
   import { motion } from 'framer-motion'; // Only motion, not entire library

   // ✅ CORRECT: For Swiper
   import { Swiper, SwiperSlide } from 'swiper/react';
   import { Navigation, Pagination } from 'swiper/modules';
   import 'swiper/css';
   import 'swiper/css/navigation';
   import 'swiper/css/pagination';
   ```

6. **Data Fetching Optimization**

   ```tsx
   // ✅ CORRECT: Use Next.js caching strategies
   // Server Component with fetch caching
   export async function CoursesPage() {
     const courses = await fetch('https://api.example.com/courses', {
       next: { revalidate: 3600 }, // Revalidate every hour
     }).then((res) => res.json());

     return <CourseGrid courses={courses} />;
   }

   // ✅ CORRECT: Static generation for course pages
   export async function generateStaticParams() {
     const courses = await getCourses();
     return courses.map((course) => ({
       slug: course.slug,
     }));
   }

   // ✅ CORRECT: Client-side with loading states
   function InstagramFeed() {
     const [posts, setPosts] = useState<InstagramPost[]>([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
       async function fetchPosts() {
         try {
           const response = await fetch('/api/instagram-feed');
           const data = await response.json();
           setPosts(data.posts);
         } finally {
           setIsLoading(false);
         }
       }
       fetchPosts();
     }, []);

     if (isLoading) return <FeedSkeleton />;
     return <PostGrid posts={posts} />;
   }
   ```

### ❌ Never Do for Performance

- Don't load all course images at once without lazy loading
- Don't use regular `<img>` tags - always use Next.js Image
- Don't import large libraries without code splitting
- Don't forget to add loading states for data fetching
- Don't skip image optimization (width, height, alt, quality)
- Don't use `font-display: block` - use `swap` for better UX
- Don't fetch data client-side when it can be done server-side

---

## Accessibility

### ✅ Always Follow

1. **Semantic HTML**

   ```tsx
   // ✅ CORRECT: Semantic elements
   <nav aria-label="Main navigation">
     <ul className="flex space-x-12">
       <li><Link href="/courses">Courses</Link></li>
       <li><Link href="/services">Services</Link></li>
       <li><Link href="/#contact">Contact</Link></li>
     </ul>
   </nav>

   <main id="main-content">
     <article>
       <h1>Professional Makeup Course</h1>
       <p>Comprehensive training with MAC Cosmetics certification...</p>
     </article>
   </main>

   <footer>
     <address>
       Contact us at{' '}
       <a href="mailto:info@carinapereira.co.za">
         info@carinapereira.co.za
       </a>
     </address>
   </footer>
   ```

2. **ARIA Labels and Roles**

   ```tsx
   // ✅ CORRECT: Descriptive ARIA labels for icon buttons
   <button
     aria-label="Open enrollment form for Professional Makeup Course"
     onClick={handleEnrollClick}
     className="bg-cpOrange text-white p-3 rounded-full"
   >
     <Plus className="w-6 h-6" />
   </button>

   <button
     aria-label="Close navigation menu"
     onClick={() => setIsOpen(false)}
   >
     <X className="w-6 h-6" />
   </button>

   // ✅ CORRECT: Search input
   <input
     type="search"
     aria-label="Search courses"
     placeholder="Find a course..."
     className="px-4 py-2 border rounded"
   />

   // ✅ CORRECT: Breadcrumb navigation
   <nav aria-label="Breadcrumb">
     <ol className="flex space-x-2">
       <li><Link href="/">Home</Link></li>
       <li aria-hidden="true">/</li>
       <li><Link href="/courses">Courses</Link></li>
       <li aria-hidden="true">/</li>
       <li aria-current="page">Professional Makeup</li>
     </ol>
   </nav>
   ```

3. **Keyboard Navigation**

   ```tsx
   // ✅ CORRECT: Keyboard accessible interactive elements
   <div
     role="button"
     tabIndex={0}
     onClick={handleClick}
     onKeyDown={(e) => {
       if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         handleClick();
       }
     }}
     className="cursor-pointer hover:bg-cpPink/10 p-4 rounded"
   >
     Course Details
   </div>

   // ✅ CORRECT: Skip to main content link
   <a
     href="#main-content"
     className="
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
     "
   >
     Skip to main content
   </a>
   ```

4. **Focus Management**

   ```tsx
   // ✅ CORRECT: Visible focus indicators
   <button
     className='
       bg-cpOrange 
       text-white 
       px-6 py-3 
       rounded-lg
       focus:outline-none 
       focus:ring-2 
       focus:ring-cpMagenta 
       focus:ring-offset-2
       font-tan-ashford
       lowercase
     '
   >
     enroll now
   </button>;

   // ✅ CORRECT: Focus trap in modal
   import { useEffect, useRef } from 'react';

   function EnrollmentModal({ isOpen, onClose }: ModalProps) {
     const modalRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
       if (isOpen && modalRef.current) {
         const focusableElements = modalRef.current.querySelectorAll(
           'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
         );
         const firstElement = focusableElements[0] as HTMLElement;
         const lastElement = focusableElements[
           focusableElements.length - 1
         ] as HTMLElement;

         firstElement?.focus();

         const handleTabKey = (e: KeyboardEvent) => {
           if (e.key === 'Tab') {
             if (e.shiftKey && document.activeElement === firstElement) {
               e.preventDefault();
               lastElement.focus();
             } else if (!e.shiftKey && document.activeElement === lastElement) {
               e.preventDefault();
               firstElement.focus();
             }
           }
         };

         document.addEventListener('keydown', handleTabKey);
         return () => document.removeEventListener('keydown', handleTabKey);
       }
     }, [isOpen]);

     if (!isOpen) return null;

     return (
       <div
         ref={modalRef}
         role='dialog'
         aria-modal='true'
         aria-labelledby='modal-title'
       >
         <h2 id='modal-title'>Course Enrollment</h2>
         {/* Modal content */}
       </div>
     );
   }
   ```

5. **Color Contrast**

   ```tsx
   // ✅ CORRECT: Sufficient color contrast (WCAG AA)
   <p className="text-gray-800 bg-cpCream">
     Primary text on cream background (contrast ratio > 4.5:1)
   </p>

   <button className="bg-cpOrange text-white">
     High contrast button (contrast ratio > 4.5:1)
   </button>

   <a href="/courses" className="text-cpMagenta underline">
     Accessible link color (contrast ratio > 4.5:1)
   </a>

   // ❌ WRONG: Poor contrast
   <p className="text-cpPink bg-white">
     May have insufficient contrast
   </p>
   ```

6. **Form Accessibility**

   ```tsx
   // ✅ CORRECT: Accessible form elements
   <form>
     <div>
       <label htmlFor='fullName' className='block mb-2 font-inclusive'>
         Full Name *
       </label>
       <input
         id='fullName'
         type='text'
         name='fullName'
         required
         aria-required='true'
         aria-invalid={!!errors.fullName}
         aria-describedby={errors.fullName ? 'fullName-error' : undefined}
         className='w-full px-4 py-2 border rounded'
       />
       {errors.fullName && (
         <span
           id='fullName-error'
           role='alert'
           className='text-red-500 text-sm'
         >
           {errors.fullName}
         </span>
       )}
     </div>

     <fieldset>
       <legend className='font-tan-ashford text-xl mb-3 lowercase'>
         course type
       </legend>
       <div className='space-y-2'>
         <div>
           <input
             type='radio'
             id='full-time'
             name='courseType'
             value='full-time'
           />
           <label htmlFor='full-time' className='ml-2'>
             Full-time
           </label>
         </div>
         <div>
           <input
             type='radio'
             id='part-time'
             name='courseType'
             value='part-time'
           />
           <label htmlFor='part-time' className='ml-2'>
             Part-time
           </label>
         </div>
       </div>
     </fieldset>
   </form>
   ```

7. **Image Accessibility**

   ```tsx
   // ✅ CORRECT: Descriptive alt text
   <Image
     src="/images/courses/pro-makeup/application.jpg"
     alt="Student applying foundation during professional makeup course"
     width={600}
     height={400}
   />

   // ✅ CORRECT: Decorative images
   <Image
     src="/images/landing/decorative-pattern.svg"
     alt=""  // Empty alt for decorative images
     width={100}
     height={100}
     aria-hidden="true"
   />

   // ✅ CORRECT: Complex images with extended descriptions
   <figure>
     <Image
       src="/images/courses/curriculum-overview.jpg"
       alt="Course curriculum showing 12 modules"
       width={800}
       height={600}
     />
     <figcaption id="curriculum-description">
       The curriculum includes: Foundation techniques, Color theory,
       Contouring and highlighting, Special effects, Bridal makeup,
       Editorial makeup, and more.
     </figcaption>
   </figure>
   ```

### ❌ Never Do for Accessibility

- Don't use `<div>` as buttons without proper ARIA and keyboard support
- Don't hide focus indicators (`outline: none` without alternative)
- Don't forget alt text for images (use empty alt="" for decorative only)
- Don't create keyboard traps in modals/overlays without proper escape
- Don't use color alone to convey information (add text/icons)
- Don't forget to associate labels with form inputs
- Don't use placeholders as labels (they disappear on input)
- Don't forget `aria-live` regions for dynamic content updates

---

## TypeScript Type Safety

> **Principle**: Strict type safety is non-negotiable. Never compromise on type correctness. Zero tolerance for `any`, unsafe member access, or type-related lint errors.

### ✅ Always Follow

1. **Zero `any` Types**

   ```typescript
   // ❌ WRONG: Never use `any`
   function processCourse(data: any) {
     return data.title;
   }

   // ✅ CORRECT: Use proper types or interfaces
   interface Course {
     id: string;
     title: string;
     description: string;
     price: number;
     duration: string;
     level: 'beginner' | 'intermediate' | 'advanced';
   }

   function processCourse(course: Course): string {
     return course.title;
   }

   // ✅ CORRECT: Use generics when type is variable
   function processCourseData<T extends { title: string }>(data: T): string {
     return data.title;
   }
   ```

2. **Component Props Typing**

   ```typescript
   // ❌ WRONG: Untyped props
   export default function CourseCard({ title, price, onEnroll }) {
     return <div onClick={onEnroll}>{title}</div>;
   }

   // ✅ CORRECT: Explicit prop types
   interface CourseCardProps {
     title: string;
     description: string;
     price: number;
     duration: string;
     level: 'beginner' | 'intermediate' | 'advanced';
     imageUrl: string;
     onEnroll: (courseId: string) => void;
     className?: string;
   }

   export default function CourseCard({
     title,
     description,
     price,
     duration,
     level,
     imageUrl,
     onEnroll,
     className,
   }: CourseCardProps) {
     return <div className={className}>{/* ... */}</div>;
   }

   // ✅ CORRECT: With children
   interface SectionProps {
     children: React.ReactNode;
     title?: string;
     className?: string;
   }

   export default function Section({
     children,
     title,
     className,
   }: SectionProps) {
     return (
       <section className={className}>
         {title && <h2>{title}</h2>}
         {children}
       </section>
     );
   }
   ```

3. **API Response Types**

   ```typescript
   // ❌ WRONG: Untyped API calls
   async function fetchCourses() {
     const response = await fetch('/api/courses');
     return response.json(); // Return type is 'any'
   }

   // ✅ CORRECT: Define response types
   // types/Course.ts
   export interface Course {
     id: string;
     title: string;
     slug: string;
     description: string;
     price: number;
     duration: string;
     level: 'beginner' | 'intermediate' | 'advanced';
     featured: boolean;
     imageUrl: string;
     modules: string[];
     createdAt: string;
     updatedAt: string;
   }

   export interface CoursesResponse {
     success: boolean;
     courses: Course[];
     total: number;
     message?: string;
   }

   // ✅ CORRECT: Type the API call
   async function fetchCourses(): Promise<CoursesResponse> {
     const response = await fetch('/api/courses');
     if (!response.ok) {
       throw new Error(`Failed to fetch courses: ${response.statusText}`);
     }
     const data: CoursesResponse = await response.json();
     return data;
   }
   ```

4. **Form Handling Types**

   ```typescript
   // ❌ WRONG: Untyped form data
   function handleSubmit(e: any) {
     const data = e.target.elements;
     // No type safety
   }

   // ✅ CORRECT: Type form data and events
   import { FormEvent, ChangeEvent } from 'react';

   interface EnrollmentFormData {
     fullName: string;
     email: string;
     phone: string;
     courseId: string;
     message?: string;
   }

   export default function EnrollmentForm() {
     const [formData, setFormData] = useState<EnrollmentFormData>({
       fullName: '',
       email: '',
       phone: '',
       courseId: '',
       message: '',
     });

     const handleChange = (
       e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
       const { name, value } = e.target;
       setFormData((prev) => ({ ...prev, [name]: value }));
     };

     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       // formData is fully typed
       await submitEnrollment(formData);
     };

     return <form onSubmit={handleSubmit}>{/* ... */}</form>;
   }
   ```

5. **State and Hook Types**

   ```typescript
   // ❌ WRONG: Implicit any in useState
   const [course, setCourse] = useState(null); // Type: null
   const [courses, setCourses] = useState([]); // Type: never[]

   // ✅ CORRECT: Explicit state types
   import { useState } from 'react';
   import { Course } from '@/types/Course';

   const [course, setCourse] = useState<Course | null>(null);
   const [courses, setCourses] = useState<Course[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<Error | null>(null);
   ```

6. **Event Handler Types**

   ```typescript
   import { MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';

   // ✅ CORRECT: Typed event handlers
   const handleEnrollClick = (event: MouseEvent<HTMLButtonElement>) => {
     event.preventDefault();
     // Type-safe access to button properties
   };

   const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
     if (event.key === 'Enter') {
       handleSubmit();
     }
   };

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
     const value = event.target.value;
     setEmail(value);
   };

   const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
     event.target.select();
   };
   ```

7. **No Unsafe Member Access**

   ```typescript
   // ❌ WRONG: Unsafe property access
   function getCourseName(course: any) {
     return course.details.name; // No type checking
   }

   // ❌ WRONG: Using 'as any' to bypass type checking
   function getData(response: Response) {
     return (response as any).data.courses;
   }

   // ✅ CORRECT: Define proper types and handle optionals
   interface CourseDetails {
     name: string;
     instructor: string;
   }

   interface Course {
     id: string;
     details?: CourseDetails;
   }

   function getCourseName(course: Course): string | undefined {
     return course.details?.name;
   }

   // ✅ CORRECT: Use type guards for runtime checks
   function isCourse(data: unknown): data is Course {
     return (
       typeof data === 'object' &&
       data !== null &&
       'id' in data &&
       typeof (data as Course).id === 'string'
     );
   }

   function processCourseData(data: unknown): string {
     if (!isCourse(data)) {
       throw new Error('Invalid course data');
     }
     return data.details?.name ?? 'Untitled Course';
   }
   ```

8. **Mongoose Model Types**

   ```typescript
   // ✅ CORRECT: Type Mongoose models properly
   import { Schema, model, Model, Document } from 'mongoose';

   interface ICourse {
     title: string;
     slug: string;
     description: string;
     price: number;
     duration: string;
     level: 'beginner' | 'intermediate' | 'advanced';
     featured: boolean;
     imageUrl: string;
     modules: string[];
   }

   interface ICourseDocument extends ICourse, Document {
     createdAt: Date;
     updatedAt: Date;
   }

   interface ICourseModel extends Model<ICourseDocument> {
     findBySlug(slug: string): Promise<ICourseDocument | null>;
   }

   const courseSchema = new Schema<ICourseDocument, ICourseModel>(
     {
       title: { type: String, required: true },
       slug: { type: String, required: true, unique: true },
       description: { type: String, required: true },
       price: { type: Number, required: true },
       duration: { type: String, required: true },
       level: {
         type: String,
         enum: ['beginner', 'intermediate', 'advanced'],
         required: true,
       },
       featured: { type: Boolean, default: false },
       imageUrl: { type: String, required: true },
       modules: [{ type: String }],
     },
     { timestamps: true }
   );

   // Static method
   courseSchema.statics.findBySlug = function (slug: string) {
     return this.findOne({ slug });
   };

   export const Course = model<ICourseDocument, ICourseModel>(
     'Course',
     courseSchema
   );
   ```

9. **Utility Types and Type Transformations**

   ```typescript
   // ✅ CORRECT: Use TypeScript utility types
   interface Course {
     id: string;
     title: string;
     description: string;
     price: number;
     duration: string;
     internalNotes: string;
     createdAt: Date;
   }

   // Omit sensitive fields for public display
   type PublicCourse = Omit<Course, 'internalNotes'>;

   // Pick specific fields for preview cards
   type CoursePreview = Pick<Course, 'id' | 'title' | 'price' | 'duration'>;

   // Make all properties optional for updates
   type CourseUpdate = Partial<Course>;

   // Make all properties required
   type RequiredCourse = Required<Course>;

   // Make all properties readonly
   type ImmutableCourse = Readonly<Course>;

   // Extract from union
   type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
   type AdvancedLevel = Extract<CourseLevel, 'advanced'>;

   // Exclude from union
   type BasicLevels = Exclude<CourseLevel, 'advanced'>;

   // Record type for objects
   type CourseById = Record<string, Course>;

   // Return type of function
   async function getCourse(): Promise<Course> {
     /* ... */
   }
   type CourseResult = Awaited<ReturnType<typeof getCourse>>;
   ```

10. **Enum Usage and Constants**

    ```typescript
    // ❌ WRONG: Magic strings
    function setCourseLevel(level: string) {
      // No type safety
    }

    // ✅ CORRECT: Use const objects with 'as const'
    export const CourseLevel = {
      BEGINNER: 'beginner',
      INTERMEDIATE: 'intermediate',
      ADVANCED: 'advanced',
    } as const;

    export type CourseLevel = (typeof CourseLevel)[keyof typeof CourseLevel];

    function setCourseLevel(level: CourseLevel): void {
      // Type-safe
    }

    // ✅ CORRECT: Or use TypeScript enums
    export enum EnrollmentStatus {
      PENDING = 'pending',
      CONFIRMED = 'confirmed',
      CANCELLED = 'cancelled',
      COMPLETED = 'completed',
    }

    interface Enrollment {
      id: string;
      status: EnrollmentStatus;
      courseId: string;
      studentId: string;
    }
    ```

11. **Array and Object Typing**

    ```typescript
    // ❌ WRONG: Untyped arrays
    const courses = []; // Type: never[]
    courses.push(someCourse); // Error

    // ✅ CORRECT: Type arrays explicitly
    const courseIds: string[] = [];
    const courses: Course[] = [];

    // ✅ CORRECT: Use Array<T> for complex types
    const promises: Array<Promise<Course>> = [];

    // ✅ CORRECT: Type object maps
    interface CourseMap {
      [courseId: string]: Course;
    }

    const courseCache: CourseMap = {};

    // ✅ CORRECT: Use Record for typed objects
    const coursePrices: Record<string, number> = {
      'pro-makeup': 15000,
      'express-makeup': 8000,
      hairstyling: 12000,
    };
    ```

### ❌ Never Do

1. **Never use `any` type** - Always create proper types or interfaces
2. **Never use `@ts-ignore` or `@ts-expect-error`** - Fix the type issue instead
3. **Never access properties without type safety** - Use optional chaining and type guards
4. **Never skip prop types on components** - Every component needs typed props
5. **Never leave functions without return types** - Always explicitly type function returns
6. **Never use `as any` to bypass type checking** - Fix the types properly
7. **Never ignore TypeScript errors** - All code must compile without errors
8. **Never use implicit `any`** - Configure strict mode in tsconfig.json

### 🔧 TypeScript Configuration

Ensure your `tsconfig.json` has strict mode enabled:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### 📋 Pre-commit Checklist

Before committing code, ensure:

- [ ] No `any` types in the codebase
- [ ] All components have typed props
- [ ] All functions have explicit return types
- [ ] All API responses are properly typed
- [ ] No TypeScript errors in compilation
- [ ] No type-related ESLint warnings
- [ ] All external libraries are properly typed (use Context7 MCP)
- [ ] Optional properties are handled with `?` or `undefined`
- [ ] Null checks are in place where needed
- [ ] Type guards are used for runtime validation
- [ ] Event handlers use proper React event types
- [ ] Mongoose models have proper type definitions

---

## Quick Reference Checklist

Before creating any new component or page, ask yourself:

### Brand & Design

- [ ] Did I check `docs/brand.md` for brand consistency?
- [ ] Am I using the correct brand colors (cpCream, cpOrange, cpPink, cpMagenta)?
- [ ] Am I using Tan Ashford for headings with lowercase styling?
- [ ] Am I using Inclusive Sans for body text?
- [ ] Are my button styles following the brand guide?

### Library Documentation

- [ ] **Did I use Context7 MCP to get current library documentation?**
- [ ] **Did I resolve the library ID before getting docs?**
- [ ] **Did I verify TypeScript types from the documentation?**
- [ ] Am I using the latest library patterns (not outdated ones)?

### Components

- [ ] Is my component properly organized with TypeScript interfaces?
- [ ] Am I using 'use client' only when necessary?
- [ ] Did I check for existing similar components?
- [ ] Am I using composition over props drilling?

### Styling

- [ ] Am I using Tailwind CSS utilities first?
- [ ] **If using sticky positioning, did I add proper navigation offset (top-24)?**
- [ ] Is my component responsive (mobile-first)?
- [ ] Did I use the Tailwind spacing scale consistently?

### Forms

- [ ] Does my form have client-side validation?
- [ ] Do I have field-level validation with real-time feedback?
- [ ] Am I handling form submission states (loading, success, error)?
- [ ] Is the submit button disabled while submitting?
- [ ] Do I have proper TypeScript types for form data?

### Accessibility

- [ ] Am I using semantic HTML?
- [ ] Do icon buttons have aria-labels?
- [ ] Are my form inputs properly labeled?
- [ ] Do I have visible focus indicators?
- [ ] Is my component keyboard accessible?
- [ ] Do images have descriptive alt text?

### Performance

- [ ] Am I using Next.js Image for all images?
- [ ] Did I add loading states?
- [ ] Am I importing only what I need from libraries?
- [ ] Did I consider code splitting for heavy components?

### TypeScript

- [ ] No `any` types used?
- [ ] All props typed?
- [ ] All functions have return types?
- [ ] All event handlers properly typed?
- [ ] Mongoose models have type definitions?

---

## Common Patterns

### Loading States

```tsx
// Pattern 1: Inline loading spinner
if (isLoading) {
  return (
    <div className='flex items-center justify-center py-12'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-cpOrange' />
    </div>
  );
}

// Pattern 2: Loading skeleton
if (isLoading) {
  return <CourseCardSkeleton />;
}

// Pattern 3: Shimmer effect
<div className='animate-pulse bg-cpCream rounded-lg p-6'>
  <div className='h-4 bg-gray-300 rounded w-3/4 mb-4' />
  <div className='h-4 bg-gray-300 rounded w-1/2' />
</div>;
```

### Error States

```tsx
// Pattern 1: Inline error message
if (error) {
  return (
    <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg'>
      <p className='font-inclusive font-semibold'>Error</p>
      <p className='font-inclusive text-sm'>{error.message}</p>
    </div>
  );
}

// Pattern 2: Error component
if (error) {
  return <ErrorMessage message={error.message} />;
}
```

### Empty States

```tsx
if (courses.length === 0) {
  return (
    <div className='text-center py-12 bg-cpCream rounded-lg'>
      <p className='font-tan-ashford text-2xl text-cpMagenta lowercase mb-2'>
        no courses found
      </p>
      <p className='font-inclusive text-gray-600'>
        Check back soon for new course offerings
      </p>
    </div>
  );
}
```

### API Call Pattern

```tsx
const fetchCourses = async () => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch('/api/courses');

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch courses');
    }

    const data = await response.json();
    setCourses(data.courses);
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error);
      console.error('API Error:', error);
    }
  } finally {
    setIsLoading(false);
  }
};
```

### Form Validation Pattern

```tsx
const validateField = (name: string, value: string): string => {
  switch (name) {
    case 'fullName':
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      break;
    case 'email':
      if (!value.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'Invalid email address';
      break;
    case 'phone':
      if (!value.trim()) return 'Phone number is required';
      if (!/^\d{10}$/.test(value.replace(/\s/g, '')))
        return 'Phone number must be 10 digits';
      break;
  }
  return '';
};

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Real-time validation on change
  const error = validateField(name, value);
  setErrors((prev) => ({ ...prev, [name]: error }));
};
```

### Sticky Element Pattern

```tsx
// ✅ CORRECT: Sticky course details sidebar
<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
  {/* Main Content */}
  <div className='lg:col-span-2'>
    <CourseDetails course={course} />
  </div>

  {/* Sticky Enrollment CTA - ALWAYS with navigation offset */}
  <div className='lg:col-span-1'>
    <div
      className='
        sticky 
        top-24                        /* Navigation offset */
        z-20                          /* Below navbar (z-30) */
        max-h-[calc(100vh-6rem)]     /* Prevent overflow */
      '
    >
      <EnrollmentCard course={course} />
    </div>
  </div>
</div>
```

---

## Resources

- **Brand Guide**: `docs/brand.md`
- **Project Documentation**: `docs/` directory
- **Components**: `src/components/`
- **Page Components**: `src/app/(public)/components/`
- **Types**: `src/types/`
- **API Routes**: `src/app/api/`
- **Models**: `src/models/`
- **Services**: `src/services/`

---

## Project-Specific Notes

### Current Project Stack

- **Framework**: Next.js 15.4.3 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.0.0 ⚠️ **v4 - Configuration in CSS using @theme**
- **PostCSS**: @tailwindcss/postcss 4.0.0
- **Icons**: Lucide React 0.525.0
- **Animations**: tw-animate-css 1.0.3 (Tailwind v4 compatible)
- **Database**: Mongoose 8.16.5
- **Auth**: NextAuth 4.24.11
- **Carousel**: Swiper 11.2.1
- **UI Components**: Radix UI (dialog, tabs, toast, etc.)

> **📌 Note**: This project uses Tailwind CSS v4, which has significant architectural changes from v3. All configuration is now in `src/styles/globals.css` using the `@theme` block instead of `tailwind.config.ts`. See `docs/TAILWIND_V4_MIGRATION.md` for details.

### Navigation

- **Positioning**: `fixed top-0` at all breakpoints
- **Z-Index**: `z-30`
- **Padding**: `py-6` (24px top/bottom)

Always account for navigation when creating sticky elements (use `top-24`)!

### Brand Colors (Quick Reference)

- **Cream**: `bg-cpCream` (#FFFEF3) - Backgrounds
- **Orange**: `bg-cpOrange` (#FA7E39) - Primary CTAs
- **Pink**: `bg-cpPink` (#F1A0C5) - Secondary accents
- **Magenta**: `bg-cpMagenta` (#E62E6B) - Highlights, links

### Existing API Routes

- `/api/auth` - Authentication
- `/api/contact` - Contact form submission
- `/api/enrollment` - Course enrollment
- `/api/subscribe` - Newsletter subscription
- `/api/womensday` - Special promotion forms
- `/api/instagram-feed` - Instagram integration
- `/api/users` - User management

### Typography

- **Headings**: Tan Ashford (lowercase styling)
- **Body**: Inclusive Sans
- **UI Elements**: Inter

---

## Remember: Core Principles

**Always prioritize:**

1. **Brand consistency** - Check `docs/brand.md`, use brand colors, fonts, and lowercase styling
2. **Context7 MCP first** - Verify library patterns and types before implementing
3. **Type safety** - Zero tolerance for `any`, strict TypeScript throughout
4. **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation, alt text
5. **Performance** - Next.js Image, code splitting, loading states, lazy loading
6. **User experience** - Error handling, validation feedback, responsive design

---

**Consistency is key.** When in doubt, check existing components and documentation before creating something new. These rules exist to ensure a cohesive, maintainable, and on-brand codebase for Carina Pereira International.

---

_End of Frontend Design & Development Rules_
