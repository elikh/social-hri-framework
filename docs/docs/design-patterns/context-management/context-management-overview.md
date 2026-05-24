---
title: Context Management Overview
sidebar_position: 11
---

# Context Management and Reasoning

## Overview

The previous layers produce rich semantic context streams.

```text
Human Context
Scene Context
Robot Context
```

Each layer emits HIFs that describe a different part of the interaction situation:

```text
Human Context:
  what the human is doing, saying, expressing, teaching, or needing

Scene Context:
  what exists in the surrounding environment and how it is grounded in space

Robot Context:
  what the robot knows about its own resources, state, capabilities, and actuation channels
```

However, streams alone are not enough.

The system must decide:

```text
What is new?
What changed?
What should be remembered?
What contradicts previous knowledge?
What can be inferred?
What should be validated?
What is safe or socially appropriate to pass to planning?
```

**Context Management and Reasoning** is where Human, Scene, and Robot Context streams become maintained, queryable, validated, and socially meaningful understanding.

It converts context flow into working social understanding.

---

## Top View

The following diagram provides a high-level view of this layer.

It shows the three previous context layers feeding into Context Management and Reasoning.

<div align="center">

<img
  src="/social-hri-framework/img/hml/context-management-overview.svg"
  alt="Context Management and Reasoning top view showing Human, Scene, and Robot Context feeding into maintained social understanding"
  width="100%"
/>

</div>

Place the SVG file here:

```text
docs/static/img/hml/context-management-overview.svg
```

The public path used by the documentation is:

```text
/social-hri-framework/img/hml/context-management-overview.svg
```

---

## What Happens Inside This Layer

This layer performs several related functions.

It does not merely store data.

It manages the transition from context streams to maintained, inspectable, and actionable understanding.

### 1. Novelty Detection

The first question is:

```text
What is new enough to matter?
```

Not every HIF should update memory or trigger reasoning.

The layer may detect novelty such as:

```text
a new person appeared
an object moved
a door changed state
a user expressed a new preference
the robot battery dropped below a threshold
a socially meaningful event occurred
a previous assumption became uncertain
```

This prepares the ground for the **Context Novelty Extractor (CNE)** pattern.

---

### 2. Memory Integration

After novelty is detected, the system must decide what should happen to memory.

The relevant question is:

```text
Should this context update HRI_DB?
```

Possible outcomes include:

```text
store as new knowledge
update an existing entity
merge with a previous observation
mark as uncertain
keep only as temporary working context
ignore as unimportant
ask for clarification
```

This prepares the ground for the **HRI_DB Handler Pattern**.

The HRI_DB is not just a technical database.

It is the maintained semantic world model of the interaction.

It may contain:

```text
people
objects
rooms
events
relations
preferences
social annotations
task state
robot capability state
provenance
confidence
freshness
```

---

### 3. Reasoning Over Maintained Context

Once context is maintained, the system can reason over it.

Typical reasoning questions include:

```text
Where is Bob likely to be?
Is the object still where it was last seen?
Does the current observation contradict the map?
Is this query answerable from current knowledge?
Is there a deeper social meaning in the recent interaction?
Is the system being asked to exceed its agency boundaries?
```

This prepares the ground for the HRI_DB reasoning handlers:

```text
Spatial-Based Reasoning (SBR)
Consistency Evaluator and Updater (CEU)
Query Social Handler (QSH)
Deep Social Insight Extractor (DSIE)
System Integrity and Agency Handler (SIAH)
```

---

### 4. Task Readiness

The layer also helps determine whether the robot knows enough to proceed.

The relevant question is:

```text
Do we have the prerequisites needed to act?
```

For example:

```text
Do we know who the target person is?
Do we know where the requested object is?
Is the path available?
Is the robot capable of performing the task now?
Is the scene information fresh enough?
Do we need clarification?
```

This prepares the ground for the **Task Prerequisite Resolver (TPR)** pattern.

---

### 5. Social Validation

Even if a task is technically possible, it may not be socially appropriate.

The relevant question is:

```text
Is this action appropriate in the current social context?
```

For example:

```text
Is it appropriate to interrupt?
Is this room formal?
Should the robot lower its voice?
Should it avoid approaching too closely?
Should it wait before speaking?
Should it ask permission before storing or using this information?
```

This prepares the ground for the **Social Convention Validator (SCV)** pattern.

---

## HIFs, HRI_DB, and Handlers

This section introduces three important concepts that appear throughout the rest of the layer.

```text
HIFs are how context moves.
HRI_DB is where context is maintained.
Handlers are how context is interpreted, updated, queried, and validated.
```

### HIFs Move Context

HIFs carry observations, interpretations, requests, updates, and reasoning outputs between cells.

For example:

```text
HumanState HIF
SceneContext HIF
RobotResourceState HIF
QueryHIF
ContextUpdate HIF
SocialInsight HIF
TaskPrerequisite HIF
```

HIFs preserve traceability through properties such as:

```text
source
confidence
timestamp
processing history
provenance
semantic properties
```

### HRI_DB Maintains Context

HRI_DB represents the maintained semantic state of the interaction.

It may preserve knowledge beyond the current frame or current input stream.

For example:

```text
Bob was last seen near the kitchen.
The meeting room is a formal interaction zone.
The chair was moved recently.
The robot has low battery.
Alice prefers short verbal confirmations.
The corridor door is currently closed with medium confidence.
```

HRI_DB is where context becomes queryable and updateable.

### Handlers Reason Over Context

Handlers are specialized semantic cells or compositions that operate over HRI_DB and HIFs.

They may:

```text
query
update
merge
validate
infer
detect inconsistency
extract social insight
check agency boundaries
resolve prerequisites
```

A handler should not be a hidden black box.

It should expose:

```text
input HIFs
accessed context
reasoning path
output HIF
confidence
failure mode
```

---

## Outputs

The output of Context Management and Reasoning is not necessarily a final robot action.

Instead, the layer produces structured context that later planning layers can use.

Typical outputs include:

```text
Updated HRI_DB
ContextUpdate HIFs
QueryAnswer HIFs
SocialInsight HIFs
Integrity / Agency HIFs
TaskPrerequisite HIFs
SocialValidation HIFs
Planning-ready context HIFs
```

For example:

```text
The requested object is likely in the kitchen.
The door to the meeting room is closed.
The user appears to be asking for help.
The robot can perform the task, but battery is low.
The action is technically possible but socially inappropriate right now.
A clarification question is required before planning.
```

These outputs prepare the architecture for **Social Planning and Behavioral Synthesis**.

---

## Why This Layer Matters

Context Management and Reasoning is the first layer where the architecture moves from perception and interpretation into maintained social understanding.

It supports:

| Goal | Context Management contribution |
|---|---|
| Memory | Maintains context beyond the current frame |
| Novelty awareness | Detects what changed or became important |
| Consistency | Resolves contradictions and uncertainty |
| Query answering | Answers questions from maintained context |
| Social insight | Extracts deeper meanings from interaction history |
| Integrity | Protects system agency and safe boundaries |
| Task readiness | Determines whether enough is known to act |
| Social validation | Checks whether actions fit the current social setting |
| Traceability | Records how conclusions were reached |

This is especially important for HRI because social interaction is not only about immediate perception.

It depends on memory, context, interpretation, uncertainty, and social appropriateness.

---

## Why Not Just Use an End-to-End Model?

An end-to-end model may produce an answer or action recommendation directly.

However, Context Management and Reasoning makes the intermediate social understanding explicit.

The system can inspect:

```text
what changed
what was remembered
what was inferred
what was uncertain
what contradicted previous knowledge
what was validated
what was rejected
what was passed to planning
```

This makes the system easier to debug, safer to govern, and easier to explain.

The goal is not to avoid powerful models.

The goal is to use them inside an architecture where context, memory, reasoning, and validation remain visible.

---

## Patterns in This Section

The rest of this section is organized into four groups.

### Novelty and Memory

```text
Context Novelty Extractor (CNE)
HRI_DB Handler Pattern
```

These patterns explain how new context is detected, filtered, stored, updated, and integrated into maintained memory.

### HRI_DB Reasoning Handlers

```text
Spatial-Based Reasoning (SBR)
Consistency Evaluator and Updater (CEU)
Query Social Handler (QSH)
Deep Social Insight Extractor (DSIE)
System Integrity and Agency Handler (SIAH)
```

These handlers show how HRI_DB can support spatial reasoning, consistency management, query answering, social insight, and agency/integrity control.

### Validation for Planning

```text
Task Prerequisite Resolver (TPR)
Social Convention Validator (SCV)
```

These patterns prepare context for planning by checking task readiness and social appropriateness.

### Layer Example

```text
Context Management Layer Example
```

The final page in this section shows how the patterns may connect into one possible Context Management and Reasoning composition.

---

## Transition to CNE

The first pattern in this layer is the **Context Novelty Extractor (CNE)**.

Before the system updates memory or performs deeper reasoning, it must decide which parts of the incoming context streams are new, meaningful, or important enough to process.

CNE is the gate between continuous context flow and maintained context understanding.
