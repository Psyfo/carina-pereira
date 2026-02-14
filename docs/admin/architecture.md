# admin architecture

technical architecture for the admin dashboard. designed for incremental implementation—start simple, add control gradually.

---

## 1. overview

**Current foundations (already built):**

- Next.js App Router with `(admin)` and `(public)` segments
- MongoDB connection via `src/lib/db/mongodb.ts` (prod/dev env-aware)
- NextAuth (credentials provider, JWT sessions) in `src/lib/auth`
- Models: `User` (email, password), `Course` (rich schema with hero/about/learning/CTA sections)
- Services: `authService`, `courseService`, `userService`
- UI: shadcn/ui components + Radix primitives already installed

**Architecture principles:**

- **Server-first auth:** Admin layout checks session server-side, redirects unauthorized users
- **Incremental control:** Each increment delivers usable admin functionality, not just scaffolding
- **Service layer:** Business logic stays in `src/services/*`, not in route handlers or components
- **Brand consistency:** Admin uses Carina Pereira design tokens via CSS variables

---

## 2. routing structure

**Admin routes** (all protected):

```
(admin)/admin/
  ├── layout.tsx          # Auth guard, sidebar, topbar
  ├── dashboard/page.tsx  # Home: stats, quick actions
  ├── contacts/
  │   ├── page.tsx        # List view with filters
  │   └── [id]/page.tsx   # Detail view
  ├── courses/
  │   ├── page.tsx        # List view
  │   ├── new/page.tsx    # Create form
  │   └── [id]/
  │       ├── page.tsx    # Quick-edit (phase 1)
  │       └── edit/page.tsx  # Full section editor (phase 2)
  └── promotions/
      ├── page.tsx
      ├── new/page.tsx
      └── [id]/page.tsx
```

**Login route:**

```
(auth)/admin/login/page.tsx  # Credentials form
```

**Layout rules:**

- Admin layout is a **server component** that reads session via `getServerSession(authOptions)`
- Redirects to `/admin/login` if no session or user lacks admin role
- Children default to server components; mark `'use client'` only for:
  - Forms with client-side validation
  - Tables with sorting/filtering state
  - Dialogs, modals, toasts
- Heavy queries (lists, stats) belong in child pages, not layout

---

## 3. data models

### 3.1 User (extend existing)

**Current:** `email`, `password`  
**Add in Increment 1:**

```typescript
role: { type: String, enum: ['admin'], default: 'admin' }
```

**Future (deferred):** When e-learning launches, add `'user'` role for students. Keep admin separate.

---

### 3.2 Course (existing, extend in phases)

**Current:** Full schema with `slug`, `hero`, `about`, `learning`, `cta` sections. All content nested.  
**Add in Increment 3a:**

```typescript
basePrice: { type: Number, required: false },  // Separate from promo pricing
isActive: { type: Boolean, default: true },
isFeatured: { type: Boolean, default: false },
sortOrder: { type: Number, default: 0 },
// Audit fields:
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
```

**Indexes:** `slug` (unique), `isActive`, `isFeatured`

---

### 3.3 Lead (create in Increment 2)

**Purpose:** Unified tracking for all contact sources (contact form, enrollment form, mailing list).

```typescript
{
  fullName: String,
  email: { type: String, required: true },
  phone: String,
  source: { type: String, enum: ['contact', 'enrollment', 'subscribe', 'campaign'] },
  courseSlug: String,  // For enrollment/interest
  message: String,
  tags: [String],  // e.g. ['womens-day', 'pro-makeup-2026']
  status: { type: String, enum: ['new', 'contacted', 'converted', 'archived'], default: 'new' },
  notes: String,  // Admin internal notes
  createdAt: Date,
  updatedAt: Date,
}
```

**Indexes:** `email`, `source`, `status`, `createdAt` (for sorting)

---

### 3.4 Promotion (create in Increment 4)

**Purpose:** Time-bound discounts applied to courses or site-wide.

```typescript
{
  name: { type: String, required: true },  // "Pro Makeup 50% Off"
  type: { type: String, enum: ['percentage', 'fixed'], required: true },
  value: { type: Number, required: true },  // 50 or 500
  scope: { type: String, enum: ['course', 'site-wide', 'tag'] },
  courseIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  campaignTag: String,  // Alternative to courseIds for tag-based targeting
  startsAt: { type: Date, required: true },
  endsAt: { type: Date, required: true },
  isActive: { type: Boolean, default: true },  // Manual override
  priority: { type: Number, default: 100 },  // Resolve conflicts
  createdAt: Date,
  updatedAt: Date,
}
```

**Indexes:** `endsAt`, `isActive`, `scope`

---

## 4. api design

**Pattern:** Route handlers under `src/app/api/admin/*` for JSON APIs.

### 4.1 Structure

```
api/admin/
  ├── courses/
  │   ├── route.ts              # GET (list), POST (create)
  │   └── [id]/route.ts         # GET (read), PATCH (update), DELETE
  ├── contacts/
  │   ├── route.ts
  │   └── [id]/route.ts
  └── promotions/
      ├── route.ts
      └── [id]/route.ts
```

### 4.2 Handler pattern

**Every handler must:**

1. **Authenticate** — Read session via `getServerSession(authOptions)`, ensure `session.user.role === 'admin'`
2. **Validate** — Use Zod schemas for request bodies
3. **Delegate** — Call service functions (e.g., `courseService.updateCourse()`), never write Mongoose queries inline
4. **Return normalized JSON**

**Response shape:**

```typescript
// Success
{ success: true, data: {...} }

// Error
{ success: false, error: { code: 'VALIDATION_ERROR', message: '...', fieldErrors?: {...} } }
```

### 4.3 Pagination & filters

**List endpoints accept:**

```typescript
// Query params
{
  page?: number,          // Default 1
  pageSize?: number,      // Default 20, max 100
  status?: string,        // Filter by status
  source?: string,        // For contacts
  q?: string,             // Text search
  sortBy?: string,        // Field name
  sortOrder?: 'asc' | 'desc'
}
```

**List endpoints return:**

```typescript
{
  success: true,
  data: {
    items: [...],
    pagination: {
      total: 156,
      page: 2,
      pageSize: 20,
      totalPages: 8
    }
  }
}
```

---

## 5. security & auth

### 5.1 Admin guard (server-side)

**Implementation location:** `src/lib/auth/requireAdmin.ts`

```typescript
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './authOptions';

export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/admin/login');
  }

  // Future: check session.user.role === 'admin' when role field added

  return session;
}
```

**Usage in admin layout:**

```typescript
export default async function AdminLayout({ children }) {
  const session = await requireAdmin();
  return (
    <div className="admin-layout">
      <Sidebar />
      <Topbar user={session.user} />
      {children}
    </div>
  );
}
```

### 5.2 API route protection

**Every admin API route:**

```typescript
export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return Response.json(
      {
        success: false,
        error: { code: 'UNAUTHORIZED', message: 'Admin access required' },
      },
      { status: 401 },
    );
  }

  // Proceed with logic
}
```

### 5.3 Session configuration

**NextAuth config (already in place):**

- Strategy: JWT (stateless)
- Cookies: `httpOnly`, `secure` (prod), `sameSite: 'lax'`
- Session expiry: 30 days (configurable)

**Future hardening (deferred):**

- Rate limiting on login endpoint
- CSRF tokens for state-changing requests
- Audit log for admin actions

---

## 6. ui stack & branding

**Component library:** shadcn/ui (already installed)

- Components live in `src/components/ui/*` as source files (you own them)
- Built on Radix primitives for accessibility
- Styled with Tailwind + CSS variables

**Branding approach:**

Update design tokens in `src/styles/partials/_base.css`:

```css
:root {
  --primary: 18 97% 60%; /* #FA7E39 (CP Orange) */
  --secondary: 339 79% 77%; /* #F1A0C5 (CP Pink) */
  --accent: 340 80% 54%; /* #E62E6B (CP Magenta) */
  --background: 54 100% 98%; /* #FFFEF3 (CP Cream) */
  /* ... other tokens */
}
```

All admin components automatically use Carina Pereira colors.

**Data tables:** TanStack Table v8 + shadcn DataTable pattern

- Client-side sorting, filtering, pagination
- Fully customizable columns
- Add via: `npx shadcn@latest add data-table`

**Forms:** React Hook Form + Zod

- Server Actions for mutations (modern Next.js pattern)
- Client-side validation with server-side verification

---

## 7. incremental roadmap

See [dashboard-plan.md](./dashboard-plan.md) for detailed, trackable tasks.

**Summary:**

1. **Increment 1:** Login + admin layout + dashboard with stats
2. **Increment 2:** Contacts CRM (Lead model, list, detail, filters)
3. **Increment 3a:** Course quick-edit (title, price, flags)
4. **Increment 3b:** Course full editor (section tabs)
5. **Increment 4:** Promotions engine
6. **Increment 5:** Public site integration (ISR, caching)
7. **Increment 6:** Audit logs, soft deletes, version history

Each increment delivers usable admin control before moving to the next.
