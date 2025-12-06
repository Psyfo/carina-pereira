# TypeScript & Type Safety Rules

> **Purpose**: Zero-tolerance policy for type safety and best practices.

---

## 🚨 CRITICAL: Zero Tolerance for `any`

**NEVER use `any` type. ALWAYS use proper TypeScript types.**

```tsx
// ❌ WRONG: Using any
function processData(data: any) {
  return data.name;
}

// ✅ CORRECT: Proper types
interface UserData {
  name: string;
  email: string;
  age: number;
}

function processData(data: UserData) {
  return data.name;
}

// ✅ CORRECT: Unknown for truly unknown data
function processApiResponse(response: unknown) {
  if (isUserData(response)) {
    return response.name;
  }
  throw new Error('Invalid response');
}

function isUserData(data: unknown): data is UserData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'name' in data &&
    'email' in data
  );
}
```

---

## ✅ Always Follow

### 1. Define Interfaces for All Props

```tsx
// ✅ GOOD: Explicit interface
interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  duration: string;
  onEnroll?: () => void; // Optional prop
}

export default function CourseCard({
  id,
  title,
  description,
  price,
  imageUrl,
  duration,
  onEnroll,
}: CourseCardProps) {
  // Implementation
}

// ❌ BAD: No types
export default function CourseCard(props) {
  // Implementation
}
```

### 2. Use Type Guards

```tsx
// ✅ Type guard for API responses
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is ApiResponse<T> & { data: T } {
  return response.success && response.data !== undefined;
}

// Usage
const response = await fetchData();
if (isSuccessResponse(response)) {
  // TypeScript knows response.data exists
  console.log(response.data);
}
```

### 3. Proper Error Handling Types

```tsx
// ✅ GOOD: Type-safe error handling
try {
  await submitForm(data);
} catch (error: unknown) {
  if (error instanceof Error) {
    setErrorMessage(error.message);
  } else {
    setErrorMessage('An unexpected error occurred');
  }
}

// ❌ BAD: Using any
try {
  await submitForm(data);
} catch (error: any) {
  setErrorMessage(error.message);
}
```

### 4. Generic Types for Reusability

```tsx
// ✅ Generic data fetching hook
interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

function useApi<T>(url: string): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Implementation

  return { data, loading, error, refetch };
}

// Usage
const { data, loading, error } = useApi<Course[]>('/api/courses');
```

### 5. Discriminated Unions for State

```tsx
// ✅ GOOD: Discriminated union
type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; message: string }
  | { status: 'error'; error: string };

function FormComponent() {
  const [state, setState] = useState<FormState>({ status: 'idle' });

  // TypeScript knows what properties exist based on status
  if (state.status === 'success') {
    console.log(state.message); // ✅ OK
  }
  if (state.status === 'error') {
    console.log(state.error); // ✅ OK
  }
}

// ❌ BAD: Loose object with optional fields
interface FormState {
  status: string;
  message?: string;
  error?: string;
}
```

### 6. Utility Types

```tsx
// ✅ Use built-in utility types
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Partial - Make all properties optional
type UserUpdate = Partial<User>;

// Pick - Select specific properties
type UserPublic = Pick<User, 'id' | 'name' | 'email'>;

// Omit - Exclude specific properties
type UserWithoutPassword = Omit<User, 'password'>;

// Required - Make all properties required
type UserRequired = Required<User>;

// Readonly - Make all properties readonly
type ImmutableUser = Readonly<User>;
```

---

## ❌ Never Do

- **Never use `any`** - Use `unknown` if type is truly unknown, then narrow it
- Don't skip interface definitions - every component should have typed props
- Don't use `@ts-ignore` - Fix the type issue instead
- Don't use `as any` for type assertions - Find the correct type
- Don't leave implicit `any` in function parameters
- Don't use `Function` type - Use proper function signatures

---

## Common Patterns

### Form Data Types

```tsx
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Or use Partial
type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
```

### API Response Types

```tsx
interface ApiSuccess<T> {
  success: true;
  data: T;
}

interface ApiError {
  success: false;
  error: string;
  message?: string;
}

type ApiResponse<T> = ApiSuccess<T> | ApiError;
```

### Event Handlers

```tsx
// ✅ Proper event handler types
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Submit logic
};

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.stopPropagation();
  // Click logic
};
```

---

## Library Types & Context7

**Before using library types, ALWAYS check Context7 MCP for up-to-date type definitions:**

```bash
# 1. Resolve library ID
resolve-library-id: "next"

# 2. Get documentation
get-library-docs: "/vercel/next.js" with topic "TypeScript types"
```

### Next.js Types

```tsx
import type { Metadata } from 'next';
import type { NextPage } from 'next';

// Page component with props
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  // Implementation
};

// Metadata
export const metadata: Metadata = {
  title: 'Carina Pereira International',
  description: 'Professional makeup courses',
};
```

---

[← Back to Frontend Rules Index](../frontend-rules.md)
