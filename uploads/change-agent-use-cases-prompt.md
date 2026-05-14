# Change Agent — Use Cases Section Prompt
**Version:** 1.0
**Date:** May 11, 2026
**Owner:** Brandon Schauer / Rare Labs
**Use:** Paste into the Change Agent Marketing scaffold file in Claude Design

---

## Prompt

Build the Use Cases section for the Change Agent marketing site. Replace the Use Cases placeholder in the scaffold. Reference the Change Agent Design System for all visual decisions.

---

### Section Container

- Background: Paper #F4F3EF, full width
- Content constrained to 1220px, centered
- Padding: 80px 0

---

### Section Header

- "Use Cases" — Barlow Semi Condensed 700, H2 scale, Rare Blue #005BBB, left-aligned
- "Change Agent superpowers your intervention design at key moments." — Source Sans 3 400, Body scale, Ink #1A1A1A, left-aligned, 8px below the headline

---

### Card Grid Layout

- 3 columns on desktop (992px and above), 24px gap
- 2 columns on tablet (576px–991px), 20px gap
- 1 column on mobile (below 576px), 16px gap
- 2 rows of 3 cards = 6 cards total
- All cards equal height within each row — use CSS grid with align-items: stretch

---

### Card Structure (each card)

- White background, border-radius 12px, 1px border in #E0DED8
- No drop shadow
- Internal layout: two zones stacked vertically
  - **Top zone:** text content, padding 24px 24px 16px 24px
  - **Bottom zone:** illustration, background #EDE9DE, border-radius 0 0 12px 12px, padding 16px, min-height 160px, image centered and bottom-aligned within the zone
- Top zone and bottom zone separated by a 1px rule in #E0DED8

---

### Top Zone Content Structure

- **Card title:** Barlow Semi Condensed 600, H4 scale, Ink #1A1A1A
- **Description:** Source Sans 3 400, Small scale, Ink #1A1A1A, 6px below title
- **"ON ROADMAP" label** (where applicable): Source Sans 3 600, 11px, letter-spaced, uppercase, Slate #5E6A71, 10px below description

---

### Card Content and Images

**Card 1 — The Kickoff**
- Title: The Kickoff
- Description: Walk into your first team meeting with a behavioral diagnosis, not just a hunch.
- No roadmap label
- Image: use_case_the-kickoff.png

**Card 2 — Idea Hunt**
- Title: Idea Hunt
- Description: Find the breakthrough idea that no one in your sector has tried yet.
- Roadmap label: ON ROADMAP
- Image: use_case_idea-hunt.png

**Card 3 — Intervention Critique**
- Title: Intervention Critique
- Description: Know what's missing from your design so your next steps have impact.
- Roadmap label: ON ROADMAP
- Image: use_case_intervention-critique.png

**Card 4 — Workshop Anchor**
- Title: Workshop Anchor
- Description: Keep your team's design decisions grounded in real-time behavioral science.
- Roadmap label: ON ROADMAP
- Image: use_case_workshop-anchor.png

**Card 5 — Funder-Ready Rationale**
- Title: Funder-Ready Rationale
- Description: Write the behavioral evidence section of your proposal: grounded, citable, complete.
- Roadmap label: ON ROADMAP
- Image: use_case_funder-ready-rationale.png

**Card 6 — More Coming**
- White background, border-radius 12px, 1px border in #E0DED8, border-style: dashed
- No bottom image zone — single zone, full card height, centered content
- Content: centered vertically and horizontally
  - "More coming" — Barlow Semi Condensed 600, H4 scale, Slate #5E6A71
  - "shaped by your input." — Source Sans 3 400, Small scale, Slate #5E6A71, 4px below
- No roadmap label

---

### Image Treatment

All illustration PNGs have transparent backgrounds — place directly on the #EDE9DE bottom zone background. Do not add any additional background treatment behind the images. Scale each image to fit within the bottom zone with 16px padding on all sides, maintaining aspect ratio, bottom-aligned.

---

### Responsive

- **Tablet (2-column):** cards flow naturally into 2-column grid, equal height per row maintained
- **Mobile (1-column):** cards stack full width, bottom image zone maintained on all cards

---

### Exclusions

No buttons or CTAs in this section.
