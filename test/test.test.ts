import { describe, expect, it } from "vitest"
import { testUtils } from "../src"

describe("typeUtils", () => {
  it("isInteger isFloat", () => {
    expect(testUtils.isInteger("12")).toBe(true)
    expect(testUtils.isInteger(12.01)).toBe(false)
    expect(testUtils.isFloat("12.01")).toBe(true)
    expect(testUtils.isFloat(12.0)).toBe(false)
  })

  it("isSingleEmpty", () => {
    expect(testUtils.isSingleEmpty({})).toBe(true)
    expect(testUtils.isSingleEmpty({ a: 1 })).toBe(false)
    expect(testUtils.isSingleEmpty(12.01)).toBe(false)
    expect(testUtils.isSingleEmpty(0)).toBe(true)
    expect(testUtils.isSingleEmpty([])).toBe(true)
    expect(testUtils.isSingleEmpty([1])).toBe(false)
    expect(testUtils.isSingleEmpty('12.0')).toBe(false)
    expect(testUtils.isSingleEmpty('')).toBe(true)
    expect(testUtils.isSingleEmpty(null)).toBe(true)
    expect(testUtils.isSingleEmpty(undefined)).toBe(true)
    expect(testUtils.isSingleEmpty(NaN)).toBe(true)
    expect(testUtils.isSingleEmpty(false)).toBe(true)
    expect(testUtils.isSingleEmpty(true)).toBe(false)
    expect(testUtils.isSingleEmpty(new Date())).toBe(false)
  })

  // 只有所有的值为空才是true
  it("isEmpty", () => {
    expect(testUtils.isEmpty([1], {})).toBe(false)
    expect(testUtils.isEmpty([], {})).toBe(true)
    expect(testUtils.isEmpty([], { a: 1 })).toBe(false)
    expect(testUtils.isEmpty([1], { a: 1 })).toBe(false)
    expect(testUtils.isEmpty([], {}, '')).toBe(true)
    expect(testUtils.isEmpty([], {}, '12.0')).toBe(false)
    expect(testUtils.isEmpty([], {}, 0)).toBe(true)
    expect(testUtils.isEmpty([], {}, 12.0)).toBe(false)
    expect(testUtils.isEmpty([], {}, null)).toBe(true)
  })

  // 只有所有的值不为空是true,只要有一个值为空就是false
  it("isNotEmpty", () => {
    expect(testUtils.isNotEmpty({}, [1])).toBe(false)
    expect(testUtils.isNotEmpty({ a: 1 }, ['1'])).toBe(true)
    expect(testUtils.isNotEmpty({}, [1], '12.0')).toBe(false)
    expect(testUtils.isNotEmpty({}, [1], 12.0)).toBe(false)
    expect(testUtils.isNotEmpty({}, [], null)).toBe(false)
    expect(testUtils.isNotEmpty({ a: 1 }, ['1'], '2')).toBe(true)
  })

  it("isEmptyNoZero", () => {
    expect(testUtils.isEmptyNoZero(1)).toBe(false)
    expect(testUtils.isEmptyNoZero(0)).toBe(false)
    expect(testUtils.isEmptyNoZero('12.0')).toBe(false)
    expect(testUtils.isEmptyNoZero('')).toBe(true)
    expect(testUtils.isEmptyNoZero('0')).toBe(false)
  })

  it('isZero', () => {
    expect(testUtils.isZero(1)).toBe(false)
    expect(testUtils.isZero(0)).toBe(true)
    expect(testUtils.isZero('0')).toBe(true)
    expect(testUtils.isZero('12.0')).toBe(false)
    expect(testUtils.isZero(null)).toBe(false)
  })
})
