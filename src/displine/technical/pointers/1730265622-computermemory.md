---
id: 1730265622-computermemory
aliases:
  - ComputerMemory
tags: []
area: ""
project: reborn
---

# Computer Memory

## C Programming Language

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
