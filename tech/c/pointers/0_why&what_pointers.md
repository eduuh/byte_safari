---
id: 0_why&what_pointers
aliases: []
tags:
  - "[Computer"
  - Memory](src/displine/technical/pointers/1730265622-computermemory.md)
  - "[dsa](notes/technical/pointers/1730272476-dsa.md)"
area: "[software Enginnering](src/displine/technical/pointers/1730265653-software-enginnering.md)"
project: reborn
---

# Pointers

## What is a pointer(Address variable)?

- A pointer is a variable that stores an address of some value in the heap.
- heap allocations is done through allocation functions i.e "malloc" and free function is used to release memory.
- A pointer is given the type of the value it points to. i.e intergers,
  characters, strings, structures.

## What are uses of pointers?

- Many data structures are easily implemented using pointers. i.e [linked list](../../../dsa/ds/linkedlist/linkedlist.md)
- Dynamic memory allocations. This enables variable-sized arrays and data
  structures such as linked lists and queues
- Faster and more efficient code can be written with pointers.

## what are problems of pointers?

- Accessing array;s and other data structures beyound their bounds.
- Referencing automatic variables after they have gone out of existence.
- Referencing heap allocated memory after it has been released.
- Dereferencing a pointer before memory has been allocated to it.

## syntax and sematics of pointers are well defined. are there some edge cases?

Yes. There are situations where the specification does not explicitly define
pointer behaviours. In these cases the behavior is defined by either.

Sometime there are local-specific behaviours. These are usually documented by
the compiler vendor.

### Implementation-defined

Some specific, documented implementation is provided.

### Unspecified

Some implementation is provided but is not documented

### Undefined

There are no requirements imposed and anything can happen. i.e The value of the
pointer deallocated by the free functions.
