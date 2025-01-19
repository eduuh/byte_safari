---
id: javascript
aliases:
  - web
tags:
  - js
area: web
project: web
---

# JavaScript the Hard Parts

<!--toc:start-->

- [JavaScript the Hard Parts](#javascript-the-hard-parts)
  - [JS Focus](#js-focus)
  - [Principle of js](#principle-of-js)
  - [Thread of Execution](#thread-of-execution)
  - [High Order functions](#high-order-functions)
    - [Arrow Function and Anonymous Function](#arrow-function-and-anonymous-function)
    - [Callback](#callback)
  - [Pair Programming](#pair-programming)
    - [Traps](#traps)
  - [Closure](#closure)
    - [Function return a function](#function-return-a-function)
    - [Maintaining Private State](#maintaining-private-state)
    - [Backpack](#backpack)
    - [Review Individual backpack](#review-individual-backpack)
  - [Asychronicity](#asychronicity)
    - [JavaScript is not enough](#javascript-is-not-enough)
    - [Promises, Async and the Event loop](#promises-async-and-the-event-loop)
  - [Web browser](#web-browser)
  - [Event Loop Process or triage](#event-loop-process-or-triage)
    - [ES5 Web browser APIs with callback function](#es5-web-browser-apis-with-callback-function)
      - [Problems Callback Hell and Dirty Error Handling](#problems-callback-hell-and-dirty-error-handling)
      - [Benefits](#benefits)
    - [Rules promise-deferred functionality get in callstack](#rules-promise-deferred-functionality-get-in-callstack)
  - [Promise, Web APIs, the Callback and Micro Task Queue and Event loop enable](#promise-web-apis-the-callback-and-micro-task-queue-and-event-loop-enable) - [Object Oriented JavaScript. Classes, Prototypes](#object-oriented-javascript-classes-prototypes)
  <!--toc:end-->

## JS Focus

1. Analytical problem solving
2. Technical communication
3. Engineering approach
4. Non-Technical communication
5. JavaScript and programming experience.

## Principle of js

- When JavaScript runs, it:
  - Goes through the code line by line and runs/'executes' each line. This is
    known as the **thread of execution. Asynchronous Language**
  - Saves data like strings and arrays so we can use that data later. This is
    done in **memory**.

```javascript
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOupupt = multiplyBy2(10);
```

## Thread of Execution

- JavaScript have only one thread of execution.

| Global Execution | Global Memory                     |
| ---------------- | --------------------------------- |
| num              | 3                                 |
| multiplyBy2      | ƒ                                 |
| output           | multiplyBy2(3) execution context  |
| output           | 6                                 |
| newOutPut        | multiplyBy2(10) execution context |
| newOutPut        | 20                                |

| multiplyBy2(3) execution contex         | Local Memory |
| --------------------------------------- | ------------ |
| inputNumber                             | 3            |
| result: 3\*2                            | 6            |
| return (Goes back to Global with value) | 6            |

| multiplyBy2(10) execution contex        | Local Memory |
| --------------------------------------- | ------------ |
| inputNumber                             | 10           |
| result: 10\*2                           | 20           |
| return (Goes back to Global with value) | 20           |

- JavaScript uses **call stack**
  - Stack call only execute what is on top of the stack
  - Return is used to end an execution context

| Call Stack     |
| -------------- |
| multiplyBy2(3) |
| global         |

## High Order functions

- lets look at some code that break. DRY principle

```javascript
function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

function copyArrayAndDivideBy3(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 3);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);
```

| Global Execution      |                                         |
| --------------------- | --------------------------------------- |
| copyArrayAndDivideBy2 | ƒ (function saved)                      |
| myArray               | [1, 2, 3]                               |
| result                | copyArrayAndDivideBy2 Execution context |

| copyArrayAndDivideBy2([1,2,3]) |             |
| ------------------------------ | ----------- |
| array (parameter)              | [1, 2,3]    |
| output                         | []          |
| loop 0 length: 3               | [0.5,2,3]   |
| loop 1 length: 2               | [0.5,1,3]   |
| loop 2 length: 1               | [0.5,2,1.5] |
| return                         | [0.5,2,1.5] |

| Call Stack                 |
| -------------------------- |
| ~copyArrayAndDivideBy2(3)~ |
| global                     |

- Note a good way to write functions.

  - copyArrayAndDivideBy2 & copyArrayAndDivideBy3
    - this means you need to repeat this functionality

- We could generalize our function. So we pass our specific instructions only
  when we run **copyArrayAndManipulate**

```javascript
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

| Global Execution       | s1                                                 |
| ---------------------- | -------------------------------------------------- |
| copyArrayAndManipulate | ƒ (function saved)                                 |
| multiplyBy2            | ƒ (function saved)                                 |
| result                 | [s2] copyArrayAndManipulate(1,2,3,ƒ(multiplyBy2) ) |
| result                 | [2,4,6]                                            |

| copyArrayAndManipulate(1,2,3, ƒ)    |                                  |
| ----------------------------------- | -------------------------------- |
| array (parameter)                   | [1, 2,3]                         |
| output                              | []                               |
|                                     | stack                            |
| loop 0                              | [s1] array.push(ƒ(multiplyBy2))  |
|                                     | [s2] ƒ(multiplyBy2)(1) Execution |
| f(multiplyBy2)(1) input (parameter) | 1                                |
| return 1\*2                         | 2                                |
|                                     | stack                            |
| loop 2                              | [s1] array.push(ƒ(multiplyBy2))  |
|                                     | [s2] ƒ(multiplyBy2)(2) Execution |
| f(multiplyBy2)(2) input (parameter) | 1                                |
| return 2\*2 pop                     | 4                                |
|                                     | stack                            |
| loop 3                              | [s1] array.push(ƒ(multiplyBy2))  |
|                                     | [s2] ƒ(multiplyBy2)(2) Execution |
| f(multiplyBy2)(3) input (parameter) | 1                                |
| return 3\*2 pop                     | 6                                |
| return output pop                   | [2, 4,6]                         |

| Call Stack                                      |
| ----------------------------------------------- |
| ~copyArrayAndManipulate([1,2,3], instructions)~ |
| global                                          |

- for loops are placed in the execution context

> Why are function being passed?

- Functions are passed by reference. They are stored in global context.

Function are first class object. Functions are objects

- Function can co-exist with objects

  1. Assigned to variables and properties or other objects
  2. Passed as arguments into functions
  3. Returned as values from functions

- Function that takes in other function or passes out a function are: _HOF_
- Function that are passed into a function are the callback

> Summary

Callback and higher order functions simplify our code and keep it DRY.

1. **Declarative readable code**: Map, filter, reduce - the most readable way
   to write code
2. **Code smith & pro interview prep**: One of the most popular topics to test
   in interview both for code smith and mid/senior level job interview
3. **Asynchronous JavaScript** callback are are core aspect of async JavaScript
   and are under the hood of promises and async/await.

### Arrow Function and Anonymous Function

- a shorthand way to save functions

- Improves immediate legibility of the code
- Understating how they're working under the hood is vital to avoid confusion

```javascript
function multiplyBy2(input) {
  return input * 2;
}

const multiplyBy2 = (input) => {
  return input * 2;
};

const multiplyBy2 = (input) => input * 2;

const multiplyBy2 = (input) => input * 2;

const outPut = multiplyBy2(3);
```

| Global Execution | s1                      |
| ---------------- | ----------------------- |
| multiplyBy2      | ƒ (function saved)      |
| result           | [s2] ƒ(multiplyBy2) (2) |
| result           | 4                       |

| [s2] ƒ(multiplyBy2) (2) excecution | --- |
| ---------------------------------- | --- |
| input (parameter)                  | 3   |
| return input \* 2                  | 4   |

### Callback

- When anonymous function is passed as an argument, it is called a callback
- This does not change anything in execution context

```javascript
const output = copyArrayAndManipulate([1, 2, 3], (input) => input * 2);
```

## Pair Programming

-> A good engineer is build by hitting a hard block and solving it.

- Tackle block with a partner
- Stay focused on the problem
- Refine technical communication
- Collaborate to solve problem.

### Traps

1. Researcher

   - Avoid blocks by reading everything they can find on their block/bug

2. Stack Overflow

   - uses code snippets to fix bug without know how they work.

## Closure

- Closure is the most esoteric of JavaScript concepts.
- Enables powerful pro-level functions like `once` and `memoize`
- Many JavaScript design pattern including the module pattern use closure
- Build iterators, handle partial application and maintain state in an
  asynchronous world

- Normally. Function get a new memory every run/invocation

- Can we have function with memories?

  - When our functions get called, we create a live store of data
    (local/variable environment/state) for that function's execution context.
  - When the function finishes execution, its local memory is deleted
    (except the return value)
  - But what if our function finishes execution, its local memory is deleted
    (except the return value)
  - This would let our function definition have an associated cache/persistent
    memory (except the return value)
  - But it all start with us returning a function from another function.

### Function return a function

```javascript
function createFunction(){
  funciton multiplyBy2(num) {
    return num*2;
  }

  return multiplyBy2;
}

const generateFunc = createFunction();
const result = generateFunc(3)
```

- generateFunc has zero relation with create Function

| Global excecution |                              |
| ----------------- | ---------------------------- |
| createFunction    | ƒ (function saved)           |
| generateFunc      | [s1] createFunction()        |
| generateFunc      | ƒ (generateFunc)             |
| result            | f(generateFunc)(3) execution |
| result            | 6                            |

| [s1] createFunction() excecution |                 |
| -------------------------------- | --------------- |
| multiplyBy2                      | ƒ (multiplyBy2) |
| return multiplyBy2 pop           | ƒ (multiplyBy2) |

> scope

```javascript
function outer() {
  let couter = 0;
  function incrementCounter() {
    counter++;
  }

  incrementCounter();
}

outer();
```

| Global excecution |                    |
| ----------------- | ------------------ |
| outer             | ƒ (function saved) |
|                   | [s1] outer()       |

| [s1] Outer                  |                      |
| --------------------------- | -------------------- |
| counter                     | 0                    |
| incrementCounter            | f (incrementCounter) |
| f(incrementCounter) context | stack                |
| counter                     | 1                    |

### Maintaining Private State

```javascript
function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }

  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
```

| Global excecution |                              |
| ----------------- | ---------------------------- |
| outer             | ƒ (outer)                    |
| myNewFunction     | [s1] outer()                 |
| myNewFunction     | f address (incrementCounter) |
| myNewFunction()   | counter = 1 = outer()        |
| myNewFunction()   | counter = 2 = outer()        |

| [s1] outer excecution      |                      |
| -------------------------- | -------------------- |
| counter                    | 0                    |
| incrementCounter           | f (incrementCounter) |
| return f(incrementCounter) | pop                  |

### Backpack

- Closed over "Variable Environment" (C.O.V.E)
- Persistent, Lexical scope, Referenced Data. Backpack
- 'Backpack' or "Closure"

The 'backPack' { or closure} of live data is attached incrementCounter (then to
myNewFunction) through a hidden property know as \*[\*[scope\*]\*]
which persist when the inner function is returned out

![Screenshot 2025-01-19 at 19.02.47.png](../../../../Desktop/Screenshot%202025-01-19%20at%2019.02.47.png)

1. Persistence
2. Scope. Lexical or Static scope
   - Where I save my function. Determines where i have access to data.
3. Referenced
4. Data

###  Review Individual backpack

- What would happen to the code below?

```javascript
function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }

  return incrementCounter;
}

// 1. backPack
const myNewFunction = outer();
myNewFunction();
myNewFunction();

// 2. second backPack
const myNewFunction2 = outer();
myNewFunction();
myNewFunction();
```

- if we run 'outer' again and store the return 'incrementCounter' function
  definition in 'anotherFunction'. This new incrementCounter function was created
  in a new execution context and therefore has a brand new independent backpack.

- Closure gives our function persistence memories and entirely new toolkit.For
  writing professional code.

  1. **Helper Functions** Everyday professional helper function like **once**
     and **memoize**
  2. **Iterator and generators**. Which use lexical scoping and closure to
     achieve the most contemporary pattern for handling data in JavaScript.
  3. **Module pattern** Preserve state for the life of the application without
     polluting the global namespace.
  4. **Asynchronous JavaScript**. Callbacks and promises rely on closure to
     persist state in an asynchronous environment.

> Winning function. Locking down to running code only once

## Asychronicity

- **JavaScript**

  - Single threaded (one command at a time)
  - Synchronously executed (each line is run in the order code appears)

- So what if we have a task
  - **accessing remote server** to get new data
  - **Code we want to run** with that data

> **Challenge** We want to wait for the data to in variable data, so we can run
> displayData on but no code can run in the meantime.

-> This a big problem that can lead to blocking

````javascript
const tweets = getTweets("http://twitter.com/edwin/tweets");
// 350 wait while a request is sent to twitter HQ
displayTweets(tweets);

//more code to run
console.log("I want to runn");


### setTimeout Delay

- setTimeout is a buildin function - its first arguments is the function to
delay followed by ms to delay by

```javascript
function printHello(){
  console.log("Hello")
}

setTimeout(printHello, 1000);
console.log("Me first");
````

In what order will it happen

> Me first
> Hello

### JavaScript is not enough

- We need new pieces (some of which aren't JS)
- Our JavaScript engine has 3 main parts.

1. Thread of execution
2. Memory/variable environment
3. Call Stack

- We need some new component

1. Web Browser APIs /Node background APIs
2. Promises
3. Event loop, Callback/Task queue and micros task queue

### Promises, Async and the Event loop

- **Promises** - the most significant ES6 feature
- **Asynchronous** - the feature that makes dynamic web application possible
- **The Event loop** - JavaScript triage
- **Micro task queue** - Callback queue and Web Browser feature (APIS)

## Web browser

- Has amazing feature's of a browser.

1. JS engine
2. Dev tools
3. Web Sockets
4. Network Request
5. HTML DOM. Rendering
6. Time

- JavaScript have functions that looks like JS, but interface with the browser.
- setTimeout is a label for timer build in the browser
- document is a command to use HTML.Dom
- fetch -> originally named xhr
- localStorage

```javascript
function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 0);

console.log("Me First");
```

| Global Memory                       | Global Memory         | Step |
| ----------------------------------- | --------------------- | ---- |
| printHello                          | f (printHello)        | 1    |
| f(setTimeout(printHello, 0))        | trigger browser timer | 2    |
| console.log("Me First")             |                       | 3    |
| After 1000ms, browser push to stack | f(printHello)         | 4    |

| Web Browser Features  | on completion | step    |
| --------------------- | ------------- | ------- |
| Timer(duration: 1000) | f(printHello) | pending |

> What if there is stuff in the stack? After 1000ms elapse

- We need to have rules on how the browser can add functions after time
  elapses

```javascript
function printHello() {
  console.log("Hello");
}
function blockFor1sec() {
  const array  = []
  for (int i = 0; i < 1500000000000; i++) {
    array.push(i)
  }
}

setTimeout(printHello, 0);
blockFor1sec();
console.log("Me First");
```

| Global Memory                | Global Memory            | Step   |
| ---------------------------- | ------------------------ | ------ |
| printHello                   | f (printHello)           | 1 0ms  |
| f(setTimeout(printhello, 0)) | trigger webbrowser timer | 2 0ms  |
| blockFor1sec                 | f (blockFor1sec)         | 4 1sec |
| console.log("Me First")      | f (blockFor1sec)         | 4 1sec |
| [CQ] f(printHello)           | f (blockFor1sec)         | 4 1sec |

| After 1000ms, browser push to stack | f(printHello) | 4 |

| Web Browser Features                   | on completion  | step  |
| -------------------------------------- | -------------- | ----- |
| Timer(0) -> add this in callback queue | fc(printHello) | 3 0ms |

| CallBack Queue | wait | step |
| -------------- | ---- | ---- |
| f(printHello)  | 1s   | wait |

- When the global execution context is finished, only when callback queue

- You never know the moment. But you are guaranteed of the order

## Event Loop Process or triage

1. Is call stack empty? No. Finish execution context
2. yes, is Global code done? No. Run next global code
3. is Call stack empty? No. Finish execution context
4. yes, Micro Task queue empty? No. dequee micro task queue
5. Add to call stack, execute. After Empty
6. Check the callback Queue. Add to callstack, execute till empty
7. yes, Okay I will add Callback queue to call stack

### ES5 Web browser APIs with callback function

#### Problems Callback Hell and Dirty Error Handling

- Our response data is only available in the callback function.
- Maybe it feels a little old to think passing a function into another function
  only for it to run much later.
- Error handling is dirty. Callback hell

#### Benefits

- Super explicit once you understand how it works under the hood.

- Taking fetch - has two consequence
  1. creates a pending promise in JavaScript world
  2. triggers the browser to make the network request
  3. The browser will update the promise with the result of the network request

```javascript
function display(data) {
  console.log(data);
}

const futureData = fetch("https://twitter.com/edwin/tweets");
futureData.then(display);

console.log("Me First");
```

| Global Memory           | Global Memory                              | Step   |
| ----------------------- | ------------------------------------------ | ------ |
| display                 | f (display)                                | 1 0ms  |
| futureData              | f (fetch) excecution                       | 2 0ms  |
| futureData              | Promise {value:undefined,onFullFilled: []} | 3 0ms  |
| futureData.then         | Promise { ..., onFullFilled: [f(display)]} | 2 0ms  |
| \*<wb\*>                | trigger browser Network Request: NR        |        |
| console.log("Me First") | "Me first!"                                | 1ms    |
| Promise.onFullFilled[]  | [CS] f(display) => "response"              | 4 1sec |

| f(display) Execution context |            |
| ---------------------------- | ---------- |
| data (parameter)             | "response" |
| console.log("hi")            | "response" |

| BT(Web Browser Features)            | on completion                 | step   |
| ----------------------------------- | ----------------------------- | ------ |
| NR(url, "POST" )                    | send message to server        | 3 0ms  |
| NR(url, "POST" )> data = "response" | futureData.value = "response" | x> 0ms |

| CallBack Queue | wait | step |
| -------------- | ---- | ---- |
| f(printHello)  | 1s   | wait |

> summary. **then** method and functionality to call on completion

Any code we want to run on the returned data must also be saved on the promise
object.

Added using .then method to the hidden property 'onFullFilled'

Promise objects will automatically trigger the attached function to run (with
input being the returned data)

### Rules promise-deferred functionality get in callstack

Asynchronous means running code out of order on how it was arranged

- Hold promise-deferred functions in a micro task queue and callback function in
  a task queue (callback queue) when the Web Browser feature is complete.

- Add the function to the call stack (i.e run the function) when:

  - Call stack is empty & all global code run (have the event loop check this
    conditions)

- Prioritize functions in the micro task Queue over the callback queue

```javascript
function display(data) {
  console.log(data);
}

function printHello() {
  console.log("Hello");
}

function blockFor300MS(){
  for(int i; i<=3000000, i++){

  }
}

setTimeout(printHello, 0);

const futureData = fetch("https://twitter.com/edwin/tweets");
futureData.then(display);


blockFor300MS();

console.log("Me First")
```

| Global Memory           | Global Memory                               | Step  |
| ----------------------- | ------------------------------------------- | ----- |
| display                 | f (display)                                 | 1 0ms |
| printHello              | f (display)                                 | 1 0ms |
| blockFor300MS           | f (display)                                 | 1 0ms |
| f(setTimeout)           | Trigger WebBrwoser Timer                    | 2 0ms |
| futureData              | Promise{ value:, onFullFilled:[] }          | 2 0ms |
| futureData.then         | Promise{ value:, onFullFilled:[f(display)]} | 2 0ms |
| blockFor300MS           | blockFor300MS Execution Context             | 2 0ms |
| console.log("Me first") | "Me First"                                  | 2 0ms |
| Micro Task Queue        | Event Loop -> CS.push(f(display))           | 2 0ms |
| f(display)              | display Execution context -> "hi"           | 2 0ms |
| Callback queue          | Event Loop -> CS.push(printHello) > "Hello" | 2 0ms |

| blockFor300MS Execution Context |     |
| ------------------------------- | --- |
| do work                         | pop |

| display Execution Context |     |
| ------------------------- | --- |
| console.log("response")   | pop |

| Web Browser Features       | on completion                 | step  |
| -------------------------- | ----------------------------- | ----- |
| Timer(0)                   | add fc(printHello) CQ         | 0ms   |
| NR("url", httpMethod: Get) | ---> twitter.com              | 3 0ms |
| data= "response"           | <--- data: "response"         | 3 0ms |
| futureData.value = data    | trigger onFullFilled promises | 3 0ms |
| future.onFullFilled        | add to callback queue         | 3 0ms |

| CallBack queue (waiting for Event loop) | order |
| --------------------------------------- | ----- |
| f(printHello)                           | 1     |
| f(display)                              | 2     |

| Micro Task Queue (Priority) | order |
| --------------------------- | ----- |
| f(display)                  | 2     |

## Promise, Web APIs, the Callback and Micro Task Queue and Event loop enable

1. **Non-blocking** applications: This means we don't have to wait in the single
   thread and don't further code from running

2. **However it takes** We cannot predict when our browser features work will
   finish so we let JS handle automatically running the function on its
   completion

3. **Web application** Asynchronous JavaScript is the backbone of the modern web
   letting us build fast 'non-blocking' application

### Object Oriented JavaScript. Classes, Prototypes
