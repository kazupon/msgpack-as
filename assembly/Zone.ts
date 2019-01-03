import { ChunkList } from './ChunkList'
import { FinalizerArray } from './FinalizerArray'

const ZONE_CHUNK_SIZE: i32 = 8192
const ZONE_ALIGN: i32 = sizeof<usize>()

export class Zone {
  private chunkSize: i32
  private chunkList: ChunkList<Array<u8>>
  private finalizerArray: FinalizerArray<Array<u8>>

  constructor (chunkSize: i32 = ZONE_CHUNK_SIZE) {
    this.chunkSize = chunkSize
    this.chunkList = new ChunkList<Array<u8>>(chunkSize)
    this.finalizerArray = new FinalizerArray<Array<u8>>()
  }

  allocateAlign (size: i32, align: i32 = ZONE_ALIGN): usize {
    // TODO:
    return changetype<usize>(this)
  }

  allocateNoAlign (size: i32): usize {
    // TODO:
    return changetype<usize>(this)
  }

  pushFinalizer (handler: (data: Array<u8>) => void, data: Array<u8>): void {
    // TODO:
  }

  clear (): void {
    // TODO:
  }

  swap (zone: Zone): void {
  }

  dispose (): void {
    // TODO:
  }
}
