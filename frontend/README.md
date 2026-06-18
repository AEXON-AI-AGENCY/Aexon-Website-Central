# Aexon AI Agency Frontend

Next.js public website for Aexon AI Agency.

## Local Development

```bash
npm install
npm run dev -- --port 3000
```

Open http://localhost:3000.

## Environment Variables

```bash
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendly-account/your-event
```

This public Calendly event URL powers the inquiry form scheduling popup. Add the same variable in the `aexon-website-central` Vercel project for Production and Preview deployments.

## Validation

```bash
npm run lint
npm run build
```

## Deployment

The frontend deploys through Vercel from the `AEXON-AI-AGENCY/Aexon-Website-Central` repository.

- Production domain: https://aexonai.com
- Vercel project: `aexon-website-central`
- Vercel root directory: `frontend/`
