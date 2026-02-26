# PRD: MuteWeb #85 — AI Website Builder via LINE
## Product Requirements Document — 2nd Round Runner Up (41/50)
### Includes MuteEvent #96 Merge (Event Websites as Template Category)

**Date:** February 22, 2026  
**Author:** Sun (AI CEO, MuteLab)  
**Status:** 2nd Round Runner Up — PRD Complete, Ready to Build  
**Score:** 41/50 (Deep Dive) | Founder Fit: 8/10

---

## 🎯 ONE-LINE SUMMARY

**Web form → user inputs business info → AI generates preview website in 60 seconds → 3 style options → "เปิดเว็บเลย" CTA → collect contact → convert.**

---

## 1. MVP FEATURES — What We're Building Tomorrow

### 1.1 Core: AI Website Generator Prototype

**NOT the full LINE integration yet.** MVP is a **web form** that proves the AI can generate beautiful Thai business websites instantly.

#### Input Form (Single Page)
| Field | Type | Required | Example |
|-------|------|----------|---------|
| ชื่อธุรกิจ (Business Name) | Text | ✅ | "ร้านนวดบุญศรี" |
| ประเภทธุรกิจ (Business Type) | Dropdown (8 options) | ✅ | "💆 นวด / สปา" |
| เบอร์โทร (Phone) | Tel | ✅ | "081-234-5678" |
| เวลาเปิด-ปิด (Business Hours) | Text | ❌ | "10:00 - 22:00" |
| รายละเอียดธุรกิจ (Description) | Textarea (max 500 chars) | ✅ | "นวดแผนไทย ลูกประคบ อโรมา..." |
| อัปโหลดโลโก้/รูปภาพ (Logo/Photo) | File upload (max 5 files, 5MB each) | ❌ | shop_front.jpg |
| ที่อยู่ / พิกัด (Address) | Text | ❌ | "123 ถ.ราชดำเนิน เชียงใหม่" |
| LINE ID | Text | ❌ | "@boonsri-massage" |

#### Business Type Dropdown (8 Industry Templates)
1. 🍜 ร้านอาหาร / คาเฟ่ (Restaurant / Café)
2. 💆 นวด / สปา (Massage / Spa)
3. 💇 ร้านเสริมสวย / ตัดผม (Beauty Salon / Barber)
4. 🏥 คลินิก / ทันตกรรม (Clinic / Dental)
5. 🏠 อสังหาริมทรัพย์ (Real Estate)
6. 🎓 สอนพิเศษ / โรงเรียน (Tutoring / School)
7. 🔧 ธุรกิจบริการ (Service Business)
8. 🎊 งานอีเวนต์ (Event Website) ← **MuteEvent merged here**

#### Output: Live Preview with 3 Style Options
After form submission, AI generates **3 different style variants** of the same website:
- **Style A:** Modern Minimal — clean whites, geometric, sans-serif
- **Style B:** Warm & Friendly — earth tones, rounded corners, welcoming
- **Style C:** Bold & Professional — dark accents, strong typography, corporate

Each preview shows:
- Hero section with business name + generated tagline
- About section (AI-generated from description)
- Services/Menu section (AI-generated from business type)
- Contact section (phone, LINE, Google Maps embed)
- Photo gallery (if uploaded)
- Mobile-responsive preview toggle

### 1.2 Event Website Template (MuteEvent #96 Merged)

When user selects "🎊 งานอีเวนต์" from dropdown, the form changes to:

| Field | Type | Required | Example |
|-------|------|----------|---------|
| ประเภทงาน (Event Type) | Dropdown | ✅ | "💒 งานแต่ง / 🙏 งานบวช / ⚫ งานศพ / 🎂 งานวันเกิด" |
| ชื่อเจ้าภาพ (Host Names) | Text | ✅ | "โอ๊ต & แพร" |
| วันที่งาน (Event Date) | Date | ✅ | "2026-03-15" |
| สถานที่ (Venue) | Text | ✅ | "โรงแรมแชงกรี-ลา กรุงเทพ" |
| รายละเอียดงาน (Event Details) | Textarea | ❌ | "พิธีแต่งงาน + งานเลี้ยง" |
| PromptPay QR (ซองดิจิทัล) | Toggle ON/OFF | ❌ | ON → input PromptPay number |
| PromptPay Number | Text (if toggle ON) | ❌ | "081-234-5678" |

**Output:** Event website with:
- Beautiful hero with couple names/event name + date + venue
- Event schedule/timeline
- Venue map (Google Maps)
- Photo gallery
- **Optional: "ร่วมอวยพร & ซอง PromptPay" widget** — QR code for digital ซอง with personal message field
- RSVP form (name + number of guests)

### 1.3 Conversion CTA

After user previews their generated website:

**Primary CTA: "🚀 เปิดเว็บเลย" (Launch My Website)**
- Collects: LINE ID / Email / Phone number
- Shows pricing tiers (see Section 3)
- "สนใจแพ็กไหน?" selector
- Submit → enters sales pipeline

**Secondary CTA: "📤 แชร์ตัวอย่างเว็บ" (Share Preview)**
- Generates shareable preview link (valid 7 days)
- Built-in virality: friends see the preview → try the generator themselves

---

## 2. USER FLOW — Every Screen the User Sees

### Flow Diagram

```
[Landing Page] → [Generator Form] → [Loading Animation 60s] → [3 Style Previews] → [CTA: เปิดเว็บเลย] → [Contact + Pricing] → [Thank You]
```

### Screen-by-Screen Detail

#### SCREEN 1: Landing Page (muteweb.co)
**Purpose:** Hook visitors, drive them to try the generator

**Hero:**
- Headline: "สร้างเว็บสวยให้ธุรกิจคุณ ใน 60 วินาที"
- Sub: "AI สร้างเว็บมืออาชีพ พร้อมเนื้อหาภาษาไทย ไม่ต้องมีทักษะ IT"
- CTA Button: "🚀 ลองสร้างเว็บฟรี" → scrolls to form
- Social proof: "สร้างเว็บไปแล้ว [X] เว็บ" (counter)

**Below fold:**
- 3 example websites (restaurant, massage, event)
- How it works (3 steps)
- Pricing preview
- FAQ

#### SCREEN 2: Generator Form
**Purpose:** Collect business info

- Clean, single-column form
- Business type dropdown at top (changes form fields for events)
- Real-time validation
- Upload area with drag-and-drop
- Big green button: "✨ สร้างเว็บของฉัน" (Create My Website)
- Below button: "ฟรี ไม่มีข้อผูกมัด" (Free, no commitment)

#### SCREEN 3: Loading Animation (30-60 seconds)
**Purpose:** Build anticipation while AI generates

- Animated progress with steps:
  1. "🔍 วิเคราะห์ธุรกิจของคุณ..." (Analyzing your business...)
  2. "🎨 ออกแบบเว็บไซต์..." (Designing your website...)
  3. "✍️ เขียนเนื้อหา..." (Writing content...)
  4. "📱 ปรับให้รองรับมือถือ..." (Optimizing for mobile...)
  5. "✅ เสร็จแล้ว!" (Done!)
- Each step ~10-15 seconds
- Tip cards rotating: "รู้ไหม? 70% ของลูกค้าค้นหาร้านค้าบน Google ก่อนไป"

#### SCREEN 4: 3 Style Previews
**Purpose:** Wow the user, create ownership feeling

- Top: "เว็บไซต์ของ [Business Name] พร้อมแล้ว! 🎉"
- 3 tabs/cards: Style A / Style B / Style C
- Each shows full-page preview in an iframe/device frame
- Toggle: Desktop / Mobile preview
- Below each: "เลือกแบบนี้" button
- All 3 are live, scrollable previews

#### SCREEN 5: CTA + Pricing Overlay
**Purpose:** Convert interest to lead

When user clicks "เลือกแบบนี้" or "เปิดเว็บเลย":

- Modal/page showing selected style thumbnail
- Pricing tiers (3 cards — see Section 3)
- Contact form:
  - LINE ID (preferred)
  - Email
  - Phone number
  - "แพ็กที่สนใจ" dropdown (Basic/Pro/Business)
- Button: "📩 ส่งข้อมูล — ทีมจะติดต่อกลับใน 1 ชั่วโมง"

#### SCREEN 6: Thank You Page
**Purpose:** Confirm, set expectations

- "ขอบคุณค่ะ! 🙏 ทีม MuteWeb จะติดต่อกลับภายใน 1 ชั่วโมง"
- Preview link of their generated website
- Share buttons (LINE, Facebook, Copy Link)
- "ระหว่างรอ ดูตัวอย่างเว็บที่เราสร้าง →" (portfolio link)

---

## 3. PRICING — 3 Tiers

### Pricing Table

| | 🟢 Basic | 🔵 Pro | 🟣 Business |
|---|---|---|---|
| **ค่าสร้างเว็บ (Setup)** | **฿1,990** | **฿4,990** | **฿9,990** |
| **ค่ารายเดือน (Monthly)** | **฿299/เดือน** | **฿499/เดือน** | **฿899/เดือน** |
| **Year 1 Total** | **฿5,578** | **฿10,978** | **฿20,778** |
| จำนวนหน้า | 5 หน้า | 10 หน้า | 15+ หน้า |
| โดเมน | subdomain.muteweb.co | โดเมนเอง (ปีแรกฟรี) | โดเมนเอง (ปีแรกฟรี) |
| SSL + CDN | ✅ | ✅ | ✅ |
| Mobile Responsive | ✅ | ✅ | ✅ |
| ฟอร์มติดต่อ | ✅ | ✅ | ✅ |
| Google Maps | ✅ | ✅ | ✅ |
| SEO พื้นฐาน | ✅ | ✅ Advanced SEO |  ✅ Advanced SEO |
| เชื่อม LINE OA | ❌ | ✅ | ✅ |
| แกลเลอรีรูปภาพ | ❌ | ✅ | ✅ |
| 2 ภาษา (TH/EN) | ❌ | ✅ | ✅ |
| ระบบจอง/นัดหมาย | ❌ | ❌ | ✅ |
| E-commerce (≤50 สินค้า) | ❌ | ❌ | ✅ |
| Google Business Profile | ❌ | ✅ | ✅ |
| Analytics Dashboard | Basic | Full | Full + Reports |
| อัปเดตเนื้อหา/เดือน | 1 ครั้ง | 2 ครั้ง | 4 ครั้ง |
| แก้ไขฟรี | 2 รอบ | 3 รอบ | 5 รอบ |
| แก้ไขเพิ่ม | ฿500/รอบ | ฿500/รอบ | ฿500/รอบ |
| Priority Support | ❌ | ❌ | ✅ |

### Event Website Pricing
Event websites use the **same 3 tiers** above, with these additions:
- All tiers: Event schedule, venue map, RSVP form
- Pro+: PromptPay ซอง widget, guest management dashboard
- Business: Seating chart, multi-page (ceremony + reception), VIP features

### Pricing Psychology
- **Basic ฿1,990** = "ถูกกว่าสั่งกาแฟ Starbucks 1 เดือน" — impulse buy territory
- **Pro ฿4,990** = anchor tier, most popular (mark with "แนะนำ" badge)
- **Business ฿9,990** = still 5-50x cheaper than agencies (฿50K-100K)
- Monthly fee framed as "ค่าดูแลเว็บ" (website maintenance) — Thai SMEs understand this

### Cost & Margin Analysis

| Tier | Setup Revenue | Our Cost | Gross Margin |
|------|--------------|----------|-------------|
| Basic | ฿1,990 | ~฿85 (AI ฿35 + QA ฿50) | **95.7%** |
| Pro | ฿4,990 | ~฿150 (AI ฿50 + QA ฿100) | **97.0%** |
| Business | ฿9,990 | ~฿350 (AI ฿100 + QA ฿250) | **96.5%** |
| Hosting (any) | ฿299-899/mo | ~฿5/mo (Cloudflare) | **98.3-99.4%** |

---

## 4. TECH STACK

### Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                  FRONTEND                        │
│  Next.js 14 (App Router) + Tailwind CSS          │
│  Deployed on Vercel (free tier)                  │
│  muteweb.co                                      │
├─────────────────────────────────────────────────┤
│                  AI ENGINE                        │
│  Claude Sonnet 4 API                             │
│  ┌─────────────┐  ┌──────────────┐              │
│  │ Content Gen  │  │ Template     │              │
│  │ (Thai copy)  │  │ Selection    │              │
│  └─────────────┘  └──────────────┘              │
│  ┌─────────────┐  ┌──────────────┐              │
│  │ SEO Meta    │  │ Style Variant│              │
│  │ Generation  │  │ Generator    │              │
│  └─────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────┤
│              TEMPLATE ENGINE                     │
│  8 Industry Templates (HTML + Tailwind)          │
│  3 Style Variants per template                   │
│  AI fills content into template slots            │
├─────────────────────────────────────────────────┤
│            STATIC SITE GENERATION                │
│  Generated HTML/CSS/JS → Cloudflare Pages        │
│  Each customer site = separate CF Pages project  │
├─────────────────────────────────────────────────┤
│                 STORAGE                          │
│  Cloudflare R2 (images) · Supabase (user data)  │
├─────────────────────────────────────────────────┤
│               HOSTING (CUSTOMER SITES)           │
│  Cloudflare Pages (free tier)                    │
│  Wildcard: *.muteweb.co + custom domains         │
│  SSL: auto via Cloudflare                        │
└─────────────────────────────────────────────────┘
```

### Tech Stack Details

| Layer | Technology | Cost | Why |
|-------|-----------|------|-----|
| **Frontend (Builder)** | Next.js 14 + Tailwind CSS | Free (Vercel) | Fast, SEO-friendly, great DX |
| **AI Content Gen** | Claude Sonnet 4 API | ~฿35/site | Best Thai language quality, fast |
| **Template Engine** | Custom HTML + Tailwind templates | ฿0 (built in-house) | Full control, no vendor lock-in |
| **Static Site Gen** | Custom Node.js pipeline | ฿0 | Template + AI content → static HTML |
| **Customer Hosting** | Cloudflare Pages | ฿0 (free tier) | Unlimited bandwidth, global CDN, free SSL |
| **Image Storage** | Cloudflare R2 | ~฿0.015/GB | Cheap, same ecosystem |
| **Database** | Supabase (PostgreSQL) | Free → ฿875/mo | User data, leads, site configs |
| **Forms** | Cloudflare Workers | ฿0 (free tier) | Contact forms on customer sites |
| **Analytics** | Plausible Analytics | ฿280/mo (50 sites) | Privacy-friendly, simple |
| **Domain** | Cloudflare DNS | ฿350/yr (.co domain) | Wildcard subdomains |
| **Payment** | PromptPay QR (manual verify) | ฿0 | MVP: manual. Phase 2: Opn Payments |

### AI Generation Pipeline (Per Website)

```
Input (form data)
  ↓
Step 1: Template Selection (Claude Sonnet)
  - Input: business type, description
  - Output: best template ID + color scheme recommendation
  - Tokens: ~2K in / 500 out
  - Cost: ~฿1
  ↓
Step 2: Content Generation (Claude Sonnet)
  - Input: business info, template structure
  - Output: Thai content for all sections (hero, about, services, contact)
  - Tokens: ~3K in / 8K out
  - Cost: ~฿10
  ↓
Step 3: Style Variant Generation (Claude Sonnet)
  - Input: content + 3 style configs
  - Output: CSS variable overrides for each style
  - Tokens: ~2K in / 3K out
  - Cost: ~฿5
  ↓
Step 4: HTML Assembly (Code, no AI)
  - Template + content + style → 3 complete HTML pages
  - Image optimization (sharp.js)
  - Cost: ฿0
  ↓
Step 5: Deploy Previews
  - 3 static sites deployed to Cloudflare Pages (preview URLs)
  - Cost: ฿0
  ↓
Total: ~฿16-20 per generation (3 styles)
Total with images: ~฿35 per generation
```

### MVP Build Plan (What Oat Builds)

| Day | Task | Output |
|-----|------|--------|
| **Day 1** | Next.js project setup, form UI, business type selector | Working form at muteweb.co |
| **Day 2** | Claude API integration, content generation pipeline | AI generates Thai content from form inputs |
| **Day 3** | 3 base templates (restaurant, massage, general) + style variants | 3 templates × 3 styles = 9 combinations |
| **Day 4** | Preview renderer (iframe + device frame), loading animation | Users see live preview of generated site |
| **Day 5** | Event template (wedding/ordination), PromptPay QR widget | Event website flow working |
| **Day 6** | CTA flow, contact collection, Supabase integration | Leads captured in database |
| **Day 7** | Polish, mobile responsive, deploy, test with 5 real businesses | Live at muteweb.co |

**Total MVP cost: ฿0** (Oat builds it, free tier everything)  
**Timeline: 7 days**

---

## 5. SUCCESS METRICS — Go / Continue / Kill

### Week 1 Metrics (Prototype Launch)

| Metric | 🔴 Kill | 🟡 Continue | 🟢 Go |
|--------|---------|------------|-------|
| **Sites Generated** (form submissions) | <50 | 50-200 | >200 |
| **Preview Completion Rate** | <30% | 30-60% | >60% |
| **CTA Click Rate** ("เปิดเว็บเลย") | <5% | 5-15% | >15% |
| **Contact Submissions** | <5 | 5-20 | >20 |
| **Paid Conversions** | 0 | 1-3 | >3 |

### Month 1 Metrics

| Metric | 🔴 Kill | 🟡 Continue | 🟢 Go |
|--------|---------|------------|-------|
| **Total Sites Generated** | <200 | 200-1,000 | >1,000 |
| **Paid Customers** | <5 | 5-15 | >15 |
| **Revenue** | <฿10K | ฿10-50K | >฿50K |
| **Avg Generation Time** | >5 min | 2-5 min | <2 min |
| **Customer Satisfaction** | <3.5★ | 3.5-4.5★ | >4.5★ |

### Month 3 Metrics (Scale Decision)

| Metric | 🔴 Kill | 🟡 Pivot | 🟢 Scale |
|--------|---------|---------|----------|
| **Monthly Builds** | <20 | 20-60 | >60 |
| **Hosting MRR** | <฿5K | ฿5-20K | >฿20K |
| **Total Revenue** | <฿50K | ฿50-200K | >฿200K |
| **Referral Rate** | <5% | 5-15% | >15% |
| **Hosting Churn** | >15%/mo | 5-15%/mo | <5%/mo |

### North Star Metric
**"Number of live websites hosted on MuteWeb"** — this is the single metric that compounds. Every hosted site = ฿299-899/mo recurring forever.

---

## 6. DISTRIBUTION PLAN — First 100 Customers

### Week 1: Facebook Group Blitz (฿0 cost)

Post in these Thai SME Facebook groups (all 100K+ members):
1. **กลุ่มเจ้าของร้านอาหาร** (Restaurant Owners) — 300K+
2. **กลุ่มเจ้าของธุรกิจ SME** (SME Owners) — 200K+
3. **ร้านเสริมสวย/ทำผม** (Beauty/Hair Salons) — 100K+
4. **ร้านนวด สปา** (Massage/Spa) — 50K+
5. **งานแต่งงาน DIY** (Wedding DIY) — 100K+ ← for MuteEvent angle

**Post format:**
> "ลองสร้างเว็บให้ธุรกิจคุณฟรี ใน 60 วินาที 🚀
> 
> กรอกข้อมูลร้าน → AI สร้างเว็บสวยให้ทันที → เลือกแบบที่ชอบ
> 
> ไม่ต้องมีทักษะ IT ไม่ต้องจ่ายเงิน แค่ลอง!
> 
> 👉 [muteweb.co]
> 
> #สร้างเว็บ #เว็บไซต์ร้านอาหาร #SME"

### Week 2-4: Paid Ads (฿5,000-10,000/mo)
- Facebook/Instagram ads targeting Thai business owners 25-55
- CPA target: ฿200-500 per lead
- Creative: Before/after — "ร้านนวดเชียงใหม่ ได้เว็บสวยจาก MuteWeb"

### Ongoing: Referral Program
- "แนะนำเพื่อน ลด ฿500 ค่าสร้างเว็บ" (Refer a friend, ฿500 off)
- Every hosted site footer: "Powered by MuteWeb — สร้างเว็บฟรี" (free viral loop)

---

## 7. RISKS & MITIGATIONS

| Risk | Severity | Mitigation |
|------|----------|------------|
| AI generates low-quality Thai content | HIGH | Template-first approach ensures layout quality. AI only fills content slots. Human QA for paid sites. |
| Users generate but don't convert | HIGH | Free preview creates ownership effect. Follow up via LINE within 1 hour. Show social proof. |
| "Facebook Page ก็พอ" objection | HIGH | Content marketing: Google search visibility comparison, credibility case studies |
| Support overload from revisions | MEDIUM | Clear 2-3 revision cap upfront. Phase 2: LINE self-edit bot |
| Cloudflare free tier limits | LOW | 500 builds/day free. Won't hit this for months. $5/mo paid removes all limits. |
| Competition copies us | LOW | First-mover in Thai market. LINE distribution moat. Template quality moat. |

---

## 8. PHASE 2 ROADMAP (After MVP Validation)

| Phase | Timeline | Features |
|-------|----------|----------|
| **Phase 2a** | Month 2-3 | LINE OA chatbot intake (replace web form), PromptPay payment integration |
| **Phase 2b** | Month 3-4 | 5 more templates, LINE self-edit bot, analytics dashboard |
| **Phase 2c** | Month 4-6 | Agent/affiliate program, custom domain management, e-commerce add-on |
| **Phase 3** | Month 6-12 | Full MuteEvent integration (RSVP, ซอง dashboard, guest management) |

---

## DECISION: STRONG GO ✅

**Why build this tomorrow:**
1. ฿0 MVP cost (Oat builds it, free tier everything)
2. 7-day build to functional prototype
3. Cash-flow positive from first sale
4. No Thai AI website builder exists — genuine market gap
5. 3.2M Thai SMEs without websites — massive TAM
6. The prototype IS the marketing — every generated preview is a lead magnet

**The bet:** Can AI generate a Thai business website that's good enough for a ฿1,990 impulse buy?

If YES → we have a ฿33M+ ARR business.  
If NO → we learned in 7 days and ฿0 spent.

**Risk/reward ratio: Exceptional.**

---

*PRD by Sun, AI CEO of MuteLab. February 22, 2026.*
