# Noir Talent Co. — site polish notes

Short summary of what I changed on the website and what's still on you to finish before launch.

## What I changed

### 1. Brand info centralised — `lib/constants.ts`
Every place that used to hard-code `https://www.instagram.com/jbls_media/` or `NoirTalentCo@proton.me` now imports from `lib/constants.ts`. Change the handle/email in one file and the entire site updates.

Files touched:
- `lib/constants.ts` — new
- `components/sections/Hero.tsx`
- `components/sections/FinalCTA.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `app/apply/page.tsx`
- `app/faq/page.tsx`

### 2. Results page rewritten — `app/results/page.tsx`
The previous version had six detailed testimonials attributed to creators with 4–14 months of tenure, plus claims like "Most creators see measurable income growth" and "The majority of our creators remain active partners for 6+ months". For a brand-new agency, that's a credibility problem and potentially a consumer-protection issue.

I replaced it with a "Founding Cohort" framing that is honest, positions selectivity as a feature, and leaves a clean path to add real case studies once you have them.

### 3. Homepage results section rewritten — `components/sections/ResultsSection.tsx`
Removed the three fake testimonials. Replaced with three "commitments" cards — what every new partnership includes from day one. These are claims you can actually keep.

### 4. Terms of Service — `app/terms/page.tsx`
Clause 9 (Governing Law) previously said "governed by applicable law", which is unenforceable. It now pulls from `BUSINESS_JURISDICTION` in constants — leave it blank and the clause states "the jurisdiction in which Noir Talent Co. is registered; specifics in each client agreement". Fill in `BUSINESS_JURISDICTION` once you've incorporated.

Clause 10 (Contact) now uses the real email.

### 5. Privacy Policy — `app/privacy/page.tsx`
Clause 9 (Contact) now uses the real email instead of pointing to "the Apply page or Instagram".

## What's still on you

Open `lib/constants.ts` when you're ready and update these three values:

1. **`INSTAGRAM_HANDLE`** — currently still `jbls_media`. Replace with the real Noir Talent Co. handle once the new business Instagram is live (see `docs/social-media-plan.docx`).
2. **`CONTACT_EMAIL`** — currently still `NoirTalentCo@proton.me`. Replace with the brand Gmail address. Proton Mail is what's actually blocking you from signing up to Instagram/TikTok — mainstream platforms silently reject codes sent to Proton domains. Set up a Gmail, then optionally forward Gmail → Proton if you want to read mail there.
3. **`BUSINESS_JURISDICTION`** — leave blank until you've incorporated. Once you have a registered entity, set this to e.g. `'England and Wales'`, `'State of Delaware, USA'`, or whichever jurisdiction applies. The Terms will auto-update.

### Other work still outstanding

- Incorporate the business (limited company / LLC) before onboarding your first creator. See `docs/business-plan.docx` §2 for why.
- Have the client contract reviewed by a lawyer familiar with creator / entertainment management contracts. Budget $200–$500 for the template, worth every penny.
- Replace the Formspree form ID if you migrate off that service (`APPLY_FORM_ID` constant).
- Once you have a real creator result, update the Results page with an anonymised case study — signed off by the creator in writing first.

## Deliverables you have now

All in this `docs/` folder:

- `business-plan.docx` — full business plan, 10 sections, pricing tiers, unit economics, 90-day launch plan.
- `brand-guide.docx` — positioning, voice, visual system, copy library, operating rules.
- `social-media-plan.docx` — Instagram + TikTok setup playbook, content pillars, two-week starter calendar, ban-avoidance rules.

## Verification

TypeScript compilation passed cleanly on all changes (`npx tsc --noEmit` from the project root) — no errors introduced.

---

## Round 2 — structural restructure (matching invincibleagency.com's skeleton)

Modelled the site structure on a mature competitor (invincibleagency.com), but adapted where they rely on data you don't have yet (press logos, stats counters, testimonials, dollar-figure case studies).

### Nav slimmed to 3 items
Top nav went from 5 items (About, Services, How It Works, Results, FAQ) to 2 items + Apply Now button: **About · Case Studies · Apply Now**. Services, How It Works, and FAQ pages still exist and are linked from the footer — just off the main nav.

### `/results` renamed to `/case-studies`
- New page at `app/case-studies/page.tsx` — methodology-as-case-study: shows the 90-day framework (Audit · Roadmap · Execute) plus the template every published case study will follow.
- Old `app/results/page.tsx` deleted.
- 301 redirect added in `next.config.ts` from `/results` → `/case-studies` so any inbound links still work.

### Homepage flow rebuilt
New section order (top to bottom):
1. Hero
2. Services grid (kept existing `WhatWeDo` component — already structurally equivalent to Invincible's 4-column services section)
3. About strip (`AboutPreview`)
4. Case studies preview (new `CaseStudiesPreview` component — 3-column grid linking to `/case-studies`)
5. FAQ accordion (`FAQPreview`)
6. Final CTA

### Sections deliberately not built yet
Three sections from Invincible's homepage were omitted because they can't be populated honestly right now. They can be added back once the data exists:
- **Press-logo carousel** — no press features or tool partnerships yet.
- **Stats counters** (Invincible uses "77+ Models · $1.3M Revenue · 25+ Team · 8+ Years") — your equivalent numbers don't exist yet. Per your decision, no adapted-stats section was added either.
- **Testimonials slider with model photos and "Top X%" rankings** — no creator roster yet.

### Orphaned components (still on disk, safe to delete later)
These aren't referenced anywhere after the homepage rebuild, but I left them in case you want to reuse them. If you don't, they can be deleted:
- `components/sections/TrustBar.tsx`
- `components/sections/WhyUs.tsx`
- `components/sections/HowItWorksSection.tsx` (note: `/how-it-works` page still exists and likely still imports this — verify before deleting)
- `components/sections/ResultsSection.tsx`

### Verification
`npx tsc --noEmit` runs clean on all files with no errors.
