---
title: "Resume / CV"
description: "Positions, training, research interests, educational leadership, and publications."
permalink: /resume/
---

{% if site.cv and site.cv != "" %}
<p><a class="dl" href="{{ site.cv | relative_url }}">{{ site.cv_label | default: "Download CV (PDF)" }}</a></p>
{% else %}
<p class="todo">Add a downloadable CV here. The exemplar portfolio offers two — an academic CV and
a clinical resume — as PDFs. Drop the file into <code>assets/artifacts/</code> and set
<code>cv:</code> in <code>_config.yml</code> — this button then appears automatically.</p>
{% endif %}

## Current position

**Assistant Professor and Transplant Hepatologist** · University of Nebraska Medical Center · 2022–present
{: .meta}

- Core faculty, Gastroenterology and Transplant Hepatology fellowships
- Faculty advisor for fellowship wellness
- Course director, Enhanced Medical Education Track in hepatology and transplant medicine

## Training

| Years | Position | Institution |
|---|---|---|
| 2021–2022 | Transplant Hepatology Fellowship | University of Nebraska |
| 2018–2021 | Gastroenterology Fellowship (Chief Fellow, 2020–21) | University of Arizona – Phoenix |
| 2017–2018 | Internal Medicine Chief Residency | Lahey Hospital & Medical Center |
| 2014–2017 | Internal Medicine Residency | Lahey Hospital & Medical Center |
| 2009–2014 | MB.BCh.BAO | Royal College of Surgeons in Ireland |
{: .table-scroll}

**In progress** — MS, Health Professions Teaching & Technology, UNMC (2023–present)

## Research interests

- Point-of-care ultrasound and sarcopenia in cirrhosis
- Development of AI-derived patient education materials
- Quality improvement in nutrition, cirrhosis, and liver frailty in the transplant pathway
- Hepatology education in undergraduate medical curricula

**Clinical interests** — chronic liver disease, cirrhosis, liver transplantation, short bowel
syndrome and intestinal transplantation, and medical education.

{% if site.profiles and site.profiles.size > 0 %}
<ul class="links">
{% for pr in site.profiles %}<li><a href="{{ pr.url }}" rel="me noopener">{{ pr.name }}</a></li>{% endfor %}
</ul>
{% else %}
<p class="todo">Google Scholar and PubMed links belong here. Add them under
<code>profiles:</code> in <code>_config.yml</code> and they appear here, on the Contact page,
and in the footer.</p>
{% endif %}

## Educational leadership

<p class="todo">To add. At minimum: founding and directing the Enhanced Medical Education Track
with the Department of Surgery; the E-Learning Award cohort 2024–25; committee leadership on
transplant protocol revision; Chief Resident and Chief Fellow roles.</p>

## Publications and presentations

<p class="todo">To add. The exemplar Resume/CV page carries Invited Lectures &amp; Presentations
and Publications &amp; Professional Work as distinct sections — currently the largest gap
between this page and hers.</p>

## Professional memberships

<p class="todo">To add — e.g. AASLD, ACG, AGA.</p>
