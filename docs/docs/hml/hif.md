---
title: HIF — HRI Interaction Frame
sidebar_position: 2
---

# HIF — HRI Interaction Frame

## Overview

HIF (HRI Interaction Frame) is the central semantic carrier of HML.

A HIF is a structured envelope that represents a meaningful unit of interaction information. It may originate from a sensor, a user utterance, a perception module, a reasoning process, a database query, an internal robot monitor, or an action request.

A HIF is not merely a message, event, or video frame. It is a semantic interaction object that carries raw content, interpreted properties, metadata, confidence, and traceability information through the HRI architecture.

In HML, most architectural patterns can be understood as operations over HIFs:

- Creating HIFs
- Transforming HIFs
- Enriching HIFs
- Synchronizing HIFs
- Validating HIFs
- Delaying HIFs
- Escalating HIFs
- Executing HIFs

The HIF is therefore the atomic modeling unit that connects perception, cognition, memory, validation, autonomy, and embodied action.

---

# Why HIF is Needed

Human-Robot Interaction systems combine many heterogeneous streams:

- Camera frames
- Audio snippets
- Speech transcripts
- LiDAR scans
- Skeleton estimates
- Gaze vectors
- Facial expressions
- Object detections
- User instructions
- Robot resource states
- Database facts
- LLM outputs
- Navigation requests
- Social policies
- Safety constraints

Without a shared semantic carrier, each subsystem tends to exchange information in its own local representation. This makes the architecture difficult to inspect, synchronize, validate, and reuse.

HIF provides a common conceptual structure:

```text
raw content + semantic properties + metadata + confidence + history
```

The same modeling unit can therefore represent both a raw camera frame and a high-level instruction such as:

```text
Bring this bottle to Bob
```

This enables design patterns to be expressed independently of a specific robot platform, middleware, or implementation language.

---

# Conceptual Structure

A HIF is a conceptual schema, not necessarily a strict serialization format.

It may be implemented as JSON, a Python dataclass, a TypeScript interface, a ROS message, protobuf, or any other suitable representation.

A typical HIF contains:

```text
HIF {
  id
  type
  timestamp
  content
  properties
  confidence
  source_history
  processing_history
}
```

## Fields

| Field | Meaning |
|---|---|
| `id` | Unique identifier for the interaction frame |
| `type` | Semantic type of the frame |
| `timestamp` | Time point or time interval represented by the HIF |
| `content` | Raw or primary content carried by the HIF |
| `properties` | Dynamic semantic dictionary added by experts and transformers |
| `confidence` | Confidence value or structured confidence map |
| `source_history` | Origin of the data, such as sensor, DB, user, or module |
| `processing_history` | Record of semantic cells, policies, or experts applied to the HIF |

Not every field must be present in every implementation. However, the conceptual distinction between raw content, semantic properties, and traceability should remain clear.

---

# HIF as a Semantic Envelope

The HIF acts as an envelope around interaction information.

<div align="center">

<svg width="920" height="430" viewBox="0 0 920 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hif-envelope-title hif-envelope-desc">
  <title id="hif-envelope-title">HIF as a Semantic Envelope</title>
  <desc id="hif-envelope-desc">
    A HIF is a semantic envelope containing raw content, type, timestamp, semantic properties, confidence, source history, and processing history.
  </desc>

  <defs>
    <marker id="arrow-hif-envelope" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#111827" />
    </marker>
  </defs>

  <!-- Central HIF envelope -->
  <rect x="350" y="150" width="220" height="120" rx="22" ry="22"
        fill="none" stroke="#111827" strokeWidth="2.2" />
  <text x="460" y="195" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="#111827">HIF</text>
  <text x="460" y="224" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">HRI Interaction Frame</text>
  <text x="460" y="248" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">semantic envelope</text>

  <!-- Top inputs -->
  <rect x="260" y="35" width="160" height="54" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="340" y="58" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Type</text>
  <text x="340" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">semantic role</text>

  <rect x="500" y="35" width="180" height="54" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="590" y="58" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Timestamp</text>
  <text x="590" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">time point / window</text>

  <!-- Left inputs -->
  <rect x="40" y="125" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="135" y="151" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Raw / Primary Content</text>
  <text x="135" y="173" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">audio, image, text, action</text>

  <rect x="40" y="245" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="135" y="271" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Semantic Properties</text>
  <text x="135" y="293" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">dynamic {`{key: value}`}</text>

  <!-- Right inputs -->
  <rect x="690" y="125" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="785" y="151" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Confidence</text>
  <text x="785" y="173" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">global or per-property</text>

  <rect x="690" y="245" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="785" y="271" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Source History</text>
  <text x="785" y="293" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">sensor, user, DB, module</text>

  <!-- Bottom input -->
  <rect x="360" y="345" width="200" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="460" y="369" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Processing History</text>
  <text x="460" y="390" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">cells, operators, policies</text>

  <!-- Arrows into HIF -->
  <line x1="340" y1="89" x2="405" y2="145"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
  <line x1="590" y1="89" x2="515" y2="145"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />

  <line x1="230" y1="157" x2="342" y2="185"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
  <line x1="230" y1="277" x2="342" y2="235"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />

  <line x1="690" y1="157" x2="578" y2="185"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
  <line x1="690" y1="277" x2="578" y2="235"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />

  <line x1="460" y1="345" x2="460" y2="278"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
</svg>

</div>

This envelope allows the system to preserve both the original information and the semantic interpretations that are gradually attached to it.

---

# HIF Types

A HIF may represent many different kinds of interaction information.

| Type | Meaning |
|---|---|
| `VideoFrame` | A camera frame or image-based input |
| `AudioSnippet` | A bounded audio segment |
| `Text` | Typed, transcribed, or generated text |
| `Gesture` | Interpreted human movement or gesture |
| `PersonState` | Human identity, pose, gaze, affect, or availability |
| `SceneState` | Objects, spaces, obstacles, and environmental relations |
| `RobotState` | Internal robot state such as battery, CPU, localization, or actuator status |
| `Fact` | Declarative statement about the world |
| `Query` | Request for information from memory, a human, or an expert |
| `Instruction` | User command or goal specification |
| `Task` | Partially or fully resolved goal |
| `PendingTask` | Task delayed due to missing information or timing constraints |
| `ActionRequest` | Request for speech, motion, navigation, manipulation, or another effect |
| `ValidationResult` | Result of a consistency, safety, social, or autonomy check |

The exact type system is domain-specific. HML requires only that the type communicate the semantic role of the frame.

---

# Properties as Dynamic Semantic Memory

The `properties` field is the main place where meaning accumulates.

Semantic Transformers, Sync Gates, Escalation Switches, and validation layers may all add or modify properties.

Example:

```json
{
  "person": {
    "id": "p12",
    "name": "Bob",
    "location": "kitchen"
  },
  "gesture": "pointing",
  "intent": "bring_object",
  "target_object": {
    "type": "bottle",
    "id": "obj7"
  }
}
```

Properties may be produced by:

- Object detectors
- Person trackers
- Skeleton extractors
- Speech-to-text modules
- Natural language interpreters
- Gesture classifiers
- Spatial reasoners
- Social policy evaluators
- Safety monitors
- LLMs
- Database lookups

A HIF therefore becomes richer as it moves through the system.

---

# HIF Lifecycle

A HIF usually evolves through several architectural stages.

<div align="center">

<svg
  width="100%"
  viewBox="0 0 920 420"
  style={{maxWidth: '920px', height: 'auto'}}
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="hif-lifecycle-title hif-lifecycle-desc"
>
  <title id="hif-lifecycle-title">HIF Lifecycle</title>
  <desc id="hif-lifecycle-desc">
    A HIF evolves from source information to initial semantic representation,
    semantic enrichment, validation, and optionally execution.
  </desc>

  <defs>
    <marker id="arrow-hif-lifecycle" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#111827" />
    </marker>
  </defs>

  <!-- Top row -->

  <!-- Source -->
  <rect x="20" y="60" width="140" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="90" y="84" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Source</text>
  <text x="90" y="103" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">sensor / user /</text>
  <text x="90" y="117" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">internal event</text>

  <!-- HC -->
  <rect x="205" y="52" width="120" height="74" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="265" y="80" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">HC</text>
  <text x="265" y="100" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">HIF Creator</text>

  <!-- Initial HIF -->
  <rect x="370" y="60" width="140" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="440" y="84" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Initial HIF</text>
  <text x="440" y="103" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">semantic frame</text>

  <!-- ST -->
  <rect x="555" y="52" width="130" height="74" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="620" y="80" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">ST</text>
  <text x="620" y="100" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">Semantic</text>
  <text x="620" y="115" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">Transformer</text>

  <!-- Enriched HIF -->
  <rect x="390" y="210" width="150" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="465" y="234" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Enriched HIF</text>
  <text x="465" y="253" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">updated properties</text>

  <!-- Gate -->
  <polygon points="625,195 685,239 625,283 565,239"
           fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="625" y="228" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Gate</text>
  <text x="625" y="244" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#111827">validation / SG / ES</text>
  <text x="625" y="258" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#111827">/ policy role</text>

  <!-- Validated HIF -->
  <rect x="730" y="210" width="150" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="805" y="231" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="#111827">Validated /</text>
  <text x="805" y="249" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="#111827">Executable HIF</text>

  <!-- HE -->
  <rect x="235" y="315" width="130" height="72" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="300" y="342" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">HE</text>
  <text x="300" y="361" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">HIF Executor</text>

  <!-- Effect -->
  <rect x="410" y="315" width="180" height="72" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="500" y="341" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">External or</text>
  <text x="500" y="360" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Embodied Effect</text>

  <!-- Arrows top row -->
  <line x1="160" y1="89" x2="197" y2="89"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />
  <line x1="325" y1="89" x2="362" y2="89"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />
  <line x1="510" y1="89" x2="547" y2="89"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />

  <!-- Down from ST to Enriched HIF -->
  <line x1="620" y1="126" x2="620" y2="170"
        stroke="#111827" strokeWidth="1.4" fill="none" />
  <line x1="620" y1="170" x2="465" y2="170"
        stroke="#111827" strokeWidth="1.4" fill="none" />
  <line x1="465" y1="170" x2="465" y2="202"
        stroke="#111827" strokeWidth="1.4" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />

  <!-- Bottom row -->
  <line x1="540" y1="239" x2="557" y2="239"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />
  <line x1="685" y1="239" x2="722" y2="239"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />

<!-- Execution branch -->
<path
  d="M 805 268 V 290 H 300 V 307"
  stroke="currentColor"
  stroke-width="1.4"
  fill="none"
  marker-end="url(#arrow-hif-lifecycle)"
/>
  <!-- Optional label -->
  <text x="610" y="293" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">
    optionally executed
  </text>
</svg>

</div>

This lifecycle is not mandatory or linear in every architecture. Some HIFs may be synchronized, cached, delayed, split, merged, or routed back into memory.

However, the general idea remains:

```text
source information becomes semantic information,
semantic information becomes validated information,
validated information may become executable action.
```

---

# Source History

`source_history` records where a HIF came from.

Examples include:

```json
{
  "source_history": [
    {
      "source": "camera_front",
      "type": "sensor",
      "timestamp": "2026-05-11T12:34:01.120Z"
    }
  ]
}
```

or:

```json
{
  "source_history": [
    {
      "source": "HRI_DB",
      "type": "memory",
      "query": "person_location(Bob)"
    }
  ]
}
```

Source history is important because socially intelligent systems often need to reason about trust, provenance, and uncertainty.

For example:

- Was this fact stated by the user?
- Was it inferred by a model?
- Was it retrieved from memory?
- Was it detected by a noisy sensor?
- Is the information fresh or stale?

---

# Processing History

`processing_history` records how a HIF was transformed.

Example:

```json
{
  "processing_history": [
    {
      "cell": "SpeechToTextST",
      "operator": "local_stt_model",
      "output": "text",
      "confidence": 0.91
    },
    {
      "cell": "IntentInterpreterST",
      "operator": "semantic_parser",
      "output": "instruction",
      "confidence": 0.84
    },
    {
      "cell": "SpatialResolverES",
      "operator": "pointing_vector_resolver",
      "output": "object_id",
      "confidence": 0.79
    }
  ]
}
```

Processing history supports:

- Explainability
- Debugging
- Auditing
- Failure analysis
- Safety review
- Reproducibility
- Human-facing explanations

It helps the system answer questions such as:

```text
Why did the robot think I meant that bottle?
Why did it ask for clarification?
Which model produced this interpretation?
Was an LLM involved?
Was the action blocked by a safety policy?
```

---

# Confidence

Confidence may be represented in different ways.

A simple HIF may contain one global confidence value:

```json
{
  "confidence": 0.87
}
```

A more detailed HIF may contain confidence per property:

```json
{
  "confidence": {
    "speech_to_text": 0.91,
    "intent": 0.84,
    "object_reference": 0.72,
    "target_person": 0.95
  }
}
```

Property-level confidence is often preferable in HRI because different semantic components may have different reliability levels.

For example, the system may confidently know that the user said `Bob`, but be uncertain about which bottle was referenced.

---

# Example: From Speech to Pending Task

This example shows how a HIF may evolve from raw text into a pending task.

## User Input

```text
Bring this bottle to Bob
```

## Initial Text HIF

```json
{
  "id": "hif_001",
  "type": "Text",
  "timestamp": "2026-05-11T12:34:01.120Z",
  "content": "Bring this bottle to Bob",
  "properties": {},
  "source_history": [
    {
      "source": "microphone_front",
      "type": "sensor"
    }
  ],
  "processing_history": []
}
```

## After Intent Interpretation

```json
{
  "id": "hif_001",
  "type": "Instruction",
  "content": "Bring this bottle to Bob",
  "properties": {
    "intent": "pick_and_place",
    "object_reference": "this bottle",
    "target_person": "Bob"
  },
  "confidence": {
    "intent": 0.88,
    "target_person": 0.96,
    "object_reference": 0.74
  },
  "processing_history": [
    {
      "cell": "IntentInterpreterST",
      "operator": "semantic_parser",
      "result": "instruction"
    }
  ]
}
```

## After Spatial Resolution

```json
{
  "id": "hif_001",
  "type": "Instruction",
  "properties": {
    "intent": "pick_and_place",
    "object_id": "bottle_5",
    "object_type": "bottle",
    "target_person": "Bob",
    "target_location": "unknown"
  },
  "confidence": {
    "object_id": 0.82,
    "target_person": 0.96,
    "target_location": 0.0
  },
  "processing_history": [
    {
      "cell": "SpatialResolverES",
      "operator": "pointing_vector_resolver",
      "result": "object_id: bottle_5"
    }
  ]
}
```

## After Task Prerequisite Resolution

```json
{
  "id": "hif_001",
  "type": "PendingTask",
  "properties": {
    "task": "pick_and_place",
    "object_id": "bottle_5",
    "target_person": "Bob",
    "missing_information": [
      "target_location"
    ],
    "clarification_request": "Where is Bob?"
  },
  "processing_history": [
    {
      "cell": "TaskPrerequisiteResolver",
      "operator": "missing_info_detector",
      "result": "pending_task"
    }
  ]
}
```

The important point is that the HIF does not merely move through the system. It changes semantic status as the system understands more about the interaction.

---

# HIF Versus Message, Event, or Object

A HIF is related to common software concepts, but it is not identical to them.

| Concept | Similarity | Difference |
|---|---|---|
| Message | Carries information between components | HIF also carries semantics, provenance, and processing history |
| Event | Represents something that happened | HIF may represent perception, memory, query, task, or action |
| Data Object | Contains structured fields | HIF is designed for semantic transformation and traceability |
| ROS Message | Can be used as an implementation format | HIF is a modeling abstraction above middleware |
| LLM Context Object | Can carry semantic state | HIF is grounded in embodied interaction and temporal synchronization |

A HIF should therefore be understood as an interaction-level semantic object.

---

# HIF and SOCIAL Principles

The HIF directly supports the SOCIAL principles.

| Principle | HIF Contribution |
|---|---|
| S-Separated Contexts | HIFs allow separate context streams to remain explicit |
| O-Open Declarative | HIF properties expose structured semantic state |
| C-Clear Cognition | HIF history makes reasoning stages traceable |
| I-Interpretable Gates | Gates can explain how and why a HIF changed state |
| A-Adaptive Autonomy | HIFs can carry autonomy state, confidence, and constraints |
| L-Layered Validation | Validation results can accumulate as HIF properties |

The HIF is therefore not only a data structure. It is the semantic substrate that makes SOCIAL architectures inspectable.

---

# Design Guidelines

When designing with HIFs:

## Keep HIFs Semantic

A HIF should represent interaction meaning, not just transport data.

## Separate Content from Properties

Raw or primary data should remain in `content`.

Interpreted meaning should be placed in `properties`.

## Preserve Traceability

Important transformations should be recorded in `processing_history`.

## Do Not Hide Logic Inside the HIF

A HIF carries information. Semantic cells perform computation.

## Use Confidence Explicitly

Probabilistic outputs should expose confidence, especially when used for action.

## Avoid Silent Overwrites

If a property is modified, the system should preserve provenance or record the change.

## Keep Properties Human-Readable

Prefer JSON-like structures that can be inspected, logged, and explained.

## Treat HIF Types as Semantic Roles

The same underlying object may change type as it moves from raw input to interpreted instruction to pending task or executable action.

---

# Implementation Notes

HML does not require a specific implementation format.

A HIF may be implemented using:

- JSON
- YAML
- Python dataclass
- TypeScript interface
- ROS message
- Protobuf
- Pydantic model
- Database record
- Event object

The implementation should preserve the conceptual separation between:

```text
content
properties
metadata
confidence
history
```

This separation is more important than the exact serialization format.

---

# Conclusion

The HIF is the core semantic carrier of HML.

It allows HRI systems to represent interaction information in a way that is:

- Multimodal
- Traceable
- Enrichable
- Synchronizable
- Validatable
- Explainable
- Executable when appropriate

By using HIFs as the common modeling unit, HML enables reusable HRI Design Patterns that remain independent of specific robots, middleware frameworks, or AI implementations.

The HIF is therefore the bridge between raw interaction data and socially meaningful robotic behavior.
