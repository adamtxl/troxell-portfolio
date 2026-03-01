# troxellendeavors.com

Personal portfolio site for Adam Troxell — Full-Stack Engineer.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Routes

| Route          | Audience        | Goal                    |
|----------------|-----------------|-------------------------|
| `/`            | Everyone        | Traffic cop — route to the right page |
| `/hire`        | Employers       | Get interviews          |
| `/work`        | Freelance clients | Get discovery calls   |
| `/consulting`  | Future clients  | Stub — plant the seed   |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to `main` → Vercel auto-deploys. That's it.

## Brand Tokens

All colors live in `tailwind.config.ts` under `theme.extend.colors.brand`.
Update them there and they propagate everywhere.

## TODO — Before Launch

- [ ] Add `public/resume.pdf`
- [ ] Add OG image at `public/og-image.png`
- [ ] Add favicon at `public/favicon.ico`
- [ ] Update real LinkedIn/GitHub URLs in Nav and pages (search for `#`)
- [ ] Add BRC Advisors case study to `/work` after launch + permission
