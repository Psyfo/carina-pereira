# admin architecture

high-level technical architecture for the admin dashboard and cms. this complements `dashboard_plan.md` and is meant to stay relatively stable while implementation evolves.

---

## 1. overview

- next.js app router with two main segments:
  - `src/app/(public)` – public-facing marketing site and course pages.
  - `src/app/(backend)` – authenticated admin experience.
- mongodb as the primary data store, accessed via a shared connection helper in `src/lib/db`.
- authentication handled via the existing auth setup (e.g. nextauth) with a `user` model in `src/models/user.ts` and helpers in `src/lib/auth` / `src/services/authService.ts`.

goals:

- keep admin routes server-protected (no client-only auth for `/admin`).
- use a consistent pattern for data access and error handling.
- separate domain logic (services) from transport (route handlers, components).

---

## 2. routing & layouts

### 2.1 app segments

- `(public)` segment contains:
  - landing page, course pages, contact forms, etc.
- `(backend)` segment contains:
  - `src/app/(backend)/(admin)/layout.tsx` – protected admin layout.
  - `src/app/(backend)/(admin)/page.tsx` – dashboard home.
  - nested routes such as:
    - `/admin/courses`
    - `/admin/courses/[id]`
    - `/admin/promotions`
    - `/admin/contacts`

### 2.2 layout patterns

- admin layout should:
  - be a server component that checks auth before rendering children.
  - include a sidebar for navigation and a topbar for user info / actions.
  - load minimal global data (e.g. current user) and leave heavy queries to child routes.

best practices:

- favor server components for admin pages where possible; use client components only for highly interactive pieces (tables with client-side sorting, modals, etc.).
- keep layout free of domain-specific logic; that belongs in services and child routes.

---

## 3. data & models

core models (in `src/models`):

### 3.1 user

- fields (conceptual):
  - `_id`
  - `name`
  - `email`
  - `role` – enum: `admin`, `editor`, `viewer` (extendable later).
  - auth-related fields (password hash, oauth ids, etc., depending on setup).

### 3.2 course

- fields:
  - `_id`
  - `title`
  - `slug` (unique, used in public urls)
  - `description`
  - `basePrice`
  - `duration`
  - `deliveryMode` (e.g. `online`, `in-person`, `hybrid`)
  - `isActive`
  - `isFeatured`
  - `sortOrder`
  - `images` (array of paths or media refs)
  - `createdAt`, `updatedAt`, `createdBy`, `updatedBy`
  - optional: `deletedAt` for soft deletes.

### 3.3 promotion

- fields:
  - `_id`
  - `name`
  - `type` – `percentage` | `fixed-amount`
  - `value`
  - `scope` – `course` | `site-wide` | `campaign-tag`
  - `courseIds` (for course-scoped promos)
  - `campaignTag` (for tag-scoped promos)
  - `startsAt`, `endsAt`
  - `isActive` (optional manual override; otherwise derived from dates)
  - `priority` (resolve overlaps)
  - `createdAt`, `updatedAt`

### 3.4 lead / contact

- fields:
  - `_id`
  - `fullName`
  - `email`
  - `phone`
  - `source` – `contact-form` | `enrollment` | `subscribe` | `campaign`
  - `courseId` or `courseSlug`
  - `tags` (array of strings)
  - `status` – `new` | `in-progress` | `converted` | `archived`
  - `notes` (admin-only comments)
  - `createdAt`, `updatedAt`

model best practices:

- prefer soft deletes (`deletedAt`) for critical content like courses and promotions.
- add indexes for common queries: `course.slug`, `promotion.endsAt`, `lead.source`, `lead.status`.
- keep pricing data normalized: `course.basePrice` + promotions; avoid duplicating discounted prices in multiple places.

---

## 4. api design

admin apis live in `src/app/api/*` and should follow consistent patterns.

### 4.1 route handlers

- structure routes by domain, for example:
  - `src/app/api/admin/courses/route.ts` – list/create.
  - `src/app/api/admin/courses/[id]/route.ts` – read/update/delete.
  - similar patterns for `promotions`, `contacts`.
- each handler should:
  - authenticate the request (read session, ensure correct `role`).
  - validate input using a schema library (e.g. zod) before touching the database.
  - delegate business logic to a service function.
  - return a normalized response.

### 4.2 response shape

- recommended format:
  - success: `{ success: true, data: {...} }`
  - error: `{ success: false, error: { code, message, fieldErrors? } }`
- this makes it easy for client-side code to handle errors in a consistent way.

### 4.3 pagination & filtering

- for list endpoints:
  - accept `page` and `pageSize` or cursor-based params.
  - accept filter params (e.g. `status`, `source`, `q`).
  - return `{ items, total, page, pageSize }` or cursor metadata.

---

## 5. security & auth

### 5.1 roles & permissions

- enforce that only `admin` (and later `editor` where appropriate) can access `/admin`.
- implement a reusable helper, e.g. `requireAdmin(session)` that:
  - throws or redirects if the user is not logged in or not an admin.

### 5.2 session handling

- rely on the existing auth/session mechanism (e.g. nextauth) for:
  - reading the session in server components and route handlers.
  - ensuring secure cookies (`secure`, `httpOnly`, `sameSite`) in production.

### 5.3 csrf & hardening

- for json apis, use same-site cookies and optionally a csrf token header.
- avoid exposing admin apis to cross-origin clients.
- log failed auth attempts and rate limit sensitive endpoints like login.

---

## 6. future extensions

- more granular permissions:
  - separate roles like `content-editor` (courses only), `sales` (contacts only), `owner` (everything).
- integrations:
  - email provider for contacting leads.
  - webhook or simple integration to a crm if needed later.
- tooling:
  - background jobs for sending follow-ups, expiring promotions, etc.

this document should evolve slowly as foundational decisions change; detailed, day-to-day tasks belong in `dashboard_plan.md` and the domain-specific plans (contacts, courses, promotions).
