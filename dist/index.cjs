'use strict';

const TYPE_STR = {
  Boolean: "Boolean",
  Number: "Number",
  String: "String",
  Array: "Array",
  Object: "Object",
  Date: "Date",
  Null: "Null",
  Undefined: "Undefined",
  Function: "Function",
  Symbol: "Symbol",
  BigInt: "BigInt",
  RegExp: "RegExp",
  Map: "Map",
  Set: "Set",
  WeakMap: "WeakMap",
  WeakSet: "WeakSet",
  Error: "Error"
};
const typeUtils = {
  /**
   * 获取类型
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  getType(obj) {
    const toStringType = Object.prototype.toString.call(obj);
    return toStringType.substring(8, toStringType.length - 1);
  },
  /**
   * 是否为数字
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isNumber(obj) {
    return this.getType(obj) === TYPE_STR.Number;
  },
  /**
   * 是否为bool
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isBool(obj) {
    return this.getType(obj) === TYPE_STR.Boolean;
  },
  /**
   * 是否为字符串
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isString(obj) {
    return this.getType(obj) === TYPE_STR.String;
  },
  /**
   * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isObject(obj) {
    return this.getType(obj) === TYPE_STR.Object;
  },
  /**
   * 是否为数组
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isArray(obj) {
    return Array.isArray(obj);
  },
  /**
   * 是否为方法
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isFunction(obj) {
    return this.getType(obj) === TYPE_STR.Function;
  },
  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isNull(obj) {
    const type = this.getType(obj);
    return type === TYPE_STR.Null;
  },
  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isUndefined(obj) {
    const type = this.getType(obj);
    return type == TYPE_STR.Undefined;
  },
  /**
   * 是否为 null  或者 undefined
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isNullOrUndefined(obj) {
    const type = this.getType(obj);
    return type === TYPE_STR.Null || type === TYPE_STR.Undefined;
  },
  /**
   * 判断是否Date对象
   *
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isDate(obj) {
    return this.getType(obj) === TYPE_STR.Date;
  },
  /**
   * 判断是否RegExp对象
   *
   * @param {Object} obj 对象
   * @return {Boolean}
   */
  isRegExp(obj) {
    return this.getType(obj) === TYPE_STR.RegExp;
  }
};

const testUtils = {
  /**
  * 判断是否整数
  *
  * @param {string | number} obj 传入数据
  * @return {Boolean} 是否整数
  * @example
  */
  isInteger(obj) {
    return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && Number(obj) % 1 === 0;
  },
  /**
  * 判断是否小数
  *
  * @param {string | number} obj 传入数据
  * @return {Boolean} 是否小数
  * @example
  */
  isFloat(obj) {
    return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && !this.isInteger(obj);
  },
  /**
   * 是否为普通对象 即 通过对象字面量 {} 或者 new Object() 创建的
   * @param obj 传入数据
   * @returns 是否为普通对象
   */
  isPlainObject(obj) {
    return typeUtils.isObject(obj);
  },
  /**
   * 判断单个值是否为空
   * @param value 传入数据
   * @returns {Boolean} 是否为空
   */
  isSingleEmpty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length === 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        if (value instanceof Date)
          return false;
        return true;
    }
    return false;
  },
  /**
   * 判断一个或多个值是否全部为空
   * @param values 传入多个数据
   * @returns {Boolean} 是否为空
   */
  isEmpty(...values) {
    let isEmpty = false;
    for (let i = 0; i < values.length; ++i) {
      isEmpty = this.isSingleEmpty(values[i]);
      if (!isEmpty)
        break;
    }
    return isEmpty;
  },
  /**
   * 判断一个或多个值是否全部不为空
   * @param values 传入多个数据
   * @returns {Boolean} 是否不为空
   */
  isNotEmpty(...values) {
    let isNotEmpty = false;
    for (let i = 0; i < values.length; ++i) {
      isNotEmpty = !this.isSingleEmpty(values[i]);
      if (!isNotEmpty)
        break;
    }
    return isNotEmpty;
  },
  /**
   * 判断是否为空,数字0 或者 字符0 表示不为空
   * @param value 传入数据
   * @returns {Boolean} 是否不为空
   */
  isEmptyNoZero(value) {
    if (value === 0 || value === "0")
      return false;
    return this.isSingleEmpty(value);
  },
  /**
   * 判断是否为0
   * @param value 传入数据
   * @returns {Boolean} 是否为0
   */
  isZero(value) {
    return value === 0 || value === "0";
  },
  /**
   * 判断是否为数字
   * @param value 传入数据
   * @returns {Boolean} 是否为数字
   */
  isNum(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
  },
  /**
   * 判断是否为非负的整数
   * @param value 传入数据
   * @returns {Boolean}
   */
  isNonNegInt(value) {
    return /^\d+$/.test(value);
  },
  /**
   * 判断是否全为字母
   * @param value 传入数据
   * @returns {Boolean}
   */
  isLetter(value) {
    return /^[a-zA-Z]*$/.test(value);
  },
  /**
   * 判断是否为字母、数字 或 字母数字组合
   * @param value 传入数据
   * @returns {Boolean}
   */
  isLetterOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  },
  /**
   * 判断是否为中文
   * @param value 传入数据
   * @returns {Boolean}
   */
  isChinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  },
  /**
   * 判断是否为短信验证码，或指定位数的纯数字
   * @param value 传入数据
   * @param len 数字的预期长度, 默认6
   * @returns {Boolean}
   */
  isCode(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  },
  /**
   * 判断是否为电子邮箱格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isEmail(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  },
  /**
   * 判断是否为手机或座机格式
   * 全部是数字，或者数字之间至多包含一个 - ，因为座机号包含 -
   * @param value 传入数据
   * @return {Boolean}
   */
  isMobile(value) {
    return /^(?!.*-.*-)(?!.*-$)(?!^-.*)\d+-?\d+$/.test(value);
  },
  /**
   * 判断是否为URL格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isUrl(value) {
    const v = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i");
    return v.test(value);
  },
  /**
   * 判断是否为日期格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isDate(value) {
    if (!value)
      return false;
    if (this.isNum(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  },
  /**
   * 判断是否为ios日期格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isDateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  },
  /**
   * 判断是否为身份证号
   * @param value 传入数据
   * @return {Boolean}
   */
  isIdCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
  },
  /**
   * 判断是否为车牌号
   * @param value 传入数据
   * @return {Boolean}
   */
  isCarNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    } else if (value.length === 8) {
      return xreg.test(value);
    } else {
      return false;
    }
  },
  /**
   * 判断是否在范围内
   * @param {string | number} value 传入数据
   * @param {number[]} param 范围参数, [min, max]
   * @return {Boolean}
   */
  isInRange(value, param) {
    return value >= param[0] && value <= param[1];
  },
  /**
   * 判断长度是否在范围内
   * @param {string | any[]} value 传入数据
   * @param {number[]} param 范围参数, [min, max]
   * @return {Boolean}
   */
  isInLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  },
  /**
   * 判断是否为座机号
   * @param value 传入数据
   * @return {Boolean}
   */
  isLandline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  },
  /**
   * 判断是否为JSON字符串
   * @param value 传入数据
   * @return {Boolean}
   */
  isJsonString(value) {
    if (typeof value == "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj == "object" && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  },
  /**
   * 判断是否为Promise对象
   * @param value 传入数据
   * @return {Boolean}
   */
  isPromise(value) {
    return value instanceof Object && typeof value.then === "function" && typeof value.catch === "function";
  },
  /**
   * 判断是否为图片格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isImage(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  },
  /**
   * 判断是否为视频格式
   * @param value 传入数据
   * @return {Boolean}
   */
  isVideo(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  },
  /**
   * 判断是否为银行卡号
   * @param value 传入数据
   * @return {Boolean}
   */
  isBankCard(value) {
    return /^([1-9]{1})(\d{15,24})$/.test(value);
  }
};

function guid(len = 16, firstU = true, radix = null) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuid = [];
  radix = radix || chars.length;
  if (len) {
    for (let i = 0; i < len; i++)
      uuid[i] = chars[0 | Math.random() * radix];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i === 19 ? r & 3 | 8 : r];
      }
    }
  }
  if (firstU) {
    uuid.shift();
    return "u" + uuid.join("");
  } else {
    return uuid.join("");
  }
}

function to(promise) {
  return promise.then((res) => [null, res]).catch((error) => [error, null]);
}

function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}

class PromiseIntercept {
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
  constructor(interceptFun, { once = false } = {}) {
    /** 是否是在请求等待中*/
    this.isHttp = false;
    /** 是否已经加载过 */
    this.isHaveInit = false;
    /** 是否只执行一次，true：执行成功后往后在调用都不会拦截了 */
    this.once = false;
    /** 等待时进入的放入数组中，执行后在释放 */
    this.eventTask = [];
    /** 传入的拦截方法走了.then() 还是 .catch() */
    this.awaitInterceptState = false;
    /** 拦截器的成功信息 */
    this.handlerRes = null;
    /** 拦截器的失败信息 */
    this.handlerErr = null;
    this.interceptFun = interceptFun;
    this.once = once;
  }
  /**
   * @Description 拦截函数
   * @param arg 请求参数
   * @returns {Promise<any>} 请求结果
   */
  handler(arg) {
    return new Promise(async (resolve, reject) => {
      if (this.isHaveInit && this.once)
        return resolve(this.handlerRes);
      if (!this.isHttp) {
        this.handlerErr = null;
        this.handlerRes = null;
        this.isHttp = true;
        const fun = this.interceptFun(arg);
        if (!!fun && typeof fun.then == "function") {
          await fun.then((res) => {
            this.handlerRes = res;
            this.awaitInterceptState = true;
          }).catch((err) => {
            this.handlerErr = err;
            this.awaitInterceptState = false;
          });
        }
        this.isHttp = false;
        for (let i = 0; i < this.eventTask.length; i++)
          this.eventTask[i].resolve();
        this.eventTask.splice(0);
        if (this.awaitInterceptState)
          this.isHaveInit = true;
      } else if (this.isHttp) {
        const data = {
          resolve: null
        };
        this.eventTask.push(data);
        await this.loading(data);
      }
      if (this.awaitInterceptState)
        resolve(this.handlerRes);
      else
        reject(this.handlerErr);
    });
  }
  // 这个是阻塞等待函数
  loading(data) {
    return new Promise((resove) => {
      data.resolve = resove;
    });
  }
}

if (!String.prototype.padStart) {
  String.prototype.padStart = function(maxLength, fillString = " ") {
    if (Object.prototype.toString.call(fillString) !== "[object String]") {
      throw new TypeError(
        "fillString must be String"
      );
    }
    const str = this;
    if (str.length >= maxLength)
      return String(str);
    const fillLength = maxLength - str.length;
    let times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}
const timeUtils = {
  /**
   * 当前时间的完整显示
   * timeFormat(null, "yyyy-mm-dd hh:MM:ss")
   * @returns yyyy-mm-dd hh:MM:ss 格式时间
   * @example nowFullTime()
   */
  nowFullTime() {
    return this.timeFormat(null, "yyyy-mm-dd hh:MM:ss");
  },
  /**
   * 当前时间时间戳
   * @param isUnix 普通的为 13位(包含毫秒); unix 的为10位，不包含毫秒
   * @returns 时间戳数值
   */
  nowTimestamp(isUnix = false) {
    return this.toTimestamp(null, isUnix);
  },
  /**
   * 转时间
   * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
   *        date不传或传入null 表示取当前时间
   */
  toDate(dateTime) {
    let date;
    if (!dateTime) {
      date = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date = new Date(Number(dateTime));
    } else {
      date = new Date(
        typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
      );
    }
    return date;
  },
  /**
   * 转时间戳
   * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以
   *        date不传或传入null 表示取当前时间
   * @param {boolean} isUnix 是否为unix格式
   */
  toTimestamp(dateTime, isUnix = false) {
    const date = this.toDate(dateTime);
    return isUnix ? Math.floor(date.getTime() / 1e3) : date.valueOf();
  },
  /**
   * 格式化时间，输出时间字符串, yyyy-mm-dd hh:MM:ss
   * @param {String|Number|dateTime} dateTime 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
   * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd。yyyy-mm-dd hh:MM:ss 显示时分秒
   * @returns {string} 返回格式化后的字符串
   */
  timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    const date = this.toDate(dateTime);
    const timeSource = {
      "y": date.getFullYear().toString(),
      // 年
      "m": (date.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date.getDate().toString().padStart(2, "0"),
      // 日
      "h": date.getHours().toString().padStart(2, "0"),
      // 时
      "M": date.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    let key;
    for (key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  },
  /**
   * 距离现在多久
   * @param {String|Number|dateTime} date 时间，时间字符串，时间戳，时间戳字符串都可以。date不传或传入null 表示取当前时间
   * @param {String|Boolean} format
   * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
   * 如果为布尔值false，无论什么时间，都返回多久以前的格式
   * @returns {string} 转化后的内容
   */
  timeFrom(date = null, format = "yyyy-mm-dd") {
    let timer = (/* @__PURE__ */ new Date()).getTime() - this.toTimestamp(date, false);
    timer = Math.floor(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${Math.floor(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${Math.floor(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${Math.floor(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (!format) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${Math.floor(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${Math.floor(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = this.timeFormat(date, format);
        }
    }
    return tips;
  },
  /**
   * 年月日 +  00:00:00
   * @param dateTime date不传或传入null 表示取当前时间
   * @returns 年月日 +  00:00:00
   */
  startTime(dateTime) {
    const date = this.timeFormat(dateTime, "yyyy-mm-dd");
    return date + " 00:00:00";
  },
  /**
   * 年月日 +  23:59:59
   * @param dateTime date不传或传入null 表示取当前时间
   * @returns 年月日 +  23:59:59
   */
  endTime(dateTime) {
    const date = this.timeFormat(dateTime, "yyyy-mm-dd");
    return date + " 23:59:59";
  },
  /**
   * 转时间加文字 例：(2022-12-01 转 2022年12月01日)  ||  (12-01 转 12月01日)；
   * @param {String|Number} dateTime 时间戳，时间字符串（仅支持  转  年月日字符）
   * @param {Boolean} isYear 是否有年 默认为true 转 2022年10月12日, false 转 10月12日
   * @returns {String} 返回格式化后的字符串
   */
  chineseDate(dateTime = null, isYear = true) {
    const date = this.toDate(dateTime);
    const timeSource = {
      "y": date.getFullYear().toString(),
      // 年
      "m": (date.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date.getDate().toString().padStart(2, "0")
      // 日
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    let numStrTime = "";
    if (isYear) {
      numStrTime = timeSource["y"] + "\u5E74" + timeSource["m"] + "\u6708" + timeSource["d"] + "\u65E5";
    } else {
      numStrTime = timeSource["m"] + "\u6708" + timeSource["d"] + "\u65E5";
    }
    return numStrTime;
  }
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

var formats$3 = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

var formats$2 = formats$3;

var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray$2(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray$2(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has$2.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray$2(target) && !isArray$2(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray$2(target) && isArray$2(source)) {
        source.forEach(function (item, i) {
            if (has$2.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has$2.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode$1 = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode$1 = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats$2.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

var utils$2 = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode$1,
    encode: encode$1,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray$1 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats$1['default'];
var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils$1.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats$1.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify$1 = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        obj = utils$1.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray$1(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray$1(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults$1;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats$1['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has$1.call(formats$1.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats$1.formatters[format];

    var filter = defaults$1.filter;
    if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};

var stringify_1 = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray$1(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify$1(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

var utils = utils$2;

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

var parse$1 = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

var stringify = stringify_1;
var parse = parse$1;
var formats = formats$3;

var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

var qs = /*@__PURE__*/getDefaultExportFromCjs(lib);

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
const version = '3.7.7';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
const _mkUriSafe = (src) => src
    .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found');
        u32 = (c0 << 16) | (c1 << 8) | c2;
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = typeof btoa === 'function' ? (bin) => btoa(bin)
    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
        : btoaPolyfill;
const _fromUint8Array = _hasBuffer
    ? (u8a) => Buffer.from(u8a).toString('base64')
    : (u8a) => {
        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
        const maxargs = 0x1000;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c) => {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                + _fromCC(0x80 | (cc & 0x3f)))
                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                    + _fromCC(0x80 | (cc & 0x3f)));
    }
    else {
        var cc = 0x10000
            + (c.charCodeAt(0) - 0xD800) * 0x400
            + (c.charCodeAt(1) - 0xDC00);
        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
            + _fromCC(0x80 | (cc & 0x3f)));
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (u) => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer
    ? (s) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
        ? (s) => _fromUint8Array(_TE.encode(s))
        : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => urlsafe
    ? _mkUriSafe(_encode(src))
    : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc) => {
    switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                | ((0x3f & cccc.charCodeAt(1)) << 12)
                | ((0x3f & cccc.charCodeAt(2)) << 6)
                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800)
                + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                | ((0x3f & cccc.charCodeAt(1)) << 6)
                | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                | (0x3f & cccc.charCodeAt(1)));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (b) => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, bin = '', r1, r2;
    for (let i = 0; i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = typeof atob === 'function' ? (asc) => atob(_tidyB64(asc))
    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
        : atobPolyfill;
//
const _toUint8Array = _hasBuffer
    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a) => _U8Afrom(_atob(a).split('').map(c => c.charCodeAt(0)));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = (a) => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer
    ? (a) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
        ? (a) => _TD.decode(_toUint8Array(a))
        : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = (src) => {
    if (typeof src !== 'string')
        return false;
    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v) => {
    return {
        value: v, enumerable: false, writable: true, configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function () { return decode(this); });
    _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
    _add('toBase64URI', function () { return encode(this, true); });
    _add('toBase64URL', function () { return encode(this, true); });
    _add('toUint8Array', function () { return toUint8Array(this); });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
    _add('toBase64URI', function () { return fromUint8Array(this, true); });
    _add('toBase64URL', function () { return fromUint8Array(this, true); });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins
};

var base64 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Base64: gBase64,
  VERSION: VERSION,
  atob: _atob,
  atobPolyfill: atobPolyfill,
  btoa: _btoa,
  btoaPolyfill: btoaPolyfill,
  btou: btou,
  decode: decode,
  encode: encode,
  encodeURI: encodeURI,
  encodeURL: encodeURI,
  extendBuiltins: extendBuiltins,
  extendString: extendString,
  extendUint8Array: extendUint8Array,
  fromBase64: decode,
  fromUint8Array: fromUint8Array,
  isValid: isValid,
  toBase64: encode,
  toUint8Array: toUint8Array,
  utob: utob,
  version: version
});

const objectUtils = {
  /**
   * 对象转url参数
   * 转为普通的 连接参数, 默认不编码，从而能正常传递中文
   * @param obj 对象
   * @param {boolean} addPrefix  是否添加 ? 前缀
   * @param {boolean} encode 是否使用 decodeURIComponent 编码
   * @param {qs.IStringifyOptions} option qs.stringify第二个参数
   * @returns {string} 转换后的字符串
   */
  toUrlParams(obj, addPrefix = true, encode = false, option = {}) {
    if ([null, void 0].includes(obj))
      return "";
    const opt = {
      addQueryPrefix: addPrefix,
      encode,
      ...option
    };
    return qs.stringify(obj, opt);
  },
  /**
   * 对象转url参数
   * 转为编码后的url参数
   * @param obj 对象
   * @param {string} prefix 前缀，默认值？
   * @param {string} key 前缀后的固定字符串，默认值encodeParams
   * @returns {string} 转换后的字符串
   */
  toEncodeParams(obj, prefix = "?", key = "encodeParams") {
    if ([null, void 0].includes(obj))
      return "";
    return prefix + key + "=" + encodeURIComponent(JSON.stringify(obj));
  },
  /**
   * 深拷贝
   * @param obj 对象
   * @returns {any} 深拷贝后的对象
   */
  deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = Array.isArray(obj) ? [] : {};
    for (const i in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        o[i] = typeof obj[i] === "object" ? this.deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  },
  /**
   * 深度合并
   * @param {object} target 目标对象
   * @param {object} source 源对象
   * @returns {object} 拷贝并合并后的对象
   */
  deepMerge(target, source) {
    target = this.deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return target;
    for (const prop in source) {
      if (!Object.prototype.hasOwnProperty.call(source, prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object" || target[prop] === null) {
          target[prop] = source[prop];
        } else {
          if (typeof source[prop] !== "object" || source[prop] === null) {
            target[prop] = source[prop];
          } else {
            if (Array.isArray(target[prop]) && Array.isArray(source[prop])) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = this.deepMerge(target[prop], source[prop]);
            }
          }
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
};

const numberUtils = {
  /**
   * 将数字转化为带有单位的字符串或对象。如果数字大于或等于 10000，单位为 'w'；如果数字大于或等于 1000，单位为 'k'。
   *
   * @param {string | number} num - 需要转化的数字。
   * @param {boolean} isAddUnit - true，返回带有单位的字符串；false，则返回一个包含数字和单位的对象。
   * @returns {(string | { num: string | number, unit: string })} 转换后带单位的数字, 或者包含数字和单位的对象。
   */
  tokw(num, isAddUnit = true) {
    if (testUtils.isEmpty(num)) {
      return isAddUnit ? 0 : {
        num: "0",
        unit: ""
      };
    }
    let unit = "";
    if (num >= 1e4) {
      num = Math.round(num / 1e3) / 10;
      unit = "w";
    } else if (num >= 1e3) {
      num = Math.round(num / 100) / 10;
      unit = "k";
    }
    return isAddUnit ? num + unit : {
      num,
      unit
    };
  },
  /**
   * 为数字添加小数点，并保留2位数，如果已经有小数点则不处理
   * @param {number | string} num - 需要转换的数字。
   * @returns {string} 转换后的数字。
   */
  isDot(num) {
    const toNum = Number(num);
    const str = String(num);
    if (isNaN(Number(num))) {
      console.error("\u975E\u6570\u503C\u578B\u5B57\u7B26");
      return "0.00";
    }
    return str.indexOf(".") >= 0 ? str : toNum.toFixed(2);
  },
  /**
   * 加法运算
   * @param {number | string} arg1 - 被加数
   * @param {number | string} arg2 - 加数
   * @returns {string} 加法运算的结果
   */
  accAdd(arg1, arg2) {
    let r1, r2;
    try {
      r1 = this.isDot(arg1).split(".")[1].length;
    } catch (e) {
      r1 = 0;
      arg1 = 0;
    }
    try {
      r2 = this.isDot(arg2).split(".")[1].length;
    } catch (e) {
      r2 = 0;
      arg2 = 0;
    }
    const c = Math.abs(r1 - r2);
    const m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
      const cm = Math.pow(10, c);
      if (r1 > r2) {
        arg1 = Number(this.isDot(arg1).replace(".", ""));
        arg2 = Number(this.isDot(arg2).replace(".", "")) * cm;
      } else {
        arg1 = Number(this.isDot(arg1).replace(".", "")) * cm;
        arg2 = Number(this.isDot(arg2).replace(".", ""));
      }
    } else {
      arg1 = Number(this.isDot(arg1).replace(".", ""));
      arg2 = Number(this.isDot(arg2).replace(".", ""));
    }
    const n = r1 >= r2 ? r1 : r2;
    return ((arg1 + arg2) / m).toFixed(n);
  },
  /**
   * 减法运算
   * @param {number | string} arg1 - 被减数
   * @param {number | string} arg2 - 减数
   * @returns {string} 减法运算结果
   */
  accSub(arg1, arg2) {
    let r1, r2;
    try {
      r1 = this.isDot(arg1).split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = this.isDot(arg2).split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    const m = Math.pow(10, Math.max(r1, r2));
    const n = r1 >= r2 ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  /**
   * 乘法运算
   * @param {number | string} arg1 被乘数
   * @param {number | string} arg2 乘数
   * @return {number} 乘积结果
   */
  accMul(arg1, arg2) {
    let m = 0;
    const s1 = this.isDot(arg1);
    const s2 = this.isDot(arg2);
    try {
      m += s1.split(".")[1].length;
    } catch (e) {
    }
    try {
      m += s2.split(".")[1].length;
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  /**
   * 除法运算
   * @param arg1 被除数
   * @param arg2 除数
   * @param retainNum 保留小数点后的位数, 默认3
   * @returns {string} 商
   */
  accDiv(arg1, arg2, retainNum = 3) {
    let t1 = 0;
    let t2 = 0;
    try {
      t1 = this.isDot(arg1).split(".")[1].length;
    } catch (e) {
    }
    try {
      t2 = this.isDot(arg2).split(".")[1].length;
    } catch (e) {
    }
    const r1 = Number(this.isDot(arg1).replace(".", ""));
    const r2 = arg2 == 0 ? 1 : Number(this.isDot(arg2).replace(".", ""));
    return (r1 / r2 * Math.pow(10, t2 - t1)).toFixed(retainNum);
  }
};

const stringUtils = {
  /**
   * 翻转字符串
   * @param {string} str 字符串
   * @return {string} 翻转的结果
   */
  reverse(str) {
    if (testUtils.isEmpty(str))
      return "";
    const newStr = str.split("").reverse().join("");
    return newStr;
  },
  /**
   * 将字符串指定位置的字符替换为指定字符
   * @param {string} str 字符串
   * @param {number} start 在字符串开始处保留的字符数量, 默认4
   * @param {number} end 在字符串结束处保留的字符数量, 默认4
   * @param {string} replaceStr 替换的字符串, 默认为*
   * @return {string} 替换后的字符串
  */
  hideChar(str, start = 4, end = 4, replaceStr = "*") {
    if (str && str.length > start + end) {
      const middle = replaceStr.repeat(str.length - start - end);
      const reg = new RegExp("(.{" + start + "}).*(.{" + end + "})");
      const result = str.replace(reg, `$1${middle}$2`);
      return result;
    } else {
      return str;
    }
  },
  /**
   * 金额 添加 + 或 - 号
   * @param {number | string} val 金额
   * @param {string} unit 单位, 只能是 + 或 -
   * @returns {string} 带符号的金额
   */
  moneyUnit(val, unit = "+") {
    const num = val.toString();
    const result = "";
    if (unit == "+") {
      if (num.includes("+")) {
        return num;
      } else {
        return Number(num) > 0 ? `+${num}` : num;
      }
    }
    if (unit == "-") {
      if (num.includes("-")) {
        return num;
      } else {
        return `-${num}`;
      }
    }
    return result;
  },
  /**
   * 去除字符串指定位置的空格
   * @param {string} str 字符串
   * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
   * @returns {string} 去除空格后的字符串
   */
  trim(str, pos = "both") {
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    } else if (pos == "left") {
      return str.replace(/^\s*/, "");
    } else if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    } else if (pos == "all") {
      return str.replace(/\s+/g, "");
    } else {
      return str;
    }
  },
  /**
   * 去除字符左边空格
   * @param {string} str 字符串
   * @returns {string} 去除空格后的字符串
   */
  trimLeft(str) {
    return str.replace(/^\s*/, "");
  },
  /**
   * 去除字符右边空格
   * @param {string} str 字符串
   * @returns {string} 去除空格后的字符串
   */
  trimRight(str) {
    return str.replace(/(\s*$)/g, "");
  },
  /**
   * 去除字符中的所有空格
   * @param {string} str 字符串
   * @returns {string} 去除空格后的字符串
   */
  trimAll(str) {
    return str.replace(/\s+/g, "");
  },
  /**
   * 去除字符中的指定字符
   * @param {string} str 字符串
   * @param {string} char 要去除的字符
   * @param {string} pos 去除位置, both:去除前后空格(默认), all:去除所有空格, left:去除左边空格, right:去除右边空格,
   * @returns {string} 去除空格后的字符串
   */
  trimChar(str, char, pos = "both") {
    if (char) {
      if (pos === "left") {
        return str.replace(new RegExp("^\\" + char + "+", "g"), "");
      } else if (pos === "right") {
        return str.replace(new RegExp("\\" + char + "+$", "g"), "");
      } else if (pos === "both") {
        return str.replace(new RegExp("^\\" + char + "+|\\" + char + "+$", "g"), "");
      } else if (pos === "all") {
        return str.replaceAll(char, "");
      }
    }
    return str;
  },
  /**
   * 首字母大写
   * @param {string} str 字符串
   * @returns {string} 首字母大写后的字符串
   */
  firstLetterToUpper(str) {
    if (testUtils.isEmpty(str))
      return str;
    return str[0].toUpperCase() + str.slice(1);
  },
  /**
   * 将url参数字符串转换为对象
   * @param {string} str url参数字符串
   * @param {qs.IParseOptions} option qs.parse的配置项
   * @returns {object} 转换后的url参数对象
   */
  fromUrlParams(str, option = {}) {
    if (str.length <= 0)
      return {};
    const tempArray = str.split("?");
    const tempStr = tempArray.length > 1 ? tempArray[1] : tempArray[0];
    return qs.parse(tempStr, option);
  },
  /**
   * 是否为数值型字符串
   * @param {string} str 字符串
   * @returns {boolean}
   */
  isNumeric(str) {
    const toNum = Number(str);
    if (isNaN(toNum)) {
      return false;
    }
    return true;
  },
  /**
   * 将数值型字符串转换为固定小数位数的数值型字符串, 无法转换默认输出 '0.00'
   * @param {string} str - 需要转换的输入字符串
   * @param {number} fixed - 结果数字的小数位数，默认为2
   * @returns {string} - 返回固定小数位数的数值型字符串
   */
  toFixed(str, fixed = 2) {
    const toNum = Number(str);
    if (isNaN(toNum)) {
      console.error("toNum \u975E\u6570\u503C\u578B\u5B57\u7B26 val = " + str);
      return 0 .toFixed(fixed);
    }
    return toNum.toFixed(fixed);
  },
  /**
   * 加法运算
   * @param {number | string} arg1 - 被加数
   * @param {number | string} arg2 - 加数
   * @returns {string} 加法运算的结果
   */
  accAdd(arg1, arg2) {
    return numberUtils.accAdd(arg1, arg2);
  },
  /**
   * 减法运算
   * @param {number | string} arg1 - 被减数
   * @param {number | string} arg2 - 减数
   * @returns {string} 减法运算结果
   */
  accSub(arg1, arg2) {
    return numberUtils.accSub(arg1, arg2);
  },
  /**
   * 乘法运算
   * @param {number | string} arg1 被乘数
   * @param {number | string} arg2 乘数
   * @return {number} 乘积结果
   */
  accMul(arg1, arg2) {
    return numberUtils.accMul(arg1, arg2);
  },
  /**
   * 除法运算
   * @param arg1 被除数
   * @param arg2 除数
   * @param retainNum 保留小数点后的位数, 默认3
   * @returns {string} 商
   */
  accDiv(arg1, arg2, retainNum = 3) {
    return numberUtils.accDiv(arg1, arg2, retainNum);
  },
  /**
   * 比较版本号大小
   * @param {string} v1 版本号1
   * @param {string} v2 版本号2
   * @returns {number} 如果 v1 > v2，返回 1；如果 v1 < v2，返回 -1；如果 v1 = v2，返回 0。
   */
  compareVersion(v1, v2) {
    const v1Arr = v1.split(".");
    const v2Arr = v2.split(".");
    const len = Math.max(v1.length, v2.length);
    while (v1Arr.length < len) {
      v1Arr.push("0");
    }
    while (v2Arr.length < len) {
      v2Arr.push("0");
    }
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1Arr[i]);
      const num2 = parseInt(v2Arr[i]);
      if (num1 > num2) {
        return 1;
      } else if (num1 < num2) {
        return -1;
      }
    }
    return 0;
  },
  /**
   * 将驼峰命名转换为连字符 - 命名
   * @param {string} str 驼峰命名的字符串
   * @param {string} separator 连字符的分隔符，默认为 '-'
   * @returns {string} 连字符命名的字符串
   */
  camelToKebab(str, separator = "-") {
    if (!/^[A-Za-z]+$/.test(str))
      return str;
    return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
  },
  /**
   * 将连字符命名转换为驼峰命名
   * @param {string} str 连字符命名的字符串
   * @param {string} separator 连字符的分隔符，默认为 '-'
   * @returns {string} 驼峰命名的字符串
   */
  kebabToCamel(str, separator = "-") {
    separator = separator.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const reg = new RegExp(`[^a-zA-Z${separator}]`);
    if (reg.test(str))
      return str;
    const regex = new RegExp(separator + "([a-z])", "g");
    return str.replace(regex, (g) => g[1].toUpperCase());
  }
};

exports.Base64 = base64;
exports.PromiseIntercept = PromiseIntercept;
exports.debounce = debounce;
exports.guid = guid;
exports.numberUtils = numberUtils;
exports.objectUtils = objectUtils;
exports.qs = qs;
exports.random = random;
exports.stringUtils = stringUtils;
exports.testUtils = testUtils;
exports.throttle = throttle;
exports.timeUtils = timeUtils;
exports.to = to;
exports.typeUtils = typeUtils;
