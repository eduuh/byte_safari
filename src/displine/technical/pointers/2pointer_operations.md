---
id: 2pointer_operations
aliases: []
tags:
  - "[dsa](src/dsa/1730267414-dsa.md)"
Tags: []
area: ""
project: ""
---

## discuss pointer size & types.

- pointer size is an issue when becoming concerned by when considering.
  - application compatibility & portability.
- the size of pointer is usually the same regardless of type.

  - A pointer to c has same size to pointer to structure.

- size of pointer to function my be different size to data pointers.
- pointer size is dependent on the machine in use and compiler.

## discuss Memory Models

- common notation used to describe different data models.

  I In L Ln LL LLn P Pn

  - Each capital letter correspond to an interger, pointer or long
  - Lower case letter represent the bits allocated for each data type

| C Data type | LP64 | ILP64 | LLP64 | ILP32 | LP32 |
| ----------- | ---- | ----- | ----- | ----- | ---- |
| char        | 8    | 8     | 8     | 8     | 8    |
| short       | 16   | 16    | 16    | 16    | 16   |
| \_int32     |      | 32    |       |       |      |
| int         | 32   | 64    | 32    | 32    | 32   |
| long long   |      |       | 64    |       |      |
| pointer     | 64   | 64    | 64    | 32    | 32   |

- more than one model can be support by the same OS.

## What are the pre-defined related pointer types?

| struct                 | desc                                      |
| ---------------------- | ----------------------------------------- |
| size_t                 | Created to provided a safe type for sizes |
| ptrdiff_t              | Created to handle pointer arithmentics    |
| intptr_t and uintptr_t | Used for storing pointer arithmetic       |

## Understanding size_t

- size_t represent max size any object can be in C.
- Its unsigned (negative size make no sense)
- provides a way of creating portable sizes

- use as a return type of sizeof operator & argument.
- i.e -> malloc & strlen.

> NOTE: Good practice to use size_t for num of char or loop indexes.

- The declaration of size_t is implementation specific.
- Its found in many header files -> stdio.h ,h stdlib.h

```c
#ifndef __SIZE_T
#define __SIZE_T
typedef unsigned int size_T;
#endif

```

- the define directive ensure it only defined once.
- The actual size will depend on the implementation.
- in 32 bit system - it will be 32 bits.
- in 64 bit system - it will be 64 bits.
- Max value is -> SIZE_MAX;

## Printing out the size_t value?

- consider using the %zu format specifier.

## using the sizeof operator with pointer?

- sizeof operator can be used to determine the size of a pointer.
- Example of size of pointer to char.

```c
printf("Size of char*: %d\n", sizeof(char*));
```

## Using intptr_t and uintptr_t?

- this types are used to store pointer addresses
- they provide a portable way and safe way of declaring pointers
- will be the same size as the underliying pointer used on the system.

- They are usefull for converting ponters to their interger represenstation
- The type uintptr_t is the unsigned version of intptr_t
- For most operation intptr_t is preferred.
- uintptr_t is not flexible as intptr_t

```c
int num;
intptr_t *pi = &num;

uintptr_t *pi2 = &num; // syntax error a cast is needed
uintptr_t *pi3 = (uintptr_t*)&num;

```

- to assign uintptr_t we need a cast.

# Pointer Operators

| operator    | Name                  | Meaning                                             |
| ----------- | --------------------- | --------------------------------------------------- |
| \*          |                       | Used to declare a pointer                           |
| \*          |                       | Used to derefence a pointer                         |
| ->          | Point-to              | Used to access fields of a structure ref by pointer |
| +           | Addition              | Used to increment a pointer                         |
| -           | Substration           | Used to decrement a pointer                         |
| ==, \!=     | Equality, Inequality  | Used to decrement a pointer                         |
| >,>=        | Greater than          | comparison                                          |
| >=          | Greater than or equal | comparison                                          |
| <           | Less than             | comparison                                          |
| <=          | Less than or equal    | comparison                                          |
| (data type) | Cast                  | To change the type of pointer                       |

### Pointer arithmetic

1. Adding an interger to a pointer
2. Subtracting an integer from a pointer.
3. Subtracting two pointer from each other.
4. Comparing pointer.

- These operation are not permitted to pointers to functions.

## Adding/Subtracting an interger to a pointer

- this operation is very common and useful.
- The amount added = product of the integer times the no of datatype bytes.
- size of primitive datatype can vary from system to system.

- Example of data type sizes

| Data Type | Size in bytes |
| --------- | ------------- |
| byte      | 1             |
| char      | 1             |
| short     | 2             |
| int       | 4             |
| long      | 8             |
| float     | 4             |
| double    | 8             |

- using array of interger.
- Each time we add to pi, four is added to the address.

```c
  int vector[] = {28, 45, 84};
  int *pi = vector;

  printf("%d\n", *pi); // displays 28 address: 100
  pi += 1;             // address:: 104
  printf("%d\n", *pi); // displays 45
  pi += 1;             // address:: 108
  printf("%d\n", *pi); // displays 84
```

- when an array name is used by itself.
- It returns the address of an array.
- Accessing memory past the bounds of array is dangerous.
- no guarantee that the memory is valid.

> NOTE: its very easy to compute an invalid address.
> or a useless address.

## how about void pointer addition?

- most compiler allow arithmetic to performed on void pointer.
- since this is not standard - you will see a warning.

```c
int num=5;
void* pv = &num;
printf("%p\n", pv);
pv = pv + 1;
```

## Substracting two pointer?

- We get the difference between their addresses.
- The difference is not useful expect when finding order of array

## Comparing pointers?

```c
  int vector[] = {28, 45, 84};
  int *p0 = vector;
  int *p1 = vector + 1;
  int *p2 = vector + 2;

  int result = p2 > p0;
  int result1 = p2 < p1;
  int result2 = p2 > p0;
  printf("p2>p0 %d\n", result);  // 1
  printf("p2<p1 %d\n", result1); // 0
  printf("p2>p0 %d\n", result2); // 1
```

## what are the common uses of pointers?

- Multiple levels of indirections
- Constant pointers

## what is Muitiple level of indirection?

- double pointer -> pointer to a pointer.
- when arguments are passed using the argc and argv parameters

-> Example: A list of book titles are provided.
-> we need to keep track of best books & english books.

- instead of duplicating the titles.
- both new arrays will need to be created as pointer to a char.
- Multiple indirections offers flexibility.

  - otherwise with copies we would need to update other arrays.

- NO limit on the levels of indirection. But this can be confusing
