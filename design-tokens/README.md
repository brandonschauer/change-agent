# Rare Core — Design Tokens

W3C DTCG JSON source → [Style Dictionary](https://styledictionary.com) → plain CSS custom properties.

```bash
npm install          # local dev-time only; the host runs no Node
npm run tokens:build # regenerates build/rare-tokens.css
```

`build/rare-tokens.css` is **committed** so GitHub Pages serves it as a static asset. Never hand-edit it —
edit the DTCG source under `tokens/` and rebuild. Conformance audits diff a fresh build against the
committed file; any difference means the generated file was hand-edited or the build is stale.

## Layout

```
tokens/
  primitives/   tier 1 — raw brand values (color, space, radius, size, motion, typography)
  semantic/     tier 2 — role-based aliases that reference primitives
  components/   tier 3 — component slots bound to semantics
```

The reference chain flows one direction: **component → semantic → primitive**. `outputReferences: true`
preserves that chain as live `var()` refs, so editing one primitive re-themes everything downstream.

---

## Convention: brand-guide primitives are retained even when unreferenced

**Rare Core is shared brand vocabulary, not a manifest of what one surface currently paints.** Core is
consumed by surfaces that do not exist yet (change-agent-app, and later rare.org). A brand-guide palette
value that no current page happens to use is still part of the brand.

Therefore:

> **Brand-guide palette primitives are intentionally retained in Core even when no surface references
> them. Conformance audits MUST treat these as _sanctioned_, not as dead tokens, and MUST NOT propose
> them for removal on the grounds of being unused.**

Such tokens carry an explicit marker in their `$description`:

> `"Brand-guide palette value, retained in Core for cross-consumer use; may be unused on any given surface."`

Currently retained under this rule:

| Token | Value | Brand role |
|---|---|---|
| `color.green.500` | `#008542` | Rare Green — brand-guide **primary** |
| `color.yellow.500` | `#EEAF00` | Rare Yellow — brand-guide **secondary** |

Retaining an unreferenced primitive is close to free: it emits one CSS custom property definition and
nothing else. It cannot affect rendering, because a custom property only influences a computed value
when something consumes it through `var()`. The two tokens above cost **+121 bytes gzipped** in total.

### What this rule does *not* cover

The rule protects **brand-guide palette values only**. It does not protect *derived working shades* —
tints, hovers, and surface pairs that were computed for a specific component and have no independent
standing in the brand guide. When the surface that motivated them goes away, they are genuinely dead and
should be pruned. Examples pruned for exactly this reason, and deliberately **not** restored:

- `color.green.700` (`#006B35`) — was the hover/dark pair for a green brand surface that no longer exists
- `color.yellow.100` (`#FBEFC2`) — was a soft accent fill for a retired accent surface

### Rule of thumb

| Kind of token | Unreferenced ⇒ |
|---|---|
| Brand-guide palette value (primary/secondary) | **Keep.** Mark it in `$description`; audits treat as sanctioned. |
| Derived shade/tint for a specific surface | **Prune** once that surface is gone. |
| Semantic or component token | **Prune.** These are decisions and bindings; an unbound one is dead by definition. |

**Restoring a brand-guide primitive is additive and non-visual.** It must add custom-property
definitions only — zero modified or removed lines, and no semantic re-bound. Verify with a diff of
`build/rare-tokens.css` before merging.
