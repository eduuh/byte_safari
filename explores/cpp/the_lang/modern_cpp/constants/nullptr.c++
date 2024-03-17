#include <cstddef>
#include <iostream>
#include <type_traits>

void foo(char *);
void foo(int);

int main() {
  // decltype is used for type derivation
  // std::is_same is used to compare the equality of two types.
  if (std::is_same<decltype(NULL), decltype(0)>::value)
    std::cout << "Null === 0" << std::endl;

  if (std::is_same<decltype(NULL), decltype((void *)0)>::value)
    std::cout << "Null === (void *)0" << std::endl;

  if (std::is_same<decltype(NULL), std::nullptr_t>::value)
    std::cout << "Null === nullptr" << std::endl;

  foo(0); // will call foo(int)
  // foo(NULL) // does not compile
  foo(nullptr);
  return 0;
}

void foo(char *) { std::cout << "foo(char *) is called" << std::endl; }
void foo(int i) { std::cout << "foo(int) is called" << std::endl; }

// output
// foo(int) is called
// foo(char*) is called

// NULL is different from 0 and nullptr. Use nullptr directly
