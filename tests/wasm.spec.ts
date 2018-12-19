import assert = require('assert')
import wasm from '../'
const { add } = wasm

describe('add', () => {
  it('1 + 1 = 2', () => {
    assert(add(1, 1) === 2)
  })
})
