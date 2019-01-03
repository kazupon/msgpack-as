import { Chunk } from './Chunk'

export class ChunkList<T> {
  private chunkSize: i32 // free
  private buffer: Array<T> // ptr
  private head: Chunk<T>

  constructor (chunkSize: i32) {
    this.head = new Chunk<T>(chunkSize)
    this.chunkSize = chunkSize
    this.buffer = this.head.data
  }

  clear (chunkSize: i32): void {
    let chunk = this.head
    while (true) {
      let next = chunk.next
      if (next) {
        chunk.dispose()
        chunk = next
      } else {
        this.head = chunk
        break
      }
    }

    this.head.next = null
    this.chunkSize = chunkSize
    this.buffer = this.head.data
  }

  // TODO: should be checked AssemblyScript memory releasing ...
  dispose (): void {
    let chunk: Chunk<T> | null = this.head
    while (chunk) {
      let next: Chunk<T> | null = chunk.next
      chunk.dispose()
      chunk = next
    }
    memory.free(changetype<usize>(this))
  }
}