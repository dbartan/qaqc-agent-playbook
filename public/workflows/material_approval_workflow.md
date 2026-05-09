# WF-01 — Material Approval Workflow (MAR)

Trigger: Contractor submits Material Approval Request
Output: Approved / Conditional / Revise / Rejected MAR

---

## STAGE 1 — COMPLETENESS CHECK
Agent: Submittal Review Agent

Required documents:
- [ ] MAR form complete and signed by contractor
- [ ] Product data sheet (manufacturer's original)
- [ ] Compliance statement vs spec clauses
- [ ] Third-party test certificates
- [ ] Physical sample reference / photos
- [ ] Manufacturer ISO / quality certification
- [ ] Country of origin declaration

IF any missing → STATUS: INCOMPLETE (Code I)
→ Return to contractor. Do NOT proceed to technical review.
→ Log in submittal_register: Status=I, missing items listed

---

## STAGE 2 — SPEC COMPLIANCE CHECK
Agent: Spec Compliance Agent

1. Load applicable spec section from spec_index.md
2. Clause-by-clause comparison:
   - Material type / grade / standard reference
   - Physical properties (strength, density, thermal, acoustic)
   - Chemical composition (if applicable)
   - Dimensional requirements
   - Surface finish / appearance
   - Country of origin restrictions
3. Validate test certificates:
   - Tests performed per correct standard
   - Test date (validity — typically 2 years)
   - Lab accreditation (ISO 17025 or equivalent)

Output: Compliance Matrix
| Spec Clause | Requirement | Submitted Value | Status | Comment |
|-------------|------------|----------------|--------|---------|

---

## STAGE 3 — TECHNICAL REVIEW
Agent: Submittal Review Agent

1. Data sheet vs test certificate consistency check
2. Equal/substitute check (if OR EQUAL clause exists in spec)
3. Compatibility with adjacent materials
4. Interface check with approved shop drawings
5. Resubmission: verify response to previous comments

---

## STAGE 4 — DECISION MATRIX
Agent: Orchestrator

ALL clauses PASS + complete package → CODE A — APPROVED
Minor deviations (admin/cosmetic) → CODE B — APPROVED WITH COMMENTS
1+ Major deviation → CODE C — REVISE AND RESUBMIT
Critical / fundamental non-compliance → CODE D — REJECTED

---

## STAGE 5 — DELIVERY INSPECTION (MIR)

When material delivered to site:
1. Physical check: brand, grade, model matches approved MAR
2. Check batch/lot numbers
3. Quantity vs delivery note
4. Packaging and condition
5. COC (Certificate of Conformance) from manufacturer
6. Storage requirement check

IF match → Release for use (sign MIR)
IF mismatch → Quarantine + NCR raised

HOLD: No material installed without completed MIR

---

## RESPONSE TIMELINE
Completeness check: Day 1
Technical review: Day 7
Decision issued: Day 14
Resubmission: Day 7

---

## RELATED FILES
- templates/MAR_template.md
- templates/MIR_template.md
- logs/submittal_register.md
- skills/review_submittal.md
