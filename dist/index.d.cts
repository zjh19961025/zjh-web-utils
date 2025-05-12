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
 * 类型相关方法
 */
declare const typeUtils: {
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
    getType(obj: any): string;
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
    isNumber(obj: any): boolean;
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
    isBool(obj: any): boolean;
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
    isString(obj: any): boolean;
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
    isObject(obj: any): boolean;
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
    isArray(obj: any): boolean;
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
    isFunction(obj: any): boolean;
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
    isNull(obj: any): boolean;
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
    isUndefined(obj: any): boolean;
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
    isNullOrUndefined(obj: any): boolean;
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
    isDate(obj: any): boolean;
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
    isRegExp(obj: any): boolean;
};

/**
 * 逻辑判断相关方法
 */
declare const testUtils: {
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
    isInteger(obj: string | number): boolean;
    /**
    * 判断是否小数以及多少位的小数
    *
    * @param {string | number} obj 传入数据
    * @param decimalPlaces 几位小数
    * @return {Boolean} 是否小数
    * @example
    * ``` js
    * testUtils.isFloat("12.01") // true
    * testUtils.isFloat(12.0) // false 会转化成12
    * testUtils.isFloat(12.00,2) // false 会转化成12，整数直接返回了false
    * testUtils.isFloat(12.11,2) // true
    * ```
    */
    isFloat(obj: string | number, decimalPlaces?: number): boolean;
    /**
     * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
     * @param obj 传入数据
     * @returns 是否为普通对象
     */
    isPlainObject(obj: any): boolean;
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
    isSingleEmpty(value: any): boolean;
    /**
     * 判断一个或多个值是否全部为空
     * 0, false 均为有值, 返回 false
     * "" 为无值，返回 true
     * @param values 传入多个数据
     * @returns {Boolean} 是否为空
     * @example
     * ```typescript
     * testUtils.isEmpty("") // true
     * testUtils.isEmpty(0) // false
     * testUtils.isEmpty(false) // false
     * testUtils.isEmpty([1], {}); // false
     * testUtils.isEmpty([], {}) // true
     * ```
     */
    isEmpty(...values: any[]): boolean;
    /**
     * 判断一个对象中的所有字段是否全为空
     * 非对象类型返回false
     * @param Obj 传入对象
     * @returns {Boolean} 是否为空
     * @example
     * ```typescript
     * testUtils.isObjAllFieldEmpty('{}') // false
     * testUtils.isObjAllFieldEmpty({}) // true
     * testUtils.isObjAllFieldEmpty({a: ''}) // true
     * testUtils.isObjAllFieldEmpty({a: undefined}) // true
     * testUtils.isObjAllFieldEmpty({a: null}) // true
     * testUtils.isObjAllFieldEmpty({a: undefined}) // true
     * testUtils.isObjAllFieldEmpty({ a: '12', b: 1 }) // false
     *
     * ```
     */
    isObjAllFieldEmpty(Obj: {
        [key: string]: any;
    }): boolean;
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
    isNotEmpty(...values: any[]): boolean;
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
    isZero(value: any): boolean;
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
    isNum(value: any): boolean;
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
     * testUtils.isNonNegInt('-12.12') // false
     * ```
     */
    isNonNegInt(value: any): boolean;
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
    isLetter(value: any): boolean;
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
    isLetterOrNum(value: any): boolean;
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
    isChinese(value: any): boolean;
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
    isCode(value: any, len?: number): boolean;
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
    isEmail(value: any): boolean;
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
    isMobile(value: any): boolean;
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
    isUrl(value: any): boolean;
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
    isDate(value: any): boolean;
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
    isDateISO(value: any): boolean;
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
    isIdCard(value: any): boolean;
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
    isCarNo(value: any): boolean;
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
    isInRange(value: string | number, param: number[]): boolean;
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
    isInLength(value: string | any[], param: number[]): boolean;
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
    isLandline(value: any): boolean;
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
    isJsonString(value: any): boolean;
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
    isPromise(value: any): boolean;
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
    isImage(value: string): boolean;
    /**
     * 判断是否为gif格式
     * @param value
     * @returns {Boolean}
     * @example
     * ```
     * testUtils.isImage('123.png') // false
     * testUtils.isImage('123.gif?a=1&b=2) // true
     * ```
     */
    isGif(value: string): boolean;
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
    isVideo(value: string): boolean;
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
    isBankCard(value: any): boolean;
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
    isVersion(value: string): boolean;
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
    isArray(obj: any): boolean;
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
    isFunction(obj: any): boolean;
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
    isNull(obj: any): boolean;
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
    isUndefined(obj: any): boolean;
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
    isNullOrUndefined(obj: any): boolean;
    /**
     * 深度比较2个对象是否相等
     * @param obj1 {Object} obj 对象
     * @param obj2 {Object} obj 对象
     * @returns {Boolean}
     * @example
     * ```js
     * testUtils.isDeepEqual({ test1: 1, test2: 2 }, { test2: 2, test1: 1 }) // true
     * testUtils.isDeepEqual([1, 2], [1, 2]) // true
     * testUtils.isDeepEqual([2, 1], [1, 2]) // false
     * ```
     */
    isDeepEqual(obj1: any, obj2: any): boolean;
};

/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier)
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 * @example
 * ``` js
 * guid(32) // ui77cGoBfjlj68FiDkQm7Ivpyei7t3dA
 * guid(24) // uL70tjNPlMvbXCcoHtzeuv50
 * ```
 */
declare function guid(len?: number, firstU?: boolean, radix?: any): string;

/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
declare function to(promise: Promise<any>): Promise<any>;

/**
 * 生成指定范围的随机数
 * @param min 最小值, >= 0
 * @param max 最大值, > 0
 * @example
 * ``` js
 * random(0, 100) // 14 生成0-100之间的随机数
 * random(10,20) // 13 生成10-20之间的随机数
 * ```
 */
declare function random(min: number, max: number): number;

/**
 * 功能：对 同一个 promise 的多次调用，保证只调用一次，待第一次调用成功后，其余的才继续执行
 * 一般使用方法：
 * 采用 队列的使用进行处理，保证多次调用只会请求一次
 * 首次调用 那么会创建队列，之后的请求，会使用队列进行阻塞，待第一次完成，再继续执行
 * 1. 首次调用，使用的是请求返回的结果
 * 2. 队列中的调用，继续执行，应该使用的是缓存中的结果
 */
type InterceptFunction = (arg: any) => Promise<any>;
declare class PromiseIntercept {
    /** 是否是在请求等待中*/
    private isHttp;
    /** 是否已经加载过 */
    private isHaveInit;
    /** 是否只执行一次，true：执行成功后往后在调用都不会拦截了 */
    private once;
    /** 等待时进入的放入数组中，执行后在释放 */
    private eventTask;
    /** 传入的拦截方法走了.then() 还是 .catch() */
    private awaitInterceptState;
    /** 拦截器的成功信息 */
    private handlerRes;
    /** 拦截器的失败信息 */
    private handlerErr;
    /** 拦截的方法 promise,必须存在resolve或者reject */
    private interceptFun;
    /**
     * @Description
     * 对 同一个 promise 的多次调用，保证只调用一次，待第一次调用成功后，其余的才继续执行
     * 一般使用方法：
     * 采用 队列的使用进行处理，保证多次调用只会请求一次
     * 首次调用 那么会创建队列，之后的请求，会使用队列进行阻塞，待第一次完成，再继续执行
     * 1. 首次调用，使用的是请求返回的结果
     * 2. 队列中的调用，继续执行，应该使用的是缓存中的结果
     * @param {InterceptFunction} interceptFun - 需要被拦截的请求函数，它必须返回一个 Promise。
     * @param {Object} param1 - 可选参数对象，once 默认值false
     * @example 使用示例
     * ``` js
     *    // 提供给外部调用的方法
     *    async function syncServerTime(isSecond = false) {
     *      return new Promise(async(resolve, reject) => {
     *        const [err, res] = await uni.hua5Utils.to(queueSyncServerTime.handler(isSecond))
     *        // 请求的最终结果
     *        resolve(res)
     *     })
     *   }
     *   // 采用队列的方式进行网络请求
     *   const queueSyncServerTime = new InterceptQueue(awaitSyncServerTime)
     *   // 请求方法
     *   async function awaitSyncServerTime(isSecond) {
     *     return new Promise(async(resolve, reject) => {
     *       const [err, res] = await getServerTimestamp()
     *       if (err) resolve("")
     *       resolve(res)
     *     })
     *   }
     * ```
     */
    constructor(interceptFun: InterceptFunction, { once }?: {
        once?: boolean | undefined;
    });
    /**
     * @Description 拦截函数
     * @param arg 请求参数
     * @returns {Promise<any>} 请求结果
     */
    handler(arg?: any): Promise<unknown>;
    private loading;
}

type DictArrayItem = {
    [key: string]: any;
};
type DictData = DictArrayItem[] | {
    [key: string]: any;
};
interface DictTransformResult {
    obj: {
        [key: string]: any;
    };
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
declare function dictTransform(data: DictData, keyName?: string, valueName?: string): DictTransformResult;

/**
 * 主要概念：
 * 时间：date, new Date(...), 其实也就是某一时刻
 * 时间戳：Timestamp, 以毫秒数字表示。一个时间戳对应的其实也就是一个时刻
 *        unix 时间戳精确到秒，为10位。其他精确到毫秒，为13位
 * 时间字符：可能为时间，也可能为时间戳
 */
declare const timeUtils: {
    /**
     * 当前时间的完整显示
     * timeFormat(null, "yyyy-mm-dd hh:MM:ss")
     * @returns yyyy-mm-dd hh:MM:ss 格式时间
     * @example
     * ```js
     * timeUtils.nowFullTime() // 2024-01-01 17:11:35
     * ```
     */
    nowFullTime(): string;
    /**
     * 当前时间时间戳
     * @param isUnix 普通的为 13位(包含毫秒); unix 的为10位，不包含毫秒
     * @returns 时间戳数值
     * @example
     * ```js
     * timeUtils.nowTimestamp() // 1723624829143
     * timeUtils.nowTimestamp(false) // 1723624829
     * ```
     */
    nowTimestamp(isUnix?: boolean): number;
    /**
     * 转时间
     * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
     * date不传或传入null 表示取当前时间
     * @example
     * ```js
     * timeUtils.toDate('1710486738911') // 2024-03-15T07:12:18.911Z
     * timeUtils.toDate(null) // 2024-08-14T08:44:22.991Z
     * ```
     */
    toDate(dateTime?: string | number | Date | null | undefined): Date;
    /**
     * 转时间戳
     * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
     *        date不传或传入null 表示取当前时间
     * @param {boolean} isUnix 是否为unix格式
     * @example
     * ```js
     * timeUtils.toTimestamp(null) // 1723625151828
     * timeUtils.toTimestamp(null,true) // 1723625151
     * timeUtils.toTimestamp('2024-02-15 15:12:18') // 1707981138000
     * ```
     */
    toTimestamp(dateTime: string | number | Date | null | undefined, isUnix?: boolean): number;
    /**
     * 格式化时间，输出时间字符串, yyyy-mm-dd hh:MM:ss
     * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
     * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd。yyyy-mm-dd hh:MM:ss 显示时分秒
     * @returns {string} 返回格式化后的字符串
     * @example
     * ```js
     * timeUtils.timeFormat('1710486738911','yyyy-mm-dd hh:MM:ss') // 2024-03-15 15:12:18
     * timeUtils.timeFormat('1710486738911','mm-dd hh:MM') // 03-15 15:12
     * timeUtils.timeFormat('1710486738911','yyyy年mm月dd日 hh时MM分') // 2024年03月15日 15时12分
     * ```
     */
    timeFormat(dateTime?: string | number | Date | null | undefined, formatStr?: string, emptyResult?: string): string;
    /**
     * 距离现在多久
     * @param {String|Number|dateTime} date 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
     * @param {String|Boolean} format
     * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
     * 如果为布尔值false，无论什么时间，都返回多久以前的格式
     * @returns {string} 转化后的内容
     * @example
     * ```js
     * timeUtils.timeFrom(timeUtils.nowFullTime()) // 刚刚
     * timeUtils.timeFrom(timeUtils.nowTimestamp() - 3600000) // 1小时前
     * ```
     */
    timeFrom(date?: string | number | Date | null | undefined, format?: string, emptyResult?: string): string;
    /**
     * 年月日 +  00:00:00
     * @param dateTime date不传或传入null 表示取当前时间
     * @returns 年月日 +  00:00:00
     * @example
     * ```js
     * timeUtils.startTime('1710486738911') // 2024-03-15 00:00:00
     * timeUtils.startTime('') // 2024-08-14 00:00:00
     * ```
     */
    startTime(dateTime: string | number | Date | null | undefined): string;
    /**
     * 年月日 +  23:59:59
     * @param dateTime date不传或传入null 表示取当前时间
     * @returns 年月日 +  23:59:59
     * @example
     * ```js
     * timeUtils.endTime('2024-02-15 15:12:18') // 2024-02-15 23:59:59
     * timeUtils.startTime('') // 2024-08-14 23:59:59
     * ```
     */
    endTime(dateTime: string | number | Date | null | undefined): string;
    /**
     * 转时间加文字 例：(2022-12-01 转 2022年12月01日)  ||  (12-01 转 12月01日)；
     * @param {String|Number} dateTime 时间戳，时间字符串（仅支持  转  年月日字符）
     * @param {Boolean} isYear 是否有年 默认为true 转 2022年10月12日, false 转 10月12日
     * @returns {String} 返回格式化后的字符串
     * @example
     * ```js
     * timeUtils.chineseDate('2023-12-01',false) // 12月01日
     * timeUtils.chineseDate('2023-12-01') // 2023年12月01日
     * ```
     */
    chineseDate(dateTime?: string | number | Date | null | undefined, isYear?: boolean): string;
    /**
     * 根据当前时间计算出传递的时间是几天前或者几天后
     * @param {String} dateString 时间字符串
     * @returns {string} 计算后的返回结果
     * @example
     * ```js
     * timeUtils.beforeOrAfterDay('2024-10-21 23:11:11') // 3天前
     * timeUtils.beforeOrAfterDay('2024-10-24 23:11:11') // 今天
     * timeUtils.beforeOrAfterDay('2024-11-24 23:11:11') // 31天后
     * ```
     */
    beforeOrAfterDay(dateString: string): string;
    /**
     * 当前时间和传递的时间进行比较，传递的时间大于当前时间返回true 小于则返回false
     * @param {String} dateString 时间字符串
     * @returns {boolean}
     * @example
     * ```js
     * timeUtils.isAfterNow('2024-10-21 23:11:11') // false
     * timeUtils.isAfterNow('2024-10-24 23:11:11') // true
     * timeUtils.isAfterNow('2024-11-24 23:11:11') // true
     * ```
     */
    isAfterNow(dateString: string): boolean;
};

interface CancelOptions {
    upcomingOnly?: boolean;
}

interface Cancel {
    cancel: (options?: CancelOptions) => void;
}

interface NoReturn<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): void;
}

interface ThrottleOptions {
    noTrailing?: boolean;
    noLeading?: boolean;
    debounceMode?: boolean;
}

interface DebounceOptions {
    atBegin?: boolean;
}

type throttle<T extends (...args: any[]) => any> = NoReturn<T> & Cancel;

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * throttled-function is executed.
 *
 * @param options
 * An object to configure options.
 *
 * @param options.noTrailing
 * Optional, defaults to false. If noTrailing is true, callback will only execute
 * every `delay` milliseconds while the throttled-function is being called. If
 * noTrailing is false or unspecified, callback will be executed one final time
 * after the last throttled-function call. (After the throttled-function has not
 * been called for `delay` milliseconds, the internal counter is reset)
 *
 * @param options.noLeading
 * Optional, defaults to false. If noLeading is false, the first throttled-function
 * call will execute callback immediately. If noLeading is true, the first the
 * callback execution will be skipped. It should be noted that callback will never
 * executed if both noLeading = true and noTrailing = true.
 *
 * @param options.debounceMode If `debounceMode` is true (at begin), schedule
 * `callback` to execute after `delay` ms. If `debounceMode` is false (at end),
 * schedule `callback` to execute after `delay` ms.
 *
 * @return
 * A new, throttled, function.
 */
declare function throttle<T extends (...args: any[]) => any>(
    delay: number,
    callback: T,
    options?: ThrottleOptions,
): throttle<T>;
type debounce<T extends (...args: any[]) => any> = NoReturn<T> & Cancel;

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * debounced-function is executed.
 *
 * @param options
 * An object to configure options.
 *
 * @param options.atBegin
 * If atBegin is false or unspecified, callback will only be executed `delay`
 * milliseconds after the last debounced-function call. If atBegin is true,
 * callback will be executed only at the first debounced-function call. (After
 * the throttled-function has not been called for `delay` milliseconds, the
 * internal counter is reset).
 *
 * @return
 * A new, debounced function.
 */
declare function debounce<T extends (...args: any[]) => any>(
    delay: number,
    callback: T,
    options?: DebounceOptions,
): debounce<T>;

declare namespace QueryString {
    type defaultEncoder = (str: any, defaultEncoder?: any, charset?: string) => string;
    type defaultDecoder = (str: string, decoder?: any, charset?: string) => string;

    type BooleanOptional = boolean | undefined;

    interface IStringifyBaseOptions {
        delimiter?: string | undefined;
        strictNullHandling?: boolean | undefined;
        skipNulls?: boolean | undefined;
        encode?: boolean | undefined;
        encoder?:
          | ((str: any, defaultEncoder: defaultEncoder, charset: string, type: "key" | "value") => string)
          | undefined;
        filter?: Array<string | number> | ((prefix: string, value: any) => any) | undefined;
        arrayFormat?: "indices" | "brackets" | "repeat" | "comma" | undefined;
        indices?: boolean | undefined;
        sort?: ((a: string, b: string) => number) | undefined;
        serializeDate?: ((d: Date) => string) | undefined;
        format?: "RFC1738" | "RFC3986" | undefined;
        encodeValuesOnly?: boolean | undefined;
        addQueryPrefix?: boolean | undefined;
        charset?: "utf-8" | "iso-8859-1" | undefined;
        charsetSentinel?: boolean | undefined;
    }

    type IStringifyDynamicOptions<AllowDots extends BooleanOptional> = AllowDots extends true
      ? { allowDots?: AllowDots, encodeDotInKeys?: boolean }
      : { allowDots?: boolean, encodeDotInKeys?: false }

    type IStringifyOptions<AllowDots extends BooleanOptional = undefined> = IStringifyBaseOptions & IStringifyDynamicOptions<AllowDots>

    interface IParseBaseOptions {
        comma?: boolean | undefined;
        delimiter?: string | RegExp | undefined;
        depth?: number | false | undefined;
        decoder?:
          | ((str: string, defaultDecoder: defaultDecoder, charset: string, type: "key" | "value") => any)
          | undefined;
        arrayLimit?: number | undefined;
        parseArrays?: boolean | undefined;
        plainObjects?: boolean | undefined;
        allowPrototypes?: boolean | undefined;
        allowSparse?: boolean | undefined;
        parameterLimit?: number | undefined;
        strictNullHandling?: boolean | undefined;
        ignoreQueryPrefix?: boolean | undefined;
        charset?: "utf-8" | "iso-8859-1" | undefined;
        charsetSentinel?: boolean | undefined;
        interpretNumericEntities?: boolean | undefined;
        allowEmptyArrays?: boolean | undefined;
        duplicates?: 'combine' | 'first' | 'last' | undefined;
    }

    type IParseDynamicOptions<AllowDots extends BooleanOptional> = AllowDots extends true
      ? { allowDots?: AllowDots, decodeDotInKeys?: boolean }
      : { allowDots?: boolean, decodeDotInKeys?: false }

    type IParseOptions<AllowDots extends BooleanOptional = undefined> = IParseBaseOptions & IParseDynamicOptions<AllowDots>

    interface ParsedQs {
        [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
    }

    function stringify(obj: any, options?: IStringifyOptions<BooleanOptional>): string;
    function parse(str: string, options?: IParseOptions<BooleanOptional> & { decoder?: never | undefined }): ParsedQs;
    function parse(str: string | Record<string, string>, options?: IParseOptions<BooleanOptional>): { [key: string]: unknown };
}

/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
declare const version = "3.7.7";
/**
 * @deprecated use lowercase `version`.
 */
declare const VERSION = "3.7.7";
/**
 * polyfill version of `btoa`
 */
declare const btoaPolyfill: (bin: string) => string;
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
declare const _btoa: (bin: string) => string;
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
declare const fromUint8Array: (u8a: Uint8Array, urlsafe?: boolean) => string;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
declare const utob: (u: string) => string;
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
declare const encode: (src: string, urlsafe?: boolean) => string;
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
declare const encodeURI: (src: string) => string;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
declare const btou: (b: string) => string;
/**
 * polyfill version of `atob`
 */
declare const atobPolyfill: (asc: string) => string;
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
declare const _atob: (asc: string) => string;
/**
 * converts a Base64 string to a Uint8Array.
 */
declare const toUint8Array: (a: string) => Uint8Array;
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
declare const decode: (src: string) => string;
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
declare const isValid: (src: any) => boolean;
/**
 * extend String.prototype with relevant methods
 */
declare const extendString: () => void;
/**
 * extend Uint8Array.prototype with relevant methods
 */
declare const extendUint8Array: () => void;
/**
 * extend Builtin prototypes with relevant methods
 */
declare const extendBuiltins: () => void;
declare const gBase64: {
    version: string;
    VERSION: string;
    atob: (asc: string) => string;
    atobPolyfill: (asc: string) => string;
    btoa: (bin: string) => string;
    btoaPolyfill: (bin: string) => string;
    fromBase64: (src: string) => string;
    toBase64: (src: string, urlsafe?: boolean) => string;
    encode: (src: string, urlsafe?: boolean) => string;
    encodeURI: (src: string) => string;
    encodeURL: (src: string) => string;
    utob: (u: string) => string;
    btou: (b: string) => string;
    decode: (src: string) => string;
    isValid: (src: any) => boolean;
    fromUint8Array: (u8a: Uint8Array, urlsafe?: boolean) => string;
    toUint8Array: (a: string) => Uint8Array;
    extendString: () => void;
    extendUint8Array: () => void;
    extendBuiltins: () => void;
};

declare const base64_d_VERSION: typeof VERSION;
declare const base64_d_atobPolyfill: typeof atobPolyfill;
declare const base64_d_btoaPolyfill: typeof btoaPolyfill;
declare const base64_d_btou: typeof btou;
declare const base64_d_decode: typeof decode;
declare const base64_d_encode: typeof encode;
declare const base64_d_encodeURI: typeof encodeURI;
declare const base64_d_extendBuiltins: typeof extendBuiltins;
declare const base64_d_extendString: typeof extendString;
declare const base64_d_extendUint8Array: typeof extendUint8Array;
declare const base64_d_fromUint8Array: typeof fromUint8Array;
declare const base64_d_isValid: typeof isValid;
declare const base64_d_toUint8Array: typeof toUint8Array;
declare const base64_d_utob: typeof utob;
declare const base64_d_version: typeof version;
declare namespace base64_d {
  export { gBase64 as Base64, base64_d_VERSION as VERSION, _atob as atob, base64_d_atobPolyfill as atobPolyfill, _btoa as btoa, base64_d_btoaPolyfill as btoaPolyfill, base64_d_btou as btou, base64_d_decode as decode, base64_d_encode as encode, base64_d_encodeURI as encodeURI, encodeURI as encodeURL, base64_d_extendBuiltins as extendBuiltins, base64_d_extendString as extendString, base64_d_extendUint8Array as extendUint8Array, decode as fromBase64, base64_d_fromUint8Array as fromUint8Array, base64_d_isValid as isValid, encode as toBase64, base64_d_toUint8Array as toUint8Array, base64_d_utob as utob, base64_d_version as version };
}

/**
 * 对象相关工具方法
 */
declare const objectUtils: {
    /**
     * 对象转url参数
     * 转为普通的 连接参数, 默认不编码，从而能正常传递中文
     * @param obj 对象
     * @param {boolean} addPrefix  是否添加 ? 前缀
     * @param {boolean} encode 是否使用 decodeURIComponent 编码
     * @param {qs.IStringifyOptions} option qs.stringify第二个参数
     * @returns {string} 转换后的字符串
     * @example
     * ``` js
     * objectUtils.toUrlParams({ a: 1 }) // ?a=1
     * objectUtils.toUrlParams({ a: '哈哈' }, false) // a=哈哈
     * objectUtils.toUrlParams({ a: '哈哈' }, false, true) // a=%E5%93%88%E5%93%88
     * objectUtils.toUrlParams({ a: 1, b: 2 }, true, true, { delimiter: '^' }) // ?a=1^b=2
     * ```
     */
    toUrlParams(obj: any, addPrefix?: boolean, encode?: boolean, option?: QueryString.IStringifyOptions): string;
    /**
     * 对象转url参数
     * 转为编码后的url参数
     * @param obj 对象
     * @param {string} prefix 前缀，默认值？
     * @param {string} key 前缀后的固定字符串，默认值encodeParams
     * @returns {string} 转换后的字符串
     * @example
     * ``` js
     * objectUtils.toEncodeParams({ a: 1 }) // ?encodeParams=%7B%22a%22%3A1%7D
     * objectUtils.toEncodeParams({ a: '哈哈' }) // ?encodeParams=%7B%22a%22%3A%22%E5%93%88%E5%93%88%22%7D
     * objectUtils.toEncodeParams({ a: '哈哈' }, '^') // ^encodeParams=%7B%22a%22%3A%22%E5%93%88%E5%93%88%22%7D
     * objectUtils.toEncodeParams({ a: 1, b: 2 }, '^', 'test) // ^test=%7B%22a%22%3A%22%E5%93%88%E5%93%88%22%7D
     * ```
     */
    toEncodeParams(obj: any, prefix?: string, key?: string): string;
    /**
     * 深拷贝
     * @param obj 对象
     * @returns {any} 深拷贝后的对象
     * @example
     * ``` js
     * const obj = { a: 1, b: [1, 2, 3], c: { d: 4 }}
     * const clonedObj = objectUtils.deepClone(obj)
     * delete obj.a
     * console.log(clonedObj) // { a: 1, b: [1, 2, 3], c: { d: 4 }}
     * ```
     */
    deepClone(obj: any): any;
    /**
     * 深度合并
     * @param {object} target 目标对象
     * @param {object} source 源对象
     * @returns {object} 拷贝并合并后的对象
     * @example
     * ``` js
     * const obj1 = { a: 1, b: { c: 3, d: 4 }}
     * const obj2 = { b: { c: 5, e: 6 }, f: 7 }
     * const result = objectUtils.deepMerge(obj1, obj2) // { a: 1, b: { c: 5, d: 4, e: 6 }, f: 7}
     * ```
     */
    deepMerge(target: any, source: any): any;
};

/**
 * 数字相关工具方法
 */
declare const numberUtils: {
    /**
     * 将数字转化为带有单位的字符串或对象。如果数字大于或等于 10000，单位为 'w'；如果数字大于或等于 1000，单位为 'k'。
     *
     * @param {string | number} num - 需要转化的数字。
     * @param {boolean} isAddUnit - true，返回带有单位的字符串；false，则返回一个包含数字和单位的对象。
     * @returns {((string | number) | { num: string | number, unit: string })} 转换后带单位的数字, 或者包含数字和单位的对象。
     * @example
     * ``` js
     * numberUtils.tokw('') // 0
     * numberUtils.tokw('1') // '1'
     * numberUtils.tokw('1000') // '1k'
     * numberUtils.tokw('1000000') // '100w'
     * numberUtils.tokw(1000000, false) // { num: 100, unit: "w" }
     * numberUtils.tokw(1000, false) // { num: 1, unit: "k" }
     * ```
     */
    tokw(num: string | number, isAddUnit?: boolean): string | number | {
        num: string | number;
        unit: string;
    };
    /**
     * 为数字添加小数点，并保留2位数，如果已经有小数点则不处理
     * @param {number | string} num - 需要转换的数字。
     * @returns {string} 转换后的数字。
     * @example
     * ``` js
     * numberUtils.addDot(0) // '0.00'
     * numberUtils.addDot(0.001) // '0.001'
     * numberUtils.addDot(1000) // '1000.00'
     * numberUtils.addDot(1000.001) // '1000.001'
     * numberUtils.addDot(1.000000) // '1.00'
     * numberUtils.addDot(1.000100) // '1.0001'
     * numberUtils.addDot('1') // '1.00'
     * numberUtils.addDot('1.000000') // '1.000000'
     * ```
     */
    addDot(num: number | string): string;
    /**
     * 加法运算
     * @param {number | string} arg1 - 被加数
     * @param {number | string} arg2 - 加数
     * @returns {string} 加法运算的结果
     * @example
     * ``` js
     * numberUtils.accAdd(1, 2) // '3.00'
     * numberUtils.accAdd(1.000000, 2.000000) // '3.00'
     * numberUtils.accAdd(1.001, 2.01) // '3.011'
     * ```
     */
    accAdd(arg1: number | string, arg2: number | string): string;
    /**
     * 减法运算
     * @param {number | string} arg1 - 被减数
     * @param {number | string} arg2 - 减数
     * @returns {string} 减法运算结果
     * @example
     * ``` js
     * numberUtils.accSub(1, 2) // '-1.00'
     * numberUtils.accSub(1.000000, 2.000000) // '-1.00'
     * numberUtils.accSub(1.001, 2.01) // '-1.009'
     * ```
     */
    accSub(arg1: number | string, arg2: number | string): string;
    /**
     * 乘法运算
     * @param {number | string} arg1 被乘数
     * @param {number | string} arg2 乘数
     * @return {number} 乘积结果
     * @example
     * ``` js
     * numberUtils.accMul(1, 2) // 2
     * numberUtils.accMul(1.001, 2.01) // 2.01201
     * numberUtils.accMul(2.00, 1.00) // 2
     * numberUtils.accMul(2.00, 1.001) // 2.002
     * ```
     */
    accMul(arg1: number | string, arg2: number | string): number;
    /**
     * 除法运算
     * @param arg1 被除数
     * @param arg2 除数
     * @param retainNum 保留小数点后的位数, 默认3
     * @returns {string} 商
     * @example
     * ``` js
     * numberUtils.accDiv(1, 2) // '0.500'
     * numberUtils.accDiv(1.001, 2.01) // '0.498'
     * numberUtils.accDiv(1.05, 50) // '0.021'
     * ```
     */
    accDiv(arg1: number | string, arg2: number | string, retainNum?: number): string;
    /**
     * 数字转换为百分比
     * @param {number | string} num - 要转换为百分比的数字。
     * @param {number} fiexd - 保留的小数位数，默认为 4。
     * @returns {string | number} 返回转换后的百分比值，如果输入无效或小于等于 0，则返回 0。
     * @example
     * ``` js
     * numberUtils.to100Rate(20) // '0.2000'
     * numberUtils.to100Rate(0.2) // '0.0020'
     * numberUtils.to100Rate(0.02) // '0.0002'
     * numberUtils.to100Rate(-2) // 0
     * numberUtils.to100Rate(20, 2) // '0.20'
     * ```
     */
    to100Rate(num: number | string, fiexd?: number): string | number;
    /**
     * 百分比转换为数字
     * @param {number | string} rate - 要转换为数字的百分比值。
     * @returns {number} 返回转换后的数字值，如果输入无效或小于等于 0，则返回 0。
     * @example
     * ``` js
     * numberUtils.to100Num(20.2) // 2020
     * numberUtils.to100Num(0.2) // 20
     * numberUtils.to100Num(0.02) // 2
     * numberUtils.to100Num(-2) // 0
     * ```
     */
    to100Num(rate: number | string): number;
};

/**
 * string 相关工具方法
 */
declare const stringUtils: {
    /**
     * 翻转字符串
     * @param {string} str 字符串
     * @return {string} 翻转的结果
     * @example
     * ``` js
     * stringUtils.reverse("12") // '21'
     * stringUtils.reverse("测试") // '试测'
     * ```
     */
    reverse(str: string): string;
    /**
     * 将字符串指定位置的字符替换为指定字符
     * @param {string} str 字符串
     * @param {number} start 在字符串开始处保留的字符数量, 默认4
     * @param {number} end 在字符串结束处保留的字符数量, 默认4
     * @param {string} replaceStr 替换的字符串, 默认为*
     * @return {string} 替换后的字符串
     * @example
     * ``` js
     * stringUtils.hideChar("12345678910") // '1234***8910'
     * stringUtils.hideChar("12345678910",3,4) // '123****8910'
     * stringUtils.hideChar("12345678910", 5, 4, '^') // '12345^^8910'
     * ```
     */
    hideChar(str: string, start?: number, end?: number, replaceStr?: string): string;
    /**
     * 金额 添加 + 或 - 号
     * @param {number | string} val 金额
     * @param {string} unit 单位, 只能是 + 或 -, 默认 +
     * @returns {string} 带符号的金额
     * @example
     * ``` js
     * stringUtils.moneyUnit("12") // '+12'
     * stringUtils.moneyUnit("12", '-') // '-12'
     * stringUtils.moneyUnit("12", ' ') // ''
     * stringUtils.moneyUnit("-12") // '-12'
     * stringUtils.moneyUnit("+12") // '+12'
     * stringUtils.moneyUnit(-12,'+') // '-12'
     * stringUtils.moneyUnit(+12,' ') // ''
     * stringUtils.moneyUnit(12,'-') // '-12'
     * ```
     */
    moneyUnit(val: number | string, unit?: string): string;
    /**
     * 去除字符串指定位置的空格
     * @param {string} str 字符串
     * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
     * @returns {string} 去除空格后的字符串
     * @example
     * ``` js
     * stringUtils.trim("  asad ") // 'asad'
     * stringUtils.trim("  asad ", ' ') // '  asad '
     * stringUtils.trim("  asad ", left) // 'asad '
     * stringUtils.trim("  asad ",right) // '  asad'
     * stringUtils.trim("  asad ",both) // 'asad'
     * stringUtils.trim('  a s ad ','all') // 'asad'
     * ```
     */
    trim(str: string, pos?: string): string;
    /**
     * 去除字符左边空格
     * @param {string} str 字符串
     * @returns {string} 去除空格后的字符串
     * @example
     * ``` js
     * stringUtils.trimLeft("  asad ") // 'asad '
     * stringUtils.trimLeft("  asad ") // 'asad '
     * ```
     */
    trimLeft(str: string): string;
    /**
     * 去除字符右边空格
     * @param {string} str 字符串
     * @returns {string} 去除空格后的字符串
     * @example
     * ``` js
     * stringUtils.trimRight("  asad ") // '  asad'
     * stringUtils.trimRight("asad  ") // 'asad'
     * ```
     */
    trimRight(str: string): string;
    /**
     * 去除字符中的所有空格
     * @param {string} str 字符串
     * @returns {string} 去除空格后的字符串
     * @example
     * ``` js
     * stringUtils.trimAll("  asad ") // 'asad'
     * stringUtils.trimAll(" as ad  ") // 'asad'
     * ```
     */
    trimAll(str: string): string;
    /**
     * 去除字符中的指定字符
     * @param {string} str 字符串
     * @param {string} char 要去除的字符
     * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
     * @returns {string} 去除空格后的字符串
     * @example
     * ``` js
     * stringUtils.trimChar("-asad-",'-') // 'asad'
     * stringUtils.trimChar(-asad-", '-', 'left') // 'asad-'
     * stringUtils.trimChar("-asad-", '-', 'right') // '-asad'
     * stringUtils.trimChar("-asad-", '-', 'both') // 'asad'
     * stringUtils.trimChar("-a-sad-", '-', 'all') // 'asad'
     * stringUtils.trimChar(" a sad ", ' ', 'all') // 'asad'
     * ```
     */
    trimChar(str: string, char: string, pos?: string): string;
    /**
     * 首字母大写
     * @param {string} str 字符串
     * @returns {string} 首字母大写后的字符串
     * @example
     * ``` js
     * stringUtils.firstLetterToUpper(asa) // 'Asa'
     * stringUtils.firstLetterToUpper("哈哈哈") // '哈哈哈'
     * stringUtils.firstLetterToUpper("hhhh") // 'Hhhh'
     * ```
     */
    firstLetterToUpper(str: string): string;
    /**
     * 将url参数字符串转换为对象
     * @param {string} str url参数字符串
     * @param {qs.IParseOptions} option qs.parse的配置项
     * @returns {object} 转换后的url参数对象
     * @example
     * ``` js
     * stringUtils.fromUrlParams("?a=1&b[c]=3&b[d]=4") // { a: '1', b: { c: '3', d: '4' }}
     * stringUtils.fromUrlParams("?a=1^b[c]=3^b[d]=4",{ delimiter: '^' }) // { a: '1', b: { c: '3', d: '4' }}
     * stringUtils.fromUrlParams("a&b=", { strictNullHandling: true }) // { a: null, b: '' }
     * stringUtils.fromUrlParams("a&b=") // { a: '', b: '' }
     * ```
     */
    fromUrlParams(str: string, option?: QueryString.IParseOptions): {
        [key: string]: unknown;
    };
    /**
     * 是否为数值型字符串
     * @param {string} str 字符串
     * @returns {boolean}
     * @example
     * ``` js
     * stringUtils.isNumeric("123") // true
     * stringUtils.isNumeric("3213a") // false
     * stringUtils.isNumeric("123.11") // true
     * ```
     */
    isNumeric(str: string): boolean;
    /**
     * 将数值型字符串转换为固定小数位数的数值型字符串, 无法转换默认输出 '0.00'
     * @param {string} str - 需要转换的输入字符串
     * @param {number} fixed - 结果数字的小数位数，默认为2
     * @returns {string} - 返回固定小数位数的数值型字符串
     * @example
     * ``` js
     * stringUtils.toFixed("123") // '123.00'
     * stringUtils.toFixed("123.120,3") // '123.120'
     * stringUtils.toFixed("123.1205",3) // '123.121'
     * stringUtils.toFixed("123ad") // '0.00'
     * ```
     */
    toFixed(str: string, fixed?: number): string;
    /**
     * 加法运算
     * @param {number | string} arg1 - 被加数
     * @param {number | string} arg2 - 加数
     * @returns {string} 加法运算的结果
     * @example
     * ``` js
     * stringUtils.accAdd('1', '2') // '3.00'
     * stringUtils.accAdd('1.000000', '2.000000') // '3.000000'
     * stringUtils.accAdd('1.001', '2.01') // '3.011'
     * ```
     */
    accAdd(arg1: string | number, arg2: string | number): string;
    /**
     * 减法运算
     * @param {number | string} arg1 - 被减数
     * @param {number | string} arg2 - 减数
     * @returns {string} 减法运算结果
     * @example
     * ``` js
     * stringUtils.accSub('1', '2') // '-1.00'
     * stringUtils.accSub('1.000000', '2.000000') // '-1.000000'
     * stringUtils.accSub('1.001', '2.01') // '-1.009'
     * ```
     */
    accSub(arg1: string | number, arg2: string | number): string;
    /**
     * 乘法运算
     * @param {number | string} arg1 被乘数
     * @param {number | string} arg2 乘数
     * @return {number} 乘积结果
     * @example
     * ``` js
     * stringUtils.accMul('1', '2') // 2
     * stringUtils.accMul('1.001', '2.01') // 2.01201
     * ```
     */
    accMul(arg1: string | number, arg2: string | number): number;
    /**
     * 除法运算
     * @param arg1 被除数
     * @param arg2 除数
     * @param retainNum 保留小数点后的位数, 默认3
     * @returns {string} 商
     * @example
     * ``` js
     * stringUtils.accDiv('1', '2') // '0.500'
     * stringUtils.accDiv('1.001', '2.01') // '0.498'
     * ```
     */
    accDiv(arg1: string | number, arg2: string | number, retainNum?: number): string;
    /**
     * 比较版本号大小
     * @param {string} v1 版本号1
     * @param {string} v2 版本号2
     * @returns {number} 如果 v1 > v2，返回 1；如果 v1 < v2，返回 -1；如果 v1 = v2，返回 0。
     * @example
     * ``` js
     * stringUtils.compareVersion("1.0.1", "1.1.1") // -1
     * stringUtils.compareVersion("1.1.1", "1.0.1") // 1
     * stringUtils.compareVersion("1.1.1", "1.1.1") // 0
     * ```
     */
    compareVersion(v1: string, v2: string): number;
    /**
     * 将驼峰命名转换为连字符 - 命名
     * @param {string} str 驼峰命名的字符串
     * @param {string} separator 连字符的分隔符，默认为 '-'
     * @returns {string} 连字符命名的字符串
     * @example
     * ``` js
     * stringUtils.camelToKebab('camelToKebab') // 'camel-to-kebab
     * stringUtils.camelToKebab('CamelToKebab', '_') // 'camel_to_kebab'
     * ```
     */
    camelToKebab(str: string, separator?: string): string;
    /**
     * 将连字符命名转换为驼峰命名
     * @param {string} str 连字符命名的字符串
     * @param {string} separator 连字符的分隔符，默认为 '-'
     * @returns {string} 驼峰命名的字符串
     * @example
     * ``` js
     * stringUtils.kebabToCamel('kebab-case-string') // 'kebabCaseString
     * stringUtils.kebabToCamel('kebab_case_string', '_') // 'kebabCaseString'
     * ```
     */
    kebabToCamel(str: string, separator?: string): string;
    /**
     * 数值型字符串转换为百分比
     * @param {number | string} str - 要转换为百分比的数值型字符串。
     * @param {number} fiexd - 保留的小数位数，默认为 4。
     * @returns {string | number} 返回转换后的百分比值，如果输入无效或小于等于 0，则返回 0。
     * @example
     * ``` js
     * stringUtils.to100Rate(20) // '0.2000'
     * stringUtils.to100Rate(0.2) // '0.0020'
     * ```
     */
    to100Rate(str: number | string, fiexd?: number): string | number;
    /**
     * 字符串百分比转换为数值
     * @param {number | string} rate - 要转换为数字的百分比值。
     * @returns {number} 返回转换后的数字值，如果输入无效或小于等于 0，则返回 0。
     * @example
     * ``` js
     * stringUtils.to100Num(20) //2000
     * stringUtils.to100Num(0.2) // 20
     * ```
     */
    to100Num(rate: number | string): number;
    /**
     * 字符串转数组
     * 扩展这个方法的原因，原生split的分割(''.split(',') => [''])，无法得到一个[]
     * @param {string} str 被分割的字符串
     * @param {string} separator 分隔符，默认值 ','
     * @returns {any[]} 分割后的数组
     * @example
     * ``` js
     * stringUtils.hua5Split('') // []
     * stringUtils.hua5Split('123') // ['123']
     * stringUtils.hua5Split('123,456,789,,123,') // ['123', '456', '789', '', '123', '']
     * ```
     */
    hua5Split(str: string, separator?: string): any[];
};

/**
 * 数组相关工具方法
 */
declare const arrayUtils: {
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
    checkIndexLegal(array: any[], index: number): boolean;
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
    distinct(array: any[]): any[];
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
    distinctObjList(array: any[], primaryKey?: string): any[];
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
    shuffleArray(array: any[]): any[];
    /**
     * 合并2个对象数组。
     * 只对第一级进行合并，对象中的数组，后者会覆盖前者。(数组对象合并，必须指定key，因此无法做到递归合并对象数组)
     * @param key, 用于对象对比的key
     * @param source 源数组，最终会被修改
     * @param target 合并目标
     * @returns []
     * @example
     * ```js
     * arrayUtils.mergeObjArrayByKey([{ test: 1, test2: 2, test4: 4, dict: [1, 2, 3] }],[{ test: 1, test2: 4, test3: 3, dict: [1, 4] }],"test")
     * { test: 1, test2: 4, test3: 3, test4: 4, dict: [1, 4] }
     * ```
     */
    mergeObjArrayByKey(source: any[] | undefined, target: any[] | undefined, key: string): any[];
};

declare global {
    interface String {
        /**
       * 翻转字符串
       * @return {string} 翻转的结果
       */
        reverse(): string;
        /**
         * 将字符串指定位置的字符替换为指定字符
         * @param {number} start 在字符串开始处保留的字符数量, 默认4
         * @param {number} end 在字符串结束处保留的字符数量, 默认4
         * @param {string} replaceStr 替换的字符串, 默认为*
         * @return {string} 替换后的字符串
         */
        hideChar(start?: number, end?: number, replaceStr?: string): string;
        /**
         * 金额 添加 + 或 - 号
         * @param {string} unit 单位, 只能是 + 或 -, 默认 +
         * @returns {string} 带符号的金额
         */
        moneyUnit(unit?: string): string;
        /**
         * 去除字符中的所有空格
         * @returns {string} 去除空格后的字符串
         */
        trimAll(): string;
        /**
         * 去除字符中的指定字符
         * @param {string} char 要去除的字符
         * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
         * @returns {string} 去除空格后的字符串
         */
        trimChar(char?: string, pos?: string): string;
        /**
         * 首字母大写
         * @returns {string} 首字母大写后的字符串
         */
        firstLetterToUpper(): string;
        /**
         * 将url参数字符串转换为对象
         * @param {qs.IParseOptions} option qs.parse的配置项
         * @returns {object} 转换后的url参数对象
         */
        fromUrlParams(option?: QueryString.IParseOptions): object;
        /**
         * 是否为数值型字符串
         * @returns {boolean}
         */
        isNumeric(): boolean;
        /**
         * 将数值型字符串转换为固定小数位数的数值型字符串, 无法转换默认输出 '0.00'
         * @param {number} fixed - 结果数字的小数位数，默认为2
         * @returns {string} - 返回固定小数位数的数值型字符串
         */
        toFixed(fixed?: number): string;
        /**
         * 加法运算
         * @param {number | string} arg2 - 加数
         * @returns {string} 加法运算的结果
         */
        accAdd(arg2: string | number): string;
        /**
         * 减法运算
         * @param {number | string} arg2 - 减数
         * @returns {string} 减法运算结果
         */
        accSub(arg2: string | number): string;
        /**
         * 乘法运算
         * @param {number | string} arg2 乘数
         * @return {number} 乘积结果
         */
        accMul(arg2: string | number): number;
        /**
         * 除法运算
         * @param arg2 除数
         * @param retainNum 保留小数点后的位数, 默认3
         * @returns {string} 商
         */
        accDiv(arg2: string | number, retainNum?: number): string;
        /**
         * 比较版本号大小
         * @param {string} v2 版本号2
         * @returns {number} 如果 v1 > v2，返回 1；如果 v1 < v2，返回 -1；如果 v1 = v2，返回 0。
         */
        compareVersion(v2: string): number;
        /**
         * 将驼峰命名转换为连字符 - 命名
         * @param {string} separator 连字符的分隔符，默认为 '-'
         * @returns {string} 连字符命名的字符串
         */
        camelToKebab(separator?: string): string;
        /**
         * 将连字符命名转换为驼峰命名
         * @param {string} separator 连字符的分隔符，默认为 '-'
         * @returns {string} 驼峰命名的字符串
         */
        kebabToCamel(separator?: string): string;
        /**
         * 数值型字符串转换为百分比
         * @param {number} fiexd - 保留的小数位数，默认为 4。
         * @returns {string | number} 返回转换后的百分比值，如果输入无效或小于等于 0，则返回 0。
         */
        to100Rate(fiexd?: number): string | number;
        /**
         * 字符串百分比转换为数值
         * @returns {number} 返回转换后的数字值，如果输入无效或小于等于 0，则返回 0。
         */
        to100Num(): number;
        /**
         * 字符串转数组
         * 扩展这个方法的原因，原生split的分割(''.split(',') => [''])，无法得到一个[]
         * @param {string} separator 分隔符，默认值 ','
         * @returns {any[]} 分割后的数组
         */
        hua5Split(separator?: string): any[];
    }
}
/**
 * 扩展String对象, 执行此方法会将stringUtils中的方法添加到String的原型上
 */
declare function stringExpand(): void;

declare global {
    interface Number {
        /**
         * 将数字转化为带有单位的字符串或对象。如果数字大于或等于 10000，单位为 'w'；如果数字大于或等于 1000，单位为 'k'。
         * @param {boolean} isAddUnit - true，返回带有单位的字符串；false，则返回一个包含数字和单位的对象。
         * @returns {((string | number) | { num: string | number, unit: string })} 转换后带单位的数字, 或者包含数字和单位的对象。
         */
        tokw(isAddUnit?: boolean): (string | number) | {
            num: string | number;
            unit: string;
        };
        /**
         * 为数字添加小数点，并保留2位数，如果已经有小数点则不处理
         * @returns {string} 转换后的数字。
         */
        addDot(): string;
        /**
         * 加法运算
         * @param {number | string} arg2 - 加数
         * @returns {string} 加法运算的结果
         */
        accAdd(arg2: number | string): string;
        /**
         * 减法运算
         * @param {number | string} arg2 - 减数
         * @returns {string} 减法运算结果
         */
        accSub(arg2: number | string): string;
        /**
         * 乘法运算
         * @param {number | string} arg2 乘数
         * @return {number} 乘积结果
         */
        accMul(arg2: number | string): number;
        /**
         * 除法运算
         * @param arg2 除数
         * @param retainNum 保留小数点后的位数, 默认3
         * @returns {string} 商
         */
        accDiv(arg2: number | string, retainNum?: number): string;
        /**
         * 数字转换为百分比
         * @param {number} fiexd - 保留的小数位数，默认为 4。
         * @returns {string | number} 返回转换后的百分比值，如果输入无效或小于等于 0，则返回 0。
         */
        to100Rate(fiexd?: number): string | number;
        /**
         * 百分比转换为数字
         * @returns {number} 返回转换后的数字值，如果输入无效或小于等于 0，则返回 0。
         */
        to100Num(): number;
    }
}
/**
 * 扩展Number对象, 执行此方法会将numberUtils中的方法添加到Number的原型上
 */
declare function numberExpand(): void;

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
        toUrlParams(addPrefix?: boolean, encode?: boolean, option?: QueryString.IStringifyOptions): string;
        /**
         * 对象转url参数
         * 转为编码后的url参数
         * @param {string} prefix 前缀，默认值？
         * @param {string} key 前缀后的固定字符串，默认值encodeParams
         * @returns {string} 转换后的字符串
         */
        toEncodeParams(prefix?: string, key?: string): string;
        /**
         * 深拷贝
         * @returns {any} 深拷贝后的对象
         */
        deepClone(): any;
        /**
         * 深度合并
         * @param {object} source 源对象
         * @returns {object} 拷贝并合并后的对象
         */
        deepMerge(source: any): any;
    }
}
/**
 * 扩展Object对象, 执行此方法会将objectUtils中的方法添加到Object的原型上
 */
declare function objectExpand(): void;

/**
 * 类型扩展
 *
 * @param types
 */
type CanExpandType = "number" | "string" | "object";
declare function typeExpand(types: CanExpandType[]): void;

export { base64_d as Base64, PromiseIntercept, arrayUtils, debounce, dictTransform, guid, numberExpand, numberUtils, objectExpand, objectUtils, QueryString as qs, random, stringExpand, stringUtils, testUtils, throttle, timeUtils, to, typeExpand, typeUtils };
