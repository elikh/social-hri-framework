---
title: HML Diagram Conventions
sidebar_position: 3
---

# HML Diagram Conventions

## Overview

HML Diagram Conventions define how HML visual symbols should be composed into readable architectural diagrams.

The **HML Visual Dictionary** defines the symbols.  
This page defines the **composition rules**.

In short:

~~~text
Visual Dictionary = what each symbol means
Diagram Conventions = how symbols are connected into diagrams
~~~

The goal is to make HML diagrams consistent across documentation, design patterns, implementation notes, and future academic publications.

A reader should be able to look at an HML diagram and quickly understand:

- what information flows through the system
- which cells process the flow
- which policies govern the flow
- which experts are invoked
- where memory or state is consulted
- where decisions, gates, or validation branches occur
- where semantic information becomes embodied or external action

---

# 1. Basic Reading Direction

The default reading direction of an HML diagram is:

~~~text
left → right
~~~

The main horizontal flow usually represents a HIF or a stream of HIFs.

Policies, experts, and semantic operators usually enter from above.  
State, memory, queues, caches, and context structures usually appear as side structures.  
External or embodied effects usually appear after a HIF Executor.

<div align="center">

<svg width="100%" viewBox="0 0 900 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="basic-reading-title basic-reading-desc">
  <title id="basic-reading-title">Basic HML Reading Direction</title>
  <desc id="basic-reading-desc">A HIF flows from left to right through a Semantic Cell. Policy and lambda enter from above. State may support the cell from below. The output may later become an external effect.</desc>

  <defs>
    <marker id="arrow-basic-reading" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="145" width="140" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="110" y="177" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="355" y="120" width="170" height="104" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
  <text x="440" y="164" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="440" y="190" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="720" y="145" width="140" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="790" y="177" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="180" y1="172" x2="347" y2="172" stroke="currentColor" strokeWidth="1.7" markerEnd="url(#arrow-basic-reading)" />
  <line x1="525" y1="172" x2="712" y2="172" stroke="currentColor" strokeWidth="1.7" markerEnd="url(#arrow-basic-reading)" />

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="378" y="20" width="48" height="48" preserveAspectRatio="xMidYMid meet" />
  <text x="402" y="85" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="480" y="60" textAnchor="middle" fontSize="46" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="480" y="85" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="402" y1="94" x2="402" y2="120" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-basic-reading)" />
  <line x1="480" y1="94" x2="480" y2="120" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-basic-reading)" />

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="402" y="245" width="76" height="46" preserveAspectRatio="xMidYMid meet" />
  <text x="440" y="302" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">State / Memory</text>
  <line x1="440" y1="245" x2="440" y2="232" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-basic-reading)" />
</svg>

</div>

This convention means that the reader should first follow the HIF flow, then inspect policy, expert, and state dependencies.

---

# 2. Cell Composition Convention

A Semantic Cell is the architectural unit that binds:

- incoming HIFs
- a policy artifact
- one or more semantic operators
- selected context or state, when needed
- routing and failure behavior

The policy and the operator should enter the cell independently.

Do not draw:

~~~text
Policy → λ → Cell
~~~

Prefer:

~~~text
Policy      λ
  ↓         ↓
Semantic Cell
~~~

<div align="center">

<svg width="100%" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cell-composition-title cell-composition-desc">
  <title id="cell-composition-title">Cell Composition Convention</title>
  <desc id="cell-composition-desc">Policy and lambda enter the semantic cell independently from above. HIFs flow horizontally through the cell.</desc>

  <defs>
    <marker id="arrow-cell-composition" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="130" width="135" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="107.5" y="162" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="305" y="110" width="170" height="94" rx="14" fill="none" stroke="currentColor" strokeWidth="2.1" />
  <text x="390" y="150" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="390" y="176" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="585" y="130" width="135" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="652.5" y="162" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="175" y1="157" x2="297" y2="157" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-cell-composition)" />
  <line x1="475" y1="157" x2="577" y2="157" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-cell-composition)" />

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="326" y="5" width="58" height="58" preserveAspectRatio="xMidYMid meet" />
  <text x="355" y="79" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="425" y="49" textAnchor="middle" fontSize="52" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="425" y="79" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="355" y1="89" x2="355" y2="110" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-cell-composition)" />
  <line x1="425" y1="89" x2="425" y2="110" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-cell-composition)" />
</svg>

</div>

This convention is important because policy and expertise are separate concerns.

The operator provides capability.  
The cell decides how and when that capability is invoked under policy.

---

# 3. Operator vs Cell Convention

A semantic operator is not the same thing as a Semantic Cell.

~~~text
λ = replaceable semantic expert / computation
Semantic Cell = policy-aware invocation boundary
~~~

The operator should not implicitly own the system policy or global context.

Instead:

- the cell selects the relevant operator
- the cell applies the relevant policy
- the cell selects or prepares context
- the cell passes explicit inputs or parameters
- the cell routes the result
- the cell records provenance and failure behavior

This convention keeps HML aligned with modular engineering practice.

For example, a person detector should remain a replaceable expert:

~~~text
λperson_detector(frame, threshold?) → persons[]
~~~

It should not need to know why the frame was selected, which ROS node invoked it, which social task is active, or which downstream pattern will use the result.

Those responsibilities belong to the cell or pattern that invokes it.

---

# 4. Gate and Decision Conventions

A gate is a **semantic decision role**.

It is not necessarily a separate primitive cell.

A gate may be implemented by a Semantic Transformer, Sync Gate, Escalation Switch, HIF Executor, or a larger pattern.

Use a **diamond** when a diagram needs to show branching outcomes.

Common branch labels include:

~~~text
pass / block
ready / pending
hit / miss
consistent / inconsistent
safe / unsafe
valid / invalid
clarify / execute
escalate / continue
~~~

<div align="center">

<svg width="100%" viewBox="0 0 820 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="gate-decision-title gate-decision-desc">
  <title id="gate-decision-title">Gate and Decision Convention</title>
  <desc id="gate-decision-desc">A HIF enters a gate-like semantic role and branches through a decision diamond into pass, modify, or block outcomes.</desc>

  <defs>
    <marker id="arrow-gate-decision" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="100" width="120" height="46" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="95" y="128" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="240" y="82" width="135" height="82" rx="14" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="307.5" y="116" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Gate-like</text>
  <text x="307.5" y="140" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Cell / Role</text>

  <polygon points="500,123 555,82 610,123 555,164" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="555" y="128" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Decision</text>

  <rect x="685" y="35" width="100" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
  <text x="735" y="58" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">pass</text>

  <rect x="685" y="105" width="100" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
  <text x="735" y="128" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">modify</text>

  <rect x="685" y="175" width="100" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
  <text x="735" y="198" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">block</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="265" y="0" width="42" height="42" preserveAspectRatio="xMidYMid meet" />
  <text x="286" y="58" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>
  <text x="335" y="36" textAnchor="middle" fontSize="34" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="335" y="58" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Evaluator</text>

  <line x1="155" y1="123" x2="232" y2="123" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-gate-decision)" />
  <line x1="375" y1="123" x2="492" y2="123" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-gate-decision)" />

  <line x1="610" y1="112" x2="677" y2="53" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-gate-decision)" />
  <line x1="610" y1="123" x2="677" y2="123" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-gate-decision)" />
  <line x1="610" y1="134" x2="677" y2="193" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-gate-decision)" />

  <line x1="286" y1="66" x2="286" y2="82" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-gate-decision)" />
  <line x1="335" y1="66" x2="335" y2="82" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-gate-decision)" />
</svg>

</div>

The diamond shows the branching outcome.  
The gate role explains why a transition was allowed, modified, delayed, escalated, or blocked.

---

# 5. State and Memory Placement

State and memory structures should not usually be drawn as if they are ordinary HIF flow elements.

They may appear as:

- side inputs to a Semantic Cell
- side outputs from a Semantic Cell
- stores updated by a Semantic Cell
- triggers that create new HIFs
- persistent structures that influence later reasoning

Typical state structures include:

- HRI_DB
- Semantic Cache
- Session Context
- Buffer
- Queue
- Prioritized Queue
- Pending Queue
- Time-Series Window

<div align="center">

<svg width="100%" viewBox="0 0 880 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="state-placement-title state-placement-desc">
  <title id="state-placement-title">State and Memory Placement</title>
  <desc id="state-placement-desc">State structures such as HRI_DB, cache, and pending queues are shown as side structures that support or receive updates from a semantic cell.</desc>

  <defs>
    <marker id="arrow-state-placement" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="125" width="130" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="105" y="155" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="355" y="105" width="160" height="90" rx="14" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="435" y="142" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="435" y="167" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="710" y="125" width="130" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="775" y="155" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="170" y1="150" x2="347" y2="150" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-state-placement)" />
  <line x1="515" y1="150" x2="702" y2="150" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-state-placement)" />

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="235" y="245" width="68" height="44" preserveAspectRatio="xMidYMid meet" />
  <text x="269" y="305" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HRI_DB</text>

  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="405" y="245" width="68" height="44" preserveAspectRatio="xMidYMid meet" />
  <text x="439" y="305" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Cache</text>

  <image href="/social-hri-framework/img/hml/pending-queue.svg" x="585" y="240" width="92" height="54" preserveAspectRatio="xMidYMid meet" />
  <text x="631" y="305" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Pending Queue</text>

  <line x1="290" y1="245" x2="385" y2="195" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-state-placement)" />
  <line x1="425" y1="195" x2="295" y2="250" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-state-placement)" />

  <line x1="440" y1="245" x2="440" y2="203" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-state-placement)" />
  <line x1="465" y1="195" x2="465" y2="245" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-state-placement)" />

  <line x1="625" y1="240" x2="495" y2="195" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-state-placement)" />
</svg>

</div>

This convention keeps the main HIF flow readable while still showing that persistent or temporary state participates in the architecture.

---

# 6. Arrow Semantics

Different arrows should communicate different kinds of architectural relationships.

| Arrow Style | Meaning | Typical Use |
|---|---|---|
| Solid arrow | Main semantic flow | HIF flow, HIF stream, effect flow |
| Top-down solid arrow | Cell input | Policy or λ entering a Semantic Cell |
| Dashed arrow | Binding, invocation, non-HIF dependency, or optional relation | External operator binding, configuration dependency |
| Branch arrow | Outcome of a decision | pass, block, hit, miss, ready, pending |
| Bidirectional arrows | Read/write relation | HRI_DB query/update, cache lookup/update |
| Return arrow | Reprocessing or resumption | pending queue recheck, fact-triggered task promotion |

Use bidirectional arrows carefully.  
If a relationship has different read and write semantics, prefer two separate arrows with labels.

---

# 7. Pattern Diagram Levels

HRI Design Patterns should usually be shown at two levels.

## Abstract HML Pattern

The abstract diagram shows the reusable architectural structure.

Example:

~~~text
HIF → ST₁ / ST₂ / ST₃ → SG → enriched HIF
~~~

This level should avoid robot-specific implementation details.

## Concrete Example

The concrete diagram shows a specific instantiation.

Example:

~~~text
VideoFrame HIF
  → Person Detector ST
  → Skeleton Detector ST
  → Gaze Detector ST
  → Aggregator SG
  → HumanState HIF
~~~

This level may include:

- concrete input types
- concrete experts
- concrete policies
- domain-specific state structures
- robot-specific output effects

The pattern page should make clear which part is generic and which part is an example.

---

# 8. Abstract vs Runtime Diagrams

HML diagrams are architectural diagrams, not necessarily runtime graphs.

A single Semantic Cell may correspond to:

- one ROS node
- multiple ROS nodes
- a Python class
- a service call
- an agent tool
- a model endpoint
- a configuration binding
- a set of cooperating modules

Conversely, one runtime component may implement several HML roles.

Therefore, avoid interpreting an HML diagram as a one-to-one deployment diagram.

HML answers:

~~~text
What semantic role is being performed?
~~~

not necessarily:

~~~text
Which process, container, or node performs it?
~~~

Runtime binding may be documented separately.

---

# 9. Recommended Layout Rules

For readable diagrams:

- Keep the main HIF flow horizontal whenever possible.
- Place policy and expert inputs above the cell.
- Place state structures below or beside the cell.
- Use diamonds only when an actual branch is shown.
- Use labels on non-obvious arrows.
- Avoid long crossing arrows.
- Use two-row layouts for long pipelines.
- Prefer short diagrams on documentation pages and larger diagrams for slides.
- Keep abstract diagrams technology-neutral.
- Put implementation-specific details in examples or implementation notes.

---

# 10. Anti-Patterns

Avoid the following diagrammatic anti-patterns.

## Policy Hidden Inside an Operator

Avoid:

~~~text
Policy → λ → Cell
~~~

Prefer independent inputs:

~~~text
Policy      λ
  ↓         ↓
Cell
~~~

## Global State Everywhere

Avoid diagrams where every component reads and writes a global state store.

Prefer bounded state access through explicit cells or handlers.

## LLM Directly to Action

Avoid:

~~~text
LLM → Robot Action
~~~

Prefer:

~~~text
LLM candidate → validation gates → executable HIF → HE → effect
~~~

## Mermaid-Only Box Diagrams

Mermaid is useful for early sketches, but final documentation diagrams should use the HML visual grammar when possible.

## Unlabeled Branches

Avoid diamonds whose outputs are not labeled.

A gate should expose what decision was made and why the branch was selected.

---

# 11. Minimal Pattern Diagram Template

Most HRI Design Pattern diagrams can follow this abstract structure:

<div align="center">

<svg width="100%" viewBox="0 0 920 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pattern-template-title pattern-template-desc">
  <title id="pattern-template-title">Minimal HML Pattern Diagram Template</title>
  <desc id="pattern-template-desc">A reusable pattern diagram template showing input HIF, semantic cell, decision, optional state, and output HIF or effect.</desc>

  <defs>
    <marker id="arrow-pattern-template" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="145" width="120" height="46" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="95" y="173" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="240" y="125" width="130" height="86" rx="14" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="305" y="160" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="305" y="184" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <polygon points="500,168 550,130 600,168 550,206" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="550" y="173" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">Decision</text>

  <rect x="720" y="145" width="145" height="46" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="792.5" y="173" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF / Effect</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="258" y="20" width="42" height="42" preserveAspectRatio="xMidYMid meet" />
  <text x="279" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="332" y="55" textAnchor="middle" fontSize="36" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="332" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Expert</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="270" y="250" width="70" height="44" preserveAspectRatio="xMidYMid meet" />
  <text x="305" y="310" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Optional State</text>

  <line x1="155" y1="168" x2="232" y2="168" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-template)" />
  <line x1="370" y1="168" x2="492" y2="168" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-template)" />
  <line x1="600" y1="168" x2="712" y2="168" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-template)" />

  <line x1="279" y1="86" x2="279" y2="125" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-pattern-template)" />
  <line x1="332" y1="86" x2="332" y2="125" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-pattern-template)" />

  <line x1="305" y1="250" x2="305" y2="218" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-pattern-template)" />
</svg>

</div>

A pattern-specific diagram should modify this template only as needed.

Examples:

- remove the decision diamond if there is no branching
- replace HRI_DB with cache, queue, or time-series window
- use multiple STs when the pattern performs parallel extraction
- use an ES when the pattern selects among experts
- use an SG when the pattern synchronizes multiple HIFs
- use an HE when the pattern commits to an external or embodied effect

---

# Conclusion

HML Diagram Conventions define how the visual symbols should be composed into readable architectural diagrams.

The most important conventions are:

~~~text
HIFs flow left to right.
Policies and λ operators enter cells from above.
Cells bind policy, operator, context, and HIF flow.
State and memory are explicit supporting structures.
Diamonds represent decision outcomes, not primitive cells.
Design pattern diagrams should separate abstract structure from concrete examples.
~~~

These conventions make HML diagrams consistent, auditable, and reusable across the SOCIAL framework and the HRI Design Patterns.
