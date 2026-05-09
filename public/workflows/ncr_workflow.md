# WF-06 — NCR Lifecycle Workflow

Trigger: Non-conformance detected (inspection, test, submittal review, observation)
Output: Raised NCR → Corrective action → Closure

---

## STAGE 1 — DETECTION & CLASSIFICATION

Sources of NCR trigger:
- Failed inspection (ITP stage not passed)
- Failed test result
- Submittal review (material/method non-compliance)
- Site observation (deviation from approved MS)
- Audit finding

Agent: NCR & Risk Agent classifies severity:

CRITICAL:
- Structural integrity risk
- Waterproofing failure (if concealed work)
- Safety hazard
- Fire system non-compliance
- Buried/concealed work not inspected before covering
→ STOP WORK IMMEDIATELY on affected area
→ Escalate to QAQC Manager + PM within 2 hours

MAJOR:
- Performance-affecting deviation from spec
- Material installed without approved MAR
- Work executed without approved MS
- Failed structural/pressure/strength test
- Deviation beyond specified tolerance
→ STOP WORK on affected element
→ Contractor response required within 48 hours

MINOR:
- Documentation gap (can be corrected)
- Cosmetic deviation within tolerance range
- Administrative non-compliance
→ Continue work with monitoring
→ Contractor response within 7 days

---

## STAGE 2 — NCR GENERATION

Agent: Document Generator (using templates/NCR_template.md)

NCR must contain:
- NCR number (sequential: NCR-[Project]-[Sequence])
- Date raised
- Location (building / floor / area / grid)
- Description of non-conformance
- Spec/standard clause violated (mandatory)
- Drawing reference (if applicable)
- Severity classification
- Root cause (preliminary)
- Photographic evidence reference
- Corrective action required
- Required completion date
- Raised by (QA Engineer name)

---

## STAGE 3 — CONTRACTOR RESPONSE

Contractor must submit:
- Root cause analysis (5-Why or similar)
- Proposed corrective action
- Proposed repair/remedy method
- Proposed completion date
- Preventive measures to avoid recurrence

Review deadline:
- Critical: 24 hours
- Major: 48 hours
- Minor: 7 days

---

## STAGE 4 — CORRECTIVE ACTION REVIEW

Agent: Submittal Review Agent reviews contractor's response:
- Is root cause analysis genuine?
- Is proposed corrective action technically sound?
- Is proposed method (repair) compliant with spec?
- Does it require a method statement submission?

IF repair method requires MS → trigger WF-02 (MS review) before repair begins
IF structural repair → mandatory consultant approval before proceeding

---

## STAGE 5 — VERIFICATION INSPECTION

After corrective action complete:
1. Site re-inspection
2. Check corrective action matches approved method
3. Test/measure as required (full test requirements may apply)
4. Document re-inspection result

IF satisfactory → proceed to Stage 6
IF still non-conforming → re-issue NCR (new or continuation)

---

## STAGE 6 — CLOSURE

NCR can only be closed when:
- [ ] Corrective action complete and verified
- [ ] Re-inspection passed
- [ ] Test results (if required) passed
- [ ] All photos and records attached
- [ ] Root cause documented
- [ ] Preventive action confirmed

Critical NCR closure: requires QAQC Manager sign-off
Major NCR closure: requires QA Engineer sign-off
Minor NCR closure: QA Inspector can close

Update ncr_register.md with closure date and record reference.

---

## NCR REGISTER FIELDS
NCR-ID | Phase | WBS | Description | Severity | Raised | Response Due | Status | Closed
