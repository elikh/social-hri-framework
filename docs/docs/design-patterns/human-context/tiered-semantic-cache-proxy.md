---
title: Tiered Semantic Cache / Proxy (TSC/TSP)
sidebar_position: 5
---

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
