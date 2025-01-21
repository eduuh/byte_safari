---
id: datastructures
aliases: []
tags: []
area: ""
project: ""
---

### How does c program use memory when its compiled?

### 1. Static/Global

- Statically declared or Global variable use this memory.
- Allocated when program starts & remain in existence until it terminates.
- All function have access to this memory.
- Static variables (scope is restricted to its definition)

### 2. Automatic: Stack Allocation

- These variables are declared within a functions.
- Created when the function is called.
- The lifetime is limeted to the function execution.

### 3. [Dynamic Memory](./C pointers.md)

- Memory allocated on the heap and can be released as necessary.
- A pointer reference the allocated memory.
- Exists until its released

|         | scope                                                 | lifetime                |
| ------- | ----------------------------------------------------- | ----------------------- |
| Global  | The entire file                                       | lifetime of application |
| Static  | The function is declared within                       | lifetime of application |
| Dynamic | Determined by the pointers that reference that memory | Until memory is freed   |

## Memory allocations Objectives

### 1. [About main memory](./computermemory.md)

- Memory is divided into bytes.
- Every byte have its address.
- Address a linear. In numbers -> it could start 0 incrementing.

-Assumption main memory -> 64kb

- The ram can be 8Gb - the whole memory is not used in full.
- The ram is divided into segments of 64kb.

### How does program use memory?

- The 64kb is divided into sections

  - Code section, Stack & Heap

  - Assumption 1: int -> 2bytes
  - Assumption 2: float takes -> 4bytes

```c
void main() {
    int x; // 2 bytes
    float y; // 4 bytes

    fun();
}

void fun () {
    int x;
    int y;

    fun2();
}

void fun2 () {
    int x;
    int y;
}

```

- The steps taken.

  1. The code files is loaded in the code-sections.
  2. The CPU will start executing the program.
  3. The program will start utilizing stack & heap

- Stack & heap. Size allocations is dependent on the compiler

- Functions are create a stack frame (static allocation)
  - Main stack frame is created : int x , float y are allocated inside
  - Fun Function function stack frame is initialized.
  - Fun 2 stack frame is created.
  - Controls goes back to Fun functions, Activation of Fun 2 are deleted.
  - Controls goes back to main functions, Fun function activation is deleted.

### [Dynamic Allocations](./dynamicallocations.md)

- This is heap allocation.
- Require use of pointers (address variables)

### Types of data structures

#### 1. Physical

- meant for storing the data in the memory

> 1. [Array](../ds/Array/array.md)

- Arrays can be created in the heap & also in stack
-

> 2. [Linked List](../ds/linkedlist/linkedlist.md)

- elements(nodes) stores reference to the next element or NULL.
- collections of notes are created in the heap.

#### 1. Logical DSA

- Implemented using the physical data structures.
- The discipline used to access the data
- how you access and utilize the data -> logical data structures.

1. [Stack](../ds/logical_dsa/stack/stack.md)
2. [Heap](../ds/logical_dsa/heap/heap.md)
3. [Trees](../ds/logical_dsa/trees/trees.md)
4. [Graph](../ds/logical_dsa/graph/graph.md)
5. [HashTables](../ds/logical_dsa/hashtables/hashtables.md)

### what is an abstract datatype? (ADT)

- Representation of data
- Operations of data.

- Example of Integer data type.

  - Representation: Assumptions: takes 2bytes
  - 2bytes -> 16bits
    - 1 bits is reserved for sign
    - Other bits -> data integers
  - Operations allowed
    - +, -, \* , / , %, ++ --

- Abstract: Means hiding the implementation

  - The binary implementation is hidden.

- Using OOP we can create abstract datatype

> Example of a list.
> list -> 8, 3, 4, 6 , 40 ,20
> index -> 0 1, 2, 3, 4, 5

### Requirements

1. We need space for storing elements: either -> Array or Linked List
2. Some capacity
3. Size

> some operations on list

1. add(x) / append(x)
2. remove(index) // We need to shift for array.
3. search(key)
4. add(index, element) // we need to shift for array representation

### Recommendations: Navigations

1. [Next: Time and Space Complexity](1_time_n_spacecomplexity.md)

## Big O

- This gives the idea of good a solution was solved.
- Number of operations vs elements. How does the number of operation affected by
  increase in the number of inputs.

## What is good code?

1. Readable
2. Scalable

## Time Complexity: How to you measure fast

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
   B arrays nested would be 0(a*b), + for steps in order* for nested steps
4. Rule 4: Drop non-dominant term

### What causes space complexity?

1. Variables
2. Data structures
3. Function calls
4. Allocations

## Big O links

1. <https://www.bigocheatsheet.com/>

### Recommendations: Navigations

1. [Next: Recursion](recursion.md)
