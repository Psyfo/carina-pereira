# admin dashboard & cms plan

## 0. goals & scope

- make the site dynamic via an internal admin dashboard.
- allow non-developers to manage: courses, promotions, discounts, and contact leads.
- start fresh: ignore previous partial attempts; design a clean, incremental plan.
- keep work split into small, trackable chunks we can tackle in separate contexts.

core domains:

1. authentication & admin access
2. dashboard shell (layout, nav, permissions)
3. contacts management (from contact forms / enrollments / mailing list)
4. course management (crud, pricing, statuses, featured flags)
5. promotions & discounts (time-bound and course-specific)
6. audit & safety (logs, rollback options, approvals)

---

## 1. architecture & tech decisions

### 1.1 current stack overview (assumptions)

- next.js app router (already present under `src/app`).
- mongodb models under `src/models` and connection in `src/lib/db`.
- existing auth in `src/lib/auth` / `src/services/authService.ts`.

**tasks**

- **1.1.1 document data models used today**

  - [ ] map existing mongoose models: `course`, `user`, any `contact` / `enrollment` models.
  - [ ] note which pages/components depend on each model (e.g. course pages, contact forms).

- **1.1.2 decide admin area structure**

  - [ ] confirm `(backend)` app segment as admin shell: `src/app/(backend)/(admin)`.
  - [ ] define url scheme: `/admin`, `/admin/courses`, `/admin/promotions`, `/admin/contacts`.
  - [ ] decide on ui kit: reuse `src/components/ui/*` and tailwind.

- **1.1.3 api layering**
  - [ ] use next.js route handlers under `src/app/api/*` for admin json apis.
  - [ ] create domain services: `courseService`, `promotionService`, `contactService`.
  - [ ] standardize api responses (success, error, validation format).

_deliverable_: short architecture note (1–2 pages) in `docs/admin/architecture.md`.

---

## 2. admin auth & access control

### 2.1 authentication

- use existing nextauth / custom auth where possible.

**tasks**

- **2.1.1 admin user model & roles**

  - [ ] extend `user` model with `role` (e.g. `admin`, `editor`, `viewer`).
  - [ ] create seed script / service for at least one admin user.

- **2.1.2 admin-only routes**

  - [ ] create server-side guard for `(backend)/(admin)` layout.
  - [ ] redirect unauthorized users to `/login` with a clear message.

- **2.1.3 session & security**
  - [ ] ensure csrf and secure cookie settings are correct in production.
  - [ ] add persistent admin navbar showing logged-in user + logout.

_deliverable_: working `/admin` route that only admins can open.

---

## 3. admin dashboard shell

### 3.1 layout & navigation

**tasks**

- **3.1.1 global admin layout**

  - [ ] implement `src/app/(backend)/(admin)/layout.tsx` with sidebar + topbar.
  - [ ] add responsive design (collapsible sidebar on mobile).

- **3.1.2 navigation structure**

  - [ ] primary nav items:
    - dashboard (overview)
    - courses
    - promotions & discounts
    - contacts & leads
    - settings (later)

- **3.1.3 dashboard overview page**
  - [ ] `/admin` home shows key metrics:
    - count of active courses
    - count of active promotions
    - recent contact/enrollment submissions
    - quick links ("create course", "create promotion").

_deliverable_: basic but functional admin shell with nav and placeholder pages.

---

## 4. contacts & leads management

### 4.1 data model & storage

**tasks**

- **4.1.1 normalize contact data**

  - [ ] identify all sources of contacts/leads:
    - contact form api (`/api/contact`)
    - enrollment form api (`/api/enrollment`)
    - mailing list subscriptions (`/api/subscribe`)
    - special campaigns (e.g. womensday, promotions).
  - [ ] design a unified `lead` / `contact` schema:
    - name, email, phone
    - source (contact, enrollment, subscribe, campaign)
    - interested program / course
    - tags (e.g. womens-day, promo-2025)
    - status (new, in-progress, converted, archived).

- **4.1.2 implement `lead` model**
  - [ ] add `lead.ts` under `src/models`.
  - [ ] migrate existing apis to also write into `lead` where appropriate.

### 4.2 admin ui for contacts

**tasks**

- **4.2.1 contacts list page**

  - [ ] `/admin/contacts` list with table:
    - columns: name, email, phone, source, course, status, createdat.
    - filters: by source, status, date range.
    - pagination or infinite scroll.

- **4.2.2 contact detail view**

  - [ ] `/admin/contacts/[id]` with full details and notes.
  - [ ] allow updating status and adding internal comments.

- **4.2.3 export & basic reporting**
  - [ ] csv export of filtered contacts.
  - [ ] basic stats: leads per source, per course.

_deliverable_: complete contacts crm-lite inside `/admin/contacts`.

---

## 5. course management

### 5.1 data model & migration

**tasks**

- **5.1.1 review `course` model**

  - [ ] document existing fields (title, slug, description, price, duration, images, etc.).
  - [ ] add admin-friendly fields if missing:
    - `isActive`, `isFeatured`, `sortOrder`.
    - `basePrice` (separate from promotional pricing).

- **5.1.2 slugs and url stability**
  - [ ] ensure courses have stable `slug` used on public routes (e.g. `pro-makeup`).
  - [ ] add validation to prevent changing slug if currently in use (or handle redirects).

### 5.2 admin ui for courses

**tasks**

- **5.2.1 course list**

  - [ ] `/admin/courses` with table view:
    - columns: name, price, active, featured, last updated.
    - actions: edit, duplicate, archive.

- **5.2.2 course create/edit form**

  - [ ] `/admin/courses/new` and `/admin/courses/[id]`:
    - general info: title, slug, description, category.
    - pricing: base price, optional labels.
    - meta: duration, delivery mode (online/in-person), badges.
    - content fields that drive front-end sections (e.g. "why this course?", outcomes).
  - [ ] support image uploads or image path selection from `public/images`.

- **5.2.3 safe publishing**
  - [ ] preview mode or draft flag before showing on public site.
  - [ ] audit fields: createdby, updatedby, updatedat.

_deliverable_: end-to-end course crud powering public course pages.

---

## 6. promotions & discounts

### 6.1 promotion model & logic

**tasks**

- **6.1.1 promotion schema**

  - [ ] create `promotion.ts` model with fields:
    - name (e.g. "pro makeup 50% off winter 2026")
    - type: `percentage` or `fixed-amount`.
    - value: number.
    - target scope: `course`, `site-wide`, `campaign-tag`.
    - target reference: course ids / tags.
    - start date, end date.
    - isactive (derived or manual override).
    - priority (for overlapping promotions).

- **6.1.2 pricing resolution**
  - [ ] centralize price calculation function:
    - input: course, date (default now).
    - output: final price, original price, promotion metadata.
  - [ ] ensure front-end (course pages, listings, enrollment) use this function.

### 6.2 admin ui for promotions

**tasks**

- **6.2.1 promotion list**

  - [ ] `/admin/promotions` table:
    - columns: name, type, value, scope, active, start, end.
    - filters: active, upcoming, expired.

- **6.2.2 promotion create/edit**

  - [ ] `/admin/promotions/new` and `/admin/promotions/[id]`:
    - form for all schema fields.
    - course selector for course-scoped promotions.
    - validation for date ranges and logical conflicts.

- **6.2.3 preview impact**
  - [ ] show which courses/prices are affected before saving.
  - [ ] optional: "simulate date" to see future/expired behavior.

_deliverable_: promotion engine plus ui, replacing hardcoded promotional logic.

---

## 7. content synchronization with public site

### 7.1 public-site integration

**tasks**

- **7.1.1 replace hardcoded content**

  - [ ] gradually refactor public pages to fetch from db/services:
    - courses landing section.
    - individual course pages.
    - pricing snippets (including enrollment form labels).

- **7.1.2 caching & performance**
  - [ ] use isr / caching strategies for read-heavy public pages.
  - [ ] revalidate on course/promotion changes (on-save hooks or revalidation api).

_deliverable_: public site reads course & promo data from admin-managed sources.

---

## 8. logging, audit & safety nets

**tasks**

- **8.1.1 action logging**

  - [ ] implement simple audit log model for key actions:
    - course created/updated/deleted.
    - promotion created/updated/deleted.
    - contact status changes.

- **8.1.2 rollback strategy**

  - [ ] consider soft deletes or history snapshots for critical data (courses, promotions).
  - [ ] ui for restoring last version or undoing a change.

- **8.1.3 permissions refinement**
  - [ ] introduce more granular roles later: `content-editor`, `sales`, `owner`.

_deliverable_: basic safety features to avoid accidental content loss.

---

## 9. implementation roadmap & slices

to keep work manageable and avoid deterioration, we’ll implement in slices:

**phase 1: foundations & auth**

- [ ] 1.1.1, 1.1.2, 1.1.3
- [ ] 2.1.1, 2.1.2, 2.1.3
- [ ] 3.1.1 (skeleton only)

**phase 2: dashboard shell & contacts mvp**

- [ ] 3.1.1, 3.1.2, 3.1.3
- [ ] 4.1.1, 4.1.2
- [ ] 4.2.1 (basic table, no filters yet)

**phase 3: full contacts & reporting**

- [ ] 4.2.1 filters & pagination
- [ ] 4.2.2 detail view + notes
- [ ] 4.2.3 export & stats

**phase 4: course management**

- [ ] 5.1.1, 5.1.2
- [ ] 5.2.1, 5.2.2 (forms)
- [ ] 5.2.3 (draft/publish, audit)

**phase 5: promotions & discounts engine**

- [ ] 6.1.1, 6.1.2
- [ ] 6.2.1, 6.2.2, 6.2.3

**phase 6: public site integration**

- [ ] 7.1.1, 7.1.2 (per course section / page)

**phase 7: logging & safety**

- [ ] 8.1.1, 8.1.2, 8.1.3

each bullet above is intentionally small enough to handle in a single context window. we can pick any task id or phase next and implement it without losing the bigger picture.
