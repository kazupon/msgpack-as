import 'allocator/arena'

import { FinalizerArray } from '../../assembly/FinalizerArray'

export class FinalizerArrayTests {
  static shouldBePushAndCall (): bool {
    let handler = (data: u8[]): void => {
      data[0]++
    }
    let buf: u8[] = [0]
    let finalizerArray = new FinalizerArray<u8[]>()
    let counter = 8
    for (let i = 0; i < counter; i++) {
      finalizerArray.push(handler, buf)
    }
    finalizerArray.call()
    return buf[0] == 8
  }

  static shouldBeClear (): bool {
    let handler = (data: u8[]): void => {
      data[0]++
    }
    let buf: u8[] = [0]
    let finalizerArray = new FinalizerArray<u8[]>()
    let counter = 8
    for (let i = 0; i < counter; i++) {
      finalizerArray.push(handler, buf)
    }

    finalizerArray.clear()

    for (let i = 0; i < counter; i++) {
      finalizerArray.push(handler, buf)
    }
    finalizerArray.call()

    return buf[0] == 16
  }
}