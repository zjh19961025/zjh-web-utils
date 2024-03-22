import { describe, it } from "vitest"
import { Base64 } from "../../src"

describe("Base64", () => {
  it("Base64", () => {
    console.log(Base64.encode("123"))
    console.log(Base64.decode("MTIz"))
    console.log(Base64.atob("123"))
    console.log(Base64.btoa("123"))
  })
})
