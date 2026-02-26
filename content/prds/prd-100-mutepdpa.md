# PRD: MutePDPA #100 — AI PDPA Compliance Platform
## Product Requirements Document | February 22, 2026
### 🏆 2nd Round Runner Up | Score: 42/50 (Highest from 100 ideas)

---

## TL;DR

**Build a free PDPA website scanner** that shows Thai business owners their compliance violations in 60 seconds. Scare them with real ฿5M fine data. Convert fear into paid subscriptions (฿990–9,900/mo) for auto-generated privacy policies, cookie banners, and compliance documents.

**Why now:** PDPC declared "era of warnings is over" (Aug 2025). ฿21.5M in fines issued. 53% of SMEs have NO privacy policy. Zero AI tools exist in Thai.

**Prototype goal:** Working website scanner → 1,000 scans in week 1 → validate demand before building full platform.

---

## 1. MVP Features (Prototype Scope)

### 1.1 Free PDPA Website Scanner (THE Lead Magnet)

This is the ONLY thing we build for the prototype. Everything else is shown but gated.

**What it scans (5 checks):**

| Check | How | Output |
|-------|-----|--------|
| **🍪 Cookie Consent** | Detect cookie banner presence, consent mechanism, cookie categories | "ไม่พบ cookie consent banner" / "พบแต่ไม่ comply" / "✅ comply" |
| **📋 Privacy Policy** | Crawl for /privacy, /policy, นโยบายความเป็นส่วนตัว links. NLP check for 8 required PDPA elements (Section 23) | "ไม่มี privacy policy" / "มีแต่ขาด 4 จาก 8 องค์ประกอบ" / "✅ ครบ" |
| **📝 Data Collection Forms** | Detect <form> elements with input fields (email, phone, name). Check for consent checkbox/text | "พบ 3 ฟอร์มเก็บข้อมูลโดยไม่มี consent" |
| **🔍 Third-Party Trackers** | Detect Google Analytics, Facebook Pixel, LINE Tag, TikTok Pixel, etc. via script src matching | "พบ 5 third-party trackers: GA4, FB Pixel, LINE Tag..." |
| **🔒 SSL/Security** | Check HTTPS, certificate validity, HSTS header | "❌ ไม่มี HTTPS" / "✅ SSL valid" |

**Scanner Output:**
- **Compliance Score**: A/B/C/D/F rating (visual, color-coded)
- **Issues Found**: Specific list with severity (critical/warning/info)
- **Thai-language recommendations**: "คุณต้อง..." for each issue
- **Fear element**: "⚠️ ค่าปรับสูงสุด: ฿5,000,000 ต่อการละเมิด" with real case examples
- **CTA**: "แก้ไขทั้งหมดด้วย MutePDPA →" — collects LINE ID or email

### 1.2 Premium Features (Show but Gate)

These appear in the scan results as "solutions" but require signup/payment:

| Feature | What User Sees | Status |
|---------|---------------|--------|
| **Auto-Generate Privacy Policy** | "สร้าง Privacy Policy ที่ comply PDPA ใน 2 นาที" → "เริ่มต้น ฿990/เดือน" | Locked, coming soon |
| **Cookie Consent Banner** | "ติดตั้ง Cookie Banner ที่ comply PDPA บรรทัดเดียว" → Starter tier | Locked, coming soon |
| **DPA Templates** | "Download Data Processing Agreement ภาษาไทย" → Business tier | Locked, coming soon |
| **Breach Notification** | "Workflow แจ้งเหตุข้อมูลรั่วภายใน 72 ชม." → Business tier | Locked, coming soon |
| **Employee Training** | "อบรม PDPA พนักงาน 30 นาที + ใบรับรอง" → Business tier | Locked, coming soon |

### 1.3 What's NOT in Prototype

- No user accounts/dashboard (just scan + results page)
- No payment processing yet
- No document generation yet
- No monitoring/recurring scans
- No DPO-as-a-Service

---

## 2. User Flow (Step-by-Step)

### Screen 1: Landing Page
```
┌─────────────────────────────────────────┐
│  🛡️ MutePDPA                            │
│                                         │
│  ตรวจเว็บฟรี ก่อนโดนปรับ ฿5M           │
│  Free PDPA Website Compliance Scanner   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  ใส่ URL เว็บไซต์ของคุณ          │    │
│  │  https://yourwebsite.co.th      │    │
│  │           [🔍 ตรวจเว็บฟรี]       │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ✅ ฟรี 100% · ไม่ต้องสมัคร · ผลใน 60 วิ │
│                                         │
│  ── ทำไมต้องตรวจตอนนี้? ──              │
│  🚨 ฿21.5M ค่าปรับที่ออกแล้ว            │
│  📊 53% SME ไม่มี privacy policy         │
│  ⚖️ ค่าปรับสูงสุด ฿5M ต่อการละเมิด      │
│                                         │
│  ── คดีจริงที่เกิดขึ้น ──                │
│  💸 IT Retailer: ฿7,000,000             │
│  🏥 โรงพยาบาล: ฿1,210,000              │
│  💄 บริษัทเครื่องสำอาง: ฿2,500,000      │
└─────────────────────────────────────────┘
```

### Screen 2: Scanning Animation (15-60 seconds)
```
┌─────────────────────────────────────────┐
│  🔍 กำลังตรวจสอบ yourwebsite.co.th...   │
│                                         │
│  ████████░░░░░░░░  45%                  │
│                                         │
│  ✅ ตรวจ SSL/HTTPS แล้ว                  │
│  ✅ ตรวจ Cookie Consent แล้ว             │
│  🔄 กำลังวิเคราะห์ Privacy Policy...     │
│  ⏳ ตรวจฟอร์มเก็บข้อมูล                  │
│  ⏳ ค้นหา Third-Party Trackers           │
│                                         │
│  💡 คุณรู้ไหม? ธุรกิจไทยถูกปรับ          │
│     ฿7,000,000 เพราะไม่มี DPO           │
└─────────────────────────────────────────┘
```

### Screen 3: Results Page (THE Money Shot)
```
┌─────────────────────────────────────────┐
│  ผลการตรวจ: yourwebsite.co.th           │
│                                         │
│  ┌───────────────────────────┐          │
│  │     COMPLIANCE SCORE      │          │
│  │         ██████             │          │
│  │           D               │          │
│  │     ⚠️ ความเสี่ยงสูง       │          │
│  │     พบ 8 ปัญหา             │          │
│  └───────────────────────────┘          │
│                                         │
│  ⚠️ ค่าปรับที่อาจเกิดขึ้น:              │
│  สูงสุด ฿25,000,000 (5 การละเมิด)       │
│                                         │
│  ── ปัญหาที่พบ ──                        │
│                                         │
│  🔴 CRITICAL                            │
│  ❌ ไม่มี Privacy Policy                 │
│     → ละเมิด PDPA มาตรา 23              │
│     → ค่าปรับ: สูงสุด ฿5,000,000        │
│     [🔓 สร้าง Privacy Policy อัตโนมัติ]  │
│                                         │
│  ❌ ไม่มี Cookie Consent Banner          │
│     → พบ cookies 12 ตัวโดยไม่ขอ consent  │
│     → ค่าปรับ: สูงสุด ฿5,000,000        │
│     [🔓 ติดตั้ง Cookie Banner]           │
│                                         │
│  🟡 WARNING                             │
│  ⚠️ ฟอร์มเก็บข้อมูลไม่มี consent        │
│     → พบ 3 ฟอร์มที่เก็บชื่อ/อีเมล/โทร    │
│     → ไม่มี checkbox ขอความยินยอม         │
│     [🔓 เพิ่ม Consent ในฟอร์ม]           │
│                                         │
│  ⚠️ Third-Party Trackers ไม่ระบุ          │
│     → Google Analytics, Facebook Pixel,  │
│       LINE Tag, Hotjar                   │
│     → ต้องแจ้งใน privacy policy           │
│                                         │
│  🟢 PASSED                              │
│  ✅ SSL Certificate valid                │
│  ✅ HTTPS enforced                       │
│                                         │
│  ══════════════════════════════════      │
│  แก้ไขทั้งหมดด้วย MutePDPA             │
│                                         │
│  ฿990/เดือน — เริ่มแก้ปัญหาวันนี้         │
│                                         │
│  ┌─────────────────────────┐            │
│  │ 📱 LINE ID ของคุณ        │            │
│  │ หรือ 📧 อีเมล             │            │
│  │    [แจ้งเตือนเมื่อเปิดบริการ]│            │
│  └─────────────────────────┘            │
│                                         │
│  🔒 ข้อมูลของคุณปลอดภัย เราปฏิบัติตาม PDPA│
└─────────────────────────────────────────┘
```

### Screen 4: Thank You + Share
```
┌─────────────────────────────────────────┐
│  ✅ รับแจ้งเตือนแล้ว!                    │
│                                         │
│  เราจะแจ้งคุณเมื่อ MutePDPA เปิดบริการ   │
│  คุณจะได้ส่วนลด 50% สำหรับ 3 เดือนแรก  │
│                                         │
│  ── ระหว่างรอ ──                         │
│  📥 Download PDPA Checklist ฟรี (PDF)    │
│  🔗 แชร์ผลตรวจกับทีม                    │
│  📊 ตรวจเว็บอื่นอีก                      │
│                                         │
│  [แชร์ Facebook] [แชร์ LINE] [Copy Link] │
└─────────────────────────────────────────┘
```

---

## 3. Pricing

### 3.1 Tier Structure

| Tier | Price | Target | Features |
|------|-------|--------|----------|
| **Free** | ฿0 | Lead gen | 1 scan/month, basic scorecard, top-level issues only |
| **Starter** | ฿990/mo (฿9,900/yr = 2 months free) | Micro biz, freelancers | Privacy policy generator, cookie banner, 3 document templates, monthly re-scan, email support |
| **Business** | ฿2,990/mo (฿29,900/yr) | SMEs 5-50 emp | Everything Starter + breach workflow, employee training (20 seats), DSAR management, ALL templates, compliance dashboard, priority support |
| **Enterprise** | ฿9,900/mo (฿99,000/yr) | 50-500 emp | Everything Business + DPO-as-a-Service, quarterly lawyer review, unlimited training seats, API access, annual audit report, dedicated account manager |

### 3.2 Pricing Psychology

- **Free scan → show ALL problems → gate the solutions** = classic freemium fear funnel
- Yearly discount (2 months free) encourages commitment
- Business tier is the target — ฿2,990/mo is 1/10th of cheapest law firm (฿50K)
- Enterprise includes lawyer review — justifies 3.3x price jump

### 3.3 Comparison Anchor

| Solution | Cost | Notes |
|----------|------|-------|
| Thai law firm (basic) | ฿50,000-150,000 one-time | No ongoing monitoring |
| Big 4 consulting | ฿500,000-2,000,000 | Enterprise only |
| OneTrust | ฿360,000/yr ($10K+) | English, enterprise complexity |
| **MutePDPA Starter** | **฿11,880/yr** | Thai, AI, self-serve, ongoing |
| **MutePDPA Business** | **฿35,880/yr** | Full compliance suite |

---

## 4. Tech Stack

### 4.1 Scanner Architecture

```
User enters URL
       ↓
┌─────────────────────┐
│   Scan Queue (Bull)  │  ← Rate limit: 10 concurrent scans
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Playwright/Puppeteer │  ← Headless Chrome crawls target site
│  (headless browser)   │
└─────────┬───────────┘
          ↓
┌─────────────────────────────────────┐
│  5 Parallel Checks:                  │
│                                      │
│  1. Cookie Check                     │
│     - Intercept all Set-Cookie       │
│     - Scan localStorage              │
│     - Match against known tracker DB │
│     - Check for consent banner DOM   │
│                                      │
│  2. Privacy Policy Check             │
│     - Crawl links for /privacy etc.  │
│     - Extract text content           │
│     - AI (Claude) check 8 PDPA       │
│       required elements              │
│                                      │
│  3. Form Analysis                    │
│     - Find all <form> elements       │
│     - Detect PII input fields        │
│     - Check for consent checkbox     │
│                                      │
│  4. Tracker Detection                │
│     - Match script srcs against DB   │
│     - Known list: GA, FB, LINE, etc. │
│                                      │
│  5. SSL Check                        │
│     - HTTPS redirect check           │
│     - Certificate validation         │
│     - HSTS header check              │
└─────────┬───────────────────────────┘
          ↓
┌─────────────────────┐
│  Score Calculator     │  ← Weighted scoring → A/B/C/D/F
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Results Page (SSR)   │  ← Shareable URL: mutepdpa.com/scan/abc123
└─────────────────────┘
```

### 4.2 Tech Choices

| Component | Choice | Why |
|-----------|--------|-----|
| **Frontend** | Next.js 14 (App Router) | SSR for scan results (SEO + sharing), React for interactive elements |
| **Scanner Engine** | Playwright (Node.js) | Better than Puppeteer for Thai sites, built-in wait strategies, multi-browser |
| **AI Analysis** | Claude API (Haiku for speed, Sonnet for accuracy) | Best Thai language understanding, cost-effective for privacy policy analysis |
| **Queue** | Bull + Redis | Handle concurrent scans, retry failed jobs, rate limiting |
| **Database** | PostgreSQL (Supabase) | Scan results, user signups, lead data. Supabase = free tier + auth |
| **Hosting** | Vercel (frontend) + Railway (scanner workers) | Vercel free for Next.js, Railway for headless browser workers |
| **Domain** | mutepdpa.com or mutepdpa.co.th | .co.th for Thai trust |
| **Analytics** | PostHog (self-hosted) or Plausible | Privacy-respecting (eat our own dogfood!) |
| **Lead Capture** | LINE Official Account API + Supabase | LINE is primary channel for Thai businesses |

### 4.3 Cost Estimate (Monthly at Scale)

| Item | 1K scans/mo | 10K scans/mo | 50K scans/mo |
|------|-------------|--------------|--------------|
| Vercel | ฿0 (free) | ฿700 (Pro) | ฿700 (Pro) |
| Railway (scanner) | ฿1,500 | ฿5,000 | ฿15,000 |
| Claude API | ฿2,000 | ฿15,000 | ฿60,000 |
| Supabase | ฿0 (free) | ฿850 (Pro) | ฿850 (Pro) |
| Redis (Upstash) | ฿0 (free) | ฿350 | ฿1,500 |
| **Total** | **฿3,500** | **฿21,900** | **฿78,050** |

### 4.4 Prototype Build Timeline

| Day | Task |
|-----|------|
| **Day 1** | Project setup: Next.js, Playwright, Supabase. Landing page with URL input. |
| **Day 2** | Scanner engine: cookie detection, privacy policy page finder, form analysis |
| **Day 3** | AI integration: Claude analyzes privacy policy for 8 PDPA elements. Tracker DB matching. |
| **Day 4** | Results page: compliance score visualization, issue cards, fear elements, CTA |
| **Day 5** | Lead capture: LINE OA integration, email collection. Share functionality. |
| **Day 6** | Polish: Thai copy, mobile responsive, loading animation, error handling |
| **Day 7** | Deploy + test with 20 real Thai business websites. Fix edge cases. |

**Total: 7 days to working prototype.**

---

## 5. Success Metrics

### 5.1 Prototype Phase (Week 1-2)

| Metric | Target | "Go All-In" | "Kill" |
|--------|--------|-------------|--------|
| **Total scans** | 1,000 in week 1 | >2,000 | <200 |
| **Unique visitors** | 3,000 | >5,000 | <500 |
| **Scan completion rate** | >70% | >85% | <50% |
| **Lead capture rate** | >15% of scan completions | >25% | <5% |
| **Share rate** | >5% share scan results | >10% | <1% |
| **Cost per scan** | <฿5 | <฿3 | >฿20 |

### 5.2 Validation Phase (Week 3-4)

| Metric | Target | "Go All-In" | "Kill" |
|--------|--------|-------------|--------|
| **"Would you pay?" survey** | >40% say yes | >60% | <20% |
| **Price sensitivity** | ฿990/mo acceptable by >50% | >70% | <30% |
| **Repeat scans** | >20% scan 2+ URLs | >35% | <5% |
| **Organic/referral traffic** | >30% of total | >50% | <10% |
| **LINE OA followers** | 500+ | 1,000+ | <100 |

### 5.3 Revenue Phase (Month 2-3)

| Metric | Target | "Go All-In" | "Kill" |
|--------|--------|-------------|--------|
| **Paid subscribers** | 50 in Month 1 | 100+ | <10 |
| **MRR** | ฿100K by Month 3 | ฿200K+ | <฿30K |
| **Free→Paid conversion** | >5% | >10% | <2% |
| **Churn** | <5%/month | <3% | >15% |
| **NPS** | >40 | >60 | <20 |

### 5.4 Decision Framework

```
Week 2 check:
  IF scans > 2,000 AND lead rate > 25% → 🟢 GO ALL-IN on full platform
  IF scans > 1,000 AND lead rate > 15% → 🟡 CONTINUE, iterate landing page
  IF scans < 200 OR lead rate < 5%     → 🔴 KILL or pivot

Month 3 check:
  IF MRR > ฿200K AND churn < 3%        → 🟢 Raise funding / hire
  IF MRR > ฿100K AND churn < 5%        → 🟡 Grow organically
  IF MRR < ฿30K OR churn > 15%         → 🔴 KILL
```

---

## 6. Distribution (How to Get 1,000 Scans in Week 1)

### 6.1 Day 1 Launch

1. **Thai SME Facebook Groups** (free, high impact)
   - Post: "สร้างเครื่องมือตรวจเว็บฟรีว่า comply PDPA ไหม ลองใช้ได้เลย → [link]"
   - Target 10 groups with 10K+ members each
   - Groups: SME Thailand, ธุรกิจออนไลน์, E-Commerce Thailand, Startup Thai

2. **Pantip.com post** (free)
   - "สรุปค่าปรับ PDPA ทั้งหมดที่ออกมา + เครื่องมือตรวจเว็บฟรี"
   - Educational content with tool link

3. **LINE OpenChat groups** (free)
   - Thai business / e-commerce groups

### 6.2 Week 1 Paid

4. **Facebook Ads** (฿5,000 test budget)
   - Ad copy: "เว็บคุณเสี่ยงถูกปรับ ฿5M ไหม? ตรวจฟรีใน 60 วินาที"
   - Target: Thai business owners, HR managers, IT managers, age 25-55
   - Lookalike audience from scan users

### 6.3 Ongoing

5. **Every new PDPA enforcement case = content**
   - Blog post analyzing the case
   - Facebook post with fear hook
   - Link to free scanner

---

## 7. Key Risks for Prototype

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Scanner accuracy too low | Medium | High | Test with 50+ Thai sites before launch. Use Claude for analysis, not rule-based only |
| Thai SMEs don't care yet | Medium | Critical | If <200 scans, the market isn't ready. Try again after next enforcement case |
| Site owners block scanner | Low | Medium | Respect robots.txt, user-agent identification, rate limiting |
| Claude API costs spike | Low | Medium | Cache results, use Haiku for simple checks, Sonnet only for policy analysis |
| Legal pushback on "compliance advice" | Low | Medium | Clear disclaimer: "เครื่องมือตรวจสอบเบื้องต้น ไม่ใช่คำแนะนำทางกฎหมาย" |

---

## 8. PDPA 8 Required Elements (Section 23 Checklist)

The AI scanner checks privacy policies for these 8 mandatory elements:

1. ✅ **วัตถุประสงค์** — Purpose of data collection
2. ✅ **ประเภทข้อมูล** — Types of personal data collected
3. ✅ **ระยะเวลาเก็บรักษา** — Data retention period
4. ✅ **ฐานกฎหมาย** — Legal basis for processing
5. ✅ **ผู้รับข้อมูล** — Categories of data recipients
6. ✅ **ข้อมูลติดต่อ** — Contact information of data controller
7. ✅ **สิทธิเจ้าของข้อมูล** — Data subject rights
8. ✅ **ผลกระทบ** — Consequences of not providing data

Each element gets a ✅/❌ in the scan results. Missing elements = specific action items.

---

## Appendix: Competitive Moat Strategy

**Short-term (6 months):** First-mover in AI + Thai + SME PDPA compliance. Build brand as "the PDPA tool."

**Medium-term (12 months):** Database of 50K+ Thai website scans = proprietary compliance benchmark data. Partnership with accountants/lawyers creates distribution moat.

**Long-term (18+ months):** Expand to other Thai compliance (labor law, consumer protection). Expand to SEA (PDPA equivalents in Philippines, Indonesia, Vietnam, Malaysia).

---

*PRD by Sun, AI CEO of MuteLab | February 22, 2026*
*For prototype build starting February 23, 2026*
