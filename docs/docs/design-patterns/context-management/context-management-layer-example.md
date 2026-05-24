---
title: Context Management Layer Example
sidebar_position: 17
---

# Context Management Layer Example

## Overview

This page shows one possible composition of the **Context Management and Reasoning** layer.

It does not introduce a new pattern.

Instead, it connects the patterns introduced in this section into a working layer-level example.

The composition illustrates how the architecture may transform context streams into:

```text
memory updates
query answers
resolved references
social insights
integrity decisions
executable instructions
socially validated instructions
primitive action HIFs
dispatcher inputs
```

This is an example, not a mandatory blueprint.

Different systems may connect the same patterns differently depending on domain, robot embodiment, safety policy, available sensors, and interaction goals.

The important idea is the architectural flow:

```text
context streams
  → novelty extraction
  → memory and reasoning handlers
  → task prerequisite resolution
  → social validation
  → hierarchical task resolution
  → primitive action dispatch
```

This layer acts as a semantic buffer between understanding and action.

---

## Layer Composition Diagram

<div align="center">

<img
  src="/social-hri-framework/img/hml/context-management-layer-example.svg"
  alt="Example composition of the Context Management and Reasoning layer connecting novelty extraction, HRI DB reasoning handlers, task resolution, social validation, hierarchical task resolution, and dispatcher outputs"
  width="100%"
/>

</div>

---

## From Context Streams to Novelty

The layer begins with the **Context Novelty Extractor (CNE)**.

The CNE receives unified context evidence derived from:

```text
Human Context
Scene Context
Robot Context
```

It decides whether something meaningful has changed.

For example:

```text
a person pointed at an object
a door changed state
a new instruction was spoken
a task became stuck
the robot's autonomy state changed
a person remained waiting for too long
```

If a meaningful delta exists, the output can continue into reasoning handlers.

If:

```text
Δ = 0
```

the lack of change may still be meaningful.

For example:

```text
the user is still waiting
the task has not progressed
the expected response did not arrive
the robot has not received new information
```

In that case, a **Proactivity Engine ES** may be triggered according to policy.

No novelty is not automatically a problem.

But persistent no-change can become a meaningful interaction signal.

---

## Spatial Retrieval When Needed

Not every context update requires spatial reasoning.

The first routing decision asks whether spatial retrieval is needed.

If the context includes expressions such as:

```text
this
that
over there
the closest bottle
the object I am pointing at
the person behind Bob
```

the system may route the HIF to **Spatial-Based Reasoning (SBR)**.

SBR can resolve a spatial reference into an explicit ID.

For example:

```text
"this bottle"
  → bottle_3
```

or:

```text
"the bottle closest to Bob"
  → bottle_5
```

Once the ID is resolved, the downstream handlers can operate on a concrete semantic object instead of an ambiguous reference.

If spatial retrieval is not needed, the HIF can continue directly to the next routing decision.

---

## Fact, Query, and Instruction Routing

After optional spatial resolution, the system identifies the kind of HIF being handled.

A context event may be a:

```text
fact
query
instruction
```

Each type requires a different reasoning path.

### Facts

Facts are routed to **Consistency Evaluator and Updater (CEU)**.

For example:

```text
Bob is in the kitchen.
This bottle is empty.
The meeting room door is closed.
Alice prefers short answers.
```

CEU checks whether the fact is consistent with HRI_DB and then decides whether to:

```text
update memory
merge with existing memory
mark uncertainty
request clarification
reject the update
```

### Queries

Queries are routed to **Query Social Handler (QSH)**.

For example:

```text
Where is Bob?
Is this bottle empty?
Do you know what I asked you to remember?
Can you do this now?
```

QSH uses short-term memory, session context, and HRI_DB to produce an answer or a clarification HIF.

### Instructions

Instructions are routed toward **Instruction Handler TPR**.

For example:

```text
Bring this bottle to Bob.
Tell Alice I am waiting.
Remind me when Bob arrives.
Go to the meeting room.
```

The instruction may be incomplete even after language interpretation.

TPR determines whether it is ready for planning or should remain pending.

---

## Background Reasoning

Some handlers do not wait for a direct query or instruction.

They may run in the background and continuously update the system's maintained understanding.

### Deep Social Insight Extractor

The **Deep Social Insight Extractor (DSIE)** can periodically query HRI_DB and update it with deeper social insights.

For example:

```text
the person may be unavailable
the user may be frustrated
the setting has become formal
a preferred interaction style was reinforced
a social pattern is emerging
```

If an insight requires attention or action, DSIE emits a HIF.

Otherwise, it may simply update HRI_DB.

### System Integrity and Agency Handler

The **System Integrity and Agency Handler (SIAH)** monitors internal robot state, integrity, and autonomy constraints.

It may use:

```text
battery
CPU / memory / disk
sensor health
localization confidence
actuator state
anomaly detectors
diagnostic experts
prognostic experts
autonomy adjusters
```

SIAH may update HRI_DB with integrity state, lower the robot's autonomy level, or emit high-priority HIFs.

For example:

```text
EmergencyStopHIF
AutonomyReductionHIF
IntegrityWarningHIF
SensorFailureHIF
```

This allows the layer to include not only social reasoning, but also system-level integrity and agency control.

---

## Instruction Handler TPR

The **Instruction Handler TPR** manages instructions that may not yet be executable.

It receives an instruction HIF and checks whether required prerequisites are available.

For example, the instruction:

```text
Bring this bottle to Bob.
```

may require:

```text
object ID
object location
target person ID
target person location
motion availability
route availability
social permission to approach
```

If required information is missing, the instruction can be placed into a pending task queue.

The pending queue may track:

```text
priority
missing prerequisites
task age
decay factor
expiration condition
re-evaluation triggers
```

When new facts enter HRI_DB, pending tasks may be re-evaluated.

This supports fact-triggered resumption.

For example:

```text
pending task:
  Bring bottle_3 to Bob.
  Missing: Bob's location.

new fact:
  Bob is in the kitchen.

TPR:
  re-evaluates the task.
  emits ExecutableInstructionHIF.
```

This lets the robot hold incomplete intentions without failing the interaction.

---

## Social Convention Gate

An instruction that becomes executable is not automatically ready for behavior.

It must still pass through a social validation step.

In the diagram, this appears as the **Social Convention Gate**.

This gate corresponds to the **Social Convention Validator (SCV)** pattern.

It asks:

```text
Is this instruction socially acceptable now?
```

For example:

```text
Is it appropriate to approach Bob?
Is Bob available?
Is this a formal room?
Should the robot speak quietly?
Should the robot ask permission first?
Is this action urgent enough to interrupt?
Does the robot's current autonomy state allow this?
```

If the instruction is not socially acceptable, it may be:

```text
modified
delayed
returned to the pending queue
rejected
escalated
```

If it is acceptable, the gate emits a:

```text
Socially acceptable and executable instruction HIF
```

This is the bridge from context readiness to socially valid planning.

---

## Hierarchical Task Resolver ES

The **Hierarchical Task Resolver ES** is the main addition in this layer-level composition.

It receives a socially acceptable and executable instruction HIF.

It then selects the appropriate task-handling expert.

For example:

```text
bring_object_to_person
  → pick-and-place handler

say_message_to_person
  → speech interaction handler

guide_person_to_room
  → navigation and interaction handler

warn_about_obstacle
  → safety communication handler

approach_person
  → social approach handler
```

The selected expert decomposes the instruction into lower-level **Primitive Action HIFs**.

For example:

```text
turn toward person
navigate to object
pick object
navigate to Bob
wait for availability
speak softly
hand over object
confirm completion
```

The Hierarchical Task Resolver does not replace the planning layer.

It prepares the right level of action representation for the next stage.

It translates a socially validated instruction into structured primitive actions that can be dispatched, planned, or choreographed.

---

## Dispatcher ST

The **Dispatcher ST** receives primitive action HIFs and routes them toward the next execution-oriented systems.

The diagram shows possible outputs such as:

```text
Reactive actions
Interactive actions
Action feedback
```

Reactive actions may include low-latency responses such as:

```text
stop
avoid
turn
slow down
cancel unsafe motion
```

Interactive actions may include:

```text
speech
gesture
approach
explanation
confirmation
clarification
social feedback
```

The Dispatcher is a boundary object.

It connects Context Management and Reasoning to later behavioral synthesis and actuation layers.

---

## Action Feedback

Action feedback can return into the dispatcher and later become new context.

For example:

```text
action succeeded
action failed
human reacted positively
human ignored the robot
actuator unavailable
task partially completed
social response was awkward
```

This feedback may later enter the context stream, trigger CNE, update HRI_DB, or influence DSIE and SIAH.

This closes the loop between action and context.

The robot does not only act.

It observes the consequences of action and updates its maintained understanding.

---

## Layer Outputs

This example layer may produce several kinds of outputs.

```text
ContextUpdateHIF
QueryAnswerHIF
ClarificationRequestHIF
SocialInsightHIF
IntegrityDecisionHIF
EmergencyActionHIF
ExecutableInstructionHIF
SociallyAcceptableInstructionHIF
PrimitiveActionHIF
ActionFeedbackHIF
```

Some outputs update memory.

Some are returned to the user-facing interaction loop.

Some prepare planning.

Some prepare actuation.

Some return as feedback into context.

---

## Why This Composition Matters

This composition shows how the architecture avoids a direct jump from perception to action.

Instead of:

```text
context
  → action
```

the layer creates an explicit reasoning path:

```text
context
  → novelty
  → memory
  → reasoning
  → prerequisite resolution
  → social validation
  → hierarchical task resolution
  → dispatch
```

This prevents the robot from acting only because something was detected or requested.

Instead, the robot acts after the context was:

```text
updated
queried
completed
validated
translated into the right level of action
```

This is the main role of the Context Management and Reasoning layer.

It turns context into planning-ready, socially valid, and traceable action candidates.

---

## Design Note

The diagram is one possible composition.

A real implementation may:

```text
split handlers across services
merge CEU and QSH in a small system
run DSIE and SIAH at different frequencies
send primitive actions directly to a planner
add more specialized task handlers
add more social validation gates
use a different dispatcher architecture
```

The important point is not the exact wiring.

The important point is that each step remains explicit:

```text
what changed
what was stored
what was queried
what was completed
what was validated
what was decomposed
what was dispatched
```

This supports transparency, debugging, adaptation, and safer human-robot interaction.

---

## Transition to Social Planning and Behavioral Synthesis

At the end of this layer, the system has planning-ready, socially validated, and context-grounded action candidates.

The next layer decides how these candidates should be expressed as behavior.

```text
Context Management:
  what is known, ready, and acceptable

Social Planning and Behavioral Synthesis:
  how the robot should behave
```

The next section moves from context reasoning into social behavior generation.
