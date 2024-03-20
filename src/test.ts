/**
 * 逻辑判断相关方法
 */
import { typeUtils } from "./type"

/**
 * testUtils
 */
export const testUtils = {
  /**
  * 判断是否整数
  *
  * @param {string | number} obj 传入数据
  * @return {Boolean} 是否整数
  * @example
  */
  isInteger(obj: string | number) {
    return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && Number(obj) % 1 === 0
  },

  /**
  * 判断是否小数
  *
  * @param {string | number} obj 传入数据
  * @return {Boolean} 是否小数
  * @example
  */
  isFloat(obj: string | number) {
    return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && !this.isInteger(obj)
  },

  /**
   * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
   * @param obj 传入数据
   * @returns 是否为普通对象
   */
  isPlainObject(obj: any) {
    return typeUtils.isObject(obj)
  },

  /**
   * 判断单个值是否为空
   * @param value 传入数据
   * @returns {Boolean} 是否为空
   */
  isSingleEmpty(value: any): boolean {
    switch (typeof value) {
      case 'undefined':
        return true
      case 'string':
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true
        break
      case 'boolean':
        if (!value) return true
        break
      case 'number':
        if (value === 0 || isNaN(value)) return true
        break
      case 'object':
      // typeof null 也是 object 类型
        if (value === null || value.length === 0) return true
        for (const i in value) {
          return false
        }
        if (value instanceof Date) return false
        return true
    }
    return false
  },

  /**
   * 判断多个值是否全部为空
   * @param values 传入多个数据
   * @returns {Boolean} 是否为空
   */
  isEmpty(...values: any[]): boolean {
    let isEmpty = false
    for (let i = 0; i < values.length; ++i) {
      isEmpty = this.isSingleEmpty(values[i])
      if (!isEmpty) break
    }
    return isEmpty
  },

  /**
   * 判断多个值是否全部不为空
   * @param values 传入多个数据
   * @returns {Boolean} 是否不为空
   */
  isNotEmpty(...values: any[]): boolean {
    let isNotEmpty = false
    for (let i = 0; i < values.length; ++i) {
      isNotEmpty = !this.isSingleEmpty(values[i])
      if (!isNotEmpty) break
    }
    return isNotEmpty
  },

  /**
   * 判断单个值是否为空,数字0 或者 字符0 表示不为空
   * @param value 传入数据
   * @returns {Boolean} 是否不为空
   */
  isEmptyNoZero(value: any): boolean {
  // 数字0 或者 字符0 表示不为空
    if (value === 0 || value === '0') return false
    return this.isSingleEmpty(value)
  },

  /**
   * 判断单个值是否为0
   * @param value 传入数据
   * @returns {Boolean} 是否为0
   */
  isZero(value:any): boolean {
    return value === 0 || value === '0'
  },
}
