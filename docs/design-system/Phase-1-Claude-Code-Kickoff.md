# Phase 1 — Claude Code Kickoff (Change Agent site · static HTML / GitHub Pages)

A ready-to-paste starting prompt for Claude Code, revised after Claude Code evaluated the repo and
found the original prompt assumed a Vercel/Tailwind/shadcn stack that doesn't exist here. The repo is
a **static, hand-authored HTML site on GitHub Pages** (`index-v2.html` + `CNAME`), so this version
targets that reality.

---

> # ⚠️ AMENDMENTS — READ FIRST
>
> **This document is the Phase 1 kickoff *prompt*, preserved as a historical record of what was
> originally asked for. Several of its instructions have since been deliberately superseded.**
>
> **If you are running a conformance audit, the amendments below win over the body of this document.**
> The superseded values are still written out verbatim in the sections that follow; do not read them as
> current targets, and do not flag the shipped implementation for deviating from them.
>
> | # | This doc says | Current truth | Decided in |
> |---|---|---|---|
> | A | `surface.brand` → `green.500` **#008542** ("keep it on #008542") | `surface.brand` → `blue.500` **#005BBB** (Rare Blue). **The hero is blue by deliberate decision.** | PR #2 |
> | B | Author `surface.brand-strong`, `accent`, `accent.soft`, `text.on-accent` | All **pruned** — the surfaces that motivated them no longer exist | PR #2 |
> | C | Author `surface.soft-1..4` / `text.accent-1..4` as semantics | **Demoted to product scope** (`--ca-*` in `index.html`); Core stays role-based | PR #2, ratified PR #7 |
> | D | `green.500` / `yellow.500` are bound brand values | **Retained in Core but unbound** — brand vocabulary for future consumers. Not dead; do not prune | PR #6 |
> | E | Author `green.700` #006B35 / `yellow.100` #FBEFC2 | **Not restored** — derived working shades for retired surfaces | PR #6 |
> | F | Keep v2's Google Fonts `<link>` | **Self-hosted WOFF2** from our own origin (WSG 3.5 — no visitor IP reaches a third party) | PR #3 |
> | G | `font.size.hero` as a fluid `clamp(…6vw…)` | Reduced to a **role** → `{font.size.1000}`, paired with `font.size.hero-min`. The `6vw` lives in page CSS | PR #7 |
> | H | `radius.card` 14px / hero radius 22px | `radius.xl` normalized to **24px** (on the 4px grid) | PR #7 |
> | I | — | **Added since:** `elevation.z.*`, `size.control-sm/md`, `border.offset.focus` | PR #7 |
> | J | — | **Added since:** `tokens/product/` + `rare-core.css` — page-calibrated tokens are excluded from the publishable Core | PR #7 |
>
> ### Contrast note (supersedes STEP 4 below)
> The body warns that white on `surface.brand` **#008542** is ~4.7:1 — "just over AA with no margin."
> That risk is **resolved, not mitigated**: the brand surface is now **#005BBB**, where white measures
> **6.53:1**. All 16 audited pairs pass AA.
>
> ### Guardrail status — still in force
> The original guardrail (*don't let v2's warm palette creep back under new primitive names*) **holds**:
> `#7DB61C`, `#F5B301`, `#F4F3EF` and `#5a4300` appear nowhere in the token source or the page, and the
> `#7AB800` back-door is not taken — `lime.500` exists as a brand secondary but is bound to no brand
> surface.
>
> **Governing docs for current rules:** [`design-tokens/README.md`](../../design-tokens/README.md) —
> retained-primitive convention, Layer & Naming rule 3, and the Core/product publication boundary.

---
 
## Decisions this prompt is built on (settled)

1. **Stack — static HTML on GitHub Pages.** Implement against the existing `index-v2.html`; introduce
   no framework. Style Dictionary emits a plain `rare-tokens.css` of CSS custom properties, built
   locally and committed so GitHub Pages serves it as a static asset. No Tailwind, shadcn, or
   `next/font` — they have nothing to attach to here. (This also matches your `CNAME` and the
   GitHub Pages green-hosting analysis in doc 4a.)
2. **Palette — re-theme v2 to the brand-guide primaries.** The official starter set uses the brand
   primaries (green `#008542`, etc.), which **intentionally changes** v2's tuned warm palette
   (`#7DB61C` green, `#F5B301` gold, `#F4F3EF` paper). Expect a visible shift. The token structure is
   built to be **extended in a system-compliant way** — as you fine-tune `index-v2.html`, any new
   value is added as a named primitive/semantic, never a one-off flat token. *Guardrail:* extensions
   should be brand-aligned additions, not a back-door re-introduction of v2's old warm palette. Claude
   Code's read is that the warm look was deliberate design; if you decide you want it back, make it a
   deliberate palette decision rather than letting it creep back in as "new primitives." (Watch one
   loophole: the authored secondary green `#7AB800` is a near-twin of v2's old hero green `#7DB61C`, so
   pointing `surface.brand` at the secondary would quietly restore the old look — keep it on `#008542`
   if you want the shift to stick.) **[SUPERSEDED — amendment A: `surface.brand` is now `#005BBB`
   (Rare Blue). The blue hero is a deliberate decision; the guardrail against the *warm* palette still
   holds.]**
3. **Branding — keep Change Agent branding in the nav.** No Rare master-logo download from the DAM.
   (The Rare wordmark rules still apply to any "Rare" text: uppercase R, rest lowercase.)
4. **Naming — rename v2's flat tokens to the semantic contract.** `--rare-blue`, `--hero-green`,
   `--accent-gold`, `--paper`, `--rule-strong`, `--chat-*` etc. become semantic `--rare-color-*`
   tokens, with an old→new map so nothing breaks structurally.

---

## Files & assets

**Reference docs** — the Phase 0 set is already in `docs/design-system/` (Claude Code confirmed it read
them). It is the source of truth and wins on any conflict with this prompt.

**Brand assets** — **none to download**, since the nav keeps Change Agent branding. If that changes
later, the Rare logo (full-color, with ™) lives in the DAM linked from <https://rare.org/brand-guide/>.

**Fonts** — keep v2's existing Google Fonts `<link>`; audit and trim to only the weights the page
actually renders (WSG win). No `next/font`.  **[SUPERSEDED — amendment F: fonts are now self-hosted
WOFF2 served from our own origin; the weight-trimming instruction still applies and was carried out.]**

**Implementation target** — `index-v2.html` (single ~30 KB self-contained file).

---

## The starting prompt (paste into Claude Code, run from the `change-agent-site` root)

```text
You are implementing Phase 1 of the Rare Design System on the Change Agent landing page, which is a
STATIC hand-authored HTML site hosted on GitHub Pages. Implement against the existing index-v2.html —
do NOT introduce a framework. Read docs/design-system/ first (esp. the Federated Strategy Brief,
Layer & Naming spec, Font spec, WSG Starter Set, Token Pipeline decision, Phase 1 hand-off). Those are
the source of truth and win on any conflict with this prompt.

CONTEXT
- Rare is a conservation nonprofit ("Rare" — uppercase R, rest lowercase; never RARE or R.A.R.E.).
- Federated model: one Rare Core of shared tokens + principles. Principle: SHARE TOKENS, NOT COMPONENTS.
- This page KEEPS CHANGE AGENT branding in the nav (not the Rare master logo).
- Locked: (1) web type = open substitute mapped to --rare-font-* tokens (font-family tokens under the
  --rare-* namespace, e.g. --rare-font-family-text) so a licensed Univers webfont can be swapped in later
  without touching markup; (2) token pipeline = W3C DTCG JSON source + Style Dictionary, emitting CSS
  custom properties.
- Hosting is GitHub Pages (static). The Style Dictionary build runs LOCALLY at dev time and the generated
  CSS is committed so GitHub Pages serves it as a plain static asset. No Node runtime on the host; no
  Tailwind, shadcn, or next/font.

STEP 0 — INSPECT & MAP (don't assume)
Confirm the static setup and report back BEFORE generating anything: index-v2.html's sections, the inline
CSS custom properties it currently defines (flat names such as --rare-blue, --hero-green, --accent-gold,
--paper, --paper-warm, --chat-user, --chat-agent, --rule-strong), the Google Fonts weights it loads, and
the CNAME / GitHub Pages setup. Produce a proposed OLD → NEW token map (flat → semantic --rare-color-*)
and your plan, then wait for my go-ahead.

STEP 1 — TOKEN SOURCE (DTCG JSON + Style Dictionary → plain CSS)
Create a self-contained design-tokens/ folder (structured to extract to a standalone rare-tokens package
at Phase 2):
- DTCG JSON split by tier: primitives, semantic, (component only where needed).
- Style Dictionary config building CSS custom properties to design-tokens/build/rare-tokens.css, using the
  --rare-* prefix and dot-path → kebab naming (color.action.primary → --rare-color-action-primary). Add an
  npm script tokens:build. COMMIT the built CSS (GitHub Pages serves it statically); a GitHub Action to
  rebuild on push can come later.
- The repo is currently tooling-free: add a minimal package.json with Style Dictionary as a dev dependency
  and the tokens:build script, plus a .gitignore entry for node_modules. Node is needed only locally at dev
  time — the committed rare-tokens.css is what the host serves. (Style Dictionary is locked per ADR-002.)

Author this starter set. RE-THEME to the brand-guide primaries — this intentionally changes v2's tuned
greens/golds/warm background to the official palette; expect a visible shift:
- Color primitives: blue.500 #005BBB, green.500 #008542, gray.700 #5E6A71; neutrals white #FFFFFF,
  ink #1A1D1F, bg-subtle #F4F6F8, border #DDE3E8; secondary accents red #AA1948, blue #00AFD8,
  orange #F58233, green #7AB800, yellow #EEAF00; plus 2–3 blue/gray tints/shades for hover/borders.
  Also add the backing tints/shades these semantics need: green.700 #006B35, blue.600 #00499A,
  blue.50 #E6F1FB, yellow.100 #FBEFC2.
  EXTENSIBILITY: if fine-tuning the page needs a value the primitives don't cover, add it as a new
  primitive/semantic named per the Layer & Naming spec — never a one-off flat token.
- Color semantics — author ALL of these. v2 has ~14 real color tokens, so the basic eight are NOT
  enough; you are explicitly licensed to author the tier-2 semantics the old→new map requires, and here
  they are (do not improvise names — use these):
  · Text: text.default, text.muted, text.on-brand (→ white), text.on-accent (→ ink #1A1D1F; re-derived
    for #EEAF00 — verify contrast).
  · Background / Surface: v2 runs a THREE-TIER background depth (raised white cards over a base canvas
    over darker alternating section bands), so author THREE neutral backgrounds — two is not enough or
    the cards go invisible against a white section: background.default (#FFFFFF, raised cards/surfaces),
    background.subtle (→ #F4F6F8, the base page canvas), background.muted (→ #E9EDF1, the darker
    alternating section bands). Then: surface.brand (→ green.500 #008542), surface.brand-strong
    (→ green.700 #006B35, the hero dark/hover pair)  **[SUPERSEDED — amendments A/B: surface.brand →
    blue.500 #005BBB; surface.brand-strong pruned]**, surface.chat-user (→ blue.50 #E6F1FB),
    surface.chat-agent (→ white #FFFFFF + border.default, so it reads distinct from background.subtle
    rather than aliasing the same #F4F6F8).
  · Action: action.primary (→ blue.500 #005BBB), action.primary.hover (→ blue.600 #00499A).
  · Accent: accent (→ yellow #EEAF00), accent.soft (→ yellow.100 #FBEFC2).  **[SUPERSEDED — amendment B:
    both pruned; yellow.500 retained as an unbound brand primitive, yellow.100 not restored]**
  · Border: border.default (→ #DDE3E8), border.strong (→ gray.700 #5E6A71).
  · Feedback: feedback.error (→ red #AA1948) — REQUIRED; the waitlist form's validation must use it,
    not a hard-coded red. Add feedback.success/warning only if a surface actually needs them.
  · Focus: focus.ring (→ blue.500).
- Then map EVERY v2 flat token onto one of the above (confirm exact targets from STEP 0's audit).
  Expected mapping: --rare-blue → action.primary (#005BBB, unchanged); --hero-green → surface.brand
  (#008542, changed); --hero-green-dark → surface.brand-strong (#006B35); --accent-gold → accent
  (#EEAF00, changed);  **[SUPERSEDED — amendments A/B: surface.brand is #005BBB; brand-strong and
  accent pruned]** --accent-gold-soft → accent.soft; the gold-card text #5a4300 → text.on-accent;
  --surface → background.default (#FFFFFF, raised cards stay white); --paper → background.subtle
  (#F4F6F8, base canvas — changed); --paper-warm → background.muted (#E9EDF1, alternating section bands —
  changed). Do NOT map --paper and --surface both to background.default — that flattens v2's tiers and the
  cards vanish against white sections. --rule-strong → border.strong;
  --chat-user / --chat-agent → surface.chat-user / -agent; the form-error #c0392b → feedback.error.
  Also map the non-color and remaining flats: --headline → font.family.display; --body → font.family.text;
  --radius (14px) → radius.card 14px (a named token that preserves the value; do NOT snap to radius.md 12,
  which would shrink every card corner 2px); --gutter → space.6; --container → size.container; and any
  others the audit finds (e.g. --rare-blue-hover → action.primary.hover, --rule → border.default,
  --slate → text.muted). NO flat names and NO hard-coded hexes (or layout px a token now covers) survive.
- Type: font.family.text → "Source Sans 3", Arial, system-ui, sans-serif; font.family.display →
  "Barlow Semi Condensed", "Arial Narrow", Arial, sans-serif. Type scale font.size.100–800 =
  12,14,16,18,20,24,30,40 px (0.75–2.5 rem). Weights: match what v2 actually renders — it uses 500, 600,
  700, and 800, so author regular 400 / medium 500 / semibold 600 / bold 700 (Source Sans 500 IS rendered,
  so the medium token is required, not optional) plus a display-heavy 800 token for the Barlow headlines.
  Line-heights tight 1.1 / normal 1.5 / relaxed 1.65.
- Spacing (4px base) space.0–10 = 0,4,8,12,16,20,24,32,40,48,64 px. Radius sm 4 / md 8 / lg 12 / card 14 / pill 9999.
  Motion duration.fast 150ms / base 200ms, easing.standard cubic-bezier(0.2,0,0,1); respect
  prefers-reduced-motion.
- Layout / size: author size.container = 1220px (v2's --container). v2's --gutter (24px) maps to space.6,
  not a new token. These layout constants are the only non-color flat values without an obvious semantic —
  size.container is their home, so the "no surviving flat tokens" rule still holds end-to-end.

STEP 2 — WIRE TOKENS INTO index-v2.html
- LINK design-tokens/build/rare-tokens.css from the page (a <link> in <head>). Linking is REQUIRED so the
  definition-of-done proof holds: editing a token and running tokens:build re-themes the page with no other
  step. Do NOT inline the :root block — inlining breaks the one-token-rebuild proof unless you add a
  re-inline build step, which isn't worth it for a few KB.
- Replace v2's inline flat custom properties with the generated semantic --rare-* variables per the
  OLD → NEW map, and update every rule that referenced a flat token. Keep the page visually identical
  EXCEPT the intended re-theme to brand primaries.

STEP 3 — REFACTOR THE EXISTING SECTIONS (tokens only, no framework)
Refactor the CSS of v2's existing sections so nothing hard-codes a hex/px that a token covers:
nav (KEEP Change Agent branding), hero (the LCP element — mind font + image weight), use-case cards,
the "How it works" step block (KEEP it — the hand-off's five-component list is amended to include it),
waitlist form (proper labels, validation, focus states via focus.ring), footer. Preserve semantic HTML
and accessibility; do not convert anything to a framework component.

STEP 4 — HONOR THE WSG BUDGET (static case)
Keep first view ≤ 500 KB (hard cap 1 MB). Since rare-tokens.css is a linked file (STEP 2), the text budget
splits HTML ≤ 30 KB / CSS ≤ 40 KB — keep the total honest. Images AVIF/WebP + responsive srcset + lazy-load
below the fold; subset Google Fonts to only the weights actually rendered; defer non-critical JS; minify.
Aim Lighthouse ≥ 90 all categories (LCP < 2.5s, CLS < 0.1, INP < 200ms). After the re-theme, VERIFY WCAG
contrast on every changed surface. **[SUPERSEDED — see the contrast note in the amendments: the brand surface is #005BBB and white
measures 6.53:1, so this risk is resolved.]** The one to actually watch is white text.on-brand on surface.brand #008542
(~4.7:1 — just over AA with no margin, so any thin-weight or small hero text will wobble; darken the surface
or bump weight/size if so). accent #EEAF00 with text.on-accent (near-black on yellow) and feedback.error on
white (~7:1) are both safe. Adjust text.on-accent or surface.brand if any pair misses AA.

DEFINITION OF DONE
index-v2.html renders entirely from the design-tokens build (no hard-coded brand values, no surviving flat
tokens); Change Agent branding intact; the intended re-theme to brand primaries applied and contrast-checked;
within the WSG budget on GitHub Pages (green per docs/design-system/4a); and editing ONE token value in the
DTCG source and running tokens:build visibly re-themes the linked page. Show me that one-token change to
prove the pipeline.
```

---

## After Phase 1

Phase 2 generalizes to Speak Sustainability and extracts `design-tokens/` into a standalone Rare-org
`rare-tokens` package. Because the contract is plain `--rare-*` CSS variables, the extraction is a
dependency-source move, not a rewrite — the static page keeps consuming the same variable names.
