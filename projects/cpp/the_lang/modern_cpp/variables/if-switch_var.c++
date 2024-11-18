#include <algorithm>
#include <iostream>
#include <vector>

int main() {
  std::vector<int> vec = {1, 2, 3, 4};

  // since c++17, can be simplified by using auto
  const auto itr = std::find(vec.begin(), vec.end(), 2);
  if (itr != vec.end()) {
    *itr = 3;
  }

  // Now you can have the variable inside the if statement
  if (const auto itr = std::find(vec.begin(), vec.end(), 3); itr != vec.end()) {
    *itr = 4;
  }

  for (auto element = vec.begin(); element != vec.end(); ++element) {
    std::cout << *element << std::endl;
  }
}
