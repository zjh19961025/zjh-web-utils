import { describe, expect, it } from "vitest"
import { testUtils } from "../src"

describe("testUtils", () => {
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
    expect(testUtils.isSingleEmpty(0)).toBe(false)
    expect(testUtils.isSingleEmpty([])).toBe(true)
    expect(testUtils.isSingleEmpty([1])).toBe(false)
    expect(testUtils.isSingleEmpty('12.0')).toBe(false)
    expect(testUtils.isSingleEmpty('')).toBe(true)
    expect(testUtils.isSingleEmpty(null)).toBe(true)
    expect(testUtils.isSingleEmpty(undefined)).toBe(true)
    expect(testUtils.isSingleEmpty(NaN)).toBe(true)
    expect(testUtils.isSingleEmpty(false)).toBe(false)
    expect(testUtils.isSingleEmpty(true)).toBe(false)
    expect(testUtils.isSingleEmpty(new Date())).toBe(false)
  })

  // 只有所有的值为空才是true
  it("isEmpty", () => {
    expect(testUtils.isEmpty(0)).toBe(false)
    expect(testUtils.isEmpty(false)).toBe(false)
    expect(testUtils.isEmpty("")).toBe(true)

    expect(testUtils.isEmpty([1], {})).toBe(false)
    expect(testUtils.isEmpty([], {})).toBe(true)
    expect(testUtils.isEmpty([], { a: 1 })).toBe(false)
    expect(testUtils.isEmpty([1], { a: 1 })).toBe(false)
    expect(testUtils.isEmpty([], {}, '')).toBe(true)
    expect(testUtils.isEmpty([], {}, '12.0')).toBe(false)
    expect(testUtils.isEmpty([], {}, 0)).toBe(false)
    expect(testUtils.isEmpty([], {}, 12.0)).toBe(false)
    expect(testUtils.isEmpty([], {}, null)).toBe(true)
  })

  // 只有对象全为空才是true
  it("isObjAllFieldEmpty", () => {
    expect(testUtils.isObjAllFieldEmpty('')).toBe(true)
    expect(testUtils.isObjAllFieldEmpty({})).toBe(true)
    expect(testUtils.isObjAllFieldEmpty({ a: '' })).toBe(true)
    expect(testUtils.isObjAllFieldEmpty({ a: undefined })).toBe(true)
    expect(testUtils.isObjAllFieldEmpty({ a: null })).toBe(true)
    expect(testUtils.isObjAllFieldEmpty({ a: null, b: 1 })).toBe(false)
    expect(testUtils.isObjAllFieldEmpty({ a: '12', b: 1 })).toBe(false)
    expect(testUtils.isObjAllFieldEmpty({ a: false })).toBe(false)
    expect(testUtils.isObjAllFieldEmpty({ a: 0 })).toBe(false)
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

  it('isZero', () => {
    expect(testUtils.isZero(1)).toBe(false)
    expect(testUtils.isZero(0)).toBe(true)
    expect(testUtils.isZero('0')).toBe(true)
    expect(testUtils.isZero('12.0')).toBe(false)
    expect(testUtils.isZero(null)).toBe(false)
  })

  it('isNum', () => {
    expect(testUtils.isNum(1.01)).toBe(true)
    expect(testUtils.isNum(-1.01)).toBe(true)
    expect(testUtils.isNum(0)).toBe(true)
    expect(testUtils.isNum('0')).toBe(true)
    expect(testUtils.isNum('12.0')).toBe(true)
    expect(testUtils.isNum('-12.01')).toBe(true)
    expect(testUtils.isNum('12.1')).toBe(true)
    expect(testUtils.isNum('12.a1')).toBe(false)
    expect(testUtils.isNum('100,000,000')).toBe(true)
    expect(testUtils.isNum('100,000,000.00')).toBe(true)
  })

  it('isNonNegInt', () => {
    expect(testUtils.isNonNegInt(1.1)).toBe(false)
    expect(testUtils.isNonNegInt(0)).toBe(true)
    expect(testUtils.isNonNegInt('0')).toBe(true)
    expect(testUtils.isNonNegInt('12')).toBe(true)
    expect(testUtils.isNonNegInt('-12.0')).toBe(false)
    expect(testUtils.isNonNegInt(12.0)).toBe(true)
    expect(testUtils.isNonNegInt(-12)).toBe(false)
  })

  it('isLetter', () => {
    expect(testUtils.isLetter('aasdas')).toBe(true)
    expect(testUtils.isLetter('aasdasd123')).toBe(false)
    expect(testUtils.isLetter('aas哈哈asd')).toBe(false)
    expect(testUtils.isLetter('aas)asd')).toBe(false)
  })

  it('isLetterOrNum', () => {
    expect(testUtils.isLetterOrNum('aasdas')).toBe(true)
    expect(testUtils.isLetterOrNum('aasdasd123')).toBe(true)
    expect(testUtils.isLetterOrNum('123')).toBe(true)
    expect(testUtils.isLetterOrNum('aas哈哈asd')).toBe(false)
    expect(testUtils.isLetterOrNum('aas)asd')).toBe(false)
  })

  it('isChinese', () => {
    expect(testUtils.isChinese('aasdas')).toBe(false)
    expect(testUtils.isChinese('aasdasd123')).toBe(false)
    expect(testUtils.isChinese('123')).toBe(false)
    expect(testUtils.isChinese('aas哈哈asd')).toBe(false)
    expect(testUtils.isChinese('哈哈')).toBe(true)
    expect(testUtils.isChinese('哈12')).toBe(false)
  })

  it('isCode', () => {
    expect(testUtils.isCode('123')).toBe(false)
    expect(testUtils.isCode('123456')).toBe(true)
    expect(testUtils.isCode('1234567')).toBe(false)
    expect(testUtils.isCode(12345678)).toBe(false)
    expect(testUtils.isCode(123456)).toBe(true)
    expect(testUtils.isCode('123asd')).toBe(false)
    expect(testUtils.isCode('123哈哈哈')).toBe(false)
  })

  it('isEmail', () => {
    expect(testUtils.isEmail('123asd')).toBe(false)
    expect(testUtils.isEmail('123哈哈哈')).toBe(false)
    expect(testUtils.isEmail('123asd@123asd')).toBe(false)
    expect(testUtils.isEmail('123asd@qq.com')).toBe(true)
    expect(testUtils.isEmail('123asd@123.com')).toBe(true)
  })

  it('isMobile', () => {
    expect(testUtils.isMobile('1234561651')).toBe(true)
    expect(testUtils.isMobile('1234-561651')).toBe(true)
    expect(testUtils.isMobile('123456-16-511')).toBe(false)
    expect(testUtils.isMobile('-12345616511')).toBe(false)
    expect(testUtils.isMobile('12345616511-')).toBe(false)
    expect(testUtils.isMobile('12345哈23')).toBe(false)
  })

  it('isUrl', () => {
    expect(testUtils.isUrl('http://baidu.com')).toBe(true)
    expect(testUtils.isUrl('http://www.baidu.com')).toBe(true)
    expect(testUtils.isUrl('http://baidu.com/123')).toBe(true)
    expect(testUtils.isUrl('https://baidu.com/123?a=1')).toBe(true)
    expect(testUtils.isUrl('https://baidu.com/123?a=1&b=2')).toBe(true)
    expect(testUtils.isUrl('https://baidu.com/123?a=1&b=2&c=哈哈')).toBe(true)
    expect(testUtils.isUrl('https:baidu.com')).toBe(false)
    expect(testUtils.isUrl('www.baidu.com')).toBe(false)
  })

  it('isDate', () => {
    expect(testUtils.isDate('2020-01-01')).toBe(true)
    expect(testUtils.isDate('2020-01-01 12:00:00')).toBe(true)
    expect(testUtils.isDate('2020-13-01 12:00:00.000')).toBe(false)
    expect(testUtils.isDate('2020-01-32 12:00:00.000000')).toBe(false)
    expect(testUtils.isDate('1711013650')).toBe(true)
    expect(testUtils.isDate('1711013650a')).toBe(false)
  })

  it('isDateISO', () => {
    expect(testUtils.isDateISO('2020-01-01')).toBe(true)
    expect(testUtils.isDateISO('2024/03/21')).toBe(true)
  })

  it('isIdCard', () => {
    expect(testUtils.isIdCard('1234561651')).toBe(false)
    expect(testUtils.isIdCard('533001199912112325')).toBe(true)
    expect(testUtils.isIdCard('53300119991211232X')).toBe(true)
    expect(testUtils.isIdCard('53300119991211232a')).toBe(false)
    expect(testUtils.isIdCard('533001199912992325')).toBe(false)
  })

  it('isCarNo', () => {
    expect(testUtils.isCarNo('1234561651')).toBe(false)
    expect(testUtils.isCarNo('粤B12345')).toBe(true)
    expect(testUtils.isCarNo('粤B123456')).toBe(false)
    expect(testUtils.isCarNo('粤B2345学')).toBe(true)
    expect(testUtils.isCarNo('粤B2345警')).toBe(true)
  })

  it('isInRange', () => {
    expect(testUtils.isInRange(1, [1, 2])).toBe(true)
    expect(testUtils.isInRange(1, [2, 1])).toBe(false)
    expect(testUtils.isInRange('1', [1, 3])).toBe(true)
    expect(testUtils.isInRange('1', [3, 1])).toBe(false)
    expect(testUtils.isInRange('5', [1, 3])).toBe(false)
  })

  it('isInLength', () => {
    expect(testUtils.isInLength('123', [1, 3])).toBe(true)
    expect(testUtils.isInLength('123qwe', [1, 3])).toBe(false)
    expect(testUtils.isInLength('123qwe', [3, 5])).toBe(false)
    expect(testUtils.isInLength([1, 2, 3, 4, 5], [1, 5])).toBe(true)
    expect(testUtils.isInLength([1, 2, 3, 4, 5], [1, 4])).toBe(false)
  })

  it('isLandline', () => {
    expect(testUtils.isLandline('1234561651')).toBe(false)
    expect(testUtils.isLandline('020-1234535')).toBe(true)
    expect(testUtils.isLandline('020-1234535-')).toBe(false)
    expect(testUtils.isLandline('020-1234535-1')).toBe(false)
    expect(testUtils.isLandline('020-1234535-123')).toBe(true)
  })

  it('isJsonString', () => {
    expect(testUtils.isJsonString('123')).toBe(false)
    expect(testUtils.isJsonString('{"a":1}')).toBe(true)
    expect(testUtils.isJsonString('{"a":1,"b":2}')).toBe(true)
    expect(testUtils.isJsonString(null)).toBe(false)
    expect(testUtils.isJsonString(true)).toBe(false)
  })

  it('isPromise', () => {
    expect(testUtils.isPromise(Promise.resolve())).toBe(true)
    expect(testUtils.isPromise(new Promise(() => {}))).toBe(true)
    expect(testUtils.isPromise({})).toBe(false)
    expect(testUtils.isPromise([])).toBe(false)
    expect(testUtils.isPromise(function fun() {})).toBe(false)
    expect(testUtils.isPromise((() => { return new Promise((res) => { res(1) }) })())).toBe(true)
  })

  it('isImage', () => {
    expect(testUtils.isImage('123')).toBe(false)
    expect(testUtils.isImage('123.png')).toBe(true)
    expect(testUtils.isImage('123.jpg')).toBe(true)
    expect(testUtils.isImage('123.gif')).toBe(true)
    expect(testUtils.isImage('123.jpeg')).toBe(true)
    expect(testUtils.isImage('123.bmp')).toBe(true)
    expect(testUtils.isImage('123.jpeg?a=1')).toBe(true)
    expect(testUtils.isImage('123.gif?a=1&b=2')).toBe(true)
    expect(testUtils.isImage('qeqwejpeg?a=1')).toBe(false)
  })

  it('isVideo', () => {
    expect(testUtils.isVideo('123')).toBe(false)
    expect(testUtils.isVideo('123.mp4')).toBe(true)
    expect(testUtils.isVideo('123.mp4?a=1')).toBe(true)
    expect(testUtils.isVideo('123.mpg')).toBe(true)
  })

  it('isBankCard', () => {
    expect(testUtils.isBankCard('1234561651')).toBe(false)
    expect(testUtils.isBankCard('6222010300100044001')).toBe(true)
    expect(testUtils.isBankCard('6222010300a1000440011')).toBe(false)
    expect(testUtils.isBankCard('622201030010004400111')).toBe(true)
    expect(testUtils.isBankCard('62220103001000440011112356')).toBe(false)
    expect(testUtils.isBankCard('6222010300100044001111235')).toBe(true)
  })

  it('isVersion', () => {
    expect(testUtils.isVersion('1234561651')).toBe(false)
    expect(testUtils.isVersion('0.0.1')).toBe(true)
  })

  it("isArray", () => {
    expect(testUtils.isArray([])).toBe(true)
    expect(testUtils.isArray({})).toBe(false)
    expect(testUtils.isArray(null)).toBe(false)
  })

  it("isFunction", () => {
    expect(testUtils.isFunction(() => 1)).toBe(true)
    type funcType = (a: string) => string
    const temp:funcType = (a) => "hello " + a
    expect(testUtils.isFunction(temp)).toBe(true)
    expect(testUtils.isFunction({})).toBe(false)
  })

  it("isNull", () => {
    expect(testUtils.isNull(null)).toBe(true)
    expect(testUtils.isNull(undefined)).toBe(false)
    expect(testUtils.isNull(0)).toBe(false)
  })

  it("isUndefined", () => {
    expect(testUtils.isUndefined(undefined)).toBe(true)
    expect(testUtils.isUndefined(null)).toBe(false)
    expect(testUtils.isUndefined("")).toBe(false)
  })

  it("isNullOrUndefined", () => {
    expect(testUtils.isNullOrUndefined(null)).toBe(true)
    expect(testUtils.isNullOrUndefined(undefined)).toBe(true)
    expect(testUtils.isNullOrUndefined("")).toBe(false)
  })

  it("isDeepEqual", () => {
    expect(testUtils.isDeepEqual(null, null)).toBe(true)
    expect(testUtils.isDeepEqual(123, 234)).toBe(false)
    expect(testUtils.isDeepEqual({ test1: 1, test2: 2 }, { test2: 2, test1: 1 })).toBe(true)
    expect(testUtils.isDeepEqual([], [])).toBe(true)
    expect(testUtils.isDeepEqual([1, 2], [1, 2])).toBe(true)
    expect(testUtils.isDeepEqual([2, 1], [1, 2])).toBe(false)
  })
})
