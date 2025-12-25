---
layout: default
title: "Home"
---
# Welcome

This is a collection of essays, fragments and reading notes about philosophy. Recent posts:

<ul>
{% for post in site.posts limit:6 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.date %}<small> — {{ post.date | date: "%Y-%m-%d"}}</small>{% endif %}
    {% if post.excerpt %}<p class="excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>

Want a specific structure (series, translations, primary texts)? I can add collections and layouts for that.
