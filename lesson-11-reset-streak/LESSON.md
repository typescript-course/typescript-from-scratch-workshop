# Reseting a Streak Counter

The goal of this lesson is to write the logic to reset the streak.

## Intro

If you recall our flow chart, one of the paths leads to a reset of the streak. This happens when the user breaks their streak.

We briefly discussed this while talking about incrementing a streak in lesson ten. I won't repeat what I already said, but we'll continue leveraging all the TypeScript concepts we've learned so far!

The only other consideration is same-day logins. What happens if you log in twice on the same day? I don't think we mentioned this in the flow chart but, in that case, we keep the streak the same.

On to the coding!

### Challenge

Using TDD, complete these tests by making the appropriate changes to your `streakCounter` function:

```typescript
// File: __tests__/index.test.ts
describe("streakCounter", () => {
  // previous tests omitted...

  // Separate suite to test different scenario
  describe("with a pre-populated streak", () => {
    // previous test setup omitted...
    it("should reset if not consecutive", () => {
      const date = new Date("12/13/2021");
      const streak = streakCounter(mockLocalStorage, date);

      expect(streak.currentCount).toBe(2);

      // Skip a day and break the streak
      const dateUpdated = new Date("12/15/2021");
      const streakUpdated = streakCounter(mockLocalStorage, dateUpdated);

      expect(streakUpdated.currentCount).toBe(1);
    });
    it("should not reset the streak for same-day login", () => {
      const date = new Date("12/13/2021");
      // Call it once so it updates the streak
      streakCounter(mockLocalStorage, date);

      // Simulate same-day login
      const dateUpdated = new Date("12/13/2021");
      const streakUpdated = streakCounter(mockLocalStorage, dateUpdated);

      expect(streakUpdated.currentCount).toBe(2);
    });
    it("should save the reset streak to localStorage", () => {
      const key = "streak";
      const date = new Date("12/13/2021");
      // Call it once so it updates the streak
      streakCounter(mockLocalStorage, date);

      // Skip a day and break the streak
      const dateUpdated = new Date("12/15/2021");
      const streakUpdated = streakCounter(mockLocalStorage, dateUpdated);

      const streakAsString = mockLocalStorage.getItem(key);
      // Normally you should wrap in try/catch in case the JSON is bad
      // but since we authored it, we can skip here
      const streak = JSON.parse(streakAsString || "");

      expect(streak.currentCount).toBe(1);
    });
  });
});
```

### Solution

Here is what I came up with: https://gist.github.com/jsjoeio/e74f2c365972d79f72c837379265dc7a

### Extra Credit

Imagine you're explaining these to a new TypeScript dev who knows JavaScript well:

- What is the `Partial` utility type?
- What's another example where you might use it?
- What other built-in utlity types exist?
