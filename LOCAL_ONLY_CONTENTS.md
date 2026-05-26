# Local-Only Contents

The original `Website Front-end` folder also contained local/generated folders that were intentionally not copied into this workspace:

- `.git/` - source repository history and remote metadata from the original local checkout.
- `.next/` - generated Next.js build and development output.
- `.vercel/` - local Vercel project-link metadata.
- `node_modules/` - installed package dependencies.

These folders are not part of the clean source transfer. Recreate dependencies with:

```bash
npm install
```

Recreate build output with:

```bash
npm run build
```

If this folder needs to be linked directly to Vercel later, run the normal Vercel link flow from this directory instead of copying `.vercel/` from another checkout.
