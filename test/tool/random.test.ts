import { expect, it } from "vitest"
import { random } from "../../src/index"

it("random", () => {
  const value = random(0, 100)
  expect(value).toBeLessThanOrEqual(100)
  expect(value).toBeGreaterThanOrEqual(0)
  const value1 = random(0, 10)
  expect(value1).toBeLessThanOrEqual(10)
  expect(value1).toBeGreaterThanOrEqual(0)
  const value2 = random(-1, 1)
  expect(value2).toBe(0)
})
