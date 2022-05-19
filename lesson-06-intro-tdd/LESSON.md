## Introduction to TDD

The goal of this lesson is to introduce you to Test-Driven-Development, or better known as TDD.

### Intro

I'm guessing you've heard of TDD. I like it because it promotes testing which then allows you to feel confident in your code.

Some people are very strict about their definition but for us it's a bit more flexible. A basic example

1. write a test for a future feature
2. implement new feature

We're going to use that throughout our workshop today to build our library.

### Challenge

Using a TDD approach and this folder, write a word wrapping algorithm based on the following:

> In text editors you can usually find a configuration setting named "Word wrap". When checked, lines that do not fit horisontally in the editor window are "wrapped" to several lines, thus removing the need for a horisontal scroll bar in the window.
>
> Develop a word-wrapping algorithm, which is given a string and a row-length, and returns a list of word-wrapped-rows.
>
> Examples of behaviour:
>
> - If the row-length is 60, and the input string is 30, the result is just the input string
> - If the row-length is 3, and the input string is "abc def" the result is "abc", "def"
> - If the row-length is 3, and the input string is "abcdef" the result is "abc", "def"
> - If the row-length is 3, and the input string is "abcdef abc" the result is "abc", "def", "abc"
> - With row length 3 and "a b c d e f" the result is "a b", "c d", "e f"

_Source: https://sites.google.com/site/tddproblems/all-problems-1/word-wrapping_

### Solution

Let's share solutions. Here is what I came up with: https://gist.github.com/jsjoeio/0db06be942690a67f55ce1e971b6d82e
TODO@jsjoeio - implement

### Extra Credit

If you finish early and want to get more TDD practice, pick out a kata from [here](https://sites.google.com/site/tddproblems/all-problems-1).
