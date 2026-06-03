---
title: Foundation Models as HML Experts
sidebar_position: 25
---

# Foundation Models as HML Experts

## Intent

**Foundation Models as HML Experts** is an integration pattern for using LLMs, VLMs, video models, agents, learned policies, and multimodal models as bounded experts inside HML cells and layers.

The model does not own the whole loop.

The model owns a bounded semantic role.

```text
Foundation model
  → bounded HML expert
  → structured HIF output
  → validation gate
  → semantic commitment only if accepted
```

The central idea is:

```text
Foundation models should not be treated as an alternative to HML.

They should be treated as powerful experts inside HML patterns.
```

A foundation model becomes safer for HRI when it has:

```text
a role
a schema
an authority boundary
a validation path
a feedback path
```

---

## Problem

A foundation model can often do many things at once.

It may be able to:

```text
describe a scene
infer intent
answer a question
summarize memory
judge social appropriateness
generate speech
suggest motion
propose a plan
critique another model
```

This makes it tempting to give the model the whole HRI problem.

For example:

```text
Here is the camera frame, the transcript, the robot state, and memory.
What should the robot do?
```

This may work surprisingly well.

But in HRI, capability without boundary can become hidden authority.

A foundation model without a defined HML role becomes an implicit architecture.

It may silently decide:

```text
what is true
what should be remembered
what action is allowed
what social norm applies
how to speak
how to move
when to interrupt
whether to act
```

This collapses the architecture into a single model call.

The result may be capable, but it becomes harder to inspect, debug, constrain, validate, or repair.

HML offers a different approach.

Use powerful models, but call them for bounded semantic transformations.

---

## Principle

The principle is:

```text
Use foundation models as experts, not as hidden architectures.
```

A model should usually be called for a limited transformation.

For example:

```text
image region → object relation candidate
utterance → intent candidate
context subset → social risk critique
task candidate → prerequisite hypothesis
interaction request → polite wording candidate
motion goal → social navigation candidate
feedback trace → summarized insight candidate
```

The result should usually be a structured HIF or candidate HIF.

For example:

```text
CandidateHIF
CritiqueHIF
ValidationHIF
StyledBehaviorCandidateHIF
PlanCandidateHIF
ArtifactSummaryHIF
SceneRelationCandidateHIF
IntentCandidateHIF
```

The result should not be:

```text
direct robot command
silent memory update
unlogged assumption
unguarded action
unbounded plan execution
```

The model expands semantic capability.

The architecture bounds commitment.

---

## Expert Roles

Foundation models can play many bounded expert roles inside HML.

| Model Role | What it does | Typical Output |
|---|---|---|
| Perception expert | Detects objects, relations, affordances, or open-vocabulary scene elements | SceneCandidateHIF |
| Video expert | Segments, tracks, summarizes activity, or detects temporal events | VideoArtifactHIF / EventCandidateHIF |
| Language interpreter | Maps utterances to known templates or intent candidates | IntentCandidateHIF |
| Memory summarizer | Compresses interaction history or long-term context | MemorySummaryHIF |
| Social critic | Reviews proposed action for social risk or norm violation | CritiqueHIF |
| Plan generator | Proposes an action sequence or task decomposition | PlanCandidateHIF |
| Style proposer | Suggests wording, tone, gesture, gaze, or motion style | StyledBehaviorCandidateHIF |
| Motion policy | Generates a trajectory or motion primitive candidate | MotionCandidateHIF |
| Fallback expert | Handles cases simpler experts or caches miss | CandidateHIF |
| Shadow model | Runs in parallel for comparison, auditing, or confidence estimation | AlternativeCandidateHIF |

The same foundation model may play different roles in different places.

However, each call should still have a bounded purpose.

---

## Integration Across HML Patterns

Foundation models can be inserted into many HML patterns without replacing the pattern.

The pattern defines the structure.

The model provides one expert capability inside that structure.

---

### Foundation Models inside SME

In an SME, multiple experts operate on a shared input.

A modern Video Analyzer SME may include:

```text
λ object detector
λ pose estimator
λ VLM open-vocabulary relation expert
λ facial expression classifier
λ gaze estimator
λ scene captioning expert
```

A VLM may propose:

```text
The person may be pointing toward a bottle.
```

But the output should be structured as a candidate.

```text
SceneRelationCandidateHIF
```

It should not directly update memory or trigger an action.

The SME structure allows classical experts, neural experts, VLMs, and heuristic experts to coexist.

---

### Foundation Models inside TSC / TSP

The Tiered Semantic Cache / Proxy pattern can use an LLM as a fallback semantic interpreter.

For common cases:

```text
where is Bob?
```

a parser or cache may return the answer quickly.

For less direct phrasing:

```text
Do you happen to know Bob's whereabouts?
```

an LLM fallback can map the utterance into a known template.

```json
{
  "type": "IntentCandidateHIF",
  "properties": {
    "intent": "where_is",
    "params": {
      "who": "Bob"
    },
    "source_text": "Do you happen to know Bob's whereabouts?"
  }
}
```

The LLM expands language coverage.

It does not expand robot authority.

The output still must match a known schema or allowed intent template.

---

### Foundation Models inside EAG

The Elastic Attention Governor can use foundation models as high-fidelity experts when resources, uncertainty, or stakes justify them.

For example:

```text
high GPU available:
  use VLM / high-fidelity neural model

low resources:
  use heuristic / cached result

high uncertainty:
  escalate to foundation model

low stakes:
  use cheap expert

high stakes:
  require model + critic + gate
```

This prevents expensive or opaque models from becoming the default path for every case.

Foundation models become available experts selected according to policy, resources, and confidence.

---

### Foundation Models inside HRI_DB Handlers

Foundation models can assist HRI_DB handlers.

They may help with:

```text
memory summarization
entity matching
inconsistency explanation
query paraphrase
social insight extraction
event summarization
```

But they should not write directly to HRI_DB.

A safer flow is:

```text
LLM / VLM
  → MemoryUpdateCandidateHIF
  → CEU / HRI_DB Handler
  → accepted, modified, rejected, or clarification needed
```

For example:

```text
LLM:
  proposes that Alice prefers short answers.

CEU:
  checks source, confidence, consistency, and permission.

HRI_DB:
  updates only if accepted.
```

The model can help produce memory candidates.

The memory handler governs commitment.

---

### Foundation Models inside SCV

A foundation model can serve as a social critic.

It may evaluate questions such as:

```text
Is this interruption socially appropriate?
Is this phrasing too direct?
Could this action reveal private information?
Is the robot approaching too closely?
Should the action be delayed?
```

The output should be advisory.

```text
CritiqueHIF
SocialRiskCandidateHIF
SuggestedModificationHIF
```

For example:

```json
{
  "type": "CritiqueHIF",
  "properties": {
    "risk": "interrupting_formal_meeting",
    "severity": "medium",
    "suggested_modification": "wait_or_use_quiet_nonverbal_cue",
    "evidence": [
      "room_context=formal_meeting_room",
      "target_person_currently_speaking"
    ]
  }
}
```

SCV or another policy gate decides whether to accept, modify, delay, or reject.

The critic model does not own the final decision.

---

### Foundation Models inside SAS

A language model can help with social style.

For example, SAS may call an LLM linguistic stylist to transform:

```text
I need your help.
```

into:

```text
Alice, could you help me for a moment?
```

But SAS should request a structured output.

```json
{
  "type": "StyledSpeechCandidateHIF",
  "properties": {
    "text": "Alice, could you help me for a moment?",
    "tone": "polite",
    "volume": "medium_low",
    "tempo": "calm",
    "formality": "neutral"
  }
}
```

This allows the architecture to check and combine the speech style with gesture, gaze, motion, and timing.

A free-text answer alone is not enough for multimodal HRI.

---

### Foundation Models inside Actuation

Modern models can also participate in actuation.

For example:

```text
learned motion policy
animation generator
emotion-aware TTS
gesture synthesis model
visual expression generator
```

But the Actuation Layer still handles:

```text
capability binding
state-based realization
sync / async execution
policy routing
feedback monitoring
fallback selection
```

A learned policy may propose a trajectory.

The Actuation Layer checks whether the trajectory is compatible with current state, safety, embodiment, and social constraints.

```text
StyledMotionHIF
  → learned motion policy
  → MotionCandidateHIF
  → state / capability / safety checks
  → execution adapter
```

This allows learned policies to improve behavior without bypassing the final execution governance.

---

## Bounded Inputs and Outputs

A foundation model should be called with the smallest useful context and a clear output contract.

Avoid calls like:

```text
Here is everything.
What should the robot do?
```

Prefer calls like:

```text
Given this InteractionRequestHIF and this limited social context,
produce a StyledSpeechCandidateHIF matching this schema.
```

or:

```text
Given these object candidates and this pointing vector,
rank likely referenced objects.
Do not invent objects.
Return CandidateObjectReferenceHIF only.
```

A good foundation-model expert call should define:

```text
role
input HIFs
allowed context
output schema
confidence requirements
evidence fields
authority boundary
forbidden actions
validation gate
fallback path
```

The prompt is not the architecture.

The HIF contract is the architecture.

---

## Example — VLM in Video Analyzer SME

A VLM can be useful inside a Video Analyzer SME.

Input:

```text
FrameHIF
current object tracks
person skeleton
scene context
```

Bounded task:

```text
Identify candidate visual relations involving the person and known objects.
Do not invent object IDs.
Return relation candidates only.
```

Output:

```json
{
  "type": "SceneRelationCandidateHIF",
  "properties": {
    "relation": "person_pointing_to_object",
    "person_id": "person_2",
    "object_candidate": "bottle_3",
    "confidence": 0.72,
    "evidence": [
      "arm direction",
      "object proximity",
      "known object track"
    ]
  },
  "processing_history": [
    "VideoAnalyzerSME",
    "VLMRelationExpert"
  ]
}
```

Downstream:

```text
SBR validates geometry.
CEU checks consistency.
The candidate becomes committed only if accepted.
```

---

## Example — LLM in Text Interpreter TSP

Input utterance:

```text
Do you know Bob's whereabouts?
```

The TSP path may be:

```text
regex parser:
  miss

semantic cache:
  miss

LLM fallback:
  maps utterance to known query template
```

Output:

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

Validation:

```text
schema check
allowed template check
entity resolution
QSH
```

The LLM improves coverage.

It does not directly query memory or speak to the user.

---

## Example — LLM Critic in SCV

Input:

```text
ProposedActionHIF:
  interrupt Bob and speak loudly

Context:
  Bob is in a formal meeting room.
  Bob is currently speaking.
```

Bounded critic role:

```text
Identify social risks and suggest modifications.
Do not approve or reject the action directly.
```

Output:

```json
{
  "type": "CritiqueHIF",
  "properties": {
    "social_risk": "high",
    "risk_reason": "interrupting a person who is speaking in a formal meeting",
    "suggested_modification": "wait for availability or use a quiet nonverbal cue",
    "confidence": 0.86
  },
  "processing_history": [
    "SCV",
    "LLMSocialCritic"
  ]
}
```

SCV decides how to use the critique.

The critic is not the final authority.

---

## Example — Learned Policy in Actuation

Input:

```text
StyledMotionHIF:
  approach Bob politely
  stop at 1.5m
  avoid blocking path
  move slowly near person
```

A learned motion policy may propose a trajectory.

```text
StyledMotionHIF
  → learned motion policy
  → MotionCandidateHIF
```

Output:

```json
{
  "type": "MotionCandidateHIF",
  "properties": {
    "target": "bob",
    "trajectory_id": "traj_47",
    "respects_distance": true,
    "min_distance_to_person": "1.6m",
    "estimated_duration": "4.2s",
    "confidence": 0.79
  },
  "processing_history": [
    "ActuationLayer",
    "LearnedMotionPolicy"
  ]
}
```

The Actuation Layer then checks:

```text
capability
robot state
safety
social constraints
sync / async schedule
feedback requirements
```

Only after those checks does the motion become an execution command.

---

## Why This Pattern Matters

Foundation models are most useful in HRI when they expand semantic capability without collapsing architectural accountability.

They can make the robot more flexible, more natural, and more robust to open-world inputs.

But without HML boundaries, they can also become hidden decision-makers.

The purpose of this pattern is to keep the model powerful but bounded.

```text
The model is powerful,
but the role is bounded.
```

This allows modern AI to participate in HRI without erasing the transparency, modularity, and governance that HRI systems require.

---

## SOCIAL Principles Supported

### S — Separated Contexts

Foundation models are assigned separated roles.

A language model may interpret speech.

A VLM may propose scene relations.

A critic may evaluate social risk.

A learned policy may propose motion.

These roles should not collapse into one unbounded authority.

### O — Open Declarative

Model outputs should be expressed as HIFs or explicit artifacts.

The system should expose what the model proposed, what evidence it used, and whether it was accepted.

### C — Clear Cognition

The architecture can explain what each model contributed.

For example:

```text
The LLM mapped the utterance to a where_is query.
The VLM proposed a pointing relation.
The critic warned that interruption may be inappropriate.
The learned policy proposed a trajectory.
```

### I — Interpretable Gates

Model outputs pass through schema checks, policy gates, consistency checks, social validators, and capability gates.

### A — Adaptive Autonomy

The architecture can decide when to use expensive foundation models, when to use cheaper experts, when to escalate to a critic, and when to ask a human.

### L — Layered Validation

Foundation model outputs do not go directly to actuation or memory.

They pass through layered validation before becoming commitments.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Powerful expert vs. bounded role | Limiting authority may reduce some flexibility but improves control |
| Schema discipline vs. natural output | Structured output supports validation but may constrain model expression |
| Multiple model calls vs. latency | Using several bounded experts can slow the loop |
| Rich context vs. privacy | More context may improve output but increase privacy risk |
| LLM fallback vs. cost | Expensive models should be called when needed, not always |
| Critic model vs. false confidence | Critiques are useful but must remain advisory |
| Open-world capability vs. allowed templates | The model may understand more than the robot is allowed to do |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Model ignores schema | Validator, retry, fallback expert |
| Model invents entities | Require references to known IDs or mark as candidate only |
| Model writes memory directly | No direct write permission |
| Model directly triggers actuation | No direct actuation permission |
| Prompt grows into hidden architecture | Move logic into HIFs, gates, and handlers |
| Critic overrules incorrectly | Treat critique as advisory and validate through gates |
| Overuse of foundation models | Use EAG, TSC, cache, and cheaper experts |
| Sensitive context leaked | Context minimization and privacy gates |
| Model confidence is unreliable | Calibrate with external evidence and validation |
| Model output is plausible but wrong | Require provenance, evidence, and downstream checks |

---

## Implementation Notes

For each foundation-model expert, define:

```text
role
input HIF types
allowed context scope
output schema
authority level
validation gate
fallback behavior
logging requirements
cost / latency budget
privacy limits
```

Example:

```text
LLM Social Critic

input:
  ProposedActionHIF
  selected Human Context
  selected Scene Context
  relevant HRI_DB entries

output:
  CritiqueHIF

authority:
  advise only

validation:
  SCV policy gate

forbidden:
  no memory writes
  no direct actuation
  no new action types
```

A useful implementation rule is:

```text
A foundation model should know what role it is playing.

The rest of the architecture should not have to guess.
```

---

## Transition to Intermediate Artifacts and Semantic Commitments

After defining how foundation models can serve as bounded experts, the next page examines a deeper distinction.

Modern models can expose many intermediate artifacts:

```text
segmentation masks
tracks
captions
plans
reasoning traces
critic notes
```

But not every visible artifact should become a fact, memory update, task, or action.

The next page explains the difference between intermediate artifacts and semantic commitments.
