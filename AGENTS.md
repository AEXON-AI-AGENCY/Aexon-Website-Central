# Aexon AI Website Memory

This folder is the local working area for the **Aexon AI Agency** public website. Beano said the site is connected to Vercel and will be edited from here.

## Canonical Business Context

- Canonical organization and brand name: **Aexon AI Agency**.
- If Beano casually says Accent, Axon, or Axiom while talking about this agency, interpret it as **Aexon AI Agency** unless the target is genuinely ambiguous.
- Aexon AI Agency builds practical AI systems for businesses: custom agents, AI OS dashboards, workflow automation, tool integrations, lead qualification, client/admin systems, and operational routing.
- Website messaging should feel clear, credible, and business-ready. Emphasize deployed systems, automation, measurable outcomes, faster turnaround, workload reduction, and ROI lift.
- Nearby local context includes an Aexon marketing ad project that describes Aexon as designing, automating, and deploying custom AI systems for companies.

## Website Working Notes

- This directory may start empty or may later receive the website code. Inspect the actual app structure before making assumptions.
- The website is connected to Vercel. Prefer Vercel-compatible patterns and verify with the local build/dev scripts when available.
- This project uses a current Next.js version with breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before writing code that depends on framework APIs or conventions, and heed deprecation notices.
- Do not commit `.env`, `.env.local`, secrets, tokens, keys, logs, `node_modules`, or generated/private files.
- If environment variables are needed, document them in `.env.example` or the README without real values.
- For frontend changes, keep the first screen focused on the actual Aexon AI Agency offer, not a generic landing page.
- Use real product/service content and concrete agency positioning instead of vague AI buzzwords.
- Preserve any existing design system and framework conventions once website code is present.

## Agency Repository Roles

- **Agent-Factory**: approved customizable agents Beano asks to publish.
- **SaaS Website Frontend**: public business website code for Aexon AI Agency. Use this for website publishing when Beano asks.
- **AI OS**: SaaS structure, dashboards, orchestration, client/admin systems, and related platform work.
- More agency repositories may exist over time. Use the repository Beano names for each publishing request.

## Publishing Workflow

When Beano asks to collect a completed locally built agent and publish it to the GitHub organization **Aexon AI Agency**, treat it as business publishing work.

- Approved agent work destined for the organization should go into **Agent-Factory** unless Beano explicitly chooses a different Aexon AI Agency repository.
- Website edits should go to **SaaS Website Frontend** only when Beano asks to republish or push website work.
- Copy only the completed and approved local folder into the selected destination repository.
- Before copying or staging, exclude sensitive/generated content including `.env`, `.env.local`, `secrets/`, `token/`, `tokens/`, `keys/`, `.logs/`, `logs/`, `node_modules/`, and anything similarly private or unnecessary.
- Do not copy unrelated folders.
- Do not copy personal memory files unless they are inside the approved folder and are clearly business safe.
- Open or clone the specific destination repository, create a new branch, copy the sanitized folder, stage only intended files, commit, and push the branch to origin.
- Generate or update a `README.md` summarizing purpose, tools, MCP dependencies, setup requirements, and deployment notes if one does not already exist.
- Before pushing, show Beano a summary of files being added, removed, or changed.
- Do not modify `main` directly.
- Never force push.
- Never delete branches unless Beano explicitly instructs this.
- Never overwrite existing approved agents without confirmation.
- If the requested destination or source folder is ambiguous, ask for the exact repo and local folder before publishing.
