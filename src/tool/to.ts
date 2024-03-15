/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to(promise: Promise<any>): Promise<any> {
  return promise.then(res => [null, res]).catch(error => [error, null])
}
