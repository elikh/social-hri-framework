---
title: Social Planning Layer Example
sidebar_position: 21
---

# Social Planning Layer Example

## Overview

This page shows one possible composition of the **Social Planning and Behavioral Synthesis** layer.

It does not introduce a new standalone pattern.

Instead, it connects the two patterns introduced in this section:

```text
Social Opportunity TPR
Social Action Stylist (SAS)
```

Together, they form a **Late-Binding Behavioral Choreographer**.

This is a composition principle:

```text
wait for the right social moment
then bind the behavior style using the freshest available context
```

The result is a behavior that is not only valid and executable, but also socially timed and socially styled.

This composition is illustrative.

Different systems may connect the same ideas differently.

---

## Layer Composition Diagram

<div align="center">

<img
  src="/social-hri-framework/img/hml/social-planning-layer-example.svg"
  alt="Example composition of Social Opportunity TPR and Social Action Stylist forming a late-binding behavioral choreographer"
  width="100%"
/>

</div>

---

## Late-Binding Behavioral Choreographer

The **Late-Binding Behavioral Choreographer** is the composition of two earlier patterns:

```text
Social Opportunity TPR:
  decides when the interaction should happen

Social Action Stylist:
  decides how the interaction should be expressed
```

The key idea is:

```text
Do not fully style the behavior before the social opportunity opens.
```

Social context changes quickly.

A behavior that was appropriate when it was first prepared may become inappropriate by the time it is delivered.

For example:

```text
the person may become busy
the person may stop being busy
the room may become more formal
a third person may join
the robot may move closer
the urgency may change
the user may become frustrated
the robot may have already asked for help several times
```

Therefore, the system should bind the final style as close as possible to the moment of action.

This prevents **behavioral obsolescence**:

```text
a behavior that was socially appropriate when prepared,
but stale or inappropriate when executed
```

---

## Composition Flow

A typical flow is:

```text
1. A validated interaction request arrives from Context Management.
2. Social Opportunity TPR checks whether the social window is open.
3. If the window is closed, the request is held in a pending request queue.
4. New facts or context updates may reopen the social window.
5. When the window opens, the request is released.
6. SAS styles the request using the freshest social context.
7. A Styled Behavior HIF is emitted.
8. The behavior is passed toward behavioral execution or actuation.
```

The important ordering is:

```text
timing first
styling second
execution last
```

This ordering allows the robot to avoid committing to a behavioral style too early.

---

## Example — Asking for Help

Consider a request:

```text
say: "I need your help"
```

This request may already be valid and socially acceptable.

However, the timing and style still depend on the situation.

### Timing

Social Opportunity TPR may check:

```text
Is the person available?
Is the person looking toward the robot?
Is the person speaking with someone else?
Has the robot already asked for help recently?
Has the robot already asked this specific person for help?
Is the request urgent?
Is the request still relevant?
```

If the person is busy, the request may be placed in a pending queue.

If the person becomes available, the request is released.

### Styling

When the request is released, SAS styles it using the current context.

For example:

```text
first request:
  "Could you help me for a moment?"

repeated request to the same person:
  "Sorry to bother you again, but I still need help."

urgent request:
  "I need your help now, please."

low-urgency request:
  "When you have a moment, could you help me?"
```

The same semantic request is therefore expressed differently depending on timing, history, urgency, and person-specific context.

This is why late binding matters.

If the robot styled the request too early, it might choose the wrong tone by the time the social opportunity opens.

---

## Example — Social Navigation

Late binding is not only for speech.

It also applies to movement and navigation.

Consider a request:

```text
navigate to target
```

From a purely reactive or geometric perspective, the route may be clear.

```text
no obstacle
path available
target reachable
```

But social context may change the correct behavior.

For example:

```text
someone just cleaned the floor
a person is working in the path
a group is standing in conversation
a quiet interaction is happening nearby
a person may feel uncomfortable if the robot passes too close
```

In this case:

```text
Social Opportunity TPR:
  checks whether this is an appropriate moment or route to move

SAS:
  styles the movement if it is allowed
```

Possible style outputs include:

```text
take a wider path
move more slowly
avoid the freshly cleaned area
wait before crossing
announce intention before moving
keep greater distance from people
avoid passing through the middle of a group
```

Thus, social navigation is not only obstacle avoidance.

It is movement that respects human activity, social norms, and environmental context.

---

## What Late Binding Adds

The combination of Social Opportunity TPR and SAS enables several behaviors that neither pattern fully provides alone.

### Timing-Aware Style

The style can reflect the waiting history.

For example:

```text
the robot waited patiently
the robot asked before
the robot is asking again
the user is now available
the urgency increased
```

### Person-Specific Adaptation

The system can adapt to the target person.

For example:

```text
Alice prefers short requests.
Bob responds better to visual gestures.
This person dislikes repeated interruptions.
This person often helps when approached quietly.
```

### Context-Sensitive Multimodality

The robot can choose between:

```text
speech
gesture
gaze
motion
display
sound cue
nonverbal attention cue
```

based on the current setting.

### Socially Aware Resumption

A pending request can resume only when it becomes both socially possible and still relevant.

For example:

```text
The request was important before.
The person is now available.
The request has not expired.
The social context still allows it.
```

---

## Layer Outputs

This layer may emit several behavior-ready HIFs.

```text
SociallyTimedRequestHIF
StyledBehaviorHIF
StyledSpeechHIF
StyledMotionHIF
StyledGestureHIF
SocialNavigationHIF
PendingInteractionRequestHIF
BehaviorReadyHIF
```

The main output is usually a **Styled Behavior HIF**.

This HIF can include:

```text
speech content
tone
volume
gesture
gaze pattern
approach distance
movement style
timing sequence
fallback behavior
```

It can then be passed toward behavioral execution or actuation.

---

## Relationship to Reactive Actions

Reactive or urgent actions do not necessarily need this layer.

For example:

```text
emergency stop
collision avoidance
unsafe motion cancellation
integrity warning
```

These may go directly toward actuation because latency is critical.

Social Planning and Behavioral Synthesis is most useful for:

```text
asking
approaching
guiding
explaining
interrupting
warning socially
offering help
clarifying
navigating around people
initiating proactive interaction
```

The distinction is:

```text
Reactive actions:
  must happen quickly

Social behaviors:
  must happen appropriately
```

---

## Why This Composition Matters

This composition prevents the robot from executing socially stale behavior.

It allows the system to wait until the right moment and then style the behavior using the freshest context.

Without late binding, the robot may:

```text
prepare a polite request too early
deliver it after the person becomes unavailable
use the wrong tone after urgency changes
repeat a help request without acknowledging repetition
navigate through an area that became socially inappropriate
```

With late binding, the robot can:

```text
wait for social opportunity
adapt style at the moment of action
respect interaction history
avoid repeated or stale phrasing
coordinate speech, motion, gaze, and gesture
```

The central principle is:

```text
Bind the behavior as late as possible, but not later than necessary.
```

---

## Design Note

This page shows one possible layer composition.

It is not required that every implementation use the exact same structure.

A smaller system may combine the timing and styling logic.

A larger system may split them across several services or planners.

The important architectural idea is that timing and style remain explicit.

```text
Social Opportunity TPR:
  makes timing inspectable

SAS:
  makes style inspectable

Late binding:
  keeps the behavior fresh
```

This supports transparency, personalization, and socially fluent robot behavior.

---

## Transition to Actuation Layer

At the end of this layer, the system has behavior-ready HIFs.

These HIFs describe how an interaction should be expressed, but they are not yet robot-specific motor or actuator commands.

The next layer realizes these behavior-ready HIFs on the specific robot embodiment.

```text
Social Planning:
  socially timed and styled behavior

Actuation:
  platform-specific execution
```

The Actuation Layer is still to be developed.
