---
title: '[Linux] System has not been booted with systemd as init system (PID 1). 해결법'
category: Linux
created: 2021-08-11
description:
---

WSL2에서 `hostnamectl` 명령을 통해 `hostname`을 변경하려고 했는데, 계속 에러가 떴다. Ubuntu에서 `hostname` 변경은 `hostnamectl`라고 하고, 정작 내 컴퓨터에서는 에러가 나고, 제대로 설명한 곳도 찾기 힘들었다. 또 이 에러에 대해 검색해보면 다른 경우만 나오고 도움되는 내용은 없었다. 보통 `systemctl`을 실행하거나 docker를 사용할 때 많이 발생하는 에러인 것 같다.

> [참고](https://linuxhandbook.com/system-has-not-been-booted-with-systemd/)

<br><br><br>

# 1. 원인

에러가 나는 이유는 `systemd`를 사용하지 않는 Linux 시스템에서 `systemd` 명령어를 사용하려고 했기 때문이다. `hostnamectl`은 `systemd` 명령어이다. 하지만 WSL2는 `systemd`를 사용하지 않는다.

WSL2는 `SysVinit`을 사용한다. 따라서 여기에 맞는 명령어를 사용해야 한다.

---

# 2. systemd와 SysVinit

[systemd](https://wiki.archlinux.org/title/Systemd)는 **system daemon**으로 시스템이 부팅되고 가장 먼저 실행되어 다른 프로세스를 관리하는 데몬이다.

<br>

[SysVinit](https://wiki.archlinux.org/title/SysVinit)도 마찬가지로 부팅 시 가장 먼저 실행되어 다른 프로세스를 실행한다. systemd가 최신 버전이지만 WSL2에는 SysVinit이 들어있다고 한다.

<br>

이 둘은 명령어가 다르기 때문에 종류에 맞는 명령을 사용해야 한다.

---

# 3. 해결법

해결은 간단하다. `systemd` 명령어를 사용하지 않고, `SysVinit` 명령어를 사용하는 것이다. 같은 기능을 하는 명령어가 `SysVinit`에서는 무엇인지 검색해보면 된다.

<br>

나는 `hostname`을 바꾸기 위해 `hostnamectl`이라는 명령어를 사용했는데, `SysVinit`에서는 그냥 `hostname`이란 명령어를 사용하면 되는거였다.

---

# 4. WSL2에서 systemd 사용

사용하는 방법이 있다고는 하나, 직접 해보지는 않았다.

> [Enable `systemd` in WSL2](https://gist.github.com/djfdyuruiry/6720faa3f9fc59bfdf6284ee1f41f950)
