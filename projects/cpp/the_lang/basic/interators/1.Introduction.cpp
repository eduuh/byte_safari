#include <iostream>
#include <vector>

using namespace std;

// Vector
void interatorsVerbose() {
  vector<int> v1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  // This iterator will only work with vector<int>
  // The iterator work just like pointers
  vector<int>::iterator it; // interator object

  vector<int>::iterator ibegin = v1.begin();
  vector<int>::iterator iend = v1.end();

  for (it = ibegin; it < iend; ++it) {
    cout << *it << "\n";
  }
}

void interatorWithAuto() {

  vector<int> v1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  // more preffered wayt to define them
  auto ibegin = v1.begin();
  auto iend = v1.end();
  for (auto it = ibegin; it < iend; ++it) {
    cout << *it << "\n";
  }
}

int main(int argc, const char **argv) {
  interatorsVerbose();
  cout << "With auto: Iterators" << "\n";
  interatorWithAuto();

  // input interator: This is the simplest form of iterator
  return 0;
}
