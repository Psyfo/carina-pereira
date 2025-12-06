# Library Documentation (Context7 MCP)

> **Purpose**: Always use Context7 MCP to get up-to-date library documentation before implementing any library features.

---

## 🚨 CRITICAL: Check Context7 First

> **Zero Outdated Implementations**: Better to spend 30 seconds checking Context7 than 30 minutes debugging outdated code.

**Before using any external library, working with TypeScript types, or implementing library-specific patterns, ALWAYS use Context7 MCP to get up-to-date documentation.**

---

## ✅ When to Use Context7 MCP

1. Before implementing any library feature or component
2. When working with library-specific TypeScript types
3. When library documentation seems outdated or inconsistent
4. Before debugging library-related issues
5. When adding a new library to the project

---

## How to Use Context7 MCP

### Step 1: Resolve Library ID

```bash
# Always resolve the library ID first
mcp_upstash_conte_resolve-library-id

# Example
libraryName: "next"
```

**Response will include:**

- Context7-compatible library ID (e.g., `/vercel/next.js`)
- Description
- Available versions
- Code snippet count
- Source reputation

### Step 2: Get Library Documentation

```bash
# Use the resolved library ID
mcp_upstash_conte_get-library-docs

# Parameters
context7CompatibleLibraryID: "/vercel/next.js"
topic: "Image component"  # Optional: focus on specific feature
mode: "code"  # or "info" for conceptual docs
```

---

## Common Libraries in This Project

### Next.js

```bash
# 1. Resolve
libraryName: "next"
# Returns: /vercel/next.js

# 2. Get docs for specific features
context7CompatibleLibraryID: "/vercel/next.js"
topic: "Image component"
mode: "code"

# Common topics:
# - "Image component"
# - "Link component"
# - "routing"
# - "server components"
# - "metadata API"
# - "server actions"
```

### React

```bash
# 1. Resolve
libraryName: "react"
# Returns: /facebook/react

# 2. Get docs
context7CompatibleLibraryID: "/facebook/react"
topic: "hooks"
mode: "code"

# Common topics:
# - "useState"
# - "useEffect"
# - "useRef"
# - "useContext"
# - "custom hooks"
```

### Framer Motion

```bash
# 1. Resolve
libraryName: "framer-motion"
# Returns: /framer/motion

# 2. Get docs
context7CompatibleLibraryID: "/framer/motion"
topic: "animation variants"
mode: "code"

# Common topics:
# - "animation variants"
# - "AnimatePresence"
# - "motion components"
# - "gestures"
```

### Tailwind CSS

```bash
# 1. Resolve
libraryName: "tailwindcss"
# Returns: /tailwindlabs/tailwindcss

# 2. Get docs
context7CompatibleLibraryID: "/tailwindlabs/tailwindcss"
topic: "configuration"
mode: "info"

# Common topics:
# - "configuration"
# - "custom utilities"
# - "theme customization"
# - "plugins"
```

### shadcn/ui

```bash
# 1. Resolve
libraryName: "shadcn-ui"
# Returns: /shadcn/ui

# 2. Get docs
context7CompatibleLibraryID: "/shadcn/ui"
topic: "dialog component"
mode: "code"

# Common topics:
# - "dialog component"
# - "button component"
# - "form components"
# - "installation"
```

---

## TypeScript Type Safety with Context7

**Always check library types before using them:**

```tsx
// ❌ DON'T: Guess the types
import { SomeComponent } from 'library';

interface Props {
  data: any; // Wrong!
}

// ✅ DO: Check Context7 first
// 1. Resolve library: "library-name"
// 2. Get docs with topic: "SomeComponent props"
// 3. Use exact types from documentation

import { SomeComponent, SomeComponentProps } from 'library';

interface Props extends SomeComponentProps {
  // Now you have the correct types
}
```

---

## Before Implementing New Features

### Checklist

1. **Resolve Library ID**

   ```bash
   resolve-library-id: "library-name"
   ```

2. **Get Feature Documentation**

   ```bash
   get-library-docs:
     context7CompatibleLibraryID: "/org/library"
     topic: "specific feature"
     mode: "code"
   ```

3. **Verify TypeScript Types**

   - Check exact prop types
   - Check return types
   - Check event handler types

4. **Use Exact Patterns from Docs**

   - Copy exact import statements
   - Use exact component patterns
   - Follow exact TypeScript types

5. **Test Implementation**
   - Verify no type errors
   - Test functionality
   - Check console for warnings

---

## When Debugging Library Issues

### Debugging Workflow

1. **Check Current Implementation**

   - What version are you using?
   - What pattern are you following?

2. **Get Latest Documentation**

   ```bash
   get-library-docs:
     context7CompatibleLibraryID: "/org/library"
     topic: "feature causing issues"
   ```

3. **Compare with Docs**

   - Is your pattern outdated?
   - Are you missing required props?
   - Are types mismatched?

4. **Update to Correct Pattern**
   - Use exact pattern from Context7
   - Update types to match docs
   - Test again

---

## ❌ Never Do

- **Don't guess library API patterns** - Always check Context7 first
- **Don't use `any` types for library props** - Get correct types from docs
- **Don't implement library features from memory** - Verify current patterns
- **Don't ignore TypeScript errors from libraries** - Check docs for correct types
- **Don't assume library patterns are the same across versions** - Verify version-specific docs
- **Don't skip Context7 lookup because "it's a simple component"** - Even simple features may have changed

---

## Examples

### Example 1: Next.js Image Component

```tsx
// ❌ DON'T: Implement from memory
<img src='/image.jpg' alt='Course' width='300' height='200' />;

// ✅ DO: Check Context7 first
// 1. resolve-library-id: "next"
// 2. get-library-docs: "/vercel/next.js" topic: "Image component"
// 3. Use exact pattern from docs:

import Image from 'next/image';

<Image
  src='/image.jpg'
  alt='Course'
  width={300}
  height={200}
  quality={90}
  priority
/>;
```

### Example 2: Framer Motion Animation

```tsx
// ❌ DON'T: Guess the API
<div className='animate'>Content</div>;

// ✅ DO: Check Context7 first
// 1. resolve-library-id: "framer-motion"
// 2. get-library-docs: "/framer/motion" topic: "motion div"
// 3. Use exact pattern:

import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>;
```

### Example 3: React Hook Types

```tsx
// ❌ DON'T: Use any for state
const [data, setData] = useState<any>(null);

// ✅ DO: Check Context7 for proper typing
// 1. resolve-library-id: "react"
// 2. get-library-docs: "/facebook/react" topic: "useState TypeScript"
// 3. Use exact pattern:

interface UserData {
  id: string;
  name: string;
  email: string;
}

const [data, setData] = useState<UserData | null>(null);
```

---

## Quick Reference Commands

```bash
# Resolve library ID
mcp_upstash_conte_resolve-library-id
libraryName: "library-name"

# Get documentation (code examples)
mcp_upstash_conte_get-library-docs
context7CompatibleLibraryID: "/org/library"
topic: "feature-name"
mode: "code"

# Get documentation (conceptual info)
mcp_upstash_conte_get-library-docs
context7CompatibleLibraryID: "/org/library"
topic: "concept-name"
mode: "info"
```

---

[← Back to Frontend Rules Index](../frontend-rules.md)
