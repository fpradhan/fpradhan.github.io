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

<p class="notice" markdown="1">**Not for clinical questions.** Please do not send questions about your own
care, another person's care, or any patient information through this form. Clinical questions are not
answered here. If you are a patient of Nebraska Medicine, contact your care team through
[One Chart | Patient](https://www.nebraskamed.com/patient-portal) or call your clinic. **In an emergency,
call 911.**</p>

{% if site.form_endpoint and site.form_endpoint != "" %}
<form class="form" action="{{ site.form_endpoint }}" method="POST">
{%- comment -%}
  Field names differ between handlers, so the two dialects are kept apart here
  rather than sending both and letting the unused ones show up in the email.
  `name`, `email`, `subject` and `message` are common to both.
{%- endcomment -%}
{%- if site.form_provider == "formspree" %}
  <input type="hidden" name="_next" value="{{ '/contact/thanks/' | absolute_url }}">
  <input type="hidden" name="_subject" value="Message from fpradhan.com">
  <input type="text" name="_gotcha" class="trap" tabindex="-1" autocomplete="off" aria-hidden="true">
{%- else %}
  <input type="hidden" name="access_key" value="{{ site.form_access_key }}">
  <input type="hidden" name="redirect" value="{{ '/contact/thanks/' | absolute_url }}">
  <input type="hidden" name="from_name" value="fpradhan.com">
  <input type="checkbox" name="botcheck" class="trap" tabindex="-1" autocomplete="off" aria-hidden="true">
{%- endif %}
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
  <p class="form-note">Goes to {{ site.email }}. I read everything, though a reply may take a few
  days during a clinical week.</p>
</form>
{% else %}
<p class="todo"><strong>Form not yet connected.</strong> GitHub Pages serves static files and
cannot process a form submission on its own, so delivery needs an external handler. The steps
are in the <code>form_endpoint</code> comment in <code>_config.yml</code>; fill that in and the
form appears here. Until then the email address above is the working route, so nothing on this
page is broken.</p>
{% endif %}
