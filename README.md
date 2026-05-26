# Aexon AI Agency Website

Public website for Aexon AI Agency, focused on AI workflow automation, custom AI agents, operational systems, and business process infrastructure.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- Vercel deployment

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
- GitHub source repository: `Aexon-AI-Agency/SaaS-Website-Frontend`

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

Future website changes should be transferred to `Aexon-AI-Agency/SaaS-Website-Frontend` only after Beano confirms the transfer.
