---
layout: default
title: Home
---

<section class="hero">
  <p class="eyebrow">Design · Creativity · User Experience</p>
  <h1>Nugget of Joy</h1>
  <p class="intro">Ideas, resources, and explorations in design and digital creativity.</p>
</section>

<section class="section-heading">
  <h2>Latest Posts</h2>
</section>

<div class="post-list">
  {% assign recent_posts = site.posts | sort: "date" | reverse %}
  {% for post in recent_posts limit: 10 %}
    <article class="post-card">
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 220 }}</p>{% endif %}
      {% if post.categories.size > 0 %}<p class="taxonomy">{% for category in post.categories %}<span>{{ category }}</span>{% endfor %}</p>{% endif %}
    </article>
  {% else %}
    <p class="empty-state">The first articles will appear here after the WordPress content is imported.</p>
  {% endfor %}
</div>
