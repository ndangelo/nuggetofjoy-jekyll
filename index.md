---
layout: default
title: Home
description: A working archive of design briefs, course materials, tutorials, and creative experiments.
---

{% assign home = site.data.homepage %}
<section class="noj-hero">
  <div class="noj-wrap">
    <p class="noj-kicker">{{ home.hero_kicker | default: "communication · art · design · instruction" | escape }}</p>
    <h1>{{ home.hero_heading_start | default: "Ideas for making," | escape }}<br><em>{{ home.hero_heading_emphasis | default: "thinking, and learning." | escape }}</em></h1>
    <p class="noj-intro">{{ home.hero_intro | default: "A working archive of design briefs, course materials, tutorials, and creative experiments." | escape }}</p>
    <div class="noj-hero-tools">
      <form class="noj-search" role="search" action="{{ '/search/' | relative_url }}" method="get">
        <label class="screen-reader-text" for="noja-search-hero">Search all content</label>
        <input id="noja-search-hero" type="search" name="s" placeholder="{{ home.search_placeholder | default: 'Search the archive…' | escape }}">
        <button type="submit">Search</button>
      </form>
      <a class="noj-text-link" href="#archive">{{ home.browse_link_text | default: "browse the archive ↓" | escape }}</a>
    </div>
    <div class="noj-category-list" aria-label="Popular topics">
      {% for item in home.homepage_links %}
      <a href="{{ item.url | relative_url }}">{{ item.label | escape }}</a>
      {% endfor %}
    </div>
  </div>
</section>

<section id="recent" class="noj-section">
  <div class="noj-wrap">
    <div class="noj-section-head">
      <div>
        <p class="noj-kicker">{{ home.recent_kicker | default: "recently added" | escape }}</p>
        <h2>{{ home.recent_heading | default: "From the archive" | escape }}</h2>
        <p class="noj-small-note">{{ home.recent_description | default: "New and updated resources, newest first." | escape }}</p>
      </div>
    </div>
    <div class="noj-content-list">
      {% assign recent_posts = site.posts | sort: "date" | reverse %}
      {% assign recent_limit = home.recent_posts_limit | default: 12 %}
      {% for post in recent_posts limit: recent_limit %}
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
      <p class="noj-kicker">{{ home.archive_kicker | default: "keep exploring" | escape }}</p>
      <h2>{{ home.archive_heading | default: "Good ideas are worth revisiting." | escape }}</h2>
      <p>{{ home.archive_description | default: "Browse older course materials and design resources. This archive is generated from published posts, rather than a manually maintained list." | escape }}</p>
      <a class="noj-text-link" href="#recent">{{ home.return_link_text | default: "return to recent resources ↑" | escape }}</a>
    </div>
    <div>
      <p class="noj-kicker">{{ home.year_list_kicker | default: "browse by year" | escape }}</p>
      <ul class="noj-year-list">
        {% assign year_groups = site.posts | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}
        {% for year in year_groups %}
        <li><span>{{ year.name }}</span><span>{{ year.items | size }}</span></li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>
