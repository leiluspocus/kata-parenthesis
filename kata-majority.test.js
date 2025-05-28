import { expect, test } from 'vitest'
import majority from './kata-majority.js'

test("Cas de base", () => {
  expect(majority([3,1,4,1])).toBe("1");
});
