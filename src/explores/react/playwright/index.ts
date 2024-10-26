function generateRandomNumber() {
  const randomNumber: number = Math.random();
  if (randomNumber > 0.5) {
    throw new Error('Invalid number');
  }
  return randomNumber;
}

console.log(generateRandomNumber());
