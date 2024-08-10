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
   * @example
   * ``` js
   * checkIndexLegal([1, 2, 3], 1) // true
   * checkIndexLegal([1, 2, 3], 4) // false
   * ```
   */
  checkIndexLegal(array: any[], index: number): boolean {
    if (!typeUtils.isArray(array) || !array || index < 0 || index >= array.length) return false
    return true
  },

  /**
   * 基本数据类型的数组去重
   * @param {Array} array 数组
   * @returns {Array} 去重后的数组
   * @example
   * ``` js
   * distinct([1, 2, 3, 1, 2, 3]) // [1, 2, 3]
   * distinct([1, 2, 3, 1, 2, 3, 5]) // [1, 2, 3, 5]
   * distinct(['a', 2, 'b', 1, 2, 3, 5, 5]) // ["a", 2, "b", 1, 3, 5]
   * ```
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
   * @example
   * ``` js
   * distinctObjList([{ a: 1 }, { a: 2 }, { a: 1 }], 'a') // [{ a: 1 }, { a: 2 }]
   * distinctObjList([{ a: 1 }, { a: 2 }, { a: 1 }], 'b') // []
   * distinctObjList([{ id: 1 }, { id: 2 }, { id: 1 }]) // [{ id: 1 }, { id: 2 }]
   * ```
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
   * @example
   * ``` js
   * shuffleArray([1, 2, 3, 4, 5]) // [ 4, 1, 2, 3, 5 ] 随机打乱后的数组
   * shuffleArray(['a', 2, 'b', 4, 5]) // [ 4, 'b', 2, 'a', 5 ]
   * ```
   */
  shuffleArray(array: any[]): any[] {
    if (!typeUtils.isArray(array)) return array
    // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.5大于或者小于0
    array.sort(() => Math.random() - 0.5)
    return array
  },
}
