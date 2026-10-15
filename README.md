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

## QR Redirects

Printed QR codes point at `https://troxellendeavors.com/go/<slug>`, which
302-redirects to the destination in [`src/lib/qr-links.json`](src/lib/qr-links.json).
Change a destination there and deploy — no reprinting. Unknown slugs go to `/`.

Generate print-ready SVGs into `qr-codes/<slug>.svg` (only needed for new slugs):

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r scripts/requirements.txt
python3 scripts/generate-qr.py
```

## Brand Tokens

All colors live in `tailwind.config.ts` under `theme.extend.colors.brand`.
Update them there and they propagate everywhere.

## TODO — Before Launch

- [ ] Add `public/resume.pdf`
- [ ] Add OG image at `public/og-image.png`
- [ ] Add favicon at `public/favicon.ico`
- [ ] Update real LinkedIn/GitHub URLs in Nav and pages (search for `#`)
- [ ] Add BRC Advisors case study to `/work` after launch + permission
