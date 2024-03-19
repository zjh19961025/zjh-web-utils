/**
 * 对象相关工具方法
 */
import qs from "qs"
/**
 * 对象转url参数
 * 转为普通的 连接参数, 默认不编码，从而能正常传递中文
 * @param obj 对象
 * @param {boolean} addPrefix  是否添加 ? 前缀
 * @param {boolean} encode 是否使用 decodeURIComponent 编码
 * @param {object} option qs.stringify第二个参数
 * @returns {string} 转换后的字符串
 */
function toUrlParams(obj: any, addPrefix = true, encode = false, option: { [key: string]: any; } = {}): string {
  if ([null, undefined].includes(obj)) return ''
  const opt = {
    addQueryPrefix: addPrefix,
    encode: encode,
    ...option,
  }
  return qs.stringify(obj, opt)
}

/**
 * 对象转url参数
 * 转为编码后的url参数
 * @param obj 对象
 * @param {string} prefix 前缀，默认值？
 * @param {string} key 前缀后的固定字符串，默认值encodeParams
 * @returns {string} 转换后的字符串
 */
function toEncodeParams(obj: any, prefix = "?", key = "encodeParams"): string {
  if ([null, undefined].includes(obj)) return ''
  return prefix + key + "=" + encodeURIComponent(JSON.stringify(obj))
}

/**
 * 深拷贝
 * @param obj 对象
 * @returns {any} 深拷贝后的对象
 */
function deepClone(obj: any): any {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj as any)) return obj
  if (typeof obj !== "object" && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj
  }
  const o = Array.isArray(obj) ? [] as any : {} as any
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i]
    }
  }
  return o
}
/**
 * 深度合并
 * @param {object} target 目标对象
 * @param {object} source 源对象
 * @returns {object} 拷贝并合并后的对象
 */
function deepMerge(target: any, source: any): any {
  target = deepClone(target)
  if (typeof target !== 'object' || typeof source !== 'object') return target
  for (const prop in source) {
    if (!Object.prototype.hasOwnProperty.call(source, prop)) continue
    if (prop in target) {
      if (typeof target[prop] !== 'object' || target[prop] === null) {
        target[prop] = source[prop]
      } else {
        if (typeof source[prop] !== 'object' || source[prop] === null) {
          target[prop] = source[prop]
        } else {
          // 数组处理
          if (Array.isArray(target[prop]) && Array.isArray(source[prop])) {
            target[prop] = target[prop].concat(source[prop])
          } else {
            // 对象处理
            target[prop] = deepMerge(target[prop], source[prop])
          }
        }
      }
    } else {
      target[prop] = source[prop]
    }
  }
  return target
}

export const objectUtils = {
  toUrlParams,
  toEncodeParams,
  deepClone,
  deepMerge,
}
