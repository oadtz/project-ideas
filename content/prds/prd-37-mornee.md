# PRD: หมอหนี้ AI (MorNee AI) — AI Debt Coach on LINE

**Version:** 2.0 (Refreshed for Prototype Build)  
**Date:** February 22, 2026  
**Author:** Sun (AI CEO, MuteLab)  
**Status:** 2nd Round Runner Up — PRD Ready, Prototype-Actionable  
**Score:** 37/50

---

## 1. Executive Summary

**MorNee AI (หมอหนี้ AI)** is a LINE-based AI debt management coach for Thai consumers. It analyzes users' total debt picture, creates personalized payoff strategies, generates bank negotiation letters, and provides ongoing coaching through Thailand's dominant messaging platform.

**The opportunity:** Thailand's household debt stands at **฿16.35 trillion (86.4% of GDP)** — the highest in Asia. **28M+ Thais** carry consumer debt, yet **zero AI-powered debt counseling tools** exist in Thai. Government services (สายด่วนแก้หนี้ 1213, คลินิกแก้หนี้, Debt DIY) are overwhelmed, limited to business hours, and require in-person visits.

**The thesis:** An AI debt coach on LINE (54M Thai users) removes friction, shame, and wait times — the three biggest barriers to seeking debt help in Thailand.

---

## 2. Problem Statement

### The Crisis
- **฿16.35 trillion** in Thai household debt (Q1 2025, ธปท.)
- **86.4% of GDP** — peaked at 95.5% in Q2 2021, still critically high
- **28M+ Thais** with consumer debt (credit cards, personal loans, auto loans, mortgages)
- **NPL (non-performing loans):** ~2.65% system-wide (~฿490B), but special mention loans add another ~฿600B — real stressed debt is ~฿1.1T
- Average household debt: **฿144,871** (against average monthly income ~฿26,000)

### Why People Don't Get Help
1. **Shame (อาย):** Debt is taboo in Thai culture. People hide their situation.
2. **Access:** Government debt clinics require in-person visits during business hours. สายด่วนแก้หนี้ 1213 has long wait times.
3. **Complexity:** Most Thais don't understand interest calculations, snowball vs avalanche strategies, or their legal rights.
4. **Cost:** Private financial advisors charge ฿3,000-10,000+ per consultation (Pantip data).
5. **Trust:** People don't know who to trust — many "debt helpers" on social media are scams.

### Current Solutions & Their Gaps

| Solution | Type | Limitation |
|----------|------|------------|
| สายด่วนแก้หนี้ 1213 | Government hotline | Limited hours, long wait, human-only |
| คลินิกแก้หนี้ (ธปท.) | In-person clinic | Must visit, limited locations, appointment required |
| Debt DIY (ธปท.) | Web form | Basic calculator, not personalized, no follow-up |
| SAM 1443 | Asset management hotline | Only for NPL, not preventive |
| มูลนิธิเพื่อผู้บริโภค | Consumer foundation | Advocacy, not personalized planning |
| MoneyGuru | Comparison site | Product comparison, not debt coaching |
| iTAX | Tax app | Tax-focused, not debt management |
| Facebook groups (กลุ่มแก้หนี้) | Peer advice | Unstructured, unreliable, no personalization |
| Private financial advisors | Human service | ฿3,000-10,000+/session, intimidating |

**Key insight: ZERO AI-powered, personalized, always-available debt coaching exists in Thailand.**

---

## 3. Solution: MorNee AI

### Positioning
"หมอหนี้ AI — หมอที่ไม่เคยหลับ ไม่เคยตัดสิน"  
(AI Debt Doctor — The doctor who never sleeps, never judges)

### Why LINE?
- **54M Thai users** — near-universal adoption
- **Zero download friction** — just add friend
- **Rich messaging:** Images, Flex Messages, buttons, carousels
- **Thai-native UX** — people chat on LINE daily
- **LINE OA ecosystem** — marketing tools built-in

### Core Value Proposition
1. **Private & shame-free** — chat with AI, not humans
2. **24/7 availability** — not 9-5 government hours
3. **Personalized math** — not generic advice
4. **Actionable outputs** — negotiation letters, budget plans, weekly progress
5. **Free to start** — debt X-ray costs nothing

---

## 4. Target Users (Personas)

### Persona 1: "นิด" — Drowning in Credit Card Debt
- **Age:** 28, BKK office worker
- **Income:** ฿25,000/month
- **Debt:** 3 credit cards (total ฿180,000), paying minimums
- **Pain:** Doesn't understand compound interest, feels trapped, too ashamed to ask anyone
- **Need:** Someone to explain her situation clearly and give a concrete payoff plan

### Persona 2: "สมชาย" — Multiple Loans, Can't Keep Track
- **Age:** 42, provincial small business owner
- **Income:** ฿45,000/month (variable)
- **Debt:** Car loan + personal loan + credit card + informal loan = ฿850,000
- **Pain:** Juggling 4 creditors, missed payments, collection calls
- **Need:** Prioritization of which debt to pay first, help negotiating with banks

### Persona 3: "มะลิ" — Recently Divorced, Inherited Joint Debt
- **Age:** 35, single mom, government employee
- **Income:** ฿20,000/month
- **Debt:** Joint mortgage + personal loans = ฿1.2M
- **Pain:** Doesn't know her legal rights, needs to restructure but doesn't know how
- **Need:** Legal rights education, debt restructuring guidance, bank letter templates

---

## 5. MVP Features (Prototype Build Spec)

### 5.1 Debt X-Ray (เอ็กซ์เรย์หนี้) — FREE
**What user does:**
- Opens web app (or LINE OA in future) → sees friendly "ดูแผนปลดหนี้ฟรี" CTA
- Inputs each debt: creditor name, total owed, interest rate (%), monthly payment
- Can add 1-10 debts via simple form (repeat "add another debt" button)

**What AI generates (Debt Health Report):**
- Total debt amount
- Total interest paid per month/year
- Debt-to-income ratio (if income provided)
- Risk assessment (🟢 green / 🟡 yellow / 🔴 red)
- Comparison to Thai averages
- **Emotional hook:** "คุณจะปลดหนี้ได้ภายใน X ปี Y เดือน ถ้าทำตามแผนนี้"

**Visual output:**
- Debt payoff timeline chart (bar chart showing debt shrinking over months)
- Monthly savings vs. current path
- Pie chart of debt distribution by creditor

**CTA after free report:** "ดูแผนปลดหนี้แบบละเอียด" → collect LINE/email → upgrade to Premium

### 5.2 Personalized Payoff Plan — ฿199/mo (Premium)
- **Snowball method:** Pay smallest debt first (psychological wins)
- **Avalanche method:** Pay highest interest first (mathematical optimal)
- **Hybrid:** AI recommends based on user profile
- Detailed monthly payment schedule (which creditor, how much, when)
- Projected debt-free date with visual countdown
- Total interest saved vs minimum-only payments
- Weekly AI check-ins via LINE: "สัปดาห์นี้เป็นยังไงบ้าง? จ่ายหนี้ตามแผนไหม?"
- Spending alerts and budget recommendations
- Negotiation letter templates (basic — interest rate reduction request)

### 5.3 Pro Tier — ฿499/mo
- Everything in Premium
- Full creditor negotiation script library (debt restructuring, payment deferral, settlement)
- Legal rights education (what banks MUST do under ธปท. regulations)
- Step-by-step guide for คลินิกแก้หนี้ process
- Budget tracking dashboard (income vs expenses, categorized)
- "Where can you find extra ฿500/month?" AI suggestions
- Priority AI support with more detailed analysis

### 5.4 Progress Tracker + Motivation (All Paid Tiers)
- Weekly debt balance updates
- Milestones and celebrations ("You paid off your first card! 🎉")
- Community statistics ("1,234 users paid off ฿X this month")
- Motivational messages (behavioral psychology-based)

---

## 6. User Flow (Step-by-Step)

### Flow: "I have debt" → "I have a plan"

The experience should feel like talking to a caring, non-judgmental financial advisor — in Thai, with empathetic tone.

```
STEP 1: DISCOVERY
├── User sees ad/content: "คุณมีหนี้เท่าไหร่? ดูแผนปลดหนี้ฟรี"
├── Clicks → lands on web app (or adds LINE OA friend)
└── Sees: warm welcome message, "เริ่มเลย — ใช้เวลาแค่ 3 นาที"

STEP 2: DEBT INPUT (Web Form)
├── "หนี้ก้อนที่ 1"
│   ├── เจ้าหนี้คือใคร? [dropdown: บัตรเครดิต/สินเชื่อส่วนบุคคล/รถ/บ้าน/หนี้นอกระบบ/อื่นๆ]
│   ├── ยอดหนี้คงเหลือ? [฿ input]
│   ├── อัตราดอกเบี้ย? [% input, with "ไม่รู้" option → AI estimates]
│   └── จ่ายขั้นต่ำ/เดือน? [฿ input]
├── "+ เพิ่มหนี้อีกก้อน" button
├── Optional: รายได้ต่อเดือน? [฿ input]
└── "ดูผลวิเคราะห์ →" button

STEP 3: AI ANALYSIS (10-30 seconds)
├── Loading animation: "หมอหนี้กำลังวิเคราะห์..."
├── AI processes all debts
└── Generates Debt Health Report

STEP 4: FREE REPORT (Debt X-Ray)
├── 📊 Total debt: ฿XXX,XXX
├── 💸 Interest per month: ฿X,XXX (per year: ฿XX,XXX)
├── 📈 Debt-free date (current path): X years Y months
├── 📉 Debt-free date (optimized): X years Y months ← "ประหยัดได้ X ปี!"
├── 🎯 Chart: debt payoff timeline (current vs optimized)
├── 💬 Emotional message: "คุณจะปลดหนี้ได้ภายใน X ปี Y เดือน ถ้าทำตามแผนนี้"
└── CTA: "ดูแผนละเอียด + รับคำแนะนำรายสัปดาห์ → เริ่ม ฿199/เดือน"

STEP 5: PREMIUM CONVERSION
├── Show what premium includes (detailed plan, weekly check-ins, templates)
├── Collect LINE ID or email
├── Payment via PromptPay / credit card
└── Unlock full dashboard

STEP 6: ONGOING COACHING (Premium/Pro)
├── Weekly LINE message: "สัปดาห์นี้เป็นยังไงบ้าง?"
├── Monthly progress report with updated chart
├── Milestone celebrations
└── Negotiation templates when needed
```

### Tone Guidelines (Thai)
- **Empathetic:** "เข้าใจว่ามันเครียด แต่มีทางออกนะ"
- **Non-judgmental:** Never say "คุณใช้เงินเกินตัว" — say "มาดูกันว่าจะจัดการยังไงดี"
- **Encouraging:** "ทำได้แน่นอน ค่อยๆ ทำทีละขั้น"
- **Clear:** Use simple Thai, avoid jargon. Explain financial concepts in everyday language.
- **Actionable:** Every message should have a clear next step

---

## 7. Pricing

### Tier Structure (Updated)

| Tier | Price | Features | Target Conv% |
|------|-------|----------|-------------|
| **Free** | ฿0 | Debt X-ray (one-time), basic payoff timeline, debt-free date | 100% of users |
| **Premium** | ฿199/mo | Full personalized plan, weekly AI check-ins, spending alerts, basic negotiation templates | 3-5% conversion |
| **Pro** | ฿499/mo | All Premium + full creditor negotiation scripts, budget tracking dashboard, legal rights guide, priority support | 1-2% conversion |
| **Affiliate** | Commission | Debt consolidation, refinancing partner referrals | Revenue per qualified lead |

### Why ฿199/mo (not ฿99)
- ฿199 is still less than 1 Starbucks per week — affordable for target market
- Higher ARPU means viable with fewer conversions
- Positions as "real service" not "throwaway app"
- Still 95%+ cheaper than a financial advisor session (฿3,000-10,000)

### Revenue Math to ฿35M ARR ($1M)

**Blended ARPU calculation:**
- 70% of paying users on Premium (฿199) = ฿139.30
- 30% of paying users on Pro (฿499) = ฿149.70
- Blended ARPU = **฿289/mo per paying user**

**Path to ฿35M ARR ($1M):**
- Need: ฿35M ÷ 12 = ฿2.92M/mo
- At ฿289 ARPU = **~10,100 paying users**
- At 4% conversion rate = **~252,500 total users**
- **Timeline: Month 14-18** (achievable with viral debt content + B2B)

**Affiliate revenue (bonus):**
- 500 leads/month × ฿1,000/lead = ฿500K/mo additional
- Reduces paying user requirement significantly

---

## 8. Tech Stack (Prototype)

### MVP Architecture (Web App First, LINE Later)

```
┌─────────────────────────────────────────┐
│           Web App (Next.js / React)      │
│  Debt input form → AI analysis → Report  │
└──────────────────┬──────────────────────┘
                   │ API calls
┌──────────────────▼──────────────────────┐
│         Backend (Node.js / Python)       │
├──────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐ ┌─────────┐ │
│  │  AI Core │  │ Debt Calc │ │ Chart   │ │
│  │(GPT-4o-  │  │(Snowball/ │ │(Chart.js│ │
│  │ mini)    │  │ Avalanche)│ │/Recharts│ │
│  └──────────┘  └──────────┘ └─────────┘ │
├──────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐             │
│  │PostgreSQL│  │  Redis   │             │
│  │(user data│  │(sessions)│             │
│  │  + debts)│  │          │             │
│  └──────────┘  └──────────┘             │
└──────────────────────────────────────────┘
         ↓ (Phase 2)
┌─────────────────────────────────────────┐
│         LINE Messaging API Webhook       │
│    (Add conversational intake later)     │
└─────────────────────────────────────────┘
```

### Specific Tech Choices

| Component | Choice | Why |
|-----------|--------|-----|
| **Frontend** | Next.js (React) | Fast SSR, SEO for "แก้หนี้" keywords, easy deploy on Vercel |
| **Debt Input Form** | React Hook Form + Zod | Type-safe validation, multi-step form |
| **Chart Library** | Recharts or Chart.js | Debt payoff timeline visualization |
| **AI Model** | GPT-4o-mini (cheap) + GPT-4o (analysis) | ฿0.03/session routine, ฿0.52/session for reports |
| **Debt Calculator** | Custom TypeScript module | Deterministic math — NOT AI (snowball/avalanche algorithms) |
| **Database** | PostgreSQL (Supabase free tier) | User accounts, debt records, payment history |
| **Auth** | Supabase Auth or NextAuth | Email/LINE login |
| **Payments** | Stripe (cards) + PromptPay (manual/Omise) | Thai payment methods |
| **Hosting** | Vercel (frontend) + Oracle Cloud Free Tier (API) | ฿0 cost at start |
| **LINE Integration** | LINE Messaging API (Phase 2) | Reply messages are FREE |

### Key Technical Decisions
1. **Web app FIRST, LINE SECOND** — faster to prototype, easier to iterate, SEO benefit
2. **Debt calculations are DETERMINISTIC code** — not AI. AI is for conversation, reports, letters
3. **Multi-model AI strategy** — GPT-4o-mini for 90% of interactions, GPT-4o for detailed reports
4. **All financial data encrypted at rest** (AES-256)
5. **PDPA-compliant** — user can delete all data anytime

### Prototype Build Timeline

| Day | Task |
|-----|------|
| **Day 1-2** | Debt input form (multi-debt, Thai UI), snowball/avalanche calculator engine |
| **Day 3-4** | AI integration (GPT-4o-mini for report generation), chart visualization |
| **Day 5** | Debt Health Report page (free tier output), emotional messaging |
| **Day 6** | Payment integration (Stripe/PromptPay), premium gating |
| **Day 7** | Polish, deploy, landing page CTA, collect LINE/email |

---

## 9. Competitor Analysis

### Thai Competitors

| Feature | MorNee AI | สายด่วน 1213 | คลินิกแก้หนี้ | Debt DIY (ธปท.) | MoneyGuru |
|---------|-----------|-------------|-------------|----------------|-----------|
| 24/7 Available | ✅ | ❌ | ❌ | ✅ | ✅ |
| Personalized Plan | ✅ | ✅ (human) | ✅ (human) | ❌ | ❌ |
| AI-Powered | ✅ | ❌ | ❌ | ❌ | ❌ |
| LINE Native | ✅ (Phase 2) | ❌ | ❌ | ❌ | ❌ |
| Bank Letters | ✅ | ❌ | ❌ | ❌ | ❌ |
| Progress Tracking | ✅ | ❌ | ❌ | ❌ | ❌ |
| Free Entry | ✅ | ✅ | ✅ | ✅ | ✅ |
| No Shame/Private | ✅ | ❌ | ❌ | ✅ | N/A |

### International Benchmarks

| Company | Model | Revenue | Relevance |
|---------|-------|---------|-----------|
| **Cleo (UK)** | AI financial assistant | $100M+ ARR | Closest model — AI chat for finances |
| **Bright Money** | AI debt payoff | ~$50M ARR | Debt-specific, subscriptions |
| **Tally** | Credit card payoff | Shut down 2023 ⚠️ | Over-leveraged on credit line model |
| **YNAB** | Budgeting app | ~$100M ARR | Budget-focused, not debt-specific |

**Key lesson from Tally's failure:** Don't become a lender. Stay as advisor/coach. Zero credit risk.

---

## 10. Cost & ROI Analysis

### Monthly Burn Rate

| Phase | AI API | LINE | Server | Marketing | Total |
|-------|--------|------|--------|-----------|-------|
| Mo 1-3 (MVP) | ฿3K | ฿2K | ฿0 | ฿40K | **฿46K/mo** (~$1,300) |
| Mo 4-6 (Revenue) | ฿15K | ฿3K | ฿3.5K | ฿60K | **฿83K/mo** (~$2,400) |
| Mo 7-12 (Growth) | ฿80K | ฿15K | ฿15K | ฿100K | **฿230K/mo** (~$6,600) |

### Unit Economics (Updated for ฿199/฿499 pricing)

| Metric | Conservative | Moderate | Aggressive |
|--------|-------------|----------|------------|
| CAC (per free user) | ฿15 | ฿10 | ฿5 |
| Conversion Rate | 2% | 4% | 6% |
| Blended ARPU | ฿240/mo | ฿289/mo | ฿320/mo |
| AI cost per paying user | ฿8/mo | ฿6/mo | ฿5/mo |
| Gross Margin | 97% | 98% | 98% |
| LTV (avg months) | ฿960 (4mo) | ฿1,734 (6mo) | ฿2,560 (8mo) |
| Effective CAC | ฿750 | ฿250 | ฿83 |
| **LTV:CAC Ratio** | **1.28x ⚠️** | **6.94x ✅** | **30.8x 🚀** |

### 18-Month Scenarios

| Scenario | 18-mo Revenue | 18-mo Cost | Net | Verdict |
|----------|--------------|------------|-----|---------|
| Conservative | ฿2.8M | ฿2.4M | +฿400K | Marginal — needs B2B |
| **Moderate (Base)** | **฿12.5M** | **฿5.2M** | **+฿7.3M** | **Viable ✅** |
| Aggressive | ฿45M | ฿12M | +฿33M | $1M ARR by Mo 14 🚀 |

---

## 11. Success Metrics & Go/Kill Thresholds

### North Star Metric
**"Debt Plans Created"** — Total personalized debt payoff plans generated

### KPIs & Thresholds

| Metric | Week 1 | Month 1 | Month 3 | Month 6 |
|--------|--------|---------|---------|---------|
| Debt plans created | 100 | 500 | 3,000 | 10,000 |
| Unique users | 200 | 1,000 | 5,000 | 20,000 |
| Premium signups | — | 20 | 150 | 800 |
| Conversion rate | — | 2% | 3% | 4% |
| MRR | ฿0 | ฿4K | ฿43K | ฿231K |
| D7 return rate | 30%+ | 35%+ | 40%+ | 40%+ |

### Go/Continue/Kill Decision (Month 3)

| Signal | Threshold | Action |
|--------|-----------|--------|
| 🟢 **GO** | 3,000+ plans, 3%+ conversion, D7 >40% | Double down — add LINE integration, hire content creator |
| 🟡 **CONTINUE** | 1,000-3,000 plans, 1-3% conversion | Iterate — improve AI quality, A/B test pricing |
| 🔴 **KILL/PIVOT** | <1,000 plans OR <1% conversion | Pivot to B2B — sell AI engine to banks as customer retention tool |

---

## 12. Go-to-Market Plan (90 Days)

### Days 1-30: Build & Seed
- [x] Build web app MVP (debt input form + calculator + AI report)
- [ ] Create debt payoff timeline chart visualization
- [ ] Seed on 5 Pantip debt-related threads (organic, helpful answers with link)
- [ ] Create TikTok account — "หมอหนี้ AI" brand
- [ ] First 3 TikTok videos: "ดอกเบี้ยบัตรเครดิตกินเงินคุณเท่าไหร่?", "Snowball vs Avalanche — วิธีไหนดีกว่า?", "สิทธิ์ที่คุณมี เมื่อจ่ายหนี้ไม่ไหว"
- **Target: 500 users, 100 debt plans created**

### Days 30-60: Launch Free Tier Wide
- [ ] Launch Debt X-ray feature (free, unlimited)
- [ ] Facebook group seeding (กลุ่มแก้หนี้, กลุ่มเครดิตบูโร)
- [ ] Google Ads on "วิธีแก้หนี้", "ปลดหนี้", "รวมหนี้"
- [ ] Partner with 1-2 finance TikTokers for sponsored content
- **Target: 5,000 users, 200+ debt plans/week**

### Days 60-90: Monetize + Iterate
- [ ] Launch Premium tier (฿199/mo)
- [ ] Launch Pro tier (฿499/mo)
- [ ] Collect user feedback, iterate on AI prompts and UX
- [ ] Start B2B conversations with banks (Kasikorn, SCB, KTB)
- **Target: 10,000 users, 200+ paying**

### Key GTM Insight
Debt content is **inherently viral** because:
- It's emotionally charged (shame, fear, hope)
- It's relatable (28M+ people)
- "5 สิ่งที่ธนาคารไม่อยากให้คุณรู้" = clickbait gold
- People engage privately but share content publicly

---

## 13. Risks & Mitigations

### 🔴 High Risk

| Risk | Mitigation |
|------|------------|
| **Regulatory: ธปท. requires advisory license** | Position as "educational calculator tool." Clear disclaimers. Consult ธปท. proactively. |
| **Low conversion: Debtors can't/won't pay** | B2B revenue backup. ฿199 is ultra-low. Free tier must deliver real value. |
| **Structural churn: Success = user leaves** | Continuously acquire. Affiliate revenue doesn't depend on retention. |

### 🟡 Medium Risk

| Risk | Mitigation |
|------|------------|
| **Trust: Users won't share financial data** | Manual input only (no bank logins). Build trust through accurate calculations. |
| **AI hallucination on financial calcs** | Debt math is deterministic code, NOT AI. AI is only for conversation/letters. |
| **Competition: Banks launch own tools** | First-mover advantage. Banks are slow. Our advantage is neutrality. |

---

## 14. Final Verdict

### Strengths
- ✅ Massive market (28M+ people, ฿16.35T debt)
- ✅ Zero AI competition in Thailand
- ✅ LINE distribution (54M users)
- ✅ Low build cost (web app MVP in 7 days)
- ✅ Emotional/viral content potential
- ✅ B2B revenue path (banks want debt restructuring leads)

### Weaknesses
- ⚠️ Structural churn (success = user leaves)
- ⚠️ Target users have limited ability to pay
- ⚠️ Regulatory uncertainty
- ⚠️ No finance domain expertise on founding team

### Recommendation
**BUILD IT — 7-day prototype, validate with real users.**

MVP cost: ~฿0 (free tier infra). Marketing: ฿40K/mo for 3 months.  
If conversion hits 3%+ by Month 3, double down.  
If not, pivot to B2B (sell AI engine to banks as customer retention tool).

**Score: 37/50 — PASS ✅ (2nd Round Runner Up)**

---

*PRD v2.0 prepared by Sun, AI CEO of MuteLab*  
*February 22, 2026 — Refreshed for prototype build*
