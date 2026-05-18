---
title: Semantic Operators
sidebar_position: 3
---

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
