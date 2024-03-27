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

var CryptoJS$1 = = CryptoJS;

type WordArray = CryptoJS.lib.WordArray;
type CipherParams = CryptoJS.lib.CipherParams;
type X64Word = CryptoJS.x64.Word;

/**
 * Encoding strategy.
 */
interface Encoder {
    /**
     * Converts a word array to a hex string.
     *
     * @param wordArray The word array.
     *
     * @return The hex string.
     *
     * @example
     *
     *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
     */
    stringify(wordArray: WordArray): string;
    /**
     * Converts a hex string to a word array.
     *
     * @param hexStr The hex string.
     *
     * @return The word array.
     *
     * @example
     *
     *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
     */
    parse(str: string): WordArray;
}

/**
 * Abstract hasher template.
 */
interface Hasher {
    /**
     * The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    blockSize: number;
    /**
     * Resets this hasher to its initial state.
     *
     * @example
     *
     *     hasher.reset();
     */
    reset(): void;
    /**
     * Updates this hasher with a message.
     *
     * @param messageUpdate The message to append.
     *
     * @return This hasher.
     *
     * @example
     *
     *     hasher.update('message');
     *     hasher.update(wordArray);
     */
    update(messageUpdate: WordArray | string): this;
    /**
     * Finalizes the hash computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param messageUpdate (Optional) A final message update.
     *
     * @return The hash.
     *
     * @example
     *
     *     var hash = hasher.finalize();
     *     var hash = hasher.finalize('message');
     *     var hash = hasher.finalize(wordArray);
     */
    finalize(messageUpdate?: WordArray | string): WordArray;
}

interface HasherStatic {
    /**
     * Initializes a newly created hasher.
     *
     * @param cfg (Optional) The configuration options to use for this hash computation.
     *
     * @example
     *
     *     var hasher = CryptoJS.algo.SHA256.create();
     */
    create(cfg?: object): Hasher;
}

interface HasherHelper {
    (message: WordArray | string, cfg?: object): WordArray;
}

interface HmacHasherHelper {
    (message: WordArray | string, key: WordArray | string): WordArray;
}

/**
 * Abstract base cipher template.
 */
interface Cipher {
    /**
     * This cipher's key size. Default: 4 (128 bits)
     */
    keySize: number;
    /**
     * This cipher's IV size. Default: 4 (128 bits)
     */
    ivSize: number;
    /**
     * A constant representing encryption mode.
     */
    readonly _ENC_XFORM_MODE: number;
    /**
     * A constant representing decryption mode.
     */
    readonly _DEV_XFORM_MODE: number;

    /**
     * Resets this cipher to its initial state.
     *
     * @example
     *
     *     cipher.reset();
     */
    reset(): void;

    /**
     * Adds data to be encrypted or decrypted.
     *
     * @param dataUpdate The data to encrypt or decrypt.
     *
     * @return The data after processing.
     *
     * @example
     *
     *     var encrypted = cipher.process('data');
     *     var encrypted = cipher.process(wordArray);
     */
    process(dataUpdate: WordArray | string): WordArray;

    /**
     * Finalizes the encryption or decryption process.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param dataUpdate The final data to encrypt or decrypt.
     *
     * @return The data after final processing.
     *
     * @example
     *
     *     var encrypted = cipher.finalize();
     *     var encrypted = cipher.finalize('data');
     *     var encrypted = cipher.finalize(wordArray);
     */
    finalize(dataUpdate?: WordArray | string): WordArray;
}

interface CipherStatic {
    /**
     * Creates this cipher in encryption mode.
     *
     * @param key The key.
     * @param cfg (Optional) The configuration options to use for this operation.
     *
     * @return A cipher instance.
     *
     * @example
     *
     *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
     */
    createEncryptor(key: WordArray, cfg?: CipherOption): Cipher;

    /**
     * Creates this cipher in decryption mode.
     *
     * @param key The key.
     * @param cfg (Optional) The configuration options to use for this operation.
     *
     * @return A cipher instance.
     *
     * @example
     *
     *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
     */
    createDecryptor(key: WordArray, cfg?: CipherOption): Cipher;

    /**
     * Initializes a newly created cipher.
     *
     * @param xformMode Either the encryption or decryption transormation mode constant.
     * @param key The key.
     * @param cfg (Optional) The configuration options to use for this operation.
     *
     * @example
     *
     *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
     */
    create(xformMode: number, key: WordArray, cfg?: CipherOption): Cipher;
}

interface CipherHelper {
    encrypt(message: WordArray | string, key: WordArray | string, cfg?: CipherOption): CipherParams;
    decrypt(ciphertext: CipherParams | string, key: WordArray | string, cfg?: CipherOption): WordArray;
}

/**
 * Configuration options.
 */
interface CipherOption {
    /**
     * The IV to use for this operation.
     */
    iv?: WordArray | undefined;
    format?: Format | undefined;
    [key: string]: any;
}

interface Mode {
    /**
     * Processes the data block at offset.
     *
     * @param words The data words to operate on.
     * @param offset The offset where the block starts.
     *
     * @example
     *
     *     mode.processBlock(data.words, offset);
     */
    processBlock(words: number[], offset: number): void;
}

interface ModeStatic {
    /**
     * Initializes a newly created mode.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
     */
    create(cipher: Cipher, iv: number[]): Mode;
}

/**
 * Abstract base block cipher mode template.
 */
interface BlockCipherMode {
    Encryptor: ModeStatic;
    Decryptor: ModeStatic;
    /**
     * Creates this mode for encryption.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
     */
    createEncryptor(cipher: Cipher, iv: number[]): Mode;

    /**
     * Creates this mode for decryption.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
     */
    createDecryptor(cipher: Cipher, iv: number[]): Mode;
}

/**
 * Abstract base block cipher mode template.
 */
interface BlockCipherMode {
    /**
     * Creates this mode for encryption.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
     */
    createEncryptor(cipher: Cipher): Mode;
}

/**
 * Padding strategy.
 */
interface Padding {
    /**
     * Pads data using the algorithm defined in PKCS #5/7.
     *
     * @param data The data to pad.
     * @param blockSize The multiple that the data should be padded to.
     *
     * @example
     *
     *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
     */
    pad(data: WordArray, blockSize: number): void;

    /**
     * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
     *
     * @param data The data to unpad.
     *
     * @example
     *
     *     CryptoJS.pad.Pkcs7.unpad(wordArray);
     */
    unpad(data: WordArray): void;
}
/**
 * Formatting strategy.
 */
interface Format {
    /**
     * Converts a cipher params object to an OpenSSL-compatible string.
     *
     * @param cipherParams The cipher params object.
     *
     * @return The OpenSSL-compatible string.
     *
     * @example
     *
     *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
     */
    stringify(cipherParams: CipherParams): string;

    /**
     * Converts an OpenSSL-compatible string to a cipher params object.
     *
     * @param openSSLStr The OpenSSL-compatible string.
     *
     * @return The cipher params object.
     *
     * @example
     *
     *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
     */
    parse(str: string): CipherParams;
}

/**
 * An array of 64-bit words.
 */
interface X64WordArray {
    /**
     * The array of CryptoJS.x64.Word objects.
     */
    words: number[];
    /**
     * The number of significant bytes in this word array.
     */
    sigBytes: number;

    /**
     * Converts this 64-bit word array to a 32-bit word array.
     *
     * @return This word array's data as a 32-bit word array.
     *
     * @example
     *
     *     var x32WordArray = x64WordArray.toX32();
     */
    toX32(): WordArray;

    /**
     * Creates a copy of this word array.
     *
     * @return The clone.
     *
     * @example
     *
     *     var clone = x64WordArray.clone();
     */
    clone(): X64WordArray;
}

/**
 * Configuration options.
 */
interface KDFOption {
    /**
     * The key size in words to generate.
     */
    keySize?: number | undefined;
    /**
     * The hasher to use.
     */
    hasher?: HasherStatic | undefined;
    /**
     * The number of iterations to perform.
     */
    iterations?: number | undefined;
}

declare global {
    namespace CryptoJS {
        /**
         * Library namespace.
         */
        export namespace lib {
            /**
             * Base object for prototypal inheritance.
             */
            const Base: {
                /**
                 * Creates a new object that inherits from this object.
                 *
                 * @param overrides Properties to copy into the new object.
                 *
                 * @return The new object.
                 *
                 * @example
                 *
                 *     var MyType = CryptoJS.lib.Base.extend({
                 *         field: 'value',
                 *
                 *         method: function () {
                 *         }
                 *     });
                 */
                extend(overrides: object): any;

                /**
                 * Extends this object and runs the init method.
                 * Arguments to create() will be passed to init().
                 *
                 * @return The new object.
                 *
                 * @example
                 *
                 *     var instance = MyType.create();
                 */
                create(...args: any[]): any;

                /**
                 * Copies properties into this object.
                 *
                 * @param properties The properties to mix in.
                 *
                 * @example
                 *
                 *     MyType.mixIn({
                 *         field: 'value'
                 *     });
                 */
                mixIn(properties: object): any;
            };

            /**
             * An array of 32-bit words.
             */
            interface WordArray {
                /**
                 * The array of 32-bit words.
                 */
                words: number[];
                /**
                 * The number of significant bytes in this word array.
                 */
                sigBytes: number;
                /**
                 * Converts this word array to a string.
                 *
                 * @param encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
                 *
                 * @return The stringified word array.
                 *
                 * @example
                 *
                 *     var string = wordArray + '';
                 *     var string = wordArray.toString();
                 *     var string = wordArray.toString(CryptoJS.enc.Utf8);
                 */
                toString(encoder?: Encoder): string;

                /**
                 * Concatenates a word array to this word array.
                 *
                 * @param wordArray The word array to append.
                 *
                 * @return This word array.
                 *
                 * @example
                 *
                 *     wordArray1.concat(wordArray2);
                 */
                concat(wordArray: WordArray): this;

                /**
                 * Removes insignificant bits.
                 *
                 * @example
                 *
                 *     wordArray.clamp();
                 */
                clamp(): void;

                /**
                 * Creates a copy of this word array.
                 *
                 * @return The clone.
                 *
                 * @example
                 *
                 *     var clone = wordArray.clone();
                 */
                clone(): WordArray;
            }
            const WordArray: {
                /**
                 * Initializes a newly created word array.
                 *
                 * @param words (Optional) An array of 32-bit words.
                 * @param sigBytes (Optional) The number of significant bytes in the words.
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.lib.WordArray.create();
                 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
                 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
                 */
                create(
                    words?:
                        | number[]
                        | ArrayBuffer
                        | Uint8Array
                        | Int8Array
                        | Uint8ClampedArray
                        | Int16Array
                        | Uint16Array
                        | Int32Array
                        | Uint32Array
                        | Float32Array
                        | Float64Array,
                    sigBytes?: number,
                ): WordArray;
                /**
                 * Creates a word array filled with random bytes.
                 *
                 * @param nBytes The number of random bytes to generate.
                 *
                 * @return The random word array.
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.lib.WordArray.random(16);
                 */
                random(nBytes: number): WordArray;
            };

            const BufferedBlockAlgorithm: any;

            const Hasher: {
                /**
                 * Creates a shortcut function to a hasher's object interface.
                 *
                 * @param hasher The hasher to create a helper for.
                 *
                 * @return The shortcut function.
                 *
                 * @example
                 *
                 *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
                 */
                _createHelper(hasher: HasherStatic): HasherHelper;
                /**
                 * Creates a shortcut function to the HMAC's object interface.
                 *
                 * @param hasher The hasher to use in this HMAC helper.
                 *
                 * @return The shortcut function.
                 *
                 * @example
                 *
                 *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
                 */
                _createHmacHelper(hasher: HasherStatic): HmacHasherHelper;
            };

            const Cipher: {
                /**
                 * Creates shortcut functions to a cipher's object interface.
                 *
                 * @param cipher The cipher to create a helper for.
                 *
                 * @return An object with encrypt and decrypt shortcut functions.
                 *
                 * @example
                 *
                 *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
                 */
                _createHelper(cipher: Cipher): CipherHelper;
            };

            /**
             * A collection of cipher parameters.
             */
            interface CipherParams {
                /**
                 * The raw ciphertext.
                 */
                ciphertext: WordArray;
                /**
                 * The key to this ciphertext.
                 */
                key: WordArray;
                /**
                 * The IV used in the ciphering operation.
                 */
                iv: WordArray;
                /**
                 * The salt used with a key derivation function.
                 */
                salt: WordArray;
                /**
                 * The cipher algorithm.
                 */
                algorithm: CipherStatic;
                /**
                 * The block mode used in the ciphering operation.
                 */
                mode: Mode;
                /**
                 * The padding scheme used in the ciphering operation.
                 */
                padding: Padding;
                /**
                 * The block size of the cipher.
                 */
                blockSize: number;
                /**
                 * The default formatting strategy to convert this cipher params object to a string.
                 */
                formatter: Format;
                /**
                 * Converts this cipher params object to a string.
                 *
                 * @param formatter (Optional) The formatting strategy to use.
                 *
                 * @return The stringified cipher params.
                 *
                 * @throws Error If neither the formatter nor the default formatter is set.
                 *
                 * @example
                 *
                 *     var string = cipherParams + '';
                 *     var string = cipherParams.toString();
                 *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
                 */
                toString(formatter?: Format): string;
            }
            const CipherParams: {
                /**
                 * Initializes a newly created cipher params object.
                 *
                 * @param cipherParams An object with any of the possible cipher parameters.
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.lib.CipherParams.create({
                 *         ciphertext: ciphertextWordArray,
                 *         key: keyWordArray,
                 *         iv: ivWordArray,
                 *         salt: saltWordArray,
                 *         algorithm: CryptoJS.algo.AES,
                 *         mode: CryptoJS.mode.CBC,
                 *         padding: CryptoJS.pad.PKCS7,
                 *         blockSize: 4,
                 *         formatter: CryptoJS.format.OpenSSL
                 *     });
                 */
                create(cipherParams: Partial<CipherParams>): CipherParams;
            };

            /**
             * Abstract base stream cipher template.
             */
            interface StreamCipher extends Cipher {
                /**
                 * The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
                 */
                blockSize: number;
            }

            /**
             * Abstract base block cipher mode template.
             */
            const BlockCipherMode: any;

            /**
             * A cipher wrapper that returns ciphertext as a serializable cipher params object.
             */
            const SerializableCipher: {
                /**
                 * Encrypts a message.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param message The message to encrypt.
                 * @param key The key.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return A cipher params object.
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                encrypt(
                    cipher: CipherStatic,
                    message: WordArray | string,
                    key: WordArray,
                    cfg?: CipherOption,
                ): CipherParams;

                /**
                 * Decrypts serialized ciphertext.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param ciphertext The ciphertext to decrypt.
                 * @param key The key.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return The plaintext.
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                decrypt(
                    cipher: CipherStatic,
                    ciphertext: WordArray | string,
                    key: WordArray,
                    cfg?: CipherOption,
                ): CipherParams;

                /**
                 * Converts serialized ciphertext to CipherParams,
                 * else assumed CipherParams already and returns ciphertext unchanged.
                 *
                 * @param ciphertext The ciphertext.
                 * @param format The formatting strategy to use to parse serialized ciphertext.
                 *
                 * @return The unserialized ciphertext.
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
                 */
                _parse(ciphertext: CipherParams | string, format: Format): CipherParams;
            };

            /**
             * A serializable cipher wrapper that derives the key from a password,
             * and returns ciphertext as a serializable cipher params object.
             */
            const PasswordBasedCipher: {
                /**
                 * Encrypts a message using a password.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param message The message to encrypt.
                 * @param password The password.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return A cipher params object.
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                encrypt(
                    cipher: CipherStatic,
                    message: WordArray | string,
                    password: string,
                    cfg?: CipherOption,
                ): CipherParams;

                /**
                 * Decrypts serialized ciphertext using a password.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param ciphertext The ciphertext to decrypt.
                 * @param password The password.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return The plaintext.
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                decrypt(
                    cipher: CipherStatic,
                    ciphertext: CipherParams | string,
                    password: string,
                    cfg?: CipherOption,
                ): WordArray;
            };
        }
        /**
         * Padding namespace.
         */
        export namespace pad {
            /**
             * PKCS #5/7 padding strategy.
             */
            const Pkcs7: Padding;

            /**
             * ANSI X.923 padding strategy.
             */
            const AnsiX923: Padding;

            /**
             * ISO 10126 padding strategy.
             */
            const Iso10126: Padding;

            /**
             * ISO/IEC 9797-1 Padding Method 2.
             */
            const Iso97971: Padding;

            /**
             * Zero padding strategy.
             */
            const ZeroPadding: Padding;

            /**
             * A noop padding strategy.
             */
            const NoPadding: Padding;
        }

        /**
         * Key derivation function namespace.
         */
        export namespace kdf {
            /**
             * OpenSSL key derivation function.
             */
            const OpenSSL: {
                /**
                 * Derives a key and IV from a password.
                 *
                 * @param password The password to derive from.
                 * @param keySize The size in words of the key to generate.
                 * @param ivSize The size in words of the IV to generate.
                 * @param salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
                 *
                 * @return A cipher params object with the key, IV, and salt.
                 *
                 * @example
                 *
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
                 */
                execute(
                    password: string,
                    keySize: number,
                    ivSize: number,
                    salt?: WordArray | string,
                    hasher?: Hasher,
                ): CipherParams;
            };
        }

        /**
         * Mode namespace.
         */
        export namespace mode {
            /**
             * Cipher Block Chaining mode.
             */
            const CBC: BlockCipherMode;

            /**
             * Cipher Feedback block mode.
             */
            const CFB: BlockCipherMode;
            /**
             * Counter block mode.
             */
            const CTR: BlockCipherMode;
            /**
             * @preserve
             * Counter block mode compatible with  Dr Brian Gladman fileenc.c
             * derived from CryptoJS.mode.CTR
             * Jan Hruby jhruby.web@gmail.com
             */
            const CTRGladman: BlockCipherMode;
            /**
             * Output Feedback block mode.
             */
            const OFB: BlockCipherMode;

            /**
             * Electronic Codebook block mode.
             */
            const ECB: BlockCipherMode;
        }

        /**
         * Format namespace.
         */
        export namespace format {
            /**
             * OpenSSL formatting strategy.
             */
            const OpenSSL: Format;
            const Hex: Format;
        }

        /**
         * Encoder namespace.
         */
        export namespace enc {
            /**
             * Hex encoding strategy.
             */
            const Hex: Encoder;
            /**
             * Latin1 encoding strategy.
             */
            const Latin1: Encoder;
            /**
             * UTF-8 encoding strategy.
             */
            const Utf8: Encoder;
            /**
             * UTF-16 BE encoding strategy.
             */
            const Utf16: Encoder;
            const Utf16BE: Encoder;

            /**
             * UTF-16 LE encoding strategy.
             */
            const Utf16LE: Encoder;
            /**
             * Base64 encoding strategy.
             */
            const Base64: Encoder;
            /**
             * Base64url encoding strategy.
             */
            const Base64url: Encoder;
        }

        /**
         * Algorithm namespace.
         */
        export namespace algo {
            /**
             * MD5 hash algorithm.
             */
            const MD5: HasherStatic;

            /**
             * SHA-1 hash algorithm.
             */
            const SHA1: HasherStatic;

            /**
             * SHA-256 hash algorithm.
             */
            const SHA256: HasherStatic;
            /**
             * SHA-224 hash algorithm.
             */
            const SHA224: HasherStatic;
            /**
             * SHA-512 hash algorithm.
             */
            const SHA512: HasherStatic;

            /**
             * SHA-384 hash algorithm.
             */
            const SHA384: HasherStatic;
            /**
             * SHA-3 hash algorithm.
             */
            const SHA3: HasherStatic;
            /**
             * RIPEMD160 hash algorithm.
             */
            const RIPEMD160: HasherStatic;
            /**
             * HMAC algorithm.
             */
            abstract class HMAC {
                /**
                 * Initializes a newly created HMAC.
                 *
                 * @param hasher The hash algorithm to use.
                 * @param key The secret key.
                 *
                 * @example
                 *
                 *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
                 */
                static create(hasher: HasherStatic, key: WordArray | string): HMAC;
                /**
                 * Resets this HMAC to its initial state.
                 *
                 * @example
                 *
                 *     hmacHasher.reset();
                 */
                reset(): void;

                /**
                 * Updates this HMAC with a message.
                 *
                 * @param messageUpdate The message to append.
                 *
                 * @return This HMAC instance.
                 *
                 * @example
                 *
                 *     hmacHasher.update('message');
                 *     hmacHasher.update(wordArray);
                 */
                update(messageUpdate: WordArray | string): this;

                /**
                 * Finalizes the HMAC computation.
                 * Note that the finalize operation is effectively a destructive, read-once operation.
                 *
                 * @param messageUpdate (Optional) A final message update.
                 *
                 * @return The HMAC.
                 *
                 * @example
                 *
                 *     var hmac = hmacHasher.finalize();
                 *     var hmac = hmacHasher.finalize('message');
                 *     var hmac = hmacHasher.finalize(wordArray);
                 */
                finalize(messageUpdate?: WordArray | string): WordArray;
            }
            /**
             * Password-Based Key Derivation Function 2 algorithm.
             */
            abstract class PBKDF2 {
                /**
                 * Initializes a newly created key derivation function.
                 *
                 * @param cfg (Optional) The configuration options to use for the derivation.
                 *
                 * @example
                 *
                 *     var kdf = CryptoJS.algo.PBKDF2.create();
                 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
                 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
                 */
                static create(cfg?: KDFOption): PBKDF2;

                /**
                 * Computes the Password-Based Key Derivation Function 2.
                 *
                 * @param password The password.
                 * @param salt A salt.
                 *
                 * @return The derived key.
                 *
                 * @example
                 *
                 *     var key = kdf.compute(password, salt);
                 */
                compute(password: WordArray | string, salt: WordArray): WordArray;
            }
            /**
             * This key derivation function is meant to conform with EVP_BytesToKey.
             * www.openssl.org/docs/crypto/EVP_BytesToKey.html
             */
            abstract class EvpKDF {
                /**
                 * Initializes a newly created key derivation function.
                 *
                 * @param cfg (Optional) The configuration options to use for the derivation.
                 *
                 * @example
                 *
                 *     var kdf = CryptoJS.algo.EvpKDF.create();
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
                 */
                static create(cfg?: { keySize: number; hasher?: HasherStatic | undefined; iterations: number }): EvpKDF;

                /**
                 * Derives a key from a password.
                 *
                 * @param password The password.
                 * @param salt A salt.
                 *
                 * @return The derived key.
                 *
                 * @example
                 *
                 *     var key = kdf.compute(password, salt);
                 */
                compute(password: WordArray | string, salt: WordArray): WordArray;
            }

            /**
             * AES block cipher algorithm.
             */
            const AES: CipherStatic;

            /**
             * DES block cipher algorithm.
             */
            const DES: CipherStatic;

            /**
             * Triple-DES block cipher algorithm.
             */
            const TripleDES: CipherStatic;

            /**
             * RC4 stream cipher algorithm.
             */
            const RC4: CipherStatic;

            /**
             * Modified RC4 stream cipher algorithm.
             */
            const RC4Drop: CipherStatic;

            /**
             * Rabbit stream cipher algorithm
             */
            const Rabbit: CipherStatic;

            /**
             * Rabbit stream cipher algorithm.
             *
             * This is a legacy version that neglected to convert the key to little-endian.
             * This error doesn't affect the cipher's security,
             * but it does affect its compatibility with other implementations.
             */
            const RabbitLegacy: CipherStatic;
        }

        /**
         * x64 namespace.
         */
        export namespace x64 {
            /**
             * A 64-bit word.
             */
            interface Word {
                /**
                 * Bitwise NOTs this word.
                 *
                 * @return A new x64-Word object after negating.
                 *
                 * @example
                 *
                 *     var negated = x64Word.not();
                 */
                not(): X64Word;
                /**
                 * Bitwise ANDs this word with the passed word.
                 *
                 * @param word The x64-Word to AND with this word.
                 *
                 * @return A new x64-Word object after ANDing.
                 *
                 * @example
                 *
                 *     var anded = x64Word.and(anotherX64Word);
                 */
                and(word: X64Word): X64Word;

                /**
                 * Bitwise ORs this word with the passed word.
                 *
                 * @param word The x64-Word to OR with this word.
                 *
                 * @return A new x64-Word object after ORing.
                 *
                 * @example
                 *
                 *     var ored = x64Word.or(anotherX64Word);
                 */
                or(word: X64Word): X64Word;

                /**
                 * Bitwise XORs this word with the passed word.
                 *
                 * @param word The x64-Word to XOR with this word.
                 *
                 * @return A new x64-Word object after XORing.
                 *
                 * @example
                 *
                 *     var xored = x64Word.xor(anotherX64Word);
                 */
                xor(word: X64Word): X64Word;
                /**
                 * Shifts this word n bits to the left.
                 *
                 * @param n The number of bits to shift.
                 *
                 * @return A new x64-Word object after shifting.
                 *
                 * @example
                 *
                 *     var shifted = x64Word.shiftL(25);
                 */
                shiftL(n: number): X64Word;
                /**
                 * Shifts this word n bits to the right.
                 *
                 * @param n The number of bits to shift.
                 *
                 * @return A new x64-Word object after shifting.
                 *
                 * @example
                 *
                 *     var shifted = x64Word.shiftR(7);
                 */
                shiftR(n: number): X64Word;
                /**
                 * Rotates this word n bits to the left.
                 *
                 * @param n The number of bits to rotate.
                 *
                 * @return A new x64-Word object after rotating.
                 *
                 * @example
                 *
                 *     var rotated = x64Word.rotL(25);
                 */
                rotL(n: number): X64Word;

                /**
                 * Rotates this word n bits to the right.
                 *
                 * @param n The number of bits to rotate.
                 *
                 * @return A new x64-Word object after rotating.
                 *
                 * @example
                 *
                 *     var rotated = x64Word.rotR(7);
                 */
                rotR(n: number): X64Word;
                /**
                 * Adds this word with the passed word.
                 *
                 * @param word The x64-Word to add with this word.
                 *
                 * @return A new x64-Word object after adding.
                 *
                 * @example
                 *
                 *     var added = x64Word.add(anotherX64Word);
                 */
                add(word: X64Word): X64Word;
            }

            const Word: {
                /**
                 * Initializes a newly created 64-bit word.
                 *
                 * @param high The high 32 bits.
                 * @param low The low 32 bits.
                 *
                 * @example
                 *
                 *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
                 */
                create(high: number, low: number): X64Word;
            };

            /**
             * Initializes a newly created word array.
             *
             * @param words (Optional) An array of CryptoJS.x64.Word objects.
             * @param sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.x64.WordArray.create();
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ]);
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ], 10);
             */
            const WordArray: {
                create(words?: X64WordArray[], sigBytes?: number): X64WordArray;
            };
        }

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.MD5('message');
         *     var hash = CryptoJS.MD5(wordArray);
         */
        export const MD5: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMA'C.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacMD5(message, key);
         */
        export const HmacMD5: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA1('message');
         *     var hash = CryptoJS.SHA1(wordArray);
         */
        export const SHA1: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA1(message, key);
         */
        export const HmacSHA1: HmacHasherHelper;

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA256('message');
         *     var hash = CryptoJS.SHA256(wordArray);
         */
        export const SHA256: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA256(message, key);
         */
        export const HmacSHA256: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA224('message');
         *     var hash = CryptoJS.SHA224(wordArray);
         */
        export const SHA224: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA224(message, key);
         */
        export const HmacSHA224: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA512('message');
         *     var hash = CryptoJS.SHA512(wordArray);
         */
        export const SHA512: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA512(message, key);
         */
        export const HmacSHA512: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA384('message');
         *     var hash = CryptoJS.SHA384(wordArray);
         */
        export const SHA384: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA384(message, key);
         */
        export const HmacSHA384: HmacHasherHelper;

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA3('message');
         *     var hash = CryptoJS.SHA3(wordArray);
         */
        export const SHA3: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA3(message, key);
         */
        export const HmacSHA3: HmacHasherHelper;

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.RIPEMD160('message');
         *     var hash = CryptoJS.RIPEMD160(wordArray);
         */
        export const RIPEMD160: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
         */
        export const HmacRIPEMD160: HmacHasherHelper;
        /**
         * Computes the Password-Based Key Derivation Function 2.
         *
         * @param password The password.
         * @param salt A salt.
         * @param cfg (Optional) The configuration options to use for this computation.
         *
         * @return The derived key.
         *
         * @example
         *
         *     var key = CryptoJS.PBKDF2(password, salt);
         *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
         *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
         */
        export function PBKDF2(password: WordArray | string, salt: WordArray | string, cfg?: KDFOption): WordArray;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
         */
        export const AES: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
         */
        export const DES: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
         */
        export const TripleDES: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
         */
        export const RC4: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
         */
        export const RC4Drop: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
         */
        export const Rabbit: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
         */
        export const RabbitLegacy: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
         */
        export const Blowfish: CipherHelper;

        /**
         * Derives a key from a password.
         *
         * @param password The password.
         * @param salt A salt.
         * @param cfg (Optional) The configuration options to use for this computation.
         *
         * @return The derived key.
         *
         * @example
         *
         *     var key = CryptoJS.EvpKDF(password, salt);
         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
         */
        export function EvpKDF(
            password: WordArray | string,
            salt: WordArray | string,
            cfg?: {
                keySize: number;
                hasher?: HasherStatic | undefined;
                iterations: number;
            },
        ): WordArray;
    }
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
     * @returns {((string | number) | { num: string | number, unit: string })} 转换后带单位的数字, 或者包含数字和单位的对象。
     */
    tokw(num: string | number, isAddUnit?: boolean): string | number | {
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
     * @param {string} unit 单位, 只能是 + 或 -, 默认 +
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
         * 去除字符串指定位置的空格
         * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
         * @returns {string} 去除空格后的字符串
         */
        trim(pos?: string): string;
        /**
         * 去除字符左边空格
         * @returns {string} 去除空格后的字符串
         */
        trimLeft(): string;
        /**
         * 去除字符右边空格
         * @returns {string} 去除空格后的字符串
         */
        trimRight(): string;
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
        isDot(): string;
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

export { base64_d as Base64, CryptoJS$1 as CryptoJS, PromiseIntercept, debounce, guid, numberExpand, numberUtils, objectExpand, objectUtils, QueryString as qs, random, stringExpand, stringUtils, testUtils, throttle, timeUtils, to, typeUtils };
