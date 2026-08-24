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
<p class="cv-contact"><a href="mailto:fpradhan@unmc.edu">fpradhan@unmc.edu</a> · 402-559-5200 · Omaha, Nebraska</p>
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
<dt>Medical Director, Adult Liver Transplantation<span class="when">2026 – present</span></dt>
<dt>Assistant Professor of Medicine, Transplant Hepatology<span class="when">2022 – present</span></dt>
<dt>Core Faculty, Gastroenterology and Transplant Hepatology fellowships<span class="when">2022 – present</span></dt>
</dl>

## Education and training

| Years | Position | Institution |
|---|---|---|
| 2023 – present | MS, Health Professions Teaching &amp; Technology *(expected 12/2026)* | University of Nebraska Medical Center |
| 2021 – 2022 | Transplant Hepatology Fellowship | University of Nebraska Medical Center |
| 2018 – 2021 | Gastroenterology Fellowship *(Chief Fellow, 2020–21)* | University of Arizona College of Medicine – Phoenix |
| 2017 – 2018 | Chief Resident, Internal Medicine | Lahey Hospital &amp; Medical Center |
| 2014 – 2017 | Internal Medicine Residency | Lahey Hospital &amp; Medical Center |
| 2009 – 2014 | MB BCh BAO *(MD equivalent)* | Royal College of Surgeons in Ireland |
{: .table-scroll}

## Board certification and licensure

- **American Board of Internal Medicine** — Transplant Hepatology, Gastroenterology, Internal Medicine
- **Royal College of Physicians of Canada** — Internal Medicine, Gastroenterology *(FRCPC)*
- **Royal College of Physicians &amp; Surgeons of Ireland** — Licentiate *(LRCP&amp;SI)*
- Full Nebraska medical license

## Areas of expertise

**Education** — curriculum design and course direction; e-learning and module development; simulation-based and procedural teaching; assessment design, item writing and psychometric analysis; mentorship of students, residents and fellows.

**Clinical** — liver transplantation and post-transplant care; cirrhosis and portal hypertension; short bowel syndrome and intestinal transplantation; diagnostic and therapeutic endoscopy.

**Research** — principal investigator on industry-sponsored trials; real-world database and propensity-matched analyses; national survey research; quality improvement in the transplant pathway.

## Educational leadership

<dl class="cv-list" markdown="0">
<dt>Course Director and Founder, Enhanced Medical Education Track<span class="when">2023 – present</span></dt>
<dd><em>Combined Medical and Surgical Integrated Track in Liver Transplantation</em> — a four-year supplemental medical school curriculum in hepatology and transplant medicine, established with the Department of Surgery and enrolling two to three students a year.</dd>
<dt>Item Writing Committee, Gastroenterology — ABIM<span class="when">2025 – present</span></dt>
<dt>Transplant Hepatology Blueprint Reviewer — ABIM<span class="when">2025</span></dt>
<dt>Interprofessional Academy of Educators — UNMC<span class="when">2025 – present</span></dt>
<dt>Academy of Educators — American Gastroenterological Association<span class="when">2024 – present</span></dt>
<dt>Faculty Advisor, Gastroenterology Fellowship Wellness<span class="when">2022 – 2025</span></dt>
</dl>

## Selected honors and awards

<dl class="cv-list" markdown="0">
<dt>Outstanding Research Award, Small Intestine — American College of Gastroenterology<span class="when">2025</span></dt>
<dt>E-Learning Innovator Award — UNMC<span class="when">2025</span></dt>
<dt>Internal Medicine Fellowship Top Teacher Award — UNMC<span class="when">2023</span></dt>
<dt>Honoree, Research Innovation Awards — UNMC<span class="when">2023</span></dt>
<dt>Citation of Excellence in Teaching — nominated by Tufts University medical students<span class="when">2016</span></dt>
</dl>

## Scholarship

**21 peer-reviewed publications · 13 book chapters · 10 oral and 52 poster presentations · 17 invited talks · 4 education grants · 3 trials as principal investigator**
{: .meta}

Selected publications:

<ol class="cites" markdown="0">
<li>Pradhan, F., Winters, A. C., Aby, E. S., Singh, N., &amp; Pillai, A. (2026). H-1B visa changes and its impact on transplant workforce. <em>Transplantation, 110</em>(4).</li>
<li>Aby, E.&dagger;, Pradhan, F.&dagger;, King, L., et al. (2025). Workload, compensation, and institutional support among US transplant hepatologists: Results of a national survey. <em>Liver Transplantation</em>. &dagger; Co-first authorship.</li>
<li>Pradhan, F., Fiedler, A., Olivera-Martinez, M., Manatsathit, W., &amp; Peeraphatdit, T. (2024). Artificial intelligence compared with human-derived patient educational materials on cirrhosis. <em>Hepatology Communications, 8</em>(3).</li>
<li>Pradhan, F., Ravipati, P., &amp; Slocum, Z. P. (2023). With great power comes great responsibility: AI and its future in medical education. <em>Graduate Medical Education Research Journal, 5</em>(2).</li>
</ol>

Invited talks are listed on the [Teaching](/teaching/) page.

## Professional memberships

American Society of Transplantation *(Intestinal Sub-Committee Chair; Executive Committee Member-at-Large)* · American Gastroenterological Association · American College of Gastroenterology · American Association for the Study of Liver Diseases

{% if site.profiles and site.profiles.size > 0 %}
<ul class="links">
{% for pr in site.profiles %}<li><a href="{{ pr.url }}" rel="me noopener">{{ pr.name }}</a></li>{% endfor %}
</ul>
{% endif %}

<p class="meta cv-note">The complete record — every publication, presentation, grant, trial,
committee and award — is in the <a href="{% if site.cv and site.cv != "" %}{{ site.cv | relative_url }}{% else %}/cv/{% endif %}">full CV</a>.</p>
