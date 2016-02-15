---
layout: default
title: My Work
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
