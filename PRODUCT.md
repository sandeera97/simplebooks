# Product

<!-- impeccable:product-schema 1 -->

<!-- Written by `/impeccable init` on 2026-11-26 without a live interview: the
     product facts below come from the project brief relayed by the site owner
     ("so you don't need to ask") and from this repository. Facts marked
     (brief) were stated there; facts marked (repo) were read from the code. -->

## Platform

web

## Users

- **Sri Lankan founders** about to register a company (brief). They arrive knowing they need a Private Limited company, a name, a bank account and the paperwork, and want one team to handle it end to end.
- **SMEs already trading** that need bookkeeping, payroll, audit, tax filing, company secretary or legal work done on time (brief).
- **Individual taxpayers** filing personal income tax, APIT or foreign-income returns (brief).

Many arrive from a paid ad or a search for a specific service or tax term (repo: ad attribution in `lib/attribution.ts`, 93 migrated blog posts answering tax and registration questions), and most are likely on a phone (inferred; no analytics were read).

## Product Purpose

Simplebooks is a Sri Lankan startup-services firm, established 2016, that registers companies and then keeps them compliant: tax filing (individual and business), bookkeeping, payroll, audit, legal and company secretary services (brief). Alongside the services it runs SaaS tools at dashboard.simplebooks.com (registration dashboard, accounting, invoicing, payroll) (brief, repo).

The website's job is to turn a visitor into a consultation request or a dashboard sign-up. Success is a submitted consultation form (synced to the sales CRM) or a sign-up at dashboard.simplebooks.com (repo).

## Positioning

One team of accountants, company secretaries and lawyers, plus its own software, so a business is never handed off halfway: registration, then the returns, renewals and resolutions that follow, held in one place (repo: homepage copy). Proof is scale and reputation: 10000+ businesses registered and 1400+ Google reviews (brief).

## Operating Context

- Registration takes 5–6 working weeks, subject to the Registrar of Companies' approval (brief). Name approval, Forms 01, 18 and 19, Articles of Association and bank documents are the factual steps (repo).
- Consultations are offered in Sinhala, English or Tamil (repo).
- Every consultation form posts to a CRM pipeline; a submitted form creates a real deal (brief). Forms must never be test-submitted against production.
- The site is being migrated from WordPress; some tools (OODOX, the VAT invoice generator, the free calculators under `/tools`) are owned by other teams (repo).

## Capabilities and Constraints

- Office: Colombo only (Millennium Tower, 345 Galle Rd, Colombo 3). No offices elsewhere may be implied (brief).
- Company types: no sole proprietorships are offered (brief).
- "Start now" / "Start registration" buttons go to https://dashboard.simplebooks.com; consultation buttons go to the on-page consultation form (brief).
- The lead pipeline (`lib/leads.ts`, `lib/pipedrive*.ts`, `lib/leadForms.ts` field names, `app/api/leads`) and tracking (`lib/tracking.ts`, `components/Tracking.tsx`) are fixed integrations; design work does not change them (brief).
- `public/tools/` and `external/free-tools/` belong to the tools team (brief).

## Brand Commitments

- Name written in lowercase as a wordmark ("simplebooks") in the logo; "Simplebooks" in running copy (repo).
- No em dashes in site copy (brief, client feedback).
- The client approved the 2026 redesign and asked for less colour, not more: brand palette only, no blue, green or violet card tints, no guilloche, seal or rosette motifs (brief, client feedback).

## Evidence on Hand

- Figures the client has approved: "10000+" businesses, "1400+ Google reviews", 4.9 average Google rating, established 2016 (brief, repo).
- Real customer reviews and customer photos from the live site (`app/srilanka/testimonials/content.ts`, `components/avatars.ts`, `public/images/avatars/`) (repo).
- Banking partners shown: Seylan Bank, Sampath Bank (repo).
- No team photography exists; do not stage or invent team photos, customers, testimonials or figures (repo: the homepage notes the missing team photo).

## Product Principles

1. **Facts are fixed.** Timelines, figures, prices and offices are claims the business stands behind; design never rounds, invents or extends them.
2. **Every page ends in a next step.** A visitor should always be one tap from the consultation form or the dashboard.
3. **Calm over loud.** The client asked for less colour; trust comes from clarity and proof, not decoration.
4. **The phone is a first-class screen.** Every page, menu and form has to work at 375px as well as on desktop (inferred from the audience; confirm with analytics).

## Accessibility & Inclusion

No formal standard was specified. Work to WCAG 2.2 AA as the working floor: the audience includes older business owners and taxpayers reading long forms on phones (inferred).
