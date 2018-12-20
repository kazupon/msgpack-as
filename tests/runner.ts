import test from 'ava'
import { setup, decamelize, isThrowable } from './helper'

export function run (fileName: string) {
  (async () => {
    const instance = await setup(fileName)

    for (const tests in instance) {
      const testsInstance = instance[tests]
      if (isThrowable(tests)) {
        for (const testName in testsInstance) {
          test(decamelize(testName), t => t.throws(() => testsInstance[testName]()))
        }
      } else {
        for (const testName in testsInstance) {
          test(decamelize(testName), t => t.truthy(testsInstance[testName]()))
        }
      }
    }
  })()
}
