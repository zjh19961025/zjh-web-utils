import { describe, it } from "vitest"
import { CryptoJS } from "../../src"

describe("CryptoJS", () => {
  it("CryptoJS", () => {
    console.log(CryptoJS.MD5("123456").toString())
    console.log(CryptoJS.SHA1("123456").toString())
    console.log(CryptoJS.SHA256("123456").toString())
    console.log(CryptoJS.SHA512("123456").toString())
  })
})
