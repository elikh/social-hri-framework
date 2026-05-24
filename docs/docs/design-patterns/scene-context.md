---
title: Scene Context
sidebar_position: 9
---

# Scene Context

## Overview

The **Scene Context** layer describes the surrounding environment in interaction-relevant semantic terms.

It answers questions such as:

```text
What is in the scene?
Where is it relative to the map?
Which objects are relevant now?
Which obstacles, doors, stairs, or slopes may affect interaction?
What kind of room or social setting is this?
How fresh or reliable is the scene information?
```

This layer is intentionally presented as a **reuse** of the patterns already introduced in the Human Context section.

The goal is not to introduce a new family of mechanisms.

The goal is to show that the same HML pattern language can be reused with a different semantic target.

```text
Human Context:
  understand the human participant

Scene Context:
  understand the surrounding environment
```

---

## Reusing the Human Context Basic Pattern

The Human Context basic input layer showed how raw sensor streams can become semantic HIFs through a composition such as:

```text
sensor input
  → HC
  → SME
  → HIF
  → SG
  → EAG
  → Tracker ST
  → enriched HIF
```

Scene Context uses the same architectural idea.

The difference is the semantic vocabulary of the experts.

In Human Context, the experts may detect:

```text
person
skeleton
facial expression
gaze
speech
sentiment
```

In Scene Context, the experts may detect:

```text
objects
closed doors
stairs
obstacles
slopes
surfaces
room layout
social room annotations
map-relative scene elements
```

This is why Scene Context is a useful reward point in the documentation: it demonstrates that SME, EAG, SG, ST, HIF flow, and tracking are not one-off structures designed only for the human layer.

They are reusable architectural patterns.

---

## Example Composition

The following diagram illustrates one possible composition of a Scene Context layer.

It is not a required implementation.

It reuses the same basic structure introduced earlier, but applies it to scene understanding.

<div align="center">

<img
  src="/social-hri-framework/img/hml/scene-context.svg"
  alt="Scene Context composition reusing SME, SG, EAG, and Tracker ST for environmental understanding"
  width="100%"
/>

</div>


---

## Visual Scene Rail

One input rail may begin with a camera stream:

```text
camera
  → HC
  → Video Analyzer SME
  → HIF
```

The **Video Analyzer SME** may run several scene-oriented experts over the same visual input.

For example:

```text
object detector
closed door detector
staircase detector
surface classifier
scene affordance detector
```

The result is a HIF that carries visual semantic evidence about the environment.

This is structurally similar to the visual SME used in the Human Context layer.

Only the semantic target changes.

---

## LiDAR Scene Rail

A second rail may begin with LiDAR:

```text
LiDAR
  → HC
  → LiDAR Analyzer SME
  → HIF
```

The **LiDAR Analyzer SME** may run experts such as:

```text
obstacle detector
slope detector
free-space detector
traversability detector
```

This produces spatial and geometric evidence about the scene.

For example, it may identify:

```text
an obstacle in the path
a sloped surface
a narrow passage
a change in floor height
```

This information can later be grounded in the map and combined with visual scene elements.

---

## SLAM and Semantic Map Context

The Scene Context layer may also include a **SLAM ST**.

This ST may:

```text
create a new map
load an existing map
localize the robot within the map
update the map over time
provide map-relative coordinates
```

However, in HML this map does not have to remain purely geometric.

It may also carry semantic and social annotations.

For example:

```text
meeting room:
  formal interaction expected

kitchen:
  casual interaction is acceptable

charging area:
  robot should avoid blocking access
  robot may need to speak louder

corridor:
  keep motion predictable
  avoid stopping in the middle
```

This means the Scene Context layer can represent both:

```text
physical layout
social meaning of places
```

The environment becomes more than a map.

It becomes an interaction-relevant semantic scene.

---

## Synchronization and Grounding

The visual, LiDAR, and SLAM/map HIFs are synchronized by an SG.

```text
Visual Scene HIF
LiDAR Scene HIF
Map / SLAM HIF
  → SG
```

The SG creates a coherent scene-level frame from multiple sources.

The synchronized result may then enter a `2D → 3D EAG`.

The EAG grounds scene elements with respect to the 3D map and may prioritize deeper processing for scene elements that matter now.

For example, the EAG may prioritize:

```text
nearby objects
task-relevant objects
moving objects
objects close to humans
safety-relevant obstacles
uncertain detections
closed doors blocking a route
stairs or slopes affecting navigation
```

As in the Human Context layer, the EAG may choose between different fidelity levels depending on resources and task pressure.

---

## Tracking, Freshness, and Forgetting

After grounding, a **Tracker ST** may maintain scene elements over time.

This is important because scene elements may move, disappear, or become uncertain.

For example:

```text
the robot moves and sees the same chair from a new angle
a human moves an object to a new location
a door was open before but is now closed
an obstacle was seen recently but is no longer visible
```

The Scene Context HIF should therefore preserve temporal metadata such as:

```text
tracked_id
map_relative_position
last_seen
confidence
freshness
source history
uncertainty
forgetting policy
```

This allows the robot to avoid treating every frame as a new world.

It also allows the system to gradually reduce confidence when something has not been observed for a while, instead of immediately deleting it.

---

## Output SceneContext HIF

A Scene Context layer may emit a HIF that includes:

```text
3D map
tracked scene objects
map-relative object locations
closed doors
stairs
obstacles
slopes
surfaces
room labels
social room annotations
hazards
freshness and uncertainty metadata
```

For example, the final HIF may tell downstream layers:

```text
There is a closed door between the robot and the target room.
A chair is located near the meeting table.
The corridor is clear but narrow.
The current room is a meeting room, where formal behavior is expected.
The object location is reliable because it was observed recently.
```

This information can then support context management, task planning, social planning, navigation, and action selection.

---

## Visualization and Debugging

Scene Context is especially useful because it can often be visualized.

A development or operator interface may show:

```text
map
tracked objects
object confidence
last-seen timestamps
obstacles
doors
stairs
room labels
social zones
hazards
```

This is useful for:

```text
debugging perception pipelines
validating map-relative grounding
explaining robot behavior
supporting human correction
monitoring operator-facing deployments
```

A visual scene representation can help developers and operators see what the robot currently believes about its environment.

This is also important for trust.

If the robot avoids a route because it believes a door is closed or an obstacle is present, the system should be able to show that belief explicitly.

---

## Why This Layer Matters

Scene Context turns physical surroundings into interaction-relevant semantic information.

It supports:

| Goal | Scene Context contribution |
|---|---|
| Environmental grounding | Connects detections to a 3D map |
| Safety | Represents obstacles, slopes, doors, stairs, and hazards |
| Task support | Identifies task-relevant objects and locations |
| Social behavior | Adds social meaning to rooms and zones |
| Continuity | Tracks scene elements over time |
| Debuggability | Makes the robot's scene understanding visible |
| Reuse | Demonstrates that Human Context patterns generalize to the environment |

The layer is therefore not just perception.

It is semantic scene understanding for HRI.

---

## Design Note

This page describes one possible composition.

Different robots may use different sensors and different scene experts.

A robot may rely on:

```text
RGB camera
RGB-D camera
LiDAR
depth camera
semantic segmentation
object detection
SLAM
existing maps
building plans
human annotations
external facility databases
```

The architectural point remains the same.

```text
SME can extract multiple scene cues in parallel.
SG can synchronize scene HIFs.
EAG can prioritize and ground scene elements.
Tracker ST can maintain continuity over time.
HIFs make the scene state explicit and inspectable.
```

This is the same pattern language introduced earlier, reused for a new semantic layer.

---

## Transition to Robot Context

Human Context describes the human participant.

Scene Context describes the surrounding environment.

The next layer is **Robot Context**.

Robot Context shifts the semantic target again:

```text
What is the robot itself doing?
What is its state?
What are its capabilities and constraints right now?
What does it know about its own body, resources, goals, and execution status?
```

Together, Human Context, Scene Context, and Robot Context create the local semantic basis for higher-level context management and social planning.
