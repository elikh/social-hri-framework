---
title: Task Prerequisite Resolver (TPR)
sidebar_position: 15
---

# Task Prerequisite Resolver (TPR)

## Intent

The **Task Prerequisite Resolver (TPR)** is an HRI design pattern for managing tasks or instructions that are not yet executable because some required information, context, timing, or capability condition is missing.

It allows the robot to hold an incomplete intention without prematurely failing the interaction.

In short:

```text
Task / Instruction HIF
  → detect missing prerequisites
  → query context or HRI_DB
  → either produce an executable task
     or hold the task in a pending queue
```

The pattern is especially important in human-robot interaction because humans rarely provide complete, formal, machine-ready task specifications.

They often say things like:

```text
Bring this bottle to Bob.
Put it over there.
Remind me when Alice arrives.
Tell him when he comes back.
Do it later.
```

These instructions may be understandable to another human because humans can infer missing context, wait for later facts, and ask clarifying questions.

TPR gives the robot a structured way to do the same.

---

## Problem

Human instructions are often:

```text
partial
ambiguous
context-dependent
time-dependent
dependent on information that is not yet available
dependent on the robot's current capability state
```

For example:

```text
Bring this bottle to Bob.
```

This instruction may require several prerequisites:

```text
Which bottle?
Where is the bottle?
Who is Bob?
Where is Bob?
Is Bob available?
Can the robot move now?
Is the path clear?
Is the instruction still relevant?
```

Without TPR, a robot may either:

```text
fail with "I do not understand"
execute the wrong task
ask too many immediate clarification questions
ignore the instruction
attempt unsafe execution
```

TPR manages the **logic of readiness**.

It determines whether a task is sufficiently specified and contextually ready to be passed to planning or execution.

---

## Context

Use TPR when the system receives tasks, goals, or instructions that may require additional information before execution.

Typical sources include:

```text
language interpretation
user instruction handling
planner-generated subgoals
pending tasks from previous interactions
context-triggered tasks
socially motivated goals
```

TPR is useful when tasks may depend on:

```text
missing people
missing object references
unknown locations
unresolved spatial references
future events
robot capability state
scene state
social context
timing constraints
```

---

## HML Structure

The abstract TPR pattern includes:

```text
prioritized task queue
Task HIF
additional information extractor ST
Query Social Handler
pending task handler ST
pending task queue
Executable Task HIF
```

<div align="center">

<img
  src="/social-hri-framework/img/hml/task-prerequisite-resolver.svg"
  alt="Task Prerequisite Resolver abstract pattern showing missing information extraction, query handling, pending task queue, and executable task output"
  width="100%"
/>

</div>


---

## Flow

A typical TPR flow is:

```text
1. A task or instruction enters as a HIF.
2. The task is placed in or compared against a prioritized task queue.
3. An Additional Information Extractor ST checks whether required fields are missing.
4. If information is missing, the pattern queries HRI_DB through QSH or related handlers.
5. If the missing information is found, the task is completed.
6. If the information is still missing, the task is moved to a pending task queue.
7. A pending task handler tracks task priority, decay, expiration, and re-evaluation.
8. New facts may reactivate pending tasks.
9. When all prerequisites are satisfied, TPR emits an Executable Task HIF.
```

This makes the pattern stateful.

It does not only check a task once.

It can keep the task alive until the missing prerequisites are resolved or the task becomes irrelevant.

---

## Example — Instruction Handler TPR

A concrete use of TPR is instruction handling.

For example, the user may say:

```text
Bring this bottle to Bob.
```

After language interpretation and spatial reference resolution, this may become an instruction HIF with a missing target location:

```json
{
  "instruction": "pick_and_place",
  "item": {
    "ID": 5,
    "type": "bottle",
    "location": [10, 11, 3]
  },
  "target": {
    "ID": 8,
    "type": "Person",
    "name": "Bob",
    "location": "?"
  }
}
```

The item is known.

The target person is known.

But Bob's location is missing.

TPR detects the missing prerequisite:

```text
target.location
```

It may then ask QSH:

```text
Where is Bob?
```

If QSH returns a miss, the task cannot yet become executable.

TPR may produce a pending task and a clarification need.

<div align="center">

<img
  src="/social-hri-framework/img/hml/instruction-handler-tpr.svg"
  alt="Instruction Handler TPR example showing how an incomplete instruction is held until missing information is resolved"
  width="100%"
/>

</div>



---

## Fact-Triggered Resumption

One of the key features of TPR is **fact-triggered resumption**.

A task that cannot be executed now may become executable later.

For example, the task may wait because Bob's location is unknown.

Later, a new fact enters HRI_DB:

```text
Bob is in the kitchen.
```

This new fact may trigger the pending task handler to re-evaluate waiting tasks.

The original task can now be completed:

```json
{
  "instruction": "pick_and_place",
  "item": {
    "ID": 5,
    "type": "bottle",
    "location": [10, 11, 3]
  },
  "target": {
    "ID": 8,
    "type": "Person",
    "name": "Bob",
    "location": {
      "loc": [20, 15, 0],
      "name": "kitchen"
    }
  }
}
```

The output can now become:

```text
Executable Instruction HIF
```

This is what makes TPR more than a simple missing-field checker.

It manages the lifecycle of incomplete tasks.

---

## Clarification Is Not Immediate Speech

When TPR detects missing information, it should not necessarily force the robot to ask the user immediately.

Instead, it may emit a semantic HIF such as:

```text
ClarificationNeededHIF
MissingPrerequisiteHIF
PendingTaskHIF
```

Later layers decide how to handle it.

For example, the system may decide to:

```text
ask the user now
wait for a better moment
search HRI_DB first
ask another person
use SBR to resolve a spatial reference
let the task remain pending
cancel the task after timeout
ask in a socially softer way
```

This preserves the separation between reasoning and behavior.

TPR identifies readiness gaps.

It does not dictate the final interaction style.

---

## Pending Task Queue

The pending task queue is the part of the pattern that prevents incomplete tasks from being lost.

It may store:

```text
task HIF
missing prerequisites
priority
creation time
last evaluation time
decay factor
expiration policy
required facts
trigger conditions
source user
social sensitivity
```

The queue is prioritized.

It is also time-aware.

A task may become less relevant over time.

For example:

```text
Bring Bob coffee.
```

If Bob leaves the building or the instruction is old, the task may no longer be appropriate.

The pending task handler may apply:

```text
task decay factor
expiration policy
relevance checks
priority updates
fact-triggered re-evaluation
```

This prevents **instruction bloat**, where old incomplete tasks accumulate forever.

---

## What TPR Can Resolve

TPR can manage several kinds of missing prerequisites.

### Missing Entity Reference

```text
"Bring this to Bob."
```

Missing:

```text
this = ?
Bob = which person?
```

Possible handlers:

```text
SBR
QSH
CEU
```

### Missing Location

```text
"Bring the bottle to Bob."
```

Missing:

```text
Bob's location
bottle location
reachable path
```

Possible handlers:

```text
QSH
SBR
Scene Context
Robot Context
```

### Missing Timing Condition

```text
"Remind me when Alice arrives."
```

Missing:

```text
Alice has not arrived yet
```

TPR keeps the task pending until a new fact indicates that Alice arrived.

### Missing Capability

```text
"Go to the meeting room."
```

Missing or blocking condition:

```text
motion unavailable
battery too low
localization uncertain
path blocked
```

Possible handlers:

```text
Robot Context
SIAH
SCV
```

### Missing Social Condition

```text
"Interrupt the meeting and tell Bob I need him."
```

Missing or blocking condition:

```text
is interruption socially appropriate?
is Bob available?
is the room formal?
```

Possible handlers:

```text
DSIE
SCV
QSH
```

---

## Relationship to Other Handlers

TPR is a bridge pattern.

It uses other Context Management handlers to resolve prerequisites.

### Relationship to QSH

QSH answers contextual questions.

TPR uses QSH to complete missing task slots.

```text
QSH:
  Where is Bob?

TPR:
  I need Bob's location before this instruction can become executable.
```

### Relationship to SBR

SBR resolves spatial references.

TPR uses SBR when a missing prerequisite depends on spatial meaning.

```text
"this bottle"
"that door"
"the object closest to Bob"
"the place over there"
```

### Relationship to CEU

CEU checks whether new facts can update memory.

TPR may depend on CEU when a user gives a missing fact.

For example:

```text
User:
  Bob is in the kitchen.

CEU:
  checks consistency and updates HRI_DB.

TPR:
  re-evaluates pending tasks involving Bob.
```

### Relationship to SIAH

SIAH protects system integrity and autonomy.

TPR may use Robot Context or SIAH outputs to decide whether a task is currently executable.

For example:

```text
motion system degraded
battery too low
speaker unavailable
localization uncertain
```

### Relationship to SCV

TPR checks whether the task is ready.

SCV checks whether the task is socially appropriate.

A task may be fully specified but still socially invalid.

---

## Outputs

TPR may emit several kinds of output HIFs.

```text
ExecutableTaskHIF
ExecutableInstructionHIF
PendingTaskHIF
MissingPrerequisiteHIF
ClarificationNeededHIF
TaskExpiredHIF
TaskReactivatedHIF
TaskRejectedHIF
```

### Example: Pending Task

```json
{
  "type": "PendingTaskHIF",
  "properties": {
    "task": "bring_object_to_person",
    "item_id": "bottle_5",
    "target_person": "bob",
    "missing_prerequisites": [
      "target.location"
    ],
    "status": "waiting_for_information",
    "decay_factor": 0.8
  },
  "processing_history": [
    "TPR"
  ]
}
```

### Example: Executable Task

```json
{
  "type": "ExecutableTaskHIF",
  "properties": {
    "task": "bring_object_to_person",
    "item_id": "bottle_5",
    "item_location": [10, 11, 3],
    "target_person": "bob",
    "target_location": [20, 15, 0],
    "target_location_name": "kitchen"
  },
  "processing_history": [
    "TPR"
  ]
}
```

### Example: Clarification Need

```json
{
  "type": "ClarificationNeededHIF",
  "properties": {
    "task": "bring_object_to_person",
    "missing_prerequisite": "target.location",
    "suggested_question": "Where is Bob?"
  },
  "processing_history": [
    "TPR"
  ]
}
```

---

## Why This Pattern Matters

TPR helps the robot move beyond command-response behavior.

Without TPR, the robot may fail whenever an instruction is incomplete.

With TPR, the robot can:

```text
hold an incomplete intention
identify what is missing
search memory
ask for clarification when needed
wait for future facts
resume tasks when missing information arrives
expire old tasks
avoid executing under-specified instructions
```

This is essential for agentic autonomy.

The robot becomes able to manage its own information gaps.

---

## SOCIAL Principles Supported

### S — Separated Contexts

TPR separates:

```text
task intent
missing information
query process
pending state
executable task output
```

This prevents incomplete instructions from being treated as executable commands.

### O — Open Declarative

Pending and executable tasks are represented as explicit HIFs.

The missing fields are visible.

### C — Clear Cognition

The system can explain why a task is pending:

```text
Bob's location is missing.
The object reference is ambiguous.
The robot cannot move right now.
The task has expired.
```

### I — Interpretable Gates

The Missing Information Extractor ST and Pending Tasks Handler ST are explicit gates.

They decide whether a task is ready, pending, expired, or in need of clarification.

### A — Adaptive Autonomy

The robot can continue managing tasks over time instead of requiring complete commands upfront.

It can also reduce autonomy when prerequisites are not satisfied.

### L — Layered Validation

TPR does not execute the task.

It produces a planning-ready task HIF that can still be checked by SCV, social planning, and actuation layers.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Robustness vs. complexity | Holding incomplete tasks increases robustness but adds state management |
| Proactivity vs. annoyance | Clarification requests can help or interrupt |
| Persistence vs. stale tasks | Pending tasks must decay or expire |
| Autonomy vs. user control | The robot may resume a task later, so policies must govern when this is allowed |
| Completeness vs. speed | Waiting for complete information may delay execution |
| Generality vs. schema design | TPR needs task schemas with explicit prerequisites |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Pending queue grows forever | Decay factor, expiration policy, relevance checks |
| Robot asks too many clarifications | Batch questions, cooldowns, SCV before asking |
| Task becomes irrelevant | Freshness and relevance checks |
| Wrong missing slot detected | Schema validation and task templates |
| Incorrect prerequisite completion | Confidence thresholds and CEU checks |
| User gives contradictory clarification | Route to CEU |
| Missing information requires spatial reference | Route to SBR |
| Missing information requires user-facing query | Route to QSH |
| Task is complete but unsafe | Route to SIAH or SCV |
| Resumed task surprises user | Notify or reconfirm before execution |

---

## Implementation Notes

A practical TPR implementation should define:

```text
task schemas
mandatory prerequisites
optional prerequisites
missing-field detection logic
task priority policy
task decay factor
expiration policy
pending queue structure
fact-triggered re-evaluation rules
clarification generation policy
relationship to HRI_DB
relationship to QSH / SBR / CEU
conditions for executable output
conditions for rejection
```

Each task type should define what must be known before it becomes executable.

For example:

```text
bring_object_to_person:
  required:
    object_id
    object_location
    target_person_id
    target_location
    motion_available

  optional:
    preferred_delivery_style
    social_context
    urgency
```

---

## Relationship to Planning

TPR is not a full planner.

It does not decide the complete action sequence.

Instead, it determines whether a task is ready for planning.

```text
TPR output:
  executable task HIF

Planner output:
  selected action plan / behavior sequence / execution strategy
```

This keeps task readiness separate from behavior synthesis.

---

## Transition to SCV

TPR determines whether a task is sufficiently specified and contextually ready.

The next pattern, **Social Convention Validator (SCV)**, determines whether performing that task is socially appropriate.

```text
TPR:
  Can this task be planned?

SCV:
  Should this task be performed in this social context?
```

Together, TPR and SCV form the bridge from Context Management and Reasoning into Social Planning and Behavioral Synthesis.
