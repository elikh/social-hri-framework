---
title: HRI_DB Handler Pattern
sidebar_position: 13
---

# HRI_DB Handler Pattern

## Intent

The **HRI_DB Handler Pattern** is a reusable HML pattern for managing the interaction between semantic HIFs and the maintained HRI_DB.

It is the controlled interface between incoming context and maintained interaction memory.

The input may be:

```text
Δ Unified Context HIF
query HIF
fact HIF
instruction HIF
memory update HIF
clarification request
```

The handler decides, according to policy and expert logic, whether to:

```text
query HRI_DB
update HRI_DB
merge with existing context
detect inconsistency
ask for clarification
acknowledge a successful update
return an answer
escalate to another handler
```

In short:

```text
semantic input HIF
  → controlled memory handler
  ↔ HRI_DB
  → answer / ack / clarification / update result HIF
```

This pattern is not merely a database access layer.

It is a semantic memory interface for HRI.

---

## Problem

After the Context Novelty Extractor, the architecture may receive a meaningful context delta.

But a delta alone does not say what should happen next.

For example:

```text
Bob moved to the corridor.
The user asked where Bob is.
A door is now closed.
The robot was told: remember that Alice prefers short answers.
A detected object contradicts the last known location.
```

Each of these inputs requires a different memory operation:

```text
store
update
query
merge
reject
ask clarification
answer
escalate
```

If every semantic cell accesses the database directly, the system becomes difficult to control.

It becomes unclear:

```text
who is allowed to update memory
which facts are trusted
which updates overwrite previous facts
which queries require clarification
which inconsistencies should be tolerated
which responses should be returned to the user
```

The HRI_DB Handler Pattern solves this by placing a controlled semantic interface between HIFs and HRI_DB.

---

## Context

Use this pattern when a robot must maintain a live interaction memory that is:

```text
queryable
editable
inspectable
updated over time
usable by humans
usable by symbolic code
usable by LLM-based reasoning
```

The pattern is especially useful when incoming HIFs may contain mixed semantic intentions:

```text
facts to remember
queries to answer
instructions to validate
context updates
detected inconsistencies
missing information
socially sensitive content
```

The handler provides a single place to decide how HRI_DB should react.

---

## HML Structure

The general structure is:

```text
Input HIF
  → Escalation Switch
      ↔ HRI_DB
  → problem?
      yes → clarification / query-person ST → HIF
      no  → ack / answer ST → HIF
```

<div align="center">

<img
  src="/social-hri-framework/img/hml/hri-db-handler-pattern.svg"
  alt="HRI_DB Handler Pattern with escalation switch, HRI_DB query update loop, and output HIFs for answer acknowledgement or clarification"
  width="100%"
/>

</div>

Place the SVG file here:

```text
docs/static/img/hml/hri-db-handler-pattern.svg
```

The public path used by the documentation is:

```text
/social-hri-framework/img/hml/hri-db-handler-pattern.svg
```

---

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF | HIF | Carries a context delta, fact, query, instruction, or memory update |
| Escalation Switch | ES / semantic cell | Selects whether to query, update, merge, escalate, or clarify |
| Policy | Policy artifact | Controls allowed memory operations and escalation rules |
| λ experts | Semantic operators | Provide specialized logic for update, query, validation, or reasoning |
| HRI_DB | Maintained semantic memory | Stores the current interaction model |
| Problem detector | Decision point | Detects ambiguity, inconsistency, missing data, or policy conflicts |
| Clarification ST | Semantic Transformer | Produces a clarification request when a problem is found |
| Ack / Answer ST | Semantic Transformer | Produces an acknowledgement, answer, or memory result |
| Output HIF | HIF | Carries the structured response downstream |

---

## Flow

A typical HRI_DB Handler flow is:

```text
1. A unified context delta, query, fact, or instruction arrives as a HIF.
2. The Escalation Switch inspects the HIF using policy and expert logic.
3. It decides whether to query, update, merge, validate, or escalate.
4. HRI_DB is queried or updated.
5. The result is checked for problems.
6. If a problem is found, the handler emits a clarification HIF.
7. If no problem is found, the handler emits an answer or acknowledgement HIF.
8. The output HIF preserves traceability.
```

The handler may also emit a failure or rejection HIF when the requested memory operation is not allowed.

For example:

```text
The requested update is not trusted.
The query is ambiguous.
The instruction refers to an unknown person.
The update contradicts higher-confidence memory.
The request would violate a privacy or agency policy.
```

---

## Why HRI_DB Is Not Just a Database

The HRI_DB may be implemented using ordinary data structures.

But the pattern is not about the storage technology.

The important question is not only:

```text
Where is the data stored?
```

The important HRI question is:

```text
How should semantic interaction memory be updated, queried, validated, and explained?
```

The pattern becomes important not because storing JSON is difficult, but because deciding what to store, update, ask, answer, or reject is an HRI reasoning problem.

---

## Dictionary / JSON-Based HRI_DB

In the consortium implementation, HRI_DB was represented using Python dictionaries and JSON-like structures.

This choice was useful because it supports:

```text
fast in-memory access
human readability
live editability
language-independent serialization
LLM-readable structured context
```

### Fast In-Memory Access

Python dictionaries provide fast access to entities, properties, and relations during runtime.

This is useful for live HRI, where many memory operations must happen quickly.

### Transparent and Editable

JSON-like structures are readable and editable by humans.

This matters because HRI_DB is not merely internal state.

It is part of the system's explainability and debugging surface.

A developer or authorized operator can inspect:

```text
people
objects
locations
preferences
social context
events
confidence
provenance
```

and understand what the robot currently believes.

### LLM-Friendly Structure

LLMs can often work effectively with structured JSON-like context.

This makes it possible to provide a bounded, inspectable subset of HRI_DB to an LLM-based expert for deep reasoning, explanation, or interpretation.

The LLM does not need to invent the world state.

It can reason over a structured and traceable representation.

---

## Why Not Just Use RAG?

RAG is useful for large, mostly static knowledge collections.

For example:

```text
manuals
policies
technical documents
archives
large corpora
slow-changing knowledge bases
```

HRI_DB serves a different role.

It maintains the current social-interaction state.

For example:

```text
where people were last seen
which object moved
which room is formal
what the user just asked
what the robot can currently do
which door is currently closed
which preference was stated during interaction
```

A useful distinction is:

```text
RAG retrieves from large knowledge collections.
HRI_DB maintains the current social-interaction state.
```

A JSON-like HRI_DB may be less scalable than vector retrieval for huge corpora.

But it provides:

```text
transparency
editability
live semantic control
schema-level validation
direct traceability
```

These qualities are often worth the tradeoff for dynamic HRI memory.

In many architectures, both are useful:

```text
HRI_DB:
  current interaction state

RAG:
  large external knowledge sources
```

---

## Input HIF Types

The handler may receive several kinds of input HIFs.

### Context Delta HIF

From CNE:

```text
The door changed from open to closed.
Bob moved from meeting room to corridor.
The robot battery dropped below a threshold.
```

### Query HIF

From a language interpreter or planning layer:

```text
Where is Bob?
Is the door to the meeting room closed?
What does Alice prefer?
Can the robot speak now?
```

### Fact HIF

From a user statement or perception update:

```text
Alice prefers short answers.
This room is used for formal meetings.
The red mug belongs to Bob.
```

### Instruction HIF

From the user or planner:

```text
Remember this.
Forget this.
Update the object location.
Mark this as uncertain.
Ask the user to clarify.
```

### Problem HIF

From another handler:

```text
inconsistent location
ambiguous person reference
missing object identity
policy violation
low-confidence memory conflict
```

---

## Output HIF Types

The handler may emit several types of output HIFs.

```text
MemoryAckHIF
QueryAnswerHIF
ClarificationRequestHIF
ContextUpdateHIF
InconsistencyHIF
MemoryWriteResultHIF
HandlerFailureHIF
```

### Example: Acknowledgement

```json
{
  "type": "MemoryAckHIF",
  "properties": {
    "status": "stored",
    "entity": "alice",
    "property": "preference",
    "value": "short_answers"
  },
  "processing_history": [
    "HRI_DBHandler"
  ]
}
```

### Example: Clarification Request

```json
{
  "type": "ClarificationRequestHIF",
  "properties": {
    "problem": "ambiguous_person_reference",
    "question": "Which Bob do you mean?"
  },
  "processing_history": [
    "HRI_DBHandler"
  ]
}
```

### Example: Query Answer

```json
{
  "type": "QueryAnswerHIF",
  "properties": {
    "query": "where_is",
    "target": "bob",
    "answer": "Bob was last seen near the kitchen.",
    "freshness": "2 minutes ago",
    "confidence": "medium"
  },
  "processing_history": [
    "HRI_DBHandler"
  ]
}
```

---

## Problem Detection

The pattern includes explicit problem detection.

A problem may be detected when:

```text
information is missing
a reference is ambiguous
a fact contradicts existing memory
confidence is too low
the requested operation is not allowed
the update is socially or ethically sensitive
the target entity does not exist
the schema is invalid
```

When a problem is detected, the handler should not silently guess.

It may emit:

```text
ClarificationRequestHIF
InconsistencyHIF
RejectedUpdateHIF
EscalationRequiredHIF
```

This makes the system safer and more explainable.

---

## Reuse Through Specialized Handlers

The HRI_DB Handler Pattern is intentionally generic.

The next pages specialize it for different reasoning needs.

Each specialized handler reuses the same structure:

```text
Input HIF
  → handler / escalation switch
  ↔ HRI_DB
  → answer / update / clarification / insight HIF
```

Examples include:

| Specialized Handler | Main Role |
|---|---|
| SBR — Spatial-Based Reasoning | Queries and reasons over map, object, human, and robot positions |
| CEU — Consistency Evaluator and Updater | Detects contradictions and manages memory updates |
| QSH — Query Social Handler | Answers user-facing social or contextual queries |
| DSIE — Deep Social Insight Extractor | Extracts higher-level social meaning |
| SIAH — System Integrity and Agency Handler | Protects agency, safety, privacy, and system boundaries |

This reuse demonstrates that the pattern is not just a technical database wrapper.

It is a reusable semantic reasoning interface.

---

## Why This Pattern Is Not Trivial

At first glance, the pattern may look like:

```text
input → database → output
```

But in HRI, the difficult part is not only storage.

The difficult part is deciding:

```text
What should be remembered?
What should be forgotten?
What should be overwritten?
What requires clarification?
What should remain uncertain?
What should be answerable to a user?
What should be hidden, rejected, or escalated?
What should be readable by an LLM?
What should be editable by a human?
```

The HRI_DB Handler Pattern provides a place to make these decisions explicit.

---

## SOCIAL Principles Supported

### S — Separated Contexts

The pattern separates:

```text
input HIF
memory state
query/update operation
problem detection
output HIF
```

This prevents raw context from directly mutating memory without an explicit semantic pathway.

### O — Open Declarative

A JSON-like HRI_DB is readable, editable, and inspectable.

Memory updates can be represented as declarative structures rather than hidden internal state.

### C — Clear Cognition

The pattern exposes whether the system:

```text
queried memory
updated memory
rejected an update
asked for clarification
detected inconsistency
returned an answer
```

### I — Interpretable Gates

The Escalation Switch is an explicit gate.

It can explain why a HIF was routed to query, update, clarification, or rejection.

### A — Adaptive Autonomy

The handler may escalate, ask, update, or refuse depending on policy and context.

It enables autonomy without uncontrolled memory mutation.

### L — Layered Validation

The handler does not directly execute behavior.

It produces memory, answer, clarification, or validation HIFs for later layers.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Transparency vs. scalability | JSON-like HRI_DB is readable but may not scale like vector retrieval over huge corpora |
| Editability vs. schema safety | Human-editable memory requires validation |
| Live updates vs. stability | Frequent updates may destabilize memory if not filtered |
| LLM readability vs. compactness | LLM-friendly structures may be verbose |
| Fast access vs. persistence | In-memory dictionaries are fast but require persistence strategy |
| General handler vs. specialized logic | A generic handler needs specialized sub-handlers for complex reasoning |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Overwriting useful memory | Preserve provenance, confidence, and update history |
| Storing noisy facts | Use CNE filtering and validation policies |
| Ambiguous queries | Emit ClarificationRequestHIF |
| Inconsistent updates | Route to CEU |
| LLM hallucination during reasoning | Use bounded JSON context and schema validation |
| DB grows without control | Add pruning, freshness, and forgetting policies |
| Human edits break schema | Use schema validation and edit review |
| Sensitive information stored incorrectly | Route through SIAH policies |
| Direct memory mutation bypasses handler | Require all writes to pass through handler cells |
| Query returns stale information | Include freshness and confidence metadata |

---

## Implementation Notes

A practical HRI_DB Handler implementation should define:

```text
HRI_DB schema
entity model
relation model
allowed memory operations
query language or access conventions
update policies
confidence model
provenance fields
freshness / forgetting model
clarification rules
schema validation
human edit policy
LLM access policy
persistence strategy
```

A minimal HRI_DB may include:

```text
robots
persons
objects
scene_elements
map_areas
events
preferences
social_context
task_state
robot_state
```

The exact schema is domain-specific.

The pattern only requires that HRI_DB remain explicit, inspectable, and accessed through controlled semantic handlers.

---

## Relationship to CNE

CNE decides what changed.

HRI_DB Handler decides how maintained memory should react to that change.

```text
CNE:
  Is this new or meaningfully different?

HRI_DB Handler:
  Should we store, update, merge, query, validate, or ignore it?
```

This makes HRI_DB Handler the natural second pattern in the Context Management and Reasoning layer.

---

## Transition to Specialized HRI_DB Handlers

The next patterns reuse this handler structure for specific reasoning roles:

```text
Spatial-Based Reasoning (SBR)
Consistency Evaluator and Updater (CEU)
Query Social Handler (QSH)
Deep Social Insight Extractor (DSIE)
System Integrity and Agency Handler (SIAH)
```

Each of these is a specialized way to operate over HRI_DB while preserving traceability, editability, and semantic control.
