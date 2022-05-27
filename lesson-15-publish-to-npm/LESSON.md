# Publishing to npm

The goal of this lesson is publish our code on npm as a package.

## Intro

We have our library. It's tested and ready for public release. Now, how do we actually get it out there?

That's what this lesson is all about.

As you probably already know, most of the JavaScript world gets their packages from npm. Same for TypeScript. There is also a registry on GitHub, but we won't be covering that today.

Instead, our goal is to get this published on npm.

### Challenge

For this challenge, you have a few mini-tasks:

1. Sign up for an npm account (free) [here](https://www.npmjs.com/signup)
2. Add your token to your repo secrets as `NPM_TOKEN`
3. Publish with [GitHub Action](https://github.com/JS-DevTools/npm-publish)

If at any point you get stuck, ask for help.

Tip:

- The suggested GitHub Action also supports a `dry-run` input/flag so you can set that if you want to test before publishing

### Solution

Here is what the GitHub workflow file looks like: https://www.npmjs.com/package/@jsjoeio/streak-counter

And here is what you should see on npm if you published your package correctly: https://www.npmjs.com/package/@jsjoeio/streak-counter

### Extra Credit

What are some other tools we might use for publishing TypeScript packages?
