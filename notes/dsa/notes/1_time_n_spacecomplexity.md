---
id: bigo
aliases: []
tags: []
area: ""
project: ""
---

## Big O

- This gives the idea of good a solution was solved.
- Number of operations vs elements. How does the number of operation affected by
  increase in the number of inputs.

## What is good code?

1. Readable
2. Scalable

## Time Complexity: How to you measure fast.

What is the best way to measure to the efficiency? Of code and how scalable code
is with the number of inputs.

1. Using Time? It can give an idea but this is very dependent on the laptop it
   was tested on.
2. Big O: This is the language we use to figure out how efficient our code is.

### Scales of Big O

1. O(1) Constant- no loops. Excellent

```c
void swap(int *x, int *y) {
  int temp;  // time -> 0
  temp = *x; // time -> 1
  *x = *y;   // time -> 1
  *y = temp; // time -> 1
  //     total f(n)  -> 3n
  //   drop contant -> O(1)
}
```

2. O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
3. O(n) Linear time- for loops, while loops through n items

```js
function compressBoxes(boxes) {
    boxes.forEach(box => ...)
}

```

- C example

```c
void Add(int n) {
  int i, j;

  for (i = 0; i < n; i++) {   // time n+1
    for (j = 0; j < n; i++) { // time (n)n+1
      // do something
    }
  }
  // time = (n)(n+1) -> n2 + 1
  // time -> O(n2)
  // return 0s;
}


```

4. O(n log(n)) Log Linear- usually sorting operations
5. O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
6. O(2^n) Exponential- recursive algorithms that solves a problem of size N
7. O(n!) Factorial- you are adding a loop for every element

#### Note

Iterating through half a collection is still O(n)
Two separate collections: O(a \* b)

### What can cause time in a function

- Operations (+,-,\*,/)
- Comparisons (<,>,==)
- Looping (for, while)
- Outside function call (functions())

## Rules

1. Rule 1: Always the worst case.
2. Rule 2: Remove constants
3. Rule 3: Different inputs should have different variables, 0(A+B) A and
   B arrays nested would be 0(a*b), + for steps in order * for nested steps
4. Rule 4: Drop non-dominant term

### What causes space complexity?

1. Variables
2. Data structures
3. Function calls
4. Allocations

## Big O links

1. https://www.bigocheatsheet.com/

### Recommendations: Navigations

1. [Next: Recursion](./../a/recursion/recursion.md)
