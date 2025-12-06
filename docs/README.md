# Documentation Structure

> **Purpose**: This document explains the organization of project documentation and where to find specific information.

---

## Directory Structure

```
docs/
├── README.md                    # This file - documentation index
├── admin/                       # Admin dashboard & backend documentation
│   ├── architecture.md
│   ├── contacts_plan.md
│   ├── courses_plan.md
│   ├── dashboard-plan.md
│   ├── promotions_plan.md
│   └── README.md
├── branding/                    # Brand guidelines & design system
│   └── brand-guidelines.md
├── guides/                      # Development guides & rules
│   └── frontend-rules.md
├── promotions/                  # Marketing & promotional campaigns
│   └── pro-makeup-promotion.md
└── styles/                      # CSS architecture & styling docs
    ├── color-palette.md
    ├── color-system.md
    ├── migration-summary.md
    ├── quick-reference.md
    └── tailwind-v4-migration.md
```

---

## Quick Links by Topic

### 🎨 Branding & Design

- **Brand Guidelines**: `branding/brand-guidelines.md`
  - Brand colors, typography, tone of voice
  - Logo usage, photography style
  - Design principles

### 💅 Styles & CSS

- **Color System**: `styles/color-system.md`

  - Complete brand color palette (40 shades)
  - Usage examples and patterns
  - Accessibility guidelines

- **Color Palette Reference**: `styles/color-palette.md`

  - Visual reference with hex codes
  - Contrast matrix for accessibility
  - Color harmony combinations

- **Quick Reference**: `styles/quick-reference.md`

  - Cheat sheet for developers
  - Common patterns and utilities
  - File structure overview

- **Tailwind v4 Migration**: `styles/tailwind-v4-migration.md`

  - Migration guide from v3 to v4
  - Breaking changes and updates
  - Configuration differences

- **CSS Migration Summary**: `styles/migration-summary.md`
  - Modular architecture implementation
  - Before/after comparison
  - Validation and testing results

### 📚 Development Guides

- **Frontend Rules**: `guides/frontend-rules.md`
  - **⚠️ CRITICAL: Read this before coding!**
  - Complete frontend development guidelines
  - Brand consistency, styling, TypeScript
  - Component architecture, accessibility
  - Performance, forms, error handling

### 🎯 Promotions & Marketing

- **Pro Makeup Promotion**: `promotions/pro-makeup-promotion.md`
  - Current promotional campaigns
  - Marketing copy and messaging
  - Special offers and pricing

### ⚙️ Admin & Backend

- **Dashboard Plan**: `admin/dashboard-plan.md`

  - Admin dashboard implementation plan
  - Phased rollout strategy

- **Architecture**: `admin/architecture.md`

  - Backend architecture overview
  - Technology stack decisions

- **Contacts Plan**: `admin/contacts_plan.md`

  - Contact management features
  - Database schema

- **Courses Plan**: `admin/courses_plan.md`

  - Course management system
  - CRUD operations

- **Promotions Plan**: `admin/promotions_plan.md`

  - Promotions engine design
  - Discount system

- **Admin README**: `admin/README.md`
  - Admin section overview

---

## Documentation Standards

### Naming Conventions

**✅ Do**:

- Use lowercase with hyphens: `frontend-rules.md`
- Be descriptive: `color-system.md` not `colors.md`
- Group by category: `styles/`, `admin/`, `branding/`

**❌ Don't**:

- Use ALL CAPS: ~~`COLOR_SYSTEM.md`~~
- Use underscores: ~~`color_system.md`~~
- Mix styles: ~~`ColorSystem.md`~~

### File Organization

**By Responsibility**:

- **styles/**: CSS, Tailwind, color system, styling architecture
- **branding/**: Brand guidelines, design principles, visual identity
- **guides/**: Development rules, best practices, how-tos
- **admin/**: Backend, admin dashboard, server-side features
- **promotions/**: Marketing campaigns, special offers, promotional content

### Documentation Headers

Every doc should start with:

```markdown
# Document Title

> **Purpose**: Brief description of what this document covers

---
```

---

## For Developers

### Before Starting Any Work

**Required Reading** (in order):

1. `guides/frontend-rules.md` - Complete development guidelines
2. `branding/brand-guidelines.md` - Brand consistency requirements
3. `styles/color-system.md` - Color palette and usage

### For Styling Work

1. `styles/quick-reference.md` - Quick lookups
2. `styles/color-palette.md` - Visual color reference
3. `src/styles/README.md` - CSS architecture guide

### For Component Development

1. `guides/frontend-rules.md` - Component patterns
2. `branding/brand-guidelines.md` - Brand requirements
3. Existing components in `src/components/`

---

## For Designers

### Brand Identity

- `branding/brand-guidelines.md` - Complete brand guide
- `styles/color-palette.md` - All color variations

### Design System

- `styles/color-system.md` - Color usage patterns
- `guides/frontend-rules.md` - Component patterns (Styling Guidelines section)

---

## For Content Writers

### Brand Voice

- `branding/brand-guidelines.md` - Tone of voice, messaging

### Promotions

- `promotions/` folder - Current campaigns and offers

---

## Adding New Documentation

### Step 1: Determine Category

Choose the appropriate folder:

- Styling/CSS? → `styles/`
- Brand/design? → `branding/`
- Development guide? → `guides/`
- Admin/backend? → `admin/`
- Marketing? → `promotions/`

### Step 2: Name the File

Use lowercase with hyphens:

```
good: color-system.md
bad: COLOR_SYSTEM.md, Color_System.md, ColorSystem.md
```

### Step 3: Include Required Header

```markdown
# Document Title

> **Purpose**: What this document covers and who should read it

---

## Table of Contents (if long)

...
```

### Step 4: Update This README

Add your new doc to the appropriate section above.

---

## Migration Notes

### Recently Reorganized (December 2025)

Files were moved from flat structure to organized subdirectories:

| Old Location               | New Location                         |
| -------------------------- | ------------------------------------ |
| `COLOR_SYSTEM.md`          | `styles/color-system.md`             |
| `COLOR_PALETTE.md`         | `styles/color-palette.md`            |
| `CSS_QUICK_REF.md`         | `styles/quick-reference.md`          |
| `CSS_MIGRATION_SUMMARY.md` | `styles/migration-summary.md`        |
| `TAILWIND_V4_MIGRATION.md` | `styles/tailwind-v4-migration.md`    |
| `brand.md`                 | `branding/brand-guidelines.md`       |
| `rules.md`                 | `guides/frontend-rules.md`           |
| `PRO_MAKEUP_PROMOTION.md`  | `promotions/pro-makeup-promotion.md` |
| `ADMIN_DASHBOARD_PLAN.md`  | `admin/dashboard-plan.md`            |

**Action Required**: Update any bookmarks or references to old paths.

---

## Maintaining Documentation

### Keep It Current

- Update docs when making significant changes
- Mark outdated sections clearly
- Remove obsolete documentation

### Link Between Docs

- Reference related docs
- Use relative paths: `../styles/color-system.md`
- Keep links updated when moving files

### Review Regularly

- Check for accuracy quarterly
- Update examples with current code
- Ensure screenshots match current UI

---

## Quick Command Reference

```bash
# Find a doc by keyword
cd docs && grep -r "keyword" .

# List all markdown files
cd docs && find . -name "*.md"

# Check for broken links (if using a link checker)
markdown-link-check docs/**/*.md
```

---

**Remember**: Good documentation is the foundation of maintainable projects. Keep it organized, current, and accessible!

---

_Last updated: December 2025_
