#include <iostream>
#include <iterator>

using namespace std;

int main(int argc, const char **argv) {

  ostream_iterator<int> output(cout, " ");

  for (int i : {3, 187, 45}) {
    *output++ = i;
  }
  cout << ""
       << "\n";
  return 0;
}
