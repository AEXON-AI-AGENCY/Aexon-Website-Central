# Aexon Website Central

Central source repository for the Aexon AI Agency website and related service code.

## Repository Structure

- `frontend/` - Next.js public website for Aexon AI Agency.
- `backend/` - Reserved for backend APIs, services, database code, workers, and server-side integrations.
- `docs/` - Workflow and handoff notes from the local website build.
- `AGENTS.md` and `CLAUDE.md` - AI-assistant project context for future contributors.

## Frontend

```bash
cd frontend
npm install
npm run dev -- --port 3000
```

Validation:

```bash
cd frontend
npm run lint
npm run build
```

## Backend

No backend service is included in this publish. Add future backend work under `backend/` so frontend and backend code stay separated.

## Deployment

The website is built with Next.js and deployed through Vercel.

- Production domain: https://aexonai.com
- Vercel project: `aexon-ai-agency-website`
- GitHub source repository: `AEXON-AI-AGENCY/Aexon-Website-Central`

When deploying from this repository, configure Vercel to use `frontend/` as the project root.

## Safety

Do not commit generated or private local state:

- `.env*`
- `.vercel/`
- `.next/`
- `node_modules/`
- logs
- secrets, tokens, or keys
