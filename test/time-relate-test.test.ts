/**
 * 涉及到计时器的相关测试，全部写入这个文件进行测试
 */
import { afterEach, beforeEach, describe, it, vi } from "vitest"
import { debounce } from "../src"

describe("timer", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it("debounce test", () => {
    const debounceFn = debounce(1000, (num) => {
      console.log(num)
    })
    const debounceFn2 = debounce(1000, (num) => {
      console.log(num)
    })
    debounceFn(11)
    debounceFn(12)
    debounceFn(13)

    debounceFn2(21)
    debounceFn2(22)
    debounceFn2(23)

    setTimeout(() => {
      debounceFn(1000)
      debounceFn2(2000)
    }, 2000)
    // 启动时间
    vi.runAllTimers()
  })
})

// describe("time-utils", () => {
//   beforeEach(() => {
//     // 告诉 vitest 我们使用模拟时间
//     vi.useFakeTimers()
//   })

//   afterEach(() => {
//     // 每次测试运行后恢复日期
//     vi.useRealTimers()
//   })
// })
