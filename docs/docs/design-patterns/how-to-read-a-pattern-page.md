---
title: How to Read a Pattern Page
sidebar_position: 2
---

# How to Read a Pattern Page

## Purpose

This page defines the documentation template for HRI Design Patterns.

Each pattern page should be readable in two ways:

1. As a **reusable architectural pattern**.
2. As a **possible HML composition** that can be instantiated in different HRI systems.

The goal is not to document one existing robot implementation.

The goal is to describe reusable solutions to recurring HRI architecture problems using the SOCIAL principles and HML visual language.

A pattern page should therefore answer:

```text
What recurring HRI problem does this pattern solve?
How is the solution expressed in HML?
What are the participants?
How does information flow?
What policies, gates, memory structures, or experts are involved?
Where can the pattern be reused?
What are the tradeoffs?
```

---

# Pattern Pages Are Not Implementation Manuals

A pattern is not a software package, API, ROS node, class, agent, or fixed deployment structure.

A pattern describes an architectural idea.

For example:

```text
Synchronous Multi-Extractor = multiple semantic transformers process related HIFs and are synchronized into a richer HIF.
```

This does not require:

```text
one specific detector
one specific robot
one specific middleware
one specific runtime graph
one specific model family
```

A concrete implementation may use ROS, Python services, model endpoints, behavior trees, agent tools, local AI models, cloud APIs, or any combination of them.

The pattern page should stay at the HML architectural level.

Implementation notes may be included, but they should not dominate the pattern definition.

---

# Recommended Page Structure

Each pattern page should follow the same structure whenever possible.

```text
# Pattern Name

## Intent
## Problem
## Context
## HML Structure
## Participants
## Flow
## Example Composition
## Reuse
## SOCIAL Principles Supported
## Tradeoffs
## Failure Modes
## Implementation Notes
## Related Patterns
```

Not every pattern requires all sections to be equally long.  
However, keeping the section structure stable makes the pattern catalog easier to read, compare, and extend.

---

# 1. Intent

The Intent section gives a short definition of the pattern.

It should answer:

```text
What is this pattern for?
```

Good intent statements are short and active.

Example:

```text
The Synchronous Multi-Extractor coordinates several semantic transformers operating over related input HIFs and synchronizes their outputs into a coherent enriched HIF.
```

Avoid overly implementation-specific phrasing such as:

```text
This pattern runs three ROS nodes and publishes a combined message.
```

The intent should remain reusable.

---

# 2. Problem

The Problem section explains the recurring HRI challenge.

It should answer:

```text
Why is this pattern needed?
What goes wrong without it?
```

Typical problem statements may refer to:

- temporal mismatch
- ambiguous perception
- compute/resource constraints
- stale context
- missing information
- unsafe direct execution
- social inappropriateness
- opaque reasoning
- excessive LLM escalation
- brittle hard-coded behavior

Example:

```text
In multimodal HRI, several experts may extract different semantic properties from the same interaction moment. If their outputs are merged without synchronization, the system may combine evidence from different people, different time windows, or different social situations.
```

The problem section should make clear why a naive design is insufficient.

---

# 3. Context

The Context section defines when the pattern is useful.

It should answer:

```text
When should a designer consider using this pattern?
```

Context may include:

- input type
- interaction setting
- layer in the cognitive architecture
- expected uncertainty
- resource constraints
- need for explainability
- real-time or near-real-time requirements
- whether memory, queueing, validation, or escalation is needed

Example:

```text
Use this pattern when several perception or interpretation experts must process related HIFs and their outputs must be synchronized before downstream reasoning can safely use them.
```

The context section should also say when the pattern is probably unnecessary.

Example:

```text
If a single deterministic transformer produces all required properties with stable timing, SME may be unnecessary.
```

---

# 4. HML Structure

The HML Structure section contains the main diagram of the pattern.

This diagram should use the shared HML visual language:

- HIFs flow left to right.
- Semantic Cells are shown as rounded rectangles.
- Policies enter cells from above.
- λ operators enter cells from above.
- State, memory, queues, and caches appear as supporting structures.
- Decision outcomes use diamonds.
- Pattern instances may be wrapped with clipped-corner containers.

The HML diagram should emphasize semantic structure, not low-level deployment.

## Pattern Container

When a reusable composition should be shown as a named pattern, wrap the composition in a clipped-corner container.

A detailed composition may later be referenced by a compact named container.

<div align="center">

<svg width="100%" viewBox="0 0 1180 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pattern-wrapper-title pattern-wrapper-desc">
  <title id="pattern-wrapper-title">Pattern Wrapper Notation</title>
  <desc id="pattern-wrapper-desc">
    A concrete HML composition can be wrapped as a reusable pattern instance and then referenced through a compact named pattern container.
  </desc>

  <defs>
    <marker id="arrow-pattern-wrapper" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="20" y="145" width="120" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="80" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="735" y="145" width="125" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="797.5" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <path d="M 180 35 L 650 35 L 675 60 L 675 280 L 205 280 L 180 255 Z"
        fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="8 6" />

  <text x="427.5" y="64" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#d97706">Pattern Instance</text>
  <text x="427.5" y="86" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">example of a reusable wrapped HML composition</text>

  <rect x="285" y="98" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="123" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₁</text>

  <rect x="285" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₂</text>

  <rect x="285" y="218" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="243" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₃</text>

  <rect x="510" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="556" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <line x1="140" y1="167" x2="235" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="235" y1="167" x2="255" y2="167" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="167" x2="255" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="119" x2="277" y2="119" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="255" y1="167" x2="277" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="255" y1="167" x2="255" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="239" x2="277" y2="239" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="377" y1="119" x2="445" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="119" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="377" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="377" y1="239" x2="445" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="239" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="602" y1="179" x2="727" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-wrapper)" />

  <text x="430" y="272" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">example wrapped composition: ST₁ / ST₂ / ST₃ → SG</text>

  <text x="905" y="180" textAnchor="middle" fontSize="42" fontFamily="Arial, sans-serif" fill="currentColor">=</text>

  <path d="M 955 105 L 1115 105 L 1135 125 L 1135 225 L 975 225 L 955 205 Z"
        fill="none" stroke="#d97706" strokeWidth="2" />

  <text x="1045" y="155" textAnchor="middle" fontSize="28" fontFamily="Arial, sans-serif" fill="#d97706">SME</text>
  <text x="1045" y="180" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">pattern shorthand</text>
</svg>

</div>

This notation means:

```text
A reusable HML composition can be wrapped and referred to as a named pattern.
```

The shorthand container is useful in larger layer diagrams, where expanding every pattern would make the diagram unreadable.

---

# 5. Participants

The Participants section lists the HML elements involved in the pattern.

Use a table when possible.

Recommended columns:

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF | HIF | Semantic input to the pattern |
| ST | Semantic Cell | Extracts or enriches semantic properties |
| λ expert | Operator | Provides the semantic capability |
| Policy | Policy artifact | Governs thresholds, timing, escalation, or validation |
| SG | Sync Gate | Synchronizes several HIFs |
| HRI_DB | State | Stores or retrieves persistent semantic context |
| Queue | Flow-control structure | Holds delayed or pending HIFs |

Not every pattern uses every participant.

The purpose of this section is to make the pattern auditable.

A reader should be able to identify:

```text
What enters?
What processes it?
What policies govern it?
What state is consulted?
What exits?
```

---

# 6. Flow

The Flow section explains the pattern step by step.

A good flow is short, ordered, and concrete.

Example:

```text
1. An input HIF enters the pattern.
2. Several ST cells process the input or related synchronized inputs.
3. Each ST adds one semantic property or evidence stream.
4. An SG waits for the required set of HIFs within the synchronization policy.
5. The SG emits one enriched synchronized HIF.
```

The Flow section should explain what the diagram means.

Do not rely on the diagram alone.

---

# 7. Example Composition

The Example Composition section shows one possible instantiation of the pattern.

This section is important because patterns can otherwise remain too abstract.

However, examples must be framed carefully.

Use wording such as:

```text
One possible instantiation is...
A possible layer composition may connect...
In this example composition...
This example illustrates one way to use the pattern...
```

Avoid wording such as:

```text
The system must...
The architecture is...
The robot always...
This is the implementation...
```

The example should demonstrate how the pattern could be connected, not claim that this is the only correct architecture.

Example:

```text
One possible Human Context composition uses SME to process a VideoFrame HIF through person detection, skeleton extraction, gaze estimation, and facial expression classification. The outputs are synchronized into a HumanState HIF.
```

This is a useful example, not a mandatory design.

---

# 8. Reuse

The Reuse section explains where else the pattern can appear.

Recommended format:

| Reuse Location | How the Pattern Reappears |
|---|---|
| Human Context | First introduced for multimodal human perception |
| Scene Context | Reused for object, obstacle, door, and slope extraction |
| Social Planning | Reused when several stylists generate candidate action modalities |
| Actuation | May be reused for multi-channel execution monitoring |

This section should make the catalog reusable.

A pattern may be introduced in one layer but should not be conceptually locked to that layer.

Recommended wording:

```text
First introduced in:
Reused in:
Possible later reuse:
```

---

# 9. SOCIAL Principles Supported

Each pattern page should explain how the pattern supports the SOCIAL framework.

Do not merely list the principles.

Explain the relationship.

Example:

```text
Within the SOCIAL framework, SME supports:

- S-Separated Contexts by allowing each extractor to operate as a separate semantic path before controlled synchronization.
- O-Open Declarative by making each extracted property explicit in the resulting HIF.
- C-Clear Cognition by decomposing perception into named semantic stages.
- I-Interpretable Gates by using SG policies to determine when extracted streams may be merged.
- A-Adaptive Autonomy by allowing the system to reduce fidelity or wait for better evidence when confidence is low.
- L-Layered Validation by preserving per-extractor confidence before downstream validation.
```

This section should show why the pattern belongs in the framework.

---

# 10. Tradeoffs

The Tradeoffs section explains what the pattern costs.

A useful pattern is not always the right choice.

Possible tradeoffs include:

| Tradeoff | Explanation |
|---|---|
| Latency | Synchronization or escalation may delay response |
| Compute cost | Multiple experts may be expensive |
| Complexity | More cells and policies require more configuration |
| Explainability | More traceability may require more metadata |
| Robustness | Redundancy may improve reliability but complicate arbitration |
| Resource adaptation | Lower fidelity may improve responsiveness but reduce semantic richness |
| Policy burden | Explicit governance improves safety but requires careful tuning |

A good tradeoff section helps designers decide when not to use the pattern.

---

# 11. Failure Modes

The Failure Modes section describes what can go wrong.

Examples:

- missing input HIF
- late HIF arrival
- stale context
- conflicting expert outputs
- low confidence
- model failure
- over-escalation
- under-escalation
- queue starvation
- policy misconfiguration
- incorrect memory update
- unsafe execution
- socially inappropriate timing

Each failure mode should ideally point to a mitigation strategy.

Example:

| Failure Mode | Possible Mitigation |
|---|---|
| Required HIF does not arrive | Use timeout policy and emit partial result or pending state |
| Experts disagree | Preserve disagreement and route to validation or escalation |
| LLM fallback hallucinates | Restrict input to explicit HRI_DB subset and validate output |
| Pending task never becomes ready | Apply expiration or decay policy |
| Social gate blocks too often | Review policy thresholds and context interpretation |

---

# 12. Implementation Notes

Implementation Notes may include practical considerations, but should remain secondary to the pattern definition.

Appropriate implementation notes include:

- suggested HIF fields
- configuration strategy
- policy parameters
- logging requirements
- provenance tracking
- test cases
- runtime bindings
- model replacement strategy
- local vs cloud model choice
- cache invalidation
- queue expiration
- safety auditing

Avoid turning this section into a full implementation guide.

The purpose is to help engineers instantiate the pattern without collapsing the pattern into one concrete implementation.

---

# 13. Related Patterns

The Related Patterns section links the pattern to other patterns.

Examples:

```text
SME is related to:
- EAG, because attention and resource policies may determine which extractors run.
- ASL, because learned signatures may use synchronized temporal evidence.
- SAS, because styling can also be modeled as multiple semantic outputs synchronized into a final action style.
```

This helps the catalog become a connected pattern language rather than a set of isolated pages.

---

# Diagram Style Rules for Pattern Pages

Pattern diagrams should follow the HML Diagram Conventions.

## Main Flow

Use left-to-right flow:

```text
Input HIF → Pattern → Output HIF
```

## Policy and Expert Inputs

Policies and λ operators should enter cells from above.

```text
Policy      λ
  ↓         ↓
Cell
```

## Direct Cell-to-Cell Connections

If a HIF output from one cell immediately enters the next cell, it is acceptable to connect the cells directly.

For example:

```text
ST → ST → SG
```

This is understood as:

```text
ST → HIF → ST → HIF → SG
```

The intermediate HIF does not always need to be drawn if it is obvious.

## Pattern Wrappers

Use clipped-corner containers to wrap reusable pattern instances.

Use the wrapper to clarify composition, not to imply software packaging.

## Concrete Examples

Concrete layer diagrams may simplify details.

For example, they may show:

```text
VideoFrame HIF → SME → HumanState HIF
```

instead of expanding every extractor, if the pattern was already explained earlier.

---

# Minimal Pattern Page Skeleton

The following skeleton can be copied when creating a new pattern page.

```md
---
title: Pattern Name
sidebar_position: X
---

# Pattern Name

## Intent

...

## Problem

...

## Context

...

## HML Structure

...

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| ... | ... | ... |

## Flow

1. ...
2. ...
3. ...

## Example Composition

One possible instantiation is...

## Reuse

| Reuse Location | How the Pattern Reappears |
|---|---|
| ... | ... |

## SOCIAL Principles Supported

Within the SOCIAL framework, this pattern supports:

- **S-Separated Contexts** by ...
- **O-Open Declarative** by ...
- **C-Clear Cognition** by ...
- **I-Interpretable Gates** by ...
- **A-Adaptive Autonomy** by ...
- **L-Layered Validation** by ...

## Tradeoffs

...

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| ... | ... |

## Implementation Notes

...

## Related Patterns

...
```

---

# Quality Checklist

Before adding a pattern page, check:

```text
[ ] Is the pattern described as reusable architecture rather than implementation?
[ ] Does the Intent fit in one short paragraph?
[ ] Does the Problem explain why the pattern is needed?
[ ] Does the HML diagram use the shared visual language?
[ ] Are policies and λ operators placed correctly?
[ ] Are examples framed as illustrative, not mandatory?
[ ] Are participants explicit?
[ ] Is the pattern's reuse explained?
[ ] Are SOCIAL principles explained, not merely listed?
[ ] Are tradeoffs and failure modes included?
[ ] Is the implementation section helpful but not dominant?
[ ] Are related patterns named?
```

---

# Conclusion

A pattern page should make a reusable HRI architecture understandable, inspectable, and applicable.

The best pattern pages balance three qualities:

```text
general enough to be reusable
specific enough to be useful
explicit enough to be auditable
```

This template keeps the HRI Design Pattern catalog coherent as it grows across Human Context, Scene Context, Robot Context, Context Management, Social Planning, and future Actuation patterns.
