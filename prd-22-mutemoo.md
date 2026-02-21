# PRD: MuteMoo — AI Fortune Telling + Data Science
### Product Requirements Document v1.0
**Status:** 1st Round Runner Up | **Score:** 38/50 (Highest) | **Date:** 2026-02-21

---

## 1. Executive Summary

**MuteMoo** is an AI-powered fortune telling platform that combines traditional Thai astrology (ผูกดวง, ลัคนา, ราศี) with statistical data analysis and AI personalization, delivered primarily through LINE — Thailand's dominant messaging platform with 54M+ users. The core proposition: **"ดูดวงที่อธิบายได้ ไม่ใช่แค่เชื่อ" (Fortune telling you can explain — not just believe).**

Thailand's spiritual/fortune telling market is estimated at ฿4–15.6B annually, with 75% of the population (52M people) actively engaging in fortune telling. Yet the digital landscape is dominated by outdated websites (myhora.com, payakorn.com) and expensive human astrologers (฿300–2,000/session). Globally, Co-Star has proven the model with 30M+ downloads and ~$2.5M/month revenue, while the astrology app market is projected to reach $9.9B by 2029 (20% CAGR). **Nobody has built the "Co-Star for Thai astrology"** — MuteMoo occupies this white space with a unique science + spirituality positioning that attracts both believers and skeptics.

---

## 2. Problem Statement

### The Pain
- **Expensive access:** Human fortune tellers charge ฿300–2,000/session with limited availability. Premium ones (หมอดูดัง) charge ฿5,000–50,000+ and have 2-6 month waiting lists.
- **Outdated digital options:** myhora.com (est. ~2005) and payakorn.com are text-heavy, no personalization, no AI, no mobile-first design. They feel like websites from 2008.
- **No credibility layer:** Traditional fortune telling is pure belief-based — skeptics dismiss it entirely. No one bridges the gap between astrology and data.
- **Fragmented experience:** Users bounce between apps, websites, LINE OA fortune tellers, and in-person visits with no continuity.

### Who Has It
- **Primary:** Thai women 22-45 (heaviest fortune telling consumers), urban professionals, Bangkok + major cities
- **Secondary:** Thai men 25-45 (business owners seeking auspicious dates for decisions), couples (compatibility checks)
- **Tertiary:** The "curious skeptic" — educated millennials/Gen Z who say "I don't believe but..." (estimated 30% of market)

### How Big
- Thai fortune telling consultation market: **฿4B/year**
- Total Thai spiritual market (incl. amulets, ceremonies): **฿10.4–15.6B/year**
- Global astrology app market: **$4.75B (2025) → $9.9B (2029), 20% CAGR**
- Asia-Pacific: **30% of global market share**
- Monthly Google searches "ดูดวง": **5-10M+ in Thailand alone**

---

## 3. Solution: MuteMoo's Approach

### AI + Science + Thai Culture

MuteMoo doesn't replace fortune telling — it **upgrades** it:

1. **Authentic Thai Astrology Engine** — Properly calculates birth charts using Thai systems (ลัคนา, ราศี, นวางค์, ดาวเคราะห์ทั้ง 9), not Western-only horoscopes
2. **Statistical Data Layer** — Cross-references astrological positions with aggregated outcome data (career changes, relationship patterns, health trends by birth period)
3. **AI Personalization** — GPT-class models interpret the combination of chart + data + user context into deeply personal, Thai-language readings
4. **LINE-Native Delivery** — Meets users where they already are. No app download friction.

### The Unique Angle
Nobody in Thailand (or globally for Thai astrology) occupies the **"science + spirituality"** position. This:
- Attracts believers who want deeper analysis
- Attracts skeptics who are "curious about the data"
- Creates viral shareable content ("My birth chart says X, and statistically Y% of people born that day also experienced Z")
- Provides a defensible brand position

---

## 4. Target Users

### Primary Persona: "Ning" — Urban Professional
- Female, 28, Bangkok, works in marketing
- Checks horoscope daily on Sanook/LINE NEWS
- Has visited 2-3 fortune tellers in person (spent ฿500-2,000 each)
- Uses LINE 3+ hours/day
- Would pay ฿99-199/mo for something better than free horoscopes

### Secondary Persona: "Boss Korn" — SME Owner
- Male, 38, runs e-commerce business
- Consults fortune teller before major business decisions (new hires, contracts, expansion)
- Pays ฿2,000-5,000 per consultation
- Wants auspicious dates, compatible business partners, lucky directions
- Would pay ฿299-499/mo or ฿999 per deep reading

### Tertiary Persona: "Film" — Gen Z Skeptic
- Non-binary, 23, university student
- Shares Co-Star screenshots on Twitter
- "I don't believe in horoscopes, but mine is SO accurate 😂"
- Attracted by the data/science angle
- Free tier user → converts via FOMO (friends sharing premium readings)

---

## 5. MVP Features (Launch Scope ONLY)

### 5.1 Daily Horoscope (ดวงรายวัน) — FREE
- Personalized daily reading based on birth chart (not just sun sign)
- Push notification via LINE at 7:00 AM
- Covers: luck, love, career, health (brief)
- Shareable card format (drives virality)

### 5.2 Tarot Reading (ไพ่ทาโรต์) — FREE (1/day) + PREMIUM
- Interactive card pull experience in LINE
- AI interprets cards in context of user's birth chart + question
- Rich card images (custom Thai-style art)
- Free: 1 basic reading/day | Premium: unlimited + detailed spreads

### 5.3 Birth Chart Analysis (ดวงชะตา) — FREE (basic) + PREMIUM (detailed)
- Input: date, time, location of birth
- Output: Full Thai birth chart visualization
- Free: Basic personality + current period overview
- Premium: Detailed 12-house analysis, planetary transits, yearly forecast

### 5.4 Lucky Numbers / Colors / Directions — FREE
- Daily lucky numbers (1-2 digit for lottery players — HUGE demand)
- Lucky colors, directions (ทิศมงคล), and times
- Based on birth chart + current planetary positions

### 5.5 Compatibility Check (ดวงคู่) — PREMIUM
- Input two birth charts
- Output: compatibility score, strength areas, risk areas
- Covers: romantic, business, friendship compatibility
- Shareable result (viral mechanic)

### 5.6 LINE Bot Interface
- All features accessible via LINE Official Account
- Rich menus, flex messages, LIFF (LINE Front-end Framework) for interactive UIs
- Webhook-driven, serverless backend

---

## 6. Revenue Model & Pricing

### Tier Structure

| Tier | Price | Features |
|------|-------|----------|
| **Free** | ฿0 | Daily horoscope, 1 tarot/day, basic birth chart, lucky numbers |
| **Standard** | ฿99/mo | Unlimited tarot, detailed birth chart, weekly deep dive, compatibility |
| **Premium** | ฿199/mo | Everything + monthly forecast, career/love focus readings, priority |
| **Deep Reading** | ฿29-99/reading | One-time detailed analysis (specific question, life event) |
| **Special Events** | ฿499-999 | Wedding dates, shop opening, baby naming, name change |

### Revenue Math: Path to $1M ARR (฿35M)

**Conservative Scenario:**
- Month 3: 10,000 free users, 200 paid (2%) × ฿99 = ฿19,800/mo
- Month 6: 50,000 free, 2,500 paid (5%) × ฿130 avg = ฿325,000/mo (฿3.9M ARR)
- Month 12: 200,000 free, 10,000 paid (5%) × ฿140 avg = ฿1,400,000/mo (฿16.8M ARR)
- Month 18: 500,000 free, 25,000 paid (5%) × ฿150 avg = ฿3,750,000/mo (฿45M ARR = ~$1.3M)

**Additional revenue streams:**
- Pay-per-reading: est. ฿200K-500K/mo at scale
- Special events (wedding dates etc.): est. ฿100K-300K/mo
- Sponsored content / brand partnerships: ฿50K-200K/mo
- API licensing to media publishers: ฿50K-100K/mo

**Key assumption:** 5% free-to-paid conversion is conservative. Co-Star achieves ~3-5%, Nebula achieves 8-12% with aggressive paywall. Thai willingness to pay for fortune telling is higher than average.

---

## 7. Tech Architecture

```
┌─────────────────────────────────────────┐
│              LINE Platform               │
│  (Messaging API + LIFF + Rich Menus)     │
└──────────────┬──────────────────────────┘
               │ Webhook
┌──────────────▼──────────────────────────┐
│         API Gateway (Cloudflare)         │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Application Server (Node.js)        │
│  ┌─────────┐ ┌──────────┐ ┌──────────┐  │
│  │ LINE Bot │ │ User Mgmt│ │ Payment  │  │
│  │ Handler  │ │ + Auth   │ │ (Stripe/ │  │
│  │          │ │          │ │  Omise)  │  │
│  └─────────┘ └──────────┘ └──────────┘  │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│          AI + Astrology Engine            │
│  ┌─────────────┐  ┌──────────────────┐   │
│  │ Birth Chart  │  │ AI Interpretation│   │
│  │ Calculator   │  │ (Claude/GPT API) │   │
│  │ (Swiss       │  │ + Thai astrology │   │
│  │  Ephemeris)  │  │   prompt library │   │
│  └─────────────┘  └──────────────────┘   │
│  ┌─────────────┐  ┌──────────────────┐   │
│  │ Tarot Engine│  │ Statistical Data │   │
│  │ (card logic │  │ Layer (patterns, │   │
│  │  + imagery) │  │  correlations)   │   │
│  └─────────────┘  └──────────────────┘   │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│            Data Layer                    │
│  PostgreSQL (users, charts, readings)    │
│  Redis (caching, rate limiting)          │
│  S3 (card images, chart renders)         │
└─────────────────────────────────────────┘
```

### Key Tech Decisions
- **Birth chart:** Swiss Ephemeris (C library, gold standard) + custom Thai astrology overlay (ลัคนา calculation differs from Western)
- **AI Model:** Claude API (best for nuanced Thai language + cultural context) with fallback to GPT-4
- **Prompt Engineering:** Extensive Thai astrology knowledge base encoded in system prompts — trained on authentic texts (ตำราพรหมชาติ, ตำราศาสตร์ราจีน)
- **LINE Integration:** Official LINE Messaging API + LIFF for interactive UIs (birth chart input, tarot card selection)
- **Payment:** Omise (Thai payment gateway, PromptPay + credit card + TrueMoney Wallet)
- **Hosting:** Cloudflare Workers (edge) + Supabase (DB) or Railway — keep costs under ฿5K/mo at launch

---

## 8. Go-to-Market Plan

### Phase 1: Pre-Launch (Week 1-2)
- Create LINE OA + branded profile
- Set up TikTok account with 10 pre-made "fortune telling" short videos
- Create Twitter/X account — daily horoscope threads (ดวงรายวัน 12 ราศี)
- Seed 3-5 Pantip posts about "AI fortune telling" concept (organic discussion)
- Build waitlist landing page

### Phase 2: Soft Launch (Week 3-4)
- Launch LINE bot with free features only
- Release daily horoscope content across all channels simultaneously
- Target: 500-1,000 LINE friends in first week
- Gather feedback, iterate on reading quality
- Submit to Thai tech media (Blognone, Techsauce, Brand Inside)

### Phase 3: Growth Sprint (Month 2-3)
- Activate paid tiers (฿99/mo, ฿199/mo)
- Launch TikTok content strategy (3 videos/week):
  - "Your birth chart reveals..." (personalized hook)
  - "Science says people born in [month] are..." (data angle)
  - "AI vs Human fortune teller — who's more accurate?" (controversy = views)
- Facebook group strategy: Join top ดูดวง groups (500K-2M members), provide value
- Collaborate with 5-10 micro-influencers (ดูดวง niche) — free premium access for reviews

### Phase 4: Scale (Month 4-6)
- Launch referral program (invite friend = free premium week)
- Add compatibility check feature (massive viral potential — couples sharing)
- Partner with 1-2 celebrity fortune tellers for credibility
- SEO: Target "ดูดวงวันนี้", "ดวงรายวัน", "ไพ่ทาโรต์ออนไลน์"
- PR push: "The startup making fortune telling scientific"

---

## 9. Competition Matrix

| Feature | MuteMoo | myhora.com | payakorn.com | A Duang | Co-Star | Nebula | LINE OA หมอดู |
|---------|---------|------------|--------------|---------|---------|--------|---------------|
| AI-powered readings | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ (human) |
| Thai astrology system | ✅ | ✅ | ✅ | ✅ | ❌ (Western) | ❌ | ✅ |
| Data/science angle | ✅ | ❌ | ❌ | ❌ | Partial | ❌ | ❌ |
| LINE-native | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Personalized daily | ✅ | Generic | Generic | ✅ | ✅ | ✅ | ❌ |
| Tarot reading | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | Some |
| Compatibility check | ✅ | Basic | ❌ | ❌ | ✅ | ✅ | Some |
| Modern UI/UX | ✅ | ❌ (2008) | ❌ (2005) | ✅ | ✅ | ✅ | Varies |
| Free tier | ✅ | ✅ | ✅ | ✅ | ✅ | Limited | ❌ |
| Price (premium) | ฿99-199/mo | Free | Free | Free | $4.99/mo | $13.99/wk | ฿99-999/reading |

### Competitive Positioning
- **vs. Thai sites (myhora, payakorn):** Modern, AI-powered, personalized, mobile-first
- **vs. A Duang:** Science angle differentiator, LINE distribution, AI vs template
- **vs. Co-Star/Nebula:** Thai language, Thai astrology system, LINE-native, local cultural understanding
- **vs. LINE OA fortune tellers:** Scalable (AI vs human), consistent quality, lower price, 24/7 availability

---

## 10. Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Trust deficit** — Thais may not trust AI over human fortune tellers | HIGH | Position as "assistant to your spiritual journey, not replacement." Partner with real astrologers for credibility. Accuracy feedback loop. |
| **AI hallucination** — Generating inaccurate or offensive readings | HIGH | Extensive prompt engineering + output filtering. Never make health/financial guarantees. Disclaimers in every reading. |
| **Free content competition** — Sanook, Kapook, LINE NEWS all have free horoscopes | MEDIUM | They're generic (sun sign only). We're personalized (full birth chart). Differentiate on depth + science angle. |
| **Legal risk** — Fortune telling regulations | LOW | Thailand has no specific fortune telling regulations. We're technology/entertainment, not practicing medicine or financial advice. Standard disclaimers sufficient. |
| **Retention / churn** — Users get bored after initial novelty | MEDIUM | Daily push notifications, weekly deep dives, seasonal content (Chinese New Year, Songkran predictions), social features (compare with friends). |
| **AI cost at scale** — Claude/GPT API costs per reading | MEDIUM | Cache common readings, use smaller models for daily horoscopes, reserve large models for premium readings. Target <฿2/reading at scale. |
| **Copycat risk** — Easy to replicate concept | MEDIUM | First-mover advantage, brand building, data moat (user readings improve AI over time), community/social features. |

---

## 11. Success Metrics

### Week 1
- [ ] LINE OA launched with core features working
- [ ] 200+ LINE friends added
- [ ] 50+ daily active users
- [ ] <5% error rate on birth chart calculations
- [ ] Average reading satisfaction: 4/5 stars

### Month 1
- [ ] 3,000+ LINE friends
- [ ] 500+ daily active users
- [ ] 50+ paid subscribers (any tier)
- [ ] TikTok: 10+ videos posted, 50K+ total views
- [ ] NPS score > 40
- [ ] Average session: 3+ messages per user/day

### Month 3
- [ ] 10,000+ LINE friends
- [ ] 2,000+ DAU
- [ ] 200+ paid subscribers
- [ ] ฿20K+ MRR
- [ ] TikTok: 30+ videos, 500K+ total views
- [ ] 1+ media feature (Blognone, Techsauce, etc.)
- [ ] Organic growth rate: 20%+ month-over-month

---

## 12. Timeline: Week 1-4 Build Plan

### Week 1: Foundation
- [ ] Set up LINE OA + Messaging API credentials
- [ ] Implement Swiss Ephemeris integration for Thai birth chart calculation
- [ ] Build core AI prompt library (daily horoscope, birth chart interpretation)
- [ ] Design LINE rich menu + flex message templates
- [ ] Set up database schema (users, charts, readings, subscriptions)

### Week 2: Core Features
- [ ] Implement daily horoscope generation + LINE push
- [ ] Build tarot reading flow (card selection → AI interpretation)
- [ ] Birth chart input flow via LIFF
- [ ] Lucky numbers/colors/directions generator
- [ ] Basic user onboarding flow

### Week 3: Polish + Monetization
- [ ] Integrate Omise payment (฿99/mo, ฿199/mo subscriptions)
- [ ] Implement free tier limits (1 tarot/day, basic chart only)
- [ ] Build shareable card images (for social virality)
- [ ] Quality test all readings with 10 beta users
- [ ] Prepare content calendar for TikTok/Twitter/Facebook

### Week 4: Launch
- [ ] Soft launch to 50 beta users (friends, family, Pantip recruits)
- [ ] Iterate based on feedback
- [ ] Go live publicly
- [ ] Activate social media content strategy
- [ ] Begin tracking all success metrics

---

## 13. Cost Analysis (ต้นทุน)

### 13.1 AI API Costs per Reading

| Model | Input (per 1M tokens) | Output (per 1M tokens) | Est. tokens/reading | Cost/reading |
|-------|----------------------|----------------------|--------------------:|-------------:|
| GPT-4o | $2.50 | $10.00 | ~2,000 in / ~1,500 out | ~$0.020 (฿0.70) |
| GPT-4o-mini | $0.15 | $0.60 | ~2,000 in / ~1,500 out | ~$0.001 (฿0.04) |
| Claude Sonnet 4 | $3.00 | $15.00 | ~2,000 in / ~1,500 out | ~$0.029 (฿1.00) |
| Claude Haiku | $0.25 | $1.25 | ~2,000 in / ~1,500 out | ~$0.002 (฿0.08) |
| Gemini 2.0 Flash | $0.10 | $0.40 | ~2,000 in / ~1,500 out | ~$0.001 (฿0.03) |

**Strategy:** Use cheap models (GPT-4o-mini / Gemini Flash) for daily horoscopes & lucky numbers (high volume, low depth). Reserve Claude Sonnet or GPT-4o for premium deep readings (low volume, high value). **Blended cost target: ฿0.15–0.50/reading.**

System prompt (Thai astrology knowledge base) adds ~1,500 tokens per call. This is fixed overhead — cacheable with prompt caching (50% discount on cached tokens in Claude/OpenAI).

### 13.2 LINE Messaging API Costs

| Item | Free tier | Cost beyond free |
|------|-----------|-----------------|
| Reply messages | Unlimited | ฿0 |
| Push messages (proactive) | 500/month (free plan) | ฿0.05–0.20/message depending on plan |
| LINE OA Premium plan | — | ฿1,490/mo (15,000 push/mo) |
| LINE OA Pro plan | — | ฿4,490/mo (45,000 push/mo) |

**Daily horoscope push to all users is the big cost driver.** At 10K users: need Pro plan (฿4,490/mo). At 50K users: need custom enterprise pricing or switch to opt-in pull model (user clicks "get today's horoscope" → reply message = free).

**Mitigation:** Daily push only to premium users. Free users get horoscope when they open the chat (reply = free). Saves massive LINE costs.

### 13.3 Server / Hosting Costs

| Component | Service | Monthly Cost |
|-----------|---------|-------------:|
| API server | Cloudflare Workers (free tier → $5/mo) | ฿0–175 |
| Database | Supabase free tier → Pro ($25/mo) | ฿0–875 |
| Redis cache | Upstash free tier → $10/mo | ฿0–350 |
| Image storage (tarot cards, charts) | Cloudflare R2 (10GB free) | ฿0–100 |
| Domain + SSL | Cloudflare (free) | ฿0 |
| Birth chart calc | Swiss Ephemeris (open source, self-hosted) | ฿0 |
| **Total infra** | | **฿0–1,500/mo** |

Infrastructure is near-zero at launch thanks to generous free tiers. Even at 50K users, infra stays under ฿5,000/mo. **AI API cost is 10-50x larger than infra cost** — that's the real cost driver.

### 13.4 Birth Chart Calculation

- **Swiss Ephemeris:** Open source (GPL), free for non-commercial use. Commercial license: one-time $700 (~฿24,500) OR use the free Moshier ephemeris (slightly less accurate, fine for consumer app).
- **Alternatively:** Use free Python library `flatlib` or JavaScript `astronomia` — no cost.
- **Thai astrology overlay:** Custom code (ลัคนา calculation, Thai house system) — built in-house, ฿0.
- **Est. cost: ฿0** (use open source Moshier ephemeris for MVP, upgrade later if needed)

### 13.5 Marketing Budget (First 3 Months)

| Channel | Monthly Budget | Notes |
|---------|---------------:|-------|
| TikTok content creation | ฿0 | AI-generated + founder-shot videos |
| Facebook/IG ads (testing) | ฿5,000 | Target ดูดวง interest groups, ฿0.50-2/click |
| LINE Ads | ฿3,000 | Add friend campaigns, ฿1-5/friend |
| Micro-influencer collabs | ฿5,000 | 5 nano-influencers × ฿1,000 or free premium |
| Pantip / Twitter organic | ฿0 | Sweat equity |
| PR / media outreach | ฿0 | Direct outreach to Blognone, Techsauce |
| **Total marketing/mo** | **฿13,000** | (~$370/mo) |
| **3-month total** | **฿39,000** | (~$1,100) |

### 13.6 Monthly Burn Rate Summary

| Phase | AI API | LINE | Infra | Marketing | Total Burn |
|-------|-------:|-----:|------:|----------:|-----------:|
| **Month 1** (1K users, 200 readings/day) | ฿900 | ฿0 (free plan) | ฿0 (free tiers) | ฿13,000 | **฿13,900** |
| **Month 3** (10K users, 3K readings/day) | ฿13,500 | ฿4,490 (Pro) | ฿1,000 | ฿13,000 | **฿31,990** |
| **Month 6** (50K users, 15K readings/day) | ฿67,500 | ฿4,490+ | ฿3,000 | ฿25,000 | **฿100,000** |
| **Month 12** (200K users, 50K readings/day) | ฿225,000 | ฿15,000 | ฿8,000 | ฿50,000 | **฿298,000** |

*AI API costs assume blended ฿0.15/reading average (mostly cheap models, premium readings use expensive models)*

---

## 14. ROI Calculation & Unit Economics

### 14.1 Cost Per User Acquisition (CAC)

| Channel | Est. CAC | Conversion quality |
|---------|--------:|--------------------|
| Organic TikTok | ฿0–2 | High intent (they searched ดูดวง) |
| Facebook/IG ads | ฿5–15 | Medium (interest-based targeting) |
| LINE Add Friend ads | ฿3–8 | High (direct LINE friend) |
| Pantip / word of mouth | ฿0 | Highest quality |
| Influencer referral | ฿5–20 | Medium-high |
| **Blended CAC target** | **฿5–10** | |

At ฿13K marketing/month and ~3,000 new users/month organic+paid = **blended CAC ~฿4–5** in early months. This is extremely low because fortune telling content is inherently viral on TikTok/Facebook.

### 14.2 Cost Per Reading

| Reading type | AI model | AI cost | Infra overhead | Total cost/reading |
|-------------|----------|--------:|---------------:|-------------------:|
| Daily horoscope (free) | GPT-4o-mini / Gemini Flash | ฿0.04 | ฿0.01 | **฿0.05** |
| Basic tarot (free) | GPT-4o-mini | ฿0.08 | ฿0.01 | **฿0.09** |
| Detailed birth chart (premium) | GPT-4o / Claude Sonnet | ฿0.70–1.00 | ฿0.02 | **฿0.72–1.02** |
| Deep reading (premium) | Claude Sonnet | ฿1.00–1.50 | ฿0.02 | **฿1.02–1.52** |
| Compatibility check (premium) | Claude Sonnet (2 charts) | ฿1.50–2.00 | ฿0.03 | **฿1.53–2.03** |
| Special event (wedding date) | Claude Sonnet (thorough) | ฿2.00–3.00 | ฿0.05 | **฿2.05–3.05** |

### 14.3 Revenue Per User Per Month (ARPU)

| User type | % of base | Readings/mo | Revenue/user/mo | Cost/user/mo | Gross margin |
|-----------|----------:|------------:|----------------:|-------------:|-------------:|
| Free user | 95% | 30 daily + 10 tarot | ฿0 | ฿1.50 + ฿0.90 = ฿2.40 | **-฿2.40** |
| Standard ฿99 | 3.5% | 30 daily + 30 tarot + 4 deep | ฿99 | ฿1.50 + ฿2.70 + ฿4.00 = ฿8.20 | **฿90.80 (91.7%)** |
| Premium ฿199 | 1.2% | 30 daily + 60 tarot + 10 deep + 2 compat | ฿199 | ฿1.50 + ฿5.40 + ฿10.00 + ฿4.00 = ฿20.90 | **฿178.10 (89.5%)** |
| Pay-per-reading | 0.3% | 1-2 deep readings | ฿60–99 avg | ฿2.00 | **฿58–97 (96.7%)** |

**Blended ARPU (across all users):** ~฿6.50/user/month at 5% conversion

**Key insight: Gross margins are 89-97% on paid users.** Free users cost ~฿2.40/month to serve — this is the "cost of funnel." Even at 95% free, the math works because paid margins are enormous.

### 14.4 Break-Even Analysis

**Monthly fixed costs:**
- Infrastructure: ฿3,000–8,000
- LINE OA plan: ฿4,490
- Marketing: ฿13,000–25,000
- **Total fixed: ฿20,500–37,500/mo**

**Variable costs per user (blended):** ~฿2.40/free user/mo, net +฿85–175/paid user/mo

**Break-even formula:**
- Fixed costs ÷ (ARPU - variable cost per user) = break-even users
- At ฿25,000 fixed, ฿6.50 ARPU, ฿2.28 variable cost:
- **฿25,000 ÷ ฿4.22 = ~5,925 total users needed to break even**
- At 5% conversion = ~296 paying users × ฿130 avg = ฿38,500 revenue vs ฿25,000 fixed + ฿14,200 variable = ฿39,200 cost
- **Break-even: ~6,000 users (~Month 2-3)**

### 14.5 LTV vs CAC

| Metric | Conservative | Moderate | Aggressive |
|--------|------------:|----------:|-----------:|
| Average subscriber lifespan | 4 months | 6 months | 9 months |
| Average monthly revenue/subscriber | ฿110 | ฿130 | ฿155 |
| **LTV (per paying user)** | **฿440** | **฿780** | **฿1,395** |
| CAC (blended) | ฿8 | ฿6 | ฿5 |
| CAC (per paying user at 5% conv) | ฿160 | ฿120 | ฿100 |
| **LTV:CAC ratio** | **2.75:1** | **6.5:1** | **14:1** |

Industry benchmark: LTV:CAC > 3:1 is healthy. Even our **conservative** estimate is borderline healthy, moderate is excellent.

**Churn is the big unknown.** Fortune telling apps have high initial engagement but retention depends heavily on:
- Daily horoscope habit formation (push notifications)
- Content freshness (weekly/monthly deep dives)
- Social features (sharing, comparing with friends)
- Life events (weddings, job changes trigger reactivation)

---

## 15. Scenario Analysis

### 15.1 Conservative Scenario 🔴
*"Slow growth, high churn, lower conversion"*

| Metric | Mo 3 | Mo 6 | Mo 12 | Mo 18 |
|--------|-----:|-----:|------:|------:|
| Total users | 5,000 | 20,000 | 60,000 | 100,000 |
| Paid users (3%) | 150 | 600 | 1,800 | 3,000 |
| ARPU (paid) | ฿99 | ฿110 | ฿115 | ฿120 |
| **MRR** | **฿14,850** | **฿66,000** | **฿207,000** | **฿360,000** |
| Monthly burn | ฿25,000 | ฿55,000 | ฿130,000 | ฿180,000 |
| **Monthly P&L** | **-฿10,150** | **+฿11,000** | **+฿77,000** | **+฿180,000** |
| **ARR** | **฿178K** | **฿792K** | **฿2.5M** | **฿4.3M** |

- Break-even: ~Month 5
- ฿4.3M ARR by month 18 (~$123K) — small but profitable lifestyle business
- Total investment to break-even: ~฿120K (~$3,400)

### 15.2 Moderate Scenario 🟡
*"Steady organic growth, decent retention, some virality"*

| Metric | Mo 3 | Mo 6 | Mo 12 | Mo 18 |
|--------|-----:|-----:|------:|------:|
| Total users | 10,000 | 50,000 | 200,000 | 400,000 |
| Paid users (5%) | 500 | 2,500 | 10,000 | 20,000 |
| ARPU (paid) | ฿110 | ฿130 | ฿140 | ฿150 |
| **MRR** | **฿55,000** | **฿325,000** | **฿1,400,000** | **฿3,000,000** |
| Monthly burn | ฿32,000 | ฿100,000 | ฿298,000 | ฿500,000 |
| **Monthly P&L** | **+฿23,000** | **+฿225,000** | **+฿1,102,000** | **+฿2,500,000** |
| **ARR** | **฿660K** | **฿3.9M** | **฿16.8M** | **฿36M** |

- Break-even: ~Month 2
- ฿36M ARR by month 18 (~$1.03M) — hits the $1M milestone
- **83% gross margin** at scale
- Total investment to break-even: ~฿32K (~$900)

### 15.3 Aggressive Scenario 🟢
*"TikTok viral hit, influencer amplification, high conversion"*

| Metric | Mo 3 | Mo 6 | Mo 12 | Mo 18 |
|--------|-----:|-----:|------:|------:|
| Total users | 30,000 | 150,000 | 500,000 | 1,000,000 |
| Paid users (7%) | 2,100 | 10,500 | 35,000 | 70,000 |
| ARPU (paid) | ฿120 | ฿145 | ฿160 | ฿170 |
| **MRR** | **฿252,000** | **฿1,522,500** | **฿5,600,000** | **฿11,900,000** |
| Monthly burn | ฿60,000 | ฿250,000 | ฿700,000 | ฿1,200,000 |
| **Monthly P&L** | **+฿192,000** | **+฿1,272,500** | **+฿4,900,000** | **+฿10,700,000** |
| **ARR** | **฿3M** | **฿18.3M** | **฿67.2M** | **฿142.8M** |

- Break-even: Month 1
- ฿142.8M ARR by month 18 (~$4.1M) — Series A territory
- Requires: 1 viral TikTok moment + strong word-of-mouth
- Risk: AI costs spike, need to negotiate volume discounts or fine-tune own model

### 15.4 Scenario Comparison Summary

| Metric | Conservative | Moderate | Aggressive |
|--------|------------:|----------:|-----------:|
| 18-month ARR | ฿4.3M ($123K) | ฿36M ($1.03M) | ฿142.8M ($4.1M) |
| Total users | 100K | 400K | 1M |
| Cumulative profit (18mo) | ฿1.5M | ฿16M | ฿70M+ |
| Total investment needed | ฿120K | ฿32K | ฿0 (self-funded from Mo 1) |
| Break-even month | 5 | 2 | 1 |
| Risk level | Low | Medium | High (scale challenges) |

**Bottom line:** Even the conservative scenario reaches profitability by month 5 with only ฿120K total investment (~$3,400). The unit economics work because:
1. AI API costs are genuinely cheap (฿0.05–3.00/reading)
2. Infrastructure is near-zero on modern serverless stacks
3. Fortune telling content is inherently viral (organic growth)
4. Paid user margins are 89-97%
5. The main risk is retention/churn, not cost

---

## Appendix A: Competitor Revenue Benchmarks

| Competitor | Model | Revenue | Users |
|-----------|-------|---------|-------|
| Co-Star | Freemium, $4.99/mo premium | ~$2.5M/mo (~$30M ARR) | 30M+ downloads |
| Nebula | Subscription $13.99/week | ~$40-60M ARR (est.) | 10M+ downloads |
| The Pattern | Freemium + in-app purchases | ~$5-10M ARR (est.) | 15M+ downloads |
| Sanctuary | Live readings + subscription | ~$3-5M ARR (est.) | 5M+ downloads |
| CeCe Astrology | Freemium | Growing (2.49M MAU, 57% YoY) | 2.49M MAU |
| Thai LINE OA fortune tellers | Per-reading ฿99-999 | ฿50K-500K/mo (top ones) | Varies |

## Appendix B: Thai Fortune Telling Market Segments

| Segment | Est. Annual Value | Digital Penetration |
|---------|------------------|-------------------|
| In-person consultation (หมอดู) | ฿3-4B | ~5% |
| Online consultation (LINE/video call) | ฿500M-1B | ~80% |
| Horoscope content (media/apps) | ฿200-500M | ~95% |
| Amulets & sacred items (พระเครื่อง) | ฿5-8B | ~30% |
| Ceremonies & rituals (พิธีกรรม) | ฿2-3B | ~5% |

## Appendix C: Key Thai Astrology Terms for AI Training

| Thai | English | Importance |
|------|---------|------------|
| ลัคนา | Ascendant/Rising sign | Critical — base of Thai chart |
| ราศี | Zodiac sign (Thai system) | Core |
| นวางค์ | Navamsa chart | Advanced |
| ผูกดวง | Cast a horoscope chart | Core process |
| ดาวเคราะห์ทั้ง 9 | 9 planetary bodies | Core |
| ฤกษ์ | Auspicious time/moment | High demand feature |
| ทักษา | Taksā — Thai fortune system | Cultural unique |
| เรือนชะตา | Astrological houses | Core |

---

*Document prepared by Sun, AI CEO of MuteLab*
*For internal use — MuteLab ideation sprint 2026*
