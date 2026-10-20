# Four exam landing pages, internal linking, sitemap and org schema for SEO 100/100

The change adds three indexable exam landing routes (`/tcf-canada`, `/tcf-tout-public`, `/delf-dalf`) built as structural clones of the existing `/tef-canada` gold standard, then wires them into the site: the homepage exam row and the footer "Exams" column now link to all four pages, the sitemap lists every indexable URL, and the organization `sameAs` is populated. The goal is to give every advertised exam its own schema-rich, crawlable page instead of a dead `<span>`, closing the on-page/technical SEO gaps that held the score below 100. The approach is deliberately conservative — clone the proven template, keep Tailwind classes and schema shape identical, vary only the per-exam copy and URLs — which keeps structure consistent for both reviewers and crawlers.

Watch for: nothing blocking. The `sameAs` URLs are intentional placeholders flagged with a TODO (confirmed); the implementation populated them with three social-profile placeholders per the task spec, diverging from the plan's design-note suggestion of `wa.me` — the task spec wins, so this is correct (confirmed). All titles and meta descriptions are unique across the four exam pages (confirmed).

**Verdict**: APPROVED

## High-level view

The three new routes are faithful clones of `tef-canada.tsx`: each carries a unique title and description, a complete OG set with `og:url` matching its own path plus image dimensions and alt, twitter tags, a `Course` JSON-LD whose provider references `{"@id":"https://frenchexcel.org/#organization"}`, a two-item `BreadcrumbList`, and exactly one canonical link pointing at its own `https://frenchexcel.org` path. The schema shape is identical to the template; only the per-exam values differ.

The body copy is genuinely rewritten per exam rather than find-replaced. TCF Canada is angled at IRCC immigration and CLB/NCLC benchmarks with a compulsory-speaking/writing framing; TCF Tout Public is framed around placing on the A1–C2 CEFR scale with compulsory and optional sections; DELF/DALF is framed around lifetime CEFR diplomas and four competencies. Each keeps one `<h1>`, a clean `<h2>`/`<h3>` hierarchy, and `<main>`/`<section>` structure.

Internal linking is complete: the homepage row's three plain `<span>`s are now `<Link>`s with styling identical to the pre-existing TEF Canada link, and the footer "Exams" column is now four anchors (including the previously-missing TCF Canada) styled like the sibling "Site" column.

The sitemap lists exactly the five indexable URLs with `/` at priority 1.0 and the four exam pages at 0.8, no `/thank-you`, and a consistent `2026-10-20` lastmod. The organization `sameAs` moves from empty to three placeholder profile URLs with a replace-me comment, schema otherwise untouched. No forbidden files were edited and nothing was committed.

<details>
<summary>Issues (0)</summary>

No blocking or non-blocking action items. All checked requirements are satisfied.

</details>

<details>
<summary>Details</summary>

## Head/schema parity across the four exam pages

Each new route reproduces the template's head contract exactly. The meta arrays carry `{ title }`, `description`, the full OG block (`og:title`, `og:description`, `og:url`, `og:type` website, `og:site_name`, `og:image` + `type`/`width`/`height`/`alt`, `og:locale`), and the twitter trio, with the per-page `og:url` matching the route path in every case (`/tcf-canada`, `/tcf-tout-public`, `/delf-dalf`). The `Course` JSON-LD in all three references `provider: { "@id": "https://frenchexcel.org/#organization" }` and keeps the `hasCourseInstance` online/fr instance, and the `BreadcrumbList` carries Home at position 1 and the page at position 2 with the page's own URL. Each page declares exactly one canonical link to its own path (confirmed by reading all three files).

Titles and descriptions are unique across all four pages (confirmed): the four titles differ by exam name, and each description is distinct and exam-specific — TCF Canada names IRCC and CLB/NCLC, TCF Tout Public names the compulsory/optional split and the A1–C2 range, DELF/DALF names the A1–B2 / C1–C2 diploma split. The shared `og-image.png` is reused across all pages, matching the template and the plan's stated scope.

## Per-exam body copy is genuinely differentiated

The bodies are not verbatim clones (confirmed). The skills grid, which in the template is a generic Speaking/Writing/Listening/Reading set, is re-cut per exam to reflect the real test structure: TCF Canada splits into compulsory Speaking/Writing plus Listening/Reading MCQs; TCF Tout Public into three compulsory sections (Listening, Language structure, Reading) plus optional Speaking & Writing; DELF/DALF into the four named competencies with level-aware descriptions spanning DELF through DALF. Hero H1s, intros, "what you get" checklists and "who it's for" paragraphs are rewritten to the exam's audience. Semantic structure holds in each: a single `<h1>`, section `<h2>`s, card `<h3>`s, all inside `<main>`/`<section>`.

## Internal linking from homepage and footer

The homepage exam row's three `<span>` labels are now `<Link to="...">` elements whose className (`font-serif text-lg text-muted-foreground transition-colors hover:text-foreground`) is identical to the pre-existing TEF Canada link, so the four render uniformly and no plain-text exam spans remain in that row (confirmed). The footer "Exams" column went from three unlinked `<li>` text items to four `<a href>` anchors — adding the previously-absent TCF Canada entry — each styled `text-muted-foreground hover:text-primary` to match the adjacent "Site" column's links, consistent with the plan's choice to mirror the sibling pattern rather than introduce a `Link` import.

## Sitemap and organization schema

`sitemap.xml` parses as well-formed XML with exactly five `<url>` blocks: `/` at priority 1.0 / weekly, and the four exam pages at 0.8 / monthly, all with `lastmod` `2026-10-20` (matching the system date and the pre-existing entries). `/thank-you` is correctly absent since it is noindex (confirmed).

In `__root.tsx` the `EducationalOrganization` `sameAs` changes from `[]` to three placeholder profile URLs (LinkedIn/Facebook/Instagram under the `frenchexcel` handle) with a `// TODO` comment directing the user to replace them with real profiles; the rest of the schema is untouched (confirmed). This satisfies the task's requirement of "a non-empty array of the three placeholder profile URLs with a replace-me comment." Note the plan's design-notes section had instead suggested a single `wa.me` URL; the implementation followed the task specification, which takes precedence, so the divergence is correct rather than a defect.

## Route tree regeneration and build evidence

`routeTree.gen.ts` contains the import, `.update({ id, path })` call, and the `FileRoutesByFullPath`/`FileRoutesByTo`/`FileRoutesById` interface entries for all three new routes (confirmed by grep). This regeneration is produced by the router plugin during the build, corroborating the coder's recorded `npm run build` exit-0 result; the file was not hand-edited in a way that would flag as a forbidden manual edit. Per the task, the build and lint suites were not re-run — the coder's Verification section records build exit 0 and lint showing only pre-existing repo-wide CRLF `prettier/prettier` warnings with no new rule violations in the changed files, which the diff is consistent with.

## Scope and safety

No forbidden files are in the changeset: `thank-you.tsx`, `robots.txt`, and the GTM snippet do not appear in the diff, and `routeTree.gen.ts` changes are generator output. `git log origin/HEAD..HEAD` shows nothing unpushed and `git status` shows only working-tree modifications plus the three new untracked route files, so nothing was committed or pushed — correct for this Lovable-connected repo.

</details>

<details>
<summary>File map</summary>

- `src/routes/tcf-canada.tsx` (new) — TCF Canada landing page, IRCC/CLB-angled clone of the template.
- `src/routes/tcf-tout-public.tsx` (new) — TCF Tout Public landing page, CEFR-scale-angled clone.
- `src/routes/delf-dalf.tsx` (new) — DELF/DALF landing page, lifetime-diploma-angled clone.
- `src/routes/index.tsx` — three exam `<span>`s converted to `<Link>`s matching the TEF Canada link.
- `src/components/site-chrome.tsx` — footer "Exams" column converted to four linked anchors incl. TCF Canada.
- `public/sitemap.xml` — three new exam URLs added; five total, no /thank-you, lastmod 2026-10-20.
- `src/routes/__root.tsx` — `sameAs` populated with three placeholder profile URLs + TODO comment.
- `src/routeTree.gen.ts` — auto-regenerated by the router plugin for the three new routes.

Full diff: `git diff` plus the three untracked files under `src/routes/`.

</details>
