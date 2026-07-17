# Rare Design System — Charter (ADR-001)

**Status:** Accepted · **Phase:** 0 (decisions & specs only) · **Date:** 2026-07-12
**Owner / Decider:** Brandon Schauer — design-system owner and final authority over Rare Core.
**Author:** Design Systems Lead (this document)

> This is an Architecture Decision Record, not an implementation plan. It records *what we are committing to* and *why*. No tokens are authored and no components are built in Phase 0; that work begins in Phase 1.

## Context

Rare is standing up several digital surfaces at once — the Change Agent marketing site, a Platform product, and a Data-facing product — each with different technology, audiences, and lifespans. Left uncoordinated they will drift into three unrelated visual languages, duplicate effort, and dilute a brand whose whole premise ("Rare," one proper noun, deliberately consistent) is recognizability. We need shared foundations without forcing every product onto the same component code, framework, or release cadence.

## Decision

We adopt a **federated design system**: a single **Rare Core** of shared foundations, inherited by three **grade systems**, which in turn serve individual **products**.

The three grades are:

- **Consumer** — public, content-led, marketing surfaces (e.g. the Change Agent landing page). Optimized for reach, story, and low page weight.
- **Platform** — interactive application surfaces. Optimized for interaction density, state, and accessibility.
- **Data** — data- and dashboard-heavy surfaces built on MUI. Optimized for tables, charts, and dense information.

Rare Core owns the primitives and cross-grade semantics (color, typography, spacing, radius, motion, elevation) plus the shared principles. Each grade may extend or re-map **semantic and component** tokens to fit its context, but may **not** redefine primitives or fork the brand. Products consume their grade; they never reach past it into Core.

### Governing principle: share tokens and principles, not components

The unit of sharing is the **token and the principle**, never the component implementation. A Consumer button (server-rendered HTML/CSS), a Platform button (framework component), and a Data button (MUI) will look like siblings because they consume the same semantic tokens — not because they share code. This lets each grade pick the right implementation for its stack while the brand stays coherent and a color or type change propagates everywhere from one source.

### Locked decisions (build on these; do not re-open)

1. **Web type = an open substitute typeface**, encoded as `--font-*` tokens, so a licensed Univers web font can be swapped in later without touching downstream code. (Univers LTPro and PF Square Sans Condensed remain the licensed print/brand faces; see the Font System spec.)
2. **Token pipeline = W3C DTCG JSON source + Style Dictionary**, emitting CSS custom properties (Consumer/Platform/WordPress) and an MUI theme (Data) from one source of truth.

## Consequences

We accept slightly more up-front coordination (a token source, a naming spec, a governance owner) in exchange for brand coherence, single-source theming, and the freedom for each grade to use its own component technology. Because nothing shares component code, a change to one product cannot break another; the only shared contract is the token names and their meanings, which Core governs.

## Governance

Brandon owns Rare Core and ratifies any change to primitives or core semantics. Grade leads may add or re-map semantic/component tokens within their grade and propose Core changes via pull request against the token source. Changes to primitives, the grade model, or either locked decision require the owner's sign-off. This Charter is versioned; superseding decisions are recorded as new ADRs, not silent edits.
