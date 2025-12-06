# admin dashboard & cms plan

## 0. Goals & Scope

- Make the site dynamic via an internal admin dashboard.
- Allow non-developers to manage: courses, promotions, discounts, and contact leads.
- Start fresh: ignore previous partial attempts; design a clean, incremental plan.
- Keep work split into small, trackable chunks we can tackle in separate contexts.

Core domains:

1. Authentication & admin access
2. Dashboard shell (layout, nav, permissions)
3. Contacts management (from contact forms / enrollments / mailing list)
4. Course management (CRUD, pricing, statuses, featured flags)
5. Promotions & discounts (time-bound and course-specific)
6. Audit & safety (logs, rollback options, approvals)

---

## 1. Architecture & Tech Decisions

### 1.1 Current Stack Overview (Assumptions)

- Next.js App Router (already present under `src/app`).
- MongoDB models under `src/models` and connection in `src/lib/db`.
- Existing auth in `src/lib/auth` / `src/services/authService.ts`.

**Tasks**
1.1.1 Document data models used today

- [ ] Map existing Mongoose models: `Course`, `User`, any `Contact`/`Enrollment` models.
- [ ] Note which pages/components depend on each model (e.g. course pages, contact forms).

  1.1.2 Decide admin area structure

- [ ] Confirm `(backend)` app segment as admin shell: `src/app/(backend)/(admin)`.
- [ ] Define URL scheme: `/admin`, `/admin/courses`, `/admin/promotions`, `/admin/contacts`.
- [ ] Decide on UI kit: reuse `src/components/ui/*` and Tailwind.

  1.1.3 API layering

- [ ] Use Next.js route handlers under `src/app/api/*` for admin JSON APIs.
- [ ] Create domain services: `courseService`, `promotionService`, `contactService`.
- [ ] Standardize API responses (success, error, validation format).

Deliverable: short architecture note (1–2 pages) in `docs/admin/architecture.md`.

---

## 2. Admin Auth & Access Control

### 2.1 Authentication

- Use existing NextAuth / custom auth where possible.

**Tasks**
2.1.1 Admin user model & roles

- [ ] Extend `User` model with `role` (e.g. `admin`, `editor`, `viewer`).
- [ ] Create server-side guard for `(backend)/(admin)` layout.

## 1. architecture & tech decisions

- [ ] Redirect unauthorized users to `/login` with message.
- [ ] Ensure CSRF and secure cookie settings are correct in production.

### 1.1.2 decide admin area structure

**Tasks**
3.1.1 Global admin layout
3.1.2 Navigation structure

### 1.1.3 api layering

- Contacts & Leads
- Settings (later)

- [ ] `/admin` home shows key metrics:

## 2. admin auth & access control

- Count of active promotions
- Quick links ("Create course", "Create promotion").

Deliverable: basic but functional admin shell with nav and placeholder pages.

## 3. admin dashboard shell

## 4. Contacts & Leads Management

### 4.1 Data Model & Storage

## 4. contacts & leads management

4.1.1 Normalize contact data

- [ ] Identify all sources of contacts/leads:
  - Contact form API (`/api/contact`)
  - Enrollment form API (`/api/enrollment`)
  - Mailing list subscriptions (`/api/subscribe`)

## 5. course management

- [ ] Design a unified `Lead` / `Contact` schema:
  - Name, email, phone
  - Source (contact, enrollment, subscribe, campaign)
  - Interested program / course
  - Tags (e.g. womens-day, promo-2025)

## 6. promotions & discounts

4.1.2 Implement `Lead` model

- [ ] Add `Lead.ts` under `src/models`.
- [ ] Migrate existing APIs to also write into `Lead` where appropriate.

## 7. content synchronization with public site

**Tasks**
4.2.1 Contacts list page

- [ ] `/admin/contacts` list with table:

## 8. logging, audit & safety nets

- Filters: by source, status, date range.
- Pagination or infinite scroll.

## 9. implementation roadmap & slices

- [ ] `/admin/contacts/[id]` with full details and notes.
- [ ] Allow updating status and adding internal comments.

  4.2.3 Export & basic reporting

- [ ] CSV export of filtered contacts.
- [ ] Basic stats: leads per source, per course.

Deliverable: complete contacts CRM-lite inside `/admin/contacts`.

---

## 5. Course Management

### 5.1 Data Model & Migration

**Tasks**
5.1.1 Review `Course` model

- [ ] Document existing fields (title, slug, description, price, duration, images, etc.).
- [ ] Add admin-friendly fields if missing:

  - `isActive`, `isFeatured`, `sortOrder`.
  - `basePrice` (separate from promotional pricing).

  5.1.2 Slugs and URL stability

- [ ] Ensure courses have stable `slug` used on public routes (e.g. `pro-makeup`).
- [ ] Add validation to prevent changing slug if currently in use (or handle redirects).

### 5.2 Admin UI for Courses

**Tasks**
5.2.1 Course list

- [ ] `/admin/courses` with table view:

  - Columns: Name, Price, Active, Featured, Last Updated.
  - Actions: Edit, Duplicate, Archive.

  5.2.2 Course create/edit form

- [ ] `/admin/courses/new` and `/admin/courses/[id]`:
  - General info: title, slug, description, category.
  - Pricing: base price, optional labels.
  - Meta: duration, delivery mode (online/in-person), badges.
  - Content fields that drive front-end sections (e.g. "Why this course?", outcomes).
- [ ] Support image uploads or image path selection from `public/images`.

  5.2.3 Safe publishing

- [ ] Preview mode or draft flag before showing on public site.
- [ ] Audit fields: createdBy, updatedBy, updatedAt.

Deliverable: end-to-end course CRUD powering public course pages.

---

## 6. Promotions & Discounts

### 6.1 Promotion Model & Logic

**Tasks**
6.1.1 Promotion schema

- [ ] Create `Promotion.ts` model with fields:

  - Name (e.g. "Pro Makeup 50% Off Winter 2026")
  - Type: `percentage` or `fixed-amount`.
  - Value: number.
  - Target scope: `course`, `site-wide`, `campaign-tag`.
  - Target reference: course IDs / tags.
  - Start date, end date.
  - IsActive (derived or manual override).
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
