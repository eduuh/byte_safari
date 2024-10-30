#include <stdio.h>

void declaring_pointer_variable() {
  int num; // value variable
  int *pi; // address variable :invalid -> not initialized

  printf("%d %p", num, pi);
}

int main() {
  declaring_pointer_variable();

  return 0;
}
