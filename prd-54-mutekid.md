# PRD: MuteKid — AI Homework Helper & Learning Companion for Thai Parents
### Product Requirements Document v1.0
**Status:** 1st Round Runner Up | **Score:** 36/50 | **Date:** 2026-02-21

---

## 1. Executive Summary

**MuteKid** is a LINE-native AI homework helper that lets Thai K-12 students photograph homework problems and receive step-by-step explanations in Thai, aligned to the สพฐ./OBEC curriculum. The core proposition: **"ติวเตอร์ AI ส่วนตัว ฿199/เดือน — ถูกกว่ากวดวิชา 25 เท่า"** (Personal AI tutor, ฿199/month — 25x cheaper than tutoring).

Thailand's private tutoring market is ฿50-80B/year. 60-70% of urban Thai students attend tutoring. Thai parents are the highest education spenders in SEA as a percentage of household income. Yet NO Thai-language, AI-powered, LINE-native homework helper exists. Global tools (Photomath, Khanmigo) are English-only and don't follow Thai curriculum. Thai EdTech tools (Snapask, StartDee) are dying or pivoted away from AI.

**MuteKid fills this gap** with: photo→AI explanation on LINE, parent progress dashboard, O-NET/TCAS exam prep, and B2B school licensing.

**Revenue target:** ฿29.5M/yr ($922K) at moderate scenario (8K B2C + 50 schools).
**Break-even:** ~2,070 paying users (Month 3-4).

---

## 2. Problem Statement

### The Pain
- **Tutoring is expensive:** ฿3,000-8,000/month for group tutoring, ฿500-2,000/hour for private tutors
- **Parents can't help:** Most Thai parents struggle with math past ป.4, can't explain science, don't remember Thai grammar rules
- **No instant help available:** Homework happens at 7-9 PM. Tutors aren't available. YouTube videos don't answer specific questions.
- **Exam stress is real:** O-NET, TCAS, TGAT/TPAT create massive family anxiety. Parents feel helpless.
- **ChatGPT exists but scares parents:** Unrestricted AI, no child safety, no progress tracking, parents can't see what kids are asking

### Who Has This Problem
- **Primary:** Thai parents with children ป.1-ม.6 in urban areas, household income >฿30K/mo
- **Secondary:** Rural parents who can't afford or access physical tutoring
- **Tertiary:** Thai schools wanting to provide supplementary AI tools
- **Market size:** 10M+ K-12 students, ~5M families that spend on supplementary education

### How They Solve It Today
1. กวดวิชา (tutoring centers) — expensive, time-consuming, schedule-dependent
2. Private tutors — very expensive, availability issues
3. Facebook parent groups — free but slow, inconsistent quality
4. YouTube/TikTok education content — free but passive, not personalized
5. ChatGPT/Gemini — free but uncontrolled, no parent visibility, not Thai curriculum-aligned

---

## 3. Solution: MuteKid

### 3.1 Core Product Flow

```
Parent/Child opens LINE → 
Photographs homework problem → 
Sends to MuteKid bot → 
Gemini Vision API processes image → 
AI generates step-by-step explanation in Thai → 
Explanation sent back as LINE messages (text + visual aids) → 
Interaction logged to parent dashboard
```

### 3.2 Key Features

#### Phase 1: MVP (Week 1-6)
1. **📸 Homework Photo Scanner**
   - Accept photos via LINE chat
   - OCR + AI understanding via Gemini Vision
   - Support printed text and handwriting
   - Math + Science subjects only (Phase 1)

2. **🧠 Step-by-Step Thai Explanations**
   - Grade-level appropriate language (ป.1 language ≠ ม.6 language)
   - Socratic method option: guide to answer, don't just give answer
   - "Quick answer" mode for busy parents
   - Visual aids (diagrams, number lines) where applicable

3. **👨‍👩‍👧 Parent Account System**
   - Parent registers via LINE
   - Add children (name, grade level, school)
   - All interactions logged under parent account
   - PDPA-compliant consent flow

4. **📊 Basic Parent Dashboard (LIFF)**
   - Subjects asked about (pie chart)
   - Questions per day/week
   - Topics that child struggles with
   - Accessed via LINE (LIFF web app)

#### Phase 2: Growth (Month 2-4)
5. **📚 All Subjects**
   - Thai Language (ภาษาไทย) — with accuracy disclaimers
   - Social Studies (สังคมศึกษา)
   - English
   - Health & PE (theory questions only)

6. **📝 O-NET Prep Mode**
   - Past paper question bank (10 years)
   - Practice quizzes by topic
   - Score prediction based on practice
   - Subject: ป.6, ม.3, ม.6 O-NET

7. **📈 Advanced Parent Dashboard**
   - Weekly LINE report to parents
   - Weak subject identification
   - Study plan recommendations
   - Comparative performance (anonymized percentile)

8. **🔔 Smart Notifications**
   - Daily study reminders
   - "Your child hasn't studied in 3 days" alert
   - Exam countdown (days until O-NET)
   - New content available notifications

#### Phase 3: Scale (Month 4-8)
9. **🎓 TCAS/TGAT/TPAT Prep**
   - University admission strategy guide
   - TGAT practice (critical thinking, English)
   - TPAT practice (subject-specific)
   - Portfolio building tips

10. **🏫 B2B School Dashboard**
    - Class-level analytics for teachers
    - Assignment distribution via MuteKid
    - Student performance reports
    - Integration with school grading systems

11. **🎮 Gamification**
    - Daily streaks
    - XP points and levels
    - Subject badges
    - Weekly class leaderboard (opt-in)

12. **🔊 Voice Explanations**
    - Thai TTS for explanations (hands-free studying)
    - Helpful for younger students (ป.1-ป.3) who can't read complex text

### 3.3 Technical Architecture

```
LINE Messaging API
    ↓
MuteKid Backend (Node.js/Python)
    ├── Image Processing Pipeline
    │   ├── Gemini Vision API (photo → text extraction)
    │   └── Subject Detection (math/science/thai/etc.)
    ├── AI Explanation Engine
    │   ├── Gemini Pro (primary) or Claude (fallback)
    │   ├── Curriculum Context Injection (grade + subject + topic)
    │   └── Socratic Mode Toggle
    ├── User Management
    │   ├── Parent accounts
    │   ├── Child profiles
    │   └── Subscription management
    ├── Analytics Engine
    │   ├── Question logging
    │   ├── Subject/topic classification
    │   └── Progress tracking
    └── LIFF Dashboard (React)
        ├── Parent view
        ├── Teacher view (B2B)
        └── Admin view
```

**Infrastructure:**
- **Cloud:** GCP (Gemini API + Cloud Run)
- **Database:** PostgreSQL (user data) + Redis (session cache)
- **Image storage:** Google Cloud Storage (with auto-delete after processing for PDPA)
- **LINE integration:** LINE Messaging API + LIFF SDK
- **Monitoring:** Basic logging + error tracking

### 3.4 AI Prompt Strategy

**System prompt (simplified):**
```
You are MuteKid, a friendly Thai AI tutor for students grade {grade_level}.
Subject: {detected_subject}
Mode: {socratic|direct}

Rules:
1. Explain in Thai appropriate for {grade_level} students
2. Use step-by-step reasoning
3. If Socratic mode: Ask guiding questions, don't give the answer directly
4. If Direct mode: Give the answer with clear explanation
5. Align with Thai สพฐ. curriculum standards
6. Never discuss non-educational topics
7. If unsure of accuracy, say: "ครูAIไม่แน่ใจคำตอบนี้ ลองถามคุณครูที่โรงเรียนด้วยนะ"
8. Include encouraging words in Thai
```

---

## 4. Competitive Analysis

### Direct Competitors (None in exact niche)

| Feature | MuteKid | ChatGPT | Photomath | Snapask | StartDee |
|---------|---------|---------|-----------|---------|----------|
| Thai Language | ✅ Native | ⚠️ Ok | ❌ | ✅ | ✅ |
| AI-Powered | ✅ | ✅ | ✅ Math only | ❌ Human | ❌ Video |
| LINE-Native | ✅ | ❌ App/Web | ❌ App | ❌ App | ❌ App |
| Thai Curriculum | ✅ | ❌ | ❌ | ⚠️ Partial | ✅ |
| Parent Dashboard | ✅ | ❌ | ❌ | ❌ | ❌ |
| Child Safety | ✅ | ❌ | ✅ | ✅ | ✅ |
| Exam Prep | ✅ | ⚠️ Generic | ❌ | ⚠️ | ✅ |
| Price/mo | ฿199 | Free-฿700 | ฿350 | ฿150/Q | ฿99-199 |
| Status (2026) | New | Active | Active | Dying | Struggling |

### The ChatGPT Threat — Our Counter-Strategy

**ChatGPT beats us on:** Raw AI capability, breadth of knowledge, cost (free tier exists)

**We beat ChatGPT on:**
1. **Parent visibility** — ChatGPT gives parents ZERO insight. MuteKid's dashboard shows what your kid struggles with.
2. **Child safety** — ChatGPT has no content filtering for minors. MuteKid is education-only.
3. **Convenience** — LINE (already installed on 56M Thai phones) vs. separate ChatGPT app
4. **Curriculum alignment** — We map to Thai textbooks and exam formats. ChatGPT gives generic answers.
5. **Socratic enforcement** — We default to guiding, not giving answers. ChatGPT gives the answer.
6. **Progress tracking** — Study patterns, weak subjects, improvement trends over months.

---

## 5. Revenue Model

### B2C Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Free** | ฿0 | 5 photos/day, math only, basic explanations |
| **Family** | ฿199/mo | Unlimited photos, all subjects, parent dashboard, up to 3 children |
| **Premium** | ฿499/mo | Everything + O-NET/TCAS prep, voice explanations, unlimited children, priority response |

### B2B Pricing

| Tier | Price | Features |
|------|-------|----------|
| **School Basic** | ฿29/student/mo | Teacher dashboard, class analytics, homework distribution |
| **School Pro** | ฿49/student/mo | Everything + exam prep, parent reports, API integration |
| **Enterprise (Tutoring Centers)** | Custom | White-label, custom branding, API access |

### Revenue Projections (Year 1 — Moderate Scenario)

| Revenue Stream | Calculation | Annual |
|----------------|-------------|--------|
| B2C Family (avg 6K) | 6,000 × ฿199 × 12 | ฿14.3M |
| B2C Premium (avg 2K) | 2,000 × ฿499 × 12 | ฿12.0M |
| B2B Schools (50 × 400 students) | 20,000 × ฿35 × 10mo | ฿7.0M |
| **Total** | | **฿33.3M ($1.04M)** |

### Unit Economics

| Metric | Value |
|--------|-------|
| COGS per user/mo | ฿3-5 (API + LINE) |
| Gross margin | ~97% |
| Blended CAC | ฿200-400 |
| Blended ARPU | ฿250/mo |
| LTV (8-month avg lifetime) | ฿2,000 |
| LTV:CAC ratio | 5-10x ✅ |
| Payback period | 1-2 months ✅ |
| Break-even | ~2,070 paying users |

---

## 6. Go-to-Market Strategy

### Phase 1: Validate (Week 1-4)
1. **Build MVP** — LINE bot, Gemini Vision integration, math + science only
2. **Free beta** in 3 Facebook parent groups (target: 200 families)
3. **Measure:** Engagement rate, NPS, willingness-to-pay survey
4. **Cost:** ฿50K (mostly time)

### Phase 2: Launch (Month 2-3)
1. **Launch paid tier** — ฿199/mo with all subjects
2. **Content marketing:** TikTok demos, Facebook group seeding
3. **KOL partnerships:** 3-5 Thai parent influencers / teacher-creators
4. **Target:** 1,000 free users, 100 paid users
5. **Marketing budget:** ฿100K/mo

### Phase 3: Scale B2C (Month 3-6)
1. **Facebook/LINE Ads** targeting Thai parents
2. **Referral program:** Invite 3 friends → 1 month free
3. **O-NET prep push** (timing: 3-4 months before O-NET)
4. **Target:** 10,000 free users, 2,000 paid users
5. **Marketing budget:** ฿200K/mo

### Phase 4: B2B Launch (Month 4-8)
1. **Pilot with 5 private schools** (free 1-semester trial)
2. **Build teacher dashboard**
3. **Case studies with O-NET score improvements**
4. **Sales team (1 person)** for school outreach
5. **Target:** 20 paying schools by Month 8

### Phase 5: Growth (Month 8-12)
1. **TCAS prep launch** (timing: before TCAS season)
2. **Government school outreach** (through สพท. offices)
3. **Partnership with textbook publishers** (Aksorn, Thai Watana Panich)
4. **Target:** 50K free users, 8K paid B2C, 50 B2B schools

---

## 7. Technical Requirements

### 7.1 LINE Bot Requirements
- Messaging API integration (reply + push messages)
- Image receiving and processing
- Rich menu for navigation (subjects, dashboard, settings)
- Flex Messages for formatted step-by-step explanations
- LIFF integration for dashboard web app
- Quick Reply buttons for follow-up questions

### 7.2 AI Pipeline Requirements
- **Input:** Photo (JPG/PNG, up to 10MB) via LINE
- **Processing:** Gemini Vision API for OCR + understanding
- **Subject detection:** Auto-classify math/science/thai/social/english
- **Grade detection:** Based on child profile (user setting)
- **Output:** Thai-language explanation (500-2000 characters)
- **Latency target:** <10 seconds from photo send to explanation received
- **Accuracy target:** >85% for math, >80% for science, >70% for Thai language (with disclaimers)
- **Fallback:** "ข้อนี้ครูAIไม่แน่ใจ ลองถามคุณครูนะ" when confidence is low

### 7.3 Dashboard Requirements (LIFF)
- Mobile-responsive web app
- Parent view: child profiles, usage stats, subject breakdown, weekly report
- Teacher view (B2B): class roster, assignment tracking, performance analytics
- Charts: subject pie chart, daily activity heatmap, topic difficulty ranking
- Push summary via LINE (weekly)

### 7.4 Data & Privacy (PDPA)
- Parent consent required before child profile creation
- Photo processing without permanent storage (process → delete within 24h)
- Interaction logs stored with parent account (deletable on request)
- No child personal data shared with third parties
- Data stored in Thailand (GCP asia-southeast1 region)
- Privacy policy in Thai and English

---

## 8. Team Requirements

### Minimum Viable Team
1. **Full-stack Developer** (existing: Oat) — LINE bot, backend, LIFF dashboard
2. **AI/ML Engineer** (could be Oat or Sun) — Gemini integration, prompt engineering
3. **Education Advisor** (NEED TO HIRE) — Thai teacher with curriculum expertise
4. **Marketing/Growth** (Steve or part-time) — Facebook groups, TikTok, school outreach

### Key Hire: Education Domain Expert
- Retired Thai teacher (math/science preferred)
- Or: Education researcher from NIDA/Chula Faculty of Education
- Role: Curriculum alignment, quality review, school relationship building
- Compensation: ฿30-50K/mo or equity

---

## 9. Risk Mitigation Matrix

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| ChatGPT "good enough" | HIGH | HIGH | Focus on parent features, not AI quality. Dashboard is the moat. |
| AI wrong answers | HIGH | MEDIUM | Confidence scoring, disclaimers, human-reviewed answer banks for common problems |
| No education expertise | MEDIUM | HIGH | Hire education advisor immediately. Beta with real teachers. |
| Thai language AI weakness | MEDIUM | HIGH | Start math/science only. Add Thai language with accuracy disclaimers. |
| Low conversion rate | MEDIUM | MEDIUM | Generous free tier. A/B test pricing. Focus on exam prep (highest WTP). |
| LINE messaging costs | LOW | LOW | Use reply messages (free). Minimize push messages. |
| PDPA compliance | MEDIUM | LOW | Parent-only accounts. No child data storage. Clear consent. |
| School procurement slow | MEDIUM | HIGH | Target private schools first. Free pilots. Be patient. |

---

## 10. Success Metrics

### Month 1-3 (Validation)
- [ ] 500+ free users
- [ ] 50+ paying users
- [ ] NPS >40
- [ ] >5 homework photos/user/week (engagement)
- [ ] <10% monthly churn on paid users

### Month 3-6 (Growth)
- [ ] 5,000+ free users
- [ ] 1,000+ paying users
- [ ] 5 school pilots started
- [ ] Revenue: ฿300K/mo

### Month 6-12 (Scale)
- [ ] 50,000+ free users
- [ ] 8,000+ paying users
- [ ] 50 paying schools
- [ ] Revenue: ฿2.5M/mo
- [ ] Unit economics validated (LTV:CAC > 5x)

---

## 11. Key Decisions Needed

1. **Build or partner?** — Do we build MuteKid from scratch, or partner with an existing Thai EdTech (SchoolBright, OpenDurian) that needs AI capabilities?
2. **Education advisor** — Can we find the right person? This is the single biggest execution risk.
3. **Scope of MVP** — Math-only or math+science? Narrower = faster launch, broader = more value.
4. **LINE vs. native app** — LINE-first is the strategy, but should we plan for a native app later?
5. **B2C first or B2B first?** — B2C is faster to validate, B2B has bigger revenue potential.

---

## 12. Honest CEO Assessment

**What excites me:**
- The market is genuinely massive and culturally-driven
- Unit economics are excellent (97% gross margin, 1-2 month payback)
- LINE distribution is a real moat against app-based competitors
- The parent dashboard angle is underexplored and genuinely valuable
- Break-even at just ~2,070 users is very achievable

**What worries me:**
- The Chegg lesson — ChatGPT killed the homework answer business. Are we building the Thai Chegg right before Thai parents discover ChatGPT?
- Zero education domain expertise on our team. This isn't like MuteTrade (where Oat IS a crypto expert) or MuteGreen (where Oat's Water Ledger background = perfect fit)
- Thai EdTech graveyard — StartDee had celebrity + bank backing and couldn't make it work. What makes us different?
- AI accuracy for Thai language/social studies is a real concern, not a theoretical one

**My verdict:** MuteKid is a **solid B+ opportunity** — the numbers work, the market is real, but execution risk is high due to domain expertise gap and the generic AI threat. If we had a Thai teacher co-founder, this would be an A- opportunity. Without one, proceed cautiously with a narrow MVP (math-only) and validate before committing resources.

**Score: 36/50** — Good enough for Runner Up, not good enough for #1 pick without team changes.

---

*PRD authored by Sun (AI CEO, MuteLab) — 2026-02-21*
*Based on deep dive research: research/mutekid-deep-dive.md*
