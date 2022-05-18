## Testing Setup

The goal of this lesson is to set up the testing infrastructure so we can write tests for our project.

### Intro

One crucial piece of learning any new piece of software is writing tests. While TypeScript provides static typing, there's still a need for tests.

Here we're going to set up everything for testing and write our first test.

We'll be using a tool called `ts-jest` which lets you write your tests in TypeScript and type-checks them.

### Challenge

For this challenge, you'll need to

Here is an outline to guide you:

1. Create folder at the root of `typescript-project-from-scratch`, initialize as git repo, and push up to GitHub/Gitlab/etc (suggested name: `@jsjoeio/streak-counter` but replace 'jsjoeio' with your username)
2. Initialize project with npm/yarn
3. Follow `ts-jest` [Getting Started](https://github.com/kulshekhar/ts-jest#getting-started)
4. Create `__tests__` at root - this is where we'll keep our tests
5. Add `"test": "jest"` to your `package.json` scripts if needed

After, create a file called `index.test.ts` with this and run `yarn test`:

```typescript
describe("basic test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
```

### Solution

If everything worked, you should have a passing test! 🎉

### Extra Credit

This is only one way to write tests in a TypeScript project. Most people are still using `ts-jest`. Read this post and try to understand what some folks are switching to:
[Jest Babel to SWC](http://blog.joshuakgoldberg.com/jest-babel-to-swc/)
