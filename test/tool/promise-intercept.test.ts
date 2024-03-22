import { it, expect } from "vitest"
import { PromiseIntercept } from "../../src/"

it("PromiseIntercept", async() => {
  let index = 0
  function prmiseFun() {
    return new Promise((resolve) => {
      setTimeout(() => {
        index += 1
        console.log("prmiseFun", index)
        resolve(1)
      }, 800)
    })
  }

  const promises = new PromiseIntercept(prmiseFun)
  async function result() {
    return await promises.handler()
  }

  result()
  result()
  result()
  result()
  result()
  result()
  await result()
  console.log(index)
  expect(index).toBe(1)

  await result()
  console.log(index)
  expect(index).toBe(2)
})
