/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T = any>(promise: Promise<T>):Promise<any> {
  return promise.then(res => [null, res]).catch(error => [error, null])
}
