# NAYRA FE V0.1 — Component Architecture

This package is intended to be copied into the existing `apps/web` Vite + React + TypeScript application.

## Architecture

- `components/` reusable UI
- `pages/` page composition
- `data/` temporary V0.1 content
- `services/` API boundary
- `hooks/` reusable frontend logic
- `types/` shared frontend types

No Redux is required for V0.1.

## Install

Copy `src/` into your existing:

`~/Desktop/nayra/apps/web/src`

Then run:

```bash
cd ~/Desktop/nayra/apps/web
pnpm dev
```

API base URL can later be configured with:

`VITE_API_BASE_URL=http://localhost:4000`

The API service layer is intentionally present but the Ask NAYRA UI is still mocked in V0.1. We connect it to the existing Session, Conversation and Message APIs next.
