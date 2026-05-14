# Change Agent — How it Works Section Prompt
**Version:** 1.0
**Date:** May 11, 2026
**Owner:** Brandon Schauer / Rare Labs
**Use:** Paste into the Change Agent Marketing scaffold file in Claude Design

---

## Prompt

Build the How it Works section for the Change Agent marketing site. Replace the How it Works placeholder in the scaffold. Reference the Change Agent Design System for all visual decisions.

---

### Section Container

- Background: #EDE9DE, full width
- Content constrained to 1220px, centered
- Padding: 80px 0

---

### Section Header

- "How it Works" — Barlow Semi Condensed 700, H2 scale, Rare Blue #005BBB, left-aligned
- "You share your challenge, Change Agent does the work." — Source Sans 3 400, Body scale, Ink #1A1A1A, left-aligned, 8px below the headline

---

### Step Row Layout

- 4 equal columns on desktop (992px and above), 24px gap between columns
- 2 columns on tablet (576px–991px)
- 1 column on mobile (below 576px)
- No card background — steps sit directly on the #EDE9DE section background

---

### Each Step Structure (top to bottom)

**Step header row:** numbered circle + horizontal rule + chevron connector, all inline and vertically centered.

- **Numbered circle:** 32px diameter, Rare Blue #005BBB fill, White text, Barlow Semi Condensed 700, 14px
- **Horizontal rule:** flex-grows to fill remaining width, 1px, color #C8C4B8
- **Chevron:** › character or SVG chevron, Slate #5E6A71, 16px. Omit chevron on the fourth/final step.

**Badge:** below the step header row, 8px gap. Rounded pill, Rare Blue #005BBB background at 10% opacity, Rare Blue #005BBB text, Barlow Semi Condensed 700, 11px, letter-spaced, uppercase.

**Step title:** Barlow Semi Condensed 600, H4 scale, Ink #1A1A1A, 6px below badge.

**Step description:** Source Sans 3 400, Small scale, Ink #1A1A1A, 4px below title.

---

### Step Content

**Step 1**
- Badge: Diagnosis
- Title: Change Agent reads your situation
- Description: It identifies the behavioral drivers at play — what's really stopping people from acting.

**Step 2**
- Badge: Search
- Title: Then searches the evidence
- Description: Decades of cross-sector research you'd never find on your own.

**Step 3**
- Badge: Synthesis
- Title: Turns it into ideas
- Description: Structured intervention patterns, ready to use or critique.

**Step 4**
- Badge: Output
- Title: You walk away ready
- Description: A behavioral brief your team and funders can act on immediately.

---

### Responsive Behavior

- **Tablet (2-column):** steps 1–2 in row one, steps 3–4 in row two. Connector rules and chevrons appear only within each row, not between rows.
- **Mobile (1-column):** connector rules and chevrons hidden. Numbered circles remain. Steps stack vertically with 32px gap between each.

---

### Exclusions

No buttons, no CTAs, no card backgrounds. Clean and minimal.
