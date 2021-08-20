---
title: "Github Pages로 블로그 만들기"
layout: archive
permalink: /categories/github-pages/
author_profile: true
---

{% assign posts = site.categories['Github Pages'] %}

{% for post in posts %}
	{% include archive-single.html type=page.entries_layout %}
{% endfor %}