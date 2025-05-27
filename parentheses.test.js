import { expect, test } from 'vitest'
import isValid from './parentheses.js'

test("Invalid data", () => {
  expect(isValid(2)).toBe(false);
});

test('Tests imbrications parenthèses valides', () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("()[]{}")).toBe(true); 
  expect(isValid("([])")).toBe(true); 
  expect(isValid("{[()]}")).toBe(true); 
  expect(isValid("([{}])")).toBe(true);
  expect(isValid("")).toBe(true);
});


test('Tests imbrications parenthèses invalides', () => { 
  expect(isValid("(]")).toBe(false); 
  expect(isValid("(((")).toBe(false);
  expect(isValid(")))")).toBe(false); 
  expect(isValid("([)]")).toBe(false);
});