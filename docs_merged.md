# S.O.C.I.A.L. HML Framework — NotebookLM Source

Source site:
https://elikh.github.io/social-hri-framework/

This file was generated from the documentation Markdown files and is intended as a consolidated source for NotebookLM.
---

# About S.O.C.I.A.L. HML

Source file: `about.md`

# About S.O.C.I.A.L. HML

## What This Is

**S.O.C.I.A.L. HML** is an independent framework and pattern language for designing inspectable, socially governed, modern-AI-compatible Human-Robot Interaction architectures.

It combines:

```text
S.O.C.I.A.L. principles
HML — HRI Modeling Language
HRI design patterns
Layered context-to-action architecture
Modern AI integration patterns
```

The goal is to help researchers, engineers, and system architects describe how a robot moves from raw interaction evidence to socially validated, styled, and embodied behavior.

In simplified form:

```text
Human, Scene, and Robot Context
  → Context Management and Reasoning
  → Social Planning and Behavioral Synthesis
  → Natural Actuation and Embodiment Binding
  → feedback back into context
```

The framework is intended for systems that must be more than capable.

They must also be:

```text
inspectable
debuggable
correctable
socially aware
policy-governed
memory-aware
compatible with modern AI
```

---

## Origin and Motivation

This framework was written from the perspective of one year after the completion of the Israeli HRI consortium, a three-year applied R&D effort that ran during 2022–2025.

That period was unusually consequential for AI.

During those years, the field moved rapidly from architectures built as explicit pipelines with AI components inside them toward systems where more and more logic, code, interpretation, and behavior appear to dissolve into model weights.

This site is **not** a documentation of the consortium.

It is also **not** an official output of the consortium.

Rather, it is an independent synthesis of architectural lessons:

```text
what worked well
what was difficult to scale
what became clearer only after reflection
what should be preserved
what should be redesigned
how modern AI changes the architectural tradeoffs
```

The practical experience of building HRI architectures made one point especially clear:

```text
Human-facing robots need both capability and governance.
```

Modern models can provide impressive capability.

But HRI systems still need explicit mechanisms for context separation, memory governance, social validation, human correction, actuation control, and feedback.

---

## Why Now

The rise of foundation models, VLMs, LLMs, agents, RL policies, and end-to-end robotics systems creates a real architectural tension.

On one side, more monolithic learned systems can be powerful, adaptive, and fluent.

On the other side, HRI requires properties that do not automatically emerge from capability alone:

```text
clear responsibility boundaries
inspectable intermediate state
bounded authority
semantic memory governance
social and safety validation
human override
explainable feedback loops
```

S.O.C.I.A.L. HML emerged as an attempt to reason about this tradeoff.

The framework does not reject modern AI.

It also does not advocate a simple return to rigid classical pipelines.

Instead, it proposes a hybrid architectural discipline:

```text
use modern AI where it is strong
connect it through explicit semantic interfaces
bound its authority through gates and policies
make commitments inspectable
preserve feedback and correction paths
```

A central position of this work is:

```text
Modern AI does not make HML obsolete.

It makes semantic interfaces, responsibility boundaries,
and layered validation more important.
```

---

## Main Contributions

This documentation presents four main contributions.

### 1. S.O.C.I.A.L. Principles

The S.O.C.I.A.L. principles define architectural properties that remain important in the foundation-model era:

```text
S — Separated Contexts
O — Open Declarative representations
C — Clear Cognition
I — Interpretable Gates
A — Adaptive Autonomy
L — Layered Validation
```

These principles are not only values.

They are translated throughout the documentation into concrete mechanisms such as HIFs, semantic cells, policies, gates, memory structures, queues, and feedback loops.

### 2. HML — HRI Modeling Language

HML is a lightweight modeling language for representing semantic flow in HRI systems.

It is built around:

```text
HIFs — HRI Interaction Frames
semantic cells
λ experts and operators
policies
gates
memory
queues
feedback
```

HML does not replace ROS, behavior trees, state machines, or agent orchestration frameworks.

It operates at a higher architectural level: the level of semantic interaction flow.

### 3. HRI Design Patterns

The documentation presents a catalog of reusable design patterns for HRI architectures.

These patterns cover:

```text
human context
scene context
robot context
context management and reasoning
semantic memory
task readiness
social validation
social planning
behavioral styling
actuation
feedback
```

The purpose of the pattern catalog is to provide reusable architectural solutions rather than one fixed implementation.

### 4. Modern AI Integration

The documentation explicitly addresses how to integrate modern AI into inspectable HRI systems.

It covers:

```text
LLMs
VLMs
multimodal models
agents
RL policies
end-to-end models
video models
learned motion policies
```

The key idea is that modern AI components can serve as bounded experts, critics, candidate generators, fallbacks, shadow models, and learned executors inside HML patterns.

They should not silently own the whole HRI loop.

---

## Author

This framework was created by **Dr. Eliahu Khalastchi**.

Eliahu is a computer scientist and HRI / robotics researcher with experience in anomaly detection, autonomous systems, AI for robotics, and human-robot interaction architecture.

He led the architectural work on the HRI toolkit within the Israeli HRI consortium.

This site reflects an independent synthesis of architectural lessons and research thinking developed after that work.

---

## Relationship to the Israeli HRI Consortium

The Israeli HRI consortium provided an important practical context for the experience behind this framework.

However, this documentation is not a consortium deliverable, official report, or implementation manual.

It does not attempt to document one specific system.

It generalizes from architectural lessons learned while working on HRI systems and asks:

```text
Which architectural ideas remain useful?
Which patterns can be reused?
Which assumptions need to change in the foundation-model era?
How can modern AI be integrated without losing transparency and governance?
```

This distinction is important.

The framework is presented as an independent research-oriented pattern language, not as a description of a particular consortium implementation.

---

## Academic Paper

This documentation is part of an ongoing research effort.

A condensed academic version of the framework is being prepared for submission, with a public preprint planned after the documentation site is publicly available.

The paper will focus on the conceptual contribution of S.O.C.I.A.L. HML as a pattern language for inspectable HRI architectures in the foundation-model era.

The documentation site serves as the extended, visual, and practical companion to that academic work.

---

## How to Read This Documentation

A suggested reading path is:

```text
1. Start with the S.O.C.I.A.L. principles.
2. Learn the basic HML concepts: HIFs, λ experts, semantic cells, memory, and gates.
3. Browse the design patterns by layer.
4. Review the Modern AI section to understand how LLMs, VLMs, agents, RL, and end-to-end models fit into the architecture.
5. Use the pattern catalog as a reference for designing or analyzing HRI systems.
```

For a fast conceptual entry point, start with:

```text
HML Overview
Modern AI Integration Overview
Practical Integration Patterns
```


---

# Natural Actuation and Embodiment Binding

Source file: `design-patterns/actuation-layer.md`

# Natural Actuation and Embodiment Binding

## Overview

The **Actuation Layer** is the final binding point between HML-level behavior and robot-specific execution.

Previous layers decide:

```text
what is known
what is ready
what is socially acceptable
when to interact
how the interaction should be styled
```

The Actuation Layer realizes those behavior-ready HIFs on a specific robot embodiment.

In short:

```text
Behavior-ready HIF
  → embodiment binding
  → robot-specific execution
  → execution feedback HIF
```

This layer is not only an integration layer.

It is the place where semantic behavior becomes embodied performance.

The goal is **natural actuation**: preserving the social meaning of a behavior while adapting it to the robot's actual capabilities, body, APIs, timing constraints, current state, and feedback channels.

---

## What This Layer Is Not

The Actuation Layer is not the planner.

It does not decide:

```text
what the task means
whether the task is allowed
whether the task is socially appropriate
when the social opportunity is open
how the behavior should be socially styled
```

Those decisions belong to previous layers.

The Actuation Layer receives behavior descriptions that are already structured as HIFs.

It then asks:

```text
How can this behavior be realized on this robot?
Which platform capability should execute it?
Which codebook or binding expert should be used?
Which primitive sequence should be produced?
Should execution be synchronous or asynchronous?
How does the robot's current state affect realization?
Should the action be routed through Robot Context or directly to an execution adapter?
How should execution feedback be reported?
```

---

## Inputs

The layer may receive several kinds of HIFs.

```text
ReactiveActionHIF
PrimitiveActionHIF
StyledBehaviorHIF
StyledSpeechHIF
StyledMotionHIF
StyledGestureHIF
StyledGazeHIF
SocialNavigationHIF
EmergencyActionHIF
```

Some inputs come directly from Context Management.

For example:

```text
EmergencyStopHIF
AutonomyReductionHIF
ReactiveActionHIF
```

Other inputs come from Social Planning and Behavioral Synthesis.

For example:

```text
StyledBehaviorHIF
StyledSpeechHIF
StyledMotionHIF
SocialNavigationHIF
```

The Actuation Layer must support both.

Reactive actions may require low latency.

Socially styled actions may require natural multimodal execution.

Both should still remain semantically controlled, traceable, and feedback-aware.

---

## Layer Structure

The following diagram shows one possible structure for the Actuation Layer.

<div align="center">

<img
  src="/social-hri-framework/img/hml/actuation-layer.svg"
  alt="Natural Actuation and Embodiment Binding layer converting behavior-ready HIFs into platform-specific execution through reactive action management, sync and async execution control, state-based realization, robot context APIs, execution adapters, and feedback"
  width="100%"
/>

</div>

A simplified flow is:

```text
Behavior-ready HIF
  → Reactive Action Manager SME
  → Sync / Async Execution Controller
  → State-Based Realization EAG
  → Policy Gate
      → Robot Context API
      → or Execution Adapter HE
  → platform-specific actuator commands
  → execution feedback
  → back to Reactive Action Manager
```

The diagram emphasizes that actuation is not a single API call.

It is a final semantic control layer that binds a requested behavior to a specific embodiment, current robot state, execution policy, and platform interface.

The **Reactive Action Manager SME** may use binding experts and codebook experts to adapt the requested action to the target platform and decompose it into executable primitives.

The **Sync / Async Execution Controller** manages whether actions must be performed sequentially or can be executed in parallel.

The **State-Based Realization EAG** performs a late, resource-aware and state-aware adjustment before execution.

Finally, the **Policy Gate** decides whether the action should be routed through Robot Context as an internal robot capability API, or directly through an Execution Adapter HE that translates the action into platform-specific commands.

The exact structure may vary by robot platform.

The important architectural point is that actuation remains semantic, traceable, state-aware, and feedback-aware.

---

## Reactive Action Manager SME

The **Reactive Action Manager SME** is the entry point of the Actuation Layer.

It receives behavior-ready HIFs and decides how they should be prepared for execution on the current platform.

It may handle both:

```text
reactive / urgent actions
```

and:

```text
primitive actions decomposed from interactive or proactive behaviors
```

For example:

```text
stop
avoid obstacle
turn toward speaker
cancel unsafe motion
pause speech
lower volume
perform greeting gesture
execute styled speech
execute social navigation step
```

The manager is modeled as an SME because a single requested action may require several experts before it can be executed.

Possible experts include:

```text
λ capability binding expert
λ HRI codebook expert
λ speech binding expert
λ motion binding expert
λ gesture binding expert
λ platform compatibility expert
λ fallback selection expert
```

For example:

```text
wave_hello
  → codebook expert
  → embodiment-specific primitive sequence

say politely
  → speech binding expert
  → TTS parameters

approach socially
  → motion binding expert
  → social navigation parameters
```

This keeps the actuation entry point modular and platform-aware.

Reactive actions may bypass Social Planning when latency matters, but they should not bypass semantic actuation control.

```text
Reactive actions may bypass social planning,
but they should not bypass semantic actuation control.
```

The manager also receives execution feedback.

This allows it to update local execution state, retry, select fallback behaviors, cancel pending primitives, or emit feedback HIFs to previous layers.

---

## Capability Binding

Capability binding is primarily handled inside the **Reactive Action Manager SME**.

Given a behavior-ready HIF, the manager may call different binding experts or codebook experts in order to adapt the requested action to the target robot platform.

For example:

```text
StyledSpeechHIF
  → speech binding expert
  → select TTS engine
  → bind language, voice, volume, tempo, and emotional tone
```

or:

```text
StyledGestureHIF
  → codebook binding expert
  → select embodiment-specific gesture realization
  → decompose into primitive actions
```

or:

```text
StyledMotionHIF
  → motion binding expert
  → select navigation or motion controller
  → bind speed, distance, path constraints, and safety margins
```

Possible capabilities include:

```text
TTS engine
emotion-aware speech library
navigation stack
motion controller
gesture controller
animation player
screen expression library
LED / sound cue library
ROS action server
ROS topic publisher
ROS service client
vendor SDK
custom behavior API
```

Capability binding is therefore not merely technical dispatch.

It is an SME-level process that may use several experts to preserve the relationship between the social style selected by the previous layer and the platform-specific mechanism that can realize it.

---

## HRI Codebook and Embodiment Mapping

The HRI Codebook can be implemented as one of the experts used by the Reactive Action Manager SME.

When the incoming HIF refers to a semantic gesture, expression, or social action, the manager can call the codebook expert to translate that semantic name into an embodiment-specific primitive sequence.

The **HRI Codebook** maps semantic social actions to embodiment-specific primitive sequences.

It separates:

```text
social meaning
```

from:

```text
embodied performance
```

For example, the semantic action:

```text
wave_hello
```

may be realized differently on different robots.

### Humanoid Example

```json
{
  "gesture": "wave_hello",
  "embodiment": "humanoid",
  "sequence": [
    {"action": "raise_right_arm"},
    {"action": "wave_wrist", "repetitions": 2},
    {"action": "look_at_person"}
  ]
}
```

### Quadruped Example

```json
{
  "gesture": "wave_hello",
  "embodiment": "quadruped",
  "sequence": [
    {"action": "orient_body_to_person"},
    {"action": "small_bow"},
    {"action": "play_friendly_sound"}
  ]
}
```

### Desktop Robot Example

```json
{
  "gesture": "wave_hello",
  "embodiment": "desktop_robot",
  "sequence": [
    {"action": "screen_eye_smile"},
    {"action": "small_head_tilt"},
    {"action": "friendly_led_animation"}
  ]
}
```

The same social behavior name can therefore remain stable across systems, while its embodiment-specific realization changes.

The codebook may contain entries such as:

```text
wave_hello
show_happiness
show_uncertainty
ask_attention
apologize
acknowledge
invite_follow
show_thinking
warn_gently
```

Each entry may define:

```text
supported embodiment
primitive sequence
timing
parameters
fallback behavior
preconditions
expected feedback
```

The codebook also allows social behaviors to be authored by embodiment experts, animators, or robot developers, while remaining accessible through semantic HIF names.

This is especially important in HRI because natural-looking expression often requires design skill, not only engineering correctness.

---

## Sync / Async Execution Controller

The **Sync / Async Execution Controller** decides how prepared primitive actions should be scheduled.

Some actions must be performed in a strict sequence.

Other actions can run in parallel in order to produce more natural behavior.

The controller therefore manages two execution structures:

```text
Pending queue:
  actions that must wait for ordering, completion, or synchronization

Async buffer:
  actions that may run concurrently with other channels
```

The controller continuously releases the actions that should be executed now, according to policy, timing constraints, dependencies, and feedback.

### Synchronous Execution

Some behaviors require strict order.

For example:

```text
raise arm
then wave
then lower arm
```

or:

```text
navigate to person
then stop
then speak
```

In these cases, the system must wait for completion events before starting the next primitive.

This requires:

```text
sequence control
completion feedback
timeouts
failure handling
cancel / retry logic
```

### Asynchronous Execution

Other behaviors are more natural when multiple channels run together.

For example:

```text
turn toward person while speaking
move slowly while explaining
gesture while saying hello
look at person before and during speech
```

In HRI, it is often more natural to:

```text
speak + move
```

than to:

```text
move
then speak
then move
```

However, asynchronous execution still requires coordination.

For example:

```text
speech should start after gaze lock
gesture should peak near a key word
motion should slow before entering personal space
TTS should not overlap an emergency warning
a gesture should not conflict with navigation stability
```

The controller therefore needs a synchronization model that can express:

```text
start together
start after
wait until
interrupt
cancel
pause
resume
sync point
timeout
```

This controller is the final synchronization mechanism that turns multimodal HIFs into coordinated embodied behavior.

---

## State-Based Realization EAG

The **State-Based Realization EAG** performs the final state-aware adaptation before execution.

It is modeled as an EAG because the realization of the same semantic action may change according to robot state, social state, resource state, and execution policy.

```text
same semantic action
  → different realization depending on state
```

The EAG may use:

```text
Robot Context:
  battery
  CPU / memory
  actuator availability
  current posture
  autonomy level
  sensor health
  resource constraints

HRI_DB:
  social mood
  affective state computed upstream
  person-specific preferences
  interaction history
  social context
  recent failures or repeated requests
```

For example:

```text
wave_hello + normal state:
  normal wave

wave_hello + low battery:
  smaller gesture or screen cue

wave_hello + happy social mood:
  larger, more energetic gesture

wave_hello + formal context:
  minimal gesture
```

Or:

```text
ask_help + repeated failure:
  more apologetic phrasing
  reduced motion intensity
  lower interruption level
```

This resembles a state-pattern realization, but with explicit HML semantics.

The state does not have to originate in the Actuation Layer.

It may be computed by Robot Context, SIAH, DSIE, Social Planning, or other upstream layers.

However, the Actuation Layer may also maintain execution-local state, such as:

```text
gesture intensity slowly decays
frustration-like state cools down over time
energy level is reduced after repeated attempts
recent failure affects fallback choice
```

The output of the EAG is a nearly final platform-specific behavior representation.

It is still semantic, but now it is tuned to the current robot and social state.

---

## Policy Gate: Robot Context API or Execution Adapter

After state-based realization, a policy gate decides how the action should be executed.

Some actions should be routed through **Robot Context**.

In this role, Robot Context acts as an internal API for robot capabilities.

For example:

```text
update autonomy state
trigger internal robot behavior
request current actuator capability
execute a capability exposed by the robot context layer
```

Other actions may go directly to the **Execution Adapter HE**, which translates the behavior into a platform-specific command.

For example:

```text
publish ROS topic
call ROS action
call SDK function
trigger TTS
run animation
send navigation goal
```

This split allows the system to distinguish between actions that should be mediated by the robot's maintained self-model and actions that can be sent directly to a concrete actuator interface.

In both cases, the output should be behavior-ready and platform-specific.

```text
State-Based Realization EAG
  → Policy Gate
      → Robot Context API
      → Execution Adapter HE
  → platform-specific actuator command
```

---

## Execution Adapter HE

The **Execution Adapter HE** converts state-tuned HIF-level actions into platform-specific actuator commands.

It is modeled as an HE because it is the final heuristic / execution bridge between semantic behavior and low-level platform interfaces.

Possible targets include:

```text
ROS topic publish
ROS action call
ROS service call
SDK function call
TTS API call
animation player command
navigation goal
motion primitive
controller-specific message
```

For example:

```text
StyledSpeechHIF
  → TTS API request

StyledMotionHIF
  → navigation action

CodebookGestureHIF
  → animation player command

ReactiveStopHIF
  → emergency stop controller
```

In a ROS-based system, the customer or platform developer may expose sensing and action interfaces as ROS topics, actions, or services.

The Actuation Layer can then bind HIFs to those interfaces.

But the design pattern is not ROS-specific.

The same layer can target:

```text
ROS
robot vendor SDKs
cloud robotics APIs
local controller APIs
animation systems
virtual agent renderers
```

The abstraction is:

```text
HIF-level behavior
  → platform-specific execution
```

The output of the Execution Adapter HE is no longer only a semantic behavior description.

It is a behavior-ready, platform-specific command.

```text
StyledBehaviorHIF
  → state-based realization
  → execution adapter
  → platform-specific actuator command
```

---

## Feedback Loop

Actuation should not be a one-way path.

Execution feedback returns first to the **Reactive Action Manager SME**.

The manager can then decide whether to:

```text
mark the action as complete
retry
select a fallback
cancel pending primitives
update execution-local state
emit a feedback HIF to previous layers
```

From there, feedback may also flow back into Robot Context, Context Management, HRI_DB, DSIE, SIAH, TPR, or Social Planning.

The layer may emit:

```text
ActionStartedHIF
ActionProgressHIF
ActionSucceededHIF
ActionFailedHIF
ActionInterruptedHIF
ActionTimeoutHIF
HumanResponseObservedHIF
```

Examples:

```text
speech failed because the speaker was unavailable
navigation failed because the path became blocked
gesture failed because an actuator was unavailable
the human ignored the robot
the human smiled after the gesture
the task was partially completed
```

For example:

```text
ActionFailedHIF
  → Reactive Action Manager SME
  → Robot Context updates capability state
  → CNE detects meaningful failure
  → SIAH lowers autonomy
  → TPR re-evaluates pending tasks
```

or:

```text
HumanResponseObservedHIF
  → Reactive Action Manager SME
  → DSIE updates social insight
  → HRI_DB stores a preference
  → future SAS style selection changes
```

This closes the HRI loop.

The robot does not only act.

It observes how action unfolds and updates its maintained understanding.

---

## Relationship to Previous Layers

| Layer | What it decides |
|---|---|
| Context Management and Reasoning | What is known, ready, acceptable, and valid |
| Social Planning and Behavioral Synthesis | When and how behavior should be expressed |
| Actuation Layer | How behavior is realized on this robot embodiment |

The Actuation Layer should preserve decisions made earlier.

For example:

```text
If Social Planning selected low volume:
  the TTS binding should preserve low volume.

If SAS selected approach distance:
  the motion controller should respect that distance.

If SCV required non-intrusive behavior:
  the codebook should avoid expressive overacting.

If SIAH reduced autonomy:
  execution should avoid commands that exceed the new autonomy level.
```

The Actuation Layer is also allowed to use Robot Context as an execution-facing API.

This does not contradict the earlier role of Robot Context as a context-producing layer.

It means that the robot's maintained self-model can also expose controlled capability interfaces for execution.

In this sense, Robot Context participates in both directions:

```text
bottom-up:
  sensing and internal state become Robot Context HIFs

top-down:
  selected actions may be routed through Robot Context APIs
```

---

## Outputs

The Actuation Layer may emit several feedback and execution HIFs.

```text
ExecutionCommandHIF
ActionStartedHIF
ActionProgressHIF
ActionSucceededHIF
ActionFailedHIF
ActionInterruptedHIF
ActionTimeoutHIF
ActionCancelledHIF
HumanResponseObservedHIF
CapabilityUnavailableHIF
FallbackExecutedHIF
```

Example:

```json
{
  "type": "ActionSucceededHIF",
  "properties": {
    "action": "wave_hello",
    "embodiment": "desktop_robot",
    "realization": "screen_eye_smile + head_tilt + led_animation",
    "duration": "1.8s"
  },
  "processing_history": [
    "HRI_Codebook",
    "ExecutionAdapter"
  ]
}
```

Failure example:

```json
{
  "type": "ActionFailedHIF",
  "properties": {
    "action": "speak",
    "reason": "speaker_unavailable",
    "fallback_available": true,
    "fallback": "screen_text"
  },
  "processing_history": [
    "CapabilityBinding",
    "ExecutionAdapter"
  ]
}
```

---

## Why This Layer Matters

This layer is where the architecture finally meets the robot's body.

The Actuation Layer is where HRI becomes embodied.

A robot may compute the correct social behavior but still fail if the embodiment cannot express it naturally.

For example:

```text
speech may sound too flat
gesture may look mechanical
movement may feel intrusive
timing may feel unnatural
the wrong library may ignore emotion or language constraints
the same gesture may not transfer across robot bodies
```

It also protects the architecture from assuming that a behavior has one universal realization.

The same HIF may be executed differently depending on embodiment, state, timing, resource availability, and social context.

This is why natural actuation requires more than API integration.

Natural actuation helps preserve social meaning across different embodiments.

It also supports platform portability.

A high-level behavior such as:

```text
acknowledge politely
```

can remain stable, while its realization changes across:

```text
humanoid robot
quadruped robot
desktop robot
mobile robot
virtual agent
voice-only assistant
```

This makes the final layer both technical and social.

---

## SOCIAL Principles Supported

### S — Separated Contexts

The Actuation Layer separates:

```text
behavior meaning
style
embodiment mapping
state-based realization
execution command
execution feedback
```

This prevents high-level social behavior from being hard-coded directly into robot drivers.

### O — Open Declarative

The HRI Codebook and execution mappings can be represented declaratively.

For example:

```text
gesture = wave_hello
embodiment = humanoid
sequence = raise_arm → wave → look_at_person
```

This makes behavior realization inspectable and editable.

### C — Clear Cognition

The system can explain how a behavior-ready HIF became a robot-specific command.

For example:

```text
StyledBehaviorHIF requested a polite greeting.
The codebook selected the desktop-robot realization.
The state-based realization reduced gesture intensity due to low battery.
The execution adapter triggered screen smile, head tilt, and LED animation.
```

### I — Interpretable Gates

Capability binding, reactive action management, synchronization control, state-based realization, policy routing, and execution adapters are explicit gates.

They can be inspected, replaced, logged, and tuned.

### A — Adaptive Autonomy

The layer can adapt execution based on:

```text
robot capability
battery level
autonomy state
affective state
available actuators
resource limitations
feedback
```

It can also choose fallback actions when the preferred modality is unavailable.

### L — Layered Validation

Actuation is not the end of reasoning.

Execution feedback returns to previous layers.

Failures, interruptions, and human responses become new context for future decisions.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Naturalness vs. portability | Highly natural behaviors may require robot-specific tuning |
| Expressiveness vs. embodiment limits | Some robots cannot express all social channels |
| Abstraction vs. control | HIF-level abstraction may hide low-level constraints |
| Reuse vs. robot-specific tuning | Codebooks increase reuse but still need per-robot authoring |
| Low latency vs. feedback monitoring | Fast actions may provide less detailed feedback |
| Synchrony vs. robustness | Tight multimodal synchronization can be fragile |
| State-based adaptation vs. predictability | State-dependent execution can make behavior less uniform |
| Direct execution vs. Robot Context mediation | Routing through Robot Context adds consistency but may add latency |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Gesture mapping looks unnatural | Use embodiment experts, animators, or user testing |
| Unsupported modality | Capability filtering and fallback mappings |
| Style lost in translation | Preserve style constraints through execution binding |
| Command succeeds mechanically but fails socially | Return human response feedback to DSIE / HRI_DB |
| Feedback missing | Require minimum feedback contract for actions |
| ROS / API mismatch | Use adapter validation and simulation tests |
| Latency breaks timing | Use synchronization constraints and timeouts |
| Unsafe fallback | Validate fallback through SIAH and policy |
| State-dependent behavior feels inconsistent | Bound state effects and log state-based choices |
| Reactive path bypasses logging | Require semantic actuation control even for reactive actions |
| Sync queue blocks urgent async behavior | Priority and interrupt policies |
| Async buffer creates conflicting actions | Channel-level resource locking and conflict checks |

---

## Implementation Notes

A practical Actuation Layer should define:

```text
supported HIF input types
reactive action manager policy
capability registry
robot embodiment profile
HRI codebook schema
sync / async execution model
pending queue policy
async buffer policy
state-based realization policy
policy gate routing rules
execution adapter interfaces
feedback HIF schema
fallback policy
latency budget
logging requirements
minimum safety feedback contract
relationship to Robot Context
relationship to HRI_DB
relationship to SIAH
relationship to Social Planning
```

A capability registry may include:

```text
speech:
  supported languages
  voices
  emotion control
  volume control

motion:
  navigation
  base rotation
  arm movement
  gesture primitives

display:
  screen expressions
  lights
  icons
  text

sound:
  beeps
  earcons
  affective sounds

feedback:
  started
  progress
  success
  failure
  interruption
```

The synchronization controller should define:

```text
which channels can run in parallel
which channels are mutually exclusive
which actions require completion before continuation
which actions can be interrupted
which feedback events release pending actions
```

The state-based realization module should define:

```text
which states affect execution
how strongly each state can modify behavior
which states decay over time
which upstream layer owns each state
how local execution state is reset
```

---

## Closing Note

Together, the layers described in this documentation provide a path from context to embodied action.

```text
Human, Scene, and Robot Context
  → Context Management and Reasoning
  → Social Planning and Behavioral Synthesis
  → Natural Actuation and Embodiment Binding
```

The framework does not prescribe one robot architecture.

It provides a reusable pattern language for building inspectable HRI systems that can sense, reason, plan, style, act, and learn from feedback.


---

# Cognitive Layer Map

Source file: `design-patterns/cognitive-layer-map.md`

# Cognitive Layer Map

## Purpose

The Cognitive Layer Map explains how the HRI Design Patterns are organized across the documentation.

The patterns are not ordered alphabetically, and they are not ordered according to one specific implementation.

Instead, they are ordered by their **first meaningful appearance** in a layered cognitive architecture.

This means:

```text
A pattern is introduced where it first becomes naturally needed,
explained through a concrete enough example,
and then reused later without redefining it.
```

For example, the **Synchronous Multi-Extractor (SME)** is introduced in Human Context because it is easiest to understand through person, skeleton, gaze, and expression extraction.

However, SME is not a Human Context pattern only.

The same structure can later be reused in Scene Context, Social Action Styling, and possibly Actuation.

This page explains the rationale behind that organization.

---

# Why Cognitive Layers?

The cognitive layers are not introduced merely as a documentation convenience.

They are an architectural response to a central tension in modern embodied AI: the growing temptation to collapse perception, interpretation, reasoning, planning, and action into opaque end-to-end models.

A simplified end-to-end architecture may look like this:

```text
raw perception / prompt / context
        ↓
large end-to-end model
        ↓
action
```

Such models may be powerful.

However, in social HRI, they can hide the very distinctions that make interaction safe, explainable, governable, and socially predictable.

A black-box end-to-end architecture makes it difficult to ask:

```text
What was perceived?
What was interpreted?
Which context was used?
Which facts were remembered?
Which policies were applied?
Which uncertainty was preserved?
Which gate allowed, delayed, modified, escalated, or blocked the transition?
Why was this action candidate selected?
Why was execution allowed?
```

The SOCIAL framework therefore uses cognitive layers to preserve visible semantic boundaries.

A layered HML architecture makes these stages explicit:

```text
perception
  ↓
semantic interpretation
  ↓
context integration
  ↓
memory and reasoning
  ↓
validation
  ↓
social planning
  ↓
execution
```

Each stage can expose HIFs, Semantic Cells, policies, operators, gates, memory structures, confidence, and provenance.

In this sense, the layer map is not a rigid pipeline.

It is a **transparency structure**.

It helps the architecture remain compatible with powerful AI models while avoiding a black-box collapse from input directly to action.

HML does not forbid end-to-end AI models.

It prevents them from becoming end-to-end architectures.

Powerful AI models may still appear as `λ` operators inside HML cells, but they should be invoked through explicit inputs, policies, gates, and validation layers.

---

# Layered Organization and Pattern Reuse

The design patterns are organized along two complementary axes.

## 1. Architectural Learning Path

The documentation shows how a socially intelligent HRI architecture can be built layer by layer:

```text
Human Context
Scene Context
Robot Context
Context Management and Reasoning
Social Planning and Behavioral Synthesis
Actuation
```

This gives the reader a learning path.

The reader can see how raw context becomes semantic context, how semantic context becomes memory and reasoning, how reasoning becomes socially appropriate action candidates, and how those candidates may eventually become embodied effects.

## 2. Reusable Pattern Catalog

Each pattern remains a reusable architectural structure.

A pattern may be introduced in one layer and reused in later layers.

For example:

```text
SME is introduced in Human Context.
SME is reused in Scene Context.
SME may reappear in Social Action Styling.
```

Similarly:

```text
EAG is introduced as resource-aware attention in Human Context.
EAG may be reused for Scene Context fidelity, Robot Context resource handling, or Actuation bandwidth.
```

The layer organization therefore does not lock a pattern to one layer.

It only defines where the pattern is first explained.

---

# Layers Are Not Runtime Modules

The cognitive layers are conceptual architectural layers.

They are not necessarily:

- software packages
- ROS nodes
- containers
- agents
- processes
- deployment units
- strict runtime stages

A single runtime component may implement several HML roles.

Likewise, one conceptual layer may be implemented by several components, services, models, or agents.

The layer map answers:

```text
What kind of cognitive responsibility is being modeled here?
```

not necessarily:

```text
Which software component runs this code?
```

HIFs may also move across layers in non-linear ways.

For example:

- Context Management may update HRI_DB.
- HRI_DB updates may trigger pending task rechecks.
- Social Planning may return a task to a Pending Queue.
- Actuation may generate RobotState HIFs that feed Robot Context.
- A failed execution may trigger new reasoning or validation.
- A clarification request may send the architecture back to Human Context.

The map is therefore a cognitive organization, not a mandatory sequential flowchart.

---

# High-Level Layer Map

<div align="center">

<svg width="100%" viewBox="0 0 980 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cognitive-layer-map-title cognitive-layer-map-desc">
  <title id="cognitive-layer-map-title">Cognitive Layer Map</title>
  <desc id="cognitive-layer-map-desc">
    Human Context, Scene Context, and Robot Context feed Context Management and Reasoning, which feeds Social Planning and Behavioral Synthesis, and later Actuation. Patterns are introduced where they first become meaningful and may be reused later.
  </desc>

  <defs>
    <marker id="arrow-cognitive-layer-map" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Top layer boxes -->
  <path d="M 40 40 L 285 40 L 305 60 L 305 145 L 60 145 L 40 125 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="172.5" y="70" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Human Context</text>
  <text x="172.5" y="96" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">introduced:</text>
  <text x="172.5" y="116" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">SME / EAG / TSC / ASL</text>

  <path d="M 370 40 L 615 40 L 635 60 L 635 145 L 390 145 L 370 125 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="502.5" y="70" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Scene Context</text>
  <text x="502.5" y="96" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">reuses:</text>
  <text x="502.5" y="116" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">SME / EAG</text>

  <path d="M 700 40 L 925 40 L 945 60 L 945 145 L 720 145 L 700 125 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="822.5" y="70" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Robot Context</text>
  <text x="822.5" y="96" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">models robot state as:</text>
  <text x="822.5" y="116" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HIF streams / HC / SG / HE</text>

  <!-- Context Management -->
  <path d="M 180 250 L 790 250 L 820 280 L 820 390 L 210 390 L 180 360 Z"
        fill="none" stroke="currentColor" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="500" y="285" textAnchor="middle" fontSize="19" fontFamily="Arial, sans-serif" fill="currentColor">Context Management and Reasoning</text>
  <text x="500" y="315" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">introduced: CNE / HRI_DB Handler</text>
  <text x="500" y="338" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">composes: SBR / CEU / QSH / DSIE / SIAH / TPR / SCV</text>
  <text x="500" y="361" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">connects context streams, transparent memory, validation, and reasoning</text>

  <!-- Social planning -->
  <path d="M 270 455 L 710 455 L 735 480 L 735 535 L 295 535 L 270 510 Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="502.5" y="486" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Social Planning and Behavioral Synthesis</text>
  <text x="502.5" y="513" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Social Opportunity TPR / SAS / Late-Binding Choreographer</text>

  <!-- Actuation marker -->
  <rect x="770" y="465" width="160" height="50" rx="12"
        fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 5" />
  <text x="850" y="485" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Actuation</text>
  <text x="850" y="505" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">to be developed</text>

  <!-- Arrows -->
  <line x1="172.5" y1="145" x2="340" y2="242" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-cognitive-layer-map)" />
  <line x1="502.5" y1="145" x2="502.5" y2="242" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-cognitive-layer-map)" />
  <line x1="822.5" y1="145" x2="660" y2="242" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-cognitive-layer-map)" />

  <line x1="502.5" y1="390" x2="502.5" y2="447" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-cognitive-layer-map)" />
  <line x1="735" y1="493" x2="762" y2="493" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-cognitive-layer-map)" />

<!-- Feedback from actuation back to Robot Context -->
<path d="M 850 465 C 940 360, 930 210, 835 155"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeDasharray="5 5"
      markerEnd="url(#arrow-cognitive-layer-map)" />

<text x="915" y="310" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">execution feedback</text>
<text x="915" y="327" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">updates Robot Context</text>
</svg>

</div>

This diagram is intentionally schematic.

It shows the recommended reading path and reuse structure.

It does not define a mandatory runtime pipeline.

---

# Layer-by-Layer Overview

## Human Context

Human Context converts human-facing signals into structured semantic context.

It answers questions such as:

```text
Who is present?
Where is the person?
What is the person doing?
What did the person say?
What is the person pointing at?
What is the person's apparent engagement or affect?
```

Patterns first introduced here:

- **Synchronous Multi-Extractor (SME)**
- **Elastic Attention Governor (EAG)**
- **Tiered Semantic Cache / Proxy (TSC/TSP)**
- **Adaptive Signature Learner (ASL)**

This layer is a natural place to introduce SME because human understanding often requires multiple synchronized extractors.

Example composition:

```text
VideoFrame HIF
  → person / skeleton / gaze / expression STs
  → SG
  → HumanState HIF
```

This is only one possible composition.

The purpose is to illustrate how the pattern may be used, not to prescribe a fixed detector stack.

---

## Scene Context

Scene Context models relevant physical and spatial information about the environment.

It answers questions such as:

```text
What objects are present?
Where are obstacles?
Where are doors, stairs, rooms, and navigation-relevant affordances?
What spatial relationships matter for the current task?
```

Scene Context primarily reuses foundational patterns introduced earlier.

Reused patterns:

- **SME**
- **EAG**

For example, SME can coordinate object detection, obstacle detection, door detection, and slope detection before producing a richer SceneState HIF.

EAG can allocate higher fidelity processing to scene regions that are socially, physically, or task-relevant.

The point is to show that Human Context patterns generalize beyond human perception.

---

## Robot Context

Robot Context models the robot itself as part of the semantic world.

It answers questions such as:

```text
What is the robot's current physical state?
What resources are available?
Which sensors are reliable?
Which actuators are available?
What is the current autonomy state?
What can the robot safely do now?
```

Robot Context may use existing HML structures rather than introducing many new patterns.

Common structures include:

- HC cells that create RobotState HIFs
- SG cells that synchronize resource and sensor health HIFs
- HE cells that expose effects or execution bridges
- Semantic Cells that normalize internal robot state
- HIF streams for battery, CPU, memory, disk, communication, actuator status, and sensor health

Robot Context is important because a socially intelligent robot should not reason only about humans and the external scene.

It must also reason about its own capability, limits, and integrity.

---

## Context Management and Reasoning

Context Management and Reasoning connects Human Context, Scene Context, Robot Context, memory, validation, and reasoning.

It answers questions such as:

```text
What changed?
What should be remembered?
What should be forgotten or decayed?
Which facts are consistent?
Which query can be answered deterministically?
Which query requires escalation?
Which tasks are incomplete?
Which tasks are pending?
Which actions are socially or technically allowed?
```

Patterns introduced here:

- **Context Novelty Extractor (CNE)**
- **HRI_DB Handler Pattern**

Composite and specialized reasoning patterns:

- **Spatial-Based Reasoning (SBR)**
- **Consistency Evaluator and Updater (CEU)**
- **Query Social Handler (QSH)**
- **Deep Social Insight Extractor (DSIE)**
- **System Integrity and Agency Handler (SIAH)**
- **Task Prerequisite Resolver (TPR)**
- **Social Convention Validator (SCV)**

This layer is where many earlier pieces become connected.

It is also where transparent memory becomes essential.

HRI_DB is not merely a database here.

It is a transparent semantic world model that supports deterministic reasoning, human correction, confidence decay, and bounded LLM escalation.

---

## Social Planning and Behavioral Synthesis

Social Planning and Behavioral Synthesis turns validated context into socially appropriate action candidates.

It answers questions such as:

```text
Should the robot act now?
Is the social opportunity open?
Which modality should be used?
How should the action be phrased, timed, or embodied?
Should the robot speak, gesture, move, wait, ask, or do nothing?
```

Patterns introduced or emphasized here:

- **Social Opportunity TPR**
- **Social Action Stylist (SAS)**
- **Late-Binding Behavioral Choreographer**

This layer highlights a central point:

```text
Social planning is not only about what to do.
It is also about when to do it and how to do it.
```

The Late-Binding Behavioral Choreographer composes opportunity reasoning and action styling so that the final behavior can remain adaptable until late in the process.

---

## Actuation

The Actuation Layer remains open for future documentation.

It will likely describe patterns that connect executable HIFs to embodied effects through:

- HE cells
- actuator policies
- safety gates
- action monitoring
- rollback or interruption
- execution feedback
- robot-state updates
- emergency handling

The important architectural idea is that execution should not bypass the earlier semantic and validation layers.

An executable HIF should normally reach actuation only after relevant context, social, safety, and autonomy conditions have been evaluated.

---

# First Introduced vs Reused

The following table summarizes where patterns are first introduced and where they may be reused.

| Pattern | First Introduced In | Later Reuse | Main Role |
|---|---|---|---|
| SME | Human Context | Scene Context, SAS, Actuation monitoring | Synchronize multiple extractors or generators |
| EAG | Human Context | Scene Context, Robot Context, Actuation | Allocate attention, compute, or fidelity |
| TSC/TSP | Human Context Interpreter | Query handling, intent parsing, HRI_DB access | Fast interpretation with cache and escalation |
| ASL | Human Context Interpreter | Gesture learning, personalization, temporal signatures | Learn or classify user-specific signatures |
| CNE | Context Management | Memory updates, social opportunity detection | Extract meaningful context changes |
| HRI_DB Handler | Context Management | Query answering, task resolution, consistency updates | Govern transparent semantic memory |
| SBR | Context Management | Object selection, navigation reasoning, task grounding | Reason over spatial relations |
| CEU | Context Management | HRI_DB updates, validation, conflict repair | Evaluate and update consistency |
| QSH | Context Management | TPR, clarification, user queries | Handle social or contextual queries |
| DSIE | Context Management | Personalization, long-term inference | Extract deeper social insight |
| SIAH | Context Management | Robot Context, Adaptive Autonomy, safety | Monitor integrity and agency |
| TPR | Context Management | Social Opportunity TPR, planning, pending queues | Resolve missing prerequisites |
| SCV | Context Management | Planning, actuation, social validation | Validate social acceptability |
| Social Opportunity TPR | Social Planning | Proactivity, delayed interaction, reminders | Wait for the right social moment |
| SAS | Social Planning | Multimodal behavior synthesis, actuation | Style action candidates |
| Late-Binding Behavioral Choreographer | Social Planning | Actuation, complex behavior selection | Bind what/when/how late |

This table is not meant to be exhaustive.

It is a navigation aid.

A pattern may later be specialized, composed, or reused in additional places.

---

# Layer Outputs

Each cognitive layer tends to produce different kinds of HIFs.

| Layer | Typical Output |
|---|---|
| Human Context | HumanState HIF, Speech HIF, Gesture HIF, Engagement HIF |
| Scene Context | SceneState HIF, ObjectState HIF, SpatialRelation HIF |
| Robot Context | RobotState HIF, ResourceState HIF, Integrity HIF |
| Context Management and Reasoning | UnifiedContext HIF, DeltaContext HIF, QueryResult HIF, PendingTask HIF |
| Social Planning and Behavioral Synthesis | ActionCandidate HIF, StyledAction HIF, SocialOpportunity HIF |
| Actuation | Executable HIF, Effect, ExecutionFeedback HIF |

These names are examples.

A concrete architecture may use different HIF types.

The important point is that each layer contributes semantically distinct information.

---

# How to Read the Pattern Catalog

A reader can use this documentation in two ways.

## Reading Path

Read the catalog in order if the goal is to understand how the framework builds a complete HRI architecture:

```text
Overview
How to Read a Pattern Page
Cognitive Layer Map
Human Context
Scene Context
Robot Context
Context Management
Social Planning
Actuation
```

This path emphasizes architectural learning.

## Lookup Path

Jump directly to a pattern if the goal is to solve a specific design problem.

Examples:

```text
Need to synchronize several perception experts?
→ SME

Need to reduce compute while preserving social relevance?
→ EAG

Need to resolve a task with missing information?
→ TPR

Need to check whether an action is socially appropriate?
→ SCV

Need to style a social action across modalities?
→ SAS
```

This path treats the documentation as a reusable pattern catalog.

Both reading modes are valid.

---

# Concrete Examples Are Illustrative

Layer examples should be concrete enough to teach the pattern.

However, they should not be interpreted as the only correct architecture.

Recommended wording:

```text
One possible layer composition is...
A possible instantiation may connect...
This example illustrates how the pattern can be used...
```

Avoid wording such as:

```text
The robot must...
The architecture always...
The system is implemented as...
```

The documentation should show how patterns can connect, not merely document one existing project.

---

# Conclusion

The Cognitive Layer Map explains why the HRI Design Patterns are organized by first meaningful appearance within a layered cognitive architecture.

This organization serves three goals:

```text
It supports the SOCIAL principles by preserving transparent cognitive boundaries.
It gives the reader a learning path from perception to social planning.
It keeps each pattern reusable beyond the layer where it is first introduced.
```

The next section begins the first major pattern group: Human Context.


---

# Context Management Layer Example

Source file: `design-patterns/context-management/context-management-layer-example.md`

# Context Management Layer Example

## Overview

This page shows one possible composition of the **Context Management and Reasoning** layer.

It does not introduce a new pattern.

Instead, it connects the patterns introduced in this section into a working layer-level example.

The composition illustrates how the architecture may transform context streams into:

```text
memory updates
query answers
resolved references
social insights
integrity decisions
executable instructions
socially validated instructions
primitive action HIFs
dispatcher inputs
```

This is an example, not a mandatory blueprint.

Different systems may connect the same patterns differently depending on domain, robot embodiment, safety policy, available sensors, and interaction goals.

The important idea is the architectural flow:

```text
context streams
  → novelty extraction
  → memory and reasoning handlers
  → task prerequisite resolution
  → social validation
  → hierarchical task resolution
  → primitive action dispatch
```

This layer acts as a semantic buffer between understanding and action.

---

## Layer Composition Diagram

<div align="center">

<img
  src="/social-hri-framework/img/hml/context-management-layer-example.svg"
  alt="Example composition of the Context Management and Reasoning layer connecting novelty extraction, HRI DB reasoning handlers, task resolution, social validation, hierarchical task resolution, and dispatcher outputs"
  width="100%"
/>

</div>

---

## From Context Streams to Novelty

The layer begins with the **Context Novelty Extractor (CNE)**.

The CNE receives unified context evidence derived from:

```text
Human Context
Scene Context
Robot Context
```

It decides whether something meaningful has changed.

For example:

```text
a person pointed at an object
a door changed state
a new instruction was spoken
a task became stuck
the robot's autonomy state changed
a person remained waiting for too long
```

If a meaningful delta exists, the output can continue into reasoning handlers.

If:

```text
Δ = 0
```

the lack of change may still be meaningful.

For example:

```text
the user is still waiting
the task has not progressed
the expected response did not arrive
the robot has not received new information
```

In that case, a **Proactivity Engine ES** may be triggered according to policy.

No novelty is not automatically a problem.

But persistent no-change can become a meaningful interaction signal.

---

## Spatial Retrieval When Needed

Not every context update requires spatial reasoning.

The first routing decision asks whether spatial retrieval is needed.

If the context includes expressions such as:

```text
this
that
over there
the closest bottle
the object I am pointing at
the person behind Bob
```

the system may route the HIF to **Spatial-Based Reasoning (SBR)**.

SBR can resolve a spatial reference into an explicit ID.

For example:

```text
"this bottle"
  → bottle_3
```

or:

```text
"the bottle closest to Bob"
  → bottle_5
```

Once the ID is resolved, the downstream handlers can operate on a concrete semantic object instead of an ambiguous reference.

If spatial retrieval is not needed, the HIF can continue directly to the next routing decision.

---

## Fact, Query, and Instruction Routing

After optional spatial resolution, the system identifies the kind of HIF being handled.

A context event may be a:

```text
fact
query
instruction
```

Each type requires a different reasoning path.

### Facts

Facts are routed to **Consistency Evaluator and Updater (CEU)**.

For example:

```text
Bob is in the kitchen.
This bottle is empty.
The meeting room door is closed.
Alice prefers short answers.
```

CEU checks whether the fact is consistent with HRI_DB and then decides whether to:

```text
update memory
merge with existing memory
mark uncertainty
request clarification
reject the update
```

### Queries

Queries are routed to **Query Social Handler (QSH)**.

For example:

```text
Where is Bob?
Is this bottle empty?
Do you know what I asked you to remember?
Can you do this now?
```

QSH uses short-term memory, session context, and HRI_DB to produce an answer or a clarification HIF.

### Instructions

Instructions are routed toward **Instruction Handler TPR**.

For example:

```text
Bring this bottle to Bob.
Tell Alice I am waiting.
Remind me when Bob arrives.
Go to the meeting room.
```

The instruction may be incomplete even after language interpretation.

TPR determines whether it is ready for planning or should remain pending.

---

## Background Reasoning

Some handlers do not wait for a direct query or instruction.

They may run in the background and continuously update the system's maintained understanding.

### Deep Social Insight Extractor

The **Deep Social Insight Extractor (DSIE)** can periodically query HRI_DB and update it with deeper social insights.

For example:

```text
the person may be unavailable
the user may be frustrated
the setting has become formal
a preferred interaction style was reinforced
a social pattern is emerging
```

If an insight requires attention or action, DSIE emits a HIF.

Otherwise, it may simply update HRI_DB.

### System Integrity and Agency Handler

The **System Integrity and Agency Handler (SIAH)** monitors internal robot state, integrity, and autonomy constraints.

It may use:

```text
battery
CPU / memory / disk
sensor health
localization confidence
actuator state
anomaly detectors
diagnostic experts
prognostic experts
autonomy adjusters
```

SIAH may update HRI_DB with integrity state, lower the robot's autonomy level, or emit high-priority HIFs.

For example:

```text
EmergencyStopHIF
AutonomyReductionHIF
IntegrityWarningHIF
SensorFailureHIF
```

This allows the layer to include not only social reasoning, but also system-level integrity and agency control.

---

## Instruction Handler TPR

The **Instruction Handler TPR** manages instructions that may not yet be executable.

It receives an instruction HIF and checks whether required prerequisites are available.

For example, the instruction:

```text
Bring this bottle to Bob.
```

may require:

```text
object ID
object location
target person ID
target person location
motion availability
route availability
social permission to approach
```

If required information is missing, the instruction can be placed into a pending task queue.

The pending queue may track:

```text
priority
missing prerequisites
task age
decay factor
expiration condition
re-evaluation triggers
```

When new facts enter HRI_DB, pending tasks may be re-evaluated.

This supports fact-triggered resumption.

For example:

```text
pending task:
  Bring bottle_3 to Bob.
  Missing: Bob's location.

new fact:
  Bob is in the kitchen.

TPR:
  re-evaluates the task.
  emits ExecutableInstructionHIF.
```

This lets the robot hold incomplete intentions without failing the interaction.

---

## Social Convention Gate

An instruction that becomes executable is not automatically ready for behavior.

It must still pass through a social validation step.

In the diagram, this appears as the **Social Convention Gate**.

This gate corresponds to the **Social Convention Validator (SCV)** pattern.

It asks:

```text
Is this instruction socially acceptable now?
```

For example:

```text
Is it appropriate to approach Bob?
Is Bob available?
Is this a formal room?
Should the robot speak quietly?
Should the robot ask permission first?
Is this action urgent enough to interrupt?
Does the robot's current autonomy state allow this?
```

If the instruction is not socially acceptable, it may be:

```text
modified
delayed
returned to the pending queue
rejected
escalated
```

If it is acceptable, the gate emits a:

```text
Socially acceptable and executable instruction HIF
```

This is the bridge from context readiness to socially valid planning.

---

## Hierarchical Task Resolver ES

The **Hierarchical Task Resolver ES** is the main addition in this layer-level composition.

It receives a socially acceptable and executable instruction HIF.

It then selects the appropriate task-handling expert.

For example:

```text
bring_object_to_person
  → pick-and-place handler

say_message_to_person
  → speech interaction handler

guide_person_to_room
  → navigation and interaction handler

warn_about_obstacle
  → safety communication handler

approach_person
  → social approach handler
```

The selected expert decomposes the instruction into lower-level **Primitive Action HIFs**.

For example:

```text
turn toward person
navigate to object
pick object
navigate to Bob
wait for availability
speak softly
hand over object
confirm completion
```

The Hierarchical Task Resolver does not replace the planning layer.

It prepares the right level of action representation for the next stage.

It translates a socially validated instruction into structured primitive actions that can be dispatched, planned, or choreographed.

---

## Dispatcher ST

The **Dispatcher ST** receives primitive action HIFs and routes them toward the next execution-oriented systems.

The diagram shows possible outputs such as:

```text
Reactive actions
Interactive actions
Action feedback
```

Reactive actions may include low-latency responses such as:

```text
stop
avoid
turn
slow down
cancel unsafe motion
```

Interactive actions may include:

```text
speech
gesture
approach
explanation
confirmation
clarification
social feedback
```

The Dispatcher is a boundary object.

It connects Context Management and Reasoning to later behavioral synthesis and actuation layers.

---

## Action Feedback

Action feedback can return into the dispatcher and later become new context.

For example:

```text
action succeeded
action failed
human reacted positively
human ignored the robot
actuator unavailable
task partially completed
social response was awkward
```

This feedback may later enter the context stream, trigger CNE, update HRI_DB, or influence DSIE and SIAH.

This closes the loop between action and context.

The robot does not only act.

It observes the consequences of action and updates its maintained understanding.

---

## Layer Outputs

This example layer may produce several kinds of outputs.

```text
ContextUpdateHIF
QueryAnswerHIF
ClarificationRequestHIF
SocialInsightHIF
IntegrityDecisionHIF
EmergencyActionHIF
ExecutableInstructionHIF
SociallyAcceptableInstructionHIF
PrimitiveActionHIF
ActionFeedbackHIF
```

Some outputs update memory.

Some are returned to the user-facing interaction loop.

Some prepare planning.

Some prepare actuation.

Some return as feedback into context.

---

## Why This Composition Matters

This composition shows how the architecture avoids a direct jump from perception to action.

Instead of:

```text
context
  → action
```

the layer creates an explicit reasoning path:

```text
context
  → novelty
  → memory
  → reasoning
  → prerequisite resolution
  → social validation
  → hierarchical task resolution
  → dispatch
```

This prevents the robot from acting only because something was detected or requested.

Instead, the robot acts after the context was:

```text
updated
queried
completed
validated
translated into the right level of action
```

This is the main role of the Context Management and Reasoning layer.

It turns context into planning-ready, socially valid, and traceable action candidates.

---

## Design Note

The diagram is one possible composition.

A real implementation may:

```text
split handlers across services
merge CEU and QSH in a small system
run DSIE and SIAH at different frequencies
send primitive actions directly to a planner
add more specialized task handlers
add more social validation gates
use a different dispatcher architecture
```

The important point is not the exact wiring.

The important point is that each step remains explicit:

```text
what changed
what was stored
what was queried
what was completed
what was validated
what was decomposed
what was dispatched
```

This supports transparency, debugging, adaptation, and safer human-robot interaction.

---

## Transition to Social Planning and Behavioral Synthesis

At the end of this layer, the system has planning-ready, socially validated, and context-grounded action candidates.

The next layer decides how these candidates should be expressed as behavior.

```text
Context Management:
  what is known, ready, and acceptable

Social Planning and Behavioral Synthesis:
  how the robot should behave
```

The next section moves from context reasoning into social behavior generation.


---

# Context Management and Reasoning

Source file: `design-patterns/context-management/context-management-overview.md`

# Context Management and Reasoning

## Overview

The previous layers produce rich semantic context streams.

```text
Human Context
Scene Context
Robot Context
```

Each layer emits HIFs that describe a different part of the interaction situation:

```text
Human Context:
  what the human is doing, saying, expressing, teaching, or needing

Scene Context:
  what exists in the surrounding environment and how it is grounded in space

Robot Context:
  what the robot knows about its own resources, state, capabilities, and actuation channels
```

However, streams alone are not enough.

The system must decide:

```text
What is new?
What changed?
What should be remembered?
What contradicts previous knowledge?
What can be inferred?
What should be validated?
What is safe or socially appropriate to pass to planning?
```

**Context Management and Reasoning** is where Human, Scene, and Robot Context streams become maintained, queryable, validated, and socially meaningful understanding.

It converts context flow into working social understanding.

---

## Top View

The following diagram provides a high-level view of this layer.

It shows the three previous context layers feeding into Context Management and Reasoning.

<div align="center">

<img
  src="/social-hri-framework/img/hml/context-management-overview.svg"
  alt="Context Management and Reasoning top view showing Human, Scene, and Robot Context feeding into maintained social understanding"
  width="100%"
/>

</div>

Place the SVG file here:

```text
docs/static/img/hml/context-management-overview.svg
```

The public path used by the documentation is:

```text
/social-hri-framework/img/hml/context-management-overview.svg
```

---

## What Happens Inside This Layer

This layer performs several related functions.

It does not merely store data.

It manages the transition from context streams to maintained, inspectable, and actionable understanding.

### 1. Novelty Detection

The first question is:

```text
What is new enough to matter?
```

Not every HIF should update memory or trigger reasoning.

The layer may detect novelty such as:

```text
a new person appeared
an object moved
a door changed state
a user expressed a new preference
the robot battery dropped below a threshold
a socially meaningful event occurred
a previous assumption became uncertain
```

This prepares the ground for the **Context Novelty Extractor (CNE)** pattern.

---

### 2. Memory Integration

After novelty is detected, the system must decide what should happen to memory.

The relevant question is:

```text
Should this context update HRI_DB?
```

Possible outcomes include:

```text
store as new knowledge
update an existing entity
merge with a previous observation
mark as uncertain
keep only as temporary working context
ignore as unimportant
ask for clarification
```

This prepares the ground for the **HRI_DB Handler Pattern**.

The HRI_DB is not just a technical database.

It is the maintained semantic world model of the interaction.

It may contain:

```text
people
objects
rooms
events
relations
preferences
social annotations
task state
robot capability state
provenance
confidence
freshness
```

---

### 3. Reasoning Over Maintained Context

Once context is maintained, the system can reason over it.

Typical reasoning questions include:

```text
Where is Bob likely to be?
Is the object still where it was last seen?
Does the current observation contradict the map?
Is this query answerable from current knowledge?
Is there a deeper social meaning in the recent interaction?
Is the system being asked to exceed its agency boundaries?
```

This prepares the ground for the HRI_DB reasoning handlers:

```text
Spatial-Based Reasoning (SBR)
Consistency Evaluator and Updater (CEU)
Query Social Handler (QSH)
Deep Social Insight Extractor (DSIE)
System Integrity and Agency Handler (SIAH)
```

---

### 4. Task Readiness

The layer also helps determine whether the robot knows enough to proceed.

The relevant question is:

```text
Do we have the prerequisites needed to act?
```

For example:

```text
Do we know who the target person is?
Do we know where the requested object is?
Is the path available?
Is the robot capable of performing the task now?
Is the scene information fresh enough?
Do we need clarification?
```

This prepares the ground for the **Task Prerequisite Resolver (TPR)** pattern.

---

### 5. Social Validation

Even if a task is technically possible, it may not be socially appropriate.

The relevant question is:

```text
Is this action appropriate in the current social context?
```

For example:

```text
Is it appropriate to interrupt?
Is this room formal?
Should the robot lower its voice?
Should it avoid approaching too closely?
Should it wait before speaking?
Should it ask permission before storing or using this information?
```

This prepares the ground for the **Social Convention Validator (SCV)** pattern.

---

## HIFs, HRI_DB, and Handlers

This section introduces three important concepts that appear throughout the rest of the layer.

```text
HIFs are how context moves.
HRI_DB is where context is maintained.
Handlers are how context is interpreted, updated, queried, and validated.
```

### HIFs Move Context

HIFs carry observations, interpretations, requests, updates, and reasoning outputs between cells.

For example:

```text
HumanState HIF
SceneContext HIF
RobotResourceState HIF
QueryHIF
ContextUpdate HIF
SocialInsight HIF
TaskPrerequisite HIF
```

HIFs preserve traceability through properties such as:

```text
source
confidence
timestamp
processing history
provenance
semantic properties
```

### HRI_DB Maintains Context

HRI_DB represents the maintained semantic state of the interaction.

It may preserve knowledge beyond the current frame or current input stream.

For example:

```text
Bob was last seen near the kitchen.
The meeting room is a formal interaction zone.
The chair was moved recently.
The robot has low battery.
Alice prefers short verbal confirmations.
The corridor door is currently closed with medium confidence.
```

HRI_DB is where context becomes queryable and updateable.

### Handlers Reason Over Context

Handlers are specialized semantic cells or compositions that operate over HRI_DB and HIFs.

They may:

```text
query
update
merge
validate
infer
detect inconsistency
extract social insight
check agency boundaries
resolve prerequisites
```

A handler should not be a hidden black box.

It should expose:

```text
input HIFs
accessed context
reasoning path
output HIF
confidence
failure mode
```

---

## Outputs

The output of Context Management and Reasoning is not necessarily a final robot action.

Instead, the layer produces structured context that later planning layers can use.

Typical outputs include:

```text
Updated HRI_DB
ContextUpdate HIFs
QueryAnswer HIFs
SocialInsight HIFs
Integrity / Agency HIFs
TaskPrerequisite HIFs
SocialValidation HIFs
Planning-ready context HIFs
```

For example:

```text
The requested object is likely in the kitchen.
The door to the meeting room is closed.
The user appears to be asking for help.
The robot can perform the task, but battery is low.
The action is technically possible but socially inappropriate right now.
A clarification question is required before planning.
```

These outputs prepare the architecture for **Social Planning and Behavioral Synthesis**.

---

## Why This Layer Matters

Context Management and Reasoning is the first layer where the architecture moves from perception and interpretation into maintained social understanding.

It supports:

| Goal | Context Management contribution |
|---|---|
| Memory | Maintains context beyond the current frame |
| Novelty awareness | Detects what changed or became important |
| Consistency | Resolves contradictions and uncertainty |
| Query answering | Answers questions from maintained context |
| Social insight | Extracts deeper meanings from interaction history |
| Integrity | Protects system agency and safe boundaries |
| Task readiness | Determines whether enough is known to act |
| Social validation | Checks whether actions fit the current social setting |
| Traceability | Records how conclusions were reached |

This is especially important for HRI because social interaction is not only about immediate perception.

It depends on memory, context, interpretation, uncertainty, and social appropriateness.

---

## Why Not Just Use an End-to-End Model?

An end-to-end model may produce an answer or action recommendation directly.

However, Context Management and Reasoning makes the intermediate social understanding explicit.

The system can inspect:

```text
what changed
what was remembered
what was inferred
what was uncertain
what contradicted previous knowledge
what was validated
what was rejected
what was passed to planning
```

This makes the system easier to debug, safer to govern, and easier to explain.

The goal is not to avoid powerful models.

The goal is to use them inside an architecture where context, memory, reasoning, and validation remain visible.

---

## Patterns in This Section

The rest of this section is organized into four groups.

### Novelty and Memory

```text
Context Novelty Extractor (CNE)
HRI_DB Handler Pattern
```

These patterns explain how new context is detected, filtered, stored, updated, and integrated into maintained memory.

### HRI_DB Reasoning Handlers

```text
Spatial-Based Reasoning (SBR)
Consistency Evaluator and Updater (CEU)
Query Social Handler (QSH)
Deep Social Insight Extractor (DSIE)
System Integrity and Agency Handler (SIAH)
```

These handlers show how HRI_DB can support spatial reasoning, consistency management, query answering, social insight, and agency/integrity control.

### Validation for Planning

```text
Task Prerequisite Resolver (TPR)
Social Convention Validator (SCV)
```

These patterns prepare context for planning by checking task readiness and social appropriateness.

### Layer Example

```text
Context Management Layer Example
```

The final page in this section shows how the patterns may connect into one possible Context Management and Reasoning composition.

---

## Transition to CNE

The first pattern in this layer is the **Context Novelty Extractor (CNE)**.

Before the system updates memory or performs deeper reasoning, it must decide which parts of the incoming context streams are new, meaningful, or important enough to process.

CNE is the gate between continuous context flow and maintained context understanding.


---

# Context Novelty Extractor (CNE)

Source file: `design-patterns/context-management/context-novelty-extractor.md`

# Context Novelty Extractor (CNE)

## Intent

**Context Novelty Extractor (CNE)** is an HRI design pattern for detecting meaningful change across multiple context streams.

It receives context HIFs from the previous layers:

```text
Human Context
Scene Context
Robot Context
```

It first unifies them into a coherent **Unified Context HIF**.

It then compares the current unified context with a previous unified context, baseline, or remembered state, and emits a **Δ Unified Context HIF** that represents what changed.

In short:

```text
multiple context HIFs
  → unified context
  → compare with previous context
  → extract meaningful delta
  → trigger memory, reasoning, visualization, or proactivity
```

CNE extracts what changed with respect to a previous context frame, snapshot, or maintained reference state.

---

## Problem

Human, Scene, and Robot Context layers may produce a continuous flow of rich semantic HIFs.

If every HIF triggered memory updates, database writes, reasoning, or planning, the system would become:

```text
noisy
expensive
unstable
over-reactive
hard to debug
```

However, if the system ignores change, it may miss important events:

```text
a person appeared
a person disappeared
an object moved
a door closed
the robot battery dropped
a user gave a new instruction
a social situation changed
```

CNE solves this by acting as a semantic change gate.

It asks:

```text
What changed enough to matter?
```

Only meaningful novelty should be promoted to deeper context management, memory update, reasoning, or proactive behavior.

---

## Context

Use CNE when the architecture has:

- multiple context streams
- a need to build a unified interaction snapshot
- a need to compare current context with previous context
- frequent updates that should not all enter memory
- a need to trigger reasoning only on meaningful change
- a need to visualize the robot's current unified understanding
- a need to detect both change and persistent lack of change

CNE is especially useful before updating HRI_DB.

Without a novelty gate, every small perception jitter or repeated HIF may become a database update or reasoning event.

---

## HML Structure

The pattern has two main stages:

```text
Unification SG
Novelty SG
```

The **Unification SG** combines multiple context HIFs into a single synchronized Unified Context HIF.

The **Novelty SG** compares the current Unified Context HIF with the previous Unified Context HIF and extracts the meaningful delta.

<div align="center">

<img
  src="/social-hri-framework/img/hml/context-novelty-extractor.svg"
  alt="Context Novelty Extractor combining Human, Scene, and Robot Context into a unified context HIF and extracting delta against previous context"
  width="100%"
/>

</div>


---

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Human Context HIF | Input HIF | Carries current human-related semantic context |
| Scene Context HIF | Input HIF | Carries current scene, object, map, and environment context |
| Robot Context HIF | Input HIF | Carries current robot self-state and actuation context |
| Unification SG | SG | Synchronizes and merges multiple context streams |
| Unified Context HIF | HIF | Represents the current interaction state as one coherent context object |
| Previous Unified Context HIF | HIF / memory reference | Represents a previous snapshot or baseline |
| Novelty SG | SG | Compares current and previous context according to policy |
| Δ Unified Context HIF | Output HIF | Describes what changed and why it matters |
| Proactivity trigger | Optional downstream signal | May activate when change or persistent non-change is meaningful |

---

## Flow

A typical CNE flow is:

```text
1. Human, Scene, and Robot Context HIFs arrive.
2. Unification SG synchronizes and merges them.
3. The result is a Unified Context HIF.
4. The Unified Context HIF may already be sent to visualization or debugging tools.
5. Novelty SG compares the current unified context with previous unified context.
6. It extracts meaningful differences.
7. It emits a Δ Unified Context HIF.
8. If Δ is meaningful, downstream memory or reasoning handlers may run.
9. If Δ = 0, a proactivity policy may decide whether persistent no-change is meaningful.
```

The previous context does not have to be exactly the previous frame.

It may be:

```text
the previous unified snapshot
the latest committed HRI_DB state
an expected context
a task-specific baseline
a human-approved reference state
```

---

## Unified Context as a Display Object

The Unified Context HIF is useful even before novelty extraction.

Once Human, Scene, and Robot Context are synchronized into one HIF, the result can be sent to a display, debug tool, or operator-facing interface.

For example:

```text
Unified Context HIF
  → RViz-style visualization
  → Cogniteam-style operational display
  → digital twin
  → debugging dashboard
  → operator situation monitor
```

This makes the robot's current understanding inspectable.

It may show:

```text
tracked people
objects
obstacles
doors
robot pose
robot resources
battery state
map-relative locations
social room annotations
last-seen information
confidence and uncertainty
```

The same Unified Context HIF can therefore serve both reasoning and visualization.

---

## Visualization Examples

The following images show two possible ways to visualize the same kind of unified context.

They are not part of the CNE pattern itself.

They illustrate how a Unified Context HIF can support different display and debugging tools.

<div align="center">

<img
  src="/social-hri-framework/img/hml/rviz-unified-context.png"
  alt="RViz-style visualization of a unified context HIF"
  width="100%"
/>
</div>

**Unified context visualization in RViz.**  
The blue skeleton represents a detected human within the robot’s camera field of view, shown in red. The yellow ray represents the interpreted pointing direction. It intersects with a bottle that was detected earlier and maintained in the scene memory. This demonstrates the role of Context Management: social meaning, such as pointing to an object, may require reasoning over the current human context together with remembered scene context, even when the referenced object is no longer visible in the current camera frame.

<div align="center">

<img
  src="/social-hri-framework/img/hml/cogniteam-unified-context.png"
  alt="Cogniteam-style visualization of a unified context HIF"
  width="100%"
/>

</div>
**Cogniteam Nimbus-based unified context dashboard.**  
This customizable dashboard, built on top of [Cogniteam Nimbus](https://www.cogniteam.com), shows another possible visualization of the same kind of unified context. Moving clockwise, the dashboard exposes what the robot hears and interprets from the human’s text input, detected human gestures and emotions, the recognized social context, readable access to the HRI_DB, anomaly indicators and robot-internal affective/state measures, the robot’s camera view, and the robot’s 3D understanding of the world. This illustrates how a Unified Context HIF can support both debugging and operator awareness by making human, scene, robot, and social context visible in one place.

---

## What Counts as Novelty?

Novelty is policy-dependent.

The same change may be important in one context and irrelevant in another.

For example, a small change in gaze direction may not matter during navigation, but may matter during close social interaction.

### Human Novelty

Examples of human-context novelty include:

```text
new person appeared
known person disappeared
person changed posture
person spoke
new gesture detected
gaze shifted toward the robot
facial expression changed
user preference expressed
user repeated a request
```

### Scene Novelty

Examples of scene-context novelty include:

```text
object moved
door opened or closed
obstacle appeared
stairs detected
slope detected
hazard detected
room state changed
map element updated
```

### Robot Novelty

Examples of robot-context novelty include:

```text
battery crossed threshold
CPU or GPU load changed significantly
network connectivity degraded
actuator became unavailable
localization confidence dropped
task execution state changed
motion system became degraded
```

### Social Novelty

Some novelty is not purely physical.

Examples of social novelty include:

```text
the interaction moved from casual to formal setting
the user became frustrated
the user waited longer than expected
someone repeated a request
expected confirmation did not arrive
the group arrangement changed
the robot's behavior no longer fits the room context
```

Social novelty may require deeper downstream handlers, such as DSIE or SCV.

---

## Δ = 0 and Proactivity

CNE can also detect the absence of meaningful change.

This is important because no change can sometimes be meaningful.

For example:

```text
the person is still waiting
the user has not responded
the robot has not progressed
the object has not appeared
no one has entered the room for a while
the expected confirmation did not arrive
```

If:

```text
Δ = 0
```

this does not automatically mean the robot should act.

However, under some policies, persistent no-change can become meaningful.

For example:

```text
If the user is waiting and nothing changed for 10 seconds:
  ask whether help is needed.

If the robot expected a human response and no response arrived:
  repeat or rephrase.

If the task cannot progress and no new information arrived:
  ask clarification or escalate.
```

The key principle is:

```text
No novelty is not automatically a problem.
But under some policies, persistent no-change can become meaningful.
```

---

## Output HIFs

CNE may output a **ContextDeltaHIF**.

Example:

```json
{
  "type": "ContextDeltaHIF",
  "properties": {
    "changed_entities": ["door_12", "person_bob"],
    "changes": [
      {
        "entity": "door_12",
        "property": "state",
        "previous": "open",
        "current": "closed"
      },
      {
        "entity": "person_bob",
        "property": "location",
        "previous": "meeting_room",
        "current": "corridor"
      }
    ],
    "novelty_level": "high",
    "recommended_handlers": ["CEU", "SBR"]
  },
  "confidence": {
    "delta": 0.88
  },
  "processing_history": [
    "UnificationSG",
    "NoveltySG"
  ]
}
```

CNE may also output a no-change HIF when persistent lack of change is meaningful:

```json
{
  "type": "ContextDeltaHIF",
  "properties": {
    "delta": "none",
    "duration_without_change": "10s",
    "proactivity_candidate": true,
    "reason": "user_waiting_without_progress"
  },
  "confidence": {
    "stability": 0.93
  },
  "processing_history": [
    "UnificationSG",
    "NoveltySG"
  ]
}
```

---

## Why CNE Matters Before HRI_DB

CNE is a gate between continuous context flow and maintained memory.

Without CNE:

```text
every frame may become a database update
every small jitter may become a reasoning event
every repeated HIF may trigger expensive handlers
every stable context may be reprocessed unnecessarily
```

With CNE:

```text
only meaningful changes are promoted
stable context can remain stable
reasoning can focus on what changed
memory updates become more controlled
proactivity can be policy-driven
```

CNE helps prevent the HRI_DB from becoming a noisy mirror of every sensor update.

It allows HRI_DB to remain a maintained semantic model rather than a raw stream archive.

---

## SOCIAL Principles Supported

### S — Separated Contexts

CNE receives Human, Scene, and Robot Context as separate streams, then unifies them explicitly.

The separation remains visible.

The unified HIF is a constructed semantic object, not an implicit mixture.

### O — Open Declarative

The delta is represented declaratively.

It can state:

```text
what changed
what did not change
which entities were involved
what previous state was used
what confidence was assigned
which downstream handlers are recommended
```

### C — Clear Cognition

CNE makes it clear whether downstream reasoning was triggered by:

```text
a change
a lack of change
a threshold crossing
a policy-defined novelty rule
```

### I — Interpretable Gates

The Unification SG and Novelty SG are explicit gates.

They allow the architecture to explain why a context update was or was not promoted.

### A — Adaptive Autonomy

CNE can support proactive behavior, but only through policy.

The robot may respond to meaningful change or persistent no-change, depending on the context.

### L — Layered Validation

CNE does not decide final behavior.

It emits novelty and delta HIFs that later handlers can validate, store, query, or use for planning.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Sensitivity vs. stability | Low thresholds detect more change but may create noise |
| Freshness vs. cost | Frequent comparison improves freshness but increases computation |
| Proactivity vs. interruption | No-change triggers may be helpful or annoying |
| Unified context vs. modularity | Unified HIFs are useful, but the original context sources should remain traceable |
| Delta precision vs. explainability | Rich deltas are more useful but require better comparison logic |
| Short-term comparison vs. long-term memory | Comparing only to the previous frame may miss larger contextual shifts |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Too sensitive | Thresholds, smoothing, debounce windows |
| Not sensitive enough | Lower thresholds for high-risk entities |
| Context jitter | Temporal windows and confidence filtering |
| Wrong entity matching | Stronger tracking and identity resolution |
| Flood of deltas | Rate limiting and novelty aggregation |
| Missed social change | Downstream DSIE or explicit social novelty rules |
| Proactivity over-triggered | Policy gating and cooldowns |
| Stale previous context | Freshness metadata and baseline validation |
| Unified context loses source detail | Preserve provenance and source history |
| Δ = 0 misinterpreted | Require policy-specific no-change rules |

---

## Implementation Notes

A practical CNE implementation should define:

```text
which HIF types are unified
how time synchronization is performed
how current and previous context are matched
which fields are compared
which changes are meaningful
which thresholds apply
how confidence is computed
how long no-change must persist before it matters
which downstream handlers are recommended
how deltas are aggregated
how visualization receives the unified context
```

The novelty policy may be different for different entity types.

For example:

```text
door state:
  trigger on open/closed change

battery:
  trigger on threshold crossing

person location:
  trigger on room-level change or proximity change

gaze:
  trigger only during close interaction

object pose:
  trigger on movement beyond spatial threshold

silence:
  trigger only if a response was expected
```

---

## Relationship to HRI_DB Handler

CNE decides what changed.

HRI_DB Handler decides how maintained memory should react to that change.

```text
CNE:
  Is this new or meaningfully different?

HRI_DB Handler:
  Should we store, update, merge, query, validate, or ignore it?
```

This makes CNE the natural first pattern in the Context Management and Reasoning layer.

It filters context flow before deeper memory integration and reasoning begin.


---

# HRI_DB Handler Pattern

Source file: `design-patterns/context-management/hri-db-handler-pattern.md`

# HRI_DB Handler Pattern

## Intent

The **HRI_DB Handler Pattern** is a reusable HML pattern for managing the interaction between semantic HIFs and the maintained HRI_DB.

It is the controlled interface between incoming context and maintained interaction memory.

The input may be:

```text
Δ Unified Context HIF
query HIF
fact HIF
instruction HIF
memory update HIF
clarification request
```

The handler decides, according to policy and expert logic, whether to:

```text
query HRI_DB
update HRI_DB
merge with existing context
detect inconsistency
ask for clarification
acknowledge a successful update
return an answer
escalate to another handler
```

In short:

```text
semantic input HIF
  → controlled memory handler
  ↔ HRI_DB
  → answer / ack / clarification / update result HIF
```

This pattern is not merely a database access layer.

It is a semantic memory interface for HRI.

---

## Problem

After the Context Novelty Extractor, the architecture may receive a meaningful context delta.

But a delta alone does not say what should happen next.

For example:

```text
Bob moved to the corridor.
The user asked where Bob is.
A door is now closed.
The robot was told: remember that Alice prefers short answers.
A detected object contradicts the last known location.
```

Each of these inputs requires a different memory operation:

```text
store
update
query
merge
reject
ask clarification
answer
escalate
```

If every semantic cell accesses the database directly, the system becomes difficult to control.

It becomes unclear:

```text
who is allowed to update memory
which facts are trusted
which updates overwrite previous facts
which queries require clarification
which inconsistencies should be tolerated
which responses should be returned to the user
```

The HRI_DB Handler Pattern solves this by placing a controlled semantic interface between HIFs and HRI_DB.

---

## Context

Use this pattern when a robot must maintain a live interaction memory that is:

```text
queryable
editable
inspectable
updated over time
usable by humans
usable by symbolic code
usable by LLM-based reasoning
```

The pattern is especially useful when incoming HIFs may contain mixed semantic intentions:

```text
facts to remember
queries to answer
instructions to validate
context updates
detected inconsistencies
missing information
socially sensitive content
```

The handler provides a single place to decide how HRI_DB should react.

---

## HML Structure

The general structure is:

```text
Input HIF
  → Escalation Switch
      ↔ HRI_DB
  → problem?
      yes → clarification / query-person ST → HIF
      no  → ack / answer ST → HIF
```

<div align="center">

<img
  src="/social-hri-framework/img/hml/hri-db-handler-pattern.svg"
  alt="HRI_DB Handler Pattern with escalation switch, HRI_DB query update loop, and output HIFs for answer acknowledgement or clarification"
  width="100%"
/>

</div>

Place the SVG file here:

```text
docs/static/img/hml/hri-db-handler-pattern.svg
```

The public path used by the documentation is:

```text
/social-hri-framework/img/hml/hri-db-handler-pattern.svg
```

---

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF | HIF | Carries a context delta, fact, query, instruction, or memory update |
| Escalation Switch | ES / semantic cell | Selects whether to query, update, merge, escalate, or clarify |
| Policy | Policy artifact | Controls allowed memory operations and escalation rules |
| λ experts | Semantic operators | Provide specialized logic for update, query, validation, or reasoning |
| HRI_DB | Maintained semantic memory | Stores the current interaction model |
| Problem detector | Decision point | Detects ambiguity, inconsistency, missing data, or policy conflicts |
| Clarification ST | Semantic Transformer | Produces a clarification request when a problem is found |
| Ack / Answer ST | Semantic Transformer | Produces an acknowledgement, answer, or memory result |
| Output HIF | HIF | Carries the structured response downstream |

---

## Flow

A typical HRI_DB Handler flow is:

```text
1. A unified context delta, query, fact, or instruction arrives as a HIF.
2. The Escalation Switch inspects the HIF using policy and expert logic.
3. It decides whether to query, update, merge, validate, or escalate.
4. HRI_DB is queried or updated.
5. The result is checked for problems.
6. If a problem is found, the handler emits a clarification HIF.
7. If no problem is found, the handler emits an answer or acknowledgement HIF.
8. The output HIF preserves traceability.
```

The handler may also emit a failure or rejection HIF when the requested memory operation is not allowed.

For example:

```text
The requested update is not trusted.
The query is ambiguous.
The instruction refers to an unknown person.
The update contradicts higher-confidence memory.
The request would violate a privacy or agency policy.
```

---

## Why HRI_DB Is Not Just a Database

The HRI_DB may be implemented using ordinary data structures.

But the pattern is not about the storage technology.

The important question is not only:

```text
Where is the data stored?
```

The important HRI question is:

```text
How should semantic interaction memory be updated, queried, validated, and explained?
```

The pattern becomes important not because storing JSON is difficult, but because deciding what to store, update, ask, answer, or reject is an HRI reasoning problem.

---

## Dictionary / JSON-Based HRI_DB

In the consortium implementation, HRI_DB was represented using Python dictionaries and JSON-like structures.

This choice was useful because it supports:

```text
fast in-memory access
human readability
live editability
language-independent serialization
LLM-readable structured context
```

### Fast In-Memory Access

Python dictionaries provide fast access to entities, properties, and relations during runtime.

This is useful for live HRI, where many memory operations must happen quickly.

### Transparent and Editable

JSON-like structures are readable and editable by humans.

This matters because HRI_DB is not merely internal state.

It is part of the system's explainability and debugging surface.

A developer or authorized operator can inspect:

```text
people
objects
locations
preferences
social context
events
confidence
provenance
```

and understand what the robot currently believes.

### LLM-Friendly Structure

LLMs can often work effectively with structured JSON-like context.

This makes it possible to provide a bounded, inspectable subset of HRI_DB to an LLM-based expert for deep reasoning, explanation, or interpretation.

The LLM does not need to invent the world state.

It can reason over a structured and traceable representation.

---

## Why Not Just Use RAG?

RAG is useful for large, mostly static knowledge collections.

For example:

```text
manuals
policies
technical documents
archives
large corpora
slow-changing knowledge bases
```

HRI_DB serves a different role.

It maintains the current social-interaction state.

For example:

```text
where people were last seen
which object moved
which room is formal
what the user just asked
what the robot can currently do
which door is currently closed
which preference was stated during interaction
```

A useful distinction is:

```text
RAG retrieves from large knowledge collections.
HRI_DB maintains the current social-interaction state.
```

A JSON-like HRI_DB may be less scalable than vector retrieval for huge corpora.

But it provides:

```text
transparency
editability
live semantic control
schema-level validation
direct traceability
```

These qualities are often worth the tradeoff for dynamic HRI memory.

In many architectures, both are useful:

```text
HRI_DB:
  current interaction state

RAG:
  large external knowledge sources
```

---

## Input HIF Types

The handler may receive several kinds of input HIFs.

### Context Delta HIF

From CNE:

```text
The door changed from open to closed.
Bob moved from meeting room to corridor.
The robot battery dropped below a threshold.
```

### Query HIF

From a language interpreter or planning layer:

```text
Where is Bob?
Is the door to the meeting room closed?
What does Alice prefer?
Can the robot speak now?
```

### Fact HIF

From a user statement or perception update:

```text
Alice prefers short answers.
This room is used for formal meetings.
The red mug belongs to Bob.
```

### Instruction HIF

From the user or planner:

```text
Remember this.
Forget this.
Update the object location.
Mark this as uncertain.
Ask the user to clarify.
```

### Problem HIF

From another handler:

```text
inconsistent location
ambiguous person reference
missing object identity
policy violation
low-confidence memory conflict
```

---

## Output HIF Types

The handler may emit several types of output HIFs.

```text
MemoryAckHIF
QueryAnswerHIF
ClarificationRequestHIF
ContextUpdateHIF
InconsistencyHIF
MemoryWriteResultHIF
HandlerFailureHIF
```

### Example: Acknowledgement

```json
{
  "type": "MemoryAckHIF",
  "properties": {
    "status": "stored",
    "entity": "alice",
    "property": "preference",
    "value": "short_answers"
  },
  "processing_history": [
    "HRI_DBHandler"
  ]
}
```

### Example: Clarification Request

```json
{
  "type": "ClarificationRequestHIF",
  "properties": {
    "problem": "ambiguous_person_reference",
    "question": "Which Bob do you mean?"
  },
  "processing_history": [
    "HRI_DBHandler"
  ]
}
```

### Example: Query Answer

```json
{
  "type": "QueryAnswerHIF",
  "properties": {
    "query": "where_is",
    "target": "bob",
    "answer": "Bob was last seen near the kitchen.",
    "freshness": "2 minutes ago",
    "confidence": "medium"
  },
  "processing_history": [
    "HRI_DBHandler"
  ]
}
```

---

## Problem Detection

The pattern includes explicit problem detection.

A problem may be detected when:

```text
information is missing
a reference is ambiguous
a fact contradicts existing memory
confidence is too low
the requested operation is not allowed
the update is socially or ethically sensitive
the target entity does not exist
the schema is invalid
```

When a problem is detected, the handler should not silently guess.

It may emit:

```text
ClarificationRequestHIF
InconsistencyHIF
RejectedUpdateHIF
EscalationRequiredHIF
```

This makes the system safer and more explainable.

---

## Reuse Through Specialized Handlers

The HRI_DB Handler Pattern is intentionally generic.

The next pages specialize it for different reasoning needs.

Each specialized handler reuses the same structure:

```text
Input HIF
  → handler / escalation switch
  ↔ HRI_DB
  → answer / update / clarification / insight HIF
```

Examples include:

| Specialized Handler | Main Role |
|---|---|
| SBR — Spatial-Based Reasoning | Queries and reasons over map, object, human, and robot positions |
| CEU — Consistency Evaluator and Updater | Detects contradictions and manages memory updates |
| QSH — Query Social Handler | Answers user-facing social or contextual queries |
| DSIE — Deep Social Insight Extractor | Extracts higher-level social meaning |
| SIAH — System Integrity and Agency Handler | Protects agency, safety, privacy, and system boundaries |

This reuse demonstrates that the pattern is not just a technical database wrapper.

It is a reusable semantic reasoning interface.

---

## Why This Pattern Is Not Trivial

At first glance, the pattern may look like:

```text
input → database → output
```

But in HRI, the difficult part is not only storage.

The difficult part is deciding:

```text
What should be remembered?
What should be forgotten?
What should be overwritten?
What requires clarification?
What should remain uncertain?
What should be answerable to a user?
What should be hidden, rejected, or escalated?
What should be readable by an LLM?
What should be editable by a human?
```

The HRI_DB Handler Pattern provides a place to make these decisions explicit.

---

## SOCIAL Principles Supported

### S — Separated Contexts

The pattern separates:

```text
input HIF
memory state
query/update operation
problem detection
output HIF
```

This prevents raw context from directly mutating memory without an explicit semantic pathway.

### O — Open Declarative

A JSON-like HRI_DB is readable, editable, and inspectable.

Memory updates can be represented as declarative structures rather than hidden internal state.

### C — Clear Cognition

The pattern exposes whether the system:

```text
queried memory
updated memory
rejected an update
asked for clarification
detected inconsistency
returned an answer
```

### I — Interpretable Gates

The Escalation Switch is an explicit gate.

It can explain why a HIF was routed to query, update, clarification, or rejection.

### A — Adaptive Autonomy

The handler may escalate, ask, update, or refuse depending on policy and context.

It enables autonomy without uncontrolled memory mutation.

### L — Layered Validation

The handler does not directly execute behavior.

It produces memory, answer, clarification, or validation HIFs for later layers.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Transparency vs. scalability | JSON-like HRI_DB is readable but may not scale like vector retrieval over huge corpora |
| Editability vs. schema safety | Human-editable memory requires validation |
| Live updates vs. stability | Frequent updates may destabilize memory if not filtered |
| LLM readability vs. compactness | LLM-friendly structures may be verbose |
| Fast access vs. persistence | In-memory dictionaries are fast but require persistence strategy |
| General handler vs. specialized logic | A generic handler needs specialized sub-handlers for complex reasoning |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Overwriting useful memory | Preserve provenance, confidence, and update history |
| Storing noisy facts | Use CNE filtering and validation policies |
| Ambiguous queries | Emit ClarificationRequestHIF |
| Inconsistent updates | Route to CEU |
| LLM hallucination during reasoning | Use bounded JSON context and schema validation |
| DB grows without control | Add pruning, freshness, and forgetting policies |
| Human edits break schema | Use schema validation and edit review |
| Sensitive information stored incorrectly | Route through SIAH policies |
| Direct memory mutation bypasses handler | Require all writes to pass through handler cells |
| Query returns stale information | Include freshness and confidence metadata |

---

## Implementation Notes

A practical HRI_DB Handler implementation should define:

```text
HRI_DB schema
entity model
relation model
allowed memory operations
query language or access conventions
update policies
confidence model
provenance fields
freshness / forgetting model
clarification rules
schema validation
human edit policy
LLM access policy
persistence strategy
```

A minimal HRI_DB may include:

```text
robots
persons
objects
scene_elements
map_areas
events
preferences
social_context
task_state
robot_state
```

The exact schema is domain-specific.

The pattern only requires that HRI_DB remain explicit, inspectable, and accessed through controlled semantic handlers.

---

## Relationship to CNE

CNE decides what changed.

HRI_DB Handler decides how maintained memory should react to that change.

```text
CNE:
  Is this new or meaningfully different?

HRI_DB Handler:
  Should we store, update, merge, query, validate, or ignore it?
```

This makes HRI_DB Handler the natural second pattern in the Context Management and Reasoning layer.

---

## Transition to Specialized HRI_DB Handlers

The next patterns reuse this handler structure for specific reasoning roles:

```text
Spatial-Based Reasoning (SBR)
Consistency Evaluator and Updater (CEU)
Query Social Handler (QSH)
Deep Social Insight Extractor (DSIE)
System Integrity and Agency Handler (SIAH)
```

Each of these is a specialized way to operate over HRI_DB while preserving traceability, editability, and semantic control.


---

# HRI_DB Reasoning Handlers

Source file: `design-patterns/context-management/hri-db-reasoning-handlers.md`

# HRI_DB Reasoning Handlers

## Overview

The handlers in this page are specialized uses of the **HRI_DB Handler Pattern**.

They are not independent pattern families.

They reuse the same core structure:

```text
Input HIF
  → specialized handler / escalation switch
  ↔ HRI_DB
  → answer / update / clarification / insight / integrity HIF
```

They differ mainly in the kind of question they ask over the maintained interaction context.

```text
SBR:
  What object, place, person, or spatial relation is being referred to?

CEU:
  Is this new fact consistent with what we already know?

QSH:
  How should the robot answer a user-facing contextual query?

DSIE:
  What deeper social insight can be extracted from maintained context?

SIAH:
  Is the system healthy, bounded, and allowed to continue with its current level of autonomy?
```

This page presents all five as **handler variants** over the same HRI_DB memory interface.

The purpose is to show reuse, not to introduce five unrelated mechanisms.

---

## Shared Handler Logic

All handlers in this page follow the same general logic:

```text
1. Receive a HIF from CNE, TSP, ASL, planning, or another handler.
2. Interpret the HIF according to the handler's semantic role.
3. Query or update HRI_DB.
4. Use policy and λ experts to resolve uncertainty.
5. Emit a structured output HIF.
6. Ask for clarification, escalate, or reject when needed.
```

Typical output HIFs include:

```text
SpatialAnswerHIF
ObjectReferenceHIF
ContextUpdateHIF
ClarificationRequestHIF
QueryAnswerHIF
SocialInsightHIF
IntegrityDecisionHIF
EmergencyActionHIF
```

The shared idea is simple:

```text
Queries ask maintained context.
Facts attempt to modify maintained context.
Handlers decide whether, how, and under which policy this should happen.
```

---

## Spatial-Based Reasoning (SBR)

### Intent

**Spatial-Based Reasoning (SBR)** is a specialized HRI_DB handler for resolving spatial references.

It answers questions such as:

```text
Which object is the human pointing at?
What does "this" refer to?
Which bottle is closest to me?
Which object is behind Bob?
Is the door between the robot and the meeting room closed?
Where is the target object relative to the robot?
```

SBR is especially useful when natural language, gestures, gaze, head motion, or map-relative geometry must be combined.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/spatial-based-reasoning.svg"
  alt="Spatial-Based Reasoning handler retrieving objects from HRI_DB using pointing, spatial language, and map-relative context"
  width="100%"
/>

</div>


---

### How It Works

SBR receives a HIF that may contain spatial information extracted from a unified context delta.

For example:

```text
the user said: "this bottle is empty"
the user pointed with the right hand
the user's gaze direction was estimated
the user's head nod indicated a direction
the scene memory contains several previously detected bottles
```

The handler queries HRI_DB for spatial candidates.

It may then try to find an object that is geometrically compatible with the referring signal.

For example:

```text
find objects labeled "bottle"
retrieve their 3D positions
construct a 3D vector from the pointing hand / gaze / head direction
find objects whose positions intersect or align with that vector
rank candidates by angular distance, depth, confidence, and freshness
```

This allows the robot to understand references even when the target object is no longer visible in the current camera frame.

For example:

```text
The human points toward a bottle.
The bottle is outside the robot's current camera frame.
The bottle was detected earlier and is maintained in HRI_DB.
SBR resolves the reference to the correct object ID.
```

The output may include:

```text
referenced_object_id
candidate list
spatial confidence
reasoning trace
clarification need
```

---

### Escalation to LLM-Based Spatial Reasoning

SBR may use code-based geometry first.

However, it can also escalate to an LLM expert when the spatial reference is not covered by predefined code.

For example, the user may say:

```text
bring me the bottle closest to Bob
bring me the bottle closest to you
bring the object behind the chair
take the one under the table
```

If the rule-based code was not written for this exact phrasing, the handler may provide an LLM expert with a bounded JSON subset of relevant objects:

```json
{
  "query": "closest bottle to Bob",
  "objects": [
    {
      "id": "bottle_1",
      "label": "bottle",
      "position": [1.2, 0.5, 0.0]
    },
    {
      "id": "bottle_2",
      "label": "bottle",
      "position": [3.5, 2.1, 0.0]
    }
  ],
  "persons": [
    {
      "id": "bob",
      "position": [1.0, 0.4, 0.0]
    }
  ]
}
```

The LLM is not asked to hallucinate the world.

It reasons over bounded structured data.

This can also help when speech recognition or accent introduces ambiguity.

For example:

```text
The user says "battle" but points toward a bottle.
Nearby candidates contain bottles, not battles.
SBR may use the pointing geometry and object labels to infer that "bottle" was intended.
```

---

### Typical Outputs

```text
ObjectReferenceHIF
SpatialAnswerHIF
SpatialClarificationHIF
CandidateObjectsHIF
```

Example:

```json
{
  "type": "ObjectReferenceHIF",
  "properties": {
    "referring_expression": "this bottle",
    "resolved_object_id": "bottle_3",
    "resolution_method": "pointing_vector_intersection",
    "candidate_count": 4,
    "confidence": 0.86
  },
  "processing_history": [
    "SBR"
  ]
}
```

If the result is ambiguous:

```json
{
  "type": "ClarificationRequestHIF",
  "properties": {
    "problem": "multiple_spatial_candidates",
    "question": "Which bottle do you mean?"
  },
  "processing_history": [
    "SBR"
  ]
}
```

---

## Consistency Evaluator and Updater (CEU)

### Intent

**Consistency Evaluator and Updater (CEU)** is a specialized HRI_DB handler for checking whether a new fact or evidence is consistent with maintained memory.

It answers questions such as:

```text
Can this new fact be stored safely?
Does it contradict what we already know?
Should we update, merge, mark uncertain, or ask for clarification?
```

CEU handles facts, evidence, and memory updates.

It is the main handler for controlled HRI_DB mutation.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/consistency-evaluator-updater.svg"
  alt="Consistency Evaluator and Updater checking facts or evidence against HRI_DB and producing acknowledgement or clarification HIFs"
  width="100%"
/>

</div>


---

### How It Works

CEU receives a fact or evidence HIF.

For example:

```text
Alice prefers short answers.
The red mug belongs to Bob.
The door is now closed.
The chair was moved to the corridor.
A person is now identified as Alice.
```

The handler checks the new fact against:

```text
short-term memory
session context
HRI_DB
common knowledge available to its expert
policy constraints
```

If the fact is consistent, CEU updates HRI_DB and emits an acknowledgement.

If the fact is inconsistent, CEU does not necessarily ask the user immediately.

Instead, it emits a structured HIF describing the problem.

A later HRI layer may decide how and when to ask the user in a socially appropriate way.

For example:

```text
The robot may ask now.
The robot may wait until the conversation pauses.
The robot may ask a less confrontational clarification.
The robot may mark both hypotheses as uncertain.
```

---

### Consistency Outcomes

CEU may decide to:

```text
accept and store
accept but mark low confidence
merge with existing entity
update existing memory
create a new hypothesis
reject the update
ask for clarification
route to SIAH for policy review
```

Example:

```json
{
  "type": "ContextUpdateHIF",
  "properties": {
    "entity": "door_12",
    "property": "state",
    "previous": "open",
    "current": "closed",
    "update_status": "accepted",
    "confidence": 0.91
  },
  "processing_history": [
    "CEU"
  ]
}
```

If inconsistent:

```json
{
  "type": "InconsistencyHIF",
  "properties": {
    "entity": "alice",
    "property": "preference",
    "existing_value": "short_answers",
    "new_value": "detailed_explanations",
    "resolution": "clarification_required"
  },
  "processing_history": [
    "CEU"
  ]
}
```

---

## Query Social Handler (QSH)

### Intent

**Query Social Handler (QSH)** is a specialized HRI_DB handler for answering user-facing contextual questions.

It is different from SBR.

SBR specializes in resolving spatial references and spatial reasoning.

QSH handles broader contextual queries once the relevant references have been resolved.

For example:

```text
User: "Is this bottle empty?"
SBR: resolves "this bottle" to bottle_3.
QSH: checks HRI_DB and answers whether bottle_3 is empty.
```

QSH turns maintained context into an interaction-appropriate answer.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/query-social-handler.svg"
  alt="Query Social Handler answering questions over short-term memory session context and HRI_DB using a tiered semantic cache"
  width="100%"
/>

</div>


---

### HRI_DB TSC Reuse

QSH reuses the idea of a **Tiered Semantic Cache / Proxy**.

It may check:

```text
short-term memory
session context window
HRI_DB
larger external sources if needed
```

This lets the system answer many questions quickly from recent context before escalating to deeper memory or larger reasoning.

For example:

```text
Question:
  "Did I just tell you where Bob is?"

Short-term memory:
  yes, user said Bob is in the kitchen

QSH answer:
  "Yes, you told me Bob is in the kitchen."
```

Or:

```text
Question:
  "Is this bottle empty?"

SBR:
  resolves "this bottle" to bottle_3

QSH:
  checks bottle_3 properties in HRI_DB

Answer:
  "I believe this bottle is empty."
```

---

### Typical Query Types

QSH may answer:

```text
where is X?
who is X?
what did I ask you to remember?
is this object empty / available / mine?
what does the robot know about this room?
what is the current social context?
can you do this now?
why did you not do that?
```

It may emit:

```text
QueryAnswerHIF
UnknownAnswerHIF
ClarificationRequestHIF
SociallyAdjustedAnswerHIF
```

Example:

```json
{
  "type": "QueryAnswerHIF",
  "properties": {
    "query": "is_empty",
    "target": "bottle_3",
    "answer": "unknown",
    "reason": "object identified but fullness property is unavailable",
    "suggested_response": "I found the bottle, but I do not know whether it is empty."
  },
  "processing_history": [
    "SBR",
    "QSH"
  ]
}
```

---

## Deep Social Insight Extractor (DSIE)

### Intent

**Deep Social Insight Extractor (DSIE)** is a specialized HRI_DB handler that runs as an independent background process.

It periodically or conditionally queries HRI_DB and updates it with deeper social insights.

Unlike SBR, CEU, or QSH, DSIE does not need to wait for a direct user query.

It can operate in the background.

Its purpose is to detect social patterns that require attention, adaptation, or future action.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/deep-social-insight-extractor.svg"
  alt="Deep Social Insight Extractor running as a background process that updates HRI_DB and emits insight HIFs when attention or action is required"
  width="100%"
/>

</div>


---

### Example Experts

DSIE may include experts such as:

```text
λ Social context classifier
λ Person availability estimator
λ Person pattern detector
λ Social reinforcement learner
```

These experts may ask questions such as:

```text
Is this a formal or informal setting?
Is the person available for interaction?
Is the person repeatedly ignoring the robot?
Is the user becoming frustrated?
Which robot gesture worked best for this user?
Which response style received positive reinforcement?
```

The **Social Reinforcement Learner** may learn patterns such as:

```text
Alice responds better to short confirmations in the morning.
Bob prefers visual gestures over spoken explanations.
A small nod worked better than a spoken acknowledgement in this setting.
The robot should avoid long explanations in the kitchen during busy hours.
```

These insights are stored in HRI_DB with confidence, provenance, and freshness.

---

### Outputs

DSIE may update HRI_DB quietly.

But when an insight requires attention or action, it emits a HIF.

For example:

```json
{
  "type": "SocialInsightHIF",
  "properties": {
    "insight": "person_may_be_waiting_for_help",
    "person": "alice",
    "evidence": [
      "standing near robot for 18s",
      "repeated gaze toward robot",
      "no task progress"
    ],
    "recommended_attention": "medium",
    "confidence": 0.76
  },
  "processing_history": [
    "DSIE"
  ]
}
```

Or:

```json
{
  "type": "SocialPreferenceInsightHIF",
  "properties": {
    "person": "bob",
    "learned_preference": "prefers_short_nonverbal_acknowledgements",
    "context": "meeting_room",
    "evidence": "positive_response_to_nod",
    "confidence": 0.68
  },
  "processing_history": [
    "DSIE"
  ]
}
```

DSIE outputs should be treated as hypotheses, not facts.

They should preserve confidence and traceability.

---

## System Integrity and Agency Handler (SIAH)

### Intent

**System Integrity and Agency Handler (SIAH)** is a specialized background handler responsible for system-level integrity, adjustable autonomy, and safety-related agency control.

Like DSIE, it may operate independently in the background.

Unlike DSIE, it focuses on the robot's internal health, resource state, safety envelope, and allowed autonomy level.

SIAH may receive input from:

```text
robot resources
internal sensors
anomaly detectors
diagnostic experts
prognostic experts
HRI_DB
Robot Context HIFs
```

It can update HRI_DB, emit high-priority HIFs, or trigger emergency protocols.

---

### Structure

<div align="center">

<img
  src="/social-hri-framework/img/hml/system-integrity-agency-handler.svg"
  alt="System Integrity and Agency Handler monitoring robot health integrity and autonomy state while updating HRI_DB and emitting high-priority HIFs"
  width="100%"
/>

</div>


---

### Example Experts

SIAH may include experts such as:

```text
λ Anomaly Detector
λ Diagnosis Extractor
λ Prognosis Evaluator
λ Autonomy Adjuster
```

These experts may ask:

```text
Is the robot in a healthy state?
Is a sensor failing?
Is localization becoming unreliable?
Is battery low enough to reduce autonomy?
Is the camera blocked?
Is motion degraded?
Should the robot lower its autonomy level?
Should the robot stop immediately?
```

---

### Dual Output Strategy

SIAH has a dual output strategy.

First, it continuously updates HRI_DB with integrity and autonomy state:

```text
battery state
CPU / memory / disk state
sensor health
localization quality
actuator health
autonomy level
diagnostic state
prognostic risk
```

Second, it may emit high-priority HIFs when immediate attention or action is required.

For example:

```text
EmergencyStopHIF
AutonomyReductionHIF
IntegrityWarningHIF
SensorFailureHIF
SafetyEscalationHIF
```

Example:

```json
{
  "type": "AutonomyReductionHIF",
  "properties": {
    "previous_autonomy_level": 4,
    "new_autonomy_level": 2,
    "reason": "localization_confidence_low",
    "required_behavior": "avoid_autonomous_navigation"
  },
  "processing_history": [
    "SIAH"
  ]
}
```

Emergency case:

```json
{
  "type": "EmergencyStopHIF",
  "properties": {
    "reason": "motion_integrity_violation",
    "priority": "critical",
    "action": "stop_immediately"
  },
  "processing_history": [
    "SIAH"
  ]
}
```

---

### Why SIAH Matters

SIAH decouples system-level health and safety monitoring from functional task logic.

A robot should not promise, plan, or execute actions without considering its own integrity.

For example:

```text
If the camera is covered:
  the robot should not claim visual awareness.

If battery is low:
  the robot should reduce long-range commitments.

If localization is unstable:
  the robot should avoid precise navigation.

If motion integrity is compromised:
  the robot should stop or reduce autonomy.
```

This makes SIAH the robot's internal integrity and autonomy regulator.

It provides the transparency needed to understand why a robot refused a task, lowered autonomy, or triggered a safety protocol.

---

## Combined Query and Fact Handling

The specialized handlers may be composed.

For example, CNE may extract a context delta.

The system may then decide whether spatial retrieval is needed.

If it is needed, SBR resolves the spatial reference first.

The result can then be routed to CEU, QSH, or another handler.

<div align="center">

<img
  src="/social-hri-framework/img/hml/hri-db-query-fact-handling.svg"
  alt="Combined query and fact handling over HRI_DB showing how CNE SBR CEU QSH DSIE and SIAH may connect"
  width="100%"
/>

</div>


---

### Example: Pointing to a Bottle and Asking a Question

```text
User:
  "Is this bottle empty?"

Human Context:
  hand pointing vector
  speech transcript

Scene Context:
  known objects
  object positions
  recent detections

CNE:
  extracts a meaningful query event

SBR:
  resolves "this bottle" to bottle_3

QSH:
  checks HRI_DB for bottle_3 properties

Output:
  answer HIF or clarification HIF
```

If the target bottle is outside the current camera frame, SBR may still resolve it from maintained memory.

If the fullness of the bottle is unknown, QSH may answer honestly:

```text
"I know which bottle you mean, but I do not know whether it is empty."
```

---

### Example: New Fact About an Object

```text
User:
  "This bottle is empty."

SBR:
  resolves "this bottle" to bottle_3

CEU:
  checks whether this update is consistent with HRI_DB

If consistent:
  update HRI_DB
  emit acknowledgement HIF

If inconsistent:
  emit inconsistency or clarification HIF
```

The clarification HIF does not mean the robot must interrupt immediately.

A later HRI layer decides how to ask in a socially appropriate way.

---

## Design Note

This page groups SBR, CEU, QSH, DSIE, and SIAH together because they are all specialized uses of the HRI_DB Handler Pattern.

They reuse the same memory interface.

They differ in purpose:

| Handler | Specialized purpose |
|---|---|
| SBR | Resolve spatial references and map-relative relations |
| CEU | Check consistency and update memory |
| QSH | Answer user-facing contextual queries |
| DSIE | Extract background social insights |
| SIAH | Maintain system integrity and autonomy state |

The value of the pattern language is that these handlers can differ semantically while still sharing the same architectural grammar.

---

## Transition to Validation for Planning

The handlers in this page maintain and reason over context.

The next patterns prepare that maintained context for planning.

```text
Task Prerequisite Resolver (TPR):
  Do we have enough context to act?

Social Convention Validator (SCV):
  Is the action socially appropriate in this context?
```

Together, TPR and SCV form the bridge from Context Management and Reasoning toward Social Planning and Behavioral Synthesis.


---

# Social Convention Validator (SCV)

Source file: `design-patterns/context-management/social-convention-validator.md`

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


---

# Task Prerequisite Resolver (TPR)

Source file: `design-patterns/context-management/task-prerequisite-resolver.md`

# Task Prerequisite Resolver (TPR)

## Intent

The **Task Prerequisite Resolver (TPR)** is an HRI design pattern for managing tasks or instructions that are not yet executable because some required information, context, timing, or capability condition is missing.

It allows the robot to hold an incomplete intention without prematurely failing the interaction.

In short:

```text
Task / Instruction HIF
  → detect missing prerequisites
  → query context or HRI_DB
  → either produce an executable task
     or hold the task in a pending queue
```

The pattern is especially important in human-robot interaction because humans rarely provide complete, formal, machine-ready task specifications.

They often say things like:

```text
Bring this bottle to Bob.
Put it over there.
Remind me when Alice arrives.
Tell him when he comes back.
Do it later.
```

These instructions may be understandable to another human because humans can infer missing context, wait for later facts, and ask clarifying questions.

TPR gives the robot a structured way to do the same.

---

## Problem

Human instructions are often:

```text
partial
ambiguous
context-dependent
time-dependent
dependent on information that is not yet available
dependent on the robot's current capability state
```

For example:

```text
Bring this bottle to Bob.
```

This instruction may require several prerequisites:

```text
Which bottle?
Where is the bottle?
Who is Bob?
Where is Bob?
Is Bob available?
Can the robot move now?
Is the path clear?
Is the instruction still relevant?
```

Without TPR, a robot may either:

```text
fail with "I do not understand"
execute the wrong task
ask too many immediate clarification questions
ignore the instruction
attempt unsafe execution
```

TPR manages the **logic of readiness**.

It determines whether a task is sufficiently specified and contextually ready to be passed to planning or execution.

---

## Context

Use TPR when the system receives tasks, goals, or instructions that may require additional information before execution.

Typical sources include:

```text
language interpretation
user instruction handling
planner-generated subgoals
pending tasks from previous interactions
context-triggered tasks
socially motivated goals
```

TPR is useful when tasks may depend on:

```text
missing people
missing object references
unknown locations
unresolved spatial references
future events
robot capability state
scene state
social context
timing constraints
```

---

## HML Structure

The abstract TPR pattern includes:

```text
prioritized task queue
Task HIF
additional information extractor ST
Query Social Handler
pending task handler ST
pending task queue
Executable Task HIF
```

<div align="center">

<img
  src="/social-hri-framework/img/hml/task-prerequisite-resolver.svg"
  alt="Task Prerequisite Resolver abstract pattern showing missing information extraction, query handling, pending task queue, and executable task output"
  width="100%"
/>

</div>


---

## Flow

A typical TPR flow is:

```text
1. A task or instruction enters as a HIF.
2. The task is placed in or compared against a prioritized task queue.
3. An Additional Information Extractor ST checks whether required fields are missing.
4. If information is missing, the pattern queries HRI_DB through QSH or related handlers.
5. If the missing information is found, the task is completed.
6. If the information is still missing, the task is moved to a pending task queue.
7. A pending task handler tracks task priority, decay, expiration, and re-evaluation.
8. New facts may reactivate pending tasks.
9. When all prerequisites are satisfied, TPR emits an Executable Task HIF.
```

This makes the pattern stateful.

It does not only check a task once.

It can keep the task alive until the missing prerequisites are resolved or the task becomes irrelevant.

---

## Example — Instruction Handler TPR

A concrete use of TPR is instruction handling.

For example, the user may say:

```text
Bring this bottle to Bob.
```

After language interpretation and spatial reference resolution, this may become an instruction HIF with a missing target location:

```json
{
  "instruction": "pick_and_place",
  "item": {
    "ID": 5,
    "type": "bottle",
    "location": [10, 11, 3]
  },
  "target": {
    "ID": 8,
    "type": "Person",
    "name": "Bob",
    "location": "?"
  }
}
```

The item is known.

The target person is known.

But Bob's location is missing.

TPR detects the missing prerequisite:

```text
target.location
```

It may then ask QSH:

```text
Where is Bob?
```

If QSH returns a miss, the task cannot yet become executable.

TPR may produce a pending task and a clarification need.

<div align="center">

<img
  src="/social-hri-framework/img/hml/instruction-handler-tpr.svg"
  alt="Instruction Handler TPR example showing how an incomplete instruction is held until missing information is resolved"
  width="100%"
/>

</div>



---

## Fact-Triggered Resumption

One of the key features of TPR is **fact-triggered resumption**.

A task that cannot be executed now may become executable later.

For example, the task may wait because Bob's location is unknown.

Later, a new fact enters HRI_DB:

```text
Bob is in the kitchen.
```

This new fact may trigger the pending task handler to re-evaluate waiting tasks.

The original task can now be completed:

```json
{
  "instruction": "pick_and_place",
  "item": {
    "ID": 5,
    "type": "bottle",
    "location": [10, 11, 3]
  },
  "target": {
    "ID": 8,
    "type": "Person",
    "name": "Bob",
    "location": {
      "loc": [20, 15, 0],
      "name": "kitchen"
    }
  }
}
```

The output can now become:

```text
Executable Instruction HIF
```

This is what makes TPR more than a simple missing-field checker.

It manages the lifecycle of incomplete tasks.

---

## Clarification Is Not Immediate Speech

When TPR detects missing information, it should not necessarily force the robot to ask the user immediately.

Instead, it may emit a semantic HIF such as:

```text
ClarificationNeededHIF
MissingPrerequisiteHIF
PendingTaskHIF
```

Later layers decide how to handle it.

For example, the system may decide to:

```text
ask the user now
wait for a better moment
search HRI_DB first
ask another person
use SBR to resolve a spatial reference
let the task remain pending
cancel the task after timeout
ask in a socially softer way
```

This preserves the separation between reasoning and behavior.

TPR identifies readiness gaps.

It does not dictate the final interaction style.

---

## Pending Task Queue

The pending task queue is the part of the pattern that prevents incomplete tasks from being lost.

It may store:

```text
task HIF
missing prerequisites
priority
creation time
last evaluation time
decay factor
expiration policy
required facts
trigger conditions
source user
social sensitivity
```

The queue is prioritized.

It is also time-aware.

A task may become less relevant over time.

For example:

```text
Bring Bob coffee.
```

If Bob leaves the building or the instruction is old, the task may no longer be appropriate.

The pending task handler may apply:

```text
task decay factor
expiration policy
relevance checks
priority updates
fact-triggered re-evaluation
```

This prevents **instruction bloat**, where old incomplete tasks accumulate forever.

---

## What TPR Can Resolve

TPR can manage several kinds of missing prerequisites.

### Missing Entity Reference

```text
"Bring this to Bob."
```

Missing:

```text
this = ?
Bob = which person?
```

Possible handlers:

```text
SBR
QSH
CEU
```

### Missing Location

```text
"Bring the bottle to Bob."
```

Missing:

```text
Bob's location
bottle location
reachable path
```

Possible handlers:

```text
QSH
SBR
Scene Context
Robot Context
```

### Missing Timing Condition

```text
"Remind me when Alice arrives."
```

Missing:

```text
Alice has not arrived yet
```

TPR keeps the task pending until a new fact indicates that Alice arrived.

### Missing Capability

```text
"Go to the meeting room."
```

Missing or blocking condition:

```text
motion unavailable
battery too low
localization uncertain
path blocked
```

Possible handlers:

```text
Robot Context
SIAH
SCV
```

### Missing Social Condition

```text
"Interrupt the meeting and tell Bob I need him."
```

Missing or blocking condition:

```text
is interruption socially appropriate?
is Bob available?
is the room formal?
```

Possible handlers:

```text
DSIE
SCV
QSH
```

---

## Relationship to Other Handlers

TPR is a bridge pattern.

It uses other Context Management handlers to resolve prerequisites.

### Relationship to QSH

QSH answers contextual questions.

TPR uses QSH to complete missing task slots.

```text
QSH:
  Where is Bob?

TPR:
  I need Bob's location before this instruction can become executable.
```

### Relationship to SBR

SBR resolves spatial references.

TPR uses SBR when a missing prerequisite depends on spatial meaning.

```text
"this bottle"
"that door"
"the object closest to Bob"
"the place over there"
```

### Relationship to CEU

CEU checks whether new facts can update memory.

TPR may depend on CEU when a user gives a missing fact.

For example:

```text
User:
  Bob is in the kitchen.

CEU:
  checks consistency and updates HRI_DB.

TPR:
  re-evaluates pending tasks involving Bob.
```

### Relationship to SIAH

SIAH protects system integrity and autonomy.

TPR may use Robot Context or SIAH outputs to decide whether a task is currently executable.

For example:

```text
motion system degraded
battery too low
speaker unavailable
localization uncertain
```

### Relationship to SCV

TPR checks whether the task is ready.

SCV checks whether the task is socially appropriate.

A task may be fully specified but still socially invalid.

---

## Outputs

TPR may emit several kinds of output HIFs.

```text
ExecutableTaskHIF
ExecutableInstructionHIF
PendingTaskHIF
MissingPrerequisiteHIF
ClarificationNeededHIF
TaskExpiredHIF
TaskReactivatedHIF
TaskRejectedHIF
```

### Example: Pending Task

```json
{
  "type": "PendingTaskHIF",
  "properties": {
    "task": "bring_object_to_person",
    "item_id": "bottle_5",
    "target_person": "bob",
    "missing_prerequisites": [
      "target.location"
    ],
    "status": "waiting_for_information",
    "decay_factor": 0.8
  },
  "processing_history": [
    "TPR"
  ]
}
```

### Example: Executable Task

```json
{
  "type": "ExecutableTaskHIF",
  "properties": {
    "task": "bring_object_to_person",
    "item_id": "bottle_5",
    "item_location": [10, 11, 3],
    "target_person": "bob",
    "target_location": [20, 15, 0],
    "target_location_name": "kitchen"
  },
  "processing_history": [
    "TPR"
  ]
}
```

### Example: Clarification Need

```json
{
  "type": "ClarificationNeededHIF",
  "properties": {
    "task": "bring_object_to_person",
    "missing_prerequisite": "target.location",
    "suggested_question": "Where is Bob?"
  },
  "processing_history": [
    "TPR"
  ]
}
```

---

## Why This Pattern Matters

TPR helps the robot move beyond command-response behavior.

Without TPR, the robot may fail whenever an instruction is incomplete.

With TPR, the robot can:

```text
hold an incomplete intention
identify what is missing
search memory
ask for clarification when needed
wait for future facts
resume tasks when missing information arrives
expire old tasks
avoid executing under-specified instructions
```

This is essential for agentic autonomy.

The robot becomes able to manage its own information gaps.

---

## SOCIAL Principles Supported

### S — Separated Contexts

TPR separates:

```text
task intent
missing information
query process
pending state
executable task output
```

This prevents incomplete instructions from being treated as executable commands.

### O — Open Declarative

Pending and executable tasks are represented as explicit HIFs.

The missing fields are visible.

### C — Clear Cognition

The system can explain why a task is pending:

```text
Bob's location is missing.
The object reference is ambiguous.
The robot cannot move right now.
The task has expired.
```

### I — Interpretable Gates

The Missing Information Extractor ST and Pending Tasks Handler ST are explicit gates.

They decide whether a task is ready, pending, expired, or in need of clarification.

### A — Adaptive Autonomy

The robot can continue managing tasks over time instead of requiring complete commands upfront.

It can also reduce autonomy when prerequisites are not satisfied.

### L — Layered Validation

TPR does not execute the task.

It produces a planning-ready task HIF that can still be checked by SCV, social planning, and actuation layers.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Robustness vs. complexity | Holding incomplete tasks increases robustness but adds state management |
| Proactivity vs. annoyance | Clarification requests can help or interrupt |
| Persistence vs. stale tasks | Pending tasks must decay or expire |
| Autonomy vs. user control | The robot may resume a task later, so policies must govern when this is allowed |
| Completeness vs. speed | Waiting for complete information may delay execution |
| Generality vs. schema design | TPR needs task schemas with explicit prerequisites |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Pending queue grows forever | Decay factor, expiration policy, relevance checks |
| Robot asks too many clarifications | Batch questions, cooldowns, SCV before asking |
| Task becomes irrelevant | Freshness and relevance checks |
| Wrong missing slot detected | Schema validation and task templates |
| Incorrect prerequisite completion | Confidence thresholds and CEU checks |
| User gives contradictory clarification | Route to CEU |
| Missing information requires spatial reference | Route to SBR |
| Missing information requires user-facing query | Route to QSH |
| Task is complete but unsafe | Route to SIAH or SCV |
| Resumed task surprises user | Notify or reconfirm before execution |

---

## Implementation Notes

A practical TPR implementation should define:

```text
task schemas
mandatory prerequisites
optional prerequisites
missing-field detection logic
task priority policy
task decay factor
expiration policy
pending queue structure
fact-triggered re-evaluation rules
clarification generation policy
relationship to HRI_DB
relationship to QSH / SBR / CEU
conditions for executable output
conditions for rejection
```

Each task type should define what must be known before it becomes executable.

For example:

```text
bring_object_to_person:
  required:
    object_id
    object_location
    target_person_id
    target_location
    motion_available

  optional:
    preferred_delivery_style
    social_context
    urgency
```

---

## Relationship to Planning

TPR is not a full planner.

It does not decide the complete action sequence.

Instead, it determines whether a task is ready for planning.

```text
TPR output:
  executable task HIF

Planner output:
  selected action plan / behavior sequence / execution strategy
```

This keeps task readiness separate from behavior synthesis.

---

## Transition to SCV

TPR determines whether a task is sufficiently specified and contextually ready.

The next pattern, **Social Convention Validator (SCV)**, determines whether performing that task is socially appropriate.

```text
TPR:
  Can this task be planned?

SCV:
  Should this task be performed in this social context?
```

Together, TPR and SCV form the bridge from Context Management and Reasoning into Social Planning and Behavioral Synthesis.


---

# HRI Design Patterns Overview

Source file: `design-patterns/design-patterns-overview.md`

# HRI Design Patterns Overview

## Purpose

The HRI Design Patterns define reusable architectural solutions for socially intelligent Human-Robot Interaction systems.

They are not implementations, APIs, ROS graphs, or fixed software modules.

They are reusable HML-based architectural compositions that describe how HIFs, Semantic Cells, Semantic Operators, policies, state structures, queues, gates, and executors may be combined to solve recurring HRI design problems.

In this documentation, each pattern should be understood as:

~~~text
a reusable semantic architecture for a recurring HRI problem
~~~

rather than:

~~~text
a required implementation recipe
~~~

This distinction is important.

The concrete examples in this documentation illustrate possible compositions. They do not claim that every robot must implement the pattern in exactly the same way.

---

# Relationship to SOCIAL and HML

The design patterns are the third layer of the framework.

~~~text
SOCIAL principles
      ↓
HML modeling language
      ↓
HRI Design Patterns
      ↓
Concrete HRI architectures
~~~

- **SOCIAL** defines the architectural commitments.
- **HML** defines the modeling language and visual grammar.
- **HRI Design Patterns** define reusable ways to compose HML primitives.
- **Concrete architectures** instantiate those patterns for a specific robot, task, deployment, or research system.

The patterns therefore serve as the bridge between abstract principles and concrete HRI architecture.

---

# What Counts as a Pattern?

A design pattern should satisfy four criteria.

## 1. It Solves a Recurring HRI Problem

The pattern should address a problem that appears repeatedly in socially intelligent robotics.

Examples include:

- synchronizing multiple perceptual experts
- managing limited attention or compute resources
- resolving intent with bounded latency
- learning a user-specific gesture
- detecting meaningful context changes
- updating a transparent semantic world model
- resolving incomplete tasks
- validating social acceptability
- styling an action for a social context

## 2. It Can Be Expressed in HML

A pattern should be representable using HML primitives:

- HIFs
- HC / ST / SG / ES / HE cells
- λ operators
- policies
- decision diamonds
- state structures
- queues
- caches
- HRI_DB
- semantic objects

## 3. It Is Reusable Across Layers

A pattern may be introduced in one cognitive layer but reused later.

For example, a Synchronous Multi-Extractor may first appear in Human Context processing, but the same pattern can also be reused for Scene Context extraction.

## 4. It Has Tradeoffs

A pattern is not merely a diagram.

It should expose engineering tradeoffs such as:

- latency
- robustness
- resource cost
- explainability
- synchronization complexity
- policy complexity
- risk of stale state
- risk of over-escalation
- failure behavior

---

# Pattern Container Notation

When a diagram needs to show that several HML elements form a reusable pattern, the pattern may be wrapped in a clipped-corner container.

This convention follows the presentation style used for layer examples.

The clipped container means:

~~~text
The enclosed elements form one reusable design pattern or pattern instance.
~~~

It does not mean:

~~~text
The enclosed elements must be implemented as one software component.
~~~

<div align="center">

<svg width="100%" viewBox="0 0 1180 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pattern-container-title pattern-container-desc">
  <title id="pattern-container-title">Pattern Container Notation</title>
  <desc id="pattern-container-desc">
    A real HML composition can be wrapped as a reusable pattern instance.
    The wrapped composition may then be referenced by a shorthand clipped-corner container such as SME.
  </desc>

  <defs>
    <marker id="arrow-pattern-container" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Input / Output -->
  <rect x="20" y="145" width="120" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="80" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="735" y="145" width="125" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="797.5" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <!-- Dashed clipped-corner pattern instance -->
  <path
    d="M 180 35
       L 650 35
       L 675 60
       L 675 280
       L 205 280
       L 180 255
       Z"
    fill="none"
    stroke="#d97706"
    strokeWidth="2"
    strokeDasharray="8 6"
  />

  <text x="427.5" y="64" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#d97706">Pattern Instance</text>
  <text x="427.5" y="86" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">example of a reusable wrapped HML composition</text>

  <!-- Inner pattern: SME example -->
  <!-- ST boxes -->
  <rect x="285" y="98" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="123" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₁</text>

  <rect x="285" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₂</text>

  <rect x="285" y="218" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="243" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₃</text>

  <!-- SG -->
  <rect x="510" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="556" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <!-- arrows from input to split -->
  <line x1="140" y1="167" x2="235" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-container)" />

  <!-- split to three STs -->
  <line x1="235" y1="167" x2="255" y2="167" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="167" x2="255" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="119" x2="277" y2="119" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="255" y1="167" x2="277" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="255" y1="167" x2="255" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="239" x2="277" y2="239" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <!-- STs to SG -->
  <line x1="377" y1="119" x2="445" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="119" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="377" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <line x1="377" y1="239" x2="445" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="239" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-container)" />

  <!-- SG to Output -->
  <line x1="602" y1="179" x2="727" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-container)" />

  <!-- small caption inside -->
  <text x="430" y="272" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">example wrapped composition: ST₁ / ST₂ / ST₃ → SG</text>

  <!-- equals sign -->
  <text x="905" y="180" textAnchor="middle" fontSize="42" fontFamily="Arial, sans-serif" fill="currentColor">=</text>

  <!-- Solid clipped-corner shorthand container -->
  <path
    d="M 955 105
       L 1115 105
       L 1135 125
       L 1135 225
       L 975 225
       L 955 205
       Z"
    fill="none"
    stroke="#d97706"
    strokeWidth="2"
  />

  <text x="1045" y="155" textAnchor="middle" fontSize="28" fontFamily="Arial, sans-serif" fill="#d97706">SME</text>
  <text x="1045" y="180" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">pattern shorthand</text>
</svg>

</div>


Use this container sparingly.

It is most useful in layer examples, where the same diagram contains several reusable patterns connected together.

---

# Documentation Strategy

The design pattern documentation follows a layer-oriented reading path while preserving each pattern as a reusable catalog entry.

This gives two complementary views.

## 1. Layer-Oriented Reading Path

The reader can follow the construction of a socially intelligent HRI architecture layer by layer:

~~~text
Human Context
Scene Context
Robot Context
Context Management and Reasoning
Social Planning and Behavioral Synthesis
Actuation
~~~

This path explains why each pattern appears, what role it plays in a larger architecture, and how later layers reuse earlier patterns.

## 2. Reusable Pattern Catalog

Each pattern is documented as an independent reusable architectural solution.

This allows a designer to ask:

~~~text
Which pattern should I use to solve this specific HRI problem?
~~~

For example:

- Use SME when several experts must process the same source while preserving temporal alignment.
- Use EAG when attention or compute must be allocated according to social relevance.
- Use TSC/TSP when language or intent resolution should be fast, cached, and escalation-aware.
- Use CNE when the system should reason about meaningful change rather than all raw state.
- Use TPR when a task is meaningful but not yet executable.
- Use SCV when physically possible actions must be checked for social acceptability.

---

# Cognitive Layer Map

The following organization is recommended for the documentation.

## Human Context

Human Context introduces patterns that convert raw human-facing signals into structured human context.

Introduced patterns:

- **Synchronous Multi-Extractor (SME)**
- **Elastic Attention Governor (EAG)**
- **Tiered Semantic Cache / Proxy (TSC/TSP)**
- **Adaptive Signature Learner (ASL)**

Layer examples may include:

- video-based person, skeleton, gaze, and facial expression extraction
- audio-based speech, azimuth, and sentiment extraction
- resource-aware 2D-to-3D skeleton processing
- verbal grounding of a learned gesture

These are examples of possible compositions, not required implementations.

## Scene Context

Scene Context reuses foundational extraction and attention patterns for the physical environment.

Reused patterns:

- **SME**
- **EAG**

Layer examples may include:

- object detection
- door detection
- stair detection
- obstacle detection
- slope detection
- SLAM integration
- 2D-to-3D scene grounding

The goal is to show how the same pattern language generalizes beyond human perception.

## Robot Context

Robot Context models the robot's own body, resources, actuation interfaces, and internal state as HIF streams.

Reused HML structures:

- HC
- SG
- HE
- Semantic Cells
- HIF streams
- structured resource state

Layer examples may include:

- battery HIFs
- CPU / memory / disk HIFs
- motion request HIFs
- speech request HIFs
- domain-specific execution requests

This layer is less about introducing new patterns and more about showing that the robot itself is also part of the semantic context.

## Context Management and Reasoning

Context Management connects Human Context, Scene Context, Robot Context, memory, and reasoning.

Introduced patterns:

- **Context Novelty Extractor (CNE)**
- **HRI_DB Handler Pattern**

Commonly reused or derived patterns:

- **Spatial-Based Reasoning (SBR)**
- **Consistency Evaluator and Updater (CEU)**
- **Query Social Handler (QSH)**
- **Deep Social Insight Extractor (DSIE)**
- **System Integrity and Agency Handler (SIAH)**
- **Task Prerequisite Resolver (TPR)**
- **Social Convention Validator (SCV)**

This layer is where many pieces become connected.

It should show how unified context becomes delta context, how delta context updates or queries HRI_DB, and how specialized handlers reason over transparent state.

## Social Planning and Behavioral Synthesis

Social Planning turns validated context and pending intentions into socially appropriate action candidates.

Introduced or emphasized patterns:

- **Social Opportunity TPR**
- **Social Action Stylist (SAS)**
- **Late-Binding Behavioral Choreographer**

Layer examples may include:

- waiting for the right social moment
- choosing whether to speak, gesture, move, or combine modalities
- styling an action based on politeness, privacy, urgency, and context
- binding behavior as late as possible to preserve adaptability

This layer should make clear that planning is not only about what to do, but also:

~~~text
when to do it
how to do it
whether it is socially appropriate to do it now
~~~

## Actuation

The actuation layer remains open for future documentation.

It will likely involve patterns that connect executable HIFs to embodied effects through HE cells, actuator policies, safety gates, action monitoring, and rollback behavior.

---

# Pattern Reuse Principle

A pattern should be introduced where it first becomes necessary, but it should remain reusable elsewhere.

For example:

~~~text
SME is introduced in Human Context.
SME is reused in Scene Context.
SME may also appear in Social Action Styling when several stylists produce candidate modalities.
~~~

Similarly:

~~~text
EAG is introduced for human attention and resource allocation.
EAG may also be reused for scene processing, social prioritization, or actuation bandwidth.
~~~

This avoids duplicating pattern definitions while still allowing concrete examples in each layer.

Documentation pages should use this wording:

~~~text
First introduced in:
Reused in:
Example composition:
~~~

---

# Concrete Examples Are Illustrative

Concrete examples are important because HRI patterns can otherwise remain too abstract.

However, each example should be framed as an illustration of possible connections.

Use language such as:

~~~text
One possible instantiation is...
A layer example may connect...
In this example composition...
This does not require every implementation to...
~~~

Avoid language such as:

~~~text
The system must...
The architecture is...
The robot always...
~~~

The purpose is to document a reusable pattern language, not to document one specific robot project.

---

# Recommended Pattern Page Structure

Each design pattern page should use the same general structure.

~~~text
# Pattern Name

## Intent
What the pattern is trying to achieve.

## Problem
The recurring HRI problem addressed by the pattern.

## Context
When the pattern is useful.

## HML Structure
A diagram using the HML visual language.

## Participants
HIFs, Semantic Cells, λ operators, policies, state structures, queues, gates.

## Flow
Step-by-step explanation of the pattern.

## Example Composition
A concrete example showing one possible connection of the pattern.

## Reuse
Where else the pattern may appear.

## SOCIAL Principles Supported
How the pattern supports S/O/C/I/A/L.

## Tradeoffs
Benefits, costs, risks, and failure modes.

## Implementation Notes
Practical considerations for deployment or experimentation.
~~~

This structure should remain stable across pattern pages.

---

# Foundational and Composite Patterns

Some patterns are foundational.

They provide basic reusable mechanisms.

Examples:

- Synchronous Multi-Extractor
- Elastic Attention Governor
- Tiered Semantic Cache / Proxy
- Adaptive Signature Learner
- Context Novelty Extractor
- HRI_DB Handler

Other patterns are composite or orchestration-oriented.

They combine earlier mechanisms into higher-level reasoning or planning roles.

Examples:

- Spatial-Based Reasoning
- Consistency Evaluator and Updater
- Query Social Handler
- Deep Social Insight Extractor
- System Integrity and Agency Handler
- Task Prerequisite Resolver
- Social Convention Validator
- Social Opportunity TPR
- Social Action Stylist
- Late-Binding Behavioral Choreographer

This distinction is not rigid.

A pattern may begin as a composite in one context and later become a reusable building block in another.

---

# Example Mapping of HRI Design Patterns to Architectural Layers

<div align="center">

<svg width="100%" viewBox="0 0 980 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="layer-pattern-map-title layer-pattern-map-desc">
  <title id="layer-pattern-map-title">Layer-to-Pattern Map</title>
  <desc id="layer-pattern-map-desc">Design patterns are introduced layer by layer and reused in later cognitive layers.</desc>

  <defs>
    <marker id="arrow-layer-pattern-map" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Layer boxes -->
  <path d="M 40 40 L 285 40 L 305 60 L 305 130 L 60 130 L 40 110 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="172.5" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Human Context</text>
  <text x="172.5" y="94" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">SME / EAG / TSC / ASL</text>

  <path d="M 375 40 L 620 40 L 640 60 L 640 130 L 395 130 L 375 110 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="507.5" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Scene Context</text>
  <text x="507.5" y="94" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">reuse SME / EAG</text>

  <path d="M 710 40 L 935 40 L 955 60 L 955 130 L 730 130 L 710 110 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="832.5" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Robot Context</text>
  <text x="832.5" y="94" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HIF streams / HC / SG / HE</text>

  <path d="M 190 235 L 790 235 L 820 265 L 820 365 L 220 365 L 190 335 Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="505" y="270" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Context Management and Reasoning</text>
  <text x="505" y="298" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">CNE / HRI_DB Handler / SBR / CEU / QSH / DSIE / SIAH / TPR / SCV</text>
  <text x="505" y="322" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">connects multiple contexts, memory, validation, and reasoning</text>

  <path d="M 265 430 L 715 430 L 740 455 L 740 500 L 290 500 L 265 475 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="502.5" y="458" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Social Planning and Behavioral Synthesis</text>
  <text x="502.5" y="482" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Social Opportunity TPR / SAS / Late-Binding Choreographer</text>

  <!-- arrows from first contexts to management -->
  <line x1="172.5" y1="130" x2="340" y2="227" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-layer-pattern-map)" />
  <line x1="507.5" y1="130" x2="507.5" y2="227" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-layer-pattern-map)" />
  <line x1="832.5" y1="130" x2="670" y2="227" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-layer-pattern-map)" />

  <!-- management to social planning -->
  <line x1="505" y1="365" x2="505" y2="422" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-layer-pattern-map)" />
</svg>

</div>

This map is intentionally schematic.

It shows the recommended learning path and reuse structure, not a mandatory architecture.

---

# Writing Style for Pattern Pages

Use engineering-academic language.

Prefer:

~~~text
The pattern supports...
The pattern can be instantiated as...
A common implementation strategy is...
One possible HML composition is...
The pattern trades latency for synchronization integrity...
~~~

Avoid:

~~~text
The robot must...
The system always...
This is the implementation...
~~~

The documentation should support academic publication by presenting the patterns as generalizable architecture, while still remaining concrete enough for engineers to apply.

---

# Conclusion

The HRI Design Patterns document reusable architectural solutions built from HML primitives and governed by SOCIAL principles.

They should be organized by the cognitive layer in which they first become necessary, while remaining reusable across later layers.

This organization supports both:

~~~text
a readable architectural learning path
~~~

and:

~~~text
a reusable pattern catalog
~~~

The next pages define the individual patterns, beginning with the Human Context layer and the Synchronous Multi-Extractor.


---

# How to Read a Pattern Page

Source file: `design-patterns/how-to-read-a-pattern-page.md`

# How to Read a Pattern Page

## Purpose

This page defines the documentation template for HRI Design Patterns.

Each pattern page should be readable in two ways:

1. As a **reusable architectural pattern**.
2. As a **possible HML composition** that can be instantiated in different HRI systems.

The goal is not to document one existing robot implementation.

The goal is to describe reusable solutions to recurring HRI architecture problems using the SOCIAL principles and HML visual language.

A pattern page should therefore answer:

```text
What recurring HRI problem does this pattern solve?
How is the solution expressed in HML?
What are the participants?
How does information flow?
What policies, gates, memory structures, or experts are involved?
Where can the pattern be reused?
What are the tradeoffs?
```

---

# Pattern Pages Are Not Implementation Manuals

A pattern is not a software package, API, ROS node, class, agent, or fixed deployment structure.

A pattern describes an architectural idea.

For example:

```text
Synchronous Multi-Extractor = multiple semantic transformers process related HIFs and are synchronized into a richer HIF.
```

This does not require:

```text
one specific detector
one specific robot
one specific middleware
one specific runtime graph
one specific model family
```

A concrete implementation may use ROS, Python services, model endpoints, behavior trees, agent tools, local AI models, cloud APIs, or any combination of them.

The pattern page should stay at the HML architectural level.

Implementation notes may be included, but they should not dominate the pattern definition.

---

# Recommended Page Structure

Each pattern page should follow the same structure whenever possible.

```text
# Pattern Name

## Intent
## Problem
## Context
## HML Structure
## Participants
## Flow
## Example Composition
## Reuse
## SOCIAL Principles Supported
## Tradeoffs
## Failure Modes
## Implementation Notes
## Related Patterns
```

Not every pattern requires all sections to be equally long.  
However, keeping the section structure stable makes the pattern catalog easier to read, compare, and extend.

---

# 1. Intent

The Intent section gives a short definition of the pattern.

It should answer:

```text
What is this pattern for?
```

Good intent statements are short and active.

Example:

```text
The Synchronous Multi-Extractor coordinates several semantic transformers operating over related input HIFs and synchronizes their outputs into a coherent enriched HIF.
```

Avoid overly implementation-specific phrasing such as:

```text
This pattern runs three ROS nodes and publishes a combined message.
```

The intent should remain reusable.

---

# 2. Problem

The Problem section explains the recurring HRI challenge.

It should answer:

```text
Why is this pattern needed?
What goes wrong without it?
```

Typical problem statements may refer to:

- temporal mismatch
- ambiguous perception
- compute/resource constraints
- stale context
- missing information
- unsafe direct execution
- social inappropriateness
- opaque reasoning
- excessive LLM escalation
- brittle hard-coded behavior

Example:

```text
In multimodal HRI, several experts may extract different semantic properties from the same interaction moment. If their outputs are merged without synchronization, the system may combine evidence from different people, different time windows, or different social situations.
```

The problem section should make clear why a naive design is insufficient.

---

# 3. Context

The Context section defines when the pattern is useful.

It should answer:

```text
When should a designer consider using this pattern?
```

Context may include:

- input type
- interaction setting
- layer in the cognitive architecture
- expected uncertainty
- resource constraints
- need for explainability
- real-time or near-real-time requirements
- whether memory, queueing, validation, or escalation is needed

Example:

```text
Use this pattern when several perception or interpretation experts must process related HIFs and their outputs must be synchronized before downstream reasoning can safely use them.
```

The context section should also say when the pattern is probably unnecessary.

Example:

```text
If a single deterministic transformer produces all required properties with stable timing, SME may be unnecessary.
```

---

# 4. HML Structure

The HML Structure section contains the main diagram of the pattern.

This diagram should use the shared HML visual language:

- HIFs flow left to right.
- Semantic Cells are shown as rounded rectangles.
- Policies enter cells from above.
- λ operators enter cells from above.
- State, memory, queues, and caches appear as supporting structures.
- Decision outcomes use diamonds.
- Pattern instances may be wrapped with clipped-corner containers.

The HML diagram should emphasize semantic structure, not low-level deployment.

## Pattern Container

When a reusable composition should be shown as a named pattern, wrap the composition in a clipped-corner container.

A detailed composition may later be referenced by a compact named container.

<div align="center">

<svg width="100%" viewBox="0 0 1180 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pattern-wrapper-title pattern-wrapper-desc">
  <title id="pattern-wrapper-title">Pattern Wrapper Notation</title>
  <desc id="pattern-wrapper-desc">
    A concrete HML composition can be wrapped as a reusable pattern instance and then referenced through a compact named pattern container.
  </desc>

  <defs>
    <marker id="arrow-pattern-wrapper" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="20" y="145" width="120" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="80" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="735" y="145" width="125" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="797.5" y="172" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <path d="M 180 35 L 650 35 L 675 60 L 675 280 L 205 280 L 180 255 Z"
        fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="8 6" />

  <text x="427.5" y="64" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#d97706">Pattern Instance</text>
  <text x="427.5" y="86" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">example of a reusable wrapped HML composition</text>

  <rect x="285" y="98" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="123" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₁</text>

  <rect x="285" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₂</text>

  <rect x="285" y="218" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="331" y="243" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">ST₃</text>

  <rect x="510" y="158" width="92" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="556" y="183" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <line x1="140" y1="167" x2="235" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="235" y1="167" x2="255" y2="167" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="167" x2="255" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="119" x2="277" y2="119" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="255" y1="167" x2="277" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="255" y1="167" x2="255" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="255" y1="239" x2="277" y2="239" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="377" y1="119" x2="445" y2="119" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="119" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="377" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="377" y1="239" x2="445" y2="239" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="239" x2="445" y2="179" stroke="currentColor" strokeWidth="1.3" />
  <line x1="445" y1="179" x2="502" y2="179" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-pattern-wrapper)" />

  <line x1="602" y1="179" x2="727" y2="167" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-wrapper)" />

  <text x="430" y="272" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">example wrapped composition: ST₁ / ST₂ / ST₃ → SG</text>

  <text x="905" y="180" textAnchor="middle" fontSize="42" fontFamily="Arial, sans-serif" fill="currentColor">=</text>

  <path d="M 955 105 L 1115 105 L 1135 125 L 1135 225 L 975 225 L 955 205 Z"
        fill="none" stroke="#d97706" strokeWidth="2" />

  <text x="1045" y="155" textAnchor="middle" fontSize="28" fontFamily="Arial, sans-serif" fill="#d97706">SME</text>
  <text x="1045" y="180" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">pattern shorthand</text>
</svg>

</div>

This notation means:

```text
A reusable HML composition can be wrapped and referred to as a named pattern.
```

The shorthand container is useful in larger layer diagrams, where expanding every pattern would make the diagram unreadable.

---

# 5. Participants

The Participants section lists the HML elements involved in the pattern.

Use a table when possible.

Recommended columns:

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF | HIF | Semantic input to the pattern |
| ST | Semantic Cell | Extracts or enriches semantic properties |
| λ expert | Operator | Provides the semantic capability |
| Policy | Policy artifact | Governs thresholds, timing, escalation, or validation |
| SG | Sync Gate | Synchronizes several HIFs |
| HRI_DB | State | Stores or retrieves persistent semantic context |
| Queue | Flow-control structure | Holds delayed or pending HIFs |

Not every pattern uses every participant.

The purpose of this section is to make the pattern auditable.

A reader should be able to identify:

```text
What enters?
What processes it?
What policies govern it?
What state is consulted?
What exits?
```

---

# 6. Flow

The Flow section explains the pattern step by step.

A good flow is short, ordered, and concrete.

Example:

```text
1. An input HIF enters the pattern.
2. Several ST cells process the input or related synchronized inputs.
3. Each ST adds one semantic property or evidence stream.
4. An SG waits for the required set of HIFs within the synchronization policy.
5. The SG emits one enriched synchronized HIF.
```

The Flow section should explain what the diagram means.

Do not rely on the diagram alone.

---

# 7. Example Composition

The Example Composition section shows one possible instantiation of the pattern.

This section is important because patterns can otherwise remain too abstract.

However, examples must be framed carefully.

Use wording such as:

```text
One possible instantiation is...
A possible layer composition may connect...
In this example composition...
This example illustrates one way to use the pattern...
```

Avoid wording such as:

```text
The system must...
The architecture is...
The robot always...
This is the implementation...
```

The example should demonstrate how the pattern could be connected, not claim that this is the only correct architecture.

Example:

```text
One possible Human Context composition uses SME to process a VideoFrame HIF through person detection, skeleton extraction, gaze estimation, and facial expression classification. The outputs are synchronized into a HumanState HIF.
```

This is a useful example, not a mandatory design.

---

# 8. Reuse

The Reuse section explains where else the pattern can appear.

Recommended format:

| Reuse Location | How the Pattern Reappears |
|---|---|
| Human Context | First introduced for multimodal human perception |
| Scene Context | Reused for object, obstacle, door, and slope extraction |
| Social Planning | Reused when several stylists generate candidate action modalities |
| Actuation | May be reused for multi-channel execution monitoring |

This section should make the catalog reusable.

A pattern may be introduced in one layer but should not be conceptually locked to that layer.

Recommended wording:

```text
First introduced in:
Reused in:
Possible later reuse:
```

---

# 9. SOCIAL Principles Supported

Each pattern page should explain how the pattern supports the SOCIAL framework.

Do not merely list the principles.

Explain the relationship.

Example:

```text
Within the SOCIAL framework, SME supports:

- S-Separated Contexts by allowing each extractor to operate as a separate semantic path before controlled synchronization.
- O-Open Declarative by making each extracted property explicit in the resulting HIF.
- C-Clear Cognition by decomposing perception into named semantic stages.
- I-Interpretable Gates by using SG policies to determine when extracted streams may be merged.
- A-Adaptive Autonomy by allowing the system to reduce fidelity or wait for better evidence when confidence is low.
- L-Layered Validation by preserving per-extractor confidence before downstream validation.
```

This section should show why the pattern belongs in the framework.

---

# 10. Tradeoffs

The Tradeoffs section explains what the pattern costs.

A useful pattern is not always the right choice.

Possible tradeoffs include:

| Tradeoff | Explanation |
|---|---|
| Latency | Synchronization or escalation may delay response |
| Compute cost | Multiple experts may be expensive |
| Complexity | More cells and policies require more configuration |
| Explainability | More traceability may require more metadata |
| Robustness | Redundancy may improve reliability but complicate arbitration |
| Resource adaptation | Lower fidelity may improve responsiveness but reduce semantic richness |
| Policy burden | Explicit governance improves safety but requires careful tuning |

A good tradeoff section helps designers decide when not to use the pattern.

---

# 11. Failure Modes

The Failure Modes section describes what can go wrong.

Examples:

- missing input HIF
- late HIF arrival
- stale context
- conflicting expert outputs
- low confidence
- model failure
- over-escalation
- under-escalation
- queue starvation
- policy misconfiguration
- incorrect memory update
- unsafe execution
- socially inappropriate timing

Each failure mode should ideally point to a mitigation strategy.

Example:

| Failure Mode | Possible Mitigation |
|---|---|
| Required HIF does not arrive | Use timeout policy and emit partial result or pending state |
| Experts disagree | Preserve disagreement and route to validation or escalation |
| LLM fallback hallucinates | Restrict input to explicit HRI_DB subset and validate output |
| Pending task never becomes ready | Apply expiration or decay policy |
| Social gate blocks too often | Review policy thresholds and context interpretation |

---

# 12. Implementation Notes

Implementation Notes may include practical considerations, but should remain secondary to the pattern definition.

Appropriate implementation notes include:

- suggested HIF fields
- configuration strategy
- policy parameters
- logging requirements
- provenance tracking
- test cases
- runtime bindings
- model replacement strategy
- local vs cloud model choice
- cache invalidation
- queue expiration
- safety auditing

Avoid turning this section into a full implementation guide.

The purpose is to help engineers instantiate the pattern without collapsing the pattern into one concrete implementation.

---

# 13. Related Patterns

The Related Patterns section links the pattern to other patterns.

Examples:

```text
SME is related to:
- EAG, because attention and resource policies may determine which extractors run.
- ASL, because learned signatures may use synchronized temporal evidence.
- SAS, because styling can also be modeled as multiple semantic outputs synchronized into a final action style.
```

This helps the catalog become a connected pattern language rather than a set of isolated pages.

---

# Diagram Style Rules for Pattern Pages

Pattern diagrams should follow the HML Diagram Conventions.

## Main Flow

Use left-to-right flow:

```text
Input HIF → Pattern → Output HIF
```

## Policy and Expert Inputs

Policies and λ operators should enter cells from above.

```text
Policy      λ
  ↓         ↓
Cell
```

## Direct Cell-to-Cell Connections

If a HIF output from one cell immediately enters the next cell, it is acceptable to connect the cells directly.

For example:

```text
ST → ST → SG
```

This is understood as:

```text
ST → HIF → ST → HIF → SG
```

The intermediate HIF does not always need to be drawn if it is obvious.

## Pattern Wrappers

Use clipped-corner containers to wrap reusable pattern instances.

Use the wrapper to clarify composition, not to imply software packaging.

## Concrete Examples

Concrete layer diagrams may simplify details.

For example, they may show:

```text
VideoFrame HIF → SME → HumanState HIF
```

instead of expanding every extractor, if the pattern was already explained earlier.

---

# Minimal Pattern Page Skeleton

The following skeleton can be copied when creating a new pattern page.

```md
---
title: Pattern Name
sidebar_position: X
---

# Pattern Name

## Intent

...

## Problem

...

## Context

...

## HML Structure

...

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| ... | ... | ... |

## Flow

1. ...
2. ...
3. ...

## Example Composition

One possible instantiation is...

## Reuse

| Reuse Location | How the Pattern Reappears |
|---|---|
| ... | ... |

## SOCIAL Principles Supported

Within the SOCIAL framework, this pattern supports:

- **S-Separated Contexts** by ...
- **O-Open Declarative** by ...
- **C-Clear Cognition** by ...
- **I-Interpretable Gates** by ...
- **A-Adaptive Autonomy** by ...
- **L-Layered Validation** by ...

## Tradeoffs

...

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| ... | ... |

## Implementation Notes

...

## Related Patterns

...
```

---

# Quality Checklist

Before adding a pattern page, check:

```text
[ ] Is the pattern described as reusable architecture rather than implementation?
[ ] Does the Intent fit in one short paragraph?
[ ] Does the Problem explain why the pattern is needed?
[ ] Does the HML diagram use the shared visual language?
[ ] Are policies and λ operators placed correctly?
[ ] Are examples framed as illustrative, not mandatory?
[ ] Are participants explicit?
[ ] Is the pattern's reuse explained?
[ ] Are SOCIAL principles explained, not merely listed?
[ ] Are tradeoffs and failure modes included?
[ ] Is the implementation section helpful but not dominant?
[ ] Are related patterns named?
```

---

# Conclusion

A pattern page should make a reusable HRI architecture understandable, inspectable, and applicable.

The best pattern pages balance three qualities:

```text
general enough to be reusable
specific enough to be useful
explicit enough to be auditable
```

This template keeps the HRI Design Pattern catalog coherent as it grows across Human Context, Scene Context, Robot Context, Context Management, Social Planning, and future Actuation patterns.


---

# Adaptive Signature Learner (ASL)

Source file: `design-patterns/human-context/adaptive-signature-learner.md`

# Adaptive Signature Learner (ASL)

## Intent

**Adaptive Signature Learner (ASL)** is an HRI design pattern for learning and classifying temporal semantic signatures from HIF streams.

ASL is useful when the meaning of an interaction is not contained in a single frame, utterance, or event, but in a **time-series pattern**.

Examples include:

- a hand gesture
- a body-motion pattern
- a repeated social cue
- a short melody
- a whistle
- a rhythmic sound
- a multimodal ritual
- a user-specific interaction pattern

The core idea is:

```text
synchronized HIF stream
  → time-series window
  → learn or classify signature
  → output semantic label
```

ASL allows a robot to learn new social or interactional meanings **on the fly**, during the interaction itself.

---

## Problem

Many socially meaningful signals unfold over time.

A single skeleton frame does not define a gesture.  
A single audio frame does not define a melody.  
A single gaze sample does not necessarily define attention.

The system must observe a bounded temporal window and interpret the pattern inside that window.

A common solution is to use a pre-trained classifier, such as a neural gesture-recognition model. That may work well for a fixed set of known classes, but it creates several limitations:

- the recognized gesture set is closed
- some gestures may be irrelevant to the robot
- important local gestures may be missing
- the model may have been trained from a different camera viewpoint
- the model may not match the robot's embodiment
- the model is not naturally personalized to a specific user or family
- adding a new gesture may require retraining or fine-tuning

ASL addresses this by making signature learning explicit, local, and controllable.

Instead of assuming all social signals are known in advance, the robot can learn:

```text
"This pattern means X"
```

and later classify similar patterns as `X`.

---

## Context

Use ASL when the architecture needs to:

- classify temporal patterns
- learn new labels during interaction
- personalize interaction to a user
- adapt to the robot's own sensor viewpoint
- support session-level or persistent learned behaviors
- keep learned symbolic associations inspectable
- avoid relying only on fixed pre-trained recognition classes

ASL is especially useful after the basic Human Context layer has already produced HIF streams such as:

```text
tracked skeletons
gaze estimates
facial expressions
spoken text
speaker identity
audio features
position relative to map
```

These HIF streams provide the semantic material from which time-series signatures can be learned.

---

## HML Structure

The ASL pattern has two modes:

```text
learn
classify
```

In **learn mode**, the ST stores a signature extracted from a recent time-series window.

In **classify mode**, the ST compares a new time-series window against stored signatures and emits the best matching label if confidence is high enough.

<div align="center">

<svg width="100%" viewBox="0 0 1040 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="asl-abstract-title asl-abstract-desc">
  <title id="asl-abstract-title">Adaptive Signature Learner Abstract Pattern</title>
  <desc id="asl-abstract-desc">A stream of HIFs is synchronized by an SG into a time-series window. A Semantic Transformer learns or classifies the window using a signature dictionary and emits an output HIF.</desc>

  <defs>
    <marker id="arrow-asl-abstract" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="46" y="153" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <rect x="54" y="161" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <rect x="62" y="169" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="108" y="200" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="108" y="237" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HIF stream</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="205" y="80" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="222" y="132" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">window policy</text>
  <text x="272" y="109" textAnchor="middle" fontSize="30" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="272" y="132" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">sync</text>

  <rect x="210" y="168" width="96" height="54" rx="8" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="258" y="202" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>
  <line x1="222" y1="140" x2="222" y2="168" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="272" y1="140" x2="272" y2="168" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />

  <rect x="390" y="132" width="145" height="126" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="462.5" y="162" textAnchor="middle" fontSize="25" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="462.5" y="188" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Time-series</text>
  <text x="462.5" y="208" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">window</text>
  <image href="/social-hri-framework/img/hml/time-series-window.svg" x="420" y="216" width="86" height="32" preserveAspectRatio="xMidYMid meet" />
  <text x="462.5" y="278" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">bounded temporal evidence</text>

 <image href="/social-hri-framework/img/hml/policy-check.svg" x="640" y="52" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
<text x="657" y="104" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">mode / threshold</text>
<text x="750" y="81" textAnchor="middle" fontSize="30" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
<text x="750" y="104" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">signature expert</text>

  <rect x="650" y="142" width="138" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="719" y="178" textAnchor="middle" fontSize="26" fontFamily="Arial, sans-serif" fill="currentColor">ST</text>
  <text x="719" y="204" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">learn / classify</text>
  <line x1="657" y1="112" x2="657" y2="142" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="750" y1="112" x2="750" y2="142" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-abstract)" />

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="692" y="252" width="54" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="719" y="309" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">signature dictionary</text>
  <path d="M 692 266 C 666 258, 655 240, 650 220" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-abstract)" />
  <path d="M 746 266 C 776 258, 786 240, 788 220" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-abstract)" />

  <rect x="890" y="163" width="112" height="66" rx="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="946" y="190" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="946" y="214" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">classification</text>

  <line x1="154" y1="195" x2="202" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="306" y1="195" x2="382" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="535" y1="195" x2="642" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
  <line x1="788" y1="195" x2="882" y2="195" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-abstract)" />
</svg>

</div>

The SG forms a time-series window from incoming HIFs.  
The ST then either learns a new signature or classifies the current window against stored signatures.

The policy determines:

- the length of the time window
- whether the ST is in learn mode or classify mode
- which signature dictionary is used
- confidence thresholds
- persistence rules
- user or session scope
- whether a new signature requires confirmation

---

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF stream | HIF stream | Sequence of semantically meaningful observations |
| SG | Sync Gate | Builds a coherent time-series window |
| Time-Series Window HIF | HIF | Carries a bounded temporal sequence |
| ST | Semantic Transformer | Learns or classifies the window |
| Policy | Policy artifact | Controls mode, thresholds, persistence, and scope |
| λ signature expert | Semantic Operator | Extracts, stores, compares, or classifies signatures |
| Signature dictionary | Semantic memory | Maps learned signatures to labels |
| Output HIF | HIF | Carries learned or classified semantic information |

---

## Flow

ASL has two main flows.

### Learning mode

```text
1. HIFs arrive over time.
2. SG groups them into a time-series window.
3. A learning cue activates learn mode.
4. ST receives the window and the target label.
5. λ extracts or stores a signature.
6. The signature is inserted into the selected dictionary.
7. Output HIF records what was learned.
```

### Classification mode

```text
1. HIFs arrive over time.
2. SG groups them into a time-series window.
3. ST receives the window in classify mode.
4. λ compares the window to stored signatures.
5. The closest match is selected.
6. If confidence passes threshold, the label is emitted.
7. Output HIF is enriched with the classification.
```

---

## Concrete Example: Teaching a Gesture

Suppose a person waves with the right hand and says:

```text
this gesture is "come here"
```

The verbal instruction acts as a learning cue.

The ASL ST looks back over a recent skeleton time window, for example the previous 1.5 seconds, and stores the motion signature under the label:

```text
come here
```

Later, when a similar skeleton motion appears, the ST classifies the time-series window and enriches the output HIF:

```json
{
  "gesture": "come_here"
}
```

<div align="center">

<svg width="100%" viewBox="0 0 1040 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="asl-example-title asl-example-desc">
  <title id="asl-example-title">Adaptive Signature Learner Gesture Example</title>
  <desc id="asl-example-desc">A person labels a gesture as come here. HIFs are synchronized into a time-series window, learned by an ST, stored in a dictionary, and later emitted as a gesture classification HIF.</desc>

  <defs>
    <marker id="arrow-asl-example" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <path d="M 75 30 L 305 30 Q 315 30 315 40 L 315 70 Q 315 80 305 80 L 175 80 L 195 105 L 135 80 L 75 80 Q 65 80 65 70 L 65 40 Q 65 30 75 30 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="190" y="58" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">“this gesture is ‘come here’”</text>

  <g transform="translate(160,145)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="0" cy="-28" r="8" />
    <line x1="0" y1="-20" x2="0" y2="28" />
    <line x1="0" y1="-5" x2="-20" y2="12" />
    <line x1="0" y1="-5" x2="22" y2="-28" />
    <line x1="22" y1="-28" x2="22" y2="-47" />
    <line x1="0" y1="28" x2="-14" y2="62" />
    <line x1="0" y1="28" x2="16" y2="62" />
  </g>

  <rect x="260" y="178" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
  <rect x="268" y="186" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
  <rect x="276" y="194" width="92" height="48" rx="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="322" y="225" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="322" y="261" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">skeleton HIFs</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="425" y="128" width="32" height="32" preserveAspectRatio="xMidYMid meet" />
  <text x="485" y="154" textAnchor="middle" fontSize="28" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <rect x="430" y="194" width="92" height="52" rx="8" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="476" y="228" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>
  <line x1="441" y1="165" x2="441" y2="194" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />
  <line x1="485" y1="165" x2="485" y2="194" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />

  <rect x="590" y="162" width="135" height="116" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="657.5" y="190" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="657.5" y="214" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Time-series</text>
  <text x="657.5" y="233" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">window</text>
  <image href="/social-hri-framework/img/hml/time-series-window.svg" x="620" y="238" width="75" height="28" preserveAspectRatio="xMidYMid meet" />
  <text x="657.5" y="299" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">recent motion window</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="780" y="108" width="32" height="32" preserveAspectRatio="xMidYMid meet" />
  <text x="850" y="138" textAnchor="middle" fontSize="28" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <rect x="790" y="174" width="128" height="72" rx="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="854" y="207" textAnchor="middle" fontSize="25" fontFamily="Arial, sans-serif" fill="currentColor">ST</text>
  <text x="854" y="233" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">learn / classify</text>
  <line x1="796" y1="145" x2="796" y2="174" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />
  <line x1="850" y1="145" x2="850" y2="174" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-asl-example)" />

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="825" y="268" width="54" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="852" y="324" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">signature dictionary</text>
  <path d="M 825 282 C 795 272, 790 250, 790 242" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-example)" />
  <path d="M 879 282 C 910 272, 918 250, 918 242" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-asl-example)" />

  <rect x="940" y="178" width="90" height="86" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="985" y="205" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>
  
  <text x="985" y="234" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">&#123;&quot;gesture&quot;:</text>
  <text x="985" y="251" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">&quot;come here&quot;&#125;</text>

  <line x1="368" y1="220" x2="422" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />
  <line x1="522" y1="220" x2="582" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />
  <line x1="725" y1="220" x2="782" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />
  <line x1="918" y1="220" x2="942" y2="220" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-asl-example)" />

  <path d="M 280 80 C 430 95, 585 120, 650 162" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" markerEnd="url(#arrow-asl-example)" />
  <text x="540" y="100" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">verbal label selects learn mode</text>
</svg>

</div>

---

## Signature Dictionary

The ST maintains or accesses a dynamic dictionary.

A simplified dictionary may look like:

```json
{
  "global": {
    "sig_17": {
      "label": "come_here",
      "modality": "skeleton_2d",
      "features": "...",
      "created_by": "user_teaching",
      "confidence": 0.91
    }
  },
  "users": {
    "alice": {
      "sig_42": {
        "label": "come_here",
        "modality": "skeleton_3d",
        "features": "...",
        "persistence": "session",
        "examples": 3
      }
    }
  }
}
```

The dictionary can be:

```text
global
per-user
per-session
temporary
persistent
task-specific
culture-specific
```

This makes ASL suitable for both shared social knowledge and personalized interaction.

---

## Matching and Classification

The pattern does not require a specific algorithm.

The signature expert may use:

- nearest-neighbor matching
- dynamic time warping
- learned embeddings
- feature extraction
- classical signal-processing features
- small local classifiers
- heuristic distance functions
- multimodal similarity metrics

For example:

```text
new time-series window
  → extract feature signature
  → compare to stored signatures
  → choose nearest match
  → accept only if confidence exceeds threshold
```

A simple conceptual rule may be:

```text
if min_distance(window_signature, stored_signature) < threshold:
    emit label
else:
    emit no_match
```

The key point is not the specific distance function.

The key point is that the system treats temporal interaction patterns as learnable and inspectable semantic signatures.

---

## Why Not Just Use a Pre-Trained Neural Gesture Recognizer?

A pre-trained neural classifier can be useful, but ASL solves a different problem.

### 1. Fixed labels vs. online learning

A neural classifier usually recognizes a closed set of gestures.

ASL lets the robot learn exactly what is needed:

```text
this gesture means come here
this whistle means call me
this melody means dinner time
this motion pattern means stop following
```

The learned signature may be kept permanently or only for the current interaction.

### 2. Generic training data vs. robot embodiment

A pre-trained model may have learned gestures from ideal viewpoints.

A real robot may be:

- shorter than a human
- looking from below
- using a wide-angle camera
- mounted on a moving base
- seeing partial skeletons
- operating in a specific room layout

ASL can learn from the robot's own sensor perspective.

The signature may be based on:

```text
2D skeleton from the robot camera
3D skeleton relative to the map
audio time series
multimodal HIF stream
```

### 3. Static classifier vs. personalized interaction

ASL can maintain a different dictionary per user.

This allows the robot to learn how a specific person gestures, whistles, or signals.

A generic classifier may detect a standard waving gesture, but it will not naturally learn:

```text
Alice's way of calling the robot
Bob's family-specific hand signal
a session-only training gesture
a temporary rehearsal cue
```

### 4. Opaque model vs. inspectable memory

ASL stores explicit learned associations.

A developer or authorized operator can inspect, approve, remove, or scope them.

This is much easier than inspecting a gesture embedded only inside a model's weights.

---

## Beyond Gestures

The gesture example is only one use case.

ASL applies whenever a time-series pattern can be labeled and later recognized.

| Domain | Example |
|---|---|
| Gesture | “this gesture means come here” |
| Audio | “remember this whistle as call me” |
| Music | “this melody means dinner time” |
| Motion | “when I move like this, follow me” |
| Social rhythm | repeated turn-taking or approach pattern |
| Multimodal ritual | gesture + phrase + gaze pattern |

For example:

```text
remember this whistle as "call me"
```

may create:

```json
{
  "signature_type": "audio_melody",
  "label": "call_me",
  "scope": "user:alice"
}
```

---

## Output HIFs

ASL may emit either a learning result or a classification result.

### Learning result

```json
{
  "type": "SignatureLearningHIF",
  "properties": {
    "label": "come_here",
    "stored_signature": "sig_42",
    "modality": "skeleton_3d",
    "dictionary_scope": "user:alice",
    "persistence": "session"
  },
  "processing_history": [
    "GestureWindowSG",
    "AdaptiveSignatureLearnerST"
  ]
}
```

### Classification result

```json
{
  "type": "GestureHIF",
  "properties": {
    "gesture": "come_here",
    "source_window": "recent_skeleton_window",
    "matched_signature": "sig_42",
    "dictionary_scope": "user:alice"
  },
  "confidence": {
    "match_confidence": 0.88
  },
  "processing_history": [
    "GestureWindowSG",
    "AdaptiveSignatureLearnerST"
  ]
}
```

---

## SOCIAL Principles Supported

Within the SOCIAL framework, ASL supports:

### S — Separated Contexts

ASL keeps the raw time-series, learned signature, classification label, user scope, and persistence policy separate.

A motion pattern is not automatically a command.  
It becomes meaningful only after a learned or validated semantic association exists.

### O — Open Declarative

The learned association can be represented declaratively:

```json
{
  "signature": "sig_42",
  "label": "come_here",
  "scope": "user:alice"
}
```

This makes the learned meaning inspectable rather than hidden only inside a model.

### C — Clear Cognition

ASL exposes whether the system learned or classified.

It can record:

```text
which window was used
which signature was matched
which label was emitted
which confidence threshold was applied
which dictionary scope was used
```

### I — Interpretable Gates

The pattern contains explicit gates:

```text
learn vs classify
store vs reject
match vs no match
session vs persistent
global vs user-specific
```

These gates can be governed by policies.

### A — Adaptive Autonomy

The robot adapts its interaction capabilities during the interaction.

It can learn a new signal, personalize it, or restrict it to the current session depending on policy.

### L — Layered Validation

Learning may require validation.

For example:

```text
only an authorized user may teach persistent gestures
low-confidence matches require confirmation
unsafe labels cannot become executable commands
```

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Online learning vs. noise | Learning from live interaction may capture noisy examples |
| Personalization vs. fragmentation | Per-user dictionaries improve fit but may create many variants |
| Flexibility vs. governance | Letting users teach the robot is powerful but must be controlled |
| Session learning vs. persistent memory | Temporary signatures avoid pollution but disappear later |
| Simple signatures vs. robust recognition | Simple distance metrics are transparent but may be less robust |
| Viewpoint adaptation vs. generalization | Robot-specific learning may not transfer to other robots |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Wrong learning cue | Require explicit confirmation before storing |
| Bad time window | Use pre/post buffers and configurable window length |
| Noisy skeleton or audio | Store confidence and require repeated examples |
| Overgeneralized match | Use thresholds and negative examples |
| User-specific signal applied globally | Store scope explicitly |
| Dictionary grows without control | Add expiration, pruning, and review |
| Gesture resembles unsafe command | Validate label before linking to behavior |
| Classification confidence too low | Emit no-match or ask for clarification |
| Conflicting labels | Keep provenance and require resolution |
| Cross-user mismatch | Prefer per-user dictionary when identity is known |

---

## Implementation Notes

A practical ASL implementation should define:

- input HIF types
- time-window length
- buffer behavior
- learning cues
- classification thresholds
- feature extraction method
- signature representation
- dictionary scope
- persistence rules
- validation requirements
- deletion or forgetting policy
- user authorization rules
- processing-history fields

Examples of persistence policies:

```text
session_only
user_persistent
global_persistent
task_local
expires_after_idle_time
requires_operator_approval
```

Examples of dictionary scopes:

```text
global
robot_specific
user:<id>
household:<id>
session:<id>
task:<id>
```

---

## Relationship to Previous Human Context Patterns

ASL depends naturally on the previous Human Context patterns.

**SME** can produce synchronized visual or audio HIFs.  
**EAG** can decide how much perception fidelity to allocate.  
The **Basic Input Sublayer** can produce tracked skeletons, speech, gaze, and sentiment.  
**TSC/TSP** can interpret the verbal cue that names the pattern.

ASL then adds the missing capability:

```text
learn and classify temporal signatures during interaction
```

This moves the Human Context layer from static interpretation toward interactive adaptation.

---

## Minimal Summary

```text
ASL learns and classifies time-series signatures from HIF streams.

It uses SG to form a temporal window.
It uses ST to learn or classify.
It stores signatures in a scoped dictionary.
It emits HIFs enriched with learned labels.
```

The pattern turns interaction into a teaching channel:

```text
"this gesture is come here"
  → store signature
  → recognize similar future gestures
```


---

# Example — Basic Input Sublayer in the Human Context

Source file: `design-patterns/human-context/basic-input-sublayer-example.md`

# Example — Basic Input Sublayer in the Human Context

This page shows one possible way to compose the first two Human Context patterns into a **basic input sublayer**.

It is not a required architecture.  
It is an illustrative composition showing how raw sensor streams may become a unified semantic interaction frame.

The example is based on three parallel input rails:

```text
camera      → visual human evidence
microphone  → spoken and affective evidence
LiDAR       → spatial footprint evidence
```

These streams are converted into HIFs, synchronized, grounded in 3D with respect to the map, tracked over time, and emitted as a richer interaction frame.

---

## Example Composition

<div align="center">

<img
  src="/social-hri-framework/img/hml/human-context-basic-input-layer.svg"
  alt="Example of a Basic Input Sublayer in the Human Context"
  width="100%"
/>

</div>

---

## What the Diagram Shows

The diagram illustrates how a basic Human Context input layer may be assembled from reusable HML patterns.

### Visual rail

```text
camera → HC → Video Analyzer SME → HIF
```

The video analyzer is modeled as an SME because several visual experts operate over the same video input:

```text
Person detector
Skeleton extractor
Facial expression classifier
Gaze detector
```

The result is a visual HIF that contains synchronized evidence about the person as seen in the current interaction moment.

### Audio rail

```text
microphone → HC → Audio Analyzer SME → HIF
```

The audio analyzer is also modeled as an SME. It may apply several experts over the same audio segment:

```text
Speech to text
Azimuth extractor
Sentiment classifier
```

The resulting audio HIF may include what was said, where the sound came from, and an affective interpretation of the utterance.

### LiDAR rail

```text
LiDAR → HC → HIF → Footprint Extractor ST → HIF
```

The LiDAR rail produces spatial footprint evidence.  
This can help locate a person or moving body within the robot's sensing region and relate the perception stream to the map.

---

## Synchronization and 3D Grounding

The three HIF streams are synchronized by an SG.

```text
visual HIF
audio HIF
LiDAR HIF
    ↓
SG
```

The SG creates a temporally coherent interaction frame from multiple sensor modalities.

This is important because the robot should not accidentally bind a face, a spoken sentence, and a LiDAR footprint from unrelated moments.

The synchronized HIF then enters a `2D → 3D EAG`.

In this example, the EAG enriches the frame with:

```text
position
3D skeleton
map-relative grounding
```

The EAG may also decide how much processing fidelity is appropriate under current resource constraints, as described in the EAG pattern.

---

## Tracking Over Time

After spatial grounding, the frame passes through a `Tracker ST`.

```text
2D → 3D EAG → Tracker ST → HIF
```

The tracker assigns and maintains a stable identity across time.

This allows the robot to understand that a person who moves within the sensing region is still the same person, rather than a new detection on every frame.

---

## Resulting Interaction Frame

The final HIF is no longer just a raw video frame, raw audio snippet, or isolated LiDAR scan.

It is a semantic interaction frame that may include:

```text
Tracked ID
3D skeleton
Facial expression and gaze information
Spoken text and sentiment
```

This creates a basic but meaningful Human Context representation.

For example:

- If a person walks inside the robot's sensing region, the tracker preserves identity.
- If that person speaks, the audio azimuth can help bind the utterance to the correct tracked human.
- If the robot has a map, the 3D skeleton and footprint can be grounded in the robot's spatial world model.
- If the person smiles, looks at the robot, and speaks, those cues can be synchronized into the same interaction frame.

---

## Design Note

This composition is only one possible realization of a basic input sublayer.

Different robots may use different sensors, experts, policies, or middleware.  
The important architectural idea is not the exact list of modules, but the separation of responsibilities:

| Responsibility | Example component |
|---|---|
| Create HIFs from raw sources | HC |
| Extract synchronized visual or audio evidence | SME |
| Synchronize cross-modal HIFs | SG |
| Add 3D grounding under resource constraints | EAG |
| Preserve identity across time | Tracker ST |
| Emit structured human-context information | Final HIF |

This keeps the basic input layer modular, inspectable, and replaceable.

---

## Why This Matters

A basic input sublayer should not merely detect things.

It should create a coherent semantic basis for the next Human Context stages.

The purpose of this composition is to transform:

```text
raw sensor streams
```

into:

```text
tracked, grounded, synchronized human-context HIFs
```

Once this stream exists, the architecture can move to higher-level Human Context interpretation, such as semantic reuse, caching, intent interpretation, or adaptive signature learning.

The next pattern, **Tiered Semantic Cache / Proxy (TSC/TSP)**, addresses a different pressure point: how to avoid repeatedly reinterpreting semantically similar inputs when previous interpretations can be safely reused.


---

# Elastic Attention Governor (EAG)

Source file: `design-patterns/human-context/elastic-attention-governor.md`

# Elastic Attention Governor (EAG)

## Intent

The **Elastic Attention Governor (EAG)** manages limited computational resources by deciding:

```text
what should be processed first
+
how deeply or expensively it should be processed
```

EAG connects semantic priority with resource-aware processing.

In short:

```text
EAG = priority-aware ordering + resource-aware expert selection
```

The pattern usually combines two HML roles:

```text
Priority SG
  decides which HIFs deserve attention first

ES
  decides which processing expert should handle each HIF under current resource constraints
```

This is not merely a scheduler.

In social HRI, attention is a semantic decision.

The robot must remain responsive to the most socially relevant people, events, or risks while still adapting to CPU, GPU, memory, latency, battery, and other runtime constraints.

---

# Problem

HRI systems often receive more input than they can process at full fidelity.

For example:

- several people are visible
- several skeletons are detected
- several objects require spatial grounding
- several gestures may be unfolding
- several microphones or cameras produce input
- multiple models compete for the same GPU
- CPU, memory, or latency budget changes dynamically

A naive architecture may try to process everything at maximum quality.

This can cause the robot to freeze, lag, or become socially unresponsive.

A different naive architecture may process everything cheaply.

This preserves responsiveness, but may lose the accuracy needed for socially important interactions.

EAG addresses this tension by separating two questions:

```text
Which HIF should be processed first?

Which expert should process it under current resources?
```

The first question is handled by a **Priority SG**.  
The second question is handled by an **Escalation Switch (ES)**.

---

# Why Not Hide This Inside One Model?

A black-box end-to-end model might appear to solve attention and resource management implicitly.

However, this creates several problems.

The system may not know whether the model learned a cheaper processing path at all.

Even if the model did learn a cheaper internal path, it may use that path all the time because that was the easiest way to optimize the training objective.

Likewise, if the model learned a high-fidelity expensive path, it may use that path all the time unless resource awareness was explicitly part of the objective, training distribution, and evaluation protocol.

In practice, it is difficult to verify that a monolithic model switches between computational routes according to a meaningful runtime resource policy.

EAG makes this switch explicit.

The architecture exposes:

- the resource state
- the priority policy
- the prioritized queue
- the expert-selection policy
- the chosen expert
- the reason for degraded or high-fidelity processing
- the confidence and provenance of the output

This makes EAG easier to inspect, tune, test, replace, and govern.

It also allows future changes without retraining a monolithic model:

```text
replace the priority policy
replace the neural expert
replace the heuristic expert
change the GPU threshold
add a new intermediate expert
roll back to a previous policy
```

EAG therefore supports transparent adaptation rather than hidden computational behavior.

---

# Context

Use EAG when:

- multiple HIFs compete for attention
- not all HIFs can be processed equally deeply
- resource availability changes over time
- the system has multiple processing experts with different cost and fidelity
- low-priority HIFs may be delayed, downgraded, or skipped
- high-priority HIFs require deeper processing
- the system should degrade gracefully rather than fail
- resource decisions should be inspectable and policy-driven

EAG is especially useful for:

- multi-person perception
- 2D-to-3D skeleton lifting
- gaze or gesture processing
- object grounding
- scene understanding
- social opportunity detection
- edge robotics
- any robot that must remain responsive under resource constraints

EAG may be unnecessary when the input rate is low, resources are abundant, or there is only one processing method.

---

# HML Structure

## Abstract Pattern

The abstract EAG structure contains:

```text
Input HIFs
  → Priority SG
  → Prioritized Queue
  → ES
  → Processed HIFs
```

ResourceState HIFs influence both parts of the pattern:

```text
ResourceState HIF → Priority SG policy and priority expert
ResourceState HIF → ES policy and expert selection
```

The Priority SG decides **ordering**.  
The ES decides **processing mode**.

<div align="center">

<svg width="100%" viewBox="0 0 1160 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="eag-abstract-title eag-abstract-desc">
  <title id="eag-abstract-title">Elastic Attention Governor Abstract Pattern</title>
  <desc id="eag-abstract-desc">
    Candidate HIFs enter a Priority Sync Gate. Resource state informs priority policy and expert selection. The Priority SG emits a prioritized queue. An Escalation Switch then chooses a processing expert according to resource policy and emits processed HIFs.
  </desc>

  <defs>
    <marker id="arrow-eag-abstract" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Pattern wrapper -->
<path d="M 160 38 L 950 38 L 985 73 L 985 430 L 195 430 L 160 395 Z"
      fill="none"
      stroke="#d97706"
      strokeWidth="2"
      strokeDasharray="8 6" />
  <text x="602.5" y="68" textAnchor="middle" fontSize="19" fontFamily="Arial, sans-serif" fill="#d97706">Elastic Attention Governor</text>
  <text x="602.5" y="90" textAnchor="middle" fontSize="11.5" fontFamily="Arial, sans-serif" fill="#d97706">priority-aware ordering + resource-aware expert selection</text>

  <!-- Input HIFs -->
  <rect x="30" y="220" width="115" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="87.5" y="241" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Input HIFs</text>
  <text x="87.5" y="258" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">candidates</text>

  <!-- Resource state -->
  <rect x="300" y="360" width="185" height="62" rx="12" fill="none" stroke="currentColor" strokeWidth="1.4" />
  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="300" y="374" width="42" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="400" y="383" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">ResourceState HIF</text>
  <text x="400" y="401" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">CPU / GPU / Mem / latency</text>

  <!-- Priority SG -->
  <rect x="270" y="202" width="120" height="74" rx="13" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="330" y="232" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Priority</text>
  <text x="330" y="254" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <!-- Priority SG policy and lambda -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="268" y="110" width="40" height="40" preserveAspectRatio="xMidYMid meet" />
  <text x="288" y="164" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">priority policy</text>
  <line x1="288" y1="174" x2="304" y2="202" stroke="currentColor" strokeWidth="1.15" markerEnd="url(#arrow-eag-abstract)" />

  <text x="356" y="136" textAnchor="middle" fontSize="25" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/code-expert.svg" x="370" y="116" width="36" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="413" y="136" textAnchor="middle" fontSize="25" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <text x="385" y="164" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">priority expert</text>
  <line x1="385" y1="174" x2="360" y2="202" stroke="currentColor" strokeWidth="1.15" markerEnd="url(#arrow-eag-abstract)" />

  <!-- Queue -->
  <image href="/social-hri-framework/img/hml/prioritized-queue.svg" x="505" y="205" width="110" height="62" preserveAspectRatio="xMidYMid meet" />
  <text x="560" y="287" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Prioritized Queue</text>

  <!-- ES -->
  <rect x="720" y="202" width="105" height="74" rx="13" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="772.5" y="247" textAnchor="middle" fontSize="21" fontFamily="Arial, sans-serif" fill="currentColor">ES</text>

  <!-- ES resource policy -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="696" y="110" width="40" height="40" preserveAspectRatio="xMidYMid meet" />
  <text x="716" y="164" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">resource policy</text>
  <line x1="716" y1="174" x2="744" y2="202" stroke="currentColor" strokeWidth="1.15" markerEnd="url(#arrow-eag-abstract)" />

  <!-- Expert stack above ES: only two lambdas -->
  <text x="772" y="118" textAnchor="middle" fontSize="23" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="798" y="118" textAnchor="start" fontSize="11.5" fontFamily="Arial, sans-serif" fill="currentColor">high fidelity</text>

  <text x="772" y="148" textAnchor="middle" fontSize="23" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="798" y="148" textAnchor="start" fontSize="11.5" fontFamily="Arial, sans-serif" fill="currentColor">degraded fallback</text>

  <!-- Single vertical expert-stack arrow into ES -->
  <line x1="772" y1="158" x2="772" y2="202" stroke="currentColor" strokeWidth="1.15" markerEnd="url(#arrow-eag-abstract)" />

  <!-- Output -->
  <rect x="1035" y="220" width="110" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="1090" y="241" textAnchor="middle" fontSize="13.5" fontFamily="Arial, sans-serif" fill="currentColor">Processed</text>
  <text x="1090" y="258" textAnchor="middle" fontSize="13.5" fontFamily="Arial, sans-serif" fill="currentColor">HIFs</text>

  <!-- Main arrows -->
  <line x1="145" y1="245" x2="262" y2="239" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-abstract)" />
  <line x1="390" y1="239" x2="497" y2="239" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-abstract)" />
  <line x1="615" y1="239" x2="712" y2="239" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-abstract)" />
  <line x1="825" y1="239" x2="1027" y2="245" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-abstract)" />

  <!-- Resources to Priority SG -->
  <path d="M 392 360 L 392 318 L 346 276"
        fill="none" stroke="currentColor" strokeWidth="1.15" strokeDasharray="5 4" markerEnd="url(#arrow-eag-abstract)" />

  <!-- Resources to ES: exits from the right side of ResourceState HIF -->
  <path d="M 485 391 L 772 391 L 772 284"
        fill="none" stroke="currentColor" strokeWidth="1.15" strokeDasharray="5 4" markerEnd="url(#arrow-eag-abstract)" />

  <text x="650" y="408" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">resource state is both policy criterion and explicit expert input</text>
</svg>

</div>
---

# Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIFs | HIF stream | Candidate items competing for attention |
| ResourceState HIF | HIF / context input | Exposes CPU, GPU, memory, latency, battery, or other resource conditions |
| Priority SG | Sync Gate / priority gate | Scores and orders HIFs according to policy |
| Priority policy | Policy artifact | Defines priority criteria such as proximity, gaze, speaking, task relevance, or safety |
| λ priority expert | Semantic operator | Computes score or ordering |
| Prioritized Queue | Flow-control structure | Carries the ordered HIF stream |
| ES | Escalation Switch | Chooses processing expert for each HIF |
| ES resource policy | Policy artifact | Defines when to use high-fidelity, fallback, or degraded processing |
| λ high-fidelity expert | Semantic operator | Expensive but accurate expert, often neural or GPU-dependent |
| λ fallback expert | Semantic operator | Cheaper expert, often deterministic code or heuristic |
| Output HIF | HIF | Processed result with confidence, mode, and provenance |

---

# Flow

A typical EAG flow is:

```text
1. Several candidate HIFs enter the EAG.
2. ResourceState HIFs expose current CPU, GPU, memory, and latency state.
3. Priority SG scores the candidate HIFs according to policy.
4. Priority SG emits a prioritized queue.
5. ES consumes the queue in priority order.
6. ES selects the appropriate expert according to resource policy.
7. The selected expert processes the HIF.
8. The output HIF records processing mode, confidence, resource assumptions, and provenance.
```

Priority and processing mode are related, but distinct.

A HIF may be high priority yet still processed with a degraded expert if resources are constrained.

A HIF may be low priority but processed with a high-fidelity expert later if resources become available.

---

# Example Composition: 2D Skeleton to 3D Skeleton

One concrete Human Context example is 2D-to-3D skeleton enrichment.

Assume that an earlier SME has already produced several 2D skeleton HIFs.

The architecture now needs to estimate 3D joint positions.

There are at least two possible processing routes:

```text
λ[NN]
  dedicated neural 2D-to-3D skeleton lifting model
  higher fidelity
  usually requires GPU

λ[code]
  heuristic depth-based joint estimator
  lower fidelity
  works under constrained resources
```

The heuristic may work by sampling depth values around each 2D joint:

```text
for each 2D joint:
  sample depth points in a small radius around the joint
  reject invalid or noisy depth samples
  compute average or robust depth
  project the joint into 3D using camera geometry
```

This is a degraded mode, but it is still useful.

The robot continues to function instead of freezing when GPU is unavailable.



<div align="center">

<svg width="100%" viewBox="0 0 1220 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="eag-skeleton-title eag-skeleton-desc">
  <title id="eag-skeleton-title">Elastic Attention Governor 2D to 3D skeleton example</title>
  <desc id="eag-skeleton-desc">
    Multiple 2D skeleton HIFs and resource state enter an Elastic Attention Governor. A Priority SG orders skeletons, for example closer person first. A prioritized queue feeds an ES. The ES chooses either a neural 3D skeleton lifting expert or a heuristic depth-map expert according to resource policy.
  </desc>

  <defs>
    <marker id="arrow-eag-skeleton" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Main wrapper -->
  <path d="M 250 40 L 1005 40 L 1030 75 L 1030 505 L 285 505 L 250 470 Z"
        fill="none"
        stroke="#d97706"
        strokeWidth="2"
        strokeDasharray="8 6" />
  <text x="660" y="70" textAnchor="middle" fontSize="19" fontFamily="Arial, sans-serif" fill="#d97706">Elastic Attention Governor</text>
  <text x="660" y="92" textAnchor="middle" fontSize="11.5" fontFamily="Arial, sans-serif" fill="#d97706">2D skeleton prioritization + 3D lifting under resource constraints</text>

  <!-- Inputs -->
  <rect x="35" y="185" width="150" height="62" rx="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="110" y="211" textAnchor="middle" fontSize="13.5" fontFamily="Arial, sans-serif" fill="currentColor">2D Skeleton HIFs</text>
  <text x="110" y="230" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">multiple people</text>


  <rect x="260" y="415" width="175" height="62" rx="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="274" y="430" width="38" height="32" preserveAspectRatio="xMidYMid meet" />
  <text x="360" y="438" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">ResourceState HIF</text>
  <text x="360" y="456" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">GPU / CPU / Mem</text>

  <!-- Priority SG -->
  <rect x="310" y="185" width="125" height="76" rx="13" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="372.5" y="216" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Priority</text>
  <text x="372.5" y="239" textAnchor="middle" fontSize="19" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="296" y="105" width="38" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="315" y="157" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">priority policy</text>
  <line x1="315" y1="166" x2="342" y2="185" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-eag-skeleton)" />

  <text x="385" y="129" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/code-expert.svg" x="398" y="110" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="440" y="129" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <text x="414" y="157" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">closer / gaze / task</text>
  <line x1="414" y1="166" x2="405" y2="185" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-eag-skeleton)" />

  <!-- Queue -->
  <image href="/social-hri-framework/img/hml/prioritized-queue.svg" x="505" y="192" width="122" height="70" preserveAspectRatio="xMidYMid meet" />
  <text x="566" y="282" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">prioritized stream</text>
  <text x="566" y="298" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">e.g., closer first</text>

  <!-- ES -->
  <rect x="700" y="185" width="110" height="76" rx="13" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="755" y="231" textAnchor="middle" fontSize="22" fontFamily="Arial, sans-serif" fill="currentColor">ES</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="680" y="105" width="38" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="699" y="157" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">resource policy</text>
  <line x1="699" y1="166" x2="727" y2="185" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-eag-skeleton)" />

  <text x="778" y="129" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/nn-expert.svg" x="791" y="106" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="833" y="129" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <text x="807" y="157" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">NN 2D→3D lifter</text>
    <line x1="807" y1="166" x2="785" y2="185" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-eag-skeleton)" />



  <text x="878" y="129" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/code-expert.svg" x="891" y="106" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="933" y="129" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <text x="907" y="157" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">depth huristic</text>
  

  <!-- Experts -->
  
  
  <!-- Output -->
  <rect x="1088" y="200" width="115" height="58" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="1145.5" y="223" textAnchor="middle" fontSize="13.5" fontFamily="Arial, sans-serif" fill="currentColor">3D Skeleton</text>
  <text x="1145.5" y="241" textAnchor="middle" fontSize="13.5" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- Main arrows -->
  <line x1="185" y1="216" x2="302" y2="223" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-skeleton)" />
  <line x1="435" y1="223" x2="497" y2="227" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-skeleton)" />
  <line x1="627" y1="227" x2="692" y2="223" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-skeleton)" />
  <line x1="810" y1="223" x2="1080" y2="229" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-eag-skeleton)" />

  <!-- ES routes to experts -->
  
  

  <!-- Depth and resources -->

  <path d="M 360 415 L 360 385 L 372 261"
        fill="none" stroke="currentColor" strokeWidth="1.15" strokeDasharray="5 4" markerEnd="url(#arrow-eag-skeleton)" />
  <path d="M 435 446 L 755 446 L 755 269"
        fill="none" stroke="currentColor" strokeWidth="1.15" strokeDasharray="5 4" markerEnd="url(#arrow-eag-skeleton)" />

  <text x="607" y="466" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">same resource state informs both priority and expert selection</text>
</svg>

</div>



The Priority SG may rank people according to a policy such as:

```text
closer to the robot first
```

A more social policy may combine several signals:

```text
priority =
  proximity
+ gaze_toward_robot
+ speaking_probability
+ pointing_probability
+ task_relevance
+ safety_relevance
- estimated_processing_cost
```

The ES then selects the processing route according to resource policy.

Example:

```text
if GPU is available:
    use neural 2D-to-3D skeleton lifting
else:
    use depth-based heuristic joint estimation
```

The output HIF should record which path was used.

---

# ResourceState as Explicit Input

Resource state should not be hidden inside implementation code.

It should be modeled as explicit semantic input.

A ResourceState HIF may contain:

```json
{
  "type": "ResourceState",
  "properties": {
    "cpu_load": 0.47,
    "gpu_load": 0.94,
    "memory_available_mb": 2800,
    "gpu_memory_available_mb": 300,
    "latency_budget_ms": 80,
    "battery_level": 0.62
  },
  "timestamp": "t",
  "source_history": ["robot_resource_monitor"]
}
```

This resource state affects both:

```text
Priority SG:
  Which HIFs deserve attention first under current constraints?

ES:
  Which expert should process the next HIF?
```

The same information may be used as:

- input to priority scoring
- input to expert selection
- criteria inside declarative policy
- metadata in the output HIF
- evidence for later explanation

---

# Example Output HIF

A 3D Skeleton HIF produced under resource constraints may include:

```json
{
  "type": "Skeleton3D",
  "source": "EAG_2D_to_3D_skeleton",
  "properties": {
    "person_id": "track_17",
    "skeleton_3d": "...",
    "processing_mode": "heuristic_depth_joint_lifting",
    "reason": "gpu_unavailable",
    "priority_rank": 1
  },
  "confidence": {
    "skeleton_3d": 0.71,
    "resource_decision": 0.95
  },
  "processing_history": [
    "PrioritySG",
    "PrioritizedQueue",
    "Skeleton3DES",
    "DepthHeuristicExpert"
  ],
  "resource_state_used": {
    "gpu_load": 0.94,
    "gpu_memory_available_mb": 300,
    "cpu_load": 0.47
  }
}
```

If the neural expert was used, the same HIF may instead include:

```json
{
  "processing_mode": "neural_3d_skeleton_lifting",
  "reason": "gpu_available",
  "confidence": {
    "skeleton_3d": 0.89,
    "resource_decision": 0.96
  }
}
```

The key point is that degraded processing is not silent.

It remains visible in the HIF.

---

# SOCIAL Principles Supported

Within the SOCIAL framework, EAG supports:

## S-Separated Contexts

EAG keeps resource context explicit rather than hiding it inside perception code.

Human Context HIFs, ResourceState HIFs, and processing decisions remain distinguishable.

This allows the architecture to reason about human attention and robot capability without collapsing them into a single opaque state.

## O-Open Declarative

Priority rules and resource policies are represented as explicit artifacts.

The system can expose statements such as:

```text
Person track_17 was processed first because it was closest and looking toward the robot.
The heuristic expert was used because GPU load was above threshold.
```

## C-Clear Cognition

EAG separates two cognitive responsibilities:

```text
priority decision
processing-depth decision
```

This makes it easier to debug whether a failure came from bad prioritization or bad expert selection.

## I-Interpretable Gates

The Priority SG and ES are explicit decision points.

They can emit decisions such as:

```text
prioritize
delay
downgrade
skip
escalate
use_nn
use_heuristic
```

These decisions can be traced and audited.

## A-Adaptive Autonomy

EAG allows the robot to preserve useful behavior under resource constraints.

Instead of freezing or failing, the robot may reduce fidelity, delay low-priority items, or process only the most socially relevant HIFs.

## L-Layered Validation

Downstream layers can validate results according to their processing mode.

For example, an action planner may treat a neural 3D skeleton and a heuristic 3D skeleton differently because the HIF records confidence, method, and resource conditions.

---

# Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Accuracy vs latency | High-fidelity experts may improve output but increase delay |
| Fidelity vs availability | Degraded experts preserve behavior when resources are low |
| Social priority vs fairness | A proximity-based policy may starve low-priority people |
| Responsiveness vs completeness | Processing fewer HIFs may keep the robot responsive but less informed |
| Policy clarity vs tuning burden | Explicit policies are inspectable but require careful calibration |
| GPU quality vs CPU fallback | Neural processing may be more accurate, but heuristics may be more reliable under load |
| Modularity vs orchestration complexity | The pattern is flexible, but introduces queueing and resource-state management |

The main design tension is:

```text
social presence over maximum fidelity
```

A robot that freezes while trying to process everything perfectly is socially failing.

EAG favors useful responsiveness under constraints.

---

# Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| GPU unavailable | Use heuristic fallback and lower confidence |
| Too many HIFs | Use prioritized queue, bounded buffer, or drop/decay policy |
| Wrong priority policy | Expose priority score and allow policy tuning |
| Low-priority starvation | Add fairness or maximum-wait policy |
| Resource state stale | Timestamp ResourceState HIF and expire old values |
| Heuristic output noisy | Mark lower confidence and route to later validation |
| ES overuses expensive expert | Add budget policy and rate limits |
| ES overuses degraded expert | Add minimum quality thresholds |
| Socially relevant person ranked low | Combine proximity with gaze, speech, task relevance, and uncertainty |
| Hidden degraded mode | Require output HIF to record processing mode and reason |
| Policy conflicts | Route to validation or configuration review |

---

# Implementation Notes

An EAG implementation should usually define:

- candidate HIF type
- resource state schema
- priority policy
- priority scoring function
- queue behavior
- maximum queue length
- starvation policy
- ES expert stack
- expert cost model
- expert resource requirements
- fallback behavior
- output confidence structure
- processing-history fields

A possible configuration may look like:

```yaml
pattern: EAG
input_hif: Skeleton2D
resource_hif: ResourceState
priority_sg:
  policy:
    proximity_weight: 0.45
    gaze_weight: 0.25
    speaking_weight: 0.15
    task_relevance_weight: 0.15
    max_wait_ms: 300
  output: prioritized_queue
es:
  policy:
    use_neural_if:
      gpu_load_below: 0.70
      gpu_memory_available_mb_above: 1200
      latency_budget_ms_above: 60
    fallback: depth_heuristic
  experts:
    - name: neural_3d_lifter
      type: nn
      requires_gpu: true
    - name: depth_joint_heuristic
      type: code
      requires_gpu: false
```

The pattern does not require YAML, ROS, Python, or any specific middleware.

The key is that both priority and expert selection remain explicit and inspectable.

---

# Related Patterns

EAG is closely related to:

- **Synchronous Multi-Extractor (SME)** — SME may generate many candidate HIFs that EAG later prioritizes.
- **System Integrity and Agency Handler (SIAH)** — SIAH may produce ResourceState or integrity HIFs that inform EAG.
- **Task Prerequisite Resolver (TPR)** — TPR may depend on EAG outputs when deciding whether enough information exists for a task.
- **Social Opportunity TPR** — social opportunity may depend on where attention is allocated.
- **Layered Validation** — downstream validation may treat high-fidelity and degraded outputs differently.
- **Adaptive Autonomy** — EAG contributes to resource-aware autonomy adjustment.

---

# Minimal Summary

```text
EAG receives multiple candidate HIFs.
Priority SG orders them according to social, task, and resource policy.
ES processes them in that order using the best available expert.
When resources are constrained, ES may choose a cheaper fallback expert.
The output remains useful, explainable, and marked with its processing mode.
```

EAG is a foundational pattern for embodied AI on edge hardware:

```text
It does not merely reduce computation.
It preserves socially useful behavior under changing resource conditions.
```


---

# Example — Human Context Interpreter Sublayer

Source file: `design-patterns/human-context/human-context-interpreter-sublayer-example.md`

# Example — Human Context Interpreter Sublayer

This page shows one possible way to compose two Human Context Interpreter patterns:

```text
Tiered Semantic Cache / Proxy (TSC/TSP)
Adaptive Signature Learner (ASL)
```

The example is not a required architecture.  
It illustrates how a verbal interpretation pattern and a visual temporal-learning pattern can work together over the same HIF stream.

In this example, a person waves with the right hand and says:

```text
learn this gesture as "hello"
```

The **Text Interpreter TSP** interprets the utterance as a bounded semantic instruction.  
The **Visual Gesture ASL** uses that instruction to learn the recent visual motion signature under the name `hello`.

---

## Example Composition

<div align="center">

<img
  src="/social-hri-framework/img/hml/human-context-interpreter-sublayer-example.svg"
  alt="Example composition of Text Interpreter TSP and Visual Gesture ASL in the Human Context Interpreter sublayer"
  width="100%"
/>

</div>
---

## Walkthrough

The HIF stream arriving from the basic input layer contains both visual and verbal evidence.

In this example, the basic layer has already produced a stream that may include:

```text
tracked person
skeleton motion
spoken text
speaker / person association
timing metadata
```

The person waves and says:

```text
learn this gesture as "hello"
```

The interpreter sublayer uses two patterns together.

---

## Step 1 — Text Interpreter TSP interprets the verbal instruction

The text portion of the HIF stream is routed to the **Text Interpreter TSP**.

The TSP may first try a deterministic NLP interpreter.  
If the phrase is not directly matched, it may check a semantic cache or escalate to an LLM interpreter constrained to a closed set of supported instruction templates.

The output is a normalized HIF such as:

```json
{
  "instruction": "learn_gesture",
  "params": {
    "name": "hello"
  }
}
```

This means that the language interpreter does not freely decide what the robot should do.  
It maps the utterance into a supported instruction schema.

---

## Step 2 — Visual Gesture ASL receives the learning instruction

The interpreted instruction HIF is routed to the **Visual Gesture ASL**.

At the same time, the visual HIF stream provides the recent skeleton sequence.

The ASL now has both:

```text
what to do:
  learn a gesture named "hello"

what to learn from:
  the recent visual time-series window
```

The SG inside the ASL groups recent skeleton HIFs into a coherent time-series window.

The ST then enters learn mode and stores the observed motion signature under the label:

```text
hello
```

---

## Step 3 — Future classification

After learning, future time-series windows can be compared against the stored signature dictionary.

If a similar right-hand gesture appears later, the ASL may emit a HIF such as:

```json
{
  "type": "GestureHIF",
  "properties": {
    "gesture": "hello",
    "matched_signature": "sig_hello_01",
    "source_window": "recent_skeleton_window"
  },
  "confidence": {
    "match_confidence": 0.87
  }
}
```

The resulting HIF now contains an interpreted visual gesture that was taught through an interpreted verbal instruction.

---

## Why This Composition Matters

This example shows why the Human Context Interpreter is not merely a text interpreter and not merely a visual classifier.

It binds together:

```text
verbal interpretation
+
visual temporal signature learning
```

The Text Interpreter TSP gives the system a bounded symbolic instruction:

```text
learn gesture, name = hello
```

The Visual Gesture ASL uses that instruction to decide how to interpret the recent embodied evidence.

This creates a clean separation:

| Responsibility | Pattern |
|---|---|
| Interpret the spoken instruction | TSC/TSP |
| Build a recent visual time-series window | SG inside ASL |
| Learn or classify the motion signature | ASL |
| Store the learned association | Signature dictionary |
| Emit a structured gesture HIF | ASL output |

---

## Design Note

This is only one possible composition.

The same design idea can support other cases:

```text
"remember this whistle as call me"
"this motion means stop"
"when I do this, follow me"
"this melody means dinner time"
```

The verbal pattern tells the system what semantic association to create.  
The temporal ASL pattern determines what recent signal should be stored or classified.

The learned association may be:

- temporary
- session-local
- user-specific
- robot-specific
- persistent
- operator-approved
- globally shared

A deployment should decide which users are allowed to teach new signatures, which labels are safe, and whether learned signatures can trigger behavior directly or only add semantic annotations.

---

## Resulting Interaction Meaning

Before the interpreter layer, the system may only know:

```text
person moved hand
person said a sentence
```

After this composition, the system can know:

```text
the sentence was an instruction to learn a gesture
the recent hand motion is now labeled "hello"
future similar motions can be classified as "hello"
```

This is a small but important step toward interactive, personalized, and explainable human-context learning.


---

# Human Context Layer Example

Source file: `design-patterns/human-context/human-context-layer-example.md`

# Human Context Layer Example

## Overview

This page closes the Human Context section by summarizing how the patterns introduced so far may work together as a Human Context layer.

It does not define a required architecture.

Instead, it shows how the Human Context layer can be understood as a composition of two logical sublayers:

```text
Basic Input Sublayer
Interpreter Sublayer
```

The first sublayer turns raw human-related signals into semantic HIF streams.

The second sublayer interprets those streams into more explicit, reusable, and adaptive human-context meanings.

---

## Basic Input Sublayer

The basic input sublayer is responsible for transforming raw sensor input into meaningful human-context HIFs.

In the example developed in this section, this sublayer used:

```text
Synchronous Multi-Extractor (SME)
Elastic Attention Governor (EAG)
```

The role of **SME** is to extract multiple synchronized semantic signals from the same interaction moment.

For example:

```text
video frame
  → person detection
  → skeleton extraction
  → facial expression classification
  → gaze detection
```

The role of **EAG** is to prioritize and process human-related candidates under resource constraints.

For example:

```text
multiple detected people
  → prioritize who matters now
  → choose high-fidelity or fallback processing
  → produce usable 3D human-state information
```

Together, these patterns help convert raw signals into HIFs that may include:

```text
tracked human identity
3D skeleton
facial expression
gaze
spoken text
sentiment
spatial grounding
```

This is the basic semantic material on which higher interpretation can operate.

---

## Interpreter Sublayer

The interpreter sublayer is responsible for turning basic human-context HIFs into more explicit meanings.

In the examples developed in this section, this sublayer used:

```text
Tiered Semantic Cache / Proxy (TSC/TSP)
Adaptive Signature Learner (ASL)
```

The role of **TSC/TSP** is to resolve semantic inputs through a hierarchy of increasingly expensive or general solvers.

For example:

```text
template interpreter
  → semantic cache
  → constrained LLM interpreter
```

This allows the system to interpret language or other semantic requests efficiently and safely, while still mapping results into a closed set of supported robot meanings.

The role of **ASL** is to learn and classify temporal signatures from HIF streams.

For example:

```text
"learn this gesture as hello"
  → interpret the verbal instruction
  → observe the recent skeleton time window
  → store the visual signature as "hello"
  → classify similar future gestures
```

Together, TSC/TSP and ASL allow the Human Context layer to move beyond raw perception and into adaptive interpretation.

---

## One Possible Composition

A complete Human Context layer may therefore be understood as:




<div align="center">

<img
  src="/social-hri-framework/img/hml/human-context-layer-example.svg"
  alt="Human Context layer composition showing the Basic Input Sublayer and Interpreter Sublayer"
  width="100%"
/>

</div>
This diagram is an illustrative composition. It summarizes how the Basic Input Sublayer and Interpreter Sublayer may connect, while keeping each pattern replaceable and reusable.

```text
raw human-related signals
  → Basic Input Sublayer
      SME
      EAG
  → HumanState / Interaction HIF stream
  → Interpreter Sublayer
      TSC/TSP
      ASL
  → Interpreted Human Context HIFs
```

The final output may include both observed and interpreted human-context information.

For example:

```text
A tracked person is facing the robot.
The person said: "learn this gesture as dance".
The recent hand motion was stored as a gesture signature.
Future similar hand motions may be classified as "dance".
```

This creates a layered, inspectable, and reusable representation of human context.

---

## Why This Layer Matters

The Human Context layer is the part of the architecture that turns human presence, behavior, expression, language, and temporal patterns into structured interaction meaning.

It supports several architectural goals:

| Goal | Human Context contribution |
|---|---|
| Semantic grounding | Converts raw human signals into HIFs |
| Multimodal integration | Combines visual, audio, spatial, and temporal cues |
| Resource awareness | Uses EAG to adapt processing depth |
| Safe interpretation | Uses TSC/TSP to map inputs into supported schemas |
| Online adaptation | Uses ASL to learn new temporal signatures |
| Personalization | Supports user-specific gestures, phrases, or patterns |
| Traceability | Records how HIFs were produced, interpreted, and learned |

The layer is therefore not merely a perception stack.

It is the first socially meaningful layer of the architecture.

---

## Design Note

The compositions shown in this section are examples.

Different robots may use different sensors, different experts, different policies, and different runtime bindings.

The important architectural principle is that the layer remains modular:

```text
HIFs carry semantic information.
SME synchronizes multiple extractors.
EAG manages prioritization and resource-aware processing.
TSC/TSP resolves semantic requests through tiered reuse and escalation.
ASL learns and classifies temporal signatures.
```

Each pattern can be replaced, simplified, or extended without changing the overall purpose of the Human Context layer.

---

## Transition to Scene Context

The next layer is **Scene Context**.

The important point is that Scene Context does not require a completely new set of design patterns.

In fact, it can largely reuse the same patterns introduced in the Human Context section.

For example:

```text
SME
```

can be reused to run several scene analyzers over the same visual or spatial input:

```text
object detector
surface classifier
affordance detector
hazard detector
layout analyzer
```

And:

```text
EAG
```

can be reused to prioritize which parts of the scene deserve deeper processing:

```text
nearby objects
task-relevant objects
moving objects
objects close to humans
objects relevant to safety
```

The difference is not the architectural mechanism.

The difference is the semantic target.

In Human Context, the system asks:

```text
What is the human doing, saying, expressing, or teaching?
```

In Scene Context, the system asks:

```text
What is happening in the surrounding environment, and what parts of the scene matter for interaction?
```

Thus, Scene Context begins as a reuse-oriented layer.

It applies the same HML pattern language to the world around the human and robot.


---

# Human Context Overview

Source file: `design-patterns/human-context/human-context-overview.md`

# Human Context Overview

## Purpose

Human Context is the part of the HRI Design Pattern language that turns human-facing signals into structured semantic information about people and interaction.

It is not merely a computer-vision layer, an audio-processing layer, or a perception stack.

Human Context is the robot's semantically structured view of the human side of the interaction.

It helps the architecture answer questions such as:

```text
Who is present?
Where is the person?
What did the person say?
What is the person doing?
What is the person pointing at?
Is the person engaged, busy, approaching, leaving, distressed, or available?
Which human signals should affect reasoning, planning, or autonomy?
```

Human Context is often the first design-pattern group because socially intelligent HRI usually begins with the need to understand the human participant before deciding how to reason, respond, plan, or act.

---

# Human Context Is Not the Whole World Model

Human Context is only one part of the robot's semantic understanding.

It should be separated from:

- Scene Context — objects, rooms, obstacles, affordances, spatial layout
- Robot Context — robot state, resources, sensor health, autonomy state
- Context Management — memory, novelty, consistency, queries, pending tasks
- Social Planning — action opportunities, behavioral style, timing, modality
- Actuation — embodied or external effects

This separation supports the SOCIAL principle of **S-Separated Contexts**.

The human side of the interaction should be modeled clearly enough that it can later be synchronized with scene, robot, memory, and planning context without semantic contamination.

In HML terms:

```text
Human Context = human-facing HIF streams + human-oriented semantic enrichment
```

---

# Basic Input and Interpreter Roles

Within Human Context, this documentation distinguishes between two logical roles:

```text
Human Context — Basic Input
Human Context — Interpreter
```

## Basic Input

The Basic Input role creates and enriches human-facing HIFs from sources such as:

- video
- audio
- microphones
- cameras
- LiDAR or depth sensors
- UI events
- keyboard or touchscreen input
- human detection events
- raw gesture or pointing signals

This role is where the documentation first introduces patterns such as:

- **Synchronous Multi-Extractor (SME)**
- **Elastic Attention Governor (EAG)**

These patterns help create richer, synchronized, resource-aware HIFs from raw or early human-facing input streams.

## Interpreter

The Interpreter role turns human-facing HIFs into higher-level meaning.

It may infer:

- intent
- dialogue meaning
- gesture meaning
- engagement
- affect
- learned personal signatures
- user-specific interaction patterns
- context-dependent interpretation

This role is where the documentation introduces patterns such as:

- **Tiered Semantic Cache / Proxy (TSC/TSP)**
- **Adaptive Signature Learner (ASL)**

These patterns usually operate over HIFs that have already been created or enriched by earlier processing.

---

# Logical Layers, Not Runtime Boundaries

The distinction between Basic Input and Interpreter is logical.

It is not necessarily chronological.  
It is not necessarily a software boundary.  
It is not necessarily a ROS boundary.  
It is not necessarily a deployment boundary.

A concrete implementation may colocate experts from both logical roles if this is more efficient.

For example, a video SME may apply several experts over the same VideoFrame HIF:

```text
person detector
skeleton extractor
gaze estimator
facial-expression / affect interpreter
```

Logically, facial-expression interpretation may belong closer to the Interpreter role.

Engineering-wise, however, it may be better to invoke it near the video frame, while the raw frame is still available, rather than forwarding a large video frame through several middleware layers only to interpret it later.

The HML layer distinction therefore describes semantic responsibility, not physical data movement.

The ordering in this documentation is explanatory:

```text
Basic Input patterns are introduced first because they create or enrich the HIFs.
Interpreter patterns are introduced next because they conceptually depend on HIFs that already exist.
```

This ordering does not require every implementation to execute experts in exactly that order.

As long as the semantic contracts remain explicit, an implementation may fuse, colocate, reorder, or optimize expert execution.

---

# Typical Inputs and Outputs

Human Context may receive many different kinds of input HIFs.

Examples include:

| Input HIF | Meaning |
|---|---|
| VideoFrame HIF | A frame or short frame sequence from a camera |
| AudioSnippet HIF | Audio segment captured from microphone input |
| Text HIF | Transcribed or typed human language |
| UIEvent HIF | Human action through a screen, button, or interface |
| PointingEvent HIF | Raw or partially interpreted pointing signal |
| HumanDetection HIF | Detection of a person or human-like region |
| Sensor HIF | Human-relevant sensor input such as proximity or depth |

Human Context may produce several types of output HIFs.

Examples include:

| Output HIF | Meaning |
|---|---|
| HumanState HIF | Structured state of a person or group |
| Speech HIF | Speech-related semantic information |
| Text HIF | Transcribed or normalized language |
| IntentCandidate HIF | Candidate interpretation of a human instruction |
| Gesture HIF | Interpreted gesture or motion pattern |
| Engagement HIF | Engagement, attention, or availability estimate |
| HumanLocation HIF | Human position or spatial relation to the robot |
| PersonTrack HIF | Identity or tracking state over time |
| HumanAttention HIF | Gaze, focus, orientation, or attention estimate |

These names are illustrative.

A concrete architecture may use different HIF types, schemas, or names.

The important point is that human-facing information becomes explicit, structured, and traceable.

---

# Overview Diagram

The following diagram shows Human Context as a logical organization.

It is not a mandatory runtime graph.

<div align="center">

<svg width="100%" viewBox="0 0 1040 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="human-context-overview-title human-context-overview-desc">
  <title id="human-context-overview-title">Human Context Overview</title>
  <desc id="human-context-overview-desc">
    Human-facing sources are converted into Human Context HIF streams. Basic Input patterns such as SME and EAG support early enrichment and resource-aware attention. Interpreter patterns such as TSC/TSP and ASL infer higher-level human meaning. The outputs are structured Human Context HIFs.
  </desc>

  <defs>
    <marker id="arrow-human-context-overview" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Sources -->
  <rect x="30" y="175" width="145" height="150" rx="16" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="102.5" y="203" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Human-Facing</text>
  <text x="102.5" y="224" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Sources</text>
  <text x="102.5" y="255" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">camera / mic</text>
  <text x="102.5" y="273" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">UI / depth</text>
  <text x="102.5" y="291" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">human events</text>

  <!-- HC -->
  <rect x="220" y="205" width="95" height="90" rx="14" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="267.5" y="244" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="currentColor">HC</text>
  <text x="267.5" y="267" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">HIF Creator</text>

  <!-- Basic Input container -->
  <path d="M 365 55 L 665 55 L 690 80 L 690 245 L 390 245 L 365 220 Z"
        fill="none" stroke="#d97706" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="527.5" y="83" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#d97706">Basic Input Role</text>
  <text x="527.5" y="105" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">early HIF creation, enrichment, attention</text>

  <!-- SME shorthand -->
  <path d="M 405 130 L 510 130 L 525 145 L 525 195 L 420 195 L 405 180 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="465" y="158" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="#d97706">SME</text>
  <text x="465" y="177" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">multi-extract</text>

  <!-- EAG shorthand -->
  <path d="M 555 130 L 650 130 L 665 145 L 665 195 L 570 195 L 555 180 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="610" y="158" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="#d97706">EAG</text>
  <text x="610" y="177" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">attention</text>

  <!-- Interpreter container -->
  <path d="M 365 285 L 665 285 L 690 310 L 690 465 L 390 465 L 365 440 Z"
        fill="none" stroke="#d97706" strokeWidth="1.9" strokeDasharray="8 5" />
  <text x="527.5" y="313" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#d97706">Interpreter Role</text>
  <text x="527.5" y="335" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">intent, gesture, meaning, signatures</text>

  <!-- TSC/TSP shorthand -->
  <path d="M 405 360 L 525 360 L 540 375 L 540 425 L 420 425 L 405 410 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="472.5" y="388" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#d97706">TSC/TSP</text>
  <text x="472.5" y="407" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">tiered meaning</text>

  <!-- ASL shorthand -->
  <path d="M 575 360 L 650 360 L 665 375 L 665 425 L 590 425 L 575 410 Z"
        fill="none" stroke="#d97706" strokeWidth="1.7" />
  <text x="620" y="388" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="#d97706">ASL</text>
  <text x="620" y="407" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#d97706">signatures</text>

  <!-- Outputs -->
  <rect x="820" y="165" width="180" height="170" rx="16" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="910" y="194" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Human Context</text>
  <text x="910" y="216" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">HIF Outputs</text>
  <text x="910" y="249" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">HumanState HIF</text>
  <text x="910" y="267" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Speech / Text HIF</text>
  <text x="910" y="285" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Gesture HIF</text>
  <text x="910" y="303" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Engagement HIF</text>

  <!-- Main arrows -->
  <line x1="175" y1="250" x2="212" y2="250" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-human-context-overview)" />
  <line x1="315" y1="250" x2="360" y2="250" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Split into roles -->
  <line x1="360" y1="250" x2="360" y2="162" stroke="currentColor" strokeWidth="1.2" />
  <line x1="360" y1="162" x2="397" y2="162" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />

  <line x1="360" y1="250" x2="360" y2="392" stroke="currentColor" strokeWidth="1.2" />
  <line x1="360" y1="392" x2="397" y2="392" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Role internal arrows -->
  <line x1="525" y1="162" x2="547" y2="162" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />
  <line x1="540" y1="392" x2="567" y2="392" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Roles to output -->
  <line x1="690" y1="162" x2="812" y2="225" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-human-context-overview)" />
  <line x1="690" y1="392" x2="812" y2="275" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-human-context-overview)" />

  <!-- Note -->
  <text x="520" y="500" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">
    Logical organization only: implementations may colocate experts for efficiency.
  </text>
</svg>

</div>

The diagram shows two logical roles inside Human Context.

It does not require that Basic Input and Interpreter be deployed as separate runtime stages.

---

# Patterns Introduced in Human Context

Human Context introduces four foundational patterns.

## Synchronous Multi-Extractor (SME)

SME coordinates several semantic transformers operating over related input HIFs and synchronizes their outputs into a richer HIF.

One possible Human Context instantiation is:

```text
VideoFrame HIF
  → person detector ST
  → skeleton extractor ST
  → gaze estimator ST
  → expression classifier ST
  → SG
  → HumanState HIF
```

SME is introduced here because human context often requires multiple experts that describe the same interaction moment from different angles.

It is later reused in Scene Context and may also reappear in Social Action Styling.

---

## Elastic Attention Governor (EAG)

EAG manages attention, compute, fidelity, or processing depth according to social relevance, uncertainty, priority, and available resources.

One possible Human Context instantiation is:

```text
multiple detected people
  → priority and resource policy
  → lightweight processing for low-priority people
  → deeper processing for the active speaker or socially relevant person
```

EAG is introduced here because human-facing input often contains more information than the robot can process deeply at every moment.

The robot must decide where to focus without losing transparency.

---

## Tiered Semantic Cache / Proxy (TSC/TSP)

TSC/TSP supports tiered semantic interpretation.

A typical structure may try:

```text
rule-based interpretation
  ↓
semantic cache
  ↓
LLM or stronger model fallback
```

One possible Human Context instantiation is:

```text
Text HIF
  → deterministic parser
  → semantic cache
  → LLM fallback if needed
  → IntentCandidate HIF
```

This pattern helps keep interpretation fast, explainable, and cost-aware while still allowing escalation when simple methods are insufficient.

The exact naming between Tiered Semantic Cache and Tiered Semantic Proxy may be refined later.

The core idea is the same: interpretation should escalate through controlled semantic tiers rather than jumping directly to an expensive or opaque model.

---

## Adaptive Signature Learner (ASL)

ASL learns or recognizes user-specific signatures over time.

A signature may be:

- a personal gesture
- a repeated movement pattern
- a habitual interaction style
- a user-specific pointing style
- a temporal pattern of engagement
- a personalized semantic cue

One possible Human Context instantiation is:

```text
Skeleton HIF stream
  → Time-Series Window
  → learning / classification ST
  → GestureSignature HIF
```

ASL is introduced under the Interpreter role because it turns repeated human behavior into learned semantic meaning.

---

# Relationship to SOCIAL Principles

Human Context supports the SOCIAL framework in the following ways.

## S-Separated Contexts

Human Context keeps human-facing interpretation separate from scene, robot, memory, and planning context.

This prevents early fusion from mixing human state with object state, robot state, or action planning before the relevant semantic boundaries are clear.

## O-Open Declarative

Human-facing properties should be represented explicitly in HIFs.

Examples:

```text
person_id
location
gaze_direction
speech_text
gesture_candidate
engagement_score
confidence
source_history
processing_history
```

This makes human context inspectable rather than hidden inside model state.

## C-Clear Cognition

Human Context decomposes human understanding into visible semantic stages.

For example:

```text
AudioSnippet HIF
  → speech-to-text
  → intent candidate
  → confidence and ambiguity
```

This is clearer than treating the human input as a single opaque prompt to a model.

## I-Interpretable Gates

Human Context relies on gates and policies for synchronization, attention, escalation, and confidence.

Examples:

- an SG may wait for synchronized gaze and speech evidence
- an EAG may prioritize one person over another
- a TSC/TSP may decide whether to use cache or escalate to an LLM
- an ASL may reject a weak gesture signature

## A-Adaptive Autonomy

Human Context influences autonomy.

A robot may act differently depending on whether the person is busy, distressed, attentive, near, far, uncertainly identified, or explicitly requesting action.

Human Context therefore helps determine whether the robot should act, ask, wait, reduce autonomy, or escalate.

## L-Layered Validation

Human-facing information should not be used directly for action without validation.

Human Context preserves confidence, provenance, and intermediate interpretations so later layers can validate, cross-check, delay, or reject action candidates.

---

# Example Compositions Are Illustrative

The examples in this section illustrate possible ways to connect HML patterns.

They are not intended to prescribe a single perception stack.

A concrete robot may use different sensors, different models, different HIF schemas, and different runtime deployment choices.

The key requirement is that the semantic roles remain clear:

```text
What human-facing information entered?
Which experts interpreted it?
Which policies governed the interpretation?
What HIFs were produced?
What uncertainty and provenance were preserved?
```

---

# Output to Later Layers

Human Context outputs are usually consumed by later layers.

For example:

```text
HumanState HIF
  → Context Management

Gesture HIF
  → Task Prerequisite Resolver or Social Planning

IntentCandidate HIF
  → Query Social Handler or Task Prerequisite Resolver

Engagement HIF
  → Social Opportunity TPR

PersonTrack HIF
  → Spatial-Based Reasoning or HRI_DB Handler
```

Human Context is therefore not an isolated subsystem.

It provides semantically structured human information to the rest of the SOCIAL architecture.

---

# Conclusion

Human Context is the entry point for modeling the human side of Human-Robot Interaction.

It introduces foundational patterns for:

```text
multi-extraction
resource-aware attention
tiered semantic interpretation
adaptive personal signature learning
```

The distinction between Basic Input and Interpreter is logical rather than strictly chronological or implementation-level.

This allows the architecture to remain conceptually clear while still supporting efficient engineering choices.

The next page introduces the first Human Context pattern: **Synchronous Multi-Extractor (SME)**.


---

# Synchronous Multi-Extractor (SME)

Source file: `design-patterns/human-context/synchronous-multi-extractor.md`

# Synchronous Multi-Extractor (SME)

## Intent

The **Synchronous Multi-Extractor (SME)** coordinates several Semantic Transformers that process the same input frame, source moment, or interaction slice, and synchronizes their outputs into one coherent enriched HIF.

In short:

```text
SME = parallel semantic extraction + synchronization into one enriched HIF
```

The pattern is useful when several experts can extract complementary semantic properties from the same interaction moment, but downstream reasoning should receive a single temporally coherent HIF.

A useful intuition is **map-reduce**:

```text
map:    several STs extract different semantic properties
reduce: one SG synchronizes and aggregates them into a coherent HIF
```

However, SME is not merely a data-processing pattern.

In HRI, the synchronization step is semantic and temporal.  
It determines whether extracted properties belong to the same interaction moment.

---

# Problem

Human-Robot Interaction often depends on multiple cues that occur close together in time:

- a person enters the frame
- the person turns toward the robot
- the person smiles
- the person points
- the person speaks
- the person shifts attention
- the person begins a gesture

These cues may be processed by different experts with different latencies.

For example:

```text
person detection may be fast
skeleton extraction may be slower
gaze estimation may be noisy
facial expression classification may arrive a few frames later
```

If the system simply merges the latest available result from each expert, it may create **semantic ghosting**.

Semantic ghosting occurs when the robot combines cues that do not belong to the same interaction moment.

Example:

```text
smile from frame X
+
gaze from frame Y
+
gesture from frame Z
+
speech from a different moment
=
incorrect interpretation of the human state
```

SME prevents this by making synchronization explicit.

The SG does not merely concatenate outputs.  
It applies a synchronization policy and aggregation logic before publishing an enriched HIF.

---

# Context

Use SME when:

- several experts process the same source frame, source segment, or interaction slice
- each expert extracts a different semantic property
- downstream reasoning requires a coherent enriched HIF
- the extracted properties must be temporally aligned
- experts may complete asynchronously
- partial results may need timeout, buffering, or confidence policies
- the architecture should allow adding or removing experts without changing the whole pipeline

SME is especially useful for:

- video-frame analysis
- audio analysis
- multimodal perception
- human-state estimation
- scene analysis
- action styling
- any situation where multiple semantic properties are extracted in parallel and then synchronized

SME may be unnecessary when a single expert already produces all required properties with acceptable timing, explainability, and modularity.

---

# HML Structure

## Abstract Pattern

The abstract SME structure contains:

```text
Input HIF
  → parallel STs
  → SG
  → Enriched HIF
```

The STs perform the extraction.  
The SG performs synchronization, alignment, and aggregation.

<div align="center">

<svg width="100%" viewBox="0 0 1040 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sme-abstract-title sme-abstract-desc">
  <title id="sme-abstract-title">Synchronous Multi-Extractor Abstract Pattern</title>
  <desc id="sme-abstract-desc">
    An input HIF is processed by several parallel Semantic Transformers. Each ST has its own policy and expert. A Sync Gate aggregates the temporally aligned outputs into one enriched HIF.
  </desc>

  <defs>
    <marker id="arrow-sme-abstract" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Input -->
  <rect x="25" y="210" width="120" height="48" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="85" y="239" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <!-- Output -->
  <rect x="885" y="210" width="130" height="48" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="950" y="230" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Enriched</text>
  <text x="950" y="247" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- Pattern wrapper -->
  <path d="M 190 30 L 810 30 L 835 55 L 835 395 L 215 395 L 190 370 Z"
        fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="8 6" />
  <text x="510" y="60" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#d97706">Synchronous Multi-Extractor</text>
  <text x="510" y="82" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#d97706">parallel ST extraction + SG synchronization</text>

  <!-- ST1 -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="300" y="92" width="28" height="28" preserveAspectRatio="xMidYMid meet" />
  <text x="354" y="112" textAnchor="middle" fontSize="22" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ₁</text>
  <rect x="280" y="128" width="110" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="335" y="158" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">ST₁</text>
  <line x1="314" y1="122" x2="314" y2="128" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-abstract)" />
  <line x1="354" y1="118" x2="354" y2="128" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-abstract)" />

  <!-- ST2 -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="300" y="187" width="28" height="28" preserveAspectRatio="xMidYMid meet" />
  <text x="354" y="207" textAnchor="middle" fontSize="22" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ₂</text>
  <rect x="280" y="223" width="110" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="335" y="253" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">ST₂</text>
  <line x1="314" y1="217" x2="314" y2="223" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-abstract)" />
  <line x1="354" y1="213" x2="354" y2="223" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-abstract)" />

  <!-- ST3 -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="300" y="282" width="28" height="28" preserveAspectRatio="xMidYMid meet" />
  <text x="354" y="302" textAnchor="middle" fontSize="22" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ₃</text>
  <rect x="280" y="318" width="110" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="335" y="348" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">ST₃</text>
  <line x1="314" y1="312" x2="314" y2="318" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-abstract)" />
  <line x1="354" y1="308" x2="354" y2="318" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-abstract)" />

  <!-- SG -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="585" y="110" width="38" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="666" y="138" textAnchor="middle" fontSize="30" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>

  <text x="604" y="162" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">sync policy</text>
  <text x="666" y="162" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">aggregator</text>

  <rect x="570" y="188" width="110" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="625" y="221" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <line x1="604" y1="170" x2="604" y2="188" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-abstract)" />
  <line x1="666" y1="170" x2="666" y2="188" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-abstract)" />

  <!-- Input split -->
  <line x1="145" y1="234" x2="220" y2="234" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-sme-abstract)" />
  <line x1="220" y1="234" x2="245" y2="234" stroke="currentColor" strokeWidth="1.2" />

  <line x1="245" y1="234" x2="245" y2="153" stroke="currentColor" strokeWidth="1.2" />
  <line x1="245" y1="153" x2="272" y2="153" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-abstract)" />

  <line x1="245" y1="234" x2="272" y2="248" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-abstract)" />

  <line x1="245" y1="234" x2="245" y2="343" stroke="currentColor" strokeWidth="1.2" />
  <line x1="245" y1="343" x2="272" y2="343" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-abstract)" />

  <!-- ST outputs to SG -->
  <line x1="390" y1="153" x2="490" y2="153" stroke="currentColor" strokeWidth="1.2" />
  <line x1="490" y1="153" x2="490" y2="248" stroke="currentColor" strokeWidth="1.2" />

<line x1="390" y1="248" x2="490" y2="248" stroke="currentColor" strokeWidth="1.2" />

  <line x1="390" y1="343" x2="490" y2="343" stroke="currentColor" strokeWidth="1.2" />
  <line x1="490" y1="343" x2="490" y2="219" stroke="currentColor" strokeWidth="1.2" />
  <line x1="490" y1="219" x2="562" y2="219" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-abstract)" />

  <!-- SG to output -->
  <line x1="680" y1="215" x2="877" y2="234" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-sme-abstract)" />

  <!-- bottom note -->
  <text x="510" y="378" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">
    Each ST is autonomous; the SG synchronizes their outputs into one coherent enriched HIF.
  </text>
</svg>

</div>
---

# Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF | HIF | Carries the shared input frame, segment, or interaction slice |
| ST₁..STₙ | Semantic Transformers | Extract complementary semantic properties from the same input |
| λ₁..λₙ | Semantic Operators | Implement the extraction expertise |
| SG | Sync Gate | Waits, aligns, validates, and aggregates the extracted outputs |
| Synchronization policy | Policy artifact | Defines time window, required/optional extractors, timeout, confidence, and merge behavior |
| λ aggregator | Semantic Operator | Combines accepted properties into one enriched HIF |
| Output HIF | HIF | Carries the synchronized enriched semantic frame |

---

# Flow

A typical SME flow is:

```text
1. An input HIF enters the pattern.
2. The input HIF is distributed to several ST cells.
3. Each ST applies its own λ expert and produces an enriched HIF or extracted property set.
4. The SG receives the extraction outputs, possibly asynchronously.
5. The SG applies a synchronization policy.
6. Accepted properties are aggregated into a single enriched HIF.
7. The enriched HIF is sent downstream.
```

The SG may also:

- wait for missing extractors
- emit a partial HIF after timeout
- reject inconsistent evidence
- preserve disagreement
- mark confidence per property
- route low-confidence cases to later validation or escalation

---

# Example Composition: Human Video Analyzer

One possible Human Context instantiation begins with a camera stream.

A camera source is converted into a VideoFrame HIF by an HC.  
A Person Detector ST first checks whether a human is present.  
Only if a person is detected does the architecture enter the SME pattern.

Inside the SME, several image-based experts process the same VideoFrame HIF:

```text
skeleton extractor
facial expression classifier
gaze detector
```

The Aggregator SG then synchronizes the extracted properties into one HumanState HIF.

This example illustrates one possible composition.  
It is not a required perception stack.

<div align="center">

<svg width="100%" viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sme-video-example-title sme-video-example-desc">
  <title id="sme-video-example-title">Synchronous Multi-Extractor Video Example</title>
  <desc id="sme-video-example-desc">
    A camera creates a VideoFrame HIF. A person detector first checks whether a person is present.
    If a person is found, an SME runs skeleton, facial expression, and gaze extractors over the same frame,
    then synchronizes their outputs through an SG into a HumanState HIF.
  </desc>

  <defs>
    <marker id="arrow-sme-video" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Source -->
  <rect x="30" y="238" width="90" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="75" y="264" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">camera</text>

  <!-- HC -->
  <rect x="170" y="220" width="78" height="78" rx="12" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="209" y="266" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif" fill="currentColor">HC</text>

  <!-- VideoFrame HIF -->
  <rect x="295" y="238" width="130" height="42" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="360" y="255" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">VideoFrame</text>
  <text x="360" y="272" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="green">HIF</text>

  <!-- Person Detector ST -->
  <rect x="485" y="220" width="140" height="78" rx="12" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="555" y="252" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Person</text>
  <text x="555" y="273" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Detector ST</text>

  <!-- Main flow arrows -->
  <line x1="120" y1="259" x2="162" y2="259" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-sme-video)" />
  <line x1="248" y1="259" x2="287" y2="259" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-sme-video)" />
  <line x1="425" y1="259" x2="477" y2="259" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-sme-video)" />

  <!-- Person Detector policy -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="505" y="128" width="42" height="42" preserveAspectRatio="xMidYMid meet" />
  <text x="526" y="184" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">policy</text>
  <line x1="526" y1="194" x2="526" y2="220" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-video)" />

  <!-- Person Detector lambda + NN expert -->
  <text x="583" y="152" textAnchor="middle" fontSize="30" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/nn-expert.svg" x="598" y="124" width="48" height="48" preserveAspectRatio="xMidYMid meet" />
  <text x="656" y="152" textAnchor="middle" fontSize="30" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <text x="623" y="184" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">person detector</text>
  <line x1="623" y1="194" x2="623" y2="220" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-sme-video)" />

  <!-- Decision -->
  <polygon points="700,259 755,218 810,259 755,300" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="755" y="253" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">person</text>
  <text x="755" y="270" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">found?</text>

  <line x1="625" y1="259" x2="692" y2="259" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-sme-video)" />

  <!-- No branch -->
  <line x1="755" y1="300" x2="755" y2="340" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-sme-video)" />
  <text x="772" y="324" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">no</text>

  <rect x="704" y="344" width="112" height="38" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" />
  <text x="760" y="368" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">no HumanState</text>

  <!-- Yes branch -->
  <line x1="810" y1="259" x2="850" y2="259" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-sme-video)" />
  <text x="823" y="247" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">yes</text>

  <!-- SME boundary -->
<path d="M 850 48 L 1150 48 L 1185 83 L 1185 405 L 885 405 L 850 370 Z"
      fill="none"
      stroke="#f97316"
      strokeWidth="2"
      strokeDasharray="8 6" />

  <text x="1000" y="78" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#f97316">SME</text>
  <text x="1000" y="98" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#f97316">
    image-based detectors over the same frame
  </text>

  <!-- SME ST boxes -->
  <rect x="895" y="142" width="125" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="957.5" y="160" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Skeleton</text>
  <text x="957.5" y="176" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Extractor ST</text>

  <rect x="895" y="230" width="125" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="957.5" y="248" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Facial Expression</text>
  <text x="957.5" y="264" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Classifier ST</text>

  <rect x="895" y="318" width="125" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="957.5" y="336" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Gaze</text>
  <text x="957.5" y="352" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Detector ST</text>

  <!-- SME input fanout -->
  <line x1="850" y1="259" x2="872" y2="259" stroke="currentColor" strokeWidth="1.3" />
  <line x1="872" y1="259" x2="872" y2="164" stroke="currentColor" strokeWidth="1.3" />
  <line x1="872" y1="164" x2="887" y2="164" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-sme-video)" />

  <line x1="872" y1="259" x2="887" y2="252" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-sme-video)" />

  <line x1="872" y1="259" x2="872" y2="340" stroke="currentColor" strokeWidth="1.3" />
  <line x1="872" y1="340" x2="887" y2="340" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-sme-video)" />

  <!-- Skeleton ST policy and λ[NN] -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="895" y="105" width="26" height="26" preserveAspectRatio="xMidYMid meet" />
  <line x1="908" y1="133" x2="925" y2="142" stroke="currentColor" strokeWidth="1.0" markerEnd="url(#arrow-sme-video)" />

  <text x="950" y="125" textAnchor="middle" fontSize="21" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/nn-expert.svg" x="961" y="106" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="1003" y="125" textAnchor="middle" fontSize="21" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <line x1="982" y1="138" x2="982" y2="142" stroke="currentColor" strokeWidth="1.0" markerEnd="url(#arrow-sme-video)" />

  <!-- Facial Expression ST policy and λ[NN] -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="895" y="193" width="26" height="26" preserveAspectRatio="xMidYMid meet" />
  <line x1="908" y1="221" x2="925" y2="230" stroke="currentColor" strokeWidth="1.0" markerEnd="url(#arrow-sme-video)" />

  <text x="950" y="213" textAnchor="middle" fontSize="21" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/nn-expert.svg" x="961" y="194" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="1003" y="213" textAnchor="middle" fontSize="21" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <line x1="982" y1="226" x2="982" y2="230" stroke="currentColor" strokeWidth="1.0" markerEnd="url(#arrow-sme-video)" />

  <!-- Gaze ST policy and λ[NN] -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="895" y="281" width="26" height="26" preserveAspectRatio="xMidYMid meet" />
  <line x1="908" y1="309" x2="925" y2="318" stroke="currentColor" strokeWidth="1.0" markerEnd="url(#arrow-sme-video)" />

  <text x="950" y="301" textAnchor="middle" fontSize="21" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/nn-expert.svg" x="961" y="282" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="1003" y="301" textAnchor="middle" fontSize="21" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <line x1="982" y1="314" x2="982" y2="318" stroke="currentColor" strokeWidth="1.0" markerEnd="url(#arrow-sme-video)" />

  <!-- SG -->
  <rect x="1060" y="223" width="68" height="68" rx="11" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="1094" y="264" textAnchor="middle" fontSize="19" fontFamily="Arial, sans-serif" fill="currentColor">SG</text>

  <!-- SG policy and λ[code] -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="1052" y="138" width="38" height="38" preserveAspectRatio="xMidYMid meet" />
  <text x="1071" y="190" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">sync policy</text>
  <line x1="1071" y1="198" x2="1080" y2="223" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-video)" />

  <text x="1116" y="162" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ[</text>
  <image href="/social-hri-framework/img/hml/code-expert.svg" x="1128" y="142" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
  <text x="1170" y="162" textAnchor="middle" fontSize="24" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">]</text>
  <text x="1145" y="190" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="currentColor">aggregate</text>
  <line x1="1145" y1="198" x2="1110" y2="223" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-sme-video)" />

  <!-- ST outputs to SG -->
  <line x1="1020" y1="164" x2="1042" y2="164" stroke="currentColor" strokeWidth="1.3" />
  <line x1="1042" y1="164" x2="1042" y2="244" stroke="currentColor" strokeWidth="1.3" />
  <line x1="1042" y1="244" x2="1052" y2="244" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-sme-video)" />

  <line x1="1020" y1="252" x2="1052" y2="252" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-sme-video)" />

  <line x1="1020" y1="340" x2="1042" y2="340" stroke="currentColor" strokeWidth="1.3" />
  <line x1="1042" y1="340" x2="1042" y2="270" stroke="currentColor" strokeWidth="1.3" />
  <line x1="1042" y1="270" x2="1052" y2="270" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-sme-video)" />

  <!-- SG output -->
  <line x1="1094" y1="291" x2="1094" y2="410" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-sme-video)" />

  <rect x="1035" y="424" width="118" height="46" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="1094" y="443" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">HumanState</text>
  <text x="1094" y="461" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="green">HIF</text>
</svg>

</div>
The important point is not the exact set of detectors.

The important point is that several semantic properties are extracted from a shared frame or interaction slice and then synchronized before being treated as one human-context state.

---

# Temporal Synchronization

The SG in SME defines when extracted properties are allowed to belong together.

For example:

```text
frame t:     person detected
frame t+1:   skeleton result arrives
frame t+2:   facial expression result arrives
frame t+3:   gaze result arrives
```

The SG may decide that these still belong to the same interaction window.

In another case, a delayed smile may not belong to the same event:

```text
frame t:     user speaks
frame t+20:  smile detected
```

Whether the smile belongs to the spoken event depends on the synchronization policy.

The policy may define:

- maximum frame offset
- maximum time window
- required extractors
- optional extractors
- confidence thresholds
- partial-output rules
- timeout behavior
- whether to hold, emit, reject, or mark uncertain

This is why SME is a semantic pattern, not merely a parallel-processing pattern.

---

# Example HIF Output

A synchronized HumanState HIF may contain properties such as:

```json
{
  "type": "HumanState",
  "source": "video_analyzer",
  "timestamp_window": {
    "start": "t",
    "end": "t+3"
  },
  "properties": {
    "person_detected": true,
    "person_id": "track_17",
    "skeleton_2d": "...",
    "gaze_direction": "toward_robot",
    "facial_expression": "smile"
  },
  "confidence": {
    "person": 0.94,
    "skeleton": 0.88,
    "gaze": 0.76,
    "expression": 0.81,
    "synchronization": 0.86
  },
  "processing_history": [
    "PersonDetectorST",
    "SkeletonExtractorST",
    "GazeDetectorST",
    "FacialExpressionClassifierST",
    "AggregatorSG"
  ]
}
```

The schema is illustrative.

A concrete implementation may use different fields, types, or confidence structures.

The important requirement is that the resulting HIF preserves:

- extracted properties
- confidence
- source history
- timing
- processing history
- synchronization assumptions

---

# Reuse

SME is introduced in Human Context because human-state estimation is an intuitive first example.

However, SME is not limited to Human Context.

| Reuse Location | How SME Reappears |
|---|---|
| Human Context | Person, skeleton, gaze, expression, speech, sentiment extraction |
| Scene Context | Object, door, stair, obstacle, slope, affordance extraction |
| Robot Context | Sensor health, battery, CPU, memory, actuator state synchronization |
| Social Action Stylist | Several stylists generate candidate modalities that must be synchronized |
| Actuation | Multiple execution feedback streams may be synchronized into one ExecutionFeedback HIF |

This is why SME is a foundational pattern.

It captures a general HRI need:

```text
several semantic views of the same interaction moment must become one coherent HIF
```

---

# SOCIAL Principles Supported

Within the SOCIAL framework, SME supports:

- **S-Separated Contexts** by allowing each extractor to operate as a separate semantic path before controlled synchronization.
- **O-Open Declarative** by making each extracted property explicit in the resulting HIF rather than hidden inside a monolithic model output.
- **C-Clear Cognition** by decomposing perception into named semantic stages such as person detection, skeleton extraction, gaze estimation, and expression classification.
- **I-Interpretable Gates** by making the SG responsible for explicit synchronization decisions such as wait, emit, partial emit, reject, or mark uncertain.
- **A-Adaptive Autonomy** by enabling the robot to reduce confidence, wait for better evidence, or avoid action when synchronized human context is incomplete.
- **L-Layered Validation** by preserving per-extractor confidence and synchronization confidence for downstream validation before planning or execution.

---

# Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Latency | The SG may wait for slower experts before emitting an enriched HIF |
| Buffer complexity | The system must manage timing windows, partial results, and stale outputs |
| Resource cost | Running several experts in parallel may require CPU/GPU resources |
| Policy tuning | Synchronization windows and timeout policies must be tuned carefully |
| Partial evidence | The system must decide whether incomplete extraction is usable |
| Error propagation | Bad extractor outputs may still enter the synchronized HIF if validation is weak |
| Modularity vs overhead | Adding experts is easy architecturally, but each expert increases operational complexity |

The main design tension is:

```text
semantic consistency vs. latency
```

SME improves data integrity but may slow down response if synchronization is too strict.

---

# Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| One extractor is slow | Use timeout policy and emit partial HIF with missing-property markers |
| One extractor fails | Preserve failure in processing history and continue if policy allows |
| Extractors disagree | Preserve disagreement and route to validation or escalation |
| Results come from different frames | Use timestamp windows and synchronization confidence |
| SG waits too long | Use bounded buffers and maximum latency policy |
| SG emits too early | Require minimum evidence or confidence thresholds |
| Stale result is reused accidentally | Attach timestamps and source history to each property |
| Too many experts overload compute | Combine SME with EAG to allocate resources adaptively |
| Downstream layer overtrusts output | Preserve per-property confidence and validation status |

---

# Implementation Notes

An SME implementation should usually define:

- input HIF type
- extractor list
- required vs optional extractors
- per-extractor timeout
- synchronization window
- per-property confidence representation
- buffer size
- stale-result policy
- partial-output policy
- aggregation strategy
- processing-history format

A possible configuration may look like:

```yaml
pattern: SME
input_hif: VideoFrame
extractors:
  - name: skeleton_extractor
    required: true
    timeout_ms: 80
  - name: facial_expression_classifier
    required: false
    timeout_ms: 120
  - name: gaze_detector
    required: false
    timeout_ms: 100
sync_gate:
  max_window_ms: 150
  partial_output: true
  min_required_confidence: 0.70
```

This is only a reference style.

The pattern does not require YAML, ROS, Python, or any specific middleware.

The key is that the synchronization contract remains explicit.

---

# Related Patterns

SME is closely related to:

- **Elastic Attention Governor (EAG)** — EAG can decide which SME extractors run, at what fidelity, or for which human target.
- **Adaptive Signature Learner (ASL)** — ASL may consume synchronized skeleton or gesture HIFs produced by SME.
- **Context Novelty Extractor (CNE)** — CNE may detect meaningful changes in the synchronized HumanState HIF.
- **Social Action Stylist (SAS)** — SAS can reuse the same multi-output-and-synchronize structure for candidate behavior styles.
- **Layered Validation** — downstream validation can use SME's per-extractor confidence and synchronization history.

---

# Minimal Summary

```text
SME runs multiple semantic extractors over a shared interaction slice.
Each extractor produces a partial semantic view.
An SG synchronizes and aggregates those views into one enriched HIF.
The pattern prevents semantic ghosting and temporal hallucination.
```

SME is the first foundational HRI Design Pattern because it establishes a central idea of the framework:

```text
social meaning should be assembled through explicit, inspectable, synchronized semantic structure
rather than hidden inside one opaque perception result.
```


---

# Tiered Semantic Cache / Proxy (TSC/TSP)

Source file: `design-patterns/human-context/tiered-semantic-cache-proxy.md`

# Tiered Semantic Cache / Proxy (TSC/TSP)

## Intent

**Tiered Semantic Cache / Proxy (TSC/TSP)** is a pattern for resolving semantic requests through a hierarchy of increasingly expensive, general, or deep solvers.

The pattern starts with the cheapest and safest semantic layer. If that layer cannot resolve the input, it checks whether a higher-tier solution is already available through a cache proxy. Only when the cache cannot answer does the system escalate to the next solver.

```text
try the local semantic solver
  → if it fails, check the next tier's semantic cache
  → if cache misses, invoke the next tier solver
  → store the reusable semantic mapping
  → return the normalized result
```

TSC/TSP is not limited to text interpretation. It can be used for intent interpretation, memory lookup, semantic retrieval, reference resolution, object/person lookup, command normalization, preference retrieval, recurring social interpretation, or repeated reasoning results.

The key idea is that the cache does not merely store raw data. It stores **semantic mappings**, **normalized interpretations**, or **reusable reasoning results**.

---

## Problem

HRI systems often need to resolve semantic inputs repeatedly.

Examples:

```text
"where is Bob?"
"do you know Bob's whereabouts?"
"bring the blue bottle to Bob"
"who was near the robot a minute ago?"
"what did Alice ask earlier?"
```

A naive system may use one of two extremes.

### Deterministic-only interpretation

```text
fast
safe
cheap
debuggable
but brittle
```

This works well when the input exactly matches a known template, query, or memory lookup. However, it fails when the user uses a paraphrase, an indirect question, or a slightly different wording.

### Always use the deepest solver

```text
flexible
general
powerful
but slower, more expensive, and harder to control
```

For example, always calling an LLM, always querying the full HRI_DB, or always searching a large external corpus may be unnecessary. It may also be unsafe if the solver is allowed to invent unsupported robot actions, unsupported query types, or unvalidated facts.

TSC/TSP provides a middle path:

```text
cheap and safe first
cached semantic reuse second
expensive or general solver only when needed
```

---

## Why This Is Not Just an ES

TSC/TSP may look similar to an Escalation Switch (ES), but it solves a different architectural problem.

An **ES** selects among experts according to a policy. For example:

```text
if confidence is low:
    use a stronger expert

if GPU is unavailable:
    use a heuristic expert

if risk is high:
    escalate to a safer validator
```

The ES policy decides which expert should be used under the current conditions. When the condition changes, the selected expert may change.

TSC/TSP is different. It is a **hierarchical semantic resolution structure**.

The flow is not simply:

```text
choose one expert from a stack
```

but rather:

```text
try tier i
  → if tier i cannot solve
  → check whether tier i+1 already has a cached semantic solution
  → if not, invoke tier i+1
  → propagate the solution back as reusable semantic knowledge
```

This is similar in spirit to cache hierarchies in computer systems:

```text
L1 cache → L2 cache → RAM → disk
```

but the cached content is semantic:

```text
surface phrase → normalized query
partial lookup → resolved entity
short-term memory miss → HRI_DB result
HRI_DB miss → external corpus result
```

The cache is therefore not only a performance optimization. It is a controlled semantic reuse layer.

---

## Context

Use TSC/TSP when the system has:

- repeated semantic requests
- several possible solver tiers
- large cost differences between tiers
- a need for deterministic fast-paths
- a need for safe bounded interpretation
- recurring paraphrases or query forms
- memory hierarchies
- expensive reasoning calls
- external knowledge sources
- interpretable escalation requirements

Typical tier structures include:

```text
regex / template matcher
  → paraphrase cache
  → constrained LLM mapper
```

```text
short-term memory
  → HRI_DB
  → archived interaction history
  → external corpus
```

```text
local deterministic lookup
  → semantic cache
  → cloud service
```

```text
known user preference cache
  → user profile store
  → clarification request
```

---

## HML Structure

The abstract structure contains a chain of solver tiers connected through cache proxies.

<div align="center">

<img
  src="/social-hri-framework/img/hml/tsc-tsp-abstract.svg"
  alt="Tiered Semantic Cache / Proxy abstract pattern"
  width="100%"
/>

</div>

Each tier has two responsibilities:

1. try to solve the request at the current level
2. if it cannot solve, ask the next tier through a cache proxy before invoking the next solver

This means the next tier is not always executed. A cached semantic mapping may answer the request without activating the more expensive solver.

---

## Participants

| Participant | HML Role | Responsibility |
|---|---|---|
| Input HIF | HIF | Carries the semantic request, utterance, query, or lookup need |
| Tier 0 Solver ST | ST | Fast local deterministic or narrow solver |
| Cache Proxy | Support structure / proxy | Checks whether the next tier already has a reusable semantic result |
| Semantic Cache | Cache | Stores known semantic mappings, normalizations, or reasoning results |
| Tier 1 Solver ST | ST | More general or expensive solver |
| Tier 2 Solver ST | ST | Deep, broad, persistent, or external solver |
| Output HIF | HIF | Carries the normalized semantic result |
| Supported schema | Policy / contract | Defines what outputs are allowed |
| Processing history | HIF metadata | Records which tier solved the request |

---

## Flow

A typical TSC/TSP flow is:

```text
1. Input HIF enters Tier 0.
2. Tier 0 tries a cheap deterministic solution.
3. If Tier 0 succeeds, the output HIF is returned.
4. If Tier 0 fails, it asks the next tier through a Cache Proxy.
5. The Cache Proxy checks whether a reusable semantic result already exists.
6. If the cache hits, the cached result is returned.
7. If the cache misses, Tier 1 is invoked.
8. Tier 1 attempts to solve the input.
9. If Tier 1 succeeds, the result is stored in the cache.
10. The normalized result is returned as an output HIF.
```

The same pattern can continue through additional tiers.

---

## Concrete Example: Text Interpretation

A common Human Context Interpreter use case is mapping free text into a closed set of supported robot queries.

<div align="center">

<img
  src="/social-hri-framework/img/hml/tsc-tsp-text-example.svg"
  alt="Tiered Semantic Cache / Proxy text interpretation example"
  width="100%"
/>

</div>

Suppose the robot supports the query template:

```text
where is <who>
```

A direct user query may be:

```text
where is Bob?
```

The Tier 0 deterministic interpreter can match this using a template or regular expression and produce:

```json
{
  "query": "where_is",
  "params": {
    "who": "Bob"
  }
}
```

However, the user may instead say:

```text
do you know Bob's whereabouts?
```

Tier 0 may not match this phrase directly.

The pattern then proceeds as follows:

```text
Tier 0 template matcher fails
  → Cache Proxy checks known paraphrase mappings
  → if cached:
        "do you know <who>'s whereabouts?"
          maps to "where is <who>?"
  → if not cached:
        constrained LLM mapper is invoked
        result is stored as reusable semantic mapping
```

The reusable mapping may be stored as:

```text
do you know <who>'s whereabouts?
  → where is <who>
```

The final output still belongs to the approved robot schema:

```json
{
  "query": "where_is",
  "params": {
    "who": "Bob"
  }
}
```

The LLM does not get to invent a new robot behavior. It only maps the phrasing into one of the allowed semantic templates.

---

## Concrete Example: Memory Lookup

TSC/TSP is equally useful outside text interpretation.

For memory retrieval, the tiers may look like:

```text
short-term session memory
  → HRI_DB
  → archived interaction history
  → external knowledge corpus
```

For example:

```text
"Where was Bob last seen?"
```

The system may first check:

```text
recent interaction memory
```

If Bob was seen seconds ago, there is no need to query the full HRI_DB.

If short-term memory misses, the system may query:

```text
HRI_DB.people.bob.location
```

If HRI_DB does not contain the needed fact, the system may check archived interaction history or ask a clarification question.

The same hierarchical principle applies:

```text
fast local semantic source first
structured world model second
larger or slower sources only when needed
```

This keeps memory use transparent, efficient, and explainable.

---

## Why Not Just Use an LLM?

A natural question is:

```text
Why not send every instruction or question directly to an LLM?
```

TSC/TSP answers this in three ways.

### 1. Safety and closed capability set

The robot should only execute actions, answer queries, or store facts that belong to approved semantic templates.

The LLM is constrained to map free language into a closed set:

```text
free text
  → supported robot template
```

If no supported template matches, the correct result is:

```text
unsupported
```

not:

```text
invent a new behavior
```

This ensures that every accepted template corresponds to something the robot was designed, tested, and authorized to do.

### 2. Cost, latency, and edge operation

Not every repeated input deserves an LLM call.

A template matcher or cache lookup can often answer immediately.

This avoids:

- network latency
- cloud API dependency
- unnecessary GPU use
- high runtime cost
- slow interaction loops

For common requests, the robot can remain responsive without invoking the deepest solver.

### 3. Debuggability and narrow LLM scope

TSC/TSP records how the input was resolved:

```text
which tier tried
which tier failed
which cache was checked
whether the cache hit or missed
whether an LLM was invoked
which template was selected
which result was returned
```

The LLM operates inside a narrow scope.

It does not decide what the robot should do. It helps map ambiguous language into a pre-approved semantic schema.

---

## Output HIF

The output HIF should contain both the normalized result and the interpretation trace.

Example:

```json
{
  "type": "QueryHIF",
  "properties": {
    "query": "where_is",
    "params": {
      "who": "Bob"
    },
    "source_text": "do you know Bob's whereabouts?",
    "matched_template": "where is <who>",
    "interpretation_path": "llm_after_cache_miss",
    "cache_action": "stored_generic_mapping"
  },
  "confidence": {
    "template_mapping": 0.91
  },
  "processing_history": [
    "TextTemplateInterpreterST",
    "Tier1CacheProxy",
    "TextLLMInterpreterST"
  ]
}
```

For a memory lookup, an output HIF may instead contain:

```json
{
  "type": "MemoryQueryResultHIF",
  "properties": {
    "query": "last_seen_location",
    "params": {
      "who": "Bob"
    },
    "result": "kitchen",
    "source_tier": "short_term_memory",
    "fallbacks_used": []
  },
  "processing_history": [
    "ShortTermMemoryLookupST"
  ]
}
```

---

## Cache Entries

A semantic cache entry should usually include more than the returned value.

Example:

```json
{
  "surface_pattern": "do you know <who>'s whereabouts?",
  "normalized_template": "where is <who>",
  "output_schema": "QueryHIF",
  "created_by": "TextLLMInterpreterST",
  "validation_status": "approved",
  "confidence": 0.91,
  "examples": [
    "do you know Bob's whereabouts?",
    "do you know Alice's whereabouts?"
  ],
  "last_used": "t",
  "usage_count": 12
}
```

This makes the cache inspectable, editable, and safe to reuse.

---

## SOCIAL Principles Supported

Within the SOCIAL framework, TSC/TSP supports:

### S — Separated Contexts

TSC/TSP keeps surface input, semantic templates, memory sources, and final robot-supported meanings distinct.

A spoken sentence is not automatically treated as an executable action. A memory lookup is not automatically treated as a verified fact unless the correct tier returns it with provenance.

### O — Open Declarative

The result is a structured semantic object, usually JSON-like, rather than a hidden model response.

Templates, mappings, cache entries, and fallback paths can be inspected and edited.

### C — Clear Cognition

The architecture exposes the interpretation path:

```text
template match
cache hit
cache miss
LLM mapping
HRI_DB lookup
external corpus lookup
unsupported
```

This makes the reasoning process understandable.

### I — Interpretable Gates

Each tier boundary is an interpretable gate.

The system can explain:

```text
Tier 0 failed because no template matched.
Tier 1 cache hit mapped the phrasing to where is <who>.
The final query was accepted because it belongs to the approved schema.
```

### A — Adaptive Autonomy

The system can adapt how deeply it interprets based on uncertainty, cost, latency, risk, or resource state.

For low-risk repeated inputs, it may use cache. For high-risk or ambiguous inputs, it may require stronger validation or clarification.

### L — Layered Validation

Even when a deeper solver proposes an interpretation, the result must still fit an approved schema and pass validation before it influences robot behavior.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Speed vs coverage | Lower tiers are fast but narrow; deeper tiers cover more cases |
| Safety vs flexibility | Closed templates improve safety but limit open-ended behavior |
| Cache reuse vs stale mappings | Cached semantic mappings must be editable and invalidatable |
| Generalization vs overgeneralization | Generic mappings are useful but may accidentally cover unsafe phrases |
| Debuggability vs complexity | More tiers improve traceability but require orchestration |
| Local operation vs external knowledge | Local caches are fast; external sources may be broader but less bounded |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Wrong deterministic match | Use confidence thresholds and validation |
| Unsafe LLM mapping | Restrict output to approved templates only |
| Cache stores wrong mapping | Store provenance, confidence, and validation status |
| Overgeneralized paraphrase | Require approval before promoting to generic mapping |
| Cache miss causes latency | Bound deeper solver calls or run learning asynchronously |
| Unsupported input | Return unsupported or ask clarification |
| Ambiguous parameter | Ask a clarification question |
| Stale memory result | Track timestamps and freshness |
| Conflicting memory tiers | Prefer newer or higher-confidence sources, then validate |
| External corpus returns untrusted result | Mark as unverified and require validation |

---

## Implementation Notes

A practical TSC/TSP implementation should define:

- tier order
- supported output schemas
- cache key strategy
- exact vs generic cache entries
- validation requirements
- cache invalidation policy
- provenance fields
- confidence behavior
- escalation conditions
- fallback behavior
- unsupported-result behavior

For text interpretation, the LLM prompt should be constrained:

```text
Map the user utterance to one of the following approved templates only.
If none matches, return unsupported.
Do not invent new actions, queries, or parameters.
```

For memory lookup, the tier policy should define:

```text
which memory source is checked first
when a result is considered fresh
when HRI_DB should override short-term memory
when external sources are allowed
when clarification is required
```

---

## Relation to ASL

TSC/TSP stores reusable semantic mappings.

The next pattern, **Adaptive Signature Learner (ASL)**, can turn repeated mappings into more stable semantic signatures.

For example:

```text
many paraphrases of "where is <who>"
  → candidate semantic signature
  → reusable interpreter rule
```

In this sense, TSC/TSP can provide the short-term semantic reuse layer, while ASL can help promote repeated patterns into more durable interpretation capabilities.

---

## Minimal Summary

```text
TSC/TSP resolves semantic inputs through hierarchical tiers.

It tries cheap, safe solvers first.
It checks semantic caches before escalating.
It invokes deeper solvers only when needed.
It stores reusable semantic mappings.
It returns normalized, inspectable HIFs.
```

The pattern is useful because it combines:

```text
deterministic safety
+ semantic reuse
+ controlled escalation
+ explainable interpretation
```


---

# Robot Context

Source file: `design-patterns/robot-context.md`

# Robot Context

## Overview

The **Robot Context** layer represents the robot's own state, resources, execution channels, and actuation status as HIFs.

Human Context describes the human participant.

Scene Context describes the surrounding environment.

Robot Context describes the robot itself.

```text
Human Context:
  how the robot understands the human

Scene Context:
  how the robot understands the world around it

Robot Context:
  how the robot understands itself
```

This page introduces no new design patterns.

It reuses the same HML primitives already introduced earlier:

```text
HC
HIF
SG
HE
policy
λ operators
semantic state
```

The purpose is to show how the same pattern language can also represent the robot's internal and actuation context.

---

## Two Parts of Robot Context

Robot Context can be understood as two related subcontexts:

```text
Internal State Context
Actuation Context
```

The first describes the robot's internal condition.

The second describes how semantic action requests are synchronized and routed to robot-specific execution channels.

Together, they answer questions such as:

```text
What resources does the robot currently have?
Is the robot healthy enough to act?
Which actuators are available?
Which execution channels are busy?
Can the robot move, speak, grasp, display, or run domain-specific code?
What constraints should planning and social behavior respect right now?
```

---

## Internal State Context

The internal state context describes how the robot senses itself.

A simple composition is:

```text
resources
  → HC
  → HIF
```

Here, **HC** converts raw internal measurements into a structured Robot Context HIF.

The input may include:

```text
CPU
GPU
memory
disk
battery
temperature
network connectivity
sensor health
localization quality
domain-specific internal state
```

Depending on the robot, domain-specific state may also include:

```text
roll / pitch / yaw
joint torque
motor temperature
payload status
wheel slip
drone altitude
manipulator state
camera availability
speaker availability
microphone availability
```

The output HIF may then inform other layers.

For example:

```text
battery low
CPU high
network weak
localization uncertain
speaker unavailable
motion system degraded
```

This makes robot self-state visible to the architecture instead of hiding it inside middleware, drivers, or low-level monitoring tools.

---

## Example Internal State HIF

A Robot Context HIF may look conceptually like this:

```json
{
  "type": "RobotResourceStateHIF",
  "properties": {
    "battery": "low",
    "cpu_load": "high",
    "memory": "normal",
    "network": "weak",
    "localization_quality": "medium",
    "motion_available": true,
    "speech_available": true
  },
  "confidence": {
    "resource_state": 0.96
  },
  "processing_history": [
    "ResourceMonitorHC"
  ]
}
```

This HIF does not command the robot to do anything.

It describes the robot's current internal condition so that later layers can reason over it.

For example:

```text
If CPU is high:
  avoid expensive perception when possible

If battery is low:
  avoid long tasks

If network is weak:
  avoid cloud-only services

If localization is uncertain:
  avoid precise navigation claims

If speech is unavailable:
  choose another communication channel
```

---

## Actuation Context

The actuation context describes how semantic action requests become robot-specific commands.

A typical rail looks like:

```text
HIF request stream
  → SG
  → HE
  → actuator / execution channel
```

The same pattern may be reused for several actuation domains:

```text
motion requests
speech requests
domain-specific requests
display requests
manipulation requests
tool-use requests
user-code execution requests
```

The important point is that actuation is not represented as a direct jump from planning to hardware.

Instead, the system preserves a semantic layer:

```text
semantic request HIF
  → synchronization / selection
  → execution handler
  → robot-specific command
```

This makes execution more inspectable and safer.

---

## Motion Requests

A motion rail may process requests such as:

```text
move to location
follow person
turn toward speaker
stop
avoid obstacle
maintain social distance
approach slowly
```

A possible composition is:

```text
Motion request HIFs
  → SG
  → HE
  → Motion Actuator
```

The **SG** may synchronize or resolve competing motion requests.

For example:

```text
navigation says: move forward
safety says: stop
social distance says: slow down
human command says: come here
```

The SG can apply policy and expert logic to decide what motion request should reach the HE.

The **HE** then converts the selected semantic motion HIF into robot-specific commands, such as:

```text
velocity command
navigation goal
trajectory command
stop command
controller-specific message
```

---

## Speech Requests

A speech rail may process requests such as:

```text
say hello
ask clarification
warn about an obstacle
confirm a command
explain a decision
announce low battery
```

A possible composition is:

```text
Speech request HIFs
  → SG
  → HE
  → Speech Actuator
```

The SG may decide which message should be spoken now, which should be delayed, and which should be suppressed.

For example:

```text
low-priority greeting
safety warning
clarification question
task confirmation
```

A safety warning may override a greeting.

The HE may then convert the selected semantic speech HIF into:

```text
sound file
TTS text
speech synthesis request
speaker-specific command
```

This keeps speech execution traceable and policy-aware.

---

## Domain-Specific Requests

Many robots need execution channels that are neither motion nor speech.

Examples include:

```text
open gripper
take photo
start inspection routine
run user-defined behavior
trigger external device
update display
send notification
activate cleaning module
control drone payload
```

A possible composition is:

```text
Domain-specific request HIFs
  → SG
  → HE
  → User-code execution / domain actuator
```

The HIF may carry a domain-specific semantic object:

```text
{"task": "inspect_panel", "panel_id": "A3"}
```

or:

```text
{"display": "show_direction_arrow", "target": "exit"}
```

The HE should translate the semantic request into a bounded execution pathway.

This is important because user-code or domain-specific execution should not bypass the HML layer.

It should remain inspectable, validated, and governed.

---

## Why SG Before HE?

A common question is why an SG appears before the HE.

The reason is that actuation often involves competing, overlapping, or time-sensitive requests.

For motion:

```text
follow the person
avoid an obstacle
maintain social distance
return to charging station
stop immediately
```

For speech:

```text
greet the user
ask for clarification
warn about danger
explain the next action
remain silent in a formal room
```

For domain execution:

```text
run task code
pause task code
cancel unsafe operation
wait for authorization
```

The SG gives the architecture a place to apply policies and semantic arbitration before execution.

The HE should receive a selected or synchronized request, not an unfiltered pile of competing requests.

---

## Why This Is Still Context

Robot Context is not only about sending commands to actuators.

It is also about representing the robot's ability to act.

For example:

```text
motion_available = false
speech_available = true
battery = low
network = weak
cpu_load = high
localization_quality = low
```

These are not actions.

They are context.

They can influence:

```text
task planning
social planning
resource-aware perception
safety validation
dialogue strategy
actuation selection
fallback behavior
```

For example:

```text
If the robot cannot move:
  it should not promise to bring an object.

If the speaker is unavailable:
  it should not plan a verbal response.

If battery is low:
  it may choose a shorter interaction.

If network is weak:
  it may avoid cloud-dependent interpretation.

If localization is uncertain:
  it may ask for help or slow down.
```

Robot Context therefore closes the local context triangle:

```text
Human Context
Scene Context
Robot Context
```

---

## Example Composition

The following diagram illustrates one possible Robot Context composition.

It is not a required implementation.

It shows internal state HIF creation and several actuation rails using SG and HE.

<div align="center">

<img
  src="/social-hri-framework/img/hml/robot-context.svg"
  alt="Robot Context composition showing internal state context and actuation context as HIF streams"
  width="100%"
/>

</div>


---

## Output Robot Context HIFs

Robot Context may produce or consume HIFs such as:

```text
RobotResourceStateHIF
RobotHealthHIF
CapabilityStateHIF
MotionRequestHIF
MotionExecutionHIF
SpeechRequestHIF
SpeechExecutionHIF
DomainExecutionHIF
ActuationAvailabilityHIF
```

These HIFs allow higher layers to reason about the robot as an embodied participant, not merely as an endpoint for commands.

---

## Interaction With Other Context Layers

Robot Context becomes especially useful when combined with Human Context and Scene Context.

For example:

```text
Human Context:
  a person asked for help

Scene Context:
  there is an obstacle between the robot and the person

Robot Context:
  battery is low and motion is available but degraded
```

A higher-level reasoner may then choose:

```text
explain limitation
ask the person to move closer
avoid a long navigation route
call for assistance
perform only a low-cost action
```

The robot's social behavior should be shaped not only by what the human wants and what the scene contains, but also by what the robot can responsibly do right now.

---

## Why This Layer Matters

Robot Context supports several architectural goals:

| Goal | Robot Context contribution |
|---|---|
| Self-state awareness | Represents resources, health, and internal state |
| Actuation transparency | Converts semantic HIFs into explicit execution channels |
| Safety | Allows policies to block or modify unsafe execution |
| Resource awareness | Exposes CPU, memory, network, and battery constraints |
| Capability reasoning | Shows what the robot can currently do |
| Traceability | Records how requests became commands |
| Social reliability | Prevents the robot from promising actions it cannot perform |

Robot Context is therefore not just a low-level monitoring layer.

It is the semantic representation of the robot's own embodiment and execution capacity.

---

## Design Note

This page describes one possible composition.

Different robots will have different internal sensors, resources, middleware, and actuators.

A mobile robot, drone, robotic arm, desktop robot, and quadruped may expose very different Robot Context HIFs.

The architectural point remains the same:

```text
internal state becomes HIFs
actuation requests remain semantic until execution
SG resolves competing requests
HE translates selected HIFs into robot-specific commands
Robot Context informs higher-level reasoning
```

This keeps the robot's self-state and actuation pathways inspectable and reusable.

---

## Transition to Context Management and Reasoning

Human Context describes the human.

Scene Context describes the environment.

Robot Context describes the robot itself.

Once these three context streams exist, the architecture can reason over them together.

This is the role of **Context Management and Reasoning**.

The next layer combines human, scene, and robot context into a coherent working model for interaction, memory, validation, task reasoning, and social planning.


---

# Scene Context

Source file: `design-patterns/scene-context.md`

# Scene Context

## Overview

The **Scene Context** layer describes the surrounding environment in interaction-relevant semantic terms.

It answers questions such as:

```text
What is in the scene?
Where is it relative to the map?
Which objects are relevant now?
Which obstacles, doors, stairs, or slopes may affect interaction?
What kind of room or social setting is this?
How fresh or reliable is the scene information?
```

This layer is intentionally presented as a **reuse** of the patterns already introduced in the Human Context section.

The goal is not to introduce a new family of mechanisms.

The goal is to show that the same HML pattern language can be reused with a different semantic target.

```text
Human Context:
  understand the human participant

Scene Context:
  understand the surrounding environment
```

---

## Reusing the Human Context Basic Pattern

The Human Context basic input layer showed how raw sensor streams can become semantic HIFs through a composition such as:

```text
sensor input
  → HC
  → SME
  → HIF
  → SG
  → EAG
  → Tracker ST
  → enriched HIF
```

Scene Context uses the same architectural idea.

The difference is the semantic vocabulary of the experts.

In Human Context, the experts may detect:

```text
person
skeleton
facial expression
gaze
speech
sentiment
```

In Scene Context, the experts may detect:

```text
objects
closed doors
stairs
obstacles
slopes
surfaces
room layout
social room annotations
map-relative scene elements
```

This is why Scene Context is a useful reward point in the documentation: it demonstrates that SME, EAG, SG, ST, HIF flow, and tracking are not one-off structures designed only for the human layer.

They are reusable architectural patterns.

---

## Example Composition

The following diagram illustrates one possible composition of a Scene Context layer.

It is not a required implementation.

It reuses the same basic structure introduced earlier, but applies it to scene understanding.

<div align="center">

<img
  src="/social-hri-framework/img/hml/scene-context.svg"
  alt="Scene Context composition reusing SME, SG, EAG, and Tracker ST for environmental understanding"
  width="100%"
/>

</div>


---

## Visual Scene Rail

One input rail may begin with a camera stream:

```text
camera
  → HC
  → Video Analyzer SME
  → HIF
```

The **Video Analyzer SME** may run several scene-oriented experts over the same visual input.

For example:

```text
object detector
closed door detector
staircase detector
surface classifier
scene affordance detector
```

The result is a HIF that carries visual semantic evidence about the environment.

This is structurally similar to the visual SME used in the Human Context layer.

Only the semantic target changes.

---

## LiDAR Scene Rail

A second rail may begin with LiDAR:

```text
LiDAR
  → HC
  → LiDAR Analyzer SME
  → HIF
```

The **LiDAR Analyzer SME** may run experts such as:

```text
obstacle detector
slope detector
free-space detector
traversability detector
```

This produces spatial and geometric evidence about the scene.

For example, it may identify:

```text
an obstacle in the path
a sloped surface
a narrow passage
a change in floor height
```

This information can later be grounded in the map and combined with visual scene elements.

---

## SLAM and Semantic Map Context

The Scene Context layer may also include a **SLAM ST**.

This ST may:

```text
create a new map
load an existing map
localize the robot within the map
update the map over time
provide map-relative coordinates
```

However, in HML this map does not have to remain purely geometric.

It may also carry semantic and social annotations.

For example:

```text
meeting room:
  formal interaction expected

kitchen:
  casual interaction is acceptable

charging area:
  robot should avoid blocking access
  robot may need to speak louder

corridor:
  keep motion predictable
  avoid stopping in the middle
```

This means the Scene Context layer can represent both:

```text
physical layout
social meaning of places
```

The environment becomes more than a map.

It becomes an interaction-relevant semantic scene.

---

## Synchronization and Grounding

The visual, LiDAR, and SLAM/map HIFs are synchronized by an SG.

```text
Visual Scene HIF
LiDAR Scene HIF
Map / SLAM HIF
  → SG
```

The SG creates a coherent scene-level frame from multiple sources.

The synchronized result may then enter a `2D → 3D EAG`.

The EAG grounds scene elements with respect to the 3D map and may prioritize deeper processing for scene elements that matter now.

For example, the EAG may prioritize:

```text
nearby objects
task-relevant objects
moving objects
objects close to humans
safety-relevant obstacles
uncertain detections
closed doors blocking a route
stairs or slopes affecting navigation
```

As in the Human Context layer, the EAG may choose between different fidelity levels depending on resources and task pressure.

---

## Tracking, Freshness, and Forgetting

After grounding, a **Tracker ST** may maintain scene elements over time.

This is important because scene elements may move, disappear, or become uncertain.

For example:

```text
the robot moves and sees the same chair from a new angle
a human moves an object to a new location
a door was open before but is now closed
an obstacle was seen recently but is no longer visible
```

The Scene Context HIF should therefore preserve temporal metadata such as:

```text
tracked_id
map_relative_position
last_seen
confidence
freshness
source history
uncertainty
forgetting policy
```

This allows the robot to avoid treating every frame as a new world.

It also allows the system to gradually reduce confidence when something has not been observed for a while, instead of immediately deleting it.

---

## Output SceneContext HIF

A Scene Context layer may emit a HIF that includes:

```text
3D map
tracked scene objects
map-relative object locations
closed doors
stairs
obstacles
slopes
surfaces
room labels
social room annotations
hazards
freshness and uncertainty metadata
```

For example, the final HIF may tell downstream layers:

```text
There is a closed door between the robot and the target room.
A chair is located near the meeting table.
The corridor is clear but narrow.
The current room is a meeting room, where formal behavior is expected.
The object location is reliable because it was observed recently.
```

This information can then support context management, task planning, social planning, navigation, and action selection.

---

## Visualization and Debugging

Scene Context is especially useful because it can often be visualized.

A development or operator interface may show:

```text
map
tracked objects
object confidence
last-seen timestamps
obstacles
doors
stairs
room labels
social zones
hazards
```

This is useful for:

```text
debugging perception pipelines
validating map-relative grounding
explaining robot behavior
supporting human correction
monitoring operator-facing deployments
```

A visual scene representation can help developers and operators see what the robot currently believes about its environment.

This is also important for trust.

If the robot avoids a route because it believes a door is closed or an obstacle is present, the system should be able to show that belief explicitly.

---

## Why This Layer Matters

Scene Context turns physical surroundings into interaction-relevant semantic information.

It supports:

| Goal | Scene Context contribution |
|---|---|
| Environmental grounding | Connects detections to a 3D map |
| Safety | Represents obstacles, slopes, doors, stairs, and hazards |
| Task support | Identifies task-relevant objects and locations |
| Social behavior | Adds social meaning to rooms and zones |
| Continuity | Tracks scene elements over time |
| Debuggability | Makes the robot's scene understanding visible |
| Reuse | Demonstrates that Human Context patterns generalize to the environment |

The layer is therefore not just perception.

It is semantic scene understanding for HRI.

---

## Design Note

This page describes one possible composition.

Different robots may use different sensors and different scene experts.

A robot may rely on:

```text
RGB camera
RGB-D camera
LiDAR
depth camera
semantic segmentation
object detection
SLAM
existing maps
building plans
human annotations
external facility databases
```

The architectural point remains the same.

```text
SME can extract multiple scene cues in parallel.
SG can synchronize scene HIFs.
EAG can prioritize and ground scene elements.
Tracker ST can maintain continuity over time.
HIFs make the scene state explicit and inspectable.
```

This is the same pattern language introduced earlier, reused for a new semantic layer.

---

## Transition to Robot Context

Human Context describes the human participant.

Scene Context describes the surrounding environment.

The next layer is **Robot Context**.

Robot Context shifts the semantic target again:

```text
What is the robot itself doing?
What is its state?
What are its capabilities and constraints right now?
What does it know about its own body, resources, goals, and execution status?
```

Together, Human Context, Scene Context, and Robot Context create the local semantic basis for higher-level context management and social planning.


---

# Social Action Stylist (SAS)

Source file: `design-patterns/social-planning/social-action-stylist.md`

# Social Action Stylist (SAS)

## Intent

The **Social Action Stylist (SAS)** is an SME-based HRI design pattern for transforming a socially timed interaction request into a multimodal, socially styled behavior representation.

It does not decide whether the interaction should happen.

It does not decide when the interaction should happen.

It decides how the interaction should be expressed.

```text
Social Opportunity TPR:
  when should the robot interact?

Social Action Stylist:
  how should the robot express the interaction?
```

In short:

```text
Socially Timed Interaction Request HIF
  → parallel style experts
  → SG
  → Styled Behavior HIF
```

SAS separates the semantic intent of an interaction from its social expression.

---

## Problem

The same action can be socially appropriate or inappropriate depending on how it is expressed.

For example, the intent:

```text
ask for help
```

may be expressed as:

```text
Help me now.
Could you help me for a moment?
Sorry to interrupt, I need your help.
When you have a moment, could you help me?
```

Each version may be appropriate in a different context.

The difference is not only linguistic.

It may also involve:

```text
tone
volume
gesture
gaze
approach distance
movement speed
body orientation
timing rhythm
```

Without SAS, a robot may have the right intent but the wrong expression.

```text
right intent
wrong expression
```

This can make the robot seem rude, intrusive, awkward, too formal, too casual, or socially unaware.

SAS solves this by making social style explicit, modular, and inspectable.

---

## Context

Use SAS when an interaction request has already passed earlier validation and timing stages, but still needs to be expressed in a socially suitable way.

Typical inputs include:

```text
greet Bob
ask Alice for help
warn about an obstacle
explain a delay
approach a person
offer assistance
confirm a command
ask a clarification question
guide a person
deliver a message
```

SAS is especially useful when the correct expression depends on:

```text
person-specific preferences
room conventions
formality level
urgency
privacy level
interaction history
robot embodiment
available modalities
social distance
human affective state
```

---

## HML Structure

SAS reuses the SME idea.

Instead of extracting multiple semantic cues from the same input frame, it generates or selects multiple social style dimensions from the same interaction request.

<div align="center">

<img
  src="/social-hri-framework/img/hml/social-action-stylist.svg"
  alt="Social Action Stylist applying parallel style experts to transform an interaction request into a styled multimodal behavior HIF"
  width="100%"
/>

</div>

A simplified structure is:

```text
Socially Timed Interaction Request HIF
  → Social Action Stylist SME
      → Linguistic Stylist ST
      → Prosody Stylist ST
      → Gesture Stylist ST
      → Gaze Stylist ST
      → Spatial / Motion Stylist ST
      → Timing / Sequencing Stylist ST
  → SG
  → Styled Behavior HIF
```

Each style expert contributes one aspect of the final behavior.

The SG combines these style proposals into one coherent multimodal behavior HIF.

---

## Flow

A typical SAS flow is:

```text
1. A socially timed interaction request arrives as a HIF.
2. The request is passed to multiple style experts in parallel.
3. Each expert proposes a style dimension.
4. The SG merges the proposed style dimensions.
5. Conflicts between channels are resolved.
6. The output is a Styled Behavior HIF.
7. The styled behavior can be passed to a choreographer, dispatcher, planner, or actuation layer.
```

The important point is that SAS does not hide style inside a single black box.

It exposes style as a structured multimodal decision.

---

## Style Dimensions

SAS may style several behavioral dimensions.

### Linguistic Style

The linguistic stylist decides how the robot should phrase the message.

Possible dimensions include:

```text
formal / informal
short / detailed
direct / indirect
warm / neutral
apologetic / assertive
instructional / conversational
```

For example:

```text
Intent:
  ask for help

Formal:
  "Excuse me, could you assist me for a moment?"

Casual:
  "Hey, could you help me for a second?"

Urgent:
  "I need help now, please."
```

### Prosody / Voice Style

The prosody stylist decides how speech should sound.

Possible dimensions include:

```text
volume
tempo
pitch
urgency
calmness
emphasis
pause length
```

For example:

```text
meeting room:
  lower volume, slower tempo

emergency:
  higher urgency, clearer emphasis

casual greeting:
  warmer tone, natural tempo
```

### Gesture Style

The gesture stylist decides whether and how the robot should gesture.

Possible gestures include:

```text
wave
nod
point
small acknowledgement gesture
open palm
attention cue
no gesture
```

The correct choice depends on the robot embodiment and the social context.

For example:

```text
quiet room:
  small nonverbal cue

open social setting:
  short wave

formal interaction:
  minimal gesture
```

### Gaze and Attention Style

The gaze stylist decides how the robot should direct attention.

Possible behaviors include:

```text
look before speaking
avoid prolonged gaze
alternate gaze between group members
look toward an object while referencing it
look away briefly after request
```

Gaze can make the same speech act feel attentive, intrusive, polite, or uncertain.

### Spatial and Motion Style

The spatial or motion stylist decides how the robot should move or position itself.

Possible dimensions include:

```text
approach distance
approach speed
approach angle
orientation
social path
personal-space constraint
avoid blocking path
stop position
```

For example:

```text
approach person:
  stop at 1.5m
  avoid approaching from behind
  slow down before entering personal space
  orient toward the person without blocking the path
```

### Timing and Sequencing Style

The timing stylist decides the order and rhythm of the behavior.

For example:

```text
gesture before speech
speech before motion
pause before asking
wait after eye contact
confirm before moving
turn toward person before speaking
```

This is especially important for multimodal interaction.

A socially fluent behavior is not just a set of channels.

It is a coordinated sequence.

---

## Example — Styling a Help Request

Input:

```json
{
  "type": "ExecutableSociallyTimedRequestHIF",
  "properties": {
    "request": {
      "say": "I need your help"
    },
    "target": "alice",
    "social_window": "open"
  }
}
```

Possible SAS output:

```json
{
  "type": "StyledBehaviorHIF",
  "properties": {
    "speech": {
      "text": "Alice, could you help me for a moment?",
      "tone": "polite",
      "volume": "medium_low",
      "tempo": "calm"
    },
    "gaze": {
      "target": "alice",
      "pattern": "brief_before_speech"
    },
    "gesture": {
      "type": "small_attention_gesture"
    },
    "motion": {
      "approach_distance": "1.5m",
      "speed": "slow"
    },
    "sequence": [
      "orient_to_alice",
      "brief_gaze",
      "small_attention_gesture",
      "speak"
    ]
  },
  "processing_history": [
    "SocialOpportunityTPR",
    "SAS"
  ]
}
```

The original intent remains simple:

```text
I need your help.
```

The behavior becomes socially expressed.

---

## Example — Styling Motion

Input:

```text
approach Bob
```

A direct motion planner might treat this as a waypoint problem.

SAS treats it as a social motion problem.

It may specify:

```text
do not approach from behind
do not block Bob's path
slow down near personal space
stop at a comfortable distance
orient toward Bob before speaking
avoid cutting through a group
```

Possible output:

```json
{
  "type": "StyledMotionHIF",
  "properties": {
    "target": "bob",
    "approach_style": "polite",
    "preferred_distance": "1.5m",
    "max_speed_near_person": "slow",
    "approach_angle": "front_diagonal",
    "avoid": [
      "behind_approach",
      "path_blocking",
      "group_cut_through"
    ]
  },
  "processing_history": [
    "SAS"
  ]
}
```

This lets social motion style be handled explicitly before actuation.

---

## Why SME Reuse Matters

SAS is not a single stylistic transformation.

Social expression is multimodal.

A speech choice can conflict with a gesture.

A motion style can conflict with a gaze pattern.

A greeting can be friendly linguistically but intrusive spatially.

By using an SME-like structure, SAS keeps style experts separated but synchronized.

For example:

```text
Linguistic stylist:
  friendly phrasing

Spatial stylist:
  do not approach too closely

Gesture stylist:
  small wave

Gaze stylist:
  brief eye contact

Prosody stylist:
  warm tone
```

The SG then produces a coherent styled behavior.

This supports modularity:

```text
replace the linguistic stylist without changing motion styling
replace the proxemics policy without changing speech
add a gesture expert without redesigning the entire layer
adapt style to different robot embodiments
```

---

## Relationship to Social Opportunity TPR

Social Opportunity TPR decides when the interaction should happen.

SAS decides how the interaction should be expressed.

```text
Social Opportunity TPR:
  wait until Alice is available

SAS:
  ask Alice politely, softly, and with a small attention gesture
```

This separation prevents the robot from styling a behavior too early.

The social opportunity may open later under different conditions.

The final style should therefore be generated close to the moment of action.

---

## Relationship to SCV

SCV checks whether an action is socially acceptable.

SAS chooses the expression style within the acceptable space.

```text
SCV:
  It is acceptable to ask Alice for help.

SAS:
  Ask softly, briefly, with a polite phrase.
```

Or:

```text
SCV:
  Do not interrupt directly.

SAS:
  Use a nonverbal attention cue first.
```

SCV may constrain the style space.

SAS fills that space with a concrete multimodal behavior.

---

## Relationship to DSIE and HRI_DB

SAS can use context maintained in HRI_DB and insights generated by DSIE.

Examples include:

```text
room social conventions
person preferences
interaction history
learned response patterns
formality level
privacy level
current robot state
```

DSIE may provide insights such as:

```text
Alice prefers short confirmations.
Bob responds well to visual gestures.
This setting is formal.
The person may be frustrated.
The previous long explanation was poorly received.
```

SAS translates these insights into behavior style.

For example:

```text
shorter speech
lower volume
more distance
less gesture
more formal phrasing
visual cue instead of verbal interruption
```

---

## Relationship to Robot Embodiment

SAS should be embodiment-aware.

A humanoid, quadruped, desktop robot, mobile base, screen-based agent, and voice-only assistant may support different modalities.

For example:

```text
humanoid:
  gaze, gesture, speech, posture, motion

desktop robot:
  screen expression, sound, small motion, gaze direction

mobile robot:
  speech, navigation style, light cues, orientation

voice-only system:
  wording, timing, prosody

quadruped:
  body orientation, movement style, sound, light cues
```

SAS should style only what the embodiment can actually express.

Unsupported modalities should be filtered or replaced.

---

## Outputs

SAS may emit several output HIF types.

```text
StyledBehaviorHIF
StyledSpeechHIF
StyledMotionHIF
StyledGestureHIF
StyledGazeHIF
StyledProsodyHIF
MultimodalBehaviorPlanHIF
```

The main output is usually:

```text
StyledBehaviorHIF
```

This HIF may contain multiple coordinated channels:

```text
speech
gesture
gaze
motion
timing sequence
social constraints
fallback style
```

---

## Why This Pattern Matters

SAS helps prevent the robot from doing the right thing in the wrong way.

It supports:

```text
social fluency
personalization
context-sensitive behavior
modularity
explainability
embodiment independence
```

It also supports reuse.

The same intent can be styled differently depending on:

```text
person
room
urgency
privacy
robot embodiment
interaction history
available modalities
```

The pattern makes social behavior design explicit rather than hard-coded into individual actions.

---

## SOCIAL Principles Supported

### S — Separated Contexts

SAS separates:

```text
intent
speech style
motion style
gesture style
gaze behavior
timing sequence
```

Each style dimension can be handled by a separate expert while still contributing to one behavior.

### O — Open Declarative

The selected style is represented as explicit HIF properties.

For example:

```text
tone = polite
volume = medium_low
approach_distance = 1.5m
gesture = small_wave
```

This makes the style visible and editable.

### C — Clear Cognition

The system can explain why a style was chosen.

For example:

```text
formal room
person preference
low urgency
person available
robot should be non-intrusive
```

This helps avoid hidden behavioral magic.

### I — Interpretable Gates

Each stylist can be implemented as an ST with its own policy and expert.

The SG can expose how the final style was merged.

### A — Adaptive Autonomy

The robot can adapt style based on person, room, emotional state, urgency, social context, and embodiment.

It can also fall back to simpler styles when confidence or capability is low.

### L — Layered Validation

SAS does not decide whether an action is allowed.

It does not decide when to act.

It styles a request that already passed earlier layers.

The styled output can still be checked, choreographed, dispatched, and validated before actuation.

---

## Tradeoffs

| Tradeoff | Explanation |
|---|---|
| Rich style vs. complexity | More style channels increase coordination complexity |
| Personalization vs. predictability | Personalized style may make robot behavior less uniform |
| Naturalness vs. safety | Highly natural phrasing may become ambiguous or unsafe |
| Expressiveness vs. embodiment limits | Not all robots can express every style dimension |
| Late styling vs. latency | Styling close to action time requires fast computation |
| Consistency vs. adaptation | Style should adapt without feeling random |

---

## Failure Modes

| Failure Mode | Possible Mitigation |
|---|---|
| Style contradicts intent | Schema validation and SG consistency checks |
| Speech style and motion style conflict | Multimodal merge policy |
| Over-personalization feels intrusive | SIAH and privacy policy |
| Too much expressiveness | Style limits and conservative defaults |
| Too little expressiveness | Fallback stylist and user feedback |
| Wrong formality level | Room context and DSIE confidence |
| Stale context | Late binding before execution |
| Unsupported embodiment | Capability-aware style filtering |
| Unsafe LLM-generated phrasing | Bounded templates and policy validation |
| Style varies unpredictably | Style memory and consistency constraints |

---

## Implementation Notes

A practical SAS implementation should define:

```text
style schema
supported modalities
stylist experts
style policies
person preference integration
room convention integration
embodiment capability filter
conflict resolution SG
fallback style
latency budget
validation before actuation
```

The style schema should define which channels are supported and how they combine.

For example:

```text
speech:
  text
  tone
  volume
  tempo

motion:
  speed
  distance
  approach angle

gesture:
  type
  intensity
  timing

gaze:
  target
  duration
  pattern

sequence:
  ordered multimodal events
```

The SG should check that style channels do not contradict each other.

For example:

```text
do not combine "urgent warning" with "casual playful tone"
do not combine "polite request" with "aggressive approach"
do not combine "quiet room" with "high volume"
```

---

## Transition to Late-Binding Behavioral Choreographer

Social Opportunity TPR decides when the interaction should happen.

SAS decides how it should be expressed.

The next pattern, **Late-Binding Behavioral Choreographer**, combines the two and binds the final behavior as late as possible.

```text
Social Opportunity TPR:
  wait for the right moment

Social Action Stylist:
  choose the right form of expression

Late-Binding Behavioral Choreographer:
  bind timing and style at the moment of action
```


---

# Social Opportunity TPR

Source file: `design-patterns/social-planning/social-opportunity-tpr.md`

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


---

# Social Planning Layer Example

Source file: `design-patterns/social-planning/social-planning-layer-example.md`

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


---

# Social Planning and Behavioral Synthesis

Source file: `design-patterns/social-planning/social-planning-overview.md`

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


---

# HIF — HRI Interaction Frame

Source file: `hml/hif.md`

# HIF — HRI Interaction Frame

## Overview

HIF (HRI Interaction Frame) is the central semantic carrier of HML.

A HIF is a structured envelope that represents a meaningful unit of interaction information. It may originate from a sensor, a user utterance, a perception module, a reasoning process, a database query, an internal robot monitor, or an action request.

A HIF is not merely a message, event, or video frame. It is a semantic interaction object that carries raw content, interpreted properties, metadata, confidence, and traceability information through the HRI architecture.

In HML, most architectural patterns can be understood as operations over HIFs:

- Creating HIFs
- Transforming HIFs
- Enriching HIFs
- Synchronizing HIFs
- Validating HIFs
- Delaying HIFs
- Escalating HIFs
- Executing HIFs

The HIF is therefore the atomic modeling unit that connects perception, cognition, memory, validation, autonomy, and embodied action.

---

# Why HIF is Needed

Human-Robot Interaction systems combine many heterogeneous streams:

- Camera frames
- Audio snippets
- Speech transcripts
- LiDAR scans
- Skeleton estimates
- Gaze vectors
- Facial expressions
- Object detections
- User instructions
- Robot resource states
- Database facts
- LLM outputs
- Navigation requests
- Social policies
- Safety constraints

Without a shared semantic carrier, each subsystem tends to exchange information in its own local representation. This makes the architecture difficult to inspect, synchronize, validate, and reuse.

HIF provides a common conceptual structure:

```text
raw content + semantic properties + metadata + confidence + history
```

The same modeling unit can therefore represent both a raw camera frame and a high-level instruction such as:

```text
Bring this bottle to Bob
```

This enables design patterns to be expressed independently of a specific robot platform, middleware, or implementation language.

---

# Conceptual Structure

A HIF is a conceptual schema, not necessarily a strict serialization format.

It may be implemented as JSON, a Python dataclass, a TypeScript interface, a ROS message, protobuf, or any other suitable representation.

A typical HIF contains:

```text
HIF {
  id
  type
  timestamp
  content
  properties
  confidence
  source_history
  processing_history
}
```

## Fields

| Field | Meaning |
|---|---|
| `id` | Unique identifier for the interaction frame |
| `type` | Semantic type of the frame |
| `timestamp` | Time point or time interval represented by the HIF |
| `content` | Raw or primary content carried by the HIF |
| `properties` | Dynamic semantic dictionary added by experts and transformers |
| `confidence` | Confidence value or structured confidence map |
| `source_history` | Origin of the data, such as sensor, DB, user, or module |
| `processing_history` | Record of semantic cells, policies, or experts applied to the HIF |

Not every field must be present in every implementation. However, the conceptual distinction between raw content, semantic properties, and traceability should remain clear.

---

# HIF as a Semantic Envelope

The HIF acts as an envelope around interaction information.

<div align="center">

<svg width="920" height="430" viewBox="0 0 920 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hif-envelope-title hif-envelope-desc">
  <title id="hif-envelope-title">HIF as a Semantic Envelope</title>
  <desc id="hif-envelope-desc">
    A HIF is a semantic envelope containing raw content, type, timestamp, semantic properties, confidence, source history, and processing history.
  </desc>

  <defs>
    <marker id="arrow-hif-envelope" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#111827" />
    </marker>
  </defs>

  <!-- Central HIF envelope -->
  <rect x="350" y="150" width="220" height="120" rx="22" ry="22"
        fill="none" stroke="#111827" strokeWidth="2.2" />
  <text x="460" y="195" textAnchor="middle" fontSize="24" fontFamily="Arial, sans-serif" fill="#111827">HIF</text>
  <text x="460" y="224" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">HRI Interaction Frame</text>
  <text x="460" y="248" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">semantic envelope</text>

  <!-- Top inputs -->
  <rect x="260" y="35" width="160" height="54" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="340" y="58" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Type</text>
  <text x="340" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">semantic role</text>

  <rect x="500" y="35" width="180" height="54" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="590" y="58" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Timestamp</text>
  <text x="590" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">time point / window</text>

  <!-- Left inputs -->
  <rect x="40" y="125" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="135" y="151" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Raw / Primary Content</text>
  <text x="135" y="173" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">audio, image, text, action</text>

  <rect x="40" y="245" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="135" y="271" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Semantic Properties</text>
  <text x="135" y="293" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">dynamic {`{key: value}`}</text>

  <!-- Right inputs -->
  <rect x="690" y="125" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="785" y="151" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Confidence</text>
  <text x="785" y="173" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">global or per-property</text>

  <rect x="690" y="245" width="190" height="64" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="785" y="271" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Source History</text>
  <text x="785" y="293" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">sensor, user, DB, module</text>

  <!-- Bottom input -->
  <rect x="360" y="345" width="200" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.5" />
  <text x="460" y="369" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Processing History</text>
  <text x="460" y="390" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">cells, operators, policies</text>

  <!-- Arrows into HIF -->
  <line x1="340" y1="89" x2="405" y2="145"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
  <line x1="590" y1="89" x2="515" y2="145"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />

  <line x1="230" y1="157" x2="342" y2="185"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
  <line x1="230" y1="277" x2="342" y2="235"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />

  <line x1="690" y1="157" x2="578" y2="185"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
  <line x1="690" y1="277" x2="578" y2="235"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />

  <line x1="460" y1="345" x2="460" y2="278"
        stroke="#111827" strokeWidth="1.5" fill="none"
        markerEnd="url(#arrow-hif-envelope)" />
</svg>

</div>

This envelope allows the system to preserve both the original information and the semantic interpretations that are gradually attached to it.

---

# HIF Types

A HIF may represent many different kinds of interaction information.

| Type | Meaning |
|---|---|
| `VideoFrame` | A camera frame or image-based input |
| `AudioSnippet` | A bounded audio segment |
| `Text` | Typed, transcribed, or generated text |
| `Gesture` | Interpreted human movement or gesture |
| `PersonState` | Human identity, pose, gaze, affect, or availability |
| `SceneState` | Objects, spaces, obstacles, and environmental relations |
| `RobotState` | Internal robot state such as battery, CPU, localization, or actuator status |
| `Fact` | Declarative statement about the world |
| `Query` | Request for information from memory, a human, or an expert |
| `Instruction` | User command or goal specification |
| `Task` | Partially or fully resolved goal |
| `PendingTask` | Task delayed due to missing information or timing constraints |
| `ActionRequest` | Request for speech, motion, navigation, manipulation, or another effect |
| `ValidationResult` | Result of a consistency, safety, social, or autonomy check |

The exact type system is domain-specific. HML requires only that the type communicate the semantic role of the frame.

---

# Properties as Dynamic Semantic Memory

The `properties` field is the main place where meaning accumulates.

Semantic Transformers, Sync Gates, Escalation Switches, and validation layers may all add or modify properties.

Example:

```json
{
  "person": {
    "id": "p12",
    "name": "Bob",
    "location": "kitchen"
  },
  "gesture": "pointing",
  "intent": "bring_object",
  "target_object": {
    "type": "bottle",
    "id": "obj7"
  }
}
```

Properties may be produced by:

- Object detectors
- Person trackers
- Skeleton extractors
- Speech-to-text modules
- Natural language interpreters
- Gesture classifiers
- Spatial reasoners
- Social policy evaluators
- Safety monitors
- LLMs
- Database lookups

A HIF therefore becomes richer as it moves through the system.

---

# HIF Lifecycle

A HIF usually evolves through several architectural stages.

<div align="center">

<svg
  width="100%"
  viewBox="0 0 920 420"
  style={{maxWidth: '920px', height: 'auto'}}
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="hif-lifecycle-title hif-lifecycle-desc"
>
  <title id="hif-lifecycle-title">HIF Lifecycle</title>
  <desc id="hif-lifecycle-desc">
    A HIF evolves from source information to initial semantic representation,
    semantic enrichment, validation, and optionally execution.
  </desc>

  <defs>
    <marker id="arrow-hif-lifecycle" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#111827" />
    </marker>
  </defs>

  <!-- Top row -->

  <!-- Source -->
  <rect x="20" y="60" width="140" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="90" y="84" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Source</text>
  <text x="90" y="103" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">sensor / user /</text>
  <text x="90" y="117" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">internal event</text>

  <!-- HC -->
  <rect x="205" y="52" width="120" height="74" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="265" y="80" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">HC</text>
  <text x="265" y="100" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">HIF Creator</text>

  <!-- Initial HIF -->
  <rect x="370" y="60" width="140" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="440" y="84" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Initial HIF</text>
  <text x="440" y="103" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">semantic frame</text>

  <!-- ST -->
  <rect x="555" y="52" width="130" height="74" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="620" y="80" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">ST</text>
  <text x="620" y="100" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">Semantic</text>
  <text x="620" y="115" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">Transformer</text>

  <!-- Enriched HIF -->
  <rect x="390" y="210" width="150" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="465" y="234" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Enriched HIF</text>
  <text x="465" y="253" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">updated properties</text>

  <!-- Gate -->
  <polygon points="625,195 685,239 625,283 565,239"
           fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="625" y="228" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Gate</text>
  <text x="625" y="244" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#111827">validation / SG / ES</text>
  <text x="625" y="258" textAnchor="middle" fontSize="10.5" fontFamily="Arial, sans-serif" fill="#111827">/ policy role</text>

  <!-- Validated HIF -->
  <rect x="730" y="210" width="150" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="805" y="231" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="#111827">Validated /</text>
  <text x="805" y="249" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="#111827">Executable HIF</text>

  <!-- HE -->
  <rect x="235" y="315" width="130" height="72" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="300" y="342" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">HE</text>
  <text x="300" y="361" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">HIF Executor</text>

  <!-- Effect -->
  <rect x="410" y="315" width="180" height="72" rx="14" ry="14"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="500" y="341" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">External or</text>
  <text x="500" y="360" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Embodied Effect</text>

  <!-- Arrows top row -->
  <line x1="160" y1="89" x2="197" y2="89"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />
  <line x1="325" y1="89" x2="362" y2="89"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />
  <line x1="510" y1="89" x2="547" y2="89"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />

  <!-- Down from ST to Enriched HIF -->
  <line x1="620" y1="126" x2="620" y2="170"
        stroke="#111827" strokeWidth="1.4" fill="none" />
  <line x1="620" y1="170" x2="465" y2="170"
        stroke="#111827" strokeWidth="1.4" fill="none" />
  <line x1="465" y1="170" x2="465" y2="202"
        stroke="#111827" strokeWidth="1.4" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />

  <!-- Bottom row -->
  <line x1="540" y1="239" x2="557" y2="239"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />
  <line x1="685" y1="239" x2="722" y2="239"
        stroke="#111827" strokeWidth="1.6" fill="none"
        markerEnd="url(#arrow-hif-lifecycle)" />

<!-- Execution branch -->
<path
  d="M 805 268 V 290 H 300 V 307"
  stroke="currentColor"
  stroke-width="1.4"
  fill="none"
  marker-end="url(#arrow-hif-lifecycle)"
/>
  <!-- Optional label -->
  <text x="610" y="293" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">
    optionally executed
  </text>
</svg>

</div>

This lifecycle is not mandatory or linear in every architecture. Some HIFs may be synchronized, cached, delayed, split, merged, or routed back into memory.

However, the general idea remains:

```text
source information becomes semantic information,
semantic information becomes validated information,
validated information may become executable action.
```

---

# Source History

`source_history` records where a HIF came from.

Examples include:

```json
{
  "source_history": [
    {
      "source": "camera_front",
      "type": "sensor",
      "timestamp": "2026-05-11T12:34:01.120Z"
    }
  ]
}
```

or:

```json
{
  "source_history": [
    {
      "source": "HRI_DB",
      "type": "memory",
      "query": "person_location(Bob)"
    }
  ]
}
```

Source history is important because socially intelligent systems often need to reason about trust, provenance, and uncertainty.

For example:

- Was this fact stated by the user?
- Was it inferred by a model?
- Was it retrieved from memory?
- Was it detected by a noisy sensor?
- Is the information fresh or stale?

---

# Processing History

`processing_history` records how a HIF was transformed.

Example:

```json
{
  "processing_history": [
    {
      "cell": "SpeechToTextST",
      "operator": "local_stt_model",
      "output": "text",
      "confidence": 0.91
    },
    {
      "cell": "IntentInterpreterST",
      "operator": "semantic_parser",
      "output": "instruction",
      "confidence": 0.84
    },
    {
      "cell": "SpatialResolverES",
      "operator": "pointing_vector_resolver",
      "output": "object_id",
      "confidence": 0.79
    }
  ]
}
```

Processing history supports:

- Explainability
- Debugging
- Auditing
- Failure analysis
- Safety review
- Reproducibility
- Human-facing explanations

It helps the system answer questions such as:

```text
Why did the robot think I meant that bottle?
Why did it ask for clarification?
Which model produced this interpretation?
Was an LLM involved?
Was the action blocked by a safety policy?
```

---

# Confidence

Confidence may be represented in different ways.

A simple HIF may contain one global confidence value:

```json
{
  "confidence": 0.87
}
```

A more detailed HIF may contain confidence per property:

```json
{
  "confidence": {
    "speech_to_text": 0.91,
    "intent": 0.84,
    "object_reference": 0.72,
    "target_person": 0.95
  }
}
```

Property-level confidence is often preferable in HRI because different semantic components may have different reliability levels.

For example, the system may confidently know that the user said `Bob`, but be uncertain about which bottle was referenced.

---

# Example: From Speech to Pending Task

This example shows how a HIF may evolve from raw text into a pending task.

## User Input

```text
Bring this bottle to Bob
```

## Initial Text HIF

```json
{
  "id": "hif_001",
  "type": "Text",
  "timestamp": "2026-05-11T12:34:01.120Z",
  "content": "Bring this bottle to Bob",
  "properties": {},
  "source_history": [
    {
      "source": "microphone_front",
      "type": "sensor"
    }
  ],
  "processing_history": []
}
```

## After Intent Interpretation

```json
{
  "id": "hif_001",
  "type": "Instruction",
  "content": "Bring this bottle to Bob",
  "properties": {
    "intent": "pick_and_place",
    "object_reference": "this bottle",
    "target_person": "Bob"
  },
  "confidence": {
    "intent": 0.88,
    "target_person": 0.96,
    "object_reference": 0.74
  },
  "processing_history": [
    {
      "cell": "IntentInterpreterST",
      "operator": "semantic_parser",
      "result": "instruction"
    }
  ]
}
```

## After Spatial Resolution

```json
{
  "id": "hif_001",
  "type": "Instruction",
  "properties": {
    "intent": "pick_and_place",
    "object_id": "bottle_5",
    "object_type": "bottle",
    "target_person": "Bob",
    "target_location": "unknown"
  },
  "confidence": {
    "object_id": 0.82,
    "target_person": 0.96,
    "target_location": 0.0
  },
  "processing_history": [
    {
      "cell": "SpatialResolverES",
      "operator": "pointing_vector_resolver",
      "result": "object_id: bottle_5"
    }
  ]
}
```

## After Task Prerequisite Resolution

```json
{
  "id": "hif_001",
  "type": "PendingTask",
  "properties": {
    "task": "pick_and_place",
    "object_id": "bottle_5",
    "target_person": "Bob",
    "missing_information": [
      "target_location"
    ],
    "clarification_request": "Where is Bob?"
  },
  "processing_history": [
    {
      "cell": "TaskPrerequisiteResolver",
      "operator": "missing_info_detector",
      "result": "pending_task"
    }
  ]
}
```

The important point is that the HIF does not merely move through the system. It changes semantic status as the system understands more about the interaction.

---

# HIF Versus Message, Event, or Object

A HIF is related to common software concepts, but it is not identical to them.

| Concept | Similarity | Difference |
|---|---|---|
| Message | Carries information between components | HIF also carries semantics, provenance, and processing history |
| Event | Represents something that happened | HIF may represent perception, memory, query, task, or action |
| Data Object | Contains structured fields | HIF is designed for semantic transformation and traceability |
| ROS Message | Can be used as an implementation format | HIF is a modeling abstraction above middleware |
| LLM Context Object | Can carry semantic state | HIF is grounded in embodied interaction and temporal synchronization |

A HIF should therefore be understood as an interaction-level semantic object.

---

# HIF and SOCIAL Principles

The HIF directly supports the SOCIAL principles.

| Principle | HIF Contribution |
|---|---|
| S-Separated Contexts | HIFs allow separate context streams to remain explicit |
| O-Open Declarative | HIF properties expose structured semantic state |
| C-Clear Cognition | HIF history makes reasoning stages traceable |
| I-Interpretable Gates | Gates can explain how and why a HIF changed state |
| A-Adaptive Autonomy | HIFs can carry autonomy state, confidence, and constraints |
| L-Layered Validation | Validation results can accumulate as HIF properties |

The HIF is therefore not only a data structure. It is the semantic substrate that makes SOCIAL architectures inspectable.

---

# Design Guidelines

When designing with HIFs:

## Keep HIFs Semantic

A HIF should represent interaction meaning, not just transport data.

## Separate Content from Properties

Raw or primary data should remain in `content`.

Interpreted meaning should be placed in `properties`.

## Preserve Traceability

Important transformations should be recorded in `processing_history`.

## Do Not Hide Logic Inside the HIF

A HIF carries information. Semantic cells perform computation.

## Use Confidence Explicitly

Probabilistic outputs should expose confidence, especially when used for action.

## Avoid Silent Overwrites

If a property is modified, the system should preserve provenance or record the change.

## Keep Properties Human-Readable

Prefer JSON-like structures that can be inspected, logged, and explained.

## Treat HIF Types as Semantic Roles

The same underlying object may change type as it moves from raw input to interpreted instruction to pending task or executable action.

---

# Implementation Notes

HML does not require a specific implementation format.

A HIF may be implemented using:

- JSON
- YAML
- Python dataclass
- TypeScript interface
- ROS message
- Protobuf
- Pydantic model
- Database record
- Event object

The implementation should preserve the conceptual separation between:

```text
content
properties
metadata
confidence
history
```

This separation is more important than the exact serialization format.

---

# Conclusion

The HIF is the core semantic carrier of HML.

It allows HRI systems to represent interaction information in a way that is:

- Multimodal
- Traceable
- Enrichable
- Synchronizable
- Validatable
- Explainable
- Executable when appropriate

By using HIFs as the common modeling unit, HML enables reusable HRI Design Patterns that remain independent of specific robots, middleware frameworks, or AI implementations.

The HIF is therefore the bridge between raw interaction data and socially meaningful robotic behavior.


---

# HML Diagram Conventions

Source file: `hml/hml-diagram-conventions.md`

# HML Diagram Conventions

## Overview

HML Diagram Conventions define how HML visual symbols should be composed into readable architectural diagrams.

The **HML Visual Dictionary** defines the symbols.  
This page defines the **composition rules**.

In short:

~~~text
Visual Dictionary = what each symbol means
Diagram Conventions = how symbols are connected into diagrams
~~~

The goal is to make HML diagrams consistent across documentation, design patterns, implementation notes, and future academic publications.

A reader should be able to look at an HML diagram and quickly understand:

- what information flows through the system
- which cells process the flow
- which policies govern the flow
- which experts are invoked
- where memory or state is consulted
- where decisions, gates, or validation branches occur
- where semantic information becomes embodied or external action

---

# 1. Basic Reading Direction

The default reading direction of an HML diagram is:

~~~text
left → right
~~~

The main horizontal flow usually represents a HIF or a stream of HIFs.

Policies, experts, and semantic operators usually enter from above.  
State, memory, queues, caches, and context structures usually appear as side structures.  
External or embodied effects usually appear after a HIF Executor.

<div align="center">

<svg width="100%" viewBox="0 0 900 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="basic-reading-title basic-reading-desc">
  <title id="basic-reading-title">Basic HML Reading Direction</title>
  <desc id="basic-reading-desc">A HIF flows from left to right through a Semantic Cell. Policy and lambda enter from above. State may support the cell from below. The output may later become an external effect.</desc>

  <defs>
    <marker id="arrow-basic-reading" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="145" width="140" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="110" y="177" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="355" y="120" width="170" height="104" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
  <text x="440" y="164" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="440" y="190" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="720" y="145" width="140" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="790" y="177" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="180" y1="172" x2="347" y2="172" stroke="currentColor" strokeWidth="1.7" markerEnd="url(#arrow-basic-reading)" />
  <line x1="525" y1="172" x2="712" y2="172" stroke="currentColor" strokeWidth="1.7" markerEnd="url(#arrow-basic-reading)" />

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="378" y="20" width="48" height="48" preserveAspectRatio="xMidYMid meet" />
  <text x="402" y="85" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="480" y="60" textAnchor="middle" fontSize="46" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="480" y="85" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="402" y1="94" x2="402" y2="120" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-basic-reading)" />
  <line x1="480" y1="94" x2="480" y2="120" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-basic-reading)" />

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="402" y="245" width="76" height="46" preserveAspectRatio="xMidYMid meet" />
  <text x="440" y="302" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">State / Memory</text>
  <line x1="440" y1="245" x2="440" y2="232" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#arrow-basic-reading)" />
</svg>

</div>

This convention means that the reader should first follow the HIF flow, then inspect policy, expert, and state dependencies.

---

# 2. Cell Composition Convention

A Semantic Cell is the architectural unit that binds:

- incoming HIFs
- a policy artifact
- one or more semantic operators
- selected context or state, when needed
- routing and failure behavior

The policy and the operator should enter the cell independently.

Do not draw:

~~~text
Policy → λ → Cell
~~~

Prefer:

~~~text
Policy      λ
  ↓         ↓
Semantic Cell
~~~

<div align="center">

<svg width="100%" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cell-composition-title cell-composition-desc">
  <title id="cell-composition-title">Cell Composition Convention</title>
  <desc id="cell-composition-desc">Policy and lambda enter the semantic cell independently from above. HIFs flow horizontally through the cell.</desc>

  <defs>
    <marker id="arrow-cell-composition" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="130" width="135" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="107.5" y="162" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="305" y="110" width="170" height="94" rx="14" fill="none" stroke="currentColor" strokeWidth="2.1" />
  <text x="390" y="150" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="390" y="176" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="585" y="130" width="135" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
  <text x="652.5" y="162" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="175" y1="157" x2="297" y2="157" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-cell-composition)" />
  <line x1="475" y1="157" x2="577" y2="157" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#arrow-cell-composition)" />

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="326" y="5" width="58" height="58" preserveAspectRatio="xMidYMid meet" />
  <text x="355" y="79" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="425" y="49" textAnchor="middle" fontSize="52" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="425" y="79" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="355" y1="89" x2="355" y2="110" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-cell-composition)" />
  <line x1="425" y1="89" x2="425" y2="110" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-cell-composition)" />
</svg>

</div>

This convention is important because policy and expertise are separate concerns.

The operator provides capability.  
The cell decides how and when that capability is invoked under policy.

---

# 3. Operator vs Cell Convention

A semantic operator is not the same thing as a Semantic Cell.

~~~text
λ = replaceable semantic expert / computation
Semantic Cell = policy-aware invocation boundary
~~~

The operator should not implicitly own the system policy or global context.

Instead:

- the cell selects the relevant operator
- the cell applies the relevant policy
- the cell selects or prepares context
- the cell passes explicit inputs or parameters
- the cell routes the result
- the cell records provenance and failure behavior

This convention keeps HML aligned with modular engineering practice.

For example, a person detector should remain a replaceable expert:

~~~text
λperson_detector(frame, threshold?) → persons[]
~~~

It should not need to know why the frame was selected, which ROS node invoked it, which social task is active, or which downstream pattern will use the result.

Those responsibilities belong to the cell or pattern that invokes it.

---

# 4. Gate and Decision Conventions

A gate is a **semantic decision role**.

It is not necessarily a separate primitive cell.

A gate may be implemented by a Semantic Transformer, Sync Gate, Escalation Switch, HIF Executor, or a larger pattern.

Use a **diamond** when a diagram needs to show branching outcomes.

Common branch labels include:

~~~text
pass / block
ready / pending
hit / miss
consistent / inconsistent
safe / unsafe
valid / invalid
clarify / execute
escalate / continue
~~~

<div align="center">

<svg width="100%" viewBox="0 0 820 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="gate-decision-title gate-decision-desc">
  <title id="gate-decision-title">Gate and Decision Convention</title>
  <desc id="gate-decision-desc">A HIF enters a gate-like semantic role and branches through a decision diamond into pass, modify, or block outcomes.</desc>

  <defs>
    <marker id="arrow-gate-decision" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="100" width="120" height="46" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="95" y="128" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="240" y="82" width="135" height="82" rx="14" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="307.5" y="116" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Gate-like</text>
  <text x="307.5" y="140" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Cell / Role</text>

  <polygon points="500,123 555,82 610,123 555,164" fill="none" stroke="currentColor" strokeWidth="1.8" />
  <text x="555" y="128" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Decision</text>

  <rect x="685" y="35" width="100" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
  <text x="735" y="58" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">pass</text>

  <rect x="685" y="105" width="100" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
  <text x="735" y="128" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">modify</text>

  <rect x="685" y="175" width="100" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
  <text x="735" y="198" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">block</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="265" y="0" width="42" height="42" preserveAspectRatio="xMidYMid meet" />
  <text x="286" y="58" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>
  <text x="335" y="36" textAnchor="middle" fontSize="34" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="335" y="58" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Evaluator</text>

  <line x1="155" y1="123" x2="232" y2="123" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-gate-decision)" />
  <line x1="375" y1="123" x2="492" y2="123" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-gate-decision)" />

  <line x1="610" y1="112" x2="677" y2="53" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-gate-decision)" />
  <line x1="610" y1="123" x2="677" y2="123" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-gate-decision)" />
  <line x1="610" y1="134" x2="677" y2="193" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#arrow-gate-decision)" />

  <line x1="286" y1="66" x2="286" y2="82" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-gate-decision)" />
  <line x1="335" y1="66" x2="335" y2="82" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-gate-decision)" />
</svg>

</div>

The diamond shows the branching outcome.  
The gate role explains why a transition was allowed, modified, delayed, escalated, or blocked.

---

# 5. State and Memory Placement

State and memory structures should not usually be drawn as if they are ordinary HIF flow elements.

They may appear as:

- side inputs to a Semantic Cell
- side outputs from a Semantic Cell
- stores updated by a Semantic Cell
- triggers that create new HIFs
- persistent structures that influence later reasoning

Typical state structures include:

- HRI_DB
- Semantic Cache
- Session Context
- Buffer
- Queue
- Prioritized Queue
- Pending Queue
- Time-Series Window

<div align="center">

<svg width="100%" viewBox="0 0 880 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="state-placement-title state-placement-desc">
  <title id="state-placement-title">State and Memory Placement</title>
  <desc id="state-placement-desc">State structures such as HRI_DB, cache, and pending queues are shown as side structures that support or receive updates from a semantic cell.</desc>

  <defs>
    <marker id="arrow-state-placement" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="125" width="130" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="105" y="155" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="355" y="105" width="160" height="90" rx="14" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="435" y="142" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="435" y="167" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="710" y="125" width="130" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="775" y="155" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="170" y1="150" x2="347" y2="150" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-state-placement)" />
  <line x1="515" y1="150" x2="702" y2="150" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#arrow-state-placement)" />

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="235" y="245" width="68" height="44" preserveAspectRatio="xMidYMid meet" />
  <text x="269" y="305" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">HRI_DB</text>

  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="405" y="245" width="68" height="44" preserveAspectRatio="xMidYMid meet" />
  <text x="439" y="305" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Cache</text>

  <image href="/social-hri-framework/img/hml/pending-queue.svg" x="585" y="240" width="92" height="54" preserveAspectRatio="xMidYMid meet" />
  <text x="631" y="305" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Pending Queue</text>

  <line x1="290" y1="245" x2="385" y2="195" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-state-placement)" />
  <line x1="425" y1="195" x2="295" y2="250" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-state-placement)" />

  <line x1="440" y1="245" x2="440" y2="203" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-state-placement)" />
  <line x1="465" y1="195" x2="465" y2="245" stroke="currentColor" strokeWidth="1.1" markerEnd="url(#arrow-state-placement)" />

  <line x1="625" y1="240" x2="495" y2="195" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-state-placement)" />
</svg>

</div>

This convention keeps the main HIF flow readable while still showing that persistent or temporary state participates in the architecture.

---

# 6. Arrow Semantics

Different arrows should communicate different kinds of architectural relationships.

| Arrow Style | Meaning | Typical Use |
|---|---|---|
| Solid arrow | Main semantic flow | HIF flow, HIF stream, effect flow |
| Top-down solid arrow | Cell input | Policy or λ entering a Semantic Cell |
| Dashed arrow | Binding, invocation, non-HIF dependency, or optional relation | External operator binding, configuration dependency |
| Branch arrow | Outcome of a decision | pass, block, hit, miss, ready, pending |
| Bidirectional arrows | Read/write relation | HRI_DB query/update, cache lookup/update |
| Return arrow | Reprocessing or resumption | pending queue recheck, fact-triggered task promotion |

Use bidirectional arrows carefully.  
If a relationship has different read and write semantics, prefer two separate arrows with labels.

---

# 7. Pattern Diagram Levels

HRI Design Patterns should usually be shown at two levels.

## Abstract HML Pattern

The abstract diagram shows the reusable architectural structure.

Example:

~~~text
HIF → ST₁ / ST₂ / ST₃ → SG → enriched HIF
~~~

This level should avoid robot-specific implementation details.

## Concrete Example

The concrete diagram shows a specific instantiation.

Example:

~~~text
VideoFrame HIF
  → Person Detector ST
  → Skeleton Detector ST
  → Gaze Detector ST
  → Aggregator SG
  → HumanState HIF
~~~

This level may include:

- concrete input types
- concrete experts
- concrete policies
- domain-specific state structures
- robot-specific output effects

The pattern page should make clear which part is generic and which part is an example.

---

# 8. Abstract vs Runtime Diagrams

HML diagrams are architectural diagrams, not necessarily runtime graphs.

A single Semantic Cell may correspond to:

- one ROS node
- multiple ROS nodes
- a Python class
- a service call
- an agent tool
- a model endpoint
- a configuration binding
- a set of cooperating modules

Conversely, one runtime component may implement several HML roles.

Therefore, avoid interpreting an HML diagram as a one-to-one deployment diagram.

HML answers:

~~~text
What semantic role is being performed?
~~~

not necessarily:

~~~text
Which process, container, or node performs it?
~~~

Runtime binding may be documented separately.

---

# 9. Recommended Layout Rules

For readable diagrams:

- Keep the main HIF flow horizontal whenever possible.
- Place policy and expert inputs above the cell.
- Place state structures below or beside the cell.
- Use diamonds only when an actual branch is shown.
- Use labels on non-obvious arrows.
- Avoid long crossing arrows.
- Use two-row layouts for long pipelines.
- Prefer short diagrams on documentation pages and larger diagrams for slides.
- Keep abstract diagrams technology-neutral.
- Put implementation-specific details in examples or implementation notes.

---

# 10. Anti-Patterns

Avoid the following diagrammatic anti-patterns.

## Policy Hidden Inside an Operator

Avoid:

~~~text
Policy → λ → Cell
~~~

Prefer independent inputs:

~~~text
Policy      λ
  ↓         ↓
Cell
~~~

## Global State Everywhere

Avoid diagrams where every component reads and writes a global state store.

Prefer bounded state access through explicit cells or handlers.

## LLM Directly to Action

Avoid:

~~~text
LLM → Robot Action
~~~

Prefer:

~~~text
LLM candidate → validation gates → executable HIF → HE → effect
~~~

## Mermaid-Only Box Diagrams

Mermaid is useful for early sketches, but final documentation diagrams should use the HML visual grammar when possible.

## Unlabeled Branches

Avoid diamonds whose outputs are not labeled.

A gate should expose what decision was made and why the branch was selected.

---

# 11. Minimal Pattern Diagram Template

Most HRI Design Pattern diagrams can follow this abstract structure:

<div align="center">

<svg width="100%" viewBox="0 0 920 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pattern-template-title pattern-template-desc">
  <title id="pattern-template-title">Minimal HML Pattern Diagram Template</title>
  <desc id="pattern-template-desc">A reusable pattern diagram template showing input HIF, semantic cell, decision, optional state, and output HIF or effect.</desc>

  <defs>
    <marker id="arrow-pattern-template" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="145" width="120" height="46" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="95" y="173" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="240" y="125" width="130" height="86" rx="14" fill="none" stroke="currentColor" strokeWidth="1.9" />
  <text x="305" y="160" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="305" y="184" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="currentColor">Cell</text>

  <polygon points="500,168 550,130 600,168 550,206" fill="none" stroke="currentColor" strokeWidth="1.7" />
  <text x="550" y="173" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="currentColor">Decision</text>

  <rect x="720" y="145" width="145" height="46" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="792.5" y="173" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="currentColor">Output HIF / Effect</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="258" y="20" width="42" height="42" preserveAspectRatio="xMidYMid meet" />
  <text x="279" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="332" y="55" textAnchor="middle" fontSize="36" fontFamily="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="332" y="78" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="currentColor">Expert</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="270" y="250" width="70" height="44" preserveAspectRatio="xMidYMid meet" />
  <text x="305" y="310" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="currentColor">Optional State</text>

  <line x1="155" y1="168" x2="232" y2="168" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-template)" />
  <line x1="370" y1="168" x2="492" y2="168" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-template)" />
  <line x1="600" y1="168" x2="712" y2="168" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-pattern-template)" />

  <line x1="279" y1="86" x2="279" y2="125" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-pattern-template)" />
  <line x1="332" y1="86" x2="332" y2="125" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-pattern-template)" />

  <line x1="305" y1="250" x2="305" y2="218" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow-pattern-template)" />
</svg>

</div>

A pattern-specific diagram should modify this template only as needed.

Examples:

- remove the decision diamond if there is no branching
- replace HRI_DB with cache, queue, or time-series window
- use multiple STs when the pattern performs parallel extraction
- use an ES when the pattern selects among experts
- use an SG when the pattern synchronizes multiple HIFs
- use an HE when the pattern commits to an external or embodied effect

---

# Conclusion

HML Diagram Conventions define how the visual symbols should be composed into readable architectural diagrams.

The most important conventions are:

~~~text
HIFs flow left to right.
Policies and λ operators enter cells from above.
Cells bind policy, operator, context, and HIF flow.
State and memory are explicit supporting structures.
Diamonds represent decision outcomes, not primitive cells.
Design pattern diagrams should separate abstract structure from concrete examples.
~~~

These conventions make HML diagrams consistent, auditable, and reusable across the SOCIAL framework and the HRI Design Patterns.


---

# HML — HRI Modeling Language

Source file: `hml/hml-overview.md`

# HML — HRI Modeling Language

## Overview

<div align="center">

<svg width="920" height="620" viewBox="0 0 920 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hml-overview-title hml-overview-desc">
  <title id="hml-overview-title">HML Overview</title>
  <desc id="hml-overview-desc">
    SOCIAL principles inform HML. HML defines core modeling primitives: HIF, Semantic Operators, and Semantic Cells. HRI Design Patterns are built from HML and are then instantiated as concrete HRI architectures.
  </desc>

  <defs>
    <marker id="arrow-hml-overview-clean" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- SOCIAL -->
  <rect x="210" y="30" width="500" height="74" rx="16" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="460" y="62" text-anchor="middle" font-size="20" font-family="Arial, sans-serif" fill="currentColor">S.O.C.I.A.L. Principles</text>
  <text x="460" y="87" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Architectural principles for socially intelligent HRI</text>

  <!-- SOCIAL -> HML -->
  <line x1="460" y1="104" x2="460" y2="155" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow-hml-overview-clean)"/>

  <!-- HML -->
  <rect x="305" y="165" width="310" height="82" rx="18" fill="none" stroke="currentColor" stroke-width="2.3"/>
  <text x="460" y="199" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="currentColor">HML</text>
  <text x="460" y="225" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HRI Modeling Language</text>

  <!-- HML -> primitives -->


  <!-- Primitives row -->
  <!-- HIF -->
  <rect x="55" y="335" width="210" height="74" rx="14" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="160" y="365" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <text x="160" y="390" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">semantic interaction carrier</text>

  <!-- Operators -->
  <rect x="355" y="335" width="210" height="74" rx="14" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="405" y="365" text-anchor="middle" font-size="34" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="470" y="364" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Operators</text>
  <text x="460" y="390" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">experts, policies, heuristics, models</text>

  <!-- Semantic Cells -->
  <rect x="655" y="335" width="210" height="74" rx="14" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="760" y="365" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Semantic Cells</text>
  <text x="760" y="390" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">HC / ST / SG / ES / HE</text>

  <!-- HML -> each primitive -->
  <line x1="420" y1="247" x2="160" y2="327" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>
  <line x1="460" y1="247" x2="460" y2="327" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>
  <line x1="500" y1="247" x2="760" y2="327" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>

<!-- Primitives -> Patterns -->
<line x1="160" y1="409" x2="340" y2="465"
      stroke="currentColor" stroke-width="1.5"
      marker-end="url(#arrow-hml-overview-clean)"/>

<line x1="460" y1="409" x2="460" y2="465"
      stroke="currentColor" stroke-width="1.5"
      marker-end="url(#arrow-hml-overview-clean)"/>

<line x1="760" y1="409" x2="580" y2="465"
      stroke="currentColor" stroke-width="1.5"
      marker-end="url(#arrow-hml-overview-clean)"/>

  <!-- Patterns -->
  <rect x="260" y="465" width="400" height="52" rx="14" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="460" y="487" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">HRI Design Patterns</text>
  <text x="460" y="507" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">reusable architectural solutions</text>

  <!-- Patterns -> Architectures -->
  <line x1="460" y1="517" x2="460" y2="555" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hml-overview-clean)"/>

  <!-- Concrete Architectures -->
  <rect x="230" y="565" width="460" height="52" rx="14" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="460" y="587" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Concrete HRI Architectures</text>
  <text x="460" y="607" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">robot-specific implementations</text>
</svg>

</div>

This overview locates HML within the overall SOCIAL framework. The SOCIAL principles define the architectural commitments, HML provides the modeling language, and HRI Design Patterns reuse HML primitives to describe concrete socially intelligent robot architectures.

HML (HRI Modeling Language) is a lightweight architectural modeling language for designing, documenting, and reasoning about socially intelligent Human-Robot Interaction (HRI) systems.

The purpose of HML is to provide a shared visual and semantic vocabulary for describing how embodied AI systems perceive, interpret, reason, validate, and act within human environments.

HML is not intended to replace implementation frameworks such as ROS, behavior trees, state machines, or agent orchestration platforms. Instead, it operates at a higher architectural level: it describes the semantic flow of interaction.

It answers questions such as:

- What kind of interaction information is flowing through the system?
- Which semantic transformations are applied?
- Where is context synchronized?
- Where is reasoning escalated?
- Where is social or safety validation performed?
- Which parts of the architecture are deterministic, learned, cached, or generative?
- Where does semantic reasoning become embodied action?

HML provides the modeling foundation for the SOCIAL principles and the HRI Design Patterns.

---

# Motivation

Modern HRI systems increasingly combine many heterogeneous components:

- Cameras
- Microphones
- LiDAR
- Robot sensors
- Object detectors
- Speech recognition
- Gesture recognition
- Tracking systems
- Knowledge bases
- LLMs
- Multimodal models
- Planning systems
- Navigation stacks
- Social policies
- Safety monitors
- Actuators

Without a modeling language, these systems are often described using implementation diagrams that expose software nodes, APIs, or message topics, but hide the semantic logic of interaction.

This creates several problems:

- The architecture becomes difficult to explain.
- Social reasoning is hidden inside implementation details.
- Multimodal synchronization is unclear.
- Escalation between simple and complex reasoning is not explicit.
- Safety and social validation are difficult to locate.
- Design patterns cannot be compared systematically.
- Academic communication becomes overly implementation-specific.

HML addresses these limitations by modeling the semantic structure of HRI systems directly.

---

# Core Idea

HML models HRI systems as flows of semantic interaction frames processed by explicit semantic cells.

At the center of HML is the HIF:

    HIF — HRI Interaction Frame

A HIF is a semantic carrier that wraps raw content, interpreted properties, metadata, and processing history.

HIFs flow through semantic cells such as:

- HIF Creators
- Semantic Transformers
- Sync Gates
- Escalation Switches
- HIF Executors

Each cell applies a semantic operation, policy, expert, or transformation to the HIF.

In simplified form:
    ```text
    Source
      ↓
    HIF Creator
      ↓
    HIF
      ↓
    Semantic Cells
      ↓
    Enriched / validated / executable HIF
      ↓
    HIF Executor
    ```

This allows an HRI architecture to be described as an interpretable semantic pipeline rather than as a collection of disconnected software modules.

---

# The Three Modeling Layers

HML can be understood through three modeling layers.

## 1. Semantic Data

Semantic data elements represent what flows through the system.

Examples include:

- HIF
- HIF Stream
- Semantic Object
- HRI_DB
- Semantic Cache
- Queue
- Buffer
- Time-series Window
- Pending Task Queue

These elements describe interaction information, memory, state, and temporal storage.

---

## 2. Semantic Operators

Semantic operators describe how meaning is computed, transformed, validated, or selected.

The main symbolic abstraction is:

    λ — Semantic Operator

A λ may represent:

- Deterministic code
- A heuristic
- A classifier
- A neural network
- An LLM
- A multimodal model
- A rule engine
- A database query
- A policy function
- A social law
- A safety rule

From the modeling perspective, λ represents an encapsulated expert or policy.

---

## 3. Semantic Cells

Semantic cells are architectural primitives that apply semantic operators to HIFs.

Core cells include:

| Cell | Name | Purpose |
|---|---|---|
| HC | HIF Creator | Converts a source into a HIF |
| ST | Semantic Transformer | Adds or modifies semantic properties |
| SG | Sync Gate | Synchronizes multiple HIFs |
| ES | Escalation Switch | Selects among experts or reasoning paths |
| HE | HIF Executor | Converts a HIF into an embodied or external effect |

These cells are the basic building blocks used by the HRI Design Patterns.

---

# Why Not Use UML Alone?

HML is not a general-purpose software modeling language.

UML can describe classes, components, sequences, and state machines, but it does not directly capture the central concerns of social HRI:

- Semantic enrichment
- Multimodal synchronization
- Temporal grounding
- Contextual reasoning
- Social validation
- Human-facing explainability
- Escalation between heterogeneous experts
- Late-bound behavior generation
- Embodied execution

HML complements UML by focusing on the semantic and interactional structure of the system.

---

# Why Not Use ROS Graphs Alone?

ROS graphs are excellent for representing runtime communication between nodes.

However, ROS-level diagrams often describe transport and computation rather than meaning.

A ROS graph may show that a camera topic feeds a perception node, but it does not necessarily show:

- Which social properties were extracted
- Whether gaze and speech were synchronized
- Whether confidence was sufficient
- Whether a task was delayed due to missing context
- Whether a social convention blocked execution
- Whether an LLM was used only after simpler reasoning failed

HML abstracts above the implementation layer to expose these semantic decisions.

---

# HML and SOCIAL

The SOCIAL principles define what a socially intelligent architecture should preserve.

HML defines how such an architecture can be modeled.

| SOCIAL Principle | HML Support |
|---|---|
| S-Separated Contexts | Contexts are modeled as separated HIF streams |
| O-Open Declarative | Semantic state and policies are explicitly represented |
| C-Clear Cognition | Cognitive stages are visible as HIF transformations |
| I-Interpretable Gates | Gates are modeled as explicit semantic cells or roles |
| A-Adaptive Autonomy | Autonomy is represented as explicit state and policy |
| L-Layered Validation | Validation is distributed across visible semantic layers |

In this sense, HML is the notation layer that makes SOCIAL architectures visible.

---

# HML and HRI Design Patterns

The HRI Design Patterns are reusable architectural structures built from HML primitives.

For example:

| Pattern | HML Interpretation |
|---|---|
| Synchronous Multi-Extractor | Multiple STs synchronized by an SG |
| Elastic Attention Governor | Priority SG plus resource-aware ES |
| Tiered Semantic Cache | ES over code, cache, and LLM experts |
| Adaptive Signature Learner | Time-series window plus SG plus learning ST |
| Context Novelty Extractor | Context unification followed by delta extraction |
| HRI_DB Handler | ES-mediated query/update logic over declarative memory |
| Task Prerequisite Resolver | Queue, missing-info ST, QSH, and pending queue |
| Social Convention Validator | Consistency validation plus social acceptance gate |
| System Integrity & Agency Handler | Self-HIF generation plus integrity ES |
| Social Action Stylist | Parallel styling STs synchronized into action |
| Late-Binding Behavioral Choreographer | Social opportunity timing followed by behavioral styling |

This allows the patterns to be documented, compared, and reused systematically.

---

# Modeling Philosophy

HML follows several design commitments.

## Semantic First

The language models meaning before implementation.

## Explicit Boundaries

Transitions between perception, reasoning, validation, and action should be visible.

## Traceability

A HIF should carry enough history to explain how it was produced.

## Modularity

Experts, policies, and gates should be replaceable without changing the overall pattern.

## Hybrid Intelligence

HML supports symbolic, neural, deterministic, cached, and generative components within the same diagram.

## Social Grounding

The language is designed specifically for human-facing embodied systems.

---

# Reading an HML Diagram

An HML diagram should be read as a semantic interaction flow.

In general:

- HIFs flow between cells.
- Cells apply semantic operations.
- λ symbols describe the expert or policy inside a cell.
- Gates regulate synchronization, escalation, validation, or execution.
- Queues and buffers represent temporal or unresolved state.
- HRI_DB and caches provide memory or reusable semantic knowledge.
- Executors create actions or effects outside the reasoning pipeline.

A typical diagram therefore answers:

    What is known?
    How was it derived?
    What changed?
    What is uncertain?
    What was validated?
    What is ready for action?
    What must wait?
    What requires escalation?
    What must be explained?

---

# Scope

HML is designed to model:

- Multimodal perception pipelines
- Human context interpretation
- Scene understanding
- Robot self-state and integrity
- Social reasoning
- Task readiness
- Validation gates
- Autonomy regulation
- Behavioral synthesis
- Interaction timing
- Embodied execution

HML is not intended to specify:

- Low-level control algorithms
- Exact neural network architectures
- Middleware APIs
- Memory layouts
- Full formal verification semantics
- UI implementation details

Those may be documented separately at lower levels of abstraction.

---

# Conclusion

HML provides the semantic modeling layer for SOCIAL-based HRI architectures.

It defines a small vocabulary of interaction frames, semantic operators, memory structures, gates, and processing cells that can be composed into reusable HRI Design Patterns.

By making social cognition architecturally visible, HML supports:

- Better documentation
- Clearer academic communication
- More reusable design patterns
- Explainable autonomy
- Safer embodied AI
- More trustworthy human-robot interaction

HML is therefore the bridge between high-level SOCIAL principles and concrete HRI Design Patterns.


---

# HML Visual Dictionary

Source file: `hml/hml-visual-dictionary.md`

# HML Visual Dictionary

## Overview

The HML Visual Dictionary defines the shared visual notation used throughout HML diagrams.

The goal is to make HML diagrams consistent, reusable, and easy to update. Whenever a symbol is represented by an icon, the documentation references a shared SVG file under:

~~~text
static/img/hml/
~~~

This means that if an icon changes later, the documentation pages that reference it will automatically show the updated symbol.

Core visual principles:

- HIFs flow primarily from left to right.
- Semantic Cells process HIFs.
- Policies enter Semantic Cells from above.
- Semantic Operators enter Semantic Cells from above as clean `λ` symbols.
- Memory, cache, state, and queues appear as explicit supporting structures.
- Decision branches are shown using diamonds.
- Specialized experts such as NN, LLM, and multimodal models use dedicated icons.

---

# Static SVG Assets

The documentation references shared SVG assets using the public Docusaurus path:

~~~text
/social-hri-framework/img/hml/<icon-name>.svg
~~~

Example:

~~~html
<img src="/social-hri-framework/img/hml/policy-check.svg" width="48" />
~~~

The source files should be placed under:

~~~text
static/img/hml/
~~~

In your current project layout this corresponds to:

~~~text
docs/static/img/hml/
~~~

---

# Core Visual Grammar

A standard HML processing cell follows this visual grammar:

<div align="center">

<svg width="760" height="300" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="visual-grammar-title visual-grammar-desc">
  <title id="visual-grammar-title">Generic HML Visual Grammar</title>
  <desc id="visual-grammar-desc">Input HIF flows into a Semantic Cell and exits as an output HIF. Policy and lambda enter independently from above.</desc>

  <defs>
    <marker id="arrow-visual-grammar" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="125" width="135" height="54" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="107.5" y="157" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="305" y="105" width="170" height="94" rx="14" ry="14" fill="none" stroke="currentColor" stroke-width="2.1"/>
  <text x="390" y="145" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="390" y="171" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="585" y="125" width="135" height="54" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="652.5" y="157" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="175" y1="152" x2="297" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow-visual-grammar)"/>
  <line x1="475" y1="152" x2="577" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow-visual-grammar)"/>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="326" y="0" width="58" height="58" preserveAspectRatio="xMidYMid meet"/>
  <text x="355" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="425" y="44" text-anchor="middle" font-size="52" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="425" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="355" y1="84" x2="355" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow-visual-grammar)"/>
  <line x1="425" y1="84" x2="425" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow-visual-grammar)"/>
</svg>

</div>

The policy and expert enter independently from above. The policy does not flow through the expert, and the expert does not define the policy. The Semantic Cell binds both to the HIF flow.

---

# Symbol Reference

The following table defines the main HML visual symbols.

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Concept</th>
      <th>Meaning</th>
      <th>SVG Asset</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">λ</td>
      <td>Semantic Operator</td>
      <td>Expert, heuristic, model, policy function, or implementation binding</td>
      <td>text / inline SVG</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/policy-check.svg" width="42" /></td>
      <td>Policy</td>
      <td>Rules, thresholds, constraints, social laws, safety policies</td>
      <td><code>policy-check.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/code-expert.svg" width="52" /></td>
      <td>Deterministic Code</td>
      <td>Rule-based or procedural logic</td>
      <td><code>code-expert.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/nn-expert.svg" width="52" /></td>
      <td>Neural Network</td>
      <td>Learned model, classifier, perception model, or predictor</td>
      <td><code>nn-expert.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/llm-bubble.svg" width="52" /></td>
      <td>LLM</td>
      <td>Language model or generative semantic reasoner</td>
      <td><code>llm-bubble.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/multimodal-expert.svg" width="52" /></td>
      <td>Multimodal Model</td>
      <td>VLM or multimodal model for cross-modal reasoning</td>
      <td><code>multimodal-expert.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/hri-db.svg" width="52" /></td>
      <td>HRI_DB</td>
      <td>Persistent semantic world model of the robot</td>
      <td><code>hri-db.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-cache.svg" width="52" /></td>
      <td>Semantic Cache</td>
      <td>Reusable semantic computation or interpretation store</td>
      <td><code>semantic-cache.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-object.svg" width="52" /></td>
      <td>Semantic Object</td>
      <td>JSON-like structured semantic data</td>
      <td><code>semantic-object.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/queue.svg" width="68" /></td>
      <td>Queue</td>
      <td>Ordered waiting items</td>
      <td><code>queue.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/prioritized-queue.svg" width="68" /></td>
      <td>Prioritized Queue</td>
      <td>Queue governed by a priority policy</td>
      <td><code>prioritized-queue.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/pending-queue.svg" width="68" /></td>
      <td>Pending Queue</td>
      <td>Waiting tasks or requests that cannot execute yet</td>
      <td><code>pending-queue.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/buffer.svg" width="68" /></td>
      <td>Buffer</td>
      <td>Bounded temporary storage</td>
      <td><code>buffer.svg</code></td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/time-series-window.svg" width="78" /></td>
      <td>Time-Series Window</td>
      <td>Temporally scoped buffer</td>
      <td><code>time-series-window.svg</code></td>
    </tr>
  </tbody>
</table>

The SVG asset names should remain stable once the documentation starts using them across pages.

---
# HIF

A HIF is shown as a rounded rectangle.

<div align="center">

<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HIF symbol">
  <rect x="55" y="25" width="150" height="42" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="130" y="51" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
</svg>

</div>

Use specific labels when the HIF role is known:

~~~text
Text HIF
Instruction HIF
ActionRequest HIF
RobotState HIF
~~~

---

# Semantic Cell

A Semantic Cell is shown as a larger rounded rectangle labeled with its cell type.

Examples:

~~~text
HC
ST
SG
ES
HE
~~~

A cell should not be confused with an implementation component such as a ROS node, Python class, service, or container.

The cell represents semantic responsibility.

---

# Policy

<div align="center">
  <img src="/social-hri-framework/img/hml/policy-check.svg" width="72" alt="Policy symbol" />
</div>

A Policy is shown as a checklist-like document icon.

Recommended asset:

~~~text
static/img/hml/policy-check.svg
~~~

Use this icon for:

- thresholds
- constraints
- safety rules
- social laws
- synchronization policies
- escalation policies
- autonomy policies
- resource policies
- queue priority policies

Policies usually enter Semantic Cells from above.

---

# λ — Semantic Operator

A Semantic Operator is shown as a clean lambda symbol:

<div align="center" style={{fontSize: '64px', fontFamily: 'Georgia, Times New Roman, serif'}}>
λ
</div>

It should usually appear without a surrounding rectangle.

Use subscripts or labels when needed:

~~~text
λsync
λintent
λsafety
λ₁ λ₂ λₙ
~~~

The operator represents an expert, model, heuristic, rule, policy function, or implementation binding.

---

# Expert Icons

HML may use more specific expert icons when the implementation family matters.

## Deterministic Code

<div align="center">
  <img src="/social-hri-framework/img/hml/code-expert.svg" width="90" alt="Deterministic code expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/code-expert.svg
~~~

Use for:

- rule-based handlers
- deterministic parsers
- procedural logic
- handcrafted algorithms

## Neural Network

<div align="center">
  <img src="/social-hri-framework/img/hml/nn-expert.svg" width="90" alt="Neural network expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/nn-expert.svg
~~~

Use for:

- classifiers
- perception models
- skeleton detectors
- emotion classifiers
- learned predictors

## LLM

<div align="center">
  <img src="/social-hri-framework/img/hml/llm-bubble.svg" width="90" alt="LLM expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/llm-bubble.svg
~~~

Use for:

- language interpretation
- open-ended reasoning
- fallback explanation
- natural language generation
- social reasoning

## Multimodal Model

<div align="center">
  <img src="/social-hri-framework/img/hml/multimodal-expert.svg" width="90" alt="Multimodal expert symbol" />
</div>

Recommended asset:

~~~text
static/img/hml/multimodal-expert.svg
~~~

Use for:

- VLMs
- multimodal LLMs
- vision-language referent resolution
- image + text reasoning
- audio-visual interaction reasoning

---

# HRI_DB

<div align="center">
  <img src="/social-hri-framework/img/hml/hri-db.svg" width="90" alt="HRI_DB symbol" />
</div>

HRI_DB is shown as a database cylinder.

Recommended asset:

~~~text
static/img/hml/hri-db.svg
~~~

Use HRI_DB only for the persistent semantic world model of the robot.

Do not use the HRI_DB symbol for a cache unless the diagram explicitly labels it as a cache.

---

# Semantic Cache

<div align="center">
  <img src="/social-hri-framework/img/hml/semantic-cache.svg" width="90" alt="Semantic Cache symbol" />
</div>

A Semantic Cache is shown as a smaller database or cache cylinder.

Recommended asset:

~~~text
static/img/hml/semantic-cache.svg
~~~

Use Semantic Cache for reusable computation or interpretation.

Example:

~~~text
"Where is Bob?" → query intent: where_is(Bob)
~~~

Do not treat a cache as the authoritative world model.

---

# Semantic Object

<div align="center">
  <img src="/social-hri-framework/img/hml/semantic-object.svg" width="90" alt="Semantic Object symbol" />
</div>

A Semantic Object is a JSON-like structured object.

Recommended asset:

~~~text
static/img/hml/semantic-object.svg
~~~

Suggested textual notation:

~~~text
{:}
~~~

or:

~~~json
{
  "key": "value"
}
~~~

Use this notation for:

- HIF properties
- policy parameters
- query results
- DB records
- task specifications
- validation results

---

# Queue

<div align="center">
  <img src="/social-hri-framework/img/hml/queue.svg" width="120" alt="Queue symbol" />
</div>

A Queue is shown as a one-dimensional row of boxes.

Recommended asset:

~~~text
static/img/hml/queue.svg
~~~

Use Queue for ordered waiting items:

- HIFs
- tasks
- requests
- actions
- social requests

---

# Prioritized Queue

<div align="center">
  <img src="/social-hri-framework/img/hml/prioritized-queue.svg" width="130" alt="Prioritized Queue symbol" />
</div>

A Prioritized Queue is a queue governed by a priority policy.

Recommended asset:

~~~text
static/img/hml/prioritized-queue.svg
~~~

Use for:

- prioritized task queues
- request queues
- proactivity queues
- safety-prioritized alerts

---

# Pending Queue

<div align="center">
  <img src="/social-hri-framework/img/hml/pending-queue.svg" width="130" alt="Pending Queue symbol" />
</div>

A Pending Queue stores tasks or requests that cannot execute yet but should not be discarded.

Recommended asset:

~~~text
static/img/hml/pending-queue.svg
~~~

Use for:

- missing information
- closed social window
- unavailable user
- pending permission
- unresolved ambiguity
- delayed task resumption

Pending queues should usually have expiration or decay policies.

---

# Buffer

<div align="center">
  <img src="/social-hri-framework/img/hml/buffer.svg" width="130" alt="Buffer symbol" />
</div>

A Buffer is bounded temporary storage.

Recommended asset:

~~~text
static/img/hml/buffer.svg
~~~

Use for:

- stream buffering
- synchronization buffers
- smoothing
- evidence accumulation
- short-term storage

---

# Time-Series Window

<div align="center">
  <img src="/social-hri-framework/img/hml/time-series-window.svg" width="150" alt="Time-Series Window symbol" />
</div>

A Time-Series Window is a buffer with explicit temporal meaning.

Recommended asset:

~~~text
static/img/hml/time-series-window.svg
~~~

Use for:

- gesture learning
- gesture classification
- motion pattern detection
- engagement estimation
- temporal smoothing
- repeated behavior detection

---
# Decision Diamond

A decision is shown as a diamond.

<div align="center">

<svg width="260" height="110" viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision diamond symbol">
  <polygon points="130,18 180,55 130,92 80,55" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="130" y="60" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Decision</text>
</svg>

</div>

The diamond is not a primitive Semantic Cell.

It represents the branching output produced by a gate role.

Typical branches include:

~~~text
pass / block
hit / miss
ready / pending
consistent / inconsistent
problem / no problem
safe / unsafe
~~~

---

# Effect

An Effect represents an external, computational, communicative, or embodied action.

<div align="center">

<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Effect symbol">
  <rect x="55" y="25" width="150" height="42" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="130" y="51" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Effect</text>
</svg>

</div>

Examples:

- spoken sentence
- robot movement
- navigation command
- UI notification
- database-side action
- user-code execution
- emergency stop

Effects usually appear after a HIF Executor.

---

# Visual Composition Rules

## Left-to-Right HIF Flow

The main semantic flow should move from left to right.

~~~text
Input HIF → Semantic Cell → Output HIF
~~~

## Top-Down Policy and Expert Inputs

Policies and experts should enter Semantic Cells from above.

~~~text
Policy      λ
  ↓         ↓
Semantic Cell
~~~

## Independent Policy and Expert Inputs

Policy and expert inputs should be visually independent.

Do not draw:

~~~text
Policy → λ → Cell
~~~

Prefer both entering vertically from above:

~~~text
Policy      λ
  ↓         ↓
Semantic Cell
~~~

## State as Side Input or Side Effect

Memory, cache, and queues should usually appear as side structures.

They may feed a Semantic Cell, receive updates from it, or trigger later reprocessing.

## Decision Diamonds for Branching

Use a diamond when the diagram branches into outcomes.

Do not use a diamond merely to show normal sequential flow.

---

# Unified HML Symbol Map

The following diagram summarizes the main visual symbols used by HML.

<div align="center">

<svg width="900" height="520" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="symbol-map-title symbol-map-desc">
  <title id="symbol-map-title">Unified HML Symbol Map</title>
  <desc id="symbol-map-desc">A visual map of HML symbols including HIF, semantic cells, policy, lambda, expert icons, memory, queues, and decision symbols.</desc>

  <defs>
    <marker id="arrow-symbol-map" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <text x="90" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Semantic Flow</text>
  <text x="305" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Cells</text>
  <text x="520" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">Experts</text>
  <text x="740" y="35" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="currentColor">State / Control</text>

  <rect x="25" y="70" width="130" height="42" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="96" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="25" y="145" width="42" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <rect x="72" y="145" width="42" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <rect x="119" y="145" width="42" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="166" y1="160" x2="195" y2="160" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-symbol-map)"/>
  <text x="90" y="200" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF Stream</text>

  <rect x="25" y="245" width="130" height="42" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="271" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Effect</text>

  <rect x="250" y="70" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="103" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">ST</text>

  <rect x="250" y="150" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="183" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">SG</text>

  <rect x="250" y="230" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="263" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">ES</text>

  <rect x="250" y="310" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="343" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">HE</text>

  <rect x="250" y="390" width="110" height="55" rx="11" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="305" y="423" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">HC</text>

  <text x="475" y="95" text-anchor="middle" font-size="42" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="475" y="120" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Operator</text>

  <image href="/social-hri-framework/img/hml/code-expert.svg" x="445" y="145" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="205" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Code</text>

  <image href="/social-hri-framework/img/hml/nn-expert.svg" x="445" y="230" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="290" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">NN</text>

  <image href="/social-hri-framework/img/hml/llm-bubble.svg" x="445" y="315" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="375" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">LLM</text>

  <image href="/social-hri-framework/img/hml/multimodal-expert.svg" x="445" y="400" width="60" height="45" preserveAspectRatio="xMidYMid meet"/>
  <text x="475" y="460" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Multimodal</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="710" y="60" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="125" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="710" y="145" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="210" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HRI_DB</text>

  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="710" y="230" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="295" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Cache</text>

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="710" y="310" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="375" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Semantic Object</text>

  <image href="/social-hri-framework/img/hml/queue.svg" x="710" y="390" width="60" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="740" y="455" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Queue</text>

  <polygon points="840,335 875,365 840,395 805,365" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="840" y="370" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Decision</text>
</svg>

</div>

The unified map is intentionally compact. Individual diagrams may use larger or more specific versions of the same symbols.

---

# Recommended SVG Asset List

The following files are expected under:

~~~text
static/img/hml/
~~~

| File | Purpose |
|---|---|
| `policy-check.svg` | Policy artifact |
| `code-expert.svg` | Deterministic code / rule expert |
| `nn-expert.svg` | Neural-network expert |
| `llm-bubble.svg` | LLM expert |
| `multimodal-expert.svg` | Multimodal / VLM expert |
| `hri-db.svg` | HRI_DB persistent semantic world model |
| `semantic-cache.svg` | Semantic cache |
| `semantic-object.svg` | JSON-like semantic object |
| `queue.svg` | Generic queue |
| `prioritized-queue.svg` | Prioritized queue |
| `pending-queue.svg` | Pending queue |
| `buffer.svg` | Buffer |
| `time-series-window.svg` | Time-series window |

Optional future assets:

| File | Purpose |
|---|---|
| `clock.svg` | Expiration / waiting / timeout |
| `sensor.svg` | Sensor or external source |
| `actuator.svg` | Physical actuator |
| `world-effect.svg` | External or embodied effect |
| `human.svg` | Human entity |
| `robot.svg` | Robot entity |

---

# Design Guidelines

## Prefer Shared SVG Assets

Use shared SVG assets instead of embedding one-off icons in each page.

This keeps diagrams visually consistent.

## Keep SVGs Theme-Friendly

Where possible, SVGs should use:

~~~text
currentColor
~~~

for strokes and fills.

This helps them work in both light mode and dark mode.

## Avoid Private-Use Font Characters

Do not rely on private-use glyphs such as custom icon-font characters.

They may render incorrectly across browsers, operating systems, or build environments.

Use SVG assets instead.

## Keep Diagrams Semantically Minimal

Only show symbols that matter for understanding the architecture.

Avoid decorative icons that do not carry modeling meaning.

## Label Symbols Clearly

Even when using an icon, add a short label when the meaning may not be obvious.

Examples:

~~~text
HRI_DB
Semantic Cache
Policy
Expert Stack
Pending Queue
~~~

## Use Decision Diamonds Only for Branching

A decision diamond should indicate actual semantic branching, not ordinary sequential processing.

## Keep Policy and Expert Inputs Independent

Do not visually imply that the policy is generated by the expert or that the expert owns the policy.

Both should enter the Semantic Cell independently.

---

# Conclusion

The HML Visual Dictionary provides the shared notation used by HML diagrams.

It turns the framework from a collection of architecture sketches into a consistent modeling language.

By using stable symbols for HIFs, Semantic Cells, policies, experts, memory, queues, and decisions, HML diagrams become:

- easier to read
- easier to compare
- easier to maintain
- easier to teach
- easier to publish
- easier to implement consistently

This visual vocabulary should be used throughout the SOCIAL framework documentation and the HRI Design Patterns.


---

# HRI_DB — Transparent Semantic World Model

Source file: `hml/hri-db.md`

# HRI_DB — Transparent Semantic World Model

## Overview

HRI_DB is the persistent semantic world model of an HML-based HRI architecture.

It represents what the robot currently believes, remembers, assumes, or knows about:

- people
- objects
- locations
- user preferences
- tasks
- social context
- robot state
- autonomy state
- interaction history
- unresolved assumptions
- validated facts
- uncertain facts

HRI_DB is not merely a technical database.

It is a transparent semantic memory layer that allows the robot's internal world model to be inspected, queried, corrected, validated, and used for reasoning.

In the reference implementation, HRI_DB may be implemented as a Python dictionary of dictionaries, persisted as JSON-like structures.

However, the architectural idea is broader than this implementation.

Any transparent structured state representation may serve as HRI_DB if it supports:

- human-readable semantic state
- deterministic code-based queries
- explicit provenance
- confidence or freshness tracking
- controlled persistence
- correction by developers or operators
- bounded LLM reasoning over explicit state

In HML terms:

~~~text
HRI_DB = transparent, editable, structured semantic world model
~~~

---

# Motivation

A socially intelligent robot must operate across time.

It cannot rely only on the current sensor frame or the current user utterance.

It must maintain a semantic memory of the interaction world:

- Who is Bob?
- Where was Bob last seen?
- Which object is bottle_5?
- What is the user's favorite color?
- Which tasks are pending?
- Which assumptions are uncertain?
- Which facts came from vision?
- Which facts came from a user statement?
- Which facts are stale?
- Which facts were confirmed recently?

This memory must be usable by algorithms, inspectable by humans, and available to AI models when deterministic logic is insufficient.

HRI_DB provides this layer.

It is the stateful counterpart to the HIF flow.

HIFs carry semantic information through the system.  
HRI_DB stores selected semantic information across time.

---

# HRI_DB as a Conceptual Component

HRI_DB is a conceptual architectural component.

It should not be defined by one specific storage technology.

It may be implemented using:

- Python dictionaries
- JSON files
- YAML files
- SQLite
- document databases
- graph databases
- in-memory stores
- hybrid memory stores
- typed object stores

The essential requirement is not the database engine.

The essential requirement is that the robot's semantic state remains:

- structured
- inspectable
- correctable
- queryable
- explainable
- versionable where needed
- usable by both deterministic code and AI reasoning

The reference implementation uses a Python dictionary-of-dictionaries because it naturally supports these goals.

---

# Reference Implementation: Dictionary of Dictionaries

A practical reference implementation represents HRI_DB as a Python dictionary of dictionaries.

Conceptually:

~~~python
HRI_DB = {
    "people": {
        "bob": {
            "type": "person",
            "location": "kitchen",
            "last_seen": "2026-05-11T12:34:01Z",
            "source": "vision_tracker",
            "confidence": 0.86
        }
    },
    "objects": {
        "bottle_5": {
            "type": "bottle",
            "color": "blue",
            "location": "table_2",
            "distance_from_robot": 1.4,
            "confidence": 0.91
        }
    },
    "users": {
        "alice": {
            "favorite_color": "blue"
        }
    }
}
~~~

This structure has several advantages:

- it is readable as JSON
- it can be inspected at runtime
- it can be edited by a developer or operator
- it can be queried quickly by deterministic logic
- it can be partially loaded into RAM
- it can be persisted to disk
- it can be versioned
- it can be passed to an LLM as structured context
- it can support confidence decay and forgetting

This implementation is simple, but its simplicity is a strength.

In HRI, transparency and correctability may be more important than retrieval sophistication.

---

# Principle 1: Transparent and Correctable State

The first major advantage of HRI_DB is transparency.

The robot's semantic state should not be hidden inside opaque embeddings, model weights, or uninspectable internal memory.

A developer or authorized operator should be able to ask:

~~~text
What does the robot currently believe?
Why does it believe that?
Where did this fact come from?
Can I correct it?
Is this fact stale?
Is this fact uncertain?
~~~

A JSON-like HRI_DB makes this possible.

Example:

~~~json
{
  "people": {
    "bob": {
      "location": "kitchen",
      "source": "vision_tracker",
      "timestamp": "2026-05-11T12:34:01Z",
      "confidence": 0.86
    }
  }
}
~~~

This state can be inspected, corrected, logged, and explained.

This directly supports the SOCIAL principles:

- **Open Declarative** — the system exposes structured state
- **Clear Cognition** — reasoning can refer to explicit facts
- **Layered Validation** — facts can be checked, updated, or rejected
- **Interpretable Gates** — decisions can cite stored facts and confidence

HRI_DB should therefore be designed as an explainable state layer, not only as an efficient data store.

---

# Principle 2: Transparency Over Retrieval Sophistication

RAG techniques are powerful for retrieving information from large text collections.

However, HRI_DB solves a different problem.

RAG is often optimized for semantic retrieval by an LLM.

HRI_DB is optimized for transparent situated world state.

In HRI, the key question is often not:

~~~text
Can an LLM retrieve a relevant passage?
~~~

but rather:

~~~text
Can a human inspect and correct what the robot currently believes?
~~~

For physical and social robots, this distinction matters.

A robot may act in the real world.  
Its remembered state may influence physical actions, social timing, autonomy level, safety decisions, and user trust.

Therefore, transparency and explainability often receive greater weight than raw retrieval performance.

A useful distinction is:

| Mechanism | Best For |
|---|---|
| HRI_DB | Current structured world state |
| RAG | Large unstructured or semi-structured knowledge corpora |
| Semantic Cache | Reusing previous interpretation or computation |
| LLM Context | Temporary reasoning over selected information |

HRI_DB does not replace RAG.

Rather, it provides a transparent semantic state layer that may be used alongside RAG.

---

# Principle 3: Fast Deterministic Queries

The second major advantage of HRI_DB is that many queries can be answered by ordinary code.

For example:

~~~text
Where is Bob?
Which object is bottle_5?
What color is bottle_5?
Which bottles are currently visible?
Which person was last seen in the kitchen?
~~~

These should not require an LLM.

They can be answered by deterministic handlers over structured state.

Example:

~~~python
def where_is_person(db, person_id):
    person = db["people"].get(person_id)
    if not person:
        return None
    return {
        "location": person.get("location"),
        "confidence": person.get("confidence"),
        "timestamp": person.get("last_seen"),
        "source": person.get("source")
    }
~~~

This gives the architecture several benefits:

- low latency
- low cost
- predictable behavior
- easier debugging
- deterministic tests
- reduced dependence on cloud services
- reduced LLM calls
- clear failure modes

If deterministic code can answer a query, it usually should.

LLM reasoning should be reserved for cases where the query is ambiguous, underspecified, cross-domain, or not anticipated by a handler.

---

# Principle 4: RAM, Persistence, and Operational Flexibility

A dictionary-like HRI_DB can support both runtime speed and persistence.

The system may:

- keep the full DB in RAM
- keep only relevant slices in RAM
- persist selected state to disk
- load persistent facts across sessions
- discard purely temporary state
- snapshot state for debugging
- restore previous state
- version important updates
- serialize state for inspection

Example persistence model:

~~~text
runtime HRI_DB in RAM
        ↓
selected persistent state
        ↓
JSON files on disk
        ↓
loaded again in future sessions
~~~

This is useful because not all robot state has the same lifetime.

Some facts are immediate:

~~~text
current camera detections
~~~

Some facts are session-level:

~~~text
current user, last referenced object, active topic
~~~

Some facts are persistent:

~~~text
user preference, known room map, object ownership
~~~

HRI_DB should support these different lifetimes explicitly.

---

# Principle 5: Confidence, Decay, Forgetting, and Reinforcement

The third major advantage of HRI_DB is that it can support explicit confidence and temporal freshness.

Facts in HRI are often uncertain.

Example:

~~~json
{
  "person": "Bob",
  "location": "kitchen",
  "confidence": 0.86,
  "last_seen": "2026-05-11T12:34:01Z",
  "source": "vision_tracker"
}
~~~

This fact may become less reliable over time.

The robot should not treat:

~~~text
Bob was seen in the kitchen 45 minutes ago.
~~~

the same as:

~~~text
Bob was seen in the kitchen 5 seconds ago.
~~~

HRI_DB can support:

- confidence decay
- expiration
- reinforcement
- source weighting
- conflict resolution
- memory forgetting
- stale fact detection
- freshness-based querying

Example:

~~~text
fresh visual detection → confidence increases
time passes without confirmation → confidence decays
human correction → fact is updated with high confidence
conflicting source appears → consistency evaluator is triggered
~~~

This enables socially safer and more realistic memory.

The robot can distinguish between:

~~~text
known
unknown
likely
stale
conflicting
unverified
human-confirmed
~~~

---

# Principle 6: Human Correction and Governance

Because HRI_DB is structured and readable, it can be corrected.

A developer or authorized operator may inspect a JSON-like state and update it.

Example:

~~~json
{
  "people": {
    "bob": {
      "location": "office",
      "source": "operator_correction",
      "confidence": 1.0
    }
  }
}
~~~

This is important for trust.

If the robot behaves incorrectly because it has the wrong state, a human should be able to identify and correct that state without retraining a model.

This supports:

- operational debugging
- safety review
- human oversight
- transparency
- field deployment
- reproducibility
- trust calibration

Human correction should still be governed.

Corrections should include:

- who made the correction
- when it was made
- why it was made, if available
- what previous value was replaced
- whether rollback is possible

HRI_DB is therefore not only a memory structure.

It is part of the governance layer of the robot.

---

# Principle 7: LLM Escalation Over Transparent State

The most important relationship between HRI_DB and LLMs is not replacement.

The LLM should not become the hidden world model.

Instead, the LLM can reason over a bounded, explicit, transparent subset of HRI_DB.

This enables powerful fallback reasoning without surrendering the robot's state to an opaque model.

The pattern is:

~~~text
deterministic handler first
        ↓
if unsupported or ambiguous
        ↓
select relevant JSON subset from HRI_DB
        ↓
ask LLM to reason over explicit structured state
        ↓
return structured answer with provenance
~~~

Example instruction:

~~~text
Bring the bottle with my favorite color to Bob.
~~~

A deterministic handler may not have a dedicated rule for this exact query.

However, HRI_DB may contain:

~~~json
{
  "users": {
    "alice": {
      "favorite_color": "blue"
    }
  },
  "objects": {
    "bottle_5": {
      "type": "bottle",
      "color": "blue",
      "location": "table_2"
    },
    "bottle_9": {
      "type": "bottle",
      "color": "red",
      "location": "table_3"
    }
  },
  "people": {
    "bob": {
      "location": "kitchen"
    }
  }
}
~~~

An LLM can reason over this explicit state and return:

~~~json
{
  "selected_object_id": "bottle_5",
  "reason": "Alice's favorite color is blue, and bottle_5 is blue.",
  "target_person": "bob",
  "target_location": "kitchen"
}
~~~

The LLM does not invent the world state.

It reasons over visible state provided by HRI_DB.

This is a critical design principle.

---

# Principle 8: Handling Unanticipated Queries

HRI_DB also supports queries that were not explicitly planned in code.

Example:

~~~text
Bring the bottle closest to you to Bob.
~~~

A deterministic handler may support `where_is(person)` but not spatial comparison over all bottles.

If HRI_DB contains object distances:

~~~json
{
  "objects": {
    "bottle_5": {
      "type": "bottle",
      "distance_from_robot": 1.4
    },
    "bottle_9": {
      "type": "bottle",
      "distance_from_robot": 2.8
    }
  }
}
~~~

An LLM can infer that `bottle_5` is the closest bottle.

Another example:

~~~text
Bring the battel to Bob.
~~~

If speech-to-text produced `battel` instead of `bottle`, a deterministic lookup may fail.

An LLM, given relevant object labels and instructed to consider phonetic similarity, may infer that the user likely meant:

~~~text
bottle
~~~

and return the relevant object candidates.

This does not mean every query should go to an LLM.

It means HRI_DB enables controlled escalation:

~~~text
structured state + bounded context + explicit instruction → LLM reasoning fallback
~~~

This is different from using the LLM as unrestricted memory.

---

# HRI_DB Query Strategy

A robust HRI_DB Handler should generally follow a tiered query strategy.

<div align="center">

<svg width="900" height="360" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hri-db-query-title hri-db-query-desc">
  <title id="hri-db-query-title">HRI_DB Tiered Query Strategy</title>
  <desc id="hri-db-query-desc">A Query HIF enters an Escalation Switch. Deterministic code, HRI_DB, semantic cache, and LLM reasoning over JSON state support the answer.</desc>

  <defs>
    <marker id="arrow-hri-db-query" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="170" width="120" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="95" y="198" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Query HIF</text>

  <rect x="360" y="145" width="125" height="86" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="422.5" y="195" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="currentColor">ES</text>

  <rect x="700" y="170" width="135" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="767.5" y="198" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Answer HIF</text>

  <line x1="155" y1="193" x2="352" y2="193" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow-hri-db-query)"/>
  <line x1="485" y1="193" x2="692" y2="193" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow-hri-db-query)"/>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="260" y="25" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="284" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Query Policy</text>
  <line x1="284" y1="100" x2="385" y2="145" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hri-db-query)"/>

  <image href="/social-hri-framework/img/hml/code-expert.svg" x="345" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="372" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">λ code</text>
  <line x1="372" y1="100" x2="405" y2="145" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hri-db-query)"/>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="430" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="457" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">HRI_DB</text>
  <line x1="457" y1="100" x2="440" y2="145" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hri-db-query)"/>

  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="515" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="542" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Cache</text>
  <line x1="542" y1="100" x2="468" y2="145" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hri-db-query)"/>

  <image href="/social-hri-framework/img/hml/llm-bubble.svg" x="600" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="627" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">LLM fallback</text>
  <line x1="627" y1="100" x2="482" y2="145" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hri-db-query)"/>

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="410" y="270" width="62" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="441" y="335" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Relevant JSON subset</text>
  <line x1="442" y1="270" x2="442" y2="232" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-hri-db-query)"/>
</svg>

</div>

A possible order is:

1. deterministic handler
2. HRI_DB direct lookup
3. semantic cache
4. LLM reasoning over relevant JSON subset
5. clarification request if confidence remains low

This strategy minimizes unnecessary LLM calls while preserving reasoning flexibility.

---

# Example: Object Selection by User Preference

Input:

~~~text
Bring the bottle with my favorite color to Bob.
~~~

Possible HRI_DB facts:

~~~json
{
  "users": {
    "alice": {
      "favorite_color": "blue"
    }
  },
  "objects": {
    "bottle_5": {
      "type": "bottle",
      "color": "blue",
      "location": "table_2"
    },
    "bottle_9": {
      "type": "bottle",
      "color": "red",
      "location": "table_3"
    }
  },
  "people": {
    "bob": {
      "location": "kitchen"
    }
  }
}
~~~

Reasoning result:

~~~json
{
  "selected_object_id": "bottle_5",
  "target_person": "bob",
  "target_location": "kitchen",
  "reason": "The user's favorite color is blue, and bottle_5 is the blue bottle."
}
~~~

This example demonstrates that HRI_DB enables cross-field reasoning over explicit state.

---

# Example: Spatial Reasoning

Input:

~~~text
Bring the bottle closest to you to Bob.
~~~

Possible HRI_DB facts:

~~~json
{
  "objects": {
    "bottle_5": {
      "type": "bottle",
      "distance_from_robot": 1.4
    },
    "bottle_9": {
      "type": "bottle",
      "distance_from_robot": 2.8
    }
  }
}
~~~

Reasoning result:

~~~json
{
  "selected_object_id": "bottle_5",
  "reason": "bottle_5 is the closest bottle to the robot."
}
~~~

A deterministic spatial handler may compute this directly.

If the query was not anticipated, an LLM may perform the reasoning over the structured state.

---

# Example: Phonetic or Semantic Repair

Input after STT:

~~~text
Bring the battel to Bob.
~~~

Relevant HRI_DB state:

~~~json
{
  "objects": {
    "bottle_5": {
      "label": "bottle",
      "type": "bottle",
      "location": "table_2"
    }
  }
}
~~~

If instructed to consider phonetic similarity, an LLM may infer:

~~~json
{
  "interpreted_label": "bottle",
  "selected_object_id": "bottle_5",
  "reason": "The word 'battel' is likely a speech-to-text error for 'bottle'."
}
~~~

This kind of repair should be treated as uncertain unless confirmed or supported by context.

The repair result should include confidence and provenance.

---

# HRI_DB Update Lifecycle

A fact should not silently appear in HRI_DB.

It should usually pass through interpretation and validation.

<div align="center">

<svg width="880" height="300" viewBox="0 0 880 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hri-db-update-title hri-db-update-desc">
  <title id="hri-db-update-title">HRI_DB Update Lifecycle</title>
  <desc id="hri-db-update-desc">A Text HIF is transformed into a Fact HIF, checked by a consistency gate, and then written to HRI_DB or routed to clarification.</desc>

  <defs>
    <marker id="arrow-hri-db-update" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="135" width="100" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="85" y="162" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Text HIF</text>

  <rect x="210" y="115" width="110" height="84" rx="12" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="265" y="150" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Fact</text>
  <text x="265" y="174" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Extractor ST</text>

  <rect x="385" y="135" width="100" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="435" y="162" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Fact HIF</text>

  <polygon points="585,157 630,117 675,157 630,197" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="630" y="162" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Consistency</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="755" y="120" width="70" height="58" preserveAspectRatio="xMidYMid meet"/>
  <text x="790" y="195" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HRI_DB</text>

  <rect x="555" y="235" width="150" height="38" rx="9" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="630" y="259" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Clarify / Reject</text>

  <line x1="135" y1="157" x2="202" y2="157" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hri-db-update)"/>
  <line x1="320" y1="157" x2="377" y2="157" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hri-db-update)"/>
  <line x1="485" y1="157" x2="577" y2="157" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hri-db-update)"/>
  <line x1="675" y1="157" x2="747" y2="157" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hri-db-update)"/>
  <text x="715" y="145" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">valid</text>

  <line x1="630" y1="197" x2="630" y2="227" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-hri-db-update)"/>
  <text x="665" y="218" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">conflict</text>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="225" y="20" width="38" height="38" preserveAspectRatio="xMidYMid meet"/>
  <text x="244" y="73" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>
  <text x="292" y="54" text-anchor="middle" font-size="34" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="292" y="73" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Extract</text>
  <line x1="244" y1="82" x2="244" y2="115" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-hri-db-update)"/>
  <line x1="292" y1="82" x2="292" y2="115" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-hri-db-update)"/>
</svg>

</div>

This lifecycle supports Open Declarative and Layered Validation.

---

# Relationship to HML Patterns

HRI_DB appears in several HRI Design Patterns.

| Pattern | Role of HRI_DB |
|---|---|
| HRI_DB Handler | Query and update structured semantic memory |
| Consistency Evaluator & Updater | Validate new facts before DB update |
| Query Social Handler | Answer social/contextual queries |
| Spatial Based Reasoning | Resolve spatial references over object and location state |
| Deep Social Insight Extractor | Add deeper social insights to memory |
| Task Prerequisite Resolver | Resume pending tasks when required facts become available |
| System Integrity & Agency Handler | Store integrity and autonomy state |
| Social Convention Validator | Evaluate actions against remembered social context |

HRI_DB is therefore not an isolated storage component.

It is part of the reasoning, validation, and delayed-execution infrastructure of HML.

---

# Design Guidelines

## Keep State Human-Readable

Prefer structured formats that developers and operators can inspect.

Opaque memory should not be the only representation of robot state.

## Track Source and Confidence

Facts should include provenance and confidence whenever possible.

## Separate Persistent and Session State

Do not turn every temporary dialogue assumption into persistent memory.

## Prefer Deterministic Queries First

If a query can be answered by direct lookup or code, use that before escalating to an LLM.

## Escalate to LLMs Over Bounded JSON

When LLM reasoning is needed, provide only the relevant subset of HRI_DB.

This keeps reasoning bounded, inspectable, and easier to validate.

## Do Not Treat LLM Output as Truth

LLM output should be treated as a candidate result.

It may require validation, confidence scoring, or human clarification.

## Support Forgetting and Decay

Facts should be allowed to become stale unless reinforced.

## Preserve Update History

Important updates should be logged, especially human corrections and conflict resolutions.

## Validate Conflicts

Conflicting facts should route through a consistency mechanism rather than silently overwriting state.

## Support Rollback

If an update is wrong, the system should support correction or rollback where possible.

---

# Conclusion

HRI_DB is the transparent semantic world model of an HML architecture.

It stores what the robot believes about the world in a structured, inspectable, and correctable form.

Its value is not only storage.

Its value is that it enables:

- deterministic querying
- human correction
- explainability
- confidence tracking
- forgetting and reinforcement
- persistence across sessions
- LLM reasoning over explicit state
- validation before action
- delayed task resumption

The key design principle is:

~~~text
The LLM may reason over HRI_DB,
but the LLM should not replace HRI_DB as the robot's transparent world model.
~~~

By separating structured state from generative reasoning, HRI_DB supports socially intelligent robots that are not only capable, but also inspectable, correctable, and trustworthy.


---

# Semantic Cells

Source file: `hml/semantic-cells.md`

# Semantic Cells

## Overview

Semantic Cells are the architectural primitives of HML.

A Semantic Cell is an architectural unit that receives HIFs, applies one or more semantic operators or policies, and produces transformed HIFs, synchronized HIFs, decisions, delayed tasks, or embodied effects.

Semantic Cells connect the two previous HML concepts:

- **HIF** — the semantic carrier that flows through the system
- **λ** — the semantic operator, expert, or policy applied to that flow

In short:

```text
Semantic Cell = architectural role
Semantic Operator = expert or policy inside that role
HIF = semantic information flowing through the role
```

The purpose of Semantic Cells is to give HML a stable visual and conceptual vocabulary for describing HRI architectures.

They allow complex robotic systems to be modeled in terms of semantic responsibilities rather than implementation-specific modules.

---

# Why Semantic Cells Are Needed

Human-Robot Interaction systems contain many heterogeneous software and AI components:

- perception modules
- language interpreters
- memory queries
- social policies
- safety checks
- escalation mechanisms
- synchronization logic
- task queues
- actuation bridges

At the implementation level, these may be ROS nodes, Python classes, services, containers, model APIs, or hardware drivers.

At the architectural level, however, most of them perform a small number of recurring semantic roles:

- create a HIF from a source
- transform a HIF
- synchronize several HIFs
- choose between experts
- validate or gate a semantic transition
- execute a HIF as an external effect

Semantic Cells define these recurring roles explicitly.

This makes HRI architectures easier to document, compare, test, and reuse.

---

# Semantic Cell Visual Grammar

HML diagrams follow a simple visual grammar.

The main semantic flow moves from left to right:

```text
Input HIF → Semantic Cell → Output HIF
```

The cell may receive two independent inputs from above:

- a **policy artifact**, such as thresholds, constraints, rules, or social laws
- a **λ operator**, representing the expert, model, heuristic, or semantic implementation

The policy and the expert are intentionally shown as independent inputs.

The policy does not flow through the expert, and the expert does not define the policy.

Instead, the Semantic Cell is the binding point where the current policy and the current expert are applied to the HIF stream.

---

# Generic Semantic Cell

The following diagram defines the generic visual form of a Semantic Cell.

The policy artifact is shown as a checklist-like document.  
The expert is shown as a clean λ symbol.  
Both enter the cell from above, while HIFs flow from left to right.

<div align="center">

<svg width="760" height="300" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="generic-semantic-cell-title generic-semantic-cell-desc">
  <title id="generic-semantic-cell-title">Generic Semantic Cell</title>
  <desc id="generic-semantic-cell-desc">Input HIF flows into a Semantic Cell and exits as an output HIF. A policy icon and a lambda expert enter independently from above.</desc>

  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="125" width="135" height="54" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="107.5" y="157" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Input HIF</text>

  <rect x="305" y="105" width="170" height="94" rx="14" ry="14" fill="none" stroke="currentColor" stroke-width="2.1"/>
  <text x="390" y="145" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="390" y="171" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="585" y="125" width="135" height="54" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="652.5" y="157" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Output HIF</text>

  <line x1="175" y1="152" x2="297" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="475" y1="152" x2="577" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/>

<image href="/social-hri-framework/img/hml/policy-check.svg" x="326" y="0" width="58" height="58" preserveAspectRatio="xMidYMid meet"/>
<text x="355" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

<text x="425" y="44" text-anchor="middle" font-size="52" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
<text x="425" y="74" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

<line x1="355" y1="84" x2="355" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow)"/>
<line x1="425" y1="84" x2="425" y2="105" stroke="currentColor" stroke-width="1.6" marker-end="url(#arrow)"/>
</svg>

</div>

This notation emphasizes four ideas:

- HIFs flow horizontally through the system.
- Policies and experts enter cells independently.
- The cell applies the expert under the relevant policy.
- The surrounding HIF pipeline remains stable even if the internal expert or policy changes.

---

# Cell, Operator, Policy, and Implementation

A Semantic Cell should not be confused with the expert inside it.

| Concept | Meaning |
|---|---|
| HIF | The semantic information flowing through the system |
| λ Operator | The expert, model, heuristic, or semantic computation |
| Policy | Rules, constraints, thresholds, or social laws governing execution |
| Semantic Cell | The architectural role that applies the operator and policy to HIFs |
| Implementation | The concrete software component, node, service, or class used at runtime |

This distinction is essential.

The same Semantic Cell may use different experts or policies in different deployments without changing its role in the architecture.

---

# Cells as Stable Replacement Boundaries

A Semantic Cell defines a stable semantic role.

Its internal expert, policy, thresholds, fallback behavior, and implementation binding may change without forcing upstream or downstream cells to change, as long as the cell contract remains stable.

This is especially important in a fast-moving AI landscape.

AI models improve continuously:

- STT models become more multilingual
- VLMs improve spatial grounding
- LLMs become faster or cheaper
- perception models improve robustness
- local models become competitive with cloud models
- domain-specific models outperform generic ones
- safety-approved versions replace experimental versions

A Semantic Cell allows the architecture to absorb these changes.

For example:

```text
HIF → ST[λspeech_to_text] → Text HIF
```

can remain stable even if the internal expert changes from:

```text
English STT → multilingual STT → Hebrew-specialized STT → future audio-language model
```

The rest of the HIF pipeline continues to receive a `Text HIF`.

---

# Dynamic Expert Replacement

Semantic Cells can also support dynamic expert replacement.

For example, a user may tell the robot:

```text
switch to Hebrew
```

If the user is authorized and the instruction passes validation, the system may update the active expert binding:

```text
λspeech_to_text_en → λspeech_to_text_he
```

The STT Semantic Cell continues to perform the same semantic role:

```text
AudioSnippet HIF → Text HIF
```

Only the internal expert changes.

This enables language switching, model upgrades, domain adaptation, fallback behavior, and rollback without changing the surrounding architecture.

Runtime expert replacement should always be governed by:

- authorization
- validation
- safety constraints
- compatibility checks
- versioning
- rollback mechanisms

HML supports this capability architecturally, but each implementation must decide when dynamic replacement is allowed.

---

# Externalized Policy

Policies should often be externalized from code.

When policies are stored outside the implementation, they become:

- readable
- auditable
- versionable
- editable
- deployable across robots
- easier to review by operators
- easier to test and roll back
- easier to adapt to different environments

Policies may define:

- confidence thresholds
- synchronization windows
- escalation conditions
- social rules
- safety constraints
- resource limits
- autonomy boundaries
- cultural profiles
- language preferences
- fallback behavior

For example:

```json
{
  "cell": "SpeechToTextST",
  "expert": "HebrewSTTExpert",
  "policy": {
    "language": "he",
    "min_confidence": 0.78,
    "fallback": "MultilingualSTTExpert"
  }
}
```

Externalized policy supports governable autonomy.

In advanced deployments, authorized users may update policies through controlled HRI mechanisms.

For example:

```text
From now on, do not interrupt meetings unless it is urgent.
```

Such an instruction may update a Social Opportunity policy only after:

- user authentication
- authorization
- semantic validation
- conflict checking
- logging
- rollback support

This makes policy adaptation transparent rather than hidden in code.

---

# Implementation Decoupling Example

In one practical architecture, each expert was implemented through a ROS-independent Python interface.

The ROS node did not contain the expert logic.

Instead, it was responsible for:

- receiving HIF-like messages
- loading the configured expert
- invoking a standard Python interface
- applying policy parameters
- publishing the resulting HIF

The actual expert implementation and policy were defined externally in a JSON configuration file.

The JSON configuration specified:

- which expert implementation to load
- where the implementation is located
- which thresholds to use
- which fallback expert is allowed
- which policy applies to the cell
- which runtime parameters should be passed to the expert

Conceptually:

```text
HIF Stream
    ↓
Semantic Cell Contract
    ↓
External JSON Binding and Policy
    ↓
ROS-independent Python Expert Interface
    ↓
Concrete Expert Implementation
    ↓
Updated HIF Stream
```

This separates HML-level architecture from deployment-level execution.

It also allows expert replacement, testing, simulation, and rollback without rewriting the system pipeline.

---

# Core Semantic Cells

HML defines five core Semantic Cells:

| Symbol | Name | Core Role |
|---|---|---|
| HC | HIF Creator | Create a HIF from a source |
| ST | Semantic Transformer | Transform or enrich a HIF |
| SG | Sync Gate | Synchronize multiple HIFs |
| ES | Escalation Switch | Select between experts or reasoning paths |
| HE | HIF Executor | Convert a HIF into an external or embodied effect |

These are not implementation classes.

They are semantic roles used to model HRI architectures.

---

# HC — HIF Creator

The HIF Creator creates a HIF from an external or internal source.

Signature:

```text
HC : Source → HIF
```
<div align="center">

<svg width="440" height="150" viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HIF Creator cell">
  <defs>
    <marker id="arrow-hc" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="178" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="194" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="230" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="230" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Creator</text>

  <line x1="194" y1="55" x2="194" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hc)"/>
  <line x1="230" y1="55" x2="230" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-hc)"/>

  <rect x="20" y="85" width="110" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="75" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Source / Sensor</text>

  <rect x="180" y="68" width="80" height="68" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="220" y="108" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">HC</text>

  <rect x="330" y="85" width="90" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="375" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <line x1="130" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hc)"/>
  <line x1="260" y1="104" x2="322" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-hc)"/>
</svg>

</div>

Examples:

```text
camera → HC → VideoFrame HIF
microphone → HC → AudioSnippet HIF
battery monitor → HC → RobotState HIF
database event → HC → Fact HIF
timer → HC → SystemEvent HIF
```

Typical sources include:

- camera
- microphone
- LiDAR
- keyboard input
- resource monitor
- database event
- clock or timer
- internal system event
- external API
- human input

Important terminology note:

```text
HC = HIF Creator
```

In HML documentation, **Human Context** should be written explicitly and should not be abbreviated as HC, to avoid confusion.

---

# ST — Semantic Transformer

A Semantic Transformer receives a HIF and returns a transformed or enriched HIF.

Signature:

```text
ST : HIF → HIF | HIF+
```
<div align="center">

<svg width="440" height="150" viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Semantic Transformer cell">
  <defs>
    <marker id="arrow-st" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <image href="/social-hri-framework/img/hml/policy-check.svg" x="178" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="194" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="230" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="230" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="194" y1="55" x2="194" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-st)"/>
  <line x1="230" y1="55" x2="230" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-st)"/>

  <rect x="20" y="85" width="90" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="65" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="180" y="68" width="80" height="68" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="220" y="108" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">ST</text>

  <rect x="330" y="85" width="90" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="375" y="109" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF / HIF+</text>

  <line x1="110" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-st)"/>
  <line x1="260" y1="104" x2="322" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-st)"/>
</svg>

</div>

A Semantic Transformer usually applies one semantic operator:

```text
ST[λexpert]
```

Examples:

```text
VideoFrame HIF → Person Detector ST → HIF + persons[]
Text HIF → Intent Parser ST → Instruction HIF
Instruction HIF → Missing Info Detector ST → HIF + missing_information[]
RobotState HIF → Integrity Analyzer ST → HIF + integrity_score
```

A Semantic Transformer may:

- add properties
- modify properties
- change the HIF type
- normalize content
- add confidence
- add processing history
- detect missing information
- prepare the HIF for later validation

An ST usually does not create embodied effects directly.

It transforms semantic representation.

---

# SG — Sync Gate

A Sync Gate synchronizes multiple HIFs into a single richer HIF.

Signature:

```text
SG : HIFⁿ → HIF
```

or:

```text
SG[policy, λsync] : {HIF₁, HIF₂, ..., HIFₙ} → synchronized HIF
```

<div align="center">

<svg width="500" height="185" viewBox="0 0 500 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sync Gate cell">
  <defs>
    <marker id="arrow-sg" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and lambda inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="210" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="226" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="268" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="268" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Sync</text>

  <line x1="226" y1="55" x2="226" y2="74" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-sg)"/>
  <line x1="268" y1="55" x2="268" y2="74" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-sg)"/>

  <!-- Staggered input HIFs -->
  <rect x="25" y="65" width="82" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="66" y="85" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="45" y="103" width="82" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="86" y="123" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <rect x="65" y="141" width="82" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="106" y="161" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- Sync Gate -->
  <rect x="205" y="74" width="90" height="78" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="250" y="119" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">SG</text>

  <!-- Output -->
  <rect x="370" y="94" width="105" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="422.5" y="118" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Synced HIF</text>

  <!-- Input arrows -->
  <line x1="107" y1="80" x2="197" y2="96" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-sg)"/>
  <line x1="127" y1="118" x2="197" y2="113" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-sg)"/>
  <line x1="147" y1="156" x2="197" y2="132" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-sg)"/>

  <!-- Output arrow -->
  <line x1="295" y1="113" x2="362" y2="113" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-sg)"/>
</svg>

</div>
The staggered HIF inputs indicate that an SG receives multiple HIFs that may arrive from different streams, experts, or temporal windows. The SG does not merely concatenate them. It applies a synchronization policy that determines whether they belong to the same interaction moment and whether they should be merged, delayed, rejected, or kept separate.
The output is shown as `Synced HIF` because the SG produces a unified semantic frame whose properties are temporally and contextually aligned.

Examples:

```text
skeleton HIF + gaze HIF + expression HIF → HumanState HIF
speech HIF + pointing gesture HIF → Multimodal Instruction HIF
Human Context HIF + Scene Context HIF + Robot Context HIF → Unified Context HIF
battery HIF + CPU HIF + sensor health HIF → Self-State HIF
```

A Sync Gate is not merely a technical merge.

It applies a synchronization policy.

It may ask:

- Do these HIFs refer to the same interaction moment?
- Are they close enough in time?
- Do they belong to the same person?
- Are they semantically compatible?
- Should the system wait for another HIF?
- Should the system reject the synchronization?
- Should the system split the interaction into separate frames?

Sync Gates are essential for preventing temporal hallucinations and semantic ghosting.

---

# ES — Escalation Switch

An Escalation Switch selects between multiple semantic operators or reasoning paths.

Signature:

```text
ES : HIF × [λ₁, λ₂, ..., λₙ] → HIF | Decision
```
<div align="center">

<svg width="500" height="165" viewBox="0 0 500 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Escalation Switch cell">
  <defs>
    <marker id="arrow-es" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and expert stack inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="208" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="224" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="276" y="28" text-anchor="middle" font-size="25" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ₁ λ₂ λₙ</text>
  <text x="276" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Expert Stack</text>

  <line x1="224" y1="55" x2="224" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-es)"/>
  <line x1="276" y1="55" x2="276" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-es)"/>

  <!-- Input HIF -->
  <rect x="25" y="90" width="95" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="72.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- Escalation Switch -->
  <rect x="205" y="72" width="95" height="74" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="252.5" y="115" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">ES</text>

  <!-- Output -->
  <rect x="365" y="90" width="115" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="422.5" y="114" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF / Decision</text>

  <!-- Flow arrows -->
  <line x1="120" y1="109" x2="197" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-es)"/>
  <line x1="300" y1="109" x2="357" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-es)"/>
</svg>

</div>

The expert stack indicates that an ES may choose between multiple operators, try them in sequence, or escalate from cheaper and more deterministic experts to more expensive or generative experts.

The escalation policy determines when to stop, when to retry, when to fall back, and when to escalate.
An ES does not imply that all experts are executed. It represents controlled expert selection under an explicit escalation policy.

Examples:

```text
Text HIF → ES[rule parser, cache, LLM] → Instruction HIF
ActionRequest HIF → ES[social heuristic, LLM evaluator] → pass / modify / block
Object Query HIF → ES[DB lookup, phonetic match, spatial LLM] → Object ID
```

The ES may choose an expert based on:

- confidence
- latency
- cost
- resource availability
- safety level
- task priority
- social relevance
- previous failures
- user preference
- autonomy level

The ES operationalizes Incremental Intelligence.
An Escalation Switch selects between multiple semantic operators or reasoning paths under an explicit escalation policy.
The ES may execute one expert, several experts in sequence, or a fallback chain. The policy defines the escalation conditions.
It allows the system to start with simple, fast, cheap, and explainable methods, and escalate only when needed.

---

# HE — HIF Executor

A HIF Executor converts a HIF into an external or embodied effect.

Signature:

```text
HE : HIF → Effect
```
<div align="center">

<svg width="500" height="165" viewBox="0 0 500 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HIF Executor cell">
  <defs>
    <marker id="arrow-he" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and execution operator inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="208" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="224" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="276" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="276" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Executor</text>

  <line x1="224" y1="55" x2="224" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-he)"/>
  <line x1="276" y1="55" x2="276" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-he)"/>

  <!-- Input HIF -->
  <rect x="25" y="90" width="95" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="72.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- HIF Executor -->
  <rect x="205" y="72" width="95" height="74" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="252.5" y="115" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">HE</text>

  <!-- Output Effect -->
  <rect x="365" y="90" width="115" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="422.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Effect</text>

  <!-- Flow arrows -->
  <line x1="120" y1="109" x2="197" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-he)"/>
  <line x1="300" y1="109" x2="357" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-he)"/>
</svg>

</div>

The output is shown as `Effect` rather than `HIF` because an HE crosses the boundary between semantic reasoning and execution. The effect may be physical, communicative, computational, or external.

Examples include spoken speech, robot motion, a navigation command, a UI notification, a database-side action, a user-code execution request, or an emergency stop.

The policy input is especially important for HE cells because execution should be constrained by safety rules, permissions, actuator limits, autonomy state, and social context.

Unlike an ST, which transforms semantic representation, an HE commits a validated HIF into an external or embodied effect.
An HE should normally appear late in the pipeline, after relevant validation layers have already approved the HIF for execution.

Examples:

```text
SpeechRequest HIF → Speech HE → spoken sentence
NavigationGoal HIF → Motion HE → robot movement
EmergencyStop HIF → Safety HE → stop command
UIMessage HIF → Display HE → screen notification
CodeExecution HIF → User-code HE → executed function
```

HE is a boundary between semantic reasoning and real-world effect.

Before HE, the system is still reasoning, validating, and synthesizing behavior.

After HE, the system changes the world, the robot, the user interface, or another external system.

For this reason, HE should generally be reached only after appropriate validation layers.

---

# Gate as a Role

A gate is not necessarily a separate primitive cell.

In HML, a gate is a semantic decision role that may be played by different cells or patterns.

A gate may produce outcomes such as:

```text
pass
modify
delay
block
escalate
clarify
reduce_autonomy
emergency_stop
```

Examples:

- An ST may mark a HIF as invalid.
- An SG may wait until synchronized evidence arrives.
- An ES may escalate to a stronger expert.
- A TPR may move a task into a pending queue.
- An SCV may block a socially inappropriate action.
- A SIAH component may issue an emergency stop.

This keeps the modeling language flexible.

Rather than forcing every decision point into a separate symbol, HML allows gate behavior to emerge from the semantic role being performed.

<div align="center">

<svg width="560" height="210" viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Policy Gate decision notation">
  <defs>
    <marker id="arrow-gate" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Policy and lambda inputs -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="218" y="0" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
  <text x="234" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="276" y="31" text-anchor="middle" font-size="32" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="276" y="47" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Gate</text>

  <line x1="234" y1="55" x2="234" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>
  <line x1="276" y1="55" x2="276" y2="72" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>

  <!-- Input HIF -->
  <rect x="25" y="90" width="95" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="72.5" y="114" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <!-- ST as gate -->
  <rect x="215" y="72" width="85" height="74" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="257.5" y="108" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="currentColor">ST</text>
  <text x="257.5" y="128" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">as Gate</text>

  <!-- Decision diamond -->
  <polygon points="390,109 425,78 460,109 425,140" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="425" y="114" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Decision</text>

  <!-- Outputs -->
  <rect x="475" y="55" width="65" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="507.5" y="75" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">pass</text>

  <rect x="475" y="132" width="65" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="507.5" y="152" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">block</text>

  <!-- Flow arrows -->
  <line x1="120" y1="109" x2="207" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-gate)"/>
  <line x1="300" y1="109" x2="382" y2="109" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-gate)"/>

  <line x1="460" y1="101" x2="468" y2="70" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>
  <line x1="460" y1="117" x2="468" y2="147" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-gate)"/>
</svg>

</div>
The diamond represents the branching decision produced by the gate role. It does not imply that the diamond is a separate primitive cell. The decision may be produced by an ST, SG, ES, or a higher-level pattern.

## Gate Output Notation

When a Semantic Cell acts as a gate, its output may be represented as a decision diamond.

The diamond is not a separate reasoning module by itself. It is a visual notation for the branching decision produced by the cell or pattern.

For example, an ST may evaluate a HIF against a policy and produce a gate decision:

```text
HIF → Policy Gate ST → Decision
```

The decision may branch into outcomes such as:

```text
pass
modify
delay
block
escalate
clarify
reduce_autonomy
emergency_stop
```

This notation is useful for documenting patterns such as HRI_DB Handler, Consistency Evaluator, Query Social Handler, Social Convention Validator, and System Integrity & Agency Handler, where the architectural logic depends on explicit semantic branching.

---

# Semantic Cell vs Implementation Component

A Semantic Cell is not necessarily:

- a ROS node
- a Python class
- a microservice
- a process
- a container
- a hardware component
- a model server
- a single function

A Semantic Cell describes semantic responsibility.

An implementation component describes deployment topology.

Possible mappings include:

| HML Cell | Possible Implementation |
|---|---|
| One ST | One ROS node |
| Several STs | One ROS node with several experts |
| One ES | A Python orchestrator |
| One SG | A stream synchronization service |
| One HE | A robot actuator bridge |
| One cell | A cloud API wrapper |
| One cell | A local plugin loaded from configuration |

The same HML architecture may be implemented in different runtime systems.

The diagram should remain stable if the semantic responsibilities remain stable.

---

# Cell Contract

Each Semantic Cell should ideally define a cell contract.

A cell contract may include:

| Field | Meaning |
|---|---|
| `cell_name` | Name of the cell |
| `cell_type` | HC, ST, SG, ES, or HE |
| `semantic_role` | What the cell is responsible for |
| `input_hifs` | Expected input HIF types |
| `output_hifs` | Expected output HIF types |
| `operators` | Internal λ operators |
| `policies` | Applicable policy artifacts |
| `side_effects` | Reads, writes, actions, or external calls |
| `timing_behavior` | Sync, async, blocking, streaming, delayed |
| `failure_behavior` | What happens when the cell fails |
| `history_update` | What is written to processing history |

Example:

```text
Cell:
  PersonDetectorST

Type:
  ST

Input:
  VideoFrame HIF

Operator:
  λperson_detector

Policy:
  confidence_threshold >= 0.75

Output:
  VideoFrame HIF + properties.persons[]

Failure:
  no persons detected / low confidence

History:
  add person_detector result to processing_history
```

Cell contracts make diagrams testable and implementable.

---

# Pattern Composition Preview

HRI Design Patterns are compositions of Semantic Cells.

Examples:

| Pattern | HML Composition |
|---|---|
| Synchronous Multi-Extractor | HC + parallel STs + SG |
| Elastic Attention Governor | Priority SG + resource-aware ES |
| Tiered Semantic Cache | ES over rule, cache, and LLM operators |
| Adaptive Signature Learner | Time-series window + SG + learning/classification ST |
| Context Novelty Extractor | Context unification SG + novelty extraction gate |
| HRI_DB Handler | ES-mediated query/update over declarative memory |
| Task Prerequisite Resolver | Queue + missing-info ST + Query Social Handler + pending queue |
| Social Convention Validator | Consistency evaluation + social acceptance ES |
| System Integrity & Agency Handler | resource HC + self-state SG + integrity ES |
| Social Action Stylist | parallel styling STs + SG |
| Late-Binding Behavioral Choreographer | Social Opportunity TPR + Social Action Stylist |

This shows that the patterns are not arbitrary diagrams.

They are reusable compositions of a small semantic vocabulary.

---
# Design Guidelines

When using Semantic Cells, the goal is to keep the HML diagram semantically clear, implementation-independent, and easy to evolve.

## Keep the Cell Role Stable

A Semantic Cell should represent a stable semantic responsibility.

For example, a `SpeechToTextST` should continue to mean:

~~~text
AudioSnippet HIF → Text HIF
~~~

even if the internal STT model changes.

The cell contract should remain stable while the implementation evolves.

---

## Keep Experts Replaceable

The expert inside a cell should be replaceable as long as it satisfies the cell contract.

For example:

~~~text
λspeech_to_text_en → λspeech_to_text_he
~~~

should not require changes to the upstream microphone HC or the downstream intent parser ST, as long as the cell still outputs a valid `Text HIF`.

This supports model upgrades, rollback, language switching, simulation, and deployment-specific expert selection.

---

## Keep Policies External When Possible

Policies should preferably be externalized from code.

This makes them:

- readable
- auditable
- versionable
- editable
- testable
- easier to roll back

Examples include confidence thresholds, synchronization windows, safety limits, social rules, escalation conditions, and autonomy boundaries.

External policy also supports future HRI mechanisms where authorized users may update policy through natural interaction, such as voice commands.

---

## Do Not Confuse Cell and Implementation

A Semantic Cell is a modeling abstraction, not necessarily a runtime component.

One cell may be implemented as:

- a ROS node
- a Python class
- a plugin
- a service
- a local model wrapper
- a cloud API call
- part of a larger orchestration process

Likewise, one runtime component may implement several Semantic Cells.

The HML diagram should describe semantic responsibility, not deployment topology.

---

## Keep Policy and Expert Inputs Independent

When drawing a Semantic Cell, policy and expert inputs should enter the cell independently.

The policy does not flow through the expert, and the expert does not define the policy.

Instead, the cell binds them together:

~~~text
Policy + λ Expert + Input HIF → Semantic Cell → Output
~~~

This makes it possible to replace policies and experts independently.

---

## Record Important Processing History

Cells that perform meaningful semantic operations should update the HIF processing history.

This is especially important when a cell:

- changes the HIF type
- adds high-level semantic properties
- makes a gate decision
- escalates to another expert
- invokes an LLM
- modifies an action request
- blocks or delays execution

Processing history supports explainability, debugging, auditing, and safety review.

---

## Make Gate Outcomes Explicit

If a cell acts as a gate, its outcome should be visible.

Typical outcomes include:

~~~text
pass
modify
delay
block
escalate
clarify
reduce_autonomy
emergency_stop
~~~

When the gate creates a branch in the architecture, the output may be shown using a decision diamond.

The diamond represents the branching decision, not a separate primitive cell.

---

## Avoid Direct HIF-to-Effect Shortcuts

Embodied or external effects should normally pass through validation before reaching a HIF Executor.

For example, an `ActionRequest HIF` should not directly become robot motion unless relevant safety, social, autonomy, and resource constraints have been checked.

This is especially important for physical robots operating around humans.

---

## Preserve Left-to-Right HIF Flow

HML diagrams should keep the main HIF flow visually clear.

The recommended convention is:

~~~text
Input HIF → Semantic Cell → Output HIF / Decision / Effect
~~~

Policies and experts enter from above.

Memory, cache, database, or external state may be shown as side inputs when needed.

This keeps diagrams readable and consistent across design patterns.

---

## Prefer Small Composable Cells

A Semantic Cell should perform a clear semantic role.

Avoid creating cells that combine too many unrelated responsibilities.

For example, instead of one large component that performs perception, intent parsing, social validation, and execution, prefer a composition of smaller cells:

~~~text
HC → ST → SG → ES → Gate → HE
~~~

This improves modularity, replaceability, testing, and explanation.

---

## Use Cell Contracts for Reusable Patterns

When a cell participates in a reusable HRI Design Pattern, define its contract explicitly.

A useful cell contract includes:

- cell type
- input HIF type
- output HIF type
- internal operator
- policy input
- expected properties
- confidence behavior
- failure behavior
- side effects
- processing history updates

This makes the pattern easier to implement, compare, and reuse across robots.

---

# Conclusion

Semantic Cells are the architectural primitives of HML.

They define how HIFs are:

- created
- transformed
- synchronized
- routed
- escalated
- validated
- delayed
- executed

They also provide stable replacement boundaries between high-level HRI architecture and low-level implementation.

By separating cell role, semantic operator, policy, and implementation binding, HML enables architectures that are:

- modular
- explainable
- configurable
- testable
- replaceable
- model-agnostic
- middleware-independent
- suitable for rapidly evolving AI systems

Semantic Cells therefore form the visual and structural grammar from which HRI Design Patterns are composed.


---

# Semantic Operators

Source file: `hml/semantic-operators.md`

# Semantic Operators

## Overview

Semantic Operators are the explicit units of semantic expertise in HML.

They are represented by the symbol:

~~~text
λ
~~~

A semantic operator defines a reusable semantic capability: how interaction information is interpreted, enriched, classified, transformed, queried, scored, validated, or converted into action-relevant meaning.

If the HIF is what flows through the system, then the semantic operator is the expert capability that can act on that flow.

A `λ` may represent:

- deterministic code
- a heuristic
- a classifier
- a neural network
- an LLM
- a multimodal model
- a cache lookup
- a database query
- a domain-specific expert
- a policy-evaluation function
- a safety evaluator
- a social evaluator
- an escalation evaluator

The key idea is that HML models semantic expertise independently of its concrete implementation.

Policies, social laws, safety rules, and escalation rules may be evaluated by operators when they require computation. However, in HML they are usually governed by Semantic Cells as explicit policy artifacts.

The operator provides capability.  
The cell decides how and when that capability is invoked.

---

# Motivation

Human-Robot Interaction systems combine many different kinds of intelligence.

A robot may need to:

- detect people in an image
- classify facial expressions
- estimate gaze direction
- transcribe speech
- parse natural language intent
- resolve a spatial reference
- query a memory store
- check consistency against known facts
- evaluate social acceptability
- enforce a safety rule
- decide whether to escalate reasoning to an LLM
- select an autonomy level
- style an utterance
- plan a socially acceptable path

These operations are implemented in very different ways.

Some are simple rules.  
Some are classical algorithms.  
Some are machine-learning models.  
Some are cloud-based services.  
Some are local Python modules.  
Some are ROS-integrated components.  
Some are declarative policies.  
Some are LLM-based semantic reasoners.

HML uses the symbol `λ` as a unifying abstraction for all of them.

This allows the architecture to describe what semantic expertise is applied, without committing the diagram to a particular implementation technology.

---

# Core Definition

A semantic operator is an encapsulated unit of semantic computation.

In general form:

~~~text
λ : Input × Parameters → Output
~~~

In HIF-oriented form:

~~~text
λ : HIFⁿ × Parameters? → HIFᵐ | Decision | Score | QueryResult | ActionRequest
~~~

The key modeling idea is that `λ` behaves like a replaceable expert with an explicit input-output contract.

A semantic operator may consume:

- one HIF
- multiple HIFs
- a semantic object
- explicit parameters
- a bounded query object
- a selected context slice, if passed explicitly by the invoking cell

And it may produce:

- an enriched HIF
- a modified HIF
- a new HIF
- a decision candidate
- a confidence score
- a query result
- a validation result
- an action request
- a clarification candidate

A semantic operator should not implicitly own the system policy or global context.

Instead, the invoking Semantic Cell is responsible for:

- selecting the operator
- applying policy
- selecting relevant context
- passing explicit parameters
- handling failures
- recording provenance
- routing the result

In short:

~~~text
λ = semantic capability
Cell = policy-aware invocation boundary
~~~

This distinction is essential.

The expert knows how to do something.  
The cell knows when, why, under which policy, and in which architectural context to invoke it.

---

# Modeling Contract vs Implementation

A semantic operator should expose a clear modeling contract.

From the HML perspective, a `λ` has:

- a purpose
- an expected input
- an expected output
- a semantic role
- known failure modes
- confidence behavior
- optional resource assumptions
- explicit parameters, if required
- explicit side effects, if unavoidable

However, its implementation may vary widely.

For example, the same semantic operator may be implemented as:

- a Python class
- a Python function
- a ROS node client
- a REST service
- a local ML model
- an LLM API call
- a rule engine
- a database-backed query
- a cached lookup
- a hybrid pipeline

This distinction is essential.

HML does not require the diagram to expose low-level middleware details. Instead, it requires each semantic operator to expose its semantic contract.

---

# Decoupling from Lower-Level Implementations

One of the main purposes of semantic operators is implementation decoupling.

In practical robotic systems, an HRI architecture often runs on top of lower-level execution frameworks such as ROS, ROS2, Python services, hardware drivers, cloud APIs, or edge AI runtimes.

Without abstraction, high-level social reasoning becomes tightly coupled to specific nodes, topics, services, class names, or deployment choices.

Semantic operators prevent this coupling.

A `λ` can be modeled as a named expert with a stable interface, while its actual implementation is resolved externally.

For example:

~~~text
λperson_detector
~~~

may be implemented by:

- a local Python module
- a ROS perception node
- a GPU-accelerated detector
- a cloud vision API
- a mock simulator expert
- a newer detector version loaded by configuration

The HML diagram does not need to change as long as the operator contract remains stable.

The important point is that the expert remains independent of the surrounding orchestration.

For example, `λperson_detector` should not need to know:

- why this frame was selected
- which ROS node invoked it
- which social task is active
- which downstream pattern will consume the result
- which autonomy level is currently active
- whether the result will be used for tracking, safety, task resolution, or social reasoning

Those responsibilities belong to the invoking cell or higher-level pattern.

---

# Example: Python Interface Decoupled from ROS

In an implementation architecture, each expert may implement a predefined Python interface.

For example:

~~~text
SemanticExpert.run(input_hif, parameters) -> output
~~~

or:

~~~text
SemanticExpert.run(input_hif, context_slice, parameters) -> output
~~~

A ROS node may be responsible only for:

- loading the expert specified in configuration
- receiving HIF-like messages
- selecting or preparing the explicit inputs
- calling the expert interface
- publishing the resulting HIF or result

The semantic expert itself does not need to know which ROS node invoked it.

Likewise, the ROS node does not need to know the internal logic of the expert.

This creates a clean separation:

~~~text
HML Diagram
    ↓
Semantic Operator Contract
    ↓
Python Expert Interface
    ↓
Runtime Binding / Configuration
    ↓
ROS Node / Service / Execution Layer
~~~

The result is a modular architecture where semantic expertise can be swapped, tested, simulated, or upgraded without changing the high-level HRI design.

---

# External Configuration and Late Binding

Semantic operators may also be bound through external configuration.

For example, a configuration file may define:

~~~yaml
experts:
  person_detector:
    implementation: experts.vision.YoloPersonDetector
    device: cuda
    parameters:
      confidence_threshold: 0.75

  intent_parser:
    implementation: experts.language.RuleBasedIntentParser
    fallback: experts.language.LLMIntentParser

  personal_space_evaluator:
    implementation: experts.social.PersonalSpaceEvaluator
    culture_profile: default
~~~

The HML diagram still refers only to:

~~~text
λperson_detector
λintent_parser
λpersonal_space_evaluator
~~~

This supports:

- deployment-specific implementations
- simulation vs real robot execution
- model versioning
- A/B testing
- safety-approved expert replacement
- domain-specific customization
- reproducible experimental setups

This is especially important for academic work, where the architecture should be described independently from any single software stack.

External configuration may also define which cell uses which operator and under which policy. However, the operator itself remains a replaceable capability with a stable contract.

---

# Semantic Operators Inside Semantic Cells

Semantic operators are usually not standalone architectural cells.

They are typically placed inside semantic cells.

For example:

~~~text
ST[λperson_detector]
~~~

means:

~~~text
A Semantic Transformer that applies a person detection operator.
~~~

Similarly:

~~~text
SG[λtemporal_alignment]
~~~

means:

~~~text
A Sync Gate that applies a temporal synchronization operator.
~~~

And:

~~~text
ES[λrule_based, λcache, λLLM]
~~~

means:

~~~text
An Escalation Switch that chooses between multiple semantic operators.
~~~

The semantic cell defines the architectural role.

The semantic operator defines the expertise applied inside that role.

The policy, context selection, failure behavior, provenance recording, and routing are responsibilities of the cell or the surrounding pattern.

This distinction keeps HML diagrams modular:

~~~text
Semantic Cell = architectural role
Semantic Operator = replaceable expert capability
Policy = declarative governance artifact
Context = explicit state selected for use
Implementation = runtime binding
~~~

---

# Operator Contract

For engineering and documentation, each semantic operator should ideally define an operator contract.

An operator contract may include:

| Field | Meaning |
|---|---|
| `name` | Operator name |
| `purpose` | What semantic capability the operator provides |
| `input` | Expected HIF type or input structure |
| `parameters` | Explicit parameters accepted by the operator |
| `output` | Expected HIF type, result, score, decision candidate, or output structure |
| `adds` | Properties added to the HIF, if any |
| `modifies` | Properties modified in the HIF, if any |
| `confidence` | How confidence is represented |
| `failure_modes` | Known failure conditions |
| `side_effects` | Whether the implementation reads or writes external state |
| `latency_class` | Expected latency or cost |
| `resource_requirements` | CPU, GPU, network, memory, or sensor assumptions |
| `fallback` | What happens when the operator fails |
| `provenance` | What trace should be recorded in processing history |

Example:

~~~text
λintent_parser

Purpose:
  Convert a Text HIF into an Instruction HIF.

Input:
  HIF.type = Text

Parameters:
  parsing_profile
  language
  confidence_threshold

Output:
  HIF.type = Instruction

Adds:
  properties.intent
  properties.parameters

Confidence:
  Adds confidence.intent and confidence.parameters

Failure:
  Low confidence → return failure result to invoking ES or request clarification path
~~~

This makes operators reusable and testable.

---

# Operator Types

Semantic operators may be classified by implementation style or semantic role.

| Operator Type | Description | Example |
|---|---|---|
| Deterministic Code | Exact procedural logic | regex intent parser |
| Heuristic | Approximate handcrafted rule | closer-person-first |
| Classifier | Model producing labels | emotion classifier |
| Neural Model | Learned perception or reasoning | skeleton detector |
| LLM | Generative semantic reasoner | instruction interpretation |
| Multimodal Model | Joint vision-language reasoning | referent resolution |
| Cache Lookup | Reuse previous semantic result | semantic intent cache |
| DB Query | Retrieve or update structured knowledge | where is Bob? |
| Policy Evaluation Function | Compute whether a condition passes | personal-space evaluator |
| Social Evaluator | Evaluate social suitability | avoid interrupting |
| Escalation Evaluator | Compute whether escalation is needed | heuristic → cache → LLM |
| Resource Evaluator | Evaluate hardware or runtime limits | use lightweight model under load |

This classification is descriptive, not restrictive.

A single operator may combine several types.

---

# Deterministic and Probabilistic Operators

Some semantic operators are deterministic.

Example:

~~~text
λroom_lookup : object_id → room_id
~~~

Others are probabilistic.

Example:

~~~text
λemotion_classifier : face_crop → emotion_label + confidence
~~~

Generative operators may produce candidate interpretations.

Example:

~~~text
λLLM_intent_parser : Text HIF → candidate Instruction HIF + rationale + confidence estimate
~~~

HML allows all of these operator types, but probabilistic and generative operators should expose uncertainty.

A useful distinction is:

~~~text
λdeterministic : HIF → HIF
λprobabilistic : HIF → HIF + confidence
λgenerative : HIF → candidate output + trace/provenance
~~~

This is important because HRI systems should not silently convert uncertain perception or generative reasoning into confident action.

---

# Operators and HIF Properties

Many semantic operators enrich HIFs by adding properties.

Example:

~~~text
λperson_detector
Input:  VideoFrame HIF
Output: VideoFrame HIF + properties.persons[]
~~~

Example output:

~~~json
{
  "operator": "person_detector",
  "added_properties": {
    "persons": [
      {
        "id": "p12",
        "bbox": [100, 50, 230, 400],
        "confidence": 0.91
      }
    ]
  }
}
~~~

Another example:

~~~text
λintent_parser
Input:  Text HIF
Output: Instruction HIF + properties.intent + properties.parameters
~~~

The important point is that a semantic operator should make meaning explicit.

It should not hide important interpretation inside unstructured internal state.

---

# Policy Evaluation Operators

Some operators are used to evaluate a policy condition.

In this case, the operator does not own the policy artifact. Instead, a Semantic Cell or gate invokes the operator to compute a policy-related result.

Examples:

~~~text
λpersonal_space_evaluator
ActionRequest HIF + parameters → pass | modify | block
~~~

~~~text
λsafety_evaluator
Executable HIF + parameters → pass | reduce_autonomy | emergency_stop
~~~

~~~text
λtemporal_alignment
HIFⁿ + synchronization_window → synchronized HIF | wait | reject
~~~

In this role, a semantic operator behaves as a computational evaluator for a policy-related question.

It may produce candidate outcomes such as:

- pass
- block
- modify
- delay
- escalate
- request clarification
- reduce autonomy
- trigger emergency handling

The distinction is important:

~~~text
Policy artifact = declarative rule, threshold, constraint, or social law
Policy evaluation operator = computational expert that evaluates such a rule
Semantic Cell = architectural role that applies the policy evaluation result
~~~

For example, `λpersonal_space_evaluator` may compute whether an ActionRequest violates proxemic constraints, but the Social Convention Validator or another gate-like cell decides how that result affects the HIF flow.

This preserves the separation between:

~~~text
policy as governance
operator as computation
cell as invocation boundary
~~~

---

# Operator Contract and Cell Invocation

<div align="center">

<svg width="980" height="500" viewBox="0 0 980 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="operator-cell-binding-title operator-cell-binding-desc">
  <title id="operator-cell-binding-title">Operator Contract and Cell Invocation</title>
  <desc id="operator-cell-binding-desc">
    A semantic operator is defined outside the cell as a replaceable expert.
    The semantic cell invokes that operator by combining input HIFs, policy, and context.
  </desc>

  <defs>
    <marker id="arrow-operator-cell-binding" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#111827" />
    </marker>
  </defs>

  <!-- Policy -->
  <image href="/social-hri-framework/img/hml/policy-check.svg"
         x="235" y="18" width="52" height="52" preserveAspectRatio="xMidYMid meet" />
  <text x="261" y="89" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fill="#111827">Policy</text>

  <!-- External operator definition -->
  <rect x="470" y="18" width="220" height="72" rx="16" ry="16"
        fill="none" stroke="#111827" strokeWidth="1.8" />
  <text x="580" y="45" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="#111827">Semantic Operator</text>
  <text x="580" y="75" textAnchor="middle" fontSize="34" fontFamily="Georgia, 'Times New Roman', serif" fill="#111827">λ</text>

  <!-- Outer semantic cell boundary -->
  <rect x="205" y="108" width="555" height="235" rx="24" ry="24"
        fill="none" stroke="#111827" strokeWidth="1.8" strokeDasharray="7 5" />
  <text x="482.5" y="136" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif" fill="#111827">Semantic Cell Invocation Boundary</text>
  <text x="482.5" y="157" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">the cell applies policy, selects context, invokes λ, and routes the result</text>

  <!-- Input HIFs -->
  <rect x="35" y="205" width="160" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.7" />
  <text x="115" y="229" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">Input HIFs</text>
  <text x="115" y="251" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">semantic inputs</text>

  <!-- Operator input inside cell -->
  <rect x="270" y="205" width="185" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="362.5" y="229" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif" fill="#111827">Operator Input</text>
  <text x="362.5" y="251" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">prepared HIF + selected context</text>

  <!-- Internal lambda inside the cell -->
  <text x="595" y="250" textAnchor="middle" fontSize="64" fontFamily="Georgia, 'Times New Roman', serif" fill="#111827">λ</text>

  <!-- Output -->
  <rect x="820" y="205" width="140" height="58" rx="12" ry="12"
        fill="none" stroke="#111827" strokeWidth="1.7" />
  <text x="890" y="229" textAnchor="middle" fontSize="17" fontFamily="Arial, sans-serif" fill="#111827">Output</text>
  <text x="890" y="251" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fill="#111827">HIF / score / result</text>

  <!-- Context slice below operator input -->
  <rect x="250" y="382" width="225" height="78" rx="16" ry="16"
        fill="none" stroke="#111827" strokeWidth="1.6" />
  <text x="362.5" y="408" textAnchor="middle" fontSize="15" fontFamily="Arial, sans-serif" fill="#111827">Context Slice</text>
  <text x="362.5" y="426" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#111827">selected by the cell</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg"
         x="292" y="432" width="40" height="24" preserveAspectRatio="xMidYMid meet" />
  <image href="/social-hri-framework/img/hml/semantic-object.svg"
         x="343" y="432" width="40" height="24" preserveAspectRatio="xMidYMid meet" />
  <image href="/social-hri-framework/img/hml/semantic-cache.svg"
         x="394" y="432" width="40" height="24" preserveAspectRatio="xMidYMid meet" />

  <!-- Main flow arrows -->
  <line x1="195" y1="234" x2="262" y2="234"
        stroke="#111827" strokeWidth="1.7" fill="none"
        markerEnd="url(#arrow-operator-cell-binding)" />

  <line x1="455" y1="234" x2="555" y2="234"
        stroke="#111827" strokeWidth="1.7" fill="none"
        markerEnd="url(#arrow-operator-cell-binding)" />

  <line x1="625" y1="234" x2="812" y2="234"
        stroke="#111827" strokeWidth="1.7" fill="none"
        markerEnd="url(#arrow-operator-cell-binding)" />

  <!-- Policy feeds operator input -->
  <line x1="261" y1="97" x2="261" y2="177"
        stroke="#111827" strokeWidth="1.4" fill="none" />
  <line x1="261" y1="177" x2="345" y2="177"
        stroke="#111827" strokeWidth="1.4" fill="none" />
  <line x1="345" y1="177" x2="345" y2="205"
        stroke="#111827" strokeWidth="1.4" fill="none"
        markerEnd="url(#arrow-operator-cell-binding)" />

  <!-- Context feeds operator input -->
  <line x1="362.5" y1="382" x2="362.5" y2="270"
        stroke="#111827" strokeWidth="1.4" fill="none"
        markerEnd="url(#arrow-operator-cell-binding)" />

<!-- Elbow dashed arrow from right side of external operator to internal lambda -->
<line x1="690" y1="54" x2="725" y2="54"
      stroke="#111827" strokeWidth="1.5" fill="none" strokeDasharray="6 5" />
<line x1="725" y1="54" x2="725" y2="190"
      stroke="#111827" strokeWidth="1.5" fill="none" strokeDasharray="6 5" />
<line x1="725" y1="190" x2="615" y2="190"
      stroke="#111827" strokeWidth="1.5" fill="none" strokeDasharray="6 5" />
<line x1="615" y1="190" x2="615" y2="205"
      stroke="#111827" strokeWidth="1.5" fill="none" strokeDasharray="6 5"
      markerEnd="url(#arrow-operator-cell-binding)" />
      
  <!-- Caption -->
  <text x="482.5" y="366" textAnchor="middle" fontSize="13" fontFamily="Arial, sans-serif" fill="#111827">
    The cell prepares the operator input; the external λ definition is invoked inside the cell.
  </text>
</svg>

</div>

This diagram separates the reusable operator definition from the semantic cell that invokes it.

The operator remains a replaceable semantic expert.
The semantic cell is responsible for preparing the operator input by combining incoming HIFs, applicable policy, and a selected context slice.

The external operator definition is then invoked inside the cell, where the internal λ represents the applied expertise within the HIF flow.

The operator provides a replaceable semantic capability with a clear input-output contract.

The cell owns the architectural responsibilities around that capability: applying policy, selecting relevant context, passing explicit parameters, handling failure, recording provenance, and routing the result.

This distinction allows an expert such as `λperson_detector` to remain independent of why, when, and under which policy it is invoked.

---

# Purity, Parameters, and Side Effects

Early HML sketches describe `λ` as a pure function.

This remains the preferred modeling ideal.

A semantic operator should be understood as a replaceable expert with an explicit input-output contract:

~~~text
λ(input, parameters) → output
~~~

The operator should receive the information it needs through explicit inputs and parameters.

The invoking Semantic Cell is responsible for:

- selecting the relevant HIFs
- selecting or computing parameters
- consulting HRI_DB if needed
- reading cache or memory if needed
- applying policy
- deciding whether the operator should run
- handling errors and fallbacks
- recording processing history

This keeps the expert independent.

For example, a person-detection expert should remain:

~~~text
λperson_detector(frame, threshold?) → persons[]
~~~

It should not need to know why the frame was selected, which ROS node invoked it, which social task is active, or which downstream pattern will use its output.

Some real implementations may still encapsulate stateful or external behavior, such as calling a remote model or accessing a model cache.

When this happens, the side effect should be explicit in the operator contract.

The architectural preference remains:

~~~text
state, policy, and orchestration belong to the cell;
semantic expertise belongs to the operator.
~~~

---

# Confidence, Uncertainty, and Provenance

Any operator that relies on uncertain perception, statistical inference, or generative reasoning should expose uncertainty.

This may include:

- confidence values
- uncertainty ranges
- candidate alternatives
- model identity
- source information
- reasoning trace
- validation status
- failure conditions

Example:

~~~json
{
  "processing_history": [
    {
      "operator": "LLMIntentParser",
      "model": "local-or-cloud-llm",
      "input_type": "Text",
      "output_type": "Instruction",
      "confidence": 0.78,
      "alternatives": [
        "pick_and_place",
        "show_object"
      ]
    }
  ]
}
~~~

This supports:

- Open Declarative reasoning
- Clear Cognition
- Interpretable Gates
- Adaptive Autonomy
- Layered Validation

Uncertainty should not be hidden behind a clean-looking output.

---

# Examples

## Example 1: Perception Operator

~~~text
λperson_detector
Input:  VideoFrame HIF
Output: VideoFrame HIF + properties.persons[]
~~~

Purpose:

~~~text
Detect humans in an image and add structured person candidates.
~~~

Typical implementation:

- object detector
- neural network
- local model
- GPU-accelerated perception module

This operator should not need to know why the frame is being processed. It only exposes the person-detection capability.

---

## Example 2: Language Operator

~~~text
λintent_parser
Input:  Text HIF
Output: Instruction HIF + properties.intent + properties.parameters
~~~

Purpose:

~~~text
Convert natural language into a structured instruction.
~~~

Typical implementation:

- rule-based parser
- semantic cache
- LLM fallback
- hybrid parser

The invoking cell or escalation switch decides when this operator is used and what happens if confidence is low.

---

## Example 3: Social Policy Evaluation Operator

~~~text
λpersonal_space_evaluator
Input:  ActionRequest HIF + explicit social parameters
Output: pass | modify | block
~~~

Purpose:

~~~text
Evaluate whether an action violates proxemic or personal-space expectations.
~~~

Typical implementation:

- heuristic evaluator
- cultural profile
- learned user preference
- social validation expert

The operator evaluates the condition. A gate or Semantic Cell decides how to route the result.

---

## Example 4: Escalation Evaluation Operator

~~~text
λconfidence_escalation_evaluator
Input:  HIF + confidence map + resource state
Output: selected expert candidate
~~~

Purpose:

~~~text
Evaluate whether to use a fast deterministic expert, a cache lookup, or a more expensive LLM.
~~~

Typical implementation:

- threshold rules
- cost evaluator
- latency evaluator
- safety-aware escalation evaluator

The ES owns the escalation policy and uses this operator as part of its decision process.

---

# Relation to HIF

The HIF carries semantic state.

The semantic operator modifies or evaluates that state.

For example:

~~~text
HIF before λ:
  type = Text
  content = "Bring this bottle to Bob"

λintent_parser

HIF after λ:
  type = Instruction
  properties.intent = pick_and_place
  properties.object_reference = this bottle
  properties.target_person = Bob
~~~

This separation keeps data and computation conceptually distinct.

---

# Relation to Semantic Cells

Semantic operators are the expertise inside semantic cells.

A Semantic Transformer uses a `λ` to enrich a HIF.

A Sync Gate uses a `λ` to decide whether HIFs belong together.

An Escalation Switch uses multiple `λ` operators and a policy to select between them.

A HIF Executor uses a `λ` to convert a semantic action request into an embodied or external effect.

This relation can be summarized as:

~~~text
Semantic Cell = architectural role
Semantic Operator = expert or policy-evaluation capability inside that role
Policy = governance artifact applied by the cell
Context = explicit state selected by the cell
~~~

The next HML page defines these semantic cells in detail.

---

# Design Guidelines

When defining semantic operators:

## Give Every Operator a Clear Name

Use names that describe semantic purpose, not implementation details.

Prefer:

~~~text
λintent_parser
~~~

over:

~~~text
λpython_function_17
~~~

## Define the Contract

Document input, output, added properties, confidence behavior, failure modes, and explicit parameters.

## Separate Interface from Implementation

Do not tie the architectural model to a specific ROS node, Python class, model version, or API provider unless that detail is essential.

## Keep Operators Independent

A semantic operator should not own global policy or global context.

It should receive the information it needs through explicit inputs, parameters, or a bounded context slice selected by the invoking cell.

## Make Uncertainty Explicit

Probabilistic and generative operators should expose confidence or alternatives.

## Preserve Provenance

Important operator outputs should update `processing_history`.

## Document Side Effects

If an implementation reads or writes memory, uses a remote service, or triggers an external action, document that behavior explicitly.

The modeling preference is still to keep state and orchestration outside the operator whenever possible.

## Prefer Replaceable Experts

A well-designed operator can be replaced without changing the HML pattern that uses it.

---

# Implementation Notes

A practical implementation may organize semantic operators as plugins.

For example:

~~~text
Operator Registry
  λperson_detector      → YoloPersonDetector
  λintent_parser        → RuleBasedIntentParser
  λintent_parser_llm    → LLMIntentParser
  λsocial_acceptance    → SocialAcceptanceEvaluator
~~~

Runtime configuration may bind symbolic operator names to concrete implementations.

This allows the same HML architecture to run in different deployment modes:

- simulation
- lab robot
- production robot
- edge-only mode
- cloud-assisted mode
- deterministic testing mode
- academic benchmark mode

The architectural diagram remains stable while implementations evolve.

---

# Conclusion

Semantic Operators are the explicit units of semantic expertise in HML.

They provide a stable modeling abstraction for perception, interpretation, reasoning, validation, escalation, and action-related semantics.

By representing expertise as `λ`, HML separates:

~~~text
what semantic capability is needed
~~~

from:

~~~text
how that capability is implemented
~~~

and from:

~~~text
when, why, and under which policy it is invoked
~~~

This separation is essential for modular HRI architectures.

It allows systems to remain:

- explainable
- testable
- replaceable
- configurable
- middleware-independent
- model-independent
- suitable for hybrid AI
- suitable for socially intelligent embodied agents

Semantic Operators therefore form the capability layer used by Semantic Cells and HRI Design Patterns.

The final architectural distinction is:

~~~text
Operators are replaceable semantic experts.
Cells are policy-aware invocation boundaries.
~~~


---

# State, Memory, and Queues

Source file: `hml/state-memory-and-queues.md`

# State, Memory, and Queues

## Overview

State, Memory, and Queues are the HML structures that preserve information across time.

If HIFs are the semantic units that flow through the system, and Semantic Cells are the architectural units that process them, then state and memory structures are the components that allow the architecture to remember, reuse, delay, resume, and reason across multiple interaction moments.

These structures support:

- semantic continuity
- persistent world knowledge
- session context
- caching
- asynchronous interaction
- delayed execution
- fact-triggered resumption
- temporal reasoning
- explainable memory
- human correction
- policy-aware state updates

They are essential for moving from immediate command-response behavior to socially aware long-term interaction.

---

# Why State Structures Are Needed

A HIF pipeline alone is not enough for HRI.

Human-Robot Interaction is often incomplete, delayed, ambiguous, or dependent on future context.

Examples:

- A user says: `Bring this bottle to Bob`, but Bob's location is unknown.
- A robot needs a short time window of skeletons to learn a gesture.
- A task should wait until the user is available.
- A previous fact affects how a new instruction is interpreted.
- A query should be answered from memory before escalating to an LLM.
- A fact may become stale unless reinforced.
- A robot may need to remember that it already asked a clarification question.
- A social request may expire if the opportunity window closes.

State, memory, and queue structures allow HML architectures to preserve semantic continuity across these situations.

---

# Three Families of State Structures

HML distinguishes between three broad families of state structures.

| Family | Purpose | Examples |
|---|---|---|
| Semantic Memory | Persistent or semi-persistent knowledge about the world | HRI_DB, facts, beliefs, preferences |
| Operational Memory | Temporary context used during an interaction | session context, short-term memory, recent references |
| Flow-Control Structures | Structures that manage time, ordering, delay, or readiness | queues, buffers, time-series windows, pending queues |

These structures may appear as side inputs, side outputs, or explicit storage elements in HML diagrams.

---

# General Memory and Flow View

A typical HML architecture allows HIFs to flow through Semantic Cells while interacting with state structures.

<div align="center">

<svg width="900" height="430" viewBox="0 0 900 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="memory-flow-title memory-flow-desc">
  <title id="memory-flow-title">State Structures Around HIF Flow</title>
  <desc id="memory-flow-desc">A Semantic Cell processes a HIF stream while interacting with cache, HRI_DB, session context, and queue or buffer structures.</desc>

  <defs>
    <marker id="arrow-memory-flow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- Main HIF flow -->
  <rect x="40" y="170" width="150" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="115" y="199" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Input HIF Stream</text>

  <rect x="375" y="150" width="150" height="88" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="450" y="188" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Semantic</text>
  <text x="450" y="214" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Cell</text>

  <rect x="710" y="170" width="150" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="785" y="199" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Output HIF Stream</text>

  <line x1="190" y1="194" x2="367" y2="194" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-memory-flow)"/>
  <line x1="525" y1="194" x2="702" y2="194" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-memory-flow)"/>

  <!-- Top policy and lambda -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="400" y="18" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="424" y="82" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Policy</text>

  <text x="482" y="60" text-anchor="middle" font-size="44" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="482" y="82" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Expert</text>

  <line x1="424" y1="92" x2="424" y2="150" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-memory-flow)"/>
  <line x1="482" y1="92" x2="482" y2="150" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-memory-flow)"/>

  <!-- Side structures -->
  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="110" y="285" width="72" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="146" y="358" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Semantic Cache</text>

  <image href="/social-hri-framework/img/hml/hri-db.svg" x="330" y="300" width="72" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="366" y="373" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HRI_DB</text>

  <image href="/social-hri-framework/img/hml/semantic-object.svg" x="520" y="300" width="72" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="556" y="373" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Session Context</text>

  <image href="/social-hri-framework/img/hml/queue.svg" x="715" y="302" width="90" height="56" preserveAspectRatio="xMidYMid meet"/>
  <text x="760" y="373" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Queue / Buffer</text>

  <!-- Bidirectional support links -->
  <line x1="180" y1="304" x2="382" y2="235" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="388" y1="238" x2="187" y2="314" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>

  <line x1="378" y1="300" x2="430" y2="240" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="440" y1="240" x2="390" y2="302" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>

  <line x1="548" y1="300" x2="474" y2="240" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="466" y1="240" x2="540" y2="302" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>

  <line x1="720" y1="304" x2="520" y2="235" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-memory-flow)"/>
  <line x1="512" y1="238" x2="712" y2="314" stroke="currentColor" stroke-width="1.1" marker-end="url(#arrow-memory-flow)"/>
</svg>

</div>

This diagram shows that state structures are not necessarily part of the main left-to-right HIF flow.

They can support, modify, delay, or resume that flow.

---

# Semantic Objects and Dictionaries

A Semantic Object is a JSON-like structured representation of meaning.

It may appear inside a HIF, inside a policy file, inside HRI_DB, or as the result of a query.

Example:

```json
{
  "person": "Bob",
  "location": "kitchen",
  "confidence": 0.92,
  "source": "vision_tracker"
}
```

Semantic Objects are used to represent:

- HIF properties
- facts
- query results
- task parameters
- policy parameters
- configuration values
- validation outcomes
- world-state entities

The visual notation `{}` or `{:}` may be used to indicate a structured semantic object.

Important distinction:

```text
A semantic object is a representation format.
It is not necessarily a database, cache, or persistent store.
```

A dictionary-like structure may be used inside many different HML components.

---

# HRI_DB — Persistent Semantic World Model

HRI_DB is the persistent semantic world model of the robot.

It represents what the robot currently believes, remembers, or assumes about the world, people, objects, tasks, social context, and itself.

It may contain:

- entities
- facts
- beliefs
- people
- object states
- locations
- user preferences
- social context
- policies
- autonomy state
- integrity state
- interaction history
- unresolved assumptions
- source and confidence metadata

Example:

```json
{
  "people": {
    "bob": {
      "type": "person",
      "location": "kitchen",
      "last_seen": "2026-05-11T12:34:01Z",
      "source": "vision_tracker",
      "confidence": 0.86
    }
  }
}
```

HRI_DB is not merely a technical database.

It is the robot's transparent semantic world model.

It supports:

- explainability
- consistency evaluation
- human correction
- deterministic querying
- LLM-assisted reasoning
- persistence across sessions
- context continuity
- fact-triggered task resumption

HRI_DB is important enough to receive a dedicated documentation page.

This page introduces it only as one of the central memory structures in HML.

---
HRI_DB is discussed in depth in the dedicated HRI_DB page. This page treats it only as one member of the broader family of state and memory structures. The dedicated page explains its transparent JSON-like reference implementation, deterministic querying strategy, confidence decay, human correction, and LLM escalation over structured state.
---

# Cache vs HRI_DB

A cache is not the same as HRI_DB.

A cache stores reusable computation or interpretation results.

HRI_DB stores semantic world knowledge.

Example:

```text
Cache:
  "do you know Bob's whereabouts?" → query intent: where_is(Bob)

HRI_DB:
  Bob is in the kitchen.
```

In other words:

```text
Cache = reuse of interpretation or computation
HRI_DB = semantic memory of the world
```

Caches support:

- latency reduction
- token saving
- consistency of repeated interpretation
- cheaper fallback chains
- reduced LLM calls

HRI_DB supports:

- persistent state
- fact lookup
- consistency checking
- explainability
- human correction
- world-model reasoning

Both may be used together.

---
# Semantic Cache

A Semantic Cache stores reusable semantic results.

Examples:

```text
Text phrase → parsed intent
Query pattern → structured query
LLM answer → reusable interpretation
Spatial phrase → resolved pattern
```

A Semantic Cache is especially useful inside escalation patterns.

For example:

<div align="center">

<svg width="840" height="310" viewBox="0 0 840 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="semantic-cache-es-title semantic-cache-es-desc">
  <title id="semantic-cache-es-title">Semantic Cache in an Escalation Switch</title>
  <desc id="semantic-cache-es-desc">A Text HIF enters an Escalation Switch. Policy, rule parser, semantic cache, and LLM parser enter from above. The result is an Instruction HIF.</desc>

  <defs>
    <marker id="arrow-cache-es" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="40" y="175" width="125" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="102.5" y="203" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Text HIF</text>

  <rect x="365" y="150" width="125" height="86" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="427.5" y="199" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="currentColor">ES</text>

  <rect x="670" y="175" width="135" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="737.5" y="203" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Instruction HIF</text>

  <line x1="165" y1="198" x2="357" y2="198" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-cache-es)"/>
  <line x1="490" y1="198" x2="662" y2="198" stroke="currentColor" stroke-width="1.7" marker-end="url(#arrow-cache-es)"/>

  <!-- Independent policy and experts -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="285" y="25" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="309" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Escalation Policy</text>
  <line x1="309" y1="100" x2="390" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>

  <image href="/social-hri-framework/img/hml/code-expert.svg" x="370" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="397" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">λ rule parser</text>
  <line x1="397" y1="100" x2="415" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>

  <image href="/social-hri-framework/img/hml/semantic-cache.svg" x="465" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="492" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Semantic Cache</text>
  <line x1="492" y1="100" x2="445" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>

  <image href="/social-hri-framework/img/hml/llm-bubble.svg" x="555" y="25" width="54" height="48" preserveAspectRatio="xMidYMid meet"/>
  <text x="582" y="90" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">λ LLM parser</text>
  <line x1="582" y1="100" x2="480" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-cache-es)"/>
</svg>

</div>

The ES may first try deterministic code, then the semantic cache, and only then escalate to a more expensive generative model.

---

# Short-Term Memory and Session Context

Not all memory should be persistent.

Short-Term Memory or Session Context stores information that is relevant to the current interaction but may not belong in long-term HRI_DB.

Examples include:

- current user
- active speaker
- current topic
- last referenced object
- recent clarification
- pronoun context
- active task
- temporary assumptions
- dialogue state
- currently open social window

Example:

```json
{
  "current_user": "Alice",
  "last_referenced_object": "bottle_5",
  "current_topic": "medicine delivery",
  "last_clarification_question": "Where is Bob?"
}
```

Session context supports natural dialogue and short-horizon reasoning.

It should not automatically become persistent world knowledge.

---

# Buffers

A Buffer is bounded temporary storage.

It stores HIFs or data items for short-term processing.

Examples:

```text
Buffer<HIF>
Buffer<AudioSnippet>
Buffer<VideoFrame>
Buffer<PersonState>
```

Buffers are useful for:

- smoothing noisy signals
- waiting for synchronization
- collecting evidence
- short-term temporal reasoning
- managing asynchronous streams
- rate matching between components

A buffer may be bounded by:

- time
- number of items
- memory size
- confidence
- source
- interaction state

---

# Time-Series Windows

A Time-Series Window is a buffer with explicit temporal meaning.

It stores a sequence of frames, poses, gestures, audio snippets, or other HIFs over a time interval.

Example:

```text
TimeSeriesWindow<SkeletonHIF>
```

Typical uses:

- gesture learning
- gesture classification
- motion pattern detection
- temporal smoothing
- repeated behavior detection
- engagement estimation
- activity recognition

This structure is central to patterns such as the Adaptive Signature Learner.

<div align="center">

<svg width="780" height="270" viewBox="0 0 780 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="time-window-title time-window-desc">
  <title id="time-window-title">Time-Series Window Processing</title>
  <desc id="time-window-desc">Multiple HIFs are accumulated into a time-series window and processed by a Semantic Transformer into a Gesture HIF.</desc>

  <defs>
    <marker id="arrow-time-window" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <!-- incoming HIFs -->
  <rect x="35" y="55" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="75" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <rect x="35" y="100" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="120" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <rect x="35" y="145" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="165" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>
  <rect x="35" y="190" width="70" height="30" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="210" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">HIF</text>

  <image href="/social-hri-framework/img/hml/time-series-window.svg" x="205" y="90" width="140" height="80" preserveAspectRatio="xMidYMid meet"/>
  <text x="275" y="190" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Time-Series Window</text>

  <rect x="455" y="90" width="120" height="74" rx="12" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="515" y="122" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Learn /</text>
  <text x="515" y="147" text-anchor="middle" font-size="17" font-family="Arial, sans-serif" fill="currentColor">Classify ST</text>

  <rect x="660" y="105" width="100" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="710" y="132" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Gesture HIF</text>

  <!-- policy and lambda into ST -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="468" y="5" width="38" height="38" preserveAspectRatio="xMidYMid meet"/>
  <text x="487" y="58" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>
  <text x="540" y="38" text-anchor="middle" font-size="34" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="540" y="58" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Expert</text>
  <line x1="487" y1="66" x2="487" y2="90" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-time-window)"/>
  <line x1="540" y1="66" x2="540" y2="90" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-time-window)"/>

  <!-- arrows -->
  <line x1="105" y1="70" x2="200" y2="110" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>
  <line x1="105" y1="115" x2="200" y2="125" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>
  <line x1="105" y1="160" x2="200" y2="140" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>
  <line x1="105" y1="205" x2="200" y2="155" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow-time-window)"/>

  <line x1="345" y1="130" x2="447" y2="130" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-time-window)"/>
  <line x1="575" y1="127" x2="652" y2="127" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-time-window)"/>
</svg>

</div>

The window gives the system enough temporal context to classify or learn behavior that cannot be understood from a single HIF.

---

# Queues

A Queue is an ordered collection of HIFs, tasks, requests, or actions waiting for processing.

General form:

```text
Queue<T> = ordered collection of items waiting for processing
```

Queues are used when processing is:

- asynchronous
- delayed
- prioritized
- resource-dependent
- interaction-dependent
- waiting for missing information
- waiting for social opportunity

Common queue types include:

- HIF stream queue
- task queue
- request queue
- prioritized queue
- pending queue
- action queue
- social request queue

A queue is not only a data structure.

In HML, it often represents part of the lifecycle of a task or interaction request.

---

# Prioritized Queue

A Prioritized Queue orders tasks or requests according to a policy.

Possible priority criteria include:

- urgency
- safety
- social relevance
- user importance
- task age
- explicit instruction priority
- autonomy level
- resource availability
- estimated execution cost
- decay factor

Example:

```text
PrioritizedQueue<TaskHIF>
```

A Prioritized Queue is useful when several candidate tasks compete for attention or execution.

Examples:

- user instructions
- proactive social requests
- system maintenance tasks
- safety alerts
- reminders
- delayed actions

---

# Pending Queue

A Pending Queue stores tasks or requests that are not executable yet but should not be discarded.

Reasons for pending status include:

- missing information
- unavailable person
- closed social window
- low confidence
- insufficient resources
- missing permission
- unresolved ambiguity
- future timing condition
- safety constraint
- task dependency

Example:

```text
Bring bottle_5 to Bob
→ Bob location unknown
→ Pending Queue
```

Another example:

```text
Ask Bob for help
→ Bob is busy
→ Pending Request Queue
```

Pending queues are essential for moving from command-response systems to goal-oriented agents.

A robot should not fail immediately when a task is incomplete.

It should hold the task, seek missing information, and resume when the required context becomes available.

---

# Pending Queue Lifecycle

The following diagram shows a common pending task lifecycle.

<div align="center">

<svg width="920" height="360" viewBox="0 0 920 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pending-lifecycle-title pending-lifecycle-desc">
  <title id="pending-lifecycle-title">Pending Queue Lifecycle</title>
  <desc id="pending-lifecycle-desc">A task HIF is checked by a prerequisite gate. Ready tasks become executable, while missing information sends the task to a pending queue. New facts re-trigger checking, and old tasks may expire.</desc>

  <defs>
    <marker id="arrow-pending" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>

  <rect x="35" y="150" width="100" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="85" y="177" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Task HIF</text>

  <rect x="215" y="130" width="120" height="84" rx="12" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="275" y="164" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Prerequisite</text>
  <text x="275" y="188" text-anchor="middle" font-size="15" font-family="Arial, sans-serif" fill="currentColor">Check ST</text>

  <polygon points="450,172 495,132 540,172 495,212" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <text x="495" y="177" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Decision</text>

  <rect x="690" y="90" width="155" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="767.5" y="117" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Executable Task HIF</text>

  <image href="/social-hri-framework/img/hml/pending-queue.svg" x="690" y="205" width="145" height="72" preserveAspectRatio="xMidYMid meet"/>
  <text x="762.5" y="292" text-anchor="middle" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Pending Queue</text>

  <rect x="350" y="285" width="145" height="42" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="422.5" y="311" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">New Fact / Context</text>

  <rect x="555" y="270" width="110" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="610" y="302" text-anchor="middle" font-size="13" font-family="Arial, sans-serif" fill="currentColor">Pending Handler</text>

  <rect x="700" y="315" width="130" height="34" rx="8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="765" y="337" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">Expired / Dropped</text>

  <!-- Policy and lambda for prerequisite ST -->
  <image href="/social-hri-framework/img/hml/policy-check.svg" x="236" y="25" width="38" height="38" preserveAspectRatio="xMidYMid meet"/>
  <text x="255" y="78" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Policy</text>
  <text x="300" y="58" text-anchor="middle" font-size="34" font-family="Georgia, 'Times New Roman', serif" fill="currentColor">λ</text>
  <text x="300" y="78" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">Check</text>
  <line x1="255" y1="86" x2="255" y2="130" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-pending)"/>
  <line x1="300" y1="86" x2="300" y2="130" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-pending)"/>

  <!-- arrows -->
  <line x1="135" y1="172" x2="207" y2="172" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>
  <line x1="335" y1="172" x2="442" y2="172" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>

  <line x1="540" y1="160" x2="682" y2="112" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>
  <text x="610" y="128" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">ready</text>

  <line x1="540" y1="185" x2="682" y2="235" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-pending)"/>
  <text x="608" y="224" text-anchor="middle" font-size="12" font-family="Arial, sans-serif" fill="currentColor">missing info</text>

  <line x1="495" y1="306" x2="547" y2="300" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-pending)"/>
  <line x1="690" y1="246" x2="665" y2="286" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrow-pending)"/>
  <line x1="555" y1="282" x2="335" y2="212" stroke="currentColor" stroke-width="1.3" marker-end="url(#arrow-pending)"/>

  <line x1="765" y1="278" x2="765" y2="307" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" marker-end="url(#arrow-pending)"/>
  <text x="835" y="304" text-anchor="middle" font-size="11" font-family="Arial, sans-serif" fill="currentColor">decay / expiration</text>
</svg>

</div>

This lifecycle appears in patterns such as:

- Task Prerequisite Resolver
- Social Opportunity TPR
- delayed clarification handlers
- proactivity engines
- pending social requests

A pending task should usually include an expiration policy or decay factor to prevent outdated tasks from executing later in an inappropriate context.

---

# State Update vs HIF Flow

Some information flows through the system as HIFs.

Other information is stored as state.

For example:

```text
User says: "Bob is in the kitchen."
```

This may become:

```text
Text HIF → Intent / Fact Extraction ST → Fact HIF → Consistency Evaluator → HRI_DB update
```

Later, another query may retrieve that fact:

```text
Query HIF → HRI_DB Handler → Answer HIF
```

This means that state structures may appear as:

- side inputs to Semantic Cells
- side outputs from Semantic Cells
- persistent memory stores
- triggers for pending task re-evaluation
- sources of newly created HIFs

The HIF flow and the state model are therefore connected, but they are not the same thing.

---

# Visual Notation

The following table summarizes suggested visual notation for state and memory structures.

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Structure</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-object.svg" width="52" /></td>
      <td>Semantic Object</td>
      <td>Structured JSON-like semantic data</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/hri-db.svg" width="52" /></td>
      <td>HRI_DB</td>
      <td>Persistent semantic world model</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-cache.svg" width="52" /></td>
      <td>Semantic Cache</td>
      <td>Reusable computation or interpretation store</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/buffer.svg" width="70" /></td>
      <td>Buffer</td>
      <td>Bounded temporary storage</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/time-series-window.svg" width="82" /></td>
      <td>Time-Series Window</td>
      <td>Temporally scoped buffer</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/queue.svg" width="70" /></td>
      <td>Queue</td>
      <td>Ordered waiting items</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/prioritized-queue.svg" width="70" /></td>
      <td>Prioritized Queue</td>
      <td>Queue governed by urgency or relevance policy</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/pending-queue.svg" width="70" /></td>
      <td>Pending Queue</td>
      <td>Delayed tasks or requests</td>
    </tr>
    <tr>
      <td align="center"><img src="/social-hri-framework/img/hml/semantic-object.svg" width="52" /></td>
      <td>Session Context</td>
      <td>Current interaction context or short-term memory</td>
    </tr>
  </tbody>
</table>

The exact drawing style may vary, but the semantic meaning should remain explicit.

---

# Relationship to HRI Design Patterns

Many HRI Design Patterns depend on state, memory, or queue structures.

| Pattern | State / Memory Structure |
|---|---|
| Tiered Semantic Cache | Semantic Cache |
| Adaptive Signature Learner | Time-Series Window |
| Context Novelty Extractor | Previous Unified Context |
| HRI_DB Handler | HRI_DB |
| Spatial Based Reasoning | HRI_DB + spatial object state |
| Consistency Evaluator & Updater | HRI_DB + fact validation |
| Query Social Handler | HRI_DB + Session Context |
| Deep Social Insight Extractor | HRI_DB updates |
| System Integrity & Agency Handler | Integrity state + Autonomy state |
| Task Prerequisite Resolver | Prioritized Queue + Pending Queue |
| Social Opportunity TPR | Pending Request Queue |
| Late-Binding Behavioral Choreographer | delayed request state + current context |

This page defines the vocabulary needed to read those patterns.

---

# Design Guidelines

## Do Not Use HRI_DB for Everything

Not every temporary value belongs in persistent memory.

Use session context or short-term memory for temporary dialogue state.

Use HRI_DB for facts, preferences, entities, and state that may matter beyond the immediate moment.

---

## Do Not Treat Cache as Truth

A cache stores reusable computation.

It should not be treated as the authoritative world model.

If a cached interpretation conflicts with current context or HRI_DB, the system should validate or invalidate it.

---

## Preserve Provenance

Stored facts should include source information whenever possible.

Example:

```json
{
  "fact": "Bob is in the kitchen",
  "source": "vision_tracker",
  "confidence": 0.86,
  "timestamp": "2026-05-11T12:34:01Z"
}
```

Provenance supports explainability and correction.

---

## Support Confidence Decay and Forgetting

Some facts become less reliable over time.

For example:

```text
Bob was in the kitchen 30 minutes ago.
```

may be less reliable than:

```text
Bob was detected in the kitchen 10 seconds ago.
```

HRI_DB implementations should support confidence decay, expiration, or reinforcement policies where appropriate.

---

## Use Pending Queues Carefully

Pending tasks should not live forever.

They should include:

- creation time
- reason for pending status
- required condition
- priority
- decay factor
- expiration policy
- re-evaluation trigger

This prevents outdated tasks from executing in the wrong context.

---

## Separate Session Context from Persistent Memory

Session context is useful for pronouns, dialogue continuity, and temporary assumptions.

Persistent memory is useful for stable facts, preferences, and world state.

Mixing them can cause stale or accidental assumptions to become long-term beliefs.

---

## Document Memory Side Effects

Any Semantic Cell that reads or writes memory should make that behavior explicit.

This is important for:

- debugging
- reproducibility
- safety review
- auditability
- explainability

---

## Prefer Human-Readable State

When possible, use readable structured formats.

This supports:

- human inspection
- operator correction
- LLM-assisted reasoning
- academic reproducibility
- safety audits

---

## Validate Conflicting Updates

A new fact should not silently overwrite a conflicting old fact.

Conflicts should be routed through a consistency mechanism, such as a Consistency Evaluator and Updater.

---

# Conclusion

State, Memory, and Queues allow HML architectures to reason across time.

They support memory, caching, delayed execution, asynchronous interaction, and fact-triggered resumption.

They also help the robot remain explainable by making its remembered state inspectable and its delayed tasks explicit.

In HML:

```text
HIFs carry semantic information.
Semantic Cells process semantic information.
State structures preserve semantic information across time.
Queues manage semantic work that cannot be completed immediately.
```

Together, these structures allow socially intelligent robots to move beyond immediate reaction and toward persistent, context-aware, and explainable interaction.


---

# End-to-End, RL, and SOCIAL Tradeoffs

Source file: `modern-ai/end-to-end-rl-and-social-tradeoffs.md`

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


---

# Foundation Models as HML Experts

Source file: `modern-ai/foundation-models-as-hml-experts.md`

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


---

# Intermediate Artifacts and Semantic Commitments

Source file: `modern-ai/intermediate-artifacts-and-semantic-commitments.md`

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


---

# Modern AI Integration Overview

Source file: `modern-ai/modern-ai-integration-overview.md`

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


---

# Practical Integration Patterns

Source file: `modern-ai/practical-integration-patterns.md`

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


---

# Semantic Responsibility Decoupling

Source file: `modern-ai/semantic-responsibility-decoupling.md`

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


---

# A-Adaptive Autonomy

Source file: `social-principles/a-adaptive-autonomy.md`

# A-Adaptive Autonomy

## Overview

A-Adaptive Autonomy is an architectural principle within the SOCIAL framework for Human-Robot Interaction (HRI). The principle states that a socially intelligent system should continuously adjust its level of autonomy according to context, capability, uncertainty, social expectations, safety constraints, and human preferences.

The goal is to prevent autonomy from being treated as a fixed property of the robot.

Instead, autonomy is modeled as a dynamic, interpretable, and context-sensitive state that can increase, decrease, pause, escalate, or request human support.

This principle is foundational for safe embodied AI, long-term human-robot collaboration, adjustable agency, explainable autonomy, and socially acceptable robotic behavior.

---

# Motivation

Human social systems naturally use adaptive autonomy.

People continuously adjust how independently they act based on:

- Confidence
- Responsibility
- Risk
- Social permission
- Physical ability
- Environmental uncertainty
- Available resources
- Norms and expectations
- Feedback from others

A child, assistant, colleague, driver, nurse, or soldier does not operate at one fixed autonomy level in every situation.

Robotic systems should follow the same principle.

Traditional autonomous systems often assume a rigid autonomy model:

- Fully manual
- Fully autonomous
- Fixed supervised mode
- Hard-coded fallback behavior

This creates several problems:

- Unsafe overconfidence
- Excessive dependency on humans
- Poor social judgment
- Lack of explainability
- Unclear responsibility boundaries
- Inability to recover gracefully from uncertainty
- Mismatch between robot behavior and human expectations

A-Adaptive Autonomy addresses these limitations by treating autonomy as a continuously regulated social and technical state.

---

# Core Principle

Autonomy should be adjusted dynamically according to context and system integrity.

Formally:

    Autonomy Level = f(Context, Confidence, Risk, Resources, Social State, Human Preference)

rather than:

    Autonomy Level = Fixed Mode

The system should continuously evaluate:

- What it can do
- What it should do
- What it is allowed to do
- What it is safe to do
- What it should ask before doing
- What it should refuse to do
- What should be delegated to a human

---

# Autonomy as a State

Within the SOCIAL framework, autonomy is represented as an explicit internal state rather than an implicit behavior.

An autonomy state may include:

- Current autonomy level
- Active constraints
- Confidence values
- Integrity scores
- Safety limits
- Human override status
- Task permissions
- Social permissions
- Escalation requirements

Example:

```json
{
  "autonomy_state": "supervised_execution",
  "confidence": 0.76,
  "risk_level": "medium",
  "battery_state": "sufficient",
  "human_override": false,
  "requires_confirmation": true,
  "reason": "uncertain object identity"
}
```

This makes autonomy inspectable, explainable, and adjustable.

---

# Autonomy Levels

A-Adaptive Autonomy can be implemented using multiple discrete or continuous autonomy levels.

A typical layered model may include:

| Level | Mode | Description |
|---|---|---|
| 0 | Disabled | The robot cannot act autonomously |
| 1 | Observe Only | The robot perceives and reports |
| 2 | Suggest | The robot recommends actions |
| 3 | Confirm Before Acting | The robot asks before execution |
| 4 | Supervised Execution | The robot acts while monitoring for intervention |
| 5 | Independent Execution | The robot acts independently within policy boundaries |
| 6 | Emergency Override | The robot may interrupt normal flow for safety |

The exact levels are domain-specific, but they should remain explicit and inspectable.

---

# Relationship to SIAH

The System Integrity & Agency Handler (SIAH) is a core mechanism for implementing Adaptive Autonomy.

SIAH continuously monitors:

- Battery
- CPU load
- Memory
- Sensor reliability
- Actuator health
- Communication status
- Internal anomaly signals
- Environmental risk
- Autonomy state

It then updates the HRI_DB with integrity scores and may issue high-priority HIFs such as:

- Emergency stop
- Autonomy reduction
- Human notification
- Refusal to execute
- Request for assistance

Example:

```text
Camera Occluded + Navigation Task Active
    ↓
Integrity Evaluation
    ↓
Autonomy Reduction
    ↓
Human Notification
```

The system does not merely fail silently; it changes its agency level and explains why.

---

# Relationship to HRI_DB

Adaptive Autonomy requires a transparent memory and policy layer.

The HRI_DB stores:

- Current autonomy level
- Safety policies
- User preferences
- Task permissions
- Social constraints
- Historical reliability
- Known failure modes
- Current uncertainty

This enables the robot to reason about autonomy using explicit facts rather than hidden procedural state.

Example:

```json
{
  "user": "Alice",
  "preference": "ask_before_entering_private_room",
  "policy": "privacy_boundary",
  "autonomy_effect": "confirmation_required"
}
```

This allows autonomy to be both personalized and auditable.

---

# Relationship to Interpretable Gates

Adaptive Autonomy is regulated through explicit gates.

Examples include:

| Gate | Autonomy Role |
|---|---|
| Safety Gate | Blocks unsafe autonomous execution |
| Integrity Gate | Reduces autonomy under system failure |
| Social Convention Gate | Restricts socially inappropriate actions |
| Opportunity Gate | Delays autonomous interaction until appropriate |
| Consistency Gate | Prevents actions based on contradictory facts |
| Escalation Gate | Requests stronger reasoning or human input |

Autonomy is therefore not a global switch, but the outcome of multiple interpretable gate evaluations.

---

# Human-in-the-Loop Regulation

A socially intelligent system should know when to involve a human.

The system may ask for help when:

- Confidence is low
- Risk is high
- Social ambiguity exists
- Instructions are incomplete
- Goals conflict
- A policy boundary is reached
- A safety-critical decision is required
- The user has requested confirmation-based behavior

Example:

```text
Instruction:
"Give him the medication"

Detected issue:
Target identity uncertain

Autonomy decision:
Do not execute independently

Robot response:
"Which person should receive the medication?"
```

This transforms uncertainty from failure into collaborative clarification.

---

# Socially Adaptive Autonomy

Autonomy should adapt not only to technical constraints, but also to social context.

Examples:

| Situation | Autonomy Adjustment |
|---|---|
| User is busy | Delay non-urgent request |
| User is distressed | Reduce initiative and increase reassurance |
| User is highly familiar | Allow more proactive behavior |
| Visitor is present | Apply stricter privacy policies |
| Child is nearby | Increase safety thresholds |
| Public environment | Reduce socially intrusive behaviors |

This ensures that autonomy remains socially acceptable rather than merely functionally correct.

---

# Resource-Aware Autonomy

Autonomy should also adapt to computational and physical resources.

When resources are limited, the system may:

- Reduce perception fidelity
- Switch to heuristic experts
- Delay low-priority tasks
- Request charging
- Avoid high-risk navigation
- Prefer local reasoning over cloud reasoning
- Defer expensive LLM calls

This is closely related to the Elastic Attention Governor (EAG), where perception and reasoning fidelity are adjusted according to social priority and available resources.

---

# Example

## Fixed Autonomy Failure

```text
Instruction:
"Bring me the bottle"

System state:
Battery low
Camera confidence poor
Multiple bottles detected

Fixed autonomous robot:
Attempts task anyway
```

This may lead to unsafe or socially inappropriate behavior.

---

## Adaptive Autonomy Response

```text
Instruction:
"Bring me the bottle"

System detects:
- Battery low
- Multiple bottle candidates
- Object identity uncertainty
- Task requires navigation

Autonomy adjustment:
- Reduce autonomy from independent execution to confirmation mode

Robot response:
"I see more than one bottle, and my battery is low. Which bottle do you mean, and should I continue now or charge first?"
```

The robot remains useful while avoiding unsafe overconfidence.

---

# Advantages

## Safety

The system reduces autonomy when risk increases.

## Trust

Humans can understand why the robot acts, waits, asks, or refuses.

## Robustness

Failures become recoverable state transitions rather than catastrophic breakdowns.

## Personalization

Autonomy can adapt to user preferences and social norms.

## Explainability

Autonomy decisions become inspectable through explicit state and gate history.

## Long-Term Collaboration

The robot can gradually earn, lose, and renegotiate autonomy over time.

---

# Relation to Existing Paradigms

A-Adaptive Autonomy intersects with several existing paradigms:

| Paradigm | Relation |
|---|---|
| Adjustable Autonomy | Dynamic control allocation |
| Shared Autonomy | Human and robot jointly control behavior |
| Supervisory Control | Human oversight of autonomous execution |
| Human-in-the-Loop AI | Human involvement under uncertainty |
| Explainable AI (XAI) | Transparent autonomy decisions |
| Safety-Critical Systems | Risk-based mode switching |
| Reinforcement Learning | Policy adaptation through experience |

However, A-Adaptive Autonomy differs by focusing specifically on:

- Socially situated autonomy
- Human-readable agency state
- Context-sensitive permission boundaries
- Embodied safety and integrity
- Long-term social trust

---

# Design Implications

Systems implementing A-Adaptive Autonomy should avoid:

- Fixed autonomy modes
- Hidden agency changes
- Overconfident autonomous execution
- Silent failure
- Unexplained refusal
- Direct action under social ambiguity
- Ignoring resource and integrity limitations

Instead, systems should prefer:

- Explicit autonomy states
- Inspectable agency policies
- Human-confirmation modes
- Gate-regulated execution
- Integrity-aware autonomy adjustment
- Socially sensitive initiative
- Clear explanations for autonomy changes

---

# SOCIAL Perspective

Within the SOCIAL framework, **A-Adaptive Autonomy** supports all other principles by treating autonomy as an explicit, inspectable, and context-sensitive state rather than as a fixed operating mode.

- **S — Separated Contexts**: Adaptive autonomy requires evidence from several separated domains. Human availability, scene risk, robot integrity, task readiness, memory state, social context, and safety constraints should remain distinguishable so the system can explain which context caused an autonomy change.

- **O — Open Declarative**: Autonomy should be represented declaratively. The system should expose its current autonomy level, active constraints, confidence, risk level, required permissions, human override status, and reason for increasing, reducing, pausing, or delegating autonomy.

- **C — Clear Cognition**: Autonomy decisions should emerge from clear cognitive stages. The robot should be able to trace whether an autonomy adjustment came from perception uncertainty, semantic ambiguity, missing prerequisites, social timing, safety risk, resource limits, or policy constraints.

- **I — Interpretable Gates**: Autonomy changes should pass through explicit gate roles. Gates regulate when the robot may act independently, when it must ask for confirmation, when it should escalate to a human, when it should reduce autonomy, and when it must stop.

- **A — Adaptive Autonomy**: This is the primary principle. The system should continuously regulate agency according to context, confidence, risk, resources, social expectations, user preferences, and policy boundaries.

- **L — Layered Validation**: Adaptive autonomy depends on validation across multiple layers. Perceptual reliability, semantic certainty, task readiness, social acceptability, safety, resource availability, and integrity state all contribute to the final autonomy level.

In this sense, A-Adaptive Autonomy provides the agency-regulation discipline that allows SOCIAL architectures to remain useful without becoming overconfident, intrusive, unsafe, or opaque.

---

# Future Research Directions

Potential future research areas include:

- Formal models of socially adaptive autonomy
- Human-readable autonomy contracts
- Autonomy calibration metrics
- Learning user-specific autonomy preferences
- Multi-user autonomy negotiation
- Risk-aware LLM orchestration
- Trust-aware autonomy adjustment
- Cross-robot autonomy transfer
- Explainable refusal mechanisms

---

# Conclusion

A-Adaptive Autonomy provides a dynamic agency foundation for socially intelligent embodied systems.

By representing autonomy as an explicit, context-sensitive, and gate-regulated state, the architecture achieves:

- Safer autonomous behavior
- Better human trust
- Improved explainability
- Stronger personalization
- Graceful degradation
- More socially appropriate initiative

The principle moves HRI systems away from fixed autonomy modes toward adaptive, inspectable, and socially negotiated agency.


---

# C-Clear Cognition

Source file: `social-principles/c-clear-cognition.md`

# C-Clear Cognition

## Overview

C-Clear Cognition is an architectural principle within the SOCIAL framework for Human-Robot Interaction (HRI). The principle states that socially intelligent systems should maintain interpretable, structured, and traceable cognitive processes rather than relying on opaque monolithic reasoning pipelines.

The goal is to ensure that perception, reasoning, memory, planning, and decision-making remain semantically understandable both to developers and to humans interacting with the system.

Instead of treating cognition as an inseparable black-box process, the architecture decomposes cognition into explicit semantic stages connected through transparent interaction frames.

This principle is foundational for Explainable AI (XAI), safe autonomy, trustworthy HRI, and scalable embodied cognition.

---

# Motivation

Human cognition appears coherent because humans can usually explain:

- What they perceived
- What changed
- What they inferred
- What they intend
- Why they acted
- What uncertainty exists

Traditional AI systems often lack this clarity.

Modern end-to-end architectures frequently produce:

- Opaque reasoning chains
- Non-traceable decisions
- Hidden assumptions
- Hallucinated context fusion
- Unclear responsibility boundaries
- Unverifiable autonomous behavior

These limitations become critical in social robotics where humans must understand and predict system behavior.

C-Clear Cognition addresses these limitations by enforcing explicit cognitive decomposition and semantic traceability.

---

# Core Principle

Cognition should be decomposed into semantically meaningful stages with observable transitions.

Formally:

    Cognition = Perception
              → Interpretation
              → Context Integration
              → Reasoning
              → Validation
              → Action Preparation
              → Execution

rather than:

    Cognition = Opaque End-to-End Mapping

Each stage should expose:

- Inputs
- Outputs
- Assumptions
- Confidence levels
- Applied policies
- Context dependencies
- Escalation history

---

# Cognitive Transparency

Within the SOCIAL framework, cognition is represented as transformations over HIFs (HRI Interaction Frames).

Each transformation preserves semantic traceability.

Example:

```text
Raw Audio
    ↓
Speech-to-Text ST
    ↓
Intent Extraction ST
    ↓
Consistency Validation ES
    ↓
Task Resolution TPR
    ↓
Social Validation SCV
    ↓
Behavioral Synthesis SAS
```

This creates an observable reasoning pipeline rather than hidden internal cognition.

---

# Relationship to HIF

HIFs act as the semantic carriers of cognition.

Each HIF may contain:

- Raw sensory data
- Semantic annotations
- Context references
- Confidence scores
- Processing lineage
- Temporal synchronization metadata
- Expert history

This allows every cognitive decision to remain inspectable throughout the system lifecycle.

---

# Contextual Clarity

Cognition remains clear only if contextual domains remain structured and separated.

The SOCIAL framework therefore combines:

- Context isolation
- Controlled synchronization
- Delta-based updates
- Explicit reasoning transitions

This prevents:

- Semantic contamination
- Context hallucination
- Ambiguous causal chains
- Cross-modal confusion

---

# Example

## Opaque Reasoning

```text
Input:
"Bring this to Bob"

Output:
Robot starts moving
```

The reasoning chain remains hidden.

---

## Clear Cognitive Pipeline

```text
Speech Intent:
- Action: Deliver

Spatial Resolution:
- Object identified via pointing gesture

Missing Information Detection:
- Bob location unavailable

Query Generation:
- "Where is Bob?"

Context Update:
- Bob located in kitchen

Task Resolution:
- Delivery path planned

Social Validation:
- Safe and socially acceptable

Execution:
- Begin navigation
```

Each transition remains explainable and auditable.

---

# Relationship to Novelty Extraction

The Context Novelty Extractor (CNE) is a core mechanism supporting cognitive clarity.

Rather than reprocessing the entire world continuously, the architecture isolates:

    Δ Context

Only meaningful changes propagate through higher cognitive layers.

Benefits include:

- Reduced cognitive overload
- Better explainability
- Event-driven reasoning
- Improved responsiveness
- Stable social presence

The system therefore reasons primarily about change rather than raw sensory volume.

---

# Relationship to Incremental Intelligence

C-Clear Cognition supports gradual reasoning escalation.

Simple situations should remain simple.

Example:

```text
Heuristic
    ↓
Cache Lookup
    ↓
Symbolic Reasoning
    ↓
LLM Escalation
```

This creates:

- Resource-aware cognition
- Explainable escalation
- Predictable latency
- Reduced hallucination risk
- Graceful degradation

The system exposes not only the answer, but also how much reasoning was required.

---

# Declarative Cognitive Policies

Cognitive transitions are governed by explicit semantic policies.

Examples include:

| Policy Type | Purpose |
|---|---|
| Synchronization Policies | Maintain temporal coherence |
| Escalation Policies | Control reasoning depth |
| Validation Policies | Detect inconsistencies |
| Safety Policies | Prevent unsafe cognition |
| Social Policies | Preserve etiquette and tact |
| Resource Policies | Regulate computational load |

This transforms cognition into a policy-driven semantic architecture.

---

# Advantages

## Explainability

Every cognitive stage remains inspectable.

## Debuggability

Failures can be isolated to specific reasoning transitions.

## Safety

Unsafe reasoning paths become observable.

## Scalability

Independent cognitive modules can evolve separately.

## Human Trust

Transparent cognition improves predictability and acceptance.

## Resource Efficiency

Reasoning complexity adapts dynamically to context.

---

# Relation to Existing Paradigms

C-Clear Cognition intersects with several existing paradigms:

| Paradigm | Relation |
|---|---|
| Cognitive Architectures | Structured cognitive decomposition |
| Explainable AI (XAI) | Traceable reasoning |
| Event-Driven Systems | Delta-based cognition |
| Hybrid AI | Symbolic + neural integration |
| Blackboard Systems | Shared semantic coordination |
| Agentic AI | Explicit planning pipelines |

However, C-Clear Cognition differs by focusing specifically on:

- Social explainability
- Embodied interaction
- Real-time contextual cognition
- Human-facing transparency
- Synchronization-aware reasoning

---

# Design Implications

Systems implementing C-Clear Cognition should avoid:

- Monolithic reasoning pipelines
- Hidden cognitive transitions
- Implicit context fusion
- Non-traceable LLM outputs
- Global opaque state mutation

Instead, systems should prefer:

- Explicit semantic stages
- Traceable cognitive pipelines
- HIF-based reasoning
- Context isolation
- Declarative validation layers
- Observable escalation mechanisms

---

# SOCIAL Perspective

Within the SOCIAL framework, **C-Clear Cognition** supports all other principles by making perception, interpretation, reasoning, validation, and action preparation visible as traceable semantic stages rather than opaque end-to-end behavior.

- **S — Separated Contexts**: Clear cognition depends on knowing which context produced which information. By keeping human, scene, robot, task, memory, social, and safety contexts distinct, the system can explain how each context contributed to a decision.

- **O — Open Declarative**: Cognitive clarity requires intermediate reasoning products to be represented explicitly. HIF properties, confidence values, assumptions, validation results, escalation traces, and HRI_DB updates should be visible as declarative artifacts.

- **C — Clear Cognition**: This is the primary principle. The system should decompose cognition into meaningful stages such as perception, interpretation, grounding, context integration, reasoning, validation, action preparation, and execution readiness.

- **I — Interpretable Gates**: Gates become easier to understand when they sit between clear cognitive stages. A gate can explain not only its outcome, but also which stage produced the candidate HIF and which next stage was authorized or blocked.

- **A — Adaptive Autonomy**: Autonomy decisions require clear cognitive evidence. The robot should be able to explain whether autonomy was increased, reduced, paused, or delegated because of low confidence, missing context, social ambiguity, safety risk, or resource limitations.

- **L — Layered Validation**: Layered validation depends on a clear cognitive pipeline. Each validation layer should know what it is validating: perception reliability, semantic interpretation, context freshness, factual consistency, social acceptability, safety, or autonomy readiness.

In this sense, C-Clear Cognition provides the traceability discipline that allows SOCIAL architectures to explain how raw interaction signals become validated, socially meaningful, and action-ready semantic states.

---

# Future Research Directions

Potential future research areas include:

- Self-explaining cognitive pipelines
- Formal reasoning trace verification
- Cognitive transparency metrics
- Human-readable agent introspection
- Context-aware cognitive compression
- Multi-agent cognitive synchronization
- Explainable embodied planning
- Hybrid symbolic-generative cognition

---

# Conclusion

C-Clear Cognition provides a transparent and traceable foundation for socially intelligent embodied systems.

By decomposing cognition into explicit semantic stages, the architecture achieves:

- Higher explainability
- Safer autonomy
- Better debugging capabilities
- Improved social trust
- Stronger contextual consistency
- More controllable AI reasoning

The principle moves HRI systems away from opaque monolithic intelligence toward interpretable socially-aware cognitive ecosystems.


---

# I-Interpretable Gates

Source file: `social-principles/i-interpretable-gates.md`

# I-Interpretable Gates

## Overview

I-Interpretable Gates is an architectural principle within the SOCIAL framework for Human-Robot Interaction (HRI). The principle states that transitions between cognitive, perceptual, behavioral, and autonomous stages should occur through explicit, inspectable, and semantically meaningful gating mechanisms.

The goal is to ensure that system decisions are not only correct, but also understandable, auditable, controllable, and socially predictable.

Instead of allowing uncontrolled implicit transitions between subsystems, the architecture introduces interpretable semantic gates that regulate information flow, escalation, synchronization, execution, and social acceptability.

This principle is foundational for explainable autonomy, safe embodied AI, adjustable agency, and trustworthy human-robot interaction.

---

# Motivation

Human social systems rely heavily on explicit gates.

Examples include:

- Permission requests
- Turn-taking
- Social validation
- Safety checks
- Ethical constraints
- Resource allocation
- Escalation procedures
- Clarification mechanisms

Humans rarely transition directly from perception to action without intermediate validation layers.

Traditional AI systems often violate this principle by allowing:

- Hidden state transitions
- Opaque reasoning escalation
- Implicit action triggering
- Uncontrolled context fusion
- Non-traceable policy decisions
- Unsafe autonomous execution

These problems become critical in embodied social agents operating in human environments.

I-Interpretable Gates addresses these limitations by making all critical transitions explicit semantic operations.

---

# Core Principle

Every important transition in the system should pass through an explicit interpretable gate.

Formally:

    State_A
        ↓
    Semantic Gate λ
        ↓
    State_B

rather than:

    State_A → State_B

The gate itself should expose:

- Why the transition occurred
- Which policy authorized it
- Which constraints were evaluated
- Which confidence thresholds were applied
- Which experts participated
- Which alternatives were rejected

---

# Gate-Centric Architecture

Within the SOCIAL framework, gates are first-class architectural entities.

Core gate types include:

| Gate Type | Purpose |
|---|---|
| Sync Gate (SG) | Temporal synchronization |
| Escalation Switch (ES) | Expert escalation |
| Policy Gate (PG) | Rule enforcement |
| Social Acceptance Gate | Etiquette validation |
| Novelty Gate | Change detection |
| Opportunity Gate | Timing validation |
| Consistency Gate | Fact validation |
| Safety Gate | Risk prevention |

The architecture therefore becomes a network of semantically meaningful transitions.

---

# Relationship to HIF

HIFs (HRI Interaction Frames) are the semantic payloads flowing through gates.

Each gate may:

- Enrich the HIF
- Filter the HIF
- Synchronize HIF streams
- Validate semantic consistency
- Escalate reasoning depth
- Block unsafe actions
- Delay execution
- Trigger clarification

Importantly, the gate history itself remains traceable.

Example:

```text
Raw Speech HIF
    ↓
Intent Extraction Gate
    ↓
Consistency Gate
    ↓
Task Resolution Gate
    ↓
Social Acceptance Gate
    ↓
Behavioral Synthesis Gate
    ↓
Execution
```

This creates observable semantic transitions rather than hidden procedural jumps.

---

# Synchronization Gates

Sync Gates (SG) enforce temporal and semantic coherence.

Example:

```text
Pointing Gesture + Speech
    ↓
Temporal Alignment Gate
    ↓
Unified Instruction
```

Without synchronization gates, the system risks:

- Temporal hallucinations
- Semantic ghosting
- Cross-modal mismatch
- Incorrect intent binding

The gate therefore acts as a semantic coherence validator.

---

# Escalation Gates

Escalation Switches (ES) regulate reasoning depth.

Example:

```text
Heuristic Confidence Low
    ↓
Escalation Gate
    ↓
LLM Reasoning
```

The gate exposes:

- Why escalation occurred
- Which expert was selected
- Resource considerations
- Confidence thresholds
- Fallback behavior

This transforms escalation from hidden implementation detail into observable cognitive structure.

---

# Social Gates

Socially intelligent systems require explicit social validation layers.

Example:

```text
Executable Instruction
    ↓
Social Convention Gate
    ↓
Socially Acceptable Action
```

The gate evaluates:

- Politeness
- Personal space
- Timing appropriateness
- Social norms
- Cultural heuristics
- Intrusiveness
- Interaction fatigue

This separates:

- What is physically possible
from:
- What is socially acceptable

---

# Opportunity Gates

Opportunity Gates regulate social timing.

Example:

```text
Interaction Request
    ↓
Social Opportunity Gate
    ↓
Executable Social Action
```

The gate evaluates:

- Person availability
- Attention state
- Engagement level
- Environmental stability
- Social rhythm
- Context appropriateness

This prevents socially disruptive behavior.

---

# Safety and Integrity Gates

The SOCIAL framework treats safety as an explicit semantic gating process.

Examples include:

- Emergency stop validation
- Integrity score monitoring
- Resource exhaustion prevention
- Autonomy restriction
- Sensor anomaly detection

The SIAH (System Integrity & Agency Handler) acts as a high-priority integrity gating layer.

Example:

```text
Low Battery + Unsafe Terrain
    ↓
Safety Gate
    ↓
Autonomy Reduction
```

---

# Declarative Gate Policies

Gates are governed by declarative semantic policies.

Examples:

| Policy | Purpose |
|---|---|
| Confidence Thresholds | Control escalation |
| Synchronization Windows | Align modalities |
| Social Heuristics | Preserve etiquette |
| Safety Constraints | Prevent dangerous behavior |
| Resource Policies | Maintain responsiveness |
| Ethical Constraints | Restrict harmful actions |

This allows gate behavior to remain:

- Inspectable
- Replaceable
- Tunable
- Learnable
- Context-dependent

---

# Advantages

## Explainability

Every transition becomes understandable.

## Safety

Unsafe transitions can be blocked explicitly.

## Predictability

Humans can anticipate system behavior.

## Modularity

Gate policies remain independently configurable.

## Social Fluency

Behavioral transitions become socially coherent.

## Resource Efficiency

Expensive reasoning activates only when justified.

---

# Relation to Existing Paradigms

I-Interpretable Gates intersects with several existing paradigms:

| Paradigm | Relation |
|---|---|
| Middleware Architectures | Controlled communication layers |
| Finite State Machines | Explicit transition logic |
| Rule Engines | Policy-driven decisions |
| Cognitive Architectures | Structured reasoning flow |
| Hybrid AI | Controlled symbolic-neural integration |
| Event-Driven Systems | Conditional activation |

However, I-Interpretable Gates differs by focusing specifically on:

- Social transparency
- Embodied interaction timing
- Semantic synchronization
- Human-readable autonomy transitions
- Explainable escalation

---

# Design Implications

Systems implementing I-Interpretable Gates should avoid:

- Implicit subsystem transitions
- Hidden reasoning escalation
- Direct perception-to-action pipelines
- Opaque autonomy changes
- Untraceable behavioral activation

Instead, systems should prefer:

- Explicit semantic gates
- Traceable transition histories
- Policy-driven gating
- Observable escalation logic
- Synchronization-aware processing
- Social validation layers

---

# SOCIAL Perspective

Within the SOCIAL framework, **I-Interpretable Gates** supports all other principles by making transitions, validations, escalations, synchronizations, and autonomy changes explicit semantic decisions rather than hidden control flow.

- **S — Separated Contexts**: Separated contexts require controlled bridges between domains. Interpretable gates define when human context, scene context, robot context, memory context, task context, social context, or safety context may synchronize, merge, or influence one another.

- **O — Open Declarative**: A gate is interpretable only when its policy, input state, thresholds, assumptions, and outcome are represented declaratively. Gate decisions such as `pass`, `modify`, `delay`, `block`, `clarify`, `escalate`, `reduce_autonomy`, or `emergency_stop` should be visible as semantic artifacts.

- **C — Clear Cognition**: Gates clarify cognitive transitions. They mark where the system moves from perception to interpretation, from interpretation to validation, from validation to task readiness, and from task readiness to execution.

- **I — Interpretable Gates**: This is the primary principle. Critical transitions should pass through explicit gate roles whose decision logic, policy basis, confidence assumptions, and output branches can be inspected and explained.

- **A — Adaptive Autonomy**: Autonomy changes should occur through interpretable gates rather than hidden mode switches. A robot should be able to explain why it acted independently, requested confirmation, reduced autonomy, escalated to a human, or stopped execution.

- **L — Layered Validation**: Each validation layer can be modeled as a gate or gate-like role. Interpretable gates make validation outcomes visible across perception, semantics, consistency, social acceptability, safety, resources, and autonomy.

In this sense, I-Interpretable Gates provides the decision-boundary discipline that makes SOCIAL architectures controllable, auditable, and safe to operate around humans.

---

# Future Research Directions

Potential future research areas include:

- Learnable semantic gating
- Formal verification of gate safety
- Adaptive social gate tuning
- LLM-assisted gate arbitration
- Human-editable gate policies
- Distributed multi-agent gating
- Probabilistic synchronization gates
- Ethical gate orchestration

---

# Conclusion

I-Interpretable Gates provides a transparent transition-management foundation for socially intelligent embodied systems.

By enforcing explicit semantic gates between cognitive and behavioral stages, the architecture achieves:

- Higher explainability
- Safer autonomy
- Better social predictability
- Improved debugging capabilities
- Stronger contextual consistency
- More controllable AI behavior

The principle moves HRI systems away from opaque uncontrolled transitions toward semantically regulated socially-aware cognitive infrastructures.


---

# L-Layered Validation

Source file: `social-principles/l-layered-validation.md`

# L-Layered Validation

## Overview

L-Layered Validation is an architectural principle within the SOCIAL framework for Human-Robot Interaction (HRI). The principle states that socially intelligent systems should validate perception, interpretation, memory, planning, and action through multiple explicit layers rather than relying on a single correctness check.

The goal is to ensure that robot behavior is not merely technically executable, but also factually grounded, contextually consistent, socially acceptable, safe, and aligned with the current autonomy state.

Instead of treating validation as a final Boolean test before execution, the architecture distributes validation across the full cognitive and behavioral pipeline.

This principle is foundational for safe embodied AI, explainable autonomy, reliable social interaction, and long-term trust in human-robot systems.

---

# Motivation

Human social behavior is validated through many layers before action.

People implicitly check:

- Is this fact true?
- Did I understand correctly?
- Is the timing appropriate?
- Is the action safe?
- Is it socially acceptable?
- Is it my responsibility?
- Do I need permission?
- Is the context still valid?
- Has something changed since I decided?

Robotic systems should follow the same principle.

Traditional robotic architectures often apply validation too narrowly:

- Validate only sensor data
- Validate only physical feasibility
- Validate only task constraints
- Validate only final execution commands
- Trust LLM outputs without independent checking
- Treat social acceptability as an afterthought

This creates brittle behavior.

A robot may execute a physically valid action that is socially inappropriate, or follow a semantically valid instruction based on outdated context.

L-Layered Validation addresses these limitations by enforcing validation across multiple semantic layers.

---

# Core Principle

Every critical behavior should pass through multiple validation layers before execution.

Formally:

    Candidate Action
        ↓
    Perceptual Validation
        ↓
    Semantic Validation
        ↓
    Contextual Validation
        ↓
    Consistency Validation
        ↓
    Social Validation
        ↓
    Safety Validation
        ↓
    Autonomy Validation
        ↓
    Executable Action

rather than:

    Candidate Action → Execute

Each layer evaluates a different class of risk.

---

# Validation Layers

A SOCIAL-based system may include the following validation layers:

| Layer | Question |
|---|---|
| Perceptual Validation | Is the sensory evidence reliable? |
| Semantic Validation | Was the meaning interpreted correctly? |
| Contextual Validation | Is the context current and relevant? |
| Consistency Validation | Does this contradict known facts? |
| Spatial Validation | Is the referenced entity correctly resolved? |
| Task Validation | Are all prerequisites satisfied? |
| Social Validation | Is the action socially acceptable? |
| Safety Validation | Is the action physically safe? |
| Autonomy Validation | Is the robot allowed to act at this level? |
| Resource Validation | Does the system have enough resources? |

The exact layers are domain-specific, but the architecture should keep them explicit and inspectable.

---

# Relationship to HIF

HIFs (HRI Interaction Frames) carry semantic content through the validation pipeline.

Each validation layer may:

- Add confidence scores
- Add warnings
- Attach policy decisions
- Mark missing information
- Request clarification
- Block execution
- Reduce autonomy
- Trigger escalation
- Update the HRI_DB

Example:

```text
Instruction HIF
    ↓
Spatial Resolution
    ↓
Consistency Evaluation
    ↓
Task Prerequisite Resolver
    ↓
Social Convention Validator
    ↓
System Integrity and Agency Handler
    ↓
Executable HIF
```

The HIF therefore accumulates validation history as it moves toward execution.

---

# Perceptual Validation

Perceptual validation checks whether the sensory evidence is reliable enough for downstream reasoning.

Examples include:

- Object detection confidence
- Speech recognition confidence
- Gesture recognition confidence
- Person tracking stability
- Sensor availability
- Temporal alignment quality
- Cross-modal agreement

Example:

```text
Detected object: "bottle"
Confidence: 0.61
Policy: confidence below execution threshold
Decision: request clarification or escalate
```

This prevents uncertain perception from becoming overconfident behavior.

---

# Semantic Validation

Semantic validation checks whether the interpreted meaning is coherent.

Examples include:

- Intent classification confidence
- Ambiguous reference detection
- Contradictory instruction detection
- Missing parameter detection
- LLM output validation
- Symbol grounding verification

Example:

```text
Instruction:
"Bring that to Bob"

Detected missing slots:
- object identity uncertain
- Bob location unknown

Decision:
route to Task Prerequisite Resolver
```

This prevents the system from executing incomplete or ambiguous instructions.

---

# Contextual Validation

Contextual validation checks whether the action is still appropriate in the current context.

Because HRI is dynamic, a valid action can become invalid when the world changes.

Examples:

- Person moved away
- Object location changed
- Social window closed
- Robot state changed
- User attention shifted
- New obstacle appeared
- Task expired

Example:

```text
Pending request:
"Ask Bob for help"

Context update:
Bob is now in a phone call

Decision:
keep request pending
```

This connects layered validation to context continuity and late binding.

---

# Consistency Validation

Consistency validation checks whether new facts or intended actions contradict the HRI_DB.

This is implemented through mechanisms such as the Consistency Evaluator and Updater (CEU).

Examples:

- Two people assigned the same identity
- Object location conflicts with map state
- User statement contradicts previous reliable fact
- Instruction conflicts with stored preference
- Task target no longer exists

Example:

```text
New fact:
"Bob is in the kitchen"

Existing fact:
"Bob left the building"

Decision:
ask for clarification or update based on confidence and source reliability
```

This prevents silent corruption of the robot's world model.

---

# Spatial Validation

Spatial validation resolves references grounded in geometry, perception, and social context.

It is especially important for instructions involving:

- "this"
- "that"
- "here"
- "there"
- "behind me"
- "closest to you"
- pointing gestures
- gaze direction
- room-level references

Example:

```text
Instruction:
"Bring me that bottle"

Spatial evidence:
- pointing vector intersects two bottle candidates

Decision:
ask clarification before execution
```

Spatial validation prevents incorrect reference binding.

---

# Task Validation

Task validation checks whether an instruction is executable.

This is implemented through the Task Prerequisite Resolver (TPR).

The system verifies:

- Required objects are known
- Required people are located
- Destination is reachable
- Timing constraints are satisfied
- Required tools are available
- Task has not expired
- Dependencies are complete

If prerequisites are missing, the task is moved to a pending queue.

Example:

```text
Task:
Deliver bottle to Bob

Missing prerequisite:
Bob location unknown

Decision:
query HRI_DB or ask user
```

This allows the robot to hold incomplete goals rather than fail immediately.

---

# Social Validation

Social validation checks whether a technically executable action is appropriate in the current social context.

This is implemented through mechanisms such as the Social Convention Validator (SCV).

Examples:

- Avoid interrupting conversations
- Preserve personal space
- Avoid shouting in quiet environments
- Respect privacy boundaries
- Adapt politeness level
- Avoid excessive initiative
- Consider user fatigue

Example:

```text
Action:
Announce reminder loudly

Scene:
Public waiting room

Decision:
lower volume or use private notification
```

This separates physical possibility from social acceptability.

---

# Safety and Integrity Validation

Safety validation checks whether the system can execute the action without unacceptable physical or operational risk.

The System Integrity & Agency Handler (SIAH) contributes by monitoring:

- Battery
- CPU load
- Memory
- Sensor health
- Actuator health
- Anomaly signals
- Navigation risk
- Autonomy state

Example:

```text
Navigation task:
Bring medicine to user

System state:
Low battery + unreliable localization

Decision:
pause task, notify user, reduce autonomy
```

Safety validation has priority over lower-level behavioral goals.

---

# Autonomy Validation

Autonomy validation determines whether the robot is permitted to execute independently.

The decision may depend on:

- Current autonomy level
- Risk level
- Confidence
- User preferences
- Policy constraints
- Social setting
- Safety state
- Regulatory requirements

Example:

```text
Action:
Enter private room

Policy:
Ask before entering private spaces

Decision:
request permission before acting
```

This prevents the robot from overstepping its agency boundaries.

---

# Layered Validation and Late Binding

Layered validation works best when behavior is synthesized late.

The system should avoid fully committing to wording, movement, timing, and execution before the current context is validated.

Example:

```text
Intent:
Ask Bob for help

Validation:
- Bob available?
- Context still appropriate?
- Request still relevant?
- Social window open?
- Robot allowed to interrupt?

Only then:
Generate final wording and behavior style
```

This prevents behavioral obsolescence.

---

# Validation Outcomes

A validation layer may produce several outcomes:

| Outcome | Meaning |
|---|---|
| Pass | Continue to next layer |
| Enrich | Add semantic information |
| Delay | Move to pending queue |
| Escalate | Use stronger expert or LLM |
| Clarify | Ask human for missing information |
| Modify | Adapt the action |
| Reduce Autonomy | Require confirmation or supervision |
| Reject | Block execution |
| Emergency Stop | Interrupt all lower-priority behavior |

Validation is therefore a semantic control process, not merely a yes/no function.

---

# Advantages

## Safety

Multiple independent checks reduce the chance of unsafe behavior.

## Trust

Humans can understand why the robot acted, waited, asked, modified, or refused.

## Robustness

Failure at one layer does not necessarily collapse the interaction.

## Explainability

Each validation step becomes part of the system's reasoning trace.

## Social Fluency

Actions are validated against social expectations, not only technical feasibility.

## Adaptability

Validation policies can change across users, cultures, environments, and domains.

---

# Relation to Existing Paradigms

L-Layered Validation intersects with several existing paradigms:

| Paradigm | Relation |
|---|---|
| Safety-Critical Systems | Multi-layer risk checks |
| Defense in Depth | Independent validation barriers |
| Runtime Verification | Continuous execution monitoring |
| Explainable AI (XAI) | Traceable decision validation |
| Cognitive Architectures | Stage-based reasoning |
| Hybrid AI | Symbolic validation over neural outputs |
| Human-in-the-Loop AI | Clarification under uncertainty |

However, L-Layered Validation differs by focusing specifically on:

- Social validity
- Embodied interaction
- Dynamic context changes
- Explainable autonomy
- Multi-layer semantic readiness
- Human-facing trust and negotiation

---

# Design Implications

Systems implementing L-Layered Validation should avoid:

- Single final validation checks
- Direct LLM-to-action pipelines
- Treating physical feasibility as sufficient
- Ignoring social timing
- Executing under unresolved ambiguity
- Silent fact overwrites
- Hidden autonomy changes
- Untraceable refusal decisions

Instead, systems should prefer:

- Explicit validation layers
- HIF-based validation history
- Policy-driven semantic gates
- Clarification under uncertainty
- Pending queues for incomplete tasks
- Safety-first autonomy adjustment
- Late-bound behavioral synthesis
- Explainable rejection and modification

---

# SOCIAL Perspective

Within the SOCIAL framework, **L-Layered Validation** supports all other principles by ensuring that perception, interpretation, memory, planning, autonomy, and execution are checked through multiple explicit validation layers rather than through a single final approval step.

- **S — Separated Contexts**: Layered validation benefits from separated context domains. Perceptual validation, scene validation, robot-state validation, task validation, social validation, memory validation, and safety validation can each operate over the context most relevant to its responsibility.

- **O — Open Declarative**: Validation requires explicit artifacts to inspect. Confidence values, assumptions, constraints, policies, HRI_DB facts, pending task state, autonomy state, and validation outcomes should be represented declaratively so that validation does not remain hidden in code.

- **C — Clear Cognition**: Layered validation makes the cognitive pipeline clearer by showing what was validated, where it was validated, and why the system continued, delayed, modified, escalated, or blocked a candidate behavior.

- **I — Interpretable Gates**: Each validation layer may produce a gate-like decision such as `pass`, `modify`, `delay`, `clarify`, `escalate`, `reduce_autonomy`, `block`, or `emergency_stop`. Interpretable gates make these validation decisions visible and auditable.

- **A — Adaptive Autonomy**: Autonomy should be adjusted according to validation results. Low confidence, unresolved ambiguity, social risk, safety risk, missing prerequisites, or degraded system integrity may reduce autonomy, require confirmation, trigger escalation, or stop execution.

- **L — Layered Validation**: This is the primary principle. Critical behavior should be validated across multiple semantic layers: perception, interpretation, context freshness, factual consistency, spatial grounding, task readiness, social acceptability, safety, resources, and autonomy.

In this sense, L-Layered Validation provides the verification discipline that prevents uncertain, stale, inconsistent, socially inappropriate, unsafe, or unauthorized information from becoming embodied action.

---

# Future Research Directions

Potential future research areas include:

- Formal verification of layered validation chains
- Social validation benchmarks
- Runtime monitors for LLM-generated actions
- Human-readable validation traces
- Culture-specific validation policy libraries
- Adaptive validation thresholds
- Validation-aware task planning
- Multi-user conflict validation
- Quantitative metrics for social acceptability
- Certification frameworks for embodied AI validation

---

# Conclusion

L-Layered Validation provides a multi-stage trust and safety foundation for socially intelligent embodied systems.

By validating perception, semantics, context, consistency, task readiness, social acceptability, safety, resources, and autonomy, the architecture achieves:

- Safer behavior
- Higher explainability
- Better social reliability
- Stronger human trust
- Robust handling of ambiguity
- More controllable autonomous execution

The principle moves HRI systems away from single-point correctness checks toward layered, interpretable, and socially aware validation infrastructures.


---

# O-Open Declarative

Source file: `social-principles/o-open-declarative.md`

# O-Open Declarative

## Overview

O-Open Declarative is an architectural principle within the SOCIAL framework for Human-Robot Interaction (HRI). The principle states that socially intelligent systems should expose their reasoning, intentions, constraints, and behavioral policies through transparent declarative structures rather than opaque procedural execution.

The goal is to transform robotic systems from black-box reactive machines into inspectable, explainable, and socially negotiable agents.

Instead of embedding behavior exclusively inside hidden code paths, the architecture promotes explicit semantic representations that can be queried, modified, validated, synchronized, and socially interpreted.

This principle is foundational for Explainable HRI, adaptive autonomy, collaborative debugging, and long-term trust between humans and embodied AI systems.

---

# Motivation

Human social interaction relies heavily on shared declarative understanding.

Humans continuously communicate:

- Intentions
- Expectations
- Rules
- Constraints
- Social commitments
- Beliefs
- Uncertainty
- Permissions
- Responsibilities

Traditional robotic systems often hide these structures internally inside procedural logic, state machines, or neural networks.

This creates several problems:

- Low explainability
- Difficult debugging
- Poor human trust
- Hidden policy conflicts
- Brittle autonomy
- Limited collaborative adaptation
- Unsafe emergent behavior
- Weak social negotiation capabilities

O-Open Declarative addresses these limitations by externalizing semantic reasoning into explicit declarative representations.

---

# Core Principle

Behavioral meaning should be represented declaratively whenever possible.

Formally:

    Behavior = Policies + Context + Constraints + Intent

rather than:

    Behavior = Hidden Execution Path

The system should expose:

- What it knows
- What it assumes
- What it intends
- What it cannot do
- Why it made a decision
- Which policy produced the outcome

---

# Declarative Architecture

The SOCIAL framework models reasoning as explicit semantic structures flowing through HIFs (HRI Interaction Frames).

Examples include:

- Facts
- Queries
- Intentions
- Constraints
- Social policies
- Pending goals
- Confidence values
- Safety states
- Interaction contracts

These structures remain inspectable and modifiable throughout the pipeline.

---

# Relationship to HRI_DB

The HRI_DB acts as a transparent declarative world model.

Instead of storing opaque internal state, the database maintains editable semantic representations such as:

```json
{
  "person": "Bob",
  "location": "Kitchen",
  "confidence": 0.92,
  "source": "vision_tracker"
}
```

This allows:

- Human inspection
- Policy validation
- Contradiction detection
- Context synchronization
- Explainable reasoning
- LLM-compatible semantic querying

The database becomes not only memory storage, but also a shared semantic negotiation layer.

---

# Declarative Policies

Policies are represented as explicit λ-based semantic operators.

Examples:

| Policy Type | Purpose |
|---|---|
| Synchronization Policies | Temporal alignment |
| Safety Policies | Prevent dangerous actions |
| Social Policies | Enforce etiquette |
| Escalation Policies | Control reasoning escalation |
| Resource Policies | Manage computational budgets |
| Autonomy Policies | Regulate agent independence |

This enables policies to be:

- Audited
- Replaced
- Tuned
- Simulated
- Learned
- Contextually switched

without rewriting core architecture.

---

# Example

## Traditional Hidden Logic

```text
if battery < 10:
    stop_task()
```

## Open Declarative Representation

```json
{
  "constraint": "low_battery",
  "battery_threshold": 10,
  "active_task": "deliver_medicine",
  "policy": "safety_override",
  "decision": "pause_task",
  "reason": "insufficient energy reserve"
}
```

The second form enables:

- Human understanding
- Policy auditing
- Alternative reasoning
- Negotiation
- Simulation
- Adaptive autonomy

---

# Declarative Social Interaction

Social interaction itself becomes declarative.

Example:

```json
{
  "social_goal": "request_assistance",
  "interaction_window": "open",
  "target_person": "Bob",
  "priority": "medium",
  "social_style": "polite",
  "timing_policy": "non_interruptive"
}
```

This separates:

- What the robot wants
- Why it wants it
- When it may act
- How it should behave

---

# Relationship to Escalation Switches

Escalation Switches (ES) operationalize declarative reasoning.

Rather than hiding transitions between heuristics, symbolic reasoning, and LLMs, the architecture represents escalation itself as a policy-driven declarative process.

Example:

```text
Confidence < Threshold
→ Escalate to Higher Semantic Expert
```

This creates:

- Predictable reasoning chains
- Explainable fallback behavior
- Resource-aware cognition
- Safer autonomy

---

# Open Declarative Autonomy

An autonomous system should expose its own internal agency state.

Examples include:

- Current autonomy level
- Active constraints
- Safety overrides
- Confidence levels
- Mission priorities
- Resource limitations
- Integrity scores

This is implemented within the SOCIAL framework through mechanisms such as:

- SIAH (System Integrity & Agency Handler)
- CEU (Consistency Evaluator & Updater)
- TPR (Task Prerequisite Resolver)

The result is adjustable and inspectable autonomy rather than opaque self-governance.

---

# Advantages

## Explainability

Humans can inspect why actions occurred.

## Trust

Transparent reasoning improves long-term acceptance.

## Modularity

Policies become composable semantic units.

## Adaptability

Declarative structures are easier to modify dynamically.

## LLM Compatibility

Declarative knowledge integrates naturally with generative reasoning systems.

## Safety

Hidden unsafe transitions become observable.

---

# Relation to Existing Paradigms

O-Open Declarative intersects with several existing paradigms:

| Paradigm | Relation |
|---|---|
| Declarative Programming | Behavior defined through semantic constraints |
| Knowledge Graphs | Explicit relational semantics |
| Cognitive Architectures | Symbolic reasoning layers |
| Explainable AI (XAI) | Human-readable reasoning |
| Rule Engines | Policy-based execution |
| Semantic Web | Structured machine-readable meaning |

However, O-Open Declarative differs by focusing specifically on:

- Social transparency
- Embodied interaction
- Real-time contextual negotiation
- Human-readable autonomy
- Hybrid symbolic-generative reasoning

---

# Design Implications

Systems implementing O-Open Declarative should avoid:

- Hidden procedural policies
- Non-traceable LLM decisions
- Opaque internal state
- Hard-coded social rules
- Uninspectable autonomy

Instead, systems should prefer:

- Explicit semantic representations
- Editable world models
- Policy-driven execution
- Explainable escalation chains
- Structured interaction contracts
- Declarative safety layers

---

# SOCIAL Perspective

Within the SOCIAL framework, **O-Open Declarative** supports all other principles by making the system's state, assumptions, policies, constraints, and decisions explicit rather than hidden inside opaque execution paths.

- **S — Separated Contexts**: Declarative representation makes each context domain inspectable on its own. Human context, scene context, robot context, task context, memory context, and safety context can expose their own facts, assumptions, confidence values, and update history without collapsing into a single opaque state.

- **O — Open Declarative**: This is the primary principle. The system should represent important behavioral meaning through explicit structures such as HIF properties, policy objects, HRI_DB records, validation results, autonomy states, and pending task descriptions.

- **C — Clear Cognition**: Cognition becomes clearer when intermediate reasoning products are represented declaratively. Instead of hiding interpretation, grounding, validation, and escalation inside code, the architecture exposes what was inferred, why it was inferred, and which uncertainty remains.

- **I — Interpretable Gates**: Gates become interpretable only when their inputs, policies, thresholds, and outcomes are explicit. A gate decision such as `pass`, `modify`, `block`, `clarify`, or `escalate` should be represented as structured semantic data rather than as an invisible control transition.

- **A — Adaptive Autonomy**: Autonomy can be adjusted safely only when the system exposes its current autonomy state, active constraints, confidence, risk level, required permissions, and reason for changing agency level.

- **L — Layered Validation**: Validation layers require declarative artifacts to inspect. Perceptual confidence, semantic assumptions, task prerequisites, social constraints, safety limits, and autonomy boundaries should be represented explicitly so that each validation layer can evaluate them.

In this sense, O-Open Declarative provides the transparency discipline that makes SOCIAL architectures inspectable, correctable, auditable, and suitable for human-facing embodied AI.
---

# Future Research Directions

Potential future research areas include:

- Self-explaining robotic agents
- Declarative LLM orchestration
- Formal policy verification
- Human-editable robotic cognition
- Dynamic social rule injection
- Semantic autonomy contracts
- Cross-agent declarative synchronization
- Explainable embodied planning

---

# Conclusion

O-Open Declarative provides a transparent semantic foundation for socially intelligent embodied systems.

By externalizing reasoning into explicit declarative structures, the architecture achieves:

- Higher explainability
- Better trustworthiness
- Safer autonomy
- Improved adaptability
- Stronger human collaboration
- More controllable AI behavior

The principle moves HRI systems away from opaque procedural execution toward inspectable socially-aware cognitive infrastructures.


---

# S-Separated Contexts

Source file: `social-principles/s-separated-contexts.md`

# S-Separated Contexts

## Overview

S-Separated Contexts is an architectural principle within the SOCIAL framework for Human-Robot Interaction (HRI). The principle states that socially intelligent systems should maintain semantically separated contextual domains while enabling controlled synchronization between them.

The goal is to prevent semantic contamination, temporal ambiguity, and unintended coupling between unrelated interaction streams.

Rather than operating on a single monolithic world-state, the system maintains multiple specialized context spaces that evolve independently and synchronize only through explicit semantic gates.

This principle is foundational for scalable, explainable, and socially coherent embodied AI systems.

---

# Motivation

Human social cognition naturally separates different contextual domains:

- Immediate sensory perception
- Long-term memory
- Physical scene understanding
- Social interaction state
- Internal bodily state
- Task-oriented reasoning
- Ethical and social constraints

Traditional robotic architectures often collapse these domains into a single shared state representation. While simpler computationally, this creates several problems:

- Temporal hallucinations
- Cross-modal semantic leakage
- Uncontrolled side effects
- Reduced explainability
- Difficulty in asynchronous reasoning
- Poor scalability
- Brittle agent behavior

S-Separated Contexts addresses these limitations by enforcing architectural separation between context domains.

---

# Core Principle

A context domain should evolve independently unless an explicit synchronization policy authorizes semantic transfer.

Formally:

    Ci ∩ Cj = ∅
    unless synchronized via λsync

Where:

- `Ci` and `Cj` are independent context domains
- `λsync` is an explicit synchronization policy

---

# Context Domains

Typical context domains include:

| Context Domain | Description |
|---|---|
| Human Context | Human-centered perception and interpretation |
| Scene Context | Physical environment understanding |
| Robot Context | Internal robot state and embodiment |
| Social Context | Interaction dynamics and social conventions |
| Task Context | Goals, plans, and pending actions |
| Memory Context | Persistent semantic knowledge |
| Safety Context | Integrity, autonomy, and risk evaluation |

Each context may maintain:

- Independent update rates
- Independent storage
- Independent reasoning policies
- Independent lifecycle management
- Independent trust levels
- Independent resource priorities

---

# Architectural Structure

The architecture follows a layered synchronization model:

    [ Context A ]      [ Context B ]      [ Context C ]
           \                |                 /
            \               |                /
             ---- Synchronization Gate ----
                            |
                     Unified Interaction Frame

Synchronization occurs only through explicit semantic operators such as:

- Sync Gates (SG)
- Escalation Switches (ES)
- Semantic Transformers (ST)
- Novelty Extractors
- Social Validation Layers

---

# Relationship to HIF

Within HML (HRI Modeling Language), contexts are represented as streams of HIFs (HRI Interaction Frames).

Each HIF contains:

- Raw content
- Semantic properties
- Temporal metadata
- Source history
- Processing lineage

Separated contexts therefore become independent HIF ecosystems connected through controlled semantic bridges.

---

# Example

## Human Context

Tracks:

- Speech
- Gaze
- Facial expressions
- Gestures
- Identity

## Scene Context

Tracks:

- Objects
- Doors
- Obstacles
- Navigation topology
- Spatial relations

## Robot Context

Tracks:

- Battery
- CPU load
- Actuator state
- Safety conditions
- Current autonomy level

These contexts remain independent until a higher-level reasoning layer explicitly combines them.

Example:

    Human says:
    "Bring me that bottle"

    Human Context:
    - Speech intent
    - Pointing gesture

    Scene Context:
    - Bottle candidates
    - Spatial geometry

    Robot Context:
    - Reachability
    - Battery constraints

    Only after synchronization can a socially executable instruction emerge.

---

# Synchronization Policies

Synchronization policies determine:

- Which contexts may interact
- Under what conditions
- At what temporal resolution
- With what confidence thresholds
- Using which arbitration mechanisms

Examples:

| Policy | Purpose |
|---|---|
| Temporal Alignment | Prevent semantic ghosting |
| Confidence Threshold | Avoid uncertain fusion |
| Social Priority | Prefer socially relevant entities |
| Resource Awareness | Adapt to hardware limitations |
| Safety Override | Block unsafe actions |

---

# Advantages

## Scalability

Independent contexts can scale separately.

## Explainability

Each reasoning step remains traceable to its originating context.

## Fault Isolation

Noise or corruption in one context does not immediately contaminate others.

## Resource Efficiency

Heavy reasoning can be activated selectively.

## Social Coherence

Synchronization becomes socially meaningful instead of purely technical.

---

# Relation to Existing Paradigms

S-Separated Contexts intersects with several existing paradigms:

| Paradigm | Relation |
|---|---|
| Blackboard Systems | Shared coordination but stricter semantic isolation |
| Microservices | Similar modular independence |
| Cognitive Architectures | Comparable to specialized cognitive modules |
| Event-Driven Systems | Delta-based synchronization |
| Multi-Agent Systems | Independent semantic agents |

However, S-Separated Contexts differs by focusing specifically on:

- Temporal-social coherence
- Embodied interaction
- Cross-modal synchronization
- Human-centered contextual validity

---

# Design Implications

Systems implementing S-Separated Contexts should avoid:

- Global mutable world states
- Implicit semantic sharing
- Non-traceable context fusion
- Monolithic LLM-centric reasoning

Instead, systems should prefer:

- Explicit synchronization contracts
- Typed semantic boundaries
- Context-specific reasoning
- Delta-driven updates
- Layered arbitration

---

# SOCIAL Perspective

Within the SOCIAL framework, **S-Separated Contexts** supports all other principles by providing the structural boundary system on which socially intelligent reasoning depends.

- **S — Separated Contexts**: This is the primary principle. It requires human, scene, robot, task, memory, safety, and social contexts to evolve as distinct semantic domains unless explicit synchronization is authorized.

- **O — Open Declarative**: Context separation makes declarative state easier to expose and inspect. Instead of one opaque global state, each context can declare its own facts, assumptions, confidence values, policies, and update history.

- **C — Clear Cognition**: Cognitive clarity depends on knowing where information came from and which context produced it. Separated contexts prevent reasoning traces from collapsing into a single ambiguous pipeline.

- **I — Interpretable Gates**: Contexts should not merge implicitly. Synchronization between contexts occurs through explicit gates, such as SG, ES, validation roles, or higher-level patterns, making every cross-context transition inspectable.

- **A — Adaptive Autonomy**: Autonomy decisions require separated evidence from several domains: robot integrity, human availability, task readiness, safety state, and social context. Keeping these domains separate allows autonomy to be adjusted for the right reason rather than through an opaque global score.

- **L — Layered Validation**: Validation becomes stronger when each layer can evaluate a specific context. Perceptual, semantic, spatial, social, safety, and autonomy validation can each operate over the context domain most relevant to its responsibility.

In this sense, S-Separated Contexts provides the architectural separation discipline that prevents semantic leakage while still allowing controlled synchronization when socially meaningful action requires it.

---

# Future Research Directions

Potential future research areas include:

- Dynamic context spawning
- Context compression for edge devices
- LLM-mediated synchronization policies
- Distributed robotic context federation
- Multi-human context arbitration
- Formal verification of synchronization safety
- Context-aware continual learning

---

# Conclusion

S-Separated Contexts provides a scalable architectural foundation for socially intelligent embodied agents.

By enforcing semantic separation while enabling explicit synchronization, the architecture achieves:

- Higher explainability
- Better temporal consistency
- Improved social fluency
- Graceful scalability
- Safer autonomous behavior

The principle moves HRI systems away from monolithic perception pipelines toward modular socially-aware cognitive ecosystems.
