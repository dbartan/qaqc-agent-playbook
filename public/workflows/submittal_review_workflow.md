# WF-03  Submittal Review Workflow (Shop Drawing / General Submittal)

**Trigger:** Contractor submits Shop Drawing, ITP, QCP, or any other technical submittal  
**Output:** Approved / Commented / Revise / Rejected submittal with full comment record  
**Agent:** Orchestrator  Submittal Review Agent  Spec Compliance Agent

---

## SUBMITTAL TYPES COVERED BY THIS WORKFLOW

| Code | Type | Primary Review Authority |
|------|------|-------------------------|
| SD | Shop Drawing | Architect / Structural / MEP Engineer |
| ITP | Inspection Test Plan | QAQC Manager |
| QCP | Quality Control Plan | QAQC Manager + Consultant |
| TR | Test Plan / Protocol | QAQC Engineer |
| CALC | Engineering Calculation | Structural / MEP Engineer |
| SP | Sample / Swatch | Architect + Client |

---

## STAGE 1  RECEIPT AND LOGGING

On receipt of any submittal:

1. Assign Submittal ID: `S-[ProjectCode]-[Sequence]`
2. Record in `logs/submittal_register.md`:
   - Submittal ID, type, trade, description
   - Date received
   - Contractor reference number
   - Revision number
   - Review deadline (today + contractual review period)
3. Confirm receipt to contractor (within 24 hours)

```
IF submittal received without cover sheet or submittal ID:
 Return immediately: "Resubmit with completed cover sheet."
 Do not start review clock until properly formatted submittal received.
```

---

## STAGE 2  COMPLETENESS CHECK

Agent: Submittal Review Agent (skills/review_submittal.md  Step 2)

### Shop Drawing  Required:
- [ ] Drawing number, revision, date, scale
- [ ] Title block complete (project, contractor, discipline)
- [ ] Spec section reference noted on drawing
- [ ] Material callouts with MAR reference numbers
- [ ] All dimensions, tolerances, clearances shown
- [ ] Connection and interface details included
- [ ] Deviation cloud on all changed areas (Rev 02+)
- [ ] Contractor engineer stamp (if structural or pressure-bearing)
- [ ] Coordination check statement (MEP clash clearance if applicable)

### ITP  Required:
- [ ] Work item and WBS code identified
- [ ] Spec reference noted
- [ ] All inspection stages listed in sequence
- [ ] Type assigned (H / W / R) for each stage
- [ ] Acceptance criteria defined for each stage (measurable, not vague)
- [ ] Responsibility matrix (C / Q / S) for each stage
- [ ] Test frequency and method specified
- [ ] Record format identified

### QCP  Required:
- [ ] Scope of work package defined
- [ ] All WBS codes covered listed
- [ ] Submittal register (list of all submittals for the package)
- [ ] Material control section
- [ ] Hold point summary table
- [ ] NCR process reference
- [ ] Records and documentation plan

```
IF any required items missing:
 STATUS: INCOMPLETE (Code I)
 Return to contractor with specific missing items listed
 Clock stops. Restart when complete resubmission received.
 Log: Status = I, reason noted
```

---

## STAGE 3  RESUBMISSION CHECK (Rev 02 and above)

Before any technical review of a resubmission:

1. Check revision number is incremented correctly
2. Verify response matrix is attached covering ALL previous comments
3. Confirm revision cloud marks every changed area
4. Cross-check: does the response actually address each comment?

```
IF previous comments not addressed in response matrix:
 Return without full review
 Note: "Comments [X, Y, Z] not addressed. Resubmit with complete response."
 This is not a Code C  it is an administrative return.
```

---

## STAGE 4  TECHNICAL REVIEW

### 4.1 Shop Drawing Technical Review

Step 1  Design intent compliance:
- Does drawing match approved design intent drawings?
- Are dimensions consistent with architectural / structural drawings?
- Are interfaces with adjacent elements correctly detailed?

Step 2  Spec compliance:
- Load applicable spec section (from `context/spec_index.md`)
- Check materials called out on drawing match spec
- Check all MAR numbers cited are in APPROVED status
- Check tolerances match spec requirements
- Check connection details comply with structural spec

Step 3  Buildability check:
- Is the drawing constructable as drawn?
- Are tolerances realistic for site conditions?
- Are access and sequencing issues considered?

Step 4  Coordination check (MEP):
- Has contractor confirmed clash-free coordination?
- Are service routes consistent with architectural drawings?
- Are penetration locations agreed?

### 4.2 ITP Technical Review

For each inspection stage:
- Is the stage necessary and correctly placed in sequence?
- Is the type (H/W/R) appropriate for the risk level?
- Is the acceptance criterion specific and measurable?
- Are hold points placed at all critical pre-concealment stages?
- Are all spec-required tests included at correct frequency?
- Is the responsibility matrix logical?

```
MINIMUM HOLD POINTS (mandatory in every ITP):
- Before concealing any structural element
- Before concealing any waterproofing
- Before any pour (concrete)
- Before covering any MEP installation
- Final acceptance before handover to next trade
```

### 4.3 QCP Technical Review

- Does QCP cover all activities in the work package?
- Are all required submittals listed (MAR / MS / ITP / SD)?
- Is the hold point summary complete?
- Is NCR process correctly referenced?
- Is records section adequate for traceability?

---

## STAGE 5  COMMENT GENERATION

For each issue found:

```
Comment [N]:
  Drawing/Document Ref: [Drawing number / ITP section / QCP section]
  Clause:   [Spec Section XX.XX.XX or standard ref]
  Issue:    [Specific description of the problem]
  Required: [What the spec or design intent requires]
  Found:    [What the contractor has submitted]
  Action:   [Exactly what contractor must change]
  Severity: [Major / Minor]
```

Rules:
- Every comment is clause-referenced. No exceptions.
- Every comment has a specific required action.
- Comments are numbered sequentially.
- Major comments = cannot approve. Minor = approve with comments possible.

---

## STAGE 6  DECISION

```
No deviations, complete package:
 CODE A: APPROVED
 Contractor may proceed

Minor deviations only (admin, non-critical clarifications):
 CODE B: APPROVED WITH COMMENTS
 Contractor proceeds  must address comments before final inspection

1 or more Major comments (spec non-compliance, missing critical detail):
 CODE C: REVISE AND RESUBMIT
 Contractor must revise and resubmit. Do not proceed.
 State resubmission deadline.

Fundamental non-compliance, wrong system, unsafe design:
 CODE D: REJECTED
 Full redraw / rethink required
 State reasons in detail
```

---

## STAGE 7  OUTPUT DOCUMENT

```
SUBMITTAL REVIEW RECORD

Submittal ID:     [S-XXX]
Type:             [SD / ITP / QCP / TR / CALC]
Title:            [Description]
Drawing/Doc No:   [Reference]
Revision:         [Rev XX]
Phase / WBS:      [Phase  WBS Code]
Spec Section:     [Reference]
Contractor:       [Firm]
Date Received:    [Date]
Date Responded:   [Date]
Review Duration:  [N days]
Reviewed By:      [QA Engineer / Agent]

COMPLETENESS:     [COMPLETE / INCOMPLETE]
RESUBMISSION:     [Response matrix: ADEQUATE / INADEQUATE / N/A]
STATUS CODE:      [A / B / C / D / I]

COMMENTS:
[Numbered list per Stage 5 format]

REQUIRED ACTIONS FOR CONTRACTOR:
[Clear consolidated action list]

RESUBMISSION DUE:    [Date  if Code C or D]
```

---

## STAGE 8  REGISTER UPDATE

`logs/submittal_register.md`:
- Status code updated
- Response date recorded
- Review duration calculated
- Next action and due date set
- Revision history maintained

---

## RESPONSE TIMELINE

| Submittal Type | Review Period | Resubmission Review |
|---------------|--------------|-------------------|
| Shop Drawing | 21 days | 14 days |
| ITP | 14 days | 7 days |
| QCP | 14 days | 7 days |
| Test Plan / Protocol | 7 days | 5 days |
| Calculation | 21 days | 14 days |

Review clock starts: date complete package received (Code I resets clock).
