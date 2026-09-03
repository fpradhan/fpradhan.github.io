---
title: "MHPTT Artifacts"
description: "The MHPTT outcome areas and the artifacts evidencing each."
permalink: /artifacts/
wide: true
---

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
