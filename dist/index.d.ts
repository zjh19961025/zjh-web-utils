/**
 * 类型相关方法
 */
declare const typeUtils: {
    /**
     * 获取类型
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    getType(obj: any): string;
    /**
     * 是否为数字
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isNumber(obj: any): boolean;
    /**
     * 是否为bool
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isBool(obj: any): boolean;
    /**
     * 是否为字符串
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isString(obj: any): boolean;
    /**
     * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isObject(obj: any): boolean;
    /**
     * 是否为数组
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isArray(obj: any): boolean;
    /**
     * 是否为方法
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isFunction(obj: any): boolean;
    /**
     * 是否为 null  或者 undefined
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isNull(obj: any): boolean;
    /**
     * 是否为 null  或者 undefined
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isUndefined(obj: any): boolean;
    /**
     * 是否为 null  或者 undefined
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isNullOrUndefined(obj: any): boolean;
    /**
     * 判断是否Date对象
     *
     * @param {Object} obj 对象
     * @return {Boolean}
     */
    isDate(obj: any): boolean;
    /**
     * 判断是否RegExp对象
     *
     * @param {Object} obj 对象
     * @return {Boolean}
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
    */
    isInteger(obj: string | number): boolean;
    /**
    * 判断是否小数
    *
    * @param {string | number} obj 传入数据
    * @return {Boolean} 是否小数
    * @example
    */
    isFloat(obj: string | number): boolean;
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
     */
    isSingleEmpty(value: any): boolean;
    /**
     * 判断一个或多个值是否全部为空
     * @param values 传入多个数据
     * @returns {Boolean} 是否为空
     */
    isEmpty(...values: any[]): boolean;
    /**
     * 判断一个或多个值是否全部不为空
     * @param values 传入多个数据
     * @returns {Boolean} 是否不为空
     */
    isNotEmpty(...values: any[]): boolean;
    /**
     * 判断是否为空,数字0 或者 字符0 表示不为空
     * @param value 传入数据
     * @returns {Boolean} 是否不为空
     */
    isEmptyNoZero(value: any): boolean;
    /**
     * 判断是否为0
     * @param value 传入数据
     * @returns {Boolean} 是否为0
     */
    isZero(value: any): boolean;
    /**
     * 判断是否为数字
     * @param value 传入数据
     * @returns {Boolean} 是否为数字
     */
    isNum(value: any): boolean;
    /**
     * 判断是否为非负的整数
     * @param value 传入数据
     * @returns {Boolean}
     */
    isNonNegInt(value: any): boolean;
    /**
     * 判断是否全为字母
     * @param value 传入数据
     * @returns {Boolean}
     */
    isLetter(value: any): boolean;
    /**
     * 判断是否为字母、数字 或 字母数字组合
     * @param value 传入数据
     * @returns {Boolean}
     */
    isLetterOrNum(value: any): boolean;
    /**
     * 判断是否为中文
     * @param value 传入数据
     * @returns {Boolean}
     */
    isChinese(value: any): boolean;
    /**
     * 判断是否为短信验证码，或指定位数的纯数字
     * @param value 传入数据
     * @param len 数字的预期长度, 默认6
     * @returns {Boolean}
     */
    isCode(value: any, len?: number): boolean;
    /**
     * 判断是否为电子邮箱格式
     * @param value 传入数据
     * @return {Boolean}
     */
    isEmail(value: any): boolean;
    /**
     * 判断是否为手机或座机格式
     * 全部是数字，或者数字之间至多包含一个 - ，因为座机号包含 -
     * @param value 传入数据
     * @return {Boolean}
     */
    isMobile(value: any): boolean;
    /**
     * 判断是否为URL格式
     * @param value 传入数据
     * @return {Boolean}
     */
    isUrl(value: any): boolean;
    /**
     * 判断是否为日期格式
     * @param value 传入数据
     * @return {Boolean}
     */
    isDate(value: any): boolean;
    /**
     * 判断是否为ios日期格式
     * @param value 传入数据
     * @return {Boolean}
     */
    isDateISO(value: any): boolean;
    /**
     * 判断是否为身份证号
     * @param value 传入数据
     * @return {Boolean}
     */
    isIdCard(value: any): boolean;
    /**
     * 判断是否为车牌号
     * @param value 传入数据
     * @return {Boolean}
     */
    isCarNo(value: any): boolean;
    /**
     * 判断是否在范围内
     * @param {string | number} value 传入数据
     * @param {number[]} param 范围参数, [min, max]
     * @return {Boolean}
     */
    isInRange(value: string | number, param: number[]): boolean;
    /**
     * 判断长度是否在范围内
     * @param {string | any[]} value 传入数据
     * @param {number[]} param 范围参数, [min, max]
     * @return {Boolean}
     */
    isInLength(value: string | any[], param: number[]): boolean;
    /**
     * 判断是否为座机号
     * @param value 传入数据
     * @return {Boolean}
     */
    isLandline(value: any): boolean;
    /**
     * 判断是否为JSON字符串
     * @param value 传入数据
     * @return {Boolean}
     */
    isJsonString(value: any): boolean;
    /**
     * 判断是否为Promise对象
     * @param value 传入数据
     * @return {Boolean}
     */
    isPromise(value: any): boolean;
    /**
     * 判断是否为图片格式
     * @param value 传入数据
     * @return {Boolean}
     */
    isImage(value: string): boolean;
    /**
     * 判断是否为视频格式
     * @param value 传入数据
     * @return {Boolean}
     */
    isVideo(value: string): boolean;
    /**
     * 判断是否为银行卡号
     * @param value 传入数据
     * @return {Boolean}
     */
    isBankCard(value: any): boolean;
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
     * @example nowFullTime()
     */
    nowFullTime(): string;
    /**
     * 当前时间时间戳
     * @param isUnix 普通的为 13位(包含毫秒); unix 的为10位，不包含毫秒
     * @returns 时间戳数值
     */
    nowTimestamp(isUnix?: boolean): number;
    /**
     * 转时间
     * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
     *        date不传或传入null 表示取当前时间
     */
    toDate(dateTime: string | number | Date | null | undefined): Date;
    /**
     * 转时间戳
     * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
     *        date不传或传入null 表示取当前时间
     * @param {boolean} isUnix 是否为unix格式
     */
    toTimestamp(dateTime: string | number | Date | null | undefined, isUnix?: boolean): number;
    /**
     * 格式化时间，输出时间字符串, yyyy-mm-dd hh:MM:ss
     * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
     * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd。yyyy-mm-dd hh:MM:ss 显示时分秒
     * @returns {string} 返回格式化后的字符串
     */
    timeFormat(dateTime?: string | number | Date | null | undefined, formatStr?: string): string;
    /**
     * 距离现在多久
     * @param {String|Number|dateTime} date 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
     * @param {String|Boolean} format
     * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
     * 如果为布尔值false，无论什么时间，都返回多久以前的格式
     * @returns {string} 转化后的内容
     */
    timeFrom(date?: string | number | Date | null | undefined, format?: string): string;
    /**
     * 年月日 +  00:00:00
     * @param dateTime date不传或传入null 表示取当前时间
     * @returns 年月日 +  00:00:00
     */
    startTime(dateTime: string | number | Date | null | undefined): string;
    /**
     * 年月日 +  23:59:59
     * @param dateTime date不传或传入null 表示取当前时间
     * @returns 年月日 +  23:59:59
     */
    endTime(dateTime: string | number | Date | null | undefined): string;
    /**
     * 转时间加文字 例：(2022-12-01 转 2022年12月01日)  ||  (12-01 转 12月01日)；
     * @param {String|Number} dateTime 时间戳，时间字符串（仅支持  转  年月日字符）
     * @param {Boolean} isYear 是否有年 默认为true 转 2022年10月12日, false 转 10月12日
     * @returns {String} 返回格式化后的字符串
     */
    chineseDate(dateTime?: string | number | Date | null | undefined, isYear?: boolean): string;
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
     */
    toUrlParams(obj: any, addPrefix?: boolean, encode?: boolean, option?: QueryString.IStringifyOptions): string;
    /**
     * 对象转url参数
     * 转为编码后的url参数
     * @param obj 对象
     * @param {string} prefix 前缀，默认值？
     * @param {string} key 前缀后的固定字符串，默认值encodeParams
     * @returns {string} 转换后的字符串
     */
    toEncodeParams(obj: any, prefix?: string, key?: string): string;
    /**
     * 深拷贝
     * @param obj 对象
     * @returns {any} 深拷贝后的对象
     */
    deepClone(obj: any): any;
    /**
     * 深度合并
     * @param {object} target 目标对象
     * @param {object} source 源对象
     * @returns {object} 拷贝并合并后的对象
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
     * @returns {(string | { num: string | number, unit: string })} 转换后带单位的数字, 或者包含数字和单位的对象。
     */
    tokw(num: string | number, isAddUnit?: boolean): string | 0 | {
        num: string | number;
        unit: string;
    };
    /**
     * 为数字添加小数点，并保留2位数，如果已经有小数点则不处理
     * @param {number | string} num - 需要转换的数字。
     * @returns {string} 转换后的数字。
     */
    isDot(num: number | string): string;
    /**
     * 加法运算
     * @param {number | string} arg1 - 被加数
     * @param {number | string} arg2 - 加数
     * @returns {string} 加法运算的结果
     */
    accAdd(arg1: number | string, arg2: number | string): string;
    /**
     * 减法运算
     * @param {number | string} arg1 - 被减数
     * @param {number | string} arg2 - 减数
     * @returns {string} 减法运算结果
     */
    accSub(arg1: number | string, arg2: number | string): string;
    /**
     * 乘法运算
     * @param {number | string} arg1 被乘数
     * @param {number | string} arg2 乘数
     * @return {number} 乘积结果
     */
    accMul(arg1: number | string, arg2: number | string): number;
    /**
     * 除法运算
     * @param arg1 被除数
     * @param arg2 除数
     * @param retainNum 保留小数点后的位数, 默认3
     * @returns {string} 商
     */
    accDiv(arg1: number | string, arg2: number | string, retainNum?: number): string;
};

/**
 * string 相关工具方法
 */
declare const stringUtils: {
    /**
     * 翻转字符串
     * @param {string} str 字符串
     * @return {string} 翻转的结果
     */
    reverse(str: string): string;
    /**
     * 将字符串指定位置的字符替换为指定字符
     * @param {string} str 字符串
     * @param {number} start 在字符串开始处保留的字符数量, 默认4
     * @param {number} end 在字符串结束处保留的字符数量, 默认4
     * @param {string} replaceStr 替换的字符串, 默认为*
     * @return {string} 替换后的字符串
    */
    hideChar(str: string, start?: number, end?: number, replaceStr?: string): string;
    /**
     * 金额 添加 + 或 - 号
     * @param {number | string} val 金额
     * @param {string} unit 单位, 只能是 + 或 -
     * @returns {string} 带符号的金额
     */
    moneyUnit(val: number | string, unit?: string): string;
    /**
     * 去除字符串指定位置的空格
     * @param {string} str 字符串
     * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
     * @returns {string} 去除空格后的字符串
     */
    trim(str: string, pos?: string): string;
    /**
     * 去除字符左边空格
     * @param {string} str 字符串
     * @returns {string} 去除空格后的字符串
     */
    trimLeft(str: string): string;
    /**
     * 去除字符右边空格
     * @param {string} str 字符串
     * @returns {string} 去除空格后的字符串
     */
    trimRight(str: string): string;
    /**
     * 去除字符中的所有空格
     * @param {string} str 字符串
     * @returns {string} 去除空格后的字符串
     */
    trimAll(str: string): string;
    /**
     * 去除字符中的指定字符
     * @param {string} str 字符串
     * @param {string} char 要去除的字符
     * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
     * @returns {string} 去除空格后的字符串
     */
    trimChar(str: string, char: string, pos?: string): string;
    /**
     * 首字母大写
     * @param {string} str 字符串
     * @returns {string} 首字母大写后的字符串
     */
    firstLetterToUpper(str: string): string;
    /**
     * 将url参数字符串转换为对象
     * @param {string} str url参数字符串
     * @param {qs.IParseOptions} option qs.parse的配置项
     * @returns {object} 转换后的url参数对象
     */
    fromUrlParams(str: string, option?: QueryString.IParseOptions): {
        [key: string]: unknown;
    };
    /**
     * 是否为数值型字符串
     * @param {string} str 字符串
     * @returns {boolean}
     */
    isNumeric(str: string): boolean;
    /**
     * 将数值型字符串转换为固定小数位数的数值型字符串, 无法转换默认输出 '0.00'
     * @param {string} str - 需要转换的输入字符串
     * @param {number} fixed - 结果数字的小数位数，默认为2
     * @returns {string} - 返回固定小数位数的数值型字符串
     */
    toFixed(str: string, fixed?: number): string;
    /**
     * 加法运算
     * @param {number | string} arg1 - 被加数
     * @param {number | string} arg2 - 加数
     * @returns {string} 加法运算的结果
     */
    accAdd(arg1: string | number, arg2: string | number): string;
    /**
     * 减法运算
     * @param {number | string} arg1 - 被减数
     * @param {number | string} arg2 - 减数
     * @returns {string} 减法运算结果
     */
    accSub(arg1: string | number, arg2: string | number): string;
    /**
     * 乘法运算
     * @param {number | string} arg1 被乘数
     * @param {number | string} arg2 乘数
     * @return {number} 乘积结果
     */
    accMul(arg1: string | number, arg2: string | number): number;
    /**
     * 除法运算
     * @param arg1 被除数
     * @param arg2 除数
     * @param retainNum 保留小数点后的位数, 默认3
     * @returns {string} 商
     */
    accDiv(arg1: string | number, arg2: string | number, retainNum?: number): string;
    /**
     * 比较版本号大小
     * @param {string} v1 版本号1
     * @param {string} v2 版本号2
     * @returns {number} 如果 v1 > v2，返回 1；如果 v1 < v2，返回 -1；如果 v1 = v2，返回 0。
     */
    compareVersion(v1: string, v2: string): number;
    /**
     * 将驼峰命名转换为连字符 - 命名
     * @param {string} str 驼峰命名的字符串
     * @param {string} separator 连字符的分隔符，默认为 '-'
     * @returns {string} 连字符命名的字符串
     */
    camelToKebab(str: string, separator?: string): string;
    /**
     * 将连字符命名转换为驼峰命名
     * @param {string} str 连字符命名的字符串
     * @param {string} separator 连字符的分隔符，默认为 '-'
     * @returns {string} 驼峰命名的字符串
     */
    kebabToCamel(str: string, separator?: string): string;
};

export { PromiseIntercept, debounce, guid, numberUtils, objectUtils, QueryString as qs, random, stringUtils, testUtils, throttle, timeUtils, to, typeUtils };
