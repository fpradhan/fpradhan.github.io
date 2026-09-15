---
layout: competency
number: "5"
order: 5
name: "Research"
title: "5. Research"
description: "MHPTT objective 5, Research — the two outcome statements and the artifacts evidencing them, from the Master of Health Professions Teaching & Technology at UNMC."
# Objective 5 has two outcome statements. Each is shown on the page under its own
# label, and each artifact says in its label which one it evidences.
statements:
  - part: "5a"
    text: >-
      Develop research skills and engage in scholarship activities in an effort to
      advance understanding and practice of education in the health professions.
  - part: "5b"
    text: >-
      Analyze empirical data to support the theories of effective teaching, adult
      learning, and interdisciplinary collaboration.
# One entry per artifact — label, title, course, and the anchor of its
# <section> in the body below. Drives the jump list here and the artifact
# list on /objectives/. Keep them grouped by part: every 5a before any 5b.
artifacts:
  - label: "5a-A"
    title: "AI-Augmented Gamification as a Tool for Interactive Medical Student Education"
    course: "HPTT 830"
    anchor: "artifact-5a-a"
  - label: "5a-B"
    title: "Critical Appraisal"
    course: "HPTT 830"
    anchor: "artifact-5a-b"
redirect_from:
  - /objectives/5a-research/
  - /objectives/5b-research/
  - /artifacts/5a-research/
  - /artifacts/5b-research/
---

<section class="artifact" id="artifact-5a-a" markdown="1">

<p class="label">Artifact 5a-A</p>

## AI-Augmented Gamification as a Tool for Interactive Medical Student Education

**Course:** HPTT 830 – Research Analysis and Design for Health Professions Education
{: .meta}

### Reflection

The purpose of this assignment in HPTT 830 – Research Analysis and Design for Health Professions
Education was to produce a complete research proposal, covering the introduction, problem
statement, purpose statement, research questions, literature review, and methodology. I selected
it to represent objective 5a because the proposal shows my research skills best, and because the
topic grew out of a curricular gap I had previously identified. As well, the project idea and
design took inspiration from earlier HPTT courses.

Pan and colleagues found that only 22% of surveyed students reported exposure to a hepatology
rotation, and Kobashigawa and colleagues predict a 35% shortage of adult transplant hepatologists
by 2033. 62% of transplant hepatology fellowship positions were unfilled in 2024, further
compounding the workforce shortage. I also drew on my own unpublished 2025 survey of medical
school curricular deans, which found that 57.1% of liver-transplant-affiliated schools weighted
preclinical hepatology content equivalently to other specialties compared with 28.6% at
non-affiliated schools, and that fewer than 40% of either group reported any lecture on liver
transplantation. As a transplant hepatologist, these findings inspired me to develop a game with
artificial intelligence (AI) integration to teach medical students about liver disease
complications, and potentially increase specialty career interest. The proposal sets out one
primary and three secondary research questions across a three-site study design.

One of the challenges encountered was taking a three-site design through the institutional
review board. I have since narrowed it to a single-site quality improvement pilot, keeping the
same game, objectives and aims while reducing only the scope of the initial deployment, with
multi-site expansion planned once the intervention is established. The game,
*[Hepatology Night Shift<span class="sr-only"> (opens in a new tab)</span>](https://hepatology.pages.dev/HepatologyNightShift){: rel="noopener" target="_blank"}*,
is now built and is undergoing final testing before I implement the project in Fall 2026.

<p><a class="dl" href="{{ '/assets/artifacts/hptt830-research-proposal.pdf' | relative_url }}" rel="noopener" target="_blank">Download the research proposal (PDF)<span class="sr-only"> (opens in a new tab)</span></a></p>

</section>

<section class="artifact" id="artifact-5a-b" markdown="1">

<p class="label">Artifact 5a-B</p>

## Critical Appraisal

**Course:** HPTT 830 – Research Analysis and Design for Health Professions Education
{: .meta}

### Reflection

The purpose of this assignment in HPTT 830 – Research Analysis and Design for Health Professions
Education was to critically appraise a published study, covering its design, sampling,
intervention, assessment tools, findings and limitations. I chose Mikolajczyk and colleagues’ 2021
study of mandatory hepatology education for internal medicine residents. I selected it to
represent objective 5a as critical appraisal of published literature is an important research
skill, and because this study is very pertinent to my career interests in building the hepatology
workforce and trainee hepatology education.

The study is a single-center quantitative design running from 2014 to 2018, creating a mandatory
two-week inpatient hepatology rotation with a complementary didactic curriculum, compared against
historical data from a similar cohort at the same institution. My strongest criticism is related
to study design, i.e., the intervention is inpatient only, while hepatology is a predominantly
outpatient specialty, so measuring specialty interest after a one-sided clinical experience may
not fully reflect the study aim. Regarding educational theory, the supplement credits Kolb’s
experiential learning cycle directing study design and intervention, but the reader has to
extrapolate which resident responsibility maps to which of the four steps, and learners performing
below expectations are unaccounted for in the curricular design.

One of the challenges encountered was critiquing a study based on educational theory rather than
against its methods and design. Mikolajczyk and colleagues work with internal medicine residents,
a population my own supplemental educational track for medical students does not reach, so the
future goals are to extend the Enhanced Medical Education Track beyond medical school into
residency.

</section>

<p class="todo"><strong>5b.</strong> Artifacts under construction.</p>

{% comment %}
  ARTIFACT TEMPLATE — copy everything between the dashed rules out of this
  comment, once per artifact, and fill it in. Nothing inside a Liquid comment
  reaches the browser, so this stays invisible until you move a copy out.

  Then add a matching entry to `artifacts:` in the front matter above, so the
  artifact appears in the jump list here and in the list on /objectives/.
  Keep the entries grouped by part: all of 5a's before any of 5b's.

  ----------------------------------------------------------------------------
<section class="artifact" id="artifact-5b-a" markdown="1">

<p class="label">Artifact 5b-A</p>

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
