---
title: '[Linux] 쉘 프롬프트 Shell Prompt 모양 변경'
category: Linux
created: 2021-08-11
description:
---

내 쉘에서는 프롬프트에 `DESKTOP-OKKS8A2`라는 보기 싫은 이름이 붙어있다.

![image](https://user-images.githubusercontent.com/86853786/130969321-f9abb632-5acc-4a08-9e06-18fa886e0cc5.png)

이걸 없애려고 찾아봤는데, 이 부분 전체를 원하는 대로 설정할 수 있었다. 구글링하려면 `bash`, `bashrc`, `ps1`, `shell prompt` 등으로 검색하면 된다.

<br><br><br>

# 1. 설정 위치

설정이 있는 곳은 두 군데이다.

- `/etc/bash.bashrc`
- `~/.bashrc`

<br>

`/etc/bash.bashrc`는 전역 설정을 하는 곳이다. 찾다보니 `/etc/bash`라는 글도 있는데 내가 설치한 Ubuntu에서는 `bash.bashrc`만 있었다. 하지만 막상 파일을 열어보니 이해하기 힘들었고, 몇 군데를 바꿔봤는데도 잘 적용이 되지 않았다. 두번째 방법이 훨씬 쉽고 빨라서 방법을 바꾸었다.

<br>

`~/.bashrc`에서는 특정 사용자에게만 해당되는 설정을 바꿀 수 있다. 어차피 혼자 쓰기 때문에 이렇게 설정을 바꿔도 충분하다. 다음 명령을 통해 `~/.bashrc`를 연다.

```zsh
$ vim ~/.bashrc     # vim으로 편집
$ code ~/.bashrc    # vsc로 편집
```

<br>

여기서 이렇게 생긴 부분을 찾는다.

```zsh
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```

`PS1`이 내가 찾던 설정이다. 이 부분을 바꾸면 프롬프트의 내용이나 색깔이 바뀐다.

---

# 2. PS1 기호

| \a | ASCII의 종 문자(07)
| \d | 날짜 표시(요일 월 일)
| \e | ASCII의 escape 문자(033)
| \h | 간단한 hostname('.'의 앞부분)
| \H | hostname 전체
| \j | 현재 shell이 관리하는 작업의 개수
| \l | shell의 basename
| \n | 줄 바꿈
| \r | carriage return
| \s | 현재 사용 중인 shell의 이름
| \t | 현재 시각 표시(24h HH:MM:SS)
| \T | 현재 시각 표시(12h HH:MM:SS)
| \@ | 현재 시각 표시(12h HH:MM am/pm)
| \A | 현재 시각 표시(24h HH:MM)
| \u | 현재 사용자 이름
| \v | bash 버전
| \V | bash 버전과 패치 레벨
| \w | 현재 디렉토리의 전체 경로
| \W | 현재 디렉토리의 마지막 경로
| \\! | 명령어 history의 개수
| \\# | 접속 후부터 명령을 카운트
| \$ | UID가 0이면 #, 아니면 $를 표시
| \nnn | 8진수로 nnn에 해당하는 ASCII 문자
| \\\\ | 백슬래시(\\)
| \\\[ | 출력하지 않을 문자의 시작
| \\\] | 출력하지 않을 문자의 끝

출처: <https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html>

<br>

초기 설정에서 `\[\033[01;32m\]   \[\033[00m\]` 이렇게 된 부분이 색상을 나타내는 것 같다. 나는 맨 앞에 시간을 추가하고, 현재 경로와 같은 색깔을 지정했다.

```zsh
PS1='${debian_chroot:+($debian_chroot)}\[\033[01;34m\][\t]\[\033[00m\]\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```

<br>

이제 이렇게 시간이 나온다.

![image](https://user-images.githubusercontent.com/86853786/131045539-6f00730b-8862-46cb-a293-d5d37a10a57e.png)

---

# 3. hostname 변경

위의 `PS1` 값을 수정해서도 `DESKTOP-OKKS8A2`를 지울 수 있었지만, 아예 없애면 허전할 것 같아서 내용을 바꾸기로 했다. 해당 부분은 `hostname`이고, 간단하게 변경이 가능했다. `hostname`은 다음 명령어로 확인할 수 있다.

```zsh
$ hostname
```

WSL2에서는 다음 명령어로 `hostname`을 바꿀 수 있다.

```zsh
$ hostname <new name>
```

그리고 Ubuntu를 재시작하면 바뀐 설정이 적용된다.

<br>

좀 더 깔끔해졌다.

![image](https://user-images.githubusercontent.com/86853786/131049153-1b3004ad-311a-4f22-af75-4e9de0fc1efd.png)

## WSL이 아니라면

WSL이 아니라면 이 명령어를 사용한다.

```zsh
$ hostnamectl set-hostname <new name>
```

## 에러 - System has not been booted with systemd as init system (PID 1).

만약 WSL2에서 이 명령을 실행하면 `System has not been booted with systemd as init system (PID 1).`라는 에러가 뜰 것이다. 이것 때문에 한참을 고생했다.

![error](https://user-images.githubusercontent.com/86853786/131046276-1e4cc7fb-2afd-43ad-bb76-10e0dd24760f.png)

[System has not been booted with systemd as init system (PID 1). 해결법](/linux/04-systemd-error/)
