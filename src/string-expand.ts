import { stringUtils } from "./string"
import qs from "qs"

type StringUtilsKeys = keyof typeof stringUtils;

declare global {
    interface String {
      /**
     * 翻转字符串
     * @return {string} 翻转的结果
     */
    reverse(): string
    /**
     * 将字符串指定位置的字符替换为指定字符
     * @param {number} start 在字符串开始处保留的字符数量, 默认4
     * @param {number} end 在字符串结束处保留的字符数量, 默认4
     * @param {string} replaceStr 替换的字符串, 默认为*
     * @return {string} 替换后的字符串
     */
    hideChar(start?: number, end?: number, replaceStr?: string): string

    /**
     * 金额 添加 + 或 - 号
     * @param {string} unit 单位, 只能是 + 或 -, 默认 +
     * @returns {string} 带符号的金额
     */
    moneyUnit(unit?: string): string

    /**
     * 去除字符串指定位置的空格
     * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
     * @returns {string} 去除空格后的字符串
     */
    trim(pos?: string): string

    /**
     * 去除字符左边空格
     * @returns {string} 去除空格后的字符串
     */
    trimLeft(): string

    /**
     * 去除字符右边空格
     * @returns {string} 去除空格后的字符串
     */
    trimRight(): string

    /**
     * 去除字符中的所有空格
     * @returns {string} 去除空格后的字符串
     */
    trimAll(): string

    /**
     * 去除字符中的指定字符
     * @param {string} char 要去除的字符
     * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
     * @returns {string} 去除空格后的字符串
     */
    trimChar(char?: string, pos?: string): string

    /**
     * 首字母大写
     * @returns {string} 首字母大写后的字符串
     */
    firstLetterToUpper(): string

    /**
     * 将url参数字符串转换为对象
     * @param {qs.IParseOptions} option qs.parse的配置项
     * @returns {object} 转换后的url参数对象
     */
    fromUrlParams(option?: qs.IParseOptions): object

    /**
     * 是否为数值型字符串
     * @returns {boolean}
     */
    isNumeric(): boolean

    /**
     * 将数值型字符串转换为固定小数位数的数值型字符串, 无法转换默认输出 '0.00'
     * @param {number} fixed - 结果数字的小数位数，默认为2
     * @returns {string} - 返回固定小数位数的数值型字符串
     */
    toFixed(fixed?: number): string

    /**
     * 加法运算
     * @param {number | string} arg2 - 加数
     * @returns {string} 加法运算的结果
     */
    accAdd(arg2: string | number): string

    /**
     * 减法运算
     * @param {number | string} arg2 - 减数
     * @returns {string} 减法运算结果
     */
    accSub(arg2: string | number): string

    /**
     * 乘法运算
     * @param {number | string} arg2 乘数
     * @return {number} 乘积结果
     */
    accMul(arg2: string | number): number

    /**
     * 除法运算
     * @param arg2 除数
     * @param retainNum 保留小数点后的位数, 默认3
     * @returns {string} 商
     */
    accDiv(arg2: string | number, retainNum?: number): string

    /**
     * 比较版本号大小
     * @param {string} v2 版本号2
     * @returns {number} 如果 v1 > v2，返回 1；如果 v1 < v2，返回 -1；如果 v1 = v2，返回 0。
     */
    compareVersion(v2: string): number

    /**
     * 将驼峰命名转换为连字符 - 命名
     * @param {string} separator 连字符的分隔符，默认为 '-'
     * @returns {string} 连字符命名的字符串
     */
    camelToKebab(separator?: string): string

    /**
     * 将连字符命名转换为驼峰命名
     * @param {string} separator 连字符的分隔符，默认为 '-'
     * @returns {string} 驼峰命名的字符串
     */
    kebabToCamel(separator?: string): string
  }
}

/**
 * 扩展String对象, 执行此方法会将stringUtils中的方法添加到String的原型上
 */
export function stringExpand() {
  Object.keys(stringUtils).forEach(function(key) {
    String.prototype[key as StringUtilsKeys] = function(...arg: any[]) {
      return (stringUtils[key as StringUtilsKeys] as any)(this, ...arg)
    }
  })

  // 防止 String.prototype 中的自定义属性被迭代
  Object.keys(stringUtils).forEach((name) => {
    Object.defineProperty(String.prototype, name, {
      "enumerable": false,
    })
  })
}

