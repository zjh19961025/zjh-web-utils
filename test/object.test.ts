import { describe, it, expect, assert } from "vitest"
import { objectUtils } from "../src"

describe("objectUtils", () => {
  it("toUrlParams", () => {
    console.log(objectUtils.toUrlParams({ a: 1 }))
    console.log(objectUtils.toUrlParams({ a: '哈哈' }, false))
    console.log(objectUtils.toUrlParams({ a: '哈哈' }, false, true))
    console.log(objectUtils.toUrlParams({ a: 1, b: 2 }, true, true, { delimiter: '^' }))
  })
  it('toEncodeParams', () => {
    console.log(objectUtils.toEncodeParams({ a: 1 }))
    console.log(objectUtils.toEncodeParams({ a: '哈哈' }))
    console.log(objectUtils.toEncodeParams({ a: '哈哈' }, '^'))
    console.log(objectUtils.toEncodeParams({ a: '哈哈' }, '^', 'test'))
  })
  it('deepClone', () => {
    const obj = { a: 1, b: [1, 2, 3], c: { d: 4 }}
    const obj1 = obj
    const clonedObj = objectUtils.deepClone(obj)
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
    const result = objectUtils.deepMerge(obj1, obj2)
    // 检查结果是否符合预期
    assert.deepEqual(result, { a: 1, b: { c: 5, d: 4, e: 6 }, f: 7 })

    const obj3 = { a: 1, b: { c: 3, d: 4 }, arr: [1, 2, 3] }
    const obj4 = { b: { c: 5, e: 6 }, f: 7, arr: [4, 5, 6] }
    const result1 = objectUtils.deepMerge(obj3, obj4)
    // 检查结果是否符合预期
    assert.deepEqual(result1, { a: 1, b: { c: 5, d: 4, e: 6 }, f: 7, arr: [1, 2, 3, 4, 5, 6] })
  })
})
