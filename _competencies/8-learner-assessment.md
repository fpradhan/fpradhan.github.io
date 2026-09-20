---
layout: competency
number: "8"
order: 8
name: "Learner Assessment"
title: "8. Learner Assessment"
description: "MHPTT objective 8, Learner Assessment — the two outcome statements and the artifacts evidencing them, from the Master of Health Professions Teaching & Technology at UNMC."
# Objective 8 has two outcome statements. Each is shown on the page under its own
# label, and each artifact says in its label which one it evidences.
statements:
  - part: "8a"
    text: >-
      Assess the effectiveness and efficiency of instructional strategies and
      student learning achievements through the evaluation of program and/or
      curricula outcomes.
  - part: "8b"
    text: >-
      Create engaging learning solutions to improve health professions education.
# One entry per artifact — label, title, course, and the anchor of its
# <section> in the body below. Drives the jump list here and the artifact
# list on /objectives/. Keep them grouped by part: every 8a before any 8b.
artifacts:
  - label: "8a-A"
    title: "Psychometric Analysis"
    course: "HPTT 805"
    anchor: "artifact-8a-a"
redirect_from:
  - /objectives/8a-learner-assessment/
  - /objectives/8b-learner-assessment/
  - /artifacts/8a-learner-assessment/
  - /artifacts/8b-learner-assessment/
---

<section class="artifact" id="artifact-8a-a" markdown="1">

<p class="label">Artifact 8a-A</p>

## Psychometric Analysis

**Course:** HPTT 805 – Evaluation and Assessment of Teaching and Learning in Health Professions Education
{: .meta}

### Reflection

The purpose of this assignment in HPTT 805 – Evaluation and Assessment of Teaching and Learning in
Health Professions Education was to conduct an item analysis of multiple-choice examination data,
together with written answers on test reliability and item security. I selected this artifact to
represent objective 8a because it is the only place in the portfolio where I work with assessment
data rather than describe an approach to assessment.

Each of the three items analyzed required a different remedy. On the first, two distractors that
nobody selected were why the difficulty index sat below goal, so revising them raises difficulty
on what I interpreted as a competency item. On the second, difficulty was too high for a
discrimination item and I proposed changes to the question stem to adapt. The third had acceptable
difficulty but a discrimination index below 0.20 and a Q-index under 0.65, which again point
towards the stem as a potential issue. In interpreting a falling Kuder-Richardson 20 across
repeated administrations, I kept three explanations open: a change in teaching quality, a change
in the cohort’s foundational preparation, or a compromised examination.

One of the challenges encountered was that the same index means different things depending on what
an item was written to do. A difficulty near 0.9 sits just below goal on a competency item and far
too high on a discrimination item; however, nothing in the report identifies the question’s
intent. Going forward, I intend to run this analysis on assessments I am responsible for, and to
adapt the questions that I write for my medical school lectures based on the provided psychometric
data.

<p><a class="dl" href="{{ '/assets/artifacts/hptt805-psychometric-analysis.pdf' | relative_url }}" rel="noopener" target="_blank">Download the psychometric analysis (PDF)<span class="sr-only"> (opens in a new tab)</span></a></p>

</section>

<p class="todo"><strong>8b.</strong> Artifacts under construction.</p>

{% comment %}
  ARTIFACT TEMPLATE — copy everything between the dashed rules out of this
  comment, once per artifact, and fill it in. Nothing inside a Liquid comment
  reaches the browser, so this stays invisible until you move a copy out.

  Then add a matching entry to `artifacts:` in the front matter above, so the
  artifact appears in the jump list here and in the list on /objectives/.
  Keep the entries grouped by part: all of 8a's before any of 8b's.

  ----------------------------------------------------------------------------
<section class="artifact" id="artifact-8a-b" markdown="1">

<p class="label">Artifact 8a-B</p>

## Title of the artifact

**Course:** HPTT ### – Full Course Name (Term Year)
{: .meta}

### Description

What the assignment required. Two to four sentences, factual — what the work
was, not yet why it matters.

### Reflection

Why this demonstrates the competency, what it changed about how you teach, and
what was hard. First person, and name the outcome explicitly.

[Download the full artifact](/assets/artifacts/filename.pdf){: .dl}

</section>
  ----------------------------------------------------------------------------
{% endcomment %}
