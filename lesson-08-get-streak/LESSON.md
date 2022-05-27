# Fetching a Streak Counter

The goal of this lesson is write the logic that gets the streak if it already exists.

## Intro

There are two problems with our current implementations:

1. We're not actually storing the streak in `localStorage`
2. We always create a new streak

Oops!

Thinking back to our flow chart, this is how our library should work under the hood:

- Check if streak already exists - if so, return it
- If not, initialize a new one

Let's make it happen!

### Challenge

Using TDD, complete these tests by making the appropriate changes to your `streakCounter` function:

```typescript
// File: __tests__/index.test.ts
describe("streakCounter", () => {
  // previous tests omitted to keep code block short
  it("should store the streak in localStorage", () => {
    // TODO: implement
  });

  // Separate suite to test different scenario
  describe("with a pre-populated streak", () => {
    // TODO: populate localStorage with a streak
    it("should return the streak from localStorage", () => {
      // TODO: implement
    });
  });
});
```

Hints:

- Use a `try/catch` block when parsing JSON
- Don't forget to clear `localStorage` after each test

### Solution

Here is how I tackled it: https://gist.github.com/jsjoeio/e83d86634bb71d3fc0db176256f7356a

### Extra Credit

For extra credit, consider these questions:

1. What are the downsides to storing in `localStorage`?
2. How would you adapt this to be able to use a database instead of `localStorage`?
