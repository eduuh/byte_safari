## Ownership

- Rust most unique feature and has deep implication for the rest of the language
- Makes memory safety gurantees without needing a garbage collector.
- If ownership rules are violated the rust program will not compile.

## Stack and Heap

- Stack and heap are parts of the memory available to your code for use during runtime.
- Most language abstract away this, but in system programming language you are force to think about them.
- Rust ownership rules are born from ds concepts.

### stack

- Stack store data in the order they get in, but removes then in the opposite order.
- Think of this as the last in firt out. i.e A stack of plates.
- Adding is pushing on the stack, removing is popping of the stack.
- All data stored in the stack have a know fixed size
- Pushing to the stack is faster that allocating new memory.

## Heap

- The heap is less organised, when you put stuff on the heap you just request an amount of space.
- The memory allocator (Kenel level) finds an empty spot in the heap that big enough, marks it as used and then return the pointer.
- A pointer: Address to a location in memory: Because a pointer is of fixed size , it usually stored on the heap.
- Whe you want actuall data, you must follow the pointer.
- Allocating memory take some work, the allocator must find a big enought space to store the data.
- Accessing data from heap is also slower that access the data from the stack.

### What problems does ownership solve

- Minimized the need to duplicated data on the heap, so you do run out of space.
- Cleaning up unused data on the heap, so you don't run out of space

### Ownership rules

- Each value have an owner.
- There can only be on owner at a time.
- When the owner goes out of scope, the value will be dropped.
