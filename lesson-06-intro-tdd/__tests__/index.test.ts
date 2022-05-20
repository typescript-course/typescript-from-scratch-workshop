import { wordWrap } from "../src";

// If the row-length is 60, and the input string is 30, the result is just the input string
describe("wordWrap", () => {
  it("should return the input string when row-length >= input string", () => {
    const rowLength = 60;
    const inputStr = "hello";
    const actual = wordWrap(rowLength, inputStr);
    const expected = [inputStr];
    expect(actual).toStrictEqual(expected);
  });
});
