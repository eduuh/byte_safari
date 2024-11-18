---
id: recursion
aliases: []
tags: []
area: ""
project: ""
---

## Recursion Objective

1. What is a Recursion
2. Example of Recursion
3. Tracing a Recursion
4. Stack used in Recursion
5. Time complexity of recursion
6. Recurrence Relation

## What is Recursion?

- A functions is calling itself.
- A recursion always have a base condition, otherwise result to infinite loop.
  - The base condition terminates the function.

```
type fun(param) {
   if(n > 0){
     printf("%d", n);
     fun(n-n);
   }
}

void main(){
  int x = 3;
  fun1(x);
}


```

### how do trace a recursive function?

- It traced as a tree.

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
