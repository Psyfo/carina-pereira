# Frontend Design & Development Rules

> **Purpose**: This document provides modular, focused rules for frontend development in the Carina Pereira International project. Each topic has its own dedicated guide for easy reference and maintenance.

---

## 📚 Rules Index

### Core Development Rules

1. **[Brand Consistency](./rules/brand-consistency.md)**

   - Brand colors, typography, and button styles
   - Quick reference for brand guidelines
   - Dos and don'ts for design consistency

2. **[Library Documentation (Context7 MCP)](./rules/library-documentation.md)** 🚨 **CRITICAL**

   - How to use Context7 MCP for up-to-date library documentation
   - Common libraries and their Context7 IDs
   - Zero tolerance for outdated implementations

3. **[TypeScript & Type Safety](./rules/typescript-type-safety.md)** 🚨 **CRITICAL**

   - Zero tolerance for `any` types
   - Type guards, interfaces, and utility types
   - Library types via Context7

4. **[Form Handling](./rules/form-handling.md)** 🚨 **CRITICAL**
   - Custom validation only (NO HTML5 validation)
   - Form state management patterns
   - Existing API routes

### UI & Styling

5. **[Styling Guidelines](./rules/styling-guidelines.md)**

   - Tailwind CSS v4 patterns
   - Navigation offset rules for sticky elements
   - Responsive design and spacing

6. **[Component Architecture](./rules/component-architecture.md)**
   - Component organization and structure
   - Server vs Client components
   - Composition patterns

### Quality & Performance

7. **[Accessibility](./rules/accessibility.md)**

   - ARIA labels and semantic HTML
   - Keyboard navigation
   - Screen reader support

8. **[Performance Guidelines](./rules/performance-guidelines.md)**
   - Next.js Image optimization
   - Code splitting and lazy loading
   - Caching strategies

---

## 🚀 Quick Start

**New to the project?** Start with these critical rules:

1. **[Brand Consistency](./rules/brand-consistency.md)** - Learn our brand colors, fonts, and button styles
2. **[Library Documentation](./rules/library-documentation.md)** - Always check Context7 MCP before using any library
3. **[TypeScript & Type Safety](./rules/typescript-type-safety.md)** - Zero tolerance for `any` types
4. **[Form Handling](./rules/form-handling.md)** - Custom validation only, no HTML5 defaults

---

## 🎯 Core Principles

**Always prioritize:**

1. **Brand consistency** - Check brand guidelines, use brand colors, fonts, and lowercase styling
2. **Context7 MCP first** - Verify library patterns and types before implementing
3. **Type safety** - Zero tolerance for `any`, strict TypeScript throughout
4. **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation, alt text
5. **Performance** - Next.js Image, code splitting, loading states, lazy loading
6. **User experience** - Error handling, validation feedback, responsive design

---

## 📖 How to Use These Rules

### For New Features

1. Read the relevant rule module(s) before starting
2. Check Context7 MCP for library documentation
3. Follow the patterns and examples in the rules
4. Test your implementation against the checklist
5. Review with the team if uncertain

### For Code Reviews

1. Reference specific rules when providing feedback
2. Link to the relevant rule module in PR comments
3. Use the checklists to ensure completeness
4. Verify Context7 was used for library implementations

### For Maintenance

1. Update individual rule modules, not this index
2. Keep examples current and relevant
3. Add new patterns as they emerge
4. Remove outdated patterns

---

## 🔗 Related Documentation

- [Brand Guidelines](../branding/brand-guidelines.md)
- [Color System](../../src/styles/README.md)
- [Tailwind v4 Migration](../../src/styles/tailwind-v4-migration.md)

---

## 💡 Remember

**Consistency is key.** When in doubt:

1. Check the relevant rule module
2. Look at existing components
3. Use Context7 MCP for library guidance
4. Ask the team

These rules exist to ensure a cohesive, maintainable, and on-brand codebase for Carina Pereira International.

---

_For detailed rules, please refer to the individual module files linked above._
