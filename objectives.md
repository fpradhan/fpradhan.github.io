---
title: "MHPTT Competencies"
description: "The MHPTT competencies and the artifacts evidencing each."
permalink: /competencies/
redirect_from:
  - /objectives/
  - /artifacts/
wide: true
---

<ul class="index-list">
{%- assign items = site.competencies | sort: "order" -%}
{%- for c in items %}
  <li class="index-item">
    <span class="index-num" aria-hidden="true">{{ c.number }}</span>
    <div class="index-text">
      <h2 class="index-name"><a href="{{ c.url | relative_url }}"><span class="sr-only">{{ c.number }}. </span>{{ c.name }}</a></h2>
      {%- if c.statements and c.statements.size > 0 %}
      {%- for s in c.statements %}
      <p class="index-stmt"><span class="part">{{ s.part }}</span>{{ s.text | strip_newlines }}</p>
      {%- endfor %}
      {%- else %}
      <p class="index-stmt">{{ c.statement | strip_newlines }}</p>
      {%- endif %}
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
