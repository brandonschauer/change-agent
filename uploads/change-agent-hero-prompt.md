# Change Agent — Hero Section Prompt
**Version:** 1.0
**Date:** May 11, 2026
**Owner:** Brandon Schauer / Rare Labs
**Use:** Paste into the Change Agent Marketing scaffold file in Claude Design

---

## Prompt

Build the Hero section for the Change Agent marketing site. Replace the Hero placeholder in the scaffold. Reference the Change Agent Design System for all visual decisions.

---

### Layout

- Full-width, Paper #F4F3EF background, min-height 80vh
- Content constrained to 1220px, centered
- Two-column layout on desktop (992px and above): headline left (~52% width), demo card right (~48% width)
- Single column on mobile: headline first, demo card below

---

### Headline (left column)

- Barlow Semi Condensed 700, Display scale
- "YOU KNOW BEHAVIORAL SCIENCE WORKS. NOW DESIGN INTERVENTIONS THAT" in Ink #1A1A1A
- "PROVE IT." in Labs Cyan #00AFD8
- No subhead or supporting copy below the headline

---

### Demo Card (right column)

- White background, border-radius 12px, 1px border in #E0DED8, generous padding
- Header bar: "Change Agent" in Barlow Semi Condensed 600, Rare Blue, small, left-aligned. Thin border-bottom in #E0DED8 separating it from the conversation area.

---

### Conversation Area — Initial / Collapsed State

**User message:** rounded pill shape, background #EAE8E0, Ink text, Source Sans 3 400, 15px, right-aligned.

Text:
> We run beach cleanups every month. People sign up enthusiastically, show up once, and we never see them again. We've tried reminder emails and free t-shirts. What are we missing?

**Agent response:** no bubble, left-aligned, Source Sans 3 400, 15px, Ink.

Text:
> That's a classic drop-off pattern. Before I pull research from the knowledge base, three quick things:
>
> 1. Who are your typical volunteers?
> 2. What do you think brings them back — or doesn't?
> 3. What are you working with (budget, staff, tools)?

Render the numbered list as an `<ol>` — do not render raw markdown syntax.

---

### Animation Sequence on Page Load

- User message types in character by character, 40ms per character, starting 400ms after page load
- Agent response fades in 600ms after the user message finishes typing, opacity 0 to 1 over 400ms

---

### EXPAND Button

- Appears below the agent response, left-aligned
- Subdominant style: outline pill button, Rare Blue border and text, no fill, Barlow Semi Condensed 700, 13px, letter-spaced
- Label: "EXPAND ▼"

**On click:**
- Hero section height increases by 25% smoothly over 300ms
- A fixed-height scrollable area (400px max-height) fades in below the initial exchange over 300ms
- Demo card automatically scrolls to the top of the expanded content after it fades in
- Button label changes to "COLLAPSE ▲"

**On collapse click:** reverses all of the above.

---

### Expanded Scrollable Area Content

**User message** (pill, right-aligned, #EAE8E0):
> Mostly adults in their 20s and 30s who live near the beach. They come for the social vibe and to feel like they're doing something. I don't think they come back because nothing happens between events — no community, no felt impact. Tight budget, two-person team, and we'd love patterns from outside the conservation world that work with what we already have (Instagram, email).

**Agent response** (no bubble, left-aligned):
> That's enough to work with. The diagnosis: their initial motivations — social connection and a sense of impact — aren't being reinforced between events.
>
> I searched the knowledge base and pulled 11 proven intervention patterns across three behavioral levers:
>
> - **Social Influence** — identity priming and community-building between events
> - **Information Framing** — visualizing personal and collective impact
> - **Group Incentives** — non-monetary recognition for collective achievement
>
> Here are three patterns, each drawn from a different sector and adapted to your constraints:
>
> ---
>
> **1. Impact Story Circles & Digital Badges** — *Social Influence*
>
> Inspired by online gaming communities and social movements. After each cleanup, host a 15-minute Story Circle on Instagram Live where 2–3 volunteers share a reflection. Volunteers who attend three cleanups earn a shareable Digital Steward Badge.
>
> *Why it works:* Storytelling builds shared identity; badges leverage social recognition — both well-evidenced drivers of sustained engagement.
>
> ---
>
> **2. Peer-to-Peer "Cleanup Crews"** — *Choice Architecture*
>
> Inspired by buddy systems in fitness and study groups. At sign-up, offer volunteers the option to be matched into a small crew based on a shared interest. Crews swap Instagram handles at the event and get a simple shared challenge.
>
> *Why it works:* Peer accountability and social defaults significantly increase return participation — proven across health and education research.
>
> ---
>
> **3. Personalized Impact Dashboard & Future Pledges** — *Information + Commitment*
>
> Inspired by personal finance apps and footprint calculators. A few days after each cleanup, DM each volunteer a personalized summary with a one-click pledge button to commit to the next event.
>
> *Why it works:* Personalized feedback boosts perceived efficacy; one-click commitments are a proven driver of follow-through.
>
> ---
>
> Want me to go deeper on any of these — or adapt them further?

---

### Markdown Rendering Rules

Render all agent responses with basic markdown:
- Bold via `<strong>`
- Bullet lists via `<ul>`
- Numbered lists via `<ol>`
- Horizontal rules via `<hr>`

Do not render raw asterisks, hyphens, or markdown syntax characters.

---

### Responsive

- Below 992px: single column, headline above demo card, demo card full width
- Below 576px: reduce headline font size one step, maintain demo card padding

---

### Exclusion

Do not include any CTA button outside the demo card.
