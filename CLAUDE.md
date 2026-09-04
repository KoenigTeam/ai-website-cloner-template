@AGENTS.md


## Product grid note
- Data module: src/data/products.ts. Add/edit products there only.
- Counts: DEFAULT_VISIBLE_COUNT = 6, LOAD_MORE_INCREMENT = 6 (exported from the data module).
- Render-all-then-hide: every product is rendered into the DOM; overflow is hidden with the `hidden` attribute. Never `.slice()`.
- Legacy placeholder products and images were removed on 2026-09-04; only real products remain.

## PROJECT STATUS (updated 2026-08-14)
- Forked from ai-website-cloner-template (JCodesMore) for a new client site build.
- Working branch: `feat/client-build` (cut from `master`; levelup commit `9759f82`
  remains on `feat/production-nextjs-levelup` for later merge).
- Client intake questionnaire: `docs/intake/pre-questions.md` (scoped to this
  template's real config surface — SEO, domain, lang, accent, remote image hosts,
  target URL, tone). Fill it in before running `/clone-website`.
- Clone target URL: TBD — pending user input.
- Do not run `/clone-website` until the questionnaire is filled AND the target URL
  is confirmed.