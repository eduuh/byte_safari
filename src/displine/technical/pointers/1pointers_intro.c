#include <stddef.h>
#include <stdio.h>

void declaring_pointer_variable();
void null_pointer();
void print_the_pointers_address();
void dereferencing_a_pointer();
void the_null_concept();
void void_pointer();
void pointer_sizeoff();

int main() {
  declaring_pointer_variable();
  dereferencing_a_pointer();

  the_null_concept();
  void_pointer();
  pointer_sizeoff();
  return 0;
}

void declaring_pointer_variable() {
  int num = 10; // value variable
  int *pi;      // address variable :invalid -> not initialized

  // declare and initialize
  // NOTE: Its a good Idea to initialize pointer as soon as possible
  int *p2 = &num;

  // int *p3 = num; incompatible type
  // This would not not stop at runtime
  // TODO read more about null pointer in the function below.
  // int *p4 = (int *)num;
  null_pointer();
  print_the_pointers_address();

  printf("%d %d %d", num, pi, p2);
}

void print_the_pointers_address() {
  int num = 0;
  int *pi = &num;

  printf("Address of num: %d Value %d/n", &num, num);
  printf("Address of num: %d Value %d", &pi, pi);

  printf("Value of pi: %p\n", (void *)pi);
}

void null_pointer() {
  int num = 0;
  int *pi = (int *)num;
  // NOTE: Program will terminate if you try to dereference
  // the pointer above
}

void dereferencing_a_pointer() {
  int num = 5;
  int *pi = &num;

  printf("Dereferencing a pointer: %d\n", *pi);
}

void the_null_pointer() {
  int num = 5;
  // #define NULL ((void *)0) -> null macro pointer
  int *pi = NULL;
  pi = 0;
  // pi =100; sytax error
  // pi = num; sytax error
}

void void_pointer() {
  int num;
  int *pi = &num;
  printf("Value of pi: %p\n", pi);
  void *pv = pi;
  pi = (int *)pv;
  printf("Value of pi: %p\n", pi);
}

void pointer_sizeoff() {
  size_t size = sizeof(void *);
  // size_t size2 = sizeof(void);//illegal
}

void size_off_understanding() {
#ifndef __SIZE_T
#define __SIZE_T
  typedef unsigned int size_T;
#endif

  size_t sizet = 5;
  // printf("%d\n", sizet);
  printf("%zu\n", sizet);
}
