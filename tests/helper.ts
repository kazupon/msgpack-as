/// <reference path="../types/webassembly/index.d.ts" />

import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'
import loader from 'assemblyscript/lib/loader'

const readFile = util.promisify(fs.readFile)

const DIGITALS_REGEXP = /([0-9]{1,})/g
const UPPER_ALPHAS_REGEXP = /([A-Z]{1,})/g

export function isThrowable(name: string): boolean {
  return name.toLowerCase().includes('throwable')
}

export function decamelize(str: string): string {
  const t = str
    .replace(DIGITALS_REGEXP, ' $1')
    .replace(UPPER_ALPHAS_REGEXP, m => ' ' + (m.length === 1 ? m.toLowerCase() : m))
  return t.charAt(0).toUpperCase() + t.slice(1)
}

export async function setup(testFileName: string): Promise<any> {
  const pathName = path.resolve(__dirname, `../build/tests/${testFileName}.wasm`)
  const file = await readFile(pathName, null)
  if (!WebAssembly.validate(file)) {
    throw new Error(`WebAssembly binary "${pathName}" file not valid!`)
  }

  let demangle: any = null
  const imports = {
    env: {},
    [`${testFileName}.spec.as`]: {
      log (msgPtr: number) {
        demangle && msgPtr && console.log(`log: ${demangle.getString(msgPtr)}`)
      }
    }
  }
  demangle = loader.instantiateBuffer<any>(file, imports)

  return Promise.resolve<any>(demangle)
}
