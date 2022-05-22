# Title

The goal of this lesson is to write the logic to reset the streak.

## Intro

If you recall our flow chart, one of the paths leads to a reset of the streak. This is when the user breaks their streak.

We briefly discussed this while talking about the increment lesson. I won't repeat what I already said but we'll continue leveraging all the TS concepts we've learned so far!

The only other consideration is same-day login. What happens if you login twice on the same day? I don't think we mentioned this in the flow chart, but in that case, we keep the streak the same.

On to the coding!

### Challenge

Using TDD, complete these tests by making the appropriate changes to your `streakCounter` function:

```typescript
// File: __tests__/index.test.ts
describe("streakCounter", () => {
  // previous tests omitted...

  // Separate suite to test different scenario
  describe("with a pre-populated streak", () => {
    // TODO: populate localStorage with a streak
    it("should reset if not consecutive", () => {
      // TODO: implement
    });
    it("should not reset the streak for same-day login", () => {
      // TODO: implement
    });
    it("should save the reset streak to localStorage", () => {
      // TODO: implement
    });
  });
});
```

### Solution

Here is what I came up with: https://gist.github.com/jsjoeio/e74f2c365972d79f72c837379265dc7a

### Extra Credit

Imagine you're explaining these to a new TS dev who knows JS well:

- What is the `Partial` utility type?
- What's another example where you might use it?
- What other built-in utlity types exist?
