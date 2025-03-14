---
title: '[C++]Map'
slug: cpp-map
created: 2024-05-21
---

```cpp
#include <map>

int main() {
	// 선언
	map<string, int> m;

	// 삽입
	m["key1"] = 5;
	m.insert({"key2", 10});

	// 조회
	cout << m["key1"];

	// count
	m.count("key1");
}

```

참고

- https://life-with-coding.tistory.com/305

