const { readFileSync } = require('fs')
const loader = require('assemblyscript/lib/loader')

const imports = {}
const wasm = readFileSync(__dirname + '/build/optimized.wasm')

module.exports = loader.instantiateBuffer(wasm)