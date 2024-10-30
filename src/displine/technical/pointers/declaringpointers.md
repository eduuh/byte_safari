---
id: declaringpointers
aliases: []
tags:
  - "[dsa](src/displine/technical/pointers/1730272476-dsa.md)"
area: ""
project: ""
---

## how do you declare a pointer?

- Pointer variables are declared using a data type followed by \*

```c
int *pi;
```

## is the space between the \* (asterisk) important?

- Fuck NO! its user preference

```c
int* pi;
int *pi;
int * pi;
int*pi;
```

- The asterisk is an overloaded symbol also used in mulplicatiion
- Also de-referencing a pointer.

> Note: pointers to uninitialized memory can be a problem.

## what are things I should remember about pointers?

- The content of pi should eventually be assigned to an interger variable.
- These varibles have not been initialized and thus contain garbage.
- Pointer implementation have nothing that suggests what type of data it
  reference.
- Also pointer implementation does not tell about content validity.
- If specify the type, the compiler will complain if used incorrectly

## How to read a pointer declaration?

- The trick is to read them backward.
- Lets read this declaration

```c
const int *pci;
```

- Reading the declaration backward allows us to progressively understand the declaration

1. pci is a variable -> const int \*`\pci;`
2. pci is pointer variable -> const int `\*pci;`
3. pci is pointer variable to an integer -> const `int \*pci;`
4. pci is pointer variable to an constant integer -> `const int \*pci;`
