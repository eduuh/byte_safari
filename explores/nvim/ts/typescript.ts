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

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

// Object
declare function create(o: object | null): void;
//create({ prop: 0 });
//create(null);

// Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength)

// Interfaces
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// Optional Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare)

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
console.log(p1)

// Classes
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
sam.move();

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let edwin = identity<string>("myString");
console.log(edwin);

// Generic Interface
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identityFn<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identityFn;
console.log(myIdentity);

// Enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let go: Direction = Direction.Up;
console.log(go);

// Modules
export namespace Geometry {
  export interface Shape {
    area(): number;
  }

  export class Circle implements Shape {
    constructor(private radius: number) { }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  export class Square implements Shape {
    constructor(private sideLength: number) { }
    area(): number {
      return this.sideLength * this.sideLength;
    }
  }
}


