---
title: chmod 명령어(권한 변경)
slug: linux-chmod
created: 2024-12-17 09:03:00
updated:
description:
category: linux
tags:
published: true
---

## chmod

이 명령어는 "change mode"의 약자로, 파일과 디렉토리의 접근 권한을 제어하는 핵심 유틸리티다.
chmod는 단순해 보이지만 Linux 파일 시스템 보안의 핵심 요소다.
파일 권한을 정확히 이해하고 관리하는 것은 시스템 관리의 기본이다.
특히 다중 사용자 환경인 Linux에서 파일 권한 관리는 시스템 보안과 안정성의 기반이 된다.

적절한 권한 설정은 시스템 보안을 강화하고, 다중 사용자 환경에서의 데이터 보호를 보장하며, 스크립트와 프로그램이 원활하게 작동할 수 있게 한다.
chmod 명령어를 마스터하면 Linux 시스템을 더욱 효과적으로 관리하고 보호할 수 있다.

## 권한 확인하기

현재 파일의 권한 상태를 확인하는 방법은 간단하다.
터미널에서 `ls -l` 명령을 실행하면 된다.

```
$ ls -l script.sh
-rwxr-xr-- 1 user group 1234 Mar 28 12:34 script.sh
```

이 출력에서 `-rwxr-xr--`는 다음과 같은 의미를 갖는다:

- 첫 문자 `-`는 일반 파일을 의미한다 (디렉토리라면 `d`로 표시됨)
- 다음 세 문자 `rwx`는 소유자의 권한으로, 읽기, 쓰기, 실행 모두 가능하다
- 그 다음 세 문자 `r-x`는 그룹의 권한으로, 읽기와 실행은 가능하나 쓰기는 불가하다
- 마지막 세 문자 `r--`는 기타 사용자의 권한으로, 읽기만 가능하다

## chmod의 두 가지 사용법

chmod 명령어는 권한을 변경하는 두 가지 방식을 제공한다.
심볼릭 모드와 숫자 모드다.

### 심볼릭 모드(Symbolic Mode)

심볼릭 모드는 문자와 연산자를 조합해 직관적으로 권한을 설정한다.

#### 사용자 지정

- `u`: 소유자(User)를 지정
- `g`: 그룹(Group)을 지정
- `o`: 기타 사용자(Others)를 지정
- `a`: 모든 사용자(All)를 지정 (기본값)

#### 연산자

- `+`: 지정된 권한을 추가
- `-`: 지정된 권한을 제거
- `=`: 지정된 권한만 설정 (다른 권한은 모두 제거)

#### 권한 기호

- `r`: 읽기 권한
- `w`: 쓰기 권한
- `x`: 실행 권한

#### 사용 예시

- `chmod u+x script.sh{:bash}`: 소유자에게 실행 권한을 추가한다
- `chmod g-w script.sh{:bash}`: 그룹의 쓰기 권한을 제거한다
- `chmod o=r script.sh{:bash}`: 기타 사용자에게 읽기 권한만 부여하고 다른 권한은 모두 제거한다
- `chmod a+rx script.sh{:bash}`: 모든 사용자에게 읽기와 실행 권한을 추가한다
- `chmod u+w,g+r,o-rwx script.sh{:bash}`: 소유자에게 쓰기 권한 추가, 그룹에 읽기 권한 추가, 기타 사용자의 모든 권한을 제거한다

### 숫자 모드(Octal/Numeric Mode)

숫자 모드는 8진수 값을 사용해 보다 간결하게 권한을 설정한다.
각 권한에는 특정 숫자 값이 할당된다.

- `4`: 읽기 권한(r)
- `2`: 쓰기 권한(w)
- `1`: 실행 권한(x)
- `0`: 권한 없음(-)

이 값들을 더해 각 사용자 유형에 대한 단일 숫자를 생성한다.

- `7` (4+2+1) = `rwx` (모든 권한)
- `6` (4+2) = `rw-` (읽기, 쓰기 권한)
- `5` (4+1) = `r-x` (읽기, 실행 권한)
- `4` (4) = `r--` (읽기 권한만)
- `3` (2+1) = `-wx` (쓰기, 실행 권한)
- `2` (2) = `-w-` (쓰기 권한만)
- `1` (1) = `--x` (실행 권한만)
- `0` (0) = `---` (권한 없음)

이 세 자리 숫자를 나열해 소유자, 그룹, 기타 사용자의 권한을 한 번에 설정한다.

#### 사용 예시

- `chmod 755 script.sh{:bash}`: 소유자에게 모든 권한(7), 그룹과 기타 사용자에게 읽기와 실행 권한(5)을 부여한다
- `chmod 644 file.txt{:bash}`: 소유자에게 읽기와 쓰기 권한(6), 그룹과 기타 사용자에게 읽기 권한만(4) 부여한다
- `chmod 700 private.sh{:bash}`: 소유자에게 모든 권한(7), 그룹과 기타 사용자에게 권한 없음(0)을 설정한다

## 재귀적 권한 변경

`-R` 옵션을 사용하면 디렉토리와 그 안의 모든 파일 및 하위 디렉토리에 재귀적으로 권한을 적용할 수 있다.

```
chmod -R 755 project/
```

이 명령은 '프로젝트' 디렉토리와 그 안의 모든 콘텐츠에 755 권한을 적용한다.
대규모 프로젝트나 복잡한 디렉토리 구조에서 유용하다.

## 특수 권한 설정

일반적인 rwx 권한 외에도 세 가지 특수 권한을 설정할 수 있다.

- **setuid (4000)**: 실행 시 소유자의 권한으로 실행된다. 4자리 숫자 모드의 첫 번째 자리에 4를 추가한다.
- **setgid (2000)**: 실행 시 그룹의 권한으로 실행된다. 4자리 숫자 모드의 첫 번째 자리에 2를 추가한다.
- **sticky bit (1000)**: 주로 디렉토리에 적용되며, 소유자만 파일을 삭제할 수 있게 한다. 4자리 숫자 모드의 첫 번째 자리에 1을 추가한다.

### 예시

- `chmod 4755 program{:bash}`: setuid 비트와 755 권한을 설정한다
- `chmod 2755 shared{:bash}`: setgid 비트와 755 권한을 설정한다
- `chmod 1777 /tmp{:bash}`: sticky bit와 777 권한을 설정한다 (공용 임시 디렉토리에 자주 사용됨)

## chmod 사용 시 주의사항

1. **보안 위험**: 너무 개방적인 권한(예: 777)은 심각한 보안 위험을 초래할 수 있다. 필요한 최소한의 권한만 부여하는 것이 좋다.

2. **시스템 파일**: 시스템 파일의 권한을 무분별하게 변경하면 시스템 기능이 손상될 수 있다. 특히 `/bin`, `/sbin`, `/usr` 등의 시스템 디렉토리 내 파일 권한 변경은 신중해야 한다.

3. **소유권과 권한의 차이**: chmod는 권한만 변경한다. 파일의 소유자나 그룹을 변경하려면 `chown`이나 `chgrp` 명령을 사용해야 한다.

4. **sudo 사용**: 시스템 파일이나 다른 사용자 소유 파일의 권한을 변경하려면 `sudo` 명령을 통해 관리자 권한이 필요할 수 있다.
