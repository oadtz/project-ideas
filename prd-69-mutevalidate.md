# PRD: MuteValidate — AI Launch Kit Engine
### Product Requirements Document v2.0 (Enhanced)
**Status:** Enhanced Deep Dive Complete | **Score:** 38/50 (↑ from 34) | **Date:** 2026-02-21

---

## 1. Executive Summary

**MuteValidate** is an AI-powered Launch Kit Engine that takes a raw business concept and delivers a **complete launch-ready package in ~30 minutes**: validation report, deployment-ready landing page, investor-grade pitch deck, shareable infographic, and scored go/no-go recommendation.

Born from MuteLab's own sprint (79+ ideas validated, 50+ landing pages auto-generated in 48 hours), MuteValidate productizes our proven pipeline. Enhanced beyond validation-only: the "Launch Kit" concept bundles **4 deliverables** that founders typically spend 2-4 weeks creating across multiple tools (Gamma, Carrd, Canva, VentureKit).

**Key differentiators vs. competition:**
- **Real-time web research** (Brave Search + live web scraping) — not static AI generation
- **4 deliverables in one pipeline** — nobody else bundles validation + landing page + pitch deck + infographic
- **30-minute turnaround** — hackathon-speed execution
- **Calibrated scoring framework** — battle-tested on 79+ ideas

**Target:** Hackathon/accelerator market → B2C SaaS → B2B agency white-label → Enterprise incubators
**Conservative ARR target:** $747K by Year 2 (up from $224K with validation-only). **Moderate:** $1.44M.

### v2.0 Enhancement Summary (2026-02-21)
| Aspect | v1.0 (Validation Only) | v2.0 (Launch Kit) |
|--------|----------------------|-------------------|
| Output | Validation report + landing page | Report + landing page + pitch deck + infographic |
| Score | 34/50 | 38/50 |
| Pricing | $5/validation, $29/mo | $79/kit, $49/mo |
| Target ARR | $224K-$636K | $747K-$1.44M |
| Killer use case | General founders | Hackathon teams, accelerator applicants |
| Moat | Weak (3/10) | Moderate (5/10) |

---

## 2. Problem Statement

### 2.1 Who Has This Problem?

1. **First-time founders (B2C):** Have an idea, don't know if it's viable. Google for hours, ask friends, get biased feedback. Need structured validation before investing time/money.
2. **Serial entrepreneurs / consultants (B2C/B2B):** Evaluate multiple ideas quickly. Need efficient screening to pick winners.
3. **Incubators / accelerators (B2B):** Receive 100-1000+ applications per batch. Need to score and rank quickly with consistent criteria.
4. **Corporate innovation teams (B2B):** Must justify new project budgets with market data. Need professional validation reports.

### 2.2 Current Solutions & Gaps (Enhanced Analysis)

| Solution | What It Does | Gap vs. Launch Kit |
|---|---|---|
| ChatGPT/Claude | Generic AI analysis | No web data, no landing page, no pitch deck, no infographic |
| ValidatorAI ($49/3 calls) | Mentor-style validation + Founder Signal Engine | Slow, no deliverables, no landing pages |
| **VentureKit ($8/mo)** | **Business plan + pitch deck + market research + financial forecast** | **Closest competitor — but no landing page, no infographic, no validation scoring, no real-time data. 750K users.** |
| Gamma.app (~$10/mo) | AI presentation generation | Deck only, no validation, no landing page |
| Beautiful.ai ($12/mo) | AI-powered presentations | Deck only, no research or validation |
| Carrd ($19/yr) | Simple one-page sites | Landing page only, no AI, no validation |
| Canva ($13/mo) | Design everything including infographics | Design tool, no validation, no research |
| IdeaBuddy | Full planning software | Overkill, questionnaire-based, slow |
| Manual research | DIY across 4+ tools | Takes 2-4 weeks, costs $50+/mo in tools |

**Key finding:** VentureKit is the #1 threat — they already bundle 3 of our 4 deliverables at just $8/mo with 750K users. However, they lack: (1) landing page generation, (2) real-time web scraping, (3) calibrated validation scoring, (4) infographic output, (5) the "30 min launch kit" speed positioning.

### 2.3 Our Unique Value

**"From raw idea to launch-ready kit in 30 minutes — landing page, pitch deck, infographic, and honest validation. All from one text description."**

The competitive advantage is the **BUNDLE** — no one combines all four deliverables with real-time web research in a single automated pipeline. Individual components have strong competitors; the integration is unique.

**Why the bundle matters:** A hackathon team at hour 36 doesn't need a business plan tool, a presentation tool, a landing page builder, AND a design tool. They need ONE tool that produces ALL their assets in one shot.

---

## 3. Product Specification

### 3.1 Core Features (MVP)

#### F1: Idea Input
- Simple form: business idea description (text), target market, founder background
- Optional: industry category, geography, budget range
- Example input: "AI-powered fortune telling app for Thai market combining astrology with data science"

#### F2: Launch Kit Pipeline (Background Processing, ~30 min)
1. **Market Research:** Brave Search + web_fetch for real-time market data, trends, market sizing
2. **Competitor Analysis:** Auto-discover and analyze 5-10 competitors (features, pricing, traction)
3. **Revenue Model:** Suggest pricing strategies, TAM/SAM/SOM, unit economics
4. **Risk Assessment:** Identify top 5-10 risks with severity scoring
5. **Go/No-Go Score:** Calibrated 50-point scoring (Market Potential, Problem Severity, Competition Gap, Build Feasibility, Our Advantage)
6. **Landing Page Generation:** Full HTML landing page ready to deploy (bilingual, responsive)
7. **Pitch Deck Generation:** 10-slide investor-grade presentation (PDF/PPTX) — problem, solution, market, competition, business model, traction, team, financials, ask, vision
8. **Infographic Generation:** Shareable visual summary — market size, competitor landscape, scoring radar, key metrics (PNG/PDF)

#### F3: Validation Report Dashboard
- Beautiful, interactive report with sections for each analysis area
- Score visualization (radar chart, comparison to benchmark)
- Exportable as PDF
- Shareable via public link

#### F4: Landing Page Output
- Auto-generated, deployment-ready HTML landing page
- Responsive design, professional quality
- One-click deploy to Vercel/Netlify
- Email capture form included

#### F5: User Dashboard
- History of validated ideas
- Compare ideas side-by-side
- Track progress on selected ideas

### 3.2 Tier Features (Enhanced with Launch Kit)

| Feature | Free | Starter ($29/kit) | Launch Kit ($79/kit) | Pro ($49/mo) | Agency ($149/mo) | Enterprise ($799/mo) |
|---|---|---|---|---|---|---|
| Kits/month | 1 report only | Pay-per-kit | Pay-per-kit | 5 | 15 | Unlimited |
| Validation report | Basic (1-page) | Full | Full | Full | Full + custom | Full + custom + API |
| Landing page | ❌ | ✅ | ✅ | ✅ | ✅ White-label | ✅ White-label |
| Pitch deck (PDF/PPTX) | ❌ | ❌ | ✅ | ✅ | ✅ White-label | ✅ White-label |
| Infographic (PNG/PDF) | ❌ | ❌ | ✅ | ✅ | ✅ Branded | ✅ Branded |
| Export PDF | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| API access | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Bulk import (CSV) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Custom scoring | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Priority processing | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |

### 3.3 Deferred Features (v2+)

- **Founder Signal Engine:** Aggregated analytics from all validations (à la ValidatorAI)
- **Idea marketplace:** Buy/sell validated idea packages
- **Continuous monitoring:** Track competitors and market changes post-validation
- **Team collaboration:** Invite team members to review/discuss validations
- **Integration:** Zapier, Notion, Slack webhooks for validation results

---

## 4. Technical Architecture

### 4.1 Stack

| Layer | Technology | Rationale |
|---|---|---|
| Frontend | Next.js 14 + Tailwind CSS | Fast, SEO-friendly, modern |
| Backend API | Next.js API routes + Edge Functions | Serverless, scalable |
| Database | Supabase (PostgreSQL) | Free tier, real-time, auth included |
| Auth | Supabase Auth or Clerk | Simple, social login support |
| Payments | Stripe | Industry standard |
| AI/LLM | Claude API (Anthropic) | Best quality for analysis tasks |
| Web Research | Brave Search API + custom web_fetch | Real-time market data |
| Queue | Inngest or Trigger.dev | Async job processing for validation pipeline |
| Hosting | Vercel | Free tier, auto-scaling |
| CDN/Storage | Vercel Blob or Cloudflare R2 | Landing page hosting |

### 4.2 Validation Pipeline Architecture

```
User Input → Job Queue → Pipeline Orchestrator
                              │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
         Market Research  Competitor     Revenue Model
         (Brave Search)   Analysis       Generator
         (web_fetch)      (web_fetch)    (LLM)
                │              │              │
                └──────────────┼──────────────┘
                              ▼
                     Risk Assessment (LLM)
                              │
                              ▼
                     Scoring Engine
                     (calibrated model)
                              │
                              ▼
                     Landing Page Generator
                     (LLM + template engine)
                              │
                              ▼
                     Report Compiler
                              │
                              ▼
                     Dashboard + Notification
```

### 4.3 Cost Per Validation (Detailed)

| Step | API Calls | Cost |
|---|---|---|
| Market research (15 Brave queries) | 15 | $0.045 |
| Web fetching (10 pages) | 10 | ~$0.01 |
| LLM - Market analysis | ~8K tokens in, ~4K out | $0.30-$0.50 |
| LLM - Competitor analysis | ~12K tokens in, ~6K out | $0.45-$0.75 |
| LLM - Revenue model | ~4K tokens in, ~3K out | $0.20-$0.35 |
| LLM - Risk assessment | ~6K tokens in, ~3K out | $0.25-$0.40 |
| LLM - Scoring | ~3K tokens in, ~1K out | $0.10-$0.15 |
| LLM - Landing page generation | ~3K tokens in, ~8K out | $0.30-$0.50 |
| LLM - Report compilation | ~10K tokens in, ~5K out | $0.40-$0.60 |
| **Total** | | **$2.06-$3.30** |

*Using Claude Sonnet for most steps, Opus for final compilation. Can reduce 30-50% using Haiku for simpler steps.*

---

## 5. Go-to-Market Strategy

### Phase 1: Content-First Launch (Months 1-3)
- Publish 50+ validation reports from our sprint as free content
- SEO-optimize each for "[idea] market size", "[idea] validation"
- Build email list of aspiring founders
- Soft-launch MuteValidate with free tier (1 validation/month)
- **Goal:** 5,000 email subscribers, 500 free users

### Phase 2: Product Launch (Months 3-6)
- Product Hunt launch with "79+ ideas in 48 hours" narrative
- Launch Pro tier ($29/mo) and credit system ($5/validation)
- IndieHackers, Hacker News, Reddit marketing push
- Twitter/X build-in-public content
- **Goal:** 200 Pro subscribers, $5,800 MRR

### Phase 3: B2B Expansion (Months 6-12)
- Develop Enterprise features (bulk import, custom scoring, API)
- Pilot with 2-3 Thai incubators (NIA, True Digital Park)
- Outbound to Techstars, 500 Global programs
- Launch Agency tier for consultants
- **Goal:** 500 Pro + 50 Agency + 5 Enterprise, $20K MRR

### Phase 4: Scale (Months 12-18)
- Founder Signal Engine (aggregated analytics)
- International expansion (multi-language)
- Partnership with startup communities
- **Goal:** $50K+ MRR

---

## 6. Success Metrics

### 6.1 North Star Metric
**Monthly validations completed** — indicates both acquisition and engagement.

### 6.2 KPIs

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Total signups | 2,000 | 5,000 | 15,000 |
| Paying users | 50 | 200 | 500 |
| MRR | $1,500 | $6,000 | $25,000 |
| Validations/month | 500 | 2,000 | 8,000 |
| Monthly churn (Pro) | <20% | <15% | <12% |
| NPS | 30+ | 40+ | 50+ |
| SEO organic traffic | 1K/mo | 5K/mo | 20K/mo |

---

## 7. Risk Mitigation

| Risk | Severity | Mitigation |
|---|---|---|
| ChatGPT commoditization | HIGH | Focus on unique features (web research, landing pages), build content moat |
| High churn (one-and-done usage) | HIGH | Add ongoing value: monitoring, updates, community, newsletter |
| LLM hallucination in reports | MEDIUM | Web research ground-truths data; add disclaimers; human review option |
| Shallow moat | HIGH | Build Founder Signal Engine for network effects; content/SEO compounds |
| Low B2B conversion | MEDIUM | Start content-first to de-risk; B2B is Phase 3, not Phase 1 |
| Cost overruns at scale | LOW | Usage caps per tier; cheaper models for simpler steps; caching |

---

## 8. Budget & Timeline

### 8.1 MVP Development Budget

| Item | Cost |
|---|---|
| Development (4-6 weeks, AI-assisted) | $5,500-$8,000 |
| Design (Tailwind templates + AI) | $500-$1,000 |
| Infrastructure setup | $200-$500 |
| Domain + branding | $100-$200 |
| **Total MVP** | **$6,300-$9,700** |

### 8.2 Monthly Operating Budget (Post-Launch)

| Item | Month 1-3 | Month 4-6 | Month 7-12 |
|---|---|---|---|
| Infrastructure | $200 | $500 | $1,500 |
| LLM APIs | $300 | $800 | $3,000 |
| Marketing | $500 | $1,500 | $2,500 |
| **Total** | **$1,000** | **$2,800** | **$7,000** |

### 8.3 Timeline

| Week | Milestone |
|---|---|
| 1-2 | API backend + validation pipeline |
| 3-4 | Frontend dashboard + auth + payments |
| 5 | Landing page generator + PDF export |
| 6 | Testing, QA, content preparation |
| 7 | Soft launch (free tier) + content marketing |
| 8-10 | Product Hunt launch + Pro tier |
| 12+ | Agency/Enterprise tiers based on demand |

---

## 9. Competitive Positioning Statement

**For hackathon teams, accelerator applicants, and startup founders** who need to go from raw idea to launch-ready assets under time pressure, **MuteValidate** is an AI Launch Kit Engine that **delivers a complete package — validation report, landing page, pitch deck, and infographic — in 30 minutes.** Unlike VentureKit (no landing pages, no real-time data), Gamma (presentations only), or ChatGPT (no structured deliverables), MuteValidate is **the only tool that produces ALL the assets you need to present, pitch, and validate — from a single text description.**

---

## 10. Decision (Updated v2.0)

**Recommendation: PROCEED — Hackathon/Event Channel First**

The enhanced "Launch Kit" concept is meaningfully stronger than validation-only (34 → 38/50). The combination of 4 deliverables creates a unique product category that no competitor currently occupies.

**Priority build order:**
1. Validation report + Landing page (PROVEN — we have this now)
2. Pitch deck generation (Week 1-2 with reveal.js/Puppeteer)
3. Infographic generation (Week 3-4 with HTML templates)
4. User dashboard + payments (Week 5-6)

**Priority go-to-market:**
1. Hackathon/Startup Weekend partnerships (fastest channel, highest urgency buyers)
2. Content marketing with published launch kits (SEO + social proof)
3. Accelerator applicant marketing (recurring need)
4. Agency white-label (B2B revenue)

**Expected outcome:** $747K ARR conservative (Y2), $1.44M moderate. Path to $1M is realistic with combined hackathon + B2B strategy.

**Honest caveat:** VentureKit at $8/mo with 750K users could add landing pages and infographics. Our window of opportunity is 6-12 months. Move fast, build brand, own the "Launch Kit" category before incumbents notice.

The meta-story is even more powerful now: "We used AI to validate 79+ business ideas AND generate 50+ landing pages in 48 hours. Then we productized the whole pipeline."
