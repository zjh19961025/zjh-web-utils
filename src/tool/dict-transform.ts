import { typeUtils } from "../type"
import { testUtils } from "../test"

type DictArrayItem = { [key: string]: any };
type DictData = DictArrayItem[] | { [key: string]: any };

interface DictTransformResult {
  obj: { [key: string]: any };
  combo: DictArrayItem[];
  array: any[];
}

/**
 * 将字典数据 => { obj, combo, array }
 * @param {DictData} data - 输入的数据，可以是对象或数组
 * @param {string} keyName - 键名，默认为 'value'
 * @param {string} valueName - 值名，默认为 'label'
 * @returns {DictTransformResult} { obj, combo, array } - 返回 { obj, combo, array } 三种格式的数据
 * @example
 * ``` ts
 * const { obj, combo, array } = dictTransform({ 0: "否", 1: "是" });
 * const { obj, combo, array } = dictTransform([{ label: "否", value: 0 }, { label: "是", value: 1 }]);
 * ```
 */
export function dictTransform(data: DictData, keyName = 'value', valueName = 'label'): DictTransformResult {
  // 为空处理
  if (testUtils.isEmpty(data)) return { obj: {}, combo: [], array: [] }

  // 输出格式
  const obj: { [key: string]: any } = {}
  const combo: DictArrayItem[] = []
  const array: any[] = []

  // 数组处理
  if (typeUtils.isArray(data)) {
    (data as DictArrayItem[]).forEach((item) => {
      obj[item[keyName]] = item[valueName]
      combo.push({
        [keyName]: item[keyName],
        [valueName]: item[valueName],
      })
      array.push(item[valueName])
    })
    return { combo, obj, array }
  }

  // 对象处理
  if (testUtils.isPlainObject(data)) {
    for (const key in data) {
      const value = (data as any)[key]
      obj[key] = value
      combo.push({
        [keyName]: key,
        [valueName]: value,
      })
      array.push(value)
    }
    return { combo, obj, array }
  }

  return { obj: data, combo: [], array: [] }
}
