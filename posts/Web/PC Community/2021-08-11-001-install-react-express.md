---
title: '학생 커뮤니티 사이트 제작 (1) - React와 Express 설치'
created: 2021-08-11
description:
---

<br>

# 1. Node.js 설치

React와 Express를 사용하기 위해서는 Node.js가 설치되어 있어야 한다.
Node.js란 JavaScript runtime이다.
원래 JavaScript는 웹 브라우저에서 작동하는 언어이지만, Node.js는 브라우저 밖에서도 JavaScript 코드를 실행할 수 있게 한다.

[Node.js 다운로드][link1]

<br>
설치가 완료되었다면 다음 명령어를 통해 설치가 잘 되었는지 확인할 수 있다.

    > node -v

<br>
설치가 잘 되었으면 다음과 같이 Node.js의 버전이 출력된다.

    > npm -v
    v.14.17.3

<br>
<br>
<br>

# 2. React와 Create React App

React는 페이스북에서 만든 프론트엔드 프레임워크이다.
페이지의 모든 부분을 component 단위로 관리하고, SPA(Single Page Application)를 만들어낸다.
SPA란 페이지는 하나이지만 사용자가 어떤 동작을 하면 화면이 바뀌는 것이다.
이것은 새 페이지로 이동한 것이 아니다.
React는 추가로 필요한 정보만 서버에 요청하여 변화가 이루어져야 하는 부분만 수정한다.
<br><br>

## Create React App

React를 설치하기 전에 Create React App을 먼저 설치할 것이다.

    > npm install -g create-react-app

여기서 npm은 Node Package Manager로 Node.js에서 패키지를 설치하게 해준다.
Node.js를 설치할 때 자동으로 함께 설치되고 `npm install <package>` 형태로 실행한다.
`-g`는 전역 설치 옵션이다.
전역으로 설치한 패키지는 어디서든 사용할 수 있다.
`-g` 옵션을 쓰지 않으면 지역으로 설치되고, 설치한 디렉토리에서만 사용할 수 있다.

<br>
create-react-app은 React의 초기 설정을 도와주는 패키지이다.
명령어 한 줄로 쉽게 React App을 만들 수 있다.
터미널에서 앱을 만드려는 디렉토리로 이동한 뒤 명령어를 실행한다.

    > create-react-app .

위 명령은 현재 디렉토리에 React App을 생성한다.

<br>
앱을 생성할 경로를 지정할 수도 있다.

    > create-react-app <path>

위 명령은 해당 경로에 React App을 생성한다.
주의점은 앱이 설치되는 폴더 이름에는 대문자가 들어갈 수 없다.

<br>
![create-react-app으로 만들어진 디렉토리][img1]

<br>

## React

이제 설치한 앱 폴더에 React를 지역 설치할 것이다.

    > npm install --save react react-dom

react와 react-dom, 2개의 패키지를 설치한다.
지역 설치를 하면 프로젝트 폴더 안에 `node_modules` 디렉토리가 생성되고 그 안에 패키지가 설치된다.
`--save` 옵션은 `package.json` 파일의 dependency 항목에 패키지를 추가한다.
참고로 npm5부터는 `--save` 옵션을 사용하지 않아도 자동으로 dependency 항목에 패키지가 추가된다.

<br>
더 자세한 내용은 [React 설치][link2] 참고

<br>
<br>
<br>

# 3. React 실행

프로젝트 폴더 안에서 다음 명령어를 실행하면 React 서버가 시작된다.

    > npm start

<br>
성공적으로 실행되면 아래의 문구가 뜬다.

```
Compiled successfully!

You can now view reactapp in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.219.109:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

<br>
위의 주소로 접속하면 create-react-app이 생성한 기본 페이지를 볼 수 있다.

![create-react-app의 기본 페이지][img2]

<br>
<br>
<br>

# 4. Express와 Express Generator

Express와 Express Generator의 관계도 React와 Create React App의 관계와 같다.
Express는 백엔드 프레임워크이고, Express Generator는 기본 구성을 갖춘 Express 프로젝트를 간단하게 생성해준다.

마찬가지로 express-generator는 전역 설치를 하고, Express는 지역 설치를 한다.

    > npm install -g express-generator

<br>
터미널에서 앱을 만드려는 디렉토리로 이동한 뒤 명령어를 실행한다.

    > express .

<br>
현재 디렉토리에 Express 프로젝트가 생성되었다.

![express-generator로 만들어진 디렉토리][img3]

<br>
더 자세한 내용은 [Express 설치][link3], [Express-generator 설치][link4] 참고

<br>
<br>
<br>

# 5. Express 실행

Express도 React와 같은 방법으로 실행한다.

    > npm start

<br>
그런데 오류가 발생했다.

```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module 'http-errors'
```

<br>
express-generator가 만들어낸 기본 앱은 몇몇 패키지들을 필요로 하고 이것은 `package.json`의 dependency에 적혀있다.
이 오류는 dependency에 있는 패키지가 설치되지 않아서 발생한다.
패키지를 설치하면 해결된다.

    > npm install

위 명령어는 `package.json`의 dependency에 해당하는 패키지들을 알아서 설치해준다.

<br>
그러고 다시 `npm start`를 실행하면 이렇게 뜬다.

    > reactapp@0.0.0 start
    > node ./bin/www

<br>
`localhost:3000` 주소로 접속하면 express-generator가 생성한 기본 페이지를 볼 수 있다.

![express-generator의 기본 페이지][img4]

[link1]: https://nodejs.org
[link2]: https://reactjs-kr.firebaseapp.com/docs/installation.html
[link3]: https://expressjs.com/ko/starter/installing.html
[link4]: https://expressjs.com/ko/starter/generator.html
[img1]: https://user-images.githubusercontent.com/86853786/128971414-090c942c-efb6-454e-a4d8-d113bb613aac.png
[img2]: https://user-images.githubusercontent.com/86853786/128968934-6ec04ebc-1898-40ec-88b3-afb1413af365.png
[img3]: https://user-images.githubusercontent.com/86853786/128971542-bf139a22-21a7-462c-9761-f9e992cc2c90.png
[img4]: https://user-images.githubusercontent.com/86853786/129253089-be07c3d7-4f4b-45e4-a0cc-83146a1f38d7.png
