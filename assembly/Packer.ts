import { Format } from './Format'
import { Buffer } from './Buffer'

export class Packer<T extends Buffer> {
  private buffer: T

  constructor (buffer: T) {
    this.buffer = buffer
  }

  packNil (): void {
    this.appendBuffer([<u8>Format.NIL])
  }

  packTrue (): void {
    this.appendBuffer([<u8>Format.TRUE])
  }

  packFalse (): void {
    this.appendBuffer([<u8>Format.FALSE])
  }

  packI8 (value: i8): void {
    // TODO:
  }

  packU8 (value: u8): void {
    // TODO:
  }

  packI16 (value: i16): void {
    // TODO:
  }

  packU16 (value: u16): void {
    // TODO:
  }

  packI32 (value: i32): void {
    // TODO:
  }

  packU32 (value: u32): void {
    // TODO:
  }

  packI64 (value: i64): void {
    // TODO:
  }

  packU64 (value: u64): void {
    // TODO:
  }

  // and other ...

  pack (): Uint8Array {
    return this.buffer.data
  }

  dispose (): void {
    // TODO:
  }

  private appendBuffer (data: u8[]): void {
    this.buffer.write(data)
  }

}
