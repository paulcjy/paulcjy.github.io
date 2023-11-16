---
title: Github Pages로 블로그 만들기 (8) - 카테고리와 태그 모아보기
category: Github Pages
created: 2021-08-11
description:
---

글을 여러 개 작성하다 보니 원하는 글을 찾아가기가 힘들게 되었다. 글 목록을 보려면 `Home` 화면의 `최근 포스트`로 봐야 한다. 그러나 글이 많아지면 한 페이지에 5개 밖에 안나오므로 원하는 글을 찾기도 힘들어지고, 카테고리별로 분류가 안되어있어 복잡해진다. 그래서 카테고리별로 글을 모아 보는 페이지를 만들었다. 기준이 되는 카테고리는 Front Matter에 작성한 `categories` 항목이다.

<br><br><br>

# 1. \_pages 폴더 생성

포스트가 아닌 모든 페이지들은 `_pages` 폴더에 있어야 한다. 루트 디렉토리에 `_pages`라는 이름으로 폴더를 만들어준다.

---

# 2. Categories 페이지 생성

`/_pages`에 카테고리를 모아 볼 페이지를 만들어준다. 나는 `categories.md`라는 이름으로 파일을 생성했다.

파일 안에는 간단하게 **Front Matter**만 작성하면 끝난다.

```
---
title: "Posts by Category"
layout: categories
permalink: /categories/
---
```

- `title`: 카테고리 페이지의 제목이다.
- `layout`: 이 페이지의 레이아웃이다. `categories`로 설정하면 된다.
- `permalink`: 이 페이지의 url을 설정하는 부분이다. `/categories/`로 설정하면 된다.

  이 부분은 링크의 앞뒤로 `/`가 들어가 있다.
  없는 것과 똑같다고 생각했는데, `/`를 뺐을 때 문제가 생겼다.
  **_username_.github.io/categories**와 **_username_.github.io/categories/**를 다르게 인식했다.
  확실하게 하기 위해서 앞뒤로 `/`를 넣어주자.

<br>

이렇게만 하면 **_username_.github.io/categories/**으로 접속했을 때 포스트가 카테고리별로 모아져 있는 것을 확인할 수 있다.

![image](https://user-images.githubusercontent.com/86853786/130371742-cd7a9b05-7400-4938-8f8e-8b6dd62ad168.png)

---

# 3. Tags 페이지 생성

태그 페이지는 카테고리 페이지와 거의 동일하다. 똑같이 `/_pages` 폴더에 파일을 하나 만들어준다. 나는 `tags.md`로 만들었다. 그리고 **Front Matter**를 작성한다.

```
---
title: "Posts by Tag"
layout: tags
permalink: /tags/
---
```

`layout`과 `permalink`를 위와 같이 적었다면 자동으로 태그를 모아주는 페이지가 생성된다.

<br>

**_username_.github.io/tags/**로 접속하면 내가 만들어놓은 태그별로 포스트를 모아볼 수 있다.

![image](https://user-images.githubusercontent.com/86853786/130371753-3adb3c26-6481-4ffd-87c9-8757cf2fce88.png)
