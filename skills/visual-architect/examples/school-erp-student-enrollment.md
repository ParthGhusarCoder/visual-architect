# School ERP Student Enrollment — Behavioral Benchmark

This benchmark tests whether Visual Architect can plan a broad domain without forcing every concern onto one canvas. It is a **proposed reference model**, not a claim about a particular school’s policies.

## Intended readers and decisions

- Families should understand what happens next and what they must provide.
- Admissions and finance teams should see ownership, queues, exceptions, and service-level risks.
- School leaders should see capacity, conversion, equity, compliance, and operational controls.
- Engineers should be able to derive states, core entities, integrations, events, and audit needs.

## Required diagram set

1. Lifecycle overview: Discover → Apply → Verify → Evaluate → Decide → Accept & pay → Place → Onboard.
2. Operational swimlane: Family, Admissions, Academic/Support, Finance, and ERP automation, including rework and recovery.
3. Application state model: Draft, Submitted, Under review, Needs information, Assessment, Waitlisted, Offered, Accepted, Enrolled, Rejected, Withdrawn, Expired, and Cancelled.
4. Data/integration view: core records, sensitive-data zones, external services, and asynchronous callbacks.
5. Coverage note: every capability below maps to a view/element or is marked Assumption, TBD, or Out of scope.

## Functional coverage inventory

| Area | Capabilities the proposed model must represent |
|---|---|
| Discovery and enquiry | campaign/source attribution, enquiry capture, campus/program/grade/term selection, tours or open days, lead follow-up |
| Identity and family | student profile, multiple guardians, relationships, custody/communication restrictions, siblings, emergency contacts, duplicate detection |
| Application | save/resume, multilingual and accessible forms, validation, configurable fields, multi-child reuse, submission receipt |
| Eligibility and capacity | age/grade rules, residency or catchment, prerequisites, seat availability, quotas/priorities, sibling preference, configurable policy checks |
| Documents | checklist by applicant type, secure upload, versioning, verification, rejection/re-upload, expiry, virus scanning |
| Student support | health alerts, allergies, disability/access needs, learning support, language support, safeguarding flags, consent-controlled visibility |
| Evaluation | staff queue, assignment, notes, rubric, assessment, interview, reference checks, conflict-of-interest control |
| Decision | approval, conditional offer, waitlist and ranking, rejection reasons, appeal/reconsideration, decision history |
| Offer and consent | offer pack, deadline/expiry, terms, e-signature, policy acknowledgements, media/data/medical consent, withdrawal |
| Fees and aid | application fee, deposit, fee plan, discount, scholarship/financial-aid review, tax/receipt, online/offline payment, failure retry, refund, reconciliation |
| Placement | campus, academic year, grade/class, house, subjects/electives, transport, boarding, meal plan, capacity lock and release |
| Enrollment record | immutable application-to-student linkage, admission number, student ID, roll number, start date, status history, prior-school record |
| Accounts and onboarding | guardian/student accounts, role-based access, SSO invitation, welcome pack, orientation, task checklist, timetable/uniform/device instructions |
| Communications | templates, localization, email/SMS/push, preferences, delivery status, reminders, escalation, two-way correspondence log |
| Operations and reporting | dashboards, funnel/conversion, capacity, aging/SLA, workload, source effectiveness, diversity/equity where lawful, exports, scheduled reports |
| Administration | configurable terms, campuses, programs, forms, checklists, workflows, rules, rubrics, fees, templates, roles, reason codes, feature flags |
| Governance and reliability | least privilege, segregation of duties, consent, encryption, audit trail, retention/deletion, subject access/export, accessibility, localization, idempotency, backup/recovery, monitoring |
| Integrations | identity/SSO, payment gateway and webhook, email/SMS/push, e-signature, document scanning, accounting, learning/SIS sync, transport, government/regulatory reporting where applicable |

## Outcome-changing exceptions

- Duplicate or already-enrolled applicant.
- Missing, invalid, expired, or unsafe document.
- Ineligible grade/program or no seat available.
- Information requested and resubmitted multiple times.
- Assessment reschedule, no-show, or accommodation required.
- Conditional offer unmet, offer expired, or family withdraws.
- Payment pending, failed, duplicated, reversed, refunded, or webhook delayed.
- Seat held concurrently, released after timeout, or moved from waitlist.
- Integration unavailable; work is retried without creating duplicate records.
- Record correction, guardian dispute, privacy request, or approved appeal.

## Core information objects

Applicant, Student, Guardian, Relationship, Address, Contact preference, Application, Application version, Program/Grade/Campus/Term, Document, Verification, Eligibility result, Assessment, Interview, Review, Decision, Offer, Consent, Fee/Charge, Aid award, Payment, Refund, Seat hold, Placement, Enrollment, Account, Communication, Task, Case, Audit event, Integration event.

## Acceptance checks

- The overview has no more than 12 primary stages and remains readable without zooming.
- Every requested capability is traceable; grouping is allowed, silent omission is not.
- The happy path, alternate outcomes, rework, and recovery are distinguishable.
- Confirmed facts are not invented; proposal and policy-dependent rules are labeled.
- A non-technical reader can explain the main journey in under one minute.
- Technical readers can identify the states, data boundaries, integration points, and controls needed for follow-up views.
- Meaning does not depend on color alone, and interactive output supports keyboard focus and text alternatives.
