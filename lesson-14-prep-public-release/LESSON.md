# Title

The goal of this lesson is prep our code for a public release.

## Intro

When you're publishing code to the outside world for them to consume, there are certain things you should do first. For example, you should make your types available so folks get Intellisense benefits. You should also not publish your test code with your package. Some of these things are TypeScript specific and others are not.

Let's talk about exposing your types. There are two approaches people take in the TS world:

- publishing a separate package under [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) like `@types/jest`
- publishing it with your package

There are pros/cons to both. Since our library is tiny, we're going to publish the types with it. To do this, you need to:

1. make sure `emit` is set to `true` in your `tsconfig.json` to emit the declaration file
2. set the `types` field in your `package.json` (read more [here](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package))

The other reminder I want to tell you about being extra careful that you only export the `streakCounter` function in the `src/index.ts` file. Otherwise, anything else exported there will be available to the end consumer.

Alright, let's prep this lib for release!

### Challenge

Using `microbundle`, prep your package for release. Suggestions:

1. fill out the common `package.jsaon` fields like repo, author, etc.
2. follow `microbundle`'s getting started [here](https://github.com/developit/microbundle#using-with-typescript)
3. make sure to use an `.npmignore` (read more [here](https://npm.github.io/publishing-pkgs-docs/publishing/the-npmignore-file.html))

NOTE: you may need to change your Jest config to `jest.config.cjs`. If you run into issues, let me know.

### Solution

When you think you're done, compare yours to mine here: https://github.com/jsjoeio/streak-counter

### Extra Credit

One things you might care about as a library author is usage stats. How many people are downloading your package a week? How many stars do you have? etc.

Come up with a list of usage metrics library authors might care about and figure out how you would get them.
