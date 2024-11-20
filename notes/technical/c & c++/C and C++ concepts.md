---
id: C and C++ concepts
aliases:
  - c
tags:
  - c
area: 
project: dsa
---

## 0. Data Types

### what are types of data types?.

- Primitive data types.
  - Defined by lang i.e int, float, string, data structures (heap , array)
- Custom data types.
  - User defined data types. Usually a combination of primitive types.

## 1. Arrays.

### what is an array?

- Collection of elements of same type (typed langs).
- Arrays are contiguous in memory, either containing a value or pointers.
- An array is usually stored in the heap by default. (c)

### What are some example of arrays?

- Strings are immutable arrays

### How do declare an array?

```c
int A[5]; //contain garbage
int B[5] = { 2, 9, 8 , 10}; // initialized
```

### How do you print an array?

- For loops are used to access an array.

```c
int B[5] = { 2, 9, 8, 10};
for(int i; i< 5 ; i++) {
   print("%d",B[i]);
}
```

## 2. Structure

### What is a structure?

- A user Defined data structure composed of primitive types.
- Group of related data members.

### How do we define a structures?

- example, Rectangle is composed of a width & height
- example, Complex number, a + ib -> i is imaginary
- example 3, Cards
  - face -> 1, 2 ... 10, J, Q , K,
  - Shape - Diamond, heart, spade.
  - Color - red, black

```c
// Definition
struct Rectagle {
    int length;
    int width;
};
// complex number

struct Complex {
    int real;
    int img;
};

struct Student {
    int id;
    char names[25];
    char depatment[10];
    char addresss[10];
};

// ocuppy 6 bytes
struct Card {
    int face;
    int shape;
    int color;
};

int main {
    struct Card c;
    c.face = 1;
    c.shape = 2;
    c.color = 1;

    //define deck as an array
    struct Card deck[52];
    deck[0]= c;

    // intilize a deck- up to 52
    struct Card deck2[52] = {{1,0,0}, {2,0,0}};
    printf("Card 1, %d , %d, %d", deck2[0].face, deck2[0]. shape,deck2[0].color);
}
```

### how do we declare a structure?

- Structure are created inside the stack frame of function its defined in.

```c
struct Rectagle {
    int length;
    int width;
}

int main() {
    struct Rectagle r; // declaration
    struct Rectagle r= { 10, 5}; // with initilization
}
```

### how do we determine the size of a structure?

- A structure definition does not consume memory.
- Memory in stack frame is addition of all primitive types.

```c
struct Student {
    int id;               // 2 bytes
    char names[25];       // 25 bytes
    char depatment[10];   // 10 bytes
    char addresss[10];    // 10 bytes
                //  Total   87 bytes
}
// would occupy 87 bytes in memory
```

### how do we access members of a structure

- We use the dot operator

```c
r.length = 15;
r.width = 10;
printf("Area of Rectagle is %d" r.length * r.width);
```

## 3. [Pointers](0_why&what_pointers.md)

### What are the type of variables?

- 1. Data Variable.

```c
int a = 10;
```

- 2. Address variables. (pointers)

```c
int a = 10;
// Will only store an address
// occupies memory
int *p;
p = &a; // stores address of a.
```

### What is a pointer?

- A pointer is an address variable.
- A pointer occupy memory in stack frame.
- Meant to store addresses. (What why?)
- Used to access data indirectly, from heap
  - Types of memory. Main Memory (Ram), Secondary (SSD/HDD)
    - RAM (code section (store source code), Stack (functi;on call stack))
    - ROM (heap)
- Program can directly access, code section and stack frame

### Whay are pointers usefully?

- Accessing external resources.
- Heap memory is external to the program. To access that mery we need a pointer.
  - Example. Access a file, Access printer, access keyboard

### How to declare and initilized a pointer?

- Use a star to initialize

```c
int a = 10; //data variable
int *p;
p = &a;     //points to address of a
```

### How to de-reference a pointer?

- use a star to de-reference a pointer. Access the variable

```c
int a = 10; //data variable
int *p;
p = &a; //points to address of a

printf("%d", *p);
```

### What is dynamic Allocation in c & c++?

- Allocating memory in heap.
- In c - we use the malloc function
- In C++ we use the new keyword.

```c
int main () {
    int *p;
    //c
    p =(int *)malloc(5 * sizeof(int));

    //c++
    int x = new int[5];
}

```

### How can we have pointer to a structure?

```c++
struct Rectagle {
   int length;
   int width;
};

int main() {
    struct Rectagle r = { 10, 5};
    struct Rectagle *p = &r; //p is in stack

    //access struct pointer
    (*p).length = 20;
    p-> length = 20;

    //c

    struct Rectagle *x;
    x = (struct Rectagle *)malloc(sizeof(struct Rectagle));

    //accessing members
    x -> length = 10;
    p -> width = 5;
}

```

### What is malloc function?

- Malloc function is a c function used to allocate memory in stack.
- The function takes in a size and returns a void pointer.
- The void pointer needs to be type casted to the required variable types.

```c
// heap allocated array
int *p = (int *)malloc(sizeof(int) * 5);

// heap allocated struct
struct Rectagle *x;
x = (struct Rectagle *)malloc(sizeof(struct Rectagle));
```

## 4. References (C++ feature)

- Alias given to a variable.
- Useful in parameter passing.

```c
int main() {
    int a = 10;
    int &r = a;
    // you have two name for same value
    // both a & r are pointing to same variable
    cout <<a;
    r++;
    cout << r; // 11
    cout << a; // 11
}

```

## 5. Functions

### What are functions?

- Functions are groups if related instructions.

### Why are function important?

- Do not repeat yourself - function can be re-used.
- Makes it easy to manage & develop.

```c
// function prototype
int add(int a, int b ) { // formal parameter
    int c;
    c = a + b;
    return c;
}

int main() {
    int x , y , z;
    x = 10;
    y = 5;

    z = add(x, y); // x, y -> actual parameters
    print ("Sum %d", z);
}

```

### how program works with function?

1. Program: creates a stack frame for main.
2. x,y,z are defined in main's stack frame.
3. Program: create a stack fram for add function
4. x, Y are copied to add function wich are stored in add stack frame.
5. Add instruction are performed inside of add stack frame.
6. A value is returned, add function is popped out of stackframe.
7. The value is copied in value z.
8. Program goes back to main stack frame.
9. prints the value to stdout, and main is pop out.
10. The program ends.

### Types of parameter passing?

1. Pass by value
2. Pass by Address
3. Pass by Reference

### What is pass by value?

- pass by value - values are copied to other variables
- changes in formal parameters does not reflect in actual parameters.

```c
void swap(int x , int y) {
    int temp;
    temp = x;
    x = y;
    y = temp;
}

int main() {
    int a, b;
    a = 10;
    b= 20;
    swap(a, b); // values are not swapped.
    print("a: %d b: %d", a, b);
}

```

### What is pass by Address?

- using pointers
- changes in formal paramters reflects in actual parameters.

```c
void swap(int &x , int &y) {
    int temp;
    temp = x;
    x = y;
    y = temp;
}

int main() {
    int a, b;
    a = 10;
    b= 20;
    swap(&a, &b); // values will be swapped.
    print("a: %d b: %d", a, b);
}
```

### What is pass by Reference (C++)?

- Parameters becomes alias to original variables.
- actual prameters are modified.

```c
void swap(int &x , int &y) {
    int temp;
    temp = x;
    x = y;
    y = temp;
}

int main() {
    int a, b;
    a = 10;
    b= 20;
    swap(a, b); // values will be swapped.
    print("a: %d b: %d", a, b);
}
```

1. [ ] TODO: Practice Parameter passing
2. [ ] TODO: Create a parameter passing animator.

### how can array be a parameter?

- Array are only passed by address in both c & c++;

```c++
void fun(int A[], int n) {
    int i;
    A[0] = 20; //posible sincet its passed by address.
    for(i = 0; i< n; i++) {
        printf("%d", A[i]);
    }
}

int main(){
    int A[5] = { 2, 4, 6, 8, 10};

}

```

### how can structure be passed as a parameter?

````c
int area_callbyvalue(struct Rectagle r1) {
    return r1.lenght * r1.width;
}


int area_callbyreference(struct Rectagle &r1) {
    // we can update the original struct
    r1.length = 20;
    return r1.lenght * r1.width;
}

int changeLength_callbyAddress(struct Rectangle *p, int l) {
    p-> length = l;
}

int main() {
    struct Rectanble r= { 10, 5};
    changeLength_callbyAddress(&r , 100);
    area_callbyreference(r);
    area_callbyreference(r)

    print("%d", area(r));
}


Example 2: Struct with Array

```c
struct test {
    int A[5];
    int A;
};

void fun(struct test t1) {
    t.A[0] = 10;
    t.A[1] = 20;
}

int main( ) {
    struct test r = { { 1,2,3,4}, 5};
    fun(t);
}
```
````

### What is more about functions and structs?

- This is the highest level of abstraction in C.
- But in C++ this develop to object orientation.(classes)

## 6. Classes (C++)

### What is a class?

- Group of related data (i.e structures) & functions

```c++
class Rectagle {
    private:
        int length;
        int breath;

public:
    Rectagle(int, l, int b) { //constructor
        length = l;
        breath = b;
    }
    int area() {
        return length * breath;
    }
    changeLength(int l) {
        length= l;
    }
};

int main(){
    Rectagle r(10, 57); //Create with constructor
    // accessing member functions
    r.area();
    r.changeLength(20);
}

```

### What are generic functions and generic class?

- works for many data types.
- Achieved by use of templates.

```c++
template<class T>
class Arithemetic {
    private:
      T a;
      T b;
public:
    Arithemetic(T a, T b);
    T add();
    T sub();
};

template<class T>
Arithemetic<T>::Arithemetic(int T, int T) {
    this-> a = a;
    this-> b = b;
}

template<class T>
T Arithemetic<T>::add(){
    T c;
    c = a + b;
    return c;
}

template<class T>
T Arithemetic<T>::sub() {
    T c;
    c = a -b;
    return c;
}

int main() {
    Arithemetic<int> ar(10,5);
    cout<<ar.add();

    Arithemetic<float> ar2(10.5,5.1);
    cout<<ar2.add();
}
```
