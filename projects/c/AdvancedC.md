### Compiler optimizations

## Use volatile for

- Hardware interactions
- Memory mapped files
- "touch" memory
- Multi-threading

## Compiler changes the order of statemens

- Things to care about

1. Volatile, if we read something it can be changed by someone else
2. Atomic,
3. Acquire/Release - Things cannot be reoderd
   Acquire: Nothing after this, can be done until this is completed
   Release: Everything before this point has to be done.
   Full Fence: Acquire and release.

Acquire and Release is not just telling the compiler wht to do its telling the hardware what to do. Acquire and Realease flushs memory.

## Undefined behaviour, (UB)

The C standard has 6 pages defining undefined behaviour.
Undefined behaviour is very powerful because it lets compilers do smart things.

1. calling exit() more than once. C is deep becasue so many corner cases have been explored.
2. C is fast , because its undefined

```c
// you woud think this would  canceled out
// this can be optimized away
// wait: think about unsigned?
x = (x * 2) / 2

// We can make the assumption
// x < 5
int a[5];
a[x] = 0;
```

## Assumed absence of UB

The compiler assumes the code is well writteng and will never get to UB
UB is unreachable

```c
___builtin__unreachable() / assume()

a <<= x;

```

Example 2

```c
switch(a) {
    case: 0:
    break;
    case: 1:
    break;
    case: 2:
    break;
    case: 3:
    break;
    default:
    unreachable();
}
```
