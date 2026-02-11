# Tune Transfer

A Next.js web app for transferring music playlists between streaming platforms (currently Spotify to YouTube Music).

## Tech Stack

- Next.js 15 with App Router, React 19, TypeScript 5
- Tailwind CSS 4 with shadcn/ui components (New York style)
- pnpm 10 as package manager
- Vitest + Testing Library for tests

## Commands

- `pnpm dev` — Start dev server on localhost:3000
- `pnpm build` — Production build
- `pnpm lint` — Run ESLint
- `pnpm test` — Run tests with Vitest

## Project Structure

- `src/app/` — Next.js pages and API routes (App Router)
- `src/components/ui/` — Base UI components (shadcn/ui)
- `src/components/features/` — Feature-specific components
- `src/services/` — Business logic and API integrations (Spotify, YouTube)
- `src/lib/` — Utility functions
- `src/config/` — Environment variable validation
- `tests/` — Unit and component tests

## Code Style

- Single quotes, no semicolons, 2-space indentation
- No trailing commas, 150 char line width
- Use `@/` path alias for imports (maps to `src/`)
- Prettier and ESLint are configured — follow existing patterns
- Avoid `any` — use strict types and explicit return types
- Follow existing codebase patterns and conventions

## Auth Architecture

- Spotify uses OAuth 2.0 with PKCE flow
- Tokens stored in httpOnly cookies (secure in production, SameSite=Lax)
- Middleware protects API routes requiring authentication

## Workflow Preferences

- Use plan mode for non-trivial changes before implementing
- Always ask before creating git commits
- Do not auto-run tests or lint — only run when explicitly asked
