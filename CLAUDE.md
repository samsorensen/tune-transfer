# Tune Transfer

Spotify → YouTube Music playlist transfer app.

## Commands

- `pnpm dev` — Dev server on localhost:3000
- `pnpm test` — Run Vitest (prefer single test files)

## Code Style

- Single quotes, no semicolons, no trailing commas
- Use `@/` path alias for imports
- Avoid `any` — use strict types

## Auth

- Spotify OAuth with PKCE, tokens in httpOnly cookies
- Middleware protects authenticated API routes

## Workflow

- Use plan mode for non-trivial changes
- Ask before creating commits
- Don't auto-run tests or lint
