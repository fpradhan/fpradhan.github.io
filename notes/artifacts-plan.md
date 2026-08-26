# Artifacts plan — MHPTT digital portfolio

Working document, excluded from the site build. Built from the Canvas export inventory
(9 MHPTT courses, 73 assignments, 40 rated DELIVERABLE) against the Week 2 artifact rules.

A proposed assignment, not a decision. Four things below need your call.

---

## What the pool actually is

Forty items are rated DELIVERABLE, but that number overstates the pool. Three assignments are
one document submitted repeatedly as it grew, and one file was submitted to two assignments.
Counting the stages separately would breach the use-once rule, so they collapse:

| Chain | Submitted as | Counts as |
|---|---|---|
| HPTT 805 SBAR | Situation → Background → Assessment → Recommendation | the Recommendation paper |
| HPTT 824 Simulation Scenario Builder | Weeks 9, 13, 16 of one workbook | the Week 16 workbook |
| HPTT 840 Clinical Teaching Project | Weeks 3, 5, 6, 7, 8, peer draft, 12 | the Week 12 assembled project |
| HPTT 823 strategic plan | Draft #1, then the final deck and document | the final |
| `FP - Blueprint Rubric.docx` | Week 9 and Week 12, identical MD5 | one artifact |

After collapsing, roughly **27 distinct coursework artifacts** remain, plus the two allowed
professional ones. Twenty-two slots against twenty-nine candidates — enough, but the surplus is
in the wrong places. HPTT 830 supplies six research artifacts for four research slots, while
objective 7b has no strong coursework candidate at all.

---

## Proposed assignment

| Objective | A | B |
|---|---|---|
| **1** Instructional Methods | HPTT 801 Curriculum Outline | HPTT 840 Clinical Teaching Project (final) |
| **2** Innovation in Teaching | HPTT 825 Final e-Module | HPTT 824 Simulation Scenario Builder (final) |
| **3** Learning Theory | HPTT 801 Learning Theory Paper | HPTT 824 Wk 2 Learning Theory in Simulation Design |
| **4** Best Practices | HPTT 801 Integration Paper | HPTT 802 Science of Learning Activity |
| **5a** Research (doing) | HPTT 830 Final Research Proposal | E-Learning Research Project Worksheet ‡ |
| **5b** Research (appraising) | HPTT 830 Article Critique 2 | HPTT 830 Article Critique 3 |
| **6** Instructional Technology | HPTT 803 Mini Project and Video worksheet | HPTT 824 Wk 4 Mixed Reality Ergonomics |
| **7a** Leadership (administrative) | HPTT 823 Strategic Plan and capstone deck | HPTT 840 Wk 4 Onboarding and Orientation Plan |
| **7b** Leadership (innovation, mentorship) | Portal Hypertension e-module ‡ | HPTT 824 Wk 8 Professionalism and Faculty Development |
| **8a** Learner Assessment (evaluating) | HPTT 805 Wk 9 Test Blueprint | HPTT 805 Wk 11 Psychometric Analysis |
| **8b** Learner Assessment (creating) | HPTT 825 Wk 09 Formative & Summative Assessment | HPTT 805 SBAR Course Project (final) |

‡ The two professional artifacts. This spends the allowance exactly.

Course spread: 801 ×3, 802 ×1, 825 ×2, 805 ×3, 823 ×1, 803 ×1, 824 ×4, 830 ×3, 840 ×2,
professional ×2. All nine courses appear, which is what the rubric asks for.

### Why the contested ones went where they did

**The Mini Project worksheet goes to 6, not 2.** It was the biggest collision in the inventory.
Objective 6 names "both classroom and distance education settings"; the worksheet covers twelve
tools across traditional, online and hybrid. Objective 2 loses nothing, because the e-module and
the scenario builder are stronger multimedia and collaborative evidence than the worksheet.

**Both HPTT 801 papers stay in Foundations but split across 3 and 4.** The Learning Theory Paper
argues a position; the Integration Paper audits that position against the curriculum actually
built and concedes where open-book assessment fits Vygotsky rather than Bandura. Conceding is
what objective 4 means by reflective practice, so the pair does not need to sit together.

**Article Critique 1 sits out.** Objective 5b names effective teaching, adult learning and
interdisciplinary teamwork. Critique 2 is gamification in a hepatology curriculum and Critique 3
is interdisciplinary palliative care training; Critique 1 is closer to workforce policy.

**HPTT 802's Teaching Philosophy Statement is deliberately unused.** It is substantially the
document now published at `/teaching/philosophy/`, and the philosophy is a Capstone deliverable,
which the rules exclude. Using it as an artifact would put the same work in the portfolio twice.

### The bench

Unassigned and available if anything above is displaced: HPTT 830 Article Critique 1, Revised
Literature Review and Methodology Section; HPTT 805 Endoscopic Skills Rubric (final); HPTT 825
Week 02 Needs Assessment, Week 04 Storyboard and Week 06 Module Integration Plan; HPTT 803 Task
Analysis and Objectives and Alignment Worksheet.

---

## Four decisions

**1. Both professional slots go to the E-Learning Awards project.** The module answers 7b better
than any coursework, and the research worksheet is a genuine education-research design distinct
from the HPTT 830 proposal. The objection is that both come from one project family. The
alternative is putting HPTT 830's Revised Literature Review in 5a-B and holding a professional
slot in reserve, which weakens 5a slightly and keeps flexibility.

**2. Objective 7b is the weak point.** 7b-B is rated MINOR — a Benner novice-to-expert
self-assessment with a faculty development plan. It is on-target for reflective practice but
thin next to everything else. The two best fixes are both outside the export: the HPTT 824 Acute
Liver Failure escape room and the HPTT 823 elevator pitch.

**3. The Canvas export is not your full coursework.** Five substantial pieces are absent —
confirmed by searching the raw archive listing, not just the inventory:

- HPTT 802 *Chronic Hepatitis: A Patient's Journey* instructional design project (11 sections)
- HPTT 802 *Who Wants To Be A Hepatologist* serious game
- HPTT 823 recorded elevator pitch
- HPTT 824 Acute Liver Failure escape room deck and final presentation
- HPTT 803 Prezi, Quizlet recording and demonstration videos

This is why HPTT 802 contributes only one artifact despite being a full instructional design
course. Recovering these is the highest-value action available: the escape room and the game
would strengthen 2 and 7b, and the ID project would compete for 1.

**4. No instructor feedback survived the export.** Zero of 89 unique files carry an instructor
comment, tracked change or completed rubric. The only Word comments are your own notes to
yourself in the storyboard. If the reflections are to show evolution in response to feedback,
that has to come out of Canvas directly, per assignment.

---

## Adding one to the site

Each competency page carries a filled-in template inside a Liquid comment:

1. Copy the `<section class="artifact">` block out of the comment in the page body.
2. Fill in title, course, date, description and reflection.
3. Add a matching entry to `artifacts:` in that file's front matter, which drives the jump list
   on the page and the list on `/artifacts/`.
4. Put the file in `assets/artifacts/` and link it.

PDF, PNG and JPG render in the browser. Convert `.docx` and `.pptx` to PDF first so they open
rather than download. The `.story` files are Articulate project files and cannot be opened
without Storyline — link to the published module or the E-Gallery page instead.
