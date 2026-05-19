---
title: Human Context Layer Example
sidebar_position: 8
---

# Human Context Layer Example

## Overview

This page closes the Human Context section by summarizing how the patterns introduced so far may work together as a Human Context layer.

It does not define a required architecture.

Instead, it shows how the Human Context layer can be understood as a composition of two logical sublayers:

```text
Basic Input Sublayer
Interpreter Sublayer
```

The first sublayer turns raw human-related signals into semantic HIF streams.

The second sublayer interprets those streams into more explicit, reusable, and adaptive human-context meanings.

---

## Basic Input Sublayer

The basic input sublayer is responsible for transforming raw sensor input into meaningful human-context HIFs.

In the example developed in this section, this sublayer used:

```text
Synchronous Multi-Extractor (SME)
Elastic Attention Governor (EAG)
```

The role of **SME** is to extract multiple synchronized semantic signals from the same interaction moment.

For example:

```text
video frame
  → person detection
  → skeleton extraction
  → facial expression classification
  → gaze detection
```

The role of **EAG** is to prioritize and process human-related candidates under resource constraints.

For example:

```text
multiple detected people
  → prioritize who matters now
  → choose high-fidelity or fallback processing
  → produce usable 3D human-state information
```

Together, these patterns help convert raw signals into HIFs that may include:

```text
tracked human identity
3D skeleton
facial expression
gaze
spoken text
sentiment
spatial grounding
```

This is the basic semantic material on which higher interpretation can operate.

---

## Interpreter Sublayer

The interpreter sublayer is responsible for turning basic human-context HIFs into more explicit meanings.

In the examples developed in this section, this sublayer used:

```text
Tiered Semantic Cache / Proxy (TSC/TSP)
Adaptive Signature Learner (ASL)
```

The role of **TSC/TSP** is to resolve semantic inputs through a hierarchy of increasingly expensive or general solvers.

For example:

```text
template interpreter
  → semantic cache
  → constrained LLM interpreter
```

This allows the system to interpret language or other semantic requests efficiently and safely, while still mapping results into a closed set of supported robot meanings.

The role of **ASL** is to learn and classify temporal signatures from HIF streams.

For example:

```text
"learn this gesture as hello"
  → interpret the verbal instruction
  → observe the recent skeleton time window
  → store the visual signature as "hello"
  → classify similar future gestures
```

Together, TSC/TSP and ASL allow the Human Context layer to move beyond raw perception and into adaptive interpretation.

---

## One Possible Composition

A complete Human Context layer may therefore be understood as:




<div align="center">

<img
  src="/social-hri-framework/img/hml/human-context-layer-example.svg"
  alt="Human Context layer composition showing the Basic Input Sublayer and Interpreter Sublayer"
  width="100%"
/>

</div>
This diagram is an illustrative composition. It summarizes how the Basic Input Sublayer and Interpreter Sublayer may connect, while keeping each pattern replaceable and reusable.

```text
raw human-related signals
  → Basic Input Sublayer
      SME
      EAG
  → HumanState / Interaction HIF stream
  → Interpreter Sublayer
      TSC/TSP
      ASL
  → Interpreted Human Context HIFs
```

The final output may include both observed and interpreted human-context information.

For example:

```text
A tracked person is facing the robot.
The person said: "learn this gesture as dance".
The recent hand motion was stored as a gesture signature.
Future similar hand motions may be classified as "dance".
```

This creates a layered, inspectable, and reusable representation of human context.

---

## Why This Layer Matters

The Human Context layer is the part of the architecture that turns human presence, behavior, expression, language, and temporal patterns into structured interaction meaning.

It supports several architectural goals:

| Goal | Human Context contribution |
|---|---|
| Semantic grounding | Converts raw human signals into HIFs |
| Multimodal integration | Combines visual, audio, spatial, and temporal cues |
| Resource awareness | Uses EAG to adapt processing depth |
| Safe interpretation | Uses TSC/TSP to map inputs into supported schemas |
| Online adaptation | Uses ASL to learn new temporal signatures |
| Personalization | Supports user-specific gestures, phrases, or patterns |
| Traceability | Records how HIFs were produced, interpreted, and learned |

The layer is therefore not merely a perception stack.

It is the first socially meaningful layer of the architecture.

---

## Design Note

The compositions shown in this section are examples.

Different robots may use different sensors, different experts, different policies, and different runtime bindings.

The important architectural principle is that the layer remains modular:

```text
HIFs carry semantic information.
SME synchronizes multiple extractors.
EAG manages prioritization and resource-aware processing.
TSC/TSP resolves semantic requests through tiered reuse and escalation.
ASL learns and classifies temporal signatures.
```

Each pattern can be replaced, simplified, or extended without changing the overall purpose of the Human Context layer.

---

## Transition to Scene Context

The next layer is **Scene Context**.

The important point is that Scene Context does not require a completely new set of design patterns.

In fact, it can largely reuse the same patterns introduced in the Human Context section.

For example:

```text
SME
```

can be reused to run several scene analyzers over the same visual or spatial input:

```text
object detector
surface classifier
affordance detector
hazard detector
layout analyzer
```

And:

```text
EAG
```

can be reused to prioritize which parts of the scene deserve deeper processing:

```text
nearby objects
task-relevant objects
moving objects
objects close to humans
objects relevant to safety
```

The difference is not the architectural mechanism.

The difference is the semantic target.

In Human Context, the system asks:

```text
What is the human doing, saying, expressing, or teaching?
```

In Scene Context, the system asks:

```text
What is happening in the surrounding environment, and what parts of the scene matter for interaction?
```

Thus, Scene Context begins as a reuse-oriented layer.

It applies the same HML pattern language to the world around the human and robot.
