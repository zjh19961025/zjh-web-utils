// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  // eslint-disable-next-line no-extend-native
  String.prototype.padStart = function(maxLength, fillString = ' ') {
    if (Object.prototype.toString.call(fillString) !== '[object String]') {
      throw new TypeError(
        'fillString must be String',
      )
    }
    const str = this
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str)

    const fillLength = maxLength - str.length
    let times = Math.ceil(fillLength / fillString.length)
    // eslint-disable-next-line no-cond-assign
    while (times >>= 1) {
      fillString += fillString
      if (times === 1) {
        fillString += fillString
      }
    }
    return fillString.slice(0, fillLength) + str
  }
}

/**
 * 主要概念：
 * 时间：date, new Date(...), 其实也就是某一时刻
 * 时间戳：Timestamp, 以毫秒数字表示。一个时间戳对应的其实也就是一个时刻
 *        unix 时间戳精确到秒，为10位。其他精确到毫秒，为13位
 * 时间字符：可能为时间，也可能为时间戳
 */
export const timeUtils = {
  /**
   * 当前时间的完整显示
   * timeFormat(null, "yyyy-mm-dd hh:MM:ss")
   * @returns yyyy-mm-dd hh:MM:ss 格式时间
   * @example
   * ```js
   * timeUtils.nowFullTime() // 2024-01-01 17:11:35
   * ```
   */
  nowFullTime() {
    return this.timeFormat(null, "yyyy-mm-dd hh:MM:ss")
  },

  /**
   * 当前时间时间戳
   * @param isUnix 普通的为 13位(包含毫秒); unix 的为10位，不包含毫秒
   * @returns 时间戳数值
   * @example
   * ```js
   * timeUtils.nowTimestamp() // 1723624829143
   * timeUtils.nowTimestamp(false) // 1723624829
   * ```
   */
  nowTimestamp(isUnix = false) {
    return this.toTimestamp(null, isUnix)
  },

  /**
   * 转时间
   * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
   * date不传或传入null 表示取当前时间
   * @example
   * ```js
   * timeUtils.toDate('1710486738911') // 2024-03-15T07:12:18.911Z
   * timeUtils.toDate(null) // 2024-08-14T08:44:22.991Z
   * ```
   */
  toDate(dateTime: string | number | Date | null | undefined): Date {
    let date
    if (!dateTime) {
    // 1. 若传入时间为假值，则取当前时间
      date = new Date()
    } else if (/^\d{10}$/.test(dateTime?.toString().trim())) {
    // 2. 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
      date = new Date((dateTime as number) * 1000)
    } else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
    // 3. 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
      date = new Date(Number(dateTime))
    } else {
    // 4. 其他都认为符合 RFC 2822 规范
    // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
      date = new Date(
        typeof dateTime === 'string'
          ? dateTime.replace(/-/g, '/')
          : dateTime,
      )
    }

    return date
  },

  /**
   * 转时间戳
   * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
   *        date不传或传入null 表示取当前时间
   * @param {boolean} isUnix 是否为unix格式
   * @example
   * ```js
   * timeUtils.toTimestamp(null) // 1723625151828
   * timeUtils.toTimestamp(null,true) // 1723625151
   * timeUtils.toTimestamp('2024-02-15 15:12:18') // 1707981138000
   * ```
   */
  toTimestamp(dateTime: string | number | Date | null | undefined, isUnix = false) {
    const date = this.toDate(dateTime)
    return isUnix ? Math.floor((date.getTime()) / 1000) : date.valueOf()
  },

  /**
   * 格式化时间，输出时间字符串, yyyy-mm-dd hh:MM:ss
   * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
   * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd。yyyy-mm-dd hh:MM:ss 显示时分秒
   * @returns {string} 返回格式化后的字符串
   * @example
   * ```js
   * timeUtils.timeFormat('1710486738911','yyyy-mm-dd hh:MM:ss') // 2024-03-15 15:12:18
   * timeUtils.timeFormat('1710486738911','mm-dd hh:MM') // 03-15 15:12
   * timeUtils.timeFormat('1710486738911','yyyy年mm月dd日 hh时MM分') // 2024年03月15日 15时12分
   * ```
   */
  timeFormat(dateTime: string | number | Date | null | undefined = null, formatStr = 'yyyy-mm-dd') {
    const date = this.toDate(dateTime)

    const timeSource = {
      'y': date.getFullYear().toString(), // 年
      'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
      'd': date.getDate().toString().padStart(2, '0'), // 日
      'h': date.getHours().toString().padStart(2, '0'), // 时
      'M': date.getMinutes().toString().padStart(2, '0'), // 分
      's': date.getSeconds().toString().padStart(2, '0'), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }

    let key: keyof typeof timeSource
    for (key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || []
      if (ret) {
      // 年可能只需展示两位
        const beginIndex = key === 'y' && ret.length === 2 ? 2 : 0
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex))
      }
    }

    return formatStr
  },

  /**
   * 距离现在多久
   * @param {String|Number|dateTime} date 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
   * @param {String|Boolean} format
   * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
   * 如果为布尔值false，无论什么时间，都返回多久以前的格式
   * @returns {string} 转化后的内容
   * @example
   * ```js
   * timeUtils.timeFrom(timeUtils.nowFullTime()) // 刚刚
   * timeUtils.timeFrom(timeUtils.nowTimestamp() - 3600000) // 1小时前
   * ```
   */
  timeFrom(date: string | number | Date | null | undefined = null, format = 'yyyy-mm-dd') {
    let timer = (new Date()).getTime() - this.toTimestamp(date, false)
    timer = Math.floor(timer / 1000)
    // 如果小于5分钟,则返回"刚刚",其他以此类推
    let tips = ''
    switch (true) {
      case timer < 300:
        tips = '刚刚'
        break
      case timer >= 300 && timer < 3600:
        tips = `${Math.floor(timer / 60)}分钟前`
        break
      case timer >= 3600 && timer < 86400:
        tips = `${Math.floor(timer / 3600)}小时前`
        break
      case timer >= 86400 && timer < 2592000:
        tips = `${Math.floor(timer / 86400)}天前`
        break
      default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
        if (!format) {
          if (timer >= 2592000 && timer < 365 * 86400) {
            tips = `${Math.floor(timer / (86400 * 30))}个月前`
          } else {
            tips = `${Math.floor(timer / (86400 * 365))}年前`
          }
        } else {
          tips = this.timeFormat(date, format)
        }
    }
    return tips
  },

  /**
   * 年月日 +  00:00:00
   * @param dateTime date不传或传入null 表示取当前时间
   * @returns 年月日 +  00:00:00
   * @example
   * ```js
   * timeUtils.startTime('1710486738911') // 2024-03-15 00:00:00
   * timeUtils.startTime('') // 2024-08-14 00:00:00
   * ```
   */
  startTime(dateTime: string | number | Date | null | undefined) {
    const date = this.timeFormat(dateTime, 'yyyy-mm-dd')
    return date + " 00:00:00"
  },

  /**
   * 年月日 +  23:59:59
   * @param dateTime date不传或传入null 表示取当前时间
   * @returns 年月日 +  23:59:59
   * @example
   * ```js
   * timeUtils.endTime('2024-02-15 15:12:18') // 2024-02-15 23:59:59
   * timeUtils.startTime('') // 2024-08-14 23:59:59
   * ```
   */
  endTime(dateTime: string | number | Date | null | undefined) {
    const date = this.timeFormat(dateTime, 'yyyy-mm-dd')
    return date + " 23:59:59"
  },

  /**
   * 转时间加文字 例：(2022-12-01 转 2022年12月01日)  ||  (12-01 转 12月01日)；
   * @param {String|Number} dateTime 时间戳，时间字符串（仅支持  转  年月日字符）
   * @param {Boolean} isYear 是否有年 默认为true 转 2022年10月12日, false 转 10月12日
   * @returns {String} 返回格式化后的字符串
   * @example
   * ```js
   * timeUtils.chineseDate('2023-12-01',false) // 12月01日
   * timeUtils.chineseDate('2023-12-01') // 2023年12月01日
   * ```
   */
  chineseDate(dateTime: string | number | Date | null | undefined = null, isYear = true) {
    const date = this.toDate(dateTime)
    const timeSource = {
      'y': date.getFullYear().toString(), // 年
      'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
      'd': date.getDate().toString().padStart(2, '0'), // 日
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    let numStrTime = ''
    if (isYear) {
      numStrTime = timeSource['y'] + '年' + timeSource['m'] + '月' + timeSource['d'] + '日'
    } else {
      numStrTime = timeSource['m'] + '月' + timeSource['d'] + '日'
    }
    return numStrTime
  },
  /**
   * 根据当前时间计算出传递的时间是几天前或者几天后
   * @param {String} dateString 时间字符串
   * @returns {string} 计算后的返回结果
   * @example
   * ```js
   * timeUtils.beforeOrAfterDay('2024-10-21 23:11:11') // 3天前
   * timeUtils.beforeOrAfterDay('2024-10-24 23:11:11') // 今天
   * timeUtils.beforeOrAfterDay('2024-11-24 23:11:11') // 31天后
   * ```
   */
  beforeOrAfterDay(dateString:string):string {
    const inputDate = new Date(dateString)
    const currentDate = new Date()
    // 清除时间信息，只比较日期
    inputDate.setHours(0, 0, 0, 0)
    currentDate.setHours(0, 0, 0, 0)
    const timeDifference = inputDate.getTime() - currentDate.getTime()
    const dayDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24))
    if (dayDifference === 0) {
      return "今天"
    } else if (dayDifference === 1) {
      return "明天"
    } else if (dayDifference === 2) {
      return "后天"
    } else if (dayDifference > 2) {
      return `${dayDifference}天后`
    } else if (dayDifference === -1) {
      return "1天前"
    } else {
      return `${Math.abs(dayDifference)}天前`
    }
  },
  /**
   * 当前时间和传递的时间进行比较，传递的时间大于当前时间返回true 小于则返回false
   * @param {String} dateString 时间字符串
   * @returns {boolean}
   * @example
   * ```js
   * timeUtils.isAfterNow('2024-10-21 23:11:11') // false
   * timeUtils.isAfterNow('2024-10-24 23:11:11') // true
   * timeUtils.isAfterNow('2024-11-24 23:11:11') // true
   * ```
   */
  isAfterNow(dateString:string):boolean {
    // 将输入的日期字符串转换为日期对象
    const inputDateObj = new Date(dateString)
    // 获取当前日期时间
    const currentDate = new Date()
    // 比较日期
    return inputDateObj > currentDate
  },
}
