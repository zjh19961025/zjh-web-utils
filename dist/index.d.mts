/**
 * 获取类型
 * @param {Object} obj 对象
 * @return {Boolean}
 */
declare function getType(obj: any): string;
/**
 * 判断是否Date对象
 *
 * @param {Object} obj 对象
 * @return {Boolean}
 */
declare function isDate(obj: any): boolean;
/**
 * 判断是否RegExp对象
 *
 * @param {Object} obj 对象
 * @return {Boolean}
 */
declare function isRegExp(obj: any): boolean;
declare const typeUtils: {
    getType: typeof getType;
    isNumber: (obj: any) => boolean;
    isBool: (obj: any) => boolean;
    isString: (obj: any) => boolean;
    isObject: (obj: any) => boolean;
    isArray: (obj: any) => boolean;
    isFunction: (obj: any) => boolean;
    isNull: (obj: any) => boolean;
    isUndefined: (obj: any) => boolean;
    isNullOrUndefined: (obj: any) => boolean;
    isDate: typeof isDate;
    isRegExp: typeof isRegExp;
};

/**
 * testUtils
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
     * 判断多个值是否全部为空
     * @param values 传入多个数据
     * @returns {Boolean} 是否为空
     */
    isEmpty(...values: any[]): boolean;
    /**
     * 判断多个值是否全部不为空
     * @param values 传入多个数据
     * @returns {Boolean} 是否不为空
     */
    isNotEmpty(...values: any[]): boolean;
    /**
     * 判断单个值是否为空,数字0 或者 字符0 表示不为空
     * @param value 传入数据
     * @returns {Boolean} 是否不为空
     */
    isEmptyNoZero(value: any): boolean;
    /**
     * 判断单个值是否为0
     * @param value 传入数据
     * @returns {Boolean} 是否为0
     */
    isZero(value: any): boolean;
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
 * 主要概念：
 * 时间：date, new Date(...), 其实也就是某一时刻
 * 时间戳：Timestamp, 以毫秒数字表示。一个时间戳对应的其实也就是一个时刻
 *        unix 时间戳精确到秒，为10位。其他精确到毫秒，为13位
 * 时间字符：可能为时间，也可能为时间戳
 * 使用：
 *   nowFullTime, // 当前时间的格式化输出
 *   nowTimestamp, // 当前时间的时间戳
 *   toDate, // 转化为时间
 *   toTimestamp, // 时间戳
 *   timeFormat, // 格式化
 *   timeFrom, // 多久前
 *   startTime, // 一天的开始时间
 *   endTime, // 一天的结束时间
 */
/**
 * 当前时间的完整显示
 * timeFormat(null, "yyyy-mm-dd hh:MM:ss")
 * @returns yyyy-mm-dd hh:MM:ss 格式时间
 * @example nowFullTime()
 */
declare function nowFullTime(): string;
/**
 * 当前时间时间戳
 * @param isUnix 普通的为 13位(包含毫秒); unix 的为10位，不包含毫秒
 * @returns 时间戳数值
 */
declare function nowTimestamp(isUnix?: boolean): number;
/**
 * 转时间
 * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
 *        date不传或传入null 表示取当前时间
 */
declare function toDate(dateTime: string | number | Date | null | undefined): Date;
/**
 * 转时间戳
 * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
 *        date不传或传入null 表示取当前时间
 * @param {boolean} isUnix 是否为unix格式
 */
declare function toTimestamp(dateTime: string | number | Date | null | undefined, isUnix?: boolean): number;
/**
 * 格式化时间，输出时间字符串, yyyy-mm-dd hh:MM:ss
 * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
 * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd。yyyy-mm-dd hh:MM:ss 显示时分秒
 * @returns {string} 返回格式化后的字符串
 */
declare function timeFormat(dateTime?: string | number | Date | null | undefined, formatStr?: string): string;
/**
 * 距离现在多久
 * @param {String|Number|dateTime} date 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
 * @param {String|Boolean} format
 * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 * @returns {string} 转化后的内容
 */
declare function timeFrom(date?: string | number | Date | null | undefined, format?: string): string;
/**
 * 年月日 +  00:00:00
 * @param dateTime date不传或传入null 表示取当前时间
 * @returns 年月日 +  00:00:00
 */
declare function startTime(dateTime: string | number | Date | null | undefined): string;
/**
 * 年月日 +  23:59:59
 * @param dateTime date不传或传入null 表示取当前时间
 * @returns 年月日 +  23:59:59
 */
declare function endTime(dateTime: string | number | Date | null | undefined): string;
/**
 * 转时间加文字 例：(2022-12-01 转 2022年12月01日)  ||  (12-01 转 12月01日)；
 * @param {String|Number} dateTime 时间戳，时间字符串（仅支持  转  年月日字符）
 * @param {Boolean} isYear 是否有年 默认为true 转 2022年10月12日, false 转 10月12日
 * @returns {String} 返回格式化后的字符串
 */
declare function chineseDate(dateTime?: string | number | Date | null | undefined, isYear?: boolean): string;
declare const timeUtils: {
    nowFullTime: typeof nowFullTime;
    nowTimestamp: typeof nowTimestamp;
    toDate: typeof toDate;
    toTimestamp: typeof toTimestamp;
    timeFormat: typeof timeFormat;
    timeFrom: typeof timeFrom;
    startTime: typeof startTime;
    endTime: typeof endTime;
    chineseDate: typeof chineseDate;
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

/**
 * 对象转url参数
 * 转为普通的 连接参数, 默认不编码，从而能正常传递中文
 * @param obj 对象
 * @param {boolean} addPrefix  是否添加 ? 前缀
 * @param {boolean} encode 是否使用 decodeURIComponent 编码
 * @param {object} option qs.stringify第二个参数
 * @returns {string} 转换后的字符串
 */
declare function toUrlParams(obj: any, addPrefix?: boolean, encode?: boolean, option?: {
    [key: string]: any;
}): string;
/**
 * 对象转url参数
 * 转为编码后的url参数
 * @param obj 对象
 * @param {string} prefix 前缀，默认值？
 * @param {string} key 前缀后的固定字符串，默认值encodeParams
 * @returns {string} 转换后的字符串
 */
declare function toEncodeParams(obj: any, prefix?: string, key?: string): string;
/**
 * 深拷贝
 * @param obj 对象
 * @returns {any} 深拷贝后的对象
 */
declare function deepClone(obj: any): any;
/**
 * 深度合并
 * @param {object} target 目标对象
 * @param {object} source 源对象
 * @returns {object} 拷贝并合并后的对象
 */
declare function deepMerge(target: any, source: any): any;
declare const objectUtils: {
    toUrlParams: typeof toUrlParams;
    toEncodeParams: typeof toEncodeParams;
    deepClone: typeof deepClone;
    deepMerge: typeof deepMerge;
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

export { debounce, guid, numberUtils, objectUtils, testUtils, throttle, timeUtils, to, typeUtils };
