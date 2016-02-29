---
layout: default
title: My Work - Colt Borg
description: A collection of Colt Borg's portfolio
header: my work
permalink: /work/
---

<section class="all-work wrap clearfix">
  <header class="post-header">
    <h1>{{ page.header }}</h1>
  </header>

  <ul class="project-list">
    {% for project in site.categories['project'] %}
      {% include project.html %}
    {% endfor %}
  </ul>
</section>
