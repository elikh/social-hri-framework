---
title: Synchronous Multi-Extractor (SME)
sidebar_position: 2
---

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
