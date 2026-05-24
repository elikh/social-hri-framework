---
title: Social Convention Validator (SCV)
sidebar_position: 16
---

# Social Convention Validator (SCV)

## Intent

The **Social Convention Validator (SCV)** is an HRI design pattern for validating whether an executable instruction is socially appropriate under the current human, scene, and robot context.

It asks a different question than the Task Prerequisite Resolver.

```text
TPR:
  Can this task be planned?

SCV:
  Should this task be performed in this social context?
```

A task may be fully specified, physically possible, and technically executable.

It may still be socially inappropriate.

SCV acts as a practical social validation gate before a task is passed into social planning or behavioral synthesis.

---

## Problem

Robots that follow instructions blindly may behave in ways that are perceived as:

```text
rude
unsafe
awkward
intrusive
socially inappropriate
out of place
```

even when the action itself is technically possible.

For example:

```text
Do not shout in a library.
Do not interrupt a formal meeting unless urgent.
Do not approach too closely in a crowded corridor.
Do not announce private information in a public room.
Do not continue explaining if the person is clearly unavailable.
Do not move aggressively toward a person.
Do not ask a sensitive clarification in front of others.
```

This creates a design problem.

Social rules should not be hard-coded separately into every possible robot action.

Instead, the architecture needs a reusable validation gate that decouples:

```text
what is executable
```

from:

```text
what is socially acceptable
```

SCV provides that gate.

---

## Context

Use SCV when a task or instruction is already executable but still requires social validation.

Typical inputs include:

```text
ExecutableInstructionHIF
ExecutableTaskHIF
ClarificationNeededHIF
SpeechActionHIF
MotionActionHIF
ApproachActionHIF
UserInteractionActionHIF
```

SCV is especially important in environments where norms vary by:

```text
room
person
task
urgency
relationship
culture
privacy level
interaction history
robot autonomy level
```

For example:

```text
meeting room:
  use formal behavior
  avoid interruption unless urgent

kitchen:
  casual speech may be acceptable

charging area:
  louder announcements may be acceptable

corridor:
  avoid blocking movement

quiet room:
  reduce volume and motion intensity
```

---

## HML Structure

SCV can be implemented as a two-stage validation gate.

First, the executable instruction passes through a consistency and feasibility check.

Then, if it is still consistent, it passes through a Social Acceptance ES.

<div align="center">

<img
  src="/social-hri-framework/img/hml/social-convention-validator.svg"
  alt="Social Convention Validator checking executable instructions for consistency and social acceptance before passing socially acceptable executable instructions onward"
  width="100%"
/>

</div>

The simplified flow is:

```text
Executable Instruction HIF
  → Consistency Evaluator and Updater
      → if inconsistent:
            pending task queue / clarification / update
      → if consistent:
            Social Acceptance ES
                → socially acceptable executable instruction
                → or modification / delay / rejection / pending state
```

The Social Acceptance ES uses policy and social heuristics to evaluate whether the action should proceed as-is, be modified, be delayed, or be rejected.

---

## Flow

A typical SCV flow is:

```text
1. An Executable Instruction HIF arrives from TPR or another upstream component.
2. CEU checks whether the instruction is still consistent with maintained context.
3. If the instruction is inconsistent, it is routed back to a pending task queue or clarification path.
4. If the instruction is consistent, it enters the Social Acceptance ES.
5. The Social Acceptance ES evaluates etiquette, personal space, room context, person preferences, urgency, and safety/social policies.
6. SCV emits a socially acceptable instruction, a modified instruction, a delay/rejection HIF, or an escalation request.
```

This separates two different checks:

```text
Can this instruction still be executed?
Is this instruction appropriate to execute now?
```

---

## What SCV Checks

SCV can check several kinds of social and contextual constraints.

### Physical and Logical Consistency

This is the first stage.

It may check:

```text
Is the task still executable?
Is the object still available?
Is the person still present?
Is the route blocked?
Is the robot capable of executing this?
Is the task still relevant?
```

This check may reuse CEU or other HRI_DB handlers.

### Politeness and Etiquette

SCV may evaluate whether the robot's proposed behavior is polite enough for the current context.

For example:

```text
Should the robot ask permission first?
Should it soften the wording?
Should it avoid interrupting?
Should it lower the level of directness?
Should it acknowledge the user's state before acting?
```

### Personal Space

SCV may evaluate spatial behavior around humans.

For example:

```text
Is the robot approaching too close?
Is the person backing away?
Is the room crowded?
Is this a public, private, or intimate interaction zone?
Should the robot stop at a larger distance?
```

### Room and Place Conventions

SCV may use Scene Context or HRI_DB annotations to adapt behavior to a place.

For example:

```text
meeting room:
  avoid casual interruptions

library or quiet room:
  lower voice

corridor:
  avoid blocking the path

kitchen:
  casual interaction may be acceptable

charging area:
  announce loudly if safety requires it
```

### Person-Specific Preferences

SCV may use preferences learned or stored in HRI_DB.

For example:

```text
Alice prefers short answers.
Bob dislikes being interrupted.
This person responds better to visual cues.
This user prefers direct confirmations.
```

### Urgency and Exceptions

SCV should not be a rigid etiquette filter.

Urgency may override some social rules.

For example:

```text
A safety warning may justify interrupting.
An emergency may justify speaking loudly.
A low battery state may justify ending the interaction.
A motion integrity issue may justify stopping immediately.
```

The key is that overrides should be explicit and policy-driven.

---

## Example

Consider the instruction:

```text
Tell Bob immediately that Alice is waiting.
```

TPR may determine that the instruction is executable:

```text
Bob is identified.
Bob's location is known.
The robot can reach Bob.
The message content is known.
```

SCV then evaluates social appropriateness:

```text
Is Bob in a formal meeting?
Is interruption allowed?
Is the message urgent?
Is Alice's information private?
Should the robot wait outside?
Should the robot ask permission before speaking?
Should the message be delivered quietly or visually?
```

Possible outputs include:

```text
deliver message now
wait until Bob is available
ask Alice whether interruption is allowed
modify the delivery style
reject the instruction due to privacy or policy
```

The task is not rejected because it is impossible.

It is filtered because execution style matters.

---

## Relationship to TPR

TPR resolves readiness.

SCV validates appropriateness.

```text
Instruction:
  Bring this bottle to Bob.

TPR:
  resolves bottle ID and Bob's location.

SCV:
  checks whether it is appropriate to approach Bob now.
```

After TPR, a task may be:

```text
fully specified
physically possible
technically executable
```

But SCV may still decide to:

```text
wait
modify
ask permission
change style
reject
escalate
```

This keeps task completion separate from social acceptability.

---

## Relationship to CEU, DSIE, and SIAH

SCV relies on previous context-management outputs.

### CEU

CEU helps validate physical and logical consistency.

For example:

```text
The object still exists.
The target person is still known.
The route is still available.
The instruction does not contradict current HRI_DB state.
```

### DSIE

DSIE may provide deeper social insights.

For example:

```text
the person appears unavailable
the group context is formal
the user may be frustrated
the previous robot gesture was poorly received
```

SCV can use these insights as social evidence.

### SIAH

SIAH provides system-integrity and autonomy constraints.

For example:

```text
motion autonomy reduced
localization confidence low
speaker unavailable
emergency protocol active
```

SCV should not approve an action that violates the robot's current integrity or autonomy state.

### Human Context

Human Context contributes immediate social signals:

```text
gaze
gesture
speech
emotion
availability
body orientation
attention
```

### Scene Context

Scene Context contributes place and environment norms:

```text
room type
crowding
social zones
obstacles
map annotations
privacy context
```

### Robot Context

Robot Context contributes the robot's current capability and execution state:

```text
battery
motion availability
speech availability
resource load
sensor health
autonomy level
```

---

## Outputs

SCV may emit several types of output HIFs.

```text
SociallyAcceptableInstructionHIF
SociallyModifiedInstructionHIF
SocialRejectionHIF
SocialDelayHIF
SocialClarificationNeededHIF
PendingSocialValidationHIF
EscalationRequiredHIF
```

### Example: Accepted Instruction

```json
{
  "type": "SociallyAcceptableInstructionHIF",
  "properties": {
    "instruction": "deliver_message",
    "target": "bob",
    "style": "quiet_verbal",
    "reason": "target_available_and_context_allows_interruption"
  },
  "processing_history": [
    "TPR",
    "SCV"
  ]
}
```

### Example: Modified Instruction

```json
{
  "type": "SociallyModifiedInstructionHIF",
  "properties": {
    "original_instruction": "speak_loudly",
    "modified_instruction": "speak_quietly",
    "reason": "formal_meeting_room",
    "confidence": 0.87
  },
  "processing_history": [
    "SCV"
  ]
}
```

### Example: Rejected Instruction

```json
{
  "type": "SocialRejectionHIF",
  "properties": {
    "instruction": "interrupt_person",
    "reason": "person_in_formal_meeting",
    "suggested_alternative": "wait_until_available"
  },
  "processing_history": [
    "SCV"
  ]
}
```

### Example: Delay

```json
{
  "type": "SocialDelayHIF",
  "properties": {
    "instruction": "approach_person",
    "reason": "person_currently_unavailable",
    "retry_condition": "person_available_or_attention_returned"
  },
  "processing_history": [
    "SCV"
  ]
}
```

---

## Why This Pattern Matters

SCV aligns robot actions with human expectations and social comfort.

It helps the robot avoid behavior that is technically correct but socially wrong.

For example:

```text
following a person too closely
speaking too loudly
interrupting at the wrong time
revealing sensitive information
acting too casually in a formal context
continuing a conversation when the user is unavailable
```

SCV is the architectural place where social norms become explicit validation logic instead of being hard-coded into every action.

It is a practical social and ethical validation gate.

It does not solve ethics in general.

But it does make action filtering inspectable:

```text
Which rule was applied?
Which context was used?
Was the action allowed, modified, delayed, or rejected?
Was there an urgency override?
```

---

## SOCIAL Principles Supported

### S — Separated Contexts

SCV separates:

```text
technical executability
social appropriateness
physical consistency
social policy
final planning input
```

This prevents executable tasks from bypassing social validation.

### O — Open Declarative

Social rules and outputs can be represented as explicit HIFs.

For example:

```text
reason: formal_meeting_room
modification: lower_voice
decision: delay_until_available
```

### C — Clear Cognition

The robot can explain why an action was blocked, delayed, or modified.

```text
I can do the task, but now is not an appropriate time to interrupt.
```

### I — Interpretable Gates

The Social Acceptance ES is an explicit validation gate.

It can be inspected, tuned, replaced, or extended with new social heuristics.

### A — Adaptive Autonomy

SCV can change how much freedom the robot has depending on context.

For example:

```text
high urgency:
  allow interruption

formal context:
  reduce casual behavior

low confidence:
  ask before acting

emergency:
  override etiquette
```

### L — Layered Validation

SCV does not execute the action.

It produces a socially validated planning input for later layers.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Social caution vs. efficiency | More validation can slow down action |
| Politeness vs. urgency | Safety or emergency may override etiquette |
| General norms vs. personal preferences | General rules may not fit a specific person |
| Strict validation vs. social hesitation | Rules that are too strict may make the robot overly hesitant |
| Cultural specificity vs. portability | Social norms differ across cultures and environments |
| Transparency vs. complexity | Detailed validation is explainable but may require more state and policy logic |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Overly strict SCV | Urgency override and adjustable thresholds |
| Too permissive SCV | Stronger policies and safety rules |
| Wrong social context | Use DSIE confidence and room-context validation |
| Person-specific preference missing | Fall back to general norms |
| Robot hesitates too much | Integrate task priority and urgency |
| Social rules hard-coded everywhere | Centralize social rules in SCV |
| Cultural mismatch | Use domain-specific policy packs |
| Privacy-sensitive action allowed | Route through SIAH and privacy policies |
| Emergency blocked by etiquette | Safety override policy |
| Action modified without user awareness | Explain or acknowledge the modification when appropriate |

---

## Implementation Notes

A practical SCV implementation should define:

```text
social policy schemas
room-context rules
personal-space thresholds
interruption rules
privacy rules
urgency override rules
person-specific preference handling
relationship to DSIE insights
relationship to SIAH integrity state
relationship to CEU consistency checks
decision output schema
explanation format
```

Possible social acceptance experts include:

```text
λ politeness checker
λ personal space verifier
λ interruption validator
λ room convention evaluator
λ privacy validator
λ urgency override evaluator
λ person preference matcher
```

The Social Acceptance ES may choose among these experts depending on the task and context.

---

## Relationship to Planning

SCV is not the planner.

It does not generate the final behavior choreography.

Instead, it validates or modifies a planning candidate before deeper social planning occurs.

```text
TPR:
  produces an executable task

SCV:
  produces a socially valid task or alternative

Social Planning:
  chooses how to perform it
```

This makes SCV a bridge between context reasoning and behavior synthesis.

---

## Transition to Context Management Layer Example

After TPR and SCV, the Context Management and Reasoning layer has enough structure to show the full composition.

The next page shows how the pieces may connect:

```text
context streams enter
novelty is extracted
memory is updated and queried
tasks are resolved
social conventions are validated
planning-ready context is produced
```
