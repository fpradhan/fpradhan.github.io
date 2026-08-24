---
title: "MHPTT Artifacts"
description: "The eight MHPTT competencies, across the eleven outcome areas that evidence them."
subtitle: "Eight competencies, evidenced across eleven outcome areas."
permalink: /artifacts/
wide: true
---

The Master of Health Professions Teaching & Technology is built around eight core
competencies. Three of them — Research, Leadership, and Learner Assessment — carry two
distinct sub-statements each, which is why eight competencies are evidenced across eleven
pages. Each page states its outcome, then presents the artifacts evidencing it — what the work
required, what it demonstrates, and the file itself.

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
