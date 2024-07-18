import { describe, expect, it, assert } from "vitest"
import { typeExpand } from "../src"

typeExpand(["string"])
describe("stringExpand", () => {
  it("reverse", () => {
    const str = "12"
    expect(str.reverse()).toBe('21')
    expect("测试".reverse()).toBe('试测')
  })

  it("hideChar", () => {
    expect("12345678910".hideChar()).toBe('1234***8910')
    expect("12345678910".hideChar(3, 4)).toBe('123****8910')
    expect("12345678910".hideChar(5, 4, '^')).toBe('12345^^8910')
  })

  it("moneyUnit", () => {
    expect("12".moneyUnit()).toBe('+12')
    expect("12".moneyUnit('-')).toBe('-12')
    expect("12".moneyUnit(' ')).toBe('')
    expect("-12".moneyUnit()).toBe('-12')
    expect("+12".moneyUnit()).toBe('+12')
  })

  it("trim", () => {
    expect("  asad ".trim()).toBe('asad')
    expect("  asad ".trim(' ')).toBe('  asad ')
    expect("  asad ".trim('left')).toBe('asad ')
    expect("  asad ".trim('right')).toBe('  asad')
    expect("  asad ".trim('both')).toBe('asad')
    expect("  a s ad ".trim('all')).toBe('asad')
  })

  it("trimLeft", () => {
    expect("  asad".trimLeft()).toBe('asad')
    expect("  asad ".trimLeft()).toBe('asad ')
  })

  it("trimRight", () => {
    expect(" asad  ".trimRight()).toBe(' asad')
    expect("asad   ".trimRight()).toBe('asad')
  })

  it("trimAll", () => {
    expect("  asad  ".trimAll()).toBe('asad')
    expect("as ad   ".trimAll()).toBe('asad')
  })

  it("trimChar", () => {
    expect("-asad-".trimChar('-')).toBe('asad')
    expect("-asad-".trimChar('-', 'left')).toBe('asad-')
    expect("-asad-".trimChar('-', 'right')).toBe('-asad')
    expect("-asad-".trimChar('-', 'both')).toBe('asad')
    expect("-a-sad-".trimChar('-', 'all')).toBe('asad')
    expect(" a sad ".trimChar(' ', 'all')).toBe('asad')
  })

  it("firstLetterToUpper", () => {
    expect("asa".firstLetterToUpper()).toBe('Asa')
    expect("哈哈哈".firstLetterToUpper()).toBe('哈哈哈')
    expect("hhhh".firstLetterToUpper()).toBe('Hhhh')
  })

  it("fromUrlParams", () => {
    assert.deepEqual("?a=1&b[c]=3&b[d]=4".fromUrlParams(), { a: '1', b: { c: '3', d: '4' }})
    assert.deepEqual("?a=1^b[c]=3^b[d]=4".fromUrlParams({ delimiter: '^' }), { a: '1', b: { c: '3', d: '4' }})
    assert.deepEqual("a&b=".fromUrlParams({ strictNullHandling: true }), { a: null, b: '' })
    assert.deepEqual(("a&b=".fromUrlParams()), { a: '', b: '' })
  })

  it("isNumeric", () => {
    expect('3213'.isNumeric()).toBe(true)
    expect('3213a'.isNumeric()).toBe(false)
    expect('32哈哈13'.isNumeric()).toBe(false)
    expect('3213.1'.isNumeric()).toBe(true)
  })

  it("toFixed", () => {
    expect('123'.toFixed()).toBe('123.00')
    expect('123.120'.toFixed()).toBe('123.12')
    expect('123.1201'.toFixed(3)).toBe('123.120')
    expect('123.1205'.toFixed(3)).toBe('123.121')
    expect('123ad'.toFixed()).toBe('0.00')
  })

  it('accAdd', () => {
    expect('1'.accAdd('2')).toBe('3.00')
    expect('1.000000'.accAdd('2.000000')).toBe('3.000000')
    expect('1.001'.accAdd('2.01')).toBe('3.011')
  })

  it('accSub', () => {
    expect('1'.accSub('2')).toBe('-1.00')
    expect('1.000000'.accSub('2.000000')).toBe('-1.000000')
    expect('1.001'.accSub('2.01')).toBe('-1.009')
    expect('1.101'.accSub('2.001')).toBe('-0.900')
    expect('2.001'.accSub('1.10101')).toBe('0.89999')
  })

  it('accMul', () => {
    expect('1'.accMul('2')).toBe(2)
    expect('1.001'.accMul('2.01')).toBe(2.01201)
    expect('2.00'.accMul('1.00')).toBe(2)
    expect('2.00'.accMul('1.001')).toBe(2.002)
  })

  it('accDiv', () => {
    expect('1'.accDiv('2')).toBe('0.500')
    expect('1.001'.accDiv('2.01')).toBe('0.498')
    expect('1.05'.accDiv('50')).toBe('0.021')
    expect('1.001'.accDiv('2.01', 5)).toBe('0.49801')
    expect('1.001'.accDiv('2.01', 2)).toBe('0.50')
  })

  it('compareVersion', () => {
    expect("1.0.1".compareVersion("1.1.1")).toBe(-1)
    expect("1.1.1".compareVersion("1.0.1")).toBe(1)
    expect("1.1.1".compareVersion("1.1.1")).toBe(0)
  })

  it('camelToKebab', () => {
    expect('camelToKebab'.camelToKebab()).toBe('camel-to-kebab')
    expect('CamelToKebab'.camelToKebab('-')).toBe('camel-to-kebab')
    expect('camelToKebab'.camelToKebab('_')).toBe('camel_to_kebab')
    expect('camelToKebab'.camelToKebab(' ')).toBe('camel to kebab')
    expect('camelToKebab'.camelToKebab('')).toBe('cameltokebab')
    expect('camelToKebab'.camelToKebab(')')).toBe('camel)to)kebab')
    expect('CamelToKebab哈'.camelToKebab()).toBe('CamelToKebab哈')
  })

  it('kebabToCamel', () => {
    expect('kebab-case-string'.kebabToCamel()).toBe('kebabCaseString')
    expect('kebab_case_string'.kebabToCamel('_')).toBe('kebabCaseString')
    expect('kebab case string'.kebabToCamel(' ')).toBe('kebabCaseString')
    expect('kebab)case)string'.kebabToCamel(')')).toBe('kebabCaseString')
    expect('kebab_case哈string'.kebabToCamel('_')).toBe('kebab_case哈string')
    expect('kebab case哈 string'.kebabToCamel()).toBe('kebab case哈 string')
  })

  it('to100Rate', () => {
    expect('1'.to100Rate()).toBe('0.0100')
    expect('12'.to100Rate()).toBe('0.1200')
    expect('1.05'.to100Rate()).toBe('0.0105')
    expect('12'.to100Rate(2)).toBe('0.12')
    expect('12'.to100Rate(3)).toBe('0.120')
    expect('-1'.to100Rate()).toBe(0)
  })
  it('to100Num', () => {
    expect('0.2'.to100Num()).toBe(20)
    expect('0.13'.to100Num()).toBe(13)
    expect('1.05'.to100Num()).toBe(105)
    expect('-1'.to100Num()).toBe(0)
  })
  it('hua5Split', () => {
    expect(''.hua5Split()).toStrictEqual([])
    expect('123'.hua5Split()).toStrictEqual(['123'])
    expect('123-456-789-123'.hua5Split('-')).toStrictEqual(['123', '456', '789', '123'])
  })
})

