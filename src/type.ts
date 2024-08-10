const TYPE_STR = {
  Boolean: "Boolean",
  Number: "Number",
  String: "String",
  Array: "Array",
  Object: "Object",
  Date: "Date",
  Null: "Null",
  Undefined: "Undefined",
  Function: "Function",
  Symbol: "Symbol",
  BigInt: "BigInt",
  RegExp: "RegExp",
  Map: "Map",
  Set: "Set",
  WeakMap: "WeakMap",
  WeakSet: "WeakSet",
  Error: "Error",
}

/**
 * 类型相关方法
 */
export const typeUtils = {
  /**
   * 获取类型
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.getType(123) // 'Number'
   * typeUtils.getType('123') // 'String'
   * ```
   */
  getType(obj: any) {
  // 通过 Object.prototype.toString 获取到表示类型的字符串
    const toStringType = Object.prototype.toString.call(obj)
    // 截取类型字符串，并转换为对应的类型表示
    return toStringType.substring(8, toStringType.length - 1)
  },

  /**
   * 是否为数字
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isNumber(1) // true
   * typeUtils.isNumber('123') // false
   * ```
   */
  isNumber(obj: any) {
    return this.getType(obj) === TYPE_STR.Number
  },

  /**
   * 是否为bool
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isBool(false) // true
   * typeUtils.isBool('123') // false
   * ```
   */
  isBool(obj: any) {
    return this.getType(obj) === TYPE_STR.Boolean
  },

  /**
   * 是否为字符串
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isString('') // true
   * typeUtils.isString(null) // false
   * ```
   */
  isString(obj: any) {
    return this.getType(obj) === TYPE_STR.String
  },

  /**
   * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isObject('') // false
   * typeUtils.isObject({}) // true
   * ```
   */
  isObject(obj: any) {
    return this.getType(obj) === TYPE_STR.Object
  },

  /**
   * 是否为数组
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isArray('') // false
   * typeUtils.isArray([]) // true
   * ```
   */
  isArray(obj: any) {
    return Array.isArray(obj)
  },

  /**
   * 是否为方法
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isFunction('') // false
   * typeUtils.isFunction(()=> 1) // true
   * ```
   */
  isFunction(obj: any) {
    return this.getType(obj) === TYPE_STR.Function
  },

  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isNull(null) // true
   * typeUtils.isNull(0) // false
   * ```
   */
  isNull(obj: any) {
    const type = this.getType(obj)
    return type === TYPE_STR.Null
  },

  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isNull(null) // true
   * typeUtils.isNull(0) // false
   * ```
   */
  isUndefined(obj: any) {
    const type = this.getType(obj)
    return type == TYPE_STR.Undefined
  },

  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isNullOrUndefined(null) // true
   * typeUtils.isNullOrUndefined(undefined) // true
   * typeUtils.isNullOrUndefined('') // false
   * ```
   */
  isNullOrUndefined(obj: any) {
    const type = this.getType(obj)
    return type === TYPE_STR.Null || type === TYPE_STR.Undefined
  },

  /**
   * 判断是否Date对象
   *
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ``` js
   * typeUtils.isDate(new Date()) // true
   * typeUtils.isDate("2023-01-01") // false
   * typeUtils.isDate(1710494564480) // false
   * ```
   */
  isDate(obj: any) {
    return this.getType(obj) === TYPE_STR.Date
  },

  /**
   * 判断是否RegExp对象
   *
   * @param {Object} obj 对象
   * @return {Boolean}
   * ``` js
   * typeUtils.isRegExp(new Date()) // false
   * typeUtils.isRegExp("2023-01-01") // false
   * typeUtils.isRegExp(/^([1-9]{1})(\d{15,24})$/) // true
   * ```
   */
  isRegExp(obj: any) {
    return this.getType(obj) === TYPE_STR.RegExp
  },
}
