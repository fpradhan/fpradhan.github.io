# Artifacts plan — MHPTT digital portfolio

Working document. Not part of the site build (`notes/` is excluded in `_config.yml`).
Nothing here is decided; it is a map of the slots, the rules that constrain them, and the
candidates worth considering once the course files are in hand.

Source of the rules: HPTT 832/HDS 872, Week 2, "All you need to know about ARTIFACTS!"

---

## The shape of the problem

HPTT requires **22 artifacts**. The portfolio has **11 competency pages**, each taking
**2 artifacts**. That is an exact fit with no spare slots, so every choice is load-bearing.

Two caps do most of the work in this plan:

| Category | Cap | Slots left for coursework |
|---|---|---|
| Prior graduate professional programs | 2 total | |
| Professional / organizational work outside coursework | 2 total | |
| **MHPTT coursework** | — | **at least 18 of 22** |

This is the constraint that matters most, and it cuts against instinct. The strongest-looking
material — the e-module in the UNMC E-Gallery, the ABIM item-writing committee, the curricular
deans survey, the AGA microgrant — is nearly all professional work, and **only two of those can
be used in the entire portfolio**. Eighteen or more slots have to be filled from MHPTT course
assignments.

So the course-file repository is the critical input, not the CV. The CV is useful mainly for
picking the best two professional artifacts and writing reflections that connect coursework to
practice.

### Also excluded

- Discussion board posts.
- Undergraduate work.
- Anything from Digital Portfolio Capstone I & II — the leadership philosophy, the CV/résumé,
  the final portfolio and the comprehensive exam are all off-limits as artifacts.
- Reuse. **An artifact may appear once in the whole portfolio.** It cannot satisfy two
  objectives, which matters for 5a/5b, 7a/7b and 8a/8b, where the paired statements overlap
  and one piece of work could plausibly answer either.

---

## The 22 slots

Two per page. `artifacts:` in each file's front matter is currently `[]`.

| # | Page | Objective, abbreviated | A | B |
|---|---|---|---|---|
| 1 | `1-instructional-methods` | Theory and practice of education; develop health science programs on evidence-based strategies | | |
| 2 | `2-innovation-in-teaching` | Design learning environments using interactive and multimedia strategies; interdisciplinary and collaborative | | |
| 3 | `3-learning-theory` | Apply content, pedagogical and professional knowledge to teaching responsibilities | | |
| 4 | `4-best-practices-in-teaching` | Reflective practice integrating evidence-based knowledge, skills and attitudes | | |
| 5 | `5a-research` | Develop research skills; engage in scholarship advancing education | | |
| 6 | `5b-research` | Examine empirical evidence on effective teaching, adult learning, interdisciplinary teamwork | | |
| 7 | `6-instructional-technology` | Integrate current and emerging technology; classroom and distance settings | | |
| 8 | `7a-leadership` | Administrative aspects of leading educational programs | | |
| 9 | `7b-leadership` | Leadership through innovation, mentorship and reflective practice | | |
| 10 | `8a-learner-assessment` | Assess instructional strategies and learning achievement; evaluate program/curricular outcomes | | |
| 11 | `8b-learner-assessment` | Create engaging learning solutions | | |

### Reading the paired objectives

Where a competency splits, the two statements are not interchangeable, and the split suggests
what each half wants:

- **5a vs 5b** — 5a is *doing* research (a proposal, a study, an analysis you ran). 5b is
  *reading* it (a literature review, an evidence synthesis, a critique).
- **7a vs 7b** — 7a is administrative (budgets, governance, programme structure, policy).
  7b is innovation, mentorship and reflection.
- **8a vs 8b** — 8a is evaluation and measurement (blueprint, item analysis, programme
  outcomes). 8b is design (building something engaging).

---

## Candidates from work already known

Drawn from the CV and the site. Every one of these needs checking against the course files
before it is placed, and the professional ones compete for only two slots.

### Professional work — pick at most two

| Work | Year | Plausible fit |
|---|---|---|
| *Portal Hypertension: A Systemic Disease* e-module, UNMC E-Gallery | 2025 | 6, or 2 |
| Enhanced Medical Education Track — founded, four-year supplemental curriculum | 2023– | 7a, or 1 |
| ABIM item writing committee and Transplant Hepatology blueprint review | 2025 | 8a |
| Hepatology curricular content: survey of US medical school curricular deans | 2026 | 5a |
| *Hepatology Night Shift* — AI-augmented narrative game, AGA microgrant | 2026 | 2, or 8b |
| E-Learning Innovator Award work | 2025 | 6 |

The Track is the strongest candidate for one of the two, because nothing from coursework can
evidence founding a curriculum. The second slot is a real choice and worth deciding late,
once the coursework gaps are visible.

### Prior graduate programme — pick at most two

Nothing identified yet. MB BCh BAO is an undergraduate-entry degree, so RCSI work does not
qualify. If nothing fits, these two slots simply go unused and coursework fills 20.

### Threads worth carrying across several artifacts

Two run through the whole programme and are worth making visible in the reflections rather
than in any single artifact:

- **The hepatology education gap.** Named in 2023 (Pan et al.: 22% of graduating students had
  any hepatology rotation exposure, 42% felt adequately taught), then a curriculum, an
  e-module, a founded track, and by 2026 a survey of curricular deans measuring it directly.
- **Gamification.** *Who Wants To Be A Hepatologist* (2024) → the Acute Liver Failure escape
  room (2025) → a formal research proposal on AI-augmented gamification (2026).

---

## What is needed from the course files

For each MHPTT course, worth pulling out:

1. Course number, title, term taken.
2. The graded assignments, with file names.
3. Which had the most substantial deliverable — a designed thing, an analysis, a written study —
   as opposed to a short response.
4. Any instructor feedback kept with the file. Feedback is what the reflections are built from,
   and the rubric asks the philosophy and résumé to show evolution in response to it.

A first pass can be mechanical: list every assignment across every course, then map candidates
onto the 22 slots and find where the thin spots are.

---

## Mechanics of adding one to the site

Each competency page already carries a filled-in template inside a Liquid comment. Per artifact:

1. Copy the `<section class="artifact">` block out of the comment in the page body.
2. Fill in title, course, date, the description, and the reflection.
3. Add a matching entry to `artifacts:` in that file's front matter — this drives the jump list
   on the page and the artifact list on `/artifacts/`.
4. Drop the file itself in `assets/artifacts/` and link it.

Formats that work as-is: PDF, PNG/JPG, and links out to hosted material such as the E-Gallery
module. Office files are better converted to PDF first so they open in a browser rather than
downloading.

---

## Open questions

- Which two professional artifacts, given the cap.
- Whether any prior graduate work qualifies, or whether those two slots go unused.
- Whether the AI/education publications (GMERJ 2023, Hepatology Communications 2024) count as
  coursework, professional work, or neither — depends on whether they grew out of an MHPTT
  assignment.
