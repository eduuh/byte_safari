## Graph Data Structure

```mermaid
graph TD
  A[Graph] -->|consists of| B[Vertices]
  A -->|connected by| C[Edges]
  B -->|may have| D[Labels]
  C -->|can be| E[Directed]
  C -->|or| F[Undirected]
  C -->|may have| G[Weights]
  A -->|traversed using| H[DFS/BFS]
  A -->|forms| I[Connected Components]
  C -->|represented by| J[Adjacency Matrix/List]
```

### Types of graphs

1. Weighted graphs

Graph whose edges or path have weights

```mermaid
graph TD
  A((A)) -->|3| B((B))
  A -->|5| C((C))
  B -->|2| C
  C -->|4| D((D))
```

2. Unweighted graphs

All edges have equal weights.

3. Directed Graphs

Edges are directed from one none to another. For example - Flights Routes, Flight Fares.

4. Undirected Graph

all edges are bi-directional
For example - Friends connected in faceboook.

### Storing a Graph

1. Adjacency Matrix

- need to traverse a row to get all neighbors.
- O(1) to check an edge between two rows
- Takes o(n squared) memory

2. Adjacency List

- Easly get all neighbors
- O(n) on neighbors to find the edge
- Takes linear memory.

### Adjancey Lit
