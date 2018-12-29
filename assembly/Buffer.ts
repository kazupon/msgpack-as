export abstract class Buffer {
    get data (): Uint8Array { return new Uint8Array(1) }
    write (data: u8[]): void { }
    clear (): void { }
  }