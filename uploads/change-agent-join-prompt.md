# Change Agent — Join Section Prompt
**Version:** 1.0
**Date:** May 11, 2026
**Owner:** Brandon Schauer / Rare Labs
**Use:** Paste into the Change Agent Marketing scaffold file in Claude Design

---

## Prompt

Build the Join section for the Change Agent marketing site. Replace the Join placeholder in the scaffold. Reference the Change Agent Design System for all visual decisions.

---

### Section Container

- Background: Rare Blue #005BBB, full width
- Content constrained to 1220px, centered
- Padding: 80px 0

---

### Section Header

- "Join" — Barlow Semi Condensed 700, H2 scale, White, left-aligned
- "Change Agent is in development. Join the waitlist and be among the first practitioners to access the tool when we open the pilot." — Source Sans 3 400, Body scale, White, left-aligned, 8px below the headline

---

### Form Layout

- White background, border-radius 12px, padding 40px
- Max-width 680px, left-aligned (not centered)
- Row 1: Email Address field, full width
- Row 2: Role field (50% width) + Organization field (50% width), 16px gap between
- Row 3: Primary Use Case textarea, full width, 4 rows tall, placeholder: "e.g., Designing a behavior change program for sustainable fishing practices in coastal communities"
- Row 4: Submit button + privacy line, inline, vertically centered

---

### Field Styling (all fields)

- Source Sans 3 400, 15px, Ink #1A1A1A
- Label: Source Sans 3 600, 12px, uppercase, letter-spaced, White, displayed above each field
- Input background: White
- Border: 1px solid #C8C4B8, border-radius 6px
- Padding: 10px 14px
- Placeholder text: Slate #5E6A71
- Focus state: border color Rare Blue #005BBB, 2px, no outline
- Required fields marked with an asterisk after the label

---

### Field Labels and Placeholders

- **EMAIL ADDRESS \*** — placeholder: you@organization.org
- **ROLE \*** — placeholder: Your role
- **ORGANIZATION \*** — placeholder: Your organization
- **PRIMARY USE CASE — optional** — no asterisk; textarea placeholder: "e.g., Designing a behavior change program for sustainable fishing practices in coastal communities"

---

### Submit Row

- **Left:** "JOIN THE WAITLIST →" — solid pill button, Labs Cyan #00AFD8 fill, Ink #1A1A1A text, Barlow Semi Condensed 700, 14px, letter-spaced, padding 14px 28px
- **Right of button:** "We'll only use your email to notify you about access and updates." — Source Sans 3 400, 13px, White at 70% opacity, 16px left of button

---

### Responsive

- Below 768px: Role and Organization stack to full width, one per row
- Below 576px: form padding reduces to 24px, submit button full width, privacy line moves below button

---

### Exclusions

No decorative elements. Clean form on dark background.
