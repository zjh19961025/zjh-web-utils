import { typeUtils } from "./type"

/**
 * 数组相关工具方法
 */
export const arrayUtils = {
  /**
   * 检查索引是否合法
   * @param {Array} array 数组
   * @param {number} index 索引
   * @returns {boolean}
   */
  checkIndexLegal(array: any[], index: number): boolean {
    if (!typeUtils.isArray(array) || !array || index < 0 || index >= array.length) return false
    return true
  },

  /**
   * 基本数据类型的数组去重
   * @param {Array} array 数组
   * @returns {Array} 去重后的数组
   */
  distinct(array: any[]): any[] {
    if (!typeUtils.isArray(array)) return array
    const setArr = new Set(array)
    array.splice(0)
    array.push(...setArr)
    return array
  },

  /**
   * 对象数组去重, 后面的覆盖前面的，但位置顺序不变
   * @param {Array} array 数组
   * @param {string} primaryKey 主键,默认为id
   * @returns {Array} 去重后的数组
   */
  distinctObjList(array: any[], primaryKey = "id"): any[] {
    if (!typeUtils.isArray(array)) return array

    const map = new Map()
    for (let i = 0; i < array.length; ++i) {
      const item = array[i]
      if (item && Object.prototype.hasOwnProperty.call(item, primaryKey)) {
        map.set(item[primaryKey], item)
      }
    }
    return [...map.values()]
  },

  /**
   * 随机打乱数组
   * @param array 数组
   * @returns {Array} 打乱后的数组
   */
  shuffleArray(array: any[]): any[] {
    if (!typeUtils.isArray(array)) return array
    // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.5大于或者小于0
    array.sort(() => Math.random() - 0.5)
    return array
  },
}
