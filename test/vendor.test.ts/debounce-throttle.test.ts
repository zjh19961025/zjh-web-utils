import { afterEach, beforeEach, describe, it, vi } from "vitest"
import { debounce } from "../../src"

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
