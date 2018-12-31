import { Chunk } from './Chunk'

export class ChunkList {
  private free: i32
  private ptr: Array<u8>
  private head: Chunk
}