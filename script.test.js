// Write tests for the following, and then make the tests pass!

// A capitalize function that takes a string and returns it with the first character capitalized.

import { capitalizeFirstLetter } from "./script";
import { reverseString } from "./script";
import { calculator } from "./script";
import { caesarCipher } from "./script";
import { analyzeTheArray } from "./script";
import { mockCallback, forEach } from "./script";

test("first character is capitalized", () => {
  expect(capitalizeFirstLetter("hello")).toMatch("Hello");
});

test("string is reversed", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("calculator operations are correct", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("caesar cipher", () => {
  expect(caesarCipher("Hello WorlD", 1)).toMatch("Ifmmp XpsmE");
});

test("analyze the array and return an object with the following properties: average, min, max, and length", () => {
  expect(analyzeTheArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("testing mocks", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});
