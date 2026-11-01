# Pelumi Paul Portfolio

Personal portfolio for Pelumi Paul Kolawole, built with Next.js, TypeScript, and Tailwind CSS.

## Local Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Portfolio Content

Profile information, education, experience, skills, and verified project details are maintained in `lib/config.ts`. Site metadata is maintained in `lib/metadata.ts`.

Set `NEXT_PUBLIC_SITE_URL` to the final portfolio URL before deployment so canonical, Open Graph, sitemap, and robots URLs use the production origin. Vercel deployments fall back to their deployment URL; local development falls back to `http://localhost:3000`.

Project screenshot slots are intentionally neutral until genuine project images are provided. No personal portrait or private repository source is included.
