# contacts & leads plan

## 1. goals & scope

- centralize all leads and contact submissions (contact form, enrollment, subscribe, campaigns).
- provide a simple crm-like interface in `/admin/contacts`.
- enable basic reporting and export for follow-ups.

## 2. data model

- based on the `lead` model described in `architecture.md`.
- clarify allowed `source` values and `status` transitions.

**tasks**

- [ ] define allowed `source` enum and map each api to one value.
- [ ] define `status` workflow (e.g. `new → in-progress → converted/archived`).

## 3. api & ingestion

**tasks**

- [ ] update `/api/contact` to create a `lead` record.
- [ ] update `/api/enrollment` to create a `lead` record.
- [ ] update `/api/subscribe` to create a `lead` record (where email present).
- [ ] add optional `campaignTag` support for special forms.

## 4. admin ui

**tasks**

- [ ] implement `/admin/contacts` list view with filters and pagination.
- [ ] implement `/admin/contacts/[id]` detail view.
- [ ] support editing `status`, `tags`, and `notes`.

## 5. reporting & export

**tasks**

- [ ] add csv export for the currently filtered list.
- [ ] add simple stats: leads per source, per course, per date range.

## 6. roadmap tie-in

- this plan elaborates on section 4 of `dashboard_plan.md`.
- work can be taken in slices: ingestion first, then admin ui, then reporting.
