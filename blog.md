---
layout: default
title: All Articles - Colt Borg
description: A blog about web development and life
header: all articles
permalink: /blog/
---

<section class="all-posts">
  <div class="wrap clearfix">
    <header class="post-header">
      <h1>{{ page.header }}</h1>
    </header>

    <ul class="post-list">
      {% for post in site.categories['blog'] %}
        <li class="post">
          {% include post.html %}
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
