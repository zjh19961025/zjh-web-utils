import { expect, it } from "vitest"
import { guid } from "../../src/index"

it("guid", () => {
  expect(guid(32)).toHaveLength(32)
  expect(guid(24)).toHaveLength(24)
  console.log("guid 32 = ", guid(32))
  console.log("guid 32 = ", guid(24))
})
