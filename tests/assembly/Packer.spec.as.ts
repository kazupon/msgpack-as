import 'allocator/arena'

import { SBuffer } from '../../assembly/SBuffer'
import { Packer } from '../../assembly/Packer'

export class PackerTests {
  static shouldBePacked(): bool {
    let buffer = new SBuffer()
    let packer = new Packer<SBuffer>(buffer)
    packer.packFalse()
    packer.packNil()
    packer.packTrue()
    let packed = packer.pack()

    let expected: u8[] = [0xc2, 0xc0, 0xc3]
    if (expected.length != packed.length) {
      return false
    }

    for (let i = 0; i < expected.length; i++) {
      if (expected[i] != packed[i]) {
        return false
      }
    }

    return true
  }
}