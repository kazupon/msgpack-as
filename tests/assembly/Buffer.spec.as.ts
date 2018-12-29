import 'allocator/arena'

import { SBuffer } from '../../assembly/SBuffer'

export class BufferTests {
  static shouldBeWriteSBuffer (): bool {
    let sb = new SBuffer()
    sb.write([0x01])
    sb.write([0x02])
    sb.write([0x03])
    sb.write([0x04])

    if (sb.length != 4) {
      return false
    }

    let expected: u8[] = [0x01, 0x02, 0x03, 0x04]
    let data: Uint8Array = sb.data
    for (let i = 0; i < expected.length; i++) {
      if (expected[i] != data[i]) {
        return false
      }
    }

    return true
  }
}