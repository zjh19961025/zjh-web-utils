import { testUtils } from "./test"
/**
 * 数字相关工具方法
 */
export const numberUtils = {
  /**
   * 将数字转化为带有单位的字符串或对象。如果数字大于或等于 10000，单位为 'w'；如果数字大于或等于 1000，单位为 'k'。
   *
   * @param {string | number} num - 需要转化的数字。
   * @param {boolean} isAddUnit - true，返回带有单位的字符串；false，则返回一个包含数字和单位的对象。
   * @returns {((string | number) | { num: string | number, unit: string })} 转换后带单位的数字, 或者包含数字和单位的对象。
   */
  tokw(num: string | number, isAddUnit = true): (string | number) | { num: string | number, unit: string } {
    if (testUtils.isEmpty(num)) {
      return isAddUnit ? 0 : {
        num: "0",
        unit: '',
      }
    }
    let unit = ""
    if ((num as number) >= 10000) {
      num = Math.round((num as number) / 1000) / 10
      unit = 'w'
    } else if ((num as number) >= 1000) {
      num = Math.round((num as number) / 100) / 10
      unit = 'k'
    }
    return isAddUnit ? num + unit : {
      num,
      unit,
    }
  },

  /**
   * 为数字添加小数点，并保留2位数，如果已经有小数点则不处理
   * @param {number | string} num - 需要转换的数字。
   * @returns {string} 转换后的数字。
   */
  isDot(num: number | string): string {
    const toNum = Number(num)
    const str = String(num)
    if (isNaN(Number(num))) {
      console.error('非数值型字符')
      return '0.00'
    }
    return str.indexOf('.') >= 0 ? str : toNum.toFixed(2)
  },

  /**
   * 加法运算
   * @param {number | string} arg1 - 被加数
   * @param {number | string} arg2 - 加数
   * @returns {string} 加法运算的结果
   */
  accAdd(arg1: number | string, arg2: number | string): string {
    let r1: number, r2: number
    try {
      r1 = this.isDot(arg1).split(".")[1].length
    } catch (e) {
      r1 = 0
      arg1 = 0
    }
    try {
      r2 = this.isDot(arg2).split(".")[1].length
    } catch (e) {
      r2 = 0
      arg2 = 0
    }
    const c = Math.abs(r1 - r2)
    const m = Math.pow(10, Math.max(r1, r2))
    if (c > 0) {
      const cm = Math.pow(10, c)
      if (r1 > r2) {
        arg1 = Number(this.isDot(arg1).replace(".", ""))
        arg2 = Number(this.isDot(arg2).replace(".", "")) * cm
      } else {
        arg1 = Number(this.isDot(arg1).replace(".", "")) * cm
        arg2 = Number(this.isDot(arg2).replace(".", ""))
      }
    } else {
      arg1 = Number(this.isDot(arg1).replace(".", ""))
      arg2 = Number(this.isDot(arg2).replace(".", ""))
    }
    const n = (r1 >= r2) ? r1 : r2
    return ((arg1 + arg2) / m).toFixed(n)
  },

  /**
   * 减法运算
   * @param {number | string} arg1 - 被减数
   * @param {number | string} arg2 - 减数
   * @returns {string} 减法运算结果
   */
  accSub(arg1: number | string, arg2: number | string): string {
    let r1, r2
    try {
      r1 = this.isDot(arg1).split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = this.isDot(arg2).split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    const m = Math.pow(10, Math.max(r1, r2)) // last modify by deeka //动态控制精度长度
    const n = (r1 >= r2) ? r1 : r2
    return (((arg1 as number) * m - (arg2 as number) * m) / m).toFixed(n)
  },

  /**
   * 乘法运算
   * @param {number | string} arg1 被乘数
   * @param {number | string} arg2 乘数
   * @return {number} 乘积结果
   */
  accMul(arg1: number | string, arg2: number | string): number {
    let m = 0
    const s1 = this.isDot(arg1)
    const s2 = this.isDot(arg2)
    try {
      m += s1.split(".")[1].length
    } catch (e) { /* empty */ }
    try {
      m += s2.split(".")[1].length
    } catch (e) { /* empty */ }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  },

  /**
   * 除法运算
   * @param arg1 被除数
   * @param arg2 除数
   * @param retainNum 保留小数点后的位数, 默认3
   * @returns {string} 商
   */
  accDiv(arg1: number | string, arg2: number | string, retainNum = 3): string {
    let t1 = 0
    let t2 = 0
    try {
      t1 = this.isDot(arg1).split(".")[1].length
    } catch (e) { /* empty */ }
    try {
      t2 = this.isDot(arg2).split(".")[1].length
    } catch (e) { /* empty */ }
    const r1 = Number(this.isDot(arg1).replace(".", ""))
    const r2 = arg2 == 0 ? 1 : Number(this.isDot(arg2).replace(".", ""))
    return ((r1 / r2) * Math.pow(10, t2 - t1)).toFixed(retainNum)
  },
}
