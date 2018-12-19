import { readFileSync } from 'fs'

const compiled: WebAssembly.Module = new WebAssembly.Module(readFileSync(__dirname + '/build/optimized.wasm'))
const imports: Object = {}

export default new WebAssembly.Instance(compiled, imports).exports
