#include <stdio.h>

// Constant Time
void swap(int *x, int *y) {
  int temp;  // time -> 0
  temp = *x; // time -> 1
  *x = *y;   // time -> 1
  *y = temp; // time -> 1
  //     total f(n)  -> 3n
  //   drop contant -> O(1)
}

// O(n) time
int sum(int a[], int n) {
  int s, i;

  s = 0;                    // time - 1
  for (i = 0; i < n; i++) { // time n+1
    s += a[i];
  }
  // time = n + 2 drop contant
  // time -> O(n)
  return s;
}

void Add(int n) {
  int i, j;

  for (i = 0; i < n; i++) {   // time n+1
    for (j = 0; j < n; i++) { // time (n)n+1
      // do something
    }
  }
  // time = (n)(n+1) -> n2 + 1
  // time -> O(n2)
  // return 0s;
}

int main() {
  // Constant time
  int x = 2;
  int y = 3;
  swap(&x, &y);

  printf("swapped x: %d y:%d ", x, y);

  // O(n) Time
  int a[3] = {1, 2, 3};
  int s = sum(a, 3);
  printf("The sum is: %d", s);
}
