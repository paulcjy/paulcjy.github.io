---
title: "학생 커뮤니티 사이트 제작 (5) - React Router"
excerpt: "React에서 Router 기능 이용하여 네비게이션 만들기"
date: 2021-08-12

categories:
  - PC Community

tags:
  - [Node.js, React, Route, React-router]
---



<br>

이제 네비게이션을 만들고 각 메뉴를 눌렀을 때 해당 페이지로 이동하는 기능을 구현하려고 한다.
고등학교를 대상으로 하기 때문에 학교의 학사일정, 시간표, 식단표 등을 나이스 API에서 불러와 페이지에 띄울 것이다.
그러기 위해서 React의 router를 사용한다.
원래 구현하고 싶은 방법은 사용자가 백엔드로 요청을 보내면 백엔드에서 처리하여 React를 통해 돌려주는 것이지만 React router를 이용한 방법이 더 쉬워보여서 일단 이 방법을 사용했다.

<br>
<br>

# 1. 준비물

React router에는 3가지가 있다고 한다.
- react-router        - 웹 & 앱
- react-router-dom    - 웹
- react-router-native - 앱

<br>
일단은 웹을 만들 것이므로 react-router-dom을 설치했다.

	> npm install react-router-dom

<br>
<br>
<br>

# 2. 각 페이지 만들기

4개의 페이지를 만들었다.
- 홈 - Home.js
- 학사일정 - Calendar.js
- 시간표 - Timetable.js
- 식단표 - Menu.js

<br>
홈은 4번 글 [React][1]에서 사용한 App.js와 같다

[1]: https://paulcjy.github.io/pc%20community/004-react-express-%EC%97%B0%EB%8F%99/