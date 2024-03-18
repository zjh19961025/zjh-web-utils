/**
 * 主要概念：
 * 时间：date, new Date(...), 其实也就是某一时刻
 * 时间戳：Timestamp, 以毫秒数字表示。一个时间戳对应的其实也就是一个时刻
 *        unix 时间戳精确到秒，为10位。其他精确到毫秒，为13位
 * 时间字符：可能为时间，也可能为时间戳
 * 使用：
 *   nowFullTime, // 当前时间的格式化输出
 *   nowTimestamp, // 当前时间的时间戳
 *   toDate, // 转化为时间
 *   toTimestamp, // 时间戳
 *   timeFormat, // 格式化
 *   timeFrom, // 多久前
 *   startTime, // 一天的开始时间
 *   endTime, // 一天的结束时间
 */

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
 * 当前时间的完整显示
 * timeFormat(null, "yyyy-mm-dd hh:MM:ss")
 */
function nowFullTime() {
  return timeFormat(null, "yyyy-mm-dd hh:MM:ss")
}

/**
 * 当前时间时间戳
 * @param isUnix 普通的为 13位(包含毫秒); unix 的为10位，不包含毫秒
 * @returns
 */
function nowTimestamp(isUnix = false) {
  return toTimestamp(null, isUnix)
}

/**
 * 转时间
 * @param {String|Number|dateTime} 时间，时间字符串，时间戳，时间戳字符串都可以
 *        date不传或传入null 表示取当前时间
 */
function toDate(dateTime: string | number | Date | null | undefined): Date {
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
}

/**
 * 转时间戳
 * @param {String|Number|dateTime} 时间，时间字符串，时间戳，时间戳字符串都可以
 *        date不传或传入null 表示取当前时间
 */
function toTimestamp(dateTime: string | number | Date | null | undefined, isUnix = false) {
  const date = toDate(dateTime)
  return isUnix ? Math.floor((date.getTime()) / 1000) : date.valueOf()
}

/**
 * @description 格式化时间，输出时间字符串
 * @param {String|Number|dateTime}时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
 * @param {String} fmt 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd。yyyy-mm-dd hh:MM:ss 显示时分秒
 * @returns {string} 返回格式化后的字符串
 */
function timeFormat(dateTime: string | number | Date | null | undefined = null, formatStr = 'yyyy-mm-dd') {
  const date = toDate(dateTime)

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
}

/**
 * @description 距离现在多久
 * @param {String|Number|dateTime} 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
 * @param {String|Boolean} format
 * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 * @returns {string} 转化后的内容
 */
function timeFrom(date: string | number | Date | null | undefined = null, format = 'yyyy-mm-dd') {
  let timer = (new Date()).getTime() - toTimestamp(date, false)
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
        tips = timeFormat(date, format)
      }
  }
  return tips
}

/**
 * 年月日 +  00:00:00
 * @param dateTime date不传或传入null 表示取当前时间
 * @returns
 */
function startTime(dateTime: string | number | Date | null | undefined) {
  const date = timeFormat(dateTime, 'yyyy-mm-dd')
  return date + " 00:00:00"
}
/**
 * 年月日 +  23:59:59
 * @param dateTime date不传或传入null 表示取当前时间
 * @returns
 */
function endTime(dateTime: string | number | Date | null | undefined) {
  const date = timeFormat(dateTime, 'yyyy-mm-dd')
  return date + " 23:59:59"
}

/**
 * @description 转时间加文字 例：(2022-12-01 转 2022年12月01日)  ||  (12-01 转 12月01日)；
 * @param {String|Number} 时间戳，时间字符串（仅支持  转  年月日字符）
 * @param {Boolean} isYear 是否有年 默认为true 转 2022年10月12日, false 转 10月12日
 * @returns {String} 返回格式化后的字符串
 */
function chineseDate(dateTime: string | number | Date | null | undefined = null, isYear = true) {
  const date = toDate(dateTime)
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
}

export const timeUtils = {
  nowFullTime, // 当前时间的格式化输出
  nowTimestamp, // 当前时间的时间戳
  toDate, // 转化为时间
  toTimestamp, // 时间戳
  timeFormat, // 格式化
  timeFrom, // 多久钱
  startTime, // 一天的开始时间
  endTime, // 一天的结束时间
  chineseDate, // 转时间加文字 例：(2022-12-01 转 2022年12月1日)
}

