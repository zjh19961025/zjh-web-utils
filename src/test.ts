import { typeUtils } from "./type"

/**
 * 逻辑判断相关方法
 */
export const testUtils = {
  /**
  * 判断是否整数
  *
  * @param {string | number} obj 传入数据
  * @return {Boolean} 是否整数
 * @example
 * ```typescript
 * testUtils.isInteger(2.1); // false
 * ```
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
  * ``` js
  * testUtils.isFloat("12.01") // true
   * testUtils.isFloat(12.0) // false 会转化成12
  * ```
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
   * @example
   * ```typescript
   * testUtils.isSingleEmpty({}); // true
   * testUtils.isSingleEmpty({ a: 1 }) // false
   * testUtils.isSingleEmpty(12.01) // false
   * testUtils.isSingleEmpty(null) // true
   * testUtils.isSingleEmpty(undefined) // true
   * testUtils.isSingleEmpty(NaN) // true
   * testUtils.isSingleEmpty(false) // false
   * ```
   */
  isSingleEmpty(value: any): boolean {
    switch (typeof value) {
      case 'undefined':
        return true
      case 'string':
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true
        break
      case 'boolean':
        return false
      case 'number':
        if (isNaN(value)) return true
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
   * 判断一个或多个值是否全部为空
   * @param values 传入多个数据
   * @returns {Boolean} 是否为空
   * @example
   * ```typescript
   * testUtils.isEmpty([1], {}); // false
   * testUtils.isEmpty([], {}) // true
   * ```
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
   * 判断一个或多个值是否全部不为空
   * @param values 传入多个数据
   * @returns {Boolean} 是否不为空
   * @example
   * ```typescript
   * testUtils.isNotEmpty([1], {}); // false
   * testUtils.isNotEmpty({ a: 1 }, ['1']) // true
   * testUtils.isNotEmpty(false) // false
   * testUtils.isNotEmpty(0) // false
   * ```
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
   * 判断是否为0
   * @param value 传入数据
   * @returns {Boolean} 是否为0
   * @example
   * ```typescript
   * testUtils.isZero(1); // false
   * testUtils.isZero(0) // true
   * testUtils.isZero('0') // true
   * testUtils.isZero(null) // false
   * ```
   */
  isZero(value:any): boolean {
    return value === 0 || value === '0'
  },

  /**
   * 判断是否为数字
   * @param value 传入数据
   * @returns {Boolean} 是否为数字
   * @example
   * ```typescript
   * testUtils.isNum(1); // true
   * testUtils.isNum(-1.1) // true
   * testUtils.isNum('0') // true
   * testUtils.isNum('12.a2') // false
   * ```
   */
  isNum(value: any): boolean {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
  },

  /**
   * 判断是否为非负的整数
   * @param value 传入数据
   * @returns {Boolean}
   * @example
   * ```typescript
   * testUtils.isNonNegInt(1.1); // false
   * testUtils.isNonNegInt(0) // true
   * testUtils.isNonNegInt('0') // true
   * testUtils.isNonNegInt('12.12') // false
   * testUtils.isNonNegInt('-12.12') // true
   * ```
   */
  isNonNegInt(value: any): boolean {
    return /^\d+$/.test(value)
  },

  /**
   * 判断是否全为字母
   * @param value 传入数据
   * @returns {Boolean}
   * @example
   * ```typescript
   * testUtils.isLetter('aasdas'); // true
   * testUtils.isLetter('aasdasd123') // false
   * ```
   */
  isLetter(value: any): boolean {
    return /^[a-zA-Z]*$/.test(value)
  },

  /**
   * 判断是否为字母、数字 或 字母数字组合
   * @param value 传入数据
   * @returns {Boolean}
   * @example
   * ```typescript
   * testUtils.isLetterOrNum('aasdas'); // true
   * testUtils.isLetterOrNum('aasdasd123') // true
   * testUtils.isLetterOrNum('aas哈哈asd') // false
   * ```
   */
  isLetterOrNum(value: any):boolean {
    // 英文或者数字
    const reg = /^[0-9a-zA-Z]*$/g
    return reg.test(value)
  },

  /**
   * 判断是否为中文
   * @param value 传入数据
   * @returns {Boolean}
   * @example
   * ```typescript
   * testUtils.isChinese('aasdas'); // false
   * testUtils.isChinese('aasdasd123') // false
   * testUtils.isChinese('哈哈') // true
   * ```
   */
  isChinese(value: any):boolean {
    const reg = /^[\u4e00-\u9fa5]+$/gi
    return reg.test(value)
  },

  /**
   * 判断是否为短信验证码，或指定位数的纯数字
   * @param value 传入数据
   * @param len 数字的预期长度, 默认6
   * @returns {Boolean}
   * @example
   * ```typescript
   * testUtils.isCode('123'); // false
   * testUtils.isCode('123456') // true
   * testUtils.isCode('123哈哈哈') // false
   * ```
   */
  isCode(value: any, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value)
  },

  /**
   * 判断是否为电子邮箱格式
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isEmail('123'); // false
   * testUtils.isEmail('123456') // false
   * testUtils.isEmail('123asd@qq.com') // true
   * ```
   */
  isEmail(value: any): boolean {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
  },

  /**
   * 判断是否为手机或座机格式
   * 全部是数字，或者数字之间至多包含一个 - ，因为座机号包含 -
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isMobile('1234561651'); // true
   * testUtils.isMobile('1234-561651') // true
   * testUtils.isMobile('12345哈23@qq.com') // false
   * ```
   */
  isMobile(value: any): boolean {
    return /^(?!.*-.*-)(?!.*-$)(?!^-.*)\d+-?\d+$/.test(value)
  },

  /**
   * 判断是否为URL格式
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isUrl('http://baidu.com'); // true
   * testUtils.isUrl('https://baidu.com/123?a=1&b=2&c=哈哈') // true
   * testUtils.isUrl('www.baidu.com') // false
   * ```
   */
  isUrl(value: any): boolean {
    const v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i')
    return v.test(value)
  },

  /**
   * 判断是否为日期格式
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isDate('2020-01-01'); // true
   * testUtils.isDate('2020-01-01 12:00:00') // true
   * testUtils.isDate('2020-13-01 12:00:00.000') // false
   * testUtils.isDate('1711013650') // true 时间戳
   * ```
   */
  isDate(value: any): boolean {
    if (!value) return false
    // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
    if (this.isNum(value)) value = +value
    return !/Invalid|NaN/.test(new Date(value).toString())
  },

  /**
   * 判断是否为ios日期格式
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isDateISO('2020-01-01'); // true
   * testUtils.isDateISO('2024/03/21') // true
   * ```
   */
  isDateISO(value: any): boolean {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
  },

  /**
   * 判断是否为身份证号
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isIdCard('1234561651'); // false
   * testUtils.isIdCard('533001199912112325') // true
   * ```
   */
  isIdCard(value: any): boolean {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
  },

  /**
   * 判断是否为车牌号
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isCarNo('1234561651'); // false
   * testUtils.isCarNo('粤B12345') // true
   * ```
   */
  isCarNo(value: any): boolean {
    // 新能源车牌
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
    // 旧车牌
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
    if (value.length === 7) {
      return creg.test(value)
    } else if (value.length === 8) {
      return xreg.test(value)
    } else {
      return false
    }
  },

  /**
   * 判断是否在范围内
   * @param {string | number} value 传入数据
   * @param {number[]} param 范围参数, [min, max]
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isInRange(1, [1, 2]); // true
   * testUtils.isInRange(1, [2, 1]) // false
   * testUtils.isInRange('5', [1, 3]) // false
   * ```
   */
  isInRange(value: string | number, param: number[]): boolean {
    return (value as number) >= param[0] && (value as number) <= param[1]
  },

  /**
   * 判断长度是否在范围内
   * @param {string | any[]} value 传入数据
   * @param {number[]} param 范围参数, [min, max]
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isInLength('123', [1, 3]); // true
   * testUtils.isInLength('123qwe', [1, 3]) // false
   * testUtils.isInLength('[1, 2, 3, 4, 5], [1, 5]) // true
   * ```
   */
  isInLength(value: string | any[], param: number[]): boolean {
    return value.length >= param[0] && value.length <= param[1]
  },

  /**
   * 判断是否为座机号
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isLandline('1234561651'); // false
   * testUtils.isLandline('020-1234535') // true
   * ```
   */
  isLandline(value: any): boolean {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
    return reg.test(value)
  },

  /**
   * 判断是否为JSON字符串
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isJsonString('123'); // false
   * testUtils.isJsonString('{"a":1}') // true
   * ```
   */
  isJsonString(value: any): boolean {
    if (typeof value == 'string') {
      try {
        const obj = JSON.parse(value)
        if (typeof obj == 'object' && obj) {
          return true
        } else {
          return false
        }
      } catch (e) {
        return false
      }
    }
    return false
  },

  /**
   * 判断是否为Promise对象
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isPromise(Promise.resolve()); // true
   * testUtils.isPromise(new Promise(() => {})) // true
   * testUtils.isPromise(function fun() {}) // false
   * ```
   */
  isPromise(value: any): boolean {
    return value instanceof Object && typeof value.then === 'function' && typeof value.catch === 'function'
  },

  /**
   * 判断是否为图片格式
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isImage('123'); // false
   * testUtils.isImage('123.png') // true
   * testUtils.isImage('123.gif?a=1&b=2) // true
   * ```
   */
  isImage(value: string): boolean {
    const newValue = value.split('?')[0]
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
    return IMAGE_REGEXP.test(newValue)
  },

  /**
   * 判断是否为视频格式
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isVideo('123'); // false
   * testUtils.isVideo('123.mp4') // true
   * testUtils.isVideo('123.mpg?a=1&b=2') // true
   * ```
   */
  isVideo(value: string): boolean {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i
    return VIDEO_REGEXP.test(value)
  },

  /**
   * 判断是否为银行卡号
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isBankCard('1234561651'); // false
   * testUtils.isBankCard('6222010300100044001') // true
   * testUtils.isBankCard('62220103001000440011112356') // false
   * ```
   */
  isBankCard(value: any): boolean {
    // return  /^([1-9]{1})(\d{15}|\d{18})$/.test(value);
    return /^([1-9]{1})(\d{15,24})$/.test(value)
  },

  /**
   * 是否版本号
   * @param value 传入数据
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isVersion('1234561651'); // false
   * testUtils.isVersion(''0.0.1') // true
   * ```
   */
  isVersion(value: string): boolean {
    return /^\d+\.\d+\.\d+$/.test(value)
  },

  /**
   * 是否为数组
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isArray([]); // true
   * testUtils.isArray({}) // false
   * ```
   */
  isArray(obj: any) {
    return typeUtils.isArray(obj)
  },

  /**
   * 是否为方法
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isFunction(() => 1); // true
   * testUtils.isFunction({}) // false
   * ```
   */
  isFunction(obj: any) {
    return typeUtils.isFunction(obj)
  },

  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isNull(null); // true
   * testUtils.isNull(undefined) // false
   * ```
   */
  isNull(obj: any) {
    return typeUtils.isNull(obj)
  },

  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isUndefined(null); // false
   * testUtils.isUndefined(undefined) // true
   * ```
   */
  isUndefined(obj: any) {
    return typeUtils.isUndefined(obj)
  },

  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   * @example
   * ```typescript
   * testUtils.isNullOrUndefined(null); // true
   * testUtils.isNullOrUndefined(undefined) // true
   * testUtils.isNullOrUndefined('') // false
   * ```
   */
  isNullOrUndefined(obj: any) {
    return typeUtils.isNullOrUndefined(obj)
  },
}
