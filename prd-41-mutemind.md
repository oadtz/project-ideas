# PRD: MuteMind — AI Mental Health Companion on LINE
### Product Requirements Document v1.0
**Status:** Deep Dive Complete | **Score:** 33/50 | **Date:** 2026-02-21

---

## 1. Executive Summary

**MuteMind** is an AI-powered mental health wellness companion on LINE, Thailand's dominant messaging platform (67M users). Using evidence-based Cognitive Behavioral Therapy (CBT) and mindfulness techniques, MuteMind provides anonymous, 24/7, Thai-language emotional support. The core proposition: **"เพื่อนคุยเมื่อไม่มีใครให้คุย"** — The friend to talk to when no one else is there.

Thailand has an estimated 5M+ people with undiagnosed depression, only ~1 psychiatrist per 100,000 population, and extreme cultural stigma where seeking mental health help = "บ้า" (crazy). Globally, the model is proven: Woebot ($114M raised, ~$700M valuation) and Wysa (6M+ users, FDA Breakthrough Device Designation, 45+ papers). **Nobody has built this in Thai on LINE.** MuteMind addresses this gap.

**Revenue path:** B2C freemium hooks users; B2B corporate wellness is the real revenue engine. Conservative path to ฿8.4M ARR ($263K) in 24 months; moderate path to ฿20M ARR ($625K).

---

## ⚖️ 2. LEGAL & REGULATORY ANALYSIS (CRITICAL)

> **This section is the most important part of this PRD.** Thanapat needs to know exactly what we can and cannot do legally in Thailand before committing resources.

### 2.1 Legal Positioning: "Wellness Companion" — NOT Therapy

**MuteMind MUST be positioned as a wellness/information tool, NOT a therapy or medical service.**

This is not just marketing — it's the fundamental legal strategy that determines whether we need clinical licenses, medical device registration, and face medical liability.

| Category | What We DO (Wellness) | What We DON'T DO (Therapy) |
|---|---|---|
| Conversation | Empathetic listening, emotional support | Diagnose conditions |
| Exercises | General CBT psychoeducation, breathing, mindfulness | Individualized clinical treatment plans |
| Assessment | Mood check-ins (how are you feeling?) | Clinical diagnostic instruments (PHQ-9 as diagnosis) |
| Claims | "Helps you understand your emotions" | "Treats depression" or "Cures anxiety" |
| Crisis | Refers to professionals immediately | Provides crisis intervention directly |
| Branding | "ดูแลใจ" (take care of mind) | "บำบัด" (therapy/treatment) |

### 2.2 Key Laws & Regulations

**1. Mental Health Act 2008 (พ.ร.บ.สุขภาพจิต พ.ศ.2551):**
- Regulates clinical treatment in psychiatric settings
- Only licensed professionals can provide "mental health treatment" (การบำบัดรักษา)
- **Impact:** Does NOT apply to MuteMind IF positioned as wellness. Applies IF we claim to treat.

**2. Thai FDA / Medical Device Act:**
- Software as Medical Device (SaMD) classification is evolving in Thailand
- **Impact:** MuteMind likely does NOT need อย. approval as wellness tool
- Risk: If we add clinical diagnostic features, reclassification possible
- Precedent: Woebot and Wysa avoided general FDA clearance for depression/anxiety tools

**3. PDPA (Personal Data Protection Act):**
- Mental health data = **sensitive personal data** under Section 26
- Requirements: Explicit consent, purpose limitation, data minimization, DPO, breach notification
- **Critical risk:** LLM API calls send sensitive data to foreign servers → cross-border transfer issue
- Mitigation: Thailand-hosted database, DPAs with all processors, explicit consent flows

**4. Professional Licensing:**
- No license required for wellness tools/life coaching
- Clinical psychology/psychiatry licenses required for diagnosis and treatment
- **Strategy:** Clinical Advisory Board provides oversight WITHOUT making MuteMind a clinical service

### 2.3 Liability Risk — User Harm

**The #1 legal risk.** If a user self-harms after using MuteMind, we face potential negligence claims.

**International precedent:**
- BetterHelp: FTC fined $7.8M for sharing mental health data with advertisers (2023)
- Character.AI: Lawsuit after teen suicide, alleging AI chatbot encouraged harmful behavior (2024)
- No Thai precedent yet, but the direction is clear: AI providers CAN be held liable

**Mandatory mitigations (non-negotiable for launch):**
1. Clinical Advisory Board reviewing all AI conversation designs
2. Automated suicide risk detection (keyword + sentiment analysis)
3. Immediate crisis escalation protocol (1323 hotline, emergency 1669)
4. Multi-layer disclaimers in Thai ("This is not therapy. If you are in crisis, call 1323.")
5. Professional liability insurance
6. Conversation logging for quality review and legal defense
7. Terms of Service with liability limitation clauses

### 2.4 Advertising & Marketing Restrictions

**Safe language:** "ดูแลใจ", "เพื่อนคุย", "ข้อมูลสุขภาพจิต", "ฝึกสติ"
**Forbidden language:** "บำบัด", "รักษา", "วินิจฉัย", "หาย" (cure/heal)

### 2.5 Corporate Wellness (B2B) Legal

- Employee participation MUST be opt-in
- Employer CANNOT access individual employee data (PDPA)
- Aggregate/anonymized metrics only for HR dashboard
- Employee consent required even if employer provides the tool

### 2.6 Insurance Partnership Requirements

No insurance license needed. Partners will require:
- PDPA compliance certification
- Data security audit
- Professional liability insurance
- Clinical oversight evidence

### 2.7 Legal Setup Budget

| Item | Cost (฿) |
|---|---|
| Company registration | 15,000-30,000 |
| Health tech legal consultation | 50,000-150,000 |
| PDPA compliance setup | 80,000-200,000 |
| ToS + Privacy Policy drafting | 30,000-80,000 |
| Professional liability insurance | 30,000-80,000/yr |
| **Total** | **฿205,000-540,000** |

### 2.8 Legal Verdict

> **✅ MuteMind CAN operate legally in Thailand as a wellness companion.** The regulatory landscape is navigable IF we: (1) never claim to provide therapy/treatment, (2) build robust crisis protocols, (3) comply with PDPA for sensitive health data, (4) have clinical advisors on board, and (5) carry appropriate insurance. The biggest risk is not regulation — it's **liability if a user harms themselves.** This requires engineering-level safety investment, not just legal disclaimers.

---

## 3. Problem Statement

### The Pain
- **5M+ undiagnosed:** Only 1.5M Thais officially diagnosed with depression. Estimated actual: 5-7M.
- **Severe shortage:** ~1 psychiatrist per 100K population (Thailand has ~700 total). WHO recommends 1:10K.
- **Wait times:** 1-3 months for public hospital psychiatric appointment. Rural areas: virtually zero access.
- **Stigma:** "ไปหาจิตแพทย์ = บ้า" — the single biggest barrier to treatment in Thailand
- **Cost:** Private psychiatrist ฿1,500-3,000/visit. Ooca online: ฿1,500+/session. Out of reach for most.
- **Crisis:** 1323 hotline overwhelmed, inconsistent quality, limited hours.

### Who Has It
- **Primary:** Thai adults 18-40, urban professionals, experiencing stress/anxiety/mild-moderate depression
- **Secondary:** University students (high stress, low resources, high stigma)
- **Tertiary:** Corporate employees (burnout, workplace stress — employer may provide)

### How Big
- Thai population with mental health needs: 5-10M people
- Treatment gap: 60-70% receive no care
- Global AI mental health market: ~$3.5B (2025), 20%+ CAGR
- Thai corporate wellness market: ฿5-10B/year (mental health fastest-growing segment)

---

## 4. Solution: MuteMind's Approach

### Architecture

```
User (LINE Chat)
    ↓
LINE Messaging API (Webhook)
    ↓
MuteMind Backend (Node.js/Python)
    ├── Safety Layer (crisis detection, keyword filter, risk scoring)
    ├── Session Manager (conversation context, user profile)
    ├── CBT Engine (structured exercise flows)
    └── LLM API (GPT-4/Gemini for empathetic Thai responses)
    ↓
Response → LINE (Flex Messages, Rich Menu, LIFF)
    ↓
Escalation (if needed) → 1323 / Emergency / Human therapist
```

### What Makes It Different
1. **LINE-native:** Zero friction, no app download, 67M Thai users already there
2. **Anonymous:** No real name, no ID, no face — stigma eliminated
3. **Thai-first:** Built for Thai cultural context, Thai language, Thai mental health landscape
4. **Wellness positioning:** Legally clean, scalable, no clinical license required
5. **AI + Human escalation:** AI handles 90%+ of conversations; humans for crisis and Therapy+ tier

---

## 5. MVP Features (Month 1-3)

### Must Have (P0)
- [ ] LINE Bot with natural Thai conversation
- [ ] Mood check-in (emoji scale + short text)
- [ ] Basic CBT exercises (thought reframing, 3 good things, cognitive distortions)
- [ ] Breathing exercise timer
- [ ] **Crisis detection + 1323 referral (CRITICAL)**
- [ ] Disclaimer flow (first interaction + periodic reminders)
- [ ] Privacy consent flow (PDPA compliance)
- [ ] Conversation logging (encrypted, access-controlled)

### Should Have (P1)
- [ ] Mood tracking dashboard (LIFF web app)
- [ ] Sleep hygiene tips
- [ ] Gratitude journaling
- [ ] Daily check-in reminder (LINE push message)
- [ ] Basic mindfulness/meditation guidance

### Nice to Have (P2)
- [ ] Personalized CBT program (4-8 week structured course)
- [ ] Mood pattern analytics
- [ ] Premium paywall (฿199/mo)
- [ ] Therapist directory and referral

---

## 6. Pricing

| Tier | Price | Features | Target |
|---|---|---|---|
| **Free** | ฿0 | AI chat, mood check-in, breathing, basic CBT | Mass adoption, funnel |
| **Wellness Pro** | ฿199/mo | Guided programs, journaling, sleep tools, analytics | Self-care serious users |
| **Therapy+** | ฿499/mo | All Pro + video sessions with licensed therapist | Users needing human support |
| **Enterprise** | ฿50-150/emp/mo | Employee access, anonymized HR dashboard, burnout detection | Corporate wellness |

---

## 7. Competition Matrix

| | MuteMind | Ooca | Woebot | Wysa | DMIND |
|---|---|---|---|---|---|
| **Thai** | ✅ | ✅ | ❌ | ❌ | ✅ |
| **LINE** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **AI** | ✅ | ❌ (human) | ✅ | ✅ | ❌ (forms) |
| **24/7** | ✅ | ❌ | ✅ | ✅ | ✅ (limited) |
| **Anonymous** | ✅ | Partial | ✅ | ✅ | Partial |
| **CBT** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **B2B** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Price** | Free-฿499 | ฿1,500+/session | ~฿140-420 | ~฿140-420 | Free |
| **Clinical evidence** | ❌ (TBD) | ✅ | ✅ | ✅ 45+ papers | ❌ |

**MuteMind's moat:** Thai + LINE + AI + Anonymous. No one else has all four.
**MuteMind's weakness:** Zero clinical evidence, zero clinical team expertise.

---

## 8. Cost Analysis

### Monthly Operating Costs

| Phase | Monthly Cost | Notes |
|---|---|---|
| Month 1-6 (MVP) | ฿100K-200K | LLM ฿15-30K, hosting ฿5-10K, clinical advisors ฿30-60K, marketing ฿20-50K |
| Month 7-12 (Growth) | ฿190K-465K | Scaling LLM costs, expanded marketing, more clinical oversight |
| Month 13-24 (Scale) | ฿390K-990K | High LLM usage, B2B sales, expanded team |

### Initial Investment Required

| Item | Cost (฿) |
|---|---|
| Legal setup (entity, PDPA, ToS) | 205K-540K |
| MVP development (if outsourced) | 0 (built by Oat) |
| Clinical Advisory Board setup | 50K-100K |
| Marketing/launch budget | 50K-100K |
| **Total initial** | **฿305K-740K (~$9.5K-$23K)** |

---

## 9. ROI Scenarios (24 Months)

### Conservative (60% probability)
- Users: 80K free, 1,500 paid B2C, 10 B2B clients
- Revenue: ฿8.4M ARR ($263K)
- Total investment: ฿6M over 24 months
- ROI: 40% positive
- Break-even: Month 14-16

### Moderate (30% probability)
- Users: 200K free, 3,500 paid B2C, 25 B2B clients
- Revenue: ฿20M ARR ($625K)
- Total investment: ฿10M over 24 months
- ROI: 100% positive
- Break-even: Month 10-12

### Aggressive (10% probability)
- Users: 500K free, 8,000 paid B2C, 50 B2B clients
- Revenue: ฿42M ARR ($1.3M)
- Total investment: ฿18M over 24 months
- ROI: 133% positive
- Break-even: Month 8-10

---

## 10. 30-Day Validation Plan

### Week 1: Legal & Clinical Foundation
- [ ] Consult Thai health tech lawyer (identify firm via Thai Fintech Association network)
- [ ] PDPA compliance assessment for sensitive health data on LINE
- [ ] Begin outreach to 5-10 psychiatrists/psychologists for advisory board
- [ ] Draft Terms of Service and Privacy Policy

### Week 2: MVP Build
- [ ] LINE Bot setup (Messaging API, webhook, Rich Menu)
- [ ] Build conversation engine with safety guardrails
- [ ] Implement crisis detection keywords + escalation flow
- [ ] Create 3-5 CBT exercise conversation flows
- [ ] Mood check-in feature (emoji scale + tracking)

### Week 3: Private Pilot
- [ ] Recruit 50-100 private testers (mental health advocates, university students, friends)
- [ ] Run 1-week pilot — track engagement, mood improvement, safety incidents
- [ ] Clinical advisor reviews conversation logs for quality/safety
- [ ] Iterate on conversation quality and safety detection

### Week 4: B2B Outreach + Public Prep
- [ ] Cold outreach to 10 HR directors (Bangkok tech companies, BPOs)
- [ ] Create B2B pitch deck with pilot data
- [ ] Prepare LINE Official Account for public launch
- [ ] Plan social media launch (Thai mental health communities, Twitter/X)
- [ ] Decision point: Go / adjust / kill

### Success Metrics for 30-Day Validation
- [ ] Clinical advisor recruited (at least 1 psychiatrist or clinical psychologist)
- [ ] Legal structure clear (company type, positioning, disclaimers)
- [ ] 50+ pilot users with >3 conversations each
- [ ] Average mood improvement signal (even small) in pilot data
- [ ] Zero safety incidents in pilot
- [ ] 2+ positive B2B conversations (interest, not commitment)
- [ ] Total cost under ฿100K

---

## 11. Go-to-Market Strategy

### Phase 1: Seed (Month 1-3)
- **Channel:** Thai mental health Twitter/X communities, university counseling partnerships, mental health advocate influencers
- **Strategy:** Free tool → organic word of mouth → "เพื่อนคุยฟรี" positioning
- **Target:** 5K users, 100 daily active
- **Cost:** ฿50-100K

### Phase 2: Growth (Month 4-6)
- **Channel:** LINE Ads, TikTok mental health content, corporate HR events
- **Strategy:** B2C awareness + first B2B pilots
- **Target:** 50K users, 1K daily active, 3-5 corporate pilots
- **Cost:** ฿200-400K

### Phase 3: Scale (Month 7-12)
- **Channel:** Insurance partnerships, DMH collaboration, PR/media
- **Strategy:** B2B scaling, clinical evidence publication, credibility building
- **Target:** 200K users, 5K daily active, 15+ corporate clients
- **Cost:** ฿500K-1M

### Phase 4: Expand (Month 13-24)
- **Channel:** SEA expansion planning, regional partnerships
- **Strategy:** Thailand market leader → regional expansion (Vietnam, Philippines)
- **Target:** 500K+ users, 25+ corporate clients, insurance partnerships live

---

## 12. Key Risks & Decision Points

| Risk | Kill Switch? | Decision Trigger |
|---|---|---|
| Cannot recruit clinical advisor | YES | If no advisor by Week 3, pause project |
| Legal consultation reveals showstopper | YES | If lawyer says "can't operate as wellness tool," kill |
| Safety incident in pilot | PAUSE | Any self-harm incident → immediate review with clinical advisor |
| Zero B2B interest after 20 outreach | ADJUST | Pivot to pure B2C or kill B2B timeline |
| LLM produces harmful Thai content | PAUSE | Fix guardrails before proceeding |
| Thai FDA announces SaMD regulation covering wellness chatbots | PIVOT | Reassess positioning, may need regulatory pathway |

---

## 13. Team Requirements

**What we have:**
- Oat (CTO): Full-stack dev, LLM experience, can build LINE bot + backend
- Sun (CEO AI): Strategy, research, operations

**What we MUST hire/recruit:**
- Clinical Advisor (psychiatrist or clinical psychologist): ฿15-30K/month retainer
- Second clinical advisor (counseling psychologist): ฿10-20K/month retainer

**Nice to have:**
- Thai health tech lawyer (ongoing retainer)
- Content writer (Thai, mental health literate)
- Part-time designer (LINE Rich Menu, LIFF UI)

---

*PRD v1.0 — February 21, 2026. For internal MuteLab evaluation.*
