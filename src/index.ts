import { numberExpand } from "./number-expand"
import { objectExpand } from "./object-expand"
import { stringExpand } from "./string-expand"

export * from "./type"
export * from "./test"
export * from './tool'
export * from "./time"
export * from './vendor'
export * from './object'
export * from './number'
export * from './string'
export * from './array'
export * from './string-expand'
export * from './number-expand'
export * from './object-expand'

/**
 * 类型扩展
 *
 * @param types
 */
type CanExpandType = "number" | "string" | "object"
const EXPAND_TYPE_ACTION = {
  "number": numberExpand,
  "string": stringExpand,
  "object": objectExpand,
}
export function typeExpand(types: CanExpandType[]) {
  for (const typeItem of types) {
    EXPAND_TYPE_ACTION[typeItem] && EXPAND_TYPE_ACTION[typeItem]()
  }
}
