import { describe, it, expect, assert } from "vitest"
import { typeExpand } from "../src"

typeExpand(["number"])

describe("numberUtils", () => {
  it("tokw", () => {
    const num1 = 1000
    const num2 = 1000000
    expect(num1.tokw()).toBe('1k')
    expect(num2.tokw()).toBe('100w')
    assert.deepEqual(num2.tokw(false), { num: 100, unit: "w" })
    assert.deepEqual(num1.tokw(false), { num: 1, unit: "k" })
  })

  it('addDot', () => {
    const num1 = 0
    const num2 = 0.001
    const num3 = 1000
    const num4 = 1000.001
    const num5 = 0.1
    const num6 = 1.000000
    const num7 = 1.000100
    expect(num1.addDot()).toBe('0.00')
    expect(num2.addDot()).toBe('0.001')
    expect(num3.addDot()).toBe('1000.00')
    expect(num4.addDot()).toBe('1000.001')
    expect(num5.addDot()).toBe('0.1')
    expect(num6.addDot()).toBe('1.00')
    expect(num7.addDot()).toBe('1.0001')
  })

  it('accAdd', () => {
    const num1 = 1
    const num2 = 1.000000
    const num3 = 1.001
    expect(num1.accAdd(2)).toBe('3.00')
    expect(num2.accAdd(2.000000)).toBe('3.00')
    expect(num3.accAdd(2.01)).toBe('3.011')
    console.log(1.001 + 2.01)
  })
  it('accSub', () => {
    const num1 = 1
    const num2 = 1.000000
    const num3 = 1.001
    const num4 = 1.101
    const num5 = 2.001
    expect(num1.accSub(2)).toBe('-1.00')
    expect(num2.accSub(2.000000)).toBe('-1.00')
    expect(num3.accSub(2.01)).toBe('-1.009')
    expect(num4.accSub(2.001)).toBe('-0.900')
    expect(num5.accSub(1.10101)).toBe('0.89999')
    console.log(2.001 - 1.101)
    console.log(2.001 - 1.10101)
  })
  it('accMul', () => {
    const num1 = 1
    const num2 = 1.001
    const num3 = 2.00
    expect(num1.accMul(2)).toBe(2)
    expect(num2.accMul(2.01)).toBe(2.01201)
    expect(num3.accMul(1.00)).toBe(2)
    expect(num3.accMul(1.001)).toBe(2.002)
  })
  it('accDiv', () => {
    const num1 = 1
    const num2 = 1.001
    const num3 = 1.05
    expect(num1.accDiv(2)).toBe('0.500')
    expect(num2.accDiv(2.01)).toBe('0.498')
    expect(num3.accDiv(50)).toBe('0.021')
    expect(num2.accDiv(2.01, 5)).toBe('0.49801')
    expect(num2.accDiv(2.01, 2)).toBe('0.50')
  })
  it('to100Rate', () => {
    const num1 = 1
    const num2 = 12
    const num3 = 1.05
    expect(num1.to100Rate()).toBe('0.0100')
    expect(num2.to100Rate()).toBe('0.1200')
    expect(num3.to100Rate()).toBe('0.0105')
    expect(num2.to100Rate(2)).toBe('0.12')
    expect(num2.to100Rate(3)).toBe('0.120')
  })
  it('to100Num', () => {
    const num1 = 0.2
    const num2 = 0.13
    const num3 = 1.05
    const num5 = -1
    expect(num1.to100Num()).toBe(20)
    expect(num2.to100Num()).toBe(13)
    expect(num3.to100Num()).toBe(105)
    expect(num5.to100Num()).toBe(0)
  })
})
