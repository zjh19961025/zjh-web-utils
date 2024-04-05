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
   * 判断是否为空,数字0 或者 字符0 表示不为空
   * @param value 传入数据
   * @returns {Boolean} 是否不为空
   */
  isEmptyNoZero(value: any): boolean {
  // 数字0 或者 字符0 表示不为空
    if (value === 0 || value === '0') return false
    return this.isSingleEmpty(value)
  },

  /**
   * 判断是否为0
   * @param value 传入数据
   * @returns {Boolean} 是否为0
   */
  isZero(value:any): boolean {
    return value === 0 || value === '0'
  },

  /**
   * 判断是否为数字
   * @param value 传入数据
   * @returns {Boolean} 是否为数字
   */
  isNum(value: any): boolean {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
  },

  /**
   * 判断是否为非负的整数
   * @param value 传入数据
   * @returns {Boolean}
   */
  isNonNegInt(value: any): boolean {
    return /^\d+$/.test(value)
  },

  /**
   * 判断是否全为字母
   * @param value 传入数据
   * @returns {Boolean}
   */
  isLetter(value: any): boolean {
    return /^[a-zA-Z]*$/.test(value)
  },

  /**
   * 判断是否为字母、数字 或 字母数字组合
   * @param value 传入数据
   * @returns {Boolean}
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
   */
  isCode(value: any, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value)
  },

  /**
   * 判断是否为电子邮箱格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isEmail(value: any): boolean {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
  },

  /**
   * 判断是否为手机或座机格式
   * 全部是数字，或者数字之间至多包含一个 - ，因为座机号包含 -
   * @param value 传入数据
   * @return {Boolean}
   */
  isMobile(value: any): boolean {
    return /^(?!.*-.*-)(?!.*-$)(?!^-.*)\d+-?\d+$/.test(value)
  },

  /**
   * 判断是否为URL格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isUrl(value: any): boolean {
    const v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i')
    return v.test(value)
  },

  /**
   * 判断是否为日期格式
   * @param value 传入数据
   * @return {Boolean}
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
   */
  isDateISO(value: any): boolean {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
  },

  /**
   * 判断是否为身份证号
   * @param value 传入数据
   * @return {Boolean}
   */
  isIdCard(value: any): boolean {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
  },

  /**
   * 判断是否为车牌号
   * @param value 传入数据
   * @return {Boolean}
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
   */
  isInRange(value: string | number, param: number[]): boolean {
    return (value as number) >= param[0] && (value as number) <= param[1]
  },

  /**
   * 判断长度是否在范围内
   * @param {string | any[]} value 传入数据
   * @param {number[]} param 范围参数, [min, max]
   * @return {Boolean}
   */
  isInLength(value: string | any[], param: number[]): boolean {
    return value.length >= param[0] && value.length <= param[1]
  },

  /**
   * 判断是否为座机号
   * @param value 传入数据
   * @return {Boolean}
   */
  isLandline(value: any): boolean {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
    return reg.test(value)
  },

  /**
   * 判断是否为JSON字符串
   * @param value 传入数据
   * @return {Boolean}
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
   */
  isPromise(value: any): boolean {
    return value instanceof Object && typeof value.then === 'function' && typeof value.catch === 'function'
  },

  /**
   * 判断是否为图片格式
   * @param value 传入数据
   * @return {Boolean}
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
   */
  isVideo(value: string): boolean {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i
    return VIDEO_REGEXP.test(value)
  },

  /**
   * 判断是否为银行卡号
   * @param value 传入数据
   * @return {Boolean}
   */
  isBankCard(value: any): boolean {
    // return  /^([1-9]{1})(\d{15}|\d{18})$/.test(value);
    return /^([1-9]{1})(\d{15,24})$/.test(value)
  },

}
