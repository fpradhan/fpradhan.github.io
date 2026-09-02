---
title: "MHPTT Artifacts"
description: "The eight MHPTT competencies, across the eleven outcome areas that evidence them."
subtitle: "Eight competencies, evidenced across eleven outcome areas."
permalink: /artifacts/
wide: true
---

Eleven outcome areas, each evidenced by two artifacts. Every page states its outcome, then the
artifacts that evidence it: what the assignment required, what I took from it, and the file
itself.

The Master of Health Professions Teaching & Technology is built around eight competencies.
Research, Leadership and Learner Assessment each carry two sub-statements, which is why eight
competencies are evidenced across eleven pages.
{: .meta}

<ul class="index-list">
{%- assign items = site.competencies | sort: "order" -%}
{%- for c in items %}
  <li class="index-item">
    <span class="index-num" aria-hidden="true">{{ c.number }}</span>
    <div class="index-text">
      <h2 class="index-name"><a href="{{ c.url | relative_url }}"><span class="sr-only">{{ c.number }}. </span>{{ c.name }}</a></h2>
      <p class="index-stmt">{{ c.statement | strip_newlines }}</p>
      {%- if c.artifacts and c.artifacts.size > 0 %}
      <ul class="index-artifacts">
        {%- for a in c.artifacts %}
        <li>{{ a.title }}</li>
        {%- endfor %}
      </ul>
      {%- endif %}
    </div>
  </li>
{%- endfor %}
</ul>
