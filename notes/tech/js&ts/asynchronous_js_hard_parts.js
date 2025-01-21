function* createFlow() {
  yield 1;
  yield 2;
  yield 3;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next(); // { value: 1, done: false }
const element2 = returnNextElement.next(); // { value: 2, done: false }

console.log(element1, element2);
