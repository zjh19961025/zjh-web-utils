import { numberUtils } from "./number"

type NumberUtilsKeys = keyof typeof numberUtils;

declare global {
    interface Number {
    /**
     * 将数字转化为带有单位的字符串或对象。如果数字大于或等于 10000，单位为 'w'；如果数字大于或等于 1000，单位为 'k'。
     * @param {boolean} isAddUnit - true，返回带有单位的字符串；false，则返回一个包含数字和单位的对象。
     * @returns {((string | number) | { num: string | number, unit: string })} 转换后带单位的数字, 或者包含数字和单位的对象。
     */
    tokw(isAddUnit?: boolean): (string | number) | { num: string | number, unit: string }

    /**
     * 为数字添加小数点，并保留2位数，如果已经有小数点则不处理
     * @returns {string} 转换后的数字。
     */
    isDot(): string

    /**
     * 加法运算
     * @param {number | string} arg2 - 加数
     * @returns {string} 加法运算的结果
     */
    accAdd(arg2: number | string): string

    /**
     * 减法运算
     * @param {number | string} arg2 - 减数
     * @returns {string} 减法运算结果
     */
    accSub(arg2: number | string): string

    /**
     * 乘法运算
     * @param {number | string} arg2 乘数
     * @return {number} 乘积结果
     */
    accMul(arg2: number | string): number

    /**
     * 除法运算
     * @param arg2 除数
     * @param retainNum 保留小数点后的位数, 默认3
     * @returns {string} 商
     */
    accDiv(arg2: number | string, retainNum?: number): string

    /**
     * 数字转换为百分比
     * @param {number} fiexd - 保留的小数位数，默认为 4。
     * @returns {string | number} 返回转换后的百分比值，如果输入无效或小于等于 0，则返回 0。
     */
    to100Rate(fiexd?: number): string | number

    /**
     * 百分比转换为数字
     * @returns {number} 返回转换后的数字值，如果输入无效或小于等于 0，则返回 0。
     */
    to100Num(): number
  }
}

/**
 * 扩展Number对象, 执行此方法会将numberUtils中的方法添加到Number的原型上
 */
export function numberExpand() {
  Object.keys(numberUtils).forEach(function(key) {
    Number.prototype[key as NumberUtilsKeys] = function(...arg: any[]) {
      return (numberUtils[key as NumberUtilsKeys] as any)(this, ...arg)
    }
  })

  // 防止 Number.prototype 中的自定义属性被迭代
  Object.keys(numberUtils).forEach((name) => {
    Object.defineProperty(Number.prototype, name, {
      "enumerable": false,
    })
  })
}

