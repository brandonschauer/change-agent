# Rare Design System — Phase 1 Hand-off Brief

**Phase 0 → Phase 1.** Phase 0 fixed the decisions; Phase 1 builds the first real thing. This one-pager says exactly what to build first and in what order, so the Phase 1 conversation starts from a scoped target, not a blank page. Scope is deliberately minimal: the smallest token set and component list that ships the Change Agent landing page on the **Platform** grade (Vercel + Tailwind + shadcn/ui).

## Build order

1. Seed a self-contained `design-tokens/` folder inside the `change-agent-site` repo (DTCG JSON + Style Dictionary), structured to extract cleanly to a standalone Rare-org `rare-tokens` package at Phase 2.
2. Author the **starter token set** below and wire the CSS-variables output into Tailwind + shadcn.
3. Build the **five landing-page components** below on the Platform stack (shadcn/ui + Tailwind), bound only to tokens.
4. Assemble the Change Agent landing page and check it against the WSG budgets.

## 1. Starter token set (author these first)

Just enough primitives and semantics to render the landing page — no more. All names follow the Layer & Naming spec.

**Color primitives** — from the brand guide, as an ordinal ramp:
`color.blue.500 = #005BBB` (Rare Blue), `color.green.500 = #008542` (Rare Green), `color.gray.700 = #5E6A71` (Rare Gray), plus white, near-black, and 2–3 tints/shades of blue and gray for hover/borders/backgrounds. Secondary accents (`#00AFD8`, `#F58233`, `#7AB800`, `#EEAF00`, `#AA1948`) added only as the design calls for them.

**Color semantics:** `color.text.default`, `color.text.muted`, `color.text.on-brand`, `color.background.default`, `color.background.subtle`, `color.action.primary` (→ blue.500), `color.action.primary.hover`, `color.border.default`, `color.focus.ring`.

**Typography:** `font.family.text` (→ Source Sans 3 stack), `font.family.display` (→ Barlow Semi Condensed stack); a type scale `font.size.100…800`; `font.weight.regular/semibold/bold`; `line-height.tight/normal/relaxed`. (See Font spec for stacks and the Univers swap path.)

**Spacing & radius:** `space.0…10` on a 4 px base; `radius.sm/md/lg/pill`.

**Motion:** `motion.duration.fast/base`, `motion.easing.standard`, plus a reduced-motion-safe default (honoring WSG 2.10 / 3.9).

That is the whole starter set — roughly primitives for color/type/space plus one semantic layer. Component tokens (tier 3) are added only where a component actually needs a named hook.

## 2. Minimal landing-page component list (build exactly these five)

Each is a Platform-grade component (shadcn/ui + Tailwind), styled entirely from tokens, built accessibly and within the WSG budget. No component library is shared across grades — only the tokens are.

- **Nav** — logo (full-color Rare logo, with the required TM), primary links, one call-to-action button; collapses to a mobile menu. Sticky optional. Reuses the button pattern from the waitlist form.
- **Hero** — display headline (`font.family.display`), supporting text, primary CTA, and one optimized responsive image or lightweight background. This is the LCP element — treat its image and font-loading as budget-critical.
- **Use-case cards** — a responsive grid of 3–6 cards (icon/short image, title, blurb, optional link). One card component, repeated; the workhorse of the page and the main test of spacing/type tokens.
- **Waitlist form** — the conversion moment: email input + submit, with proper labels, validation, focus states (`color.focus.ring`), and success/error messaging. Accessibility here is non-negotiable.
- **Footer** — brand mark, secondary nav, social links, legal/copyright. Low-weight, semantic.

Shared sub-patterns to factor out once and reuse: **button**, **text input**, **link**, and the **section container** (max-width + responsive padding).

## Definition of done for Phase 1

The Change Agent landing page renders from the `design-tokens/` build alone (no hard-coded brand values), using only the five components above; it passes the WSG budgets in artifact 4 (≤ 500 KB first view, Lighthouse ≥ 90 all categories, ≤ 0.19 g CO₂e on green hosting); and a single edit to a color or font token in `design-tokens/` visibly re-themes the page after a rebuild — proving the pipeline before any second grade exists.
