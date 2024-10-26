#include <algorithm> // For std::for_each
#include <iostream>
#include <memory>  // For smart pointers
#include <numeric> // For std::accumulate
#include <vector>

// Define a lambda function to square a number
auto square = [](int x) { return x * x; };

int main() {
  // Initialize a vector of integers
  std::vector<int> numbers = {1, 2, 3, 4, 5};

  // Use auto keyword and range-based for loop to iterate through vector
  for (auto num : numbers) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  // Use accumulate algorithm to sum all elements in the vector
  auto sum = std::accumulate(numbers.begin(), numbers.end(), 0);
  std::cout << "Sum: " << sum << std::endl;

  // Use std::for_each with a lambda to square each element in the vector
  std::for_each(numbers.begin(), numbers.end(),
                [](int &num) { num = square(num); });

  // Output squared elements using range-based for loop and auto keyword
  for (auto num : numbers) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  // Demonstrate unique_ptr, a smart pointer that manages memory automatically
  std::unique_ptr<int> ptr = std::make_unique<int>(42);
  std::cout << "Value pointed by ptr: " << *ptr << std::endl;

  // Use nullptr for null pointer assignments
  std::unique_ptr<int> nullPtr = nullptr;

  return 0;
}
