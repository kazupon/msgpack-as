import { Buffer } from './Buffer'

const INIT_SIZE: i32 = 8192

export class SBuffer extends Buffer {
  private buf: Array<u8>
  private size: i32

  constructor (length: i32 = INIT_SIZE) {
    // super() // NOTE: not supported `super` yet in AssemblyScript
    this.init(length)
  }

  protected init (length: i32): void {
    this.size = 0
    this.buf = new Array<u8>(length)
  }

  get length (): i32 {
    return this.size
  }

  get data (): Uint8Array {
    let buf = new Uint8Array(this.size)
    for (let i = 0; i < this.size; i++) {
      buf[i] = this.buf[i]
    }
    return buf
  }

  clear (): void {
    this.size = 0
  }

  write (data: u8[]): void {
    if (this.buf.length - this.size < data.length) {
      this.grow(data.length)
    }

    // TODO: should be refactor (performance)
    for (let i = 0; i < data.length; i++) {
      this.buf[this.size + i] = data[i]
    }

    this.size += data.length
  }

  private grow (length: i32): void {
    let alloc = this.buf.length
    let size = (alloc > 0) ? alloc * 2 : INIT_SIZE

    while (size < this.size + length) {
      let tmp = size * 2
      if (tmp <= size) {
        size = this.size + length
        break
      }
      size = tmp
    }

    this.buf.length = size
  }

  // NOTICE: GC experimental !
  private __gc(): void {
    __gc_mark(changetype<usize>(this.buf))
  }
}
