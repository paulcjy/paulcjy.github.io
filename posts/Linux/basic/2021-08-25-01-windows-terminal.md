---
title: "[Linux] Windows Terminal 설치 및 설정"
category: Linux
created: 2021-08-11
description:
---

리눅스 공부를 시작한다. 윈도우의 WSL2를 이용하여 리눅스를 사용할 것이다. 그러기 위해서는 `Windows Terminal`을 설치해야 한다.

<br><br><br>

# 1. Windows Terminal

> [Windows Terminal이란?](https://docs.microsoft.com/ko-kr/windows/terminal/)

**Windows Terminal**은 CLI(Command-line Interface)를 위한 터미널 프로그램이다. 기존 윈도우는 `cmd`나 `PowerShell`을 사용했는데, 불편한 점이 많았다. 그래서 마이크로소프트는 2020년 새로운 터미널을 공개했다.

**Windows Terminal**은 다양한 CLI 애플리케이션을 실행할 수 있고, 여러 개를 탭 형식으로 동시에 사용할 수도 있다. 또한 다양한 설정을 통해 사용자가 원하는 대로 터미널을 바꿀 수 있다.

---

# 2. Windows Terminal 설치

> [Windows Terminal 설치](https://docs.microsoft.com/ko-kr/windows/terminal/get-started)

[Microsoft Store](https://aka.ms/terminal)에서 설치할 수 있다. 받기를 클릭하면 된다.

<br>

실행시키면 이런 창이 뜬다.

![image](https://user-images.githubusercontent.com/86853786/130686045-9c483863-3b68-489f-b825-e1a2d154d45f.png)

<br>

화살표를 누르면 다른 터미널을 열 수 있다.

![image](https://user-images.githubusercontent.com/86853786/130686618-3c03e994-f48c-40c6-a105-6fdfc3102c2d.png)

<br>

기본적으로 들어있는 것은 `PowerShell`, `cmd`, `Azure Cloud Shell`이다.

---

# 3. Windows Terminal 설정

설정은 탭 부분의 화살표 키를 누르거나 `ctrl + ,`를 눌러 들어갈 수 있다. 설정 내용에 마우스를 올리면 툴팁에 설명이 나온다.

<br>

이 설정들은 `json` 파일에 저장되어 있다. `json`을 통해 설정 메뉴에 없는 설정도 변경할 수 있다.
