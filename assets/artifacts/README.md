# Artifact files

Downloadable artifacts go here. Nothing is in this folder yet.

## Naming

Name files so the course and the artifact are both obvious, lowercase with
hyphens — the filename shows in the browser's download bar and in the URL:

```
hptt801-curriculum-outline.pdf
hptt805-endoscopic-skills-rubric.pdf
myidp-pradhan-2024.pdf
```

Then point the competency page at it:

```markdown
[Download the full artifact](/assets/artifacts/hptt801-curriculum-outline.pdf){: .dl}
```

## Before uploading

**Convert to PDF.** `.pptx`, `.pptm` and `.xlsx` all render unreliably in a
browser, and macro-enabled files alarm it outright. Export to PDF, and keep the
original as a second download only if a reviewer would need it editable.

**Files that can't be served.** Articulate `.story` files and video are not
useful as downloads. Publish the module to Review 360 or a web host and link the
live URL; put video on YouTube or Vimeo unlisted and embed it. A reviewer should
be able to *run* an interactive artifact, not download a file they cannot open.

**Clear instructor feedback and grades.** Several coursework files carry tracked
changes or annotated comments. Accept or remove them first.

**Check for patient material.** Confirm the clinical cases in any storyboard,
scenario or module are constructed rather than real, and that no image is
identifiable.

**Do not upload third-party copyrighted readings.** Textbook chapters and
journal PDFs from the course folders must be cited, not hosted.

## Images

Screenshots and photographs go in `assets/img/`, not here. See the Images
section of the root `README.md`.
