
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
export function random(min: number, max: number) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1
    return Math.floor(Math.random() * gab + min)
  } else {
    return 0
  }
}
