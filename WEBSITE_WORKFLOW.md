# Aexon AI Website Workflow

This folder is the organized working home for the Aexon AI Agency public website.

## Current Live Site

- Production domain: https://aexonai.com
- Vercel project: `aexon-ai-agency-website`
- GitHub repository for website source: `Aexon-AI-Agency/SaaS-Website-Frontend`
- Latest production deployment from this folder: `dpl_4uDzCMfD7YuKNq9LL5nXh7a3edK3`
- Production deployment URL: https://aexon-ai-agency-website-b6xnypcbg-brandontek97-4242s-projects.vercel.app

## Recent Workflow

1. Copied the existing website code from:
   `/Users/beano/aexon-ai-agency/Code/Website Front-end`
2. Moved the clean source into:
   `/Users/beano/REXCLAW/Aexon AI Website`
3. Excluded local/generated/private content:
   `.git/`, `.next/`, `.vercel/`, `node_modules/`, env files, logs, secrets, tokens, and keys.
4. Installed dependencies in this folder with `npm install`.
5. Updated the site typography and motion styling based on the Morningside AI reference:
   - Poppins font
   - lighter editorial heading weights
   - technical uppercase nav/CTA treatment
   - scroll-triggered reveal animation
   - fixed blurred nav on scroll
6. Verified locally with:
   - `npm run lint`
   - `npm run build`
   - browser review at `http://localhost:3000`
7. Linked this folder to the existing Vercel project and deployed to production.

## Useful Commands

```bash
npm run dev -- --port 3000
npm run lint
npm run build
npm exec --yes vercel -- pull --yes --environment=production
npm exec --yes vercel -- build --prod
npm exec --yes vercel -- deploy --prebuilt --prod --yes
```

## Notes

- Future Aexon AI website edits should happen from this folder.
- After any website update or change, ask Beano whether he wants the changes transferred to `Aexon-AI-Agency/SaaS-Website-Frontend`.
- When Beano approves transferring website changes, publish them to `Aexon-AI-Agency/SaaS-Website-Frontend` on a new `codex/` branch, not directly to `main`.
- Do not commit or publish `.env*`, `.vercel/`, `.next/`, `node_modules/`, logs, secrets, tokens, or keys.
- If the Vercel project link is missing, restore it by linking this folder to the existing `aexon-ai-agency-website` Vercel project instead of creating a new project.
