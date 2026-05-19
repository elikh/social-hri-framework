---
title: Example — Basic Input Sublayer
sidebar_position: 4
---

# Example — Basic Input Sublayer in the Human Context

This page shows one possible way to compose the first two Human Context patterns into a **basic input sublayer**.

It is not a required architecture.  
It is an illustrative composition showing how raw sensor streams may become a unified semantic interaction frame.

The example is based on three parallel input rails:

```text
camera      → visual human evidence
microphone  → spoken and affective evidence
LiDAR       → spatial footprint evidence
```

These streams are converted into HIFs, synchronized, grounded in 3D with respect to the map, tracked over time, and emitted as a richer interaction frame.

---

## Example Composition

<div align="center">

<img
  src="/social-hri-framework/img/hml/human-context-basic-input-layer.svg"
  alt="Example of a Basic Input Sublayer in the Human Context"
  width="100%"
/>

</div>

---

## What the Diagram Shows

The diagram illustrates how a basic Human Context input layer may be assembled from reusable HML patterns.

### Visual rail

```text
camera → HC → Video Analyzer SME → HIF
```

The video analyzer is modeled as an SME because several visual experts operate over the same video input:

```text
Person detector
Skeleton extractor
Facial expression classifier
Gaze detector
```

The result is a visual HIF that contains synchronized evidence about the person as seen in the current interaction moment.

### Audio rail

```text
microphone → HC → Audio Analyzer SME → HIF
```

The audio analyzer is also modeled as an SME. It may apply several experts over the same audio segment:

```text
Speech to text
Azimuth extractor
Sentiment classifier
```

The resulting audio HIF may include what was said, where the sound came from, and an affective interpretation of the utterance.

### LiDAR rail

```text
LiDAR → HC → HIF → Footprint Extractor ST → HIF
```

The LiDAR rail produces spatial footprint evidence.  
This can help locate a person or moving body within the robot's sensing region and relate the perception stream to the map.

---

## Synchronization and 3D Grounding

The three HIF streams are synchronized by an SG.

```text
visual HIF
audio HIF
LiDAR HIF
    ↓
SG
```

The SG creates a temporally coherent interaction frame from multiple sensor modalities.

This is important because the robot should not accidentally bind a face, a spoken sentence, and a LiDAR footprint from unrelated moments.

The synchronized HIF then enters a `2D → 3D EAG`.

In this example, the EAG enriches the frame with:

```text
position
3D skeleton
map-relative grounding
```

The EAG may also decide how much processing fidelity is appropriate under current resource constraints, as described in the EAG pattern.

---

## Tracking Over Time

After spatial grounding, the frame passes through a `Tracker ST`.

```text
2D → 3D EAG → Tracker ST → HIF
```

The tracker assigns and maintains a stable identity across time.

This allows the robot to understand that a person who moves within the sensing region is still the same person, rather than a new detection on every frame.

---

## Resulting Interaction Frame

The final HIF is no longer just a raw video frame, raw audio snippet, or isolated LiDAR scan.

It is a semantic interaction frame that may include:

```text
Tracked ID
3D skeleton
Facial expression and gaze information
Spoken text and sentiment
```

This creates a basic but meaningful Human Context representation.

For example:

- If a person walks inside the robot's sensing region, the tracker preserves identity.
- If that person speaks, the audio azimuth can help bind the utterance to the correct tracked human.
- If the robot has a map, the 3D skeleton and footprint can be grounded in the robot's spatial world model.
- If the person smiles, looks at the robot, and speaks, those cues can be synchronized into the same interaction frame.

---

## Design Note

This composition is only one possible realization of a basic input sublayer.

Different robots may use different sensors, experts, policies, or middleware.  
The important architectural idea is not the exact list of modules, but the separation of responsibilities:

| Responsibility | Example component |
|---|---|
| Create HIFs from raw sources | HC |
| Extract synchronized visual or audio evidence | SME |
| Synchronize cross-modal HIFs | SG |
| Add 3D grounding under resource constraints | EAG |
| Preserve identity across time | Tracker ST |
| Emit structured human-context information | Final HIF |

This keeps the basic input layer modular, inspectable, and replaceable.

---

## Why This Matters

A basic input sublayer should not merely detect things.

It should create a coherent semantic basis for the next Human Context stages.

The purpose of this composition is to transform:

```text
raw sensor streams
```

into:

```text
tracked, grounded, synchronized human-context HIFs
```

Once this stream exists, the architecture can move to higher-level Human Context interpretation, such as semantic reuse, caching, intent interpretation, or adaptive signature learning.

The next pattern, **Tiered Semantic Cache / Proxy (TSC/TSP)**, addresses a different pressure point: how to avoid repeatedly reinterpreting semantically similar inputs when previous interpretations can be safely reused.
