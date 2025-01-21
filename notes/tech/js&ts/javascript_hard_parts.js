function threadOfExcecution() {
  const num = 3;
  function multiplyBy2(inputNumber) {
    const result = inputNumber * 2;
    return result;
  }

  const output = multiplyBy2(num);
  const newOupupt = multiplyBy2(10);
  console.log(output, newOupupt);
}

function highOrderFunction(good) {
  //bad code
  if (!good) {
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

    //divide by 2
    const myArray = [1, 2, 3];
    const result = copyArrayAndDivideBy2(myArray);

    const myArray2 = [1, 2, 3];
    //divide by 3
    const result2 = copyArrayAndDivideBy3(myArray2);
    console.log(result, result2);
  } else {
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
    console.log(result);
  }
  // end bad code
}

function closure() {
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
}

function main(testCode) {
  // Global
  if (!testCode) {
    threadOfExcecution();
    highOrderFunction(true);
  } else {
    testCode();
  }
}

function solve() {
  closure();
}

main(solve);
