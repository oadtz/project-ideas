# PRD: MuteHuay — AI Lottery Intelligence & Statistics Platform

**Version:** 1.0  
**Date:** February 21, 2026  
**Author:** Sun (AI CEO, MuteLab)  
**Status:** Deep Dive Complete — Passed with Caveats  
**Score:** 33/50 (revised down from 36/50 after deep dive)

---

## 1. Executive Summary

**MuteHuay** is a web-based AI lottery statistics and analytics platform for Thai government lottery players. It provides 30+ years of historical draw data analysis, AI-powered pattern detection, a Gemini-powered dream interpreter, and a community prediction game — all in Thai.

**The opportunity:** 19.2M+ Thais play the government lottery (28.6% of population), spending ฿76B+ annually. "ตรวจหวย" is one of the most searched terms in Thailand on draw days (1st & 16th of every month). Lottery is not just gambling in Thailand — it's deeply embedded cultural behavior.

**The honest thesis:** We cannot predict lottery numbers (they're random). But we can build the best **statistics dashboard, dream interpreter, and community prediction game** with modern UX and genuine AI — significantly better than existing apps. Revenue comes from ads on the massive free user base + premium subscriptions for power users.

**Key risk:** ถูกหวย (GoMang Studio) already has 4.6★ rating with AI features, dream interpreter, and community game. We are NOT first to market. We must win on UX quality and AI sophistication.

---

## 2. Legal Analysis

### ✅ Legal
- Analyzing publicly available GLO draw results
- Providing lottery statistics and historical data
- Result checking tools
- Dream interpretation (cultural practice)
- Entertainment-based prediction games (no real money wagered)

### ❌ Illegal
- Facilitating lottery betting (หวยใต้ดิน)
- Online gambling platforms
- Promising or guaranteeing wins

### ⚠️ Important Regulatory Update
The Entertainment Complex Bill (casino legalization) was **abandoned in July 2025** after public protests and PM removal. Thailand is NOT opening up gambling regulation. This means:
- No regulatory tailwind for lottery tech
- Stay firmly in "statistics/entertainment" lane
- Avoid supporting illegal lottery types (Lao/Hanoi/ยี่กี) — legal risk
- Clear disclaimers required on all analysis features

### App Store Compliance
- Position as "entertainment" and "statistics" app, never "gambling"
- Include responsible gambling messaging
- No real-money betting facilitation
- Web PWA as primary to reduce platform risk

---

## 3. Problem Statement

### User Pain Points
1. **Information scattered:** Lottery results, statistics, เลขเด็ด are spread across 10+ websites and apps
2. **Poor UX:** Existing lottery apps have dated, cluttered interfaces
3. **Fake "AI":** Apps claim AI but deliver random number generators or basic frequency tables
4. **No community:** Limited social features for sharing predictions and competing
5. **Dream interpretation:** Traditional dream-to-number books are physical/analog — no modern digital version
6. **No draw day reminders:** Users forget or miss analysis before draws

### What Users Actually Want
- One place for results + statistics + predictions + community
- Modern, trustworthy interface
- Entertaining AI features (dream interpreter, pattern analysis)
- Social competition (prediction leaderboard)
- Draw day notifications with analysis

---

## 4. Solution: MuteHuay

### Positioning
**"วิเคราะห์ ไม่ใช่ทำนาย"** (Analysis, not prediction)  
AI-powered lottery statistics and entertainment platform.

### Why Web App (PWA) + LINE Bot?
- **Web app:** SEO capture for lottery keywords, no app store gatekeeping risk, cross-device
- **LINE bot:** 56M Thai LINE users, push notifications, quick queries (result check, dream interpreter)
- **NOT native app initially:** Avoids gambling policy rejection risk on Play Store/App Store

### Core Value Proposition
1. **Best-in-class data visualization** — interactive heatmaps, charts, trend lines (what ถูกหวย lacks)
2. **Genuine AI** — Gemini-powered dream interpreter, ML-based pattern analysis
3. **Community gamification** — prediction game with real leaderboard and social features
4. **Modern UX** — dark mode, responsive, beautiful — not dated Thai app design
5. **Free-first** — full statistics free, premium for AI features

---

## 5. MVP Features (4-6 weeks)

### Phase 1: Core (Week 1-3)
| Feature | Description | Priority |
|---------|-------------|----------|
| **GLO Data Engine** | 30+ year database of all GLO draws (scraped + curated) | P0 |
| **Result Checker** | Latest draw results with QR scan | P0 |
| **Statistics Dashboard** | Hot/cold numbers, frequency analysis, gap analysis, distribution | P0 |
| **Interactive Charts** | D3.js/Chart.js heatmaps, trend lines, comparison tools | P0 |

### Phase 2: AI & Community (Week 3-5)
| Feature | Description | Priority |
|---------|-------------|----------|
| **Dream Interpreter AI** | Gemini-powered: describe dream in Thai → get number suggestions with cultural context | P1 |
| **Prediction Game** | Submit picks before each draw, auto-scored, leaderboard | P1 |
| **User Accounts** | LINE Login / email, save preferences | P1 |

### Phase 3: LINE & Notifications (Week 5-6)
| Feature | Description | Priority |
|---------|-------------|----------|
| **LINE Bot** | Result checker + dream interpreter via LINE | P1 |
| **Draw Day Notifications** | Push before/after each draw (1st & 16th) | P2 |
| **Social Sharing** | Share predictions and results to LINE/Facebook | P2 |

### Post-MVP (Month 2-4)
| Feature | Description | Priority |
|---------|-------------|----------|
| **Premium Tiers** | AI Pro (฿99/mo), VIP Club (฿299/mo) | P1 |
| **Advanced AI Analysis** | Pattern detection, anomaly detection, "AI picks" | P2 |
| **Content CMS** | Pre-draw analysis articles for SEO | P2 |
| **Ad Integration** | Display ads on free tier | P1 |
| **Multi-lottery info** | Read-only results for other lottery types (legal positioning) | P3 |

---

## 6. Pricing Strategy

### Free Tier (Core — drive user base)
- Full 30-year statistics dashboard
- Result checker (latest + historical)
- Basic prediction game participation
- Ad-supported

### AI Pro — ฿99/mo ($2.85)
- AI dream interpreter (unlimited)
- Advanced pattern analysis
- Pre-draw AI analysis reports
- Custom number tracking alerts
- Ad-free

### VIP Club — ฿299/mo ($8.60)
- Everything in AI Pro
- Community leaderboard ranking
- "Thai Champion" competitions
- Strategy sharing forum
- Early access to new AI features
- Priority support

### Pricing Rationale
- **฿99/mo is impulse pricing** — less than a single lottery ticket (฿80 × 2 = ฿160)
- **"If it helps you pick even ONE better number, it pays for itself"** — emotional, not rational
- **30% app store cut** not applicable (web app) — keeps full revenue
- **Risk:** Free alternatives exist (ถูกหวย). Conversion may be low (0.5-2%).

---

## 7. Competition Matrix

| Feature | MuteHuay | ถูกหวย | Thai Lotto Pro | AI ใบ้หวย |
|---------|----------|--------|----------------|-----------|
| Historical data (30yr) | ✅ | ✅ | ✅ | ✅ |
| Modern UX/Design | ✅ ⭐ | ❌ Basic | ❌ Basic | ❌ Basic |
| Interactive visualizations | ✅ ⭐ Heatmaps, D3.js | ❌ Basic charts | ❌ | ❌ |
| Real AI (Gemini/ML) | ✅ ⭐ | ⚠️ Basic formulas | ❌ | ⚠️ Basic lookup |
| Dream interpreter | ✅ AI-powered | ✅ Basic | ❌ | ❌ |
| Community prediction game | ✅ | ✅ | ✅ | ❌ |
| Leaderboard/Gamification | ✅ Advanced | ⚠️ Basic | ⚠️ Basic | ❌ |
| Custom formulas | ❌ | ✅ ⭐ | ❌ | ❌ |
| Multi-lottery | ⚠️ Read-only | ✅ Full | ✅ | ❌ |
| LINE integration | ✅ | ❌ | ❌ | ❌ |
| Web app (SEO) | ✅ | ❌ App only | ❌ App only | ❌ App only |
| Price | Free + ฿99-299/mo | Free + ads | Free + ads | Free |
| Rating | N/A (new) | 4.6★ | ~4.0★ | ~3.5★ |

**Our edge:** UX quality, real AI, LINE integration, web SEO. But ถูกหวย has feature parity and established user base.

---

## 8. Cost Analysis

### Development Costs (MVP)
| Item | Cost | Notes |
|------|------|-------|
| Developer time (6 weeks) | ฿0 | AI-assisted, founder builds |
| Design (UI/UX) | ฿0-15,000 | AI-generated + templates |
| GLO data acquisition | ฿0 | Public data, web scraping |
| Domain | ฿350/yr | .com domain |
| **Total MVP** | **฿350-15,350** | **~$10-440** |

### Monthly Operating Costs
| Phase | Hosting | AI (Gemini) | Marketing | Total/mo |
|-------|---------|-------------|-----------|----------|
| MVP (Mo 1-2) | ฿1,500 | ฿3,000 | ฿10,000 | ฿14,500 ($415) |
| Growth (Mo 3-6) | ฿5,000 | ฿10,000 | ฿50,000 | ฿65,000 ($1,860) |
| Scale (Mo 7-18) | ฿15,000 | ฿25,000 | ฿80,000 | ฿120,000 ($3,430) |

### Total Investment (18 months)
- **Conservative:** ฿1.5M ($43K) — lean marketing, organic growth
- **Moderate:** ฿4M ($115K) — moderate marketing spend
- **Aggressive:** ฿8M ($230K) — heavy marketing push

---

## 9. ROI Scenarios (18-Month)

### Conservative Scenario
- **MAU:** 200K
- **Paying users:** 1,400 (0.7%)
- **Monthly revenue:** ฿390K (subs ฿210K + ads ฿180K)
- **Monthly costs:** ฿70K
- **Monthly profit:** ฿320K
- **Annual revenue:** ฿4.7M ($135K)
- **Total investment:** ฿1.5M
- **Net return:** ฿3.2M ($92K)
- **ROI:** 213%

### Moderate Scenario
- **MAU:** 500K
- **Paying users:** 5,000 (1%)
- **Monthly revenue:** ฿1.29M (subs ฿750K + ads ฿540K)
- **Monthly costs:** ฿120K
- **Monthly profit:** ฿1.17M
- **Annual revenue:** ฿15.5M ($445K)
- **Total investment:** ฿4M
- **Net return:** ฿11.5M ($330K)
- **ROI:** 288%

### Aggressive Scenario
- **MAU:** 1M
- **Paying users:** 15,000 (1.5%)
- **Monthly revenue:** ฿3.33M (subs ฿2.25M + ads ฿1.08M)
- **Monthly costs:** ฿200K
- **Monthly profit:** ฿3.13M
- **Annual revenue:** ฿40M ($1.15M)
- **Total investment:** ฿8M
- **Net return:** ฿32M ($920K)
- **ROI:** 400%

---

## 10. 30-Day Validation Plan

### Week 1: Data & MVP
- [ ] Scrape/build 30-year GLO database
- [ ] Build basic statistics dashboard (hot/cold, frequency)
- [ ] Deploy web app (Vercel/Cloudflare Pages)
- [ ] Test dream interpreter with Gemini API

### Week 2: Core Features
- [ ] Result checker with latest draw
- [ ] Interactive charts (D3.js heatmaps)
- [ ] Dream interpreter UI
- [ ] LINE bot (basic result checker + dream)

### Week 3: Community & Content
- [ ] Prediction game with leaderboard
- [ ] User accounts (LINE Login)
- [ ] Create 5 TikTok statistical analysis videos
- [ ] Post in 10 Facebook lottery groups

### Week 4: Validation Metrics
- [ ] Launch publicly
- [ ] Track: registrations, DAU, dream interpreter usage, prediction game participation
- [ ] Create 5 more TikTok videos (draw day content)
- [ ] A/B test: free stats page vs gated AI features

### Validation Success Criteria
| Metric | Target | Pass/Fail |
|--------|--------|-----------|
| Week 4 registrations | 1,000+ | Must have |
| DAU on draw day | 500+ | Must have |
| Dream interpreter uses/day | 100+ | Strong signal |
| Prediction game entries | 200+ per draw | Strong signal |
| Return rate (week 2→4) | >20% | Must have |
| Willingness to pay (survey) | >5% "would pay ฿99/mo" | Nice to have |

---

## 11. Go-to-Market Strategy

### Phase 1: Organic Growth (Month 1-3)
1. **TikTok content:** Statistical fun facts about Thai lottery (viral potential)
   - "เลขที่ออกบ่อยสุดในรอบ 30 ปี"
   - "เลขอะไรไม่ออกนานที่สุด"
   - "AI ทำนายฝัน — ฝันเห็นงู ได้เลขอะไร"
2. **Facebook groups:** Share analysis in 20+ lottery enthusiast groups
3. **SEO:** Target long-tail: "สถิติหวย 30 ปี", "วิเคราะห์หวย AI", "ทำนายฝัน AI"
4. **Draw day events:** Publish analysis before every 1st and 16th

### Phase 2: Paid Growth (Month 3-6)
1. **Facebook/Instagram ads:** Target lottery interest audience
2. **LINE ads:** Target lottery-related keyword searches
3. **Influencer partnerships:** 3-5 lottery content creators
4. **PR:** "แอปวิเคราะห์หวย AI ตัวแรกของไทย" (if we can claim this)

### Phase 3: Monetization (Month 4-6)
1. **Launch premium tiers** (AI Pro ฿99, VIP ฿299)
2. **Display ads** on free tier (Google AdSense / AdMob)
3. **LINE notification subscriptions**

### Phase 4: Scale (Month 6-18)
1. **Content flywheel:** SEO + social creates organic growth
2. **Community network effects:** Prediction game creates retention
3. **Data moat:** 30-year data + community predictions = unique dataset
4. **B2B exploration:** API for media sites (if demand exists)

---

## 12. Key Decisions & Open Questions

1. **Multi-lottery support:** Include หวยลาว/ฮานอย/หุ้น/ยี่กี or stay GLO-only?
   - **Recommendation:** GLO-only at launch (legal safety). Add "results only" for others later if validated.

2. **"AI" positioning:** How aggressive on AI claims?
   - **Recommendation:** Honest — "AI วิเคราะห์สถิติ" not "AI ทำนาย". Entertainment-first.

3. **Native app vs web?**
   - **Recommendation:** Web PWA first, native app only if web validated and app store risk assessed.

4. **Compete with or complement ถูกหวย?**
   - **Recommendation:** Compete on UX/design quality and AI sophistication. Don't try to replicate their custom formula feature.

5. **Ethical positioning?**
   - **Recommendation:** Include responsible gambling messaging. Never promise wins. Position as entertainment + education.

---

## Appendix: Why Score Was Revised Down

| Factor | Original View | Revised View | Score Impact |
|--------|--------------|--------------|-------------|
| Competition | "Zero serious AI competition" | ถูกหวย has AI + dream + community, 4.6★ | -1 |
| Casino bill | "Sector opening up" | Bill abandoned July 2025 | -1 |
| Problem | "Real AI gap" | Gap is narrower; value is entertainment | -1 |
| Ethics | "Low risk" | 61.3% low-income players; ethical tension | Minor |
| **Net change** | **36/50** | **33/50** | **-3 points** |

**Still a PASS** (>30/50) but no longer a strong Runner Up candidate. Better suited as a side project or combined with MuteMoo (#22) for a "Thai luck" super-app.
