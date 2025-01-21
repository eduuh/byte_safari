---
id: javascript
aliases:
  - web
tags:
  - js
area: web
project: web
---

# JS Async

## Asynchronicity

- JavaScript is single-threaded (one command executing at a time)
- It implement synchronous model (each line execute in order it appears in code)

- What happens when we want to wait. Do we block?
- A function call must complete for the next to begin

- We also cannot block -> this would lead to a bad user experience

```javascript
function display(data) {
  console.log(data);
}

const dataFromApi = fetchAndWait("https://eduuh.com/api/test");
//..user can do nothing here
//...could be 300ms, could be half a second
// they're just clicking and getting nothing

display(dataFromApi);

console.log("Me Later");
```

| Global Execution | Global Memory                              |
| ---------------- | ------------------------------------------ |
| display          | -> ƒ ->                                    |
| dataFromApi      | ...                                        |
|                  | fetchAndWait execution context -> "hi"     |
| dataFromApi      | "hi"                                       |
| display          | display execute context -> console -> "hi" |
| console.log      | "Me Later"                                 |

> Goals

1. Be able to do tasks that take long time to complete.

   - getting data from the server

2. Continue running our JavaScript line by line. Without blocking

3. When our slow task completes, we should able to run functionality

### Web Browser APIs/Node background threads

### Generators

```JavaScript
function *createFlow() {
  yield 1;
  yield 2;
  yield 3;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next(); // { value: 1, done: false }
const element2 = returnNextElement.next(); // { value: 2, done: false }
```
