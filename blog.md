---
layout: default
title: All Articles
description: A blog about web development and life
twitter-card-img: "/images/twitter-card-blog@2x.png"
permalink: /blog/
---

<section class="all-posts">
  <div class="wrap clearfix">
    <header class="post-header">
      <h1>{{ page.title }}</h1>
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
