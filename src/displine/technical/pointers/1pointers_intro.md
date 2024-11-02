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

## Whats an address operator?

- The & operator. This returns the operand's address.

```
num = 0;
pi = &num;
```

- pi is set to point to the address of num.

## Can we declare and initilize?

- Fuck Yes.

```
int *pi = &num;
```

## Why not pi = num?

- since pi is int\* - you cannot assign an interger without cast.
- Error: invalid conversion from int to int\*

## how do we display pointers? %d - wrong

```c
int num = 0;
int *pi = &num;

print("Address of num: %d Value: %d\n", &num, num);
print("Address of pi: %d Value: %d\n", &pi, num);
```

## so how should we real print the address?

- Let chat about hexadecimal number, octal

| Specifier | Meaning                                                                                   |
| --------- | ----------------------------------------------------------------------------------------- |
| %x        | Displays the value as a hexadecimal (uppercase)                                           |
| %o        | Displays the value as an octal number                                                     |
| %p        | Displays the value in an implementation specific mannner; typically as hexadecimal number |

- We do it like this. Address are -> hexadecimal
- Always print the address with the %p

```c
printf("Address of pi: %d Value: %d\n", &pi, pi)
printf("Address of pi: %x Value: %d\n", &pi, pi)
```

## how do derference a pointer?

- The indirection operator, \* -> returns the value pointed to by a pointer.

```c
int num = 5;
int *pi = &num;

printf("Dereferencing a pointer: %d\n", *pi);
```

## what is a pointer to a function?

- A pointer can also point to functions.
- The declaration is cryptic.

- The function is passed void and returns void.
- The pointer name is foo.

```c
void (*foo)();
```

## what is the concept of null? Very confusing?

- We deal with several similar but distinct concepts of null

1. The null concept.
2. The null pointer constant
3. The null macro
4. The ASCII null
5. A null string
6. A null statement

### what is the null concept?

- When a pointer is assigned to null.
- means the pointer does not point to any address.
- Two null pointers will equal to each other.

### 2. what is The null macro pointer ?

- The null macro is a contant interger zero cast to a pointer to void.

```
#define NULL ((void *)0)
```

- The null pointer macro is defined in many header files.

  - stddef.h , stdlib.h , stdio.h

- NULL and 0 are language-level symbols that represent a null pointer.

### 3. what is the ASCII null?

- byte containing all zeros
- not similar to null pointers

### 4. What is a null string?

- A string in C is a series of character terminated by zero.
- The null string is an empty string that has no characters.

### 5. what is a null statement?

- a statement that with only a single semicolon.

#### What is purpose of null pointer?

- they are usefull in data structure implementation.
- if the intent was to assign the null value to pi.
  - we use NULL type

```c
pi = NULL;
```

#### is unintialized pointer a null pointer?

- Hell NO!

- An uninitialized pointer can contain any value.
- A null pointers does not reference any location.

## Can null pointer be used in operands?

- YES

We can simply check for null pointer as:

```
if (pi) {
 //Not null
} else {
 //Is null
}
```

- if pi is assigned to a null value.
- it will be interpreted as binary zero which is falsy.

```c
if (pi == NULL)
if (pi !== NULL)
```

> NOTE: A null pointer should not be de-referenced, not valid

### Whats the better form? using NULL or 0

- Both are perfectly acceptable.
- NULL can remind we are working with a pointer.

- NULL should be used outside of pointers(might work).
- It causes problems when used instead of ASCII null.
- ASCII null character -> '\0';

- The meaning of zero depends on the context.
- it can be a interger zero or a null pointer.
- Zero is also overloaded.

```c
int num;
int *pi;
pi = &num;
*pi = 0;
```

### What is a pointer to a void?

- general-purpose pointer used to hold any data type address.
- has same representation and memory alignment as pointer to char.
- void pointers do not equal to each other.

- two void pointer assigned to null should be equal to each other.

```c
int num;
int *pi = &num;
printf("Value of pi: %p\n", pi);
void* pv = pi;
pi = (int*) pv;
printf("Value of pi: %p\n", pi);

```

- void pointers are used in data poninter
- Polymorphism programming.

> NOTE: carefull using pointers to void.
> can be type-casted to another type.

### sizeoff on pointers?

- sizeoff can be used with a pointer to void.

```c

size_t size = sizeof(void*);
size_t size2 = sizeof(void);//illegal
```

### what are global & static pointers?

- If a pointer is initilized a static or global it is initilized to NULL.

```c
int *globalpi;

void foo(){
    static int* staticpi;
}


int main(){
    //...
}
```
