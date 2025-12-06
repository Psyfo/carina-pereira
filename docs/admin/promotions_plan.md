# promotions & discounts plan

## 1. goals & scope

- replace hardcoded promotions with a flexible, time-bound promotion engine.
- enable admins to configure discounts without code changes.

## 2. data model

- detailed version of the `promotion` model from `architecture.md`.

**tasks**

- [ ] finalize promotion fields and their meanings (type, scope, value, dates).
- [ ] decide overlap resolution rules (which promotion wins).

## 3. pricing logic

**tasks**

- [ ] implement a central `getEffectivePrice(course, date?)` helper.
- [ ] ensure course listings, detail pages, and enrollment use it.

## 4. admin ui

**tasks**

- [ ] implement `/admin/promotions` list with filters for active/upcoming/expired.
- [ ] implement `/admin/promotions/new` and `/admin/promotions/[id]` forms.
- [ ] add a preview panel showing impacted courses/prices before saving.

## 5. public site behavior

**tasks**

- [ ] update public components to display original vs discounted price when applicable.
- [ ] ensure expired promotions no longer appear anywhere.

## 6. roadmap tie-in

- this plan elaborates on section 6 of `dashboard_plan.md`.
- it should be implemented after basic course management is stable.
