export class SimpleBuffer {
  private buffer: ArrayBuffer
  private current: i32

  constructor () {
    this.current = 0
    this.buffer = new ArrayBuffer(1024)
  }

  append (data: u8[]): void {
    var size: i32 = this.current
    // TODO: implement
    // this.buffer ...

    size += data.length
    if (size > this.buffer.byteLength) {
      this.grow()
    }

    this.current = size
  }

  grow (): bool {
    // TODO:
    return false
  }

  dispose (): void {
    // TODO:
  }
}
