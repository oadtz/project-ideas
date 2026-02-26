# PRD: MuteRent — AI Rental Property Management on LINE
## Product Requirements Document | Idea #50
### Version 1.0 | February 21, 2026

---

## 1. Product Overview

**Product Name:** MuteRent  
**Tagline:** "AI จัดการห้องเช่า ผ่าน LINE — ง่าย ครบ จบในแชท"  
**Category:** PropTech / B2B SaaS  
**Platform:** LINE Official Account + Web Dashboard  
**Target Market:** Thai landlords with 5-50 rental units  

### 1.1 Problem Statement

2M+ Thai small landlords manage rental properties using LINE personal chats, handwritten notebooks, and Excel spreadsheets. There is ZERO dedicated, Thai-language, LINE-native property management software. Late rent collection costs landlords an estimated ฿10,000-50,000+/year in delayed and lost payments. Tax reporting is confusing and manual.

### 1.2 Solution

MuteRent is a LINE-first AI property management platform that automates rent collection reminders, tracks payments via PromptPay QR, manages maintenance requests, generates Thai rental contracts, and produces tax-ready financial reports — all through LINE, the app 67M Thais already use.

### 1.3 Key Differentiators
- **LINE-native:** No app download, no new software to learn
- **Thai-first:** Thai language, Thai law, Thai tax (ภ.ง.ด.), PromptPay
- **AI-powered:** Smart rent reminders, escalation, document generation
- **Affordable:** ฿299/mo (vs Buildium $62/mo, AppFolio $1.40/unit)

---

## 2. Target Users

### 2.1 Primary Persona: "พี่หนึ่ง" — Medium Landlord

- **Demographics:** Age 45-55, owns 10-20 room apartment/หอพัก
- **Monthly rental income:** ฿40,000-80,000
- **Current tools:** LINE + notebook + sometimes Excel
- **Pain points:** Chasing 3-5 late tenants/month, tracking who paid, year-end tax prep
- **Tech comfort:** Uses LINE, Facebook, mobile banking daily
- **Budget sensitivity:** ฿899/mo = 1-2% of income — willing if clear ROI

### 2.2 Secondary Persona: "คุณสม" — Condo Investor

- **Demographics:** Age 35-50, owns 3-8 condos for rent
- **Monthly rental income:** ฿30,000-100,000
- **Current tools:** LINE + bank app + memory
- **Pain points:** Managing multiple properties across Bangkok, juggling tenant communications
- **Tech comfort:** High — uses multiple apps
- **Budget sensitivity:** ฿299-899/mo — affordable but needs clear value

### 2.3 Tertiary: Property Management Company Employee

- **Uses Portfolio tier or white-label**
- **Manages 50-500+ units for multiple landlords**
- **Needs:** Multi-property dashboard, team access, reporting

---

## 3. Feature Specification

### 3.1 Phase 1: MVP (Month 1-3) — "ทวงค่าเช่า AI"

**Focus: Rent collection automation + payment tracking**

#### F1: Property & Tenant Registry
- Add properties via LINE chat ("เพิ่มห้อง 101-110 ค่าเช่า 3,000 บาท")
- Register tenants: Name, phone, LINE ID, room number
- Auto-link tenant to property unit
- View all properties/tenants via LINE rich menu

#### F2: AI Rent Reminder System
- Auto-send payment reminders 3 days before due date
- Day-of reminder with PromptPay QR code
- Day 3 overdue: Polite follow-up
- Day 7 overdue: Firm reminder
- Day 14 overdue: Escalation to landlord for action
- Customizable message templates (tone, timing)
- Thai language, polite and professional tone

#### F3: Payment Tracking
- Generate PromptPay QR code for each tenant (landlord's account)
- Tenant sends payment confirmation screenshot via LINE
- AI OCR reads transfer slip → auto-marks as paid
- Manual mark-as-paid option
- Monthly payment status dashboard (who paid, who late)
- Payment history per tenant

#### F4: Basic Dashboard (Web)
- Property list with occupancy status
- Payment status overview (red/yellow/green)
- Monthly income summary
- Export to Excel/CSV

### 3.2 Phase 2: Full Product (Month 4-8)

#### F5: Thai Rental Contract Generator
- AI-generated สัญญาเช่า based on property details
- Legally-compliant template with customizable clauses
- PDF generation with landlord branding
- Digital signature support (LINE e-signature integration)
- Auto-renewal reminders (30 days before expiry)

#### F6: Maintenance Request Tracker
- Tenant submits maintenance request via LINE (text + photo)
- AI categorizes urgency (emergency / routine / cosmetic)
- Assign to handyman/contractor
- Track status: submitted → assigned → in-progress → resolved
- Photo before/after documentation
- Cost tracking per maintenance item

#### F7: Financial Reports & Tax
- Monthly P&L per property
- Annual income summary for ภ.ง.ด.90 filing
- Auto-apply 30% building deduction
- Track utility payments, maintenance costs, insurance
- Withholding tax certificate tracking
- Export tax-ready report for accountant

#### F8: Tenant Screening
- Collect tenant documents via LINE (ID card, employment letter, income proof)
- AI-generated risk score (basic — document completeness, employment verification)
- Previous landlord reference template
- MuteRent tenant blacklist (crowdsourced, opt-in)
- **Note:** Cannot access NCB credit data — screening is limited to document-based

### 3.3 Phase 3: Growth Features (Month 9-15)

#### F9: Multi-Property Dashboard
- Aggregate view across all properties
- Comparative occupancy rates
- Revenue per property comparison
- Portfolio-level financial reporting

#### F10: Team Management
- Add property managers/assistants
- Role-based access control
- Activity log/audit trail
- Task assignment

#### F11: Vacancy Management
- Mark units as vacant
- Auto-generate rental listing
- Integration with listing platforms (DDproperty, FazWaz)
- Tenant application workflow

#### F12: Landlord Community & Marketplace
- Connect with contractors for maintenance
- Insurance product recommendations
- Accounting service referrals
- Landlord tips and education content

---

## 4. Technical Architecture

### 4.1 Stack

| Component | Technology |
|---|---|
| LINE Bot | Node.js + LINE Messaging API SDK |
| Backend API | Node.js/Express or Python/FastAPI |
| Database | PostgreSQL (Supabase) |
| AI/LLM | Claude API (Thai language) |
| OCR | Google Cloud Vision API or Claude Vision |
| Web Dashboard | Next.js + Tailwind CSS |
| Hosting | Vercel (web) + Railway/Render (API) |
| File Storage | Cloudflare R2 or AWS S3 |
| QR Generation | Library-based PromptPay QR (no API needed) |
| Authentication | LINE Login + JWT |

### 4.2 Architecture Diagram

```
[Tenant LINE] ←→ [LINE Platform] ←→ [MuteRent Bot Server]
                                         ↕
[Landlord LINE] ←→ [LINE Platform] ←→ [MuteRent API Server]
                                         ↕
                                    [PostgreSQL DB]
                                         ↕
[Web Dashboard] ←→ ←→ ←→ ←→ ←→ [MuteRent API Server]
                                         ↕
                                   [AI / OCR Services]
```

### 4.3 LINE Bot Architecture

**Approach:** Single LINE Official Account with multi-tenant routing
- Landlords add MuteRent LINE OA as friend
- Tenants add MuteRent LINE OA as friend
- System routes messages based on user role (landlord vs tenant)
- Rich Menu dynamically changes based on user role
- Landlord sees: Properties, Payments, Reports, Settings
- Tenant sees: Pay Rent, Report Issue, My Contract, Contact Landlord

### 4.4 PromptPay QR Implementation

```
1. Landlord registers PromptPay ID (phone or citizen ID)
2. System generates Thai QR Payment code per tenant:
   - Recipient: Landlord's PromptPay ID
   - Amount: Rent amount for that unit
   - Reference: Tenant ID / Room number
3. QR sent to tenant via LINE before due date
4. Tenant scans QR → pays via banking app
5. Tenant sends screenshot to LINE bot
6. Claude Vision OCR extracts: amount, date, sender, receiver
7. System auto-matches to expected payment
8. Marks as "Paid" and notifies landlord
```

---

## 5. Pricing Strategy

### 5.1 Tier Structure

| Tier | Price | Units | Features |
|---|---|---|---|
| **ฟรี (Free)** | ฿0 | 1-3 units | Basic reminders, payment tracking, 1 contract template |
| **Starter** | ฿299/mo | 4-10 units | AI rent collection, full payment tracking, contracts, basic reports |
| **Business** | ฿899/mo | 11-30 units | Everything + tenant screening, maintenance tracker, tax reports, priority support |
| **Portfolio** | ฿2,999/mo | 31-100 units | Everything + multi-property dashboard, team management, API, white-label option |

### 5.2 Add-Ons

- Tenant screening report: ฿99/screening
- Advanced contract package: ฿199 one-time
- Priority support: ฿199/mo
- Additional units beyond tier: ฿30/unit/mo

### 5.3 Revenue Projection (Realistic)

| Timeline | Free Users | Paying Users | MRR | ARR |
|---|---|---|---|---|
| Month 6 | 500 | 50 | ฿30K | ฿360K |
| Month 12 | 2,000 | 200 | ฿120K | ฿1.44M |
| Month 18 | 4,000 | 500 | ฿300K | ฿3.6M |
| Month 24 | 7,000 | 1,000 | ฿600K | ฿7.2M |
| Month 36 | 15,000 | 2,500 | ฿1.2M | ฿14.4M |

---

## 6. Go-to-Market Plan

### 6.1 Phase 1: Validate (Month 1-3)

1. **Build MVP** focused on rent reminders + payment tracking
2. **Recruit 20 beta landlords** from Facebook groups (free access)
3. **Criteria:** 5-20 units, active on LINE, willing to give feedback
4. **Goal:** Validate core value proposition — do landlords actually use it?
5. **Content:** Start Facebook page with landlord tips content

### 6.2 Phase 2: Launch (Month 4-6)

1. **Launch free tier** publicly
2. **Content marketing blitz:** 3-5 posts/week on Facebook, 1 YouTube video/week
3. **Topics:** "วิธีเก็บค่าเช่าด้วย AI", "ทำสัญญาเช่าฉบับสมบูรณ์", "ภาษีเจ้าของหอพัก"
4. **Free tools:** PromptPay QR generator, lease agreement template
5. **Target:** 500 free signups, 50 paid conversions

### 6.3 Phase 3: Scale (Month 7-18)

1. **Facebook Ads** targeting property investment groups
2. **Agent partnership program** (referral fees)
3. **Case studies** with real landlord success stories
4. **SEO:** "ระบบจัดการห้องเช่า", "AI เก็บค่าเช่า", "สัญญาเช่าออนไลน์"
5. **Events:** Property investment expos, landlord meetups
6. **Target:** 2,000+ free, 300+ paid

---

## 7. Success Metrics

### 7.1 North Star Metric
**Monthly Active Landlords (MAL)** — Landlords who actively use MuteRent to send at least 1 rent reminder per month

### 7.2 Key Metrics

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Total registered landlords | 100 | 500 | 2,000 |
| Monthly Active Landlords | 50 | 200 | 800 |
| Paying customers | 10 | 50 | 200 |
| Free-to-paid conversion | - | 10% | 10% |
| Monthly churn | - | <5% | <5% |
| NPS | - | >40 | >50 |
| Rent reminders sent/mo | 500 | 5,000 | 30,000 |
| Payment confirmations/mo | 300 | 3,000 | 20,000 |

### 7.3 Kill Criteria

**Stop/pivot if by Month 6:**
- <100 free signups (no market interest)
- <5 paid conversions (no willingness to pay)
- <30% weekly retention (tool not sticky)
- User feedback consistently: "ไม่จำเป็น" (not necessary)

---

## 8. Risk Mitigation

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Small landlords won't pay | HIGH | HIGH | Free tier + target medium landlords |
| No domain expertise | HIGH | CERTAIN | Hire landlord advisor, 30+ interviews |
| LINE API cost scaling | MEDIUM | MEDIUM | Maximize reply messages, web dashboard fallback |
| PromptPay payment confirmation fragile | MEDIUM | MEDIUM | Screenshot OCR + manual fallback |
| Copycat competitors | LOW | LOW | First-mover + community moat + data moat |
| LINE platform changes | LOW | LOW | Web dashboard as backup channel |

---

## 9. Team Requirements

### 9.1 Minimum Team (Phase 1)

| Role | Who | Allocation |
|---|---|---|
| Product/Tech Lead | MuteLab CTO | 40% |
| Full-stack Developer | Hire or contract | 100% |
| **Domain Advisor** | Thai landlord (10+ units) | 20% advisory |

### 9.2 Growth Team (Phase 2+)

| Role | When | Cost |
|---|---|---|
| Community Manager | Month 4 | ฿25K/mo |
| Customer Support | Month 6 | ฿20K/mo |
| Content Creator | Month 4 | ฿15K/mo (part-time) |

---

## 10. Budget & Timeline

### 10.1 Cost Summary

| Phase | Duration | Monthly Cost | Total |
|---|---|---|---|
| MVP Development | Month 1-3 | ฿8,000 | ฿24,000 |
| Launch & Marketing | Month 4-6 | ฿50,000 | ฿150,000 |
| Growth & Scale | Month 7-12 | ฿100,000 | ฿600,000 |
| **Year 1 Total** | | | **฿774,000 (~$24K)** |

### 10.2 Break-Even Analysis

- Monthly fixed costs at scale: ~฿100,000/mo
- Average revenue per paying customer: ~฿600/mo (blended)
- Break-even customers: 167 paying customers
- Expected timeline to break-even: **Month 10-14**

---

## 11. Appendix

### 11.1 Competitive Pricing Comparison

| Product | Market | Pricing | Thai Support |
|---|---|---|---|
| Buildium | US | $62-400/mo | ❌ |
| AppFolio | US | $1.40/unit/mo | ❌ |
| TenantCloud | US | Free-$35/mo | ❌ |
| FlowAccount | TH | Free-฿199/mo | ✅ (accounting) |
| PEAK | TH | ฿900-3,500/mo | ✅ (accounting) |
| **MuteRent** | **TH** | **Free-฿2,999/mo** | **✅ (property mgmt)** |

### 11.2 Thai Rental Income Tax Quick Reference

- Category 5 income (letting property)
- Building deduction: 30% of gross
- Progressive tax: 0-35%
- File: ภ.ง.ด.90 by March 31
- Corporate tenant: 5% withholding
- VAT threshold: ฿1.8M annual
