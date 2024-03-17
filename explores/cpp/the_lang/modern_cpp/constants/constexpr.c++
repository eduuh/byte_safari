#include <iostream>
#define LEN 10

int len_foo() {
  int i = 2;
  return i;
}

constexpr int len_foo_constexpr() { return 5; }

constexpr int fibonacci(const int n) {
  return n == 1 || n == 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
  char arr_1[10];  // legal
  char arr_2[LEN]; // legal
  int len = 10;
  // char arr_3[len]; illegal

  const int len_2 = len + 1;
  constexpr int len_2_constexpre = 1 + 2 + 3;
  // char arr_4[len_2] // illegal, but ok for most of the compiler
  char arr_4[len_2_constexpre]; // legal

  char arr_6[len_foo_constexpr() + 1]; // legal
  std::cout << fibonacci(10) << std::endl;

  return 0;
}

// Lenght of array is the c++ standard must be a constant expression
// Even if this behavior is supported by most compilers its an illegal behaviour
// use constexpr introduced in c++11

// C++11 provides constexpr to let user explicitly declare the function or
// object construcot will become a constant expression at compile time.
