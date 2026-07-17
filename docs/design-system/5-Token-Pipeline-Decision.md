# Rare Design System — Token Pipeline Decision (ADR-002)

**Status:** Accepted · **Phase:** 0 · **Owner:** Brandon Schauer

## Decision (locked)

One source of truth for every brand value: **W3C DTCG-format JSON**, compiled by **Style Dictionary** into per-consumer outputs. Designers and Core own the JSON; no product hand-edits a compiled file. This is locked decision #2 from the Charter; this ADR records the outputs and the home for the source.

## Source format

Tokens are authored as **DTCG JSON** (`$value`, `$type`, `$description`, with `{alias}` references for the semantic→primitive chain). DTCG is the emerging W3C standard, keeps us tool-neutral (Figma Variables, Style Dictionary, and others converge on it), and encodes the primitive/semantic/component tiers from the Layer & Naming spec directly as nested groups.

## Target outputs

Style Dictionary builds all consumers from the one source, so a value changes in exactly one place:

- **CSS custom properties** — `--rare-*` variables for the **Consumer** grade, the **Platform** grade, and the **WordPress** theme (Change Agent). One core file plus per-grade override files scoped by `[data-grade="…"]`.
- **MUI theme** — a JS/TS theme object for the **Data** grade, mapping semantic tokens onto MUI palette/typography/spacing keys so MUI components inherit the brand without bespoke styling.
- **(Optional, low cost)** a JSON/TS constants export for non-CSS consumers and a docs artifact, since they fall out of the same build for free.

The contract every consumer shares is the **token name and meaning** — never component code. This is the Charter's "share tokens, not components" made literal.

## Where the source lives

**Decision (confirmed): seed the token source as a self-contained `design-tokens/` folder inside the `change-agent-site` repo for Phase 1, structured to extract cleanly to a standalone Rare-org `rare-tokens` package at Phase 2.** The folder holds the DTCG source, the Style Dictionary config, and the build outputs; `change-agent-site` consumes its own build, and the folder is kept dependency-isolated so the later lift-out is a move, not a rewrite.

This follows the strategy brief's sequencing (tokens seeded now, extracted at Phase 2) and matches how the work is actually happening — inside `change-agent-site` with Claude Code. It **supersedes the earlier draft of this ADR**, which preferred standing up the standalone `rare-tokens` repo from day one. We accept the seed-and-extract path because:

- It maximizes **Phase-1 velocity**: no second repo, publish pipeline, or version wiring to stand up before there is even one consumer.
- The token source stays **extractable by construction** — self-contained folder, `--rare-*` namespace, no coupling to app code — so the Phase-2 move carries no code changes for consumers, only a dependency-source swap.
- Governance is unchanged: the owner still gates primitive changes via PR; in Phase 1 that PR is against `change-agent-site`, and moves to `rare-tokens` at extraction.

The tradeoff we accept: the Phase-2 extraction step is real work we're deferring rather than avoiding. It's low-risk given the folder is isolated from the start.

## Rollout

- **Phase 1** — Create `design-tokens/` inside `change-agent-site`. Author the starter token set (see hand-off brief) as DTCG JSON. Configure Style Dictionary to emit the CSS variables that the Change Agent landing page consumes (wired into Tailwind + shadcn). The app consumes its own build; no external package yet.
- **Phase 2** — Extract `design-tokens/` into a **versioned, published `rare-tokens` package** (semver) in the Rare GitHub org, generalize to Speak Sustainability, and add the **MUI theme** output as the Data grade comes online. Consumers swap from the local build to the pinned package; the `--rare-*` contract is identical, so nothing downstream changes.

## Consequences

A color, type, or spacing change happens once, at the token source, and propagates to every consumer on the next build/release — Change Agent now, then WordPress CSS, Platform CSS, and the MUI Data theme as they come online. No product can silently drift from the brand, because no product owns brand values — they consume a build (Phase 1) and then a versioned dependency (Phase 2+).
