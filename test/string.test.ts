import { describe, expect, it, assert } from "vitest"
import { stringUtils } from "../src"

describe("stringUtils", () => {
  it("reverse", () => {
    expect(stringUtils.reverse("12")).toBe('21')
    expect(stringUtils.reverse("测试")).toBe('试测')
  })

  it("hideChar", () => {
    expect(stringUtils.hideChar("12345678910")).toBe('1234***8910')
    expect(stringUtils.hideChar("12345678910", 3, 4)).toBe('123****8910')
    expect(stringUtils.hideChar("12345678910", 5, 4, '^')).toBe('12345^^8910')
  })

  it("moneyUnit", () => {
    expect(stringUtils.moneyUnit("12")).toBe('+12')
    expect(stringUtils.moneyUnit("12", '-')).toBe('-12')
    expect(stringUtils.moneyUnit("12", ' ')).toBe('')
    expect(stringUtils.moneyUnit("-12")).toBe('-12')
    expect(stringUtils.moneyUnit("+12")).toBe('+12')
    expect(stringUtils.moneyUnit(-12, '+')).toBe('-12')
    expect(stringUtils.moneyUnit(+12, ' ')).toBe('')
    expect(stringUtils.moneyUnit(12, '-')).toBe('-12')
  })

  it("trim", () => {
    expect(stringUtils.trim("  asad ")).toBe('asad')
    expect(stringUtils.trim("  asad ", ' ')).toBe('  asad ')
    expect(stringUtils.trim("  asad ", 'left')).toBe('asad ')
    expect(stringUtils.trim("  asad ", 'right')).toBe('  asad')
    expect(stringUtils.trim("  asad ", 'both')).toBe('asad')
    expect(stringUtils.trim("  a s ad ", 'all')).toBe('asad')
  })

  it("trimLeft", () => {
    expect(stringUtils.trimLeft("  asad")).toBe('asad')
    expect(stringUtils.trimLeft("  asad ")).toBe('asad ')
  })

  it("trimRight", () => {
    expect(stringUtils.trimRight(" asad  ")).toBe(' asad')
    expect(stringUtils.trimRight("asad   ")).toBe('asad')
  })

  it("trimAll", () => {
    expect(stringUtils.trimAll("  asad  ")).toBe('asad')
    expect(stringUtils.trimAll("as ad   ")).toBe('asad')
  })

  it("trimChar", () => {
    expect(stringUtils.trimChar("-asad-", '-')).toBe('asad')
    expect(stringUtils.trimChar("-asad-", '-', 'left')).toBe('asad-')
    expect(stringUtils.trimChar("-asad-", '-', 'right')).toBe('-asad')
    expect(stringUtils.trimChar("-asad-", '-', 'both')).toBe('asad')
    expect(stringUtils.trimChar("-a-sad-", '-', 'all')).toBe('asad')
    expect(stringUtils.trimChar(" a sad ", ' ', 'all')).toBe('asad')
  })

  it("firstLetterToUpper", () => {
    expect(stringUtils.firstLetterToUpper("asa")).toBe('Asa')
    expect(stringUtils.firstLetterToUpper("哈哈哈")).toBe('哈哈哈')
    expect(stringUtils.firstLetterToUpper("hhhh")).toBe('Hhhh')
  })

  it("fromUrlParams", () => {
    assert.deepEqual(stringUtils.fromUrlParams("?a=1&b[c]=3&b[d]=4"), { a: '1', b: { c: '3', d: '4' }})
    assert.deepEqual(stringUtils.fromUrlParams("?a=1^b[c]=3^b[d]=4", { delimiter: '^' }), { a: '1', b: { c: '3', d: '4' }})
    assert.deepEqual(stringUtils.fromUrlParams("a&b=", { strictNullHandling: true }), { a: null, b: '' })
    assert.deepEqual(stringUtils.fromUrlParams("a&b="), { a: '', b: '' })
  })

  it("isNumeric", () => {
    expect(stringUtils.isNumeric('3213')).toBe(true)
    expect(stringUtils.isNumeric('3213a')).toBe(false)
    expect(stringUtils.isNumeric('32哈哈13')).toBe(false)
    expect(stringUtils.isNumeric('3213.1')).toBe(true)
  })

  it("toFixed", () => {
    expect(stringUtils.toFixed('123')).toBe('123.00')
    expect(stringUtils.toFixed('123.120')).toBe('123.12')
    expect(stringUtils.toFixed('123.1201', 3)).toBe('123.120')
    expect(stringUtils.toFixed('123.1205', 3)).toBe('123.121')
    expect(stringUtils.toFixed('123ad')).toBe('0.00')
  })

  it('accAdd', () => {
    expect(stringUtils.accAdd('1', '2')).toBe('3.00')
    expect(stringUtils.accAdd('1.000000', '2.000000')).toBe('3.000000')
    expect(stringUtils.accAdd('1.001', '2.01')).toBe('3.011')
  })

  it('accSub', () => {
    expect(stringUtils.accSub('1', '2')).toBe('-1.00')
    expect(stringUtils.accSub('1.000000', '2.000000')).toBe('-1.000000')
    expect(stringUtils.accSub('1.001', '2.01')).toBe('-1.009')
    expect(stringUtils.accSub('1.101', '2.001')).toBe('-0.900')
    expect(stringUtils.accSub('2.001', '1.10101')).toBe('0.89999')
  })

  it('accMul', () => {
    expect(stringUtils.accMul('1', '2')).toBe(2)
    expect(stringUtils.accMul('1.001', '2.01')).toBe(2.01201)
    expect(stringUtils.accMul('2.00', '1.00')).toBe(2)
    expect(stringUtils.accMul('2.00', '1.001')).toBe(2.002)
  })

  it('accDiv', () => {
    expect(stringUtils.accDiv('1', '2')).toBe('0.500')
    expect(stringUtils.accDiv('1.001', '2.01')).toBe('0.498')
    expect(stringUtils.accDiv('1.05', '50')).toBe('0.021')
    expect(stringUtils.accDiv('1.001', '2.01', 5)).toBe('0.49801')
    expect(stringUtils.accDiv('1.001', '2.01', 2)).toBe('0.50')
  })

  it('compareVersion', () => {
    expect(stringUtils.compareVersion("1.0.1", "1.1.1")).toBe(-1)
    expect(stringUtils.compareVersion("1.1.1", "1.0.1")).toBe(1)
    expect(stringUtils.compareVersion("1.1.1", "1.1.1")).toBe(0)
  })

  it('camelToKebab', () => {
    expect(stringUtils.camelToKebab('camelToKebab')).toBe('camel-to-kebab')
    expect(stringUtils.camelToKebab('CamelToKebab', '-')).toBe('camel-to-kebab')
    expect(stringUtils.camelToKebab('camelToKebab', '_')).toBe('camel_to_kebab')
    expect(stringUtils.camelToKebab('camelToKebab', ' ')).toBe('camel to kebab')
    expect(stringUtils.camelToKebab('camelToKebab', '')).toBe('cameltokebab')
    expect(stringUtils.camelToKebab('camelToKebab', ')')).toBe('camel)to)kebab')
    expect(stringUtils.camelToKebab('CamelToKebab哈')).toBe('CamelToKebab哈')
  })

  it('kebabToCamel', () => {
    expect(stringUtils.kebabToCamel('kebab-case-string')).toBe('kebabCaseString')
    expect(stringUtils.kebabToCamel('kebab_case_string', '_')).toBe('kebabCaseString')
    expect(stringUtils.kebabToCamel('kebab case string', ' ')).toBe('kebabCaseString')
    expect(stringUtils.kebabToCamel('kebab)case)string', ')')).toBe('kebabCaseString')
    expect(stringUtils.kebabToCamel('kebab_case哈string', '_')).toBe('kebab_case哈string')
    expect(stringUtils.kebabToCamel('kebab case哈 string')).toBe('kebab case哈 string')
  })
  it('to100Rate', () => {
    expect(stringUtils.to100Rate(20)).toBe('0.2000')
    expect(stringUtils.to100Rate(0.2)).toBe('0.0020')
    expect(stringUtils.to100Rate(0.02)).toBe('0.0002')
    expect(stringUtils.to100Rate(-2)).toBe(0)
    expect(stringUtils.to100Rate(20, 2)).toBe('0.20')
  })
  it('to100Num ', () => {
    expect(stringUtils.to100Num(0.2)).toBe(20)
    expect(stringUtils.to100Num(0.02)).toBe(2)
    expect(stringUtils.to100Num(0.002)).toBe(0.2)
    expect(stringUtils.to100Num(20.2)).toBe(2020)
    expect(stringUtils.to100Num(0.002)).toBe(0.2)
    expect(stringUtils.to100Num(-1)).toBe(0)
  })
})

