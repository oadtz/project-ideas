# PRD: MuteSell — AI Outbound Sales Agent for Thai B2B

**Version:** 1.0  
**Date:** February 21, 2026  
**Author:** Sun (AI CEO, MuteLab)  
**Status:** Deep Dive Complete — Conditional Proceed  

---

## 1. Executive Summary

**MuteSell** is an AI-powered outbound sales development representative (AI SDR) built for Thai B2B companies. It automates prospect research, writes personalized outreach messages in Thai, sends via email (cold) and LINE (warm follow-up), handles replies, and books meetings.

**The opportunity:** AI SDR is a validated $1B+ global category (11x valued at $350M+, AiSDR has 250+ customers). Zero Thai-language AI SDR tools exist. Thai B2B is a 3.2M SME market running on LINE and referrals.

**Critical pivot from original thesis:** Deep dive research revealed that LINE's API does NOT allow cold outbound messaging — users must add your LINE OA as a friend first. MuteSell must be **email-first for cold outreach**, with LINE as the warm engagement/nurturing channel. This changes the positioning from "LINE-first AI SDR" to "Thai-first AI SDR with LINE integration."

**Revenue target:** $1M ARR at 180 customers averaging ฿15K/mo.

---

## 2. Problem Statement

### Pain Points for Thai B2B Companies

1. **No dedicated SDR:** Most Thai SMEs can't afford a ฿25-50K/mo sales rep. Founders do sales themselves.
2. **Referral dependency:** 60-70% of new business comes through introductions. No systematic outbound = feast-or-famine pipeline.
3. **Manual prospecting:** Finding Thai company contacts means manual searching on DBD, Facebook, Google. No Thai B2B database exists.
4. **Language barrier in tools:** All AI sales tools (11x, Artisan, AiSDR) are English-only. Thai sales communication requires Thai.
5. **No outbound culture:** Thai B2B hasn't adopted outbound sales methodologies. Those who try use generic messages that get ignored.

### Current Solutions & Their Gaps

| Solution | Gap |
|----------|-----|
| Hire SDR (฿25-50K/mo) | Expensive, works 8hrs/day, hard to train |
| Manual LINE chat | Not scalable, no automation, no tracking |
| Global AI SDRs (11x, Artisan) | English-only, email-only, no Thai market data |
| Thai CRM (R-CRM, Wisible) | No outbound automation, just contact management |
| LINE chatbots (AIYA) | Inbound only, customer support, no prospecting |

---

## 3. Solution: MuteSell (Revised Model)

### Positioning
"AI เซลส์ภาษาไทย — หา prospect, เขียนข้อความ, ส่งถึงลูกค้า, จองนัด อัตโนมัติ"  
(Thai AI sales agent — finds prospects, writes messages, delivers to customers, books meetings automatically)

### Revised Channel Strategy

```
COLD OUTREACH (New contacts)          WARM ENGAGEMENT (After opt-in)
┌──────────────┐                      ┌──────────────┐
│ 📧 Email     │ ──── Interest ────▶  │ 📱 LINE OA   │
│ (primary)    │                      │ (follow-up)  │
└──────────────┘                      └──────────────┘
┌──────────────┐                      ┌──────────────┐
│ 💼 LinkedIn  │ ──── Connect ─────▶  │ 📅 Calendar  │
│ (secondary)  │                      │ (booking)    │
└──────────────┘                      └──────────────┘
```

### Core Value Proposition
1. **Thai-language first** — AI writes business Thai (formal, semi-formal, casual registers)
2. **Email cold outreach** — personalized Thai emails at scale (500-2,000/month)
3. **LINE warm engagement** — once prospect adds your LINE OA, AI continues conversation in LINE
4. **Thai B2B data** — prospect research from DBD, LinkedIn, Thai directories
5. **24/7 AI agent** — handles replies, objections, meeting booking

---

## 4. Target Users

### Primary: Thai Mid-Market B2B (50-500 employees)

- **Industries:** SaaS, professional services, manufacturing, construction, real estate, insurance
- **Budget:** Can afford ฿10-20K/mo for sales tools
- **Pain:** Want to grow beyond referrals, can't hire enough SDRs
- **Decision maker:** CEO, VP Sales, Marketing Manager

### Secondary: Thai SMEs with B2B Model (10-50 employees)

- **Industries:** Digital agencies, IT services, consulting, wholesale
- **Budget:** ฿5-10K/mo maximum
- **Pain:** Founder is the only salesperson
- **Decision maker:** Founder/CEO

### NOT Target: Large Enterprises (500+)

- Already use Salesforce + human SDR teams
- Sales cycle too long (6-12 months)
- Need enterprise sales motion, not product-led

---

## 5. Features & MVP Scope

### MVP (6-8 weeks) — Email-Only AI SDR

| Feature | Priority | Description |
|---------|----------|-------------|
| Thai prospect research | P0 | Scrape DBD, LinkedIn, web for company + contact data |
| AI Thai message generation | P0 | LLM-powered personalized email writing in Thai |
| Email sending engine | P0 | SendGrid integration, domain warmup, sequence automation |
| Campaign management | P0 | Create campaigns, define ICP, set message count |
| Reply inbox | P0 | Unified inbox for email replies, AI categorization |
| Basic dashboard | P0 | Campaign stats, open rates, reply rates, meetings |
| AI reply handling | P1 | Auto-respond to interested prospects, handle objections |
| Meeting booking | P1 | Calendly/Google Calendar integration |

### V1 (Week 9-16) — Add LINE Warm Channel

| Feature | Priority | Description |
|---------|----------|-------------|
| LINE OA integration | P0 | Connect customer's LINE OA, send messages to friends |
| Email-to-LINE handoff | P0 | When prospect clicks LINE QR in email, AI continues on LINE |
| LINE conversation AI | P0 | Thai conversational AI for LINE chat follow-up |
| CRM sync | P1 | HubSpot + Salesforce two-way sync |
| A/B testing | P1 | Test different message variants |

### V2 (Month 5-6) — Full Platform

| Feature | Priority | Description |
|---------|----------|-------------|
| LinkedIn automation | P1 | Connection requests, DMs (browser automation) |
| Thai B2B database | P1 | Searchable database of Thai companies + contacts |
| AI phone agent | P2 | Auto-call prospects (like 11x Julian) |
| White-label | P2 | Agencies resell under their brand |
| API | P2 | Developers integrate MuteSell into their stack |

---

## 6. Technical Architecture

```
┌─────────────────────────────────────────────┐
│                 MuteSell Platform             │
├─────────────────────────────────────────────┤
│                                              │
│  ┌──────────────┐    ┌──────────────────┐   │
│  │ Next.js      │    │ Python AI Engine  │   │
│  │ Dashboard    │    │ (FastAPI)         │   │
│  │              │    │ - Prospect research│   │
│  │ - Campaigns  │    │ - Message generation│  │
│  │ - Analytics  │◄──▶│ - Reply analysis  │   │
│  │ - Settings   │    │ - Meeting booking │   │
│  └──────────────┘    └──────────────────┘   │
│         │                    │               │
│         ▼                    ▼               │
│  ┌──────────────┐    ┌──────────────────┐   │
│  │ PostgreSQL   │    │ Redis Queue      │   │
│  │ (Supabase)   │    │ (Bull MQ)        │   │
│  └──────────────┘    └──────────────────┘   │
│                          │                   │
│              ┌───────────┼───────────┐       │
│              ▼           ▼           ▼       │
│         ┌────────┐  ┌────────┐  ┌────────┐  │
│         │SendGrid│  │LINE API│  │LinkedIn│  │
│         │(email) │  │(warm)  │  │(scrape)│  │
│         └────────┘  └────────┘  └────────┘  │
└─────────────────────────────────────────────┘
```

### Tech Stack
- **Frontend:** Next.js 14, Tailwind CSS, shadcn/ui
- **AI Engine:** Python/FastAPI, Claude API / GPT-4
- **Database:** PostgreSQL (Supabase)
- **Queue:** Redis + BullMQ for email scheduling
- **Email:** SendGrid or Mailgun
- **LINE:** LINE Messaging API SDK
- **Hosting:** Railway or Vercel + Supabase
- **Auth:** Supabase Auth or Clerk

---

## 7. Pricing

| Tier | Price | Messages/mo | Channels | Seats |
|------|-------|------------|----------|-------|
| **Starter** | ฿4,900/mo ($155) | 500 emails | Email only | 1 |
| **Growth** ⭐ | ฿14,900/mo ($465) | 2,000 messages | Email + LINE | 3 |
| **Enterprise** | ฿39,900/mo ($1,250) | Unlimited | All channels | 10+ |

**Annual discount:** 20% off (2 months free)  
**Free trial:** 14 days, 50 messages  

### Revenue Math
- 180 customers × ฿15K avg = ฿2.7M/mo = ฿32.4M/yr ≈ **$1M ARR**
- Break-even: 3 customers (excl. founder salary), 25 customers (with ฿80K founder salary equivalent)

---

## 8. Go-to-Market Strategy

### Phase 1: Dog-food (Month 1)
- Use MuteSell MVP to sell MuteSell
- Target: 20 Thai B2B companies in tech/SaaS/agencies
- Goal: 5-10 beta users

### Phase 2: Community Launch (Month 2-3)
- Post in Thai B2B Facebook groups (100K+ members)
- Create Thai-language content: "How AI is changing B2B sales" blog series
- Free webinar: "เทคนิคหาลูกค้า B2B ด้วย AI" (AI B2B prospecting techniques)

### Phase 3: Partnership (Month 3-6)
- Partner with Thai digital marketing agencies (they have B2B clients)
- LINE Certified Coach partnership (they consult on LINE for Business)
- Integrate with R-CRM/Wisible for Thai market

### Phase 4: Scale (Month 6-12)
- Paid case studies with early customers
- Thai industry events and trade shows
- Sales team (1-2 AEs) for mid-market accounts
- Content marketing + SEO in Thai

---

## 9. Success Metrics

### North Star: Monthly Meetings Booked

| Timeframe | Target | Supporting Metrics |
|-----------|--------|-------------------|
| Month 3 | 10 paying customers | 500 emails sent, 5% reply rate |
| Month 6 | 30 paying customers | ฿300K MRR, 50 meetings/mo booked |
| Month 12 | 100 paying customers | ฿1.2M MRR, 200 meetings/mo booked |
| Month 18 | 180 paying customers | ฿2.7M MRR = $1M ARR |

### Key Metrics to Track
- Email open rate (target: 40%+)
- Email reply rate (target: 5-10% for Thai market)
- Positive response rate (target: 3-5%)
- Meetings booked per customer per month (target: 3-5)
- Customer retention (target: 80% monthly)
- NPS (target: 40+)

---

## 10. Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Thai SME price sensitivity | HIGH | ฿4,900 starter tier; clear ROI calculator; free trial |
| Low cold email response in Thai market | HIGH | Warm-cold hybrid; value-first messaging; Thai cultural adaptation |
| Complex platform (6+ month full build) | HIGH | Aggressive MVP scope; email-only first; iterate based on data |
| No Thai B2B contact database | MEDIUM | Build database as moat; partner with DBD data; scrape incrementally |
| Global players enter Thai market | LOW | 12-24mo head start; local data moat; LINE integration they won't build |
| Email deliverability | MEDIUM | Proper warmup; start 50/day; monitor domain reputation |

---

## 11. Team & Resources Needed

### Core Team (MVP Phase)
- **Founder/CTO** (Thanapat): AI engine, integrations, infrastructure
- **AI/ML focus:** Prompt engineering for Thai business writing
- **Thai Sales Advisor** (part-time): Guide product decisions, validate messaging

### Growth Team (Post-PMF)
- +1 Frontend developer (dashboard)
- +1 AE (Thai B2B sales)
- +1 Customer success

### Investment Required
- **Pre-revenue:** ฿0-150K (mostly founder sweat equity)
- **Growth phase:** ฿300K-500K (hire 1-2 contractors)
- **Scale:** Revenue-funded or ฿2-5M seed round

---

## 12. Timeline

```
Week 1-2:   Prospect research engine (DBD scraping, LinkedIn, Thai data)
Week 3-4:   AI Thai message generator (prompt engineering, templates)
Week 5-6:   Email sending infrastructure (SendGrid, warmup, sequences)
Week 7-8:   Dashboard + analytics + reply inbox
            ──── MVP LAUNCH ────
Week 9-12:  Beta with 10-20 companies. Iterate on message quality
Week 13-16: LINE OA integration (warm channel). CRM sync
            ──── V1 LAUNCH ────
Month 5-6:  LinkedIn automation. Thai B2B database. A/B testing
            ──── V2 LAUNCH ────
Month 7-12: Scale to 100+ customers. AI phone agent. SEA prep
```

---

## 13. Decision Framework

### Build MuteSell IF:
- ✅ We can validate Thai cold email response rates >3% with manual test (before building)
- ✅ We can find 5 Thai B2B companies willing to pay ฿5K+/mo for this (pre-sell)
- ✅ We have or can hire Thai B2B sales domain expertise
- ✅ We're willing to commit 6+ months to a complex platform build

### DON'T Build MuteSell IF:
- ❌ Thai cold email response rates are <1% (cultural incompatibility)
- ❌ Can't find 5 willing-to-pay beta customers
- ❌ Team bandwidth is consumed by higher-priority ideas (MuteMoo, MuteTrade)
- ❌ LINE cold outbound limitation makes the thesis unrecoverable

### Recommended Next Step:
**Manual validation test (1 week):** Send 100 personalized Thai cold emails manually to B2B prospects. Measure response rate. If >3%, proceed. If <1%, kill.
