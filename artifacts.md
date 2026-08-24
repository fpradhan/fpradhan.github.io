---
title: "MHPTT Artifacts"
description: "The eight MHPTT competencies across eleven outcome areas, with twenty-two artifacts of evidence."
subtitle: "Eight competencies, eleven outcome areas, twenty-two artifacts."
permalink: /artifacts/
wide: true
---

The Master of Health Professions Teaching & Technology is built around eight core
competencies. Three of them — Research, Leadership, and Learner Assessment — carry two
distinct sub-statements each, which is why eight competencies are evidenced across eleven
pages. Each page states the outcome, then presents two artifacts: what the work required,
what it demonstrates, and the file itself.

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
