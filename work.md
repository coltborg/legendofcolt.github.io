---
layout: default
title: My Work
description: A collection of Colt Borg's portfolio
twitter-card-img: "/images/twitter-card-work@2x.png"
permalink: /work/
---

<section class="all-work wrap clearfix">
  <header class="post-header">
    <h1>{{ page.title }}</h1>
  </header>

  <ul class="project-list">
    {% for project in site.categories['project'] %}
      {% include project.html %}
    {% endfor %}
  </ul>
</section>
