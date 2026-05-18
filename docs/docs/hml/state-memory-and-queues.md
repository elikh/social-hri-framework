---
title: State, Memory, and Queues
sidebar_position: 5
---

# State, Memory, and Queues

## Overview

State, Memory, and Queues are the HML structures that preserve information across time.

If HIFs are the semantic units that flow through the system, and Semantic Cells are the architectural units that process them, then state and memory structures are the components that allow the architecture to remember, reuse, delay, resume, and reason across multiple interaction moments.

These structures support:

- semantic continuity
- persistent world knowledge
- session context
- caching
- asynchronous interaction
- delayed execution
- fact-triggered resumption
- temporal reasoning
- explainable memory
- human correction
- policy-aware state updates

They are essential for moving from immediate command-response behavior to socially aware long-term interaction.

---

# Why State Structures Are Needed

A HIF pipeline alone is not enough for HRI.

Human-Robot Interaction is often incomplete, delayed, ambiguous, or dependent on future context.

Examples:

- A user says: `Bring this bottle to Bob`, but Bob's location is unknown.
- A robot needs a short time window of skeletons to learn a gesture.
- A task should wait until the user is available.
- A previous fact affects how a new instruction is interpreted.
- A query should be answered from memory before escalating to an LLM.
- A fact may become stale unless reinforced.
- A robot may need to remember that it already asked a clarification question.
- A social request may expire if the opportunity window closes.

State, memory, and queue structures allow HML architectures to preserve semantic continuity across these situations.

---

# Three Families of State Structures

HML distinguishes between three broad families of state structures.

| Family | Purpose | Examples |
|---|---|---|
| Semantic Memory | Persistent or semi-persistent knowledge about the world | HRI_DB, facts, beliefs, preferences |
| Operational Memory | Temporary context used during an interaction | session context, short-term memory, recent references |
| Flow-Control Structures | Structures that manage time, ordering, delay, or readiness | queues, buffers, time-series windows, pending queues |

These structures may appear as side inputs, side outputs, or explicit storage elements in HML diagrams.

---

# General Memory and Flow View

A typical HML architecture allows HIFs to flow through Semantic Cells while interacting with state structures.

<div align="center">

<svg width="900" height="430" viewBox="0 0 900 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="memory-flow-title memory-flow-desc">
  <title id="memory-flow-title">State Structures Around HIF Flow</title>
  <desc id="memory-flow-desc">A Semantic Cell processes a HIF stream while interacting with cache, HRI_DB, session context, and queue or buffer structures.</desc>

  <defs>
    <marker id="arrow-memory-flow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Main HIF flow -->
  <rect x="40" y="170" width="150" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="115" y="199" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Input HIF Stream</text>

  <rect x="375" y="150" width="150" height="88" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="450" y="188" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="450" y="214" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="710" y="170" width="150" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="785" y="199" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Output HIF Stream</text>

  <line x1="190" y1="194" x2="367" y2="194" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-memory-flow)"/>
  <line x1="525" y1="194" x2="702" y2="194" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-memory-flow)"/>

  <!-- Top policy and lambda -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="400" y="18" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="424" y="82" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="482" y="60" text-anchor="middle" font-size="44" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="482" y="82" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="424" y1="92" x2="424" y2="150" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-memory-flow)"/>
  <line x1="482" y1="92" x2="482" y2="150" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-memory-flow)"/>

  <!-- Side structures -->
  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="110" y="285" width="72" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="146" y="358" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Semantic Cache</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="330" y="300" width="72" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="366" y="373" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HRI_DB</text>

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="520" y="300" width="72" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="556" y="373" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Session Context</text>

  <image href="/social-hri-framework/img/hml/queue.svg" x="715" y="302" width="90" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="760" y="373" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Queue / Buffer</text>

  <!-- Bidirectional support links -->
  <line x1="180" y1="304" x2="382" y2="235" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="388" y1="238" x2="187" y2="314" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>

  <line x1="378" y1="300" x2="430" y2="240" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="440" y1="240" x2="390" y2="302" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>

  <line x1="548" y1="300" x2="474" y2="240" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="466" y1="240" x2="540" y2="302" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>

  <line x1="720" y1="304" x2="520" y2="235" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="512" y1="238" x2="712" y2="314" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>
</svg>

</div>

This diagram shows that state structures are not necessarily part of the main left-to-right HIF flow.

They can support, modify, delay, or resume that flow.

---

# Semantic Objects and Dictionaries

A Semantic Object is a JSON-like structured representation of meaning.

It may appear inside a HIF, inside a policy file, inside HRI_DB, or as the result of a query.

Example:

```json
{
  "person": "Bob",
  "location": "kitchen",
  "confidence": 0.92,
  "source": "vision_tracker"
}
```

Semantic Objects are used to represent:

- HIF properties
- facts
- query results
- task parameters
- policy parameters
- configuration values
- validation outcomes
- world-state entities

The visual notation `{}` or `{:}` may be used to indicate a structured semantic object.

Important distinction:

```text
A semantic object is a representation format.
It is not necessarily a database, cache, or persistent store.
```

A dictionary-like structure may be used inside many different HML components.

---

# HRI_DB — Persistent Semantic World Model

HRI_DB is the persistent semantic world model of the robot.

It represents what the robot currently believes, remembers, or assumes about the world, people, objects, tasks, social context, and itself.

It may contain:

- entities
- facts
- beliefs
- people
- object states
- locations
- user preferences
- social context
- policies
- autonomy state
- integrity state
- interaction history
- unresolved assumptions
- source and confidence metadata

Example:

```json
{
  "people": {
    "bob": {
      "type": "person",
      "location": "kitchen",
      "last_seen": "2026-05-11T12:34:01Z",
      "source": "vision_tracker",
      "confidence": 0.86
    }
  }
}
```

HRI_DB is not merely a technical database.

It is the robot's transparent semantic world model.

It supports:

- explainability
- consistency evaluation
- human correction
- deterministic querying
- LLM-assisted reasoning
- persistence across sessions
- context continuity
- fact-triggered task resumption

HRI_DB is important enough to receive a dedicated documentation page.

This page introduces it only as one of the central memory structures in HML.

---
HRI_DB is discussed in depth in the dedicated HRI_DB page. This page treats it only as one member of the broader family of state and memory structures. The dedicated page explains its transparent JSON-like reference implementation, deterministic querying strategy, confidence decay, human correction, and LLM escalation over structured state.
---

# Cache vs HRI_DB

A cache is not the same as HRI_DB.

A cache stores reusable computation or interpretation results.

HRI_DB stores semantic world knowledge.

Example:

```text
Cache:
  "do you know Bob's whereabouts?" → query intent: where_is(Bob)

HRI_DB:
  Bob is in the kitchen.
```

In other words:

```text
Cache = reuse of interpretation or computation
HRI_DB = semantic memory of the world
```

Caches support:

- latency reduction
- token saving
- consistency of repeated interpretation
- cheaper fallback chains
- reduced LLM calls

HRI_DB supports:

- persistent state
- fact lookup
- consistency checking
- explainability
- human correction
- world-model reasoning

Both may be used together.

---
# Semantic Cache

A Semantic Cache stores reusable semantic results.

Examples:

```text
Text phrase → parsed intent
Query pattern → structured query
LLM answer → reusable interpretation
Spatial phrase → resolved pattern
```

A Semantic Cache is especially useful inside escalation patterns.

For example:

<div align="center">

<svg width="840" height="310" viewBox="0 0 840 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="semantic-cache-es-title semantic-cache-es-desc">
  <title id="semantic-cache-es-title">Semantic Cache in an Escalation Switch</title>
  <desc id="semantic-cache-es-desc">A Text HIF enters an Escalation Switch. Policy, rule parser, semantic cache, and LLM parser enter from above. The result is an Instruction HIF.</desc>

  <defs>
    <marker id="arrow-cache-es" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="175" width="125" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="102.5" y="203" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Text HIF</text>

  <rect x="365" y="150" width="125" height="86" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="427.5" y="199" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="currentColor">ES</text>

  <rect x="670" y="175" width="135" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="737.5" y="203" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Instruction HIF</text>

  <line x1="165" y1="198" x2="357" y2="198" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-cache-es)"/>
  <line x1="490" y1="198" x2="662" y2="198" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-cache-es)"/>

  <!-- Independent policy and experts -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="285" y="25" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="309" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Escalation Policy</text>
  <line x1="309" y1="100" x2="390" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>

  <image href="/social-hri-framework/img/hml/code-expert.svg" x="370" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="397" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">λ rule parser</text>
  <line x1="397" y1="100" x2="415" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>

  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="465" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="492" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Semantic Cache</text>
  <line x1="492" y1="100" x2="445" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>

  <image href="/social-hri-framework/img/hml/llm-bubble.svg" x="555" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="582" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">λ LLM parser</text>
  <line x1="582" y1="100" x2="480" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>
</svg>

</div>

The ES may first try deterministic code, then the semantic cache, and only then escalate to a more expensive generative model.

---

# Short-Term Memory and Session Context

Not all memory should be persistent.

Short-Term Memory or Session Context stores information that is relevant to the current interaction but may not belong in long-term HRI_DB.

Examples include:

- current user
- active speaker
- current topic
- last referenced object
- recent clarification
- pronoun context
- active task
- temporary assumptions
- dialogue state
- currently open social window

Example:

```json
{
  "current_user": "Alice",
  "last_referenced_object": "bottle_5",
  "current_topic": "medicine delivery",
  "last_clarification_question": "Where is Bob?"
}
```

Session context supports natural dialogue and short-horizon reasoning.

It should not automatically become persistent world knowledge.

---

# Buffers

A Buffer is bounded temporary storage.

It stores HIFs or data items for short-term processing.

Examples:

```text
Buffer<HIF>
Buffer<AudioSnippet>
Buffer<VideoFrame>
Buffer<PersonState>
```

Buffers are useful for:

- smoothing noisy signals
- waiting for synchronization
- collecting evidence
- short-term temporal reasoning
- managing asynchronous streams
- rate matching between components

A buffer may be bounded by:

- time
- number of items
- memory size
- confidence
- source
- interaction state

---

# Time-Series Windows

A Time-Series Window is a buffer with explicit temporal meaning.

It stores a sequence of frames, poses, gestures, audio snippets, or other HIFs over a time interval.

Example:

```text
TimeSeriesWindow<SkeletonHIF>
```

Typical uses:

- gesture learning
- gesture classification
- motion pattern detection
- temporal smoothing
- repeated behavior detection
- engagement estimation
- activity recognition

This structure is central to patterns such as the Adaptive Signature Learner.

<div align="center">

<svg width="780" height="270" viewBox="0 0 780 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="time-window-title time-window-desc">
  <title id="time-window-title">Time-Series Window Processing</title>
  <desc id="time-window-desc">Multiple HIFs are accumulated into a time-series window and processed by a Semantic Transformer into a Gesture HIF.</desc>

  <defs>
    <marker id="arrow-time-window" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- incoming HIFs -->
  <rect x="35" y="55" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="75" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <rect x="35" y="100" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="120" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <rect x="35" y="145" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="165" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <rect x="35" y="190" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="210" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <image href="/social-hri-framework/img/hml/time-series-window.svg" x="205" y="90" width="140" height="80" preserveAspectRatio="xMidYMid meet"/>
  <text x="275" y="190" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Time-Series Window</text>

  <rect x="455" y="90" width="120" height="74" rx="12" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="515" y="122" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Learn /</text>
  <text x="515" y="147" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Classify ST</text>

  <rect x="660" y="105" width="100" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="710" y="132" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Gesture HIF</text>

  <!-- policy and lambda into ST -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="468" y="5" width="38" height="38" preserveAspectRatio="xMidYMid meet"/>
  <text x="487" y="58" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>
  <text x="540" y="38" text-anchor="middle" font-size="34" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="540" y="58" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Expert</text>
  <line x1="487" y1="66" x2="487" y2="90" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-time-window)"/>
  <line x1="540" y1="66" x2="540" y2="90" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-time-window)"/>

  <!-- arrows -->
  <line x1="105" y1="70" x2="200" y2="110" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>
  <line x1="105" y1="115" x2="200" y2="125" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>
  <line x1="105" y1="160" x2="200" y2="140" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>
  <line x1="105" y1="205" x2="200" y2="155" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>

  <line x1="345" y1="130" x2="447" y2="130" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-time-window)"/>
  <line x1="575" y1="127" x2="652" y2="127" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-time-window)"/>
</svg>

</div>

The window gives the system enough temporal context to classify or learn behavior that cannot be understood from a single HIF.

---

# Queues

A Queue is an ordered collection of HIFs, tasks, requests, or actions waiting for processing.

General form:

```text
Queue<T> = ordered collection of items waiting for processing
```

Queues are used when processing is:

- asynchronous
- delayed
- prioritized
- resource-dependent
- interaction-dependent
- waiting for missing information
- waiting for social opportunity

Common queue types include:

- HIF stream queue
- task queue
- request queue
- prioritized queue
- pending queue
- action queue
- social request queue

A queue is not only a data structure.

In HML, it often represents part of the lifecycle of a task or interaction request.

---

# Prioritized Queue

A Prioritized Queue orders tasks or requests according to a policy.

Possible priority criteria include:

- urgency
- safety
- social relevance
- user importance
- task age
- explicit instruction priority
- autonomy level
- resource availability
- estimated execution cost
- decay factor

Example:

```text
PrioritizedQueue<TaskHIF>
```

A Prioritized Queue is useful when several candidate tasks compete for attention or execution.

Examples:

- user instructions
- proactive social requests
- system maintenance tasks
- safety alerts
- reminders
- delayed actions

---

# Pending Queue

A Pending Queue stores tasks or requests that are not executable yet but should not be discarded.

Reasons for pending status include:

- missing information
- unavailable person
- closed social window
- low confidence
- insufficient resources
- missing permission
- unresolved ambiguity
- future timing condition
- safety constraint
- task dependency

Example:

```text
Bring bottle_5 to Bob
→ Bob location unknown
→ Pending Queue
```

Another example:

```text
Ask Bob for help
→ Bob is busy
→ Pending Request Queue
```

Pending queues are essential for moving from command-response systems to goal-oriented agents.

A robot should not fail immediately when a task is incomplete.

It should hold the task, seek missing information, and resume when the required context becomes available.

---

# Pending Queue Lifecycle

The following diagram shows a common pending task lifecycle.

<div align="center">

<svg width="920" height="360" viewBox="0 0 920 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pending-lifecycle-title pending-lifecycle-desc">
  <title id="pending-lifecycle-title">Pending Queue Lifecycle</title>
  <desc id="pending-lifecycle-desc">A task HIF is checked by a prerequisite gate. Ready tasks become executable, while missing information sends the task to a pending queue. New facts re-trigger checking, and old tasks may expire.</desc>

  <defs>
    <marker id="arrow-pending" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="150" width="100" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="85" y="177" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Task HIF</text>

  <rect x="215" y="130" width="120" height="84" rx="12" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="275" y="164" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Prerequisite</text>
  <text x="275" y="188" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Check ST</text>

  <polygon points="450,172 495,132 540,172 495,212" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="495" y="177" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Decision</text>

  <rect x="690" y="90" width="155" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="767.5" y="117" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Executable Task HIF</text>

  <image href="/social-hri-framework/img/hml/pending-queue.svg" x="690" y="205" width="145" height="72" preserveAspectRatio="xMidYMid meet"/>
  <text x="762.5" y="292" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Pending Queue</text>

  <rect x="350" y="285" width="145" height="42" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="422.5" y="311" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">New Fact / Context</text>

  <rect x="555" y="270" width="110" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="610" y="302" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Pending Handler</text>

  <rect x="700" y="315" width="130" height="34" rx="8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="765" y="337" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Expired / Dropped</text>

  <!-- Policy and lambda for prerequisite ST -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="236" y="25" width="38" height="38" preserveAspectRatio="xMidYMid meet"/>
  <text x="255" y="78" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>
  <text x="300" y="58" text-anchor="middle" font-size="34" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="300" y="78" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Check</text>
  <line x1="255" y1="86" x2="255" y2="130" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-pending)"/>
  <line x1="300" y1="86" x2="300" y2="130" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-pending)"/>

  <!-- arrows -->
  <line x1="135" y1="172" x2="207" y2="172" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>
  <line x1="335" y1="172" x2="442" y2="172" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>

  <line x1="540" y1="160" x2="682" y2="112" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>
  <text x="610" y="128" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">ready</text>

  <line x1="540" y1="185" x2="682" y2="235" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>
  <text x="608" y="224" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">missing info</text>

  <line x1="495" y1="306" x2="547" y2="300" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-pending)"/>
  <line x1="690" y1="246" x2="665" y2="286" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-pending)"/>
  <line x1="555" y1="282" x2="335" y2="212" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-pending)"/>

  <line x1="765" y1="278" x2="765" y2="307" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" marker-end="url(#arrow-pending)"/>
  <text x="835" y="304" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">decay / expiration</text>
</svg>

</div>

This lifecycle appears in patterns such as:

- Task Prerequisite Resolver
- Social Opportunity TPR
- delayed clarification handlers
- proactivity engines
- pending social requests

A pending task should usually include an expiration policy or decay factor to prevent outdated tasks from executing later in an inappropriate context.

---

# State Update vs HIF Flow

Some information flows through the system as HIFs.

Other information is stored as state.

For example:

```text
User says: "Bob is in the kitchen."
```

This may become:

```text
Text HIF → Intent / Fact Extraction ST → Fact HIF → Consistency Evaluator → HRI_DB update
```

Later, another query may retrieve that fact:

```text
Query HIF → HRI_DB Handler → Answer HIF
```

This means that state structures may appear as:

- side inputs to Semantic Cells
- side outputs from Semantic Cells
- persistent memory stores
- triggers for pending task re-evaluation
- sources of newly created HIFs

The HIF flow and the state model are therefore connected, but they are not the same thing.

---

# Visual Notation

The following table summarizes suggested visual notation for state and memory structures.

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Structure</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-object.svg" width="52" /></td>
      <td>Semantic Object</td>
      <td>Structured JSON-like semantic data</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/hri-db.svg" width="52" /></td>
      <td>HRI_DB</td>
      <td>Persistent semantic world model</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-cache.svg" width="52" /></td>
      <td>Semantic Cache</td>
      <td>Reusable computation or interpretation store</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/buffer.svg" width="70" /></td>
      <td>Buffer</td>
      <td>Bounded temporary storage</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/time-series-window.svg" width="82" /></td>
      <td>Time-Series Window</td>
      <td>Temporally scoped buffer</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/queue.svg" width="70" /></td>
      <td>Queue</td>
      <td>Ordered waiting items</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/prioritized-queue.svg" width="70" /></td>
      <td>Prioritized Queue</td>
      <td>Queue governed by urgency or relevance policy</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/pending-queue.svg" width="70" /></td>
      <td>Pending Queue</td>
      <td>Delayed tasks or requests</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-object.svg" width="52" /></td>
      <td>Session Context</td>
      <td>Current interaction context or short-term memory</td>
    </tr>
  </tbody>
</table>

The exact drawing style may vary, but the semantic meaning should remain explicit.

---

# Relationship to HRI Design Patterns

Many HRI Design Patterns depend on state, memory, or queue structures.

| Pattern | State / Memory Structure |
|---|---|
| Tiered Semantic Cache | Semantic Cache |
| Adaptive Signature Learner | Time-Series Window |
| Context Novelty Extractor | Previous Unified Context |
| HRI_DB Handler | HRI_DB |
| Spatial Based Reasoning | HRI_DB + spatial object state |
| Consistency Evaluator & Updater | HRI_DB + fact validation |
| Query Social Handler | HRI_DB + Session Context |
| Deep Social Insight Extractor | HRI_DB updates |
| System Integrity & Agency Handler | Integrity state + Autonomy state |
| Task Prerequisite Resolver | Prioritized Queue + Pending Queue |
| Social Opportunity TPR | Pending Request Queue |
| Late-Binding Behavioral Choreographer | delayed request state + current context |

This page defines the vocabulary needed to read those patterns.

---

# Design Guidelines

## Do Not Use HRI_DB for Everything

Not every temporary value belongs in persistent memory.

Use session context or short-term memory for temporary dialogue state.

Use HRI_DB for facts, preferences, entities, and state that may matter beyond the immediate moment.

---

## Do Not Treat Cache as Truth

A cache stores reusable computation.

It should not be treated as the authoritative world model.

If a cached interpretation conflicts with current context or HRI_DB, the system should validate or invalidate it.

---

## Preserve Provenance

Stored facts should include source information whenever possible.

Example:

```json
{
  "fact": "Bob is in the kitchen",
  "source": "vision_tracker",
  "confidence": 0.86,
  "timestamp": "2026-05-11T12:34:01Z"
}
```

Provenance supports explainability and correction.

---

## Support Confidence Decay and Forgetting

Some facts become less reliable over time.

For example:

```text
Bob was in the kitchen 30 minutes ago.
```

may be less reliable than:

```text
Bob was detected in the kitchen 10 seconds ago.
```

HRI_DB implementations should support confidence decay, expiration, or reinforcement policies where appropriate.

---

## Use Pending Queues Carefully

Pending tasks should not live forever.

They should include:

- creation time
- reason for pending status
- required condition
- priority
- decay factor
- expiration policy
- re-evaluation trigger

This prevents outdated tasks from executing in the wrong context.

---

## Separate Session Context from Persistent Memory

Session context is useful for pronouns, dialogue continuity, and temporary assumptions.

Persistent memory is useful for stable facts, preferences, and world state.

Mixing them can cause stale or accidental assumptions to become long-term beliefs.

---

## Document Memory Side Effects

Any Semantic Cell that reads or writes memory should make that behavior explicit.

This is important for:

- debugging
- reproducibility
- safety review
- auditability
- explainability

---

## Prefer Human-Readable State

When possible, use readable structured formats.

This supports:

- human inspection
- operator correction
- LLM-assisted reasoning
- academic reproducibility
- safety audits

---

## Validate Conflicting Updates

A new fact should not silently overwrite a conflicting old fact.

Conflicts should be routed through a consistency mechanism, such as a Consistency Evaluator and Updater.

---

# Conclusion

State, Memory, and Queues allow HML architectures to reason across time.

They support memory, caching, delayed execution, asynchronous interaction, and fact-triggered resumption.

They also help the robot remain explainable by making its remembered state inspectable and its delayed tasks explicit.

In HML:

```text
HIFs carry semantic information.
Semantic Cells process semantic information.
State structures preserve semantic information across time.
Queues manage semantic work that cannot be completed immediately.
```

Together, these structures allow socially intelligent robots to move beyond immediate reaction and toward persistent, context-aware, and explainable interaction.
