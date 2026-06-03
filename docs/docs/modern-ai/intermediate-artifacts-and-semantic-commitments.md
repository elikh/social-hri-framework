---
title: Intermediate Artifacts and Semantic Commitments
sidebar_position: 26
---

# Intermediate Artifacts and Semantic Commitments

## Intent

This page defines the difference between **intermediate artifacts** produced by modern AI components and **semantic commitments** accepted by the HRI architecture.

Modern models can expose many useful traces:

```text
segmentation masks
object tracks
captions
reasoning-like traces
critic comments
plan candidates
uncertainty scores
```

These artifacts are valuable.

They help developers, operators, and downstream modules inspect what a model processed or inferred.

But an artifact is not yet a system-level commitment.

```text
Intermediate artifacts are evidence.

Semantic commitments are system-level decisions.
```

A model may expose what it processed or inferred.

The architecture must decide what becomes part of the robot's operational reality.

---

## Problem

Modern AI systems are no longer always completely opaque.

Many systems can expose:

```text
segmentation masks
bounding boxes
object tracks
pose skeletons
captions
retrieved context
tool calls
reasoning-like traces
critic outputs
plan candidates
```

This is a real improvement.

It gives humans and systems more visibility into intermediate processing.

However, in HRI, the central question is not only:

```text
Can we see something?
```

The central question is:

```text
What does the robot accept as true enough to use?
```

For example, a model may draw a segmentation mask around something bottle-like.

That does not automatically mean:

```text
HRI_DB contains bottle_3.
```

It also does not automatically mean:

```text
the robot may bring it to Bob.
```

A visible trace can support accountability, but it does not replace architectural commitment logic.

The system still needs an explicit process that decides when an artifact becomes a usable semantic representation.

---

## Intermediate Artifacts

**Intermediate artifacts** are model-produced or system-produced representations that expose partial processing, evidence, hypotheses, or candidate reasoning.

They are useful for:

```text
debugging
inspection
developer understanding
operator monitoring
candidate generation
confidence estimation
error localization
replay
training data collection
```

But they should remain evidence or candidates until they pass the appropriate validation path.

### Vision and Video Artifacts

Examples include:

```text
frame
segmentation mask
bounding box
object crop
object track
pose skeleton
depth estimate
gaze estimate
pointing vector
scene caption
relation candidate
```

These artifacts help explain what the robot visually processed.

They may support downstream reasoning, but they are not automatically accepted facts.

### Language Artifacts

Examples include:

```text
speech transcript
paraphrase
intent candidate
retrieved memory snippet
reasoning-like trace
tool call proposal
entity candidate
```

These artifacts help explain how language was interpreted.

But a transcript or interpretation candidate is not yet an accepted query, fact, or instruction.

### Agent and Planning Artifacts

Examples include:

```text
plan candidate
subgoal list
tool-use proposal
risk note
critic comment
alternative plan
```

These artifacts may be useful for planning and critique.

But a plan candidate is not automatically an executable task.

### Social Reasoning Artifacts

Examples include:

```text
availability estimate
emotion estimate
social context label
norm violation candidate
style suggestion
interaction risk note
```

These artifacts may inform social reasoning.

But a social estimate should not automatically become a stable memory or behavior decision.

---

## Semantic Commitments

A **semantic commitment** is a representation that the system accepts as operationally usable.

It does not have to mean absolute truth.

It means the architecture has accepted the representation strongly enough to use it for memory, reasoning, planning, social validation, actuation, or feedback.

Examples include:

```text
PersonHIF:
  this is a tracked person

ObjectHIF:
  this object exists in scene memory

ReferencedObjectHIF:
  this is the object the user referred to

FactHIF:
  Bob is in the kitchen

QueryHIF:
  the user is asking where Bob is

ExecutableTaskHIF:
  this task has enough prerequisites

SociallyAcceptableInstructionHIF:
  this instruction passed social validation

StyledBehaviorHIF:
  this behavior is ready for expression

ExecutionCommandHIF:
  this action is ready for platform execution
```

The distinction is:

```text
An artifact says:
  this may be useful evidence.

A commitment says:
  the architecture may now use this as part of its operational state.
```

---

## The Commitment Pipeline

A SOCIAL-compatible architecture should define an explicit path from artifact to commitment.

```text
Intermediate Artifact
  → Candidate HIF
  → Validation / Gate
  → Committed HIF
  → Memory / Planning / Behavior / Actuation
```

A typical commitment flow is:

```text
1. A model, sensor, or tool produces an artifact.
2. The artifact is wrapped as a candidate HIF.
3. The candidate is checked by schema, confidence, policy, consistency, or critic.
4. A gate decides whether to accept, reject, modify, ask, or store as uncertain.
5. If accepted, the HIF becomes usable downstream.
```

Commitment is an architectural event.

It is the moment where a hypothesis becomes part of the system's working semantic state.

This is where HML adds structure beyond model visibility.

---

## Example — From Video Segmentation to ObjectHIF

A video model may segment an object in the camera frame.

A SOCIAL-compatible pipeline may look like this:

```text
raw frame
  → segmentation mask
  → object crop
  → label candidate: bottle
  → ObjectCandidateHIF
  → Scene Context / CEU validation
  → ObjectHIF
  → scene memory or HRI_DB
```

The segmentation mask helps developers see what the model detected.

The ObjectCandidateHIF makes the hypothesis structured.

The validation gate decides whether the system should accept it.

The ObjectHIF is the semantic commitment.

If a human is pointing at the same object, the flow may continue:

```text
raw video
  → pose skeleton
  → pointing vector
  → candidate intersection with bottle_3
  → ReferencedObjectCandidateHIF
  → SBR validation
  → ReferencedObjectHIF
```

The segmentation mask helps debug what the model saw.

The ReferencedObjectHIF tells us what the architecture accepted as the user's intended reference.

---

## Example — From LLM Interpretation to QueryHIF

Consider the utterance:

```text
Do you know Bob's whereabouts?
```

An LLM may infer that the user is asking where Bob is.

That interpretation is useful, but it is not yet a committed query.

A SOCIAL-compatible pipeline is:

```text
utterance
  → LLM interpretation
  → IntentCandidateHIF
  → allowed template check
  → entity resolution
  → QueryHIF
  → QSH
```

For example:

```json
{
  "type": "IntentCandidateHIF",
  "properties": {
    "intent": "where_is",
    "params": {
      "who": "Bob"
    },
    "source_text": "Do you know Bob's whereabouts?",
    "confidence": 0.91
  },
  "processing_history": [
    "TextInterpreterTSP",
    "LLMFallback"
  ]
}
```

After schema validation and entity resolution, the system may commit to:

```json
{
  "type": "QueryHIF",
  "properties": {
    "query": "where_is",
    "params": {
      "who": "Bob"
    }
  },
  "processing_history": [
    "TextInterpreterTSP",
    "QSH"
  ]
}
```

The model proposes the mapping.

The architecture commits to the query.

---

## Example — From Agent Plan to PlanCandidateHIF

An agent may propose:

```text
Approach Alice, ask loudly for help, then wait.
```

This may be a useful plan candidate.

But it should not go directly to actuation.

A SOCIAL-compatible path is:

```text
agent plan
  → PlanCandidateHIF
  → TPR
  → SCV
  → Social Opportunity TPR
  → SAS
  → Actuation
```

For example, SCV may reject or modify the plan because:

```text
Alice is in a formal meeting.
The plan asks the robot to speak loudly.
The context suggests that a quiet cue is more appropriate.
```

The agent proposed a plan.

The architecture decides what, if anything, becomes a planning-ready or behavior-ready HIF.

---

## Example — From Critic Comment to ValidationHIF

A critic model may say:

```text
This may be inappropriate because Bob is in a formal meeting.
```

This is useful.

But it is still evidence for validation, not validation itself.

A SOCIAL-compatible path is:

```text
critic comment
  → CritiqueHIF
  → SCV policy gate
  → SocialDelayHIF / SocialRejectionHIF / ModifiedInstructionHIF
```

For example:

```json
{
  "type": "CritiqueHIF",
  "properties": {
    "risk": "interrupting_formal_meeting",
    "severity": "medium",
    "evidence": [
      "target_person_currently_speaking",
      "room_context=formal_meeting_room"
    ],
    "suggested_modification": "wait_or_use_quiet_nonverbal_cue"
  },
  "processing_history": [
    "LLMSocialCritic"
  ]
}
```

SCV decides how to use the critique.

The critic is not the policy gate.

```text
Critique is evidence for validation.

It is not validation itself.
```

---

## Why Visibility Is Not Enough

Being able to inspect a trace is useful.

But trace visibility does not define what the robot is allowed to believe or do.

Important distinctions include:

```text
caption ≠ fact
mask ≠ object memory
track ≠ identity
reasoning-like text ≠ verified reasoning
critic note ≠ policy decision
plan ≠ task
trajectory ≠ allowed motion
```

Visibility helps humans inspect.

Commitment logic governs the robot.

This distinction is especially important when modern systems expose chain-of-thought-like text, tool traces, or visual masks.

These outputs may be helpful, but they do not automatically provide safety, correctness, or policy compliance.

A system still needs HIFs, gates, validation, and memory governance.

---

## Relationship to HIFs and Gates

HIFs turn artifacts into typed candidates.

Gates decide whether candidates become commitments.

A candidate HIF can include:

```text
type
source
timestamp
confidence
evidence
provenance
uncertainty
processing history
allowed downstream use
```

A gate can check:

```text
schema validity
confidence
consistency
policy
social appropriateness
safety
resource limits
memory update permission
capability availability
```

The combination creates a controlled commitment process:

```text
artifact
  → candidate HIF
  → gate
  → committed HIF
```

This process allows the architecture to use modern AI artifacts without treating every model output as operational truth.

---

## Commitment Status

A useful implementation may track commitment status explicitly.

For example:

```text
artifact_only
candidate
accepted
accepted_uncertain
rejected
needs_clarification
expired
```

This allows the same model output to be treated differently depending on confidence, stakes, and context.

For example:

```text
a low-confidence object candidate may remain visible for debugging
a medium-confidence hypothesis may be stored as uncertain
a high-confidence validated object may become ObjectHIF
a socially risky action candidate may become SocialDelayHIF
```

This makes uncertainty operational instead of hidden.

---

## SOCIAL Principles Supported

### S — Separated Contexts

The distinction separates artifacts, candidates, commitments, memory, planning, and action.

A mask is not an object memory.

A plan candidate is not an executable task.

A critique is not a policy decision.

### O — Open Declarative

Artifacts and commitments are externalized.

The system can show what was detected, proposed, validated, accepted, rejected, or stored as uncertain.

### C — Clear Cognition

The robot can explain why an artifact was accepted or rejected.

For example:

```text
The VLM proposed bottle_3.
The pointing vector aligned with bottle_3.
SBR accepted the reference with confidence 0.84.
```

### I — Interpretable Gates

Commitment happens through explicit gates.

The gate can be inspected, tuned, replaced, or audited.

### A — Adaptive Autonomy

The system can use an artifact with different levels of authority.

For example:

```text
debug evidence only
uncertain memory
committed fact
planning input
action constraint
```

The level of commitment can depend on confidence, policy, resources, and stakes.

### L — Layered Validation

Commitment is staged.

The architecture does not jump directly from model output to robot action.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Rich artifacts vs. storage cost | Storing traces can be expensive |
| Human visibility vs. cognitive overload | Too many artifacts make debugging harder |
| Strict commitment vs. responsiveness | Many checks may slow interaction |
| Candidate uncertainty vs. action need | Sometimes action is needed before full certainty |
| Full trace vs. privacy | Traces may contain sensitive information |
| Formal HIFs vs. model flexibility | Schemas constrain free-form model output |
| Long retention vs. safety | Keeping artifacts too long can create privacy and governance issues |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Artifact treated as fact | Require candidate HIF and gate before commitment |
| Caption stored as memory directly | Route through CEU / memory commit gate |
| Critic comment over-trusted | Treat critic output as advisory |
| Too many artifacts stored | Retention and summarization policy |
| Important artifact discarded | Relevance and priority policy |
| Trace leaks private data | Privacy filtering and retention limits |
| Candidate accepted without evidence | Require evidence fields |
| Confidence misunderstood | Calibrated thresholds and uncertainty handling |
| Plan candidate sent to actuation | Require TPR / SCV / planning gates |
| Old artifact reused as fresh evidence | Timestamp and freshness checks |

---

## Implementation Notes

A practical implementation should define:

```text
artifact types
candidate HIF schemas
commitment gates
commitment status values
retention policy
privacy policy
confidence policy
evidence fields
trace logging
replay mechanism
human review mode
uncertain memory mode
expiration policy
```

Each artifact-producing component should specify:

```text
what artifacts it emits
which artifacts are only for debugging
which artifacts may become candidates
which gate validates them
how long they are retained
whether they can contain sensitive data
```

A useful design rule is:

```text
Artifacts may inform.

Only committed HIFs may drive memory, planning, or action.
```

---

## Transition to End-to-End, RL, and SOCIAL Tradeoffs

After distinguishing artifacts from commitments, we can compare this approach with end-to-end and RL systems, where the path from observation to action may be learned more directly.

The next page discusses the tradeoffs between classical modular pipelines, end-to-end learning, RL policies, foundation-model agents, and hybrid SOCIAL HML architectures.
