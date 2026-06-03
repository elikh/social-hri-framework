---
title: Social Opportunity TPR
sidebar_position: 19
---

# Social Opportunity TPR

## Intent

**Social Opportunity TPR** is a specialized reuse of the Task Prerequisite Resolver pattern for social timing.

It manages validated interaction requests that are not yet socially well-timed.

The pattern does not ask whether the task is missing an object, location, person, or capability.

It asks whether the social window is open.

```text
TPR:
  Is enough information available to perform the task?

Social Opportunity TPR:
  Is this the right social moment to perform the interaction?
```

In short:

```text
Interaction Request HIF
  → Social Opportunity Gate
  → if social window open:
        Executable Socially Timed Request HIF
  → if social window closed:
        Pending Request Queue
```

The purpose is to let the robot wait for the right moment instead of interrupting at the first technically valid moment.

---

## Problem

A request can be valid and executable, but still poorly timed.

For example, the robot may need to say:

```json
{
  "say": "I need your help"
}
```

The request itself may be legitimate.

However, the person may be:

```text
speaking with someone else
not looking toward the robot
walking away
busy with a task
emotionally unavailable
already overloaded by robot requests
inside a social context where interruption is inappropriate
```

If the robot speaks immediately, it may be perceived as:

```text
intrusive
socially unaware
annoying
too robotic
impolite
```

A valid interaction request is not necessarily a timely interaction request.

Social Opportunity TPR solves this by treating social timing as a prerequisite.

If the social window is closed, the request does not fail.

It waits.

---

## Context

Use Social Opportunity TPR when the system has an interaction request that is already valid enough to express, but should be delayed until a better social opportunity appears.

Typical inputs include:

```text
proactive help request
clarification request
reminder
social greeting
offer of assistance
request for human attention
request for collaboration
explanation request
message delivery request
```

The pattern is useful when the robot must avoid interrupting, over-requesting, or acting with poor timing.

Typical examples:

```text
The robot needs help but the user is speaking.
The robot wants to remind a person but the person is busy.
The robot needs clarification but the user is focused elsewhere.
The robot wants to greet someone but should wait until eye contact.
The robot wants to offer help but should not interrupt an ongoing task.
```

---

## HML Structure

The pattern specializes the TPR structure.

Instead of a missing information detector, it uses a **Social Opportunity Gate ES**.

Instead of a pending task queue, it manages a **pending request queue**.

<div align="center">

<img
  src="/social-hri-framework/img/hml/social-opportunity-tpr.svg"
  alt="Social Opportunity TPR managing interaction requests through a social opportunity gate, query social handler, and pending request queue"
  width="100%"
/>

</div>

The simplified flow is:

```text
Interaction Request HIF
  → Social Opportunity Gate ES
  → Query Social Handler
      → if social window open:
            Executable Socially Timed Request HIF
      → if social window closed:
            Pending Request Handler ST
            Pending Request Queue
```

When new facts arrive or the social window reopens, the request may return to the prioritized interaction request queue.

---

## Flow

A typical Social Opportunity TPR flow is:

```text
1. An interaction request enters as a HIF.
2. The Social Opportunity Gate evaluates whether the request has a valid social window.
3. The gate may query HRI_DB through QSH.
4. If the social window is open, the request becomes an Executable Socially Timed Request HIF.
5. If the social window is closed, the request is moved to the pending request queue.
6. The pending request handler tracks priority, age, decay, expiration, and trigger conditions.
7. New facts or context updates may trigger re-evaluation.
8. When the social window reopens, the request returns to the prioritized request queue.
```

The key principle is:

```text
The robot may be allowed to interact, but still needs to wait for the right moment.
```

---

## Social Opportunity Gate

The **Social Opportunity Gate ES** is the core decision point.

It decides whether the current social context supports the interaction.

It may use experts such as:

```text
λ person availability
λ person patterns
λ repeated help requests
λ gaze / attention estimator
λ interaction rhythm estimator
λ social context classifier
λ urgency estimator
```

The gate may inspect signals such as:

```text
gaze
body orientation
speech activity
conversation state
room context
social rhythm
person availability
interaction history
recent robot interruptions
person-specific patterns
request urgency
```

The gate may return:

```text
social window open
social window closed
wait briefly
ask permission first
use nonverbal cue first
do not interrupt
escalate due to urgency
```

This allows timing to be policy-driven rather than hard-coded.

---

## Query Social Handler Reuse

Social Opportunity TPR reuses **Query Social Handler (QSH)** internally.

Here, QSH is not necessarily answering a user-facing question.

It may answer an internal social-timing query such as:

```text
Is Alice available?
Is this person interruptible?
Is the current room context formal?
Has this person responded well to similar requests?
Has the robot asked too many questions recently?
Is there evidence that help is needed now?
```

QSH may use:

```text
short-term context
session context window
HRI_DB
DSIE insights
Human Context
Scene Context
Robot Context
```

The result informs whether the social window is open or closed.

---

## Pending Request Queue

If the social window is closed, the interaction request is placed in a pending request queue.

The queue may store:

```text
request HIF
target person
reason for waiting
priority
urgency
decay factor
created time
last checked time
expiration condition
trigger conditions
social context at creation
```

Example:

```json
{
  "type": "PendingInteractionRequestHIF",
  "properties": {
    "request": {
      "say": "I need your help"
    },
    "target": "alice",
    "reason": "person_unavailable",
    "status": "waiting_for_social_window",
    "priority": "medium",
    "decay_factor": 0.7
  },
  "processing_history": [
    "SocialOpportunityTPR"
  ]
}
```

The decay factor prevents the robot from holding outdated requests forever.

For example, a request for help may become irrelevant if:

```text
the task is canceled
the user leaves
the urgency expires
the robot solves the problem independently
the social situation changes
```

---

## Fact-Triggered Resumption

Like the original TPR pattern, Social Opportunity TPR supports fact-triggered resumption.

A pending request may become executable when new facts enter the context.

For example:

```text
Alice stopped speaking.
Alice turned toward the robot.
Alice looked at the robot.
Alice asked, "What do you need?"
The meeting ended.
The room became less crowded.
The person became available.
```

When such a fact is detected, the Pending Request Handler can re-evaluate waiting requests.

If the social window opens:

```text
PendingInteractionRequestHIF
  → prioritized request queue
  → Social Opportunity Gate
  → ExecutableSociallyTimedRequestHIF
```

This allows the robot to act with patience without forgetting its intention.

---

## Outputs

Social Opportunity TPR may emit several kinds of HIFs.

```text
ExecutableSociallyTimedRequestHIF
PendingInteractionRequestHIF
SocialWindowOpenHIF
SocialWindowClosedHIF
SocialTimingClarificationHIF
ExpiredInteractionRequestHIF
SocialOpportunityRejectedHIF
```

### Example: Social Window Open

```json
{
  "type": "ExecutableSociallyTimedRequestHIF",
  "properties": {
    "request": {
      "say": "I need your help"
    },
    "target": "alice",
    "social_window": "open",
    "timing_reason": "target_looked_at_robot_and_is_not_speaking",
    "confidence": 0.84
  },
  "processing_history": [
    "SocialOpportunityTPR"
  ]
}
```

### Example: Social Window Closed

```json
{
  "type": "SocialWindowClosedHIF",
  "properties": {
    "request": {
      "say": "I need your help"
    },
    "target": "alice",
    "reason": "target_speaking_with_another_person",
    "recommended_state": "pending",
    "retry_condition": "target_available_or_attention_returned"
  },
  "processing_history": [
    "SocialOpportunityTPR"
  ]
}
```

### Example: Expired Request

```json
{
  "type": "ExpiredInteractionRequestHIF",
  "properties": {
    "request": {
      "say": "I need your help"
    },
    "reason": "request_relevance_decayed",
    "age_seconds": 120
  },
  "processing_history": [
    "SocialOpportunityTPR"
  ]
}
```

---

## Relationship to TPR

Social Opportunity TPR is a direct specialization of Task Prerequisite Resolver.

The difference is the prerequisite being managed.

```text
Task Prerequisite Resolver:
  missing object
  missing location
  missing person
  missing capability
  missing timing condition

Social Opportunity TPR:
  missing social opportunity
```

Both patterns use:

```text
a queue
a gate
a handler
a decay policy
fact-triggered re-evaluation
```

But the meaning of readiness changes.

In the original TPR, readiness means the task has enough information to be planned.

In Social Opportunity TPR, readiness means the interaction has an acceptable social moment.

---

## Relationship to SCV

SCV checks whether an interaction is socially acceptable.

Social Opportunity TPR checks whether now is the right moment to perform it.

```text
SCV:
  Is it acceptable to ask Alice for help?

Social Opportunity TPR:
  Is Alice currently available to be asked?
```

A request may pass SCV and still wait in Social Opportunity TPR.

For example:

```text
It is acceptable to ask Alice for help.
But Alice is currently speaking with someone else.
The request waits.
```

---

## Relationship to SAS

Social Opportunity TPR decides **when**.

Social Action Stylist decides **how**.

```text
Social Opportunity TPR:
  wait until the person is available

SAS:
  phrase the request politely and choose the right tone, gesture, and approach
```

This separation matters because style should be selected using the freshest context.

The robot should not fully synthesize the final behavior too early if the social opportunity may open later under different conditions.

---

## Relationship to DSIE

DSIE may provide useful background insights for Social Opportunity TPR.

For example:

```text
Alice is usually available after meetings.
Bob responds poorly to repeated interruptions.
This person often ignores verbal requests while focused.
The current setting is formal.
The user appears frustrated.
```

Social Opportunity TPR can use such insights to decide whether to wait, proceed, or use a softer signal.

---

## Why This Pattern Matters

Social Opportunity TPR provides social tact.

It prevents the robot from confusing permission with timing.

Without this pattern, a robot may behave correctly in a technical sense but poorly in a social sense.

It may ask at the wrong time, interrupt too often, or repeatedly request attention when the person is unavailable.

With this pattern, the robot can:

```text
hold a valid request
wait for availability
avoid interruption
respect interaction rhythm
resume when the social window opens
expire stale requests
adapt to person-specific timing patterns
```

This supports proactive behavior without making the robot socially intrusive.

---

## SOCIAL Principles Supported

### S — Separated Contexts

Social Opportunity TPR separates the validity of an interaction request from the timing of the interaction.

A request may already be allowed and executable, but still wait because the social window is closed.

This keeps the interaction request, social opportunity state, and final behavior timing as separate semantic concerns.

### O — Open Declarative

The social timing decision is represented explicitly as HIFs.

For example:

```text
SocialWindowOpenHIF
SocialWindowClosedHIF
PendingInteractionRequestHIF
ExecutableSociallyTimedRequestHIF
```

This makes it possible to inspect why the robot waited, resumed, or decided to interact.

### C — Clear Cognition

The robot can explain why it did not act immediately.

For example:

```text
The request is valid, but the target person is currently unavailable.
The robot is waiting for a better interaction window.
The request expired because the opportunity did not return in time.
```

This prevents social timing from becoming hidden behavior.

### I — Interpretable Gates

The Social Opportunity Gate ES is an explicit gate.

It can be inspected, tuned, or replaced.

Its decision can depend on visible criteria such as gaze, availability, repeated help requests, room context, urgency, and person-specific patterns.

### A — Adaptive Autonomy

The robot can adapt its initiative level.

It may wait, retry, soft-signal, ask permission, or proceed immediately depending on urgency and social opportunity.

This supports proactive behavior without making the robot socially intrusive.

### L — Layered Validation

Social Opportunity TPR does not decide how to express the behavior.

It only decides whether the social window is open.

The output still goes to Social Action Stylist or later behavioral synthesis layers before actuation.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Social tact vs. responsiveness | Waiting for a better moment can delay response |
| Patience vs. missed opportunity | Waiting too long can miss useful chances to interact |
| Low interruption vs. urgency | Sometimes the robot should interrupt because the request is urgent |
| Pending queue vs. stale requests | Pending requests can become irrelevant |
| Personalization vs. general policy | Different people have different availability thresholds |
| Strict timing vs. social hesitation | Overly strict timing rules can make the robot seem hesitant |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Robot waits forever | Expiration, decay factor, maximum wait policy |
| Robot interrupts too often | Stricter availability rules and interruption cooldowns |
| Robot misses urgent requests | Urgency override |
| Social window incorrectly detected | Confidence thresholds and multimodal evidence |
| Person-specific pattern is wrong | Update through DSIE and CEU |
| Pending request becomes irrelevant | Freshness checks and task relevance policies |
| Too many pending requests | Prioritization, batching, and queue limits |
| Robot appears hesitant | Soft cues or maximum wait policy |
| Request delivered after context changed | Revalidate before release |
| Social opportunity opens but style is outdated | Use late binding through SAS |

---

## Implementation Notes

A practical Social Opportunity TPR implementation should define:

```text
social opportunity schema
person availability model
request priority model
urgency policy
pending request queue
decay factor
expiration rules
fact-triggered re-evaluation rules
social window reopening conditions
relationship to QSH
relationship to DSIE
relationship to SAS
confidence thresholds
soft signaling policy
```

Example availability criteria may include:

```text
person is looking toward robot
person is not speaking
person is not walking away
person is not in a formal conversation
person is within interaction distance
person has recently requested help
person-specific timing preference allows interruption
```

Example urgency overrides may include:

```text
safety warning
emergency stop explanation
critical robot failure
high-priority task failure
human requested immediate feedback
```

---

## Transition to Social Action Stylist

Social Opportunity TPR decides when the robot should interact.

The next pattern, **Social Action Stylist (SAS)**, decides how the robot should express that interaction.

```text
Social Opportunity TPR:
  wait for the right moment

Social Action Stylist:
  choose the right form of expression
```

Together, they enable socially fluent behavior.
