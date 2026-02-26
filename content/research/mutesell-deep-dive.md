# Deep Dive Research: MuteSell (#74) — AI Outbound Sales Agent for Thai B2B

**Research Date:** February 21, 2026  
**Analyst:** Sun (AI CEO, MuteLab)  
**Verdict:** PROCEED WITH CAUTION — Score adjusted to 33/50 (down from 35)  
**Critical Finding:** LINE does NOT support cold outbound messaging — fundamental model pivot required

---

## Executive Summary

MuteSell proposes an AI-powered outbound sales agent (AI SDR) for Thai B2B, leveraging LINE, email, and LinkedIn. The global AI SDR category is validated ($1B+), and the Thai localization gap is real. However, this deep dive reveals a **critical structural problem**: LINE's API architecture fundamentally prevents cold outbound messaging. You can only push-message users who have already added your LINE Official Account as a friend. This isn't a workaround issue — it's how LINE is built.

This means MuteSell's core thesis ("cold outbound via LINE where Thai B2B happens") is **partially broken**. The business is still viable, but the model must pivot to: email-first cold outreach → LINE for warm follow-up/nurturing. This changes the competitive dynamics significantly.

---

## 1. AI SDR Market Deep Dive

### 1.1 Key Players & Funding

| Company | Funding | Pricing | Customers | Key Features |
|---------|---------|---------|-----------|--------------|
| **11x.ai (Alice)** | $50M+ (valued ~$350M+) | Enterprise, est. $2K-5K+/mo | Enterprise clients | AI SDR + AI Phone Agent (Julian), email + calls, 24/7 prospecting, CRM sync. Claims >$100M revenue generated for customers. +30% meetings/AE, +80% meeting-to-opportunity. |
| **Artisan (Ava)** | $12M+ (YC-backed) | Custom, volume-based | Unknown (testimonials suggest dozens) | AI BDR, 300M+ B2B contacts database, email + LinkedIn, personalization waterfall, 10+ tone options. E-commerce & local business data. |
| **AiSDR** | Undisclosed (bootstrapped?) | $900-2,500/mo (quarterly) | 250+ companies | 1,200-4,500 messages/mo, ~3-11 meetings/mo. Email + LinkedIn. 11.8% positive response rate, 26.6% email reply rate, 78.95% LinkedIn connection rate. HubSpot/Salesforce integration. |
| **Instantly.ai** | Unknown | $37-97/mo | Unknown (large user base) | Email-only automation. Unlimited email accounts + warmup. More DIY tool than AI agent. |
| **Regie.ai** | $45M+ | Custom/enterprise | Enterprise | 220M+ contacts, AI dialer, 100+ intent signals, CRM integration. Full-stack AI prospecting platform. |

### 1.2 Is This Proven or Hype?

**Verdict: PROVEN but EARLY.**

- 11x at $350M+ valuation with real enterprise customers (Gupshup, KMS Healthcare) shows enterprise willingness to pay
- AiSDR's 250+ companies at $900-2,500/mo = estimated $2.7-7.5M ARR range
- AiSDR's reported metrics (11.8% positive response rate, 26.6% email reply rate) are strong for cold outreach
- The category is growing rapidly — every major sales tool (Outreach, Salesloft) is adding AI SDR features
- Key risk: high churn. Cold outreach tools often see 3-6 month customer lifecycles

### 1.3 How AI SDRs Actually Work

1. **Data sourcing:** Pull from databases (300M+ contacts for Artisan, ZoomInfo, Apollo, LinkedIn Sales Navigator)
2. **ICP matching:** AI scores leads against ideal customer profile
3. **Research:** Scrape company news, LinkedIn activity, social posts, funding data, tech stack
4. **Personalization:** LLM writes unique message per prospect using research data
5. **Multi-touch sequences:** Email → LinkedIn connection → Follow-up email → LinkedIn message
6. **Reply handling:** AI detects interest, handles objections, books meetings
7. **CRM sync:** Logs all activity to HubSpot/Salesforce

### 1.4 Failed/Struggling AI SDR Startups

- Several small players have pivoted or shut down (exact names hard to verify)
- Common failure patterns:
  - **Email deliverability problems** — mass cold email gets flagged as spam
  - **Low quality personalization** — AI messages still feel templated
  - **High churn** — customers try for 1-2 quarters, don't see ROI, cancel
  - **Undifferentiated** — too many "we use AI to write emails" startups
- Key lesson: **the winners differentiate on data quality and deliverability, not just AI writing**

---

## 2. Thai B2B Sales Landscape

### 2.1 How Thai SMEs Currently Do Sales

Thai B2B sales is fundamentally **relationship-driven**. The sales process:

1. **Referrals/Word-of-mouth** (60-70% of new business) — "My friend knows someone at Company X"
2. **LINE chat** (primary communication channel) — Once introduced, all business communication moves to LINE
3. **Trade shows/events** — Physical networking is huge (ASEAN trade shows, industry expos)
4. **Walk-in sales** — Still common for manufacturing, F&B supplies, office equipment
5. **Facebook/Instagram** — Used for lead generation, especially for SMEs
6. **Cold calling** — Exists but poorly regarded, low success rate
7. **Cold email** — Very rare in Thai B2B. Most Thai business people don't check email regularly for sales pitches

**Critical insight: Cold outbound is culturally difficult in Thailand.** Thai business culture values "pen kon roo-jak" (being someone who knows someone). Trust comes through introductions, not cold pitches. A cold LINE message from a stranger would likely be blocked immediately.

### 2.2 LINE Official Account for B2B

**LINE Thailand stats:**
- 53M+ LINE users in Thailand (nearly entire adult population)
- LINE Official Accounts are widely used by businesses — primarily for **customer communication, not prospecting**
- Typical B2B use: customer support, order updates, post-sale communication
- LINE OA is used AFTER a relationship is established, not to create new ones

**LINE OA Pricing (Thailand, estimated from Japan pricing structure):**
- **Free plan:** ~200-500 push messages/month (reply messages are free and unlimited)
- **Light plan:** ~5,000 push messages/month, ~฿1,500-2,000/month
- **Standard plan:** ~30,000+ push messages/month, ~฿5,000-8,000/month, additional messages available

### 2.3 CRM & Sales Tools Adoption

- **Salesforce Thailand:** Active presence. Agentforce World Tour Bangkok 2026 planned. Used by large enterprises and some mid-market
- **HubSpot Thailand:** Growing, primarily mid-market. Estimated few thousand Thai businesses
- **Thai CRM alternatives:** R-CRM (Readyplanet), Wisible — local players with lower pricing
- **Overall adoption:** LOW. Most Thai SMEs use LINE chats + Excel/Google Sheets as their "CRM"
- **Willingness to pay for sales tools:** LOW for most SMEs. ฿5,000-10,000/mo is the ceiling for most. Only mid-market+ companies pay ฿15K+

### 2.4 LinkedIn in Thailand

- **LinkedIn Thailand users:** ~5-6M accounts
- **Active daily usage:** Very low compared to LINE or Facebook
- **B2B relevance:** Meaningful only for multinational companies, tech companies, and English-speaking business community
- **For Thai SME sales:** Nearly irrelevant. Thai SME owners don't check LinkedIn regularly
- **Verdict:** LinkedIn should be a "nice-to-have" channel, not core

---

## 3. 🚨 LINE API Deep Dive — CRITICAL FINDING

### 3.1 The Cold Outbound Problem

**This is the most important finding of this deep dive.**

LINE's Messaging API has a fundamental architectural constraint:

> **You can only send push messages (outbound) to users who have ALREADY added your LINE Official Account as a friend.**

This means:
- ❌ You CANNOT cold-message strangers on LINE
- ❌ You CANNOT send unsolicited messages to LINE users who haven't friended your OA
- ❌ There is NO way to "find" a LINE user by phone number or email and message them
- ✅ You CAN send messages to users who added your LINE OA as a friend
- ✅ Reply messages (responding to user messages) are unlimited and free
- ✅ Push messages to friends count against your monthly quota

### 3.2 Message Types & Counting

| Type | Can Cold Outreach? | Counts Against Quota? |
|------|-------------------|----------------------|
| Push message | NO — friend required | YES |
| Multicast | NO — friends required | YES |
| Broadcast | NO — to all friends only | YES |
| Narrowcast | NO — to segmented friends | YES |
| Reply message | NO — response only | NO (FREE) |

### 3.3 Anti-Spam Rules

From LINE's development guidelines:
- **Don't send mass messages to the same user** — explicitly prohibited
- **Don't send mass requests** — rate limits enforced
- **Don't try to identify user attributes** — prohibited
- Violations can result in account suspension

### 3.4 What This Means for MuteSell

**The original thesis ("AI cold outbound via LINE") is fundamentally broken.**

LINE cannot be used for cold prospecting. Period. The model must pivot:

1. **Email becomes the cold outreach channel** (same as global AI SDRs)
2. **LINE becomes the warm engagement channel** — after prospect adds your LINE OA via QR code, link, or website widget
3. **LINE is for nurturing, not prospecting** — follow-up conversations, meeting booking, relationship management

This significantly reduces MuteSell's differentiation from global AI SDRs. If cold outreach is email-based, then it's "AiSDR but with Thai language" — still valuable but not as defensible.

### 3.5 LINE OA Cost Tiers (Thailand)

Based on Japan pricing structure (Thailand likely similar or cheaper):

| Plan | Monthly Fee | Free Messages | Additional Messages |
|------|------------|---------------|-------------------|
| Communication (Free) | ฿0 | ~200-500 | Not available |
| Light | ~฿1,500-2,000 | ~5,000 | Not available |
| Standard | ~฿5,000-8,000 | ~30,000 | ~฿0.1-0.3/msg |

---

## 4. Competition Analysis (Thailand Specific)

### 4.1 Thai-Language Sales Tools

| Tool | Type | Outbound? | AI? |
|------|------|-----------|-----|
| AIYA | LINE chatbot builder | NO — inbound only | Basic NLP |
| Chatchamp | LINE chatbot | NO — inbound only | Rule-based |
| R-CRM (Readyplanet) | Thai CRM | NO — CRM only | No |
| Wisible | Thai CRM | NO — CRM only | Basic |
| MyCustomer (LINE) | CRM by LINE itself | NO — CRM only | No |
| Zendesk Thailand | Support tool | NO — support only | Basic AI |

**Finding: ZERO Thai-language AI outbound sales tools exist.** All Thai chatbot/CRM tools are inbound/support focused.

### 4.2 Global Players in Thailand

- **Salesforce:** Active, but enterprise-only. Thai SMEs can't afford it
- **HubSpot:** Growing mid-market presence. No Thai AI SDR features
- **Zoho:** Available in Thailand, low adoption
- **None of the AI SDR startups (11x, Artisan, AiSDR) have any SEA presence**

### 4.3 Realistic Threat Assessment

- **11x/Artisan entering Thailand:** Very unlikely in 12-24 months. They're focused on US/EU enterprise
- **Local Thai startup copying this:** Possible but takes 6-12 months to build
- **LINE building their own CRM/sales tool:** MyCustomer exists but very basic, not AI-powered

---

## 5. Technical Feasibility

### 5.1 AI Thai Business Writing Quality

- **GPT-4/Claude:** Good at Thai business writing with proper prompting. Can handle formal (ครับ/ค่ะ), semi-formal, and casual registers
- **Key challenge:** Thai business communication has implicit social hierarchy cues (junior-senior, client-vendor). AI needs to get the register right
- **Verdict:** FEASIBLE with good prompt engineering and Thai native review. Quality is 7/10 — good enough for email, needs improvement for LINE chat which is more conversational

### 5.2 Multi-Channel Orchestration

| Channel | Feasibility | Notes |
|---------|------------|-------|
| Email | HIGH | Standard SMTP/API. SendGrid, Mailgun all work. Thai companies DO have email |
| LINE OA | MEDIUM | API works well, but opt-in required. Good for warm engagement |
| LinkedIn | MEDIUM | No official API for outreach. Requires browser automation (risk of ban) or LinkedIn Sales Navigator API (expensive) |

### 5.3 Thai B2B Lead Data Sources

| Source | Data Quality | Accessibility |
|--------|-------------|---------------|
| DBD (กรมพัฒนาธุรกิจการค้า) | Company registration data, financials | Public, scrapeable |
| LinkedIn Thailand | Professional profiles, ~5-6M | API limited, scraping risky |
| Thai business directories | Yellow Pages, ThaiSME | Moderate quality, scrapeable |
| Industry association lists | High quality, specific | Requires partnerships |
| Facebook business pages | Common for Thai SMEs | Graph API limited |
| Thai SEC (SET/mai) | Listed company data | Public |
| Google Maps | Local businesses | API available |

**Key gap:** Thailand lacks a ZoomInfo/Apollo equivalent. Building a Thai B2B contact database is a significant undertaking and could itself be a moat.

### 5.4 MVP Scope — 4 Weeks

A 4-week MVP is TIGHT but possible if scoped aggressively:

**Week 1:** Thai prospect research engine (scrape DBD + LinkedIn, basic enrichment)  
**Week 2:** AI Thai message generator (email copy, prompt engineering, templates)  
**Week 3:** Email sending infrastructure (SendGrid, domain warmup, sequence engine)  
**Week 4:** Dashboard (campaign management, basic analytics, reply inbox)

**NOT in 4-week MVP:** LINE OA integration, LinkedIn automation, CRM sync, meeting booking, advanced analytics

**Realistic MVP timeline:** 6-8 weeks for email-only. 12 weeks for email + LINE warm engagement.

---

## 6. Distribution Strategy

### 6.1 Acquiring First 50 Customers

**Challenge:** B2B SaaS sales in Thailand is hard. Long cycles (2-4 months), relationship-driven, low trust in new tools.

**Strategy (in priority order):**

1. **Dog-fooding (Week 1):** Use MuteSell to sell MuteSell. This proves the product works and generates case study data
2. **Facebook Groups (Month 1-2):** Thai B2B communities are on Facebook, not LinkedIn
   - SME Thailand groups (100K+ members)
   - ขายของออนไลน์ groups
   - Thai startup communities
   - Industry-specific groups (manufacturing, F&B, real estate)
3. **Content Marketing (Ongoing):** Thai-language blog/video content about B2B sales techniques
4. **Partnerships (Month 2-4):**
   - Thai digital marketing agencies (who already sell to B2B clients)
   - LINE Certified Coaches (LINE's official partner program)
   - CRM consultants
5. **Events (Month 3-6):**
   - Techsauce Global Summit
   - LINE Thailand partner events
   - Industry trade shows
6. **Referral program:** Give customers a month free for each referral

### 6.2 Thai B2B Communities

- **Facebook groups:** Primary discovery channel for Thai SMEs
- **LINE groups:** Private, invitation-only. Hard to access but high-value
- **สมาคมต่างๆ (Industry associations):** Manufacturing, construction, food & beverage
- **หอการค้า (Chamber of Commerce):** Provincial and national levels
- **TMA (Thailand Management Association):** Professional networking

---

## 7. Risks & Mitigations

### 7.1 Risk Matrix

| Risk | Severity | Probability | Impact | Mitigation |
|------|----------|-------------|--------|------------|
| **LINE can't do cold outbound** | 🔴 CRITICAL | 100% (confirmed) | Breaks core thesis | Pivot: email-first cold, LINE for warm. Reframe value prop |
| **Thai SME price sensitivity** | 🟡 HIGH | 80% | ฿15K/mo too high for most SMEs | Introduce ฿4,900/mo starter tier. Focus on mid-market+ |
| **Complex platform build** | 🟡 HIGH | 70% | 6+ months to full product | Aggressive MVP scoping. Email-only first |
| **Thai culture vs cold outreach** | 🟡 HIGH | 60% | Low response rates | Emphasize "warm intro" messaging style, not hard sell |
| **No B2B sales background** | 🟡 MEDIUM | 50% | Wrong product decisions | Hire Thai sales advisor. Shadow real SDRs |
| **Global players localize** | 🟢 LOW | 20% in 12mo | Competition | Move fast, build local data moat |
| **Email deliverability** | 🟡 MEDIUM | 50% | Messages go to spam | Proper domain warmup, start low volume |
| **B2B sales cycle length** | 🟡 HIGH | 90% | 2-4 month cycles | Annual/quarterly contracts, strong onboarding |

### 7.2 The Cultural Question: Will Cold Outreach Work in Thailand?

**Short answer: Partially, with the right approach.**

Thai business culture is relationship-first. Pure American-style cold email blasting will fail. But:

- **Warm-cold hybrid works:** AI researches prospect deeply, references mutual connections, industry events, or recent news. Message feels like a warm intro, not spam
- **LINE for trust building:** Once prospect engages, move to LINE chat. This feels natural and Thai
- **Value-first approach:** Share useful content (industry reports, benchmarks) before pitching
- **Thai language and formality:** Proper สวัสดีครับ/ค่ะ, appropriate ภาษาสุภาพ makes cold outreach feel more respectful
- **Realistic response rates:** Expect 3-5% for Thai cold email (vs 10-15% globally) due to cultural resistance to cold outreach

---

## 8. Cost & ROI Analysis

### 8.1 Development Costs

| Phase | Duration | Cost |
|-------|----------|------|
| MVP (email-only AI SDR) | 6-8 weeks | ฿0 (founder builds) |
| V1 (email + LINE warm) | 12 weeks | ฿0 (founder builds) |
| V2 (full platform + LinkedIn) | 6 months | ฿150K-300K (contract help) |
| **Total to V2** | **6 months** | **฿150K-300K** |

### 8.2 Monthly Operating Costs

| Item | Cost/Month | Notes |
|------|-----------|-------|
| LLM inference (Claude/GPT) | ฿5,000-15,000 | Depends on volume |
| Email infrastructure (SendGrid) | ฿1,500-5,000 | Scales with volume |
| LINE OA (Standard) | ฿5,000-8,000 | Per customer's OA |
| Hosting (Railway/Vercel + Supabase) | ฿2,000-5,000 | |
| Domain/DNS for email warmup | ฿1,000-3,000 | Multiple domains needed |
| Data enrichment APIs | ฿3,000-8,000 | Clearbit, LinkedIn proxies |
| **Total operating** | **฿17,500-44,000/mo** | **~$550-1,375/mo** |

### 8.3 Revenue Scenarios (18-month projection)

**Revised pricing (lower tier added after LINE finding):**

| Tier | Price | Target |
|------|-------|--------|
| Starter | ฿4,900/mo ($155) | Small SMEs, 500 emails/mo |
| Growth | ฿14,900/mo ($465) | Mid-market, 2,000 messages/mo, LINE + email |
| Enterprise | ฿39,900/mo ($1,250) | Large companies, unlimited, custom |

**Conservative Scenario:**
- Month 6: 15 customers (avg ฿8,000/mo) = ฿120K MRR
- Month 12: 45 customers (avg ฿10,000/mo) = ฿450K MRR
- Month 18: 80 customers (avg ฿12,000/mo) = ฿960K MRR
- **18-month cumulative revenue: ~฿8.1M (~$253K)**
- **18-month cumulative costs: ~฿3.5M**
- **Net: ~฿4.6M ($144K)**

**Moderate Scenario:**
- Month 6: 30 customers (avg ฿10,000/mo) = ฿300K MRR
- Month 12: 100 customers (avg ฿12,000/mo) = ฿1.2M MRR
- Month 18: 180 customers (avg ฿15,000/mo) = ฿2.7M MRR ($1M ARR)
- **18-month cumulative revenue: ~฿19.8M (~$619K)**
- **18-month cumulative costs: ~฿5M**
- **Net: ~฿14.8M ($463K)**

**Aggressive Scenario:**
- Month 6: 50 customers (avg ฿12,000/mo) = ฿600K MRR
- Month 12: 200 customers (avg ฿15,000/mo) = ฿3M MRR
- Month 18: 400 customers (avg ฿18,000/mo) = ฿7.2M MRR ($2.7M ARR)
- **18-month cumulative revenue: ~฿45M (~$1.4M)**
- **18-month cumulative costs: ~฿8M**
- **Net: ~฿37M ($1.16M)**

### 8.4 Unit Economics

| Metric | Estimate |
|--------|----------|
| CAC (B2B SaaS Thailand) | ฿15,000-30,000 |
| ARPU | ฿12,000/mo |
| Gross margin | ~75-80% |
| LTV (12-month avg tenure) | ฿144,000 |
| LTV/CAC ratio | 4.8-9.6x ✅ |
| Payback period | 1.25-2.5 months ✅ |
| Break-even | ~20-25 customers |

### 8.5 Break-Even Analysis

- Monthly fixed costs: ~฿30,000 (hosting, tools, domains)
- Variable cost per customer: ~฿2,000/mo (LLM inference, email sends)
- Average revenue per customer: ฿12,000/mo
- Contribution margin: ฿10,000/customer
- **Break-even: 3 paying customers** (covers fixed costs)
- **Profitable at scale: 25+ customers** (including founder salary equivalent of ฿80K)

---

## 9. Revised Scoring

### Original Score: 35/50

### Revised Score: 33/50 (adjusted down)

| Criteria | Original | Revised | Change | Reason |
|----------|----------|---------|--------|--------|
| Market | 8/10 | 7/10 | -1 | Thai SME price sensitivity higher than expected. B2B SaaS adoption slow |
| Problem | 7/10 | 7/10 | 0 | Pain is real but education-heavy |
| Competition Gap | 8/10 | 7/10 | -1 | LINE cold outbound broken = less differentiation from global players |
| Build Feasibility | 6/10 | 6/10 | 0 | Complex but doable |
| Our Advantage | 6/10 | 6/10 | 0 | No change — still weak on B2B sales domain expertise |
| **Total** | **35/50** | **33/50** | **-2** | |

---

## 10. Final Verdict & Recommendation

### Should We Build MuteSell?

**CONDITIONAL YES — but with major model adjustments:**

1. **Reframe as "email-first AI SDR for Thai B2B" with LINE as warm channel** — not "LINE-first cold outbound"
2. **Lower entry price to ฿4,900/mo** — Thai SME market needs lower barrier
3. **Start with email-only MVP** (4-6 weeks) — don't try to build multi-channel from day 1
4. **The real moat is Thai B2B data, not LINE** — building a Thai company/contact database is the defensible asset
5. **Hire a Thai B2B sales advisor** — compensates for low founder-market fit
6. **Dog-food immediately** — use it to sell itself, prove value

### Why It's Still Worth Exploring

- Global AI SDR category is undeniably real and growing fast
- Zero Thai-language competitors (even with LINE limitation)
- Unit economics work even at lower Thai pricing
- Break-even at just 3 customers (excl. founder salary)
- Thai B2B data moat could be very defensible

### Why It Might Not Work

- Thai business culture genuinely resists cold outreach
- LINE limitation removes the key differentiator
- ฿15K/mo is expensive for Thai SMEs
- Building a Thai B2B contact database is a massive undertaking
- No existing B2B sales network to leverage
- 6+ month build for full product, during which global players could enter

### Comparison to Other Runner-Up Ideas

| Idea | Score | Build Time | Revenue Potential | Founder Fit |
|------|-------|-----------|-------------------|-------------|
| MuteMoo (#22) | 38/50 | 4-6 weeks | $1.3M ARR path | 9/10 |
| MorNee (#37) | 37/50 | 6-8 weeks | $265K ARR | 7/10 |
| MuteTrade (#39) | 36/50 | 4-6 weeks | $99K-1.2M | 9/10 |
| **MuteSell (#74)** | **33/50** | **12+ weeks** | **$253K-1.4M** | **6/10** |

MuteSell has good revenue potential but the lowest founder-market fit and longest build time of the runner-ups.

---

## Appendix A: LINE API Technical Details

### Push Message Requirements
- User must have added LINE OA as friend
- Requires user ID (obtained through friend-add webhook event)
- Rate limit: 100,000 requests/minute (generous)
- Message objects: up to 5 per request
- Message types: text, sticker, image, video, audio, location, template, flex

### Narrowcast Capabilities
- Can segment friends by: age, gender, OS, region
- Can create audiences from: user IDs, message clicks, impressions
- Useful for: targeting warm leads within your friend list
- NOT useful for: cold prospecting

### Key LINE Terms of Service Points
- Don't send mass messages to same user
- Don't try to identify user attributes
- Don't send requests to invalid user IDs
- Violations = account suspension

## Appendix B: Competitor Pricing Comparison

| Tool | Monthly Price | Messages/mo | Channels | AI Level |
|------|-------------|-------------|----------|----------|
| 11x (Alice) | $2,000-5,000+ | Unlimited? | Email, phone | Full AI agent |
| Artisan (Ava) | Custom | Volume-based | Email, LinkedIn | Full AI agent |
| AiSDR | $900-2,500 | 1,200-4,500 | Email, LinkedIn | Full AI agent |
| Instantly.ai | $37-97 | 5,000-100,000 | Email only | Basic AI |
| Regie.ai | Custom | Custom | Email, LinkedIn, phone | Full AI agent |
| MuteSell (proposed) | $155-1,250 | 500-unlimited | Email, LINE (warm), LinkedIn | Full AI agent |

## Appendix C: Thai B2B Sales Tool Landscape

```
┌─────────────────────────────────────────────────┐
│              Thai B2B Sales Ecosystem            │
├─────────────────────────────────────────────────┤
│                                                  │
│  COLD OUTREACH        WARM ENGAGEMENT            │
│  ┌───────────┐        ┌──────────────┐          │
│  │ Email     │───────▶│ LINE OA Chat │          │
│  │ (primary) │        │ (follow-up)  │          │
│  └───────────┘        └──────────────┘          │
│  ┌───────────┐        ┌──────────────┐          │
│  │ LinkedIn  │───────▶│ Meeting      │          │
│  │ (secondary)│       │ (Calendly)   │          │
│  └───────────┘        └──────────────┘          │
│                                                  │
│  CRM                  ANALYTICS                  │
│  ┌───────────┐        ┌──────────────┐          │
│  │ HubSpot   │        │ Dashboard    │          │
│  │ Salesforce│        │ Reports      │          │
│  │ R-CRM     │        │ A/B Testing  │          │
│  └───────────┘        └──────────────┘          │
│                                                  │
│  ⚠️ GAP: No Thai AI SDR exists anywhere         │
│  ⚠️ GAP: No Thai B2B contact database           │
└─────────────────────────────────────────────────┘
```
