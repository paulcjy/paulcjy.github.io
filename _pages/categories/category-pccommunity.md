---
title: "학생 커뮤니티 사이트"
layout: archive
permalink: categories/pccommunity
author_profile: true
---

{% assign posts = site.categories['PC Community'] %}

{% for post in posts %}
	{% include archive.html type=page.entries_layout %}
{% endfor %}