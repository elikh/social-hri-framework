---
title: Robot Context
sidebar_position: 10
---

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
