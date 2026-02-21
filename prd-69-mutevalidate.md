# PRD: MuteValidate — AI Idea-to-Revenue Validation Engine
### Product Requirements Document v1.0
**Status:** Deep Dive Complete | **Score:** 34/50 | **Date:** 2026-02-21

---

## 1. Executive Summary

**MuteValidate** is an AI-powered business idea validation engine that takes a raw concept and delivers a comprehensive validation package in ~30 minutes: market sizing, competitor analysis, revenue model, risk assessment, scored go/no-go recommendation, and a deployment-ready landing page.

Born from MuteLab's own sprint (79+ ideas validated in 48 hours), MuteValidate productizes our internal pipeline. The key differentiator vs. ChatGPT: **real-time web research integration** (Brave Search + live web scraping), auto-generated landing pages, and a calibrated scoring framework.

**Target:** Content-first launch → B2C SaaS → B2B incubator tool. Conservative ARR target: $224K by Year 2. Moderate: $636K.

---

## 2. Problem Statement

### 2.1 Who Has This Problem?

1. **First-time founders (B2C):** Have an idea, don't know if it's viable. Google for hours, ask friends, get biased feedback. Need structured validation before investing time/money.
2. **Serial entrepreneurs / consultants (B2C/B2B):** Evaluate multiple ideas quickly. Need efficient screening to pick winners.
3. **Incubators / accelerators (B2B):** Receive 100-1000+ applications per batch. Need to score and rank quickly with consistent criteria.
4. **Corporate innovation teams (B2B):** Must justify new project budgets with market data. Need professional validation reports.

### 2.2 Current Solutions & Gaps

| Solution | Gap |
|---|---|
| ChatGPT/Claude | No real-time web data, no structured output, no landing pages |
| ValidatorAI ($49/3 calls) | Mentor-style (slow), limited automation |
| VentureKit ($8/mo) | Business plan tool, not validation-focused |
| IdeaBuddy | Full planning software, overkill for quick validation |
| Manual research | Takes 10-40 hours per idea, inconsistent quality |

### 2.3 Our Unique Value

**"From raw idea to validated package in 30 minutes — with real data, not AI hallucinations."**

The 30-minute turnaround with live web research is the key differentiator. Nobody else combines: real-time competitor website scraping + market data + auto-generated landing page + calibrated scoring.

---

## 3. Product Specification

### 3.1 Core Features (MVP)

#### F1: Idea Input
- Simple form: business idea description (text), target market, founder background
- Optional: industry category, geography, budget range
- Example input: "AI-powered fortune telling app for Thai market combining astrology with data science"

#### F2: Validation Pipeline (Background Processing, ~30 min)
1. **Market Research:** Brave Search + web_fetch for real-time market data, trends, market sizing
2. **Competitor Analysis:** Auto-discover and analyze 5-10 competitors (features, pricing, traction)
3. **Revenue Model:** Suggest pricing strategies, TAM/SAM/SOM, unit economics
4. **Risk Assessment:** Identify top 5-10 risks with severity scoring
5. **Go/No-Go Score:** Calibrated 50-point scoring (Market Size, Build Feasibility, Revenue Potential, Founder Fit, Moat)
6. **Landing Page Generation:** Full HTML landing page ready to deploy

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

### 3.2 Tier Features

| Feature | Free | Pro ($29/mo) | Agency ($99/mo) | Enterprise ($499/mo) |
|---|---|---|---|---|
| Validations/month | 1 | 10 | 30 | Unlimited |
| Report depth | Basic (1-page) | Full (10+ pages) | Full + custom scoring | Full + custom + API |
| Landing page | ❌ | ✅ | ✅ White-label | ✅ White-label |
| Export PDF | ❌ | ✅ | ✅ | ✅ |
| API access | ❌ | ❌ | ✅ | ✅ |
| Bulk import (CSV) | ❌ | ❌ | ❌ | ✅ |
| Custom scoring framework | ❌ | ❌ | ❌ | ✅ |
| Priority processing | ❌ | ❌ | ✅ | ✅ |

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

**For aspiring founders and incubators** who need to quickly validate business ideas with real market data, **MuteValidate** is an AI validation engine that **delivers a complete validation package — including a live landing page — in 30 minutes.** Unlike ChatGPT (generic, no web data), ValidatorAI (slow, manual), or VentureKit (business plans, not validation), MuteValidate **combines real-time web research with calibrated scoring to give you an honest go/no-go answer backed by evidence, not opinions.**

---

## 10. Decision

**Recommendation: PROCEED — Content-First Approach**

Build MuteValidate as the engine behind a content play. Publish validation reports → build audience → convert to SaaS. This de-risks the moat problem and creates compounding value through SEO.

Expected outcome: $100-300K ARR lifestyle business (conservative), $300-636K ARR with strong execution, $1M+ ARR only with successful B2B pivot.

The meta-story is powerful: "We used AI to validate 79+ business ideas. Then we validated the validator. It works."
