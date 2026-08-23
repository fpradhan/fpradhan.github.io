# fpradhan.com — MHPTT Digital Portfolio

Jekyll site for the Master of Health Professions Teaching & Technology capstone
(HPTT 832 / HDS 872), hosted on GitHub Pages at **fpradhan.com**.

---

## One-time setup

**1. Create the repo and push.**

```bash
cd portfolio-site
git init -b main
git add .
git commit -m "Initial portfolio scaffold"
git remote add origin https://github.com/fpradhan/portfolio.git
git push -u origin main
```

**2. Turn on GitHub Pages.** Repo → *Settings* → *Pages* → Source: **Deploy from a branch** →
Branch `main`, folder `/ (root)` → Save. First build takes a minute or two.

**3. Point the domain.** A `CNAME` file containing `fpradhan.com` is already in the repo, so
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

## Everyday editing

**To write a reflection** — open `_competencies/<name>.md` on github.com, click the pencil,
write, commit. The site rebuilds in about a minute. Each file already contains the artifact
titles, courses, descriptions, and a prompt list; delete the `<p class="todo">` block as you
fill each one in.

**To add a downloadable artifact** — drop the file into `assets/artifacts/` and make sure the
link in the competency page matches the filename. Links look like:

```markdown
[Download the full artifact](/assets/artifacts/hptt801-curriculum-outline.pdf){: .dl}
```

**To change wording site-wide** — `_includes/header.html`, `_includes/footer.html`, `_config.yml`.

**To change the design** — `assets/css/style.css`. Colours are CSS variables at the top; light
and dark palettes are both defined there.

---

## Structure

```
_config.yml              site settings, collection config
CNAME                    fpradhan.com
index.md                 About
teaching.md              Philosophy · Presentations · Resources
resume.md                Resume / CV  (research interests folded in)
artifacts.md             MHPTT Artifacts index — auto-lists all 11 pages
contact.md               Contact
_competencies/           the 11 competency pages
_layouts/                default · page · competency
_includes/               head · header · footer
assets/css/style.css     all styling
assets/artifacts/        downloadable artifact files
```

Adding, removing, or reordering competency pages needs no other edit — `artifacts.md` and
the previous/next pager both read from the collection and sort on the `order` field.

---

## Optional local preview

Not required — GitHub builds on push. But if you want it:

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

---

## Status

Scaffold generated 23 August 2026. Structure, styling, navigation, and all eleven competency
pages are in place, pre-filled with artifact titles, courses, and descriptions drawn from the
coursework. **The reflections are not written** — those are yours, and they are the graded
core of the portfolio. Every place needing your input is marked with a dashed `To write` box.

Content plan and artifact mapping: `MHPTT-Wix-Portfolio-Plan.md` in the HPTT 832 folder.
