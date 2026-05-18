---
title: Human Context Overview
sidebar_position: 1
---

# Human Context Overview

## Purpose

Human Context is the part of the HRI Design Pattern language that turns human-facing signals into structured semantic information about people and interaction.

It is not merely a computer-vision layer, an audio-processing layer, or a perception stack.

Human Context is the robot's semantically structured view of the human side of the interaction.

It helps the architecture answer questions such as:

```text
Who is present?
Where is the person?
What did the person say?
What is the person doing?
What is the person pointing at?
Is the person engaged, busy, approaching, leaving, distressed, or available?
Which human signals should affect reasoning, planning, or autonomy?
```

Human Context is often the first design-pattern group because socially intelligent HRI usually begins with the need to understand the human participant before deciding how to reason, respond, plan, or act.

---

# Human Context Is Not the Whole World Model

Human Context is only one part of the robot's semantic understanding.

It should be separated from:

- Scene Context — objects, rooms, obstacles, affordances, spatial layout
- Robot Context — robot state, resources, sensor health, autonomy state
- Context Management — memory, novelty, consistency, queries, pending tasks
- Social Planning — action opportunities, behavioral style, timing, modality
- Actuation — embodied or external effects

This separation supports the SOCIAL principle of **S-Separated Contexts**.

The human side of the interaction should be modeled clearly enough that it can later be synchronized with scene, robot, memory, and planning context without semantic contamination.

In HML terms:

```text
Human Context = human-facing HIF streams + human-oriented semantic enrichment
```

---

# Basic Input and Interpreter Roles

Within Human Context, this documentation distinguishes between two logical roles:

```text
Human Context — Basic Input
Human Context — Interpreter
```

## Basic Input

The Basic Input role creates and enriches human-facing HIFs from sources such as:

- video
- audio
- microphones
- cameras
- LiDAR or depth sensors
- UI events
- keyboard or touchscreen input
- human detection events
- raw gesture or pointing signals

This role is where the documentation first introduces patterns such as:

- **Synchronous Multi-Extractor (SME)**
- **Elastic Attention Governor (EAG)**

These patterns help create richer, synchronized, resource-aware HIFs from raw or early human-facing input streams.

## Interpreter

The Interpreter role turns human-facing HIFs into higher-level meaning.

It may infer:

- intent
- dialogue meaning
- gesture meaning
- engagement
- affect
- learned personal signatures
- user-specific interaction patterns
- context-dependent interpretation

This role is where the documentation introduces patterns such as:

- **Tiered Semantic Cache / Proxy (TSC/TSP)**
- **Adaptive Signature Learner (ASL)**

These patterns usually operate over HIFs that have already been created or enriched by earlier processing.

---

# Logical Layers, Not Runtime Boundaries

The distinction between Basic Input and Interpreter is logical.

It is not necessarily chronological.  
It is not necessarily a software boundary.  
It is not necessarily a ROS boundary.  
It is not necessarily a deployment boundary.

A concrete implementation may colocate experts from both logical roles if this is more efficient.

For example, a video SME may apply several experts over the same VideoFrame HIF:

```text
person detector
skeleton extractor
gaze estimator
facial-expression / affect interpreter
```

Logically, facial-expression interpretation may belong closer to the Interpreter role.

Engineering-wise, however, it may be better to invoke it near the video frame, while the raw frame is still available, rather than forwarding a large video frame through several middleware layers only to interpret it later.

The HML layer distinction therefore describes semantic responsibility, not physical data movement.

The ordering in this documentation is explanatory:

```text
Basic Input patterns are introduced first because they create or enrich the HIFs.
Interpreter patterns are introduced next because they conceptually depend on HIFs that already exist.
```

This ordering does not require every implementation to execute experts in exactly that order.

As long as the semantic contracts remain explicit, an implementation may fuse, colocate, reorder, or optimize expert execution.

---

# Typical Inputs and Outputs

Human Context may receive many different kinds of input HIFs.

Examples include:

| Input HIF | Meaning |
|---|---|
| VideoFrame HIF | A frame or short frame sequence from a camera |
| AudioSnippet HIF | Audio segment captured from microphone input |
| Text HIF | Transcribed or typed human language |
| UIEvent HIF | Human action through a screen, button, or interface |
| PointingEvent HIF | Raw or partially interpreted pointing signal |
| HumanDetection HIF | Detection of a person or human-like region |
| Sensor HIF | Human-relevant sensor input such as proximity or depth |

Human Context may produce several types of output HIFs.

Examples include:

| Output HIF | Meaning |
|---|---|
| HumanState HIF | Structured state of a person or group |
| Speech HIF | Speech-related semantic information |
| Text HIF | Transcribed or normalized language |
| IntentCandidate HIF | Candidate interpretation of a human instruction |
| Gesture HIF | Interpreted gesture or motion pattern |
| Engagement HIF | Engagement, attention, or availability estimate |
| HumanLocation HIF | Human position or spatial relation to the robot |
| PersonTrack HIF | Identity or tracking state over time |
| HumanAttention HIF | Gaze, focus, orientation, or attention estimate |

These names are illustrative.

A concrete architecture may use different HIF types, schemas, or names.

The important point is that human-facing information becomes explicit, structured, and traceable.

---

# Overview Diagram

The following diagram shows Human Context as a logical organization.

It is not a mandatory runtime graph.

<div align="center">

<svg width="100%" viewBox="0 0 1040 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="human-context-overview-title human-context-overview-desc">
  <title id="human-context-overview-title">Human Context Overview</title>
  <desc id="human-context-overview-desc">
    Human-facing sources are converted into Human Context HIF streams. Basic Input patterns such as SME and EAG support early enrichment and resource-aware attention. Interpreter patterns such as TSC/TSP and ASL infer higher-level human meaning. The outputs are structured Human Context HIFs.
  </desc>

  <defs>
    <marker id="arrow-human-context-overview" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Sources -->
  <rect x="30" y="175" width="145" height="150" rx="16" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="102.5" y="203" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Human-Facing</text>
  <text x="102.5" y="224" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Sources</text>
  <text x="102.5" y="255" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">camera / mic</text>
  <text x="102.5" y="273" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">UI / depth</text>
  <text x="102.5" y="291" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">human events</text>

  <!-- HC -->
  <rect x="220" y="205" width="95" height="90" rx="14" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="267.5" y="244" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="currentColor">HC</text>
  <text x="267.5" y="267" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">HIF Creator</text>

  <!-- Basic Input container -->
  <path d="M 365 55 L 665 55 L 690 80 L 690 245 L 390 245 L 365 220 Z"
        fill="none" stroke="#d97706" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="527.5" y="83" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#d97706">Basic Input Role</text>
  <text x="527.5" y="105" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">early HIF creation, enrichment, attention</text>

  <!-- SME shorthand -->
  <path d="M 405 130 L 510 130 L 525 145 L 525 195 L 420 195 L 405 180 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="465" y="158" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="#d97706">SME</text>
  <text x="465" y="177" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">multi-extract</text>

  <!-- EAG shorthand -->
  <path d="M 555 130 L 650 130 L 665 145 L 665 195 L 570 195 L 555 180 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="610" y="158" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="#d97706">EAG</text>
  <text x="610" y="177" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">attention</text>

  <!-- Interpreter container -->
  <path d="M 365 285 L 665 285 L 690 310 L 690 465 L 390 465 L 365 440 Z"
        fill="none" stroke="#d97706" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="527.5" y="313" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#d97706">Interpreter Role</text>
  <text x="527.5" y="335" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">intent, gesture, meaning, signatures</text>

  <!-- TSC/TSP shorthand -->
  <path d="M 405 360 L 525 360 L 540 375 L 540 425 L 420 425 L 405 410 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="472.5" y="388" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#d97706">TSC/TSP</text>
  <text x="472.5" y="407" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">tiered meaning</text>

  <!-- ASL shorthand -->
  <path d="M 575 360 L 650 360 L 665 375 L 665 425 L 590 425 L 575 410 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="620" y="388" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="#d97706">ASL</text>
  <text x="620" y="407" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">signatures</text>

  <!-- Outputs -->
  <rect x="820" y="165" width="180" height="170" rx="16" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="910" y="194" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Human Context</text>
  <text x="910" y="216" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">HIF Outputs</text>
  <text x="910" y="249" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">HumanState HIF</text>
  <text x="910" y="267" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Speech / Text HIF</text>
  <text x="910" y="285" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Gesture HIF</text>
  <text x="910" y="303" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Engagement HIF</text>

  <!-- Main arrows -->
  <line x1="175" y1="250" x2="212" y2="250" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-human-context-overview)" />
  <line x1="315" y1="250" x2="360" y2="250" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Split into roles -->
  <line x1="360" y1="250" x2="360" y2="162" stroke="currentColor" strokeWidth="1.2" />
  <line x1="360" y1="162" x2="397" y2="162" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />

  <line x1="360" y1="250" x2="360" y2="392" stroke="currentColor" strokeWidth="1.2" />
  <line x1="360" y1="392" x2="397" y2="392" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Role internal arrows -->
  <line x1="525" y1="162" x2="547" y2="162" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />
  <line x1="540" y1="392" x2="567" y2="392" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Roles to output -->
  <line x1="690" y1="162" x2="812" y2="225" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-human-context-overview)" />
  <line x1="690" y1="392" x2="812" y2="275" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Note -->
  <text x="520" y="500" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">
    Logical organization only: implementations may colocate experts for efficiency.
  </text>
</svg>

</div>

The diagram shows two logical roles inside Human Context.

It does not require that Basic Input and Interpreter be deployed as separate runtime stages.

---

# Patterns Introduced in Human Context

Human Context introduces four foundational patterns.

## Synchronous Multi-Extractor (SME)

SME coordinates several semantic transformers operating over related input HIFs and synchronizes their outputs into a richer HIF.

One possible Human Context instantiation is:

```text
VideoFrame HIF
  → person detector ST
  → skeleton extractor ST
  → gaze estimator ST
  → expression classifier ST
  → SG
  → HumanState HIF
```

SME is introduced here because human context often requires multiple experts that describe the same interaction moment from different angles.

It is later reused in Scene Context and may also reappear in Social Action Styling.

---

## Elastic Attention Governor (EAG)

EAG manages attention, compute, fidelity, or processing depth according to social relevance, uncertainty, priority, and available resources.

One possible Human Context instantiation is:

```text
multiple detected people
  → priority and resource policy
  → lightweight processing for low-priority people
  → deeper processing for the active speaker or socially relevant person
```

EAG is introduced here because human-facing input often contains more information than the robot can process deeply at every moment.

The robot must decide where to focus without losing transparency.

---

## Tiered Semantic Cache / Proxy (TSC/TSP)

TSC/TSP supports tiered semantic interpretation.

A typical structure may try:

```text
rule-based interpretation
  ↓
semantic cache
  ↓
LLM or stronger model fallback
```

One possible Human Context instantiation is:

```text
Text HIF
  → deterministic parser
  → semantic cache
  → LLM fallback if needed
  → IntentCandidate HIF
```

This pattern helps keep interpretation fast, explainable, and cost-aware while still allowing escalation when simple methods are insufficient.

The exact naming between Tiered Semantic Cache and Tiered Semantic Proxy may be refined later.

The core idea is the same: interpretation should escalate through controlled semantic tiers rather than jumping directly to an expensive or opaque model.

---

## Adaptive Signature Learner (ASL)

ASL learns or recognizes user-specific signatures over time.

A signature may be:

- a personal gesture
- a repeated movement pattern
- a habitual interaction style
- a user-specific pointing style
- a temporal pattern of engagement
- a personalized semantic cue

One possible Human Context instantiation is:

```text
Skeleton HIF stream
  → Time-Series Window
  → learning / classification ST
  → GestureSignature HIF
```

ASL is introduced under the Interpreter role because it turns repeated human behavior into learned semantic meaning.

---

# Relationship to SOCIAL Principles

Human Context supports the SOCIAL framework in the following ways.

## S-Separated Contexts

Human Context keeps human-facing interpretation separate from scene, robot, memory, and planning context.

This prevents early fusion from mixing human state with object state, robot state, or action planning before the relevant semantic boundaries are clear.

## O-Open Declarative

Human-facing properties should be represented explicitly in HIFs.

Examples:

```text
person_id
location
gaze_direction
speech_text
gesture_candidate
engagement_score
confidence
source_history
processing_history
```

This makes human context inspectable rather than hidden inside model state.

## C-Clear Cognition

Human Context decomposes human understanding into visible semantic stages.

For example:

```text
AudioSnippet HIF
  → speech-to-text
  → intent candidate
  → confidence and ambiguity
```

This is clearer than treating the human input as a single opaque prompt to a model.

## I-Interpretable Gates

Human Context relies on gates and policies for synchronization, attention, escalation, and confidence.

Examples:

- an SG may wait for synchronized gaze and speech evidence
- an EAG may prioritize one person over another
- a TSC/TSP may decide whether to use cache or escalate to an LLM
- an ASL may reject a weak gesture signature

## A-Adaptive Autonomy

Human Context influences autonomy.

A robot may act differently depending on whether the person is busy, distressed, attentive, near, far, uncertainly identified, or explicitly requesting action.

Human Context therefore helps determine whether the robot should act, ask, wait, reduce autonomy, or escalate.

## L-Layered Validation

Human-facing information should not be used directly for action without validation.

Human Context preserves confidence, provenance, and intermediate interpretations so later layers can validate, cross-check, delay, or reject action candidates.

---

# Example Compositions Are Illustrative

The examples in this section illustrate possible ways to connect HML patterns.

They are not intended to prescribe a single perception stack.

A concrete robot may use different sensors, different models, different HIF schemas, and different runtime deployment choices.

The key requirement is that the semantic roles remain clear:

```text
What human-facing information entered?
Which experts interpreted it?
Which policies governed the interpretation?
What HIFs were produced?
What uncertainty and provenance were preserved?
```

---

# Output to Later Layers

Human Context outputs are usually consumed by later layers.

For example:

```text
HumanState HIF
  → Context Management

Gesture HIF
  → Task Prerequisite Resolver or Social Planning

IntentCandidate HIF
  → Query Social Handler or Task Prerequisite Resolver

Engagement HIF
  → Social Opportunity TPR

PersonTrack HIF
  → Spatial-Based Reasoning or HRI_DB Handler
```

Human Context is therefore not an isolated subsystem.

It provides semantically structured human information to the rest of the SOCIAL architecture.

---

# Conclusion

Human Context is the entry point for modeling the human side of Human-Robot Interaction.

It introduces foundational patterns for:

```text
multi-extraction
resource-aware attention
tiered semantic interpretation
adaptive personal signature learning
```

The distinction between Basic Input and Interpreter is logical rather than strictly chronological or implementation-level.

This allows the architecture to remain conceptually clear while still supporting efficient engineering choices.

The next page introduces the first Human Context pattern: **Synchronous Multi-Extractor (SME)**.
