# Refactoring

The goal of this lesson is to refactor and clean up some of our code.

## Intro

We've written a library in TypeScript and it's been awesome! Before we publish it to the world, I want us to do a little refactoring.

One of my favorite things about TypeScript is refactoring with ease. Most editors will show red squiggles if you mess something up during a refactor. Luckily, most of our stuff will be pretty straightforward.

Before I give you the challenge, I want to introduce you to one more advanced TypeScript concept: [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content).

These are global types provided by TypeScript to make your life easier (kinda like `lodash` in some ways).

There are a lot, and I recommend taking some time to learn, but today I want to show you one example: `Partial`.

```typescript
// Taken from the TS docs
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
```

Here, we have a function which updates a `Todo`. Well, you may only want to update one field. So instead of requiring the whole thing as the second argument, you can pass in a _partial_ `Todo`. Using it looks like this:

```typescript
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

updateTodo(todo1, {
  description: "throw out trash",
});
```

We update the description of `todo1`. And the way you use `Partial` is like a function call: you pass in a type inside the `<>` and that's it!

On to the challenge!

### Challenge

Here are your tasks:

- Create a new file `src/lib.ts` and move anything that's exported inside `src/index.ts` here. Do this because we give the end user access to anything exported in `src/index.ts` and we only want that to be the `streakCounter` function.
- Write a function called `buildStreak` that builds a streak but allows you to override default values (a `Partial` can help here)

NOTE: only exported functions in `src/index.ts` will be exposed to users. 

### Solution

Here is what I came up with: https://gist.github.com/jsjoeio/ae6e553213bb6bbef99e15c131dfef68

### Extra Credit

Is there anything else that should be refactored?
