---
title: Context Novelty Extractor (CNE)
sidebar_position: 12
---

# Context Novelty Extractor (CNE)

## Intent

**Context Novelty Extractor (CNE)** is an HRI design pattern for detecting meaningful change across multiple context streams.

It receives context HIFs from the previous layers:

```text
Human Context
Scene Context
Robot Context
```

It first unifies them into a coherent **Unified Context HIF**.

It then compares the current unified context with a previous unified context, baseline, or remembered state, and emits a **Δ Unified Context HIF** that represents what changed.

In short:

```text
multiple context HIFs
  → unified context
  → compare with previous context
  → extract meaningful delta
  → trigger memory, reasoning, visualization, or proactivity
```

CNE extracts what changed with respect to a previous context frame, snapshot, or maintained reference state.

---

## Problem

Human, Scene, and Robot Context layers may produce a continuous flow of rich semantic HIFs.

If every HIF triggered memory updates, database writes, reasoning, or planning, the system would become:

```text
noisy
expensive
unstable
over-reactive
hard to debug
```

However, if the system ignores change, it may miss important events:

```text
a person appeared
a person disappeared
an object moved
a door closed
the robot battery dropped
a user gave a new instruction
a social situation changed
```

CNE solves this by acting as a semantic change gate.

It asks:

```text
What changed enough to matter?
```

Only meaningful novelty should be promoted to deeper context management, memory update, reasoning, or proactive behavior.

---

## Context

Use CNE when the architecture has:

- multiple context streams
- a need to build a unified interaction snapshot
- a need to compare current context with previous context
- frequent updates that should not all enter memory
- a need to trigger reasoning only on meaningful change
- a need to visualize the robot's current unified understanding
- a need to detect both change and persistent lack of change

CNE is especially useful before updating HRI_DB.

Without a novelty gate, every small perception jitter or repeated HIF may become a database update or reasoning event.

---

## HML Structure

The pattern has two main stages:

```text
Unification SG
Novelty SG
```

The **Unification SG** combines multiple context HIFs into a single synchronized Unified Context HIF.

The **Novelty SG** compares the current Unified Context HIF with the previous Unified Context HIF and extracts the meaningful delta.

<div align="center">

<img
  src="/social-hri-framework/img/hml/context-novelty-extractor.svg"
  alt="Context Novelty Extractor combining Human, Scene, and Robot Context into a unified context HIF and extracting delta against previous context"
  width="100%"
/>

</div>


---

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Human Context HIF | Input HIF | Carries current human-related semantic context |
| Scene Context HIF | Input HIF | Carries current scene, object, map, and environment context |
| Robot Context HIF | Input HIF | Carries current robot self-state and actuation context |
| Unification SG | SG | Synchronizes and merges multiple context streams |
| Unified Context HIF | HIF | Represents the current interaction state as one coherent context object |
| Previous Unified Context HIF | HIF / memory reference | Represents a previous snapshot or baseline |
| Novelty SG | SG | Compares current and previous context according to policy |
| Δ Unified Context HIF | Output HIF | Describes what changed and why it matters |
| Proactivity trigger | Optional downstream signal | May activate when change or persistent non-change is meaningful |

---

## Flow

A typical CNE flow is:

```text
1. Human, Scene, and Robot Context HIFs arrive.
2. Unification SG synchronizes and merges them.
3. The result is a Unified Context HIF.
4. The Unified Context HIF may already be sent to visualization or debugging tools.
5. Novelty SG compares the current unified context with previous unified context.
6. It extracts meaningful differences.
7. It emits a Δ Unified Context HIF.
8. If Δ is meaningful, downstream memory or reasoning handlers may run.
9. If Δ = 0, a proactivity policy may decide whether persistent no-change is meaningful.
```

The previous context does not have to be exactly the previous frame.

It may be:

```text
the previous unified snapshot
the latest committed HRI_DB state
an expected context
a task-specific baseline
a human-approved reference state
```

---

## Unified Context as a Display Object

The Unified Context HIF is useful even before novelty extraction.

Once Human, Scene, and Robot Context are synchronized into one HIF, the result can be sent to a display, debug tool, or operator-facing interface.

For example:

```text
Unified Context HIF
  → RViz-style visualization
  → Cogniteam-style operational display
  → digital twin
  → debugging dashboard
  → operator situation monitor
```

This makes the robot's current understanding inspectable.

It may show:

```text
tracked people
objects
obstacles
doors
robot pose
robot resources
battery state
map-relative locations
social room annotations
last-seen information
confidence and uncertainty
```

The same Unified Context HIF can therefore serve both reasoning and visualization.

---

## Visualization Examples

The following images show two possible ways to visualize the same kind of unified context.

They are not part of the CNE pattern itself.

They illustrate how a Unified Context HIF can support different display and debugging tools.

<div align="center">

<img
  src="/social-hri-framework/img/hml/rviz-unified-context.png"
  alt="RViz-style visualization of a unified context HIF"
  width="100%"
/>
</div>

**Unified context visualization in RViz.**  
The blue skeleton represents a detected human within the robot’s camera field of view, shown in red. The yellow ray represents the interpreted pointing direction. It intersects with a bottle that was detected earlier and maintained in the scene memory. This demonstrates the role of Context Management: social meaning, such as pointing to an object, may require reasoning over the current human context together with remembered scene context, even when the referenced object is no longer visible in the current camera frame.

<div align="center">

<img
  src="/social-hri-framework/img/hml/cogniteam-unified-context.png"
  alt="Cogniteam-style visualization of a unified context HIF"
  width="100%"
/>

</div>
**Cogniteam Nimbus-based unified context dashboard.**  
This customizable dashboard, built on top of [Cogniteam Nimbus](https://www.cogniteam.com), shows another possible visualization of the same kind of unified context. Moving clockwise, the dashboard exposes what the robot hears and interprets from the human’s text input, detected human gestures and emotions, the recognized social context, readable access to the HRI_DB, anomaly indicators and robot-internal affective/state measures, the robot’s camera view, and the robot’s 3D understanding of the world. This illustrates how a Unified Context HIF can support both debugging and operator awareness by making human, scene, robot, and social context visible in one place.

---

## What Counts as Novelty?

Novelty is policy-dependent.

The same change may be important in one context and irrelevant in another.

For example, a small change in gaze direction may not matter during navigation, but may matter during close social interaction.

### Human Novelty

Examples of human-context novelty include:

```text
new person appeared
known person disappeared
person changed posture
person spoke
new gesture detected
gaze shifted toward the robot
facial expression changed
user preference expressed
user repeated a request
```

### Scene Novelty

Examples of scene-context novelty include:

```text
object moved
door opened or closed
obstacle appeared
stairs detected
slope detected
hazard detected
room state changed
map element updated
```

### Robot Novelty

Examples of robot-context novelty include:

```text
battery crossed threshold
CPU or GPU load changed significantly
network connectivity degraded
actuator became unavailable
localization confidence dropped
task execution state changed
motion system became degraded
```

### Social Novelty

Some novelty is not purely physical.

Examples of social novelty include:

```text
the interaction moved from casual to formal setting
the user became frustrated
the user waited longer than expected
someone repeated a request
expected confirmation did not arrive
the group arrangement changed
the robot's behavior no longer fits the room context
```

Social novelty may require deeper downstream handlers, such as DSIE or SCV.

---

## Δ = 0 and Proactivity

CNE can also detect the absence of meaningful change.

This is important because no change can sometimes be meaningful.

For example:

```text
the person is still waiting
the user has not responded
the robot has not progressed
the object has not appeared
no one has entered the room for a while
the expected confirmation did not arrive
```

If:

```text
Δ = 0
```

this does not automatically mean the robot should act.

However, under some policies, persistent no-change can become meaningful.

For example:

```text
If the user is waiting and nothing changed for 10 seconds:
  ask whether help is needed.

If the robot expected a human response and no response arrived:
  repeat or rephrase.

If the task cannot progress and no new information arrived:
  ask clarification or escalate.
```

The key principle is:

```text
No novelty is not automatically a problem.
But under some policies, persistent no-change can become meaningful.
```

---

## Output HIFs

CNE may output a **ContextDeltaHIF**.

Example:

```json
{
  "type": "ContextDeltaHIF",
  "properties": {
    "changed_entities": ["door_12", "person_bob"],
    "changes": [
      {
        "entity": "door_12",
        "property": "state",
        "previous": "open",
        "current": "closed"
      },
      {
        "entity": "person_bob",
        "property": "location",
        "previous": "meeting_room",
        "current": "corridor"
      }
    ],
    "novelty_level": "high",
    "recommended_handlers": ["CEU", "SBR"]
  },
  "confidence": {
    "delta": 0.88
  },
  "processing_history": [
    "UnificationSG",
    "NoveltySG"
  ]
}
```

CNE may also output a no-change HIF when persistent lack of change is meaningful:

```json
{
  "type": "ContextDeltaHIF",
  "properties": {
    "delta": "none",
    "duration_without_change": "10s",
    "proactivity_candidate": true,
    "reason": "user_waiting_without_progress"
  },
  "confidence": {
    "stability": 0.93
  },
  "processing_history": [
    "UnificationSG",
    "NoveltySG"
  ]
}
```

---

## Why CNE Matters Before HRI_DB

CNE is a gate between continuous context flow and maintained memory.

Without CNE:

```text
every frame may become a database update
every small jitter may become a reasoning event
every repeated HIF may trigger expensive handlers
every stable context may be reprocessed unnecessarily
```

With CNE:

```text
only meaningful changes are promoted
stable context can remain stable
reasoning can focus on what changed
memory updates become more controlled
proactivity can be policy-driven
```

CNE helps prevent the HRI_DB from becoming a noisy mirror of every sensor update.

It allows HRI_DB to remain a maintained semantic model rather than a raw stream archive.

---

## SOCIAL Principles Supported

### S — Separated Contexts

CNE receives Human, Scene, and Robot Context as separate streams, then unifies them explicitly.

The separation remains visible.

The unified HIF is a constructed semantic object, not an implicit mixture.

### O — Open Declarative

The delta is represented declaratively.

It can state:

```text
what changed
what did not change
which entities were involved
what previous state was used
what confidence was assigned
which downstream handlers are recommended
```

### C — Clear Cognition

CNE makes it clear whether downstream reasoning was triggered by:

```text
a change
a lack of change
a threshold crossing
a policy-defined novelty rule
```

### I — Interpretable Gates

The Unification SG and Novelty SG are explicit gates.

They allow the architecture to explain why a context update was or was not promoted.

### A — Adaptive Autonomy

CNE can support proactive behavior, but only through policy.

The robot may respond to meaningful change or persistent no-change, depending on the context.

### L — Layered Validation

CNE does not decide final behavior.

It emits novelty and delta HIFs that later handlers can validate, store, query, or use for planning.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Sensitivity vs. stability | Low thresholds detect more change but may create noise |
| Freshness vs. cost | Frequent comparison improves freshness but increases computation |
| Proactivity vs. interruption | No-change triggers may be helpful or annoying |
| Unified context vs. modularity | Unified HIFs are useful, but the original context sources should remain traceable |
| Delta precision vs. explainability | Rich deltas are more useful but require better comparison logic |
| Short-term comparison vs. long-term memory | Comparing only to the previous frame may miss larger contextual shifts |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Too sensitive | Thresholds, smoothing, debounce windows |
| Not sensitive enough | Lower thresholds for high-risk entities |
| Context jitter | Temporal windows and confidence filtering |
| Wrong entity matching | Stronger tracking and identity resolution |
| Flood of deltas | Rate limiting and novelty aggregation |
| Missed social change | Downstream DSIE or explicit social novelty rules |
| Proactivity over-triggered | Policy gating and cooldowns |
| Stale previous context | Freshness metadata and baseline validation |
| Unified context loses source detail | Preserve provenance and source history |
| Δ = 0 misinterpreted | Require policy-specific no-change rules |

---

## Implementation Notes

A practical CNE implementation should define:

```text
which HIF types are unified
how time synchronization is performed
how current and previous context are matched
which fields are compared
which changes are meaningful
which thresholds apply
how confidence is computed
how long no-change must persist before it matters
which downstream handlers are recommended
how deltas are aggregated
how visualization receives the unified context
```

The novelty policy may be different for different entity types.

For example:

```text
door state:
  trigger on open/closed change

battery:
  trigger on threshold crossing

person location:
  trigger on room-level change or proximity change

gaze:
  trigger only during close interaction

object pose:
  trigger on movement beyond spatial threshold

silence:
  trigger only if a response was expected
```

---

## Relationship to HRI_DB Handler

CNE decides what changed.

HRI_DB Handler decides how maintained memory should react to that change.

```text
CNE:
  Is this new or meaningfully different?

HRI_DB Handler:
  Should we store, update, merge, query, validate, or ignore it?
```

This makes CNE the natural first pattern in the Context Management and Reasoning layer.

It filters context flow before deeper memory integration and reasoning begin.
