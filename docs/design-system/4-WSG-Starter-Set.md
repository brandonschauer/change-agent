# Rare Design System — WSG Starter Set & Budgets

**Phase 0 · Decisions & specs only.** A focused set of Web Sustainability Guidelines (WSG 1.0, W3C) to hold ourselves to, plus concrete budgets for the Change Agent landing page. Criteria are cited at the WSG guideline level; Phase 1 can drill into individual success criteria as it implements.

## The starter criteria (11)

We deliberately keep this short and enforceable rather than adopting all 90+ guidelines. Each is chosen because a design system can *actually move it* — through tokens, shared components, and build discipline.

| # | WSG guideline | Why it's in the starter set |
|---|---|---|
| **2.4** | Design efficient and streamlined user journeys | Fewer steps and lighter flows are the highest-leverage sustainability move; bakes into how we scope pages. |
| **2.8** | Use a design system for interface consistency | This whole effort *is* this criterion — reuse over re-creation is inherently more efficient. |
| **2.9** | Optimize media to reduce resource use | Images/video dominate page weight; enforce responsive, modern-format, compressed media via shared components. |
| **2.10** | Ensure animation is proportionate and easy to control | Motion tokens must respect `prefers-reduced-motion` and avoid gratuitous, energy-hungry animation. |
| **2.11** | Use optimized web typography | Directly governs the font decisions: subset, limited weights, WOFF2, `font-display: swap`. |
| **3.2** | Minify and remove unused code | Ship minified CSS/JS; tree-shake; no dead tokens or unused component variants. |
| **3.5** | Treat third parties the same as first parties | Holds the Google Fonts CDN, analytics, and embeds to the same weight/privacy bar as our own code. |
| **3.7** | Defer the loading of non-critical resources | Lazy-load below-the-fold media, defer non-critical JS, prioritize LCP content. |
| **3.9** | Use media queries that support sustainability goals | Honor `prefers-reduced-motion`, `prefers-color-scheme`, and responsive image sources as first-class tokens. |
| **4.3** | Reduce data transfer with compression | Brotli/gzip on all text assets; a hosting/CDN checklist item. |
| **5.24** | Define performance, environmental, and human budgets | Formalizes the budgets below as a gate, not an aspiration. |

*(WSG 5.5 — calculate the environmental impact — is satisfied by the carbon target below. **WSG 4.1 — use sustainable hosting** — is treated as a launch gate and governs the hosting posture section below; add either to the table above if you want them stated as formal starter criteria.)*

## Applicability by grade

Every criterion applies to every grade, but the *pressure* differs. Note which bind **strongly** (a hard gate) vs. **reasonably** (a good-faith target) per grade:

- **Consumer (rare.org, WordPress)** — **strong** on the content/media/type/journey set (2.4, 2.9, 2.10, 2.11, 5.24, 5.5) because a content site's weight *is* images, fonts, and motion. **Reasonable** on the code-heavy criteria (3.2, 3.7, 4.3) — still expected, lower surface area.
- **Platform (Change Agent, Speak Sustainability)** — **strong** on the code/delivery set (3.2, 3.5, 3.7, 3.9, 4.3) because app bundles, third-party scripts, and deferred loading dominate an app's footprint. Note the **Change Agent landing page** is a content-led surface that happens to ship on the Platform stack, so on *that page* the payload set (2.9, 2.11, 5.24) binds **strongly** too — it is judged like a marketing page even though its grade is Platform.
- **Data (MUI)** — **strong** on 3.2, 3.7, 4.3 and especially disciplined dependency/bundle management (MUI is heavy); **strong** on 3.9 for reduced-motion/theme queries. **Reasonable** on 2.9/2.10 (less media, some chart animation to keep proportionate).

Rule of thumb: **content-led surfaces (rare.org, and the Change Agent landing page) are judged on payload; app surfaces (Platform apps and Data) are judged on code and delivery.** All grades share the type and design-system criteria (2.8, 2.11) unconditionally.

## Budgets for the Change Agent landing page

**Page-weight budget — target ≤ 500 KB, hard cap 1 MB** (compressed, first view, above-the-fold critical path). This puts the page well under the ~2 MB web median and in "excellent" territory.

| Asset class | Target (compressed) | Notes |
|---|---|---|
| HTML | ≤ 30 KB | Semantic, minimal. |
| CSS | ≤ 40 KB | Token-driven; critical CSS inlined. |
| JavaScript | ≤ 100 KB | Progressive enhancement; keep the framework runtime lean on a content-led page. |
| Web fonts | ≤ 100 KB | 2 families, subset WOFF2, limited weights (see Font spec). |
| Images | ≤ 230 KB | AVIF/WebP, responsive `srcset`, lazy-loaded below fold. |
| **Total first view** | **≤ 500 KB** | Hard cap 1 MB including all third parties. |

**Lighthouse target — ≥ 90 on every category, aiming 95+ on Performance.** Concretely: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95, with Core Web Vitals of **LCP < 2.5 s, CLS < 0.1, INP < 200 ms** on a mid-tier mobile profile. Treat a category dropping below 90 as a build failure to investigate.

**Carbon target — ≤ 0.19 g CO₂e per page view (Sustainable Web Design "A"), stretch ≤ 0.10 g ("A+").** Measured with the Website Carbon / SWD model on **green-verified hosting** (hosting on renewable energy is the largest single lever — see the posture below). The ≤ 500 KB weight budget is what makes the A rating achievable; the stretch A+ likely requires self-hosted subset fonts and aggressive media discipline.

## Hosting & green-hosting posture

Hosting is governed by **WSG 4.1 (use sustainable hosting)** and is the single biggest input to the carbon target, so we track green-hosting status **per surface** rather than as one blanket assumption. Because the grades ship on different stacks, each grade's hosting is assessed on its own.

**Change Agent landing page (Platform grade) — candidate analyzed: GitHub Pages (provisionally green).** A first-pass analysis (companion doc `4a-GitHub-Pages-Green-Hosting-Analysis.md`) finds GitHub Pages a strong low-carbon option for a static landing page. Its **static architecture** eliminates backend runtime and database compute and serves pre-built assets from a CDN edge — one of the most carbon-efficient delivery patterns available. It runs on Microsoft Azure, where Microsoft **matches 100% of data-center electricity with renewables** (via PPAs), reports an excellent **fleet PUE of 1.17**, and whose IP space means `*.github.io` deployments are **frequently recognized as green by the Green Web Foundation** dataset. Caveats to hold honestly: users get **no control over data-center region**, 100%-matched is annual/contractual rather than real-time carbon-free, and **Microsoft's absolute emissions rose ~25% YoY in FY25** on AI-infrastructure buildout. Note the brief's **default Platform stack is Vercel** — if the landing page ships there instead of GitHub Pages, Vercel's own green-hosting posture needs the same assessment. *Action:* pick the landing-page host as part of the full-stack review, then verify the chosen deployment resolves as green in the Green Web Foundation checker at launch.

**Change Agent app (full stack) — not yet evaluated.** The landing page can be static, but the Change Agent *application's* full hosting stack (Vercel plus any compute, database, APIs, or dynamic services) has not yet been assessed for green hosting. **Open** — to be reviewed as the app takes shape; dynamic compute changes the carbon math materially versus a static page.

**Speak Sustainability app — pending.** Once it exists, its hosting stack gets the same green-hosting review under WSG 4.1. **Open.**

---

**Flag for Brandon:** the Google Fonts CDN choice sits in slight tension with WSG 3.5 and nudges the carbon number up (extra origin, third-party transfer). It's fine for launch; revisit self-hosting when the licensed Univers web font arrives. On hosting, the **Change Agent landing page** has a strong provisional candidate (GitHub Pages — or Vercel if it ships on the Platform default; confirm the chosen host via the GWF checker at launch); the **Change Agent app full stack** and, later, the **Speak Sustainability app** stacks still need green-hosting assessments.
