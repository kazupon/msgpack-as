import 'allocator/arena'

import { ChunkList } from '../../assembly/ChunkList'

export class ChunkListTests {
  static shouldBeWriteSBuffer (): bool {
    let cl = new ChunkList()
    trace('chunklist size', 2, sizeof<ChunkList>(), offsetof<ChunkList>())
    return false
  }
}