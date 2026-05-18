---
title: Elastic Attention Governor (EAG)
sidebar_position: 3
---

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
