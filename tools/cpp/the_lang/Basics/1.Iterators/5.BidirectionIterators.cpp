#include <iostream>
#include <set>

using namespace std;

int main(int argc, const char **argv) {
  set<int> set1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  set<int>::iterator it;

  cout << "/* forward direction */"
       << "\n";
  // iterate forward
  for (it = set1.begin(); it != set1.end(); ++it) {
    cout << *it << " ";
  }
  cout << ""
       << "\n";
  cout << "/* Backword direction */"
       << "\n";

  for (it = set1.end(); it != set1.begin();) {
    cout << *--it << " ";
  }

  cout << ""
       << "\n";
  cout << "Range based forloop"
       << "\n";
  for (int i : set1) {
    cout << i << "\n";
  }

  return 0;
}
