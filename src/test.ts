/**
 * 逻辑判断相关方法
 */
import { isNull, isArray, isObject } from "./type"

/**
* 判断是否整数
*
* @param {string | number} obj 对象
* @return {Boolean}
* @example
*/
export function isInteger(obj: string | number) {
  return !isNull(obj) && !isNaN(Number(obj)) && !isArray(obj) && Number(obj) % 1 === 0
}

/**
* 判断是否小数
*
* @param {string | number} obj 对象
* @return {Boolean}
* @example
*/
export function isFloat(obj: string | number) {
  return !isNull(obj) && !isNaN(Number(obj)) && !isArray(obj) && !isInteger(obj)
}

/**
 * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
 * @param obj
 * @returns
 */
export function isPlainObject(obj: any) {
  return isObject(obj)
}

/**
 * testUtils
 */
export const testUtils = {
  isInteger,
  isFloat,
  isPlainObject,
}
