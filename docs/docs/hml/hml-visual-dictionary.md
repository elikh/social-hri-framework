---
title: HML Visual Dictionary
sidebar_position: 2
---

# HML Visual Dictionary

## Overview

The HML Visual Dictionary defines the shared visual notation used throughout HML diagrams.

The goal is to make HML diagrams consistent, reusable, and easy to update. Whenever a symbol is represented by an icon, the documentation references a shared SVG file under:

~~~text
static/img/hml/
~~~

This means that if an icon changes later, the documentation pages that reference it will automatically show the updated symbol.

Core visual principles:

- HIFs flow primarily from left to right.
- Semantic Cells process HIFs.
- Policies enter Semantic Cells from above.
- Semantic Operators enter Semantic Cells from above as clean `λ` symbols.
- Memory, cache, state, and queues appear as explicit supporting structures.
- Decision branches are shown using diamonds.
- Specialized experts such as NN, LLM, and multimodal models use dedicated icons.

---


# Core Visual Grammar

A standard HML processing cell follows this visual grammar:

<div align="center">

<svg width="760" height="300" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="visual-grammar-title visual-grammar-desc">
  <title id="visual-grammar-title">Generic HML Visual Grammar</title>
  <desc id="visual-grammar-desc">Input HIF flows into a Semantic Cell and exits as an output HIF. Policy and lambda enter independently from above.</desc>

  <defs>
    <marker id="arrow-visual-grammar" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
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

  <line x1="175" y1="152" x2="297" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow-visual-grammar)"/>
  <line x1="475" y1="152" x2="577" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow-visual-grammar)"/>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="326" y="0" width="58" height="58" preserveAspectRatio="xMidYMid meet"/>
  <text x="355" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="425" y="44" text-anchor="middle" font-size="52" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="425" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="355" y1="84" x2="355" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow-visual-grammar)"/>
  <line x1="425" y1="84" x2="425" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow-visual-grammar)"/>
</svg>

</div>

The policy and expert enter independently from above. The policy does not flow through the expert, and the expert does not define the policy. The Semantic Cell binds both to the HIF flow.

---

# Symbol Reference

The following table defines the main HML visual symbols.

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Concept</th>
      <th>Meaning</th>
      <th>SVG Asset</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">λ</td>
      <td>Semantic Operator</td>
      <td>Expert, heuristic, model, policy function, or implementation binding</td>
      <td>text / inline SVG</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/policy-check.svg" width="42" /></td>
      <td>Policy</td>
      <td>Rules, thresholds, constraints, social laws, safety policies</td>
      <td><code>policy-check.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/code-expert.svg" width="52" /></td>
      <td>Deterministic Code</td>
      <td>Rule-based or procedural logic</td>
      <td><code>code-expert.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/nn-expert.svg" width="52" /></td>
      <td>Neural Network</td>
      <td>Learned model, classifier, perception model, or predictor</td>
      <td><code>nn-expert.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/llm-bubble.svg" width="52" /></td>
      <td>LLM</td>
      <td>Language model or generative semantic reasoner</td>
      <td><code>llm-bubble.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/multimodal-expert.svg" width="52" /></td>
      <td>Multimodal Model</td>
      <td>VLM or multimodal model for cross-modal reasoning</td>
      <td><code>multimodal-expert.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/hri-db.svg" width="52" /></td>
      <td>HRI_DB</td>
      <td>Persistent semantic world model of the robot</td>
      <td><code>hri-db.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-cache.svg" width="52" /></td>
      <td>Semantic Cache</td>
      <td>Reusable semantic computation or interpretation store</td>
      <td><code>semantic-cache.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-object.svg" width="52" /></td>
      <td>Semantic Object</td>
      <td>JSON-like structured semantic data</td>
      <td><code>semantic-object.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/queue.svg" width="68" /></td>
      <td>Queue</td>
      <td>Ordered waiting items</td>
      <td><code>queue.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/prioritized-queue.svg" width="68" /></td>
      <td>Prioritized Queue</td>
      <td>Queue governed by a priority policy</td>
      <td><code>prioritized-queue.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/pending-queue.svg" width="68" /></td>
      <td>Pending Queue</td>
      <td>Waiting tasks or requests that cannot execute yet</td>
      <td><code>pending-queue.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/buffer.svg" width="68" /></td>
      <td>Buffer</td>
      <td>Bounded temporary storage</td>
      <td><code>buffer.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/time-series-window.svg" width="78" /></td>
      <td>Time-Series Window</td>
      <td>Temporally scoped buffer</td>
      <td><code>time-series-window.svg</code></td>
    </tr>
  </tbody>
</table>

The SVG asset names should remain stable once the documentation starts using them across pages.

---
# HIF

A HIF is shown as a rounded rectangle.

<div align="center">

<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HIF symbol">
  <rect x="55" y="25" width="150" height="42" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="130" y="51" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
</svg>

</div>

Use specific labels when the HIF role is known:

~~~text
Text HIF
Instruction HIF
ActionRequest HIF
RobotState HIF
~~~

---

# Semantic Cell

A Semantic Cell is shown as a larger rounded rectangle labeled with its cell type.

Examples:

~~~text
HC
ST
SG
ES
HE
~~~

A cell should not be confused with an implementation component such as a ROS node, Python class, service, or container.

The cell represents semantic responsibility.

---

# Policy

<div align="center">
  <img src="/social-hri-framework/img/hml/policy-check.svg" width="72" alt="Policy symbol" />
</div>

A Policy is shown as a checklist-like document icon.

Recommended asset:

~~~text
static/img/hml/policy-check.svg
~~~

Use this icon for:

- thresholds
- constraints
- safety rules
- social laws
- synchronization policies
- escalation policies
- autonomy policies
- resource policies
- queue priority policies

Policies usually enter Semantic Cells from above.

---

# λ — Semantic Operator

A Semantic Operator is shown as a clean lambda symbol:

<div align="center" style={{fontSize: '64px', fontFamily: 'Georgia, Times New Roman, serif'}}>
λ
</div>

It should usually appear without a surrounding rectangle.

Use subscripts or labels when needed:

~~~text
λsync
λintent
λsafety
λ₁ λ₂ λₙ
~~~

The operator represents an expert, model, heuristic, rule, policy function, or implementation binding.

---

# Expert Icons

HML may use more specific expert icons when the implementation family matters.

## Deterministic Code

<div align="center">
  <img src="/social-hri-framework/img/hml/code-expert.svg" width="90" alt="Deterministic code expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/code-expert.svg
~~~

Use for:

- rule-based handlers
- deterministic parsers
- procedural logic
- handcrafted algorithms

## Neural Network

<div align="center">
  <img src="/social-hri-framework/img/hml/nn-expert.svg" width="90" alt="Neural network expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/nn-expert.svg
~~~

Use for:

- classifiers
- perception models
- skeleton detectors
- emotion classifiers
- learned predictors

## LLM

<div align="center">
  <img src="/social-hri-framework/img/hml/llm-bubble.svg" width="90" alt="LLM expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/llm-bubble.svg
~~~

Use for:

- language interpretation
- open-ended reasoning
- fallback explanation
- natural language generation
- social reasoning

## Multimodal Model

<div align="center">
  <img src="/social-hri-framework/img/hml/multimodal-expert.svg" width="90" alt="Multimodal expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/multimodal-expert.svg
~~~

Use for:

- VLMs
- multimodal LLMs
- vision-language referent resolution
- image + text reasoning
- audio-visual interaction reasoning

---

# HRI_DB

<div align="center">
  <img src="/social-hri-framework/img/hml/hri-db.svg" width="90" alt="HRI_DB symbol" />
</div>

HRI_DB is shown as a database cylinder.

Recommended asset:

~~~text
static/img/hml/hri-db.svg
~~~

Use HRI_DB only for the persistent semantic world model of the robot.

Do not use the HRI_DB symbol for a cache unless the diagram explicitly labels it as a cache.

---

# Semantic Cache

<div align="center">
  <img src="/social-hri-framework/img/hml/semantic-cache.svg" width="90" alt="Semantic Cache symbol" />
</div>

A Semantic Cache is shown as a smaller database or cache cylinder.

Recommended asset:

~~~text
static/img/hml/semantic-cache.svg
~~~

Use Semantic Cache for reusable computation or interpretation.

Example:

~~~text
"Where is Bob?" → query intent: where_is(Bob)
~~~

Do not treat a cache as the authoritative world model.

---

# Semantic Object

<div align="center">
  <img src="/social-hri-framework/img/hml/semantic-object.svg" width="90" alt="Semantic Object symbol" />
</div>

A Semantic Object is a JSON-like structured object.

Recommended asset:

~~~text
static/img/hml/semantic-object.svg
~~~

Suggested textual notation:

~~~text
{:}
~~~

or:

~~~json
{
  "key": "value"
}
~~~

Use this notation for:

- HIF properties
- policy parameters
- query results
- DB records
- task specifications
- validation results

---

# Queue

<div align="center">
  <img src="/social-hri-framework/img/hml/queue.svg" width="120" alt="Queue symbol" />
</div>

A Queue is shown as a one-dimensional row of boxes.

Recommended asset:

~~~text
static/img/hml/queue.svg
~~~

Use Queue for ordered waiting items:

- HIFs
- tasks
- requests
- actions
- social requests

---

# Prioritized Queue

<div align="center">
  <img src="/social-hri-framework/img/hml/prioritized-queue.svg" width="130" alt="Prioritized Queue symbol" />
</div>

A Prioritized Queue is a queue governed by a priority policy.

Recommended asset:

~~~text
static/img/hml/prioritized-queue.svg
~~~

Use for:

- prioritized task queues
- request queues
- proactivity queues
- safety-prioritized alerts

---

# Pending Queue

<div align="center">
  <img src="/social-hri-framework/img/hml/pending-queue.svg" width="130" alt="Pending Queue symbol" />
</div>

A Pending Queue stores tasks or requests that cannot execute yet but should not be discarded.

Recommended asset:

~~~text
static/img/hml/pending-queue.svg
~~~

Use for:

- missing information
- closed social window
- unavailable user
- pending permission
- unresolved ambiguity
- delayed task resumption

Pending queues should usually have expiration or decay policies.

---

# Buffer

<div align="center">
  <img src="/social-hri-framework/img/hml/buffer.svg" width="130" alt="Buffer symbol" />
</div>

A Buffer is bounded temporary storage.

Recommended asset:

~~~text
static/img/hml/buffer.svg
~~~

Use for:

- stream buffering
- synchronization buffers
- smoothing
- evidence accumulation
- short-term storage

---

# Time-Series Window

<div align="center">
  <img src="/social-hri-framework/img/hml/time-series-window.svg" width="150" alt="Time-Series Window symbol" />
</div>

A Time-Series Window is a buffer with explicit temporal meaning.

Recommended asset:

~~~text
static/img/hml/time-series-window.svg
~~~

Use for:

- gesture learning
- gesture classification
- motion pattern detection
- engagement estimation
- temporal smoothing
- repeated behavior detection

---
# Decision Diamond

A decision is shown as a diamond.

<div align="center">

<svg width="260" height="110" viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision diamond symbol">
  <polygon points="130,18 180,55 130,92 80,55" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="130" y="60" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Decision</text>
</svg>

</div>

The diamond is not a primitive Semantic Cell.

It represents the branching output produced by a gate role.

Typical branches include:

~~~text
pass / block
hit / miss
ready / pending
consistent / inconsistent
problem / no problem
safe / unsafe
~~~

---

# Effect

An Effect represents an external, computational, communicative, or embodied action.

<div align="center">

<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Effect symbol">
  <rect x="55" y="25" width="150" height="42" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="130" y="51" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Effect</text>
</svg>

</div>

Examples:

- spoken sentence
- robot movement
- navigation command
- UI notification
- database-side action
- user-code execution
- emergency stop

Effects usually appear after a HIF Executor.

---

# Visual Composition Rules

## Left-to-Right HIF Flow

The main semantic flow should move from left to right.

~~~text
Input HIF → Semantic Cell → Output HIF
~~~

## Top-Down Policy and Expert Inputs

Policies and experts should enter Semantic Cells from above.

~~~text
Policy      λ
  ↓         ↓
Semantic Cell
~~~

## Independent Policy and Expert Inputs

Policy and expert inputs should be visually independent.

Do not draw:

~~~text
Policy → λ → Cell
~~~

Prefer both entering vertically from above:

~~~text
Policy      λ
  ↓         ↓
Semantic Cell
~~~

## State as Side Input or Side Effect

Memory, cache, and queues should usually appear as side structures.

They may feed a Semantic Cell, receive updates from it, or trigger later reprocessing.

## Decision Diamonds for Branching

Use a diamond when the diagram branches into outcomes.

Do not use a diamond merely to show normal sequential flow.

---

# Unified HML Symbol Map

The following diagram summarizes the main visual symbols used by HML.

<div align="center">

<svg width="900" height="520" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="symbol-map-title symbol-map-desc">
  <title id="symbol-map-title">Unified HML Symbol Map</title>
  <desc id="symbol-map-desc">A visual map of HML symbols including HIF, semantic cells, policy, lambda, expert icons, memory, queues, and decision symbols.</desc>

  <defs>
    <marker id="arrow-symbol-map" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <text x="90" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Semantic Flow</text>
  <text x="305" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Cells</text>
  <text x="520" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Experts</text>
  <text x="740" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">State / Control</text>

  <rect x="25" y="70" width="130" height="42" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="96" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="25" y="145" width="42" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <rect x="72" y="145" width="42" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <rect x="119" y="145" width="42" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="166" y1="160" x2="195" y2="160" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-symbol-map)"/>
  <text x="90" y="200" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF Stream</text>

  <rect x="25" y="245" width="130" height="42" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="271" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Effect</text>

  <rect x="250" y="70" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="103" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">ST</text>

  <rect x="250" y="150" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="183" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">SG</text>

  <rect x="250" y="230" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="263" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">ES</text>

  <rect x="250" y="310" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="343" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">HE</text>

  <rect x="250" y="390" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="423" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">HC</text>

  <text x="475" y="95" text-anchor="middle" font-size="42" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="475" y="120" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Operator</text>

  <image href="/social-hri-framework/img/hml/code-expert.svg" x="445" y="145" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="205" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Code</text>

  <image href="/social-hri-framework/img/hml/nn-expert.svg" x="445" y="230" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="290" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">NN</text>

  <image href="/social-hri-framework/img/hml/llm-bubble.svg" x="445" y="315" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="375" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">LLM</text>

  <image href="/social-hri-framework/img/hml/multimodal-expert.svg" x="445" y="400" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="460" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Multimodal</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="710" y="60" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="125" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="710" y="145" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="210" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HRI_DB</text>

  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="710" y="230" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="295" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Cache</text>

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="710" y="310" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="375" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Semantic Object</text>

  <image href="/social-hri-framework/img/hml/queue.svg" x="710" y="390" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="455" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Queue</text>

  <polygon points="840,335 875,365 840,395 805,365" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="840" y="370" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Decision</text>
</svg>

</div>

The unified map is intentionally compact. Individual diagrams may use larger or more specific versions of the same symbols.

---

# Recommended SVG Asset List

The following files are expected under:

~~~text
static/img/hml/
~~~

| File | Purpose |
|---|---|
| `policy-check.svg` | Policy artifact |
| `code-expert.svg` | Deterministic code / rule expert |
| `nn-expert.svg` | Neural-network expert |
| `llm-bubble.svg` | LLM expert |
| `multimodal-expert.svg` | Multimodal / VLM expert |
| `hri-db.svg` | HRI_DB persistent semantic world model |
| `semantic-cache.svg` | Semantic cache |
| `semantic-object.svg` | JSON-like semantic object |
| `queue.svg` | Generic queue |
| `prioritized-queue.svg` | Prioritized queue |
| `pending-queue.svg` | Pending queue |
| `buffer.svg` | Buffer |
| `time-series-window.svg` | Time-series window |

Optional future assets:

| File | Purpose |
|---|---|
| `clock.svg` | Expiration / waiting / timeout |
| `sensor.svg` | Sensor or external source |
| `actuator.svg` | Physical actuator |
| `world-effect.svg` | External or embodied effect |
| `human.svg` | Human entity |
| `robot.svg` | Robot entity |

---

# Design Guidelines

## Prefer Shared SVG Assets

Use shared SVG assets instead of embedding one-off icons in each page.

This keeps diagrams visually consistent.

## Keep SVGs Theme-Friendly

Where possible, SVGs should use:

~~~text
currentColor
~~~

for strokes and fills.

This helps them work in both light mode and dark mode.

## Avoid Private-Use Font Characters

Do not rely on private-use glyphs such as custom icon-font characters.

They may render incorrectly across browsers, operating systems, or build environments.

Use SVG assets instead.

## Keep Diagrams Semantically Minimal

Only show symbols that matter for understanding the architecture.

Avoid decorative icons that do not carry modeling meaning.

## Label Symbols Clearly

Even when using an icon, add a short label when the meaning may not be obvious.

Examples:

~~~text
HRI_DB
Semantic Cache
Policy
Expert Stack
Pending Queue
~~~

## Use Decision Diamonds Only for Branching

A decision diamond should indicate actual semantic branching, not ordinary sequential processing.

## Keep Policy and Expert Inputs Independent

Do not visually imply that the policy is generated by the expert or that the expert owns the policy.

Both should enter the Semantic Cell independently.

---

# Conclusion

The HML Visual Dictionary provides the shared notation used by HML diagrams.

It turns the framework from a collection of architecture sketches into a consistent modeling language.

By using stable symbols for HIFs, Semantic Cells, policies, experts, memory, queues, and decisions, HML diagrams become:

- easier to read
- easier to compare
- easier to maintain
- easier to teach
- easier to publish
- easier to implement consistently

This visual vocabulary should be used throughout the SOCIAL framework documentation and the HRI Design Patterns.
