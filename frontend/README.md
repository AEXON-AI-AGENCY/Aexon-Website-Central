# Aexon AI Agency Website

Public website for Aexon AI Agency, focused on AI workflow automation, custom AI agents, operational systems, and business process infrastructure.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- Vercel deployment

## Included Project Files

- `src/app/` - App Router pages, layout, SEO routes, and homepage components.
- `public/` - Aexon logo and website image assets.
- Root `README.md`, `docs/WEBSITE_WORKFLOW.md`, `docs/LOCAL_ONLY_CONTENTS.md`, `AGENTS.md`, and `CLAUDE.md` - project handoff, workflow, and AI-assistant context.
- No website-specific `skills/` folder was present in the local source at publish time.

## Local Development

```bash
npm install
npm run dev -- --port 3000
```

Open http://localhost:3000.

## Validation

```bash
npm run lint
npm run build
```

## Deployment

The live production site is deployed through Vercel.

- Production domain: https://aexonai.com
- Vercel project: `aexon-ai-agency-website`
- GitHub review/source repository: `AEXON-AI-AGENCY/Aexon-Website-Central`

Recommended production deployment flow:

```bash
npm exec --yes vercel -- pull --yes --environment=production
npm exec --yes vercel -- build --prod
npm exec --yes vercel -- deploy --prebuilt --prod --yes
```

## Repository Notes

Do not commit generated or private local state:

- `.env*`
- `.vercel/`
- `.next/`
- `node_modules/`
- logs
- secrets, tokens, or keys

MCP dependencies: none required for the website runtime.

Future website changes should be pushed to `AEXON-AI-AGENCY/Aexon-Website-Central` on a review branch unless Beano requests a different Aexon AI Agency repository.
