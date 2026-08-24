---
title: "Contact"
description: "Get in touch with Faruq Pradhan, Transplant Hepatologist at the University of Nebraska Medical Center."
subtitle: "Thank you for taking the time to look through this portfolio."
permalink: /contact/
---

I would be glad to hear from you — about the work here, about hepatology education, or about
teaching and curriculum design more generally.
{: .lede}

## Reach me

<dl class="facts" markdown="1">
<dt>Email</dt>
<dd><a href="mailto:{{ site.email }}">{{ site.email }}</a></dd>
<dt>Telephone</dt>
<dd>{{ site.phone }}</dd>
<dt>Department</dt>
<dd>Division of Gastroenterology and Hepatology<br>
University of Nebraska Medical Center, Omaha, Nebraska</dd>
</dl>

## Elsewhere

{% if site.profiles and site.profiles.size > 0 %}
<ul class="links">
{% for pr in site.profiles %}<li><a href="{{ pr.url }}" rel="me noopener">{{ pr.name }}</a></li>{% endfor %}
</ul>
{% else %}
<p class="todo">Add your LinkedIn, X/Twitter, Google Scholar and PubMed links under
<code>profiles:</code> in <code>_config.yml</code>. They will appear here, on the Resume / CV
page, and in the site footer.</p>
{% endif %}

## Send a message

{% if site.form_endpoint and site.form_endpoint != "" %}
<form class="form" action="{{ site.form_endpoint }}" method="POST">
  <div class="field">
    <label for="f-name">Name</label>
    <input type="text" id="f-name" name="name" autocomplete="name" required>
  </div>
  <div class="field">
    <label for="f-email">Email</label>
    <input type="email" id="f-email" name="email" autocomplete="email" required>
  </div>
  <div class="field">
    <label for="f-subject">Subject</label>
    <input type="text" id="f-subject" name="subject">
  </div>
  <div class="field">
    <label for="f-message">Message</label>
    <textarea id="f-message" name="message" required></textarea>
  </div>
  <button class="btn" type="submit">Send message</button>
</form>
{% else %}
<p class="todo"><strong>Form not yet connected.</strong> GitHub Pages serves static files and
cannot process a form submission on its own, so the form needs an external handler —
<a href="https://formspree.io">Formspree</a>, <a href="https://usebasin.com">Basin</a> or
similar. Create an endpoint, paste the URL into <code>form_endpoint:</code> in
<code>_config.yml</code>, and the form appears here. Until then the email address above is the
working route, so nothing on this page is broken.</p>
{% endif %}
