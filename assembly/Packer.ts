import { SimpleBuffer } from './SimpleBuffer'

export class Packer<T extends SimpleBuffer> {
  private buffer: T

  constructor (buffer: T) {
    this.buffer = buffer
  }

  packNil (): void {
    this.buffer.append([<u8>0xc0])
  }

  packTrue (): void {
    // TODO:
  }

  packFalse (): void {
    // TODO:
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

  pack (): Uint8Array | null {
    // TODO:
    return null
  }

  dispose (): void {
    // TODO:
  }
}
