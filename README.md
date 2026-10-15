# bilt-smart-insights-demo

A feature concept for the [Bilt Rewards](https://www.biltrewards.com) travel portal: **Smart Insights**, an inline advisor that shows members the best way to pay for a hotel stay.

## What it does
On a hotel page, toggle Smart Insights to get:
- **Payment slider** — split the stay between cash and points and see earnings update live
- **Transfer comparison** — portal redemption vs. transferring points to a hotel partner, with value per point
- **Rent tier progress** — how the booking moves you toward the next Bilt tier multiplier
- **Earnings summary** — total points earned and effective value

All logic lives in `src/lib/smartInsightsEngine.ts`; hotel and member data are mocked in `src/lib/`.

## Routes
| Route | Page |
|---|---|
| `/` | Landing |
| `/search` | Hotel search with filters + map |
| `/hotel/[slug]` | Hotel detail + Smart Insights |

## Stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

## Deploy
Vercel (Next.js preset). Pushes to `main` deploy to production.
