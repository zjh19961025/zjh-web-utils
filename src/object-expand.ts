import { objectUtils } from "./object"
import qs from "qs"

type ObjectUtilsKeys = keyof typeof objectUtils;

declare global {
    interface Object {
    /**
     * 对象转url参数
     * 转为普通的 连接参数, 默认不编码，从而能正常传递中文
     * @param {boolean} addPrefix  是否添加 ? 前缀
     * @param {boolean} encode 是否使用 decodeURIComponent 编码
     * @param {qs.IStringifyOptions} option qs.stringify第二个参数
     * @returns {string} 转换后的字符串
     */
    toUrlParams(addPrefix?: boolean, encode?: boolean, option?: qs.IStringifyOptions): string
    /**
     * 对象转url参数
     * 转为编码后的url参数
     * @param {string} prefix 前缀，默认值？
     * @param {string} key 前缀后的固定字符串，默认值encodeParams
     * @returns {string} 转换后的字符串
     */
    toEncodeParams(prefix?: string, key?: string): string

    /**
     * 深拷贝
     * @returns {any} 深拷贝后的对象
     */
    deepClone(): any

    /**
     * 深度合并
     * @param {object} source 源对象
     * @returns {object} 拷贝并合并后的对象
     */
    deepMerge(source: any): any
  }
}

/**
 * 扩展Object对象, 执行此方法会将objectUtils中的方法添加到Object的原型上
 */
export function objectExpand() {
  // 防止 Object.prototype 中的自定义属性被迭代
  Object.keys(objectUtils).forEach((name) => {
    if (Object.prototype[name as ObjectUtilsKeys]) {
      console.error("object expand " + name + " repeat !!")
      return
    }

    Object.defineProperty(Object.prototype, name, {
      value: function(...arg: any[]) {
        return (objectUtils[name as ObjectUtilsKeys] as any)(this, ...arg)
      },
      enumerable: false, // 确保方法不可枚举
      writable: true, // 允许重写
      configurable: true, // 允许删除或修改
    })
  })
}

