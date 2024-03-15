import { describe, expect, it } from "vitest"
import { testUtils } from "../src"

describe("typeUtils", () => {
  it("isInteger isFloat", () => {
    expect(testUtils.isInteger("12")).toBe(true)
    expect(testUtils.isInteger(12.01)).toBe(false)
    expect(testUtils.isFloat("12.01")).toBe(true)
    expect(testUtils.isFloat(12.0)).toBe(false)
  })
})
