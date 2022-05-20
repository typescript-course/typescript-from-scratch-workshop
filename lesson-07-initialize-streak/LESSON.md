# Title

The goal of this lesson is to write the logic to handle initializing a streak.

## Intro

Referencing our flow diagram, one of the parts of the flow is initializing the streak. This happens when there is no streak already.

One of the first TypeScript concepts we're going to discuss is [Parameter Type Annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations). These are one of the most common and frequently used. This is when you annotate function parameters. Here is a basic example from the docs:

```typescript
// `greet` is a function
// it takes one _parameter_ called `name`
// `name` is of type `string`
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

See how similar this is to JS? The only difference is the `: string` which is used to annotate the type.

If you passed the wrong type, TypeScript would compile with an error:

```typescript
// Potential runtime error since .toUpperCase() doesn't exist on `number`
greet(42);
// Argument of type 'number' is not assignable to parameter of type 'string'.
```

The other thing I want to introduce you to is [Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces). These are types for objects. See this example:

```typescript
// Taken straight from the TS docs
// Here we have an interface with two properties: x and y, both are which of type `number`
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

NOTE: later on you may hear talk about intefaces vs type aliases. Don't worry about that now (but keep it in mind for the future). If you're too eager to wait, read [this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces).

Great, we've discussed two basic concepts: parameter type annotations and interfaces. Let's put these to use and start working on our library!

### Challenge

Using TDD, start building the streak counter so that it initializes, or returns a streak object.

You can copy these two files to get started:

```typescript
// File: src/index.ts
export function streakCounter(storage: Storage, date: Date) {
  return {};
}
```

```typescript
// File: __tests__/index.test.ts
describe("streakCounter", () => {
  it("should return a streak object with currentCount, startDate and lastLoginDate", () => {
    // TODO: implement
  });
  it("should return a streak starting at 1 and keep track of lastLoginDate", () => {
    // TODO: implement
  });
});
```

Hints:

- use this library for mocking `localStorage`: https://github.com/jsdom/jsdom
- if you get stuck, ask for help.

### Solution

Here is what mine looks like: https://gist.github.com/jsjoeio/5ca8f8cc8b3135b95daba0d8f5869083

### Extra Credit

Imagine you're talking to a new JavaScript developer learning TypeScript. How would you explain _parameter type annotations_?
