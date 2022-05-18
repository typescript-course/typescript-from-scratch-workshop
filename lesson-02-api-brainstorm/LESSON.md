## Designing a Public API

The goal of this lesson is to practice designing a public API.

### Intro

When you're designing a public API, especially a library, you really want to think about the end user.

Let's take a second to look at one example most of you may be familiar with: Jest

```typescript
import { sum } from "../src/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

Breaking it down we get:

```typescript
// The test suite
test("<description of test", functionWithTest)

// Assertion
expect(<someValue>).assertion(<expectedValue>)
```

### Challenge

Come up with 5 API designs for a points counter that an end user would display in a UI like this: ["0 points"](https://nextjs.org/learn/foundations/about-nextjs)

Don't worry too much about how it works under the hood. Instead focus on what the developer using your library would want.

### Solution

Here are some I came up with: https://gist.github.com/jsjoeio/d5124757c2b5d4a14588cd3d76a4226d

### Extra Credit

Find 1 example of an open source project with an API you really like. Something that feels natural. Try to figure out why you like it and be prepared to share it with the group.
