---
title: HRI Design Patterns Overview
sidebar_position: 1
---

# HRI Design Patterns Overview

## Purpose

The HRI Design Patterns define reusable architectural solutions for socially intelligent Human-Robot Interaction systems.

They are not implementations, APIs, ROS graphs, or fixed software modules.

They are reusable HML-based architectural compositions that describe how HIFs, Semantic Cells, Semantic Operators, policies, state structures, queues, gates, and executors may be combined to solve recurring HRI design problems.

In this documentation, each pattern should be understood as:

~~~text
a reusable semantic architecture for a recurring HRI problem
~~~

rather than:

~~~text
a required implementation recipe
~~~

This distinction is important.

The concrete examples in this documentation illustrate possible compositions. They do not claim that every robot must implement the pattern in exactly the same way.

---

# Relationship to SOCIAL and HML

The design patterns are the third layer of the framework.

~~~text
SOCIAL principles
      ↓
HML modeling language
      ↓
HRI Design Patterns
      ↓
Concrete HRI architectures
~~~

- **SOCIAL** defines the architectural commitments.
- **HML** defines the modeling language and visual grammar.
- **HRI Design Patterns** define reusable ways to compose HML primitives.
- **Concrete architectures** instantiate those patterns for a specific robot, task, deployment, or research system.

The patterns therefore serve as the bridge between abstract principles and concrete HRI architecture.

---

# What Counts as a Pattern?

A design pattern should satisfy four criteria.

## 1. It Solves a Recurring HRI Problem

The pattern should address a problem that appears repeatedly in socially intelligent robotics.

Examples include:

- synchronizing multiple perceptual experts
- managing limited attention or compute resources
- resolving intent with bounded latency
- learning a user-specific gesture
- detecting meaningful context changes
- updating a transparent semantic world model
- resolving incomplete tasks
- validating social acceptability
- styling an action for a social context

## 2. It Can Be Expressed in HML

A pattern should be representable using HML primitives:

- HIFs
- HC / ST / SG / ES / HE cells
- λ operators
- policies
- decision diamonds
- state structures
- queues
- caches
- HRI_DB
- semantic objects

## 3. It Is Reusable Across Layers

A pattern may be introduced in one cognitive layer but reused later.

For example, a Synchronous Multi-Extractor may first appear in Human Context processing, but the same pattern can also be reused for Scene Context extraction.

## 4. It Has Tradeoffs

A pattern is not merely a diagram.

It should expose engineering tradeoffs such as:

- latency
- robustness
- resource cost
- explainability
- synchronization complexity
- policy complexity
- risk of stale state
- risk of over-escalation
- failure behavior

---

# Pattern Container Notation

When a diagram needs to show that several HML elements form a reusable pattern, the pattern may be wrapped in a clipped-corner container.

This convention follows the presentation style used for layer examples.

The clipped container means:

~~~text
The enclosed elements form one reusable design pattern or pattern instance.
~~~

It does not mean:

~~~text
The enclosed elements must be implemented as one software component.
~~~

<div align="center">

<svg width="100%" viewBox="0 0 1180 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pattern-container-title pattern-container-desc">
  <title id="pattern-container-title">Pattern Container Notation</title>
  <desc id="pattern-container-desc">
    A real HML composition can be wrapped as a reusable pattern instance.
    The wrapped composition may then be referenced by a shorthand clipped-corner container such as SME.
  </desc>

  <defs>
    <marker id="arrow-pattern-container" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Input / Output -->
  <rect x="20" y="145" width="120" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="80" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="735" y="145" width="125" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="797.5" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <!-- Dashed clipped-corner pattern instance -->
  <path
    d="M 180 35
       L 650 35
       L 675 60
       L 675 280
       L 205 280
       L 180 255
       Z"
    fill="none"
    stroke="#d97706"
    strokeWidth="2"
    strokeDasharray="8 6"
  />

  <text x="427.5" y="64" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#d97706">Pattern Instance</text>
  <text x="427.5" y="86" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">example of a reusable wrapped HML composition</text>

  <!-- Inner pattern: SME example -->
  <!-- ST boxes -->
  <rect x="285" y="98" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="123" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₁</text>

  <rect x="285" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₂</text>

  <rect x="285" y="218" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="243" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₃</text>

  <!-- SG -->
  <rect x="510" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="556" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <!-- arrows from input to split -->
  <line x1="140" y1="167" x2="235" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-container)" />

  <!-- split to three STs -->
  <line x1="235" y1="167" x2="255" y2="167" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="167" x2="255" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="119" x2="277" y2="119" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="255" y1="167" x2="277" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="255" y1="167" x2="255" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="239" x2="277" y2="239" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <!-- STs to SG -->
  <line x1="377" y1="119" x2="445" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="119" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="377" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="377" y1="239" x2="445" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="239" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <!-- SG to Output -->
  <line x1="602" y1="179" x2="727" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-container)" />

  <!-- small caption inside -->
  <text x="430" y="272" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">example wrapped composition: ST₁ / ST₂ / ST₃ → SG</text>

  <!-- equals sign -->
  <text x="905" y="180" textAnchor="middle" fontSize="42" fontFamily="Arial, sans-serif" fill="currentColor">=</text>

  <!-- Solid clipped-corner shorthand container -->
  <path
    d="M 955 105
       L 1115 105
       L 1135 125
       L 1135 225
       L 975 225
       L 955 205
       Z"
    fill="none"
    stroke="#d97706"
    strokeWidth="2"
  />

  <text x="1045" y="155" textAnchor="middle" fontSize="28" fontFamily="Arial, sans-serif" fill="#d97706">SME</text>
  <text x="1045" y="180" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">pattern shorthand</text>
</svg>

</div>


Use this container sparingly.

It is most useful in layer examples, where the same diagram contains several reusable patterns connected together.

---

# Documentation Strategy

The design pattern documentation follows a layer-oriented reading path while preserving each pattern as a reusable catalog entry.

This gives two complementary views.

## 1. Layer-Oriented Reading Path

The reader can follow the construction of a socially intelligent HRI architecture layer by layer:

~~~text
Human Context
Scene Context
Robot Context
Context Management and Reasoning
Social Planning and Behavioral Synthesis
Actuation
~~~

This path explains why each pattern appears, what role it plays in a larger architecture, and how later layers reuse earlier patterns.

## 2. Reusable Pattern Catalog

Each pattern is documented as an independent reusable architectural solution.

This allows a designer to ask:

~~~text
Which pattern should I use to solve this specific HRI problem?
~~~

For example:

- Use SME when several experts must process the same source while preserving temporal alignment.
- Use EAG when attention or compute must be allocated according to social relevance.
- Use TSC/TSP when language or intent resolution should be fast, cached, and escalation-aware.
- Use CNE when the system should reason about meaningful change rather than all raw state.
- Use TPR when a task is meaningful but not yet executable.
- Use SCV when physically possible actions must be checked for social acceptability.

---

# Cognitive Layer Map

The following organization is recommended for the documentation.

## Human Context

Human Context introduces patterns that convert raw human-facing signals into structured human context.

Introduced patterns:

- **Synchronous Multi-Extractor (SME)**
- **Elastic Attention Governor (EAG)**
- **Tiered Semantic Cache / Proxy (TSC/TSP)**
- **Adaptive Signature Learner (ASL)**

Layer examples may include:

- video-based person, skeleton, gaze, and facial expression extraction
- audio-based speech, azimuth, and sentiment extraction
- resource-aware 2D-to-3D skeleton processing
- verbal grounding of a learned gesture

These are examples of possible compositions, not required implementations.

## Scene Context

Scene Context reuses foundational extraction and attention patterns for the physical environment.

Reused patterns:

- **SME**
- **EAG**

Layer examples may include:

- object detection
- door detection
- stair detection
- obstacle detection
- slope detection
- SLAM integration
- 2D-to-3D scene grounding

The goal is to show how the same pattern language generalizes beyond human perception.

## Robot Context

Robot Context models the robot's own body, resources, actuation interfaces, and internal state as HIF streams.

Reused HML structures:

- HC
- SG
- HE
- Semantic Cells
- HIF streams
- structured resource state

Layer examples may include:

- battery HIFs
- CPU / memory / disk HIFs
- motion request HIFs
- speech request HIFs
- domain-specific execution requests

This layer is less about introducing new patterns and more about showing that the robot itself is also part of the semantic context.

## Context Management and Reasoning

Context Management connects Human Context, Scene Context, Robot Context, memory, and reasoning.

Introduced patterns:

- **Context Novelty Extractor (CNE)**
- **HRI_DB Handler Pattern**

Commonly reused or derived patterns:

- **Spatial-Based Reasoning (SBR)**
- **Consistency Evaluator and Updater (CEU)**
- **Query Social Handler (QSH)**
- **Deep Social Insight Extractor (DSIE)**
- **System Integrity and Agency Handler (SIAH)**
- **Task Prerequisite Resolver (TPR)**
- **Social Convention Validator (SCV)**

This layer is where many pieces become connected.

It should show how unified context becomes delta context, how delta context updates or queries HRI_DB, and how specialized handlers reason over transparent state.

## Social Planning and Behavioral Synthesis

Social Planning turns validated context and pending intentions into socially appropriate action candidates.

Introduced or emphasized patterns:

- **Social Opportunity TPR**
- **Social Action Stylist (SAS)**
- **Late-Binding Behavioral Choreographer**

Layer examples may include:

- waiting for the right social moment
- choosing whether to speak, gesture, move, or combine modalities
- styling an action based on politeness, privacy, urgency, and context
- binding behavior as late as possible to preserve adaptability

This layer should make clear that planning is not only about what to do, but also:

~~~text
when to do it
how to do it
whether it is socially appropriate to do it now
~~~

## Actuation

The actuation layer remains open for future documentation.

It will likely involve patterns that connect executable HIFs to embodied effects through HE cells, actuator policies, safety gates, action monitoring, and rollback behavior.

---

# Pattern Reuse Principle

A pattern should be introduced where it first becomes necessary, but it should remain reusable elsewhere.

For example:

~~~text
SME is introduced in Human Context.
SME is reused in Scene Context.
SME may also appear in Social Action Styling when several stylists produce candidate modalities.
~~~

Similarly:

~~~text
EAG is introduced for human attention and resource allocation.
EAG may also be reused for scene processing, social prioritization, or actuation bandwidth.
~~~

This avoids duplicating pattern definitions while still allowing concrete examples in each layer.

Documentation pages should use this wording:

~~~text
First introduced in:
Reused in:
Example composition:
~~~

---

# Concrete Examples Are Illustrative

Concrete examples are important because HRI patterns can otherwise remain too abstract.

However, each example should be framed as an illustration of possible connections.

Use language such as:

~~~text
One possible instantiation is...
A layer example may connect...
In this example composition...
This does not require every implementation to...
~~~

Avoid language such as:

~~~text
The system must...
The architecture is...
The robot always...
~~~

The purpose is to document a reusable pattern language, not to document one specific robot project.

---

# Recommended Pattern Page Structure

Each design pattern page should use the same general structure.

~~~text
# Pattern Name

## Intent
What the pattern is trying to achieve.

## Problem
The recurring HRI problem addressed by the pattern.

## Context
When the pattern is useful.

## HML Structure
A diagram using the HML visual language.

## Participants
HIFs, Semantic Cells, λ operators, policies, state structures, queues, gates.

## Flow
Step-by-step explanation of the pattern.

## Example Composition
A concrete example showing one possible connection of the pattern.

## Reuse
Where else the pattern may appear.

## SOCIAL Principles Supported
How the pattern supports S/O/C/I/A/L.

## Tradeoffs
Benefits, costs, risks, and failure modes.

## Implementation Notes
Practical considerations for deployment or experimentation.
~~~

This structure should remain stable across pattern pages.

---

# Foundational and Composite Patterns

Some patterns are foundational.

They provide basic reusable mechanisms.

Examples:

- Synchronous Multi-Extractor
- Elastic Attention Governor
- Tiered Semantic Cache / Proxy
- Adaptive Signature Learner
- Context Novelty Extractor
- HRI_DB Handler

Other patterns are composite or orchestration-oriented.

They combine earlier mechanisms into higher-level reasoning or planning roles.

Examples:

- Spatial-Based Reasoning
- Consistency Evaluator and Updater
- Query Social Handler
- Deep Social Insight Extractor
- System Integrity and Agency Handler
- Task Prerequisite Resolver
- Social Convention Validator
- Social Opportunity TPR
- Social Action Stylist
- Late-Binding Behavioral Choreographer

This distinction is not rigid.

A pattern may begin as a composite in one context and later become a reusable building block in another.

---

# Example Mapping of HRI Design Patterns to Architectural Layers

<div align="center">

<svg width="100%" viewBox="0 0 980 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="layer-pattern-map-title layer-pattern-map-desc">
  <title id="layer-pattern-map-title">Layer-to-Pattern Map</title>
  <desc id="layer-pattern-map-desc">Design patterns are introduced layer by layer and reused in later cognitive layers.</desc>

  <defs>
    <marker id="arrow-layer-pattern-map" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Layer boxes -->
  <path d="M 40 40 L 285 40 L 305 60 L 305 130 L 60 130 L 40 110 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="172.5" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Human Context</text>
  <text x="172.5" y="94" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">SME / EAG / TSC / ASL</text>

  <path d="M 375 40 L 620 40 L 640 60 L 640 130 L 395 130 L 375 110 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="507.5" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Scene Context</text>
  <text x="507.5" y="94" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">reuse SME / EAG</text>

  <path d="M 710 40 L 935 40 L 955 60 L 955 130 L 730 130 L 710 110 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="832.5" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Robot Context</text>
  <text x="832.5" y="94" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HIF streams / HC / SG / HE</text>

  <path d="M 190 235 L 790 235 L 820 265 L 820 365 L 220 365 L 190 335 Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="505" y="270" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Context Management and Reasoning</text>
  <text x="505" y="298" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">CNE / HRI_DB Handler / SBR / CEU / QSH / DSIE / SIAH / TPR / SCV</text>
  <text x="505" y="322" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">connects multiple contexts, memory, validation, and reasoning</text>

  <path d="M 265 430 L 715 430 L 740 455 L 740 500 L 290 500 L 265 475 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="502.5" y="458" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Social Planning and Behavioral Synthesis</text>
  <text x="502.5" y="482" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Social Opportunity TPR / SAS / Late-Binding Choreographer</text>

  <!-- arrows from first contexts to management -->
  <line x1="172.5" y1="130" x2="340" y2="227" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-layer-pattern-map)" />
  <line x1="507.5" y1="130" x2="507.5" y2="227" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-layer-pattern-map)" />
  <line x1="832.5" y1="130" x2="670" y2="227" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-layer-pattern-map)" />

  <!-- management to social planning -->
  <line x1="505" y1="365" x2="505" y2="422" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-layer-pattern-map)" />
</svg>

</div>

This map is intentionally schematic.

It shows the recommended learning path and reuse structure, not a mandatory architecture.

---

# Writing Style for Pattern Pages

Use engineering-academic language.

Prefer:

~~~text
The pattern supports...
The pattern can be instantiated as...
A common implementation strategy is...
One possible HML composition is...
The pattern trades latency for synchronization integrity...
~~~

Avoid:

~~~text
The robot must...
The system always...
This is the implementation...
~~~

The documentation should support academic publication by presenting the patterns as generalizable architecture, while still remaining concrete enough for engineers to apply.

---

# Conclusion

The HRI Design Patterns document reusable architectural solutions built from HML primitives and governed by SOCIAL principles.

They should be organized by the cognitive layer in which they first become necessary, while remaining reusable across later layers.

This organization supports both:

~~~text
a readable architectural learning path
~~~

and:

~~~text
a reusable pattern catalog
~~~

The next pages define the individual patterns, beginning with the Human Context layer and the Synchronous Multi-Extractor.
