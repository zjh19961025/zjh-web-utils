import { describe, it, expect, assert } from "vitest"
import { objectExpand } from "../src"

objectExpand()

describe("objectUtils", () => {
  it("toUrlParams", () => {
    expect({ a: 1 }.toUrlParams()).toBe('?a=1')
    expect({ a: 1, b: 2 }.toUrlParams(false)).toBe('a=1&b=2')
    console.log({ a: '哈哈' }.toUrlParams(false, true))
    expect({ a: 1, b: 2 }.toUrlParams(true, true, { delimiter: '^' })).toBe('?a=1^b=2')
  })
  it('toEncodeParams', () => {
    console.log({ a: 1 }.toEncodeParams())
    console.log({ a: '哈哈' }.toEncodeParams())
    console.log({ a: '哈哈' }.toEncodeParams('^'))
    console.log({ a: '哈哈' }.toEncodeParams('^', 'test'))
  })
  it('deepClone', () => {
    const obj = { a: 1, b: [1, 2, 3], c: { d: 4 }}
    const obj1 = obj
    const clonedObj = obj.deepClone()
    expect(obj1).toEqual(obj)
    expect(obj1).toBe(obj)
    // 检查值是否一致
    expect(clonedObj).toEqual(obj)
    // 检查是否真的创建了新的对象/数组
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.c).not.toBe(obj.c)
  })
  it('deepMerge', () => {
    const obj1 = { a: 1, b: { c: 3, d: 4 }}
    const obj2 = { b: { c: 5, e: 6 }, f: 7 }
    const result = obj1.deepMerge(obj2)
    // 检查结果是否符合预期
    assert.deepEqual(result, { a: 1, b: { c: 5, d: 4, e: 6 }, f: 7 })

    const obj3 = { a: 1, b: { c: 3, d: 4 }, arr: [1, 2, 3] }
    const obj4 = { b: { c: 5, e: 6 }, f: 7, arr: [4, 5, 6] }
    const result1 = obj3.deepMerge(obj4)
    // 检查结果是否符合预期
    assert.deepEqual(result1, { a: 1, b: { c: 5, d: 4, e: 6 }, f: 7, arr: [1, 2, 3, 4, 5, 6] })
  })
})
