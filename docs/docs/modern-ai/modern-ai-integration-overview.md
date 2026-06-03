---
title: Modern AI Integration Overview
sidebar_position: 23
---

# Modern AI Integration Overview

## Overview

This section explains how modern AI components can be integrated into a SOCIAL HRI architecture.

The purpose is not to reject foundation models, end-to-end policies, VLMs, LLMs, agents, or RL-based systems.

The purpose is to give them a disciplined place inside an inspectable HRI architecture.

```text
SOCIAL is not anti-modern-AI.

SOCIAL is a discipline for using modern AI in human-facing robotic systems
without losing transparency, modularity, policy control, and feedback.
```

Modern AI models can provide powerful capabilities:

```text
open-vocabulary perception
language understanding
multimodal interpretation
video segmentation
world modeling
planning proposals
social critique
behavioral styling
motion generation
semantic memory summarization
```

However, in HRI, capability alone is not enough.

A human-facing robot must also support:

```text
debuggability
explainability
bounded authority
memory governance
social safety
policy compliance
human override
traceable feedback
```

This section describes how HML and the SOCIAL principles can help integrate modern AI models while preserving these properties.

---

## Why This Section Is Needed

The previous sections introduced an HML pattern language based on explicit layers, HIFs, gates, semantic cells, expert selection, memory handlers, task resolvers, social planners, and actuation adapters.

Many of those patterns may look more structured than modern end-to-end AI systems.

A reader may ask:

```text
Why not use one powerful multimodal model or agent?
Why not train a large policy in simulation?
Why not let a VLM understand the scene and directly choose an action?
Why not let an LLM plan the whole interaction?
```

These are reasonable questions.

Modern models are increasingly capable.

They can perform tasks that previously required complex hand-designed pipelines.

But the central question in HRI is not only whether a model can produce an answer or an action.

The central question is:

```text
How does the system know what was understood,
what was committed to memory,
what was validated,
what was allowed,
what was rejected,
what was acted upon,
and how feedback changes future behavior?
```

This is where SOCIAL remains important.

---

## Modern AI Is Not Outside HML

Modern AI components can participate in HML in many roles.

They can be:

```text
experts
critics
fallback interpreters
candidate generators
semantic compressors
segmenters
planners
style proposers
world-model estimators
memory summarizers
```

For example:

```text
VLM as a scene-understanding expert
LLM as an instruction-normalization expert
video model as a segmentation expert
agent as a plan-candidate generator
LLM critic as a social convention evaluator
RL policy as a motion realization expert
```

The key architectural rule is:

```text
A model may propose meaning, but the architecture decides commitment.
```

That means the model output should usually become:

```text
Candidate HIF
Intermediate artifact
Critique HIF
PlanCandidateHIF
ValidationHIF
RiskHIF
StyledBehaviorCandidateHIF
```

before it becomes:

```text
accepted memory
valid fact
executable instruction
robot action
```

A modern model can be powerful, but it should not automatically be sovereign.

---

## The Core Claim

The core claim of this section is:

```text
As models become more capable,
semantic responsibility boundaries become more important.
```

A monolithic model that observes, interprets, remembers, plans, styles, acts, and learns from feedback may be impressive.

But in an HRI system, it can also become difficult to:

```text
inspect
debug
replace
verify
personalize safely
constrain
audit
explain
repair
```

SOCIAL HRI therefore encourages a different organization.

Instead of one unbounded model controlling the whole loop, the system can use bounded AI roles connected through HIFs, gates, and feedback.

```text
bounded model role
  → explicit HIF output
  → validation / policy gate
  → accepted semantic commitment
  → downstream layer
```

This does not make the model weaker.

It constrains authority so that the model can be used safely in a human-facing robotic architecture.

---

## From Model Output to Semantic Commitment

A major distinction in this section is the difference between an intermediate artifact and a semantic commitment.

A modern model may produce:

```text
segmentation mask
caption
chain-of-thought-like trace
object track
pose estimate
attention map
plan candidate
tool call proposal
critic comment
uncertainty estimate
```

These artifacts can be useful.

They can help a developer understand what the model processed.

They can also help the robot reason about what might be true.

But they are not automatically commitments.

For example:

```text
segmentation mask ≠ object in HRI_DB
caption ≠ verified fact
plan candidate ≠ executable task
critic comment ≠ policy decision
chain-of-thought-like trace ≠ certified reasoning
```

SOCIAL requires a commitment step.

```text
intermediate artifact
  → candidate HIF
  → validation / gate
  → accepted HIF
  → memory, task, or behavior
```

This distinction lets the system use rich model outputs without treating every model response as ground truth.

---

## Example: Video Understanding

A video model may process raw camera input and produce segmentation masks, tracked people, object labels, captions, or relation candidates.

A SOCIAL-compatible flow might be:

```text
raw video
  → segmentation masks
  → object tracks
  → pose skeletons
  → pointing vector
  → referenced object candidate
  → validation
  → ReferencedObjectHIF
```

The intermediate artifacts are useful for debugging.

A developer or operator can see what the robot visually extracted.

But the final semantic commitment is the accepted HIF:

```text
ReferencedObjectHIF
```

This HIF can then be used by SBR, CEU, QSH, TPR, or other HML patterns.

The point is not to hide the model.

The point is to make the transition from pixels to semantics explicit.

---

## Example: Language Understanding

An LLM may interpret a user utterance such as:

```text
Do you know Bob's whereabouts?
```

The model may infer that this is a location query.

A SOCIAL-compatible flow would not allow the LLM to freely invent an action.

Instead:

```text
utterance
  → LLM interpretation candidate
  → IntentCandidateHIF
  → schema check
  → allowed intent template
  → QueryHIF
```

For example:

```json
{
  "type": "QueryHIF",
  "properties": {
    "query": "where_is",
    "params": {
      "who": "Bob"
    }
  }
}
```

The LLM expands interpretation.

The architecture bounds commitment.

This is the same principle used by the Tiered Semantic Cache / Proxy pattern, where simpler interpreters and caches can handle common cases, while LLMs provide fallback semantic interpretation.

---

## Example: Agentic Planning

An agent may propose a plan:

```text
Approach Alice, ask for help, then wait for confirmation.
```

A SOCIAL-compatible system should not treat this as direct actuation.

Instead:

```text
agent proposal
  → PlanCandidateHIF
  → prerequisite checks
  → SCV / SIAH validation
  → Social Opportunity TPR
  → SAS
  → actuation
```

An additional critic model may review the plan.

```text
PlanCandidateHIF
  → critic expert
  → CritiqueHIF
  → policy gate
  → accept / modify / reject / escalate
```

This makes agentic reasoning useful without allowing the agent to bypass governance.

---

## The Role of HIFs

HIFs are the semantic interface between modern AI components and the rest of the architecture.

They provide:

```text
schema
source
timestamp
confidence
context
processing history
semantic type
```

This makes model outputs easier to:

```text
inspect
compare
validate
store
route
debug
explain
replay
```

A model output that cannot be represented as a HIF may still be useful as an artifact.

But it should not automatically become a memory update, task, or behavior.

The HIF is the boundary between model generation and system commitment.

---

## The Role of Gates

Gates decide what happens to model outputs.

Examples include:

```text
policy gate
consistency gate
social convention gate
resource gate
capability gate
safety gate
memory update gate
semantic commitment gate
```

A gate may decide to:

```text
accept
reject
modify
delay
ask for clarification
escalate
store as uncertain
route to another expert
```

This is especially important for modern AI because models may produce plausible outputs that are not safe, grounded, relevant, or allowed.

A model can generate possibilities.

A gate decides which possibilities become part of the robot's operational reality.

---

## Modern AI and the SOCIAL Principles

Modern AI can support SOCIAL if it is integrated with the right discipline.

### S — Separated Contexts

Modern models should not collapse all context into one hidden prompt or latent state.

Human Context, Scene Context, Robot Context, memory, task state, social timing, style, and actuation should remain distinct when possible.

### O — Open Declarative

Model outputs should be externalized as declarative artifacts and HIFs.

The system should expose what was detected, inferred, proposed, criticized, accepted, and rejected.

### C — Clear Cognition

The robot should be able to explain why a model output was used or ignored.

For example:

```text
The VLM suggested the object may be a bottle.
The SBR module confirmed the pointing vector intersected bottle_3.
The CEU accepted the reference with confidence 0.82.
```

### I — Interpretable Gates

Modern AI outputs should pass through explicit gates.

The model may propose, but gates decide commitment.

### A — Adaptive Autonomy

The architecture can decide when to rely on high-capability models, when to use simpler experts, when to ask a human, and when to reduce autonomy.

### L — Layered Validation

Model outputs should be checked at multiple levels before becoming action.

For example:

```text
interpretation
  → consistency
  → social acceptability
  → timing
  → style
  → actuation capability
```

---

## What This Section Will Cover

This section contains six pages.

### 1. Modern AI Integration Overview

This page introduces the central claim:

```text
modern AI should be integrated through HIFs, gates, and bounded semantic roles
```

### 2. Semantic Responsibility Decoupling

This page explains why HRI systems should avoid monolithic model authority and instead organize modern AI components around bounded responsibilities.

### 3. Foundation Models as HML Experts

This page shows how LLMs, VLMs, video models, agents, and learned policies can be used as experts inside HML patterns.

### 4. Intermediate Artifacts and Semantic Commitments

This page explains the difference between seeing model traces and accepting semantic commitments.

### 5. End-to-End, RL, and SOCIAL Tradeoffs

This page compares classical pipelines, end-to-end models, RL policies, foundation models, and hybrid HML approaches.

### 6. Practical Integration Patterns

This page summarizes practical patterns such as candidate generation, critic pairing, trace-to-HIF conversion, bounded tool agents, shadow models, fallback experts, and resource-aware expert selection.

---

## Research Positioning

The goal is not to choose between transparent pipelines and powerful foundation models.

The goal is to make powerful models participate in transparent, inspectable, and governable HRI architectures.

```text
The purpose of HML is not to replace foundation models.

It is to give them a disciplined place inside an inspectable HRI architecture.
```

This provides a bridge between classical modular robotics and modern foundation-model-based robotics.

The contribution is not nostalgia for pipelines.

It is a pattern language for hybrid HRI systems that can use modern AI while preserving SOCIAL principles.

---

## Transition to Semantic Responsibility Decoupling

The next page introduces the most important design principle for modern AI integration:

```text
Semantic Responsibility Decoupling
```

The central idea is that the more capable a model becomes, the more important it is to define its responsibility, authority, input contract, output schema, and validation path.
