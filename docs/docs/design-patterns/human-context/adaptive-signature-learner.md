---
title: Adaptive Signature Learner (ASL)
sidebar_position: 6
---

# Adaptive Signature Learner (ASL)

## Intent

**Adaptive Signature Learner (ASL)** is an HRI design pattern for learning and classifying temporal semantic signatures from HIF streams.

ASL is useful when the meaning of an interaction is not contained in a single frame, utterance, or event, but in a **time-series pattern**.

Examples include:

- a hand gesture
- a body-motion pattern
- a repeated social cue
- a short melody
- a whistle
- a rhythmic sound
- a multimodal ritual
- a user-specific interaction pattern

The core idea is:

```text
synchronized HIF stream
  → time-series window
  → learn or classify signature
  → output semantic label
```

ASL allows a robot to learn new social or interactional meanings **on the fly**, during the interaction itself.

---

## Problem

Many socially meaningful signals unfold over time.

A single skeleton frame does not define a gesture.  
A single audio frame does not define a melody.  
A single gaze sample does not necessarily define attention.

The system must observe a bounded temporal window and interpret the pattern inside that window.

A common solution is to use a pre-trained classifier, such as a neural gesture-recognition model. That may work well for a fixed set of known classes, but it creates several limitations:

- the recognized gesture set is closed
- some gestures may be irrelevant to the robot
- important local gestures may be missing
- the model may have been trained from a different camera viewpoint
- the model may not match the robot's embodiment
- the model is not naturally personalized to a specific user or family
- adding a new gesture may require retraining or fine-tuning

ASL addresses this by making signature learning explicit, local, and controllable.

Instead of assuming all social signals are known in advance, the robot can learn:

```text
"This pattern means X"
```

and later classify similar patterns as `X`.

---

## Context

Use ASL when the architecture needs to:

- classify temporal patterns
- learn new labels during interaction
- personalize interaction to a user
- adapt to the robot's own sensor viewpoint
- support session-level or persistent learned behaviors
- keep learned symbolic associations inspectable
- avoid relying only on fixed pre-trained recognition classes

ASL is especially useful after the basic Human Context layer has already produced HIF streams such as:

```text
tracked skeletons
gaze estimates
facial expressions
spoken text
speaker identity
audio features
position relative to map
```

These HIF streams provide the semantic material from which time-series signatures can be learned.

---

## HML Structure

The ASL pattern has two modes:

```text
learn
classify
```

In **learn mode**, the ST stores a signature extracted from a recent time-series window.

In **classify mode**, the ST compares a new time-series window against stored signatures and emits the best matching label if confidence is high enough.

<div align="center">

<svg width="100%" viewBox="0 0 1040 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="asl-abstract-title asl-abstract-desc">
  <title id="asl-abstract-title">Adaptive Signature Learner Abstract Pattern</title>
  <desc id="asl-abstract-desc">A stream of HIFs is synchronized by an SG into a time-series window. A Semantic Transformer learns or classifies the window using a signature dictionary and emits an output HIF.</desc>

  <defs>
    <marker id="arrow-asl-abstract" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="46" y="153" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <rect x="54" y="161" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <rect x="62" y="169" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="108" y="200" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="108" y="237" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HIF stream</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="205" y="80" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="222" y="132" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">window policy</text>
  <text x="272" y="109" textAnchor="middle" fontSize="30" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="272" y="132" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">sync</text>

  <rect x="210" y="168" width="96" height="54" rx="8" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="258" y="202" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>
  <line x1="222" y1="140" x2="222" y2="168" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="272" y1="140" x2="272" y2="168" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />

  <rect x="390" y="132" width="145" height="126" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="462.5" y="162" textAnchor="middle" fontSize="25" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="462.5" y="188" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Time-series</text>
  <text x="462.5" y="208" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">window</text>
  <image href="/social-hri-framework/img/hml/time-series-window.svg" x="420" y="216" width="86" height="32" preserveAspectRatio="xMidYMid meet" />
  <text x="462.5" y="278" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">bounded temporal evidence</text>

 <image href="/social-hri-framework/img/hml/policy-check.svg" x="640" y="52" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
<text x="657" y="104" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">mode / threshold</text>
<text x="750" y="81" textAnchor="middle" fontSize="30" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
<text x="750" y="104" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">signature expert</text>

  <rect x="650" y="142" width="138" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="719" y="178" textAnchor="middle" fontSize="26" fontFamily="Arial, sans-serif" fill="currentColor">ST</text>
  <text x="719" y="204" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">learn / classify</text>
  <line x1="657" y1="112" x2="657" y2="142" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="750" y1="112" x2="750" y2="142" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="692" y="252" width="54" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="719" y="309" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">signature dictionary</text>
  <path d="M 692 266 C 666 258, 655 240, 650 220" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-abstract)" />
  <path d="M 746 266 C 776 258, 786 240, 788 220" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-abstract)" />

  <rect x="890" y="163" width="112" height="66" rx="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="946" y="190" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="946" y="214" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">classification</text>

  <line x1="154" y1="195" x2="202" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="306" y1="195" x2="382" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="535" y1="195" x2="642" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="788" y1="195" x2="882" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
</svg>

</div>

The SG forms a time-series window from incoming HIFs.  
The ST then either learns a new signature or classifies the current window against stored signatures.

The policy determines:

- the length of the time window
- whether the ST is in learn mode or classify mode
- which signature dictionary is used
- confidence thresholds
- persistence rules
- user or session scope
- whether a new signature requires confirmation

---

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF stream | HIF stream | Sequence of semantically meaningful observations |
| SG | Sync Gate | Builds a coherent time-series window |
| Time-Series Window HIF | HIF | Carries a bounded temporal sequence |
| ST | Semantic Transformer | Learns or classifies the window |
| Policy | Policy artifact | Controls mode, thresholds, persistence, and scope |
| λ signature expert | Semantic Operator | Extracts, stores, compares, or classifies signatures |
| Signature dictionary | Semantic memory | Maps learned signatures to labels |
| Output HIF | HIF | Carries learned or classified semantic information |

---

## Flow

ASL has two main flows.

### Learning mode

```text
1. HIFs arrive over time.
2. SG groups them into a time-series window.
3. A learning cue activates learn mode.
4. ST receives the window and the target label.
5. λ extracts or stores a signature.
6. The signature is inserted into the selected dictionary.
7. Output HIF records what was learned.
```

### Classification mode

```text
1. HIFs arrive over time.
2. SG groups them into a time-series window.
3. ST receives the window in classify mode.
4. λ compares the window to stored signatures.
5. The closest match is selected.
6. If confidence passes threshold, the label is emitted.
7. Output HIF is enriched with the classification.
```

---

## Concrete Example: Teaching a Gesture

Suppose a person waves with the right hand and says:

```text
this gesture is "come here"
```

The verbal instruction acts as a learning cue.

The ASL ST looks back over a recent skeleton time window, for example the previous 1.5 seconds, and stores the motion signature under the label:

```text
come here
```

Later, when a similar skeleton motion appears, the ST classifies the time-series window and enriches the output HIF:

```json
{
  "gesture": "come_here"
}
```

<div align="center">

<svg width="100%" viewBox="0 0 1040 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="asl-example-title asl-example-desc">
  <title id="asl-example-title">Adaptive Signature Learner Gesture Example</title>
  <desc id="asl-example-desc">A person labels a gesture as come here. HIFs are synchronized into a time-series window, learned by an ST, stored in a dictionary, and later emitted as a gesture classification HIF.</desc>

  <defs>
    <marker id="arrow-asl-example" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <path d="M 75 30 L 305 30 Q 315 30 315 40 L 315 70 Q 315 80 305 80 L 175 80 L 195 105 L 135 80 L 75 80 Q 65 80 65 70 L 65 40 Q 65 30 75 30 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="190" y="58" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">“this gesture is ‘come here’”</text>

  <g transform="translate(160,145)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="0" cy="-28" r="8" />
    <line x1="0" y1="-20" x2="0" y2="28" />
    <line x1="0" y1="-5" x2="-20" y2="12" />
    <line x1="0" y1="-5" x2="22" y2="-28" />
    <line x1="22" y1="-28" x2="22" y2="-47" />
    <line x1="0" y1="28" x2="-14" y2="62" />
    <line x1="0" y1="28" x2="16" y2="62" />
  </g>

  <rect x="260" y="178" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
  <rect x="268" y="186" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
  <rect x="276" y="194" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="322" y="225" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="322" y="261" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">skeleton HIFs</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="425" y="128" width="32" height="32" preserveAspectRatio="xMidYMid meet" />
  <text x="485" y="154" textAnchor="middle" fontSize="28" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <rect x="430" y="194" width="92" height="52" rx="8" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="476" y="228" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>
  <line x1="441" y1="165" x2="441" y2="194" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />
  <line x1="485" y1="165" x2="485" y2="194" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />

  <rect x="590" y="162" width="135" height="116" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="657.5" y="190" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="657.5" y="214" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Time-series</text>
  <text x="657.5" y="233" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">window</text>
  <image href="/social-hri-framework/img/hml/time-series-window.svg" x="620" y="238" width="75" height="28" preserveAspectRatio="xMidYMid meet" />
  <text x="657.5" y="299" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">recent motion window</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="780" y="108" width="32" height="32" preserveAspectRatio="xMidYMid meet" />
  <text x="850" y="138" textAnchor="middle" fontSize="28" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <rect x="790" y="174" width="128" height="72" rx="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="854" y="207" textAnchor="middle" fontSize="25" fontFamily="Arial, sans-serif" fill="currentColor">ST</text>
  <text x="854" y="233" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">learn / classify</text>
  <line x1="796" y1="145" x2="796" y2="174" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />
  <line x1="850" y1="145" x2="850" y2="174" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="825" y="268" width="54" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="852" y="324" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">signature dictionary</text>
  <path d="M 825 282 C 795 272, 790 250, 790 242" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-example)" />
  <path d="M 879 282 C 910 272, 918 250, 918 242" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-example)" />

  <rect x="940" y="178" width="90" height="86" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="985" y="205" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  
  <text x="985" y="234" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">&#123;&quot;gesture&quot;:</text>
  <text x="985" y="251" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">&quot;come here&quot;&#125;</text>

  <line x1="368" y1="220" x2="422" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />
  <line x1="522" y1="220" x2="582" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />
  <line x1="725" y1="220" x2="782" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />
  <line x1="918" y1="220" x2="942" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />

  <path d="M 280 80 C 430 95, 585 120, 650 162" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" markerEnd="url(#arrow-asl-example)" />
  <text x="540" y="100" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">verbal label selects learn mode</text>
</svg>

</div>

---

## Signature Dictionary

The ST maintains or accesses a dynamic dictionary.

A simplified dictionary may look like:

```json
{
  "global": {
    "sig_17": {
      "label": "come_here",
      "modality": "skeleton_2d",
      "features": "...",
      "created_by": "user_teaching",
      "confidence": 0.91
    }
  },
  "users": {
    "alice": {
      "sig_42": {
        "label": "come_here",
        "modality": "skeleton_3d",
        "features": "...",
        "persistence": "session",
        "examples": 3
      }
    }
  }
}
```

The dictionary can be:

```text
global
per-user
per-session
temporary
persistent
task-specific
culture-specific
```

This makes ASL suitable for both shared social knowledge and personalized interaction.

---

## Matching and Classification

The pattern does not require a specific algorithm.

The signature expert may use:

- nearest-neighbor matching
- dynamic time warping
- learned embeddings
- feature extraction
- classical signal-processing features
- small local classifiers
- heuristic distance functions
- multimodal similarity metrics

For example:

```text
new time-series window
  → extract feature signature
  → compare to stored signatures
  → choose nearest match
  → accept only if confidence exceeds threshold
```

A simple conceptual rule may be:

```text
if min_distance(window_signature, stored_signature) < threshold:
    emit label
else:
    emit no_match
```

The key point is not the specific distance function.

The key point is that the system treats temporal interaction patterns as learnable and inspectable semantic signatures.

---

## Why Not Just Use a Pre-Trained Neural Gesture Recognizer?

A pre-trained neural classifier can be useful, but ASL solves a different problem.

### 1. Fixed labels vs. online learning

A neural classifier usually recognizes a closed set of gestures.

ASL lets the robot learn exactly what is needed:

```text
this gesture means come here
this whistle means call me
this melody means dinner time
this motion pattern means stop following
```

The learned signature may be kept permanently or only for the current interaction.

### 2. Generic training data vs. robot embodiment

A pre-trained model may have learned gestures from ideal viewpoints.

A real robot may be:

- shorter than a human
- looking from below
- using a wide-angle camera
- mounted on a moving base
- seeing partial skeletons
- operating in a specific room layout

ASL can learn from the robot's own sensor perspective.

The signature may be based on:

```text
2D skeleton from the robot camera
3D skeleton relative to the map
audio time series
multimodal HIF stream
```

### 3. Static classifier vs. personalized interaction

ASL can maintain a different dictionary per user.

This allows the robot to learn how a specific person gestures, whistles, or signals.

A generic classifier may detect a standard waving gesture, but it will not naturally learn:

```text
Alice's way of calling the robot
Bob's family-specific hand signal
a session-only training gesture
a temporary rehearsal cue
```

### 4. Opaque model vs. inspectable memory

ASL stores explicit learned associations.

A developer or authorized operator can inspect, approve, remove, or scope them.

This is much easier than inspecting a gesture embedded only inside a model's weights.

---

## Beyond Gestures

The gesture example is only one use case.

ASL applies whenever a time-series pattern can be labeled and later recognized.

| Domain | Example |
|---|---|
| Gesture | “this gesture means come here” |
| Audio | “remember this whistle as call me” |
| Music | “this melody means dinner time” |
| Motion | “when I move like this, follow me” |
| Social rhythm | repeated turn-taking or approach pattern |
| Multimodal ritual | gesture + phrase + gaze pattern |

For example:

```text
remember this whistle as "call me"
```

may create:

```json
{
  "signature_type": "audio_melody",
  "label": "call_me",
  "scope": "user:alice"
}
```

---

## Output HIFs

ASL may emit either a learning result or a classification result.

### Learning result

```json
{
  "type": "SignatureLearningHIF",
  "properties": {
    "label": "come_here",
    "stored_signature": "sig_42",
    "modality": "skeleton_3d",
    "dictionary_scope": "user:alice",
    "persistence": "session"
  },
  "processing_history": [
    "GestureWindowSG",
    "AdaptiveSignatureLearnerST"
  ]
}
```

### Classification result

```json
{
  "type": "GestureHIF",
  "properties": {
    "gesture": "come_here",
    "source_window": "recent_skeleton_window",
    "matched_signature": "sig_42",
    "dictionary_scope": "user:alice"
  },
  "confidence": {
    "match_confidence": 0.88
  },
  "processing_history": [
    "GestureWindowSG",
    "AdaptiveSignatureLearnerST"
  ]
}
```

---

## SOCIAL Principles Supported

Within the SOCIAL framework, ASL supports:

### S — Separated Contexts

ASL keeps the raw time-series, learned signature, classification label, user scope, and persistence policy separate.

A motion pattern is not automatically a command.  
It becomes meaningful only after a learned or validated semantic association exists.

### O — Open Declarative

The learned association can be represented declaratively:

```json
{
  "signature": "sig_42",
  "label": "come_here",
  "scope": "user:alice"
}
```

This makes the learned meaning inspectable rather than hidden only inside a model.

### C — Clear Cognition

ASL exposes whether the system learned or classified.

It can record:

```text
which window was used
which signature was matched
which label was emitted
which confidence threshold was applied
which dictionary scope was used
```

### I — Interpretable Gates

The pattern contains explicit gates:

```text
learn vs classify
store vs reject
match vs no match
session vs persistent
global vs user-specific
```

These gates can be governed by policies.

### A — Adaptive Autonomy

The robot adapts its interaction capabilities during the interaction.

It can learn a new signal, personalize it, or restrict it to the current session depending on policy.

### L — Layered Validation

Learning may require validation.

For example:

```text
only an authorized user may teach persistent gestures
low-confidence matches require confirmation
unsafe labels cannot become executable commands
```

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Online learning vs. noise | Learning from live interaction may capture noisy examples |
| Personalization vs. fragmentation | Per-user dictionaries improve fit but may create many variants |
| Flexibility vs. governance | Letting users teach the robot is powerful but must be controlled |
| Session learning vs. persistent memory | Temporary signatures avoid pollution but disappear later |
| Simple signatures vs. robust recognition | Simple distance metrics are transparent but may be less robust |
| Viewpoint adaptation vs. generalization | Robot-specific learning may not transfer to other robots |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Wrong learning cue | Require explicit confirmation before storing |
| Bad time window | Use pre/post buffers and configurable window length |
| Noisy skeleton or audio | Store confidence and require repeated examples |
| Overgeneralized match | Use thresholds and negative examples |
| User-specific signal applied globally | Store scope explicitly |
| Dictionary grows without control | Add expiration, pruning, and review |
| Gesture resembles unsafe command | Validate label before linking to behavior |
| Classification confidence too low | Emit no-match or ask for clarification |
| Conflicting labels | Keep provenance and require resolution |
| Cross-user mismatch | Prefer per-user dictionary when identity is known |

---

## Implementation Notes

A practical ASL implementation should define:

- input HIF types
- time-window length
- buffer behavior
- learning cues
- classification thresholds
- feature extraction method
- signature representation
- dictionary scope
- persistence rules
- validation requirements
- deletion or forgetting policy
- user authorization rules
- processing-history fields

Examples of persistence policies:

```text
session_only
user_persistent
global_persistent
task_local
expires_after_idle_time
requires_operator_approval
```

Examples of dictionary scopes:

```text
global
robot_specific
user:<id>
household:<id>
session:<id>
task:<id>
```

---

## Relationship to Previous Human Context Patterns

ASL depends naturally on the previous Human Context patterns.

**SME** can produce synchronized visual or audio HIFs.  
**EAG** can decide how much perception fidelity to allocate.  
The **Basic Input Sublayer** can produce tracked skeletons, speech, gaze, and sentiment.  
**TSC/TSP** can interpret the verbal cue that names the pattern.

ASL then adds the missing capability:

```text
learn and classify temporal signatures during interaction
```

This moves the Human Context layer from static interpretation toward interactive adaptation.

---

## Minimal Summary

```text
ASL learns and classifies time-series signatures from HIF streams.

It uses SG to form a temporal window.
It uses ST to learn or classify.
It stores signatures in a scoped dictionary.
It emits HIFs enriched with learned labels.
```

The pattern turns interaction into a teaching channel:

```text
"this gesture is come here"
  → store signature
  → recognize similar future gestures
```
