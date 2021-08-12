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
일단은 웹을 만들 것이므로 `react-router-dom`을 설치했다.

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

파일을 분류하기 위해 `/src` 아래에 `components`와 `routes` 폴더를 만들고, 페이지들은 `routes` 폴더에 정리했다.
```
src
 ┣ components
 ┗ routes
    ┣ Home.js
    ┣ Calendar.js
    ┣ Timetable.js
    ┗ Menu.js
```

<br>
홈은 [(4) React와 Express 연동][link1]에서 사용한 `App.js`와 같다

Home.js
```js
import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = {
        isLoading: true,
        title: null,
        content: null,
        data: []
    }

    async getUsers() {
        const res = await axios.get('/users');
        this.setState({
            isLoading: false,
            title: res.data.title,
            content: res.data.content,
        });
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const { isLoading, title, content } = this.state;
        return (
            <div>
                { isLoading ?
                <div>Loading...</div> :
                (
                    <div>
                        <h1>{ title }</h1>
                        <p>{ content }</p>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Home;
```

<br>
나머지 페이지들은 페이지가 바뀌는 것만 확인하기 위해 간단히 페이지 이름만 띄우도록 만들었다.

<br>
Calendar.js

```js
import React from 'react';

class Calendar extends React.Component {
    render() {
        return (
            <div>학사일정</div>
        );
    }
}

export default Calendar;
```

<br>
Timetable.js

```js
import React from 'react';

class Timetable extends React.Component {
    render() {
        return (
            <div>학사일정</div>
        );
    }
}

export default Timetable;
```

<br>
Menu.js

```js
import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div>학사일정</div>
        );
    }
}

export default Menu;
```

<br>
<br>
<br>

# 3. Router 구현하기

라우터는 `App.js` 파일에 구현할 것이다.

<br>
먼저 `react-router-dom`을 사용하기 위해 `import` 한다.
내가 사용할 것은 `Route`와 `BrowserRouter`이다.

```js
import { Route, BrowserRouter } from 'react-router-dom';
```

<br>
앞서 만든 페이지들을 사용하기 위해 import 한다.

```js
import Home from './routes/Home';
import Calendar from './routes/Calendar';
import Timetable from './routes/Timetable';
import Menu from './routes/Menu';
```

<br>
이제 App에 라우터를 적용해야 한다. 라우터는 사용할 경로와 경로에 연결할 컴포넌트를 지정해 주어야 한다. 그리고 BrowserRouter로 감싸준다.

```jsx
<BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route path='/calendar' component={Calendar} />
    <Route path='/timetable' component={Timetable} />
    <Route path='/menu' component={Menu} />
</BrowserRouter>
```



[link1]: https://paulcjy.github.io/pc%20community/004-react-express-%EC%97%B0%EB%8F%99/