# WF-08  Test Management Workflow

**Trigger:** Test scheduled per ITP / Test report received from contractor  
**Output:** Test record logged, pass confirmed or NCR raised  
**Agent:** Orchestrator  Inspection Agent + NCR Agent (if fail)

---

## TEST CATEGORIES

| Category | Examples | Timing |
|----------|---------|--------|
| Structural | Concrete cube, rebar bend, weld UT/RT | During/after element construction |
| Geotechnical | FDT, plate load, CBR | During earthworks |
| Waterproofing | Flood test, water tightness, IR thermography | After membrane complete |
| MEP  Mechanical | Ductwork leakage, pipe pressure/hydraulic | Before insulation/concealment |
| MEP  Electrical | Insulation resistance, continuity, earth fault | Before energising |
| MEP  Plumbing | Hydrostatic, flow rate, water quality | Before commissioning |
| Fire systems | Pressure, flow, detection, suppression | System complete |
| Façade | Air permeability, water penetration, wind | After mockup / sample |
| Finishes | Adhesion pull-off, surface hardness, DFT | During/after application |
| Commissioning | Balancing, TAB, functional tests | System installation complete |

---

## STAGE 1  TEST PLANNING

Before any test is carried out:

1. Confirm test is listed in approved ITP (stage type H or W)
2. Confirm test equipment is calibrated (calibration cert valid)
3. Confirm test lab is accredited (ISO 17025 or equivalent)
4. Confirm pre-conditions for testing are met:
   - Work complete to correct stage
   - Prior inspection stages signed off
   - Materials and systems isolated / prepared as required
5. Issue test notification to QA team (minimum 24h before)

```
PRE-TEST CHECKLIST:
[ ] Test listed in ITP  Stage [N], Type [H/W]
[ ] Spec requirement confirmed: [test method + pass value]
[ ] Test equipment: [Equipment ID] Calibration cert: [Cert ref] Valid to: [Date]
[ ] Lab accreditation: [ISO 17025 cert ref]
[ ] Pre-conditions: [all prior ITP stages signed]
[ ] QA witness arranged: [Name] Date/time: [____]
[ ] Location / element: [Clearly defined]
```

---

## STAGE 2  TEST WITNESSING

QA Engineer attends and witnesses:

During test:
- Verify equipment being used matches stated calibration cert
- Verify test method matches spec requirement
- Record environmental conditions (temperature, humidity if relevant)
- Record actual test parameters (applied pressure, load, etc.)
- Observe full test duration without interruption
- Sign test log as witness

```
WITNESSING RULE:
QA signature = QA physically witnessed the test.
QA must never sign a test report for a test they did not witness
unless it is a Review point (R) and records are reviewed after the fact.

If contractor requests QA signature on a test QA did not witness:
 Refuse
 Request test repeat with QA present
 If contractor refuses repeat  raise NCR
```

---

## STAGE 3  TEST RESULT RECORDING

Immediately after test, record:

```
TEST RECORD

Test ID:           TR-[ProjectCode]-[Sequence]
Date:              [Date]    Time: [Time]
ITP Reference:     [ITP-XX] Stage [N]
Phase / WBS:       [Phase  WBS Code]
Trade / Element:   [Description]
Location:          [Building / Floor / Area / Grid / Element ID]
Test Type:         [Description]
Test Standard:     [ASTM / BS / EN reference]
Test Equipment:    [ID + calibration cert ref]
Lab / Technician:  [Name and accreditation]
QA Witness:        [QA Engineer name]

SPEC REQUIREMENT:
  Parameter:       [e.g. Min compressive strength]
  Required Value:  [e.g. 35 MPa at 28 days]
  Test Method:     [e.g. ASTM C39]

RESULT:
  Actual Value:    [e.g. 37.5 MPa]
  Result:          [PASS / FAIL]

SAMPLES (if applicable):
  Sample ID:       [e.g. Cube ID]
  Quantity:        [e.g. 3 cubes]
  Curing location: [e.g. Site curing tank]
  Test date:       [e.g. 28 days from pour]
  Pour date:       [Date]

ENVIRONMENTAL CONDITIONS:
  Temperature:     [C]
  Humidity:        [%]
  [Other relevant conditions]

REMARKS:         [Any observations]
QA Signature:    _____________ Date: _______
Contractor rep:  _____________ Date: _______
```

---

## STAGE 4  PASS / FAIL DECISION

```
RESULT = PASS:
 Sign ITP stage
 Log in test_register.md: PASS
 Contractor may proceed per ITP
 File test report in project records

RESULT = FAIL:
 Do NOT sign ITP stage
 HOLD: Work in affected area suspended
 Raise NCR immediately (skills/generate_ncr.md)
 NCR links test TR reference
 Log in test_register.md: FAIL, NCR ref
 Follow WF-06 (NCR Workflow)
```

---

## STAGE 5  TEST-SPECIFIC PROTOCOLS

### CONCRETE CUBE TESTS

```
Sampling:
- 1 set = minimum 3 cubes per 50m (or per spec frequency)
- Take at point of discharge from mixer/pump
- QA witnesses sampling
- Slump test at same time
- Record batch number, pour location, pour time

Curing:
- Cubes cured in water tank at 20C 2C (or per spec)
- Not left in open air or in direct sun

7-day indicative result:
- If 7-day result is critically low  alert immediately
- Typical: 7-day  70% of 28-day strength

28-day result:
- IF PASS  sign ITP stage
- IF FAIL  NCR raised
   Investigate: curing issue? Mix design? Sampling error?
   Core samples from structure may be required (at contractor's cost)
   Structural engineer assessment mandatory

Failure response sequence:
1. NCR raised immediately
2. Structural engineer informed
3. Additional cores taken from element
4. Core results determine: accept / repair / demolish
5. All costs to contractor
```

### WATERPROOFING FLOOD TEST

```
Setup:
- All drains plugged (inspect plugs before start)
- Flood to minimum 25mm depth above highest point
  or as specified (typically 50-100mm)
- Mark water level at start (permanent marker on wall)

Duration: minimum 48 hours (or as specified)

Monitoring:
- Check water level at 12h, 24h, 36h, 48h
- Record level at each check
- Inspect below (soffit, adjacent areas) for seepage

Pass criteria: Zero leakage. Zero water level drop beyond evaporation.
Note: Allow for evaporation (typically <5mm/48h in covered areas)

FAIL action:
 Drain immediately
 Mark visible leak locations
 NCR raised
 Repair method must be submitted as method statement
 Re-test after repair  full 48-hour test again
 Repeat until zero leakage achieved
```

### MEP PRESSURE TEST

```
Hydraulic (water) test:
- Fill system, purge all air
- Pressurize to test pressure: [1.5x working pressure or per spec]
- Hold for [1 hour minimum or as spec]
- Allowable pressure drop: [0 bar for water, spec value for others]
- Inspect all joints visually during test

Pneumatic (air/N2) test:
- CAUTION: higher energy  safety controls mandatory
- Pressure typically lower than hydraulic equivalent
- Soap solution applied to all joints for leak detection

FAIL:
 Depressurise
 Locate all leaks (QA and contractor)
 NCR: list all leak locations
 Repair joints
 Re-test  full duration again
 Re-test must also be witnessed by QA
 Insulation NOT applied until final test PASS
```

### COMPACTION TEST (FDT)

```
Frequency: 1 test per 500m per layer (or per spec)
Method: ASTM D1556 (sand cone) or ASTM D6938 (nuclear gauge)
Required: min 95% Modified Proctor (ASTM D1557) or per spec

Testing sequence:
- One compaction layer complete
- Test at random QA-selected location (not contractor-selected)
- QA selects test location  contractor does not predetermine

FAIL:
 Area re-compacted
 Full additional compaction effort
 Re-test (new test, new location)
 Re-test also QA-witnessed
 Pattern failure (multiple fails in area)  full layer re-evaluation
```

### ELECTRICAL TESTS

```
Insulation Resistance (IR):
- Megger test per IEC 60364
- Minimum 1MΩ (or per spec) between phase and earth
- Test before energising any circuit

Continuity:
- All protective conductors checked
- Earth fault loop impedance

RCD testing:
- Trip time per IEC requirement
- Test at each RCD device

All tests logged with circuit reference, test values, equipment used.
```

---

## STAGE 6  TEST REGISTER UPDATE

After every test:

`logs/test_register.md`:

| Test-ID | Date | ITP Ref | Trade | Element | Location | Test Type | Req Value | Result | Status | NCR Ref |
|---------|------|---------|-------|---------|----------|-----------|-----------|--------|--------|---------|

---

## STAGE 7  PENDING RESULTS TRACKING

For tests with delayed results (concrete cubes, lab analysis):

Agent: Schedule Agent monitors:

```
PENDING TEST TRACKING:
Test ID:         [TR-XXX]
Sample taken:    [Date]
Expected result: [Date  e.g. 28 days from sampling]
Element held:    [YES  cannot proceed past next H until result received]
Alert if no result by: [Expected date]

IF result overdue by >3 days:
 Flag to QA Engineer
 Contact lab for status
 If lab lost sample  contractor re-sample, inform QAQC Manager
```

---

## RELATED FILES
- `logs/test_register.md`
- `logs/inspection_register.md`
- `workflows/ncr_workflow.md`
- `skills/inspection_checklist.md`
