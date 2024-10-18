export {} // 将这个文件转换为模块

declare global {
  interface JSON {
    /**
     * JSON 字符串解析为对象
     *
     * @param {string} text - JSON 字符串
     * @param {(key: any, value: any) => any} [reviver] - 转换对象属性的可选函数
     * @returns {T} 对象 或 空对象
     * @example
     * const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
     * const obj = JSON.parseObject(jsonString);
     * console.log(obj); // { name: 'John', age: 30, city: 'New York' }
     *
     * const jsonString = '{"name": "Alice", "birthdate": "1990-01-01T00:00:00Z"}';
     * const obj = JSON.parseObject(jsonString, (key, value) => {
     *  if (key === "birthdate") {
     *    return new Date(value);
     *  }
     *  return value;
     * });
     * console.log(obj); // { name: 'Alice', birthdate: Date }
     */
    parseObject: <T>(text: string, reviver?: (key: any, value: any) => any) => T;

    /**
     * JSON 字符串解析为数组
     *
     * @param {string} text - JSON 字符串
     * @param {(key: any, value: any) => any} [reviver] - 转换对象属性的可选函数
     * @returns {T[]} 数组 或 空数组
     * @example
     * const jsonString = '["apple", "banana", "orange"]';
     * const arr = JSON.parseArray(jsonString);
     * console.log(arr); // ['apple', 'banana', 'orange']
     *
     * const jsonString = '[{"name": "Alice"}, {"name": "Bob"}]';
     * const arr = JSON.parseArray(jsonString, (key, value) => {
     *  if (key === "name") {
     *   return value.toUpperCase();
     *  }
     *  return value;
     * });
     * console.log(arr); // 输出: [ { name: 'ALICE' }, { name: 'BOB' } ]
     */
    parseArray: <T>(text: string, reviver?: (key: any, value: any) => any) => T[];
  }
}

/**
 * JSON 字符串解析为对象
 *
 * @param {string} text - JSON 字符串
 * @param {(key: any, value: any) => any} [reviver] - 转换对象属性的可选函数
 * @returns {T} 对象 或 空对象
 * @example
 * const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
 * const obj = JSON.parseObject(jsonString);
 * console.log(obj); // { name: 'John', age: 30, city: 'New York' }
 *
 * const jsonString = '{"name": "Alice", "birthdate": "1990-01-01T00:00:00Z"}';
 * const obj = JSON.parseObject(jsonString, (key, value) => {
 *  if (key === "birthdate") {
 *    return new Date(value);
 *  }
 *  return value;
 * });
 * console.log(obj); // { name: 'Alice', birthdate: Date }
 */
JSON.parseObject = function<T>(text: string, reviver?: (key: any, value: any) => any): T {
  try {
    const result = JSON.parse(text, reviver)
    if (typeof result !== 'object' || Array.isArray(result)) {
      return {} as T
    }
    return result
  } catch {
    return {} as T
  }
}

/**
 * JSON 字符串解析为数组
 *
 * @param {string} text - JSON 字符串
 * @param {(key: any, value: any) => any} [reviver] - 转换对象属性的可选函数
 * @returns {T[]} 数组 或 空数组
 * @example
 * const jsonString = '["apple", "banana", "orange"]';
 * const arr = JSON.parseArray(jsonString);
 * console.log(arr); // ['apple', 'banana', 'orange']
 *
 * const jsonString = '[{"name": "Alice"}, {"name": "Bob"}]';
 * const arr = JSON.parseArray(jsonString, (key, value) => {
 *  if (key === "name") {
 *   return value.toUpperCase();
 *  }
 *  return value;
 * });
 * console.log(arr); // 输出: [ { name: 'ALICE' }, { name: 'BOB' } ]
 */
JSON.parseArray = function<T>(text: string, reviver?: (key: any, value: any) => any): T[] {
  try {
    const result = JSON.parse(text, reviver)
    if (!Array.isArray(result)) {
      return []
    }
    return result
  } catch {
    return []
  }
}
