---
title: 원시 자료형
slug: java-primitive-data-type
created: 2025-03-28 21:39
updated:
description:
category: java
tags:
published: true
---

## 정수형(Integer Types)

| 타입  | 크기(byte) | 범위                                                   |
| ----- | ---------- | ------------------------------------------------------ |
| byte  | 1          | -128 ~ 127                                             |
| short | 2          | -32,768 ~ 32,767                                       |
| int   | 4          | -2,147,483,648 ~ 2,147,483,647                         |
| long  | 8          | -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807 |

## 실수형(Floating-Point Types)

| 타입   | 크기(byte) | 범위                        |
| ------ | ---------- | --------------------------- |
| float  | 4          | 약 ±3.40282347E+38F         |
| double | 8          | 약 ±1.7976931348623157E+308 |

## 문자형(Character Type)

| 타입 | 크기(byte) | 범위                       |
| ---- | ---------- | -------------------------- |
| char | 2          | 0 ~ 65,535 (유니코드 문자) |

## 논리형(Boolean Type)

| 타입    | 크기(byte) | 범위         |
| ------- | ---------- | ------------ |
| boolean | 1          | true / false |

## 주의사항

- `long` 타입의 리터럴은 숫자 뒤에 'L' 또는 'l'을 붙여야 한다. (예: `123L`)
- `float` 타입의 리터럴은 숫자 뒤에 'F' 또는 'f'를 붙여야 한다. (예: `3.14F`)
- `char` 타입은 작은따옴표(`'`)로 문자를 감싸야 한다. (예: `'A'`)
- 기본 자료형은 null 값을 가질 수 없다.
