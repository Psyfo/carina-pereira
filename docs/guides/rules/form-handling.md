# Form Handling Rules

> **Purpose**: Comprehensive guidelines for form implementation with custom validation.

---

## 🚨 CRITICAL RULE: Custom Validation Only

**NEVER use HTML5 default validation. ALWAYS implement custom validation with `noValidate` attribute.**

```tsx
// ✅ CORRECT: Custom validation with noValidate
<form onSubmit={handleSubmit} noValidate>
  <input
    type="email"
    value={formData.email}
    onChange={handleChange}
    onBlur={handleBlur}
    aria-invalid={errors.email ? 'true' : 'false'}
    aria-describedby={errors.email ? 'email-error' : undefined}
  />
  {errors.email && (
    <span id="email-error" role="alert" className="text-red-500 text-sm">
      {errors.email}
    </span>
  )}
</form>

// ❌ WRONG: HTML5 validation (missing noValidate)
<form onSubmit={handleSubmit}>
  <input type="email" required />
</form>

// ❌ WRONG: Using required attribute without custom validation
<form onSubmit={handleSubmit}>
  <input type="email" required />
</form>
```

### Why Custom Validation Only?

- **Brand Consistency**: HTML5 validation doesn't match our brand's visual design
- **UX Control**: We need real-time, field-level feedback with custom error messages
- **Accessibility**: Custom validation allows proper ARIA attributes and screen reader support
- **Internationalization**: Custom messages can be translated and localized
- **Styling**: Browser default error bubbles can't be styled to match our design system

### Implementation Checklist

- [ ] Every `<form>` has `noValidate` attribute
- [ ] Custom `validateField()` function for each form
- [ ] Real-time validation on `onChange`
- [ ] Validation on `onBlur` for better UX
- [ ] Custom error messages displayed below fields
- [ ] `aria-invalid` and `aria-describedby` for accessibility
- [ ] Error state styling (red border, error text)
- [ ] Submit blocked if validation fails

---

## ✅ Always Follow

### 1. Client-Side Form Handling with Validation

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

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
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
    <form onSubmit={handleSubmit} noValidate className='space-y-6'>
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
          onBlur={handleBlur}
          className={`
            w-full px-4 py-3 
            border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} 
            rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-cpMagenta
            font-inclusive
          `}
          aria-invalid={errors.fullName ? 'true' : 'false'}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <span id='fullName-error' className='text-red-500 text-sm mt-1 block'>
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

### 2. Form States

```tsx
const [formData, setFormData] = useState<FormData>({
  /* initial values */
});
const [errors, setErrors] = useState<Partial<FormData>>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitSuccess, setSubmitSuccess] = useState(false);
const [submitError, setSubmitError] = useState<string | null>(null);
```

### 3. Field-Level Validation (Real-Time Feedback)

```tsx
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Real-time validation
  const error = validateField(name, value);
  setErrors((prev) => ({ ...prev, [name]: error }));
};

const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  const error = validateField(name, value);
  setErrors((prev) => ({ ...prev, [name]: error }));
};
```

---

## ❌ Never Do

- Don't submit forms without validation
- Don't validate only on submit - provide real-time feedback on blur
- Don't forget loading and error states
- Don't forget to disable submit button while submitting
- Don't use generic error messages - be specific about what's wrong
- **Don't forget to check existing API routes** - `/api/contact`, `/api/enrollment`, `/api/subscribe`
- **Don't use HTML5 validation attributes** - Always use `noValidate` on forms

---

## Existing API Routes

- `/api/auth` - Authentication
- `/api/contact` - Contact form submission
- `/api/enrollment` - Course enrollment
- `/api/subscribe` - Newsletter subscription
- `/api/womensday` - Special promotion forms
- `/api/instagram-feed` - Instagram integration
- `/api/users` - User management

---

[← Back to Frontend Rules Index](../frontend-rules.md)
