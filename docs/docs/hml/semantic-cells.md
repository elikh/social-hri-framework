---
title: Semantic Cells
sidebar_position: 4
---

# Semantic Cells

## Overview

Semantic Cells are the architectural primitives of HML.

A Semantic Cell is an architectural unit that receives HIFs, applies one or more semantic operators or policies, and produces transformed HIFs, synchronized HIFs, decisions, delayed tasks, or embodied effects.

Semantic Cells connect the two previous HML concepts:

- **HIF** — the semantic carrier that flows through the system
- **λ** — the semantic operator, expert, or policy applied to that flow

In short:

```text
Semantic Cell = architectural role
Semantic Operator = expert or policy inside that role
HIF = semantic information flowing through the role
```

The purpose of Semantic Cells is to give HML a stable visual and conceptual vocabulary for describing HRI architectures.

They allow complex robotic systems to be modeled in terms of semantic responsibilities rather than implementation-specific modules.

---

# Why Semantic Cells Are Needed

Human-Robot Interaction systems contain many heterogeneous software and AI components:

- perception modules
- language interpreters
- memory queries
- social policies
- safety checks
- escalation mechanisms
- synchronization logic
- task queues
- actuation bridges

At the implementation level, these may be ROS nodes, Python classes, services, containers, model APIs, or hardware drivers.

At the architectural level, however, most of them perform a small number of recurring semantic roles:

- create a HIF from a source
- transform a HIF
- synchronize several HIFs
- choose between experts
- validate or gate a semantic transition
- execute a HIF as an external effect

Semantic Cells define these recurring roles explicitly.

This makes HRI architectures easier to document, compare, test, and reuse.

---

# Semantic Cell Visual Grammar

HML diagrams follow a simple visual grammar.

The main semantic flow moves from left to right:

```text
Input HIF → Semantic Cell → Output HIF
```

The cell may receive two independent inputs from above:

- a **policy artifact**, such as thresholds, constraints, rules, or social laws
- a **λ operator**, representing the expert, model, heuristic, or semantic implementation

The policy and the expert are intentionally shown as independent inputs.

The policy does not flow through the expert, and the expert does not define the policy.

Instead, the Semantic Cell is the binding point where the current policy and the current expert are applied to the HIF stream.

---

# Generic Semantic Cell

The following diagram defines the generic visual form of a Semantic Cell.

The policy artifact is shown as a checklist-like document.  
The expert is shown as a clean λ symbol.  
Both enter the cell from above, while HIFs flow from left to right.

<div align="center">

<svg width="760" height="300" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="generic-semantic-cell-title generic-semantic-cell-desc">
  <title id="generic-semantic-cell-title">Generic Semantic Cell</title>
  <desc id="generic-semantic-cell-desc">Input HIF flows into a Semantic Cell and exits as an output HIF. A policy icon and a lambda expert enter independently from above.</desc>

  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="125" width="135" height="54" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="107.5" y="157" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="305" y="105" width="170" height="94" rx="14" ry="14" fill="none" stroke="currentColor" stroke-width="2.1"/>
  <text x="390" y="145" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="390" y="171" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="585" y="125" width="135" height="54" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="652.5" y="157" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="175" y1="152" x2="297" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="475" y1="152" x2="577" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/>

<image href="/social-hri-framework/img/hml/policy-check.svg" x="326" y="0" width="58" height="58" preserveAspectRatio="xMidYMid meet"/>
<text x="355" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

<text x="425" y="44" text-anchor="middle" font-size="52" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
<text x="425" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

<line x1="355" y1="84" x2="355" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow)"/>
<line x1="425" y1="84" x2="425" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow)"/>
</svg>

</div>

This notation emphasizes four ideas:

- HIFs flow horizontally through the system.
- Policies and experts enter cells independently.
- The cell applies the expert under the relevant policy.
- The surrounding HIF pipeline remains stable even if the internal expert or policy changes.

---

# Cell, Operator, Policy, and Implementation

A Semantic Cell should not be confused with the expert inside it.

| Concept | Meaning |
|---|---|
| HIF | The semantic information flowing through the system |
| λ Operator | The expert, model, heuristic, or semantic computation |
| Policy | Rules, constraints, thresholds, or social laws governing execution |
| Semantic Cell | The architectural role that applies the operator and policy to HIFs |
| Implementation | The concrete software component, node, service, or class used at runtime |

This distinction is essential.

The same Semantic Cell may use different experts or policies in different deployments without changing its role in the architecture.

---

# Cells as Stable Replacement Boundaries

A Semantic Cell defines a stable semantic role.

Its internal expert, policy, thresholds, fallback behavior, and implementation binding may change without forcing upstream or downstream cells to change, as long as the cell contract remains stable.

This is especially important in a fast-moving AI landscape.

AI models improve continuously:

- STT models become more multilingual
- VLMs improve spatial grounding
- LLMs become faster or cheaper
- perception models improve robustness
- local models become competitive with cloud models
- domain-specific models outperform generic ones
- safety-approved versions replace experimental versions

A Semantic Cell allows the architecture to absorb these changes.

For example:

```text
HIF → ST[λspeech_to_text] → Text HIF
```

can remain stable even if the internal expert changes from:

```text
English STT → multilingual STT → Hebrew-specialized STT → future audio-language model
```

The rest of the HIF pipeline continues to receive a `Text HIF`.

---

# Dynamic Expert Replacement

Semantic Cells can also support dynamic expert replacement.

For example, a user may tell the robot:

```text
switch to Hebrew
```

If the user is authorized and the instruction passes validation, the system may update the active expert binding:

```text
λspeech_to_text_en → λspeech_to_text_he
```

The STT Semantic Cell continues to perform the same semantic role:

```text
AudioSnippet HIF → Text HIF
```

Only the internal expert changes.

This enables language switching, model upgrades, domain adaptation, fallback behavior, and rollback without changing the surrounding architecture.

Runtime expert replacement should always be governed by:

- authorization
- validation
- safety constraints
- compatibility checks
- versioning
- rollback mechanisms

HML supports this capability architecturally, but each implementation must decide when dynamic replacement is allowed.

---

# Externalized Policy

Policies should often be externalized from code.

When policies are stored outside the implementation, they become:

- readable
- auditable
- versionable
- editable
- deployable across robots
- easier to review by operators
- easier to test and roll back
- easier to adapt to different environments

Policies may define:

- confidence thresholds
- synchronization windows
- escalation conditions
- social rules
- safety constraints
- resource limits
- autonomy boundaries
- cultural profiles
- language preferences
- fallback behavior

For example:

```json
{
  "cell": "SpeechToTextST",
  "expert": "HebrewSTTExpert",
  "policy": {
    "language": "he",
    "min_confidence": 0.78,
    "fallback": "MultilingualSTTExpert"
  }
}
```

Externalized policy supports governable autonomy.

In advanced deployments, authorized users may update policies through controlled HRI mechanisms.

For example:

```text
From now on, do not interrupt meetings unless it is urgent.
```

Such an instruction may update a Social Opportunity policy only after:

- user authentication
- authorization
- semantic validation
- conflict checking
- logging
- rollback support

This makes policy adaptation transparent rather than hidden in code.

---

# Implementation Decoupling Example

In one practical architecture, each expert was implemented through a ROS-independent Python interface.

The ROS node did not contain the expert logic.

Instead, it was responsible for:

- receiving HIF-like messages
- loading the configured expert
- invoking a standard Python interface
- applying policy parameters
- publishing the resulting HIF

The actual expert implementation and policy were defined externally in a JSON configuration file.

The JSON configuration specified:

- which expert implementation to load
- where the implementation is located
- which thresholds to use
- which fallback expert is allowed
- which policy applies to the cell
- which runtime parameters should be passed to the expert

Conceptually:

```text
HIF Stream
    ↓
Semantic Cell Contract
    ↓
External JSON Binding and Policy
    ↓
ROS-independent Python Expert Interface
    ↓
Concrete Expert Implementation
    ↓
Updated HIF Stream
```

This separates HML-level architecture from deployment-level execution.

It also allows expert replacement, testing, simulation, and rollback without rewriting the system pipeline.

---

# Core Semantic Cells

HML defines five core Semantic Cells:

| Symbol | Name | Core Role |
|---|---|---|
| HC | HIF Creator | Create a HIF from a source |
| ST | Semantic Transformer | Transform or enrich a HIF |
| SG | Sync Gate | Synchronize multiple HIFs |
| ES | Escalation Switch | Select between experts or reasoning paths |
| HE | HIF Executor | Convert a HIF into an external or embodied effect |

These are not implementation classes.

They are semantic roles used to model HRI architectures.

---

# HC — HIF Creator

The HIF Creator creates a HIF from an external or internal source.

Signature:

```text
HC : Source → HIF
```
<div align="center">

<svg width="440" height="150" viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HIF Creator cell">
  <defs>
    <marker id="arrow-hc" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="178" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="194" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="230" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="230" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Creator</text>

  <line x1="194" y1="55" x2="194" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hc)"/>
  <line x1="230" y1="55" x2="230" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hc)"/>

  <rect x="20" y="85" width="110" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="75" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Source / Sensor</text>

  <rect x="180" y="68" width="80" height="68" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="220" y="108" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">HC</text>

  <rect x="330" y="85" width="90" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="375" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <line x1="130" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hc)"/>
  <line x1="260" y1="104" x2="322" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hc)"/>
</svg>

</div>

Examples:

```text
camera → HC → VideoFrame HIF
microphone → HC → AudioSnippet HIF
battery monitor → HC → RobotState HIF
database event → HC → Fact HIF
timer → HC → SystemEvent HIF
```

Typical sources include:

- camera
- microphone
- LiDAR
- keyboard input
- resource monitor
- database event
- clock or timer
- internal system event
- external API
- human input

Important terminology note:

```text
HC = HIF Creator
```

In HML documentation, **Human Context** should be written explicitly and should not be abbreviated as HC, to avoid confusion.

---

# ST — Semantic Transformer

A Semantic Transformer receives a HIF and returns a transformed or enriched HIF.

Signature:

```text
ST : HIF → HIF | HIF+
```
<div align="center">

<svg width="440" height="150" viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Semantic Transformer cell">
  <defs>
    <marker id="arrow-st" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="178" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="194" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="230" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="230" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="194" y1="55" x2="194" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-st)"/>
  <line x1="230" y1="55" x2="230" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-st)"/>

  <rect x="20" y="85" width="90" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="65" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="180" y="68" width="80" height="68" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="220" y="108" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">ST</text>

  <rect x="330" y="85" width="90" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="375" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF / HIF+</text>

  <line x1="110" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-st)"/>
  <line x1="260" y1="104" x2="322" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-st)"/>
</svg>

</div>

A Semantic Transformer usually applies one semantic operator:

```text
ST[λexpert]
```

Examples:

```text
VideoFrame HIF → Person Detector ST → HIF + persons[]
Text HIF → Intent Parser ST → Instruction HIF
Instruction HIF → Missing Info Detector ST → HIF + missing_information[]
RobotState HIF → Integrity Analyzer ST → HIF + integrity_score
```

A Semantic Transformer may:

- add properties
- modify properties
- change the HIF type
- normalize content
- add confidence
- add processing history
- detect missing information
- prepare the HIF for later validation

An ST usually does not create embodied effects directly.

It transforms semantic representation.

---

# SG — Sync Gate

A Sync Gate synchronizes multiple HIFs into a single richer HIF.

Signature:

```text
SG : HIFⁿ → HIF
```

or:

```text
SG[policy, λsync] : {HIF₁, HIF₂, ..., HIFₙ} → synchronized HIF
```

<div align="center">

<svg width="500" height="185" viewBox="0 0 500 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sync Gate cell">
  <defs>
    <marker id="arrow-sg" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and lambda inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="210" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="226" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="268" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="268" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Sync</text>

  <line x1="226" y1="55" x2="226" y2="74" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-sg)"/>
  <line x1="268" y1="55" x2="268" y2="74" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-sg)"/>

  <!-- Staggered input HIFs -->
  <rect x="25" y="65" width="82" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="66" y="85" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="45" y="103" width="82" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="86" y="123" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="65" y="141" width="82" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="106" y="161" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- Sync Gate -->
  <rect x="205" y="74" width="90" height="78" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="250" y="119" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">SG</text>

  <!-- Output -->
  <rect x="370" y="94" width="105" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="422.5" y="118" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Synced HIF</text>

  <!-- Input arrows -->
  <line x1="107" y1="80" x2="197" y2="96" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-sg)"/>
  <line x1="127" y1="118" x2="197" y2="113" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-sg)"/>
  <line x1="147" y1="156" x2="197" y2="132" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-sg)"/>

  <!-- Output arrow -->
  <line x1="295" y1="113" x2="362" y2="113" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-sg)"/>
</svg>

</div>
The staggered HIF inputs indicate that an SG receives multiple HIFs that may arrive from different streams, experts, or temporal windows. The SG does not merely concatenate them. It applies a synchronization policy that determines whether they belong to the same interaction moment and whether they should be merged, delayed, rejected, or kept separate.
The output is shown as `Synced HIF` because the SG produces a unified semantic frame whose properties are temporally and contextually aligned.

Examples:

```text
skeleton HIF + gaze HIF + expression HIF → HumanState HIF
speech HIF + pointing gesture HIF → Multimodal Instruction HIF
Human Context HIF + Scene Context HIF + Robot Context HIF → Unified Context HIF
battery HIF + CPU HIF + sensor health HIF → Self-State HIF
```

A Sync Gate is not merely a technical merge.

It applies a synchronization policy.

It may ask:

- Do these HIFs refer to the same interaction moment?
- Are they close enough in time?
- Do they belong to the same person?
- Are they semantically compatible?
- Should the system wait for another HIF?
- Should the system reject the synchronization?
- Should the system split the interaction into separate frames?

Sync Gates are essential for preventing temporal hallucinations and semantic ghosting.

---

# ES — Escalation Switch

An Escalation Switch selects between multiple semantic operators or reasoning paths.

Signature:

```text
ES : HIF × [λ₁, λ₂, ..., λₙ] → HIF | Decision
```
<div align="center">

<svg width="500" height="165" viewBox="0 0 500 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Escalation Switch cell">
  <defs>
    <marker id="arrow-es" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and expert stack inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="208" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="224" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="276" y="28" text-anchor="middle" font-size="25" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ₁ λ₂ λₙ</text>
  <text x="276" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Expert Stack</text>

  <line x1="224" y1="55" x2="224" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-es)"/>
  <line x1="276" y1="55" x2="276" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-es)"/>

  <!-- Input HIF -->
  <rect x="25" y="90" width="95" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="72.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- Escalation Switch -->
  <rect x="205" y="72" width="95" height="74" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="252.5" y="115" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">ES</text>

  <!-- Output -->
  <rect x="365" y="90" width="115" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="422.5" y="114" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF / Decision</text>

  <!-- Flow arrows -->
  <line x1="120" y1="109" x2="197" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-es)"/>
  <line x1="300" y1="109" x2="357" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-es)"/>
</svg>

</div>

The expert stack indicates that an ES may choose between multiple operators, try them in sequence, or escalate from cheaper and more deterministic experts to more expensive or generative experts.

The escalation policy determines when to stop, when to retry, when to fall back, and when to escalate.
An ES does not imply that all experts are executed. It represents controlled expert selection under an explicit escalation policy.

Examples:

```text
Text HIF → ES[rule parser, cache, LLM] → Instruction HIF
ActionRequest HIF → ES[social heuristic, LLM evaluator] → pass / modify / block
Object Query HIF → ES[DB lookup, phonetic match, spatial LLM] → Object ID
```

The ES may choose an expert based on:

- confidence
- latency
- cost
- resource availability
- safety level
- task priority
- social relevance
- previous failures
- user preference
- autonomy level

The ES operationalizes Incremental Intelligence.
An Escalation Switch selects between multiple semantic operators or reasoning paths under an explicit escalation policy.
The ES may execute one expert, several experts in sequence, or a fallback chain. The policy defines the escalation conditions.
It allows the system to start with simple, fast, cheap, and explainable methods, and escalate only when needed.

---

# HE — HIF Executor

A HIF Executor converts a HIF into an external or embodied effect.

Signature:

```text
HE : HIF → Effect
```
<div align="center">

<svg width="500" height="165" viewBox="0 0 500 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HIF Executor cell">
  <defs>
    <marker id="arrow-he" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and execution operator inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="208" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="224" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="276" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="276" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Executor</text>

  <line x1="224" y1="55" x2="224" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-he)"/>
  <line x1="276" y1="55" x2="276" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-he)"/>

  <!-- Input HIF -->
  <rect x="25" y="90" width="95" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="72.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- HIF Executor -->
  <rect x="205" y="72" width="95" height="74" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="252.5" y="115" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">HE</text>

  <!-- Output Effect -->
  <rect x="365" y="90" width="115" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="422.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Effect</text>

  <!-- Flow arrows -->
  <line x1="120" y1="109" x2="197" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-he)"/>
  <line x1="300" y1="109" x2="357" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-he)"/>
</svg>

</div>

The output is shown as `Effect` rather than `HIF` because an HE crosses the boundary between semantic reasoning and execution. The effect may be physical, communicative, computational, or external.

Examples include spoken speech, robot motion, a navigation command, a UI notification, a database-side action, a user-code execution request, or an emergency stop.

The policy input is especially important for HE cells because execution should be constrained by safety rules, permissions, actuator limits, autonomy state, and social context.

Unlike an ST, which transforms semantic representation, an HE commits a validated HIF into an external or embodied effect.
An HE should normally appear late in the pipeline, after relevant validation layers have already approved the HIF for execution.

Examples:

```text
SpeechRequest HIF → Speech HE → spoken sentence
NavigationGoal HIF → Motion HE → robot movement
EmergencyStop HIF → Safety HE → stop command
UIMessage HIF → Display HE → screen notification
CodeExecution HIF → User-code HE → executed function
```

HE is a boundary between semantic reasoning and real-world effect.

Before HE, the system is still reasoning, validating, and synthesizing behavior.

After HE, the system changes the world, the robot, the user interface, or another external system.

For this reason, HE should generally be reached only after appropriate validation layers.

---

# Gate as a Role

A gate is not necessarily a separate primitive cell.

In HML, a gate is a semantic decision role that may be played by different cells or patterns.

A gate may produce outcomes such as:

```text
pass
modify
delay
block
escalate
clarify
reduce_autonomy
emergency_stop
```

Examples:

- An ST may mark a HIF as invalid.
- An SG may wait until synchronized evidence arrives.
- An ES may escalate to a stronger expert.
- A TPR may move a task into a pending queue.
- An SCV may block a socially inappropriate action.
- A SIAH component may issue an emergency stop.

This keeps the modeling language flexible.

Rather than forcing every decision point into a separate symbol, HML allows gate behavior to emerge from the semantic role being performed.

<div align="center">

<svg width="560" height="210" viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Policy Gate decision notation">
  <defs>
    <marker id="arrow-gate" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and lambda inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="218" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="234" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="276" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="276" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Gate</text>

  <line x1="234" y1="55" x2="234" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>
  <line x1="276" y1="55" x2="276" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>

  <!-- Input HIF -->
  <rect x="25" y="90" width="95" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="72.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- ST as gate -->
  <rect x="215" y="72" width="85" height="74" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="257.5" y="108" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">ST</text>
  <text x="257.5" y="128" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">as Gate</text>

  <!-- Decision diamond -->
  <polygon points="390,109 425,78 460,109 425,140" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="425" y="114" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Decision</text>

  <!-- Outputs -->
  <rect x="475" y="55" width="65" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="507.5" y="75" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">pass</text>

  <rect x="475" y="132" width="65" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="507.5" y="152" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">block</text>

  <!-- Flow arrows -->
  <line x1="120" y1="109" x2="207" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-gate)"/>
  <line x1="300" y1="109" x2="382" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-gate)"/>

  <line x1="460" y1="101" x2="468" y2="70" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>
  <line x1="460" y1="117" x2="468" y2="147" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>
</svg>

</div>
The diamond represents the branching decision produced by the gate role. It does not imply that the diamond is a separate primitive cell. The decision may be produced by an ST, SG, ES, or a higher-level pattern.

## Gate Output Notation

When a Semantic Cell acts as a gate, its output may be represented as a decision diamond.

The diamond is not a separate reasoning module by itself. It is a visual notation for the branching decision produced by the cell or pattern.

For example, an ST may evaluate a HIF against a policy and produce a gate decision:

```text
HIF → Policy Gate ST → Decision
```

The decision may branch into outcomes such as:

```text
pass
modify
delay
block
escalate
clarify
reduce_autonomy
emergency_stop
```

This notation is useful for documenting patterns such as HRI_DB Handler, Consistency Evaluator, Query Social Handler, Social Convention Validator, and System Integrity & Agency Handler, where the architectural logic depends on explicit semantic branching.

---

# Semantic Cell vs Implementation Component

A Semantic Cell is not necessarily:

- a ROS node
- a Python class
- a microservice
- a process
- a container
- a hardware component
- a model server
- a single function

A Semantic Cell describes semantic responsibility.

An implementation component describes deployment topology.

Possible mappings include:

| HML Cell | Possible Implementation |
|---|---|
| One ST | One ROS node |
| Several STs | One ROS node with several experts |
| One ES | A Python orchestrator |
| One SG | A stream synchronization service |
| One HE | A robot actuator bridge |
| One cell | A cloud API wrapper |
| One cell | A local plugin loaded from configuration |

The same HML architecture may be implemented in different runtime systems.

The diagram should remain stable if the semantic responsibilities remain stable.

---

# Cell Contract

Each Semantic Cell should ideally define a cell contract.

A cell contract may include:

| Field | Meaning |
|---|---|
| `cell_name` | Name of the cell |
| `cell_type` | HC, ST, SG, ES, or HE |
| `semantic_role` | What the cell is responsible for |
| `input_hifs` | Expected input HIF types |
| `output_hifs` | Expected output HIF types |
| `operators` | Internal λ operators |
| `policies` | Applicable policy artifacts |
| `side_effects` | Reads, writes, actions, or external calls |
| `timing_behavior` | Sync, async, blocking, streaming, delayed |
| `failure_behavior` | What happens when the cell fails |
| `history_update` | What is written to processing history |

Example:

```text
Cell:
  PersonDetectorST

Type:
  ST

Input:
  VideoFrame HIF

Operator:
  λperson_detector

Policy:
  confidence_threshold >= 0.75

Output:
  VideoFrame HIF + properties.persons[]

Failure:
  no persons detected / low confidence

History:
  add person_detector result to processing_history
```

Cell contracts make diagrams testable and implementable.

---

# Pattern Composition Preview

HRI Design Patterns are compositions of Semantic Cells.

Examples:

| Pattern | HML Composition |
|---|---|
| Synchronous Multi-Extractor | HC + parallel STs + SG |
| Elastic Attention Governor | Priority SG + resource-aware ES |
| Tiered Semantic Cache | ES over rule, cache, and LLM operators |
| Adaptive Signature Learner | Time-series window + SG + learning/classification ST |
| Context Novelty Extractor | Context unification SG + novelty extraction gate |
| HRI_DB Handler | ES-mediated query/update over declarative memory |
| Task Prerequisite Resolver | Queue + missing-info ST + Query Social Handler + pending queue |
| Social Convention Validator | Consistency evaluation + social acceptance ES |
| System Integrity & Agency Handler | resource HC + self-state SG + integrity ES |
| Social Action Stylist | parallel styling STs + SG |
| Late-Binding Behavioral Choreographer | Social Opportunity TPR + Social Action Stylist |

This shows that the patterns are not arbitrary diagrams.

They are reusable compositions of a small semantic vocabulary.

---
# Design Guidelines

When using Semantic Cells, the goal is to keep the HML diagram semantically clear, implementation-independent, and easy to evolve.

## Keep the Cell Role Stable

A Semantic Cell should represent a stable semantic responsibility.

For example, a `SpeechToTextST` should continue to mean:

~~~text
AudioSnippet HIF → Text HIF
~~~

even if the internal STT model changes.

The cell contract should remain stable while the implementation evolves.

---

## Keep Experts Replaceable

The expert inside a cell should be replaceable as long as it satisfies the cell contract.

For example:

~~~text
λspeech_to_text_en → λspeech_to_text_he
~~~

should not require changes to the upstream microphone HC or the downstream intent parser ST, as long as the cell still outputs a valid `Text HIF`.

This supports model upgrades, rollback, language switching, simulation, and deployment-specific expert selection.

---

## Keep Policies External When Possible

Policies should preferably be externalized from code.

This makes them:

- readable
- auditable
- versionable
- editable
- testable
- easier to roll back

Examples include confidence thresholds, synchronization windows, safety limits, social rules, escalation conditions, and autonomy boundaries.

External policy also supports future HRI mechanisms where authorized users may update policy through natural interaction, such as voice commands.

---

## Do Not Confuse Cell and Implementation

A Semantic Cell is a modeling abstraction, not necessarily a runtime component.

One cell may be implemented as:

- a ROS node
- a Python class
- a plugin
- a service
- a local model wrapper
- a cloud API call
- part of a larger orchestration process

Likewise, one runtime component may implement several Semantic Cells.

The HML diagram should describe semantic responsibility, not deployment topology.

---

## Keep Policy and Expert Inputs Independent

When drawing a Semantic Cell, policy and expert inputs should enter the cell independently.

The policy does not flow through the expert, and the expert does not define the policy.

Instead, the cell binds them together:

~~~text
Policy + λ Expert + Input HIF → Semantic Cell → Output
~~~

This makes it possible to replace policies and experts independently.

---

## Record Important Processing History

Cells that perform meaningful semantic operations should update the HIF processing history.

This is especially important when a cell:

- changes the HIF type
- adds high-level semantic properties
- makes a gate decision
- escalates to another expert
- invokes an LLM
- modifies an action request
- blocks or delays execution

Processing history supports explainability, debugging, auditing, and safety review.

---

## Make Gate Outcomes Explicit

If a cell acts as a gate, its outcome should be visible.

Typical outcomes include:

~~~text
pass
modify
delay
block
escalate
clarify
reduce_autonomy
emergency_stop
~~~

When the gate creates a branch in the architecture, the output may be shown using a decision diamond.

The diamond represents the branching decision, not a separate primitive cell.

---

## Avoid Direct HIF-to-Effect Shortcuts

Embodied or external effects should normally pass through validation before reaching a HIF Executor.

For example, an `ActionRequest HIF` should not directly become robot motion unless relevant safety, social, autonomy, and resource constraints have been checked.

This is especially important for physical robots operating around humans.

---

## Preserve Left-to-Right HIF Flow

HML diagrams should keep the main HIF flow visually clear.

The recommended convention is:

~~~text
Input HIF → Semantic Cell → Output HIF / Decision / Effect
~~~

Policies and experts enter from above.

Memory, cache, database, or external state may be shown as side inputs when needed.

This keeps diagrams readable and consistent across design patterns.

---

## Prefer Small Composable Cells

A Semantic Cell should perform a clear semantic role.

Avoid creating cells that combine too many unrelated responsibilities.

For example, instead of one large component that performs perception, intent parsing, social validation, and execution, prefer a composition of smaller cells:

~~~text
HC → ST → SG → ES → Gate → HE
~~~

This improves modularity, replaceability, testing, and explanation.

---

## Use Cell Contracts for Reusable Patterns

When a cell participates in a reusable HRI Design Pattern, define its contract explicitly.

A useful cell contract includes:

- cell type
- input HIF type
- output HIF type
- internal operator
- policy input
- expected properties
- confidence behavior
- failure behavior
- side effects
- processing history updates

This makes the pattern easier to implement, compare, and reuse across robots.

---

# Conclusion

Semantic Cells are the architectural primitives of HML.

They define how HIFs are:

- created
- transformed
- synchronized
- routed
- escalated
- validated
- delayed
- executed

They also provide stable replacement boundaries between high-level HRI architecture and low-level implementation.

By separating cell role, semantic operator, policy, and implementation binding, HML enables architectures that are:

- modular
- explainable
- configurable
- testable
- replaceable
- model-agnostic
- middleware-independent
- suitable for rapidly evolving AI systems

Semantic Cells therefore form the visual and structural grammar from which HRI Design Patterns are composed.
