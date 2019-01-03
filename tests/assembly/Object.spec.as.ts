import 'allocator/arena'

import { Object } from '../../assembly/Object'

export class ObjectTests {
  static shouldBeObject (): bool {
    return changetype<bool>(new Object())
  }
}