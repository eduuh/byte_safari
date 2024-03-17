#include <iostream>
#include <vector>

class Foo {
public:
  int value_a;
  int value_b;
  Foo(int a, int b) : value_a(a), value_b(b) {}
};

class MagicFoo {
public:
  std::vector<int> vec;
  MagicFoo(std::initializer_list<int> list) {
    for (std::initializer_list<int>::iterator it = list.begin();
         it != list.end(); ++it) {
      vec.push_back(*it);
    }
  }
};

int main() {
  int arr[3] = {1, 2, 3};
  Foo foo(1, 2);

  MagicFoo magicFoo = {1, 2, 3, 4, 5};

  std::vector<int> vec = {1, 2, 3, 4};

  std::cout << "arr[0]: " << arr[0] << std::endl;
  std::cout << "Foo: " << foo.value_a << ", " << foo.value_b << std::endl;

  for (auto it = vec.begin(); it != vec.end(); it++) {
    std::cout << *it << std::endl;
  }

  std::cout << "MagicFoo" << std::endl;
  for (auto it = magicFoo.vec.begin(); it != magicFoo.vec.end(); it++) {
    std::cout << *it << std::endl;
  }
}
