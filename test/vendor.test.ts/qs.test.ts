import { describe, it, assert } from "vitest"
import { qs } from "../../src"

describe("vendor", () => {
  it("parse", () => {
    assert.deepEqual(qs.parse('foo[bar][baz]=foobarbaz'), { foo: { bar: { baz: 'foobarbaz' }}})
    assert.deepEqual(qs.parse('a[b][c][d][e][f][g][h][i]=j', { depth: 1 }), { a: { b: { '[c][d][e][f][g][h][i]': 'j' }}})
    assert.deepEqual(qs.parse('a=b&c=d', { parameterLimit: 1 }), { a: 'b' })
    assert.deepEqual(qs.parse('a=b;c=d,e=f', { delimiter: /[;,]/ }), { a: 'b', c: 'd', e: 'f' })
    assert.deepEqual(qs.parse('a.b=c', { allowDots: true }), { a: { b: 'c' }})
  })

  it("stringify", () => {
    assert.equal(qs.stringify({ a: 'b' }), 'a=b')
    assert.equal(qs.stringify({ a: { b: 'c' }}), 'a%5Bb%5D=c')
    assert.equal(qs.stringify({ a: {}}), '')
    assert.equal(qs.stringify({ a: 'b', c: 'd' }, { addQueryPrefix: true }), '?a=b&c=d')
    assert.equal(qs.stringify({ a: 'b', c: 'd' }, { delimiter: ';' }), 'a=b;c=d')
  })
})
