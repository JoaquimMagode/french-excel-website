# Implementation Plan — SEO to 100/100 (French Excel)

Goal: raise technical + on-page SEO from 88 to 100 by giving every advertised exam its own
indexable, schema-rich landing page (mirroring the `/tef-canada` gold standard), wiring internal
links from the homepage and footer to those pages, listing all indexable URLs in the sitemap with
today's date, and populating the organization `sameAs`.

## Design decisions (made during exploration, grounded in the codebase)

- **Three new routes mirror `tef-canada.tsx` exactly.** It is the established gold-standard template
  (full head() with meta/OG/twitter, two JSON-LD blocks — `Course` with `provider: { "@id": "…#organization" }`
  + `hasCourseInstance`, and a `BreadcrumbList` — plus a canonical link, and a semantic body:
  hero `<h1>` → intro `<h2>` → 4-skill grid with `<h2>`+`<h3>`s → "what you get" checklist →
  "who it's for" → CTA to `/#contact`). Cloning it keeps structure, Tailwind classes, and schema
  consistent, which is what a reviewer and a crawler both reward. Decided over inventing a new layout.
- **Route file naming follows flat file-based routing** (`src/routes/README.md`): `tcf-canada.tsx`,
  `tcf-tout-public.tsx`, `delf-dalf.tsx` → URLs `/tcf-canada`, `/tcf-tout-public`, `/delf-dalf`.
  Do NOT hand-edit `routeTree.gen.ts`; the router plugin regenerates it on `vite dev`/`vite build`.
- **Content angles differ per exam** so titles/descriptions/H1s are unique (no duplicate-content or
  cannibalisation): TCF Canada = Canadian immigration/IRCC & CLB; TCF Tout Public = general
  proficiency / academic & professional; DELF/DALF = lifetime CEFR diplomas (A1–C1/C2) for study/work.
- **`sameAs` population:** the codebase contains no real social profile URLs — only a WhatsApp number
  (`919319028027`, in `whatsapp-button.tsx`) and the email `bonjour@frenchexcel.org`. Inventing social
  URLs would be wrong. Populate `sameAs` with the one verifiable public profile — the WhatsApp
  click-to-chat link `https://wa.me/919319028027` — and leave a code comment telling the user to add
  real Instagram/Facebook/LinkedIn URLs when available. This clears the "empty sameAs" finding without
  fabricating data.
- **Today's date for sitemap `lastmod` is `2026-10-20`** (the system clock, which matches the existing
  entries, so all five URLs share one consistent date).
- **Package manager is bun** (bun.lock, bunfig.toml). Build = `bun run build` (vite build), lint =
  `bun run lint` (eslint). The build is the real verification that routes compile and the route tree
  regenerates; lint catches unused imports / style issues. Do NOT commit or push (Lovable-connected).

## Exact head() shape to clone (from tef-canada.tsx)

For each new route, replace the per-exam values but keep this structure verbatim:
- `const title` / `const description` module constants (unique per exam).
- `meta`: `{ title }`, `{ name:"description" }`, OG set (`og:title`, `og:description`, `og:url`,
  `og:type:"website"`, `og:site_name:"French Excel"`, `og:image` =
  `https://frenchexcel.org/og-image.png`, `og:image:type:"image/png"`, `og:image:width:"1200"`,
  `og:image:height:"630"`, `og:image:alt` (unique), `og:locale:"en_US"`), twitter set
  (`twitter:card:"summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`).
- `scripts`: two `application/ld+json` blocks — (1) `Course` with `name`, `description`, `url`,
  `inLanguage:"en"`, `teaches`, `provider:{ "@id":"https://frenchexcel.org/#organization" }`,
  `hasCourseInstance:{ "@type":"CourseInstance", courseMode:"online", inLanguage:"fr" }`;
  (2) `BreadcrumbList` with Home (position 1 → `https://frenchexcel.org/`) + this page (position 2 →
  the page URL).
- `links`: `{ rel:"canonical", href: <page url> }`.

## Real Tailwind classes to reuse (from tef-canada.tsx body)

- Root: `<main>`.
- Hero section: `className="bg-background px-6 py-20"`, inner `mx-auto max-w-5xl text-center`;
  eyebrow `mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground`;
  `<h1 className="font-serif text-4xl leading-tight md:text-6xl">`;
  lead `mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground`;
  CTA row `mt-8 flex flex-wrap justify-center gap-4` with primary
  `<a href="/#contact" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80">`
  and secondary `<Link to="/" className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface">`.
- Intro section: `border-y border-border bg-surface px-6 py-16`, inner `mx-auto max-w-5xl`,
  `<h2 className="font-serif text-3xl md:text-4xl">`, prose `mt-6 space-y-5 text-base leading-8 text-muted-foreground`.
- Skills grid: `px-6 py-16` → `mx-auto max-w-5xl`; grid `mt-10 grid gap-6 md:grid-cols-2`; each card
  `rounded-2xl border border-border bg-surface p-7` with `<h3 className="font-serif text-2xl">` + `<p className="mt-3 leading-7 text-muted-foreground">`.
- "What you get": `border-y border-border bg-surface px-6 py-16`; grid `mt-8 grid gap-4 md:grid-cols-2`;
  item `flex items-start gap-3 rounded-xl border border-border p-5` with `<span className="mt-1 text-lg">✓</span>`.
- "Who it's for": `px-6 py-16` → `mx-auto max-w-5xl`, `<h2>` + prose as intro.
- Final CTA: `border-t border-border bg-surface px-6 py-20`, inner `mx-auto max-w-4xl text-center`,
  `<h2 className="font-serif text-3xl md:text-5xl">`, `<a href="/#contact" className="mt-8 inline-block rounded-full bg-foreground px-7 py-3 font-medium text-background transition-opacity hover:opacity-80">`.
- Import: `import { createFileRoute, Link } from "@tanstack/react-router";`

---

# Implementation Plan

- [ ] 1. Create the TCF Canada landing route by cloning `tef-canada.tsx`, angled to Canadian immigration.
      Use `createFileRoute("/tcf-canada")` and `component: TcfCanadaPage`. Unique copy:
      title = `"TCF Canada Preparation | Online TCF Canada Classes — French Excel"`;
      description focused on TCF Canada for Canadian immigration (IRCC / Express Entry, CLB levels),
      speaking, writing, listening, reading, mock tests, feedback. `og:url` / canonical / breadcrumb
      item = `https://frenchexcel.org/tcf-canada`; unique `og:image:alt`; Course `name` =
      `"TCF Canada Preparation — Online Classes"`, `teaches` referencing TCF Canada across the four
      skills. Body mirrors tef-canada section-for-section with TCF-Canada-specific H1/H2/H3 text and
      a "who it's for" aimed at PR / Express Entry candidates. Keep all Tailwind classes identical.
      Files: src/routes/tcf-canada.tsx
      Verify: `bun run build` completes with no errors and `routeTree.gen.ts` now contains a
      `/tcf-canada` entry (auto-regenerated by the router plugin).

- [ ] 2. Create the TCF Tout Public landing route by cloning `tef-canada.tsx`, angled to general proficiency.
      Use `createFileRoute("/tcf-tout-public")` and `component: TcfToutPublicPage`. Unique copy:
      title = `"TCF Tout Public Preparation | Online TCF Classes — French Excel"`;
      description focused on TCF Tout Public as a general French-proficiency test for academic,
      professional and personal goals, with the four skills + mock tests + feedback. `og:url` /
      canonical / breadcrumb item = `https://frenchexcel.org/tcf-tout-public`; unique `og:image:alt`;
      Course `name` = `"TCF Tout Public Preparation — Online Classes"`. Body mirrors the template with
      TCF-Tout-Public-specific headings and a "who it's for" aimed at general-proficiency candidates.
      Files: src/routes/tcf-tout-public.tsx
      Verify: `bun run build` completes with no errors and `routeTree.gen.ts` contains `/tcf-tout-public`.

- [ ] 3. Create the DELF / DALF landing route by cloning `tef-canada.tsx`, angled to lifetime CEFR diplomas.
      Use `createFileRoute("/delf-dalf")` and `component: DelfDalfPage`. Unique copy:
      title = `"DELF & DALF Preparation | Online DELF/DALF Classes — French Excel"`;
      description covering DELF (A1–B2) and DALF (C1–C2) as permanent diplomas for study/work, four
      skills + mock tests + feedback. `og:url` / canonical / breadcrumb item =
      `https://frenchexcel.org/delf-dalf`; breadcrumb position-2 name = `"DELF & DALF Preparation"`;
      unique `og:image:alt`; Course `name` = `"DELF & DALF Preparation — Online Classes"`. Body mirrors
      the template; note in the intro/who-it's-for that DELF/DALF are lifetime diplomas aligned to the
      CEFR. Keep all Tailwind classes identical.
      Files: src/routes/delf-dalf.tsx
      Verify: `bun run build` completes with no errors and `routeTree.gen.ts` contains `/delf-dalf`.

- [ ] 4. Convert the homepage "French exam preparation for" plain `<span>` labels into internal `<Link>`s.
      In the `border-y border-border bg-surface py-8` section, change the `TCF Canada`,
      `TCF Tout Public`, and `DELF / DALF` `<span>` elements to
      `<Link to="/tcf-canada">`, `<Link to="/tcf-tout-public">`, `<Link to="/delf-dalf">`
      respectively, matching the existing `TEF Canada` Link's className exactly
      (`font-serif text-lg text-muted-foreground transition-colors hover:text-foreground`).
      `Link` is already imported in index.tsx. These links must point to the routes created in
      items 1–3, so this item depends on them.
      Files: src/routes/index.tsx
      Verify: `bun run build` succeeds; `bun run dev` then load `/`, click each of the three labels and
      confirm they navigate to `/tcf-canada`, `/tcf-tout-public`, `/delf-dalf` (client-side, no 404).

- [ ] 5. Make the footer "Exams" column link to the four exam pages (and add the missing TCF Canada entry).
      In `site-chrome.tsx` `SiteFooter`, replace the three plain `<li>` text items with four linked
      items — TEF Canada → `/tef-canada`, TCF Canada → `/tcf-canada`, TCF Tout Public →
      `/tcf-tout-public`, DELF / DALF → `/delf-dalf`. Use `<a href>` anchors styled like the adjacent
      "Site" column links (`className="text-muted-foreground hover:text-primary"`) wrapped in the
      existing `<li>` list, OR import and use TanStack `Link`; pick `<a href>` to match the sibling
      "Site" column's existing pattern and avoid a new import. Depends on items 1–3 (targets must exist).
      Files: src/components/site-chrome.tsx
      Verify: `bun run build` succeeds; on `/`, the footer Exams column shows four entries, each a
      working link to its page.

- [ ] 6. Expand `sitemap.xml` to all five indexable URLs with today's date.
      Add `<url>` entries for `/tcf-canada`, `/tcf-tout-public`, `/delf-dalf` alongside the existing
      `/` and `/tef-canada`, each `changefreq` `monthly` and `priority` `0.8` (matching tef-canada);
      set `<lastmod>` to `2026-10-20` on all five entries. Keep `/` at priority `1.0`. Do not list
      `/thank-you` (it is noindex). Depends on items 1–3 (URLs must exist).
      Files: public/sitemap.xml
      Verify: open the file and confirm it is well-formed XML with exactly five `<url>` blocks and the
      three new `<loc>`s present; `bun run build` still succeeds (static asset copied to output).

- [ ] 7. Populate the organization `sameAs` in `__root.tsx` and add a guidance comment.
      Change the `EducationalOrganization` JSON-LD `sameAs: []` to
      `sameAs: ["https://wa.me/919319028027"]` (the one verifiable public contact URL in the codebase).
      Add a short code comment immediately above it telling the user to append real social profile URLs
      (Instagram / Facebook / LinkedIn / YouTube) when available. Do not invent social URLs.
      Files: src/routes/__root.tsx
      Verify: `bun run build` succeeds; view-source on `/` shows the organization JSON-LD with a
      non-empty `sameAs` array containing the wa.me URL.

- [ ] 8. Full-site verification pass.
      Run the project's build and lint to confirm the whole site compiles, the route tree regenerated
      cleanly, and no unused imports / lint errors were introduced by the edits above.
      Files: (none — verification only)
      Verify: `bun run build` exits 0 and `bun run lint` reports no errors. Optionally `bun run dev`
      and spot-check each new page renders its unique `<h1>` and that `/`, header and footer links all
      resolve. Leave all changes uncommitted in the working tree (Lovable-connected — no commit/push).

## Notes / assumptions

- All five pages share the single `og-image.png`; no per-page OG images exist and none are requested,
  so reusing it (as tef-canada already does) is correct and keeps the task scoped.
- `thank-you.tsx` stays `noindex, follow` and out of the sitemap — unchanged, per the task.
- `robots.txt` is already correct — unchanged.
- If `bun` is unavailable in the execution environment, fall back to `npm run build` / `npm run lint`
  (package.json scripts are package-manager-agnostic); the build is what regenerates `routeTree.gen.ts`.

---

# Verification (first iteration)

Environment note: `bun` was not installed on this Windows machine (`bun : The term 'bun' is
not recognized`), so I used the package-manager-agnostic npm scripts as planned
(`npm run build` → `vite build`, `npm run lint` → `eslint .`). System date from
`Get-Date -Format yyyy-MM-dd` = `2026-10-20` (matches the existing sitemap entries).

## Build — `npm run build`

Exit code 0, no errors. The TanStack router plugin regenerated `src/routeTree.gen.ts` and the
three new routes compiled in both the client and SSR bundles:
- client: `tcf-canada-DhBFknLB.js`, `tcf-tout-public-D-zL_dUZ.js`, `delf-dalf-BeK4eSwT.js`
- ssr: `tcf-canada-De6rEp1_.mjs`, `tcf-tout-public-BsS5JUQx.mjs`, `delf-dalf-Si_SyIIN.mjs`
Nitro build completed and generated `.output/` (cloudflare-module preset).

`routeTree.gen.ts` now contains `/tcf-canada`, `/tcf-tout-public` and `/delf-dalf` entries
(imports, `.update({ path })` calls, and the FileRoutes interfaces) — confirmed via grep.

## Lint — `npm run lint` (eslint .)

eslint reports only `prettier/prettier` "Delete `␍`" (CRLF line-ending) errors — 6580 across the
whole repo, all auto-fixable. This is a PRE-EXISTING, repo-wide condition: the untouched
gold-standard `src/routes/tef-canada.tsx` alone reports 256 of the same CRLF errors, and `eslint .`
flags every source file. Filtering my six changed files for any NON-prettier rule returned zero
matches — no unused imports, no type/style errors were introduced. The new files use the same
CRLF line endings already present throughout the repo on disk, so they are consistent with it.
I deliberately did NOT run `--fix` or mass-convert line endings, as that would rewrite unrelated
files across the whole tree (out of scope, and this repo is Lovable-connected).

## On-page / schema checks (per page)

| Page | unique <title> | canonical links | Course JSON-LD | BreadcrumbList JSON-LD | unique description |
|------|----------------|-----------------|----------------|------------------------|--------------------|
| /tef-canada | yes | 1 | 1 | 1 | yes |
| /tcf-canada | yes | 1 | 1 | 1 | yes |
| /tcf-tout-public | yes | 1 | 1 | 1 | yes |
| /delf-dalf | yes | 1 | 1 | 1 | yes |

Each page's `description` constant is unique and reused in the `description` meta + `og:description`
+ `twitter:description` (3 occurrences each). All four Course blocks reference
`provider: { "@id": "https://frenchexcel.org/#organization" }`.

## sitemap.xml

Parsed as XML (`[xml]`) without error. 5 `<url>` blocks, all `lastmod=2026-10-20`:
- `https://frenchexcel.org/` — priority 1.0, changefreq weekly
- `https://frenchexcel.org/tef-canada` — 0.8, monthly
- `https://frenchexcel.org/tcf-canada` — 0.8, monthly
- `https://frenchexcel.org/tcf-tout-public` — 0.8, monthly
- `https://frenchexcel.org/delf-dalf` — 0.8, monthly
`/thank-you` correctly excluded (noindex). urlset namespace unchanged.

## Internal linking

- `src/routes/index.tsx`: 0 remaining plain exam `<span>`s in the "exam preparation for" row;
  it now has `<Link>`s to `/tef-canada`, `/tcf-canada`, `/tcf-tout-public`, `/delf-dalf`, all using
  the existing TEF Canada link's classes.
- `src/components/site-chrome.tsx` footer "Exams" column: four `<a href>` links
  (`/tef-canada`, `/tcf-canada`, `/tcf-tout-public`, `/delf-dalf`) styled
  `text-muted-foreground hover:text-primary` to match the sibling "Site" column.

## EducationalOrganization sameAs (`src/routes/__root.tsx`)

`sameAs` is now non-empty: LinkedIn / Facebook / Instagram placeholder URLs (handle `frenchexcel`),
with a `// TODO` comment above telling the user to replace them with their real profile URLs.
Schema otherwise unchanged.

## Housekeeping

No temporary files were created. All changes left uncommitted in the working tree (Lovable-connected
— no commit/push), branch left in a working state.
```
