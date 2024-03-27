import { describe, it, expect } from "vitest"
import { arrayUtils } from "../src"

describe("arrayUtils", () => {
  it("checkIndexLegal", () => {
    expect(arrayUtils.checkIndexLegal([1, 2, 3], 1)).toBe(true)
    expect(arrayUtils.checkIndexLegal([1, 2, 3], 4)).toBe(false)
    expect(arrayUtils.checkIndexLegal([1, 2, 3], -1)).toBe(false)
    expect(arrayUtils.checkIndexLegal([1, 2, 3], 0)).toBe(true)
  })

  it("distinct", () => {
    expect(arrayUtils.distinct([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3])
    expect(arrayUtils.distinct([1, 2, 3, 1, 2, 3, 5])).toEqual([1, 2, 3, 5])
    expect(arrayUtils.distinct(['a', 2, 'b', 1, 2, 3, 5, 5])).toEqual(["a", 2, "b", 1, 3, 5])
  })

  it('distinctObjList', () => {
    expect(arrayUtils.distinctObjList([{ a: 1 }, { a: 2 }, { a: 1 }], 'a')).toEqual([{ a: 1 }, { a: 2 }])
    expect(arrayUtils.distinctObjList([{ a: 1 }, { a: 2 }, { a: 1 }], 'b')).toEqual([])
    expect(arrayUtils.distinctObjList([{ id: 1 }, { id: 2 }, { id: 1 }])).toEqual([{ id: 1 }, { id: 2 }])
  })
  it('shuffleArray', () => {
    expect(arrayUtils.shuffleArray([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5])
    expect(arrayUtils.shuffleArray(['a', 2, 'b', 4, 5])).not.toEqual(['a', 2, 'b', 4, 5])
  })
})
