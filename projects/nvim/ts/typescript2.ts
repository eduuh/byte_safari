// example.ts

// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number];
tuple = ["hello", 10]; // OK

console.log(isDone, decimal, color, list, tuple);

// Enum
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";

// Void
function warnUser(): void {
  console.log("This is my warning message");
}