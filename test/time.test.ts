/**
 * 涉及到计时器的相关测试，全部写入这个文件进行测试
 */
import { afterEach, beforeEach, describe, it, vi } from "vitest"
import { timeUtils } from "../src"

describe("time-utils", () => {
  beforeEach(() => {
    // 告诉 vitest 我们使用模拟时间
    vi.useFakeTimers()
  })

  afterEach(() => {
    // 每次测试运行后恢复日期
    vi.useRealTimers()
  })

  it("nowFullTime", () => {
    console.log(timeUtils.nowFullTime())
    console.log(timeUtils.nowTimestamp())
    console.log(timeUtils.nowTimestamp(true))
    console.log(timeUtils.timeFormat("1710486738911", "yyyy-mm-dd hh:MM:ss"))
    console.log(timeUtils.timeFormat("1710486738911", "mm-dd hh:MM"))
    console.log(timeUtils.timeFormat("1710486738911", "yyyy年mm月dd日 hh时MM分"))

    console.log(timeUtils.startTime("1710486738911"))
    console.log(timeUtils.startTime(''))
    console.log(timeUtils.endTime("2024-02-15 15:12:18"))
    console.log(timeUtils.endTime(""))

    console.log(timeUtils.timeFrom(timeUtils.nowFullTime()))
    console.log(timeUtils.timeFrom(timeUtils.nowTimestamp() - 3600000))

    console.log(timeUtils.chineseDate("2023-12-01", false))
    console.log(timeUtils.chineseDate("2023-12-01"))

    console.log(timeUtils.toDate('1710486738911'))
    console.log(timeUtils.toDate(null))

    console.log(timeUtils.toTimestamp(null))
    console.log(timeUtils.toTimestamp(null, true))
    console.log(timeUtils.toTimestamp('2024-02-15 15:12:18'))
  })
  it("beforeOrAfterDay", () => {
    console.info("🚀 ~ file:time.test method: line:45 -----", timeUtils.beforeOrAfterDay('2024-10-21 23:11:11'))
    console.info("🚀 ~ file:time.test method: line:46 -----", timeUtils.beforeOrAfterDay('2024-10-24 23:11:11'))
    console.info("🚀 ~ file:time.test method: line:47 -----", timeUtils.beforeOrAfterDay('2024-10-24 01:11:11'))
    console.info("🚀 ~ file:time.test method: line:48 -----", timeUtils.beforeOrAfterDay('2024-11-24 01:11:11'))
    console.info("🚀 ~ file:time.test method: line:48 -----", timeUtils.beforeOrAfterDay('2024-10-25 01:11:11'))
    console.info("🚀 ~ file:time.test method: line:48 -----", timeUtils.beforeOrAfterDay('2024-10-26 01:11:11'))
  })
  it("isAfterNow", () => {
    console.info("🚀 ~ file:time.test method: line:45 -----", timeUtils.isAfterNow('2024-10-24 13:11:11'))
    console.info("🚀 ~ file:time.test method: line:45 -----", timeUtils.isAfterNow('2024-10-25 13:11:11'))
  })
})
