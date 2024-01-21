#include <iostream>
#include <iterator>
#include <vector>
using namespace std;

void message(const char *m) { cout << m << "\n"; }
void message(const char *m, int i) { cout << m << ": " << i << "\n"; }

int main(int argc, const char **argv) {
  vector<int> v1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  vector<int>::iterator it;

  cout << "Iterate Forward"
       << "\n";
  // interate forward
  for (it = v1.begin(); it != v1.end(); ++it) {
    cout << *it << "\n";
  }

  cout << "Iterate backwords"
       << "\n";

  for (it = v1.end(); it != v1.begin();) {
    cout << *--it << "\n";
  }

  cout << "Range Based interator"
       << "\n";
  for (int i : v1) {
    cout << i << "\n";
  }

  it = v1.begin() + 5;
  message("element begin + 5", *it);
  message("element [5]", v1[5]);
  it = v1.end() - 3;
  message("element end - 3 ", *it);
  return 0;
}
