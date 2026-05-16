# Summary: Test Creation Form & Flow

## Changes
- Created `src/app/actions/tests.ts` with `createTest` Server Action for Supabase insertion.
- Created `src/app/tests/new/page.tsx` with a premium Shadcn/UI form for registering tests.
- Implemented redirection to the test-specific dashboard (to be built in Phase 2).

## Verification Results
- [x] Form contains all required fields (Name, Var A, Var B, Duration).
- [x] Server Action uses Supabase client correctly.
- [x] UI follows Deep Purple theme with glassmorphism effects.
