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

## Images

The site ships no photographs. Everything visual in it right now is drawn in code: the mark in
the header, the footer and the favicon is an inline SVG of a hepatic lobule — the liver's
hexagonal histological unit, with the central vein at its centre and the six portal triads at
its vertices. It is original artwork for this site, it inherits the theme colour, and it costs
no extra request. Nothing on the site uses third-party imagery, so there is no licence to
track.

Photographs slot in through three mechanisms.

**1. The headshot.** Put the file in `assets/img/` and set `portrait:` in `_config.yml`. The
About page then switches to a two-column hero with the photograph beside the introduction. Any
aspect ratio works — it is cropped to 4:5 favouring the top of the frame, so a standard
headshot sits correctly.

**2. A lead image on any page.** Add to that page's front matter:

```yaml
image:         /assets/img/teaching.jpg
image_alt:     What the photograph shows
image_caption: Optional line beneath it
image_width:   1600      # optional, but see below
image_height:  1000
```

It renders only when both `image` and `image_alt` are present. This works on the standalone
pages and on the eleven competency pages.

**3. Anywhere in the prose,** including inside an artifact's `<section>`:

```liquid
{% include figure.html
   src="/assets/img/endoscopy-rubric.png"
   alt="The endoscopic skills rubric, showing the five-point anchors for scope handling"
   caption="HPTT 805 — anchors written so two attendings score the same trainee alike."
   width="1600" height="1000" %}
```

Wrap several in `<div class="gallery" markdown="1">…</div>` to lay them out in a responsive
grid. The Teaching page has a commented-out example ready to uncomment.

**Three rules the templates enforce or assume:**

- **`alt` is required.** A figure without it is skipped rather than shipped inaccessible, so a
  missing description shows up as a missing image rather than as a silent accessibility gap.
  Describe what the image *shows*, not that it is a photograph.
- **Pass `width` and `height`.** They reserve the right space while the file loads, so the text
  beneath does not jump when it arrives. Use the file's real pixel dimensions; the CSS still
  scales the image to fit.
- **Screenshots of your own work beat stock photography.** A screen from the Steatotic Liver
  Disease module is evidence; a stock photograph of a doctor is decoration, and a reviewer can
  tell. It also sidesteps licensing entirely, since the work is yours.

---

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

> **Assets carry a build stamp.** The stylesheet and favicon are linked as
> `style.css?v=<build time>`, regenerated on every build. Without it a browser that
> cached an earlier stylesheet keeps using it against newer markup — which is what
> happened after the first rebuild: `.container` and `.submenu` did not exist in the
> cached CSS, so pages lost their width and the nav dropdown unrolled inline. Leave
> the stamp in place.

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

Structure, navigation, styling, the CV and all eleven competency pages are in place. Each
competency page carries its outcome statement, a reference section, and an artifact template
in a Liquid comment ready to be copied out.

**No artifacts have been chosen yet.** Adding one is three steps:

1. Copy the template out of the `{% raw %}{% comment %}{% endraw %}` block in
   `_competencies/<page>.md` and fill in the title, course, description and reflection.
2. Drop the file into `assets/artifacts/` and point the download link at it.
3. Add a matching entry to `artifacts:` in that page's front matter, so it appears in the
   jump list on the page and in the list on `/artifacts/`.

Also still open: the reference lists, the headshot and CV PDF, the profile links, and the
contact-form endpoint. Every one of those is an optional slot — the page renders correctly
without it, so nothing on the site looks broken in the meantime.

Content plan and artifact mapping: `MHPTT-Wix-Portfolio-Plan.md` in the HPTT 832 folder.
