---
title: "MHPTT Artifacts"
subtitle: "Eight competencies, eleven outcome areas, twenty-two artifacts."
permalink: /artifacts/
---

The Master of Health Professions Teaching & Technology is built around eight core
competencies. Three of them — Research, Leadership, and Learner Assessment — carry two
distinct sub-statements each, which is why eight competencies are evidenced across eleven
pages. Each page presents two artifacts with a description of what the work required and a
reflection on what it changed.

<ul class="cards">
{% assign items = site.competencies | sort: "order" %}
{% for c in items %}
  <li class="card">
    <a href="{{ c.url | relative_url }}">
      <span class="card-num">{{ c.number }}</span>
      <span class="card-name">{{ c.name }}</span>
      <p class="card-stmt">{{ c.statement | strip_newlines | truncate: 155 }}</p>
    </a>
  </li>
{% endfor %}
</ul>
