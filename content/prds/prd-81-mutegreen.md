# Product Requirements Document (PRD)
## MuteGreen — AI ESG & Sustainability Report Generator
### Idea #81 | MuteLab | February 2026

---

## 1. Executive Summary

**Product:** MuteGreen — AI-powered platform that automates ESG data collection, carbon accounting (Scope 1-3), and sustainability report generation for Thai listed companies.

**Problem:** 800+ Thai listed companies (SET + mai) MUST file sustainability disclosures in the 56-1 One Report format. Most lack tools or expertise. Current options: pay Big 4 ฿500K-3M per engagement, or struggle with Excel. No Thai-language AI ESG tool exists.

**Solution:** SaaS platform that connects to company data sources, calculates GHG emissions using TGO emission factors, and generates SET-compliant sustainability reports (56-1, GRI, TCFD) in Thai & English with AI-assisted narrative. Premium tier adds blockchain-verified reporting and carbon credit marketplace.

**Target Revenue:** ฿36M ARR ($1.1M) by Month 18 — 100 clients × ฿30K/mo average.

**Founder-Market Fit:** 9/10 — Thanapat is CTO at Water Ledger Global (water management + blockchain + environmental data + carbon credits). Near-perfect domain overlap.

---

## 2. Regulatory Landscape

### Current Requirements (2026)
- **56-1 One Report:** All SET/mai companies must file annual integrated report with mandatory sustainability section (Section 6)
- **SET ESG Assessment:** Annual evaluation — companies scored and ranked, impacts index inclusion (SETTHSI, THSI)
- **TGO Carbon Reporting:** Voluntary but strongly incentivized under T-VER program

### Coming Requirements (2027-2028)
- **ISSB S1/S2 Alignment:** SEC Thailand has announced mandatory adoption — Scope 1-2 emissions will become legally required
- **Climate Change Act (Draft):** Would mandate GHG reporting for ALL large emitters (>10,000 tCO2e/yr), not just listed companies
- **ASEAN Taxonomy:** Regional classification for sustainable activities — reporting alignment needed

### Impact on MuteGreen
The regulatory trajectory is **unidirectional toward more stringent requirements**. Every year creates MORE demand for automated ESG reporting. First-mover captures the standard.

---

## 3. Problem Statement

### For mid-cap and small-cap Thai listed companies:

| Pain Point | Current State | Impact |
|-----------|---------------|--------|
| No ESG expertise | No dedicated ESG staff, IR team handles ad-hoc | Inconsistent, incomplete reporting |
| Manual data collection | Excel spreadsheets, paper utility bills | 3-6 months per annual report |
| No Thai ESG tool | Global tools don't support SET format/Thai | ฿875K+ for foreign tool (if available) |
| Big 4 too expensive | ฿500K-3M per engagement | Unaffordable for mai/small-cap |
| No carbon accounting | Manual TGO factor lookup, Excel calculations | Errors, non-compliance risk |
| No benchmarking | Can't compare vs industry peers | No strategic ESG improvement |
| Regulatory pressure rising | ISSB alignment 2027-2028 | Scrambling to comply in time |

### User Personas

**Persona 1: "Somchai" — IR Manager at mai-listed company**
- Company: 200 employees, manufacturing sector
- ESG team: None (he's the ESG team)
- Budget: ฿200K/year for all ESG activities
- Pain: Spent 4 months last year compiling sustainability section in Word
- Need: Automated tool that generates 56-1 report with minimal effort

**Persona 2: "Arisara" — CSR Director at SET200 company**
- Company: 2,000 employees, services sector
- ESG team: 2 people
- Budget: ฿1M/year for ESG consulting
- Pain: Paid EY ฿800K last year for GHG inventory + report, needs to do it annually
- Need: Platform to do in-house what EY did, at 10% of cost

**Persona 3: "Nat" — Sustainability VP at SET50 company**
- Company: 10,000 employees, energy sector
- ESG team: 5 people
- Budget: ฿5M/year for ESG
- Pain: Complex Scope 3 across supply chain, needs blockchain verification for credibility
- Need: Enterprise platform with supply chain ESG tracking + verifiable reports

---

## 4. Solution

### Product Overview

MuteGreen is a web-based SaaS platform that:
1. **Collects** ESG data from company operations (manual input → AI extraction → ERP integration)
2. **Calculates** GHG emissions (Scope 1, 2, 3) using TGO-certified emission factors
3. **Generates** publication-ready sustainability reports in SET 56-1, GRI, and TCFD formats
4. **Benchmarks** company ESG performance against Thai industry peers
5. **Verifies** (premium) ESG data on blockchain for audit trail integrity
6. **Connects** (premium) to carbon credit marketplace for credit trading

### Technology Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Frontend | React / Next.js | Fast SPA, SSR for SEO |
| Backend | Node.js / Python FastAPI | Python for AI/ML pipeline |
| Database | PostgreSQL + TimescaleDB | Time-series emission data |
| AI/OCR | Google Document AI + GPT-4 | Thai OCR + report narrative |
| Blockchain | Polygon (optional L2) | Low-cost, ESG-friendly chain |
| Hosting | AWS (Bangkok region) | Data residency, low latency |
| Auth | OAuth 2.0 / SSO | Enterprise compliance |

---

## 5. MVP Features (Month 1-3)

### P0 — Must Have (Launch Requirements)

**5.1 Company Setup & Data Input**
- Company profile (industry, size, fiscal year)
- Manual data input forms for:
  - Electricity consumption (kWh/month by location)
  - Fuel consumption (liters/month by type: diesel, gasoline, LPG, natural gas)
  - Refrigerant usage (kg/year by type)
  - Water consumption (m³/month)
  - Waste generation (tonnes/month by type)
  - Employee headcount and safety metrics
- CSV/Excel bulk upload
- Year-over-year data comparison

**5.2 Carbon Calculator (Scope 1-2)**
- TGO emission factor database (digitized, maintained)
- Scope 1: Fuel combustion, refrigerant leaks, company vehicles
- Scope 2: Electricity (location-based using TGO grid factor)
- Results: tCO2e by scope, source, month, location
- Visual dashboard with charts

**5.3 56-1 One Report Generator**
- Template aligned with SEC Thailand's One Report format (Section 6)
- Auto-populated data fields from carbon calculator
- AI-generated narrative drafts (Thai & English)
- Review/edit interface for human approval
- PDF export (publication-ready format)
- Word/DOCX export for further editing

**5.4 Basic Dashboard**
- Emissions overview (Scope 1, 2 breakdown)
- Year-over-year trends
- Data completeness tracker
- Report generation status

### P1 — Should Have (Month 4-6)

**5.5 AI Data Extraction**
- Upload utility bills (scanned/photo) → AI extracts kWh, cost, dates
- Upload fuel receipts → AI extracts liters, fuel type
- Thai OCR for MEA/PEA electricity bills format
- Validation workflow (AI suggests, human confirms)

**5.6 Scope 3 Estimation**
- Spend-based Category 1 (purchased goods/services)
- Category 6 (business travel) from travel records
- Category 7 (employee commuting) from survey
- Using EEIO emission factor databases

**5.7 GRI Standards Report**
- GRI 2 (General Disclosures) template
- GRI 3 (Material Topics) assessment
- Topic-specific disclosures (GRI 300 Environmental, GRI 400 Social)
- GRI Content Index generator

**5.8 Industry Benchmarking**
- Compare company metrics vs Thai industry averages
- SET industry sector benchmarks
- Peer comparison (anonymized)

### P2 — Nice to Have (Month 7-12)

**5.9 TCFD Disclosure**
- Four-pillar TCFD report generation
- Climate scenario analysis (basic 1.5°C / 2°C scenarios)
- Physical and transition risk assessment framework

**5.10 Blockchain Verification**
- Immutable timestamp of ESG data submissions
- Blockchain-verified emissions calculations
- QR code on reports linking to verification record
- Audit trail for regulators/investors

**5.11 Carbon Credit Marketplace**
- Integration with FTIX / T-VER registry
- Calculate potential carbon credits from reduction projects
- Facilitate credit trading between companies
- 3-5% transaction fee revenue

**5.12 ERP Integrations**
- SAP Business One connector (common in Thai mid-market)
- API for custom integrations
- Automated monthly data pull

---

## 6. Pricing Strategy

| Tier | Price | Target | Features |
|------|-------|--------|----------|
| **Starter** | ฿9,900/mo (฿119K/yr) | mai SMEs, first-time ESG | Scope 1-2 calculator, basic 56-1 template, 1 user, 1 entity |
| **Business** ⭐ | ฿29,900/mo (฿359K/yr) | Mid-cap SET companies | Full Scope 1-3, GRI + TCFD + 56-1 reports, benchmarking, AI extraction, 5 users, 3 entities |
| **Enterprise** | ฿99,000/mo (฿1.19M/yr) | SET50/SET100 | Everything + blockchain verification, carbon marketplace, supply chain tracking, SSO, API, unlimited users/entities |
| **Consulting** | ฿150K-500K (one-time) | Any company | ESG assessment, Net Zero roadmap, first-year report preparation |

**Pricing logic:**
- Starter: < Big 4 quote meeting cost, digestible for mai companies
- Business: 93% cheaper than average Big 4 engagement (฿500K one-time → ฿359K/yr ongoing)
- Enterprise: Competes with ฿2-5M annual Big 4 retainers
- Annual prepay discount: 15% (2 months free)

---

## 7. Competition Matrix

| Feature | MuteGreen | Persefoni | Watershed | Big 4 | Excel |
|---------|-----------|-----------|-----------|-------|-------|
| Thai language | ✅ | ❌ | ❌ | ✅ (people) | ✅ |
| SET 56-1 format | ✅ | ❌ | ❌ | ✅ (manual) | ❌ |
| TGO emission factors | ✅ | ❌ | ❌ | ✅ (manual) | Manual lookup |
| Scope 1-2 calc | ✅ | ✅ | ✅ | ✅ | Manual |
| Scope 3 calc | ✅ | ✅ | ✅ | ✅ | Manual/none |
| GRI report gen | ✅ | ✅ | ❌ | ✅ | ❌ |
| TCFD report gen | ✅ | ✅ | ✅ | ✅ | ❌ |
| AI data extraction | ✅ | ❌ | ❌ | ❌ | ❌ |
| Blockchain verification | ✅ (premium) | ❌ | ❌ | ❌ | ❌ |
| Carbon credit marketplace | ✅ (premium) | ❌ | ❌ | ❌ | ❌ |
| Industry benchmarking | ✅ (Thai) | ✅ (US/EU) | ✅ (US/EU) | ✅ | ❌ |
| Price (annual) | ฿119K-1.19M | ฿875K+ | ฿1.75M+ | ฿500K-3M | ฿0 |
| Available in Thailand | ✅ | ❌ | ❌ | ✅ | ✅ |

**MuteGreen's unique value:** The ONLY tool combining Thai-specific compliance (SET 56-1 + TGO factors + Thai language) with AI automation and blockchain verification.

---

## 8. Cost Analysis

### 8.1 Development Budget (18 Months)

| Phase | Duration | Monthly Cost | Total |
|-------|----------|-------------|-------|
| MVP Build | Month 1-3 | ฿400K | ฿1.2M |
| Launch & Iterate | Month 4-6 | ฿400K | ฿1.2M |
| Scale & Add Features | Month 7-12 | ฿450K | ฿2.7M |
| Growth | Month 13-18 | ฿550K | ฿3.3M |
| **Total** | **18 months** | | **฿8.4M (~$247K)** |

### 8.2 Cost Breakdown (Monthly, Steady State)

| Category | Amount | % |
|----------|--------|---|
| Engineering (2 FTE) | ฿200K | 44% |
| ESG consultant (PT) | ฿60K | 13% |
| Sales & BD (1 FTE) | ฿70K | 16% |
| Customer success (1 FTE) | ฿50K | 11% |
| Infrastructure & API | ฿30K | 7% |
| Marketing | ฿30K | 7% |
| Misc/Legal | ฿10K | 2% |
| **Total** | **฿450K** | **100%** |

### 8.3 Unit Economics

- **ARPU:** ฿30,000/mo (blended)
- **Gross margin:** ~85% (primarily cloud + API costs)
- **CAC:** ฿100-150K (with channel partners)
- **LTV:** ฿720K (24-month avg retention × ฿30K)
- **LTV/CAC:** 4.8-7.2x ✅
- **Payback period:** 3.3-5 months ✅
- **Break-even:** 15 paying clients ✅

---

## 9. ROI Scenarios (18-Month)

### Conservative — "Slow but Steady"
| Metric | Value |
|--------|-------|
| Clients at Month 18 | 50 |
| Avg ARPU | ฿25K/mo |
| ARR | ฿15M ($441K) |
| Total revenue collected | ~฿9M |
| Total costs | ~฿8.5M |
| Net profit | ฿500K |
| Employees | 5 |

### Moderate — "On Plan" ⭐
| Metric | Value |
|--------|-------|
| Clients at Month 18 | 100 |
| Avg ARPU | ฿30K/mo |
| ARR | ฿36M ($1.06M) |
| Total revenue collected | ~฿18M |
| Total costs | ~฿9.5M |
| Net profit | ฿8.5M |
| Employees | 7 |

### Aggressive — "Lightning in a Bottle"
| Metric | Value |
|--------|-------|
| Clients at Month 18 | 150 |
| Avg ARPU | ฿35K/mo |
| ARR | ฿63M ($1.85M) |
| Total revenue collected | ~฿28M |
| Total costs | ~฿10.5M |
| Net profit | ฿17.5M |
| Employees | 10 |

---

## 10. 30-Day Validation Plan

### Week 1: Market Validation
- [ ] Interview 10 IR managers/CSR directors at SET-listed companies (5 mid-cap, 5 mai)
- [ ] Questions: How do you currently do ESG reporting? What's your budget? What tools do you use? What's the biggest pain?
- [ ] Validate willingness to pay: Show mock pricing, gauge reaction
- [ ] Use Thanapat's Water Ledger network for warm introductions

### Week 2: Competitive & Technical Validation
- [ ] Sign up for Persefoni Pro (free tier) — document UX, features, gaps
- [ ] Map TGO emission factor database — assess digitization effort
- [ ] Download SEC Thailand 56-1 One Report template — define data schema
- [ ] Prototype: Build static 56-1 sustainability section generator (template + dummy data)

### Week 3: Channel Validation
- [ ] Contact Thai Listed Companies Association (TLCA) — explore partnership/presentation opportunity
- [ ] Reach out to 2-3 mid-tier accounting firms (Grant Thornton, BDO Thailand) — pitch channel partnership
- [ ] Register for next SET Sustainability Forum — assess sponsorship/exhibition options
- [ ] Contact TGO — explore "TGO Compatible" endorsement pathway

### Week 4: Prototype & Commit/Kill Decision
- [ ] Build clickable prototype (Figma): dashboard → data input → carbon calc → report preview
- [ ] Show prototype to 5 interview participants from Week 1
- [ ] Get 2-3 LOIs (Letters of Intent) or pilot commitments
- [ ] **COMMIT/KILL decision:** Proceed if ≥3 companies express willingness to pilot

### Validation Success Criteria
✅ **COMMIT** if:
- ≥3 companies willing to pilot (free)
- ≥1 company willing to pay ฿10K+/mo after pilot
- Clear understanding of 56-1 template requirements
- TGO emission factors are digitizable in <2 weeks
- No blocking competitor discovered

❌ **KILL** if:
- <2 companies interested in even free pilot
- Companies say "we'll wait for Big 4 to build a tool"
- TGO factors not accessible or require expensive licensing
- Discovery of well-funded Thai ESG platform competitor

---

## 11. Go-to-Market Strategy

### Phase 1: "Land" (Month 1-6)
**Target:** 20 companies (15 mai/small-cap, 5 mid-cap)
- **Channel:** Direct outreach via Water Ledger network + SET Forum
- **Strategy:** Free 3-month pilot for first 5 companies, then paid
- **Message:** "Generate your 56-1 sustainability section in 1 day, not 3 months"
- **Differentiator:** Only tool that outputs SET-ready 56-1 format in Thai

### Phase 2: "Expand" (Month 7-12)
**Target:** 60 companies total
- **Channel:** Accounting firm partnerships + content marketing
- **Strategy:** Case studies from pilot companies, word-of-mouth
- **Message:** "90% cheaper than Big 4, with better data accuracy"
- **Differentiator:** AI data extraction + industry benchmarking

### Phase 3: "Dominate" (Month 13-18)
**Target:** 100+ companies
- **Channel:** TGO partnership + enterprise direct sales
- **Strategy:** Enterprise tier with blockchain + carbon marketplace
- **Message:** "The standard ESG platform for Thai listed companies"
- **Differentiator:** Blockchain verification + carbon credit trading

### Key GTM Metrics
| Metric | Month 6 | Month 12 | Month 18 |
|--------|---------|----------|----------|
| Pipeline | 50 | 120 | 200 |
| Clients | 20 | 60 | 100 |
| MRR | ฿440K | ฿1.54M | ฿3M |
| Churn | <5% | <5% | <3% |
| NPS | >40 | >50 | >60 |

---

## 12. Success Metrics & KPIs

### North Star Metric
**Number of annual sustainability reports generated through MuteGreen**
(Directly tied to value delivery — if companies generate reports, they renew)

### Primary KPIs
| KPI | Target (Month 18) |
|-----|-------------------|
| Active paying clients | 100 |
| MRR | ฿3M |
| Net Revenue Retention | >110% |
| Logo churn | <5% annual |
| Reports generated | 200+ (multiple per client) |
| Customer NPS | >50 |

### Secondary KPIs
| KPI | Target |
|-----|--------|
| Time to generate report | <1 day (vs 3-6 months) |
| Data fields auto-filled | >60% |
| Support tickets per client | <3/month |
| Scope 3 adoption | >40% of clients |
| Blockchain verification adoption | >20% of clients |

---

*Document Version: 1.0 | Last Updated: February 21, 2026 | Author: Sun, CEO — MuteLab*
