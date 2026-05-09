# WF-04  ITP Generation Workflow

**Trigger:** New work item identified / MS approved / Inspection request without ITP  
**Output:** Approved Inspection Test Plan ready for site use  
**Agent:** Orchestrator  Document Generator Agent  Spec Compliance Agent (validation)

---

## WHEN IS AN ITP REQUIRED?

ITP is mandatory for every work activity that involves:
- Any hold point or witness point inspection
- Any test (strength, pressure, compaction, thickness, etc.)
- Any work that will be concealed (buried, covered, finished over)
- Any work referenced in the project QCP

Rule: MS approval triggers ITP generation if ITP is not already submitted.
No inspection can be carried out without an approved ITP in place.

---

## STAGE 1  TRIGGER AND INPUT COLLECTION

Agent: Orchestrator detects ITP need from:
- New MS submitted (MS review triggers ITP check)
- New work item in programme
- Contractor inspection request received without ITP reference

Collect inputs before generation:
- [ ] Work item name and description
- [ ] Phase and WBS code
- [ ] Spec section reference (from `context/spec_index.md`)
- [ ] Approved MS reference (if available)
- [ ] Approved MAR list for this work item
- [ ] Past approved ITP for same trade (check `data/past_projects/approved/`)

```
IF past approved ITP exists for same work type:
 Load as base template
 Adapt to current project spec and scope
 Note adaptation in ITP header

IF no past ITP:
 Generate from spec and skill (skills/generate_itp.md)
```

---

## STAGE 2  DEFINE WORK ITEM SCOPE

Before building ITP, define exactly:

1. What is the complete activity from start to finish?
2. Where does this ITP start? (what is the pre-condition?)
3. Where does this ITP end? (what is the handover condition to next trade?)
4. Are there sub-activities that each need their own ITP?

```
ACTIVITY SPLITTING RULE:
If a work item has 2 or more technically distinct phases
with different inspection types  split into separate ITPs.

Example: "Waterproofing" may split into:
  ITP-WP-01: Below-grade tanking
  ITP-WP-02: Roof waterproofing
  ITP-WP-03: Wet area waterproofing
Each has different spec clauses, tests, and inspection logic.
```

---

## STAGE 3  BUILD INSPECTION STAGE LIST

Using `skills/generate_itp.md`  Steps 2 to 6:

For each stage define:
- Stage number and name
- Inspection type: H / W / R
- Acceptance criteria (measurable, spec-referenced)
- Test method and frequency
- Responsibility: C / Q / S / T
- Record format

```
HOLD POINT MANDATORY TRIGGERS:
The following conditions ALWAYS require a Hold Point (H):

Concrete works:
 Pre-pour inspection (rebar, formwork, cover, embedments)
 Formwork striking (cube results must be received first)

Waterproofing:
 Substrate approval before membrane
 Completed membrane before flood test
 Flood test result before protection layer
 Before any covering (screed, backfill, slab)

MEP:
 Pressure/leak test completion before insulation
 Before concealment behind walls/ceilings
 Before connection to live systems

Structural steel:
 Weld inspection before fireproofing
 Surface prep before coating
 Final alignment before grouting

All trades:
 Material delivery inspection (MIR) before use
 Final acceptance before handover to next trade
```

---

## STAGE 4  SPEC VALIDATION

Agent: Spec Compliance Agent validates ITP against spec:

1. Are all spec-required tests included?
2. Is test frequency meeting spec minimum?
3. Are acceptance criteria matching spec values (not relaxed)?
4. Are all spec-specified inspection hold points included?
5. Are applicable standards correctly referenced per spec?

```
IF spec requires test that is not in ITP:
 Flag: "Missing test: [test type] required per Spec [clause XX]"
 Add to ITP before issuing

IF acceptance criteria is less stringent than spec:
 Flag: "Acceptance criterion at Stage [N] must be [spec value], not [draft value]"
 Correct before issuing
```

---

## STAGE 5  ITP FORMATTING

Generate final ITP using standard table format:

```
INSPECTION TEST PLAN

ITP Number:     ITP-[WBS Code]-[Sequence]
Revision:       Rev 00
Date:           [Date]
Work Item:      [Full description]
Phase:          [Phase]
WBS Code:       [Code]
Spec Section:   [Reference sections]
Standards:      [Applicable standards]
Related MS:     [MS reference]
Related QCP:    [QCP reference]
Prepared by:    [QAQC Engineer  Agent output, human review required]
Status:         DRAFT  Not for use until approved

LEGEND:
H = Hold Point (mandatory sign-off, work cannot proceed)
W = Witness Point (QA attendance required, min 24h notice)
R = Review Point (document review, no site attendance)
C = Contractor | Q = QA Engineer | S = Consultant | T = Third Party

| Stage | Activity | Type | Acceptance Criteria | Test / Check | Frequency | C | Q | S | Record |
|-------|----------|------|---------------------|-------------|-----------|---|---|---|--------|
|   1   |          | H/W/R|                     |             |           |   |   |   |        |
...
| FINAL | Final acceptance | H | All stages signed. Snags closed. Clean and protected. | Full inspection | 100% |  |  |  | Final record |

APPROVALS:
Prepared (QA Engineer):  _____________ Date: _______
Reviewed (QAQC Manager): _____________ Date: _______
Approved (Consultant):   _____________ Date: _______
Status: DRAFT  APPROVED FOR USE
```

---

## STAGE 6  REVIEW AND APPROVAL PROCESS

After generation (status = DRAFT):

1. QAQC Engineer reviews for completeness and technical accuracy
2. Contractor reviews for constructability (they must also sign)
3. Consultant approves (mandatory)

```
REVIEW CHECKLIST FOR QA ENGINEER:
[ ] All stages cover full activity from start to finish
[ ] No gap between stages (nothing uninspected)
[ ] All hold points at critical concealment stages
[ ] Acceptance criteria are measurable (no vague statements)
[ ] Test frequency meets spec minimum
[ ] Responsibility matrix logical
[ ] Record format identified for every stage
[ ] Spec clause referenced for each acceptance criterion

IF any item fails  revise before issue
```

---

## STAGE 7  DISTRIBUTION

Once approved:

| Recipient | Format | Purpose |
|-----------|--------|---------|
| Site QA Team | Digital + printed | Active inspection use |
| Contractor site supervisor | Digital + printed | Awareness of hold/witness points |
| QAQC Manager | Digital | Register and oversight |
| Consultant | Digital | Reference for inspections |
| Project records | Archived | Traceability |

---

## STAGE 8  ITP ACTIVATION ON SITE

Before first inspection stage:
- [ ] ITP distributed to site supervisor and QA team
- [ ] Hold points and their notification requirement explained to contractor
- [ ] Contractor confirms: minimum 24h notice will be given before hold/witness points
- [ ] First inspection stage pre-conditions confirmed

```
CONTRACTOR NOTIFICATION PROTOCOL:
For Hold Points (H):
 Contractor gives minimum 24h written notice (email / site management system)
 QA confirms attendance or re-schedules
 Work CANNOT proceed past H without QA physical sign-off

For Witness Points (W):
 Contractor gives minimum 24h written notice
 QA attends
 If QA cannot attend: issue written permission to proceed
 QA reviews records after the fact
```

---

## STAGE 9  ITP LIFECYCLE

ITP is a living document on site:

- Every inspection stage completed  QA signs the stage in ITP
- NCR raised  reference noted in ITP stage record
- Failed stage  ITP stage marked FAIL, not signed until re-inspection passes
- Revision required (scope change)  new revision issued, reapproved
- All stages signed  ITP = COMPLETE

Completed ITP archived in `logs/inspection_register.md`

---

## ITP NUMBERING SYSTEM

```
ITP - [Phase Code] - [Trade Code] - [Sequence]

Phase codes:
01 = Earthworks/Substructure
02 = Shell & Core
03 = Façade / Envelope
04 = MEP Rough-in
05 = Fit-out
06 = Snagging

Trade codes:
CON = Concrete
STL = Steel
WP = Waterproofing
FAC = Façade
HVAC = HVAC
ELE = Electrical
PLB = Plumbing
FIRE = Fire
MRB = Marble/Stone
JNY = Joinery
PNT = Paint
CEL = Ceiling

Example: ITP-02-CON-003 = Shell phase, Concrete, 3rd ITP
```

---

## RELATED FILES
- `skills/generate_itp.md`
- `logs/inspection_register.md`
- `context/spec_index.md`
- `workflows/inspection_workflow.md`
