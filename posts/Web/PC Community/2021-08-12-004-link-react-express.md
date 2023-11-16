---
title: '학생 커뮤니티 사이트 제작 (4) - React와 Express 연동'
created: 2021-08-11
description:
---

<br>

연동하는 두 가지 방법을 찾았다.

- Express의 view 부분을 React로 만든 HTML로 대체
- React 서버와 Express 서버를 연동

<br>
<br>

# 1. Express의 view를 React로

내가 처음 생각했던 방법은 이 방법이었다.
Express 만으로도 충분히 웹을 만들 수 있었기 때문이다.
Express를 배울 때, HTML 파일을 통해 페이지를 render 하는 것을 보고 이 부분만 React로 바꿔주면 된다고 생각했다.

그런데 구글링을 해 보니 대부분 React와 Express 서버를 각각 실행하고 둘을 연동하는 방법이 대부분이었다.
서버를 두 개나 실행하지 않고 한 개로 해결하고 싶어서 더 알아봤는데 당장 사용하기는 힘들어보였다.

방법은 React로 작업을 완성하고 build한 뒤 Express의 view로 설정해 주는 것이다.
자세히 알아보지는 않았지만 React 파일이 수정될 때마다 다시 build를 해서 Express로 옮겨줘야 될 것 같았다.
나는 React를 작업하면서 동시에 Express를 만들 것이기 때문에 이 방법은 넘어갔다.

> 나중에 실제로 배포할 때가 되면 자세히 알아보려고 한다.

<br>
<br>
<br>

# 2. React 서버와 Express 서버를 연동

구글링 해서 나온 결과가 대부분 이 방법이라서 따라하는 데 어려움이 없었다.
처음에는 복잡하게 느껴졌지만 막상 해보니 간단하고 원리도 어렵지 않았다.

이 방법을 사용하면 React 서버와 Express 서버가 모두 켜져야 한다.
사용자는 url을 통해 React 서버로 접속한다.
React 서버는 사용자가 요청한 정보를 돌려줘야 하는데, 이 때 필요한 내용을 Express 서버에 요청하는 방식이다.
React는 Express에서 받은 정보를 화면에 그린 뒤 사용자에게 돌려준다.

그러기 위해서는 React와 Express 서버를 별도의 포트로 켜고, React의 package.json에 프록시를 추가해야 한다.
React와 Express 모두 기본적으로 3000번 포트를 사용하는데, 둘 중 하나를 다른 포트로 바꿔주면 된다.
<br><br>

## React 포트 변경하기

React의 포트를 변경하는 방법은 여러가지가 있다.

<br>

### 1) 명령어로 실행하기

명령어에 포트 번호를 지정하여 서버를 실행시키는 방법이다.
기본값인 3000번 포트는 설정 파일에 저장되어 있으므로 이 방법은 일회성인 방법이다.

    > PORT=3001 npm start

<br>
검색해보니 위 명령어를 사용하면 된다고 하는데, 내 컴퓨터(윈도우)에서는 실행이 되지 않는다.
powershell과 cmd 둘 다 되지 않았다.
아마 linux의 명령어인 것 같다.

cmd에서는 아래 명령은 가능했다.

    > set PORT=3001 && npm start

> 왜 안되는지 알려면 powershell과 cmd에 대해 공부해야 할 것 같다.

<br>
어쨌든 성공적으로 실행되었다면 React 서버를 열 때 나오는 문구가 똑같이 뜬다.

```
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3001
  On Your Network:  http://192.168.219.109:3001

Note that the development build is not optimized.
To create a production build, use yarn build.
```

포트 번호가 3001로 바뀐 것을 확인할 수 있다.

<br>

### 2) package.json 수정하기

React 서버를 실행시킬 때는 `npm start` 명령을 이용하는데, 이 때 무슨 명령을 실행할 지가 `package.json`에 저장되어 있다.

```json
"scripts": {
    "start": "react-scripts start",
    ...
}
```

이것이 기본 설정이다.
`npm start`를 실행하면 `react-scripts start`라는 명령이 실행된다는 뜻이다.
여기에 포트 번호를 지정해주면 앞으로 `npm start`를 쓸 때마다 지정된 포트로 열리게 된다.

#### Windows

```json
"scripts": {
    "start": "set PORT=3001 && react-scripts start",
    ...
}
```

#### Linux, Mac OS

```json
"scripts": {
    "start": "export PORT=3001 && react-scripts start",
    ...
}
```

> 이 방법이 가장 사용하기 편리한 것 같다.

<br>

### 3) .env 파일 생성하기

프로젝트 폴더에 ".env"라는 이름의 파일을 생성한다.
파일에 원하는 포트 번호를 적고 `npm start`를 실행시키면 된다.

.env 파일

    PORT=3001

<br>
명령어 실행

    > npm start

<br>

### 4) 포트 설정 변경하기

3000번으로 설정된 기본 설정값을 변경하는 것이다.

프로젝트 폴더의 `node_modules/react-scripts/scripts/start.js` 파일에 설정값이 있다.

```js
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3001;
const HOST = process.env.HOST || '0.0.0.0';
```

`DEFAULT_PORT`의 맨 오른쪽 숫자를 원하는 포트 번호로 바꿔주면 된다.

<br>
<br>

## Express 포트 변경하기

Express의 포트를 바꾸는 방법은 간단하다.
명령어로 포트를 지정해서 실행해도 되지만 설정 파일을 쉽게 찾을 수 있다.

프로젝트 폴더의 `bin/www` 파일에 설정값이 있다.

```js
var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
```

`port`의 맨 오른쪽 숫자를 원하는 포트 번호로 바꿔주면 된다.

나는 React는 3000번으로 놔두고, Express를 3001번으로 바꿔서 사용했다.

<br>
<br>

## React의 package.json에 프록시 추가하기

React 프로젝트 폴더의 `package.json` 파일에서 프록시를 추가할 수 있다.

```json
"proxy": "http://localhost:3001"
```

이렇게 하면 React에서 정보를 요청할 때 Express 서버(3001번 포트)로 요청하게 된다.
예를 들어, React에서 `/users`로 요청을 보내면 `http://localhost:3001/users`로 요청이 간다.

<br>
<br>

## 간단하게 정보 주고받기

Express에서 텍스트 정보를 받아와 React로 출력하는 페이지를 간단하게 만들어 보았다.

<br>
Express의 `app.js`

```js
import usersRouter from './routes/users';

app.use('/users', usersRouter);
```

라우터를 통해 `/users`로 들어온 요청을 `./routes/users.js`로 보낸다.

<br>
Express의 `/routes/users.js`

```js
router.get('/', function (req, res, next) {
  res.json({
    title: 'Users Page',
    content: 'User Info',
  });
});
```

GET 방식으로 요청이 들어오면 위의 json 파일을 돌려준다.

<br>
React의 `/src/App.js`

```jsx
class App extends React.Component {
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
```

React 서버 주소(http://localhost:3000)로 접속하면 React는 `/users`에서 정보를 받아 화면에 출력한다.
이 때 `/users`의 주소는 `package.json`의 프록시 주소를 기반으로 한다.
결과적으로 `http://localhost:3001/users`에 요청하는 것이다.

<br>
위 코드를 실행한 결과

![image](https://user-images.githubusercontent.com/86853786/129202000-2224916b-4b46-4600-bc56-c9502ad75a60.png)

<br>
<br>

내가 이해한 작동 순서는 다음과 같다.

1. 사용자가 React 서버에 접속한다.
2. React는 App 컴포넌트를 그린다.
3. 그리는 과정에서 Express 서버에 `/users`로 정보를 요청한다.
4. Express 서버는 `/users`에 해당하는 라우터로 이동하여 json을 돌려준다.
5. React는 받은 json을 이용하여 화면을 다시 그린다.
6. 사용자가 페이지를 확인한다.

<br>
<br>
<br>

# 3. 서버 분리는 어떻게?

기본적인 것들을 만들고 보니 순서가 좀 이상하다.
백엔드는 외부 api와 연결하려고 했는데, 그러면 프론트는 백엔드로 api 요청을 하고 백엔드는 외부로 api 요청을 한다.
이럴거면 React에서 외부 api를 바로 이용하는 것보다 나을 게 없어 보인다.
물론 최종적으로 만드려는 앱은 하루에 한 번씩 백엔드 서버에 정보를 가공해서 저장되는 형태이지만 다른 방법이 필요하다.

> 내가 작성한 코드는 순서가 사용자-프론트엔드-백엔드 순이다.
> 그러나 React와 Express를 이용하여 사용자-백엔드-프론드엔드 순으로도 구성할 수 있다고 한다.
> 나중에 알아보자.

공부하면서 이해한 대로 적은 것이므로 잘못된 정보가 있을 수 있습니다.
