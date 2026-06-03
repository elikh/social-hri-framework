---
title: Social Action Stylist (SAS)
sidebar_position: 20
---

# Social Action Stylist (SAS)

## Intent

The **Social Action Stylist (SAS)** is an SME-based HRI design pattern for transforming a socially timed interaction request into a multimodal, socially styled behavior representation.

It does not decide whether the interaction should happen.

It does not decide when the interaction should happen.

It decides how the interaction should be expressed.

```text
Social Opportunity TPR:
  when should the robot interact?

Social Action Stylist:
  how should the robot express the interaction?
```

In short:

```text
Socially Timed Interaction Request HIF
  → parallel style experts
  → SG
  → Styled Behavior HIF
```

SAS separates the semantic intent of an interaction from its social expression.

---

## Problem

The same action can be socially appropriate or inappropriate depending on how it is expressed.

For example, the intent:

```text
ask for help
```

may be expressed as:

```text
Help me now.
Could you help me for a moment?
Sorry to interrupt, I need your help.
When you have a moment, could you help me?
```

Each version may be appropriate in a different context.

The difference is not only linguistic.

It may also involve:

```text
tone
volume
gesture
gaze
approach distance
movement speed
body orientation
timing rhythm
```

Without SAS, a robot may have the right intent but the wrong expression.

```text
right intent
wrong expression
```

This can make the robot seem rude, intrusive, awkward, too formal, too casual, or socially unaware.

SAS solves this by making social style explicit, modular, and inspectable.

---

## Context

Use SAS when an interaction request has already passed earlier validation and timing stages, but still needs to be expressed in a socially suitable way.

Typical inputs include:

```text
greet Bob
ask Alice for help
warn about an obstacle
explain a delay
approach a person
offer assistance
confirm a command
ask a clarification question
guide a person
deliver a message
```

SAS is especially useful when the correct expression depends on:

```text
person-specific preferences
room conventions
formality level
urgency
privacy level
interaction history
robot embodiment
available modalities
social distance
human affective state
```

---

## HML Structure

SAS reuses the SME idea.

Instead of extracting multiple semantic cues from the same input frame, it generates or selects multiple social style dimensions from the same interaction request.

<div align="center">

<img
  src="/social-hri-framework/img/hml/social-action-stylist.svg"
  alt="Social Action Stylist applying parallel style experts to transform an interaction request into a styled multimodal behavior HIF"
  width="100%"
/>

</div>

A simplified structure is:

```text
Socially Timed Interaction Request HIF
  → Social Action Stylist SME
      → Linguistic Stylist ST
      → Prosody Stylist ST
      → Gesture Stylist ST
      → Gaze Stylist ST
      → Spatial / Motion Stylist ST
      → Timing / Sequencing Stylist ST
  → SG
  → Styled Behavior HIF
```

Each style expert contributes one aspect of the final behavior.

The SG combines these style proposals into one coherent multimodal behavior HIF.

---

## Flow

A typical SAS flow is:

```text
1. A socially timed interaction request arrives as a HIF.
2. The request is passed to multiple style experts in parallel.
3. Each expert proposes a style dimension.
4. The SG merges the proposed style dimensions.
5. Conflicts between channels are resolved.
6. The output is a Styled Behavior HIF.
7. The styled behavior can be passed to a choreographer, dispatcher, planner, or actuation layer.
```

The important point is that SAS does not hide style inside a single black box.

It exposes style as a structured multimodal decision.

---

## Style Dimensions

SAS may style several behavioral dimensions.

### Linguistic Style

The linguistic stylist decides how the robot should phrase the message.

Possible dimensions include:

```text
formal / informal
short / detailed
direct / indirect
warm / neutral
apologetic / assertive
instructional / conversational
```

For example:

```text
Intent:
  ask for help

Formal:
  "Excuse me, could you assist me for a moment?"

Casual:
  "Hey, could you help me for a second?"

Urgent:
  "I need help now, please."
```

### Prosody / Voice Style

The prosody stylist decides how speech should sound.

Possible dimensions include:

```text
volume
tempo
pitch
urgency
calmness
emphasis
pause length
```

For example:

```text
meeting room:
  lower volume, slower tempo

emergency:
  higher urgency, clearer emphasis

casual greeting:
  warmer tone, natural tempo
```

### Gesture Style

The gesture stylist decides whether and how the robot should gesture.

Possible gestures include:

```text
wave
nod
point
small acknowledgement gesture
open palm
attention cue
no gesture
```

The correct choice depends on the robot embodiment and the social context.

For example:

```text
quiet room:
  small nonverbal cue

open social setting:
  short wave

formal interaction:
  minimal gesture
```

### Gaze and Attention Style

The gaze stylist decides how the robot should direct attention.

Possible behaviors include:

```text
look before speaking
avoid prolonged gaze
alternate gaze between group members
look toward an object while referencing it
look away briefly after request
```

Gaze can make the same speech act feel attentive, intrusive, polite, or uncertain.

### Spatial and Motion Style

The spatial or motion stylist decides how the robot should move or position itself.

Possible dimensions include:

```text
approach distance
approach speed
approach angle
orientation
social path
personal-space constraint
avoid blocking path
stop position
```

For example:

```text
approach person:
  stop at 1.5m
  avoid approaching from behind
  slow down before entering personal space
  orient toward the person without blocking the path
```

### Timing and Sequencing Style

The timing stylist decides the order and rhythm of the behavior.

For example:

```text
gesture before speech
speech before motion
pause before asking
wait after eye contact
confirm before moving
turn toward person before speaking
```

This is especially important for multimodal interaction.

A socially fluent behavior is not just a set of channels.

It is a coordinated sequence.

---

## Example — Styling a Help Request

Input:

```json
{
  "type": "ExecutableSociallyTimedRequestHIF",
  "properties": {
    "request": {
      "say": "I need your help"
    },
    "target": "alice",
    "social_window": "open"
  }
}
```

Possible SAS output:

```json
{
  "type": "StyledBehaviorHIF",
  "properties": {
    "speech": {
      "text": "Alice, could you help me for a moment?",
      "tone": "polite",
      "volume": "medium_low",
      "tempo": "calm"
    },
    "gaze": {
      "target": "alice",
      "pattern": "brief_before_speech"
    },
    "gesture": {
      "type": "small_attention_gesture"
    },
    "motion": {
      "approach_distance": "1.5m",
      "speed": "slow"
    },
    "sequence": [
      "orient_to_alice",
      "brief_gaze",
      "small_attention_gesture",
      "speak"
    ]
  },
  "processing_history": [
    "SocialOpportunityTPR",
    "SAS"
  ]
}
```

The original intent remains simple:

```text
I need your help.
```

The behavior becomes socially expressed.

---

## Example — Styling Motion

Input:

```text
approach Bob
```

A direct motion planner might treat this as a waypoint problem.

SAS treats it as a social motion problem.

It may specify:

```text
do not approach from behind
do not block Bob's path
slow down near personal space
stop at a comfortable distance
orient toward Bob before speaking
avoid cutting through a group
```

Possible output:

```json
{
  "type": "StyledMotionHIF",
  "properties": {
    "target": "bob",
    "approach_style": "polite",
    "preferred_distance": "1.5m",
    "max_speed_near_person": "slow",
    "approach_angle": "front_diagonal",
    "avoid": [
      "behind_approach",
      "path_blocking",
      "group_cut_through"
    ]
  },
  "processing_history": [
    "SAS"
  ]
}
```

This lets social motion style be handled explicitly before actuation.

---

## Why SME Reuse Matters

SAS is not a single stylistic transformation.

Social expression is multimodal.

A speech choice can conflict with a gesture.

A motion style can conflict with a gaze pattern.

A greeting can be friendly linguistically but intrusive spatially.

By using an SME-like structure, SAS keeps style experts separated but synchronized.

For example:

```text
Linguistic stylist:
  friendly phrasing

Spatial stylist:
  do not approach too closely

Gesture stylist:
  small wave

Gaze stylist:
  brief eye contact

Prosody stylist:
  warm tone
```

The SG then produces a coherent styled behavior.

This supports modularity:

```text
replace the linguistic stylist without changing motion styling
replace the proxemics policy without changing speech
add a gesture expert without redesigning the entire layer
adapt style to different robot embodiments
```

---

## Relationship to Social Opportunity TPR

Social Opportunity TPR decides when the interaction should happen.

SAS decides how the interaction should be expressed.

```text
Social Opportunity TPR:
  wait until Alice is available

SAS:
  ask Alice politely, softly, and with a small attention gesture
```

This separation prevents the robot from styling a behavior too early.

The social opportunity may open later under different conditions.

The final style should therefore be generated close to the moment of action.

---

## Relationship to SCV

SCV checks whether an action is socially acceptable.

SAS chooses the expression style within the acceptable space.

```text
SCV:
  It is acceptable to ask Alice for help.

SAS:
  Ask softly, briefly, with a polite phrase.
```

Or:

```text
SCV:
  Do not interrupt directly.

SAS:
  Use a nonverbal attention cue first.
```

SCV may constrain the style space.

SAS fills that space with a concrete multimodal behavior.

---

## Relationship to DSIE and HRI_DB

SAS can use context maintained in HRI_DB and insights generated by DSIE.

Examples include:

```text
room social conventions
person preferences
interaction history
learned response patterns
formality level
privacy level
current robot state
```

DSIE may provide insights such as:

```text
Alice prefers short confirmations.
Bob responds well to visual gestures.
This setting is formal.
The person may be frustrated.
The previous long explanation was poorly received.
```

SAS translates these insights into behavior style.

For example:

```text
shorter speech
lower volume
more distance
less gesture
more formal phrasing
visual cue instead of verbal interruption
```

---

## Relationship to Robot Embodiment

SAS should be embodiment-aware.

A humanoid, quadruped, desktop robot, mobile base, screen-based agent, and voice-only assistant may support different modalities.

For example:

```text
humanoid:
  gaze, gesture, speech, posture, motion

desktop robot:
  screen expression, sound, small motion, gaze direction

mobile robot:
  speech, navigation style, light cues, orientation

voice-only system:
  wording, timing, prosody

quadruped:
  body orientation, movement style, sound, light cues
```

SAS should style only what the embodiment can actually express.

Unsupported modalities should be filtered or replaced.

---

## Outputs

SAS may emit several output HIF types.

```text
StyledBehaviorHIF
StyledSpeechHIF
StyledMotionHIF
StyledGestureHIF
StyledGazeHIF
StyledProsodyHIF
MultimodalBehaviorPlanHIF
```

The main output is usually:

```text
StyledBehaviorHIF
```

This HIF may contain multiple coordinated channels:

```text
speech
gesture
gaze
motion
timing sequence
social constraints
fallback style
```

---

## Why This Pattern Matters

SAS helps prevent the robot from doing the right thing in the wrong way.

It supports:

```text
social fluency
personalization
context-sensitive behavior
modularity
explainability
embodiment independence
```

It also supports reuse.

The same intent can be styled differently depending on:

```text
person
room
urgency
privacy
robot embodiment
interaction history
available modalities
```

The pattern makes social behavior design explicit rather than hard-coded into individual actions.

---

## SOCIAL Principles Supported

### S — Separated Contexts

SAS separates:

```text
intent
speech style
motion style
gesture style
gaze behavior
timing sequence
```

Each style dimension can be handled by a separate expert while still contributing to one behavior.

### O — Open Declarative

The selected style is represented as explicit HIF properties.

For example:

```text
tone = polite
volume = medium_low
approach_distance = 1.5m
gesture = small_wave
```

This makes the style visible and editable.

### C — Clear Cognition

The system can explain why a style was chosen.

For example:

```text
formal room
person preference
low urgency
person available
robot should be non-intrusive
```

This helps avoid hidden behavioral magic.

### I — Interpretable Gates

Each stylist can be implemented as an ST with its own policy and expert.

The SG can expose how the final style was merged.

### A — Adaptive Autonomy

The robot can adapt style based on person, room, emotional state, urgency, social context, and embodiment.

It can also fall back to simpler styles when confidence or capability is low.

### L — Layered Validation

SAS does not decide whether an action is allowed.

It does not decide when to act.

It styles a request that already passed earlier layers.

The styled output can still be checked, choreographed, dispatched, and validated before actuation.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Rich style vs. complexity | More style channels increase coordination complexity |
| Personalization vs. predictability | Personalized style may make robot behavior less uniform |
| Naturalness vs. safety | Highly natural phrasing may become ambiguous or unsafe |
| Expressiveness vs. embodiment limits | Not all robots can express every style dimension |
| Late styling vs. latency | Styling close to action time requires fast computation |
| Consistency vs. adaptation | Style should adapt without feeling random |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Style contradicts intent | Schema validation and SG consistency checks |
| Speech style and motion style conflict | Multimodal merge policy |
| Over-personalization feels intrusive | SIAH and privacy policy |
| Too much expressiveness | Style limits and conservative defaults |
| Too little expressiveness | Fallback stylist and user feedback |
| Wrong formality level | Room context and DSIE confidence |
| Stale context | Late binding before execution |
| Unsupported embodiment | Capability-aware style filtering |
| Unsafe LLM-generated phrasing | Bounded templates and policy validation |
| Style varies unpredictably | Style memory and consistency constraints |

---

## Implementation Notes

A practical SAS implementation should define:

```text
style schema
supported modalities
stylist experts
style policies
person preference integration
room convention integration
embodiment capability filter
conflict resolution SG
fallback style
latency budget
validation before actuation
```

The style schema should define which channels are supported and how they combine.

For example:

```text
speech:
  text
  tone
  volume
  tempo

motion:
  speed
  distance
  approach angle

gesture:
  type
  intensity
  timing

gaze:
  target
  duration
  pattern

sequence:
  ordered multimodal events
```

The SG should check that style channels do not contradict each other.

For example:

```text
do not combine "urgent warning" with "casual playful tone"
do not combine "polite request" with "aggressive approach"
do not combine "quiet room" with "high volume"
```

---

## Transition to Late-Binding Behavioral Choreographer

Social Opportunity TPR decides when the interaction should happen.

SAS decides how it should be expressed.

The next pattern, **Late-Binding Behavioral Choreographer**, combines the two and binds the final behavior as late as possible.

```text
Social Opportunity TPR:
  wait for the right moment

Social Action Stylist:
  choose the right form of expression

Late-Binding Behavioral Choreographer:
  bind timing and style at the moment of action
```
