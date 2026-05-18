---
title: Cognitive Layer Map
sidebar_position: 3
---

# Cognitive Layer Map

## Purpose

The Cognitive Layer Map explains how the HRI Design Patterns are organized across the documentation.

The patterns are not ordered alphabetically, and they are not ordered according to one specific implementation.

Instead, they are ordered by their **first meaningful appearance** in a layered cognitive architecture.

This means:

```text
A pattern is introduced where it first becomes naturally needed,
explained through a concrete enough example,
and then reused later without redefining it.
```

For example, the **Synchronous Multi-Extractor (SME)** is introduced in Human Context because it is easiest to understand through person, skeleton, gaze, and expression extraction.

However, SME is not a Human Context pattern only.

The same structure can later be reused in Scene Context, Social Action Styling, and possibly Actuation.

This page explains the rationale behind that organization.

---

# Why Cognitive Layers?

The cognitive layers are not introduced merely as a documentation convenience.

They are an architectural response to a central tension in modern embodied AI: the growing temptation to collapse perception, interpretation, reasoning, planning, and action into opaque end-to-end models.

A simplified end-to-end architecture may look like this:

```text
raw perception / prompt / context
        ↓
large end-to-end model
        ↓
action
```

Such models may be powerful.

However, in social HRI, they can hide the very distinctions that make interaction safe, explainable, governable, and socially predictable.

A black-box end-to-end architecture makes it difficult to ask:

```text
What was perceived?
What was interpreted?
Which context was used?
Which facts were remembered?
Which policies were applied?
Which uncertainty was preserved?
Which gate allowed, delayed, modified, escalated, or blocked the transition?
Why was this action candidate selected?
Why was execution allowed?
```

The SOCIAL framework therefore uses cognitive layers to preserve visible semantic boundaries.

A layered HML architecture makes these stages explicit:

```text
perception
  ↓
semantic interpretation
  ↓
context integration
  ↓
memory and reasoning
  ↓
validation
  ↓
social planning
  ↓
execution
```

Each stage can expose HIFs, Semantic Cells, policies, operators, gates, memory structures, confidence, and provenance.

In this sense, the layer map is not a rigid pipeline.

It is a **transparency structure**.

It helps the architecture remain compatible with powerful AI models while avoiding a black-box collapse from input directly to action.

HML does not forbid end-to-end AI models.

It prevents them from becoming end-to-end architectures.

Powerful AI models may still appear as `λ` operators inside HML cells, but they should be invoked through explicit inputs, policies, gates, and validation layers.

---

# Layered Organization and Pattern Reuse

The design patterns are organized along two complementary axes.

## 1. Architectural Learning Path

The documentation shows how a socially intelligent HRI architecture can be built layer by layer:

```text
Human Context
Scene Context
Robot Context
Context Management and Reasoning
Social Planning and Behavioral Synthesis
Actuation
```

This gives the reader a learning path.

The reader can see how raw context becomes semantic context, how semantic context becomes memory and reasoning, how reasoning becomes socially appropriate action candidates, and how those candidates may eventually become embodied effects.

## 2. Reusable Pattern Catalog

Each pattern remains a reusable architectural structure.

A pattern may be introduced in one layer and reused in later layers.

For example:

```text
SME is introduced in Human Context.
SME is reused in Scene Context.
SME may reappear in Social Action Styling.
```

Similarly:

```text
EAG is introduced as resource-aware attention in Human Context.
EAG may be reused for Scene Context fidelity, Robot Context resource handling, or Actuation bandwidth.
```

The layer organization therefore does not lock a pattern to one layer.

It only defines where the pattern is first explained.

---

# Layers Are Not Runtime Modules

The cognitive layers are conceptual architectural layers.

They are not necessarily:

- software packages
- ROS nodes
- containers
- agents
- processes
- deployment units
- strict runtime stages

A single runtime component may implement several HML roles.

Likewise, one conceptual layer may be implemented by several components, services, models, or agents.

The layer map answers:

```text
What kind of cognitive responsibility is being modeled here?
```

not necessarily:

```text
Which software component runs this code?
```

HIFs may also move across layers in non-linear ways.

For example:

- Context Management may update HRI_DB.
- HRI_DB updates may trigger pending task rechecks.
- Social Planning may return a task to a Pending Queue.
- Actuation may generate RobotState HIFs that feed Robot Context.
- A failed execution may trigger new reasoning or validation.
- A clarification request may send the architecture back to Human Context.

The map is therefore a cognitive organization, not a mandatory sequential flowchart.

---

# High-Level Layer Map

<div align="center">

<svg width="100%" viewBox="0 0 980 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cognitive-layer-map-title cognitive-layer-map-desc">
  <title id="cognitive-layer-map-title">Cognitive Layer Map</title>
  <desc id="cognitive-layer-map-desc">
    Human Context, Scene Context, and Robot Context feed Context Management and Reasoning, which feeds Social Planning and Behavioral Synthesis, and later Actuation. Patterns are introduced where they first become meaningful and may be reused later.
  </desc>

  <defs>
    <marker id="arrow-cognitive-layer-map" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Top layer boxes -->
  <path d="M 40 40 L 285 40 L 305 60 L 305 145 L 60 145 L 40 125 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="172.5" y="70" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Human Context</text>
  <text x="172.5" y="96" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">introduced:</text>
  <text x="172.5" y="116" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">SME / EAG / TSC / ASL</text>

  <path d="M 370 40 L 615 40 L 635 60 L 635 145 L 390 145 L 370 125 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="502.5" y="70" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Scene Context</text>
  <text x="502.5" y="96" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">reuses:</text>
  <text x="502.5" y="116" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">SME / EAG</text>

  <path d="M 700 40 L 925 40 L 945 60 L 945 145 L 720 145 L 700 125 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="822.5" y="70" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Robot Context</text>
  <text x="822.5" y="96" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">models robot state as:</text>
  <text x="822.5" y="116" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HIF streams / HC / SG / HE</text>

  <!-- Context Management -->
  <path d="M 180 250 L 790 250 L 820 280 L 820 390 L 210 390 L 180 360 Z"
        fill="none" stroke="currentColor" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="500" y="285" textAnchor="middle" fontSize="19" fontFamily="Arial, sans-serif" fill="currentColor">Context Management and Reasoning</text>
  <text x="500" y="315" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">introduced: CNE / HRI_DB Handler</text>
  <text x="500" y="338" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">composes: SBR / CEU / QSH / DSIE / SIAH / TPR / SCV</text>
  <text x="500" y="361" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">connects context streams, transparent memory, validation, and reasoning</text>

  <!-- Social planning -->
  <path d="M 270 455 L 710 455 L 735 480 L 735 535 L 295 535 L 270 510 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="502.5" y="486" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Social Planning and Behavioral Synthesis</text>
  <text x="502.5" y="513" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Social Opportunity TPR / SAS / Late-Binding Choreographer</text>

  <!-- Actuation marker -->
  <rect x="770" y="465" width="160" height="50" rx="12"
        fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 5" />
  <text x="850" y="485" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Actuation</text>
  <text x="850" y="505" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">to be developed</text>

  <!-- Arrows -->
  <line x1="172.5" y1="145" x2="340" y2="242" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-cognitive-layer-map)" />
  <line x1="502.5" y1="145" x2="502.5" y2="242" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-cognitive-layer-map)" />
  <line x1="822.5" y1="145" x2="660" y2="242" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-cognitive-layer-map)" />

  <line x1="502.5" y1="390" x2="502.5" y2="447" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-cognitive-layer-map)" />
  <line x1="735" y1="493" x2="762" y2="493" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-cognitive-layer-map)" />

<!-- Feedback from actuation back to Robot Context -->
<path d="M 850 465 C 940 360, 930 210, 835 155"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeDasharray="5 5"
      markerEnd="url(#arrow-cognitive-layer-map)" />

<text x="915" y="310" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">execution feedback</text>
<text x="915" y="327" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">updates Robot Context</text>
</svg>

</div>

This diagram is intentionally schematic.

It shows the recommended reading path and reuse structure.

It does not define a mandatory runtime pipeline.

---

# Layer-by-Layer Overview

## Human Context

Human Context converts human-facing signals into structured semantic context.

It answers questions such as:

```text
Who is present?
Where is the person?
What is the person doing?
What did the person say?
What is the person pointing at?
What is the person's apparent engagement or affect?
```

Patterns first introduced here:

- **Synchronous Multi-Extractor (SME)**
- **Elastic Attention Governor (EAG)**
- **Tiered Semantic Cache / Proxy (TSC/TSP)**
- **Adaptive Signature Learner (ASL)**

This layer is a natural place to introduce SME because human understanding often requires multiple synchronized extractors.

Example composition:

```text
VideoFrame HIF
  → person / skeleton / gaze / expression STs
  → SG
  → HumanState HIF
```

This is only one possible composition.

The purpose is to illustrate how the pattern may be used, not to prescribe a fixed detector stack.

---

## Scene Context

Scene Context models relevant physical and spatial information about the environment.

It answers questions such as:

```text
What objects are present?
Where are obstacles?
Where are doors, stairs, rooms, and navigation-relevant affordances?
What spatial relationships matter for the current task?
```

Scene Context primarily reuses foundational patterns introduced earlier.

Reused patterns:

- **SME**
- **EAG**

For example, SME can coordinate object detection, obstacle detection, door detection, and slope detection before producing a richer SceneState HIF.

EAG can allocate higher fidelity processing to scene regions that are socially, physically, or task-relevant.

The point is to show that Human Context patterns generalize beyond human perception.

---

## Robot Context

Robot Context models the robot itself as part of the semantic world.

It answers questions such as:

```text
What is the robot's current physical state?
What resources are available?
Which sensors are reliable?
Which actuators are available?
What is the current autonomy state?
What can the robot safely do now?
```

Robot Context may use existing HML structures rather than introducing many new patterns.

Common structures include:

- HC cells that create RobotState HIFs
- SG cells that synchronize resource and sensor health HIFs
- HE cells that expose effects or execution bridges
- Semantic Cells that normalize internal robot state
- HIF streams for battery, CPU, memory, disk, communication, actuator status, and sensor health

Robot Context is important because a socially intelligent robot should not reason only about humans and the external scene.

It must also reason about its own capability, limits, and integrity.

---

## Context Management and Reasoning

Context Management and Reasoning connects Human Context, Scene Context, Robot Context, memory, validation, and reasoning.

It answers questions such as:

```text
What changed?
What should be remembered?
What should be forgotten or decayed?
Which facts are consistent?
Which query can be answered deterministically?
Which query requires escalation?
Which tasks are incomplete?
Which tasks are pending?
Which actions are socially or technically allowed?
```

Patterns introduced here:

- **Context Novelty Extractor (CNE)**
- **HRI_DB Handler Pattern**

Composite and specialized reasoning patterns:

- **Spatial-Based Reasoning (SBR)**
- **Consistency Evaluator and Updater (CEU)**
- **Query Social Handler (QSH)**
- **Deep Social Insight Extractor (DSIE)**
- **System Integrity and Agency Handler (SIAH)**
- **Task Prerequisite Resolver (TPR)**
- **Social Convention Validator (SCV)**

This layer is where many earlier pieces become connected.

It is also where transparent memory becomes essential.

HRI_DB is not merely a database here.

It is a transparent semantic world model that supports deterministic reasoning, human correction, confidence decay, and bounded LLM escalation.

---

## Social Planning and Behavioral Synthesis

Social Planning and Behavioral Synthesis turns validated context into socially appropriate action candidates.

It answers questions such as:

```text
Should the robot act now?
Is the social opportunity open?
Which modality should be used?
How should the action be phrased, timed, or embodied?
Should the robot speak, gesture, move, wait, ask, or do nothing?
```

Patterns introduced or emphasized here:

- **Social Opportunity TPR**
- **Social Action Stylist (SAS)**
- **Late-Binding Behavioral Choreographer**

This layer highlights a central point:

```text
Social planning is not only about what to do.
It is also about when to do it and how to do it.
```

The Late-Binding Behavioral Choreographer composes opportunity reasoning and action styling so that the final behavior can remain adaptable until late in the process.

---

## Actuation

The Actuation Layer remains open for future documentation.

It will likely describe patterns that connect executable HIFs to embodied effects through:

- HE cells
- actuator policies
- safety gates
- action monitoring
- rollback or interruption
- execution feedback
- robot-state updates
- emergency handling

The important architectural idea is that execution should not bypass the earlier semantic and validation layers.

An executable HIF should normally reach actuation only after relevant context, social, safety, and autonomy conditions have been evaluated.

---

# First Introduced vs Reused

The following table summarizes where patterns are first introduced and where they may be reused.

| Pattern | First Introduced In | Later Reuse | Main Role |
|---|---|---|---|
| SME | Human Context | Scene Context, SAS, Actuation monitoring | Synchronize multiple extractors or generators |
| EAG | Human Context | Scene Context, Robot Context, Actuation | Allocate attention, compute, or fidelity |
| TSC/TSP | Human Context Interpreter | Query handling, intent parsing, HRI_DB access | Fast interpretation with cache and escalation |
| ASL | Human Context Interpreter | Gesture learning, personalization, temporal signatures | Learn or classify user-specific signatures |
| CNE | Context Management | Memory updates, social opportunity detection | Extract meaningful context changes |
| HRI_DB Handler | Context Management | Query answering, task resolution, consistency updates | Govern transparent semantic memory |
| SBR | Context Management | Object selection, navigation reasoning, task grounding | Reason over spatial relations |
| CEU | Context Management | HRI_DB updates, validation, conflict repair | Evaluate and update consistency |
| QSH | Context Management | TPR, clarification, user queries | Handle social or contextual queries |
| DSIE | Context Management | Personalization, long-term inference | Extract deeper social insight |
| SIAH | Context Management | Robot Context, Adaptive Autonomy, safety | Monitor integrity and agency |
| TPR | Context Management | Social Opportunity TPR, planning, pending queues | Resolve missing prerequisites |
| SCV | Context Management | Planning, actuation, social validation | Validate social acceptability |
| Social Opportunity TPR | Social Planning | Proactivity, delayed interaction, reminders | Wait for the right social moment |
| SAS | Social Planning | Multimodal behavior synthesis, actuation | Style action candidates |
| Late-Binding Behavioral Choreographer | Social Planning | Actuation, complex behavior selection | Bind what/when/how late |

This table is not meant to be exhaustive.

It is a navigation aid.

A pattern may later be specialized, composed, or reused in additional places.

---

# Layer Outputs

Each cognitive layer tends to produce different kinds of HIFs.

| Layer | Typical Output |
|---|---|
| Human Context | HumanState HIF, Speech HIF, Gesture HIF, Engagement HIF |
| Scene Context | SceneState HIF, ObjectState HIF, SpatialRelation HIF |
| Robot Context | RobotState HIF, ResourceState HIF, Integrity HIF |
| Context Management and Reasoning | UnifiedContext HIF, DeltaContext HIF, QueryResult HIF, PendingTask HIF |
| Social Planning and Behavioral Synthesis | ActionCandidate HIF, StyledAction HIF, SocialOpportunity HIF |
| Actuation | Executable HIF, Effect, ExecutionFeedback HIF |

These names are examples.

A concrete architecture may use different HIF types.

The important point is that each layer contributes semantically distinct information.

---

# How to Read the Pattern Catalog

A reader can use this documentation in two ways.

## Reading Path

Read the catalog in order if the goal is to understand how the framework builds a complete HRI architecture:

```text
Overview
How to Read a Pattern Page
Cognitive Layer Map
Human Context
Scene Context
Robot Context
Context Management
Social Planning
Actuation
```

This path emphasizes architectural learning.

## Lookup Path

Jump directly to a pattern if the goal is to solve a specific design problem.

Examples:

```text
Need to synchronize several perception experts?
→ SME

Need to reduce compute while preserving social relevance?
→ EAG

Need to resolve a task with missing information?
→ TPR

Need to check whether an action is socially appropriate?
→ SCV

Need to style a social action across modalities?
→ SAS
```

This path treats the documentation as a reusable pattern catalog.

Both reading modes are valid.

---

# Concrete Examples Are Illustrative

Layer examples should be concrete enough to teach the pattern.

However, they should not be interpreted as the only correct architecture.

Recommended wording:

```text
One possible layer composition is...
A possible instantiation may connect...
This example illustrates how the pattern can be used...
```

Avoid wording such as:

```text
The robot must...
The architecture always...
The system is implemented as...
```

The documentation should show how patterns can connect, not merely document one existing project.

---

# Conclusion

The Cognitive Layer Map explains why the HRI Design Patterns are organized by first meaningful appearance within a layered cognitive architecture.

This organization serves three goals:

```text
It supports the SOCIAL principles by preserving transparent cognitive boundaries.
It gives the reader a learning path from perception to social planning.
It keeps each pattern reusable beyond the layer where it is first introduced.
```

The next section begins the first major pattern group: Human Context.
