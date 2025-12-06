# course management plan

## 1. goals & scope

- manage all courses via `/admin/courses` instead of code edits.
- keep public course pages in sync with admin-managed data.

## 2. data model

- refine the `course` model described in `architecture.md`.

**tasks**

- [ ] confirm required fields for each course type (pro, express, online, etc.).
- [ ] decide which fields are user-editable vs system-managed.

## 3. admin ui

**tasks**

- [ ] implement `/admin/courses` list with search and filters.
- [ ] implement `/admin/courses/new` and `/admin/courses/[id]` form pages.
- [ ] support image selection/upload for course visuals.

## 4. publishing model

**tasks**

- [ ] introduce `draft` vs `published` state or `isActive` flag semantics.
- [ ] ensure public pages only show active/published courses.

## 5. public site integration

**tasks**

- [ ] refactor landing page and course detail pages to read from the database.
- [ ] introduce caching / isr where appropriate.

## 6. roadmap tie-in

- this plan elaborates on section 5 of `dashboard_plan.md`.
- work can be done after contacts or parallel to it.
