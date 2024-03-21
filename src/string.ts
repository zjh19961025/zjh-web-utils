import qs from "qs"
import { testUtils } from "./test"
import { numberUtils } from "./number"
/**
 * string 相关工具方法
 */
export const stringUtils = {
  /**
   * 翻转字符串
   * @param {string} str 字符串
   * @return {string} 翻转的结果
   */
  reverse(str: string): string {
    if (testUtils.isEmpty(str)) return ''
    const newStr = str.split('').reverse().join('')
    return newStr
  },

  /**
   * 将字符串指定位置的字符替换为指定字符
   * @param {string} str 字符串
   * @param {number} start 在字符串开始处保留的字符数量, 默认4
   * @param {number} end 在字符串结束处保留的字符数量, 默认4
   * @param {string} replaceStr 替换的字符串, 默认为*
   * @return {string} 替换后的字符串
  */
  hideChar(str: string, start = 4, end = 4, replaceStr = '*'): string {
    if (str && str.length > start + end) {
      const middle: string = replaceStr.repeat(str.length - start - end)
      const reg = new RegExp('(.{' + start + '}).*(.{' + end + '})')
      const result: string = str.replace(reg, `\$1${middle}\$2`)
      return result
    } else {
      return str
    }
  },

  /**
   * 金额 添加 + 或 - 号
   * @param {number | string} val 金额
   * @param {string} unit 单位, 只能是 + 或 -
   * @returns {string} 带符号的金额
   */
  moneyUnit(val: number | string, unit = '+'): string {
    const num = val.toString()
    const result = ''
    if (unit == '+') {
      if (num.includes('+')) {
        return num
      } else {
        return Number(num) > 0 ? `+${num}` : num
      }
    }
    if (unit == '-') {
      if (num.includes('-')) {
        return num
      } else {
        return `-${num}`
      }
    }
    return result
  },

  /**
   * 去除字符串指定位置的空格
   * @param {string} str 字符串
   * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
   * @returns {string} 去除空格后的字符串
   */
  trim(str: string, pos = 'both'): string {
    if (pos == 'both') {
      return str.replace(/^\s+|\s+$/g, "")
    } else if (pos == "left") {
      return str.replace(/^\s*/, "")
    } else if (pos == 'right') {
      return str.replace(/(\s*$)/g, "")
    } else if (pos == 'all') {
      return str.replace(/\s+/g, "")
    } else {
      return str
    }
  },

  /**
   * 去除字符左边空格
   * @param {string} str 字符串
   * @returns {string} 去除空格后的字符串
   */
  trimLeft(str: string): string {
    return str.replace(/^\s*/, '')
  },

  /**
   * 去除字符右边空格
   * @param {string} str 字符串
   * @returns {string} 去除空格后的字符串
   */
  trimRight(str: string): string {
    return str.replace(/(\s*$)/g, "")
  },

  /**
   * 去除字符中的所有空格
   * @param {string} str 字符串
   * @returns {string} 去除空格后的字符串
   */
  trimAll(str:string): string {
    return str.replace(/\s+/g, "")
  },

  /**
   * 去除字符中的指定字符
   * @param {string} str 字符串
   * @param {string} char 要去除的字符
   * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
   * @returns {string} 去除空格后的字符串
   */
  trimChar(str: string, char: string, pos = "both"): string {
    if (char) {
      if (pos === 'left') {
        return str.replace(new RegExp('^\\' + char + '+', 'g'), '')
      } else if (pos === 'right') {
        return str.replace(new RegExp('\\' + char + '+$', 'g'), '')
      } else if (pos === "both") {
        return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')
      } else if (pos === "all") {
        return str.replaceAll(char, '')
      }
    }
    return str
  },

  /**
   * 首字母大写
   * @param {string} str 字符串
   * @returns {string} 首字母大写后的字符串
   */
  firstLetterToUpper(str: string): string {
    if (testUtils.isEmpty(str)) return str
    return str[0].toUpperCase() + str.slice(1)
  },

  /**
   * 将url参数字符串转换为对象
   * @param {string} str url参数字符串
   * @param {qs.IParseOptions} option qs.parse的配置项
   * @returns {object} 转换后的url参数对象
   */
  fromUrlParams(str:string, option: qs.IParseOptions = {}) {
    if (str.length <= 0) return {}
    const tempArray = str.split('?')
    const tempStr = tempArray.length > 1 ? tempArray[1] : tempArray[0]
    return qs.parse(tempStr, option)
  },

  /**
   * 是否为数值型字符串
   * @param {string} str 字符串
   * @returns {boolean}
   */
  isNumeric(str: string): boolean {
    const toNum = Number(str)
    if (isNaN(toNum)) {
      return false
    }
    return true
  },

  /**
   * 将数值型字符串转换为固定小数位数的数值型字符串, 无法转换默认输出 '0.00'
   * @param {string} str - 需要转换的输入字符串
   * @param {number} fixed - 结果数字的小数位数，默认为2
   * @returns {string} - 返回固定小数位数的数值型字符串
   */
  toFixed(str: string, fixed = 2): string {
    const toNum = Number(str)
    if (isNaN(toNum)) {
      console.error('toNum 非数值型字符 val = ' + str)
      return (0.0).toFixed(fixed)
    }
    return toNum.toFixed(fixed)
  },

  /**
   * 加法运算
   * @param {number | string} arg1 - 被加数
   * @param {number | string} arg2 - 加数
   * @returns {string} 加法运算的结果
   */
  accAdd(arg1: string | number, arg2: string | number): string {
    return numberUtils.accAdd(arg1, arg2)
  },

  /**
   * 减法运算
   * @param {number | string} arg1 - 被减数
   * @param {number | string} arg2 - 减数
   * @returns {string} 减法运算结果
   */
  accSub(arg1: string | number, arg2: string | number): string {
    return numberUtils.accSub(arg1, arg2)
  },

  /**
   * 乘法运算
   * @param {number | string} arg1 被乘数
   * @param {number | string} arg2 乘数
   * @return {number} 乘积结果
   */
  accMul(arg1: string | number, arg2: string | number): number {
    return numberUtils.accMul(arg1, arg2)
  },

  /**
   * 除法运算
   * @param arg1 被除数
   * @param arg2 除数
   * @param retainNum 保留小数点后的位数, 默认3
   * @returns {string} 商
   */
  accDiv(arg1: string | number, arg2: string | number, retainNum = 3): string {
    return numberUtils.accDiv(arg1, arg2, retainNum)
  },

  /**
   * 比较版本号大小
   * @param {string} v1 版本号1
   * @param {string} v2 版本号2
   * @returns {number} 如果 v1 > v2，返回 1；如果 v1 < v2，返回 -1；如果 v1 = v2，返回 0。
   */
  compareVersion(v1: string, v2: string): number {
    const v1Arr = v1.split('.')
    const v2Arr = v2.split('.')
    const len = Math.max(v1.length, v2.length)

    while (v1Arr.length < len) {
      v1Arr.push('0')
    }
    while (v2Arr.length < len) {
      v2Arr.push('0')
    }
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1Arr[i])
      const num2 = parseInt(v2Arr[i])

      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  },

  /**
  * 将驼峰命名转换为连字符 - 命名
  * @param {string} str 驼峰命名的字符串
  * @param {string} separator 连字符的分隔符，默认为 '-'
  * @returns {string} 连字符命名的字符串
  */
  camelToKebab(str: string, separator = '-') {
    // 如果字符串包含非英文字符，直接返回原字符串
    if (!/^[A-Za-z]+$/.test(str)) return str
    return str.replace(/([a-z])([A-Z])/g, `\$1${separator}\$2`).toLowerCase()
  },

  /**
   * 将连字符命名转换为驼峰命名
   * @param {string} str 连字符命名的字符串
   * @param {string} separator 连字符的分隔符，默认为 '-'
   * @returns {string} 驼峰命名的字符串
   */
  kebabToCamel(str: string, separator = '-') {
    // 对分隔符进行转义
    separator = separator.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    // 包含非英文字符,和非separator,直接返回原字符串
    const reg = new RegExp(`[^a-zA-Z${separator}]`)
    if (reg.test(str)) return str

    const regex = new RegExp(separator + '([a-z])', 'g')
    return str.replace(regex, g => g[1].toUpperCase())
  },
}
