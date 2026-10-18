---
layout: default
title: Home
description: A working archive of design briefs, course materials, tutorials, and creative experiments.
---

<section class="noj-hero">
  <div class="noj-wrap">
    <p class="noj-kicker">communication · art · design · instruction</p>
    <h1>Ideas for making,<br><em>thinking, and learning.</em></h1>
    <p class="noj-intro">A working archive of design briefs, course materials, tutorials, and creative experiments. Search a topic or browse the resources below.</p>
    <div class="noj-hero-tools">
      <form class="noj-search" role="search" action="{{ '/' | relative_url }}" method="get">
        <label class="screen-reader-text" for="noja-search-hero">Search all content</label>
        <input id="noja-search-hero" type="search" name="s" placeholder="Search the archive…">
        <button type="submit">Search</button>
      </form>
      <a class="noj-text-link" href="#archive">browse the archive ↓</a>
    </div>
    <div class="noj-category-list" aria-label="Popular topics">
      <a href="#recent">Recently added</a>
      <a href="#archive">Browse by year</a>
      <a href="{{ '/about/' | relative_url }}">About Nugget of Joy</a>
    </div>
  </div>
</section>

<section id="recent" class="noj-section">
  <div class="noj-wrap">
    <div class="noj-section-head">
      <div>
        <p class="noj-kicker">recently added</p>
        <h2>From the archive</h2>
        <p class="noj-small-note">New and updated resources, newest first.</p>
      </div>
    </div>
    <div class="noj-content-list">
      {% assign recent_posts = site.posts | sort: "date" | reverse %}
      {% for post in recent_posts limit: 12 %}
      <a class="noj-content-row" href="{{ post.url | relative_url }}">
        <span class="noj-row-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        <span>
          <h3 class="noj-row-title">{{ post.title | escape }}</h3>
          {% if post.description %}<p class="noj-row-excerpt">{{ post.description | strip_html | truncate: 220 }}</p>{% elsif post.excerpt %}<p class="noj-row-excerpt">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 220 }}</p>{% endif %}
          <span class="noj-row-type">Post</span>
        </span>
        <span class="noj-row-arrow" aria-hidden="true">↗</span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<section id="archive" class="noj-archive">
  <div class="noj-wrap noj-archive-grid">
    <div>
      <p class="noj-kicker">keep exploring</p>
      <h2>Good ideas are worth revisiting.</h2>
      <p>Browse older course materials and design resources. This archive is generated from published posts, rather than a manually maintained list.</p>
      <a class="noj-text-link" href="#recent">return to recent resources ↑</a>
    </div>
    <div>
      <p class="noj-kicker">browse by year</p>
      <ul class="noj-year-list">
        {% assign year_groups = site.posts | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}
        {% for year in year_groups %}
        <li><span>{{ year.name }}</span><span>{{ year.items | size }}</span></li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>
