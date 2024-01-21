#include <iostream>
#include <list>

using namespace std;

class Graph {
  int vertices;
  list<int> *l;

public:
  Graph(int v) {
    vertices = v;
    l = new list<int>[vertices];
  }

  void addEdge(int i, int j, bool undir = true) {
    l[i].push_back(j);
    if (undir) {
      l[j].push_back(i);
    }
  }

  void printAdjList() {
    for (int i = 0; i < vertices; i++) {
      cout << i << "-->";

      for (auto a : l[i]) {
        cout << a << "";
      }
      cout << "\n";
    }
  }
};

int main() {
  Graph g(6);
  g.addEdge(0, 1);
  g.addEdge(0, 4);
  g.addEdge(2, 1);
  g.addEdge(3, 4);
  g.addEdge(3, 5);
  g.addEdge(4, 5);
  g.addEdge(2, 3);

  g.printAdjList();
}
