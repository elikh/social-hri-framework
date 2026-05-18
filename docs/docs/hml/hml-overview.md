---
title: HML — HRI Modeling Language
sidebar_position: 1
---

# HML — HRI Modeling Language

## Overview

<div align="center">

<svg width="920" height="620" viewBox="0 0 920 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hml-overview-title hml-overview-desc">
  <title id="hml-overview-title">HML Overview</title>
  <desc id="hml-overview-desc">
    SOCIAL principles inform HML. HML defines core modeling primitives: HIF, Semantic Operators, and Semantic Cells. HRI Design Patterns are built from HML and are then instantiated as concrete HRI architectures.
  </desc>

  <defs>
    <marker id="arrow-hml-overview-clean" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- SOCIAL -->
  <rect x="210" y="30" width="500" height="74" rx="16" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="460" y="62" text-anchor="middle" font-size="20" font-family="Arial, sans-serif" fill="currentColor">S.O.C.I.A.L. Principles</text>
  <text x="460" y="87" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Architectural principles for socially intelligent HRI</text>

  <!-- SOCIAL -> HML -->
  <line x1="460" y1="104" x2="460" y2="155" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow-hml-overview-clean)"/>

  <!-- HML -->
  <rect x="305" y="165" width="310" height="82" rx="18" fill="none" stroke="currentColor" stroke-width="2.3"/>
  <text x="460" y="199" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="currentColor">HML</text>
  <text x="460" y="225" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HRI Modeling Language</text>

  <!-- HML -> primitives -->


  <!-- Primitives row -->
  <!-- HIF -->
  <rect x="55" y="335" width="210" height="74" rx="14" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="160" y="365" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="160" y="390" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">semantic interaction carrier</text>

  <!-- Operators -->
  <rect x="355" y="335" width="210" height="74" rx="14" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="405" y="365" text-anchor="middle" font-size="34" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="470" y="364" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Operators</text>
  <text x="460" y="390" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">experts, policies, heuristics, models</text>

  <!-- Semantic Cells -->
  <rect x="655" y="335" width="210" height="74" rx="14" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="760" y="365" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Semantic Cells</text>
  <text x="760" y="390" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">HC / ST / SG / ES / HE</text>

  <!-- HML -> each primitive -->
  <line x1="420" y1="247" x2="160" y2="327" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>
  <line x1="460" y1="247" x2="460" y2="327" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>
  <line x1="500" y1="247" x2="760" y2="327" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>

<!-- Primitives -> Patterns -->
<line x1="160" y1="409" x2="340" y2="465"
      stroke="currentColor" stroke-width="1.5"
      marker-end="url(#arrow-hml-overview-clean)"/>

<line x1="460" y1="409" x2="460" y2="465"
      stroke="currentColor" stroke-width="1.5"
      marker-end="url(#arrow-hml-overview-clean)"/>

<line x1="760" y1="409" x2="580" y2="465"
      stroke="currentColor" stroke-width="1.5"
      marker-end="url(#arrow-hml-overview-clean)"/>

  <!-- Patterns -->
  <rect x="260" y="465" width="400" height="52" rx="14" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="460" y="487" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">HRI Design Patterns</text>
  <text x="460" y="507" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">reusable architectural solutions</text>

  <!-- Patterns -> Architectures -->
  <line x1="460" y1="517" x2="460" y2="555" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>

  <!-- Concrete Architectures -->
  <rect x="230" y="565" width="460" height="52" rx="14" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="460" y="587" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Concrete HRI Architectures</text>
  <text x="460" y="607" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">robot-specific implementations</text>
</svg>

</div>

This overview locates HML within the overall SOCIAL framework. The SOCIAL principles define the architectural commitments, HML provides the modeling language, and HRI Design Patterns reuse HML primitives to describe concrete socially intelligent robot architectures.

HML (HRI Modeling Language) is a lightweight architectural modeling language for designing, documenting, and reasoning about socially intelligent Human-Robot Interaction (HRI) systems.

The purpose of HML is to provide a shared visual and semantic vocabulary for describing how embodied AI systems perceive, interpret, reason, validate, and act within human environments.

HML is not intended to replace implementation frameworks such as ROS, behavior trees, state machines, or agent orchestration platforms. Instead, it operates at a higher architectural level: it describes the semantic flow of interaction.

It answers questions such as:

- What kind of interaction information is flowing through the system?
- Which semantic transformations are applied?
- Where is context synchronized?
- Where is reasoning escalated?
- Where is social or safety validation performed?
- Which parts of the architecture are deterministic, learned, cached, or generative?
- Where does semantic reasoning become embodied action?

HML provides the modeling foundation for the SOCIAL principles and the HRI Design Patterns.

---

# Motivation

Modern HRI systems increasingly combine many heterogeneous components:

- Cameras
- Microphones
- LiDAR
- Robot sensors
- Object detectors
- Speech recognition
- Gesture recognition
- Tracking systems
- Knowledge bases
- LLMs
- Multimodal models
- Planning systems
- Navigation stacks
- Social policies
- Safety monitors
- Actuators

Without a modeling language, these systems are often described using implementation diagrams that expose software nodes, APIs, or message topics, but hide the semantic logic of interaction.

This creates several problems:

- The architecture becomes difficult to explain.
- Social reasoning is hidden inside implementation details.
- Multimodal synchronization is unclear.
- Escalation between simple and complex reasoning is not explicit.
- Safety and social validation are difficult to locate.
- Design patterns cannot be compared systematically.
- Academic communication becomes overly implementation-specific.

HML addresses these limitations by modeling the semantic structure of HRI systems directly.

---

# Core Idea

HML models HRI systems as flows of semantic interaction frames processed by explicit semantic cells.

At the center of HML is the HIF:

    HIF — HRI Interaction Frame

A HIF is a semantic carrier that wraps raw content, interpreted properties, metadata, and processing history.

HIFs flow through semantic cells such as:

- HIF Creators
- Semantic Transformers
- Sync Gates
- Escalation Switches
- HIF Executors

Each cell applies a semantic operation, policy, expert, or transformation to the HIF.

In simplified form:
    ```text
    Source
      ↓
    HIF Creator
      ↓
    HIF
      ↓
    Semantic Cells
      ↓
    Enriched / validated / executable HIF
      ↓
    HIF Executor
    ```

This allows an HRI architecture to be described as an interpretable semantic pipeline rather than as a collection of disconnected software modules.

---

# The Three Modeling Layers

HML can be understood through three modeling layers.

## 1. Semantic Data

Semantic data elements represent what flows through the system.

Examples include:

- HIF
- HIF Stream
- Semantic Object
- HRI_DB
- Semantic Cache
- Queue
- Buffer
- Time-series Window
- Pending Task Queue

These elements describe interaction information, memory, state, and temporal storage.

---

## 2. Semantic Operators

Semantic operators describe how meaning is computed, transformed, validated, or selected.

The main symbolic abstraction is:

    λ — Semantic Operator

A λ may represent:

- Deterministic code
- A heuristic
- A classifier
- A neural network
- An LLM
- A multimodal model
- A rule engine
- A database query
- A policy function
- A social law
- A safety rule

From the modeling perspective, λ represents an encapsulated expert or policy.

---

## 3. Semantic Cells

Semantic cells are architectural primitives that apply semantic operators to HIFs.

Core cells include:

| Cell | Name | Purpose |
|---|---|---|
| HC | HIF Creator | Converts a source into a HIF |
| ST | Semantic Transformer | Adds or modifies semantic properties |
| SG | Sync Gate | Synchronizes multiple HIFs |
| ES | Escalation Switch | Selects among experts or reasoning paths |
| HE | HIF Executor | Converts a HIF into an embodied or external effect |

These cells are the basic building blocks used by the HRI Design Patterns.

---

# Why Not Use UML Alone?

HML is not a general-purpose software modeling language.

UML can describe classes, components, sequences, and state machines, but it does not directly capture the central concerns of social HRI:

- Semantic enrichment
- Multimodal synchronization
- Temporal grounding
- Contextual reasoning
- Social validation
- Human-facing explainability
- Escalation between heterogeneous experts
- Late-bound behavior generation
- Embodied execution

HML complements UML by focusing on the semantic and interactional structure of the system.

---

# Why Not Use ROS Graphs Alone?

ROS graphs are excellent for representing runtime communication between nodes.

However, ROS-level diagrams often describe transport and computation rather than meaning.

A ROS graph may show that a camera topic feeds a perception node, but it does not necessarily show:

- Which social properties were extracted
- Whether gaze and speech were synchronized
- Whether confidence was sufficient
- Whether a task was delayed due to missing context
- Whether a social convention blocked execution
- Whether an LLM was used only after simpler reasoning failed

HML abstracts above the implementation layer to expose these semantic decisions.

---

# HML and SOCIAL

The SOCIAL principles define what a socially intelligent architecture should preserve.

HML defines how such an architecture can be modeled.

| SOCIAL Principle | HML Support |
|---|---|
| S-Separated Contexts | Contexts are modeled as separated HIF streams |
| O-Open Declarative | Semantic state and policies are explicitly represented |
| C-Clear Cognition | Cognitive stages are visible as HIF transformations |
| I-Interpretable Gates | Gates are modeled as explicit semantic cells or roles |
| A-Adaptive Autonomy | Autonomy is represented as explicit state and policy |
| L-Layered Validation | Validation is distributed across visible semantic layers |

In this sense, HML is the notation layer that makes SOCIAL architectures visible.

---

# HML and HRI Design Patterns

The HRI Design Patterns are reusable architectural structures built from HML primitives.

For example:

| Pattern | HML Interpretation |
|---|---|
| Synchronous Multi-Extractor | Multiple STs synchronized by an SG |
| Elastic Attention Governor | Priority SG plus resource-aware ES |
| Tiered Semantic Cache | ES over code, cache, and LLM experts |
| Adaptive Signature Learner | Time-series window plus SG plus learning ST |
| Context Novelty Extractor | Context unification followed by delta extraction |
| HRI_DB Handler | ES-mediated query/update logic over declarative memory |
| Task Prerequisite Resolver | Queue, missing-info ST, QSH, and pending queue |
| Social Convention Validator | Consistency validation plus social acceptance gate |
| System Integrity & Agency Handler | Self-HIF generation plus integrity ES |
| Social Action Stylist | Parallel styling STs synchronized into action |
| Late-Binding Behavioral Choreographer | Social opportunity timing followed by behavioral styling |

This allows the patterns to be documented, compared, and reused systematically.

---

# Modeling Philosophy

HML follows several design commitments.

## Semantic First

The language models meaning before implementation.

## Explicit Boundaries

Transitions between perception, reasoning, validation, and action should be visible.

## Traceability

A HIF should carry enough history to explain how it was produced.

## Modularity

Experts, policies, and gates should be replaceable without changing the overall pattern.

## Hybrid Intelligence

HML supports symbolic, neural, deterministic, cached, and generative components within the same diagram.

## Social Grounding

The language is designed specifically for human-facing embodied systems.

---

# Reading an HML Diagram

An HML diagram should be read as a semantic interaction flow.

In general:

- HIFs flow between cells.
- Cells apply semantic operations.
- λ symbols describe the expert or policy inside a cell.
- Gates regulate synchronization, escalation, validation, or execution.
- Queues and buffers represent temporal or unresolved state.
- HRI_DB and caches provide memory or reusable semantic knowledge.
- Executors create actions or effects outside the reasoning pipeline.

A typical diagram therefore answers:

    What is known?
    How was it derived?
    What changed?
    What is uncertain?
    What was validated?
    What is ready for action?
    What must wait?
    What requires escalation?
    What must be explained?

---

# Scope

HML is designed to model:

- Multimodal perception pipelines
- Human context interpretation
- Scene understanding
- Robot self-state and integrity
- Social reasoning
- Task readiness
- Validation gates
- Autonomy regulation
- Behavioral synthesis
- Interaction timing
- Embodied execution

HML is not intended to specify:

- Low-level control algorithms
- Exact neural network architectures
- Middleware APIs
- Memory layouts
- Full formal verification semantics
- UI implementation details

Those may be documented separately at lower levels of abstraction.

---

# Conclusion

HML provides the semantic modeling layer for SOCIAL-based HRI architectures.

It defines a small vocabulary of interaction frames, semantic operators, memory structures, gates, and processing cells that can be composed into reusable HRI Design Patterns.

By making social cognition architecturally visible, HML supports:

- Better documentation
- Clearer academic communication
- More reusable design patterns
- Explainable autonomy
- Safer embodied AI
- More trustworthy human-robot interaction

HML is therefore the bridge between high-level SOCIAL principles and concrete HRI Design Patterns.
