## Testing Setup

The goal of this lesson is to set up the testing infrastructure so we can write tests for our project.

### Intro

One crucial piece of learning any new piece of software is writing tests. While TypeScript provides static typing, there's still a need for tests. 

Here we're going to set up everything for testing and write our first test.

### Challenge

Inside this repo, you'll find a `package.json` and the basic scaffolding of a project from where we left off in the previous lessons. Your goal is to set up testing infrastructure with `jest`. Follow this guide: link

After, create a basic test with this and run `yarn test`. 

```typescript
describe("basic test", () => {
    it("should pass", () => {
        expect(true).toBe(true)
    })
})
```

### Solution

If everything worked, it should look similar to this:

TODO@jsjoeio - either link to repo, or show code below, or list of things.

### Extra Credit

This is only one way to write tests in a TypeScript project. Most people are still using `ts-jest`. Read this post and try to understand why we went with our approach:
[Jest Babel to SWC](http://blog.joshuakgoldberg.com/jest-babel-to-swc/)