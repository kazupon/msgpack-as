import 'allocator/arena'

import { Finalizer } from '../../assembly/Finalizer'

export class FinalizerTests {
  static shouldBeCall (): bool {
    let handler = (data: u8[]): void => {
      data[0] = 0x02
    }
    let buf: u8[] = [0x01]
    let finalizer = new Finalizer<u8[]>(handler, buf)
    finalizer.call()
    return buf[0] == 0x02
  }
}