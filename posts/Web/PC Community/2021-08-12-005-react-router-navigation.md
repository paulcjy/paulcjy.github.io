---
title: '학생 커뮤니티 사이트 제작 (5) - React Router & Navigation'
created: 2021-08-11
description:
---

<br>

이제 네비게이션을 만들고 각 메뉴를 눌렀을 때 해당 페이지로 이동하는 기능을 구현하려고 한다.
고등학교를 대상으로 하기 때문에 학교의 학사일정, 시간표, 식단표 등을 나이스 API에서 불러와 페이지에 띄울 것이다.
그러기 위해서 React의 router를 사용한다.
원래 구현하고 싶은 방법은 사용자가 백엔드로 요청을 보내면 백엔드에서 처리하여 React를 통해 돌려주는 것이지만 React router를 이용한 방법이 더 쉬워보여서 일단 이 방법을 사용했다.

<br>
<br>

# 1. Router 설치

React router에는 3가지가 있다고 한다.

- react-router - 웹 & 앱
- react-router-dom - 웹
- react-router-native - 앱

<br>
일단은 웹을 만들 것이므로 `react-router-dom`을 설치했다.

    > npm install react-router-dom

<br>
<br>
<br>

# 2. 페이지 만들기

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

`Home.js`

```jsx
import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  state = {
    isLoading: true,
    title: null,
    content: null,
    data: [],
  };

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
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
```

<br>
나머지 페이지들은 페이지가 바뀌는 것만 확인하기 위해 간단히 페이지 이름만 띄우도록 만들었다.

<br>
`Calendar.js`

```jsx
import React from 'react';

class Calendar extends React.Component {
  render() {
    return <div>학사일정</div>;
  }
}

export default Calendar;
```

<br>
`Timetable.js`

```jsx
import React from 'react';

class Timetable extends React.Component {
  render() {
    return <div>학사일정</div>;
  }
}

export default Timetable;
```

<br>
`Menu.js`

```jsx
import React from 'react';

class Menu extends React.Component {
  render() {
    return <div>학사일정</div>;
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
  <Route path="/" component={Home} />
  <Route path="/calendar" component={Calendar} />
  <Route path="/timetable" component={Timetable} />
  <Route path="/menu" component={Menu} />
</BrowserRouter>
```

이렇게 하면 `http://localhost:3000/`에서는 `Home.js`가 나오고, `http://localhost:3000/calendar`에서는 `Calendar.js`가 나온다.

<br>
그런데 문제가 생겼다. 실제로 `http://localhost:3000/calendar`로 접속해보니 `Home.js`와 `Calendar.js`가 모두 렌더링된다.

![/calendar 페이지][img1]

이건 React의 라우터가 `BrowserRouter` 내부의 모든 `Route`를 지나면서 해당되는 경로를 모두 불러오기 때문이라고 한다. 즉, `http://localhost:3000/calendar`의 `/calendar`에는 맨 앞에 `/`가 있기 때문에 `Home`을 렌더링한다. 아래로 내려오면서 `/calendar`를 만나면 해당되는 경로이기 때문에 또 `Calendar`를 렌더링한다. 이런식으로 `Route` 중에 하나만 띄우는 것이 아니라 중복되는 것이 있어도 경로가 맞기만 하면 모두 렌더링하기 때문에 설정을 신경써서 하지 않으면 원하지 않는 결과가 나올 수 있다.

<br>
이 문제를 피하려면 `exact`를 사용하면 된다. `Route` 안에 `exact` 혹은 `exact={true}`를 적으면 `path`로 주어진 경로와 완벽히 일치할 때만 해당 컴포넌트를 렌더링한다.

위의 경우에는 `/`의 `Route`에만 `exact`를 넣으면 문제가 해결된다.

```jsx
<Route exact path="/" component={Home} />
```

<br>
이제 주소창에 `/`, `/calendar`, `/timetable`, `/menu`를 입력할 때마다 해당 페이지들이 잘 나오는 것을 볼 수 있다.

![/][img2]
![/calendar][img3]
![/timetable][img4]
![/menu][img5]

<br>
<br>
<br>

# 4. Navigation 만들기

클릭으로 페이지를 옮겨다닐 수 있도록 네비게이션을 만들었다.
`/src/components`에 `Navigation.js` 파일을 생성한다.
각 페이지로 이동할 수 있도록 링크를 만들어야 하는데, React 라우터를 쓸 때는 react-router-dom에서 제공하는 `Link` 태그를 사용한다.
`Link` 태그의 속성값 `to`로 경로를 지정해주면 해당 경로로 이동하는 링크를 만들 수 있다.

먼저 `Link`를 사용하기 위해서는 `Link`를 `import` 해야한다.

```js
import { Link } from 'react-router-dom';
```

<br>
그리고 `Link` 태그를 이용하여 아래의 형식으로 링크를 만들어준다.

```jsx
<Link to="path">text</Link>
```

<br>
나는 리스트를 이용하여 링크를 만들었다. 전체 파일의 내용은 다음과 같다.

`Navigation.js`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calendar">학사일정</Link>
        </li>
        <li>
          <Link to="/timetable">시간표</Link>
        </li>
        <li>
          <Link to="/menu">식단표</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
```

<br>
이제 `App.js`에 `Navigation.js`를 추가하고 네비게이션 컴포넌트를 넣어준다.

완성된 `App.js`의 모습이다.

```jsx
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './routes/Home';
import Calendar from './routes/Calendar';
import Timetable from './routes/Timetable';
import Menu from './routes/Menu';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/timetable" component={Timetable} />
        <Route path="/menu" component={Menu} />
      </BrowserRouter>
    );
  }
}

export default App;
```

<br>
접속해보면 페이지에 네비게이션이 뜨고 각 링크를 클릭했을 때 잘 작동하는 것을 볼 수 있다.

![네비게이션 페이지][img6]

<br>

## \<Link>와 \<a>

HTML에서는 링크를 만들 때는 `<a>` 태그를 이용한다. 그러나 React에서는 `<Link>`를 사용하는 것이 좋다.
React는 SPA(Single Page Application)라서 한 번 페이지가 로드되면 다른 페이지로 이동해도 서버에 페이지를 새로 요청하지 않고 필요한 부분만 수정한다. 그래서 `<Link>`를 사용하면 페이지가 새로고침 되지는 않지만 다른 페이지로 이동하게 된다. 그러나 `<a>`를 사용하면 해당 url로 서버에 다시 요청을 보내게 되고, 페이지는 새로고침 된다.

지금까지 만든 페이지로는 `<Link>`를 사용하든 `<a>`를 사용하든 별 문제는 없지만 `<a>`를 사용하면 페이지가 새로고침 되는 것을 볼 수 있다.

<br>

## NavLink

`NavLink`는 `Link`와 같은 기능이지만 해당 링크에 있을 때만 네비게이션의 스타일이나 클래스를 지정할 수 있다. 스타일을 지정할 때는 `activeStyle` 속성을 사용하고, 클래스를 지정할 때는 `activeClassName` 속성을 사용한다.

<br>
`<NavLink>`를 사용하기 위해서는 `react-router-dom`에서 `NavLink`를 불러와야 한다.

```js
import { NavLink } from 'react-router-dom';
```

<br>
현재 페이지에 해당하는 링크를 빨간색으로 바꿔보겠다.

`Navigation.js`

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const activeStyle = {
    color: 'red',
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" activeStyle={activeStyle}>
            학사일정
          </NavLink>
        </li>
        <li>
          <NavLink to="/timetable" activeStyle={activeStyle}>
            시간표
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeStyle={activeStyle}>
            식단표
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
```

<br>
잘 작동한다.

![NavLink 적용][img7]

[link1]: https://paulcjy.github.io/pc%20community/004-react-express-%EC%97%B0%EB%8F%99/
[img1]: https://user-images.githubusercontent.com/86853786/129266795-c52ddb79-cf3c-48d7-8d46-84338883182f.png
[img2]: https://user-images.githubusercontent.com/86853786/129268618-545b5b2d-12d8-4bc9-b75d-65232cf28ac1.png
[img3]: https://user-images.githubusercontent.com/86853786/129268667-07921d6e-c5e7-469f-b91a-283ab9828c5c.png
[img4]: https://user-images.githubusercontent.com/86853786/129268701-1ebb6db8-580f-43f9-a9a7-d80a925ab734.png
[img5]: https://user-images.githubusercontent.com/86853786/129268749-b6f58fd0-de67-4689-ac6c-16be86dcb23e.png
[img6]: https://user-images.githubusercontent.com/86853786/129272977-d3ee37af-5397-42a0-9197-3b6db68349c1.png
[img7]: https://user-images.githubusercontent.com/86853786/129276878-af90c8fe-5e84-47ba-bf49-f2c6533a433b.png
