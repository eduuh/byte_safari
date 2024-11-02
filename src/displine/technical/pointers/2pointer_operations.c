#include <stdio.h>

void addition_n_substration() {
  int vector[] = {28, 45, 84};
  int *pi = vector;

  printf("%d\n", *pi); // displays 28 address: 100
  pi += 1;             // address:: 104
  printf("%d\n", *pi); // displays 45
  pi += 1;             // address:: 108
  printf("%d\n", *pi); // displays 84
  pi -= 1;             // address:: 104
  printf("%d\n", *pi); // displays 45
  pi -= 1;             // address:: 100
  printf("%d\n", *pi); // displays 28 address: 100
}

void substract_two_pointers() {
  int vector[] = {28, 45, 84};
  int *pointer1 = vector;
  int *pointer2 = vector + 1;
  int *pointer3 = vector + 2;

  int result = pointer3 - pointer2;
  int result2 = pointer3 - pointer1;
  int result3 = pointer1 - pointer3;
  printf("pointer3-pointer2: %d\n", result);  // 1
  printf("pointer3-pointer1: %d\n", result2); // 2
  printf("pointer3-pointer1: %d\n", result3); // -2
}

void substract_two_pointer_values() {
  int vector[] = {28, 45, 84};
  int *pointer1 = vector;
  int *pointer2 = vector + 1;
  int *pointer3 = vector + 2;

  int result = *pointer3 - *pointer2;
  int result2 = *pointer3 - *pointer1;
  printf("*pointer3-*pointer2: %d\n", result);  // 39
  printf("*pointer3-*pointer1: %d\n", result2); // 56
}

void comparing_pointers() {
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
}

void multiple_level_indirection() {
  char *titles[] = {"A Tale of two cities", "Wuthering Heights", "Don Quixote"};

  char **bestBooks[3];
  char **englishbooks[2];

  bestBooks[0] = &titles[0];
  bestBooks[1] = &titles[1];
  bestBooks[2] = &titles[2];

  englishbooks[0] = &titles[3];
  printf("%s\n", *englishbooks[0]);
}

int main() {
  addition_n_substration();
  substract_two_pointers();
  substract_two_pointer_values();
  comparing_pointers();
  multiple_level_indirection();
}
