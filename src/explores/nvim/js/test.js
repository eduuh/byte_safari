// ES6 Features

// 1. Constants and block-scoped variables (let, const)
const PI = 3.14159;
let name2 = "Alice";

// 2. Arrow functions
const add = (a, b) => a + b;

// 3. Template literals
const greeting = `Hello, ${name2}!`;

// 4. Destructuring assignment
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;

// 5. Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

//t6. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// 7. Promises
const fetchData = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// 8. Async/await
const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchDataAsync();

// 9. Modules (import/export)
// Assume we have another file named utils.js exporting a function `multiply`
// import { multiply } from './utils.js';

// 10. Default parameters
const greet = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greet(); // Output: Hello, Guest!
greet("Bob"); // Output: Hello, Bob!

// 11. Array methods (forEach, map, filter, reduce)
const numbersArray = [1, 2, 3, 4, 5];

numbersArray.forEach((num) => {
  console.log(num);
});

const doubledNumbers = numbersArray.map((num) => num * 2);
console.log(doubledNumbers);

const evenNumbers = numbersArray.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 12. Object shorthand
const age = 30;
const personObject = { name2, age };

// 13. Rest parameters
const sumNumbers = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

// 14. Optional chaining (ES2020)
const user = {
  id: 1,
  name: "John",
  address: {
    city: "New York",
    postalCode: "10001",
  },
};

console.log(user.address?.city); // Output: New York

// 15. Nullish coalescing operator (ES2020)
const defaultValue = null;
const value = defaultValue ?? "Default Value";

console.log(value); // Output: Default Value
