---
title: About S.O.C.I.A.L. HML
sidebar_position: 1
---

# About S.O.C.I.A.L. HML

## What This Is

**S.O.C.I.A.L. HML** is an independent framework and pattern language for designing inspectable, socially governed, modern-AI-compatible Human-Robot Interaction architectures.

It combines:

```text
S.O.C.I.A.L. principles
HML — HRI Modeling Language
HRI design patterns
Layered context-to-action architecture
Modern AI integration patterns
```

The goal is to help researchers, engineers, and system architects describe how a robot moves from raw interaction evidence to socially validated, styled, and embodied behavior.

In simplified form:

```text
Human, Scene, and Robot Context
  → Context Management and Reasoning
  → Social Planning and Behavioral Synthesis
  → Natural Actuation and Embodiment Binding
  → feedback back into context
```

The framework is intended for systems that must be more than capable.

They must also be:

```text
inspectable
debuggable
correctable
socially aware
policy-governed
memory-aware
compatible with modern AI
```

---

## Origin and Motivation

This framework was written from the perspective of one year after the completion of the Israeli HRI consortium, a three-year applied R&D effort that ran during 2022–2025.

That period was unusually consequential for AI.

During those years, the field moved rapidly from architectures built as explicit pipelines with AI components inside them toward systems where more and more logic, code, interpretation, and behavior appear to dissolve into model weights.

This site is **not** a documentation of the consortium.

It is also **not** an official output of the consortium.

Rather, it is an independent synthesis of architectural lessons:

```text
what worked well
what was difficult to scale
what became clearer only after reflection
what should be preserved
what should be redesigned
how modern AI changes the architectural tradeoffs
```

The practical experience of building HRI architectures made one point especially clear:

```text
Human-facing robots need both capability and governance.
```

Modern models can provide impressive capability.

But HRI systems still need explicit mechanisms for context separation, memory governance, social validation, human correction, actuation control, and feedback.

---

## Why Now

The rise of foundation models, VLMs, LLMs, agents, RL policies, and end-to-end robotics systems creates a real architectural tension.

On one side, more monolithic learned systems can be powerful, adaptive, and fluent.

On the other side, HRI requires properties that do not automatically emerge from capability alone:

```text
clear responsibility boundaries
inspectable intermediate state
bounded authority
semantic memory governance
social and safety validation
human override
explainable feedback loops
```

S.O.C.I.A.L. HML emerged as an attempt to reason about this tradeoff.

The framework does not reject modern AI.

It also does not advocate a simple return to rigid classical pipelines.

Instead, it proposes a hybrid architectural discipline:

```text
use modern AI where it is strong
connect it through explicit semantic interfaces
bound its authority through gates and policies
make commitments inspectable
preserve feedback and correction paths
```

A central position of this work is:

```text
Modern AI does not make HML obsolete.

It makes semantic interfaces, responsibility boundaries,
and layered validation more important.
```

---

## Main Contributions

This documentation presents four main contributions.

### 1. S.O.C.I.A.L. Principles

The S.O.C.I.A.L. principles define architectural properties that remain important in the foundation-model era:

```text
S — Separated Contexts
O — Open Declarative representations
C — Clear Cognition
I — Interpretable Gates
A — Adaptive Autonomy
L — Layered Validation
```

These principles are not only values.

They are translated throughout the documentation into concrete mechanisms such as HIFs, semantic cells, policies, gates, memory structures, queues, and feedback loops.

### 2. HML — HRI Modeling Language

HML is a lightweight modeling language for representing semantic flow in HRI systems.

It is built around:

```text
HIFs — HRI Interaction Frames
semantic cells
λ experts and operators
policies
gates
memory
queues
feedback
```

HML does not replace ROS, behavior trees, state machines, or agent orchestration frameworks.

It operates at a higher architectural level: the level of semantic interaction flow.

### 3. HRI Design Patterns

The documentation presents a catalog of reusable design patterns for HRI architectures.

These patterns cover:

```text
human context
scene context
robot context
context management and reasoning
semantic memory
task readiness
social validation
social planning
behavioral styling
actuation
feedback
```

The purpose of the pattern catalog is to provide reusable architectural solutions rather than one fixed implementation.

### 4. Modern AI Integration

The documentation explicitly addresses how to integrate modern AI into inspectable HRI systems.

It covers:

```text
LLMs
VLMs
multimodal models
agents
RL policies
end-to-end models
video models
learned motion policies
```

The key idea is that modern AI components can serve as bounded experts, critics, candidate generators, fallbacks, shadow models, and learned executors inside HML patterns.

They should not silently own the whole HRI loop.

---

## Author

This framework was created by **Dr. Eliahu Khalastchi**.

Eliahu is a computer scientist and HRI / robotics researcher with experience in anomaly detection, autonomous systems, AI for robotics, and human-robot interaction architecture.

He led the architectural work on the HRI toolkit within the Israeli HRI consortium.

This site reflects an independent synthesis of architectural lessons and research thinking developed after that work.

---

## Relationship to the Israeli HRI Consortium

The Israeli HRI consortium provided an important practical context for the experience behind this framework.

However, this documentation is not a consortium deliverable, official report, or implementation manual.

It does not attempt to document one specific system.

It generalizes from architectural lessons learned while working on HRI systems and asks:

```text
Which architectural ideas remain useful?
Which patterns can be reused?
Which assumptions need to change in the foundation-model era?
How can modern AI be integrated without losing transparency and governance?
```

This distinction is important.

The framework is presented as an independent research-oriented pattern language, not as a description of a particular consortium implementation.

---

## Academic Paper

This documentation is part of an ongoing research effort.

A condensed academic version of the framework is being prepared for submission, with a public preprint planned after the documentation site is publicly available.

The paper will focus on the conceptual contribution of S.O.C.I.A.L. HML as a pattern language for inspectable HRI architectures in the foundation-model era.

The documentation site serves as the extended, visual, and practical companion to that academic work.

---

## How to Read This Documentation

A suggested reading path is:

```text
1. Start with the S.O.C.I.A.L. principles.
2. Learn the basic HML concepts: HIFs, λ experts, semantic cells, memory, and gates.
3. Browse the design patterns by layer.
4. Review the Modern AI section to understand how LLMs, VLMs, agents, RL, and end-to-end models fit into the architecture.
5. Use the pattern catalog as a reference for designing or analyzing HRI systems.
```

For a fast conceptual entry point, start with:

```text
HML Overview
Modern AI Integration Overview
Practical Integration Patterns
```
