import { describe, expect, it } from "vitest"
import { typeUtils } from "../src"

describe("typeUtils", () => {
  it("getType", () => {
    expect(typeUtils.getType(123)).toBe("Number")
    expect(typeUtils.getType("123")).not.toBe("Number")
    expect(typeUtils.getType(() => 1)).toBe("Function")
  })

  it("isNumber", () => {
    expect(typeUtils.isNumber(1)).toBe(true)
    expect(typeUtils.isNumber("1")).toBe(false)
  })

  it("isBool", () => {
    expect(typeUtils.isBool(false)).toBe(true)
    expect(typeUtils.isBool("1")).toBe(false)
  })

  it("isString", () => {
    expect(typeUtils.isString('')).toBe(true)
    expect(typeUtils.isString(Number(1).toString())).toBe(true)
    expect(typeUtils.isString(null)).toBe(false)
  })

  it("isObject", () => {
    expect(typeUtils.isObject({})).toBe(true)
    expect(typeUtils.isObject([])).toBe(false)
    expect(typeUtils.isObject(null)).toBe(false)
  })

  it("isArray", () => {
    expect(typeUtils.isArray([])).toBe(true)
    expect(typeUtils.isArray({})).toBe(false)
    expect(typeUtils.isArray(null)).toBe(false)
  })

  it("isFunction", () => {
    expect(typeUtils.isFunction(() => 1)).toBe(true)
    type funcType = (a: string) => string
    const temp:funcType = (a) => "hello " + a
    expect(typeUtils.isFunction(temp)).toBe(true)

    expect(typeUtils.isFunction({})).toBe(false)
  })

  it("isNull", () => {
    expect(typeUtils.isNull(null)).toBe(true)
    expect(typeUtils.isNull(undefined)).toBe(false)
    expect(typeUtils.isNull(0)).toBe(false)
  })

  it("isUndefined", () => {
    expect(typeUtils.isUndefined(undefined)).toBe(true)
    expect(typeUtils.isUndefined(null)).toBe(false)
    expect(typeUtils.isUndefined("")).toBe(false)
  })

  it("isNullOrUndefined", () => {
    expect(typeUtils.isNullOrUndefined(null)).toBe(true)
    expect(typeUtils.isNullOrUndefined(undefined)).toBe(true)
    expect(typeUtils.isNullOrUndefined("")).toBe(false)
  })

  it("isDate", () => {
    expect(typeUtils.isDate(new Date())).toBe(true)
    expect(typeUtils.isDate("2023-01-01")).toBe(false)
    expect(typeUtils.isDate(1710494564480)).toBe(false)
  })
})
