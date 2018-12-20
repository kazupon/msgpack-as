import 'allocator/arena'
import { add } from '../../assembly/index'

declare function log(str: string): void

export class AddTests {
  static should1Plus1Equal2(): bool {
    log('checking 1 + 1 ...')
    return add(1, 1) == 2
  }
}
