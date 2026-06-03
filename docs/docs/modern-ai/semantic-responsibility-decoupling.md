---
title: Semantic Responsibility Decoupling
sidebar_position: 24
---

# Semantic Responsibility Decoupling

## Intent

**Semantic Responsibility Decoupling** is the design principle of assigning bounded semantic roles to models, agents, handlers, and experts, and connecting them through explicit HIF contracts and policy gates.

Instead of giving one model broad authority over perception, interpretation, memory, planning, social validation, style, and actuation, the architecture defines limited responsibilities.

```text
one bounded role
  → one explicit input contract
  → one explicit output schema
  → one validation path
  → one defined authority boundary
```

The central claim is:

```text
The more capable the model becomes,
the more important it is to define what it is responsible for,
what authority it has,
and how its output becomes a semantic commitment.
```

This is not a rejection of powerful models.

It is a way to use them safely, modularly, and transparently in human-facing robotic systems.

---

## Problem

A monolithic multimodal model or agent may be able to:

```text
see
listen
interpret
remember
plan
style
act
learn from feedback
```

This can be very powerful.

But in HRI, broad model authority creates a serious architectural problem.

If everything happens inside one model, it becomes difficult to know:

```text
what the robot understood
where an error occurred
which assumption entered memory
which part of the system authorized an action
why a behavior was styled in a certain way
why a task was rejected or delayed
how to replace one capability without changing everything else
how to debug a social failure
```

For example, consider a robot that receives:

```text
Bring that to Bob.
```

A monolithic agent may observe the video, interpret the speech, resolve the object reference, query memory, infer where Bob is, decide Bob is available, plan a route, choose phrasing, move, speak, and update memory.

If the robot makes a mistake, where did the mistake happen?

```text
object reference?
speech interpretation?
Bob identity?
Bob location?
social availability?
task planning?
motion?
style?
memory update?
```

If the entire loop is hidden inside one model, the failure may be hard to localize, repair, or prevent in the future.

Semantic Responsibility Decoupling solves this by limiting what each model or component is allowed to decide.

---

## Software Engineering Analogy

When using AI to write code, experienced developers often decouple aggressively.

They avoid asking the model to modify a large, entangled file unless necessary.

Instead, they prefer:

```text
small modules
clear interfaces
bounded functions
explicit contracts
tests
localized changes
```

This reduces unintended side effects.

A model may correctly fix the requested issue, but also accidentally change unrelated behavior if the scope is too large.

The same principle applies to HRI architectures.

A robot should not let one model silently change perception, memory, planning, social timing, style, and action at once.

In software, unintended side effects are bugs.

In HRI, unintended side effects can become:

```text
social failures
physical failures
safety failures
privacy failures
trust failures
```

Therefore, modularity is not only a software engineering preference.

In HRI, modularity is also a safety, interpretability, and accountability requirement.

---

## Principle

The principle is:

```text
Instead of one model that does everything,
SOCIAL HRI assigns bounded semantic responsibilities to components.
```

For example:

```text
one model proposes scene relations
one model interprets language
one handler updates memory
one critic checks social risk
one gate decides semantic commitment
one stylist proposes phrasing
one adapter executes on the robot
```

The components are connected through:

```text
HIFs
schemas
confidence fields
provenance
policy gates
feedback loops
```

This creates an architecture where a modern AI model can remain powerful, but its role remains bounded.

The model can propose, interpret, summarize, critique, or generate candidates.

The architecture decides what becomes committed context, memory, task, or behavior.

---

## Monolithic Model vs. Decoupled SOCIAL Architecture

| Monolithic AI Robot | Decoupled SOCIAL HRI |
|---|---|
| One model controls a broad loop | Multiple bounded semantic roles |
| Hidden latent state | Explicit HIFs |
| Hard to inspect | Local inspection |
| Hard to debug | Localized failure analysis |
| Hard to replace | Replace one expert or handler |
| Broad authority | Bounded authority |
| Direct perception-to-action | Gated semantic commitment |
| Implicit memory | Governed HRI_DB updates |
| Style mixed with planning | SAS separates expression from intent |
| Action mixed with reasoning | Actuation binds behavior to embodiment |
| Simulator success may hide social failures | SOCIAL checks expose social assumptions |

The goal is not to make the system less intelligent.

The goal is to make intelligence accountable.

---

## Bounded Semantic Roles

A decoupled SOCIAL architecture may include many bounded semantic roles.

Examples include:

```text
perception candidate generator
scene relation extractor
language interpreter
memory updater
consistency checker
social critic
task resolver
opportunity detector
style proposer
motion candidate generator
actuation adapter
feedback interpreter
```

Each role should define:

```text
input HIF contract
output HIF schema
allowed authority
validation path
failure mode
feedback path
```

### Example: LLM Instruction Normalizer

```text
input:
  SpeechTranscriptHIF

output:
  IntentCandidateHIF

authority:
  propose intent only

validation:
  schema check
  allowed template check
  policy gate
```

The LLM can help map a natural utterance into a structured candidate.

It does not directly update memory or command the robot.

### Example: VLM Scene Expert

```text
input:
  FrameHIF
  Scene Context
  optional HRI_DB subset

output:
  SceneRelationCandidateHIF

authority:
  propose relation only

validation:
  SBR
  CEU
  confidence gate
```

The VLM may propose that a person is pointing toward a bottle.

The architecture decides whether that becomes a committed ReferencedObjectHIF.

### Example: LLM Social Critic

```text
input:
  ProposedActionHIF
  Human Context
  Scene Context
  relevant HRI_DB entries

output:
  CritiqueHIF

authority:
  recommend modification, delay, rejection, or escalation

validation:
  SCV
  policy gate
```

The critic may identify that a proposed action is socially risky.

The critic does not directly block or execute the action.

---

## HIF Contracts

HIFs are the interfaces that make decoupling possible.

Without explicit HIFs, components may be connected through prompts, hidden assumptions, raw tool calls, or custom code.

With HIFs:

```text
each component knows what it receives
each component knows what it may emit
the system can log and replay
validators can inspect
humans can debug
components can be replaced
```

A HIF can include:

```text
semantic type
source
timestamp
confidence
provenance
context reference
processing history
uncertainty
allowed downstream use
```

HIFs are not just message formats.

They are semantic contracts between bounded responsibilities.

---

## Authority Boundaries

Not every component that produces an output is allowed to commit that output.

A model may be allowed to propose.

A critic may be allowed to warn.

A handler may be allowed to update memory.

A gate may be allowed to accept or reject.

An actuation adapter may be allowed to execute.

These are different kinds of authority.

```text
propose
criticize
validate
commit
act
```

They should not be collapsed into one step.

For example:

```text
A VLM may propose that an object is a medicine bottle.
It should not automatically update HRI_DB with a medical fact.

An LLM may propose that a user seems angry.
It should not automatically mark the user as angry in memory.

An agent may propose approaching a person.
It should not directly actuate the robot.
```

The core principle is:

```text
Generation is not commitment.
Interpretation is not permission.
A plan is not an action.
```

This is especially important in HRI because model outputs can affect people, spaces, memory, privacy, safety, and trust.

---

## Example — From Monolithic Agent to Decoupled HRI Roles

Consider the instruction:

```text
Bring that to Bob.
```

### Monolithic Path

A single multimodal agent receives:

```text
video
speech
memory
tools
robot state
```

It decides:

```text
what that refers to
who Bob is
where Bob is
whether Bob is available
how to move
what to say
whether to update memory
how to execute
```

This may work in many cases.

But if it fails, the system may not know where the error occurred.

### Decoupled SOCIAL Path

A decoupled architecture can assign bounded roles:

```text
Video expert:
  detects pointing and candidate objects

SBR:
  resolves the reference to an object candidate

LLM interpreter:
  maps the utterance to bring_object_to_person template

CEU:
  checks consistency with HRI_DB

TPR:
  checks missing prerequisites

SCV:
  checks social appropriateness

Social Opportunity TPR:
  waits for Bob availability if needed

SAS:
  styles speech and motion

Actuation Layer:
  realizes behavior on the robot body
```

Each step produces or consumes HIFs.

Each step can be inspected.

Each step can be replaced.

Each step has bounded authority.

This does not prevent the use of large models.

It prevents large models from silently owning the whole HRI loop.

---

## Relationship to HML Patterns

Semantic Responsibility Decoupling is not separate from the HML pattern language.

It appears throughout the patterns.

### SME

SME separates multiple experts that operate on the same input frame or request.

This supports parallel bounded responsibility.

### TSC / TSP

TSC/TSP separates cheap, cached, or deterministic interpretation from more expensive LLM fallback interpretation.

This prevents a large model from being used when a simpler semantic path is sufficient.

### EAG

EAG separates expert selection according to resources, fidelity, and policy.

It allows high-capability models and cheap fallbacks to coexist.

### HRI_DB Handler

The HRI_DB Handler separates memory access from perception, interpretation, and planning.

Models may propose facts, but memory updates pass through controlled handlers.

### SCV

SCV separates technical executability from social acceptability.

A planner or agent may propose an action, but SCV validates whether it is socially appropriate.

### SAS

SAS separates semantic intent from social expression.

A model may style a behavior, but that style remains a structured HIF, not an opaque action.

### Actuation Layer

The Actuation Layer separates behavior meaning from embodiment-specific execution.

A behavior-ready HIF is still bound through capability, codebook, state, policy, and feedback.

---

## SOCIAL Principles Supported

### S — Separated Contexts

Semantic Responsibility Decoupling directly supports separation.

```text
perception != interpretation != memory != planning != style != actuation
```

Each role can be represented, inspected, and validated separately.

### O — Open Declarative

Each role emits explicit artifacts or HIFs.

The system can expose what was proposed, criticized, accepted, rejected, stored, or acted upon.

### C — Clear Cognition

The architecture can explain which component contributed which part of the decision.

For example:

```text
The VLM proposed the object relation.
SBR resolved the reference.
CEU accepted the memory update.
SCV delayed the action due to social context.
SAS selected a polite expression style.
```

### I — Interpretable Gates

Connections between roles pass through explicit gates.

A model output does not automatically become a fact, task, or action.

### A — Adaptive Autonomy

The system can decide when to give more or less authority to models.

For example:

```text
use direct heuristic when confidence is high
use LLM fallback when interpretation is uncertain
ask a human when stakes are high
reduce autonomy when SIAH detects degraded state
```

### L — Layered Validation

No single model receives full authority over the loop.

Outputs are checked across multiple layers before they become behavior.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Modularity vs. latency | More components and gates can slow the loop |
| Decoupling vs. integration | Responsibility boundaries require interfaces and orchestration |
| Bounded roles vs. emergent intelligence | Limiting authority can reduce some flexibility of a monolithic agent |
| Debuggability vs. engineering effort | Local debugging improves, but the architecture takes more work to build |
| Replaceability vs. orchestration complexity | Components become easier to replace but harder to coordinate |
| Safety vs. fluidity | Gates may make interaction less seamless if overused |
| Transparency vs. cognitive overhead | More explicit artifacts create more information to inspect |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Too many components | Merge roles when risk is low or latency matters |
| Interface mismatch | Use HIF schemas, validators, and contract tests |
| Responsibility gaps | Maintain an explicit ownership map |
| Overlapping authority | Use policy gates and clear commit permissions |
| Excessive latency | Use EAG, fast paths, and resource-aware routing |
| Model output not representable | Treat as artifact only; do not commit |
| Hidden side effects | Prevent direct memory writes and direct actuation by model experts |
| Critic and generator share the same blind spot | Use diverse critics, rule checks, or human review |
| Components disagree frequently | Add conflict resolution gates and confidence policies |
| Debug trace becomes overwhelming | Use layered summaries and relevance filtering |

---

## Implementation Notes

A practical implementation should define responsibility boundaries explicitly.

For each model, agent, or expert, specify:

```text
role name
allowed input HIFs
allowed output HIFs
whether it can propose, validate, commit, or act
which gates validate its output
which memory regions it can read
whether it can write memory
whether it can call tools
whether it can trigger actuation
fallback behavior
logging requirements
```

A useful design rule is:

```text
Only gates and controlled handlers commit.
Models and agents usually propose.
```

This can be relaxed in low-risk contexts, but the authority boundary should still be explicit.

---

## Transition to Foundation Models as HML Experts

Once responsibilities are decoupled, foundation models can be inserted into the architecture as bounded experts, critics, candidate generators, fallback interpreters, and style proposers.

The next page explains how LLMs, VLMs, video models, agents, and learned policies can participate inside HML patterns without taking over the whole HRI loop.
