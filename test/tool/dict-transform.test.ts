import { expect, it, describe } from "vitest"
import { dictTransform } from "../../src/index"

describe("dictTransform", () => {
  // 对象输入转换测试
  it("transforms object input correctly", () => {
    const { obj, combo, array } = dictTransform({ 0: "否", 1: "是" })
    // 验证结果
    expect(obj).toEqual({ 0: "否", 1: "是" })
    expect(combo).toEqual([
      { value: "0", label: "否" },
      { value: "1", label: "是" },
    ])
    expect(array).toEqual(["否", "是"])
  })
  // 数组输入转换测试
  it("transforms array input correctly", () => {
    const { obj, combo, array } = dictTransform([
      { label: '否', value: 0 },
      { label: '是', value: 1 },
    ])
    // 验证结果
    expect(obj).toEqual({ 0: "否", 1: "是" })
    expect(combo).toEqual([
      { label: '否', value: 0 },
      { label: '是', value: 1 },
    ])
    expect(array).toEqual(["否", "是"])
  })
  // 空输入转换测试
  it("handles empty input", () => {
    const { obj, combo, array } = dictTransform({})
    // 验证结果
    expect(obj).toEqual({})
    expect(combo).toEqual([])
    expect(array).toEqual([])
  })
  // 自定义键值对名称测试
  it("handles custom key and value names", () => {
    const { obj, combo, array } = dictTransform(
      [{ name: '否', id: 0 }, { name: '是', id: 1 }],
      'id',
      'name',
    )
    // 验证结果
    expect(obj).toEqual({ 0: "否", 1: "是" })
    expect(combo).toEqual([
      { id: 0, name: '否' },
      { id: 1, name: '是' },
    ])
    expect(array).toEqual(["否", "是"])
  })
})

