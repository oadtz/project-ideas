# PRD: MuteTrade — AI Crypto Trading Signals + DeFi Yield Optimizer

**Version:** 1.0  
**Date:** February 21, 2026  
**Author:** Sun (AI CEO, MuteLab)  
**Status:** Deep Dive Complete — 1st Round Runner Up  

---

## 1. Executive Summary

**MuteTrade** is a Telegram-based AI crypto trading assistant for Thai-speaking traders. It combines on-chain data analysis (whale tracking, DEX volumes, TVL shifts, token flows) with AI pattern recognition to deliver trading signals, DeFi yield optimization recommendations, and portfolio analytics — all in Thai.

**The opportunity:** Thailand has 4-6M crypto holders with ~300K+ active monthly traders on Bitkub alone. Thai crypto adoption rate (~12%) is among the highest in Southeast Asia. Yet **zero Thai-language AI-powered crypto trading tools** exist. All competitors (3Commas, Cryptohopper, Pionex) are English-only web platforms.

**The thesis:** A Telegram-native, Thai-first AI trading assistant fills a clear market gap. Freemium signals build trust, paid tiers (฿999-2,999/mo) monetize serious traders. Ultra-low operating costs ($500-2,500/mo) mean break-even at just 25-60 paid users.

**Founder advantage:** Thanapat is CTO at Water Ledger, a blockchain company. He understands smart contracts, DeFi protocols, and on-chain data at a fundamental level — the highest founder-market fit of all 74 MuteLab ideas.

---

## 2. Problem Statement

### The Pain Points

**For Thai Crypto Traders:**
1. **Information gap:** All institutional-grade crypto analytics (Nansen $100+/mo, Glassnode $39-799/mo, Arkham) are English-only. Thai traders can't access these insights.
2. **Signal quality:** Thai signal groups on Telegram/LINE are run by individuals — inconsistent quality, no transparency, many pump-and-dump schemes.
3. **24/7 market, human limits:** Crypto never sleeps. Human signal providers miss moves while sleeping. Thai traders wake up to missed opportunities.
4. **DeFi complexity:** Yield farming across multiple chains/protocols is confusing. Most Thai traders miss better yields because they don't know where to look.
5. **Scam fatigue:** Thailand has had high-profile crypto scams — traders are wary but still want tools.

### Current Solutions & Their Gaps

| Solution | Type | Limitation |
|----------|------|------------|
| 3Commas ($30-100/mo) | Trading bot platform | English only, web-based, no Thai support |
| Cryptohopper ($24-108/mo) | Trading bot platform | English only, complex setup |
| Pionex (free) | Exchange with bots | English only, not Thai exchange integration |
| Nansen ($100-2,500/mo) | On-chain analytics | English only, too expensive for Thai retail |
| Thai signal groups (฿500-5K/mo) | Human-run Telegram groups | Inconsistent, no AI, no transparency |
| TradingView (free/paid) | Charting platform | Thai UI exists but no signals, requires expertise |
| Banana Gun / Maestro (free + fees) | Telegram DEX trading bots | Execution only, no analysis/signals, English only |

**Key insight: No Thai-language AI crypto tool exists. Not one.**

---

## 3. Solution: MuteTrade

### Positioning
"AI สัญญาณเทรดคริปโต ภาษาไทย — ข้อมูล on-chain + AI วิเคราะห์ ส่งตรงถึง Telegram"  
(AI crypto trading signals in Thai — on-chain data + AI analysis, delivered to Telegram)

### Why Telegram?
- Thai crypto community's #1 platform — all signal groups, alpha groups, project discussions happen here
- Zero download friction — just join the bot
- Rich messaging: inline buttons, formatted messages, images/charts
- Viral sharing: forward signals to friends/groups
- Telegram Bot API is free — zero platform cost

### Core Value Proposition
1. **Thai-language first** — all insights, signals, explanations in Thai
2. **AI-powered 24/7** — never misses a whale move or yield opportunity
3. **On-chain intelligence** — data that retail traders can't access or interpret themselves
4. **Telegram-native** — no app download, meets traders where they already are
5. **Free to start** — build trust before asking for money

---

## 4. Target Users (Personas)

### Persona 1: "บอส" — Active Spot Trader
- **Age:** 30, Bangkok, marketing manager
- **Income:** ฿50,000/mo
- **Crypto portfolio:** ฿200,000-500,000
- **Behavior:** Trades 3-5x/week on Bitkub. Follows 5+ signal groups. Checks TradingView daily. Active in CT Thailand.
- **Pain:** Gets conflicting signals from different groups. Misses overnight moves. Doesn't understand on-chain data.
- **Budget for tools:** ฿500-1,500/mo
- **MuteTrade tier:** Trader (฿999/mo)

### Persona 2: "เอก" — DeFi Explorer
- **Age:** 26, Chiang Mai, freelance developer
- **Income:** ฿35,000/mo
- **Crypto portfolio:** ฿100,000-300,000 (mostly DeFi)
- **Behavior:** Provides liquidity on Uniswap/PancakeSwap. Yield farms across 3-4 chains. Active in DeFi Discord/Telegram.
- **Pain:** Can't keep up with yield changes across protocols. Missed better rates on Arbitrum. Impermanent loss confused him.
- **Budget for tools:** ฿500-1,000/mo
- **MuteTrade tier:** Trader (฿999/mo) for DeFi yield alerts

### Persona 3: "พี่หนุ่ม" — Whale Tracker
- **Age:** 38, Bangkok, business owner
- **Income:** ฿200,000+/mo
- **Crypto portfolio:** ฿2M-10M
- **Behavior:** Follows smart money. Copies whale trades. Uses Nansen occasionally but finds it complex.
- **Pain:** Nansen is expensive and English. Wants whale alerts with Thai context and specific actionable insights.
- **Budget for tools:** ฿3,000-5,000/mo
- **MuteTrade tier:** Pro (฿2,999/mo)

---

## 5. MVP Features (2-Week Sprint)

### Must-Have (Week 1-2)
| Feature | Description | Technical Approach |
|---------|------------|-------------------|
| Thai Telegram Bot | Core bot interface with Thai language | python-telegram-bot + custom Thai NLP |
| Whale Alerts | Top 100 ETH whale wallet monitoring with Thai commentary | Alchemy API + rules engine + LLM for Thai text |
| Daily Market Summary | AI-generated Thai market analysis (BTC, ETH, top alts) | CoinGecko API + LLM generation |
| DeFi Yield Board | Top yields across 10 protocols, updated hourly | DeFiLlama API + formatting |
| Price Alerts | Custom price alerts with AI context | CoinGecko + LLM commentary |
| Free Tier Only | 3 signals/day, market dashboard | Rate limiting |

### Phase 2 (Month 1-2)
| Feature | Description |
|---------|------------|
| AI Signal Scoring | ML-based signal confidence (1-10) combining on-chain + technical |
| Premium Tiers | Payment integration (Stripe + Thai QR payment) |
| Portfolio Tracker | Connect wallets, track performance |
| Multi-Chain | Beyond Ethereum: Solana, BSC, Arbitrum |
| Backtesting Display | Show historical signal accuracy transparently |

### Phase 3 (Month 3-6)
| Feature | Description |
|---------|------------|
| DeFi Yield Optimizer | Auto-recommend yield rebalancing strategies |
| Copy Whale Trading | Alerts + one-click copy (via DEX integration) |
| B2B Analytics API | White-label for Thai exchanges |
| Custom Strategies | Users set parameters, AI monitors |
| Social Features | Leaderboards, community signals |

---

## 6. Pricing Strategy

### Tier Structure

| Tier | Price | Features | Target |
|------|-------|----------|--------|
| **Free** | ฿0 | 3 AI signals/day, daily market summary, basic whale alerts, DeFi yield board | All users — build trust |
| **Trader** ⭐ | ฿999/mo (~$29) | Unlimited signals, portfolio analytics, risk scoring, DeFi yield alerts, whale tracking, priority alerts | Active traders (฿100K+ portfolio) |
| **Pro** 🐋 | ฿2,999/mo (~$88) | Everything in Trader + premium signals with confidence scores, auto DeFi yield optimization, copy whale trades, personalized strategy, API access | Serious traders (฿500K+ portfolio) |
| **B2B** 🏢 | ฿50,000+/mo | White-label analytics, custom signals API, enterprise dashboard | Thai exchanges, funds |

### Pricing Rationale
- ฿999/mo = ~$29 → slightly below 3Commas Pro ($37/mo), affordable for Thai traders with ฿50K+ portfolios
- ฿2,999/mo = ~$88 → below Nansen ($100/mo) and Cryptohopper Hero ($108/mo), premium but justifiable for serious traders
- Free tier essential for trust-building in scam-wary Thai market
- Annual discount: 20% off (฿9,590/yr for Trader, ฿28,790/yr for Pro)

---

## 7. Competition Matrix

| Feature | MuteTrade | 3Commas | Cryptohopper | Banana Gun | Nansen | Thai Signal Groups |
|---------|-----------|---------|-------------|------------|--------|-------------------|
| Thai Language | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Telegram Native | ✅ | ❌ (web) | ❌ (web) | ✅ | ❌ (web) | ✅ |
| AI Signals | ✅ | Partial | Partial | ❌ | ❌ | ❌ (human) |
| On-Chain Analytics | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| DeFi Yield Optimizer | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Whale Tracking | ✅ | ❌ | ❌ | ❌ | ✅ | Some |
| Trade Execution | ❌ (Phase 3) | ✅ | ✅ | ✅ | ❌ | ❌ |
| Free Tier | ✅ | ✅ | ✅ | ✅ (fees) | ❌ | ❌ |
| Price | ฿999-2,999/mo | $30-100/mo | $24-108/mo | 1% per trade | $100+/mo | ฿500-5,000/mo |

**MuteTrade's unique position:** Thai-language + Telegram-native + AI signals + on-chain analytics. No competitor combines all four.

---

## 8. Cost Analysis

### Phase 1: MVP (Month 1-3)
| Item | Monthly (฿) | Monthly ($) |
|------|-------------|------------|
| Cloud hosting (AWS t3.medium) | 3,500 | 100 |
| AI/LLM APIs (OpenAI/Claude) | 5,250 | 150 |
| On-chain data APIs (Alchemy free+) | 1,750 | 50 |
| Market data (CoinGecko free) | 0 | 0 |
| Telegram Bot API | 0 | 0 |
| Legal consultation (amortized) | 8,500 | 250 |
| Marketing (KOL seeding) | 17,000 | 500 |
| Misc | 700 | 20 |
| **Total** | **฿36,700** | **$1,070** |

### Phase 2: Growth (Month 4-12)
| Item | Monthly (฿) | Monthly ($) |
|------|-------------|------------|
| Cloud hosting | 10,500 | 300 |
| AI/LLM APIs | 17,500 | 500 |
| On-chain data (paid tiers) | 7,000 | 200 |
| Market data APIs | 4,500 | 130 |
| Marketing | 35,000 | 1,000 |
| Customer support | 10,500 | 300 |
| Legal/compliance | 5,250 | 150 |
| **Total** | **฿90,250** | **$2,580** |

### Phase 3: Scale (Month 12+)
| Item | Monthly (฿) | Monthly ($) |
|------|-------------|------------|
| Infrastructure | 35,000 | 1,000 |
| AI/LLM APIs | 35,000 | 1,000 |
| Data APIs | 17,500 | 500 |
| Marketing | 70,000 | 2,000 |
| Team (1 part-time) | 35,000 | 1,000 |
| Legal/compliance | 8,750 | 250 |
| **Total** | **฿201,250** | **$5,750** |

---

## 9. ROI Scenarios (18-Month Projection)

### Conservative (Bear/Flat Market)
| Metric | Value |
|--------|-------|
| Total Investment (18mo) | ฿1.1M ($32K) |
| Paid Users (Month 18) | 350 |
| Monthly Revenue (Month 18) | ฿525K ($15K) |
| Cumulative Revenue (18mo) | ฿4.5M ($131K) |
| Net Profit | ฿3.4M ($99K) |
| ROI | 309% |
| Break-Even Month | 5 |

### Moderate (Mild Bull Market)
| Metric | Value |
|--------|-------|
| Total Investment (18mo) | ฿1.8M ($53K) |
| Paid Users (Month 18) | 1,200 |
| Monthly Revenue (Month 18) | ฿1.8M ($53K) |
| Cumulative Revenue (18mo) | ฿16M ($468K) |
| Net Profit | ฿14.2M ($415K) |
| ROI | 789% |
| Break-Even Month | 4 |

### Aggressive (Bull Market + Viral)
| Metric | Value |
|--------|-------|
| Total Investment (18mo) | ฿3.5M ($102K) |
| Paid Users (Month 18) | 3,000 |
| Monthly Revenue (Month 18) | ฿4.5M ($132K) |
| Cumulative Revenue (18mo) | ฿45M ($1.32M) |
| Net Profit | ฿41.5M ($1.21M) |
| ROI | 1,186% |
| Break-Even Month | 3 |

### Gross Margin Projection
- **At 200 paid users:** Revenue ฿300K/mo, COGS ฿60K → **80% GM**
- **At 1,000 paid users:** Revenue ฿1.5M/mo, COGS ฿150K → **90% GM**
- **At 3,000 paid users:** Revenue ฿4.5M/mo, COGS ฿300K → **93% GM**

Software + AI margins are excellent. The business scales well.

---

## 10. 30-Day Validation Plan

### Week 1: Build & Launch MVP
- [ ] Set up Telegram bot with Thai interface
- [ ] Integrate Alchemy API for whale wallet monitoring (top 100 ETH whales)
- [ ] Integrate DeFiLlama API for yield data
- [ ] Integrate CoinGecko for price data
- [ ] Build AI signal generation pipeline (LLM-based Thai commentary)
- [ ] Create public Telegram channel: @MuteTrade
- [ ] Launch free tier only

### Week 2: Seed Community
- [ ] Post daily AI-generated Thai market summaries (3-5 signals/day)
- [ ] Share in 10+ Thai crypto Telegram groups (provide value, not spam)
- [ ] Contact 3-5 Thai crypto KOLs for reviews
- [ ] Create Twitter/X account for MuteTrade, daily Thai analysis threads
- [ ] Target: 200-500 channel subscribers

### Week 3: Measure & Iterate
- [ ] Track signal accuracy (public scorecard)
- [ ] Collect user feedback (Telegram poll, DM responses)
- [ ] Iterate on signal quality based on feedback
- [ ] Add multi-chain support if demand exists
- [ ] Survey users on willingness to pay (฿999 vs ฿499 vs ฿1,499)
- [ ] Target: 500-1,000 subscribers, 50+ daily active users

### Week 4: Monetization Test
- [ ] Launch Trader tier (฿999/mo) with Stripe + PromptPay
- [ ] Offer early-bird pricing (฿699/mo for first 50 users)
- [ ] Track conversion rate (target: 5-10% of active free users)
- [ ] Analyze DAU, signal engagement, churn signals
- [ ] Legal: consult Thai securities lawyer on regulatory classification
- [ ] Target: 10-25 paid subscribers, ฿10-37K MRR

### Key Validation Metrics (Kill/Continue)

| Metric | Kill | Continue | Celebrate |
|--------|------|----------|-----------|
| Day 30 subscribers | <200 | 500-1,000 | >2,000 |
| Daily active users | <20 | 50-100 | >200 |
| Signal engagement rate | <10% | 30-50% | >60% |
| Paid conversion (Week 4) | <2% | 5-10% | >15% |
| Paid subscribers (Day 30) | <5 | 10-25 | >50 |
| Signal accuracy (tracked) | <40% | 50-60% | >65% |
| NPS (surveyed) | <20 | 30-50 | >60 |

---

## 11. Go-to-Market Strategy

### Phase 1: Community-Led Growth (Month 1-3)
1. **Free public signal channel** — post 5 AI signals/day in Thai
2. **KOL seeding** — give 5-10 Thai crypto KOLs free premium access
3. **Track record transparency** — public signal scorecard updated daily
4. **Community group** — create discussion group alongside signal channel
5. **Twitter/X content** — daily Thai market analysis threads
6. **Referral program** — invite 3 friends → 1 week free premium

### Phase 2: Paid Growth (Month 3-6)
1. **KOL paid promotions** — ฿10-50K per KOL campaign
2. **Exchange partnerships** — integrate with Bitkub API for portfolio tracking
3. **Content marketing** — Thai crypto blog/newsletter
4. **Affiliate program** — 20% recurring commission for referrals
5. **Social proof** — showcase signal track record, user testimonials

### Phase 3: Scale (Month 6-12)
1. **B2B outreach** — pitch white-label to Thai exchanges
2. **Transaction fee model** — add DEX execution capabilities
3. **Multi-language** — expand to Vietnamese, Indonesian
4. **PR** — Thai tech media coverage (Techsauce, Brand Inside, The Standard)
5. **Community events** — Thai crypto meetup sponsorship

---

## 12. Technical Architecture

```
┌─────────────────────────────────────────────┐
│                 Users (Telegram)             │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│          Telegram Bot (Python)              │
│  - Thai language interface                   │
│  - Command handling                          │
│  - User management                           │
│  - Payment integration                       │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│          Signal Engine                       │
│  ┌─────────────┐  ┌──────────────┐          │
│  │ On-Chain     │  │ Market Data  │          │
│  │ Monitor      │  │ Aggregator   │          │
│  │ (Alchemy)    │  │ (CoinGecko)  │          │
│  └──────┬──────┘  └──────┬───────┘          │
│         │                │                   │
│  ┌──────▼────────────────▼───────┐          │
│  │     AI Analysis Engine        │          │
│  │  - Pattern recognition        │          │
│  │  - Whale movement classifier  │          │
│  │  - Signal confidence scoring  │          │
│  │  - Thai text generation       │          │
│  │  (OpenAI / Claude API)        │          │
│  └──────────────┬────────────────┘          │
│                 │                            │
│  ┌──────────────▼────────────────┐          │
│  │     DeFi Yield Aggregator     │          │
│  │  - DeFiLlama integration     │          │
│  │  - Risk scoring              │          │
│  │  - Yield comparison          │          │
│  └───────────────────────────────┘          │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│          Data Layer                          │
│  - PostgreSQL (users, signals, portfolios)  │
│  - Redis (caching, rate limiting)           │
│  - S3 (signal history, analytics)           │
└─────────────────────────────────────────────┘
```

### Tech Stack
- **Backend:** Python (FastAPI / asyncio)
- **Bot Framework:** python-telegram-bot
- **Database:** PostgreSQL + Redis
- **AI/LLM:** OpenAI GPT-4o / Claude API
- **On-Chain:** Alchemy SDK, The Graph
- **Market Data:** CoinGecko API, DeFiLlama API
- **Hosting:** AWS (t3.medium) or Oracle Cloud Free Tier
- **Payments:** Stripe + Thai PromptPay QR
- **Monitoring:** Grafana + basic alerts

---

## 13. Risk Mitigation Plan

| Risk | Mitigation | Owner |
|------|-----------|-------|
| SEC classifies as investment advisory | Position as "information tool." Legal review. Heavy disclaimers on every signal. | Thanapat |
| Bear market kills demand | Keep monthly costs <$3K. Build community (not just paid users). Diversify to B2B. | Sun |
| Signal accuracy below 50% | Start with rules-based (not pure ML). Human review layer. Transparent scorecard. | Thanapat |
| Scam perception | Transparent team identity. Public track record. Free tier. No profit guarantees. | Both |
| Competition from global players | Speed to market. Thai-language moat. Community relationships. Local exchange integration. | Both |
| Bad signals cause user losses | Clear disclaimers ("not financial advice"). Terms of service. Never guarantee returns. | Both |

---

## 14. Success Metrics (OKRs)

### Month 1
- **O:** Launch MVP and validate product-market fit
- **KR1:** 500+ Telegram channel subscribers
- **KR2:** 50+ daily active users
- **KR3:** Signal engagement rate >30%

### Month 3
- **O:** Achieve first revenue and prove willingness to pay
- **KR1:** 25+ paid subscribers
- **KR2:** ฿25,000+ MRR
- **KR3:** Signal accuracy >50% (tracked publicly)

### Month 6
- **O:** Reach profitability and scale community
- **KR1:** 200+ paid subscribers
- **KR2:** ฿300,000+ MRR
- **KR3:** <10% monthly churn on paid tier
- **KR4:** 5,000+ total community members

### Month 12
- **O:** Path to $1M ARR
- **KR1:** 600+ paid subscribers
- **KR2:** ฿900,000+ MRR (฿10.8M ARR)
- **KR3:** 1+ B2B client
- **KR4:** Explore SEA expansion

---

## Appendix: Why This Idea Over Others

MuteTrade scores 36/50, below MuteMoo (38/50) and equal to MorNee AI (37/50). But it has the **highest founder-market fit** (9/10) of any idea:

- Thanapat is literally a blockchain CTO at Water Ledger
- He understands smart contracts, on-chain data, DeFi protocols natively
- He IS the target user — a crypto trader and builder
- Technical complexity of on-chain analysis is a moat — most competitors can't replicate easily
- The crypto market rewards technical depth over marketing polish

The risk-reward profile is compelling: ultra-low costs ($1K/mo to start), clear market gap (zero Thai AI crypto tools), and a founder who can build the hard parts himself. The main risks (regulation, cyclicality) are real but manageable with conservative financial planning.
