---
title: Example — Human Context Interpreter Sublayer
sidebar_position: 7
---

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
