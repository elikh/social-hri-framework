---
title: Practical Integration Patterns
sidebar_position: 28
---

# Practical Integration Patterns

## Overview

This page summarizes practical patterns for integrating modern AI components into SOCIAL HRI systems.

It is intended as a practical entry point.

Readers who skip directly to this page should still understand the main claim of the Modern AI section:

```text
Modern AI does not make HML obsolete.

It makes semantic interfaces, responsibility boundaries,
commitment logic, and feedback loops more important.
```

The previous pages argued that foundation models, end-to-end policies, RL, VLMs, LLMs, video models, and agents can be extremely useful in HRI.

However, they should not silently own the whole loop.

They should participate through explicit patterns:

```text
model output
  → HIF or artifact
  → gate / validation
  → commitment
  → feedback
```

The goal is not to prevent powerful models from shaping robot behavior.

The goal is to ensure that when they do, the behavior remains:

```text
inspectable
governable
socially aware
bounded by policy
connected to memory
connected to feedback
safe for human-facing interaction
```

This page presents a compact catalog of integration patterns.

Each pattern shows a repeatable way to use modern AI without losing the SOCIAL principles.

---

## Why Practical Patterns Are Needed

Modern AI components can be used in many places:

```text
vision
language
memory
planning
critique
social reasoning
style generation
motion generation
actuation
feedback interpretation
```

Without structure, this can quickly become a hidden architecture made of prompts, model calls, and tool invocations.

For example:

```text
camera + transcript + memory
  → large model
  → suggested action
  → direct tool call
```

This may be impressive in a demo.

But in an HRI system, the important questions are:

```text
What was proposed?
What was accepted?
What was rejected?
What was stored?
What was acted upon?
Which model had authority?
Which gate committed the result?
What happens when the model is wrong?
How does feedback change the next decision?
```

The patterns below provide practical answers.

They show how modern AI can be inserted into the HML pipeline without bypassing HIFs, gates, memory governance, social validation, or actuation feedback.

---

## Pattern 1 — Candidate Generator

### Intent

Use a modern model to propose a candidate HIF, but require a gate or handler to decide whether that candidate becomes a semantic commitment.

This is the most basic modern-AI integration pattern.

```text
Model
  → CandidateHIF
  → Gate / Handler
  → AcceptedHIF / RejectedHIF / ClarificationNeededHIF
```

### Use When

Use this pattern when the model is good at generating useful interpretations, relations, plans, or motion proposals, but should not directly update memory or trigger action.

Examples:

```text
VLM proposes SceneRelationCandidateHIF
LLM proposes IntentCandidateHIF
agent proposes PlanCandidateHIF
RL policy proposes MotionCandidateHIF
video model proposes EventCandidateHIF
```

### Example

An LLM receives a transcript:

```text
Do you know Bob's whereabouts?
```

It proposes:

```json
{
  "type": "IntentCandidateHIF",
  "properties": {
    "intent": "where_is",
    "params": {
      "who": "Bob"
    },
    "confidence": 0.88,
    "source_text": "Do you know Bob's whereabouts?"
  },
  "processing_history": [
    "LLMIntentCandidateGenerator"
  ]
}
```

The architecture then checks:

```text
schema validity
allowed intent template
entity resolution
confidence threshold
policy
```

Only after acceptance does this become a committed `QueryHIF`.

### Key Rule

```text
The model proposes.

The architecture commits.
```

---

## Pattern 2 — Critic Pair

### Intent

Use one model or expert to generate a candidate and another model or expert to critique it before commitment.

```text
Generator Model
  → CandidateHIF
  → Critic Model
  → CritiqueHIF
  → Policy Gate
  → accept / modify / reject / escalate
```

### Use When

Use this pattern when the candidate may be plausible but socially risky, unsafe, privacy-sensitive, or under-specified.

Typical uses include:

```text
social validation
privacy risk review
task safety
style appropriateness
plan checking
instruction review
memory update review
```

### Example

A planner proposes:

```text
interrupt Bob and ask loudly for help
```

A critic reviews the context:

```text
Bob is in a formal meeting room.
Bob is currently speaking.
```

The critic outputs:

```json
{
  "type": "CritiqueHIF",
  "properties": {
    "risk": "interrupting_formal_meeting",
    "severity": "high",
    "suggested_modification": "wait_or_use_quiet_nonverbal_cue",
    "evidence": [
      "room_context=formal_meeting_room",
      "target_person_currently_speaking"
    ]
  },
  "processing_history": [
    "LLMSocialCritic"
  ]
}
```

The SCV or policy gate then decides:

```text
delay
modify
reject
ask permission
escalate
```

### Key Rule

```text
Critique is evidence for a gate.

It is not the final authority.
```

---

## Pattern 3 — Trace-to-HIF

### Intent

Convert model traces and intermediate artifacts into typed candidate HIFs before they can affect memory, planning, or action.

```text
Trace / Artifact
  → CandidateHIF
  → Semantic Commitment Gate
  → CommittedHIF
```

### Use When

Use this pattern when a model exposes useful intermediate artifacts such as:

```text
segmentation masks
object tracks
captions
attention maps
reasoning-like traces
tool traces
plan traces
critic notes
uncertainty scores
```

These artifacts help inspection, but they should not automatically become system commitments.

### Example

A video model produces:

```text
segmentation mask around bottle-like object
```

The system converts it to:

```json
{
  "type": "ObjectCandidateHIF",
  "properties": {
    "label": "bottle",
    "source_artifact": "segmentation_mask_142",
    "confidence": 0.76,
    "frame_id": "frame_8841"
  },
  "processing_history": [
    "VideoSegmentationModel"
  ]
}
```

A gate or Scene Context handler decides whether it becomes:

```text
ObjectHIF
```

### Key Rule

```text
A trace becomes useful to the architecture only when it is typed, bounded, and routed.
```

---

## Pattern 4 — Bounded Tool Agent

### Intent

Allow an agent to use tools only through controlled HML interfaces.

The agent may reason and request tool calls, but the available tools are bounded, logged, and return HIFs.

```text
Agent
  → allowed HML tool call
  → tool returns HIF
  → gate / handler
  → commitment if accepted
```

### Use When

Use this pattern when using agentic systems that can call tools, query memory, inspect context, or propose actions.

The key is to avoid unrestricted tool authority.

### Allowed Tools

Examples of allowed tools:

```text
query_hri_db()
propose_plan()
request_clarification()
rank_object_candidates()
summarize_memory()
check_social_risk()
generate_style_candidate()
estimate_person_availability()
```

These tools return HIFs or artifacts.

### Restricted Tools

Examples of tools that should be restricted or mediated:

```text
direct_actuate()
write_hri_db()
delete_memory()
change_policy()
override_safety()
modify_autonomy_level()
```

If such capabilities are exposed, they should usually be routed through gates and controlled handlers.

### Example

Instead of allowing:

```text
agent calls direct_actuate("approach Alice")
```

use:

```text
agent proposes PlanCandidateHIF
  → TPR
  → SCV
  → Social Opportunity TPR
  → SAS
  → Actuation Layer
```

### Key Rule

```text
The agent may use tools,
but the tools are HML interfaces,
not unrestricted power.
```

---

## Pattern 5 — Shadow Model

### Intent

Run a modern model in parallel without giving it direct authority.

The shadow model produces alternative candidates, critiques, or confidence signals for comparison and evaluation.

```text
Primary system
  → committed behavior

Shadow model
  → alternative candidate / critique / disagreement signal
```

### Use When

Use this pattern when introducing a new model gradually or evaluating whether a modern model should replace or augment an existing pipeline.

Typical uses:

```text
evaluate a new VLM before trusting it
compare classical SBR with open-vocabulary reasoning
detect disagreement
collect deployment data
calibrate confidence
support gradual rollout
monitor drift
```

### Example

The primary SBR path resolves:

```text
pointed object = bottle_3
```

The shadow VLM suggests:

```text
pointed object = bottle_5
```

The system emits:

```json
{
  "type": "DisagreementHIF",
  "properties": {
    "primary": "bottle_3",
    "shadow": "bottle_5",
    "source": "VLMShadowModel",
    "severity": "medium"
  },
  "processing_history": [
    "SBR",
    "ShadowVLM"
  ]
}
```

This can trigger:

```text
confidence reduction
human review
data logging
model evaluation
future retraining
```

### Key Rule

```text
A shadow model can increase awareness before it receives authority.
```

---

## Pattern 6 — Fallback Expert

### Intent

Use a foundation model only when a simpler expert, cache, parser, or heuristic fails or has low confidence.

```text
cheap expert
  → if fail / low confidence
  → foundation expert fallback
  → candidate HIF
  → validation
```

### Use When

Use this pattern when common cases can be handled quickly and transparently, but hard cases require flexible semantic interpretation.

Examples:

```text
regex parser → LLM fallback
YOLO detector → VLM fallback
heuristic depth projection → neural 2D-to-3D fallback
static SCV rules → LLM social critic fallback
template-based phrasing → LLM stylist fallback
```

### Example

A text interpreter handles common commands with templates.

```text
where is Bob?
```

is handled directly.

But:

```text
Do you happen to know Bob's whereabouts?
```

falls back to an LLM interpreter.

The LLM returns:

```text
IntentCandidateHIF: where_is(Bob)
```

The TSP then validates and optionally caches the mapping.

### Benefits

This pattern supports:

```text
fast common path
lower cost
lower latency
better transparency
modern AI for hard cases
cacheable semantic expansion
```

### Risk

If thresholds are too loose, the fallback may become the default path.

### Mitigation

Use:

```text
policy thresholds
fallback frequency monitoring
cache successful mappings
resource-aware selection
confidence calibration
```

### Key Rule

```text
Use the most powerful model when needed,
not merely because it is available.
```

---

## Pattern 7 — Resource-Aware Expert Selection

### Intent

Select the appropriate expert based on context, resources, uncertainty, stakes, and policy.

This is an EAG-style integration pattern for modern AI.

```text
context + resources + uncertainty + stakes
  → expert selection
```

### Use When

Use this pattern when several experts could solve the same problem but differ in:

```text
cost
latency
accuracy
explainability
resource use
risk profile
availability
```

### Example Policy

```text
low uncertainty + low stakes:
  heuristic expert

high uncertainty + enough GPU:
  VLM expert

high stakes:
  VLM + critic + human confirmation

low resources:
  cached result or degraded fallback

safety critical:
  conservative expert + SIAH gate
```

### Example

For object reference resolution:

```text
simple pointing geometry:
  SBR heuristic

ambiguous scene:
  VLM relation expert

high-stakes command:
  VLM + critic + human confirmation

low GPU:
  cached / heuristic fallback
```

### Key Rule

```text
The best expert is not always the most powerful expert.

It is the expert appropriate to the context, resources, and risk.
```

---

## Pattern 8 — Human Review / Escalation Gate

### Intent

Escalate model outputs to a human when risk, ambiguity, uncertainty, policy, or repeated disagreement requires it.

```text
CandidateHIF
  → high risk / low confidence / policy trigger
  → HumanReviewHIF
  → approve / reject / modify
```

### Use When

Use this pattern for:

```text
privacy-sensitive memory updates
ambiguous social interpretation
high-risk physical action
policy override
repeated model disagreement
medical, safety, or legal implications
identity-sensitive decisions
```

### Example

A model proposes:

```text
Alice is probably upset with Bob.
```

This could affect future interaction.

Instead of writing it to HRI_DB, the system emits:

```json
{
  "type": "HumanReviewHIF",
  "properties": {
    "candidate": "Alice may be upset with Bob",
    "reason": "sensitive_social_inference",
    "recommended_action": "do_not_store_without_review"
  },
  "processing_history": [
    "DSIE",
    "LLMSocialInference"
  ]
}
```

### Key Rule

```text
Human review is not failure.

It is an explicit autonomy boundary.
```

---

## Pattern 9 — Model Output Quarantine

### Intent

Prevent invalid, untyped, unbounded, or unsupported model outputs from entering memory, planning, or actuation.

```text
invalid / untyped model output
  → artifact only
  → no memory commit
  → no planning
  → no actuation
```

### Use When

Use this pattern when a model output:

```text
does not match schema
invents entities
has no evidence
contains unsupported actions
contains policy violations
is too ambiguous
cannot be represented as a HIF
includes sensitive inference without permission
```

### Example

An LLM outputs:

```text
Maybe Bob is probably near the kitchen because people usually go there.
```

The system should not create:

```text
FactHIF: Bob is in the kitchen
```

Instead, it can store:

```json
{
  "type": "ExplanationArtifactHIF",
  "properties": {
    "text": "Maybe Bob is probably near the kitchen because people usually go there.",
    "status": "artifact_only",
    "reason": "unsupported_inference_no_evidence"
  },
  "processing_history": [
    "LLM"
  ]
}
```

### Key Rule

```text
If it cannot be typed, validated, or bounded,
it remains an artifact.
```

---

## Pattern 10 — Schema-First Prompting

### Intent

Call modern models with explicit output schemas and authority limits, rather than open-ended instructions.

```text
HIF input
  → schema-bounded model call
  → structured output
  → validator
```

### Use When

Use this pattern whenever an LLM, VLM, or agent is expected to return something used by downstream HML layers.

### Example: Poor Call

```text
Here is everything the robot knows.
What should it do?
```

### Example: Better Call

```text
Given this InteractionRequestHIF and the following limited social context,
return a StyledSpeechCandidateHIF matching the provided schema.
Do not propose actions.
Do not write memory.
Do not include unsupported facts.
```

### Benefits

Schema-first prompting supports:

```text
validation
logging
replay
authority boundaries
reduced hallucination impact
cleaner HIF conversion
```

### Key Rule

```text
The prompt is not the architecture.

The schema is the contract.
```

---

## Pattern 11 — Risk-Based Fast Path

### Intent

Avoid over-validating low-risk behavior while still applying stronger checks to high-risk behavior.

```text
risk estimate
  → choose validation depth
```

### Use When

Use this pattern when latency matters and not every interaction requires the same governance depth.

### Example

```text
low risk:
  greeting style candidate
  → schema check
  → SAS

medium risk:
  object reference candidate
  → SBR + CEU

high risk:
  approach person in crowded space
  → TPR + SCV + Social Opportunity TPR + SIAH

critical:
  emergency stop
  → fast actuation path + feedback logging
```

### Key Rule

```text
Governance should be proportional to risk.
```

This avoids turning SOCIAL into unnecessary friction.

---

## Pattern 12 — Feedback-Grounded Model Improvement

### Intent

Use execution and human-response feedback to improve or calibrate modern AI components over time.

```text
ActionFeedbackHIF
  → analysis / DSIE / model evaluation
  → update policy, cache, memory, or training data
```

### Use When

Use this pattern when the robot receives feedback such as:

```text
human ignored the robot
human smiled
action failed
motion was blocked
speech was misunderstood
clarification was needed
gesture looked unnatural
```

### Example

The robot performs a greeting gesture.

Feedback indicates:

```text
human ignored gesture
```

The system may update:

```text
DSIE insight:
  this person responds better to speech than gesture

SAS future behavior:
  use short verbal greeting instead of gesture-only cue
```

### Key Rule

```text
Modern AI integration is incomplete without feedback.

A model output should not only be generated and executed;
its consequences should return to the architecture.
```

---

## Summary Table

| Pattern | Purpose | Typical Use |
|---|---|---|
| Candidate Generator | Model proposes, gate commits | VLM / LLM / RL outputs |
| Critic Pair | Independent review before commitment | SCV, safety, privacy, planning |
| Trace-to-HIF | Convert artifacts to candidates | Segmentation, captions, traces |
| Bounded Tool Agent | Restrict agent authority | Tool-use agents |
| Shadow Model | Compare without authority | Gradual deployment, auditing |
| Fallback Expert | Use modern model only when needed | LLM / VLM fallback |
| Resource-Aware Expert Selection | Choose expert by context and resources | EAG-style routing |
| Human Review Gate | Escalate high-risk cases | Safety, privacy, ambiguity |
| Model Output Quarantine | Prevent invalid outputs from committing | Schema failure, unsupported inference |
| Schema-First Prompting | Force structured outputs | LLM / VLM / agent calls |
| Risk-Based Fast Path | Match validation depth to risk | Low latency HRI loops |
| Feedback-Grounded Improvement | Learn from consequences | DSIE, SAS, HRI_DB, model evaluation |

---

## How These Patterns Relate to the Full HML Pipeline

These patterns are not separate from the HML architecture described earlier.

They are practical ways to insert modern AI into the same pipeline.

```text
Human / Scene / Robot Context
  → modern AI experts may generate candidates

Context Management and Reasoning
  → candidates become facts, queries, tasks, or memory only through gates

Social Planning and Behavioral Synthesis
  → models may propose timing, style, or critique, but output remains structured

Actuation Layer
  → learned policies may realize motion or expression, but feedback returns to context
```

This creates a disciplined hybrid architecture.

Modern AI contributes flexibility and semantic breadth.

HML contributes structure, governance, inspectability, and feedback.

---

## SOCIAL Principles Supported

### S — Separated Contexts

The patterns separate:

```text
candidate generation
critique
commitment
memory update
planning
style
execution
feedback
```

This prevents a model from silently controlling the entire HRI loop.

### O — Open Declarative

Outputs become HIFs, candidate HIFs, artifacts, critiques, or feedback records.

The system can inspect what each model produced and how it was used.

### C — Clear Cognition

The robot can explain:

```text
which model proposed an interpretation
which critic reviewed it
which gate accepted it
which action was executed
what feedback was observed
```

### I — Interpretable Gates

Every practical pattern includes an explicit transition from model output to system commitment.

### A — Adaptive Autonomy

The system can choose:

```text
cheap expert
foundation expert
critic pair
human review
shadow mode
fast path
fallback
```

depending on risk, confidence, resources, and policy.

### L — Layered Validation

Model output can pass through staged validation:

```text
proposal
  → critique
  → schema check
  → policy gate
  → social validation
  → actuation check
  → feedback
```

---

## Implementation Checklist

For every modern AI component, define:

```text
role
input HIFs
output HIF schema
authority level
validation gate
fallback path
confidence policy
privacy limits
logging policy
feedback path
human escalation trigger
resource budget
risk level
```

Before using a model output, ask:

```text
Is it typed?
Is it bounded?
Is it sourced?
Is it timestamped?
Is confidence represented?
Is there evidence?
Is there a gate?
Is there a fallback?
Is it allowed to affect memory?
Is it allowed to affect action?
Is it safe to retain?
Does it require human review?
```

If the answer is unclear, the output should remain an artifact or candidate.

---

## Design Heuristics

The following heuristics summarize the practical stance of this section.

```text
Prefer candidates over direct commitments.
Prefer HIFs over free text when output is used downstream.
Prefer gates over implicit trust.
Prefer bounded agents over unrestricted tool agents.
Prefer shadow mode before authority.
Prefer fallback over always-on expensive models.
Prefer risk-based validation over one-size-fits-all validation.
Prefer feedback loops over one-way generation.
```

These heuristics are not rigid rules.

They are design defaults for human-facing robots.

---

## Closing Note

Modern AI does not remove the need for architecture.

It increases the need for architectural discipline.

As AI components become more capable, HRI systems need stronger:

```text
semantic interfaces
responsibility boundaries
commitment logic
social validation
memory governance
feedback loops
```

The goal is not to prevent powerful models from shaping robot behavior.

The goal is to ensure that when they do, the behavior remains:

```text
inspectable
governable
socially aware
context-grounded
safe to execute
connected to feedback
```

This is the role of SOCIAL HRI and HML.

```text
The purpose of HML is not to replace modern AI.

It is to give modern AI a disciplined place inside inspectable human-robot interaction architectures.
```
