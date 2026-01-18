# PRD: React Best Practices Fixes

## Introduction

Address security vulnerabilities, performance issues, and code quality problems identified in the portfolio codebase. These fixes ensure the application follows React/Next.js best practices and is production-ready.

## Goals

- Eliminate security vulnerabilities (XSS in contact form)
- Remove ineffective rate limiting implementation
- Fix performance issues with memoization and image optimization
- Improve TypeScript type safety
- Add error handling boundaries
- Fix React anti-patterns (index keys, missing dependencies)

## User Stories

### US-001: Fix XSS vulnerability in contact email
**Description:** As a developer, I need to sanitize user input in the contact API so that malicious HTML/JavaScript cannot be injected into emails.

**Acceptance Criteria:**
- [ ] User message content is escaped before being inserted into HTML email
- [ ] HTML entities (`<`, `>`, `&`, `"`, `'`) are properly escaped
- [ ] Line breaks still convert to `<br>` tags after escaping
- [ ] Typecheck passes

### US-002: Remove ineffective rate limiting
**Description:** As a developer, I need to remove the in-memory rate limiting that doesn't work in serverless environments.

**Acceptance Criteria:**
- [ ] Remove `rateLimitMap` and related rate limiting logic from contact API
- [ ] Remove rate limit check and 429 response handling
- [ ] API still validates input and sends emails correctly
- [ ] Typecheck passes

### US-003: Fix Hero component index keys
**Description:** As a developer, I need to replace array index keys with stable keys so character animations work correctly.

**Acceptance Criteria:**
- [ ] Replace `key={index}` with stable key like `key={\`${char}-${index}\`}` in name character split
- [ ] Animation still works correctly on page load
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-004: Fix AnimatedCounter uninitialized variable
**Description:** As a developer, I need to properly initialize the `startTime` variable to prevent potential NaN issues.

**Acceptance Criteria:**
- [ ] Initialize `startTime` to `0` instead of leaving undefined
- [ ] Counter animation still works correctly
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-005: Add useMemo to PortfolioGrid filtering
**Description:** As a developer, I need to memoize the filtered portfolios array to prevent unnecessary recalculations on re-renders.

**Acceptance Criteria:**
- [ ] Wrap `filteredPortfolios` calculation in `useMemo`
- [ ] Dependencies include `portfolios` and `activeCategory`
- [ ] Portfolio filtering still works correctly
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-006: Fix HuggingFaceChart useEffect dependency
**Description:** As a developer, I need to fix the useEffect dependency array to prevent potential infinite loops.

**Acceptance Criteria:**
- [ ] Remove `isAnimated` from the useEffect dependency array
- [ ] Animation still triggers once when chart comes into view
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-007: Add sizes attribute to PortfolioCard images
**Description:** As a developer, I need to add responsive `sizes` attribute to portfolio card images for better performance.

**Acceptance Criteria:**
- [ ] Add `sizes` attribute with responsive breakpoints (e.g., `(max-width: 768px) 100vw, 33vw`)
- [ ] Images still display correctly at all viewport sizes
- [ ] Typecheck passes

### US-008: Add sizes attribute to portfolio gallery images
**Description:** As a developer, I need to add `sizes` attribute to gallery images in portfolio detail pages.

**Acceptance Criteria:**
- [ ] Add appropriate `sizes` attribute to gallery images
- [ ] Images still display correctly in gallery view
- [ ] Typecheck passes

### US-009: Create app-level error boundary
**Description:** As a developer, I need to add an error boundary so component errors don't crash the entire page.

**Acceptance Criteria:**
- [ ] Create `app/error.tsx` with proper Next.js error boundary pattern
- [ ] Error UI shows user-friendly message with retry option
- [ ] Error is logged for debugging
- [ ] Typecheck passes

### US-010: Fix Sanity types for optional asset
**Description:** As a developer, I need to make the asset property properly nullable in Sanity types.

**Acceptance Criteria:**
- [ ] Change `asset:` to `asset?:` in mainImage and gallery image types
- [ ] Add optional chaining where asset is accessed
- [ ] Typecheck passes

### US-011: Add proper error typing in API catch blocks
**Description:** As a developer, I need to properly type error variables in catch blocks.

**Acceptance Criteria:**
- [ ] Change `catch (error)` to `catch (error: unknown)` in GitHub API route
- [ ] Change `catch (error)` to `catch (error: unknown)` in HuggingFace API route
- [ ] Change `catch (error)` to `catch (error: unknown)` in contact API route
- [ ] Typecheck passes

## Functional Requirements

- FR-1: Contact API must escape HTML entities in user message before inserting into email template
- FR-2: Contact API must not include any rate limiting logic
- FR-3: Hero component must use stable composite keys for character animations
- FR-4: AnimatedCounter must initialize startTime to 0
- FR-5: PortfolioGrid must memoize filtered portfolios array
- FR-6: HuggingFaceChart useEffect must not include isAnimated in dependencies
- FR-7: All Image components in grids/galleries must include responsive sizes attribute
- FR-8: App must include error.tsx for graceful error handling
- FR-9: Sanity types must properly mark optional nested properties
- FR-10: All API route catch blocks must use proper TypeScript error typing

## Non-Goals

- No new rate limiting implementation (external service integration)
- No additional accessibility improvements beyond identified issues
- No chart accessibility improvements (ARIA labels, data tables)
- No React.memo on animation wrapper components
- No refactoring of URL state management in PortfolioGrid

## Technical Considerations

- HTML escaping can use a simple escape function or library like `html-escaper`
- Error boundary follows Next.js 13+ app router pattern with `error.tsx`
- useMemo hook already imported in most components
- Sanity types are in `lib/sanity/types.ts`

## Success Metrics

- Zero security vulnerabilities in contact form
- No React key warnings in console
- Improved Lighthouse performance score from image optimization
- TypeScript strict mode passes without errors
- Graceful error handling instead of white screen on errors

## Open Questions

- None - scope is defined by the assessment findings
