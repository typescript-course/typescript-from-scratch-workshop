## Testing Setup

The goal of this lesson is to set up the testing infrastructure for our project.

### Intro

One crucial part of learning any new piece of software is writing tests. While TypeScript provides static typing, there's still a need for tests.

Here we're going to set up everything for testing and write our first test.

We'll be using a tool called `ts-jest` which lets you write your tests in TypeScript and type-checks them.

### Challenge

For this challenge, you'll need to set up `ts-jest` and write your first test.

Here is an outline to guide you:

1. Create a folder at the root of `typescript-project-from-scratch` (suggested name: `streak-counter`)
2. Initialize the folder as git repo
3. Push the repo up to GitHub/Gitlab/etc.
4. Initialize the project with npm/yarn: `npm init -y` or `yarn init -y`
5. Follow `ts-jest` [Getting Started](https://github.com/kulshekhar/ts-jest#getting-started)
6. Create `__tests__` at root - this is where we'll keep our tests
7. Add `"test": "jest"` to your `package.json` scripts if needed

After you've done that, create a file called `index.test.ts` in the `__tests__` folder. Add the code below and then run `yarn test`:

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

While most people are still using `ts-jest`, this isn't the only way to write tests in a TypeScript project. Read this post and try to understand what some folks are switching to:
[Jest Babel to SWC](http://blog.joshuakgoldberg.com/jest-babel-to-swc/)
