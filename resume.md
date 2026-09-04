---
title: "Resume / CV"
description: "Faruq Pradhan, MB BCh BAO, FRCPC — Transplant Hepatologist and Assistant Professor at UNMC. Positions, training, expertise, educational leadership and scholarship, with the complete CV as a PDF."
permalink: /resume/
hide_title: true
---

<header class="cv-header">
<h1 class="cv-name">Faruq Pradhan, MB BCh BAO, FRCPC</h1>
<p class="cv-role">Transplant Hepatologist · Assistant Professor of Medicine<br>
University of Nebraska Medical Center</p>
<p class="cv-contact"><a href="mailto:liver@fpradhan.com">liver@fpradhan.com</a> · 402-559-5200 · Omaha, Nebraska</p>
{%- comment -%}
  The PDF button appears once `cv:` is set in _config.yml. Until then the same
  slot offers the full CV as a page, so this never renders as a broken promise
  or an empty box.
{%- endcomment -%}
<p class="cv-actions">
{%- if site.cv and site.cv != "" %}
  <a class="dl" href="{{ site.cv | relative_url }}">{{ site.cv_label | default: "Download full CV (PDF)" }}</a>
  <a class="dl go" href="{{ '/cv/' | relative_url }}">View the full CV</a>
{%- else %}
  <a class="dl go" href="{{ '/cv/' | relative_url }}">View the full CV</a>
{%- endif %}
</p>
</header>

## Appointments

University of Nebraska Medical Center, Omaha, Nebraska
{: .meta}

<dl class="cv-list" markdown="0">
<dt>Medical Director, Adult Liver Transplantation<span class="when">2026 – Present</span></dt>
<dt>Assistant Professor of Medicine, Transplant Hepatology<span class="when">2022 – Present</span></dt>
<dt>Core Faculty, Gastroenterology and Transplant Hepatology fellowships<span class="when">2022 – Present</span></dt>
</dl>

## Education and training

| Years | Position | Institution |
|---|---|---|
| 2023 – present | MHPTT (Master of Health Professions Teaching &amp; Technology)<br>*expected 12/2026* | University of Nebraska Medical Center |
| 2021 – 2022 | Transplant Hepatology Fellowship | University of Nebraska Medical Center |
| 2018 – 2021 | Gastroenterology Fellowship<br>*Chief Fellow, 2020–21* | University of Arizona College of Medicine – Phoenix |
| 2017 – 2018 | Chief Resident, Internal Medicine | Lahey Hospital &amp; Medical Center |
| 2014 – 2017 | Internal Medicine Residency | Lahey Hospital &amp; Medical Center |
| 2009 – 2014 | MB BCh BAO *(MD equivalent)* | Royal College of Surgeons in Ireland |
{: .table-scroll}

## Board certification

<div class="creds" markdown="0">
<div class="cred-board">
<p class="cred-issuer">American Board of Internal Medicine</p>
<ul class="cred-items">
<li>Transplant Hepatology</li>
<li>Gastroenterology</li>
<li>Internal Medicine</li>
</ul>
</div>
<div class="cred-board">
<p class="cred-issuer">Royal College of Physicians and Surgeons of Canada</p>
<ul class="cred-items">
<li>Internal Medicine</li>
<li>Gastroenterology</li>
</ul>
</div>
</div>

## Areas of expertise

**Education** — curriculum design and course direction; e-learning and module development; simulation-based and procedural teaching; assessment design, item writing and psychometric analysis; mentorship of students, residents and fellows.

**Clinical** — liver transplantation and post-transplant care; cirrhosis and portal hypertension; short bowel syndrome and intestinal transplantation; diagnostic and therapeutic endoscopy.

**Research** — principal investigator on industry-sponsored trials; real-world database and propensity-matched analyses; national survey research; quality improvement in the transplant pathway.

## Educational leadership

<dl class="cv-list" markdown="0">
<dt>Course Director and Founder, Enhanced Medical Education Track<span class="when">2023 – Present</span></dt>
<dd><em>Combined Medical and Surgical Integrated Track in Liver Transplantation</em> — a four-year supplemental medical school curriculum in hepatology and transplant medicine, enrolling two to three students a year.</dd>
<dt>Item Writing Committee, Gastroenterology — ABIM<span class="when">2025 – Present</span></dt>
<dt>Transplant Hepatology Blueprint Reviewer — ABIM<span class="when">2025</span></dt>
<dt>Interprofessional Academy of Educators — UNMC<span class="when">2025 – Present</span></dt>
<dt>Academy of Educators — American Gastroenterological Association<span class="when">2024 – Present</span></dt>
<dt>Faculty Advisor, Gastroenterology Fellowship Wellness<span class="when">2022 – 2025</span></dt>
</dl>

## Scholarship

**21 peer-reviewed publications · 13 book chapters · 10 oral and 52 poster presentations · 17 invited talks · 4 education grants · 3 trials as principal investigator**
{: .meta}

Invited talks are listed on the [full CV page]({{ '/cv/' | relative_url }}).

## Elsewhere

{% if site.profiles and site.profiles.size > 0 %}
<ul class="links">
{% for pr in site.profiles %}<li><a href="{{ pr.url }}" rel="me noopener">{{ pr.name }}</a></li>{% endfor %}
</ul>
{% endif %}

<p class="meta cv-note">The complete record — every publication, presentation, grant, trial,
committee and award — is on the <a href="{{ '/cv/' | relative_url }}">full CV page</a>{% if site.cv and site.cv != "" %}, or as a <a href="{{ site.cv | relative_url }}">PDF</a>{% endif %}.</p>
