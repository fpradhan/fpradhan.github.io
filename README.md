# fpradhan.com — MHPTT Digital Portfolio

Jekyll site for the Master of Health Professions Teaching & Technology capstone
(HPTT 832 / HDS 872), hosted on GitHub Pages at **fpradhan.com**.

---

## Site structure

Five navigation items, matching the exemplar portfolios:

```
About            /                     index.md
Teaching         /teaching/            teaching.md      philosophy · presentations · learner resources
Resume / CV      /resume/              resume.md        positions · training · research interests · leadership
MHPTT Artifacts  /artifacts/           artifacts.md     all 11 outcome areas, with their evidence
  ├ 1. Instructional Methods           _competencies/1-instructional-methods.md
  ├ 2. Innovation in Teaching          _competencies/2-innovation-in-teaching.md
  ├ 3. Learning Theory                 …
  ├ 4. Best Practices in Teaching
  ├ 5a. Research            ├ 5b. Research
  ├ 6. Instructional Technology
  ├ 7a. Leadership in HPE   ├ 7b. Leadership in HPE
  └ 8a. Learner Assessment  └ 8b. Learner Assessment
Contact          /contact/             contact.md
```

**MHPTT Artifacts is a dropdown.** All eleven outcome areas are one click from any page. It
opens on hover and on keyboard focus, and needs no JavaScript. On narrow screens it flattens
into the mobile menu so nothing hides behind a hover a touchscreen cannot perform.

Adding, removing or reordering competency pages needs no other edit. The navigation dropdown,
the `/artifacts/` index and the previous/next pager all read from the collection and sort on
the `order` field.

---

## How a competency page is built

Each of the eleven files in `_competencies/` carries two artifacts in the four-part block both
exemplar portfolios use — **label · title · course · description · reflection · evidence** —
plus a page-level reference list.

```markdown
---
number: "7a"                     # shown as the large numeral and in the nav
name: "Leadership in Health Professions Education"
order: 8                         # sort position, everywhere
title: "7a. Leadership in Health Professions Education"
description: "…"                 # used for search results and link previews
artifacts:                       # drives the jump list and the /artifacts/ index
  - label:  "7a-A"
    title:  "Strategic Plan — Optimizing Nutrition Post-Liver Transplantation"
    course: "HPTT 823 – Leadership in HPE (Spring 2025)"
    anchor: "artifact-7a-a"      # matches the id= on the <section> below
statement: >-
  Apply knowledge of the administrative aspects of leading educational programs…
---
```

The body then holds one `<section>` per artifact:

```markdown
<section class="artifact" id="artifact-7a-a" markdown="1">

<p class="label">Artifact 7a-A</p>

## Strategic Plan — Optimizing Nutrition Post-Liver Transplantation

**Course:** HPTT 823 – Leadership in HPE (Spring 2025)
{: .meta}

### Description
…
### Reflection
…
[Download the full artifact](/assets/artifacts/hptt823-strategic-plan.pdf){: .dl}

</section>
```

Two things to keep in mind when editing:

- **Keep the `<section …>` and `</section>` tags.** Write between them. `markdown="1"` is what
  lets ordinary Markdown work inside the tag — remove it and the text will render as raw HTML.
- **If you rename an artifact,** change it in both places: the `## ` heading and the matching
  `artifacts:` entry in the front matter. The front matter feeds the on-page jump list and the
  artifact index; the heading is what a reader sees.

Artifacts are numbered per competency (`7a-A`, `7a-B`) rather than continuously across the
site, so swapping one out later does not renumber everything after it.

---

## Everyday editing

**To write a reflection** — open `_competencies/<name>.md` on github.com, click the pencil,
write, commit. The site rebuilds in about a minute. Delete the dashed `<p class="todo">` block
as you fill each section in; every place needing your input is marked with one.

**To add a downloadable artifact** — drop the file into `assets/artifacts/` and make sure the
link in the competency page matches the filename. `assets/artifacts/README.md` lists every
filename the pages already point at, and the file-preparation notes that go with them.

**To fill in an optional slot** — these live in `_config.yml` and each renders only once you
set it, so the site never shows a broken link or an empty box:

| Setting | What it turns on |
|---|---|
| `portrait:` | A photograph beside the About page introduction |
| `cv:` | The download button at the top of Resume / CV |
| `profiles:` | LinkedIn / Google Scholar / PubMed links in the footer, on Contact, and on Resume |
| `form_endpoint:` | The contact form (see below) |
| `image:` | The preview image shown when someone shares a link to the site |

**The contact form.** GitHub Pages serves static files and cannot process a form submission,
so the form needs an external handler — [Formspree](https://formspree.io),
[Basin](https://usebasin.com) or similar. Create an endpoint, paste the URL into
`form_endpoint:`, and the form appears on `/contact/`. Until then the page shows the email and
phone details, so nothing on it is broken.

**To change the design** — `assets/css/style.css`. Every colour, size and width is a CSS
variable in the `:root` block at the top; `--accent` re-skins the whole site. Light and dark
palettes are both defined, and the site follows the reader's system setting.

The type stack is three faces, each with a job:

| Variable | Face | Used for |
|---|---|---|
| `--display` | Instrument Serif | Page titles, section headings, the lede, competency statements and numerals |
| `--sans` | Inter | Body text, navigation, artifact chips |
| `--mono` | JetBrains Mono | Every label, date, course line and button — the detail that gives the site its character |

Two things to keep in mind if you edit the type. Instrument Serif ships a single weight, so
`**bold**` inside a display-face element will not render bolder — that is why emphasis in the
lede is marked with colour instead (`.lede strong`). And artifact chips on the index are
deliberately kept in Inter: artifact titles are long, and mono uppercase makes them unreadable
at chip size.

---

## One-time setup

**1. Turn on GitHub Pages.** Repo → *Settings* → *Pages* → Source: **Deploy from a branch** →
Branch `main`, folder `/ (root)` → Save. First build takes a minute or two.

**2. Point the domain.** A `CNAME` file containing `fpradhan.com` is already in the repo, so
GitHub knows the domain. At your DNS registrar add:

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `fpradhan.github.io.` |

Then in *Settings → Pages*, tick **Enforce HTTPS** once the certificate provisions (can take
up to an hour). Verify the four A records against GitHub's current published list before
relying on them — they change rarely, but they do change.

> `fpradhan.com` currently 302-redirects to a link-in-bio page. That forwarding has to be
> removed at the registrar or it will override these records.

---

## Local preview

Not required — GitHub builds on push — but useful for checking a layout change:

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

> `_config.yml` sets `theme: null` deliberately. The `github-pages` gem otherwise defaults to
> `jekyll-theme-primer`, whose `assets/css/style.scss` compiles to the same
> `/assets/css/style.css` this site already provides, and the two collide. This site supplies
> all of its own layouts, includes and styling, so it needs no theme.

---

## Structure

```
_config.yml              site settings, optional slots, collection config
CNAME                    fpradhan.com
index.md                 About
teaching.md              Philosophy · Presentations · Resources
resume.md                Resume / CV  (research interests folded in)
artifacts.md             MHPTT Artifacts index — auto-lists all 11 pages
contact.md               Contact
404.html                 not-found page
robots.txt               points crawlers at the generated sitemap
_competencies/           the 11 competency pages
_layouts/                default · home · page · competency
_includes/               head · header · footer
assets/css/style.css     all styling
assets/favicon.svg       browser tab icon
assets/artifacts/        downloadable artifact files (README lists the expected filenames)
```

---

## Status

Structure, navigation, styling and all eleven competency pages are in place, pre-filled with
artifact titles, courses and descriptions drawn from the coursework.

**The reflections and the reference lists are not written** — those are yours, and they are
the graded core of the portfolio. **The twenty-two artifact files are not yet uploaded**; the
download links point at the filenames listed in `assets/artifacts/README.md` and will work as
soon as the files are added.

Content plan and artifact mapping: `MHPTT-Wix-Portfolio-Plan.md` in the HPTT 832 folder.
