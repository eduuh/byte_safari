---
id: datastructures
aliases: []
tags: []
area: ""
project: ""
---

## Memory allocations Objectives

### 1. [About main memory](./computermemory.md).

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
