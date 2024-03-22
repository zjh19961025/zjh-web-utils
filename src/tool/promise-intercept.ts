
/**
 * 功能：对 同一个 promise 的多次调用，保证只调用一次，待第一次调用成功后，其余的才继续执行
 * 一般使用方法：
 * 采用 队列的使用进行处理，保证多次调用只会请求一次
 * 首次调用 那么会创建队列，之后的请求，会使用队列进行阻塞，待第一次完成，再继续执行
 * 1. 首次调用，使用的是请求返回的结果
 * 2. 队列中的调用，继续执行，应该使用的是缓存中的结果
 */
// 示例:
// // 与服务器时间同步相关
// async function syncServerTime(isSecond = false) {
//   // 已经同步过的，那么直接使用 vuex 中的数据
//   if (uni.$mainStore.getValue("serverTimeDiff")) {
//     return getTimestampWithDiff(isSecond)
//   }
//   // 没有同步那么进行服务器时间同步，采用队列的方式进行网络请求，只要第一个请求成功，那么后面的就直接使用 vuex 中的数据
//   return new Promise(async(resolve, reject) => {
//     const [err, res] = await uni.hua5Utils.to(queueSyncServerTime.handler(isSecond))
//     // 这里拿到的结果就是 awaitSyncServerTime 的结果
//     resolve(res)
//   })
// }
// // 采用队列的方式进行网络请求
// const queueSyncServerTime = new InterceptQueue(awaitSyncServerTime)
// async function awaitSyncServerTime(isSecond) {
//   return new Promise(async(resolve, reject) => {
//     // 没有同步过那么就进行时间同步
//     const [err, res] = await getServerTimestamp()
//     if (err) resolve("")

//     const systemTime = new Date().getTime()
//     const timeDiff = res.milliseconds - systemTime
//     uni.$mainStore.setValue("serverTimeDiff", timeDiff)
//     resolve(getTimestampWithDiff(isSecond))
//   })
// }
type InterceptFunction = (arg: any) => Promise<any>;

export class PromiseIntercept {
  /** 是否是在请求等待中*/
  private isHttp = false
  /** 是否已经加载过 */
  private isHaveInit = false
  /** 是否只执行一次，true：执行成功后往后在调用都不会拦截了 */
  private once = false
  /** 等待时进入的放入数组中，执行后在释放 */
  private eventTask: any[] = []
  /** 传入的拦截方法走了.then() 还是 .catch() */
  private awaitInterceptState = false
  /** 拦截器的成功信息 */
  private handlerRes = null
  /** 拦截器的失败信息 */
  private handlerErr = null
  /** 拦截的方法 promise,必须存在resolve或者reject */
  private interceptFun: InterceptFunction
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
  constructor(interceptFun: InterceptFunction, { once = false } = {}) {
    this.interceptFun = interceptFun
    this.once = once
  }
  /**
   * @Description 拦截函数
   * @param arg 请求参数
   * @returns {Promise<any>} 请求结果
   */
  handler(arg?: any) {
    /*
        问题所有接口均需拦截等待传入的函数执行完成，且只执行一次？
        */
    // 是否有时间戳
    //    ||
    // 有直接走接口     无判断是否已经发起请求
    //                        ||      ||
    // 						  ||      没有发起，则发起请求
    // 						  ||
    // 						  ||
    // 已经发起，则等待请求头返回或添加至请求队列
    return new Promise(async(resolve, reject) => {
      // 如果初始化过了，并且是只执行一次的话不在往下走,直接放行
      if (this.isHaveInit && this.once) return resolve(this.handlerRes)
      // 没有在拦截中的，那么拦截阻塞等待拦截执行完成
      if (!this.isHttp) {
        // console.log('没有在拦截中的等待，执行拦截等待操作', this.interceptFun);
        // 重置下拦截信息
        this.handlerErr = null
        this.handlerRes = null
        // 没有请求头也没有发起过请求，则发起请求
        this.isHttp = true
        // 执行获取配置的方法
        const fun = this.interceptFun(arg)
        // 判断是否返回了promise
        if (!!fun && typeof fun.then == 'function') {
          await (fun.then(res => {
            this.handlerRes = res
            this.awaitInterceptState = true
          }).catch(err => {
            this.handlerErr = err
            this.awaitInterceptState = false
          }))
        }

        this.isHttp = false // 请求结束
        // 成功拿到请求头，开始释放请求对列
        // console.log('拦截等待完毕，开始释放队列');
        for (let i = 0; i < this.eventTask.length; i++) this.eventTask[i].resolve()
        this.eventTask.splice(0)
        // 只有处理成功才会设置为true
        if (this.awaitInterceptState) this.isHaveInit = true
      } else if (this.isHttp) {
        // console.log('已经在拦截等待中，先去请求队列等待');
        // 已经在拦截等待中，添加至请求队列等待
        const data = {
          resolve: null,
        }
        // 添加到列队
        this.eventTask.push(data)
        // 阻塞
        await this.loading(data)
      }
      // console.log('释放队列完毕，放行');
      // 放行 如果外部不在意这里走的是resolve还是reject，可以通过 try{}catch(e){} 或者 .then .catch 抓取处理
      if (this.awaitInterceptState) resolve(this.handlerRes)
      else reject(this.handlerErr)
    })
  }

  // 这个是阻塞等待函数
  private loading(data: any): Promise<void> {
    return new Promise((resove) => {
      data.resolve = resove
    })
  }
}
