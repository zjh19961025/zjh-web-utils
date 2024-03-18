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
* 判断是否整数
*
* @param {string | number} obj
* @return {Boolean} 是否整数
* @example
*/
declare function isInteger(obj: string | number): boolean;
/**
* 判断是否小数
*
* @param {string | number} obj
* @return {Boolean} 是否小数
* @example
*/
declare function isFloat(obj: string | number): boolean;
/**
 * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
 * @param obj
 * @returns 是否为普通对象
 */
declare function isPlainObject(obj: any): boolean;
/**
 * testUtils
 */
declare const testUtils: {
    isInteger: typeof isInteger;
    isFloat: typeof isFloat;
    isPlainObject: typeof isPlainObject;
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
 * @param {String|Number|dateTime} 时间，时间字符串，时间戳，时间戳字符串都可以
 *        date不传或传入null 表示取当前时间
 */
declare function toDate(dateTime: string | number | Date | null | undefined): Date;
/**
 * 转时间戳
 * @param {String|Number|dateTime} 时间，时间字符串，时间戳，时间戳字符串都可以
 *        date不传或传入null 表示取当前时间
 * @param {boolean} 是否为unix格式
 */
declare function toTimestamp(dateTime: string | number | Date | null | undefined, isUnix?: boolean): number;
/**
 * 格式化时间，输出时间字符串, yyyy-mm-dd hh:MM:ss
 * @param {String|Number|dateTime}时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
 * @param {String} 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd。yyyy-mm-dd hh:MM:ss 显示时分秒
 * @returns {string} 返回格式化后的字符串
 */
declare function timeFormat(dateTime?: string | number | Date | null | undefined, formatStr?: string): string;
/**
 * 距离现在多久
 * @param {String|Number|dateTime} 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
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
    /**
     * 当前时间的格式化输出, 默认为 yyyy-mm-dd hh:MM:ss
     */
    nowFullTime: typeof nowFullTime;
    /**
     * 当前时间的时间戳， 默认为 10 位格式
     */
    nowTimestamp: typeof nowTimestamp;
    /**
     * 转化为时间
     */
    toDate: typeof toDate;
    /**
     * 时间戳
     */
    toTimestamp: typeof toTimestamp;
    /**
     * 时间格式化为字符串
     */
    timeFormat: typeof timeFormat;
    /**
     * 距离现在的时间描述
     */
    timeFrom: typeof timeFrom;
    /**
     *  一天的开始时间
     */
    startTime: typeof startTime;
    /**
     * 一天的结束时间
     */
    endTime: typeof endTime;
    /**
     * 中文日期
     */
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

export { debounce, guid, testUtils, throttle, timeUtils, to, typeUtils };
