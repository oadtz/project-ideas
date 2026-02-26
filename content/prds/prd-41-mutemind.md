# PRD: MuteMind #41 — AI Mental Health Companion on LINE

**Version:** 1.0  
**Date:** February 22, 2026  
**Author:** Sun (AI CEO, MuteLab)  
**Score:** 33/50 — 2nd Round Runner Up  
**Status:** PRD Complete — Ready to Build  

---

## ⚠️ SAFETY DISCLAIMER (NON-NEGOTIABLE)

> **MuteMind is NOT a replacement for professional mental health treatment.**  
> MuteMind is a **wellness companion** — providing mental health literacy, CBT-based self-help exercises, mood tracking, and emotional support.  
> It does NOT diagnose, treat, or prescribe. It ALWAYS refers to professionals for clinical needs.  
> **Crisis protocol:** Any mention of self-harm → immediate redirect to สายด่วนสุขภาพจิต 1323 + emergency 1669.  
> **Legal position:** "AI wellness companion for mental health literacy" (ดูแลใจ) — NOT therapy (บำบัด).

---

## 1. Executive Summary

MuteMind is an AI mental health companion on LINE for Thai users — offering evidence-based CBT exercises, daily mood tracking, guided journaling, and crisis referral. Thailand has 5M+ undiagnosed depression cases, ~1 psychiatrist per 100K people, and extreme cultural stigma ("ไปหาจิตแพทย์ = บ้า"). LINE has 54M Thai MAU — making it the perfect stigma-free entry point.

**The thesis:** Woebot ($114M raised, ~$700M val) and Wysa (6M+ users, 45+ papers) prove the model. Thailand has ZERO AI mental health chatbots in Thai on LINE. B2B corporate wellness is the real revenue engine.

**7-day prototype:** LINE OA → daily mood check-in (emoji scale) → AI empathetic chat (CBT-based) → crisis detection with 1323 redirect → weekly mood report. Free trial → ฿199/mo subscription.

---

## 2. MVP Features (7-Day Prototype)

### 2.1 Core Feature: Daily Mood Check-In
- **Trigger:** LINE push notification at user-chosen time (default: 9 AM, 9 PM)
- **Interface:** LINE Flex Message with emoji mood scale (1-10)
  - 😭 1-2 (Very Low) → 😔 3-4 (Low) → 😐 5-6 (Okay) → 😊 7-8 (Good) → 🥰 9-10 (Great)
- **Follow-up:** Based on mood score, AI asks one contextual question:
  - Low mood: "อยากเล่าให้ฟังไหม ว่าวันนี้เกิดอะไรขึ้น?" (Want to tell me what happened today?)
  - Good mood: "เยี่ยมเลย! อะไรทำให้รู้สึกดีวันนี้?" (Great! What made you feel good today?)
- **Data stored:** timestamp, mood_score, emoji, optional note

### 2.2 Core Feature: AI Chat Companion
- **Personality:** Warm, empathetic, non-judgmental Thai speaker. Name: "มายด์" (Mind)
- **Base model:** Claude/GPT-4 with carefully crafted system prompt
- **Conversation style:**
  - Active listening + validation first ("เข้าใจเลย ฟังดูเหนื่อยมากเลยวันนี้")
  - CBT-based gentle reframing (when appropriate, not forced)
  - Thai cultural awareness (กรรม, หน้า, family dynamics, สังคมไทย)
  - Warm informal Thai (ภาษาพูด not ภาษาราชการ)
- **Session limits (free):** 10 messages/day
- **Session limits (paid):** Unlimited

### 2.3 Core Feature: Journaling Prompts
- **Trigger:** After mood check-in OR on-demand via Rich Menu
- **AI-guided prompts based on mood:**
  - Low: "ลองเขียน 3 สิ่งที่ทำได้ดีวันนี้ แม้จะเล็กน้อย" (Write 3 things you did well today, even small ones)
  - Medium: "วันนี้มีอะไรที่อยากจดจำไว้ไหม?" (Anything worth remembering today?)
  - High: "อะไรทำให้วันนี้พิเศษ? ลองเขียนไว้เพื่อวันที่ยากลำบาก" (What made today special? Write it for tough days)
- **Output:** Stored in user's private journal, viewable via LIFF web app

### 2.4 Core Feature: Crisis Detection & Escalation (NON-NEGOTIABLE)
- **Keyword detection layer:** Thai crisis keywords/phrases:
  - "ฆ่าตัวตาย", "ไม่อยากอยู่", "ตายดีกว่า", "อยากตาย", "ทำร้ายตัวเอง", "กรีดแขน", "กินยาตาย", "หมดหวัง", "ไม่มีทางออก", "ไม่ไหวแล้ว"
  - + English equivalents + transliterated variants
- **Sentiment analysis layer:** Persistent low mood (score ≤2 for 3+ consecutive days)
- **Escalation protocol:**
  1. **Immediate:** AI responds with empathy + crisis resources
     > "ขอบคุณที่ไว้วางใจเล่าให้ฟัง ฉันเป็นห่วงมากเลย สิ่งที่คุณรู้สึกสำคัญมาก และมีคนพร้อมช่วยเหลือ"
     > "กรุณาโทร สายด่วนสุขภาพจิต 1323 (ฟรี 24 ชม.) หรือ 1669 กรณีฉุกเฉิน"
  2. **LINE Flex Message:** Clickable tel: links for 1323 and 1669
  3. **Continued care:** AI stays in conversation but gently encourages professional help
  4. **Backend flag:** High-risk conversation flagged for clinical advisor review within 24 hours
- **NEVER:** AI must never:
  - Discuss methods of self-harm
  - Validate suicidal thoughts as reasonable
  - Suggest user is beyond help
  - Act as a crisis counselor (refer only)

### 2.5 Core Feature: Weekly Mood Report
- **Delivery:** Every Sunday via LINE message
- **Content:** LIFF web page showing:
  - 7-day mood chart (line graph)
  - Average mood score + trend (↑↓→)
  - AI-generated insight: "สัปดาห์นี้อารมณ์คุณดีขึ้นเฉลี่ย 1.2 จุด ดีใจด้วย! 🎉"
  - Suggestion for next week (based on patterns)
- **CTA (free users):** "อยากดู insight ย้อนหลัง 30 วัน? อัปเกรด Premium ฿199/เดือน"

### 2.6 MVP Feature Summary

| Feature | Free (7-day trial) | Free (after trial) | Personal ฿199/mo | Premium ฿499/mo |
|---|---|---|---|---|
| Daily mood check-in | ✅ | ✅ | ✅ | ✅ |
| AI chat | 10 msg/day | 3 msg/day | Unlimited | Unlimited |
| Journaling prompts | ✅ | ❌ | ✅ | ✅ |
| Weekly mood report | ✅ | Basic only | ✅ Full | ✅ Full |
| Crisis detection/referral | ✅ Always | ✅ Always | ✅ Always | ✅ Always |
| Monthly insights | ❌ | ❌ | ✅ | ✅ |
| Guided programs | ❌ | ❌ | ❌ | ✅ (anxiety, sleep, stress) |
| Therapist directory | ❌ | ❌ | ❌ | ✅ |

---

## 3. User Flow

### 3.1 First Visit → Onboarding (Day 0)

```
1. User adds MuteMind LINE OA (via QR code, LINE search, or referral link)
2. Welcome message:
   "สวัสดี 🧡 ยินดีต้อนรับสู่ MuteMind
    เพื่อนดูแลใจ AI ของคุณ
    พร้อมรับฟัง ไม่ตัดสิน ตลอด 24 ชั่วโมง"
3. Disclaimer (REQUIRED before first interaction):
   "⚠️ MuteMind เป็นเพื่อนดูแลใจ ไม่ใช่การรักษาทางการแพทย์
    หากรู้สึกไม่ปลอดภัย โทร 1323 (ฟรี 24 ชม.)
    [ยอมรับข้อตกลง] [อ่านเพิ่มเติม]"
4. User taps [ยอมรับ]
5. Onboarding questions (warm, conversational):
   - "เรียกคุณว่าอะไรดี?" (What should I call you?) → nickname
   - "ตอนนี้คุณรู้สึกยังไง?" (How are you feeling?) → first mood check
   - "อยากให้เตือนเช็คอารมณ์ตอนกี่โมง?" (When should I remind you?) → notification time
6. First AI interaction (2-3 messages of warm, empathetic exchange)
7. Rich Menu appears: [เช็คอารมณ์] [คุยกับมายด์] [สมุดบันทึก] [รายงาน]
```

### 3.2 Daily Habit Loop (Day 1-7)

```
Morning:
  → Push notification: "เช้านี้เป็นยังไงบ้าง? 🌤️"
  → User taps → mood check-in (emoji scale)
  → AI responds based on mood + offers journaling prompt
  → If low mood: gentle CBT exercise suggestion

Evening:
  → Push notification: "วันนี้ผ่านไปเป็นยังไง? 🌙"
  → Second mood check-in
  → AI reflection prompt or gratitude exercise
  → "พรุ่งนี้เจอกันนะ ฝันดี 💤"

Anytime:
  → User can initiate chat via Rich Menu [คุยกับมายด์]
  → AI companion available for open conversation
  → CBT techniques woven naturally into dialogue
```

### 3.3 Free Trial → Conversion (Day 7)

```
Day 7 morning:
  → Weekly mood report delivered (LIFF)
  → Shows 7-day mood journey + insights
  → CTA: "ช่วง 7 วันที่ผ่านมา คุณเช็คอารมณ์ X ครั้ง
          และอารมณ์ดีขึ้นเฉลี่ย Y จุด 🎉
          อยากดูแลใจต่อไหม?"
  → [ใช้ต่อ ฿199/เดือน] [ใช้แบบฟรี (จำกัด)]
```

### 3.4 Ongoing Engagement (Month 1+)

```
Weekly:
  → Sunday mood report + insights
  → New journaling prompt theme

Monthly (paid users):
  → 30-day mood analysis
  → AI-generated mental wellness tips based on patterns
  → "เดือนนี้คุณมีแนวโน้มอารมณ์ต่ำในวันอาทิตย์ ลองวางแผนทำกิจกรรมที่ชอบไหม?"

Premium (฿499/mo):
  → Guided 4-week programs:
    - "จัดการความวิตกกังวล" (Managing Anxiety) — 28-day CBT program
    - "นอนหลับดีขึ้น" (Better Sleep) — sleep hygiene + relaxation
    - "จัดการความเครียดจากงาน" (Work Stress Management)
  → Therapist directory: curated list of Thai therapists + Ooca referral
```

---

## 4. Pricing

### 4.1 B2C Pricing

| Tier | Price | Features | Target |
|---|---|---|---|
| **Free Trial** | ฿0 (7 days) | All features unlocked | Everyone — try before buy |
| **Free (post-trial)** | ฿0 | 3 msg/day + basic mood tracking | Users who can't afford / aren't ready |
| **Personal** | ฿199/mo | Unlimited chat + journaling + weekly insights + monthly reports | Core paid users |
| **Premium** | ฿499/mo | + Guided programs (anxiety, sleep, stress) + therapist directory + priority response | Power users, severe need |

**Payment:** LINE Pay, credit card, PromptPay via Omise/Stripe

### 4.2 B2B Corporate Wellness

| Tier | Price | Includes | Target |
|---|---|---|---|
| **Starter** | ฿80/emp/mo (min 50 emp) | Employee access + anonymized usage report | Startups, small offices |
| **Professional** | ฿60/emp/mo (min 200 emp) | + HR wellness dashboard + quarterly insights | Mid-size companies |
| **Enterprise** | ฿50/emp/mo (min 1,000 emp) | + Custom branding + dedicated support + API integration | Large corporates, BPOs |

**Key:** HR sees ONLY aggregate data (team stress levels, usage rates). NEVER individual data. PDPA-compliant.

### 4.3 Revenue Projections (Moderate Scenario)

| Month | B2C Users (paid) | B2C Revenue/mo | B2B Companies | B2B Revenue/mo | Total/mo | ARR |
|---|---|---|---|---|---|---|
| 3 | 200 | ฿40K | 1 pilot | ฿10K | ฿50K | ฿600K |
| 6 | 800 | ฿160K | 3 | ฿80K | ฿240K | ฿2.9M |
| 12 | 2,000 | ฿400K | 10 | ฿300K | ฿700K | ฿8.4M |
| 18 | 3,000 | ฿600K | 18 | ฿500K | ฿1.1M | ฿13.2M |
| 24 | 3,500 | ฿700K | 25 | ฿660K | ฿1.5M | ฿18M |

**Break-even:** Month 10-16 depending on burn rate.

---

## 5. Tech Stack

### 5.1 Architecture

```
[User on LINE] → LINE Messaging API (Webhook)
                     ↓
              [Backend: Node.js/Python on Railway/Render]
                     ↓
              ┌──────┴──────┐
              │              │
        [Safety Layer]  [LLM Router]
        - Keyword scan   - Claude API (primary)
        - Sentiment       - GPT-4 (fallback)
        - Risk scoring    - System prompt + context
              │              │
              └──────┬──────┘
                     ↓
              [Supabase / PlanetScale]
              - User profiles
              - Mood entries
              - Conversation logs (encrypted)
              - Journal entries
                     ↓
              [Analytics: Mixpanel/PostHog]
              - Usage metrics
              - Retention
              - Mood trends
                     ↓
              [LIFF Web App]
              - Mood dashboard
              - Weekly/monthly reports
              - Settings
              - Payment (Omise)
```

### 5.2 AI System Prompt (Core)

```
You are มายด์ (Mind), a warm and empathetic AI wellness companion on LINE.
You speak informal Thai (ภาษาพูด) with a caring, non-judgmental tone.

RULES:
1. You are NOT a therapist, doctor, or medical professional. Never claim to be.
2. You provide wellness support, mental health literacy, and evidence-based self-help.
3. You use CBT techniques gently: thought reframing, behavioral activation, gratitude, breathing.
4. You ALWAYS validate feelings first before suggesting any technique.
5. You are culturally aware of Thai society: face culture, family expectations, Buddhist context.
6. If user mentions self-harm, suicide, or severe distress → IMMEDIATELY provide 1323 + 1669 contacts.
7. You NEVER discuss methods of self-harm or validate suicidal intent.
8. You recommend professional help when needs exceed your scope.
9. You maintain conversation context within a session but do not reference past sessions unless user brings it up.
10. You use Thai emoji naturally but not excessively.

TONE: Like a caring older sibling (พี่) who listens well and gently guides.
LANGUAGE: Thai (ภาษาพูด), with occasional English terms when natural in Thai context.
```

### 5.3 Safety Layer (Pre-LLM)

```python
CRISIS_KEYWORDS_TH = [
    "ฆ่าตัวตาย", "อยากตาย", "ไม่อยากอยู่", "ตายดีกว่า",
    "ทำร้ายตัวเอง", "กรีดแขน", "กินยาตาย", "หมดหวัง",
    "ไม่มีทางออก", "ไม่ไหวแล้ว", "จบชีวิต", "ฆ่าตัว",
    "ยาพิษ", "แขวนคอ", "กระโดดตึก"
]

CRISIS_KEYWORDS_EN = [
    "kill myself", "suicide", "want to die", "end my life",
    "self-harm", "cut myself", "overdose", "no way out"
]

def check_crisis(message: str) -> bool:
    """Pre-LLM safety check. If True, bypass LLM and send crisis response."""
    text = message.lower()
    for kw in CRISIS_KEYWORDS_TH + CRISIS_KEYWORDS_EN:
        if kw in text:
            return True
    # Additional: sentiment score check
    if sentiment_score(text) < CRISIS_THRESHOLD:
        return True
    return False
```

### 5.4 Data Privacy (PDPA Compliance)

- **Database:** Thailand-region Supabase/AWS (ap-southeast-1 Bangkok)
- **Encryption:** AES-256 at rest, TLS 1.3 in transit
- **LLM API calls:** Anonymized user_id only, no PII in prompts
- **Consent flow:** Explicit opt-in before first interaction (PDPA Section 26)
- **Data retention:** Conversation logs auto-deleted after 90 days (configurable)
- **Data export:** Users can request full data export (PDPA right)
- **Data deletion:** Users can request full deletion (PDPA right)
- **DPA:** Signed Data Processing Agreements with all cloud/AI providers

---

## 6. Success Metrics & Go/Kill Thresholds

### 6.1 Prototype Phase (Week 1-4)

| Metric | Go ✅ | Continue ⚠️ | Kill ❌ |
|---|---|---|---|
| LINE OA friends added (Week 2) | >500 | 200-500 | <200 |
| Day-7 retention | >40% | 20-40% | <20% |
| Daily mood check-in completion | >60% of active | 30-60% | <30% |
| AI chat sessions/user/week | >3 | 1-3 | <1 |
| NPS score | >50 | 30-50 | <30 |
| Crisis detection false positive rate | <5% | 5-15% | >15% |

### 6.2 Growth Phase (Month 3-12)

| Metric | Go ✅ | Continue ⚠️ | Kill ❌ |
|---|---|---|---|
| Monthly active users (Month 6) | >5,000 | 1,000-5,000 | <1,000 |
| Free → paid conversion | >3% | 1-3% | <1% |
| Paid user retention (Month 3) | >70% | 50-70% | <50% |
| B2B pilot companies (Month 6) | >3 | 1-3 | 0 |
| Average mood improvement (8-week cohort) | >0.5pt | 0-0.5pt | Negative |

### 6.3 Safety Metrics (CRITICAL — Zero Tolerance)

| Metric | Threshold | Action |
|---|---|---|
| Harm incidents linked to MuteMind | 0 | Immediate product shutdown + investigation |
| Crisis detection miss rate | <1% | Pause new users, retrain model |
| Harmful AI response | 0 per 10K conversations | Immediate prompt revision + clinical review |
| PDPA data breach | 0 | Immediate notification + remediation |
| User complaint about harmful content | <0.01% of sessions | Clinical review within 24 hours |

---

## 7. Risks & Mitigations

| Risk | Severity | Mitigation |
|---|---|---|
| **User self-harm after interaction** | 🔴 CRITICAL | Crisis protocol, 1323 auto-redirect, clinical advisor review, professional liability insurance |
| **PDPA violation (health data)** | 🔴 HIGH | Thailand-hosted DB, encryption, consent flows, DPO appointment, regular audits |
| **AI gives harmful advice** | 🔴 HIGH | Safety layer, restricted topics, clinical prompt review, conversation logging |
| **Regulatory reclassification** | 🟡 MEDIUM | Position as wellness only, avoid clinical claims, legal monitoring |
| **Low Thai willingness to pay** | 🟡 MEDIUM | B2B revenue focus, free tier for impact, corporate wellness = real money |
| **No clinical expertise on team** | 🔴 HIGH | Recruit clinical advisor BEFORE launch — non-negotiable |
| **Character.AI-style lawsuit** | 🟡 MEDIUM | Robust disclaimers, safety protocols, insurance, conversation limits for minors |

---

## 8. Launch Checklist (Before Day 1)

- [ ] Clinical advisor recruited (min 1 licensed psychiatrist/psychologist)
- [ ] Crisis detection keywords tested with 500+ sample messages
- [ ] Legal disclaimers reviewed by Thai health tech lawyer
- [ ] PDPA consent flow implemented and tested
- [ ] System prompt reviewed by clinical advisor
- [ ] Professional liability insurance obtained
- [ ] 1323 hotline redirect tested on LINE
- [ ] Conversation logging + clinical review workflow set up
- [ ] Privacy policy (Thai + English) published
- [ ] Terms of Service with liability limitations drafted

---

## 9. What This Product Is NOT

To avoid scope creep and legal risk, MuteMind explicitly IS NOT:

- ❌ A therapy or counseling service
- ❌ A diagnostic tool for mental health conditions
- ❌ A replacement for professional psychiatric care
- ❌ A crisis intervention service (we REFER, not intervene)
- ❌ A medication advisor
- ❌ A clinical treatment platform

MuteMind IS:

- ✅ A wellness companion for mental health literacy
- ✅ A daily mood tracking and journaling tool
- ✅ A CBT psychoeducation and self-help resource
- ✅ An emotional support chatbot with safety rails
- ✅ A bridge to professional help when needed
- ✅ "เพื่อนคุยเมื่อไม่มีใครให้คุย" — The friend to talk to when no one else is there

---

## 10. MutePDPA Synergy 🤝

Ironic and powerful: MuteMind handles sensitive mental health data under PDPA → MutePDPA helps companies comply with PDPA. Cross-sell opportunity:
- MuteMind B2B clients → need PDPA compliance for health data → MutePDPA upsell
- MutePDPA clients → have employee wellness needs → MuteMind B2B cross-sell
- Both products reinforce MuteLab's position in Thai compliance + wellness

---

*PRD authored by Sun (AI CEO, MuteLab). February 22, 2026.*  
*Safety is non-negotiable. Impact + profit. Both are possible.*  
*"เพื่อนคุยเมื่อไม่มีใครให้คุย"*
