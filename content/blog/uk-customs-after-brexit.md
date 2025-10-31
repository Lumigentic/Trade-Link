---
title: "How UK Customs Changed After Brexit - and the Digital Systems That Make It Run"
date: "2024-10-31"
author: "Trade Link Team"
excerpt: "Brexit didn't just change trade rules - it rewired the UK's customs architecture. Learn about the digital systems that now power UK customs operations."
category: "Customs & Compliance"
tags: ["Brexit", "UK Customs", "CDS", "GVMS", "Compliance"]
---

Brexit didn't just change trade rules - it rewired the UK's customs architecture. Overnight (from the perspective of many traders) the UK became a third country to the EU, which meant customs formalities, pre-arrival checks and new IT systems had to be introduced or expanded so goods could continue to move reliably. Over the last few years HM Revenue & Customs (HMRC) and partners rolled out a suite of electronic services to support declarations, safety & security checks, transit movements and vehicle/port control. Below I explain the big picture, then list the systems you need to know about (with short descriptions and key dates where relevant).

## The Big Picture (Short)

- The legacy CHIEF/NES systems were retired and replaced by a modern **Customs Declaration Service (CDS)** as the single platform for most import and export declarations.
- Pre-arrival safety & security (entry summary) requirements were extended to cover movements that previously didn't need them - this required new ICS/S&S workflows and APIs.
- Ports and hauliers now use coordinated vehicle-movement services (GMR/GVMS) and transit systems (NCTS) to streamline physical movement and checks at the border.

## Systems (and What Each Does)

Below is a practical list you can use as a reference. I group current/active systems first, then legacy/retired ones (so you can see what changed).

### Active / Current Systems

#### 1. Customs Declaration Service (CDS)

**What it is:** HMRC's modern platform for submitting import and export customs declarations (the CHIEF/NES replacement).

**Why it matters:** CDS is the single place businesses and software providers now send customs declarations for goods moving in and out of the UK. Migration from CHIEF happened in phases (imports moved earlier, exports followed).

#### 2. Goods Vehicle Movement Service (GVMS) - produces the GMR (Goods Movement Reference)

**What it is:** A port/haulage-facing system that aggregates declaration references (e.g., CDS references, transit references) into one Goods Movement Reference (GMR) for roll-on/roll-off ports and selected routes.

**Why it matters:** GMR speeds up clearance at the gate - drivers present a single reference rather than multiple papers. Many major RoRo ports and the Eurotunnel require it.

#### 3. New Computerised Transit System (NCTS)

**What it is:** The electronic transit declaration system used for movements under the Common Transit Convention (CTC). The UK uses NCTS for transit movements to/from the EU and other CTC members.

**Why it matters:** If goods travel under transit procedures (temporary suspension of duties while passing through a territory), NCTS is the messaging backbone for departure/arrival/guarantee handling.

#### 4. Import Control / Safety & Security (S&S) services - including ICS2 links and S&S (S&S GB) APIs

**What it is:** Systems and API services for pre-arrival safety and security (entry summary) information. The UK implemented S&S requirements for EU imports and harmonised workflows with European ICS2 developments; HMRC published S&S APIs and guidance for submitting entry-summary data.

**Why it matters:** Pre-lodged safety & security data allow Border Force/HMRC to risk-assess consignments before arrival - mandatory for many movements from 2024/2025 onward.

#### 5. HMRC Developer APIs / Presentation of Goods / S&S GB APIs

**What it is:** HMRC provides a family of APIs so commercial software and Customs Community Systems Providers (CSPs) can integrate directly with CDS, the presentation-of-goods service (for arrivals and checks), and Safety & Security services.

**Why it matters:** These APIs let freight forwarders, carriers and software vendors automate submissions and get electronic responses (controls, messages, statuses) in real time.

#### 6. Trader Support Service (TSS) - temporary transition pathway for some NI movements

**What it is:** A government-run service to help traders submit entry summary declarations for Northern Ireland and to help with transitional operating arrangements.

**Why it matters:** TSS was used where businesses did not have an established route into ICS/ICS2 workflows; it's been a bridge for certain Northern Ireland flows. (See HMRC guidance for who still needs to use TSS.)

#### 7. EORI / Government Gateway enrolments & authentication systems

**What it is:** EORI numbers and Government Gateway (and HMRC enrolments for S&S/CDS) underpin electronic access. Businesses must be enrolled and authorised to use the APIs and services.

**Why it matters:** Without correct EORI/Government Gateway/S&S enrolment you cannot submit declarations or receive electronic outcomes.

### Legacy / Retired Systems (Still Worth Knowing)

#### 8. CHIEF (Customs Handling of Import & Export Freight) - retired

**What it was:** The long-standing HMRC customs system (used for decades) that accepted many import/export declarations prior to CDS. CHIEF was progressively closed as CDS rolled out.

#### 9. National Export System (NES) / National Import System (NIS) - phased out / replaced

**What they were:** Earlier HMRC interfaces for import/export that linked to CHIEF. As CDS matured, HMRC withdrew NES/NIS functionality and consolidated declaration submission on CDS. (NES export XML/email services were closed as part of the CDS migration.)

## Timeline Highlights (Useful for Context)

- **2022:** Imports moved off CHIEF onto CDS for most users (imports closure on CHIEF around 30 Sep 2022).
- **2023-2024:** Exports migrated fully to CDS (export CHIEF/NES closures phased through 2023-2024).
- **2024-2025:** Safety & Security (pre-arrival entry-summary) changes rolled out for EU→GB flows and ICS2 harmonisation progressed - creating mandatory pre-arrival S&S submissions for many flows from Jan 2025 onwards.

(Exact dates for phased closures and enrolment deadlines changed as HMRC refined rollout schedules, so always check the latest HMRC pages for cutoffs relevant to your business.)

## Practical Impact for Businesses & Logistics Teams

- **More data up front:** Traders must provide more structured pre-arrival and customs data than before - this drives system integration work for many SMEs.
- **Software integration is essential:** Most businesses use a customs software provider or customs agent integrated with CDS and the HMRC APIs. Manual email/XML channels like the old NES XML service have been withdrawn.
- **New roles & responsibilities:** Who files S&S (haulier vs importer), who creates the GMR, and who manages transit guarantees - all of this now needs clear operational ownership.

## Quick Checklist for Traders (to be Border-Ready)

1. Make sure you have a correct GB EORI (and XI/EU EORI if you trade with NI/EU).
2. Enrol for HMRC services you need (CDS, Safety & Security enrolment if you'll submit S&S declarations).
3. Confirm your customs software or agent is integrated with CDS, GVMS (if using RoRo ports), and NCTS for transit.
4. Build processes for pre-arrival S&S submission (timing rules differ by transport mode - road, sea, rail).

## Further Reading / Official Pages

- HMRC - Customs Declaration Service (CDS) collection
- GOV.UK - Goods Vehicle Movement Service (GVMS) guidance
- GOV.UK - Safety & security / Import Control System (ICS2) guidance and S&S GB material
- HMRC Developer Hub - Customs & S&S APIs and integration guides

---

*Need help navigating the new UK customs systems? [Contact Trade Link](/contact) for expert guidance on CDS integration, GVMS setup, and compliance support.*
