import { describe, it, expect } from "vitest"
import "../src/index"

describe("JSON", () => {
  it('parseArray', () => {
    console.log(JSON.stringify({ test: 1, test2: 2 }))
    expect(JSON.parseArray("1")).toEqual([])
    expect(JSON.parseArray(JSON.stringify([1, 2, 3, 4]))).toEqual([1, 2, 3, 4])

    expect(JSON.parseObject("")).toEqual({})
    expect(JSON.parseObject(JSON.stringify({ test: 1, test2: 2 }))).toEqual({ test: 1, test2: 2 })
  })
})
