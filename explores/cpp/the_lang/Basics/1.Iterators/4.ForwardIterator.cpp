#include <forward_list>
#include <iostream>

using namespace std;

int main(int argc, const char **argv) {
  // singly linked list
  forward_list<int> fl1 = {1, 2, 3, 4, 5};
  fo

      forward_list<int>::iterator it;

  for (it = fl1.begin(); it != fl1.end(); ++it) {
    cout << *it << "\n";
  }

  cout << "Range Based for Loop"
       << "\n";
  // range based forloop used a forward interator
  // read and write
  for (int i : fl1) {
    cout << i << "\n";
  }

  return 0;
}
