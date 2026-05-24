---
title: HRI_DB Reasoning Handlers
sidebar_position: 14
---

# HRI_DB Reasoning Handlers

## Overview

The handlers in this page are specialized uses of the **HRI_DB Handler Pattern**.

They are not independent pattern families.

They reuse the same core structure:

```text
Input HIF
  → specialized handler / escalation switch
  ↔ HRI_DB
  → answer / update / clarification / insight / integrity HIF
```

They differ mainly in the kind of question they ask over the maintained interaction context.

```text
SBR:
  What object, place, person, or spatial relation is being referred to?

CEU:
  Is this new fact consistent with what we already know?

QSH:
  How should the robot answer a user-facing contextual query?

DSIE:
  What deeper social insight can be extracted from maintained context?

SIAH:
  Is the system healthy, bounded, and allowed to continue with its current level of autonomy?
```

This page presents all five as **handler variants** over the same HRI_DB memory interface.

The purpose is to show reuse, not to introduce five unrelated mechanisms.

---

## Shared Handler Logic

All handlers in this page follow the same general logic:

```text
1. Receive a HIF from CNE, TSP, ASL, planning, or another handler.
2. Interpret the HIF according to the handler's semantic role.
3. Query or update HRI_DB.
4. Use policy and λ experts to resolve uncertainty.
5. Emit a structured output HIF.
6. Ask for clarification, escalate, or reject when needed.
```

Typical output HIFs include:

```text
SpatialAnswerHIF
ObjectReferenceHIF
ContextUpdateHIF
ClarificationRequestHIF
QueryAnswerHIF
SocialInsightHIF
IntegrityDecisionHIF
EmergencyActionHIF
```

The shared idea is simple:

```text
Queries ask maintained context.
Facts attempt to modify maintained context.
Handlers decide whether, how, and under which policy this should happen.
```

---

## Spatial-Based Reasoning (SBR)

### Intent

**Spatial-Based Reasoning (SBR)** is a specialized HRI_DB handler for resolving spatial references.

It answers questions such as:

```text
Which object is the human pointing at?
What does "this" refer to?
Which bottle is closest to me?
Which object is behind Bob?
Is the door between the robot and the meeting room closed?
Where is the target object relative to the robot?
```

SBR is especially useful when natural language, gestures, gaze, head motion, or map-relative geometry must be combined.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/spatial-based-reasoning.svg"
  alt="Spatial-Based Reasoning handler retrieving objects from HRI_DB using pointing, spatial language, and map-relative context"
  width="100%"
/>

</div>


---

### How It Works

SBR receives a HIF that may contain spatial information extracted from a unified context delta.

For example:

```text
the user said: "this bottle is empty"
the user pointed with the right hand
the user's gaze direction was estimated
the user's head nod indicated a direction
the scene memory contains several previously detected bottles
```

The handler queries HRI_DB for spatial candidates.

It may then try to find an object that is geometrically compatible with the referring signal.

For example:

```text
find objects labeled "bottle"
retrieve their 3D positions
construct a 3D vector from the pointing hand / gaze / head direction
find objects whose positions intersect or align with that vector
rank candidates by angular distance, depth, confidence, and freshness
```

This allows the robot to understand references even when the target object is no longer visible in the current camera frame.

For example:

```text
The human points toward a bottle.
The bottle is outside the robot's current camera frame.
The bottle was detected earlier and is maintained in HRI_DB.
SBR resolves the reference to the correct object ID.
```

The output may include:

```text
referenced_object_id
candidate list
spatial confidence
reasoning trace
clarification need
```

---

### Escalation to LLM-Based Spatial Reasoning

SBR may use code-based geometry first.

However, it can also escalate to an LLM expert when the spatial reference is not covered by predefined code.

For example, the user may say:

```text
bring me the bottle closest to Bob
bring me the bottle closest to you
bring the object behind the chair
take the one under the table
```

If the rule-based code was not written for this exact phrasing, the handler may provide an LLM expert with a bounded JSON subset of relevant objects:

```json
{
  "query": "closest bottle to Bob",
  "objects": [
    {
      "id": "bottle_1",
      "label": "bottle",
      "position": [1.2, 0.5, 0.0]
    },
    {
      "id": "bottle_2",
      "label": "bottle",
      "position": [3.5, 2.1, 0.0]
    }
  ],
  "persons": [
    {
      "id": "bob",
      "position": [1.0, 0.4, 0.0]
    }
  ]
}
```

The LLM is not asked to hallucinate the world.

It reasons over bounded structured data.

This can also help when speech recognition or accent introduces ambiguity.

For example:

```text
The user says "battle" but points toward a bottle.
Nearby candidates contain bottles, not battles.
SBR may use the pointing geometry and object labels to infer that "bottle" was intended.
```

---

### Typical Outputs

```text
ObjectReferenceHIF
SpatialAnswerHIF
SpatialClarificationHIF
CandidateObjectsHIF
```

Example:

```json
{
  "type": "ObjectReferenceHIF",
  "properties": {
    "referring_expression": "this bottle",
    "resolved_object_id": "bottle_3",
    "resolution_method": "pointing_vector_intersection",
    "candidate_count": 4,
    "confidence": 0.86
  },
  "processing_history": [
    "SBR"
  ]
}
```

If the result is ambiguous:

```json
{
  "type": "ClarificationRequestHIF",
  "properties": {
    "problem": "multiple_spatial_candidates",
    "question": "Which bottle do you mean?"
  },
  "processing_history": [
    "SBR"
  ]
}
```

---

## Consistency Evaluator and Updater (CEU)

### Intent

**Consistency Evaluator and Updater (CEU)** is a specialized HRI_DB handler for checking whether a new fact or evidence is consistent with maintained memory.

It answers questions such as:

```text
Can this new fact be stored safely?
Does it contradict what we already know?
Should we update, merge, mark uncertain, or ask for clarification?
```

CEU handles facts, evidence, and memory updates.

It is the main handler for controlled HRI_DB mutation.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/consistency-evaluator-updater.svg"
  alt="Consistency Evaluator and Updater checking facts or evidence against HRI_DB and producing acknowledgement or clarification HIFs"
  width="100%"
/>

</div>


---

### How It Works

CEU receives a fact or evidence HIF.

For example:

```text
Alice prefers short answers.
The red mug belongs to Bob.
The door is now closed.
The chair was moved to the corridor.
A person is now identified as Alice.
```

The handler checks the new fact against:

```text
short-term memory
session context
HRI_DB
common knowledge available to its expert
policy constraints
```

If the fact is consistent, CEU updates HRI_DB and emits an acknowledgement.

If the fact is inconsistent, CEU does not necessarily ask the user immediately.

Instead, it emits a structured HIF describing the problem.

A later HRI layer may decide how and when to ask the user in a socially appropriate way.

For example:

```text
The robot may ask now.
The robot may wait until the conversation pauses.
The robot may ask a less confrontational clarification.
The robot may mark both hypotheses as uncertain.
```

---

### Consistency Outcomes

CEU may decide to:

```text
accept and store
accept but mark low confidence
merge with existing entity
update existing memory
create a new hypothesis
reject the update
ask for clarification
route to SIAH for policy review
```

Example:

```json
{
  "type": "ContextUpdateHIF",
  "properties": {
    "entity": "door_12",
    "property": "state",
    "previous": "open",
    "current": "closed",
    "update_status": "accepted",
    "confidence": 0.91
  },
  "processing_history": [
    "CEU"
  ]
}
```

If inconsistent:

```json
{
  "type": "InconsistencyHIF",
  "properties": {
    "entity": "alice",
    "property": "preference",
    "existing_value": "short_answers",
    "new_value": "detailed_explanations",
    "resolution": "clarification_required"
  },
  "processing_history": [
    "CEU"
  ]
}
```

---

## Query Social Handler (QSH)

### Intent

**Query Social Handler (QSH)** is a specialized HRI_DB handler for answering user-facing contextual questions.

It is different from SBR.

SBR specializes in resolving spatial references and spatial reasoning.

QSH handles broader contextual queries once the relevant references have been resolved.

For example:

```text
User: "Is this bottle empty?"
SBR: resolves "this bottle" to bottle_3.
QSH: checks HRI_DB and answers whether bottle_3 is empty.
```

QSH turns maintained context into an interaction-appropriate answer.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/query-social-handler.svg"
  alt="Query Social Handler answering questions over short-term memory session context and HRI_DB using a tiered semantic cache"
  width="100%"
/>

</div>


---

### HRI_DB TSC Reuse

QSH reuses the idea of a **Tiered Semantic Cache / Proxy**.

It may check:

```text
short-term memory
session context window
HRI_DB
larger external sources if needed
```

This lets the system answer many questions quickly from recent context before escalating to deeper memory or larger reasoning.

For example:

```text
Question:
  "Did I just tell you where Bob is?"

Short-term memory:
  yes, user said Bob is in the kitchen

QSH answer:
  "Yes, you told me Bob is in the kitchen."
```

Or:

```text
Question:
  "Is this bottle empty?"

SBR:
  resolves "this bottle" to bottle_3

QSH:
  checks bottle_3 properties in HRI_DB

Answer:
  "I believe this bottle is empty."
```

---

### Typical Query Types

QSH may answer:

```text
where is X?
who is X?
what did I ask you to remember?
is this object empty / available / mine?
what does the robot know about this room?
what is the current social context?
can you do this now?
why did you not do that?
```

It may emit:

```text
QueryAnswerHIF
UnknownAnswerHIF
ClarificationRequestHIF
SociallyAdjustedAnswerHIF
```

Example:

```json
{
  "type": "QueryAnswerHIF",
  "properties": {
    "query": "is_empty",
    "target": "bottle_3",
    "answer": "unknown",
    "reason": "object identified but fullness property is unavailable",
    "suggested_response": "I found the bottle, but I do not know whether it is empty."
  },
  "processing_history": [
    "SBR",
    "QSH"
  ]
}
```

---

## Deep Social Insight Extractor (DSIE)

### Intent

**Deep Social Insight Extractor (DSIE)** is a specialized HRI_DB handler that runs as an independent background process.

It periodically or conditionally queries HRI_DB and updates it with deeper social insights.

Unlike SBR, CEU, or QSH, DSIE does not need to wait for a direct user query.

It can operate in the background.

Its purpose is to detect social patterns that require attention, adaptation, or future action.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/deep-social-insight-extractor.svg"
  alt="Deep Social Insight Extractor running as a background process that updates HRI_DB and emits insight HIFs when attention or action is required"
  width="100%"
/>

</div>


---

### Example Experts

DSIE may include experts such as:

```text
λ Social context classifier
λ Person availability estimator
λ Person pattern detector
λ Social reinforcement learner
```

These experts may ask questions such as:

```text
Is this a formal or informal setting?
Is the person available for interaction?
Is the person repeatedly ignoring the robot?
Is the user becoming frustrated?
Which robot gesture worked best for this user?
Which response style received positive reinforcement?
```

The **Social Reinforcement Learner** may learn patterns such as:

```text
Alice responds better to short confirmations in the morning.
Bob prefers visual gestures over spoken explanations.
A small nod worked better than a spoken acknowledgement in this setting.
The robot should avoid long explanations in the kitchen during busy hours.
```

These insights are stored in HRI_DB with confidence, provenance, and freshness.

---

### Outputs

DSIE may update HRI_DB quietly.

But when an insight requires attention or action, it emits a HIF.

For example:

```json
{
  "type": "SocialInsightHIF",
  "properties": {
    "insight": "person_may_be_waiting_for_help",
    "person": "alice",
    "evidence": [
      "standing near robot for 18s",
      "repeated gaze toward robot",
      "no task progress"
    ],
    "recommended_attention": "medium",
    "confidence": 0.76
  },
  "processing_history": [
    "DSIE"
  ]
}
```

Or:

```json
{
  "type": "SocialPreferenceInsightHIF",
  "properties": {
    "person": "bob",
    "learned_preference": "prefers_short_nonverbal_acknowledgements",
    "context": "meeting_room",
    "evidence": "positive_response_to_nod",
    "confidence": 0.68
  },
  "processing_history": [
    "DSIE"
  ]
}
```

DSIE outputs should be treated as hypotheses, not facts.

They should preserve confidence and traceability.

---

## System Integrity and Agency Handler (SIAH)

### Intent

**System Integrity and Agency Handler (SIAH)** is a specialized background handler responsible for system-level integrity, adjustable autonomy, and safety-related agency control.

Like DSIE, it may operate independently in the background.

Unlike DSIE, it focuses on the robot's internal health, resource state, safety envelope, and allowed autonomy level.

SIAH may receive input from:

```text
robot resources
internal sensors
anomaly detectors
diagnostic experts
prognostic experts
HRI_DB
Robot Context HIFs
```

It can update HRI_DB, emit high-priority HIFs, or trigger emergency protocols.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/system-integrity-agency-handler.svg"
  alt="System Integrity and Agency Handler monitoring robot health integrity and autonomy state while updating HRI_DB and emitting high-priority HIFs"
  width="100%"
/>

</div>


---

### Example Experts

SIAH may include experts such as:

```text
λ Anomaly Detector
λ Diagnosis Extractor
λ Prognosis Evaluator
λ Autonomy Adjuster
```

These experts may ask:

```text
Is the robot in a healthy state?
Is a sensor failing?
Is localization becoming unreliable?
Is battery low enough to reduce autonomy?
Is the camera blocked?
Is motion degraded?
Should the robot lower its autonomy level?
Should the robot stop immediately?
```

---

### Dual Output Strategy

SIAH has a dual output strategy.

First, it continuously updates HRI_DB with integrity and autonomy state:

```text
battery state
CPU / memory / disk state
sensor health
localization quality
actuator health
autonomy level
diagnostic state
prognostic risk
```

Second, it may emit high-priority HIFs when immediate attention or action is required.

For example:

```text
EmergencyStopHIF
AutonomyReductionHIF
IntegrityWarningHIF
SensorFailureHIF
SafetyEscalationHIF
```

Example:

```json
{
  "type": "AutonomyReductionHIF",
  "properties": {
    "previous_autonomy_level": 4,
    "new_autonomy_level": 2,
    "reason": "localization_confidence_low",
    "required_behavior": "avoid_autonomous_navigation"
  },
  "processing_history": [
    "SIAH"
  ]
}
```

Emergency case:

```json
{
  "type": "EmergencyStopHIF",
  "properties": {
    "reason": "motion_integrity_violation",
    "priority": "critical",
    "action": "stop_immediately"
  },
  "processing_history": [
    "SIAH"
  ]
}
```

---

### Why SIAH Matters

SIAH decouples system-level health and safety monitoring from functional task logic.

A robot should not promise, plan, or execute actions without considering its own integrity.

For example:

```text
If the camera is covered:
  the robot should not claim visual awareness.

If battery is low:
  the robot should reduce long-range commitments.

If localization is unstable:
  the robot should avoid precise navigation.

If motion integrity is compromised:
  the robot should stop or reduce autonomy.
```

This makes SIAH the robot's internal integrity and autonomy regulator.

It provides the transparency needed to understand why a robot refused a task, lowered autonomy, or triggered a safety protocol.

---

## Combined Query and Fact Handling

The specialized handlers may be composed.

For example, CNE may extract a context delta.

The system may then decide whether spatial retrieval is needed.

If it is needed, SBR resolves the spatial reference first.

The result can then be routed to CEU, QSH, or another handler.

<div align="center">

<img
  src="/social-hri-framework/img/hml/hri-db-query-fact-handling.svg"
  alt="Combined query and fact handling over HRI_DB showing how CNE SBR CEU QSH DSIE and SIAH may connect"
  width="100%"
/>

</div>


---

### Example: Pointing to a Bottle and Asking a Question

```text
User:
  "Is this bottle empty?"

Human Context:
  hand pointing vector
  speech transcript

Scene Context:
  known objects
  object positions
  recent detections

CNE:
  extracts a meaningful query event

SBR:
  resolves "this bottle" to bottle_3

QSH:
  checks HRI_DB for bottle_3 properties

Output:
  answer HIF or clarification HIF
```

If the target bottle is outside the current camera frame, SBR may still resolve it from maintained memory.

If the fullness of the bottle is unknown, QSH may answer honestly:

```text
"I know which bottle you mean, but I do not know whether it is empty."
```

---

### Example: New Fact About an Object

```text
User:
  "This bottle is empty."

SBR:
  resolves "this bottle" to bottle_3

CEU:
  checks whether this update is consistent with HRI_DB

If consistent:
  update HRI_DB
  emit acknowledgement HIF

If inconsistent:
  emit inconsistency or clarification HIF
```

The clarification HIF does not mean the robot must interrupt immediately.

A later HRI layer decides how to ask in a socially appropriate way.

---

## Design Note

This page groups SBR, CEU, QSH, DSIE, and SIAH together because they are all specialized uses of the HRI_DB Handler Pattern.

They reuse the same memory interface.

They differ in purpose:

| Handler | Specialized purpose |
|---|---|
| SBR | Resolve spatial references and map-relative relations |
| CEU | Check consistency and update memory |
| QSH | Answer user-facing contextual queries |
| DSIE | Extract background social insights |
| SIAH | Maintain system integrity and autonomy state |

The value of the pattern language is that these handlers can differ semantically while still sharing the same architectural grammar.

---

## Transition to Validation for Planning

The handlers in this page maintain and reason over context.

The next patterns prepare that maintained context for planning.

```text
Task Prerequisite Resolver (TPR):
  Do we have enough context to act?

Social Convention Validator (SCV):
  Is the action socially appropriate in this context?
```

Together, TPR and SCV form the bridge from Context Management and Reasoning toward Social Planning and Behavioral Synthesis.
