---
title: Social Planning Overview
sidebar_position: 18
---

# Social Planning and Behavioral Synthesis

## Overview

The previous layer, **Context Management and Reasoning**, determines what is known, ready, and acceptable.

This layer determines when and how the robot should express that validated intent as behavior.

```text
Context Management:
  what is known, ready, and acceptable

Social Planning and Behavioral Synthesis:
  when and how the robot should behave
```

The goal of this layer is not to create new facts.

The goal is to transform validated interaction requests into socially timed and socially styled behavior.

In short:

```text
validated interaction request
  → social timing
  → social styling
  → socially fluent behavior HIF
```

This layer is where the robot begins to move from reasoning about context into expressing behavior within a social interaction.

---

## From Valid Request to Social Behavior

A request may be valid, executable, and socially acceptable at the end of Context Management.

However, that still does not determine:

```text
when to express it
how to express it
which modality to use
how direct or polite to be
how close to approach
how loud to speak
whether to wait for eye contact
whether to adapt to a person-specific preference
```

For example, the request:

```text
say: "I need your help"
```

may already be valid.

But the robot still needs to decide:

```text
Should I say it now?
Should I wait until the person looks at me?
Should I approach first?
Should I speak softly?
Should I use a short phrase?
Should I add a gesture?
Should I avoid interrupting?
```

This layer manages those decisions.

It turns a valid request into a socially fluent action.

---

## Reactive vs. Socially Planned Actions

Not every action must pass through this layer.

Some actions are reactive, urgent, or safety-critical.

These may go directly from Context Management, Dispatcher, or integrity handlers toward actuation.

Examples include:

```text
stop
avoid obstacle
emergency brake
lower autonomy
cancel unsafe motion
reduce speed
```

These actions often require low latency.

They may bypass social planning.

By contrast, interactive or proactive requests should usually pass through Social Planning and Behavioral Synthesis.

Examples include:

```text
ask for help
say a message
approach a person
remind someone
offer assistance
ask a clarification question
proactively initiate interaction
guide a person
explain a delay
```

These actions require more than technical execution.

They require:

```text
social timing
social style
multimodal expression
```

This is the main distinction:

```text
Reactive actions:
  must happen quickly

Social interaction requests:
  must happen appropriately
```

---

## Layer Overview Diagram

<div align="center">

<img
  src="/social-hri-framework/img/hml/social-planning-overview.svg"
  alt="Social Planning and Behavioral Synthesis overview showing context management outputs split into reactive actuation and socially planned interaction requests"
  width="100%"
/>

</div>

The diagram shows that Context Management may produce both reactive outputs and interaction requests.

Reactive outputs may go directly toward actuation.

Interaction requests enter Social Planning and Behavioral Synthesis, where they are timed and styled before reaching behavior execution.

---

## The Two Main Questions

This layer is organized around two questions.

```text
When should the robot interact?

How should the robot express the interaction?
```

The first question is handled by **Social Opportunity TPR**.

The second question is handled by **Social Action Stylist (SAS)**.

Their composition forms the **Late-Binding Behavioral Choreographer**.

```text
Social Opportunity TPR:
  decides when

Social Action Stylist:
  decides how

Late-Binding Behavioral Choreographer:
  binds when and how at the right moment
```

---

## Social Opportunity TPR

**Social Opportunity TPR** is a specialized reuse of the Task Prerequisite Resolver pattern.

Instead of checking whether a task is missing an object, location, person, or capability, it checks whether the task is missing a social opportunity window.

The input is an interaction request HIF.

For example:

```json
{
  "say": "I need your help"
}
```

The robot may be allowed to say this, but not necessarily now.

The **Social Opportunity Gate ES** checks whether the social window is open.

It may use experts such as:

```text
λ person availability
λ person patterns
λ repeated help requests
λ gaze / attention estimator
λ interaction rhythm estimator
λ social context classifier
```

If the social window is open, the request can become:

```text
Executable Socially Timed Request HIF
```

If the social window is closed, the request is held in a pending request queue.

The pending request handler can manage:

```text
priority
decay factor
expiration
social window reopening
fact-triggered re-evaluation
```

This lets the robot wait for the right moment instead of interrupting at the first technically valid moment.

---

## Social Action Stylist (SAS)

**Social Action Stylist (SAS)** is a specialized reuse of the SME structure.

It decides how a request should be expressed.

It can apply multiple stylist experts in parallel.

For example:

```text
Linguistic Stylist ST
Spatial Stylist ST
Gesture Stylist ST
Gaze Stylist ST
Prosody / voice style ST
Interaction sequencing ST
```

The input may be a dry semantic intent:

```text
say: "hello Bob"
```

The output may be socially styled content:

```text
"Hey Bob! How are you today?"
```

with metadata such as:

```text
tone
tempo
volume
politeness level
gesture choice
gaze behavior
approach distance
social path
```

For movement, the input may be:

```text
move to waypoint
approach person
navigate near group
```

The output may be:

```text
social path
personal-space-aware trajectory
proxemics-aware approach
```

SAS separates:

```text
what the robot intends to do
```

from:

```text
how the robot should express it socially
```

This makes social behavior modular, explainable, and adaptable.

---

## Late-Binding Behavioral Choreographer

The **Late-Binding Behavioral Choreographer** connects the two previous patterns.

```text
Social Opportunity TPR
  → decides when

Social Action Stylist
  → decides how
```

The reason for late binding is that social context changes quickly.

If the robot styles an action too early, the style may become outdated before the social opportunity opens.

For example:

```text
the person may stop being angry
the person may become busy
the room may become formal
another person may join
the robot may move closer
the urgency may change
```

Therefore, behavioral synthesis should happen as late as possible.

The robot first waits for the right social window.

Then it applies the style using the most current context.

This avoids **behavioral obsolescence**:

```text
a behavior that was appropriate when it was prepared,
but no longer appropriate when delivered
```

The choreographer therefore provides the social bridge:

```text
socially acceptable and executable interaction request
  → socially timed request
  → socially styled behavior
```

---

## Relationship to Context Management

Context Management answers questions such as:

```text
What changed?
What is known?
What does the user mean?
Is the task executable?
Is the task socially acceptable?
```

Social Planning and Behavioral Synthesis answers:

```text
When is the right moment?
How should this be expressed?
How should speech, movement, gesture, and timing be coordinated?
```

This distinction keeps reasoning and expression separate.

Context Management prepares the request.

Social Planning prepares the behavior.

---

## Relationship to Actuation

This layer does not directly actuate motors, speakers, or robot hardware.

It produces behavior-ready HIFs.

These may later be sent to:

```text
speech systems
gesture controllers
navigation systems
motion planners
facial expression systems
dialogue managers
robot-specific actuation bridges
```

The distinction is:

```text
Social Planning:
  creates socially timed and styled behavior descriptions

Actuation:
  realizes those descriptions on a physical or virtual platform
```

This allows the same social planning structure to support different embodiments.

A mobile robot, humanoid, desktop robot, or virtual agent may all reuse the same high-level pattern, while implementing different actuation backends.

---

## Patterns in This Section

This section contains the following pages.

### Social Opportunity TPR

A TPR-based pattern for waiting until the right social window opens.

It answers:

```text
When should the robot interact?
```

### Social Action Stylist (SAS)

An SME-based pattern for applying social style to speech, movement, gesture, and interaction behavior.

It answers:

```text
How should the robot express the interaction?
```

### Late-Binding Behavioral Choreographer

A composition pattern that connects timing and styling.

It answers:

```text
How do we bind the behavior style at the moment it is socially appropriate to act?
```

### Social Planning Layer Example

A layer-level example showing how these patterns may connect into a complete social behavior synthesis pipeline.

---

## Why This Layer Matters

This layer makes the difference between a robot that merely executes validated actions and a robot that behaves with social fluency.

A technically correct action can still be socially poor.

For example:

```text
asking at the wrong time
speaking with the wrong tone
standing too close
interrupting too directly
using a phrase that is too formal or too casual
moving in a way that feels intrusive
```

Social Planning and Behavioral Synthesis reduces that gap.

It allows the robot to wait for the right moment and express the action in the right style.

The central principle is:

```text
Do not bind behavior too early.
Wait for social opportunity.
Then style the behavior using the freshest context.
```

---

## Transition to Social Opportunity TPR

The first pattern in this section is **Social Opportunity TPR**.

It specializes the prerequisite-resolution idea for social timing.

Instead of asking:

```text
Do we have enough information to perform the task?
```

it asks:

```text
Is the social window open for this interaction?
```

This is the robot's ability to wait for the right moment.
