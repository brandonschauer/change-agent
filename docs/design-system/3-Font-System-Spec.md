# Rare Design System — Font System Spec

**Phase 0 · Decisions & specs only.** This recommends provisional open typefaces for two brand roles, maps each to a `--font-*` token, and documents the path to swap in a licensed Univers web font later. Selections are **provisional** pending confirmation against the brief's shortlist and the brand guide.

## Brand roles we are matching

Rare's brand guide names two designer faces (both licensed, print/desktop only):

- **Univers LTPro** — the primary designer typeface, used for everything including body copy. This is the **text / UI** role.
- **PF Square Sans Condensed** — a squared condensed companion, "for titles and callouts only… never for body copy." This is the **condensed display** role.
- Arial is the staff/Office fallback and makes a natural last-resort web fallback, since it is already the sanctioned universal substitute.

We are not licensing web versions of these yet. Phase 0 selects open substitutes that (a) live on Google Fonts — matching the confirmed CDN hosting decision — and (b) sit close enough to the brand faces that a later swap to licensed Univers/PF Square is visually and technically low-risk.

## Selections

These were chosen for the overall **gestalt of "friendly"** that the Rare brand aims for. An attribute-for-attribute match to Univers/PF Square (e.g. Inter + Saira Semi Condensed) would sit closer to the *letterforms* of the licensed faces, but reads cooler and more corporate; Source Sans 3 and Barlow Semi Condensed trade a little shape-fidelity for the warmer, more approachable feel that fits Rare's voice. Both are on Google Fonts (matching the CDN hosting decision) and remain low-risk to swap for licensed Univers/PF Square later, since nothing downstream references a font name directly.

### Text / UI role → **Source Sans 3**

Univers holds the broad text-and-UI duty at Rare (it carries body copy in the brand guide). **Source Sans 3** is a humanist sans with open apertures, a generous x-height, and a soft, legible character that reads as friendly and human at body sizes — while still being sober enough for forms and dense interface text. It is a mature, well-hinted variable family with a full weight range, purpose-built by Adobe for UI and long-form reading.

### Condensed display role → **Barlow Semi Condensed**

PF Square Sans Condensed is squared and geometric; **Barlow Semi Condensed** keeps the condensed footprint for titles and callouts but softens it with warmer, slightly humanist, rounded-square terminals — the friendlier counterpart to Source Sans 3. It is a variable family with a full weight range on Google Fonts, and stays titles-and-callouts only — never body — preserving the brand's stated rule for the condensed face.

## Token mapping

Both faces are bound to `--font-*` tokens so nothing downstream references a font name directly. Swapping to licensed Univers later is a **one-line change to the primitive stack** — no component, grade, or product edits.

| Role | Semantic token (DTCG `font.family.*`) | CSS custom property | Provisional value (stack) |
|---|---|---|---|
| Text / UI | `font.family.text` | `--rare-font-family-text` | `"Source Sans 3", Arial, system-ui, sans-serif` |
| Condensed display | `font.family.display` | `--rare-font-family-display` | `"Barlow Semi Condensed", "Arial Narrow", Arial, sans-serif` |

The semantic tokens point at primitive stacks; only the primitive stack names a real font. Headings and callouts consume `--rare-font-family-display`; everything else consumes `--rare-font-family-text`. Arial anchors both stacks as the guaranteed fallback, echoing Rare's own staff-font choice.

## Swap path to licensed Univers (documented for later)

When a licensed **Univers web font** (e.g. a "Univers Next W0x" webfont) and a **PF Square Sans** webfont are procured:

1. Add the licensed `@font-face` sources to the font-loading layer (self-hosted or the vendor's CDN).
2. Prepend the licensed family to the **primitive** stack only:
   `--rare-font-family-text: "Univers Next W02", "Source Sans 3", Arial, system-ui, sans-serif;`
   `--rare-font-family-display: "PF Square Sans Pro Cond", "Barlow Semi Condensed", "Arial Narrow", sans-serif;`
3. Rebuild tokens with Style Dictionary. CSS variables and the MUI theme regenerate; **no component or product code changes.** Source Sans 3 / Barlow Semi Condensed remain in the stack as automatic fallbacks during the licensed font's load and in any context where it isn't available.

This is exactly why the locked decision routes type through `--font-*` tokens rather than hard-coded families.

## Payload & subsetting note

Hosting is **Google Fonts CDN** (confirmed). To keep the type payload honest against the WSG budget:

- Load only the weights actually used — target **Text: 400 / 600 / 700; Display: 600 / 700** — via the `&display=swap` and explicit `wght` query so unused weights aren't fetched. Prefer the variable-font endpoint with a constrained axis range over many static weights.
- Restrict to `&subset=latin` (add `latin-ext` only if needed) and use `&text=` subsetting for the display face if it only ever renders a small set of headings.
- Add `<link rel="preconnect">` to `fonts.gstatic.com` and preload the primary text face to protect LCP.
- Budget target: **≤ ~100 KB total** for web fonts (WOFF2, subset) on first load.

**Flagged tradeoff:** Google Fonts introduces a third-party origin, which is in tension with WSG 3.5 (*treat third parties the same as first parties*) and slightly weakens the perf/carbon story versus self-hosted subset WOFF2. It is a reasonable Phase-0 convenience; I recommend revisiting self-hosting when the licensed Univers font arrives (licensed fonts typically can't be served from Google Fonts anyway, so the swap path likely forces self-hosting at that point regardless).
