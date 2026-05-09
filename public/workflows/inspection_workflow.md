# WF-05 — Site Inspection Workflow

Trigger: Inspection request received / ITP stage reached
Output: Inspection record, sign-off or NCR

---

## PRE-INSPECTION CHECK (before mobilising to site)

Agent: Inspection Agent verifies:
- [ ] MAR for all materials: APPROVED
- [ ] MS for the work: APPROVED
- [ ] ITP for the work: APPROVED and distributed
- [ ] Previous inspection stage: SIGNED OFF
- [ ] Pre-conditions complete (substrate, interfaces)
- [ ] Equipment on site and calibrated

IF any item NOT met → Inspection NOT carried out → Notify contractor to resolve

---

## INSPECTION TYPES

H = HOLD POINT
Work physically cannot proceed. QA/Consultant must attend and sign.
Minimum 24h notice required from contractor.
If QA does not attend within agreed timeframe → re-schedule (do not clear remotely).

W = WITNESS POINT
QA should attend. Contractor gives minimum 24h notice.
If QA cannot attend after notice → issue written permission to proceed (documented).
Must review result records.

R = REVIEW POINT
Document review only. No site attendance.
Contractor submits records for QA review and signature.

---

## DURING INSPECTION

For each inspection stage per ITP:
1. Check pre-conditions for that stage
2. Inspect against acceptance criteria in ITP
3. Record actual vs required
4. Measure / test as required
5. Photograph (before, during, after)
6. Record all deviations immediately

IF deviation found:
→ Record observation
→ Classify: Minor / Major / Critical
→ If Minor: note on inspection record, monitor
→ If Major/Critical: STOP WORK on affected area, raise NCR immediately

---

## INSPECTION RECORDS

Mandatory for every inspection:
- Date, time, location (building / floor / area / grid ref)
- ITP reference and stage number
- Attendees (contractor, QA, consultant)
- Weather/environmental conditions (if relevant)
- Measurements/test results (actual vs required)
- Photographs (numbered, referenced)
- Deviations noted
- NCR numbers raised (if any)
- Sign-off status: PASS / CONDITIONAL / FAIL

---

## POST-INSPECTION

IF PASS:
→ Sign ITP stage
→ Contractor may proceed to next stage
→ Update inspection_register.md

IF CONDITIONAL:
→ Sign with conditions noted
→ Set re-inspection date for conditional items
→ Update register

IF FAIL:
→ Do not sign
→ Stop work
→ Raise NCR
→ Set corrective action deadline
→ Re-inspection after corrective action complete

---

## RELATED FILES
- templates/inspection_checklist_template.md
- logs/inspection_register.md
- workflows/ncr_workflow.md
- skills/inspection_checklist.md
