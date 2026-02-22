# PRD: MuteKid — AI Homework Helper & Learning Companion for Thai Parents
### Product Requirements Document v2.0
**Status:** 2nd Round Runner Up — PRD Ready | **Score:** 36/50 | **Date:** 2026-02-22 (refreshed)

---

## 1. Executive Summary

**MuteKid** is a LINE-native AI homework helper that lets Thai K-12 students photograph homework problems and receive step-by-step explanations in Thai, aligned to the สพฐ./OBEC curriculum.

**One-liner:** "ติวเตอร์ AI ส่วนตัว ฿199/เดือน — ถูกกว่ากวดวิชา 25 เท่า"

### Why Now
- ฿50-80B/yr Thai tutoring market, 10M+ students
- Parents spend ฿20-100K/yr per child on tutoring
- **Zero** Thai AI homework helper on LINE (Photomath/Khanmigo = English only, Snapask = dying, StartDee = pivoted)
- 67M LINE users in Thailand = zero-friction distribution
- AI accuracy for math/science now >85% — good enough for launch

### Revenue Math
- 10K families × ฿199/mo + 2K premium × ฿499/mo + B2B schools = **฿33.3M/yr ($1.04M)**
- Break-even: **~2,070 paying users** (Month 3-4)
- Gross margin: **~97%** (Gemini API + LINE = ฿3-5/user/mo)

---

## 2. Problem & Market

### The Pain (Validated)
| Pain Point | Evidence |
|-----------|----------|
| Tutoring is expensive | ฿3K-8K/mo group, ฿500-2K/hr private |
| Parents can't help with homework | Most Thai parents struggle with math past ป.4 |
| No instant help at homework time (7-9 PM) | Tutors unavailable, YouTube = passive |
| Exam stress (O-NET, TCAS) | Parents invest ฿50-200K+ in exam prep |
| ChatGPT exists but scares parents | No child safety, no progress tracking, no Thai curriculum |

### Target Users
- **Primary:** Thai parents with children ป.4-ม.3, urban, household income >฿30K/mo
- **Sweet spot:** ป.4-ม.3 (old enough to use tech, young enough to need help)
- **Market size:** ~5M families that spend on supplementary education

### Competitive Landscape

| Feature | MuteKid | ChatGPT | Photomath | Snapask | StartDee |
|---------|---------|---------|-----------|---------|----------|
| Thai Language | ✅ Native | ⚠️ Ok | ❌ | ✅ | ✅ |
| AI-Powered | ✅ | ✅ | ✅ Math only | ❌ Human | ❌ Video |
| LINE-Native | ✅ | ❌ | ❌ | ❌ | ❌ |
| Thai Curriculum | ✅ | ❌ | ❌ | ⚠️ | ✅ |
| Parent Dashboard | ✅ | ❌ | ❌ | ❌ | ❌ |
| Child Safety | ✅ | ❌ | ✅ | ✅ | ✅ |
| Price/mo | ฿199 | Free-฿700 | ฿350 | Dead | Free |
| Status (2026) | **New** | Active | Active | **Dying** | **Struggling** |

**The Gap:** AI + Thai + LINE + Thai Curriculum + Parent Dashboard = **completely empty**.

### ChatGPT Threat — Our Counter
The #1 risk. 67% of Thai university students already use ChatGPT for homework. **Chegg lost 90% stock value** when ChatGPT cannibalized homework answers.

**Our moat is NOT the AI — it's the parent experience:**
1. **Parent Dashboard** — ChatGPT gives parents ZERO insight into what kids study
2. **Child Safety** — Education-only content filtering
3. **LINE Convenience** — Already installed on 56M Thai phones
4. **Curriculum Alignment** — Mapped to Thai textbooks + exam formats
5. **Progress Tracking** — Weak subjects, study patterns, improvement over months

---

## 3. MVP Features (Prototype-Ready)

### 3.1 What We're Building Tomorrow

**Scope: LINE OA bot + LIFF dashboard, Math + Science only, ป.4-ม.3**

#### Feature 1: 📸 Homework Photo Scanner
- Parent/student sends photo via LINE chat
- Gemini Vision API extracts text + understands problem
- Supports printed text AND handwriting
- Auto-detects subject (math vs science)
- **Latency target:** <10 seconds photo → explanation

#### Feature 2: 🧠 Step-by-Step Thai Explanation
- Grade-level appropriate Thai language
- Two modes:
  - **โหมดเด็ก (Kid Mode):** Socratic — guides to understanding with questions
  - **โหมดพ่อแม่ (Parent Mode):** Direct — gives answer + explanation for parent to teach
- Includes encouraging Thai phrases ("เก่งมาก!", "ใกล้ถูกแล้ว!")
- Confidence indicator: "ครูAIไม่แน่ใจ ลองถามคุณครูด้วยนะ" when low confidence

#### Feature 3: 👨‍👩‍👧 Parent Account + Child Profile
- Parent registers via LINE OA
- Add child: name, grade level (ป.4-ม.3), school name (optional)
- All interactions logged under parent account
- PDPA consent flow at registration

#### Feature 4: 📊 Basic Parent Dashboard (LIFF)
- Subjects asked about (pie chart)
- Questions per day/week
- Topics child struggles with most
- Accessed via LINE rich menu → LIFF web app

#### Feature 5: 🆓→💰 Freemium Gate
- **Free:** 5 homework photos/day, math only
- **Paid (฿199/mo):** Unlimited photos, all subjects, parent dashboard, up to 3 children
- PromptPay QR payment (Stripe Thailand or manual for MVP)

### 3.2 User Flows

#### Parent Discovery → First Use
```
1. Parent sees MuteKid in Facebook mom group / TikTok video
2. Clicks LINE OA link → adds MuteKid as friend
3. Rich menu shows: "ถ่ายรูปการบ้าน" | "แดชบอร์ด" | "สมัครสมาชิก"
4. Parent registers (name, child grade)
5. Sends first homework photo
6. Gets step-by-step explanation in Thai in <10 seconds
7. 😍 "ว้าว ดีกว่าที่คิด!" → shares with parent LINE group
```

#### Daily Usage (Parent)
```
Evening 7 PM: ลูกทำการบ้านไม่ได้
1. Parent opens LINE → MuteKid
2. Takes photo of math problem
3. Receives: "โจทย์: หา x จาก 3x + 7 = 22"
4. Step 1: "ย้าย 7 ไปอีกฝั่ง → 3x = 22 - 7 = 15"
5. Step 2: "หาร 3 ทั้งสองฝั่ง → x = 15 ÷ 3 = 5"
6. Step 3: "ตรวจ: 3(5) + 7 = 15 + 7 = 22 ✅ ถูกต้อง!"
7. Optional: "อยากลองโจทย์คล้ายๆ กันไหม?" → practice mode
```

#### Daily Usage (Student, ม.1-ม.3)
```
After school: ทำการบ้านวิทย์ไม่เข้าใจ
1. Opens MuteKid on parent's LINE (or shared access)
2. Takes photo of science question about photosynthesis
3. Kid Mode activates: "ลองคิดดูก่อนนะ — พืชต้องการอะไรบ้างในการสังเคราะห์แสง? 🌱"
4. Student replies: "แสงแดด กับน้ำ"
5. AI: "เก่ง! ถูกแล้ว 2 อย่าง ยังขาดอีก 1 อย่าง — มันเป็นแก๊สที่เราหายใจออก..."
6. Student: "คาร์บอนไดออกไซด์!"
7. AI: "เยี่ยมมาก! 🎉 สรุป: แสง + น้ำ + CO₂ → น้ำตาล + O₂ ..."
```

#### Parent Dashboard Check (Weekly)
```
Sunday morning:
1. Parent opens LINE rich menu → "แดชบอร์ด"
2. LIFF opens: weekly summary
3. Shows: "สัปดาห์นี้ น้องเอม ถาม 23 ข้อ"
4. Subject breakdown: คณิต 60%, วิทย์ 30%, อื่นๆ 10%
5. Weak area: "เศษส่วน (Fractions) — ถามซ้ำ 8 ครั้ง"
6. Suggestion: "ลองให้น้องฝึกเศษส่วนเพิ่ม — นี่คือโจทย์ 3 ข้อ"
```

---

## 4. Pricing Strategy

### B2C Pricing (THB)

| Tier | Price | What You Get |
|------|-------|-------------|
| **ฟรี** | ฿0 | 5 photos/day, math only, basic explanations |
| **Family ครอบครัว** | ฿199/mo | Unlimited photos, math + science + Thai, parent dashboard, 3 children |
| **Premium พรีเมียม** | ฿499/mo | Everything + O-NET/TCAS prep, voice explanations, unlimited children, priority |

**Why ฿199 works:**
- = 1 hour of group tutoring (parent saves 25x)
- = 15 minutes of private tutor (parent saves 100x)
- < 1 Starbucks coffee for Bangkok middle class
- Free tier is generous enough to hook, limited enough to convert

### B2B Pricing (Future, Month 4+)

| Tier | Price | Target |
|------|-------|--------|
| **School Basic** | ฿29/student/mo | Teacher dashboard + class analytics |
| **School Pro** | ฿49/student/mo | + exam prep + parent reports |
| **Enterprise** | Custom | Tutoring centers, white-label |

**B2B Strategy:** Target private schools first (4K+ schools, 1-3mo decision cycle). Free 1-semester pilot → measure O-NET improvement → convert to paid.

---

## 5. Tech Stack (Prototype)

### Architecture
```
[LINE Messaging API] → [Webhook: Cloud Run/Vercel]
     ↓                        ↓
[Image received]    →  [Gemini Vision API: OCR + Understanding]
                              ↓
                    [Claude/Gemini Pro: Step-by-step Thai explanation]
                              ↓
                    [LINE Reply: Flex Message with formatted steps]
                              ↓
                    [PostgreSQL: Log question + subject + grade]
                              ↓
                    [LIFF Dashboard: React/Next.js → parent view]
```

### Stack Choices

| Component | Choice | Why |
|-----------|--------|-----|
| **LINE Integration** | LINE Messaging API + LIFF | 67M Thai users, zero app download |
| **Photo → Text** | Gemini Vision API (1.5 Flash) | Best Thai OCR, cheapest ($0.0003/photo) |
| **AI Explanation** | Gemini Pro or Claude | Thai quality, Socratic prompting |
| **Backend** | Node.js on Cloud Run or Vercel | Fast deploy, auto-scale |
| **Database** | PostgreSQL (Supabase) | Free tier, good enough for MVP |
| **Dashboard** | LIFF + React (Next.js) | Opens inside LINE, mobile-first |
| **Payments** | PromptPay QR (manual for MVP) | 92% Thai adoption, zero friction |
| **Thai Curriculum KB** | O-NET past papers (10 yrs, public) | Free data, high value for exam prep |

### Cost Per User/Month
| Item | Cost |
|------|------|
| Gemini Vision API (60 photos) | ฿0.63 |
| Gemini Pro (explanations) | ฿1-2 |
| LINE messaging (replies = free) | ฿0 |
| Infrastructure (Cloud Run) | ฿0.50 |
| **Total COGS** | **฿3-5** |
| **Gross Margin at ฿199** | **~97%** |

### MVP Build Timeline

| Day | Task |
|-----|------|
| **Day 1** | LINE OA setup + Messaging API webhook + basic photo receive |
| **Day 2** | Gemini Vision integration (photo → problem text extraction) |
| **Day 3** | AI explanation engine (Gemini/Claude + Thai curriculum prompt) |
| **Day 4** | Parent registration + child profile + usage logging |
| **Day 5** | Freemium gate (5/day counter) + rich menu |
| **Day 6** | Basic LIFF dashboard (questions asked, subject breakdown) |
| **Day 7** | Testing with real homework photos + polish + deploy |

**Total MVP cost: ฿0** (all free tiers: LINE, GCP, Supabase, Vercel)

---

## 6. AI Prompt Strategy

### System Prompt (Production)
```
คุณคือ "ครูAI MuteKid" ติวเตอร์ AI สำหรับนักเรียนชั้น {grade_level}
วิชา: {detected_subject}
โหมด: {socratic|direct}

กฎ:
1. อธิบายเป็นภาษาไทยที่เหมาะกับนักเรียนชั้น {grade_level}
2. อธิบายทีละขั้นตอน ใช้ emoji ให้อ่านง่าย
3. ถ้าโหมด Socratic: ถามคำถามนำ อย่าให้คำตอบตรงๆ
4. ถ้าโหมด Direct: ให้คำตอบ + อธิบายวิธีทำ
5. ตรงตามหลักสูตร สพฐ.
6. ห้ามพูดเรื่องนอกเหนือการเรียน
7. ถ้าไม่แน่ใจ: "ครูAIไม่แน่ใจคำตอบนี้ ลองถามคุณครูที่โรงเรียนด้วยนะ 🙏"
8. ให้กำลังใจ: "เก่งมาก!", "ใกล้ถูกแล้ว!", "พยายามดีมาก!"
9. จบด้วยคำถามเพื่อตรวจสอบความเข้าใจ
```

### AI Accuracy by Subject

| Subject | Accuracy | MVP Status |
|---------|----------|------------|
| **Math (ป.4-ม.3)** | ✅ 90-95% | ✅ Launch |
| **Science (ป.4-ม.3)** | ✅ 85-90% | ✅ Launch |
| **English** | ✅ 95%+ | Phase 2 |
| **Thai Language (ภาษาไทย)** | ⚠️ 60-80% | Phase 2 with disclaimers |
| **Social Studies** | ⚠️ 70-80% | Phase 3 |

**Strategy:** Launch math + science only. These subjects work best with AI and are the most in-demand homework help subjects.

---

## 7. Go-to-Market Plan

### Week 1-2: Build MVP
- LINE OA + Gemini Vision + AI explanation engine
- Basic parent registration + freemium gate
- Test with 10 real homework photos from each grade level

### Week 3-4: Beta Launch
- Post in 3 Facebook parent groups (กลุ่มแม่ๆ, พ่อแม่สอนลูก)
- Target: **200 families, 50+ daily active**
- Collect NPS, feature requests, accuracy feedback
- **Go/Kill metric: 40% D7 retention**

### Month 2-3: Paid Launch
- Enable ฿199/mo tier
- TikTok demo videos ("ถ่ายรูปการบ้าน → AI อธิบายใน 10 วินาที")
- 3-5 Thai parent KOL partnerships
- Target: **1,000 free users, 100 paid**
- **Go/Kill: 5%+ free-to-paid conversion**

### Month 3-6: Scale B2C
- Facebook/LINE Ads targeting parents
- Referral: invite 3 friends → 1 month free
- O-NET prep push (3-4 months before exam)
- Target: **10K free, 2K paid**

### Month 4-8: B2B Pilot
- 5 private school free pilots
- Build teacher dashboard
- Measure O-NET score improvements
- Target: **20 paying schools**

---

## 8. Success Metrics & Go/Kill Thresholds

### MVP Validation (Week 3-4)

| Metric | 🟢 GO | 🟡 CONTINUE | 🔴 KILL |
|--------|--------|-------------|---------|
| Beta users (2 weeks) | >200 | 100-200 | <100 |
| D7 retention | >40% | 25-40% | <25% |
| Photos/user/week | >5 | 3-5 | <3 |
| NPS | >40 | 20-40 | <20 |
| "Would you pay ฿199?" | >30% yes | 15-30% | <15% |

### Month 3 Check

| Metric | 🟢 GO | 🟡 CONTINUE | 🔴 KILL |
|--------|--------|-------------|---------|
| Paying users | >200 | 100-200 | <100 |
| Free-to-paid conversion | >5% | 3-5% | <3% |
| Monthly churn (paid) | <10% | 10-15% | >15% |
| Revenue | >฿50K/mo | ฿25-50K/mo | <฿25K/mo |

### Month 6 Check

| Metric | 🟢 SCALE | 🟡 ITERATE | 🔴 PIVOT |
|--------|----------|------------|----------|
| Paying B2C users | >1,000 | 500-1K | <500 |
| School pilots started | >3 | 1-3 | 0 |
| Revenue | >฿300K/mo | ฿150-300K | <฿150K |
| LTV:CAC | >5x | 3-5x | <3x |

---

## 9. Critical Risks & Mitigations

### Risk 1: ChatGPT "Good Enough" (HIGH impact, HIGH probability)
**Mitigation:** Parent dashboard is the moat. Parents don't want kids on unrestricted ChatGPT. Our value = visibility + safety + convenience. Focus marketing on "ดูได้ว่าลูกเรียนอะไร" not "AI ฉลาดกว่า."

### Risk 2: No Education Domain Expertise (HIGH impact, HIGH probability)  
**Mitigation:** MUST hire Thai teacher advisor within Week 1. Budget ฿30-50K/mo. Without this, accuracy and curriculum alignment will suffer. **This is the #1 blocker.**

### Risk 3: AI Wrong Answers Destroy Trust (HIGH impact, MEDIUM probability)
**Mitigation:** Start math+science only (highest accuracy). Confidence scoring. When unsure, say so. Human-reviewed answer bank for top 500 most-asked problems.

### Risk 4: Thai EdTech Graveyard (MEDIUM impact, MEDIUM probability)
**Mitigation:** StartDee failed at video courses, not AI homework help. Snapask failed with expensive human tutors. Our model (AI + LINE + ฿199) has fundamentally different unit economics. Stay lean.

### Risk 5: Low Willingness to Pay (MEDIUM impact, MEDIUM probability)
**Mitigation:** ฿199/mo = 1 hour of tutoring. ROI is 25-100x. Generous free tier hooks first. If B2C conversion is low, pivot harder to B2B (schools have budgets).

---

## 10. Team & Responsibilities

| Role | Person | Responsibility |
|------|--------|---------------|
| Product + AI | Sun (AI CEO) | Prompt engineering, product decisions, PRD |
| Full-stack Dev | Oat (CTO) | LINE bot, backend, LIFF dashboard |
| GTM + Ops | Steve (PA/CFO) | Facebook groups, school outreach, finances |
| **Education Advisor** | **TO HIRE** | Curriculum alignment, accuracy QA, school relationships |

### Immediate Action Items
1. ☐ **Hire education advisor** — Post in teacher Facebook groups, reach out to NIDA/Chula education faculty
2. ☐ **Create LINE OA** — MuteKid official account
3. ☐ **Set up Gemini Vision API** — Test with 20 real Thai homework photos
4. ☐ **Build webhook** — Cloud Run / Vercel endpoint for LINE messages
5. ☐ **Design rich menu** — "ถ่ายรูปการบ้าน" | "แดชบอร์ด" | "สมัครสมาชิก"

---

## 11. Honest CEO Assessment (Sun)

### What Excites Me
- 97% gross margin, break-even at 2K users — the math works beautifully
- LINE distribution = zero CAC for initial users via parent groups
- Parent dashboard is a genuine moat that ChatGPT can't replicate
- B2B school angle ($29-49/student) could be bigger than B2C
- No one has even tried this exact combination in Thailand

### What Worries Me
- **The Chegg lesson is real.** If Thai parents discover ChatGPT handles homework "well enough," ฿199/mo is a hard sell
- **Zero education expertise** on our team. We're building for teachers/students without being either
- **Thai EdTech graveyard** — StartDee had SCB money + celebrity backing and still couldn't monetize B2C
- **AI accuracy for Thai language/social studies** is genuinely problematic (60-80%)

### My Verdict
MuteKid is a **solid B+ opportunity**. The numbers work, the market is real, the gap is real. But execution risk is high without education domain expertise. 

**Recommendation:** Build a narrow MVP (math-only LINE bot, 1 week). Get 200 Thai parents to try it. If D7 retention >40% and parents ask "can it do science too?" — we have product-market fit. If parents shrug and go back to ChatGPT — kill it fast.

**Score: 36/50** — 2nd Round Runner Up. Ready to prototype.

---

*PRD v2.0 authored by Sun (AI CEO, MuteLab) — 2026-02-22*  
*Based on deep dive research: [research/mutekid-deep-dive.md](research/mutekid-deep-dive.md)*  
*Landing page: [54-mutekid.html](54-mutekid.html)*
