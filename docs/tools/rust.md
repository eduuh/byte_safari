---
id: rust
aliases:
  - Rust Difference with C++
tags: []
---

## Rust Difference with C++

### 1. Memory Safety

Whilst updates have been developed that have improved the memory safety of C++ code, Rust still has much safer memory management because of its inbuilt functions for management procedures.

### 2. Rust has more vigorous code validation measures than C++

### 3. C++ can produce fast applications while spending less time on code compilation and execution than Rust

### 4. Since C++ is the more mature programming language, it has more frameworks and libraries than Rust.

### 5. Since C++ has been around since the 80s, it has a larger community of developers and support information than Rust

### 6. It costs more to hire Rust developers than C++ developers because there are fewer of them in the job market.

### C++

C++'s ownership is mostly not compiler-checked and can easily lead to an UB e.g. if you're not careful you can use-after-move a unique_ptr:

```c++
std::vector<std::string> v;
std::string str = "example";
v.push_back(std::move(str)); // str is now valid but unspecified
str[0]; // undefined behavior: operator[](size_t n) has a precondition size() > n
```

Rust would never allow the above case

C++ provides tools but the footguns are still lying around and it won't warn you about them. If you're perfectly careful (and so are your coworkers), I'm guessing Rust has no advantage over modern C++

```

```
