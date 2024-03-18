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
function getType(obj) {
  const toStringType = Object.prototype.toString.call(obj);
  return toStringType.substring(8, toStringType.length - 1);
}
const isNumber = function(obj) {
  return getType(obj) === TYPE_STR.Number;
};
const isBool = function(obj) {
  return getType(obj) === TYPE_STR.Boolean;
};
const isString = function(obj) {
  return getType(obj) === TYPE_STR.String;
};
const isObject = function(obj) {
  return getType(obj) === TYPE_STR.Object;
};
const isArray = function(obj) {
  return Array.isArray(obj);
};
const isFunction = function(obj) {
  return getType(obj) === TYPE_STR.Function;
};
const isNull = function(obj) {
  const type = getType(obj);
  return type === TYPE_STR.Null;
};
const isUndefined = function(obj) {
  const type = getType(obj);
  return type == TYPE_STR.Undefined;
};
const isNullOrUndefined = function(obj) {
  const type = getType(obj);
  return type === TYPE_STR.Null || type === TYPE_STR.Undefined;
};
function isDate(obj) {
  return getType(obj) === TYPE_STR.Date;
}
function isRegExp(obj) {
  return getType(obj) === TYPE_STR.RegExp;
}
const typeUtils = {
  getType,
  isNumber,
  isBool,
  isString,
  isObject,
  isArray,
  isFunction,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isDate,
  isRegExp
};

function isInteger(obj) {
  return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && Number(obj) % 1 === 0;
}
function isFloat(obj) {
  return !typeUtils.isNull(obj) && !isNaN(Number(obj)) && !typeUtils.isArray(obj) && !isInteger(obj);
}
function isPlainObject(obj) {
  return typeUtils.isObject(obj);
}
const testUtils = {
  isInteger,
  isFloat,
  isPlainObject
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
function nowFullTime() {
  return timeFormat(null, "yyyy-mm-dd hh:MM:ss");
}
function nowTimestamp(isUnix = false) {
  return toTimestamp(null, isUnix);
}
function toDate(dateTime) {
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
}
function toTimestamp(dateTime, isUnix = false) {
  const date = toDate(dateTime);
  return isUnix ? Math.floor(date.getTime() / 1e3) : date.valueOf();
}
function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
  const date = toDate(dateTime);
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
}
function timeFrom(date = null, format = "yyyy-mm-dd") {
  let timer = (/* @__PURE__ */ new Date()).getTime() - toTimestamp(date, false);
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
        tips = timeFormat(date, format);
      }
  }
  return tips;
}
function startTime(dateTime) {
  const date = timeFormat(dateTime, "yyyy-mm-dd");
  return date + " 00:00:00";
}
function endTime(dateTime) {
  const date = timeFormat(dateTime, "yyyy-mm-dd");
  return date + " 23:59:59";
}
function chineseDate(dateTime = null, isYear = true) {
  const date = toDate(dateTime);
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
const timeUtils = {
  /**
   * 当前时间的格式化输出, 默认为 yyyy-mm-dd hh:MM:ss
   */
  nowFullTime,
  /**
   * 当前时间的时间戳， 默认为 10 位格式
   */
  nowTimestamp,
  /**
   * 转化为时间
   */
  toDate,
  /**
   * 时间戳
   */
  toTimestamp,
  /**
   * 时间格式化为字符串
   */
  timeFormat,
  /**
   * 距离现在的时间描述
   */
  timeFrom,
  /**
   *  一天的开始时间
   */
  startTime,
  /**
   * 一天的结束时间
   */
  endTime,
  /**
   * 中文日期
   */
  chineseDate
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

export { debounce, guid, testUtils, throttle, timeUtils, to, typeUtils };
