import { describe, it, expect, assert } from "vitest"
import { numberUtils } from "../src"

describe("numberUtils", () => {
  it("tokw", () => {
    expect(numberUtils.tokw('')).toBe(0)
    expect(numberUtils.tokw('1')).toBe('1')
    expect(numberUtils.tokw('1000')).toBe('1k')
    expect(numberUtils.tokw('1000000')).toBe('100w')
    expect(numberUtils.tokw(1000)).toBe('1k')
    expect(numberUtils.tokw(1000000)).toBe('100w')
    assert.deepEqual(numberUtils.tokw(1000000, false), { num: 100, unit: "w" })
    assert.deepEqual(numberUtils.tokw(1000, false), { num: 1, unit: "k" })
  })

  it('addDot', () => {
    expect(numberUtils.addDot(0)).toBe('0.00')
    expect(numberUtils.addDot(0.001)).toBe('0.001')
    expect(numberUtils.addDot(1000)).toBe('1000.00')
    expect(numberUtils.addDot(1000.001)).toBe('1000.001')
    expect(numberUtils.addDot(0.1)).toBe('0.1')
    expect(numberUtils.addDot(1.000000)).toBe('1.00')
    expect(numberUtils.addDot(1.000100)).toBe('1.0001')
    expect(numberUtils.addDot('1')).toBe('1.00')
    expect(numberUtils.addDot('1.000000')).toBe('1.000000')
  })

  it('accAdd', () => {
    expect(numberUtils.accAdd(1, 2)).toBe('3.00')
    expect(numberUtils.accAdd(1.000000, 2.000000)).toBe('3.00')
    expect(numberUtils.accAdd(1.001, 2.01)).toBe('3.011')
    console.log(1.001 + 2.01)
  })
  it('accSub', () => {
    expect(numberUtils.accSub(1, 2)).toBe('-1.00')
    expect(numberUtils.accSub(1.000000, 2.000000)).toBe('-1.00')
    expect(numberUtils.accSub(1.001, 2.01)).toBe('-1.009')
    expect(numberUtils.accSub(1.101, 2.001)).toBe('-0.900')
    expect(numberUtils.accSub(2.001, 1.10101)).toBe('0.89999')
    console.log(2.001 - 1.101)
    console.log(2.001 - 1.10101)
  })
  it('accMul', () => {
    expect(numberUtils.accMul(1, 2)).toBe(2)
    expect(numberUtils.accMul(1.001, 2.01)).toBe(2.01201)
    expect(numberUtils.accMul(2.00, 1.00)).toBe(2)
    expect(numberUtils.accMul(2.00, 1.001)).toBe(2.002)
  })
  it('accDiv', () => {
    expect(numberUtils.accDiv(1, 2)).toBe('0.500')
    expect(numberUtils.accDiv(1.001, 2.01)).toBe('0.498')
    expect(numberUtils.accDiv(1.05, 50)).toBe('0.021')
    expect(numberUtils.accDiv(1.001, 2.01, 5)).toBe('0.49801')
    expect(numberUtils.accDiv(1.001, 2.01, 2)).toBe('0.50')
  })
  it('to100Rate', () => {
    expect(numberUtils.to100Rate(20)).toBe('0.2000')
    expect(numberUtils.to100Rate(0.2)).toBe('0.0020')
    expect(numberUtils.to100Rate(0.02)).toBe('0.0002')
    expect(numberUtils.to100Rate(-2)).toBe(0)
    expect(numberUtils.to100Rate(20, 2)).toBe('0.20')
  })
  it('to100Num ', () => {
    expect(numberUtils.to100Num(0.2)).toBe(20)
    expect(numberUtils.to100Num(0.02)).toBe(2)
    expect(numberUtils.to100Num(0.002)).toBe(0.2)
    expect(numberUtils.to100Num(20.2)).toBe(2020)
    expect(numberUtils.to100Num(0.002)).toBe(0.2)
    expect(numberUtils.to100Num(-1)).toBe(0)
  })
})
