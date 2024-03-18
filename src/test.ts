/**
 * 逻辑判断相关方法
 */
import { typeUtils } from "./type"

/**
* 判断是否整数
*
* @param {string | number} obj
* @return {Boolean} 是否整数
* @example
*/
function isInteger(obj: string | number) {
  return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && Number(obj) % 1 === 0
}

/**
* 判断是否小数
*
* @param {string | number} obj
* @return {Boolean} 是否小数
* @example
*/
function isFloat(obj: string | number) {
  return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && !isInteger(obj)
}

/**
 * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
 * @param obj
 * @returns 是否为普通对象
 */
function isPlainObject(obj: any) {
  return typeUtils.isObject(obj)
}

/**
 * testUtils
 */
export const testUtils = {
  isInteger,
  isFloat,
  isPlainObject,
}
