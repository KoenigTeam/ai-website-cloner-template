# Clone Website Execution Prompt Template

Use this template whenever starting a new chat session to clone and adapt a target website for a client.

---

## Instructions

1. Fill out and save `docs/intake/pre-questions.md`.
2. Open a **New Chat** session in VS Code Copilot.
3. Attach `docs/intake/pre-questions.md` to the chat.
4. Copy and paste the prompt below, replacing `<TARGET_URL>` with your target website URL.

---

## Prompt

```markdown
/clone-website <TARGET_URL>

Please read the completed client intake questionnaire attached at `docs/intake/pre-questions.md` before proceeding.

### Execution Instructions:
1. **Target URL:** <TARGET_URL>
2. **Phase 1 — Inspection & Emulation:**
   - Follow the `clone-website` skill to perform a pixel-perfect 1:1 extraction and build of the target site (layout, typography, colors, animations, responsive design, assets).
   - Ensure all assets are downloaded locally into `public/images/`, `public/videos/`, and `public/seo/`.
3. **Phase 2 — SEO & Infrastructure:**
   - Run `npm run scaffold:seo` once `docs/research/<host>/seo.json` is generated.
4. **Phase 3 — Client Adaptation:**
   - Adapt the site copy, business name, metadata, brand accent color, language, and image domain configs according to `docs/intake/pre-questions.md`.
5. **Phase 4 — Verification:**
   - Run `npm run check` (lint + typecheck + build) to verify zero errors and clean output.
```
