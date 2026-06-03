---
title: End-to-End, RL, and SOCIAL Tradeoffs
sidebar_position: 27
---

# End-to-End, RL, and SOCIAL Tradeoffs

## Intent

This page compares end-to-end learning, RL-based robot policies, foundation-model agents, classical modular pipelines, and hybrid SOCIAL HML architectures.

The goal is not to dismiss end-to-end learning or reinforcement learning.

These approaches can be extremely powerful.

The goal is to identify where they fit in HRI systems and where human-facing robots still require explicit governance.

```text
The tradeoff is not classical versus modern.

The tradeoff is unbounded capability versus governed capability.
```

In HRI, the question is not only whether a model can learn or generate a behavior.

The question is how the system governs that behavior once learned.

---

## Problem

A reader may reasonably ask:

```text
We have strong multimodal models.
We have large-scale simulators.
We can train policies with RL.
Why do we need an HML architecture?
```

This is a valid challenge.

Modern learning-based systems can solve problems that would be difficult or brittle with hand-designed pipelines.

However, HRI is not only a perception-control problem.

It involves:

```text
social meaning
ambiguity
memory
personal preferences
norms
trust
privacy
consent
long-term interaction
human override
rare but high-impact failures
```

An end-to-end model may learn to act.

But the architecture must still decide:

```text
what authority the model has
what assumptions it is allowed to make
what commitments it can create
what memory it can update
what social norms constrain it
what feedback is monitored
what happens when it fails
```

End-to-end capability should not imply end-to-end authority.

---

## Where End-to-End and RL Are Strong

End-to-end learning and RL are especially strong when the system has:

```text
clear objectives
fast feedback
well-defined state and action spaces
large simulator coverage
physical repetition
measurable success criteria
```

They can be highly effective for:

```text
locomotion
grasping
manipulation primitives
visual servoing
obstacle avoidance
navigation sub-policies
gesture generation
low-level control
motion smoothing
adaptive motor behavior
```

For example:

```text
A learned locomotion policy may outperform a hand-coded controller.
A learned grasping policy may generalize across many objects.
A video model may detect open-world entities better than a fixed detector.
A learned motion policy may produce smoother behavior than manually tuned trajectories.
```

SOCIAL HML does not reject these strengths.

Instead, it asks how such learned capabilities should be connected to memory, social reasoning, validation, and feedback in a human-facing robot.

---

## Why HRI Is Harder Than Control

In HRI, success is not only task completion.

It is task completion under social, ethical, contextual, and relational constraints.

Many important HRI qualities are hard to specify as simple reward functions:

```text
politeness
awkwardness
trust
comfort
consent
interruption timing
social appropriateness
privacy
relationship over time
cultural norms
institutional rules
repair after misunderstanding
```

This creates several challenges:

```text
reward misspecification
sim-to-real gap
social edge cases
rare but high-impact failures
long-term memory effects
privacy violations
hard-to-measure trust erosion
personal preference diversity
```

A reward function may encourage behavior that is efficient but socially poor.

A simulator may cover navigation but not embarrassment.

A learned policy may maximize task completion while increasing interruption fatigue.

A foundation-model agent may produce a socially plausible but unverified memory.

The SOCIAL issue is not capability.

It is governance.

---

## The SOCIAL Concern

The concern is not:

```text
the learned policy cannot act
```

The concern is:

```text
the learned policy may act without making its assumptions, authority, and commitments inspectable
```

For example:

```text
An end-to-end model may learn to interrupt because it maximizes task success in simulation.
An RL policy may learn a socially uncomfortable trajectory if it is physically efficient.
A foundation-model agent may invent a plausible but false memory.
A learned policy may exploit reward loopholes that are invisible until deployment.
A video-to-action model may skip the distinction between candidate perception and accepted semantic commitment.
```

These are not arguments against learning.

They are arguments for bounded integration.

A model can contribute capability.

The architecture must govern commitment and authority.

---

## Hybrid Integration Principle

The hybrid principle is:

```text
Use learned models where they are strong,
but wrap them in HIF contracts, gates, constraints, and feedback loops.
```

A learned model may:

```text
propose a trajectory
generate a plan candidate
classify a social risk
produce a motion primitive
suggest a gesture
interpret open-world perception
style a response
```

But the system should define:

```text
input HIF
output HIF
authority boundary
safety constraints
social constraints
validation gate
feedback contract
fallback path
```

This allows learned models to improve capability without silently owning the full HRI loop.

A concise rule is:

```text
Learned models may propose or realize behavior.

The architecture governs when that proposal becomes action.
```

---

## Example — RL Locomotion Policy

Consider a motion request produced by Social Planning:

```text
StyledMotionHIF:
  approach Bob politely
  stop at 1.5m
  avoid blocking path
  move slowly near person
```

An RL policy should not receive an unconstrained instruction such as:

```text
go do whatever maximizes reward
```

Instead, it receives a bounded task:

```text
generate a motion candidate satisfying these constraints
```

A possible output is:

```json
{
  "type": "MotionCandidateHIF",
  "properties": {
    "target": "bob",
    "trajectory_id": "traj_47",
    "respects_distance": true,
    "min_distance_to_person": "1.6m",
    "avoids_path_blocking": true,
    "estimated_duration": "4.2s",
    "confidence": 0.79
  },
  "processing_history": [
    "StyledMotionHIF",
    "RLLocomotionPolicy"
  ]
}
```

The Actuation Layer then checks:

```text
robot capability
robot state
safety constraints
social distance
sync / async schedule
feedback requirements
```

The RL policy does what it is good at: motion.

It does not decide the whole social meaning of the interaction.

---

## Example — End-to-End Video-to-Action Model

A modern model may receive raw video and an instruction, then suggest an action.

For example:

```text
raw video + instruction
  → end-to-end model
  → approach person and ask loudly
```

In a SOCIAL-compatible architecture, this output should become a candidate, not direct actuation.

```text
raw video + instruction
  → end-to-end model
  → CandidateActionHIF
  → TPR / SCV / SIAH / SAS / Actuation
```

If the model proposes:

```text
approach person and ask loudly
```

the architecture may decide to:

```text
accept the approach
modify the speech style
delay because the social opportunity is closed
reject loud interruption
ask for clarification
escalate to a human
```

The end-to-end model can still be useful.

It proposes integrated behavior.

But the architecture decides which parts become committed, styled, and executed.

---

## Example — Simulator-Trained Social Behavior

Large simulators can improve training for embodied behavior.

They may simulate:

```text
crowds
navigation
human motion
line of sight
some social distances
interaction timing
task routines
```

This is valuable.

A simulator-trained policy may learn robust navigation or smooth group-aware motion.

However, simulators often struggle to fully capture:

```text
embarrassment
trust erosion
cultural norms
privacy expectations
fatigue from repeated interruptions
institutional etiquette
long-term relationship
edge-case social repair
```

A simulator-trained behavior can therefore be a strong expert, but deployment still needs SOCIAL gates and feedback.

```text
simulation-trained behavior
  → candidate behavior HIF
  → social validation
  → state and capability checks
  → feedback monitoring
  → memory update if accepted
```

This allows simulation to contribute powerfully without being treated as complete social proof.

---

## Comparison Table

| Approach | Best For | SOCIAL Risk | SOCIAL Integration |
|---|---|---|---|
| Classical pipeline | Traceable perception and control | Brittle, limited coverage | Use as HML experts and gates |
| End-to-end model | Fast integrated behavior | Hidden commitments | Candidate HIF plus gates |
| RL policy | Motor/control optimization | Reward misspecification | Constraint-bound executor |
| VLM / LLM agent | Open-world semantics and planning | Hallucination, broad authority | Bounded expert or critic |
| Simulator-trained policy | Scalable training and embodiment variation | Sim-to-real social gap | Validate with HIFs and feedback |
| Hybrid SOCIAL HML | Governed integration of multiple approaches | More architecture complexity | Use models inside patterns |

The table is not a ranking.

Different parts of an HRI system may use different approaches.

The architectural question is which component has which authority.

---

## What We Are Not Claiming

This framework does not claim that:

```text
modular systems always outperform end-to-end systems
RL cannot learn social behavior
foundation-model agents are unusable
every model output must pass through many slow gates
classical pipelines are always better
```

The claim is narrower and more architectural:

```text
HRI systems need explicit mechanisms for responsibility,
commitment, memory governance, social validation, and feedback.
```

Some learned components may execute directly inside bounded low-level controllers.

Some high-level social decisions may require multiple gates.

Some low-risk interactions may use faster paths.

The key is that these choices should be explicit.

---

## Risk-Based Authority

Not every decision requires the same amount of validation.

A SOCIAL architecture can assign authority according to risk.

For example:

```text
low-risk:
  learned stylist suggests a greeting phrase

medium-risk:
  VLM proposes a referenced object candidate

high-risk:
  robot approaches a person in a crowded room

critical:
  robot performs emergency stop or interacts with safety-related equipment
```

Higher-risk cases require stronger governance:

```text
more explicit HIFs
more validation gates
more conservative fallbacks
human confirmation
stronger logging
lower autonomy
```

This supports adaptive autonomy.

The system can be fluid when risk is low and cautious when risk is high.

---

## SOCIAL Principles Supported

### S — Separated Contexts

End-to-end systems often blend perception, interpretation, planning, style, and action.

SOCIAL keeps these concerns separated when accountability matters.

```text
perception
interpretation
memory
task readiness
social validation
style
actuation
```

### O — Open Declarative

Learned policies and model outputs should be represented as HIFs or candidate HIFs.

This makes their proposals visible to the architecture.

### C — Clear Cognition

The system can explain:

```text
what the model proposed
which gate accepted or rejected it
which constraints modified it
what feedback was observed
```

### I — Interpretable Gates

Learned components pass through explicit gates when their outputs may affect memory, planning, social interaction, or physical action.

### A — Adaptive Autonomy

The architecture can give more or less authority to learned models based on risk, confidence, resource state, and human supervision.

### L — Layered Validation

Even strong learned models can pass through multiple validation layers before their outputs become behavior.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Capability vs. governance | A stronger model can produce better proposals but may require stricter authority control |
| Latency vs. validation | Additional gates and checks may slow interaction |
| Fluency vs. inspectability | End-to-end behavior may feel smooth but be harder to explain |
| Reward optimization vs. social meaning | A reward may miss important norms, consent, or trust factors |
| Simulation scale vs. real social diversity | Simulators may not cover all real-world social contexts |
| Constraint wrapping vs. emergent behavior | Constraints may limit some learned flexibility |
| Direct execution vs. semantic commitment | Direct policies may be fast but less auditable |
| Hybrid architecture vs. engineering complexity | Combining approaches requires orchestration and schemas |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Reward hacking | Explicit constraints, monitoring, and adversarial evaluation |
| Sim-to-real social failure | Real-world feedback, conservative gates, and user studies |
| Policy acts on hidden assumption | Candidate HIF requirement and evidence fields |
| End-to-end model bypasses memory governance | No direct HRI_DB writes |
| Socially efficient but rude behavior | SCV, Social Opportunity TPR, and SAS |
| Unsafe learned fallback | SIAH validation and fallback policy |
| Hallucinated action or object | Candidate HIF plus CEU / SBR validation |
| Latency from too many gates | Risk-based fast paths and EAG |
| Over-constrained model loses usefulness | Allow bounded autonomy in low-risk contexts |
| Learned policy lacks feedback contract | Require ActionFeedbackHIF or equivalent |

---

## Implementation Notes

For every learned or end-to-end component, define:

```text
role
allowed inputs
output HIF type
whether it proposes or executes
constraints
validation gate
feedback contract
fallback
logging
risk level
resource budget
human override policy
```

A useful guideline is:

```text
Low-level learned policies may execute within bounded controllers.

High-level social decisions should usually remain gated.
```

Examples:

```text
RL locomotion:
  may execute within navigation controller constraints

VLM object relation:
  should propose SceneRelationCandidateHIF

LLM planner:
  should propose PlanCandidateHIF

LLM social critic:
  should produce CritiqueHIF

End-to-end video-to-action model:
  should produce CandidateActionHIF unless operating in a certified low-risk envelope
```

---

## Research Positioning

This page positions SOCIAL HML as a hybrid architecture.

It is not classical modular robotics against modern AI.

It is not foundation models against symbolic structure.

It is a design discipline for combining them.

```text
Classical modules provide traceability.
Foundation models provide semantic flexibility.
RL policies provide embodied skill.
HIFs and gates provide governance.
```

The result is a system that can benefit from modern AI while preserving the properties needed for HRI:

```text
debuggability
explainability
social validation
memory governance
feedback integration
bounded autonomy
```

The question is not whether a model can learn the behavior.

The question is how the system governs the behavior once learned.

```text
End-to-end capability should not imply end-to-end authority.

SOCIAL HML lets learned models contribute capability while preserving accountability.
```

---

## Transition to Practical Integration Patterns

After comparing the tradeoffs, the next page summarizes practical patterns for using modern AI inside SOCIAL HRI systems.

These include:

```text
Candidate Generator
Critic Pair
Trace-to-HIF
Bounded Tool Agent
Shadow Model
Fallback Expert
Resource-Aware Expert Selection
```

The next page turns the principles from this section into reusable integration patterns.
