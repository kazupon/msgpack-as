const { readFileSync } = require('fs')
const loader = require('assemblyscript/lib/loader')
const package = require('./package.json')

const wasm = readFileSync(`${__dirname}/build/release/${package.name}.wasm`)

module.exports = loader.instantiateBuffer(wasm)
const demangle = module.exports
demangle.add(1, 1)
