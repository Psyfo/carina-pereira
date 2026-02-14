# admin implementation plan

## goals & principles

**What we're building:**

An internal admin dashboard that gives non-developers control over:

- Contacts & leads (from contact/enrollment/subscribe forms)
- Courses (CRUD, pricing, publishing)
- Promotions & discounts (time-bound, dynamic)
- Site content (gradually replacing hardcoded data)

**How we're building it:**

- **Incremental delivery:** Each increment ships usable admin functionality
- **Smallest viable change:** No scaffolding without purpose
- **Database-first:** Models and services before UI
- **Modern Next.js:** Server components, Server Actions, React Hook Form
- **Brand consistency:** Carina Pereira design tokens throughout

**What already exists:**

| Component             | Status       | Location                                         |
| --------------------- | ------------ | ------------------------------------------------ |
| DB connection         | ✅ Done      | `src/lib/db/mongodb.ts`                          |
| Auth (NextAuth)       | ✅ Done      | `src/lib/auth/*`                                 |
| User model            | ✅ Minimal   | `src/models/User.ts` (needs role field)          |
| Course model          | ✅ Rich      | `src/models/Course.ts` (needs admin fields)      |
| Course service        | ✅ Full CRUD | `src/services/courseService.ts`                  |
| shadcn/ui components  | ✅ Installed | `src/components/ui/*`                            |
| Admin route structure | 🚧 Empty     | `(admin)/admin/dashboard/` exists but no content |

---

## increment 1: gate & enter

**Goal:** Admin can log in, see the dashboard, view real stats.

**Deliverables:**

- Login page at `(auth)/admin/login`
- Admin layout with auth guard at `(admin)/admin/layout.tsx`
- Dashboard home with live course/contact counts at `(admin)/admin/dashboard/page.tsx`
- User model extended with `role` field

### Tasks

#### 1.1 Extend User model with role

**File:** `src/models/User.ts`

```typescript
role: { type: String, enum: ['admin'], default: 'admin' }
```

**Migration:** Run seed script to update existing admin user.

#### 1.2 Create requireAdmin helper

**File:** `src/lib/auth/requireAdmin.ts`

Server-side function that:

- Reads session via `getServerSession(authOptions)`
- Redirects to `/admin/login` if no session
- Returns session for downstream use

#### 1.3 Build login page

**File:** `src/app/(auth)/admin/login/page.tsx`

Client component with:

- Email/password form
- NextAuth `signIn()` call
- Error handling
- Redirect to `/admin/dashboard` on success

**Design:** Carina Pereira branding, cream background, orange CTA button

#### 1.4 Build admin layout

**File:** `src/app/(admin)/admin/layout.tsx`

Server component that:

- Calls `requireAdmin()` at top
- Renders sidebar with nav links (Dashboard, Contacts, Courses, Promotions)
- Renders topbar with user email and logout button
- Uses shadcn Sheet component for mobile sidebar

**Nav structure:**

```
Dashboard       → /admin/dashboard
Contacts        → /admin/contacts
Courses         → /admin/courses
Promotions      → /admin/promotions (greyed out until Increment 4)
```

#### 1.5 Build dashboard home

**File:** `src/app/(admin)/admin/dashboard/page.tsx`

Server component displaying:

- Total courses count (query Course model)
- Total contacts count (query existing contact/enrollment APIs or count from API records)
- Recent form submissions (last 5)
- Quick action buttons: "New Course", "View Contacts"

**Note:** This uses _real data_ from day one. No placeholder content.

**Acceptance criteria:**

- [ ] Admin can log in at `/admin/login`
- [ ] Unauthorized users redirected to login
- [ ] Dashboard shows live course count
- [ ] Sidebar nav renders and links work
- [ ] Logout button clears session and redirects to login

---

## increment 2: contacts crm

**Goal:** Track and manage every lead from contact/enrollment/subscribe forms.

**Deliverables:**

- `Lead` model created
- Existing form APIs write to Lead collection (dual-write pattern)
- `/admin/contacts` list page with filters
- `/admin/contacts/[id]` detail page with notes
- Lead service with CRUD operations

### Tasks

#### 2.1 Create Lead model

**File:** `src/models/Lead.ts`

```typescript
{
  fullName: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: String,
  source: { type: String, enum: ['contact', 'enrollment', 'subscribe', 'campaign'], required: true, index: true },
  courseSlug: String,
  message: String,
  tags: [String],
  status: { type: String, enum: ['new', 'contacted', 'converted', 'archived'], default: 'new', index: true },
  notes: String,  // Admin-only internal notes
}, { timestamps: true }
```

**Indexes:** `email`, `source`, `status`, `createdAt`

#### 2.2 Create lead service

**File:** `src/services/leadService.ts`

Functions:

- `createLead(data)` — Insert new lead
- `getAllLeads(filters, pagination)` — List with filters (source, status, date range, search query)
- `getLeadById(id)` — Single lead
- `updateLead(id, data)` — Update status or notes
- `deleteLead(id)` — Soft delete (or hard delete, TBD)

#### 2.3 Wire existing form APIs to write Leads

**Files to modify:**

- `src/app/api/contact/route.ts`
- `src/app/api/enrollment/route.ts`
- `src/app/api/subscribe/route.ts`

**Pattern:** Dual-write (keep existing behavior + add `leadService.createLead()` call)

**Example for contact form:**

```typescript
// Existing email send logic
await sendContactEmail(data);

// NEW: Write to Lead
await leadService.createLead({
  fullName: data.name,
  email: data.email,
  phone: data.phone,
  source: 'contact',
  message: data.message,
  tags: ['contact-form'],
  status: 'new',
});
```

#### 2.4 Create admin API routes

**Files:**

- `src/app/api/admin/contacts/route.ts` — GET (list), POST (create)
- `src/app/api/admin/contacts/[id]/route.ts` — GET (detail), PATCH (update), DELETE

**Each route:**

- Calls `requireAdmin()` or checks session
- Validates with Zod schema
- Delegates to `leadService`
- Returns standardized JSON (`{ success, data }` or `{ success, error }`)

#### 2.5 Build contacts list page

**File:** `src/app/(admin)/admin/contacts/page.tsx`

**Features:**

- Server component
- TanStack Table via shadcn DataTable pattern
- Columns: Name, Email, Source, Status, Date, Actions
- Client-side sorting and filtering
- Filters: Source dropdown, Status dropdown, Date range picker, Text search
- Pagination (20 per page)
- "View Details" button per row

**Fetch:** Call `/api/admin/contacts` with query params

**Components to add:**

- `npx shadcn@latest add data-table` (if not already added)
- `npx shadcn@latest add select` (for dropdowns)

#### 2.6 Build contact detail page

**File:** `src/app/(admin)/admin/contacts/[id]/page.tsx`

**Features:**

- Server component fetches lead data
- Display all fields in a Card layout
- Status dropdown (update via Server Action or API call)
- Internal notes textarea (admin-only, update via Server Action)
- "Back to Contacts" button

**Acceptance criteria:**

- [ ] New form submissions create Lead records
- [ ] `/admin/contacts` shows all leads with working filters
- [ ] Status and source filters work correctly
- [ ] Clicking a row navigates to detail page
- [ ] Admin can update status and add notes
- [ ] Changes persist to database

---

## increment 3a: course quick-edit

**Goal:** Admin can manage course visibility, pricing, and featured status without code deploys.

**Deliverables:**

- Course model extended with admin fields
- `/admin/courses` list page
- `/admin/courses/[id]` quick-edit page (title, slug, basePrice, isActive, isFeatured, sortOrder)
- Admin API routes for courses

### Tasks

#### 3a.1 Extend Course model

**File:** `src/models/Course.ts`

Add fields:

```typescript
basePrice: { type: Number },
isActive: { type: Boolean, default: true, index: true },
isFeatured: { type: Boolean, default: false, index: true },
sortOrder: { type: Number, default: 0 },
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
```

**Migration:** Update existing courses with defaults (run script or manually)

#### 3a.2 Create admin course API routes

**Files:**

- `src/app/api/admin/courses/route.ts` — GET (list), POST (create)
- `src/app/api/admin/courses/[id]/route.ts` — GET, PATCH, DELETE

**Pattern:** Same auth + validation + service delegation as contacts

#### 3a.3 Build courses list page

**File:** `src/app/(admin)/admin/courses/page.tsx`

**Features:**

- TanStack Table with columns: Title, Slug, Price, Active, Featured, Sort
- Toggle switches for `isActive` and `isFeatured` (inline update via Server Action)
- "Edit" button per row → `/admin/courses/[id]`
- "New Course" button → `/admin/courses/new`
- Filters: Active/Inactive, Featured/Not Featured

#### 3a.4 Build quick-edit page

**File:** `src/app/(admin)/admin/courses/[id]/page.tsx`

Server component + client form component

**Form fields:**

- Title (text input)
- Slug (text input, unique validation)
- Base Price (number input)
- Is Active (checkbox)
- Is Featured (checkbox)
- Sort Order (number input)

**Submit:** Server Action calls `courseService.updateCourseById()`

**Note:** This does NOT edit hero/about/learning sections — that's Increment 3b.

**Acceptance criteria:**

- [ ] `/admin/courses` shows all courses
- [ ] Admin can toggle isActive and isFeatured inline
- [ ] Quick-edit page allows updating title, slug, price, flags
- [ ] Changes reflected immediately in list
- [ ] Public course pages respect `isActive` flag (show 404 if inactive)

---

## increment 3b: course full editor

**Goal:** Admin can edit all course content sections (hero, about, learning, CTA) without touching code.

**Deliverables:**

- `/admin/courses/[id]/edit` page with tabbed section editors
- Form components for each section
- Image upload or media library integration (or manual path entry)

### Tasks

#### 3b.1 Build full editor page with tabs

**File:** `src/app/(admin)/admin/courses/[id]/edit/page.tsx`

Use shadcn Tabs component:

```
Tab 1: Basic Info (quick-edit fields)
Tab 2: Hero Section (title, subtitle, image URLs)
Tab 3: About Section (heading, description, targets, cost, details, perks)
Tab 4: Learning Section (repeatable learning blocks)
Tab 5: CTA Section (heading, text, button label, link)
```

#### 3b.2 Build section form components

**Files:**

- `src/components/admin/courses/BasicInfoForm.tsx`
- `src/components/admin/courses/HeroSectionForm.tsx`
- `src/components/admin/courses/AboutSectionForm.tsx`
- `src/components/admin/courses/LearningSectionForm.tsx` (array fields with add/remove)
- `src/components/admin/courses/CTASectionForm.tsx`

**Pattern:**

- Each form uses React Hook Form + Zod
- Each form submits via Server Action to update its specific section
- Use `npx shadcn@latest add form` for form helpers

#### 3b.3 Handle learning blocks (repeatable fields)

**Component:** `LearningSectionForm`

- `useFieldArray` from React Hook Form
- Each block has: heading, items array, bgColour
- "Add Block" and "Remove Block" buttons
- Drag-to-reorder (optional, can defer)

**Acceptance criteria:**

- [ ] Admin can edit all course sections via tabs
- [ ] Learning blocks dynamically add/remove
- [ ] Changes save independently per tab (or all at once, TBD)
- [ ] Public course pages render from DB content
- [ ] Hero section images display correctly

---

## increment 4: promotions engine

**Goal:** Create time-bound promotions that automatically apply to courses.

**Deliverables:**

- `Promotion` model
- Promotion service with pricing resolution logic
- `/admin/promotions` list + create/edit pages
- Admin API routes for promotions
- Public course pages show promotional pricing

### Tasks

#### 4.1 Create Promotion model

**File:** `src/models/Promotion.ts`

See architecture.md section 3.4 for full schema.

#### 4.2 Create promotion service

**File:** `src/services/promotionService.ts`

Functions:

- `createPromotion(data)`
- `getAllPromotions(filters)` — active, upcoming, expired
- `getPromotionById(id)`
- `updatePromotion(id, data)`
- `deletePromotion(id)`
- **`calculatePrice(course, date = new Date())`** — Core logic:
  - Fetch active promotions for course (scope match + date range)
  - Apply highest priority promo
  - Return `{ originalPrice, finalPrice, appliedPromo }`

#### 4.3 Create admin promotion API routes

**Files:**

- `src/app/api/admin/promotions/route.ts`
- `src/app/api/admin/promotions/[id]/route.ts`

#### 4.4 Build promotions list page

**File:** `src/app/(admin)/admin/promotions/page.tsx`

**Columns:** Name, Type, Value, Scope, Active, Start Date, End Date, Actions

**Filters:** Active/Expired, Scope

#### 4.5 Build promotion create/edit form

**File:** `src/app/(admin)/admin/promotions/new/page.tsx` and `[id]/page.tsx`

**Form fields:**

- Name
- Type (dropdown: percentage, fixed)
- Value (number)
- Scope (dropdown: course, site-wide, tag)
- Course IDs (multi-select, only if scope = course)
- Campaign Tag (text, only if scope = tag)
- Start Date (date picker)
- End Date (date picker)
- Is Active (checkbox override)
- Priority (number)

**Validation:**

- End date > Start date
- Course IDs required if scope = course

#### 4.6 Integrate pricing in public course pages

**File:** `src/app/(public)/courses/[slug]/page.tsx`

Replace hardcoded price with:

```typescript
const pricing = await promotionService.calculatePrice(course);
```

Display:

- Original price (strikethrough if promo active)
- Final price (prominent)
- Promo badge (e.g., "50% OFF - Limited Time!")

**Acceptance criteria:**

- [ ] Admin can create/edit promotions
- [ ] Active promotions apply automatically to matching courses
- [ ] Public course pages show discounted pricing
- [ ] Expired promotions stop applying
- [ ] Priority resolution works for overlapping promos

---

## increment 5: public site integration & caching

**Goal:** All public course content driven by admin-managed data with proper caching.

**Deliverables:**

- Public course pages use ISR (Incremental Static Regeneration)
- Admin course updates trigger revalidation
- Course list on homepage fetches from DB

### Tasks

#### 5.1 Update public course pages with ISR

**File:** `src/app/(public)/courses/[slug]/page.tsx`

Add:

```typescript
export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  const courses = await Course.find({ isActive: true });
  return courses.map((c) => ({ slug: c.slug }));
}
```

#### 5.2 Add revalidation API route

**File:** `src/app/api/revalidate/route.ts`

Server Action or API route that:

- Accepts `path` param (e.g., `/courses/pro-makeup`)
- Calls `revalidatePath(path)`
- Protected with admin auth or secret token

#### 5.3 Trigger revalidation on course updates

**In:** `src/app/api/admin/courses/[id]/route.ts` (PATCH handler)

After successful update:

```typescript
await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate?path=/courses/${course.slug}`,
);
```

#### 5.4 Update homepage course list

**File:** `src/app/(public)/page.tsx`

Replace hardcoded course data with:

```typescript
const courses = await Course.find({ isActive: true, isFeatured: true })
  .sort({ sortOrder: 1 })
  .limit(6);
```

**Acceptance criteria:**

- [ ] Admin course updates appear on public site within 1 hour (or immediately with revalidation)
- [ ] Inactive courses return 404 on public site
- [ ] Featured courses appear on homepage
- [ ] Sort order respected

---

## increment 6: audit & safety

**Goal:** Track admin actions and provide rollback capabilities.

**Deliverables:**

- Audit log model
- Logging middleware for admin actions
- `/admin/logs` page (view-only)
- Soft delete for courses and promotions

### Tasks

#### 6.1 Create AuditLog model

**File:** `src/models/AuditLog.ts`

```typescript
{
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },  // e.g., 'course.update', 'promotion.delete'
  resourceType: { type: String, required: true },  // 'Course', 'Promotion', 'Lead'
  resourceId: { type: String, required: true },
  changes: mongoose.Schema.Types.Mixed,  // Before/after snapshot
  ipAddress: String,
  userAgent: String,
}, { timestamps: true }
```

#### 6.2 Add logging to admin API routes

**Pattern:** After successful mutation, call `auditLogService.log()`

**Example:**

```typescript
// In course update route
const updatedCourse = await courseService.updateCourseById(id, data);

await auditLogService.log({
  userId: session.user.id,
  action: 'course.update',
  resourceType: 'Course',
  resourceId: id,
  changes: { before: originalCourse, after: updatedCourse },
});
```

#### 6.3 Build audit log page

**File:** `src/app/(admin)/admin/logs/page.tsx`

**Features:**

- Read-only table of recent actions
- Filters: User, Action Type, Resource Type, Date Range
- Show before/after diffs (JSON viewer or custom component)

#### 6.4 Implement soft delete

**Modify models:** Add `deletedAt: Date` field to Course and Promotion

**Update queries:** Default filter `{ deletedAt: null }`

**Admin UI:** "Archive" instead of "Delete", with "Restore" option

**Acceptance criteria:**

- [ ] All admin mutations logged to audit table
- [ ] Admin can view action history
- [ ] Soft-deleted courses/promotions hidden from public but recoverable
- [ ] "Restore" button brings back archived content

---

## implementation sequence

**Recommended order:**

1. **Increment 1** (foundation) — ~1-2 days
2. **Increment 2** (contacts) — ~2-3 days
3. **Increment 3a** (course quick-edit) — ~2 days
4. **Increment 3b** (course full editor) — ~3-4 days
5. **Increment 4** (promotions) — ~3 days
6. **Increment 5** (public integration) — ~1 day
7. **Increment 6** (audit logs) — ~2 days

**Total:** ~2-3 weeks of focused development

**Key principle:** Each increment can be tested and deployed independently. If priorities shift, later increments can be deferred without breaking earlier work.

---

## next steps

1. Confirm this plan aligns with business priorities
2. Choose starting increment (recommend Increment 1)
3. Create feature branch for increment work
4. Implement tasks in sequence
5. Test in staging before merging
6. Deploy to production
7. Move to next increment

- Priority (for overlapping promotions).

  6.1.2 Pricing resolution

- [ ] Centralize price calculation function:
  - Input: course, date (default now).
  - Output: final price, original price, promotion metadata.
- [ ] Ensure front-end (course pages, listings, enrollment) use this function.

### 6.2 Admin UI for Promotions

**Tasks**
6.2.1 Promotion list

- [ ] `/admin/promotions` table:
  - Columns: Name, Type, Value, Scope, Active, Start, End.
  - Filters: active, upcoming, expired.

    6.2.2 Promotion create/edit

- [ ] `/admin/promotions/new` and `/admin/promotions/[id]`:
  - Form for all schema fields.
  - Course selector for course-scoped promotions.
  - Validation for date ranges and logical conflicts.

    6.2.3 Preview impact

- [ ] Show which courses/prices are affected before saving.
- [ ] Optional: "simulate date" to see future/expired behavior.

Deliverable: promotion engine plus UI, replacing hardcoded promotional logic.

---

## 7. Content Synchronization with Public Site

### 7.1 Public-Site Integration

**Tasks**
7.1.1 Replace hardcoded content

- [ ] Gradually refactor public pages to fetch from DB/services:
  - Courses landing section.
  - Individual course pages.
  - Pricing snippets (including enrollment form labels).

    7.1.2 Caching & performance

- [ ] Use ISR / caching strategies for read-heavy public pages.
- [ ] Revalidate on course/promotion changes (on-save hooks or revalidation API).

Deliverable: public site reads course & promo data from admin-managed sources.

---

## 8. Logging, Audit & Safety Nets

**Tasks**
8.1.1 Action logging

- [ ] Implement simple audit log model for key actions:
  - Course created/updated/deleted.
  - Promotion created/updated/deleted.
  - Contact status changes.

    8.1.2 Rollback strategy

- [ ] Consider soft deletes or history snapshots for critical data (courses, promotions).
- [ ] UI for restoring last version or undoing a change.

  8.1.3 Permissions refinement

- [ ] Introduce more granular roles later: `content-editor`, `sales`, `owner`.

Deliverable: basic safety features to avoid accidental content loss.

---

## 9. Implementation Roadmap & Slices

To keep work manageable and avoid deterioration, we’ll implement in slices:

**Phase 1: Foundations & Auth**

- [ ] 1.1.1, 1.1.2, 1.1.3
- [ ] 2.1.1, 2.1.2, 2.1.3
- [ ] 3.1.1 (skeleton only)

**Phase 2: Dashboard Shell & Contacts MVP**

- [ ] 3.1.1, 3.1.2, 3.1.3
- [ ] 4.1.1, 4.1.2
- [ ] 4.2.1 (basic table, no filters yet)

**Phase 3: Full Contacts & Reporting**

- [ ] 4.2.1 filters & pagination
- [ ] 4.2.2 detail view + notes
- [ ] 4.2.3 export & stats

**Phase 4: Course Management**

- [ ] 5.1.1, 5.1.2
- [ ] 5.2.1, 5.2.2 (forms)
- [ ] 5.2.3 (draft/publish, audit)

**Phase 5: Promotions & Discounts Engine**

- [ ] 6.1.1, 6.1.2
- [ ] 6.2.1, 6.2.2, 6.2.3

**Phase 6: Public Site Integration**

- [ ] 7.1.1, 7.1.2 (per course section / page)

**Phase 7: Logging & Safety**

- [ ] 8.1.1, 8.1.2, 8.1.3

Each bullet above is intentionally small enough to handle in a single context window. We can pick any task ID or phase next and implement it without losing the bigger picture.
