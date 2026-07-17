# Rare Design System — Layer & Naming Spec

**Phase 0 · Decisions & specs only.** This defines the *shape* of the system — the layers things live in and the syntax we name them by — so Phase 1 can author tokens without re-litigating structure.

## 1. Inheritance layers

The system has three inheritance layers. Each consumes only the layer directly above it; nothing skips a layer or reaches sideways.

**Rare Core** is the single shared foundation. It owns the raw brand values (primitives) and the cross-brand meanings built on them (core semantics), plus the shared principles. Core is brand law: it does not know or care which grade or product consumes it.

**Grade systems — Consumer, Platform, Data** — inherit Core and adapt it to a context. A grade may *add* semantic and component tokens, and may *re-map* existing semantic tokens to suit its surface (e.g. Data tightens spacing for dense tables; Consumer loosens it for editorial air). A grade may **not** invent or redefine primitives, and may not fork the brand palette. This is where "share tokens, not components" lives: each grade renders its own components, but binds them to Core-derived tokens.

**Products** (the Change Agent landing page, a Platform app, a Data dashboard) consume exactly one grade. Products hold only product-specific composition and content — never new primitives, never brand decisions. A product that needs a new foundational value raises it to its grade, and if it is truly cross-brand, the grade raises it to Core.

```
Rare Core  (primitives + core semantics + principles)
   │  inherited by
   ├── Consumer grade ──▶ Change Agent landing page, future marketing sites
   ├── Platform grade ──▶ Platform product(s)
   └── Data grade (MUI) ─▶ Data product(s), dashboards
```

## 2. Token tiers

Within any layer, tokens fall into three tiers. The rule of thumb: **primitives are values, semantics are decisions, components are bindings.**

**Primitive (tier 1)** — raw, context-free brand values. `#005BBB`, `16px`, `1.5`. Named by *what they are*, never by where they're used. Only Rare Core defines primitives. Example: `color.blue.500 = #005BBB` (Rare Blue).

**Semantic (tier 2)** — role-based aliases that reference primitives and carry *intent*. This is the tier products should reach for. Changing a semantic token re-themes everything downstream without touching a primitive. Example: `color.action.primary → {color.blue.500}`. Grades may re-map these.

**Component (tier 3)** — the most specific tier, binding a semantic token to a named component slot. Optional; used only when a component needs a stable, nameable hook. Example: `button.primary.background → {color.action.primary}`.

The reference chain always flows one direction: **component → semantic → primitive.** A component token never points straight at a hex value; a primitive never points at anything.

## 3. Naming syntax

One syntax, expressed two ways: a **dot path** in the DTCG JSON source, and a **kebab CSS custom property** after Style Dictionary builds it. The MUI theme maps the same semantic paths onto MUI's palette keys.

```
Namespace   Tier/category      Concept        Variant     [State]
  rare    ·   color        ·   action    ·   primary   · [hover]
```

- **Namespace:** always `rare`, guaranteeing global uniqueness and making Core tokens self-identifying in any codebase.
- **Category:** the token family — `color`, `font`, `space`, `size`, `radius`, `motion`, `elevation`, `border`, plus component names at tier 3.
- **Concept / variant / state:** progressively specific; state (`hover`, `focus`, `disabled`, `selected`) is appended only when needed.

### Worked examples

| Tier | DTCG dot path | CSS custom property | Resolves to |
|---|---|---|---|
| Primitive | `color.blue.500` | `--rare-color-blue-500` | `#005BBB` |
| Primitive | `color.green.500` | `--rare-color-green-500` | `#008542` |
| Primitive | `space.4` | `--rare-space-4` | `16px` |
| Semantic | `color.action.primary` | `--rare-color-action-primary` | `{color.blue.500}` |
| Semantic | `color.text.default` | `--rare-color-text-default` | `{color.gray.700}` |
| Semantic | `font.family.text` | `--rare-font-family-text` | `{font.inter}` (swap target) |
| Component | `button.primary.background` | `--rare-button-primary-background` | `{color.action.primary}` |
| Component | `button.primary.background.hover` | `--rare-button-primary-background-hover` | `{color.blue.600}` |

### Grade overrides

Grades keep the *same* semantic names and re-map them in a grade scope, so downstream code is identical across grades and only the resolved value differs. In CSS this is a scope attribute; in the Data grade it is the MUI theme object.

```css
:root { --rare-space-inset-card: var(--rare-space-6); }      /* Core default: 24px */
[data-grade="data"] { --rare-space-inset-card: var(--rare-space-3); } /* Data: 12px, denser */
```

### Conventions (locked for Phase 1)

Lowercase kebab throughout; numeric scales use an ordinal ramp (`50–900` for color, `0–12` for space/size) rather than t-shirt sizes, so the scale is extensible without renaming. Never encode a raw value in a semantic or component name (`color-action-primary`, never `color-action-blue`). One canonical name per concept; aliases are discouraged and, if unavoidable, documented as deprecations.

---

**Open for Phase 1:** the exact primitive ramps (how many steps of blue/green/gray, the spacing base unit) are deliberately *not* fixed here — they belong to the starter token set. This spec fixes only the structure and naming so those choices slot in cleanly.
