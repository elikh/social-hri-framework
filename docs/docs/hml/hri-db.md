---
title: HRI_DB — Transparent Semantic World Model
sidebar_position: 6
---

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
