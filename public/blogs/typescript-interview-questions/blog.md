- [**Beginner Level Questions**](#beginner-level-questions)
  - [**1. What is TypeScript?**](#1-what-is-typescript)
  - [**2. Benefits of TypeScript**](#2-benefits-of-typescript)
  - [**3. Basic Types in TypeScript**](#3-basic-types-in-typescript)
  - [**4. Difference between `any` and `unknown`**](#4-difference-between-any-and-unknown)
  - [**5. Type Inference**](#5-type-inference)
  - [**6. Array Types**](#6-array-types)
  - [**7. Tuple**](#7-tuple)
  - [**8. Function Types**](#8-function-types)
  - [**9. Interfaces**](#9-interfaces)
  - [**10. Type Alias**](#10-type-alias)
- [**Intermediate Level Questions**](#intermediate-level-questions)
  - [**11. Optional Properties**](#11-optional-properties)
  - [**12. Difference: `type` vs `interface`**](#12-difference-type-vs-interface)
  - [**13. Union and Intersection Types**](#13-union-and-intersection-types)
  - [**14. Generics**](#14-generics)
  - [**15. Readonly Properties**](#15-readonly-properties)
  - [**16. Enums**](#16-enums)
  - [**17. Type Assertion**](#17-type-assertion)
  - [**18. `never` Type**](#18-never-type)
  - [**19. `extends` vs `implements`**](#19-extends-vs-implements)
  - [**20. Utility Types**](#20-utility-types)
- [**Bonus Concepts**](#bonus-concepts)
  - [**21. `keyof` and `typeof`**](#21-keyof-and-typeof)
  - [**22. Discriminated Union**](#22-discriminated-union)
- [**Coding Practice Exercises**](#coding-practice-exercises)
  - [**1. Create a generic function to return the last element of an array**](#1-create-a-generic-function-to-return-the-last-element-of-an-array)
  - [**2. Type-safe `fetchUser` function**](#2-type-safe-fetchuser-function)
  - [**3. Log keys of an object**](#3-log-keys-of-an-object)
  - [**4. Function that accepts string or number and returns string**](#4-function-that-accepts-string-or-number-and-returns-string)
  - [**5. Function with optional property**](#5-function-with-optional-property)
- [**Conclusion**](#conclusion)

---

<center>![Javascript string methods](/blogs/typescript-interview-questions/image.png)</center>

## 1. What is TypeScript?

### ✅ Explanation:

TypeScript is a **superset of JavaScript** developed by Microsoft that adds **static typing**, **interfaces**, and **advanced tooling** to JavaScript. It helps catch errors during development instead of at runtime.

### ✅ Code Example:

```typescript
let message: string = "Hello, TypeScript!";
console.log(message);
```

---

## 2. Benefits of TypeScript

### ✅ Explanation:

- Static type checking
- Early error detection
- Enhanced IDE support (autocompletion, refactoring)
- Improved readability and maintainability
- Scales better for large applications

### ✅ Code Example:

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Alice"));
```

---

## 3. Basic Types in TypeScript

### ✅ Explanation:

TypeScript provides common primitive types:

- `string`, `number`, `boolean`, `null`, `undefined`, `any`, `void`

### ✅ Code Example:

```typescript
let isActive: boolean = true;
let age: number = 30;
let username: string = "John";
let anything: any = "Can be anything";
```

---

## 4. Difference between `any` and `unknown`

### ✅ Explanation:

- `any`: Disables type checking — use cautiously.
- `unknown`: Safer — must be type-checked before use.

### ✅ Code Example:

```typescript
let a: any = 5;
a = "hello"; // No error

let b: unknown = 10;
// console.log(b.toFixed()); ❌ Error: Needs type check
if (typeof b === "number") {
  console.log(b.toFixed()); // ✅ Safe
}
```

---

## 5. Type Inference

### ✅ Explanation:

TypeScript automatically infers types based on assigned values.

### ✅ Code Example:

```typescript
let city = "London"; // Inferred as string
// city = 100; ❌ Error: Type 'number' is not assignable to type 'string'
```

---

## 6. Array Types

### ✅ Explanation:

You can define array types in two ways:

- `type[]`
- `Array<type>`

### ✅ Code Example:

```typescript
let scores: number[] = [90, 85, 88];
let names: Array<string> = ["Alice", "Bob"];
```

---

## 7. Tuple

### ✅ Explanation:

Tuple allows you to define an **array with a fixed number of elements** and specific types for each element.

### ✅ Code Example:

```typescript
let user: [string, number] = ["Alice", 25];
// user = [25, "Alice"]; ❌ Order matters
```

---

## 8. Function Types

### ✅ Explanation:

You can define types for function parameters and return values.

### ✅ Code Example:

```typescript
function add(x: number, y: number): number {
  return x + y;
}

const multiply: (a: number, b: number) => number = (a, b) => a * b;
```

---

## 9. Interfaces

### ✅ Explanation:

An **interface** in TypeScript defines the shape of an object. It acts as a contract that an object must follow. Interfaces are great for modeling object structures, enforcing property types, and improving code readability and reusability.

Interfaces support:

- Optional properties
- Readonly properties
- Extending other interfaces
- Method definitions

### ✅ Code Example:

```typescript
// Basic interface
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: User = {
  name: "Alice",
  age: 25,
  isAdmin: false,
};

// Optional and readonly properties
interface Product {
  readonly id: number;
  name: string;
  description?: string;
}

const product: Product = {
  id: 101,
  name: "Laptop",
};

// product.id = 102; ❌ Error: Cannot assign to 'id' because it is a read-only property

// Interface with method
interface Logger {
  log(message: string): void;
}

const consoleLogger: Logger = {
  log: (msg: string) => console.log("Log:", msg),
};

// Extending interfaces
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Bob",
  employeeId: 1234,
};
```

### ✅ Interview Tip:

Mention that interfaces are open-ended (they can be extended later), ideal for object-oriented designs, and more idiomatic in TypeScript compared to `type` for object shapes.

---

## 10. Type Alias

### ✅ Explanation:

A Type Alias allows you to create a new name for a type.

### ✅ Code Example:

```ts
type UserID = string;
type Status = "active" | "inactive";

let id: UserID = "abc123";
let currentStatus: Status = "active";
```

---

## 11. Optional Properties

### ✅ Explanation:

Properties can be marked optional using `?`. Useful when some values are not always required.

### ✅ Code Example:

```ts
interface User {
  name: string;
  age?: number;
}

const user1: User = { name: "Alice" };
const user2: User = { name: "Bob", age: 30 };
```

---

## 12. Difference: `type` vs `interface`

### ✅ Explanation:

- `type`: Can define unions, intersections, primitives.
- `interface`: Better for object shape definitions and extensibility.

### ✅ Code Example:

```ts
type Animal = {
  name: string;
};

interface Dog {
  breed: string;
}

interface Dog extends Animal {
  age: number;
}
```

---

## 13. Union and Intersection Types

### ✅ Explanation:

- **Union (\*\***`|`\***\*)**: One of the types
- **Intersection (\*\***`&`\***\*)**: Combines multiple types

### ✅ Code Example:

```ts
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };
type Response = Success | Error;

const res: Response = { status: "success", data: "Done" };
```

```ts
type A = { a: string };
type B = { b: number };
type AB = A & B;

const ab: AB = { a: "hello", b: 42 };
```

---

## 14. Generics

### ✅ Explanation:

Used to create reusable components that work with any type.

### ✅ Code Example:

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));
```

---

## 15. Readonly Properties

### ✅ Explanation:

Prevent modification of properties after object creation.

### ✅ Code Example:

```ts
interface Config {
  readonly apiKey: string;
}

const config: Config = { apiKey: "123-abc" };
// config.apiKey = "new-key"; ❌ Error
```

---

## 16. Enums

### ✅ Explanation:

A way to define named constants (numeric or string-based).

### ✅ Code Example:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

```ts
enum StatusCode {
  SUCCESS = "200",
  NOT_FOUND = "404",
}

let code: StatusCode = StatusCode.SUCCESS;
```

---

## 17. Type Assertion

### ✅ Explanation:

Tell TypeScript the type explicitly when it can’t infer correctly.

### ✅ Code Example:

```ts
let input: any = "123";
let length: number = (input as string).length;
```

---

## 18. `never` Type

### ✅ Explanation:

Used for values that never occur (e.g., functions that throw or infinite loops).

### ✅ Code Example:

```ts
function throwErr(): never {
  throw new Error("Error occurred");
}

function infinite(): never {
  while (true) {}
}
```

---

## 19. `extends` vs `implements`

### ✅ Explanation:

- `extends`: Inheritance for classes and interfaces
- `implements`: Enforces class to follow interface structure

### ✅ Code Example:

```ts
interface Person {
  name: string;
}

class Employee implements Person {
  constructor(public name: string) {}
}

class Manager extends Employee {
  teamSize: number = 5;
}
```

---

## 20. Utility Types

### ✅ Explanation:

Built-in helpers to manipulate types:

- `Partial<T>`: Makes all properties optional
- `Required<T>`: Makes all required
- `Readonly<T>`: Makes all readonly
- `Pick<T, K>`: Picks selected keys
- `Omit<T, K>`: Omits selected keys

### ✅ Code Example:

```ts
interface User {
  id: number;
  name: string;
  age: number;
}

const partialUser: Partial<User> = { name: "Alice" };
const requiredUser: Required<User> = { id: 1, name: "A", age: 25 };
const readonlyUser: Readonly<User> = { id: 1, name: "Bob", age: 30 };

const pickedUser: Pick<User, "name" | "age"> = { name: "C", age: 22 };
const omittedUser: Omit<User, "age"> = { id: 1, name: "D" };
```

---

## 21. `keyof` and `typeof`

### ✅ Explanation:

- `typeof`: Gets the type of a variable.
- `keyof`: Gets the union of keys of a type/object.

### ✅ Code Example:

```ts
const user = {
  name: "Alice",
  age: 25,
};

// typeof
type UserType = typeof user; // { name: string; age: number; }

// keyof
type UserKeys = keyof UserType; // "name" | "age"

function getValue(obj: UserType, key: UserKeys) {
  return obj[key];
}

console.log(getValue(user, "name")); // Alice
```

---

## 22. Discriminated Union

### ✅ Explanation:

A union of types with a common literal property to distinguish them. Useful in exhaustive type checks.

### ✅ Code Example:

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.height;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
```

---

## 🧩 Coding Practice Exercises

### 1. Create a generic function to return the last element of an array

```ts
function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b"])); // "b"
```

### 2. Type-safe `fetchUser` function

```ts
interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "User" + id }), 1000);
  });
}

fetchUser(1).then((user) => console.log(user.name));
```

### 3. Log keys of an object

```ts
function logKeys<T>(obj: T): void {
  (Object.keys(obj) as Array<keyof T>).forEach((key) => {
    console.log(`${key}: ${obj[key]}`);
  });
}

logKeys({ name: "Alice", age: 25 });
```

### 4. Function that accepts string or number and returns string

```ts
function stringify(input: string | number): string {
  return input.toString();
}

console.log(stringify(42)); // "42"
console.log(stringify("hello")); // "hello"
```

### 5. Function with optional property

```ts
interface GreetOptions {
  name?: string;
}

function greet(options: GreetOptions): string {
  return `Hello, ${options.name ?? "Guest"}`;
}

console.log(greet({ name: "Alice" })); // Hello, Alice
console.log(greet({})); // Hello, Guest
```

---

## 📌 Conclusion

You've now explored beginner to advanced TypeScript concepts with practical coding examples. Use this cheat sheet to review, revise, and impress your interviewers!
